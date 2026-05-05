import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/Hero'
import { PriceCard } from '@/components/PriceCard'
import { FAQ, type FAQItem } from '@/components/FAQ'
import { BotCTA } from '@/components/BotCTA'
import { JsonLd } from '@/components/JsonLd'
import { AnswerBox } from '@/components/AnswerBox'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, STARS_BASE } from '@/config/products'
import { getStarsUseCases, getPaymentMethods } from '@/config/static-content'
import { formatUzs, formatNumber } from '@/lib/format'
import { type Locale, isLocale } from '@/i18n/config'

type Params = { lang: string }

type AmountGuide = { range: string; title: string; description: string }
type HowToStep = { name: string; text: string }

type PageStrings = {
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ogDescription: string
  heroTitle: string
  fromSuffix: string
  heroSubtitle: string
  heroBullets: string[]
  ctaLabel: string
  answerBoxTitle: string
  answerBoxBody: React.ReactNode
  pricesHeading: string
  pricesGridFooter: string
  amountGuideHeading: string
  amountGuideIntro: string
  amountGuide: AmountGuide[]
  useCasesHeading: string
  useCasesIntro: string
  howToHeading: string
  howToSteps: HowToStep[]
  howToSchemaName: string
  howToSchemaDescription: string
  paymentHeading: string
  paymentIntro: string
  aboutHeading: string
  aboutP1: string
  aboutP2: string
  aboutP3: string
  faqTitle: string
  faqItems: FAQItem[]
  finalCtaHeading: string
  finalCtaText1: string
  finalCtaPremiumLink: string
  finalCtaText2: string
  breadcrumbHome: string
  breadcrumbStars: string
  itemListSchemaName: string
  starsName: (amount: string) => string
}

