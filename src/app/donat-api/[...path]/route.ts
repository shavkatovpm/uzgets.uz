/**
 * Faqat lokal dev: brauzer /donat-api/* ni shu yerga yuboradi, biz backend'ga Origin'siz uzatamiz
 * (stars.uzgets.uz CORS'i localhost'ni qabul qilmaydi). Production'da 404.
 */
import { DONAT_API } from '@/lib/donat'

const dev = process.env.NODE_ENV === 'development'

async function proxy(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  if (!dev) return new Response('Not found', { status: 404 })
  const { path } = await ctx.params
  const url = `${DONAT_API}/${path.join('/')}${new URL(req.url).search}`
  const r = await fetch(url, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: req.method === 'POST' ? await req.text() : undefined,
    cache: 'no-store',
  })
  return new Response(await r.text(), { status: r.status, headers: { 'Content-Type': 'application/json' } })
}

export const GET = proxy
export const POST = proxy
