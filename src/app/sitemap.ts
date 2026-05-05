import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS, STARS_PACKS } from '@/config/products'
import { LOCALES, type Locale } from '@/i18n/config'
import { getPostsSorted } from '@/content/blog'

type Entry = MetadataRoute.Sitemap[number]

// Per-route last-modified dates. Bump only when the route's content actually changes.
// Don't use `new Date()` — it makes every deploy look like a content update to crawlers.
const LAST_MODIFIED = {
  home: new Date('2026-05-01'),
  premium: new Date('2026-05-01'),
  stars: new Date('2026-05-01'),
  premiumInstance: new Date('2026-05-01'),
  starsInstance: new Date('2026-05-01'),
  haqimizda: new Date('2026-05-01'),
  aloqa: new Date('2026-05-01'),
  privacy: new Date('2026-05-01'),
  terms: new Date('2026-05-01'),
  blogIndex: new Date('2026-05-06'),
} as const

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
  return [
    ...withLanguages('', LAST_MODIFIED.home, { changeFrequency: 'weekly', priority: 1 }),
    ...withLanguages('/premium', LAST_MODIFIED.premium, { changeFrequency: 'weekly', priority: 0.95 }),
    ...withLanguages('/stars', LAST_MODIFIED.stars, { changeFrequency: 'weekly', priority: 0.9 }),
    ...PREMIUM_PERIODS.flatMap((p) =>
      withLanguages(`/premium/${p.slug}`, LAST_MODIFIED.premiumInstance, { changeFrequency: 'monthly', priority: 0.85 }),
    ),
    ...STARS_PACKS.flatMap((s) =>
      withLanguages(`/stars/${s.slug}`, LAST_MODIFIED.starsInstance, {
        changeFrequency: 'monthly',
        priority: [50, 100, 500].includes(s.amount) ? 0.8 : 0.6,
      }),
    ),
    ...withLanguages('/blog', LAST_MODIFIED.blogIndex, { changeFrequency: 'weekly', priority: 0.8 }),
    ...getPostsSorted().flatMap((post) =>
      withLanguages(`/blog/${post.slug}`, new Date(post.updatedAt), {
        changeFrequency: 'monthly',
        priority: 0.7,
      }),
    ),
    ...withLanguages('/haqimizda', LAST_MODIFIED.haqimizda, { changeFrequency: 'monthly', priority: 0.7 }),
    ...withLanguages('/aloqa', LAST_MODIFIED.aloqa, { changeFrequency: 'monthly', priority: 0.5 }),
    ...withLanguages('/privacy', LAST_MODIFIED.privacy, { changeFrequency: 'yearly', priority: 0.3 }),
    ...withLanguages('/terms', LAST_MODIFIED.terms, { changeFrequency: 'yearly', priority: 0.3 }),
  ]
}
