import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/JsonLd'
import { type Locale, isLocale, localePath, localeUrl } from '@/i18n/config'

type Params = { lang: string }

const lastUpdated = '2026-05-03'

const T = {
  uz: {
    title: 'Maxfiylik siyosati',
    metaDescription: `${siteConfig.name} maxfiylik siyosati: foydalanuvchi ma'lumotlari qanday yig'ilishi va ishlatilishi haqida to'liq tushuntirish.`,
    ogDescription: `${siteConfig.name} maxfiylik siyosati va foydalanuvchi ma'lumotlari xavfsizligi.`,
    ogTitleSuffix: 'Maxfiylik siyosati',
    breadcrumbHome: 'Bosh sahifa',
    lastUpdatedLabel: 'Oxirgi yangilanish',
    intro: (
      <>
        Ushbu hujjat <strong>{siteConfig.domain}</strong> sayti ({siteConfig.name}) qaysi ma&apos;lumotlarni
        yig&apos;ishi, ularni qaysi maqsadda ishlatishi va foydalanuvchi maxfiyligini qanday himoya qilishini
        tushuntiradi.
      </>
    ),
    s1Heading: "1. Sayt qanday ma'lumot yig'adi?",
    s1Para1: `${siteConfig.name} sayti faqat marketing va ma'lumot taqdim etish maqsadida ishlaydi. Saytning o'zida ro'yxatdan o'tish, login formasi yoki to'lov amalga oshiriluvchi maydon mavjud emas. Shu sababli, biz saytdan to'g'ridan-to'g'ri quyidagi shaxsiy ma'lumotlarni yig'maymiz:`,
    s1List: [
      "Ism-familiya yoki shaxsiy hujjat ma'lumotlari",
      'Telefon raqami yoki email',
      "Bank kartasi raqamlari yoki to'lov ma'lumotlari",
      'Manzil yoki geolokatsiya',
    ],
    s1Para2:
      "Sayt hosting provayderi tomonidan standart sayt jurnallari (server logs) yig'ilishi mumkin: IP manzil, brauzer turi, kirish vaqti, qaysi sahifa ko'rilgani. Bular faqat texnik sabablar (xavfsizlik, xato tahlili) uchun ishlatiladi va shaxsiy identifikatsiya uchun qo'llanmaydi.",
    s2Heading: "2. Telegram bot va to'lov ma'lumotlari",
    s2Para1Pre: 'Telegram Premium yoki Telegram Stars sotib olish uchun foydalanuvchilar ',
    s2Para1Post: " botiga o'tadilar. Bot bilan o'zaro aloqada quyidagi ma'lumotlar qayta ishlanadi:",
    s2List: [
      'Sotib olingan mahsulot biriktiriladigan @username manzili',
      "To'lov amalga oshirilgan paytdagi to'lov tizimining ma'lumotlari (UzCard, Humo, Click)",
      "Tranzaksiya ID va to'lov holati",
    ],
    s2Para2Pre:
      'Telegram bot bilan o&apos;zaro aloqa Telegram FZ-LLC kompaniyasining maxfiylik siyosati ostida ham amal qiladi. ',
    s2Link: "Telegram maxfiylik siyosatini bu yerda ko'rishingiz mumkin",
    s3Heading: "3. Ma'lumotlar uchinchi tomonlar bilan ulashilmaydi",
    s3Para: `${siteConfig.name} foydalanuvchilar haqidagi ma'lumotlarni reklama beruvchilar, marketing agentliklari yoki boshqa uchinchi tomonlar bilan sotmaydi va ulashmaydi. Telegram va to'lov tizimlari bilan ma'lumot almashish faqat sotib olish jarayonini amalga oshirish uchun amalga oshiriladi.`,
    s4Heading: '4. Foydalanuvchi huquqlari',
    s4Para1Pre: "Sotib olishda berilgan ma'lumotlaringiz haqida savollaringiz bo'lsa, ",
    s4Para1Post: 'orqali bizga murojaat qilishingiz mumkin. Siz quyidagi huquqlarga egasiz:',
    s4List: [
      "Siz haqingizda saqlangan ma'lumotlarni so'rash",
      "Noto'g'ri ma'lumotlarni tuzatishni so'rash",
      "Ma'lumotlaringizni o'chirishni so'rash (qonuniy talablardan tashqari)",
    ],
    s5Heading: "5. Maxfiylik siyosatidagi o'zgarishlar",
    s5Para:
      "Ushbu maxfiylik siyosati vaqti-vaqti bilan yangilanishi mumkin. Har qanday muhim o'zgarish bu sahifada e'lon qilinadi. \"Oxirgi yangilanish\" sanasiga e'tibor qaratish tavsiya etiladi.",
    s6Heading: '6. Aloqa',
    s6Pre: "Maxfiylik bilan bog'liq savollar bo'lsa, biz bilan ",
    s6Mid: ' orqali ',
    s6BotLink: 'bog&apos;laning yoki ',
    s6PageLink: 'aloqa sahifasiga',
    s6End: " o'ting.",
  },
  ru: {
    title: 'Политика конфиденциальности',
    metaDescription: `Политика конфиденциальности ${siteConfig.name}: подробное объяснение, какие данные пользователей собираются и как используются.`,
    ogDescription: `Политика конфиденциальности и безопасность данных пользователей ${siteConfig.name}.`,
    ogTitleSuffix: 'Политика конфиденциальности',
    breadcrumbHome: 'Главная',
    lastUpdatedLabel: 'Последнее обновление',
    intro: (
      <>
        Этот документ объясняет, какие данные собирает сайт <strong>{siteConfig.domain}</strong> ({siteConfig.name}),
        с какой целью они используются и как защищается конфиденциальность пользователей.
      </>
    ),
    s1Heading: '1. Какие данные собирает сайт?',
    s1Para1: `Сайт ${siteConfig.name} работает только в маркетинговых и информационных целях. На самом сайте нет регистрации, формы входа или поля для оплаты. Поэтому мы не собираем напрямую через сайт следующие персональные данные:`,
    s1List: [
      'ФИО или данные документов',
      'Номер телефона или email',
      'Номера банковских карт или платёжные данные',
      'Адрес или геолокация',
    ],
    s1Para2:
      'Хостинг-провайдер сайта может собирать стандартные серверные журналы (server logs): IP-адрес, тип браузера, время посещения, какие страницы открывались. Это используется только для технических целей (безопасность, анализ ошибок) и не применяется для персональной идентификации.',
    s2Heading: '2. Telegram-бот и платёжные данные',
    s2Para1Pre: 'Чтобы купить Telegram Premium или Telegram Stars, пользователи переходят в бот ',
    s2Para1Post: '. При взаимодействии с ботом обрабатываются следующие данные:',
    s2List: [
      '@username аккаунта, к которому привязывается купленный товар',
      'Данные платёжной системы во время оплаты (UzCard, Humo, Click)',
      'ID транзакции и статус оплаты',
    ],
    s2Para2Pre:
      'Взаимодействие с Telegram-ботом также подчиняется политике конфиденциальности компании Telegram FZ-LLC. ',
    s2Link: 'Политику конфиденциальности Telegram можно посмотреть здесь',
    s3Heading: '3. Данные не передаются третьим сторонам',
    s3Para: `${siteConfig.name} не продаёт и не передаёт данные пользователей рекламодателям, маркетинговым агентствам или иным третьим сторонам. Обмен данными с Telegram и платёжными системами происходит только в рамках выполнения покупки.`,
    s4Heading: '4. Права пользователей',
    s4Para1Pre: 'Если у вас есть вопросы о данных, переданных при покупке, вы можете обратиться к нам через ',
    s4Para1Post: '. У вас есть следующие права:',
    s4List: [
      'Запросить данные, хранящиеся о вас',
      'Запросить исправление неверных данных',
      'Запросить удаление ваших данных (за исключением требований закона)',
    ],
    s5Heading: '5. Изменения в политике конфиденциальности',
    s5Para:
      'Эта политика конфиденциальности может время от времени обновляться. Любые существенные изменения публикуются на этой странице. Рекомендуется обращать внимание на дату «Последнее обновление».',
    s6Heading: '6. Контакты',
    s6Pre: 'По вопросам конфиденциальности свяжитесь с нами через ',
    s6Mid: ' либо перейдите ',
    s6BotLink: 'на ',
    s6PageLink: 'страницу контактов',
    s6End: '.',
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
    title: t.title,
    description: t.metaDescription,
    alternates: { canonical: localePath(lang, '/privacy') },
    openGraph: {
      title: `${t.ogTitleSuffix} | ${siteConfig.name}`,
      description: t.ogDescription,
      url: localeUrl(siteConfig.url, lang, '/privacy'),
    },
  }
}

