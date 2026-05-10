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
import { PREMIUM_PERIODS } from '@/config/products'
import { getPremiumFeatures, getPaymentMethods } from '@/config/static-content'
import { formatUzs } from '@/lib/format'
import { type Locale, isLocale, localePath, localeUrl } from '@/i18n/config'

type Params = { lang: string }

type DecisionCard = { period: string; when: string; pros: string[]; cons: string[] }
type HowToStep = { name: string; text: string }

type PageStrings = {
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ogDescription: string
  heroTitle: string
  heroSubtitle: string
  heroBullets: string[]
  ctaLabel: string
  answerBoxTitle: string
  answerBoxLeadIn: string
  pricesHeading: string
  decisionHeading: string
  decisionIntro: string
  decisionGuide: DecisionCard[]
  prosLabel: string
  consLabel: string
  compareHeading: string
  thMonth: string
  thPrice: string
  thPerMonth: string
  thSavings: string
  monthsShort: string
  forMonths: (n: number) => string
  featuresHeading: string
  featuresIntro: string
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
  finalCtaStarsLink: string
  finalCtaText2: string
  breadcrumbHome: string
  breadcrumbPremium: string
  itemListSchemaName: string
  premiumName: (months: number) => string
  cardTitle: (months: number) => string
}

function makeStrings(lang: Locale): PageStrings {
  if (lang === 'ru') {
    return {
      metaTitle: 'Telegram Premium — цены в Узбекистане на 3, 6, 12 месяцев',
      metaDescription: `Telegram Premium 3 месяца — ${formatUzs(PREMIUM_PERIODS[0].priceUzs)}, 6 месяцев — ${formatUzs(PREMIUM_PERIODS[1].priceUzs)}, 12 месяцев — ${formatUzs(PREMIUM_PERIODS[2].priceUzs)}. Оплата UzCard/Humo/Click, автоматическая активация через ${siteConfig.bot}. Возможности, сравнение и FAQ.`,
      ogTitle: 'Telegram Premium в Узбекистане — цены на 3, 6, 12 месяцев',
      ogDescription: `Цены Telegram Premium от ${formatUzs(PREMIUM_PERIODS[0].priceUzs)}. Купите через ${siteConfig.bot}.`,
      heroTitle: 'Telegram Premium',
      heroSubtitle:
        'Купите подписку Telegram Premium на 3, 6 или 12 месяцев через локальные методы оплаты Узбекистана. Подписка автоматически активируется на указанный @username.',
      heroBullets: [
        'Загрузка файлов до 4 ГБ',
        'Удвоенные лимиты',
        'Без рекламы',
        'Premium-эмодзи и стикеры',
        'Расшифровка голосовых',
        'Premium-значок в профиле',
      ],
      ctaLabel: 'Купить Premium',
      answerBoxTitle: 'Краткий ответ: цена и покупка',
      answerBoxLeadIn: 'Цены Telegram Premium в Uzgets:',
      pricesHeading: 'Цены подписок Premium',
      decisionHeading: 'Какой срок выбрать?',
      decisionIntro:
        'Premium доступен в трёх вариантах. Используйте короткое руководство ниже, чтобы выбрать подходящий пакет.',
      decisionGuide: [
        {
          period: '3 месяца',
          when: 'Для тех, кто впервые пробует Premium, нуждается в коротком сроке или хочет подарить',
          pros: ['Самая низкая входная цена', 'Низкий риск проб', 'Удобно для подарка'],
          cons: ['Самая высокая цена в месяц', 'Заканчивается быстро'],
        },
        {
          period: '6 месяцев',
          when: 'Для тех, кому нужен Premium регулярно, но не готовы к годовой подписке',
          pros: ['Самый сбалансированный выбор', 'Дешевле 3-месячного', 'Гибкость на полгода'],
          cons: ['Чуть дороже 12-месячного'],
        },
        {
          period: '12 месяцев',
          when: 'Для активных пользователей Telegram, контент-креаторов и владельцев бизнеса',
          pros: ['Самая низкая цена в месяц', 'Максимальная экономия (264 000 сум против 3-мес × 4)', 'Годовая стабильность'],
          cons: ['408 000 сум разовым платежом'],
        },
      ],
      prosLabel: 'Плюсы',
      consLabel: 'Минусы',
      compareHeading: 'Сравнение сроков',
      thMonth: 'Срок',
      thPrice: 'Цена',
      thPerMonth: 'В месяц',
      thSavings: 'Экономия',
      monthsShort: 'мес.',
      forMonths: (n) => `(на ${n} мес.)`,
      featuresHeading: 'Что даёт Telegram Premium? 12 возможностей',
      featuresIntro:
        'Telegram Premium — подписка, которая раскрывает расширенные возможности Telegram. Ниже все ключевые возможности, которыми вы пользуетесь во время действия подписки.',
      howToHeading: 'Как купить Premium?',
      howToSteps: [
        { name: 'Перейти в бот', text: `Откройте бот ${siteConfig.bot} в Telegram и нажмите START.` },
        { name: 'Выбрать раздел Premium', text: 'В меню бота выберите вариант Telegram Premium.' },
        { name: 'Выбрать срок', text: 'Выберите один из пакетов: 3, 6 или 12 месяцев.' },
        {
          name: 'Ввести Telegram @username',
          text: 'Введите @username аккаунта, к которому будет привязан Premium — свой или для подарка.',
        },
        {
          name: 'Выбрать способ оплаты',
          text: 'Выберите UzCard, Humo, Click или другой доступный метод и завершите оплату.',
        },
        {
          name: 'Дождаться активации',
          text: 'После подтверждения оплаты Telegram Premium автоматически активируется на указанном аккаунте.',
        },
      ],
      howToSchemaName: 'Как купить Telegram Premium',
      howToSchemaDescription: `Шаги покупки подписки Telegram Premium из Узбекистана через бот ${siteConfig.bot}.`,
      paymentHeading: 'Какие методы оплаты принимаются?',
      paymentIntro:
        'Оплата адаптирована под пользователей из Узбекистана — по номеру карты, через интернет-банк или приложение Click.',
      aboutHeading: 'Что такое Telegram Premium и зачем он нужен?',
      aboutP1:
        'Telegram Premium — официальная платная подписка мессенджера Telegram. Она была запущена Telegram в 2022 году и даёт пользователям доступ к расширенным возможностям мессенджера.',
      aboutP2:
        'Для Premium-пользователей лимит загрузки файлов удваивается (2 ГБ → 4 ГБ), лимиты каналов и папок увеличиваются вдвое, не показывается реклама, открываются Premium-эмодзи и возможность создавать кастом-эмодзи, голосовые сообщения автоматически расшифровываются — и десятки других возможностей.',
      aboutP3:
        'Premium особенно ценен для тех, кто пользуется Telegram ежедневно — администраторов каналов и групп, тех, кто часто делится файлами, владельцев медиа и бизнеса. Для обычных пользователей Premium тоже значительно улучшает опыт чата.',
      faqTitle: 'Часто задаваемые вопросы про Premium',
      faqItems: [
        {
          question: 'Сколько стоит Telegram Premium на 3 месяца?',
          answer: `${formatUzs(PREMIUM_PERIODS[0].priceUzs)} (около ${formatUzs(PREMIUM_PERIODS[0].perMonthHint)} в месяц). Самый короткий пакет — подходит для первого знакомства с Premium или подарка.`,
        },
        {
          question: 'Сколько стоит Telegram Premium на 6 месяцев?',
          answer: `${formatUzs(PREMIUM_PERIODS[1].priceUzs)} (около ${formatUzs(PREMIUM_PERIODS[1].perMonthHint)} в месяц). На ~32% дешевле 3-месячного, самый популярный выбор.`,
        },
        {
          question: 'Сколько стоит Telegram Premium на 12 месяцев (год)?',
          answer: `${formatUzs(PREMIUM_PERIODS[2].priceUzs)} (около ${formatUzs(PREMIUM_PERIODS[2].perMonthHint)} в месяц). Самый экономный вариант — экономия 264 000 сум по сравнению с 4-кратной покупкой 3-месячного.`,
        },
        {
          question: 'Какой срок выбрать?',
          answer:
            'Чтобы попробовать Premium — 3 месяца. Самый сбалансированный — 6 месяцев. Самый экономный для ежедневных пользователей — 12 месяцев.',
        },
        {
          question: 'Как активируется Premium?',
          answer: `В боте ${siteConfig.bot} выбирается Premium, указывается срок и производится оплата. После подтверждения подписка автоматически привязывается к указанному @username.`,
        },
        {
          question: 'Можно ли подарить Premium другому?',
          answer:
            'Да. При оформлении вы можете указать любой Telegram @username — Premium будет направлен напрямую на этот аккаунт.',
        },
        {
          question: 'Подписка Premium обновляется автоматически?',
          answer:
            'Нет. Это разовая оплата. После окончания срока Premium нужно купить заново — автоматических списаний нет.',
        },
        {
          question: 'Какие методы оплаты принимаются?',
          answer:
            'UzCard, Humo, Click и другие локальные платёжные системы Узбекистана. Точные доступные варианты вы увидите в боте.',
        },
        {
          question: 'Что даёт Telegram Premium?',
          answer:
            'Загрузка файлов до 4 ГБ, удвоенные лимиты каналов/папок, отсутствие рекламы, Premium-эмодзи и стикеры, создание кастом-эмодзи, расшифровка голосовых, Premium-значок профиля, анимированный аватар, быстрая загрузка файлов и более 12 других возможностей.',
        },
        {
          question: 'Что произойдёт по окончании срока Premium?',
          answer:
            'Premium отключится сам, аккаунт вернётся в обычный (бесплатный) Telegram. Premium-эмодзи и стикеры перестанут отображаться у других, лимит файлов снизится до 2 ГБ, и другие возможности Premium станут недоступны. Чтобы продолжить, нужно снова купить в боте.',
        },
      ],
      finalCtaHeading: 'Готовы к Premium?',
      finalCtaText1: 'Нажмите START в боте и выберите нужный срок. Также доступны ',
      finalCtaStarsLink: 'Telegram Stars',
      finalCtaText2: '.',
      breadcrumbHome: 'Главная',
      breadcrumbPremium: 'Telegram Premium',
      itemListSchemaName: 'Пакеты подписки Telegram Premium',
      premiumName: (months) => `Telegram Premium ${months} мес.`,
      cardTitle: (months) => `${months} мес.`,
    }
  }

  return {
    metaTitle: "Telegram Premium narxi O'zbekistonda — 3, 6, 12 oylik",
    metaDescription: `Telegram Premium 3 oylik — ${formatUzs(PREMIUM_PERIODS[0].priceUzs)}, 6 oylik — ${formatUzs(PREMIUM_PERIODS[1].priceUzs)}, 12 oylik — ${formatUzs(PREMIUM_PERIODS[2].priceUzs)}. UzCard/Humo/Click orqali to'lov, ${siteConfig.bot} bot orqali avtomatik faollashtirish. Imkoniyatlar, taqqoslash va FAQ.`,
    ogTitle: "Telegram Premium O'zbekistonda — 3, 6, 12 oylik narxlar",
    ogDescription: `Telegram Premium narxlari ${formatUzs(PREMIUM_PERIODS[0].priceUzs)}dan boshlab. ${siteConfig.bot} orqali sotib oling.`,
    heroTitle: 'Telegram Premium',
    heroSubtitle:
      "3, 6 yoki 12 oylik Premium obunani O'zbekiston to'lov usullari bilan sotib oling. Buyurtma kiritilgan @username akkauntiga avtomatik faollashtiriladi.",
    heroBullets: [
      'Faylni 4 GB gacha yuklash',
      "2x ko'paytirilgan cheklovlar",
      'Reklamalarsiz tajriba',
      'Premium emoji va stikerlar',
      'Ovozli xabarlar transkripsiyasi',
      'Profilda Premium belgisi',
    ],
    ctaLabel: 'Premium sotib olish',
    answerBoxTitle: 'Qisqa javob: narx va sotib olish',
    answerBoxLeadIn: 'Telegram Premium narxlari Uzgetsda:',
    pricesHeading: 'Premium obuna narxlari',
    decisionHeading: 'Qaysi muddatni tanlash kerak?',
    decisionIntro:
      "Premium uchta muddatda taqdim etiladi. Quyidagi qisqa qo'llanmaga qarab o'zingizga mos paketni tanlang.",
    decisionGuide: [
      {
        period: '3 oylik',
        when: "Premium'ni birinchi marta sinaydigan, qisqa muddatli yoki sovg'a sifatida olmoqchi bo'lganlar uchun",
        pros: ['Eng past kirish narxi', 'Past xavfli sinov', "Sovg'a uchun qulay"],
        cons: ['Oyiga eng qimmat', 'Tezda tugaydi'],
      },
      {
        period: '6 oylik',
        when: "Premium imkoniyatlariga muhtoj, lekin yillik majburiyatga tayyor bo'lmaganlar uchun",
        pros: ['Eng balansli tanlov', '3 oylikdan tejamliroq', 'Yarim yillikga moslashuv'],
        cons: ['12 oylikdan biroz qimmat'],
      },
      {
        period: '12 oylik',
        when: 'Telegramni har kuni ishlatuvchi, content kreator yoki biznes egasi uchun',
        pros: ['Eng past oylik narx', "Eng katta tejov (3 oylik 4× ga qaraganda 264 000 so'm)", 'Yillik xavfsizlik'],
        cons: ["Bir martaga 408 000 so'm to'lash"],
      },
    ],
    prosLabel: 'Plyuslari',
    consLabel: 'Minuslari',
    compareHeading: 'Muddatlar taqqoslash',
    thMonth: 'Muddat',
    thPrice: 'Narx',
    thPerMonth: 'Oyiga',
    thSavings: 'Tejov',
    monthsShort: 'oy',
    forMonths: (n) => `(${n} oyga)`,
    featuresHeading: 'Telegram Premium nima beradi? 12 ta imkoniyat',
    featuresIntro:
      "Telegram Premium — Telegramning kengaytirilgan imkoniyatlarini ochib beruvchi obuna. Quyida obuna muddatida siz foydalanishingiz mumkin bo'lgan barcha asosiy imkoniyatlar.",
    howToHeading: 'Premium qanday sotib olinadi?',
    howToSteps: [
      { name: "Botga o'tish", text: `Telegram'da ${siteConfig.bot} botiga kiring va START tugmasini bosing.` },
      { name: "Premium bo'limini tanlash", text: 'Bot menyusidan Telegram Premium variantini tanlang.' },
      { name: 'Muddatni belgilash', text: '3, 6 yoki 12 oylik paketlardan birini tanlang.' },
      {
        name: 'Telegram @username kiritish',
        text: "Premium biriktiriladigan akkauntning @username manzilini kiriting — o'zingizniki yoki sovg'a uchun boshqa odam.",
      },
      {
        name: "To'lov usulini tanlash",
        text: "UzCard, Humo, Click yoki boshqa mavjud to'lov usulidan birini tanlab to'lovni yakunlang.",
      },
      {
        name: 'Faollashtirishni kutish',
        text: "To'lov tasdiqlangach, Telegram Premium ko'rsatilgan akkauntga avtomatik biriktiriladi.",
      },
    ],
    howToSchemaName: 'Telegram Premium qanday sotib olinadi',
    howToSchemaDescription: `${siteConfig.bot} orqali Telegram Premium obunani O'zbekistondan sotib olish bo'yicha qadamlar.`,
    paymentHeading: "Qaysi to'lov usullari qabul qilinadi?",
    paymentIntro:
      "To'lov O'zbekiston foydalanuvchilari uchun moslashtirilgan — kart raqami, internet bank yoki Click ilovasi orqali bemalol amalga oshiriladi.",
    aboutHeading: 'Telegram Premium nima va u nimaga kerak?',
    aboutP1:
      "Telegram Premium — bu Telegram messenjerining rasmiy pullik obunasi. U Telegram tomonidan 2022 yilda ishga tushirilgan bo'lib, foydalanuvchilarga messenjerning kengaytirilgan imkoniyatlaridan foydalanish huquqini beradi.",
    aboutP2:
      "Premium foydalanuvchilar uchun fayl yuklash chegarasi ikki barobar oshadi (2 GB → 4 GB), kanallar va papkalar cheklovlari ikki barobar ko'payadi, reklama postlari ko'rinmaydi, premium emoji va custom emoji yaratish imkoniyati ochiladi, ovozli xabarlar avtomatik matnga aylantiriladi va boshqa o'nlab imkoniyatlardan foydalanish mumkin bo'ladi.",
    aboutP3:
      "Premium ayniqsa Telegramni kunda faol ishlatuvchilar — kanal va guruh administratorlari, ko'p fayl ulashuvchilar, mass-mediya va biznes egalari uchun ahamiyatli. Oddiy foydalanuvchilar uchun ham Premium chat tajribasini sezilarli darajada yaxshilaydi.",
    faqTitle: 'Premium haqida tez-tez beriladigan savollar',
    faqItems: [
      {
        question: 'Telegram Premium 3 oylik qancha turadi?',
        answer: `${formatUzs(PREMIUM_PERIODS[0].priceUzs)} (oyiga taxminan ${formatUzs(PREMIUM_PERIODS[0].perMonthHint)}). Bu eng qisqa muddatli paket — Premium'ni birinchi marta sinash yoki sovg'a sifatida olish uchun mos.`,
      },
      {
        question: 'Telegram Premium 6 oylik qancha turadi?',
        answer: `${formatUzs(PREMIUM_PERIODS[1].priceUzs)} (oyiga taxminan ${formatUzs(PREMIUM_PERIODS[1].perMonthHint)}). 3 oylikdan ~32% arzonroq, eng mashhur tanlov.`,
      },
      {
        question: 'Telegram Premium 12 oylik (yillik) qancha turadi?',
        answer: `${formatUzs(PREMIUM_PERIODS[2].priceUzs)} (oyiga taxminan ${formatUzs(PREMIUM_PERIODS[2].perMonthHint)}). Eng tejamli variant — 3 oylik 4 marta sotib olishdan 264 000 so'm tejaysiz.`,
      },
      {
        question: 'Qaysi muddatni tanlash kerak?',
        answer:
          "Premium'ni sinash uchun — 3 oylik. Eng balansli — 6 oylik. Eng tejamli va kunda ishlatuvchilar uchun — 12 oylik.",
      },
      {
        question: 'Premium qanday faollashtiriladi?',
        answer: `${siteConfig.bot} botida Premium tanlanadi, kerakli muddat ko'rsatiladi va to'lov amalga oshiriladi. Tasdiqdan so'ng obuna ko'rsatilgan @username akkauntiga avtomatik biriktiriladi.`,
      },
      {
        question: "Boshqa odamga sovg'a qilsa bo'ladimi?",
        answer:
          "Ha. Buyurtma vaqtida istalgan Telegram username kiritishingiz mumkin — Premium o'sha akkauntga to'g'ridan-to'g'ri yo'naltiriladi.",
      },
      {
        question: 'Premium obuna avtomatik yangilanadimi?',
        answer:
          "Yo'q. Bu bir martalik to'lov. Muddat tugagach, Premium qayta sotib olinishi kerak — avtomatik to'lov tizimi yo'q.",
      },
      {
        question: "Qaysi to'lov usullari qabul qilinadi?",
        answer:
          "UzCard, Humo, Click va boshqa mahalliy O'zbekiston to'lov tizimlari. Aniq variantlarni botda ko'rishingiz mumkin.",
      },
      {
        question: 'Telegram Premium nima beradi?',
        answer:
          "4 GB gacha fayl yuklash, 2x ko'paytirilgan kanal/papka cheklovlari, reklamalarsiz tajriba, premium emoji va stikerlar, custom emoji yaratish, ovozli xabar transkripsiyasi, Premium profil belgisi, animatsion avatar, tez fayl yuklash va boshqa 12 dan ortiq imkoniyatlar.",
      },
      {
        question: "Premium muddati tugaganda nima bo'ladi?",
        answer:
          "Premium o'z-o'zidan o'chadi va akkaunt oddiy (free) Telegram'ga qaytadi. Premium emoji va stikerlar boshqalarga ko'rinmaydigan bo'ladi, fayl chegarasi 2 GB ga tushadi va boshqa Premium imkoniyatlari yo'qoladi. Davom ettirish uchun yana botdan sotib olish kerak.",
      },
    ],
    finalCtaHeading: "Premium uchun tayyormisiz?",
    finalCtaText1: 'Botda START bosing va kerakli muddatni tanlang. ',
    finalCtaStarsLink: 'Telegram Stars',
    finalCtaText2: ' ham mavjud.',
    breadcrumbHome: 'Bosh sahifa',
    breadcrumbPremium: 'Telegram Premium',
    itemListSchemaName: 'Telegram Premium obuna paketlari',
    premiumName: (months) => `Telegram Premium ${months} oylik`,
    cardTitle: (months) => `${months} oylik`,
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
    alternates: { canonical: localePath(lang, '/premium') },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: localeUrl(siteConfig.url, lang, '/premium'),
    },
  }
}

