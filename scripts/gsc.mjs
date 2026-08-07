// GSC API client — no external deps. Uses service-account JWT -> OAuth token -> Search Console REST.
// Usage:
//   node scripts/gsc.mjs sites
//   node scripts/gsc.mjs query <siteUrl> <days> <dimension[,dimension...]> [rowLimit]
//   node scripts/gsc.mjs report <siteUrl> <days>          (pulls a bundle into scripts/gsc-data/)
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const KEY_FILE = process.env.GSC_KEY_FILE || path.join(import.meta.dirname, 'gsc-key.json')
const key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'))

function b64url(buf) {
  return Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function getToken(scope = 'https://www.googleapis.com/auth/webmasters.readonly') {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claim = b64url(JSON.stringify({
    iss: key.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }))
  const signer = crypto.createSign('RSA-SHA256')
  signer.update(`${header}.${claim}`)
  const sig = b64url(signer.sign(key.private_key))
  const jwt = `${header}.${claim}.${sig}`
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })
  const json = await res.json()
  if (!json.access_token) throw new Error('Token error: ' + JSON.stringify(json))
  return json.access_token
}

async function api(token, urlPath, body) {
  const res = await fetch(`https://searchconsole.googleapis.com/${urlPath}`, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  const json = await res.json()
  if (!res.ok) throw new Error(`API ${res.status}: ${JSON.stringify(json)}`)
  return json
}

function dateNDaysAgo(n) {
  const d = new Date(Date.now() - n * 86400000)
  return d.toISOString().slice(0, 10)
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2)

  // Write-scope commands handle their own token below.
  if (cmd === 'submit-sitemap') {
    const [siteUrl, sitemapUrl] = rest
    const token = await getToken('https://www.googleapis.com/auth/webmasters')
    const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`
    const res = await fetch(url, { method: 'PUT', headers: { Authorization: `Bearer ${token}` } })
    console.log(res.ok ? `OK: sitemap submitted (${res.status})` : `FAIL ${res.status}: ${await res.text()}`)
    return
  }

  if (cmd === 'inspect') {
    const [siteUrl, inspectUrl] = rest
    const token = await getToken()
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ inspectionUrl: inspectUrl, siteUrl }),
    })
    const json = await res.json()
    if (!res.ok) { console.log(`FAIL ${res.status}: ${JSON.stringify(json)}`); return }
    const r = json.inspectionResult?.indexStatusResult || {}
    console.log(JSON.stringify({
      url: inspectUrl,
      verdict: r.verdict, coverageState: r.coverageState,
      robotsTxtState: r.robotsTxtState, indexingState: r.indexingState,
      lastCrawlTime: r.lastCrawlTime, googleCanonical: r.googleCanonical, userCanonical: r.userCanonical,
    }, null, 2))
    return
  }

  if (cmd === 'index-notify') {
    const [notifyUrl] = rest
    const token = await getToken('https://www.googleapis.com/auth/indexing')
    const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: notifyUrl, type: 'URL_UPDATED' }),
    })
    console.log(res.ok ? `OK: ${notifyUrl} notified` : `FAIL ${res.status}: ${await res.text()}`)
    return
  }

  const token = await getToken()

  if (cmd === 'sites') {
    const r = await api(token, 'webmasters/v3/sites')
    console.log(JSON.stringify(r, null, 2))
    return
  }

  if (cmd === 'query') {
    const [siteUrl, days = '28', dims = 'query', rowLimit = '100'] = rest
    const body = {
      startDate: dateNDaysAgo(Number(days)),
      endDate: dateNDaysAgo(1),
      dimensions: dims.split(','),
      rowLimit: Number(rowLimit),
    }
    const r = await api(token, `webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, body)
    console.log(JSON.stringify(r, null, 2))
    return
  }

  if (cmd === 'report') {
    const [siteUrl, days = '28'] = rest
    const outDir = path.join(import.meta.dirname, 'gsc-data')
    fs.mkdirSync(outDir, { recursive: true })
    const base = { startDate: dateNDaysAgo(Number(days)), endDate: dateNDaysAgo(1) }
    const bundles = {
      queries: { ...base, dimensions: ['query'], rowLimit: 250 },
      pages: { ...base, dimensions: ['page'], rowLimit: 250 },
      'query-page': { ...base, dimensions: ['query', 'page'], rowLimit: 1000 },
      countries: { ...base, dimensions: ['country'], rowLimit: 50 },
      devices: { ...base, dimensions: ['device'], rowLimit: 10 },
    }
    const summary = {}
    for (const [name, body] of Object.entries(bundles)) {
      const r = await api(token, `webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, body)
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(r, null, 2))
      summary[name] = (r.rows || []).length
    }
    fs.writeFileSync(path.join(outDir, '_meta.json'), JSON.stringify({ siteUrl, ...base, rows: summary }, null, 2))
    console.log('Saved to scripts/gsc-data/:', JSON.stringify(summary, null, 2))
    return
  }

  console.log('Commands: sites | query <siteUrl> <days> <dims> [rowLimit] | report <siteUrl> <days>')
}

main().catch((e) => { console.error(e.message); process.exit(1) })
