import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FAQ, type FAQItem } from '@/components/FAQ'
import { BotCTA } from '@/components/BotCTA'
import { JsonLd } from '@/components/JsonLd'
import { AnswerBox } from '@/components/AnswerBox'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS, getPremiumBySlug } from '@/config/products'
import { getPremiumPageContent } from '@/config/premium-pages'
import { getPremiumFeatures, getPaymentMethods } from '@/config/static-content'
import { formatUzs } from '@/lib/format'
import { type Locale, isLocale, localePath, localeUrl } from '@/i18n/config'

type Params = { lang: string; period: string }
type StaticParams = { period: string }

export function generateStaticParams(): StaticParams[] {
  return PREMIUM_PERIODS.map((p) => ({ period: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang: langRaw, period } = await params
  if (!isLocale(langRaw)) return {}
  const lang: Locale = langRaw
  const item = getPremiumBySlug(period)
  if (!item) return {}
  const content = getPremiumPageContent(lang, item.slug)
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: localePath(lang, `/premium/${item.slug}`) },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: localeUrl(siteConfig.url, lang, `/premium/${item.slug}`),
      type: 'website',
    },
  }
}

export default async function PremiumPeriodPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang: langRaw, period } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const item = getPremiumBySlug(period)
  if (!item) notFound()

  const content = getPremiumPageContent(lang, item.slug)
  const PREMIUM_FEATURES = getPremiumFeatures(lang)
  const PAYMENT_METHODS = getPaymentMethods(lang)
  const others = PREMIUM_PERIODS.filter((p) => p.slug !== item.slug)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Telegram Premium ${item.months} oylik`,
    description: content.metaDescription,
    brand: { '@type': 'Brand', name: 'Telegram' },
    category: 'Digital Subscription',
    offers: {
      '@type': 'Offer',
      url: localeUrl(siteConfig.url, lang, `/premium/${item.slug}`),
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
      { '@type': 'ListItem', position: 1, name: 'Bosh sahifa', item: localeUrl(siteConfig.url, lang) },
      { '@type': 'ListItem', position: 2, name: 'Telegram Premium', item: localeUrl(siteConfig.url, lang, '/premium') },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${item.months} oylik`,
        item: localeUrl(siteConfig.url, lang, `/premium/${item.slug}`),
      },
    ],
  }

  const howToSteps = [
    {
      name: "Botga o'tish",
      text: `Telegram'da ${siteConfig.bot} botiga kiring va START tugmasini bosing.`,
    },
    {
      name: "Premium bo'limini tanlash",
      text: 'Bot menyusidan Telegram Premium variantini tanlang.',
    },
    {
      name: `${item.months} oylik muddatni belgilash`,
      text: `Mavjud variantlardan ${item.months} oylik paketni tanlang. Narx ${formatUzs(item.priceUzs)} (oyiga taxminan ${formatUzs(item.perMonthHint)}).`,
    },
    {
      name: 'Telegram @username kiritish',
      text: "Premium biriktiriladigan akkauntning @username manzilini kiriting — o'zingizniki yoki sovg'a sifatida boshqa odam uchun.",
    },
    {
      name: "To'lov usulini tanlash",
      text: "UzCard, Humo, Click yoki boshqa mavjud mahalliy to'lov usulidan birini tanlab to'lovni yakunlang.",
    },
    {
      name: 'Faollashtirishni kutish',
      text: `To'lov tasdiqlangach, ${item.months} oylik Telegram Premium ko'rsatilgan akkauntga avtomatik biriktiriladi.`,
    },
  ]

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Telegram Premium ${item.months} oylik qanday sotib olinadi`,
    description: `${siteConfig.bot} orqali ${item.months} oylik Telegram Premium obunani O'zbekistondan sotib olish bo'yicha qadamlar.`,
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
      question: 'Buyurtma necha vaqtda yetkaziladi?',
      answer: `To'lov tasdiqlanganidan so'ng, Telegram Premium ${item.months} oylik obuna ${siteConfig.bot} orqali ko'rsatilgan @username akkauntiga avtomatik biriktiriladi. Bu jarayon odatda darhol amalga oshadi.`,
    },
    {
      question: "Qaysi to'lov usullari qabul qilinadi?",
      answer:
        "UzCard, Humo, Click va boshqa mahalliy O'zbekiston to'lov tizimlari. Aniq mavjud variantlarni botda ko'rishingiz mumkin.",
    },
    {
      question: "Buyurtma kafolatlanganmi?",
      answer: `Ha. To'lov tasdiqlangach, Telegram Premium ko'rsatilgan akkauntga to'g'ridan-to'g'ri Telegram tomonidan biriktiriladi. Texnik muammo bo'lsa, ${siteConfig.bot} ichidagi qo'llab-quvvatlash xizmatiga murojaat qilish mumkin.`,
    },
    {
      question: "Premium boshqa odam akkauntiga sovg'a sifatida olinishi mumkinmi?",
      answer:
        "Albatta. Buyurtma vaqtida istalgan Telegram @username kiritishingiz mumkin — Premium o'sha akkauntga to'g'ridan-to'g'ri biriktiriladi.",
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

  const baseMonthly = PREMIUM_PERIODS[0].priceUzs / PREMIUM_PERIODS[0].months

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      {/* Header */}
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6 sm:pt-16">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-[var(--text-muted)]">
          <Link href={localePath(lang)} className="hover:text-[var(--foreground)]">Bosh sahifa</Link>
          <span className="mx-2">/</span>
          <Link href={localePath(lang, '/premium')} className="hover:text-[var(--foreground)]">Premium</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{item.months} oylik</span>
        </nav>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          <span className="text-[var(--primary)]">{content.h1.highlight}</span> {content.h1.rest}
        </h1>
        <p className="mt-3 text-lg text-[var(--text-muted)]">{content.oneLineSummary}</p>
      </section>

      <AnswerBox title="Qisqa javob: narx va sotib olish">
        <p>
          Telegram Premium <strong>{item.months} oylik</strong> obuna narxi —{' '}
          <strong>{formatUzs(item.priceUzs)}</strong> (oyiga taxminan {formatUzs(item.perMonthHint)}). Sotib olish{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
            {siteConfig.bot}
          </a>{' '}
          botida amalga oshiriladi: START → Premium → {item.months} oylik → @username kiritish → UzCard/Humo/Click bilan
          to&apos;lov. Premium akkauntga avtomatik biriktiriladi.
        </p>
      </AnswerBox>

      {/* Hero offer card */}
      <section className="mx-auto max-w-3xl px-4 py-8">
        <div className="uz-card uz-card-accent rounded-2xl border border-[var(--primary)] bg-[var(--primary)]/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-[var(--text-muted)]">Telegram Premium {item.months} oylik</div>
              <div className="mt-1 text-3xl font-bold sm:text-5xl">{formatUzs(item.priceUzs)}</div>
              <div className="mt-2 text-sm text-[var(--text-muted)]">
                Oyiga taxminan {formatUzs(item.perMonthHint)}
              </div>
            </div>
            <BotCTA size="lg" prefill={`premium_${item.months}`} />
          </div>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {[
              "4 GB gacha fayl yuklash",
              "Reklamalarsiz tajriba",
              "Premium emoji va stikerlar",
              "Ovozli xabar transkripsiyasi",
              "2 marta ko'p kanal/papka cheklovi",
              'Premium profil belgisi',
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <svg
                  className="mt-1 shrink-0 text-[var(--primary)]"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="audience-heading">
        <h2 id="audience-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {item.months} oylik Premium kim uchun mos?
        </h2>
        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">{content.whyThisPeriod}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.audience.map((a) => (
            <div key={a.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="font-semibold">{a.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium features */}
      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="features-heading">
        <h2 id="features-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          Telegram Premium nima beradi? 12 ta imkoniyat
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">
          Telegram Premium — Telegram'ning kengaytirilgan imkoniyatlarini ochib beruvchi obuna. Quyida {item.months}{' '}
          oylik paket muddatida foydalanasiz mumkin bo&apos;lgan barcha asosiy imkoniyatlar.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PREMIUM_FEATURES.map((f) => (
            <div key={f.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="flex items-center gap-2 font-semibold">
                <svg className="text-[var(--primary)]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                {f.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HowTo */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="howto-heading">
        <h2 id="howto-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {item.months} oylik Premium qanday sotib olinadi?
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
          <BotCTA size="lg" prefill={`premium_${item.months}`} />
        </div>
      </section>

      {/* Payment methods */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="payment-heading">
        <h2 id="payment-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          Qaysi to&apos;lov usullari qabul qilinadi?
        </h2>
        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">
          To&apos;lov to&apos;liq O&apos;zbekiston foydalanuvchilari uchun moslashtirilgan — kart raqami, internet
          bank yoki Click ilovasi orqali bemalol amalga oshiriladi.
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

      {/* What happens after */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="after-heading">
        <h2 id="after-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          Faollashtirishdan keyin nima bo&apos;ladi?
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--text-muted)]">
          <p>
            To&apos;lov tasdiqlangach, Telegram Premium ko&apos;rsatilgan @username akkauntga to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram
            tomonidan biriktiriladi. Akkauntda bir necha o&apos;zgarish darhol ko&apos;rinadi: ism yonida Premium
            yulduzcha belgisi, fayl yuklash chegarasi 4 GB ga ko&apos;tarilishi, Premium emoji va stikerlardan foydalanish
            imkoniyati va boshqa imkoniyatlar.
          </p>
          <p>
            Vaqt hisobi obuna faollashgan paytdan boshlanadi va aniq {item.months * 30} kun ({item.months} oy) davomida
            amal qiladi. {item.months} oy tugagach, Premium o&apos;z-o&apos;zidan o&apos;chadi va akkaunt oddiy (free)
            Telegram&apos;ga qaytadi — avtomatik to&apos;lov tizimi yo&apos;q.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="compare-heading">
        <h2 id="compare-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          Boshqa muddatlar bilan taqqoslash
        </h2>
        <div className="uz-card overflow-hidden rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--muted)] text-left">
              <tr>
                <th className="px-3 py-3 font-semibold sm:px-4">Muddat</th>
                <th className="px-3 py-3 font-semibold sm:px-4">Narx</th>
                <th className="px-3 py-3 font-semibold sm:px-4">Oyiga</th>
                <th className="hidden px-4 py-3 font-semibold sm:table-cell">Tejov</th>
              </tr>
            </thead>
            <tbody>
              {PREMIUM_PERIODS.map((p) => {
                const monthly = p.priceUzs / p.months
                const monthlySavings = baseMonthly - monthly
                const totalSavings = monthlySavings * p.months
                const isCurrent = p.slug === item.slug
                return (
                  <tr
                    key={p.slug}
                    className={`border-t border-[var(--border)] ${isCurrent ? 'bg-[var(--primary)]/8' : ''}`}
                  >
                    <td className="px-3 py-3 sm:px-4">
                      {isCurrent ? (
                        <span className="font-bold">
                          {p.months} oy <span className="text-xs text-[var(--primary)]">(joriy)</span>
                        </span>
                      ) : (
                        <Link href={localePath(lang, `/premium/${p.slug}`)} className="text-[var(--primary)] hover:underline">
                          {p.months} oy
                        </Link>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">{formatUzs(p.priceUzs)}</td>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">{formatUzs(p.perMonthHint)}</td>
                    <td className="hidden px-4 py-3 text-[var(--text-muted)] sm:table-cell">
                      {p.months === 3 ? '—' : `${formatUzs(Math.round(totalSavings))} (${p.months} oyga)`}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-[var(--text-muted)]">{content.perMonthAngle}</p>
      </section>

      {/* What is Premium - educational */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="about-heading">
        <h2 id="about-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          Telegram Premium nima va u nimaga kerak?
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--text-muted)]">
          <p>
            Telegram Premium — bu Telegram messenjerining rasmiy pullik obunasi. U Telegram tomonidan 2022 yilda
            ishga tushirilgan bo&apos;lib, foydalanuvchilarga messenjerning kengaytirilgan imkoniyatlaridan foydalanish
            huquqini beradi.
          </p>
          <p>
            Premium foydalanuvchilar uchun fayl yuklash chegarasi ikki barobar oshadi (2 GB &rarr; 4 GB), kanallar va
            papkalar cheklovlari ikki barobar ko&apos;payadi, reklama postlari ko&apos;rinmaydi, premium emoji va
            custom emoji yaratish imkoniyati ochiladi, ovozli xabarlar avtomatik matnga aylantiriladi va boshqa
            o&apos;nlab imkoniyatlardan foydalanish mumkin bo&apos;ladi.
          </p>
          <p>
            Premium ayniqsa Telegram&apos;ni kunda faol ishlatuvchilar — kanal va guruh administratorlari, ko&apos;p
            fayl ulashuvchilar, mass-mediya va biznes egalari uchun ahamiyatli. Oddiy foydalanuvchilar uchun ham Premium
            chat tajribasini sezilarli darajada yaxshilaydi.
          </p>
        </div>
      </section>

      <FAQ items={allFAQ} title={`${item.months} oylik Premium haqida tez-tez beriladigan savollar`} />

      {/* Final CTA */}
      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {item.months} oylik Premium uchun tayyormisiz?
        </h2>
        <p className="mt-3 text-[var(--text-muted)]">
          Botda bir necha qadamda buyurtma bering. Telegram Stars'ga qiziqsangiz —{' '}
          <Link href={localePath(lang, '/stars')} className="text-[var(--primary)] hover:underline">Stars sahifasiga</Link> o'ting.
        </p>
        <div className="mt-6 flex justify-center">
          <BotCTA size="lg" prefill={`premium_${item.months}`} />
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={localePath(lang, `/premium/${p.slug}`)}
              className="uz-card flex items-center justify-between rounded-lg border border-[var(--border)] p-4"
            >
              <span className="font-semibold">{p.months} oylik</span>
              <span className="font-medium text-[var(--primary)]">{formatUzs(p.priceUzs)} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
