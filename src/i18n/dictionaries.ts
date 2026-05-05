import type { Locale } from './config'

export type Dictionary = {
  common: {
    botCta: string
    botCtaShort: string
    botCtaSupport: string
    botCtaPurchase: string
    home: string
    breadcrumb: string
    menu: string
    close: string
    open: string
    all: string
    quickAnswer: string
    quickAnswerNarx: string
    quickAnswerWhatToDo: string
    faqTitle: string
    pickPremiumDuration: string
    pickStarsAmount: string
    learnMore: string
    pros: string
    cons: string
    current: string
    monthsShort: string
    perMonth: string
    perMonthAbout: string
    perStarRate: string
    soMda: string
    starsSuffix: string
    soldBy: string
    lastUpdated: string
  }
  nav: {
    premium: string
    stars: string
    contact: string
    privacy: string
    terms: string
  }
  header: {
    products: string
    contactSection: string
    legalSection: string
  }
  footer: {
    products: string
    contact: string
    legal: string
    contactLink: string
    trademarkNotice: string
    premiumLabel: string
    starsLabel: string
  }
  hero: {
    homeEyebrow: string
    homeTitleA: string
    homeTitleB: string
    homeSubtitle: string
    bullet_payment: string
    bullet_anyUser: string
    bullet_premiumDurations: string
    bullet_starsFrom: string
  }
  whyUzgets: {
    heading: string
    cards: { title: string; description: string }[]
  }
  homePage: {
    metaTitleSuffix: string
    metaDescription: string
    answerBox: string
    premiumPricesHeading: string
    premiumPricesSubtitle: string
    starsHeading: string
    starsSubtitle: string
    howToHeading: string
    finalCtaHeading: string
    finalCtaText: string
  }
  howTo: {
    homeName: string
    homeDescription: string
    botStep: string
    botStepText: string
    enterUsername: string
    enterUsernameText: string
    selectProduct: string
    selectProductText: string
    pay: string
    payText: string
    activate: string
    activateText: string
  }
  notFound: {
    title: string
    description: string
    backHome: string
  }
}

