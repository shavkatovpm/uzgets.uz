export const LOCALES = ['uz', 'ru'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'uz'

export const LOCALE_NAMES: Record<Locale, string> = {
  uz: "O'zbekcha",
  ru: 'Русский',
}

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  uz: 'uz',
  ru: 'ru',
}

export const LOCALE_OG: Record<Locale, string> = {
  uz: 'uz_UZ',
  ru: 'ru_RU',
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

// Default locale (uz) is served at the root (no /uz prefix).
// Non-default locales keep their prefix (e.g. /ru/blog).
export function localePath(lang: Locale, path: string = '/'): string {
  const normalized = path === '' || path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`
  if (lang === DEFAULT_LOCALE) return normalized
  if (normalized === '/') return `/${lang}`
  return `/${lang}${normalized}`
}

export function localeUrl(siteUrl: string, lang: Locale, path: string = '/'): string {
  const p = localePath(lang, path)
  const base = siteUrl.replace(/\/$/, '')
  return p === '/' ? `${base}/` : `${base}${p}`
}
