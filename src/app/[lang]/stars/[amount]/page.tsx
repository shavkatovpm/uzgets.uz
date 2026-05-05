import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FAQ, type FAQItem } from '@/components/FAQ'
import { BotCTA } from '@/components/BotCTA'
import { JsonLd } from '@/components/JsonLd'
import { AnswerBox } from '@/components/AnswerBox'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, getStarsBySlug, STARS_BASE } from '@/config/products'
import { getStarsPageContent } from '@/config/stars-pages'
import { getPaymentMethods } from '@/config/static-content'
import { formatUzs, formatNumber } from '@/lib/format'
import { type Locale, isLocale } from '@/i18n/config'

type Params = { lang: string; amount: string }
type StaticParams = { amount: string }

export function generateStaticParams(): StaticParams[] {
  return STARS_PACKS.map((s) => ({ amount: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang: langRaw, amount } = await params
  if (!isLocale(langRaw)) return {}
  const lang: Locale = langRaw
  const item = getStarsBySlug(amount)
  if (!item) return {}
  const content = getStarsPageContent(lang, item.slug, item.amount)
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/${lang}/stars/${item.slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${siteConfig.url}/${lang}/stars/${item.slug}`,
      type: 'website',
    },
  }
}

const COMPARISON_AMOUNTS = [50, 100, 500, 1000, 2500] as const

export default async function StarsAmountPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang: langRaw, amount: slugParam } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const item = getStarsBySlug(slugParam)
  if (!item) notFound()

  const content = getStarsPageContent(lang, item.slug, item.amount)
  const PAYMENT_METHODS = getPaymentMethods(lang)
  const amountStr = formatNumber(item.amount)
  const perStar = item.priceUzs / item.amount
  const perStarRounded = Math.round(perStar * 100) / 100

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${amountStr} Telegram Stars`,
    description: content.metaDescription,
    brand: { '@type': 'Brand', name: 'Telegram' },
    category: 'Digital Currency',
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.url}/${lang}/stars/${item.slug}`,
      priceCurrency: 'UZS',
      price: item.priceUzs,
      availability: 'https://schema.org/InStock',
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
      seller: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Bosh sahifa', item: `${siteConfig.url}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Telegram Stars', item: `${siteConfig.url}/${lang}/stars` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${amountStr} Stars`,
        item: `${siteConfig.url}/${lang}/stars/${item.slug}`,
      },
    ],
  }

  const howToSteps = [
    {
      name: "Botga o'tish",
      text: `Telegram'da ${siteConfig.bot} botiga kiring va START tugmasini bosing.`,
    },
    {
      name: "Stars bo'limini tanlash",
      text: 'Bot menyusidan Telegram Stars variantini tanlang.',
    },
    {
      name: `${amountStr} miqdorni belgilash`,
      text: `Mavjud paketlardan ${amountStr} ta yulduzcha variantini tanlang. Narxi ${formatUzs(item.priceUzs)}.`,
    },
    {
      name: 'Telegram @username kiritish',
      text: "Yulduzchalar yuboriladigan akkauntning @username manzilini kiriting — o'zingizniki yoki sovg'a uchun.",
    },
    {
      name: "To'lov usulini tanlash",
      text: "UzCard, Humo, Click yoki boshqa mavjud mahalliy to'lov usulidan birini tanlab to'lovni yakunlang.",
    },
    {
      name: 'Faollashtirishni kutish',
      text: `To'lov tasdiqlangach, ${amountStr} ta Stars ko'rsatilgan akkauntga avtomatik biriktiriladi.`,
    },
  ]

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `${amountStr} Telegram Stars qanday sotib olinadi`,
    description: `${siteConfig.bot} orqali ${amountStr} ta Telegram Stars yulduzchalarini O'zbekistondan sotib olish bo'yicha qadamlar.`,
    totalTime: 'PT2M',
    step: howToSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }

  const universalFAQ: FAQItem[] = [
    {
      question: 'Telegram Stars nima va nimaga kerak?',
      answer:
        "Telegram Stars (yulduzchalar) — Telegram ilovasi ichidagi raqamli to'lov birligi. Ular yordamida mini-ilovalar, raqamli mahsulotlar, sovg'alar va boshqa Telegram-ichi xizmatlar uchun to'lov amalga oshiriladi.",
    },
    {
      question: 'Buyurtma necha vaqtda yetkaziladi?',
      answer: `To'lov tasdiqlanganidan so'ng, ${amountStr} ta yulduzcha ${siteConfig.bot} orqali ko'rsatilgan @username akkauntga avtomatik biriktiriladi.`,
    },
    {
      question: "Qaysi to'lov usullari qabul qilinadi?",
      answer: "UzCard, Humo, Click va boshqa mahalliy O'zbekiston to'lov tizimlari botda mavjud.",
    },
    {
      question: "Stars'ni boshqa odamga sovg'a sifatida olish mumkinmi?",
      answer:
        "Albatta. Buyurtma vaqtida istalgan Telegram @username kiritishingiz mumkin — yulduzchalar o'sha akkauntga to'g'ridan-to'g'ri yuboriladi.",
    },
  ]

  const allFAQ: FAQItem[] = [...content.uniqueFAQ, ...universalFAQ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFAQ.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      {/* Header */}
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6 sm:pt-16">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-[var(--text-muted)]">
          <Link href={`/${lang}`} className="hover:text-[var(--foreground)]">Bosh sahifa</Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/stars`} className="hover:text-[var(--foreground)]">Stars</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{amountStr}</span>
        </nav>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          <span className="text-[var(--primary)]">{amountStr}</span> Telegram Stars
        </h1>
        <p className="mt-3 text-lg text-[var(--text-muted)]">{content.oneLineSummary}</p>
      </section>

      <AnswerBox title="Qisqa javob: narx va sotib olish">
        <p>
          <strong>{amountStr} ta Telegram Stars</strong> narxi —{' '}
          <strong>{formatUzs(item.priceUzs)}</strong> (1 yulduzcha taxminan {perStarRounded.toFixed(2)} so&apos;m).
          Sotib olish{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
            {siteConfig.bot}
          </a>{' '}
          botida amalga oshiriladi: START → Stars → {amountStr} → @username kiritish → UzCard/Humo/Click bilan
          to&apos;lov. Yulduzchalar avtomatik akkauntga biriktiriladi.
        </p>
      </AnswerBox>

      {/* Hero offer card */}
      <section className="mx-auto max-w-3xl px-4 py-8">
        <div className="uz-card uz-card-accent rounded-2xl border border-[var(--primary)] bg-[var(--primary)]/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-[var(--text-muted)]">{amountStr} Telegram Stars</div>
              <div className="mt-1 text-3xl font-bold sm:text-5xl">{formatUzs(item.priceUzs)}</div>
              <div className="mt-2 text-sm text-[var(--text-muted)]">
                ~{perStarRounded.toFixed(2)} so&apos;m / 1 yulduzcha
              </div>
            </div>
            <BotCTA size="lg" prefill={`stars_${item.amount}`} />
          </div>
        </div>
      </section>

      {/* Why this amount */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="why-heading">
        <h2 id="why-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          Nega {amountStr} ta Stars?
        </h2>
        <p className="leading-relaxed text-[var(--text-muted)]">{content.whyThisAmount}</p>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="usecases-heading">
        <h2 id="usecases-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {amountStr} ta Stars bilan nima qilish mumkin?
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">
          Telegram Stars yulduzchalari ko&apos;p turli xizmatlar va premium funksiyalar uchun ishlatiladi. Quyida{' '}
          {amountStr} ta yulduzcha bilan amalga oshirish mumkin bo&apos;lgan asosiy holatlar.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.useCases.map((u) => (
            <div key={u.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="flex items-center gap-2 font-semibold">
                <svg className="text-[var(--primary)]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2 L14.5 9 L22 9.3 L16 14 L18.2 22 L12 17.5 L5.8 22 L8 14 L2 9.3 L9.5 9 Z" />
                </svg>
                {u.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{u.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="audience-heading">
        <h2 id="audience-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {amountStr} ta Stars kim uchun mos?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.audience.map((a) => (
            <div key={a.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="font-semibold">{a.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HowTo */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="howto-heading">
        <h2 id="howto-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {amountStr} ta Stars qanday sotib olinadi?
        </h2>
        <ol className="space-y-3">
          {howToSteps.map((s, i) => (
            <li key={i} className="uz-card flex gap-4 rounded-xl border border-[var(--border)] p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
                {i + 1}
              </span>
              <div>
                <div className="font-semibold">{s.name}</div>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <BotCTA size="lg" prefill={`stars_${item.amount}`} />
        </div>
      </section>

      {/* Payment methods */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="payment-heading">
        <h2 id="payment-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          Qaysi to&apos;lov usullari qabul qilinadi?
        </h2>
        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">
          Stars sotib olish uchun mahalliy O&apos;zbekiston to&apos;lov usullaridan foydalaniladi — kart raqami,
          internet bank yoki Click ilovasi orqali.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {PAYMENT_METHODS.map((p) => (
            <div key={p.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="font-semibold">{p.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is Stars - educational */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="about-heading">
        <h2 id="about-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          Telegram Stars nima va u nimaga kerak?
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--text-muted)]">
          <p>
            Telegram Stars (Telegram yulduzchalari) — Telegram ilovasi ichidagi rasmiy raqamli to&apos;lov birligi. U
            Telegram tomonidan 2024 yilda joriy etilgan bo&apos;lib, foydalanuvchilar uchun ilova ichidagi
            mahsulotlarga, mini-ilovalardagi xizmatlarga, kanal monetizatsiyasiga va sovg&apos;alarga to&apos;lash
            imkoniyatini ochadi.
          </p>
          <p>
            Stars akkauntda saqlanadi va kerak bo&apos;lganda sarflanadi. Foydalanuvchilar Stars orqali
            do&apos;stlariga sovg&apos;a yuborishi, kanal mualliflarini qo&apos;llab-quvvatlashi, premium emoji
            to&apos;plamlarini sotib olishi, custom emoji yaratishi va Telegram Mini App&apos;lardagi pullik
            xizmatlardan foydalanishi mumkin.
          </p>
          <p>
            Yulduzchalar muddatsiz saqlanadi — sotib olib, bir yildan keyin sarflasangiz ham mavjud bo&apos;ladi.
            Eng kichik buyurtma — {STARS_BASE.amount} ta Stars ({formatUzs(STARS_BASE.priceUzs)}). Keyingi miqdorlar
            shu ratiyaga proportsional hisoblanadi (~{perStarRounded.toFixed(2)} so&apos;m / 1 yulduzcha).
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="compare-heading">
        <h2 id="compare-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          Boshqa miqdorlar bilan taqqoslash
        </h2>
        <div className="uz-card overflow-hidden rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--muted)] text-left">
              <tr>
                <th className="px-3 py-3 font-semibold sm:px-4">Miqdor</th>
                <th className="px-3 py-3 font-semibold sm:px-4">Narx</th>
                <th className="hidden px-4 py-3 font-semibold sm:table-cell">1 Stars</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_AMOUNTS.map((a) => {
                const pack = STARS_PACKS.find((s) => s.amount === a)
                if (!pack) return null
                const isCurrent = pack.slug === item.slug
                const ratePer = pack.priceUzs / pack.amount
                return (
                  <tr
                    key={pack.slug}
                    className={`border-t border-[var(--border)] ${isCurrent ? 'bg-[var(--primary)]/8' : ''}`}
                  >
                    <td className="px-3 py-3 sm:px-4">
                      {isCurrent ? (
                        <span className="font-bold">
                          {formatNumber(pack.amount)} ⭐ <span className="text-xs text-[var(--primary)]">(joriy)</span>
                        </span>
                      ) : (
                        <Link href={`/${lang}/stars/${pack.slug}`} className="text-[var(--primary)] hover:underline">
                          {formatNumber(pack.amount)} ⭐
                        </Link>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">{formatUzs(pack.priceUzs)}</td>
                    <td className="hidden whitespace-nowrap px-4 py-3 text-[var(--text-muted)] sm:table-cell">
                      ~{ratePer.toFixed(2)} so&apos;m
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          Narx miqdorga proportsional — har Stars uchun baho bir xil. Katta paket bilan kam buyurtma berasiz.
        </p>
      </section>

      <FAQ items={allFAQ} title={`${amountStr} Stars haqida tez-tez beriladigan savollar`} />

      {/* Final CTA */}
      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {amountStr} ta Stars uchun tayyormisiz?
        </h2>
        <p className="mt-3 text-[var(--text-muted)]">
          Botda bir necha qadamda buyurtma bering. Telegram Premium'ga ham qiziqsangiz —{' '}
          <Link href={`/${lang}/premium`} className="text-[var(--primary)] hover:underline">Premium sahifasiga</Link> o'ting.
        </p>
        <div className="mt-6 flex justify-center">
          <BotCTA size="lg" prefill={`stars_${item.amount}`} />
        </div>
      </section>
    </>
  )
}
