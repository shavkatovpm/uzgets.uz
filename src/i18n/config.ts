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
