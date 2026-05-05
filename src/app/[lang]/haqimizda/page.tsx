import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/JsonLd'
import { AnswerBox } from '@/components/AnswerBox'
import { BotCTA } from '@/components/BotCTA'
import { FAQ, type FAQItem } from '@/components/FAQ'
import { type Locale, isLocale } from '@/i18n/config'

type Params = { lang: string }

type AdvCard = { title: string; description: string }

const T = {
  uz: {
    title: 'Uzgets haqida',
    metaTitle: "Uzgets haqida — Telegram Premium va Stars uchun ishonchli xizmat",
    metaDescription:
      "Uzgets — O'zbekistonda Telegram Premium va Telegram Stars sotib olish uchun ishonchli xizmat. 1 daqiqada faollashtirish, yetkazilmasa pul qaytarish, 24/7 qo'llab-quvvatlash. Bot va sayt bir brend.",
    ogDescription:
      "Bir bot orqali Telegram Premium va Stars — 1 daqiqada faollashtirish, mahalliy to'lov, 24/7 qo'llab-quvvatlash.",
    breadcrumbHome: 'Bosh sahifa',
    breadcrumbAbout: 'Haqimizda',
    h1Pre: 'Uzgets',
    h1Post: 'haqida',
    subtitle:
      "O'zbekistondan Telegram Premium va Telegram Stars sotib olishning eng qulay va ishonchli yo'li.",
    answerBoxTitle: 'Qisqa tanishuv',
    answerBoxBody: (
      <>
        <strong>Uzgets</strong> — Telegram Premium va Stars'ni O&apos;zbekistondan mahalliy to&apos;lov usullari (UzCard, Humo,
        Click, Payme) bilan sotib olish uchun yagona xizmat.{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
          {siteConfig.bot}
        </a>{' '}
        botida buyurtma berasiz, to&apos;lov 1 daqiqada avtomatik faollashtiriladi. Yetkazilmasa pul qaytariladi.
      </>
    ),
    missionHeading: 'Bizning maqsadimiz',
    missionPara1:
      "Telegram'ning rasmiy obuna va yulduzcha tizimi O'zbekistondagi foydalanuvchilarga to'g'ridan-to'g'ri ulanmagan — chet el kartasi yoki murakkab usullar talab etiladi. Uzgets shu bo'shliqni to'ldiradi: mahalliy to'lov bilan, mahalliy tilda, mahalliy qo'llab-quvvatlash bilan.",
    missionPara2:
      "Biz bir narsaga e'tibor qaratamiz — sotib olish jarayoni tez, oddiy va ishonchli bo'lishi. Mahsulot yetkazilmasa, to'lovingiz qaytariladi.",
    advHeading: "Uzgets'ning ustunliklari",
    advCards: [
      {
        title: '⏱️ 1 daqiqada faollashadi',
        description:
          "To'lov tasdiqlanganidan so'ng Premium yoki Stars akkauntingizga 1 daqiqada biriktiriladi — qo'lda tekshirish kerak emas.",
      },
      {
        title: '🛡️ Yetkazilmasa pul qaytariladi',
        description:
          "Texnik nosozlik yoki bizning xatomiz tufayli mahsulot yetkazilmasa, to'lov to'liq qaytariladi.",
      },
      {
        title: '🕒 24/7 qo\'llab-quvvatlash',
        description:
          "Bot va qo'llab-quvvatlash kanali har kuni 24 soat ishlaydi. Murojaatlaringizga tezda javob beriladi.",
      },
      {
        title: '🎯 Bir botda — Stars VA Premium',
        description:
          "Boshqa botlarga o'tib, qayta ro'yxatdan o'tish kerak emas. Bir botda ikkala mahsulot ham mavjud.",
      },
      {
        title: '💳 Faqat mahalliy to\'lov',
        description:
          "UzCard, Humo karta, Click, Payme va boshqa banking ilovalar — chet el kartasi talab etilmaydi.",
      },
      {
        title: '📜 Shaffof shartlar',
        description:
          "Maxfiylik siyosati, foydalanish shartlari va qaytarish qoidalari saytda ochiq yozilgan — yashirin nuqta yo'q.",
      },
    ] as AdvCard[],
    howHeading: 'Sotib olish jarayoni',
    howIntro: 'Buyurtma berish bir necha qadamda amalga oshiriladi — qisqa vaqtda yakunlanadi.',
    howSteps: [
      { num: 1, title: 'Botga kirish', desc: `Telegram'da ${siteConfig.bot} botiga o'tib START tugmasini bosing.` },
      { num: 2, title: 'Mahsulot tanlash', desc: 'Premium yoki Stars bo\'limini tanlang.' },
      {
        num: 3,
        title: '@username kiritish',
        desc: "Mahsulot biriktiriladigan Telegram akkauntning @username manzilini kiriting (o'zingizniki yoki sovg'a uchun).",
      },
      {
        num: 4,
        title: 'Muddat / miqdor',
        desc: 'Premium uchun 3, 6 yoki 12 oylik muddatni, Stars uchun miqdorni belgilang.',
      },
      {
        num: 5,
        title: "To'lov amalga oshirish",
        desc: "Bot ko'rsatadigan kartaga **aynan belgilangan summani** o'tkazing — UzCard, Humo, Payme yoki boshqa ilova orqali. Yoki Click orqali to'g'ridan-to'g'ri to'lang.",
      },
      {
        num: 6,
        title: '1 daqiqada faollashadi',
        desc: "To'lov tasdiqlangach, Premium obuna yoki Stars yulduzchalar avtomatik akkauntga biriktiriladi.",
      },
    ],
    importantNote:
      "Muhim: Karta orqali to'lasangiz, **aynan ko'rsatilgan summani** o'tkazing. Boshqa miqdor o'tkazilsa, mahsulot avtomatik yetkazilmaydi va qo'lda tekshirish kerak bo'ladi.",
    productsHeading: "Bizning mahsulotlarimiz",
    productsIntro: 'Uzgetsda ikki turdagi rasmiy Telegram mahsulotlari sotiladi.',
    productsPremium: {
      title: 'Telegram Premium',
      description:
        "3, 6 yoki 12 oylik obunalar. 4 GB fayl yuklash, reklamalarsiz, premium emoji va boshqa imkoniyatlar.",
      cta: 'Premium narxlari →',
    },
    productsStars: {
      title: 'Telegram Stars',
      description:
        "50 dan 10 000 ta gacha yulduzchalar. Premium emoji, sovg'alar, mini-app to'lovlari uchun.",
      cta: 'Stars narxlari →',
    },
    trustHeading: 'Nima uchun ishonsa bo\'ladi?',
    trustIntro:
      "Uzgets faqat Telegram orqali ishlaydigan kichik bot emas — bu to'liq, shaffof xizmat. Bizning ishonchli ekanligimizni tekshirishingiz mumkin:",
    trustList: [
      "Sayt va bot bir brend ostida — hammasi bog'langan",
      'Shartlar va siyosat saytda ochiq yozilgan, har kim ko\'rishi mumkin',
      "Yetkazib berish kafolati: yetkazilmasa to'lov qaytariladi",
      "24/7 qo'llab-quvvatlash kanali — savol berish istalgan vaqtda",
      "Faqat mahalliy to'lov — chet el operatorlari yo'q, hammasi O'zbekistonda",
      "Buyurtma o'sha akkauntga to'g'ridan-to'g'ri Telegram tomonidan biriktiriladi",
    ],
    faqTitle: 'Tez-tez beriladigan savollar',
    faqItems: [
      {
        question: 'Uzgets — bu kim?',
        answer:
          "Uzgets — O'zbekistondagi foydalanuvchilar uchun Telegram Premium va Telegram Stars sotib olishni soddalashtiruvchi xizmat. Bot va sayt orqali ishlaydi.",
      },
      {
        question: 'Buyurtma kafolatlanganmi?',
        answer:
          "Ha. Mahsulot to'lov tasdiqlanganidan keyin 1 daqiqada akkauntga biriktiriladi. Texnik muammo bo'lsa to'lov to'liq qaytariladi.",
      },
      {
        question: 'Boshqa botlarga nisbatan farqi nima?',
        answer:
          "Asosiy farq — Uzgetsda Stars VA Premium ikkalasi ham bir bot orqali sotiladi. Saytda barcha shartlar ochiq yozilgan, mahalliy to'lov tizimlari to'liq qo'llab-quvvatlanadi va Premium narxi bozordagi eng qulaylaridan biri.",
      },
      {
        question: "Qaysi to'lov usullari mavjud?",
        answer:
          "UzCard yoki Humo karta orqali (kartaga aynan summani o'tkazasiz), Click orqali (to'g'ridan-to'g'ri to'lov), yoki Payme va boshqa banking ilovalar orqali kartaga o'tkazish.",
      },
      {
        question: "Sovg'a sifatida olib bo'ladimi?",
        answer:
          'Albatta. Buyurtma vaqtida istalgan Telegram @username kiritsangiz, mahsulot o\'sha akkauntga to\'g\'ridan-to\'g\'ri yo\'naltiriladi.',
      },
      {
        question: 'Qaysi tilda qo\'llab-quvvatlash mavjud?',
        answer: "O'zbek va rus tillarida. Bot ham, qo'llab-quvvatlash xizmati ham ikkala tilda ishlaydi.",
      },
    ] as FAQItem[],
    finalCtaHeading: 'Boshlamoqchimisiz?',
    finalCtaBody: 'Botga kirib, kerakli mahsulotni tanlang. Buyurtmangiz 1 daqiqada faollashadi.',
  },
  ru: {
    title: 'О Uzgets',
    metaTitle: 'О Uzgets — надёжный сервис для Telegram Premium и Stars',
    metaDescription:
      'Uzgets — надёжный сервис для покупки Telegram Premium и Telegram Stars в Узбекистане. Активация за 1 минуту, возврат при недоставке, поддержка 24/7. Бот и сайт под одним брендом.',
    ogDescription:
      'Telegram Premium и Stars в одном боте — активация за 1 минуту, локальная оплата, поддержка 24/7.',
    breadcrumbHome: 'Главная',
    breadcrumbAbout: 'О нас',
    h1Pre: 'О',
    h1Post: 'Uzgets',
    subtitle: 'Самый удобный и надёжный способ купить Telegram Premium и Stars из Узбекистана.',
    answerBoxTitle: 'Краткое знакомство',
    answerBoxBody: (
      <>
        <strong>Uzgets</strong> — единый сервис для покупки Telegram Premium и Stars в Узбекистане через локальные методы
        оплаты (UzCard, Humo, Click, Payme). Заказ оформляется в боте{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
          {siteConfig.bot}
        </a>{' '}
        — оплата активируется автоматически за 1 минуту. При недоставке деньги возвращаются.
      </>
    ),
    missionHeading: 'Наша миссия',
    missionPara1:
      'Официальные подписки Telegram Premium и звёзды Stars напрямую недоступны для пользователей в Узбекистане — нужны иностранные карты или сложные обходные пути. Uzgets закрывает эту дыру: локальные методы оплаты, локальный язык, локальная поддержка.',
    missionPara2:
      'Мы концентрируемся на одном — чтобы покупка была быстрой, простой и надёжной. Если товар не доставлен, оплата возвращается.',
    advHeading: 'Преимущества Uzgets',
    advCards: [
      {
        title: '⏱️ Активация за 1 минуту',
        description:
          'После подтверждения оплаты Premium или Stars зачисляются на аккаунт за 1 минуту — ручная проверка не нужна.',
      },
      {
        title: '🛡️ Возврат при недоставке',
        description:
          'Если из-за технического сбоя или нашей ошибки товар не доставлен, оплата возвращается полностью.',
      },
      {
        title: '🕒 Поддержка 24/7',
        description:
          'Бот и канал поддержки работают круглосуточно. На ваш вопрос ответят быстро.',
      },
      {
        title: '🎯 В одном боте — Stars и Premium',
        description: 'Не нужно переходить в другие боты и заново регистрироваться. Оба продукта в одном месте.',
      },
      {
        title: '💳 Только локальная оплата',
        description: 'UzCard, Humo, Click, Payme и другие банковские приложения — иностранная карта не нужна.',
      },
      {
        title: '📜 Прозрачные условия',
        description:
          'Политика конфиденциальности, условия использования и правила возврата открыто опубликованы на сайте — никаких скрытых пунктов.',
      },
    ] as AdvCard[],
    howHeading: 'Процесс покупки',
    howIntro: 'Заказ оформляется в несколько шагов — занимает совсем немного времени.',
    howSteps: [
      { num: 1, title: 'Открыть бот', desc: `Откройте бот ${siteConfig.bot} в Telegram и нажмите START.` },
      { num: 2, title: 'Выбрать товар', desc: 'Выберите раздел Premium или Stars.' },
      {
        num: 3,
        title: 'Ввести @username',
        desc: 'Введите @username Telegram-аккаунта получателя (свой или для подарка).',
      },
      {
        num: 4,
        title: 'Срок / количество',
        desc: 'Для Premium выберите 3, 6 или 12 месяцев, для Stars — количество.',
      },
      {
        num: 5,
        title: 'Произвести оплату',
        desc: 'Переведите **точно указанную сумму** на карту, которую покажет бот — через UzCard, Humo, Payme или другое приложение. Либо оплатите напрямую через Click.',
      },
      {
        num: 6,
        title: 'Активация за 1 минуту',
        desc: 'После подтверждения оплаты Premium или Stars автоматически зачислятся на аккаунт.',
      },
    ],
    importantNote:
      'Важно: при оплате через карту переведите **именно указанную сумму**. При другой сумме товар автоматически не доставится — потребуется ручная проверка.',
    productsHeading: 'Наши продукты',
    productsIntro: 'В Uzgets продаются два типа официальных продуктов Telegram.',
    productsPremium: {
      title: 'Telegram Premium',
      description:
        'Подписки на 3, 6 или 12 месяцев. Загрузка файлов до 4 ГБ, без рекламы, Premium-эмодзи и другие возможности.',
      cta: 'Цены Premium →',
    },
    productsStars: {
      title: 'Telegram Stars',
      description:
        'От 50 до 10 000 звёзд. Для Premium-эмодзи, подарков, оплаты в Mini App.',
      cta: 'Цены Stars →',
    },
    trustHeading: 'Почему нам можно доверять?',
    trustIntro:
      'Uzgets — не просто маленький бот в Telegram, а полноценный прозрачный сервис. Вы можете проверить нашу надёжность:',
    trustList: [
      'Сайт и бот под одним брендом — всё связано',
      'Условия и политика опубликованы на сайте, доступны каждому',
      'Гарантия доставки: при недоставке оплата возвращается',
      'Канал поддержки 24/7 — задать вопрос можно в любое время',
      'Только локальная оплата — никаких иностранных операторов, всё в Узбекистане',
      'Заказ привязывается к указанному аккаунту напрямую от Telegram',
    ],
    faqTitle: 'Часто задаваемые вопросы',
    faqItems: [
      {
        question: 'Что такое Uzgets?',
        answer:
          'Uzgets — сервис, упрощающий покупку Telegram Premium и Telegram Stars для пользователей из Узбекистана. Работает через бот и сайт.',
      },
      {
        question: 'Гарантирована ли доставка заказа?',
        answer:
          'Да. Товар зачисляется на аккаунт в течение 1 минуты после подтверждения оплаты. При технических проблемах оплата возвращается полностью.',
      },
      {
        question: 'Чем отличается от других ботов?',
        answer:
          'Главное отличие — в Uzgets продаются и Stars, и Premium через один бот. Все условия открыто опубликованы на сайте, поддерживаются все локальные платёжные системы, а цены на Premium — одни из лучших на рынке.',
      },
      {
        question: 'Какие методы оплаты доступны?',
        answer:
          'Через карту UzCard или Humo (перевод точной суммы на карту), через Click (прямая оплата), а также через Payme и другие банковские приложения переводом на карту.',
      },
      {
        question: 'Можно ли купить в подарок?',
        answer:
          'Конечно. При оформлении заказа укажите любой Telegram @username — товар отправится напрямую на этот аккаунт.',
      },
      {
        question: 'На каких языках работает поддержка?',
        answer: 'На узбекском и русском. И бот, и служба поддержки работают на обоих языках.',
      },
    ] as FAQItem[],
    finalCtaHeading: 'Готовы начать?',
    finalCtaBody: 'Откройте бот, выберите нужный товар. Заказ активируется за 1 минуту.',
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) return {}
  const lang: Locale = langRaw
  const t = T[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/${lang}/haqimizda` },
    openGraph: {
      title: t.metaTitle,
      description: t.ogDescription,
      url: `${siteConfig.url}/${lang}/haqimizda`,
    },
  }
}

export default async function HaqimizdaPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const t = T[lang]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${siteConfig.url}/${lang}` },
      { '@type': 'ListItem', position: 2, name: t.breadcrumbAbout, item: `${siteConfig.url}/${lang}/haqimizda` },
    ],
  }

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t.metaTitle,
    url: `${siteConfig.url}/${lang}/haqimizda`,
    description: t.metaDescription,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      description: t.metaDescription,
    },
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: lang === 'ru' ? 'Покупка Telegram Premium или Stars через Uzgets' : 'Uzgets orqali Telegram Premium yoki Stars sotib olish',
    description: lang === 'ru'
      ? `Шаги покупки Telegram Premium или Stars из Узбекистана через бот ${siteConfig.bot}.`
      : `${siteConfig.bot} orqali Telegram Premium yoki Stars'ni O'zbekistondan sotib olish bo'yicha qadamlar.`,
    totalTime: 'PT3M',
    step: t.howSteps.map((s) => ({
      '@type': 'HowToStep',
      position: s.num,
      name: s.title,
      text: s.desc.replace(/\*\*/g, ''),
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
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={aboutSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6 sm:pt-16">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-[var(--text-muted)]">
          <Link href={`/${lang}`} className="hover:text-[var(--foreground)]">
            {t.breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{t.breadcrumbAbout}</span>
        </nav>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {t.h1Pre} <span className="text-[var(--primary)]">{t.h1Post}</span>
        </h1>
        <p className="mt-3 text-lg text-[var(--text-muted)]">{t.subtitle}</p>
      </section>

      <AnswerBox title={t.answerBoxTitle}>
        <p>{t.answerBoxBody}</p>
      </AnswerBox>

      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="mb-4 text-2xl font-bold sm:text-3xl">
          {t.missionHeading}
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--text-muted)]">
          <p>{t.missionPara1}</p>
          <p>{t.missionPara2}</p>
        </div>
      </section>

      {/* Advantages */}
      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="adv-heading">
        <h2 id="adv-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
          {t.advHeading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.advCards.map((card) => (
            <div key={card.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="font-semibold">{card.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.howHeading}
        </h2>
        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">{t.howIntro}</p>
        <ol className="space-y-3">
          {t.howSteps.map((s) => (
            <li key={s.num} className="uz-card flex gap-4 rounded-xl border border-[var(--border)] p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
                {s.num}
              </span>
              <div>
                <div className="font-semibold">{s.title}</div>
                <p
                  className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]"
                  dangerouslySetInnerHTML={{
                    __html: s.desc.replace(
                      /\*\*([^*]+)\*\*/g,
                      '<strong class="text-[var(--foreground)]">$1</strong>',
                    ),
                  }}
                />
              </div>
            </li>
          ))}
        </ol>
        <div
          className="mt-6 rounded-xl border border-[var(--primary)]/40 bg-[var(--primary)]/5 p-4 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: t.importantNote.replace(
              /\*\*([^*]+)\*\*/g,
              '<strong>$1</strong>',
            ),
          }}
        />
        <div className="mt-6">
          <BotCTA size="lg" />
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-5xl px-4 py-12" aria-labelledby="products-heading">
        <h2 id="products-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.productsHeading}
        </h2>
        <p className="mb-8 leading-relaxed text-[var(--text-muted)]">{t.productsIntro}</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <Link
            href={`/${lang}/premium`}
            className="uz-card flex flex-col gap-3 rounded-2xl border border-[var(--border)] p-6"
          >
            <div className="text-lg font-bold">{t.productsPremium.title}</div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{t.productsPremium.description}</p>
            <div className="mt-auto pt-2 font-medium text-[var(--primary)]">{t.productsPremium.cta}</div>
          </Link>
          <Link
            href={`/${lang}/stars`}
            className="uz-card flex flex-col gap-3 rounded-2xl border border-[var(--border)] p-6"
          >
            <div className="text-lg font-bold">{t.productsStars.title}</div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{t.productsStars.description}</p>
            <div className="mt-auto pt-2 font-medium text-[var(--primary)]">{t.productsStars.cta}</div>
          </Link>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="mb-3 text-2xl font-bold sm:text-3xl">
          {t.trustHeading}
        </h2>
        <p className="mb-6 leading-relaxed text-[var(--text-muted)]">{t.trustIntro}</p>
        <ul className="space-y-3">
          {t.trustList.map((item) => (
            <li key={item} className="flex gap-3">
              <svg
                className="mt-1 shrink-0 text-[var(--primary)]"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
              </svg>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <FAQ items={t.faqItems as unknown as FAQItem[]} title={t.faqTitle} />

      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.finalCtaHeading}</h2>
        <p className="mt-3 text-[var(--text-muted)]">{t.finalCtaBody}</p>
        <div className="mt-6 flex justify-center">
          <BotCTA size="lg" />
        </div>
      </section>
    </>
  )
}
