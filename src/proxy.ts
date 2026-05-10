import { NextResponse, type NextRequest } from 'next/server'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/i18n/config'

const PUBLIC_FILE = /\.(.*)$/
const SKIP_PREFIXES = ['/_next', '/api', '/icon.svg', '/apple-icon', '/opengraph-image', '/robots.txt', '/sitemap.xml', '/favicon']

const NON_DEFAULT_LOCALES: Locale[] = LOCALES.filter((l) => l !== DEFAULT_LOCALE) as Locale[]

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (SKIP_PREFIXES.some((p) => pathname.startsWith(p))) return
  if (PUBLIC_FILE.test(pathname)) return

  // 1. Permanently redirect /uz and /uz/* → / and /* (default locale lives at root).
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = req.nextUrl.clone()
    const stripped = pathname.slice(`/${DEFAULT_LOCALE}`.length)
    url.pathname = stripped === '' ? '/' : stripped
    return NextResponse.redirect(url, 308)
  }

  // 2. Non-default locales (e.g. /ru, /ru/...) — render as-is.
  const hasNonDefaultLocale = NON_DEFAULT_LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  )
  if (hasNonDefaultLocale) return

  // 3. Anything else (including /) — internally rewrite to /[default-locale]/...
  // The URL bar stays prefix-free; the [lang] route segment receives 'uz'.
  const url = req.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
