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
    title: 'Foydalanish shartlari',
    metaDescription: `${siteConfig.name} foydalanish shartlari: xizmat haqida, sotib olish jarayoni, javobgarlik chegaralari va boshqa rasmiy shartlar.`,
    ogDescription: `${siteConfig.name} xizmati foydalanish shartlari va qoidalari.`,
    breadcrumbHome: 'Bosh sahifa',
    lastUpdatedLabel: 'Oxirgi yangilanish',
    introPre: 'Ushbu hujjat ',
    introMid: ' saytidan va ',
    introPost: " botidan foydalanish shartlarini belgilaydi. Saytdan yoki botdan foydalanish orqali siz quyidagi shartlarni qabul qilgan deb hisoblanasiz.",
    s1Heading: '1. Xizmat haqida',
    s1Para: `${siteConfig.name} — Telegram Premium obunalari va Telegram Stars yulduzchalarini O'zbekiston foydalanuvchilari uchun mahalliy to'lov usullari (UzCard, Humo, Click) orqali sotib olishni soddalashtiruvchi xizmat.`,
    s2Heading: '2. Sotib olish jarayoni',
    s2Pre: 'Sotib olish faqat ',
    s2Post: " orqali amalga oshiriladi. Sayt faqat ma'lumot va kirish nuqtasi sifatida ishlaydi. Bot orqali sotib olish jarayoni quyidagicha:",
    s2List: [
      'Foydalanuvchi botda mahsulot turini va miqdor/muddatni tanlaydi',
      'Mahsulot biriktiriladigan Telegram @username kiritadi',
      "To'lov usulini tanlab to'lovni amalga oshiradi",
      "To'lov tasdiqlangach, mahsulot avtomatik ko'rsatilgan akkauntga biriktiriladi",
    ],
    s3Heading: "3. Narxlar va to'lov",
    s3Para1: `Sayt va botda ko'rsatilgan narxlar O'zbekiston so'mida (UZS) ifodalangan va sotib olish paytidagi joriy narxlar hisoblanadi. ${siteConfig.name} narxlarni vaqti-vaqti bilan o'zgartirishi mumkin, ammo allaqachon amalga oshirilgan sotib olishlarga bu ta'sir qilmaydi.`,
    s3Para2:
      "To'lov UzCard, Humo, Click va boshqa mahalliy O'zbekiston to'lov tizimlari orqali amalga oshiriladi. Bu tizimlar o'z xavfsizlik va shartlariga ega.",
    s4Heading: '4. Faollashtirish va yetkazib berish',
    s4Para1:
      "To'lov tasdiqlangach, sotib olingan mahsulot ko'rsatilgan @username akkauntga avtomatik biriktiriladi. Bu jarayon odatda tezda amalga oshadi. Texnik muammo yuzaga kelsa, bot ichidagi qo'llab-quvvatlash xizmatiga murojaat qilish mumkin.",
    s4Para2:
      "Sotib olingan Premium obunasi yoki Stars yulduzchalari Telegram tomonidan to'g'ridan-to'g'ri akkauntga biriktiriladi. Keyingi muddat davomida ular Telegram serverlari va xavfsizlik tizimi ostida saqlanadi.",
    s5Heading: '5. Buyurtma muammolari va qaytarib berish',
    s5Para1Pre: "Agar to'lov amalga oshirilgan, lekin mahsulot akkauntga biriktirilmagan bo'lsa, darhol ",
    s5Para1Post: " orqali qo'llab-quvvatlash xizmatiga murojaat qiling. Har bir holat alohida ko'rib chiqiladi.",
    s5Para2:
      "Bunday holatda, agar muammo bizning tarafda bo'lsa, mahsulot qayta yuboriladi yoki to'lov qaytariladi. Foydalanuvchining xatosi (noto'g'ri @username, mavjud bo'lmagan akkaunt va boshq.) sabab bo'lsa, bunday holat alohida ko'rib chiqilib, imkoniyat darajasida hal qilinadi.",
    s5Para3:
      "Mahsulot muvaffaqiyatli yetkazilgandan so'ng (Premium akkauntga biriktirilgan, Stars yuborilgan), to'lov qaytarilmaydi — bu Telegram va to'lov tizimlari standartlariga muvofiq.",
    s6Heading: '6. Foydalanuvchi javobgarligi',
    s6Para: 'Foydalanuvchi quyidagilarga javobgar:',
    s6List: [
      "To'g'ri @username kiritish",
      'Sotib olishdan oldin narx va muddatni tasdiqlash',
      "To'lov ma'lumotlarining xavfsizligi",
      "O'zining Telegram akkaunti xavfsizligi",
    ],
    s7Heading: "7. Shartlardagi o'zgarishlar",
    s7Para: `${siteConfig.name} ushbu foydalanish shartlarini istalgan vaqt yangilashi mumkin. Yangilanish sanasiga e'tibor qaratish tavsiya etiladi. Yangilangan shartlar nashr etilgan paytdan boshlab amal qiladi.`,
    s8Heading: "8. Qo'llaniladigan qonun",
    s8Para:
      "Ushbu shartlar O'zbekiston Respublikasi qonunchiligi asosida amal qiladi. Har qanday tortishuvlar, imkoniyat darajasida, dialog orqali hal qilinishi maqsadga muvofiq.",
    s9Heading: '9. Aloqa',
    s9Pre: "Shartlar haqida savollar bo'lsa, ",
    s9Mid: ' orqali yoki ',
    s9PageLink: 'aloqa sahifasi',
    s9End: " orqali biz bilan bog'laning.",
  },
  ru: {
    title: 'Условия использования',
    metaDescription: `Условия использования ${siteConfig.name}: о сервисе, процесс покупки, ограничения ответственности и другие официальные условия.`,
    ogDescription: `Условия использования и правила сервиса ${siteConfig.name}.`,
    breadcrumbHome: 'Главная',
    lastUpdatedLabel: 'Последнее обновление',
    introPre: 'Этот документ определяет условия использования сайта ',
    introMid: ' и бота ',
    introPost: '. Используя сайт или бот, вы соглашаетесь с условиями ниже.',
    s1Heading: '1. О сервисе',
    s1Para: `${siteConfig.name} — сервис, упрощающий покупку подписок Telegram Premium и звёзд Telegram Stars для пользователей из Узбекистана через локальные методы оплаты (UzCard, Humo, Click).`,
    s2Heading: '2. Процесс покупки',
    s2Pre: 'Покупка совершается только через ',
    s2Post: '. Сайт служит лишь источником информации и точкой входа. Процесс покупки через бот следующий:',
    s2List: [
      'Пользователь выбирает в боте тип товара и количество/срок',
      'Вводит Telegram @username, к которому будет привязан товар',
      'Выбирает способ оплаты и совершает оплату',
      'После подтверждения оплаты товар автоматически зачисляется на указанный аккаунт',
    ],
    s3Heading: '3. Цены и оплата',
    s3Para1: `Цены, указанные на сайте и в боте, выражены в узбекских сумах (UZS) и являются актуальными на момент покупки. ${siteConfig.name} может время от времени изменять цены, но это не повлияет на уже совершённые покупки.`,
    s3Para2:
      'Оплата производится через UzCard, Humo, Click и другие локальные платёжные системы Узбекистана. Эти системы имеют свои условия безопасности.',
    s4Heading: '4. Активация и доставка',
    s4Para1:
      'После подтверждения оплаты купленный товар автоматически привязывается к указанному @username. Обычно это происходит быстро. При технических проблемах можно обратиться в службу поддержки внутри бота.',
    s4Para2:
      'Купленные подписки Premium или звёзды Stars привязываются к аккаунту напрямую от Telegram. В дальнейшем они хранятся на серверах Telegram и под их системой безопасности.',
    s5Heading: '5. Проблемы с заказом и возврат',
    s5Para1Pre: 'Если оплата прошла, но товар не зачислен на аккаунт, немедленно обратитесь в службу поддержки через ',
    s5Para1Post: '. Каждый случай рассматривается индивидуально.',
    s5Para2:
      'В таком случае, если проблема на нашей стороне, товар отправляется заново или оплата возвращается. Если причина — ошибка пользователя (неверный @username, несуществующий аккаунт и т. п.), такие случаи рассматриваются индивидуально и решаются в пределах возможного.',
    s5Para3:
      'После успешной доставки товара (Premium привязан к аккаунту, Stars отправлены) оплата не возвращается — это соответствует стандартам Telegram и платёжных систем.',
    s6Heading: '6. Ответственность пользователя',
    s6Para: 'Пользователь несёт ответственность за следующее:',
    s6List: [
      'Правильный ввод @username',
      'Подтверждение цены и срока перед покупкой',
      'Безопасность платёжных данных',
      'Безопасность собственного Telegram-аккаунта',
    ],
    s7Heading: '7. Изменения в условиях',
    s7Para: `${siteConfig.name} может в любое время обновлять эти условия использования. Рекомендуется обращать внимание на дату последнего обновления. Обновлённые условия действуют с момента публикации.`,
    s8Heading: '8. Применимое право',
    s8Para:
      'Эти условия действуют на основе законодательства Республики Узбекистан. Любые споры по возможности решаются путём диалога.',
    s9Heading: '9. Контакты',
    s9Pre: 'Если у вас есть вопросы по условиям, свяжитесь с нами через ',
    s9Mid: ' либо через ',
    s9PageLink: 'страницу контактов',
    s9End: '.',
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
    alternates: { canonical: localePath(lang, '/terms') },
    openGraph: {
      title: `${t.title} | ${siteConfig.name}`,
      description: t.ogDescription,
      url: localeUrl(siteConfig.url, lang, '/terms'),
    },
  }
}