const uz: Dictionary = {
  common: {
    botCta: "Botga o'tish",
    botCtaShort: 'Bot',
    botCtaSupport: "Qo'llab-quvvatlashga yozish",
    botCtaPurchase: "{bot} orqali sotib olish",
    home: 'Bosh sahifa',
    breadcrumb: 'Breadcrumb',
    menu: 'Menyu',
    close: 'Yopish',
    open: 'Ochish',
    all: 'Hammasi',
    quickAnswer: 'Qisqa javob',
    quickAnswerNarx: 'Qisqa javob: narx va sotib olish',
    quickAnswerWhatToDo: 'Qisqa javob: nima qilish kerak?',
    faqTitle: 'Tez-tez beriladigan savollar',
    pickPremiumDuration: 'Qaysi muddatni tanlash kerak?',
    pickStarsAmount: 'Qaysi miqdorni tanlash kerak?',
    learnMore: 'Batafsil',
    pros: 'Plyuslari',
    cons: 'Minuslari',
    current: 'joriy',
    monthsShort: 'oy',
    perMonth: 'Oyiga',
    perMonthAbout: 'Oyiga taxminan',
    perStarRate: '{rate} so\'m / 1 yulduzcha',
    soMda: "so'mdan",
    starsSuffix: 'yulduzcha',
    soldBy: 'Sotuvchi',
    lastUpdated: 'Oxirgi yangilanish',
  },
  nav: {
    premium: 'Premium',
    stars: 'Stars',
    contact: 'Aloqa',
    privacy: 'Maxfiylik siyosati',
    terms: 'Foydalanish shartlari',
  },
  header: {
    products: 'Mahsulotlar',
    contactSection: 'Aloqa',
    legalSection: 'Rasmiy',
  },
  footer: {
    products: 'Mahsulotlar',
    contact: 'Aloqa',
    legal: 'Rasmiy',
    contactLink: "Aloqa va qo'llab-quvvatlash",
    trademarkNotice:
      "Telegram va Telegram Stars Telegram FZ-LLC kompaniyasining tovar belgilaridir.",
    premiumLabel: 'Telegram Premium',
    starsLabel: 'Telegram Stars',
  },
  hero: {
    homeEyebrow: "Telegram Premium va Stars O'zbekistonda",
    homeTitleA: 'Telegram Premium va Stars',
    homeTitleB: 'qulay narxda',
    homeSubtitle:
      "Uzgets — Telegram obunalari va yulduzchalarni O'zbekistondan mahalliy to'lov usullari orqali sotib olish uchun {bot}. {minPrice}dan boshlab.",
    bullet_payment: "UzCard, Humo, Click bilan to'lov",
    bullet_anyUser: 'Istalgan Telegram username uchun',
    bullet_premiumDurations: 'Premium 3 / 6 / 12 oylik obunalar',
    bullet_starsFrom: 'Stars {min} dan boshlab',
  },
  whyUzgets: {
    heading: 'Nima uchun Uzgets?',
    cards: [
      {
        title: "Mahalliy to'lov",
        description: "UzCard, Humo va Click orqali — chet el karta talab etilmaydi.",
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
        description: "Premium 3/6/12 oylik va Stars 50 dan 10 000 gacha — ehtiyojga qarab tanlash.",
      },
    ],
  },
  homePage: {
    metaTitleSuffix: "— Telegram Premium va Stars O'zbekistonda sotib olish",
    metaDescription:
      "O'zbekistonda Telegram Premium va Telegram Stars sotib olish. UzCard, Humo va Click orqali to'lov, narxlar bozordagi eng qulaylaridan biri.",
    answerBox:
      "Telegramda {bot} ga kiring, START bosing, Telegram username kiriting va Premium (3 / 6 / 12 oy) yoki Stars miqdorini tanlab to'lov qiling. Mahsulot avtomatik kiritilgan akkauntga yetkaziladi.",
    premiumPricesHeading: 'Telegram Premium narxlari',
    premiumPricesSubtitle: 'Bozordagi eng raqobatbardosh narxlardan biri.',
    starsHeading: 'Telegram Stars',
    starsSubtitle: "Yulduzchalar — Telegramdagi raqamli to'lov birligi.",
    howToHeading: 'Qanday sotib olinadi?',
    finalCtaHeading: 'Hoziroq sotib oling',
    finalCtaText: 'Telegramdagi {bot} sizga Premium yoki Stars sotib olishda yordam beradi.',
  },
  howTo: {
    homeName: "Uzgets orqali Telegram Premium yoki Stars sotib olish",
    homeDescription: "Telegram bot orqali Premium obuna yoki Stars yulduzchalarni O'zbekistondan sotib olish bo'yicha qadamlar.",
    botStep: 'Botga o\'tish',
    botStepText: 'Telegramda {bot} botiga kiring va START tugmasini bosing.',
    enterUsername: 'Username kiritish',
    enterUsernameText: "Buyurtma yuboriladigan Telegram akkauntning @username manzilini kiriting (o'zingizniki yoki sovg'a uchun).",
    selectProduct: 'Mahsulot va muddatni tanlash',
    selectProductText: 'Telegram Premium (3, 6 yoki 12 oylik) yoki Telegram Stars miqdorini tanlang.',
    pay: "To'lovni amalga oshirish",
    payText: "UzCard, Humo, Click yoki boshqa mahalliy to'lov usuli orqali to'lovni yakunlang.",
    activate: 'Faollashtirishni kutish',
    activateText: "To'lov tasdiqlangach, Premium obuna yoki Stars yulduzchalar ko'rsatilgan akkauntga avtomatik biriktiriladi.",
  },
  notFound: {
    title: 'Sahifa topilmadi',
    description: "Siz qidirgan sahifa mavjud emas yoki o'chirilgan.",
    backHome: 'Bosh sahifaga qaytish',
  },
}

