import { NextResponse, type NextRequest } from 'next/server'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/i18n/config'

const PUBLIC_FILE = /\.(.*)$/
const SKIP_PREFIXES = ['/_next', '/api', '/icon.svg', '/apple-icon', '/opengraph-image', '/robots.txt', '/sitemap.xml', '/favicon']

function pickLocale(req: NextRequest): Locale {
  const accept = req.headers.get('accept-language') ?? ''
  const wantsRu = /\bru\b/i.test(accept) && !/\buz\b/i.test(accept)
  return wantsRu ? 'ru' : DEFAULT_LOCALE
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (SKIP_PREFIXES.some((p) => pathname.startsWith(p))) return
  if (PUBLIC_FILE.test(pathname)) return

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return

  const locale = pickLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
