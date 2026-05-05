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
    blog: string
    about: string
    contact: string
    privacy: string
    terms: string
  }
  blog: {
    indexTitle: string
    indexMetaTitle: string
    indexMetaDescription: string
    indexSubtitle: string
    publishedOn: string
    updatedOn: string
    readMore: string
    backToBlog: string
    relatedHeading: string
    typeLabel: string
    empty: string
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
    blog: 'Blog',
    about: 'Haqimizda',
    contact: 'Aloqa',
    privacy: 'Maxfiylik siyosati',
    terms: 'Foydalanish shartlari',
  },
  blog: {
    indexTitle: 'Uzgets blogi',
    indexMetaTitle: "Uzgets blogi — Telegram Premium va Stars haqida qo'llanmalar",
    indexMetaDescription:
      "Telegram Premium va Stars'ni O'zbekistondan sotib olish bo'yicha qo'llanmalar, taqqoslashlar va savol-javoblar. Mahalliy karta, narxlar, xavfsizlik.",
    indexSubtitle:
      "Telegram Premium va Stars haqida bilish kerak bo'lgan narsalar — qisqa va aniq.",
    publishedOn: 'Nashr qilingan',
    updatedOn: 'Yangilangan',
    readMore: "O'qish",
    backToBlog: 'Blogga qaytish',
    relatedHeading: 'Boshqa maqolalar',
    typeLabel: 'Turkum',
    empty: "Hozircha maqolalar yo'q.",
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
        title: "⏱️ 1 daqiqada faollashadi",
        description: "To'lov tasdiqlangach Premium yoki Stars akkauntingizga 1 daqiqada biriktiriladi.",
      },
      {
        title: '🛡️ Yetkazilmasa pul qaytariladi',
        description: "Texnik nosozlik tufayli mahsulot yetkazilmasa — to'lov to'liq qaytariladi.",
      },
      {
        title: "🕒 24/7 qo'llab-quvvatlash",
        description: "Bot va qo'llab-quvvatlash xizmati har kuni 24 soat ishlaydi.",
      },
      {
        title: '🎯 Bir botda Stars VA Premium',
        description: "Boshqa botga o'tish kerak emas — ikkala mahsulot ham bir joyda.",
      },
      {
        title: '💳 Faqat mahalliy to\'lov',
        description: "UzCard, Humo, Click va Payme — chet el kartasi talab etilmaydi.",
      },
      {
        title: '📜 Shaffof shartlar',
        description: "Maxfiylik, qaytarish va foydalanish shartlari saytda ochiq.",
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
    enterUsername: '@username kiritish',
    enterUsernameText: "Mahsulot biriktiriladigan Telegram akkauntning @username manzilini kiriting (o'zingizniki yoki sovg'a uchun).",
    selectProduct: 'Mahsulot va muddat/miqdor',
    selectProductText: 'Premium (3, 6 yoki 12 oylik) yoki Stars miqdorini (50 dan 10 000 gacha) tanlang.',
    pay: "To'lov amalga oshirish",
    payText: "Bot ko'rsatadigan kartaga aynan belgilangan summani UzCard/Humo/Payme orqali o'tkazing yoki Click ilovasi orqali to'g'ridan-to'g'ri to'lang.",
    activate: '1 daqiqada faollashadi',
    activateText: "To'lov tasdiqlangach, Premium yoki Stars 1 daqiqada avtomatik akkauntga biriktiriladi.",
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
    blog: 'Блог',
    about: 'О нас',
    contact: 'Контакты',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
  },
  blog: {
    indexTitle: 'Блог Uzgets',
    indexMetaTitle: 'Блог Uzgets — руководства по Telegram Premium и Stars',
    indexMetaDescription:
      'Руководства, сравнения и ответы по покупке Telegram Premium и Stars из Узбекистана. Локальная карта, цены, безопасность.',
    indexSubtitle:
      'Что нужно знать о Telegram Premium и Stars — кратко и по делу.',
    publishedOn: 'Опубликовано',
    updatedOn: 'Обновлено',
    readMore: 'Читать',
    backToBlog: 'К блогу',
    relatedHeading: 'Другие статьи',
    typeLabel: 'Категория',
    empty: 'Пока нет статей.',
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
        title: '⏱️ Активация за 1 минуту',
        description: 'После подтверждения оплаты Premium или Stars зачислятся на ваш аккаунт за 1 минуту.',
      },
      {
        title: '🛡️ Возврат при недоставке',
        description: 'Если из-за технического сбоя товар не доставлен — оплата возвращается полностью.',
      },
      {
        title: '🕒 Поддержка 24/7',
        description: 'Бот и служба поддержки работают круглосуточно, каждый день.',
      },
      {
        title: '🎯 Stars и Premium в одном боте',
        description: 'Не нужно переходить в другие боты — оба продукта в одном месте.',
      },
      {
        title: '💳 Только локальная оплата',
        description: 'UzCard, Humo, Click и Payme — иностранная карта не нужна.',
      },
      {
        title: '📜 Прозрачные условия',
        description: 'Политика, возврат и условия использования открыто опубликованы на сайте.',
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
    enterUsername: 'Ввести @username',
    enterUsernameText: 'Введите @username Telegram-аккаунта получателя (свой или для подарка).',
    selectProduct: 'Товар и срок/количество',
    selectProductText: 'Выберите Premium (3, 6 или 12 месяцев) или количество Stars (от 50 до 10 000).',
    pay: 'Произвести оплату',
    payText: 'Переведите точно указанную сумму на карту, которую покажет бот — через UzCard/Humo/Payme. Либо оплатите напрямую через Click.',
    activate: 'Активация за 1 минуту',
    activateText: 'После подтверждения оплаты Premium или Stars автоматически зачислятся на аккаунт за 1 минуту.',
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
