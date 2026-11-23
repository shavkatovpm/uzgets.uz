import Link from 'next/link'
import { DonatCta } from '@/components/DonatCta'
import { JsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/config/site'
import { type Locale, localePath, localeUrl } from '@/i18n/config'
import { DONAT_GAME_SEO, DONAT_HUB_SEO, DONAT_SLUGS, fetchDonatCatalog, formatSum, type DonatSlug } from '@/lib/donat'

const L = {
  uz: {
    home: 'Bosh sahifa', hub: 'Donat', price: 'Narx', pack: 'Paket', from: 'dan', prices: 'Narxlar', how: 'Qanday ishlaydi',
    chips: ['⚡ 1–5 daqiqada', '🔒 Nik bilan tekshiruv', '💳 Uzcard va Humo'],
    steps: [
      ["O'yin va paketni tanlang", "Narxlar so'mda, yashirin to'lov yo'q."],
      ["ID'ni kiriting", "Nikingiz chiqadi, to'lashdan oldin akkaunt to'g'riligini ko'rasiz."],
      ["Kartadan to'lang", "Uzcard yoki Humo kartadan ko'rsatilgan summani o'tkazing, donat avtomatik tushadi."],
    ],
    note: "Narxlar dollar kursi, soliq va to'lov tizimi komissiyalariga qarab o'zgarishi mumkin. Buyurtma ochilganda ko'rsatilgan summa amal qiladi.",
    faq: 'Savollar', other: "Boshqa o'yinlar",
    faqs: [
      ['Donat qancha vaqtda tushadi?', "PUBG Mobile UC odatda 2–5 daqiqada, Free Fire olmos 1–3 daqiqada tushadi."],
      ['Qaysi karta bilan to\'lash mumkin?', "Uzcard va Humo kartalaridan, istalgan bank ilovasi orqali (Click, Payme, Uzum va boshqalar). Buyurtmada ko'rsatilgan summani aynan o'zgarishsiz o'tkazing."],
      ["ID'ni xato kiritsam nima bo'ladi?", "To'lashdan oldin ID bo'yicha nikingiz ko'rsatiladi. Nik sizniki bo'lmasa to'lamang. Noto'g'ri ID'ga yuborilgan donatni o'yin ishlab chiqaruvchisi ham qaytara olmaydi."],
      ["Free Fire'ning qaysi serveri ishlaydi?", "MDH (CIS) mintaqasi akkauntlari uchun, O'zbekiston akkauntlari shu mintaqada."],
      ["To'lovdan keyin donat kelmasa-chi?", "Sahifadagi buyurtma holatini kuzating. Muammo bo'lsa buyurtma raqami bilan @uzgets_jbot ga yozing, biz hal qilamiz."],
    ],
  },
  ru: {
    home: 'Главная', hub: 'Донат', price: 'Цена', pack: 'Пакет', from: 'от', prices: 'Цены', how: 'Как это работает',
    chips: ['⚡ За 1–5 минут', '🔒 Проверка по нику', '💳 Uzcard и Humo'],
    steps: [
      ['Выберите игру и пакет', 'Цены в сумах, без скрытых платежей.'],
      ['Введите ID', 'Появится ваш ник, вы увидите, что аккаунт верный, ещё до оплаты.'],
      ['Оплатите картой', 'Переведите указанную сумму с Uzcard или Humo, донат придёт автоматически.'],
    ],
    note: 'Цены могут меняться в зависимости от курса доллара, налогов и комиссий платёжных систем. Действует сумма, показанная при создании заказа.',
    faq: 'Вопросы', other: 'Другие игры',
    faqs: [
      ['Сколько ждать донат?', 'UC PUBG Mobile обычно приходят за 2–5 минут, алмазы Free Fire за 1–3 минуты.'],
      ['Какой картой можно оплатить?', 'Картами Uzcard и Humo через любое банковское приложение (Click, Payme, Uzum и др.). Переведите сумму из заказа без изменений.'],
      ['Что будет, если ошибиться в ID?', 'Перед оплатой по ID показывается ваш ник. Если ник не ваш, не оплачивайте. Донат на неверный ID не может вернуть даже разработчик игры.'],
      ['Для какого сервера Free Fire?', 'Для аккаунтов региона СНГ (CIS), аккаунты из Узбекистана относятся к нему.'],
      ['Что делать, если донат не пришёл?', 'Следите за статусом заказа на странице. Если есть проблема, напишите номер заказа в @uzgets_jbot, мы решим.'],
    ],
  },
} as const

export async function DonatPageView({ lang, slug }: { lang: Locale; slug?: DonatSlug }) {
  const t = L[lang]
  const catalog = await fetchDonatCatalog()
  const seo = slug ? DONAT_GAME_SEO[slug][lang] : DONAT_HUB_SEO[lang]
  const path = slug ? `/donat/${slug}` : '/donat'
  const shown = (catalog?.games || []).filter((g) => (slug ? g.slug === slug : true) && g.items.length)

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.home, item: localeUrl(siteConfig.url, lang) },
        { '@type': 'ListItem', position: 2, name: t.hub, item: localeUrl(siteConfig.url, lang, '/donat') },
        ...(slug ? [{ '@type': 'ListItem', position: 3, name: seo.h1, item: localeUrl(siteConfig.url, lang, path) }] : []),
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    ...shown.map((g) => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${g.title} ${g.unit}`,
      description: DONAT_GAME_SEO[g.slug as DonatSlug]?.[lang]?.desc || seo.desc,
      brand: { '@type': 'Brand', name: siteConfig.name },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'UZS',
        lowPrice: String(Math.min(...g.items.map((i) => i.price))),
        highPrice: String(Math.max(...g.items.map((i) => i.price))),
        offerCount: String(g.items.length),
        availability: 'https://schema.org/InStock',
      },
    })),
  ]

  return (
    <>
      {ld.map((x, i) => <JsonLd key={i} data={x} />)}
      <section className="mx-auto max-w-4xl px-3 pb-8 pt-6 sm:px-4 sm:pt-10">
        <nav aria-label="breadcrumb" className="mb-4 flex flex-wrap gap-2 px-1 text-sm text-[var(--text-muted)]">
          <Link href={localePath(lang, '/')} className="text-[var(--primary)]">{t.home}</Link>
          <span>›</span>
          {slug ? <Link href={localePath(lang, '/donat')} className="text-[var(--primary)]">{t.hub}</Link> : <span>{t.hub}</span>}
          {slug && (<><span>›</span><span>{seo.h1}</span></>)}
        </nav>
        <h1 className="mb-3 text-center text-3xl font-extrabold leading-tight sm:text-4xl">{seo.h1}</h1>
        <p className="mx-auto mb-4 max-w-2xl text-center text-[var(--text-muted)]">{seo.lead}</p>
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {t.chips.map((c) => (
            <span key={c} className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-sm font-semibold shadow-sm">{c}</span>
          ))}
        </div>
        <DonatCta lang={lang} catalog={catalog} slug={slug} />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">{t.how}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.steps.map(([h, p], i) => (
            <div key={h} className="rounded-2xl border border-[var(--border)] bg-white p-5">
              <div className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-[var(--primary)] font-bold text-white">{i + 1}</div>
              <h3 className="mb-1 font-bold">{h}</h3>
              <p className="text-sm text-[var(--text-muted)]">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {shown.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-8">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">{t.prices}</h2>
          {shown.map((g) => (
            <div key={g.slug} className="mb-6">
              {!slug && (
                <h3 className="mb-2 text-lg font-bold">
                  <Link href={localePath(lang, `/donat/${g.slug}`)} className="text-[var(--primary)]">{g.title}</Link>
                  {' '}— {t.from} {formatSum(Math.min(...g.items.map((i) => i.price)))} so&apos;m
                </h3>
              )}
              <table className="w-full overflow-hidden rounded-xl border border-[var(--border)] bg-white text-sm">
                <thead className="bg-[var(--primary-tint)]">
                  <tr><th className="p-3 text-left">{t.pack}</th><th className="p-3 text-right">{t.price}</th></tr>
                </thead>
                <tbody>
                  {g.items.map((it) => (
                    <tr key={it.id} className="border-t border-[var(--primary-tint)]">
                      <td className="p-3">{it.name}</td>
                      <td className="p-3 text-right font-semibold">{formatSum(it.price)} so&apos;m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <p className="text-center text-xs text-[var(--text-muted)]">{t.note}</p>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">{t.faq}</h2>
        {t.faqs.map(([q, a]) => (
          <details key={q} className="mb-3 rounded-xl border border-[var(--border)] bg-white p-4">
            <summary className="cursor-pointer font-semibold">{q}</summary>
            <p className="mt-2 text-[var(--text-muted)]">{a}</p>
          </details>
        ))}
        {slug && (
          <p className="mt-6 text-center">
            {t.other}:{' '}
            {DONAT_SLUGS.filter((s) => s !== slug).map((s, i) => (
              <span key={s}>
                {i > 0 && ' · '}
                <Link href={localePath(lang, `/donat/${s}`)} className="font-semibold text-[var(--primary)]">{DONAT_GAME_SEO[s][lang].h1}</Link>
              </span>
            ))}
          </p>
        )}
      </section>
    </>
  )
}
