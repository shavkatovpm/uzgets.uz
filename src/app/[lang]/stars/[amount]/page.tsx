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
import { type Locale, isLocale, localePath, localeUrl, alternatesFor } from '@/i18n/config'

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
    alternates: alternatesFor(lang, `/stars/${item.slug}`),
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: localeUrl(siteConfig.url, lang, `/stars/${item.slug}`),
      type: 'website',
    },
  }
}

const COMPARISON_AMOUNTS = [50, 100, 500, 1000, 2500] as const

// Localized static UI strings for the page chrome (headings, breadcrumb, steps,
// universal FAQ). Product-specific copy comes from getStarsPageContent(lang).
function getStarsUI(
  lang: Locale,
  v: { amountStr: string; price: string; perStar: string; basePrice: string; baseAmount: string },
) {
  if (lang === 'ru') {
    return {
      som: 'сум',
      breadcrumbHome: 'Главная',
      answerTitle: 'Краткий ответ: цена и покупка',
      whyHeading: `Почему ${v.amountStr} Stars?`,
      useCasesHeading: `Что можно сделать с ${v.amountStr} Stars?`,
      useCasesIntro: `Звёзды Telegram Stars используются для множества сервисов и премиум-функций. Ниже — основные сценарии, которые можно реализовать с ${v.amountStr} звёздами.`,
      audienceHeading: `Кому подходят ${v.amountStr} Stars?`,
      howToHeading: `Как купить ${v.amountStr} Stars?`,
      paymentHeading: 'Какие способы оплаты принимаются?',
      paymentIntro:
        'Для покупки Stars используются локальные платёжные системы Узбекистана — по номеру карты, через интернет-банк или приложение Click.',
      aboutHeading: 'Что такое Telegram Stars и зачем они нужны?',
      aboutP1:
        'Telegram Stars (звёзды Telegram) — официальная внутренняя цифровая валюта приложения Telegram. Она введена Telegram в 2024 году и позволяет оплачивать внутренние товары, услуги в мини-приложениях, монетизацию каналов и подарки.',
      aboutP2:
        'Stars хранятся на аккаунте и тратятся по мере необходимости. С помощью Stars можно отправлять подарки друзьям, поддерживать авторов каналов, покупать наборы премиум-эмодзи, создавать кастомные эмодзи и пользоваться платными услугами в Telegram Mini Apps.',
      aboutP3: `Звёзды хранятся бессрочно — если купить и потратить через год, они никуда не денутся. Минимальный заказ — ${v.baseAmount} Stars (${v.basePrice}). Остальные количества рассчитываются пропорционально этому тарифу (~${v.perStar} сум / 1 звезда).`,
      compareHeading: 'Сравнение с другими пакетами',
      thAmount: 'Количество',
      thPrice: 'Цена',
      thPerStar: '1 Star',
      current: '(текущий)',
      compareNote:
        'Цена пропорциональна количеству — стоимость одной звезды одинакова. С большим пакетом вы делаете меньше заказов.',
      allPacksHeading: 'Все пакеты Telegram Stars',
      faqTitle: `Частые вопросы о ${v.amountStr} Stars`,
      finalHeading: `Готовы купить ${v.amountStr} Stars?`,
      finalBodyPre: 'Оформите заказ в боте за несколько шагов. Интересует Telegram Premium — перейдите на ',
      finalBodyLink: 'страницу Premium',
      perStarLabel: `~${v.perStar} сум / 1 звезда`,
      answerBody: (
        <p>
          Цена <strong>{v.amountStr} Telegram Stars</strong> — <strong>{v.price}</strong> (около {v.perStar} сум за
          звезду). Покупка оформляется в боте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
            {siteConfig.bot}
          </a>
          : START → Stars → {v.amountStr} → ввод @username → оплата UzCard/Humo/Click. Звёзды зачисляются на аккаунт
          автоматически.
        </p>
      ),
      howToSteps: [
        { name: 'Перейти в бот', text: `Откройте бот ${siteConfig.bot} в Telegram и нажмите START.` },
        { name: 'Выбрать раздел Stars', text: 'В меню бота выберите вариант Telegram Stars.' },
        {
          name: `Указать количество ${v.amountStr}`,
          text: `Из доступных пакетов выберите ${v.amountStr} звёзд. Цена — ${v.price}.`,
        },
        {
          name: 'Ввести @username Telegram',
          text: 'Укажите @username аккаунта, на который зачислить звёзды — свой или для подарка.',
        },
        {
          name: 'Выбрать способ оплаты',
          text: 'Выберите UzCard, Humo, Click или другой доступный локальный способ оплаты и завершите платёж.',
        },
        {
          name: 'Дождаться зачисления',
          text: `После подтверждения оплаты ${v.amountStr} Stars автоматически зачисляются на указанный аккаунт.`,
        },
      ],
      howToSchemaName: `Как купить ${v.amountStr} Telegram Stars`,
      howToSchemaDesc: `Шаги покупки ${v.amountStr} звёзд Telegram Stars из Узбекистана через ${siteConfig.bot}.`,
      universalFAQ: [
        {
          question: 'Что такое Telegram Stars и зачем они нужны?',
          answer:
            'Telegram Stars (звёзды) — внутренняя цифровая валюта Telegram. С их помощью оплачивают мини-приложения, цифровые товары, подарки и другие внутренние сервисы Telegram.',
        },
        {
          question: 'За какое время доставляется заказ?',
          answer: `После подтверждения оплаты ${v.amountStr} звёзд автоматически зачисляются через ${siteConfig.bot} на указанный @username.`,
        },
        {
          question: 'Какие способы оплаты принимаются?',
          answer: 'В боте доступны UzCard, Humo, Click и другие локальные платёжные системы Узбекистана.',
        },
        {
          question: 'Можно ли получить Stars в подарок другому человеку?',
          answer:
            'Да. При заказе можно указать любой Telegram @username — звёзды отправляются напрямую на этот аккаунт.',
        },
      ] as FAQItem[],
    }
  }
  return {
    som: "so'm",
    breadcrumbHome: 'Bosh sahifa',
    answerTitle: 'Qisqa javob: narx va sotib olish',
    whyHeading: `Nega ${v.amountStr} ta Stars?`,
    useCasesHeading: `${v.amountStr} ta Stars bilan nima qilish mumkin?`,
    useCasesIntro: `Telegram Stars yulduzchalari ko'p turli xizmatlar va premium funksiyalar uchun ishlatiladi. Quyida ${v.amountStr} ta yulduzcha bilan amalga oshirish mumkin bo'lgan asosiy holatlar.`,
    audienceHeading: `${v.amountStr} ta Stars kim uchun mos?`,
    howToHeading: `${v.amountStr} ta Stars qanday sotib olinadi?`,
    paymentHeading: "Qaysi to'lov usullari qabul qilinadi?",
    paymentIntro:
      "Stars sotib olish uchun mahalliy O'zbekiston to'lov usullaridan foydalaniladi — kart raqami, internet bank yoki Click ilovasi orqali.",
    aboutHeading: 'Telegram Stars nima va u nimaga kerak?',
    aboutP1:
      "Telegram Stars (Telegram yulduzchalari) — Telegram ilovasi ichidagi rasmiy raqamli to'lov birligi. U Telegram tomonidan 2024 yilda joriy etilgan bo'lib, foydalanuvchilar uchun ilova ichidagi mahsulotlarga, mini-ilovalardagi xizmatlarga, kanal monetizatsiyasiga va sovg'alarga to'lash imkoniyatini ochadi.",
    aboutP2:
      "Stars akkauntda saqlanadi va kerak bo'lganda sarflanadi. Foydalanuvchilar Stars orqali do'stlariga sovg'a yuborishi, kanal mualliflarini qo'llab-quvvatlashi, premium emoji to'plamlarini sotib olishi, custom emoji yaratishi va Telegram Mini App'lardagi pullik xizmatlardan foydalanishi mumkin.",
    aboutP3: `Yulduzchalar muddatsiz saqlanadi — sotib olib, bir yildan keyin sarflasangiz ham mavjud bo'ladi. Eng kichik buyurtma — ${v.baseAmount} ta Stars (${v.basePrice}). Keyingi miqdorlar shu ratiyaga proportsional hisoblanadi (~${v.perStar} so'm / 1 yulduzcha).`,
    compareHeading: 'Boshqa miqdorlar bilan taqqoslash',
    thAmount: 'Miqdor',
    thPrice: 'Narx',
    thPerStar: '1 Stars',
    current: '(joriy)',
    compareNote:
      "Narx miqdorga proportsional — har Stars uchun baho bir xil. Katta paket bilan kam buyurtma berasiz.",
    allPacksHeading: 'Barcha Telegram Stars paketlari',
    faqTitle: `${v.amountStr} Stars haqida tez-tez beriladigan savollar`,
    finalHeading: `${v.amountStr} ta Stars uchun tayyormisiz?`,
    finalBodyPre: "Botda bir necha qadamda buyurtma bering. Telegram Premium'ga ham qiziqsangiz — ",
    finalBodyLink: 'Premium sahifasiga',
    perStarLabel: `~${v.perStar} so'm / 1 yulduzcha`,
    answerBody: (
      <p>
        <strong>{v.amountStr} ta Telegram Stars</strong> narxi — <strong>{v.price}</strong> (1 yulduzcha taxminan{' '}
        {v.perStar} so&apos;m). Sotib olish{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
          {siteConfig.bot}
        </a>{' '}
        botida amalga oshiriladi: START → Stars → {v.amountStr} → @username kiritish → UzCard/Humo/Click bilan
        to&apos;lov. Yulduzchalar avtomatik akkauntga biriktiriladi.
      </p>
    ),
    howToSteps: [
      { name: "Botga o'tish", text: `Telegram'da ${siteConfig.bot} botiga kiring va START tugmasini bosing.` },
      { name: "Stars bo'limini tanlash", text: 'Bot menyusidan Telegram Stars variantini tanlang.' },
      {
        name: `${v.amountStr} miqdorni belgilash`,
        text: `Mavjud paketlardan ${v.amountStr} ta yulduzcha variantini tanlang. Narxi ${v.price}.`,
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
        text: `To'lov tasdiqlangach, ${v.amountStr} ta Stars ko'rsatilgan akkauntga avtomatik biriktiriladi.`,
      },
    ],
    howToSchemaName: `${v.amountStr} Telegram Stars qanday sotib olinadi`,
    howToSchemaDesc: `${siteConfig.bot} orqali ${v.amountStr} ta Telegram Stars yulduzchalarini O'zbekistondan sotib olish bo'yicha qadamlar.`,
    universalFAQ: [
      {
        question: 'Telegram Stars nima va nimaga kerak?',
        answer:
          "Telegram Stars (yulduzchalar) — Telegram ilovasi ichidagi raqamli to'lov birligi. Ular yordamida mini-ilovalar, raqamli mahsulotlar, sovg'alar va boshqa Telegram-ichi xizmatlar uchun to'lov amalga oshiriladi.",
      },
      {
        question: 'Buyurtma necha vaqtda yetkaziladi?',
        answer: `To'lov tasdiqlanganidan so'ng, ${v.amountStr} ta yulduzcha ${siteConfig.bot} orqali ko'rsatilgan @username akkauntga avtomatik biriktiriladi.`,
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
    ] as FAQItem[],
  }
}

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

  const ui = getStarsUI(lang, {
    amountStr,
    price: formatUzs(item.priceUzs),
    perStar: perStarRounded.toFixed(2),
    basePrice: formatUzs(STARS_BASE.priceUzs),
    baseAmount: String(STARS_BASE.amount),
  })

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${amountStr} Telegram Stars`,
    description: content.metaDescription,
    brand: { '@type': 'Brand', name: 'Telegram' },
    category: 'Digital Currency',
    offers: {
      '@type': 'Offer',
      url: localeUrl(siteConfig.url, lang, `/stars/${item.slug}`),
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
      { '@type': 'ListItem', position: 1, name: ui.breadcrumbHome, item: localeUrl(siteConfig.url, lang) },
      { '@type': 'ListItem', position: 2, name: 'Telegram Stars', item: localeUrl(siteConfig.url, lang, '/stars') },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${amountStr} Stars`,
        item: localeUrl(siteConfig.url, lang, `/stars/${item.slug}`),
      },
    ],
  }

  const howToSteps = ui.howToSteps

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: ui.howToSchemaName,
    description: ui.howToSchemaDesc,
    totalTime: 'PT2M',
    step: howToSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }

  const universalFAQ: FAQItem[] = ui.universalFAQ

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
          <Link href={localePath(lang)} className="hover:text-[var(--foreground)]">{ui.breadcrumbHome}</Link>
          <span className="mx-2">/</span>
          <Link href={localePath(lang, '/stars')} className="hover:text-[var(--foreground)]">Stars</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{amountStr}</span>
        </nav>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          <span className="text-[var(--primary)]">{amountStr}</span> Telegram Stars
        </h1>
        <p className="mt-3 text-lg text-[var(--text-muted)]">{content.oneLineSummary}</p>
      </section>

      <AnswerBox title={ui.answerTitle}>{ui.answerBody}</AnswerBox>

      {/* Hero offer card */}
      <section className="mx-auto max-w-3xl px-4 py-8">
        <div className="uz-card uz-card-accent rounded-2xl border border-[var(--primary)] bg-[var(--primary)]/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-[var(--text-muted)]">{amountStr} Telegram Stars</div>
              <div className="mt-1 text-3xl font-bold sm:text-5xl">{formatUzs(item.priceUzs)}</div>
              <div className="mt-2 text-sm text-[var(--text-muted)]">{ui.perStarLabel}</div>
            </div>
            <BotCTA size="lg" prefill={`stars_${item.amount}`} />
          </div>
        </div>
      </section>

      {/* Why this amount */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="why-heading">
        <h2 id="why-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {ui.whyHeading}
        </h2>
        <p className="leading-relaxed text-[var(--text-muted)]">{content.whyThisAmount}</p>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="usecases-heading">
        <h2 id="usecases-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {ui.useCasesHeading}
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">{ui.useCasesIntro}</p>
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
          {ui.audienceHeading}
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
          {ui.howToHeading}
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
          {ui.paymentHeading}
        </h2>
        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">{ui.paymentIntro}</p>
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
          {ui.aboutHeading}
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--text-muted)]">
          <p>{ui.aboutP1}</p>
          <p>{ui.aboutP2}</p>
          <p>{ui.aboutP3}</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="compare-heading">
        <h2 id="compare-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {ui.compareHeading}
        </h2>
        <div className="uz-card overflow-hidden rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--muted)] text-left">
              <tr>
                <th className="px-3 py-3 font-semibold sm:px-4">{ui.thAmount}</th>
                <th className="px-3 py-3 font-semibold sm:px-4">{ui.thPrice}</th>
                <th className="hidden px-4 py-3 font-semibold sm:table-cell">{ui.thPerStar}</th>
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
                          {formatNumber(pack.amount)} ⭐ <span className="text-xs text-[var(--primary)]">{ui.current}</span>
                        </span>
                      ) : (
                        <Link href={localePath(lang, `/stars/${pack.slug}`)} className="text-[var(--primary)] hover:underline">
                          {formatNumber(pack.amount)} ⭐
                        </Link>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">{formatUzs(pack.priceUzs)}</td>
                    <td className="hidden whitespace-nowrap px-4 py-3 text-[var(--text-muted)] sm:table-cell">
                      ~{ratePer.toFixed(2)} {ui.som}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-[var(--text-muted)]">{ui.compareNote}</p>
      </section>

      {/* All packs — full sibling mesh so every amount is linked from every other (crawl/index) */}
      <section className="mx-auto max-w-3xl px-4 pb-4" aria-labelledby="allpacks-heading">
        <h2 id="allpacks-heading" className="mb-4 text-2xl font-bold sm:text-3xl">
          {ui.allPacksHeading}
        </h2>
        <div className="flex flex-wrap gap-2">
          {STARS_PACKS.map((p) =>
            p.slug === item.slug ? (
              <span
                key={p.slug}
                className="rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1.5 text-sm font-semibold text-[var(--primary)]"
              >
                {formatNumber(p.amount)} ⭐
              </span>
            ) : (
              <Link
                key={p.slug}
                href={localePath(lang, `/stars/${p.slug}`)}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {formatNumber(p.amount)} ⭐
              </Link>
            ),
          )}
        </div>
      </section>

      <FAQ items={allFAQ} title={ui.faqTitle} />

      {/* Final CTA */}
      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{ui.finalHeading}</h2>
        <p className="mt-3 text-[var(--text-muted)]">
          {ui.finalBodyPre}
          <Link href={localePath(lang, '/premium')} className="text-[var(--primary)] hover:underline">{ui.finalBodyLink}</Link>.
        </p>
        <div className="mt-6 flex justify-center">
          <BotCTA size="lg" prefill={`stars_${item.amount}`} />
        </div>
      </section>
    </>
  )
}
