import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DonatPageView } from '@/components/DonatPageView'
import { siteConfig } from '@/config/site'
import { alternatesFor, isLocale, localeUrl, type Locale } from '@/i18n/config'
import { DONAT_HUB_SEO } from '@/lib/donat'
import { ogImages } from '@/lib/og'

type Params = { lang: string }

// Narxlar backend'dan jonli — sahifa har daqiqada yangilanadi
export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) return {}
  const lang: Locale = langRaw
  const s = DONAT_HUB_SEO[lang]
  return {
    title: s.title,
    description: s.desc,
    alternates: alternatesFor(lang, '/donat'),
    openGraph: { ...ogImages, title: s.title, description: s.desc, url: localeUrl(siteConfig.url, lang, '/donat') },
  }
}

export default async function DonatHubPage({ params }: { params: Promise<Params> }) {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) notFound()
  return <DonatPageView lang={langRaw} />
}