const ru: Dictionary = {
  common: {
    botCta: 'Перейти в бот',
    botCtaShort: 'Бот',
    botCtaSupport: 'Написать в поддержку',
    botCtaPurchase: 'Купить через {bot}',
    home: 'Главная',
    breadcrumb: 'Навигация',
    menu: 'Меню',
    close: 'Закрыть',
    open: 'Открыть',
    all: 'Все',
    quickAnswer: 'Краткий ответ',
    quickAnswerNarx: 'Краткий ответ: цена и покупка',
    quickAnswerWhatToDo: 'Краткий ответ: что нужно сделать?',
    faqTitle: 'Часто задаваемые вопросы',
    pickPremiumDuration: 'Какой срок выбрать?',
    pickStarsAmount: 'Какое количество выбрать?',
    learnMore: 'Подробнее',
    pros: 'Плюсы',
    cons: 'Минусы',
    current: 'текущий',
    monthsShort: 'мес.',
    perMonth: 'В месяц',
    perMonthAbout: 'В месяц примерно',
    perStarRate: '{rate} сум / 1 звезда',
    soMda: 'сум, от',
    starsSuffix: 'звёзд',
    soldBy: 'Продавец',
    lastUpdated: 'Последнее обновление',
  },
  nav: {
    premium: 'Premium',
    stars: 'Stars',
    contact: 'Контакты',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
  },
  header: {
    products: 'Продукты',
    contactSection: 'Контакты',
    legalSection: 'Юридическая информация',
  },
  footer: {
    products: 'Продукты',
    contact: 'Контакты',
    legal: 'Юридическая информация',
    contactLink: 'Контакты и поддержка',
    trademarkNotice:
      'Telegram и Telegram Stars являются торговыми марками компании Telegram FZ-LLC.',
    premiumLabel: 'Telegram Premium',
    starsLabel: 'Telegram Stars',
  },
  hero: {
    homeEyebrow: 'Telegram Premium и Stars в Узбекистане',
    homeTitleA: 'Telegram Premium и Stars',
    homeTitleB: 'по выгодной цене',
    homeSubtitle:
      'Uzgets — {bot} для покупки подписок Telegram и звёзд из Узбекистана через локальные методы оплаты. От {minPrice}.',
    bullet_payment: 'Оплата UzCard, Humo, Click',
    bullet_anyUser: 'Для любого Telegram username',
    bullet_premiumDurations: 'Premium 3 / 6 / 12 месяцев',
    bullet_starsFrom: 'Stars от {min} штук',
  },
  whyUzgets: {
    heading: 'Почему Uzgets?',
    cards: [
      {
        title: 'Местные платежи',
        description: 'UzCard, Humo и Click — иностранная карта не нужна.',
      },
      {
        title: 'Быстрая доставка',
        description: 'После оплаты товар автоматически зачисляется на аккаунт.',
      },
      {
        title: 'Подходит для подарка',
        description: 'Можно отправить на любой Telegram @username — даже как подарок.',
      },
      {
        title: 'Удобные цены',
        description: 'Premium 3/6/12 месяцев и Stars от 50 до 10 000 — выбор под ваши нужды.',
      },
    ],
  },
  homePage: {
    metaTitleSuffix: '— Купить Telegram Premium и Stars в Узбекистане',
    metaDescription:
      'Покупка Telegram Premium и Telegram Stars в Узбекистане. Оплата через UzCard, Humo и Click, цены — одни из лучших на рынке.',
    answerBox:
      'Зайдите в Telegram-бот {bot}, нажмите START, введите Telegram username и выберите Premium (3 / 6 / 12 мес.) или количество Stars, затем оплатите. Товар автоматически зачисляется на указанный аккаунт.',
    premiumPricesHeading: 'Цены Telegram Premium',
    premiumPricesSubtitle: 'Одни из самых конкурентных цен на рынке.',
    starsHeading: 'Telegram Stars',
    starsSubtitle: 'Звёзды — внутренняя цифровая валюта Telegram.',
    howToHeading: 'Как купить?',
    finalCtaHeading: 'Купите прямо сейчас',
    finalCtaText: 'Telegram-бот {bot} поможет вам приобрести Premium или Stars.',
  },
  howTo: {
    homeName: 'Покупка Telegram Premium или Stars через Uzgets',
    homeDescription: 'Шаги покупки подписки Premium или звёзд Stars из Узбекистана через Telegram-бот.',
    botStep: 'Перейти в бот',
    botStepText: 'Откройте бот {bot} в Telegram и нажмите START.',
    enterUsername: 'Ввести username',
    enterUsernameText: 'Введите @username Telegram-аккаунта получателя (свой или для подарка).',
    selectProduct: 'Выбрать товар и срок',
    selectProductText: 'Выберите Telegram Premium (3, 6 или 12 месяцев) или количество Telegram Stars.',
    pay: 'Произвести оплату',
    payText: 'Завершите оплату через UzCard, Humo, Click или другой локальный метод.',
    activate: 'Дождитесь активации',
    activateText: 'После подтверждения оплаты Premium или Stars автоматически зачислятся на указанный аккаунт.',
  },
  notFound: {
    title: 'Страница не найдена',
    description: 'Запрашиваемая страница не существует или была удалена.',
    backHome: 'Вернуться на главную',
  },
}

const dictionaries: Record<Locale, Dictionary> = { uz, ru }

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang]
}

export function tpl(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`))
}
