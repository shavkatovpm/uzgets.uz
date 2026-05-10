import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/Hero'
import { PriceCard } from '@/components/PriceCard'
import { FAQ, type FAQItem } from '@/components/FAQ'
import { BotCTA } from '@/components/BotCTA'
import { JsonLd } from '@/components/JsonLd'
import { AnswerBox } from '@/components/AnswerBox'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS, STARS_PACKS, STARS_BASE } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { type Locale, isLocale, localePath, localeUrl } from '@/i18n/config'

type Params = { lang: string }

const PAGE_STRINGS = {
  uz: {
    heroEyebrow: "Telegram Premium va Stars O'zbekistonda",
    heroTitleLine1: 'Telegram Premium va Stars',
    heroTitleHighlight: 'qulay narxda',
    heroSubtitle: (priceFrom: string) =>
      `Uzgets — Telegram obunalari va yulduzchalarni O'zbekistondan mahalliy to'lov usullari orqali sotib olish uchun ${siteConfig.bot}. ${priceFrom}dan boshlab.`,
    heroBullets: [
      "UzCard, Humo, Click bilan to'lov",
      'Istalgan Telegram username uchun',
      'Premium 3 / 6 / 12 oylik obunalar',
      `Stars ${STARS_BASE.amount} dan boshlab`,
    ],
    heroCtaLabel: "Sotib olish",
    answerBoxTitle: 'Qisqa javob: nima qilish kerak?',
    answerBoxBefore: 'Telegramda ',
    answerBoxAfter:
      ' ga kiring, START bosing, Telegram username kiriting va Premium (3 / 6 / 12 oy) yoki Stars miqdorini tanlab to‘lov qiling. Mahsulot avtomatik kiritilgan akkauntga yetkaziladi.',
    whyHeading: 'Nima uchun Uzgets?',
    whyCards: [
      {
        title: "Mahalliy to'lov",
        description: 'UzCard, Humo va Click orqali — chet el karta talab etilmaydi.',
      },
      {
        title: 'Tezkor yetkazib berish',
        description: "To'lovdan so'ng mahsulot avtomatik akkauntga biriktiriladi.",
      },
      {
        title: "Sovg'a uchun mos",
        description: "Istalgan Telegram @username ga yuborish — sovg'a sifatida ham olishingiz mumkin.",
      },
      {
        title: 'Qulay narxlar',
        description: 'Premium 3/6/12 oylik va Stars 50 dan 10 000 gacha — ehtiyojga qarab tanlash.',
      },
    ],
    premiumHeading: 'Telegram Premium narxlari',
    premiumSubtitle: 'Bozordagi eng raqobatbardosh narxlardan biri.',
    premiumReadMore: 'Batafsil →',
    premiumPeriodTitle: (months: number) => `${months} oylik`,
    premiumPeriodSubtitle: 'Telegram Premium obuna',
    premiumPeriodFooter: (price: string) => `Oyiga taxminan ${price}`,
    starsHeading: 'Telegram Stars',
    starsSubtitle: "Yulduzchalar — Telegramdagi raqamli to'lov birligi.",
    starsReadAll: 'Hammasi →',
    starsCardSubtitle: 'Telegram Stars',
    howHeading: 'Qanday sotib olinadi?',
    howToName: "Uzgets orqali Telegram Premium yoki Stars sotib olish",
    howToDescription:
      "Telegram bot orqali Premium obuna yoki Stars yulduzchalarni O'zbekistondan sotib olish bo'yicha qadamlar.",
    howToSteps: [
      {
        name: "Botga o'tish",
        text: `Telegramda ${siteConfig.bot} botiga kiring va START tugmasini bosing.`,
      },
      {
        name: 'Username kiritish',
        text: "Buyurtma yuboriladigan Telegram akkauntning @username manzilini kiriting (o'zingizniki yoki sovg'a uchun).",
      },
      {
        name: 'Mahsulot va muddatni tanlash',
        text: 'Telegram Premium (3, 6 yoki 12 oylik) yoki Telegram Stars miqdorini tanlang.',
      },
      {
        name: "To'lovni amalga oshirish",
        text: "UzCard, Humo, Click yoki boshqa mahalliy to'lov usuli orqali to'lovni yakunlang.",
      },
      {
        name: 'Faollashtirishni kutish',
        text: "To'lov tasdiqlangach, Premium obuna yoki Stars yulduzchalar ko'rsatilgan akkauntga avtomatik biriktiriladi.",
      },
    ],
    breadcrumbHome: 'Bosh sahifa',
    finalCtaHeading: 'Hoziroq sotib oling',
    finalCtaBody: (bot: string) => `Telegramdagi ${bot} sizga Premium yoki Stars sotib olishda yordam beradi.`,
    faqItems: (priceFrom: { p3: string; p6: string; p12: string; starsBase: string; starsBaseAmount: number }): FAQItem[] => [
      {
        question: "Telegram Premium O'zbekistonda qancha turadi?",
        answer: `Uzgetsda Telegram Premium narxlari: 3 oylik — ${priceFrom.p3}, 6 oylik — ${priceFrom.p6}, 12 oylik — ${priceFrom.p12}. To'lov UzCard, Humo, Click va boshqa mahalliy usullar orqali amalga oshiriladi.`,
      },
      {
        question: 'Telegram Stars qancha turadi?',
        answer: `${priceFrom.starsBaseAmount} ta Telegram Stars ${priceFrom.starsBase}. Ko'proq miqdor uchun narx shu nisbatda hisoblanadi. Minimal buyurtma — ${priceFrom.starsBaseAmount} ta yulduzcha.`,
      },
      {
        question: 'Premium yoki Stars qanday sotib olinadi?',
        answer: `Telegramda ${siteConfig.bot} ga kiring, START tugmasini bosing, Telegram username kiriting, kerakli mahsulotni (Premium yoki Stars) va miqdorni tanlang, to'lovni amalga oshiring. Buyurtma avtomatik tarzda kiritilgan akkauntga yetkaziladi.`,
      },
      {
        question: "Boshqa odamning akkauntiga sovg'a sifatida olsa bo'ladimi?",
        answer:
          "Ha. Buyurtma uchun istalgan Telegram username kiritishingiz mumkin — Premium yoki Stars o'sha akkauntga yo'naltiriladi. Bu sovg'a sifatida ham, o'zingiz uchun ham qo'llanadi.",
      },
      {
        question: 'Buyurtma necha vaqtda yetkaziladi?',
        answer: `To'lov tasdiqlanganidan so'ng, mahsulot ${siteConfig.bot} orqali ko'rsatilgan akkauntga avtomatik kiritiladi. Agar muammo yuzaga kelsa, botdagi qo'llab-quvvatlash xizmatiga murojaat qiling.`,
      },
    ],
  },
  ru: {
    heroEyebrow: 'Telegram Premium и Stars в Узбекистане',
    heroTitleLine1: 'Telegram Premium и Stars',
    heroTitleHighlight: 'по выгодной цене',
    heroSubtitle: (priceFrom: string) =>
      `Uzgets — ${siteConfig.bot} для покупки подписок Telegram и звёзд из Узбекистана с помощью локальных способов оплаты. От ${priceFrom}.`,
    heroBullets: [
      'Оплата UzCard, Humo, Click',
      'Для любого Telegram username',
      'Premium на 3 / 6 / 12 месяцев',
      `Stars от ${STARS_BASE.amount}`,
    ],
    heroCtaLabel: 'Купить',
    answerBoxTitle: 'Краткий ответ: что делать?',
    answerBoxBefore: 'Откройте в Telegram ',
    answerBoxAfter:
      ', нажмите START, введите Telegram username и выберите Premium (3 / 6 / 12 мес.) или количество Stars, затем оплатите. Товар автоматически зачислится на указанный аккаунт.',
    whyHeading: 'Почему Uzgets?',
    whyCards: [
      {
        title: 'Локальная оплата',
        description: 'Через UzCard, Humo и Click — иностранная карта не требуется.',
      },
      {
        title: 'Быстрая доставка',
        description: 'После оплаты товар автоматически зачисляется на аккаунт.',
      },
      {
        title: 'Удобно для подарка',
        description: 'Отправка на любой Telegram @username — можно купить и в подарок.',
      },
      {
        title: 'Выгодные цены',
        description: 'Premium на 3/6/12 месяцев и Stars от 50 до 10 000 — выбор по потребностям.',
      },
    ],
    premiumHeading: 'Цены на Telegram Premium',
    premiumSubtitle: 'Одни из самых конкурентных цен на рынке.',
    premiumReadMore: 'Подробнее →',
    premiumPeriodTitle: (months: number) => `${months} мес.`,
    premiumPeriodSubtitle: 'Подписка Telegram Premium',
    premiumPeriodFooter: (price: string) => `В месяц примерно ${price}`,
    starsHeading: 'Telegram Stars',
    starsSubtitle: 'Звёзды — цифровая платёжная единица в Telegram.',
    starsReadAll: 'Все →',
    starsCardSubtitle: 'Telegram Stars',
    howHeading: 'Как купить?',
    howToName: 'Покупка Telegram Premium или Stars через Uzgets',
    howToDescription:
      'Шаги покупки подписки Premium или звёзд Stars из Узбекистана через Telegram-бот.',
    howToSteps: [
      {
        name: 'Перейти в бот',
        text: `Откройте в Telegram бот ${siteConfig.bot} и нажмите START.`,
      },
      {
        name: 'Указать username',
        text: 'Введите @username Telegram-аккаунта, на который зачислится заказ (свой или для подарка).',
      },
      {
        name: 'Выбрать товар и срок',
        text: 'Выберите Telegram Premium (3, 6 или 12 месяцев) либо нужное количество Telegram Stars.',
      },
      {
        name: 'Оплатить',
        text: 'Завершите оплату через UzCard, Humo, Click или другой локальный способ оплаты.',
      },
      {
        name: 'Дождаться активации',
        text: 'После подтверждения оплаты подписка Premium или звёзды Stars автоматически зачислятся на указанный аккаунт.',
      },
    ],
    breadcrumbHome: 'Главная',
    finalCtaHeading: 'Купите прямо сейчас',
    finalCtaBody: (bot: string) => `${bot} в Telegram поможет вам купить Premium или Stars.`,
    faqItems: (priceFrom: { p3: string; p6: string; p12: string; starsBase: string; starsBaseAmount: number }): FAQItem[] => [
      {
        question: 'Сколько стоит Telegram Premium в Узбекистане?',
        answer: `Цены на Telegram Premium в Uzgets: 3 месяца — ${priceFrom.p3}, 6 месяцев — ${priceFrom.p6}, 12 месяцев — ${priceFrom.p12}. Оплата выполняется через UzCard, Humo, Click и другие локальные способы.`,
      },
      {
        question: 'Сколько стоят Telegram Stars?',
        answer: `${priceFrom.starsBaseAmount} Telegram Stars — ${priceFrom.starsBase}. Большее количество рассчитывается пропорционально. Минимальный заказ — ${priceFrom.starsBaseAmount} звёзд.`,
      },
      {
        question: 'Как купить Premium или Stars?',
        answer: `Откройте ${siteConfig.bot} в Telegram, нажмите START, введите Telegram username, выберите нужный товар (Premium или Stars) и количество, затем оплатите. Заказ автоматически зачислится на указанный аккаунт.`,
      },
      {
        question: 'Можно ли купить в подарок на чужой аккаунт?',
        answer:
          'Да. Для заказа можно ввести любой Telegram username — Premium или Stars поступят именно на этот аккаунт. Подходит и в подарок, и для себя.',
      },
      {
        question: 'Когда поступит заказ?',
        answer: `После подтверждения оплаты товар автоматически зачисляется на указанный аккаунт через ${siteConfig.bot}. Если возникнет проблема — обратитесь в поддержку в боте.`,
      },
    ],
  },
} as const

