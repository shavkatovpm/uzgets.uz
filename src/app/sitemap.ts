import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS, STARS_PACKS } from '@/config/products'
import { LOCALES, type Locale } from '@/i18n/config'

type Entry = MetadataRoute.Sitemap[number]

function withLanguages(path: string, lastModified: Date, opts: { changeFrequency: Entry['changeFrequency']; priority: number }): Entry[] {
  return LOCALES.map((lang: Locale) => {
    const url = `${siteConfig.url}/${lang}${path}`
    return {
      url,
      lastModified,
      changeFrequency: opts.changeFrequency,
      priority: opts.priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${siteConfig.url}/${l}${path}`]),
        ),
      },
    }
  })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...withLanguages('', now, { changeFrequency: 'weekly', priority: 1 }),
    ...withLanguages('/premium', now, { changeFrequency: 'weekly', priority: 0.95 }),
    ...withLanguages('/stars', now, { changeFrequency: 'weekly', priority: 0.9 }),
    ...PREMIUM_PERIODS.flatMap((p) =>
      withLanguages(`/premium/${p.slug}`, now, { changeFrequency: 'monthly', priority: 0.85 }),
    ),
    ...STARS_PACKS.flatMap((s) =>
      withLanguages(`/stars/${s.slug}`, now, {
        changeFrequency: 'monthly',
        priority: [50, 100, 500].includes(s.amount) ? 0.8 : 0.6,
      }),
    ),
    ...withLanguages('/haqimizda', now, { changeFrequency: 'monthly', priority: 0.7 }),
    ...withLanguages('/aloqa', now, { changeFrequency: 'monthly', priority: 0.5 }),
    ...withLanguages('/privacy', now, { changeFrequency: 'yearly', priority: 0.3 }),
    ...withLanguages('/terms', now, { changeFrequency: 'yearly', priority: 0.3 }),
  ]
}