function makeStrings(lang: Locale): PageStrings {
  if (lang === 'ru') {
    return {
      metaTitle: 'Купить Telegram Stars — цены в Узбекистане',
      metaDescription: `Telegram Stars (звёзды) от ${STARS_BASE.amount} штук — ${formatUzs(STARS_BASE.priceUzs)}. Быстрая покупка через ${siteConfig.bot} с локальными методами оплаты. Use cases, сравнение и FAQ.`,
      ogTitle: 'Telegram Stars в Узбекистане — цены и пакеты',
      ogDescription: `${STARS_BASE.amount} Stars — ${formatUzs(STARS_BASE.priceUzs)}. Купите через ${siteConfig.bot}.`,
      heroTitle: 'Telegram Stars',
      fromSuffix: 'дан',
      heroSubtitle: `Покупайте звёзды быстро через ${siteConfig.bot}. Минимальный пакет — ${STARS_BASE.amount} звёзд. Оплата локальными картами.`,
      heroBullets: [
        'Самый маленький пакет: 50 ⭐',
        'Самый большой: 10 000 ⭐',
        'Отправка на любой @username',
        'Быстрая автоматическая доставка',
        'Хранятся на аккаунте бессрочно',
      ],
      ctaLabel: 'Купить Stars',
      answerBoxTitle: 'Краткий ответ: цена и покупка',
      answerBoxBody: (
        <>
          Цены Telegram Stars начинаются от{' '}
          <strong>
            {STARS_BASE.amount} = {formatUzs(STARS_BASE.priceUzs)}
          </strong>{' '}
          и растут пропорционально количеству. Минимальный заказ — {STARS_BASE.amount} звёзд. Покупка совершается в боте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
            {siteConfig.bot}
          </a>
          .
        </>
      ),
      pricesHeading: 'Пакеты Stars и цены',
      pricesGridFooter: 'Доступны и другие количества — в боте можно указать любую сумму.',
      amountGuideHeading: 'Какое количество выбрать?',
      amountGuideIntro:
        'Пакеты Stars подбираются под ваши нужды. Используйте короткое руководство ниже, чтобы выбрать подходящее количество.',
      amountGuide: [
        {
          range: '50–100 ⭐',
          title: 'Для тех, кто пробует',
          description:
            'Самая низкая точка входа. Подходит для пары подарков, набора Premium-эмодзи или одной-двух реакций. Идеально для тех, кто впервые пользуется Stars.',
        },
        {
          range: '250–500 ⭐',
          title: 'Для активных пользователей',
          description:
            'Достаточный запас на месяц регулярных реакций, нескольких подарков и премиум-функций. Подходит активным пользователям Telegram и начинающим контент-креаторам.',
        },
        {
          range: '1000+ ⭐',
          title: 'Для контент-креаторов и бизнеса',
          description:
            'Долгосрочный запас или для монетизации канала/бизнеса. Премиум-функции, поощрение подписчиков, много подарков — на всё хватит.',
        },
      ],
      useCasesHeading: 'Что можно делать с Telegram Stars?',
      useCasesIntro:
        'Звёзды используются в Telegram для разных услуг и премиум-функций. Ниже — основные сценарии использования.',
      howToHeading: 'Как купить Stars?',
      howToSteps: [
        { name: 'Перейти в бот', text: `Откройте бот ${siteConfig.bot} в Telegram и нажмите START.` },
        { name: 'Выбрать раздел Stars', text: 'В меню бота выберите вариант Telegram Stars.' },
        { name: 'Указать количество', text: 'Выберите 50, 100, 500 или любое другое количество.' },
        {
          name: 'Ввести Telegram @username',
          text: 'Введите @username аккаунта получателя — свой или для подарка.',
        },
        {
          name: 'Выбрать способ оплаты',
          text: 'Выберите UzCard, Humo, Click или другой доступный метод и завершите оплату.',
        },
        {
          name: 'Дождаться активации',
          text: 'После подтверждения оплаты Stars автоматически зачислятся на указанный аккаунт.',
        },
      ],
      howToSchemaName: 'Как купить Telegram Stars',
      howToSchemaDescription: `Шаги покупки звёзд Telegram Stars из Узбекистана через бот ${siteConfig.bot}.`,
      paymentHeading: 'Какие методы оплаты принимаются?',
      paymentIntro:
        'Оплата адаптирована под пользователей из Узбекистана — по номеру карты, через интернет-банк или приложение Click.',
      aboutHeading: 'Что такое Telegram Stars и зачем они нужны?',
      aboutP1:
        'Telegram Stars (звёзды Telegram) — официальная цифровая валюта внутри приложения Telegram. Запущена Telegram в 2024 году и открывает пользователям доступ к оплатам товаров внутри приложения, услуг в мини-приложениях, монетизации каналов и подарков.',
      aboutP2:
        'Stars хранятся на аккаунте и тратятся по необходимости. Пользователи могут отправлять звёзды друзьям как подарок, поддерживать авторов каналов, покупать наборы Premium-эмодзи, создавать кастом-эмодзи и пользоваться платными услугами в Telegram Mini App.',
      aboutP3: `Звёзды хранятся бессрочно — купите сейчас, потратите хоть через год — они останутся доступны. Минимальный заказ — ${STARS_BASE.amount} Stars (${formatUzs(STARS_BASE.priceUzs)}). Большие количества рассчитываются пропорционально.`,
      faqTitle: 'Часто задаваемые вопросы про Stars',
      faqItems: [
        {
          question: 'Что такое Telegram Stars?',
          answer:
            'Telegram Stars (звёзды) — официальная цифровая валюта внутри Telegram. С их помощью оплачивают мини-приложения, цифровые товары, подарки и другие сервисы внутри Telegram.',
        },
        {
          question: `Сколько стоят ${STARS_BASE.amount} Telegram Stars?`,
          answer: `${formatUzs(STARS_BASE.priceUzs)}. Это самый маленький заказ в Uzgets — одна звезда выходит примерно за ${(STARS_BASE.priceUzs / STARS_BASE.amount).toFixed(0)} сум. Большие количества рассчитываются пропорционально.`,
        },
        {
          question: 'Сколько стоят 100 Stars?',
          answer: `${formatUzs(STARS_PACKS.find((s) => s.amount === 100)!.priceUzs)}. Чтобы купить, зайдите в ${siteConfig.bot} и укажите количество.`,
        },
        {
          question: 'Сколько стоят 500 Stars?',
          answer: `${formatUzs(STARS_PACKS.find((s) => s.amount === 500)!.priceUzs)}. Популярный пакет для активных пользователей и контент-креаторов.`,
        },
        {
          question: 'Сколько стоят 1000 Stars?',
          answer: `${formatUzs(STARS_PACKS.find((s) => s.amount === 1000)!.priceUzs)}. Подходит для тех, кто часто отправляет подарки или ведёт канал.`,
        },
        {
          question: 'Где используются Telegram Stars?',
          answer:
            'С помощью Stars оплачиваются наборы Premium-эмодзи, кастом-эмодзи, платные реакции, подарки, услуги в мини-приложениях и платный контент в каналах.',
        },
        {
          question: 'Можно ли подарить звёзды другому человеку?',
          answer:
            'Да. При оформлении заказа в боте укажите любой Telegram @username — звёзды отправятся напрямую на этот аккаунт.',
        },
        {
          question: 'Какой минимальный заказ?',
          answer: `${STARS_BASE.amount} звёзд (${formatUzs(STARS_BASE.priceUzs)}). Это минимальная граница, установленная Telegram.`,
        },
        {
          question: 'Есть ли срок действия у Stars?',
          answer:
            'Нет. Купленные звёзды хранятся на аккаунте бессрочно и тратятся в любое время. Они останутся доступны даже через год.',
        },
        {
          question: 'Какое количество выбрать?',
          answer:
            'Для первого знакомства или маленькой покупки — 50–100 ⭐. Для активного пользователя — 250–500 ⭐. Для контент-креатора или долгого запаса — 1000 ⭐ и больше.',
        },
      ],
      finalCtaHeading: 'Готовы заказать Stars?',
      finalCtaText1: 'Откройте бот, выберите количество и аккаунт, завершите оплату. Также доступны ',
      finalCtaPremiumLink: 'Telegram Premium',
      finalCtaText2: '.',
      breadcrumbHome: 'Главная',
      breadcrumbStars: 'Telegram Stars',
      itemListSchemaName: 'Пакеты Telegram Stars',
      starsName: (amount) => `${amount} Telegram Stars`,
    }
  }

  return {
    metaTitle: "Telegram Stars sotib olish — narxlar O'zbekistonda",
    metaDescription: `Telegram Stars (yulduzchalar) ${STARS_BASE.amount} dona ${formatUzs(STARS_BASE.priceUzs)}dan boshlab. ${siteConfig.bot} orqali tezkor sotib olish, mahalliy to'lov usullari bilan. Use case'lar, taqqoslash va FAQ.`,
    ogTitle: "Telegram Stars O'zbekistonda — narxlar va paketlar",
    ogDescription: `${STARS_BASE.amount} ta Stars — ${formatUzs(STARS_BASE.priceUzs)}. ${siteConfig.bot} orqali sotib oling.`,
    heroTitle: 'Telegram Stars',
    fromSuffix: 'dan',
    heroSubtitle: `Yulduzchalarni ${siteConfig.bot} orqali tezda sotib oling. Minimal paket — ${STARS_BASE.amount} ta yulduzcha. Mahalliy kartalar bilan to'lov.`,
    heroBullets: [
      'Eng kichik paket: 50 ⭐',
      'Eng katta: 10 000 ⭐',
      'Istalgan @username ga yuborish',
      'Tezkor avtomatik yetkazib berish',
      'Muddatsiz akkauntda saqlanadi',
    ],
    ctaLabel: 'Stars sotib olish',
    answerBoxTitle: 'Qisqa javob: narx va sotib olish',
    answerBoxBody: (
      <>
        Telegram Stars narxlari{' '}
        <strong>
          {STARS_BASE.amount} ta = {formatUzs(STARS_BASE.priceUzs)}
        </strong>{' '}
        dan boshlanadi va miqdorga proportsional ko&apos;tariladi. Eng kichik buyurtma — {STARS_BASE.amount} ta
        yulduzcha. Sotib olish{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
          {siteConfig.bot}
        </a>{' '}
        botida amalga oshiriladi.
      </>
    ),
    pricesHeading: 'Stars paketlari va narxlari',
    pricesGridFooter: "Boshqa miqdorlar ham mavjud — botda istagan miqdorni ko'rsatishingiz mumkin.",
    amountGuideHeading: 'Qaysi miqdorni tanlash kerak?',
    amountGuideIntro:
      "Stars paketlari ehtiyojga qarab tanlanadi. Quyidagi qisqa qo'llanmaga qarab o'zingizga mos miqdorni tanlang.",
    amountGuide: [
      {
        range: '50–100 ⭐',
        title: "Tizimni sinab ko'ruvchilar uchun",
        description:
          "Eng past kirish nuqtasi. Bir-ikki sovg'a, premium emoji to'plami yoki bir-ikki marta reaksiya yuborish uchun mos. Stars'ni birinchi marta ishlatuvchilar uchun ideal.",
      },
      {
        range: '250–500 ⭐',
        title: 'Faol foydalanuvchilar uchun',
        description:
          "Bir oy davomida regulyar reaksiyalar, bir necha sovg'alar, premium funksiyalar uchun yetarli zaxira. Faol Telegram foydalanuvchilari va boshlovchi content kreatorlar uchun mos.",
      },
      {
        range: '1000+ ⭐',
        title: 'Content kreatorlari va biznes uchun',
        description:
          "Uzoq muddatli zaxira yoki kanal/biznes monetizatsiyasi uchun. Premium funksiyalar, obunachilarni rag'batlantirish, ko'p sovg'alar — hammasiga yetadi.",
      },
    ],
    useCasesHeading: 'Telegram Stars bilan nima qilish mumkin?',
    useCasesIntro:
      "Yulduzchalar Telegram'da turli xizmatlar va premium funksiyalar uchun ishlatiladi. Quyida asosiy ishlatish holatlari.",
    howToHeading: 'Stars qanday sotib olinadi?',
    howToSteps: [
      { name: "Botga o'tish", text: `Telegram'da ${siteConfig.bot} botiga kiring va START tugmasini bosing.` },
      { name: "Stars bo'limini tanlash", text: 'Bot menyusidan Telegram Stars variantini tanlang.' },
      { name: 'Miqdorni belgilash', text: '50, 100, 500 yoki istalgan boshqa miqdorni tanlang.' },
      {
        name: 'Telegram @username kiritish',
        text: "Yulduzchalar yuboriladigan akkauntning @username manzilini kiriting — o'zingizniki yoki sovg'a uchun.",
      },
      {
        name: "To'lov usulini tanlash",
        text: "UzCard, Humo, Click yoki boshqa mavjud to'lov usulidan birini tanlab to'lovni yakunlang.",
      },
      {
        name: 'Faollashtirishni kutish',
        text: "To'lov tasdiqlangach, Stars ko'rsatilgan akkauntga avtomatik biriktiriladi.",
      },
    ],
    howToSchemaName: 'Telegram Stars qanday sotib olinadi',
    howToSchemaDescription: `${siteConfig.bot} orqali Telegram Stars yulduzchalarini O'zbekistondan sotib olish bo'yicha qadamlar.`,
    paymentHeading: "Qaysi to'lov usullari qabul qilinadi?",
    paymentIntro:
      "To'lov O'zbekiston foydalanuvchilari uchun moslashtirilgan — kart raqami, internet bank yoki Click ilovasi orqali bemalol amalga oshiriladi.",
    aboutHeading: 'Telegram Stars nima va u nimaga kerak?',
    aboutP1:
      "Telegram Stars (Telegram yulduzchalari) — Telegram ilovasi ichidagi rasmiy raqamli to'lov birligi. U Telegram tomonidan 2024 yilda joriy etilgan bo'lib, foydalanuvchilar uchun ilova ichidagi mahsulotlarga, mini-ilovalardagi xizmatlarga, kanal monetizatsiyasiga va sovg'alarga to'lash imkoniyatini ochadi.",
    aboutP2:
      "Stars akkauntda saqlanadi va kerak bo'lganda sarflanadi. Foydalanuvchilar Stars orqali do'stlariga sovg'a yuborishi, kanal mualliflarini qo'llab-quvvatlashi, premium emoji to'plamlarini sotib olishi, custom emoji yaratishi va Telegram Mini App'lardagi pullik xizmatlardan foydalanishi mumkin.",
    aboutP3: `Yulduzchalar muddatsiz saqlanadi — sotib olib, bir yildan keyin sarflasangiz ham mavjud bo'ladi. Eng kichik buyurtma — ${STARS_BASE.amount} ta Stars (${formatUzs(STARS_BASE.priceUzs)}). Keyingi miqdorlar shu ratiyaga proportsional hisoblanadi.`,
    faqTitle: 'Stars haqida tez-tez beriladigan savollar',
    faqItems: [
      {
        question: 'Telegram Stars nima?',
        answer:
          "Telegram Stars (yulduzchalar) — Telegram ilovasi ichidagi rasmiy raqamli to'lov birligi. Ular yordamida mini-ilovalar, raqamli mahsulotlar, sovg'alar va boshqa Telegram-ichi xizmatlar uchun to'lov amalga oshiriladi.",
      },
      {
        question: `${STARS_BASE.amount} ta Telegram Stars qancha turadi?`,
        answer: `${formatUzs(STARS_BASE.priceUzs)}. Bu Uzgetsda eng kichik buyurtma — 1 yulduzcha taxminan ${(STARS_BASE.priceUzs / STARS_BASE.amount).toFixed(0)} so'mga tushadi. Ko'proq miqdor uchun narx shu nisbatda hisoblanadi.`,
      },
      {
        question: '100 ta Stars qancha turadi?',
        answer: `${formatUzs(STARS_PACKS.find((s) => s.amount === 100)!.priceUzs)}. Sotib olish uchun ${siteConfig.bot} ga kiring va miqdorni belgilang.`,
      },
      {
        question: '500 ta Stars qancha turadi?',
        answer: `${formatUzs(STARS_PACKS.find((s) => s.amount === 500)!.priceUzs)}. Faol foydalanuvchilar va content kreatorlari uchun mashhur paket.`,
      },
      {
        question: '1000 ta Stars qancha turadi?',
        answer: `${formatUzs(STARS_PACKS.find((s) => s.amount === 1000)!.priceUzs)}. Ko'p sovg'a yuboradigan yoki kanal yurituvchilar uchun mos.`,
      },
      {
        question: 'Telegram Stars nimaga ishlatiladi?',
        answer:
          "Stars yordamida premium emoji to'plamlari, custom emoji, pullik reaksiyalar, sovg'alar yuborish, mini-ilovalardagi xizmatlar va kanaldagi pullik kontent uchun to'lov amalga oshiriladi.",
      },
      {
        question: "Yulduzchalarni boshqa kishiga sovg'a qila olamanmi?",
        answer:
          "Ha. Botda buyurtma berishda istalgan Telegram @username kiritsangiz, Stars o'sha akkauntga to'g'ridan-to'g'ri yuboriladi.",
      },
      {
        question: 'Eng kam buyurtma miqdori qancha?',
        answer: `${STARS_BASE.amount} ta yulduzcha (${formatUzs(STARS_BASE.priceUzs)}). Bu Telegram tarafida o'rnatilgan minimal chegara.`,
      },
      {
        question: 'Stars muddati cheklanganmi?',
        answer:
          "Yo'q. Sotib olingan yulduzchalar akkauntda muddatsiz saqlanadi va istalgan vaqtda sarflasa bo'ladi. Bir yildan keyin sarflasangiz ham mavjud bo'ladi.",
      },
      {
        question: 'Qaysi miqdorni tanlash kerak?',
        answer:
          "Birinchi marta ishlatuvchi yoki kichik xarid uchun — 50–100 ⭐. Faol foydalanuvchi uchun — 250–500 ⭐. Content kreator yoki uzoq muddatli zaxira uchun — 1000 ⭐ va undan ko'p.",
      },
    ],
    finalCtaHeading: 'Stars buyurtma berish uchun',
    finalCtaText1: "Botga o'ting, miqdorni va akkauntni belgilab to'lovni yakunlang. ",
    finalCtaPremiumLink: 'Telegram Premium',
    finalCtaText2: ' ham mavjud.',
    breadcrumbHome: 'Bosh sahifa',
    breadcrumbStars: 'Telegram Stars',
    itemListSchemaName: 'Telegram Stars paketlari',
    starsName: (amount) => `${amount} Telegram Stars`,
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) return {}
  const lang: Locale = langRaw
  const t = makeStrings(lang)
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/${lang}/stars` },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: `${siteConfig.url}/${lang}/stars`,
    },
  }
}

export default async function StarsPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const t = makeStrings(lang)

  const STARS_USE_CASES = getStarsUseCases(lang)
  const PAYMENT_METHODS = getPaymentMethods(lang)

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.itemListSchemaName,
    itemListElement: STARS_PACKS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteConfig.url}/${lang}/stars/${s.slug}`,
      name: t.starsName(formatNumber(s.amount)),
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${siteConfig.url}/${lang}` },
      { '@type': 'ListItem', position: 2, name: t.breadcrumbStars, item: `${siteConfig.url}/${lang}/stars` },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t.howToSchemaName,
    description: t.howToSchemaDescription,
    totalTime: 'PT2M',
    step: t.howToSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqItems.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }

  return (
    <>
      <JsonLd data={itemListSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        eyebrow="Telegram Stars"
        title={
          <>
            {t.heroTitle}
            <br />
            <span className="text-[var(--primary)]">
              {formatUzs(STARS_BASE.priceUzs)}
              {t.fromSuffix}
            </span>
          </>
        }
        subtitle={t.heroSubtitle}
        bullets={t.heroBullets}
        ctaLabel={t.ctaLabel}
      />

      <AnswerBox title={t.answerBoxTitle}>
        <p>{t.answerBoxBody}</p>
      </AnswerBox>

      <section className="mx-auto max-w-6xl px-4 py-8" aria-labelledby="prices-heading">
        <h2 id="prices-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {t.pricesHeading}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {STARS_PACKS.map((s) => (
            <PriceCard
              key={s.slug}
              title={`${formatNumber(s.amount)} ⭐`}
              subtitle="Telegram Stars"
              priceUzs={s.priceUzs}
              href={`/${lang}/stars/${s.slug}`}
              badge={s.badge}
              highlight={s.amount === 500}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--text-muted)]">{t.pricesGridFooter}</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="amount-guide-heading">
        <h2 id="amount-guide-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.amountGuideHeading}
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">{t.amountGuideIntro}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.amountGuide.map((g) => (
            <div key={g.range} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="text-lg font-bold text-[var(--primary)]">{g.range}</div>
              <div className="mt-1 text-sm font-semibold">{g.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{g.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="usecases-heading">
        <h2 id="usecases-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.useCasesHeading}
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">{t.useCasesIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STARS_USE_CASES.map((u) => (
            <div key={u.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="flex items-center gap-2 font-semibold">
                <svg
                  className="text-[var(--primary)]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2 L14.5 9 L22 9.3 L16 14 L18.2 22 L12 17.5 L5.8 22 L8 14 L2 9.3 L9.5 9 Z" />
                </svg>
                {u.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{u.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="howto-heading">
        <h2 id="howto-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {t.howToHeading}
        </h2>
        <ol className="space-y-3">
          {t.howToSteps.map((s, i) => (
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
          <BotCTA size="lg" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="payment-heading">
        <h2 id="payment-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.paymentHeading}
        </h2>
        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">{t.paymentIntro}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {PAYMENT_METHODS.map((p) => (
            <div key={p.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="font-semibold">{p.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="about-heading">
        <h2 id="about-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.aboutHeading}
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--text-muted)]">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <p>{t.aboutP3}</p>
        </div>
      </section>

      <FAQ items={t.faqItems} title={t.faqTitle} />

      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.finalCtaHeading}</h2>
        <p className="mt-3 text-[var(--text-muted)]">
          {t.finalCtaText1}
          <Link href={`/${lang}/premium`} className="text-[var(--primary)] hover:underline">
            {t.finalCtaPremiumLink}
          </Link>
          {t.finalCtaText2}
        </p>
        <div className="mt-6 flex justify-center">
          <BotCTA size="lg" />
        </div>
      </section>
    </>
  )
}