export default async function HomePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const t = PAGE_STRINGS[lang]

  const featuredStars = STARS_PACKS.filter((s) => [50, 100, 500, 1000].includes(s.amount))

  const faqItems = t.faqItems({
    p3: formatUzs(PREMIUM_PERIODS[0].priceUzs),
    p6: formatUzs(PREMIUM_PERIODS[1].priceUzs),
    p12: formatUzs(PREMIUM_PERIODS[2].priceUzs),
    starsBase: formatUzs(STARS_BASE.priceUzs),
    starsBaseAmount: STARS_BASE.amount,
  })

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t.howToName,
    description: t.howToDescription,
    totalTime: 'PT2M',
    step: t.howToSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(i === 0 ? { url: `${localeUrl(siteConfig.url, lang)}#qadamlar` } : {}),
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: localeUrl(siteConfig.url, lang) },
    ],
  }

  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Hero
        eyebrow={t.heroEyebrow}
        title={
          <>
            {t.heroTitleLine1}
            <br />
            <span className="text-[var(--primary)]">{t.heroTitleHighlight}</span>
          </>
        }
        subtitle={t.heroSubtitle(formatUzs(PREMIUM_PERIODS[0].priceUzs))}
        bullets={[...t.heroBullets]}
        ctaLabel={t.heroCtaLabel}
      />

      <AnswerBox title={t.answerBoxTitle}>
        <p>
          {t.answerBoxBefore}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
            {siteConfig.bot}
          </a>
          {t.answerBoxAfter}
        </p>
      </AnswerBox>

      {/* Why Uzgets */}
      <section className="mx-auto max-w-5xl px-4 py-10" aria-labelledby="why-heading">
        <h2 id="why-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {t.whyHeading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyCards.map((item) => (
            <div key={item.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="font-semibold">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="premium-prices">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 id="premium-prices" className="text-2xl font-bold sm:text-3xl">{t.premiumHeading}</h2>
            <p className="mt-1 text-[var(--text-muted)]">{t.premiumSubtitle}</p>
          </div>
          <Link href={localePath(lang, '/premium')} className="hidden text-sm font-medium text-[var(--primary)] hover:underline sm:block">
            {t.premiumReadMore}
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {PREMIUM_PERIODS.map((p) => (
            <PriceCard
              key={p.slug}
              title={t.premiumPeriodTitle(p.months)}
              subtitle={t.premiumPeriodSubtitle}
              priceUzs={p.priceUzs}
              href={localePath(lang, `/premium/${p.slug}`)}
              badge={p.badge}
              highlight={p.months === 12}
              footerHint={t.premiumPeriodFooter(formatUzs(p.perMonthHint))}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="stars-prices">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 id="stars-prices" className="text-2xl font-bold sm:text-3xl">{t.starsHeading}</h2>
            <p className="mt-1 text-[var(--text-muted)]">{t.starsSubtitle}</p>
          </div>
          <Link href={localePath(lang, '/stars')} className="hidden text-sm font-medium text-[var(--primary)] hover:underline sm:block">
            {t.starsReadAll}
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStars.map((s) => (
            <PriceCard
              key={s.slug}
              title={`${formatNumber(s.amount)} ⭐`}
              subtitle={t.starsCardSubtitle}
              priceUzs={s.priceUzs}
              href={localePath(lang, `/stars/${s.slug}`)}
              badge={s.badge}
            />
          ))}
        </div>
      </section>

      <section id="qadamlar" className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="mb-6 text-2xl font-bold sm:text-3xl">{t.howHeading}</h2>
        <ol className="space-y-4">
          {t.howToSteps.map((step, i) => (
            <li key={i} className="uz-card flex gap-4 rounded-xl border border-[var(--border)] p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
                {i + 1}
              </span>
              <div>
                <div className="font-semibold">{step.name}</div>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <BotCTA size="lg" />
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.finalCtaHeading}</h2>
        <p className="mt-3 text-[var(--text-muted)]">
          {t.finalCtaBody(siteConfig.bot)}
        </p>
        <div className="mt-6 flex justify-center">
          <BotCTA size="lg" />
        </div>
      </section>
    </>
  )
}