export default async function PremiumPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const t = makeStrings(lang)

  const PREMIUM_FEATURES = getPremiumFeatures(lang)
  const PAYMENT_METHODS = getPaymentMethods(lang)

  const min = PREMIUM_PERIODS[0].priceUzs
  const baseMonthly = PREMIUM_PERIODS[0].priceUzs / PREMIUM_PERIODS[0].months

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.itemListSchemaName,
    itemListElement: PREMIUM_PERIODS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: localeUrl(siteConfig.url, lang, `/premium/${p.slug}`),
      name: t.premiumName(p.months),
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: localeUrl(siteConfig.url, lang) },
      { '@type': 'ListItem', position: 2, name: t.breadcrumbPremium, item: localeUrl(siteConfig.url, lang, '/premium') },
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
        eyebrow="Telegram Premium"
        title={
          <>
            {t.heroTitle}
            <br />
            <span className="text-[var(--primary)]">{formatUzs(min)}{lang === 'uz' ? 'dan' : 'дан'}</span>
          </>
        }
        subtitle={t.heroSubtitle}
        bullets={t.heroBullets}
        ctaLabel={t.ctaLabel}
      />

      <AnswerBox title={t.answerBoxTitle}>
        <p>
          {t.answerBoxLeadIn} <strong>3 {t.monthsShort} — {formatUzs(PREMIUM_PERIODS[0].priceUzs)}</strong>,{' '}
          <strong>6 {t.monthsShort} — {formatUzs(PREMIUM_PERIODS[1].priceUzs)}</strong>,{' '}
          <strong>12 {t.monthsShort} — {formatUzs(PREMIUM_PERIODS[2].priceUzs)}</strong>.{' '}
          {lang === 'ru'
            ? 'Оплата UzCard, Humo и Click. Покупка совершается в боте '
            : "To'lov UzCard, Humo va Click orqali. Sotib olish "}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
            {siteConfig.bot}
          </a>
          {lang === 'ru'
            ? '. Товар автоматически зачисляется на указанный @username.'
            : " botida amalga oshiriladi. Mahsulot kiritilgan @username akkauntga avtomatik biriktiriladi."}
        </p>
      </AnswerBox>

      {/* Pricing grid */}
      <section className="mx-auto max-w-6xl px-4 py-8" aria-labelledby="prices-heading">
        <h2 id="prices-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {t.pricesHeading}
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {PREMIUM_PERIODS.map((p) => (
            <PriceCard
              key={p.slug}
              title={t.cardTitle(p.months)}
              subtitle="Telegram Premium"
              priceUzs={p.priceUzs}
              href={localePath(lang, `/premium/${p.slug}`)}
              badge={p.badge}
              highlight={p.months === 12}
              footerHint={`${lang === 'ru' ? 'В месяц' : 'Oyiga'} ~${formatUzs(p.perMonthHint)}`}
            />
          ))}
        </div>
      </section>

      {/* Decision guide */}
      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="decision-heading">
        <h2 id="decision-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.decisionHeading}
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">{t.decisionIntro}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.decisionGuide.map((g) => (
            <div key={g.period} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="text-lg font-bold text-[var(--primary)]">{g.period}</div>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{g.when}</p>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
                {t.prosLabel}
              </div>
              <ul className="mt-1 space-y-1 text-sm">
                {g.pros.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-[var(--primary)]">+</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
                {t.consLabel}
              </div>
              <ul className="mt-1 space-y-1 text-sm text-[var(--text-muted)]">
                {g.cons.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span>−</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-3xl px-4 py-8" aria-labelledby="compare-heading">
        <h2 id="compare-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {t.compareHeading}
        </h2>
        <div className="uz-card overflow-hidden rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--muted)] text-left">
              <tr>
                <th className="px-3 py-3 font-semibold sm:px-4">{t.thMonth}</th>
                <th className="px-3 py-3 font-semibold sm:px-4">{t.thPrice}</th>
                <th className="px-3 py-3 font-semibold sm:px-4">{t.thPerMonth}</th>
                <th className="hidden px-4 py-3 font-semibold sm:table-cell">{t.thSavings}</th>
              </tr>
            </thead>
            <tbody>
              {PREMIUM_PERIODS.map((p) => {
                const monthly = p.priceUzs / p.months
                const monthlySavings = baseMonthly - monthly
                const totalSavings = monthlySavings * p.months
                return (
                  <tr key={p.slug} className="border-t border-[var(--border)]">
                    <td className="px-3 py-3 sm:px-4">
                      <Link href={localePath(lang, `/premium/${p.slug}`)} className="text-[var(--primary)] hover:underline">
                        {p.months} {t.monthsShort}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">{formatUzs(p.priceUzs)}</td>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">{formatUzs(p.perMonthHint)}</td>
                    <td className="hidden px-4 py-3 text-[var(--text-muted)] sm:table-cell">
                      {p.months === 3 ? '—' : `${formatUzs(Math.round(totalSavings))} ${t.forMonths(p.months)}`}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Premium features deep-dive */}
      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="features-heading">
        <h2 id="features-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.featuresHeading}
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">{t.featuresIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PREMIUM_FEATURES.map((f) => (
            <div key={f.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="flex items-center gap-2 font-semibold">
                <svg
                  className="text-[var(--primary)]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
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

      {/* Payment methods */}
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

      {/* What is Telegram Premium */}
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

      {/* Final CTA */}
      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.finalCtaHeading}</h2>
        <p className="mt-3 text-[var(--text-muted)]">
          {t.finalCtaText1}
          <Link href={localePath(lang, '/stars')} className="text-[var(--primary)] hover:underline">
            {t.finalCtaStarsLink}
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