export default async function PrivacyPage({
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
      { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: localeUrl(siteConfig.url, lang) },
      { '@type': 'ListItem', position: 2, name: t.title, item: localeUrl(siteConfig.url, lang, '/privacy') },
    ],
  }

  const botLink = (
    <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)] hover:underline">
      {siteConfig.bot}
    </a>
  )

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <article className="mx-auto max-w-3xl px-4 pt-12 pb-12 sm:pt-16">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-[var(--text-muted)]">
          <Link href={localePath(lang)} className="hover:text-[var(--foreground)]">
            {t.breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{t.title}</span>
        </nav>

        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          {t.lastUpdatedLabel}: {lastUpdated}
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-[var(--foreground)]">
          <section>
            <p className="text-[var(--text-muted)]">{t.intro}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s1Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s1Para1}</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              {t.s1List.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
            <p className="mt-3 text-[var(--text-muted)]">{t.s1Para2}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s2Heading}</h2>
            <p className="text-[var(--text-muted)]">
              {t.s2Para1Pre}
              {botLink}
              {t.s2Para1Post}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              {t.s2List.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
            <p className="mt-3 text-[var(--text-muted)]">
              {t.s2Para2Pre}
              <a
                href="https://telegram.org/privacy"
                target="_blank"
                rel="noopener"
                className="text-[var(--primary)] hover:underline"
              >
                {t.s2Link}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s3Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s3Para}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s4Heading}</h2>
            <p className="text-[var(--text-muted)]">
              {t.s4Para1Pre}
              {botLink}
              {' '}
              {t.s4Para1Post}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              {t.s4List.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s5Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s5Para}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s6Heading}</h2>
            <p className="text-[var(--text-muted)]">
              {t.s6Pre}
              {botLink}
              {t.s6Mid}
              {t.s6BotLink}
              <Link href={localePath(lang, '/aloqa')} className="text-[var(--primary)] hover:underline">
                {t.s6PageLink}
              </Link>
              {t.s6End}
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
