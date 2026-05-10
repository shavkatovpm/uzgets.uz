import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { BotCTA } from '@/components/BotCTA'
import { JsonLd } from '@/components/JsonLd'
import { FAQ, type FAQItem } from '@/components/FAQ'
import { AnswerBox } from '@/components/AnswerBox'
import { type Locale, isLocale, localePath, localeUrl } from '@/i18n/config'

type Params = { lang: string }

const T = {
  uz: {
    title: "Aloqa va qo'llab-quvvatlash",
    metaDescription: `${siteConfig.name} bilan bog'lanish: ${siteConfig.bot} bot orqali tezkor qo'llab-quvvatlash. Sotib olish, faollashtirish yoki texnik savollar bo'yicha 24/7 yordam.`,
    ogTitle: `Aloqa | ${siteConfig.name}`,
    ogDescription: `${siteConfig.bot} orqali bog'laning: 24/7 qo'llab-quvvatlash, tezkor javob, mahalliy tilda yordam.`,
    breadcrumbHome: 'Bosh sahifa',
    breadcrumbContact: 'Aloqa',
    h1: "Aloqa va qo'llab-quvvatlash",
    subtitle: `${siteConfig.name} bilan bog'lanishning eng tez yo'li — Telegram bot orqali.`,
    answerBoxTitle: 'Asosiy aloqa kanali',
    answerBoxBody: (
      <>
        {siteConfig.name} bilan bog&apos;lanish uchun{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
          {siteConfig.bot}
        </a>{' '}
        Telegram botidan foydalaning. Bot 24/7 ishlaydi, savollarga odatda darhol javob beriladi va o&apos;zbek hamda
        rus tillarida qo&apos;llab-quvvatlash mavjud.
      </>
    ),
    botCardLabel: 'Telegram bot',
    botCardSchedule: '24/7 — har kuni, har soat',
    whenHeading: 'Qachon murojaat qilish kerak?',
    scenarios: [
      { title: 'Sotib olishdan oldin', desc: "Narx, mahsulot, faollashtirish jarayoni yoki to'lov bo'yicha savollaringiz bo'lsa." },
      { title: "To'lov muammolari", desc: "To'lov amalga oshmadi, qaytib keldi yoki tranzaksiya statusida noaniqlik bo'lsa." },
      { title: 'Buyurtma faollashmadi', desc: "To'lov ketgan, lekin Premium yoki Stars akkauntga kelmagan bo'lsa." },
      { title: 'Texnik savollar', desc: 'Bot bilan ishlashda muammo yoki xatolik yuzaga kelsa.' },
      { title: "Sovg'a buyurtma savollari", desc: "Boshqa odam akkauntga sovg'a yuborish bo'yicha savollar." },
      { title: 'Boshqa savol/maslahat', desc: "Yuqoridagi kategoriyalarga to'g'ri kelmaydigan har qanday savol bo'yicha." },
    ],
    responseHeading: 'Javob qancha vaqtda keladi?',
    responsePara:
      "Bot avtomatik javoblar va sotib olish jarayonlari uchun darhol ishlaydi. Inson aralashuvini talab qiluvchi murakkab savollar uchun qo'llab-quvvatlash xizmati odatda tez javob beradi — kechiktirish kam uchraydi. Pik vaqtda yoki murakkab muammolarda javob biroz cho'zilishi mumkin, lekin har bir murojaat ko'rib chiqiladi.",
    faqTitle: "Aloqa bo'yicha tez-tez beriladigan savollar",
    faqItems: [
      {
        question: "Sotib olishdan oldin savol bersam bo'ladimi?",
        answer: `Albatta. ${siteConfig.bot} botiga kiring va savolingizni yozing. Yoki bot menyusidan "Aloqa" / "Qo'llab-quvvatlash" bo'limini tanlang.`,
      },
      {
        question: "To'lov amalga oshmadi yoki muammo yuz berdi — nima qilish kerak?",
        answer: `Darhol ${siteConfig.bot} botiga yozing. Tranzaksiya ID si va sotib olishga urinish vaqtini ko'rsating — qo'llab-quvvatlash xizmati holatni tezda tekshiradi.`,
      },
      {
        question: 'Buyurtmadan keyin Premium yoki Stars akkauntga kelmadi — nima qilaman?',
        answer: `${siteConfig.bot} bot orqali murojaat qiling. To'lov ID si va kiritilgan @username ni jo'nating. Texnik muammolar uchun ham xuddi shu kanal — qo'llab-quvvatlash holatni qayta ishlash uchun yetarlicha ma'lumotga ega.`,
      },
      {
        question: "Qo'llab-quvvatlash qaysi tilda ishlaydi?",
        answer: "O'zbek va rus tillarida. Botga istalgan tilda yozsangiz bo'ladi.",
      },
      {
        question: 'Email yoki telefon orqali aloqa bormi?',
        answer: `Hozircha asosiy aloqa kanali — ${siteConfig.bot} Telegram boti. Bu eng tezkor va qulay yo'l.`,
      },
      {
        question: "Bot javob bermayotgan bo'lsa nima qilaman?",
        answer: `Bot 24/7 ishlaydi va odatda darhol javob beradi. Agar bir necha daqiqada javob kelmasa, qaytadan urinib ko'ring yoki SOS so'zini yuboring — qo'llab-quvvatlash xizmati alohida boshqaruvga oladi.`,
      },
    ],
    finalHeading: 'Hoziroq murojaat qiling',
    finalText: "Bot 24/7 ochiq. Savolingizni o'zbek yoki rus tilida bemalol yozing.",
    finalCtaLabel: "Qo'llab-quvvatlashga yozish",
    contactPageDesc: 'Bizning Telegram bot orqali bog\'laning',
  },
  ru: {
    title: 'Контакты и поддержка',
    metaDescription: `Связь с ${siteConfig.name}: оперативная поддержка через бот ${siteConfig.bot}. Помощь по покупкам, активации и техническим вопросам 24/7.`,
    ogTitle: `Контакты | ${siteConfig.name}`,
    ogDescription: `Свяжитесь через ${siteConfig.bot}: поддержка 24/7, быстрые ответы, общение на местном языке.`,
    breadcrumbHome: 'Главная',
    breadcrumbContact: 'Контакты',
    h1: 'Контакты и поддержка',
    subtitle: `Самый быстрый способ связаться с ${siteConfig.name} — Telegram-бот.`,
    answerBoxTitle: 'Основной канал связи',
    answerBoxBody: (
      <>
        Чтобы связаться с {siteConfig.name}, используйте Telegram-бот{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
          {siteConfig.bot}
        </a>
        . Бот работает 24/7, отвечает на вопросы обычно сразу, поддержка доступна на узбекском и русском языках.
      </>
    ),
    botCardLabel: 'Telegram-бот',
    botCardSchedule: '24/7 — каждый день, в любое время',
    whenHeading: 'Когда обращаться?',
    scenarios: [
      { title: 'Перед покупкой', desc: 'Если у вас есть вопросы по цене, товару, процессу активации или оплате.' },
      { title: 'Проблемы с оплатой', desc: 'Оплата не прошла, вернулась обратно или статус транзакции непонятен.' },
      { title: 'Заказ не активирован', desc: 'Оплата прошла, но Premium или Stars не зачислились на аккаунт.' },
      { title: 'Технические вопросы', desc: 'Возникла проблема или ошибка при работе с ботом.' },
      { title: 'Вопросы по подаркам', desc: 'Вопросы по отправке подарка на чужой аккаунт.' },
      { title: 'Другие вопросы', desc: 'Любые вопросы, не подпадающие под перечисленные категории.' },
    ],
    responseHeading: 'Как быстро придёт ответ?',
    responsePara:
      'Бот мгновенно отвечает на автоматические запросы и обрабатывает покупки. На сложные вопросы, требующие участия человека, поддержка обычно отвечает быстро — задержки редки. В пиковое время или при сложных проблемах ответ может прийти чуть позже, но каждое обращение рассматривается.',
    faqTitle: 'Часто задаваемые вопросы по контактам',
    faqItems: [
      {
        question: 'Можно ли задать вопрос до покупки?',
        answer: `Конечно. Зайдите в бот ${siteConfig.bot} и напишите ваш вопрос. Или выберите раздел «Контакты» / «Поддержка» в меню бота.`,
      },
      {
        question: 'Оплата не прошла или возникла проблема — что делать?',
        answer: `Сразу напишите в бот ${siteConfig.bot}. Укажите ID транзакции и время попытки покупки — служба поддержки быстро проверит ситуацию.`,
      },
      {
        question: 'После заказа Premium или Stars не пришли на аккаунт — что делать?',
        answer: `Свяжитесь через бот ${siteConfig.bot}. Отправьте ID платежа и указанный @username. Технические проблемы решаются через тот же канал — поддержка имеет всю необходимую информацию для решения.`,
      },
      {
        question: 'На каких языках работает поддержка?',
        answer: 'На узбекском и русском. В бот можно писать на любом из этих языков.',
      },
      {
        question: 'Есть ли связь по email или телефону?',
        answer: `Сейчас основной канал связи — Telegram-бот ${siteConfig.bot}. Это самый быстрый и удобный способ.`,
      },
      {
        question: 'Бот не отвечает — что делать?',
        answer:
          'Бот работает 24/7 и обычно отвечает сразу. Если в течение нескольких минут ответа нет, попробуйте ещё раз или отправьте слово SOS — служба поддержки возьмёт обращение в особый режим.',
      },
    ],
    finalHeading: 'Свяжитесь сейчас',
    finalText: 'Бот открыт 24/7. Напишите ваш вопрос на узбекском или русском.',
    finalCtaLabel: 'Написать в поддержку',
    contactPageDesc: 'Свяжитесь через наш Telegram-бот',
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
    alternates: { canonical: localePath(lang, '/aloqa') },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: localeUrl(siteConfig.url, lang, '/aloqa'),
    },
  }
}

export default async function ContactPage({
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
      { '@type': 'ListItem', position: 2, name: t.breadcrumbContact, item: localeUrl(siteConfig.url, lang, '/aloqa') },
    ],
  }

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: t.ogTitle,
    url: localeUrl(siteConfig.url, lang, '/aloqa'),
    description: t.contactPageDesc,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: siteConfig.botUrl,
      availableLanguage: ['Uzbek', 'Russian'],
      areaServed: 'UZ',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={faqSchema} />

      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6 sm:pt-16">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-[var(--text-muted)]">
          <Link href={`/${lang}`} className="hover:text-[var(--foreground)]">
            {t.breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{t.breadcrumbContact}</span>
        </nav>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{t.h1}</h1>
        <p className="mt-3 text-lg text-[var(--text-muted)]">{t.subtitle}</p>
      </section>

      <AnswerBox title={t.answerBoxTitle}>
        <p>{t.answerBoxBody}</p>
      </AnswerBox>

      <section className="mx-auto max-w-3xl px-4 py-8">
        <div className="uz-card uz-card-accent rounded-2xl border border-[var(--primary)] bg-[var(--primary)]/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-[var(--text-muted)]">{t.botCardLabel}</div>
              <div className="mt-1 text-3xl font-bold sm:text-4xl">{siteConfig.bot}</div>
              <div className="mt-2 text-sm text-[var(--text-muted)]">{t.botCardSchedule}</div>
            </div>
            <BotCTA size="lg" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8" aria-labelledby="when-heading">
        <h2 id="when-heading" className="mb-4 text-2xl font-bold sm:text-3xl">
          {t.whenHeading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.scenarios.map((item) => (
            <div key={item.title} className="uz-card rounded-xl border border-[var(--border)] p-5">
              <div className="font-semibold">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8" aria-labelledby="response-heading">
        <h2 id="response-heading" className="mb-4 text-2xl font-bold sm:text-3xl">
          {t.responseHeading}
        </h2>
        <p className="leading-relaxed text-[var(--text-muted)]">{t.responsePara}</p>
      </section>

      <FAQ items={t.faqItems as unknown as FAQItem[]} title={t.faqTitle} />

      <section className="mx-auto my-12 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.finalHeading}</h2>
        <p className="mt-3 text-[var(--text-muted)]">{t.finalText}</p>
        <div className="mt-6 flex justify-center">
          <BotCTA size="lg" label={t.finalCtaLabel} />
        </div>
      </section>
    </>
  )
}
