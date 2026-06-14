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
import { type Locale, isLocale, localePath, localeUrl, alternatesFor } from '@/i18n/config'

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
    alternates: alternatesFor(lang, `/premium/${item.slug}`),
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: localeUrl(siteConfig.url, lang, `/premium/${item.slug}`),
      type: 'website',
    },
  }
}

// Localized static UI strings for the page chrome. Period-specific copy comes
// from getPremiumPageContent(lang).
function getPremiumUI(
  lang: Locale,
  v: { months: number; price: string; perMonth: string; days: number },
) {
  if (lang === 'ru') {
    return {
      breadcrumbHome: 'Главная',
      periodLabel: `${v.months} месяцев`,
      answerTitle: 'Краткий ответ: цена и покупка',
      heroPeriod: `Telegram Premium на ${v.months} месяцев`,
      perMonthLabel: `Около ${v.perMonth} в месяц`,
      heroBullets: [
        'Загрузка файлов до 4 ГБ',
        'Без рекламы',
        'Премиум-эмодзи и стикеры',
        'Транскрипция голосовых сообщений',
        'В 2 раза больше каналов/папок',
        'Премиум-значок профиля',
      ],
      audienceHeading: `Кому подходит Premium на ${v.months} месяцев?`,
      featuresHeading: 'Что даёт Telegram Premium? 12 возможностей',
      featuresIntro: `Telegram Premium — подписка, открывающая расширенные возможности Telegram. Ниже — все основные функции, которыми вы пользуетесь в течение ${v.months} месяцев действия пакета.`,
      howToHeading: `Как купить Premium на ${v.months} месяцев?`,
      paymentHeading: 'Какие способы оплаты принимаются?',
      paymentIntro:
        'Оплата полностью адаптирована для пользователей Узбекистана — по номеру карты, через интернет-банк или приложение Click.',
      afterHeading: 'Что происходит после активации?',
      afterP1:
        'После подтверждения оплаты Telegram Premium зачисляется на указанный @username напрямую от Telegram. На аккаунте сразу появляются изменения: значок Premium рядом с именем, лимит загрузки файлов до 4 ГБ, доступ к премиум-эмодзи и стикерам и другие функции.',
      afterP2: `Отсчёт времени начинается с момента активации и действует ровно ${v.days} дней (${v.months} мес.). По истечении ${v.months} мес. Premium отключается автоматически, и аккаунт возвращается к обычному (бесплатному) Telegram — системы автосписания нет.`,
      compareHeading: 'Сравнение с другими сроками',
      thPeriod: 'Срок',
      thPrice: 'Цена',
      thPerMonth: 'В месяц',
      thSavings: 'Экономия',
      current: '(текущий)',
      monthShort: 'мес.',
      savingsCell: (saving: string, months: number) => `${saving} (за ${months} мес.)`,
      aboutHeading: 'Что такое Telegram Premium и зачем он нужен?',
      aboutP1:
        'Telegram Premium — это официальная платная подписка мессенджера Telegram. Она запущена Telegram в 2022 году и даёт пользователям право пользоваться расширенными возможностями мессенджера.',
      aboutP2:
        'Для Premium-пользователей лимит загрузки файлов удваивается (2 ГБ → 4 ГБ), лимиты каналов и папок увеличиваются вдвое, рекламные посты не показываются, открывается создание премиум- и кастомных эмодзи, голосовые сообщения автоматически переводятся в текст и доступны десятки других функций.',
      aboutP3:
        'Premium особенно важен для тех, кто активно пользуется Telegram ежедневно — администраторов каналов и групп, тех, кто делится множеством файлов, медиа и владельцев бизнеса. Но и для обычных пользователей Premium заметно улучшает опыт общения.',
      faqTitle: `Частые вопросы о Premium на ${v.months} месяцев`,
      finalHeading: `Готовы купить Premium на ${v.months} месяцев?`,
      finalBodyPre: 'Оформите заказ в боте за несколько шагов. Интересует Telegram Stars — перейдите на ',
      finalBodyLink: 'страницу Stars',
      otherPeriodLabel: (m: number) => `${m} месяцев`,
      answerBody: (
        <p>
          Цена подписки Telegram Premium на <strong>{v.months} месяцев</strong> — <strong>{v.price}</strong> (около{' '}
          {v.perMonth} в месяц). Покупка оформляется в боте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
            {siteConfig.bot}
          </a>
          : START → Premium → {v.months} месяцев → ввод @username → оплата UzCard/Humo/Click. Premium зачисляется на
          аккаунт автоматически.
        </p>
      ),
      howToSteps: [
        { name: 'Перейти в бот', text: `Откройте бот ${siteConfig.bot} в Telegram и нажмите START.` },
        { name: 'Выбрать раздел Premium', text: 'В меню бота выберите вариант Telegram Premium.' },
        {
          name: `Указать срок ${v.months} месяцев`,
          text: `Из доступных вариантов выберите пакет на ${v.months} месяцев. Цена — ${v.price} (около ${v.perMonth} в месяц).`,
        },
        {
          name: 'Ввести @username Telegram',
          text: 'Укажите @username аккаунта, на который зачислить Premium — свой или для подарка другому человеку.',
        },
        {
          name: 'Выбрать способ оплаты',
          text: 'Выберите UzCard, Humo, Click или другой доступный локальный способ оплаты и завершите платёж.',
        },
        {
          name: 'Дождаться активации',
          text: `После подтверждения оплаты Telegram Premium на ${v.months} месяцев автоматически зачисляется на указанный аккаунт.`,
        },
      ],
      howToSchemaName: `Как купить Telegram Premium на ${v.months} месяцев`,
      howToSchemaDesc: `Шаги покупки подписки Telegram Premium на ${v.months} месяцев из Узбекистана через ${siteConfig.bot}.`,
      universalFAQ: [
        {
          question: 'За какое время доставляется заказ?',
          answer: `После подтверждения оплаты подписка Telegram Premium на ${v.months} месяцев автоматически зачисляется через ${siteConfig.bot} на указанный @username. Обычно это происходит сразу.`,
        },
        {
          question: 'Какие способы оплаты принимаются?',
          answer:
            'UzCard, Humo, Click и другие локальные платёжные системы Узбекистана. Точный список доступных вариантов виден в боте.',
        },
        {
          question: 'Гарантирован ли заказ?',
          answer: `Да. После подтверждения оплаты Telegram Premium зачисляется на указанный аккаунт напрямую от Telegram. При технической проблеме можно обратиться в поддержку внутри ${siteConfig.bot}.`,
        },
        {
          question: 'Можно ли получить Premium в подарок на чужой аккаунт?',
          answer:
            'Да. При заказе можно указать любой Telegram @username — Premium зачисляется на этот аккаунт напрямую.',
        },
      ] as FAQItem[],
    }
  }
  return {
    breadcrumbHome: 'Bosh sahifa',
    periodLabel: `${v.months} oylik`,
    answerTitle: 'Qisqa javob: narx va sotib olish',
    heroPeriod: `Telegram Premium ${v.months} oylik`,
    perMonthLabel: `Oyiga taxminan ${v.perMonth}`,
    heroBullets: [
      '4 GB gacha fayl yuklash',
      'Reklamalarsiz tajriba',
      'Premium emoji va stikerlar',
      'Ovozli xabar transkripsiyasi',
      "2 marta ko'p kanal/papka cheklovi",
      'Premium profil belgisi',
    ],
    audienceHeading: `${v.months} oylik Premium kim uchun mos?`,
    featuresHeading: 'Telegram Premium nima beradi? 12 ta imkoniyat',
    featuresIntro: `Telegram Premium — Telegram'ning kengaytirilgan imkoniyatlarini ochib beruvchi obuna. Quyida ${v.months} oylik paket muddatida foydalanishingiz mumkin bo'lgan barcha asosiy imkoniyatlar.`,
    howToHeading: `${v.months} oylik Premium qanday sotib olinadi?`,
    paymentHeading: "Qaysi to'lov usullari qabul qilinadi?",
    paymentIntro:
      "To'lov to'liq O'zbekiston foydalanuvchilari uchun moslashtirilgan — kart raqami, internet bank yoki Click ilovasi orqali bemalol amalga oshiriladi.",
    afterHeading: "Faollashtirishdan keyin nima bo'ladi?",
    afterP1:
      "To'lov tasdiqlangach, Telegram Premium ko'rsatilgan @username akkauntga to'g'ridan-to'g'ri Telegram tomonidan biriktiriladi. Akkauntda bir necha o'zgarish darhol ko'rinadi: ism yonida Premium yulduzcha belgisi, fayl yuklash chegarasi 4 GB ga ko'tarilishi, Premium emoji va stikerlardan foydalanish imkoniyati va boshqa imkoniyatlar.",
    afterP2: `Vaqt hisobi obuna faollashgan paytdan boshlanadi va aniq ${v.days} kun (${v.months} oy) davomida amal qiladi. ${v.months} oy tugagach, Premium o'z-o'zidan o'chadi va akkaunt oddiy (free) Telegram'ga qaytadi — avtomatik to'lov tizimi yo'q.`,
    compareHeading: 'Boshqa muddatlar bilan taqqoslash',
    thPeriod: 'Muddat',
    thPrice: 'Narx',
    thPerMonth: 'Oyiga',
    thSavings: 'Tejov',
    current: '(joriy)',
    monthShort: 'oy',
    savingsCell: (saving: string, months: number) => `${saving} (${months} oyga)`,
    aboutHeading: 'Telegram Premium nima va u nimaga kerak?',
    aboutP1:
      "Telegram Premium — bu Telegram messenjerining rasmiy pullik obunasi. U Telegram tomonidan 2022 yilda ishga tushirilgan bo'lib, foydalanuvchilarga messenjerning kengaytirilgan imkoniyatlaridan foydalanish huquqini beradi.",
    aboutP2:
      "Premium foydalanuvchilar uchun fayl yuklash chegarasi ikki barobar oshadi (2 GB → 4 GB), kanallar va papkalar cheklovlari ikki barobar ko'payadi, reklama postlari ko'rinmaydi, premium emoji va custom emoji yaratish imkoniyati ochiladi, ovozli xabarlar avtomatik matnga aylantiriladi va boshqa o'nlab imkoniyatlardan foydalanish mumkin bo'ladi.",
    aboutP3:
      "Premium ayniqsa Telegram'ni kunda faol ishlatuvchilar — kanal va guruh administratorlari, ko'p fayl ulashuvchilar, mass-mediya va biznes egalari uchun ahamiyatli. Oddiy foydalanuvchilar uchun ham Premium chat tajribasini sezilarli darajada yaxshilaydi.",
    faqTitle: `${v.months} oylik Premium haqida tez-tez beriladigan savollar`,
    finalHeading: `${v.months} oylik Premium uchun tayyormisiz?`,
    finalBodyPre: "Botda bir necha qadamda buyurtma bering. Telegram Stars'ga qiziqsangiz — ",
    finalBodyLink: 'Stars sahifasiga',
    otherPeriodLabel: (m: number) => `${m} oylik`,
    answerBody: (
      <p>
        Telegram Premium <strong>{v.months} oylik</strong> obuna narxi — <strong>{v.price}</strong> (oyiga taxminan{' '}
        {v.perMonth}). Sotib olish{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
          {siteConfig.bot}
        </a>{' '}
        botida amalga oshiriladi: START → Premium → {v.months} oylik → @username kiritish → UzCard/Humo/Click bilan
        to&apos;lov. Premium akkauntga avtomatik biriktiriladi.
      </p>
    ),
    howToSteps: [
      { name: "Botga o'tish", text: `Telegram'da ${siteConfig.bot} botiga kiring va START tugmasini bosing.` },
      { name: "Premium bo'limini tanlash", text: 'Bot menyusidan Telegram Premium variantini tanlang.' },
      {
        name: `${v.months} oylik muddatni belgilash`,
        text: `Mavjud variantlardan ${v.months} oylik paketni tanlang. Narx ${v.price} (oyiga taxminan ${v.perMonth}).`,
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
        text: `To'lov tasdiqlangach, ${v.months} oylik Telegram Premium ko'rsatilgan akkauntga avtomatik biriktiriladi.`,
      },
    ],
    howToSchemaName: `Telegram Premium ${v.months} oylik qanday sotib olinadi`,
    howToSchemaDesc: `${siteConfig.bot} orqali ${v.months} oylik Telegram Premium obunani O'zbekistondan sotib olish bo'yicha qadamlar.`,
    universalFAQ: [
      {
        question: 'Buyurtma necha vaqtda yetkaziladi?',
        answer: `To'lov tasdiqlanganidan so'ng, Telegram Premium ${v.months} oylik obuna ${siteConfig.bot} orqali ko'rsatilgan @username akkauntiga avtomatik biriktiriladi. Bu jarayon odatda darhol amalga oshadi.`,
      },
      {
        question: "Qaysi to'lov usullari qabul qilinadi?",
        answer:
          "UzCard, Humo, Click va boshqa mahalliy O'zbekiston to'lov tizimlari. Aniq mavjud variantlarni botda ko'rishingiz mumkin.",
      },
      {
        question: 'Buyurtma kafolatlanganmi?',
        answer: `Ha. To'lov tasdiqlangach, Telegram Premium ko'rsatilgan akkauntga to'g'ridan-to'g'ri Telegram tomonidan biriktiriladi. Texnik muammo bo'lsa, ${siteConfig.bot} ichidagi qo'llab-quvvatlash xizmatiga murojaat qilish mumkin.`,
      },
      {
        question: "Premium boshqa odam akkauntiga sovg'a sifatida olinishi mumkinmi?",
        answer:
          "Albatta. Buyurtma vaqtida istalgan Telegram @username kiritishingiz mumkin — Premium o'sha akkauntga to'g'ridan-to'g'ri biriktiriladi.",
      },
    ] as FAQItem[],
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

  const ui = getPremiumUI(lang, {
    months: item.months,
    price: formatUzs(item.priceUzs),
    perMonth: formatUzs(item.perMonthHint),
    days: item.months * 30,
  })

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Telegram Premium ${ui.periodLabel}`,
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
      { '@type': 'ListItem', position: 1, name: ui.breadcrumbHome, item: localeUrl(siteConfig.url, lang) },
      { '@type': 'ListItem', position: 2, name: 'Telegram Premium', item: localeUrl(siteConfig.url, lang, '/premium') },
      {
        '@type': 'ListItem',
        position: 3,
        name: ui.periodLabel,
        item: localeUrl(siteConfig.url, lang, `/premium/${item.slug}`),
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
          <Link href={localePath(lang)} className="hover:text-[var(--foreground)]">{ui.breadcrumbHome}</Link>
          <span className="mx-2">/</span>
          <Link href={localePath(lang, '/premium')} className="hover:text-[var(--foreground)]">Premium</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{ui.periodLabel}</span>
        </nav>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          <span className="text-[var(--primary)]">{content.h1.highlight}</span> {content.h1.rest}
        </h1>
        <p className="mt-3 text-lg text-[var(--text-muted)]">{content.oneLineSummary}</p>
      </section>

      <AnswerBox title={ui.answerTitle}>{ui.answerBody}</AnswerBox>

      {/* Hero offer card */}
      <section className="mx-auto max-w-3xl px-4 py-8">
        <div className="uz-card uz-card-accent rounded-2xl border border-[var(--primary)] bg-[var(--primary)]/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-[var(--text-muted)]">{ui.heroPeriod}</div>
              <div className="mt-1 text-3xl font-bold sm:text-5xl">{formatUzs(item.priceUzs)}</div>
              <div className="mt-2 text-sm text-[var(--text-muted)]">{ui.perMonthLabel}</div>
            </div>
            <BotCTA size="lg" prefill={`premium_${item.months}`} />
          </div>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {ui.heroBullets.map((b) => (
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
          {ui.audienceHeading}
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
          {ui.featuresHeading}
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">{ui.featuresIntro}</p>
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
          <BotCTA size="lg" prefill={`premium_${item.months}`} />
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

      {/* What happens after */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="after-heading">
        <h2 id="after-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {ui.afterHeading}
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--text-muted)]">
          <p>{ui.afterP1}</p>
          <p>{ui.afterP2}</p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="compare-heading">
        <h2 id="compare-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {ui.compareHeading}
        </h2>
        <div className="uz-card overflow-hidden rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--muted)] text-left">
              <tr>
                <th className="px-3 py-3 font-semibold sm:px-4">{ui.thPeriod}</th>
                <th className="px-3 py-3 font-semibold sm:px-4">{ui.thPrice}</th>
                <th className="px-3 py-3 font-semibold sm:px-4">{ui.thPerMonth}</th>
                <th className="hidden px-4 py-3 font-semibold sm:table-cell">{ui.thSavings}</th>
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
                          {p.months} {ui.monthShort} <span className="text-xs text-[var(--primary)]">{ui.current}</span>
                        </span>
                      ) : (
                        <Link href={localePath(lang, `/premium/${p.slug}`)} className="text-[var(--primary)] hover:underline">
                          {p.months} {ui.monthShort}
                        </Link>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">{formatUzs(p.priceUzs)}</td>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">{formatUzs(p.perMonthHint)}</td>
                    <td className="hidden px-4 py-3 text-[var(--text-muted)] sm:table-cell">
                      {p.months === 3 ? '—' : ui.savingsCell(formatUzs(Math.round(totalSavings)), p.months)}
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
          {ui.aboutHeading}
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--text-muted)]">
          <p>{ui.aboutP1}</p>
          <p>{ui.aboutP2}</p>
          <p>{ui.aboutP3}</p>
        </div>
      </section>

      <FAQ items={allFAQ} title={ui.faqTitle} />

      {/* Final CTA */}
      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{ui.finalHeading}</h2>
        <p className="mt-3 text-[var(--text-muted)]">
          {ui.finalBodyPre}
          <Link href={localePath(lang, '/stars')} className="text-[var(--primary)] hover:underline">{ui.finalBodyLink}</Link>.
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
              <span className="font-semibold">{ui.otherPeriodLabel(p.months)}</span>
              <span className="font-medium text-[var(--primary)]">{formatUzs(p.priceUzs)} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
