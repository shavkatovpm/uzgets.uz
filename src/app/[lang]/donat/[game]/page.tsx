import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DonatPageView } from '@/components/DonatPageView'
import { siteConfig } from '@/config/site'
import { LOCALES, alternatesFor, isLocale, localeUrl, type Locale } from '@/i18n/config'
import { DONAT_GAME_SEO, DONAT_SLUGS, isDonatSlug } from '@/lib/donat'
import { ogImages } from '@/lib/og'

type Params = { lang: string; game: string }

export const revalidate = 60
export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return LOCALES.flatMap((lang) => DONAT_SLUGS.map((game) => ({ lang, game })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang: langRaw, game } = await params
  if (!isLocale(langRaw) || !isDonatSlug(game)) return {}
  const lang: Locale = langRaw
  const s = DONAT_GAME_SEO[game][lang]
  return {
    title: s.title,
    description: s.desc,
    alternates: alternatesFor(lang, `/donat/${game}`),
    openGraph: { ...ogImages, title: s.title, description: s.desc, url: localeUrl(siteConfig.url, lang, `/donat/${game}`) },
  }
}

export default async function DonatGamePage({ params }: { params: Promise<Params> }) {
  const { lang: langRaw, game } = await params
  if (!isLocale(langRaw) || !isDonatSlug(game)) notFound()
  return <DonatPageView lang={langRaw} slug={game} />
}