export default async function TermsPage({
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
      { '@type': 'ListItem', position: 2, name: t.title, item: localeUrl(siteConfig.url, lang, '/terms') },
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
            <p className="text-[var(--text-muted)]">
              {t.introPre}
              <strong>{siteConfig.domain}</strong> ({siteConfig.name})
              {t.introMid}
              {botLink}
              {t.introPost}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s1Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s1Para}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s2Heading}</h2>
            <p className="text-[var(--text-muted)]">
              {t.s2Pre}
              {botLink}
              {t.s2Post}
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-6 text-[var(--text-muted)]">
              {t.s2List.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s3Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s3Para1}</p>
            <p className="mt-3 text-[var(--text-muted)]">{t.s3Para2}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s4Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s4Para1}</p>
            <p className="mt-3 text-[var(--text-muted)]">{t.s4Para2}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s5Heading}</h2>
            <p className="text-[var(--text-muted)]">
              {t.s5Para1Pre}
              {botLink}
              {t.s5Para1Post}
            </p>
            <p className="mt-3 text-[var(--text-muted)]">{t.s5Para2}</p>
            <p className="mt-3 text-[var(--text-muted)]">{t.s5Para3}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s6Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s6Para}</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-[var(--text-muted)]">
              {t.s6List.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s7Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s7Para}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s8Heading}</h2>
            <p className="text-[var(--text-muted)]">{t.s8Para}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">{t.s9Heading}</h2>
            <p className="text-[var(--text-muted)]">
              {t.s9Pre}
              {botLink}
              {t.s9Mid}
              <Link href={localePath(lang, '/aloqa')} className="text-[var(--primary)] hover:underline">
                {t.s9PageLink}
              </Link>
              {t.s9End}
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
