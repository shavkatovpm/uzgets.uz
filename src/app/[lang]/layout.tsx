import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { Geist } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/JsonLd'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LOCALES, LOCALE_HTML_LANG, LOCALE_OG, isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import '../globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

type LayoutParams = { lang: string }

export function generateStaticParams(): LayoutParams[] {
  return LOCALES.map((lang) => ({ lang }))
}

const META_BY_LOCALE: Record<
  Locale,
  { title: string; description: string; ogTitle: string; keywords: string[] }
> = {
  uz: {
    title: `${siteConfig.name} — Telegram Premium va Stars O'zbekistonda sotib olish`,
    description:
      "O'zbekistonda Telegram Premium va Telegram Stars sotib olish. UzCard, Humo va Click orqali to'lov, narxlar bozordagi eng qulaylaridan biri.",
    ogTitle: `${siteConfig.name} — Telegram Premium va Stars`,
    keywords: [
      'telegram premium',
      'telegram stars',
      "telegram premium o'zbekiston",
      'telegram premium uzbekistan',
      'telegram premium narxi',
      'telegram stars sotib olish',
      'telegram premium 3 oylik narxi',
      'telegram premium 6 oylik narxi',
      'telegram premium 12 oylik narxi',
      'telegram premium yillik',
      'telegram stars 50',
      'telegram stars narxi',
      'tg premium',
      'tg stars',
      'uzgets',
      'uzgetsbot',
    ],
  },
  ru: {
    title: `${siteConfig.name} — купить Telegram Premium и Stars в Узбекистане`,
    description:
      'Покупка Telegram Premium и Telegram Stars в Узбекистане. Оплата UzCard, Humo и Click, цены — одни из лучших на рынке.',
    ogTitle: `${siteConfig.name} — Telegram Premium и Stars`,
    keywords: [
      'telegram premium',
      'telegram stars',
      'телеграм премиум',
      'телеграм премиум узбекистан',
      'telegram premium цена',
      'купить телеграм премиум',
      'купить telegram premium',
      'telegram premium 3 месяца',
      'telegram premium 6 месяцев',
      'telegram premium 12 месяцев',
      'telegram premium год',
      'купить telegram stars',
      'telegram stars 50',
      'telegram stars цена',
      'tg premium',
      'tg stars',
      'uzgets',
      'uzgetsbot',
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>
}): Promise<Metadata> {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) return {}
  const lang: Locale = langRaw
  const meta = META_BY_LOCALE[lang]
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: meta.description,
    applicationName: siteConfig.name,
    generator: 'Next.js',
    keywords: meta.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        uz: `/uz`,
        ru: `/ru`,
        'x-default': `/uz`,
      },
    },
    openGraph: {
      type: 'website',
      locale: LOCALE_OG[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => LOCALE_OG[l]),
      siteName: siteConfig.name,
      url: `${siteConfig.url}/${lang}`,
      title: meta.ogTitle,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    category: 'shopping',
  }
}

export const viewport: Viewport = {
  themeColor: '#ecf6f3',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<LayoutParams>
}) {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const dict = getDictionary(lang)

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: META_BY_LOCALE[lang].description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: siteConfig.botUrl,
      availableLanguage: ['Uzbek', 'Russian'],
    },
    areaServed: { '@type': 'Country', name: 'Uzbekistan' },
    sameAs: [siteConfig.botUrl],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: `${siteConfig.url}/${lang}`,
    inLanguage: lang === 'uz' ? 'uz-UZ' : 'ru-RU',
  }

  return (
    <html lang={LOCALE_HTML_LANG[lang]} className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
        <Header lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  )
}
