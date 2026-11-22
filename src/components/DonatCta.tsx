/**
 * Donat marketing bloki: uzgets.uz/donat sahifalari ma'lumot va narx beradi,
 * xarid esa donat.uzgets.uz da (UzGets ilovasi bilan bir xil dizayn). Bu blok o'sha yerga olib boradi.
 */
import { type Locale } from '@/i18n/config'
import { type DonatCatalog, formatSum } from '@/lib/donat'

const SHOP = 'https://donat.uzgets.uz'
const shopUrl = (lang: Locale, slug?: string) => `${SHOP}/?${slug ? `game=${encodeURIComponent(slug)}&` : ''}lang=${lang}`

const L: Record<string, { cta: string; from: string; sum: string; note: string }> = {
  uz: { cta: 'Donat qilish', from: 'dan', sum: "so'm", note: "Xarid donat.uzgets.uz saytida: Uzcard yoki Humo bilan, faqat o'yin ID kerak." },
  ru: { cta: 'Пополнить', from: 'от', sum: 'сум', note: 'Покупка на сайте donat.uzgets.uz: с Uzcard или Humo, нужен только ID в игре.' },
}

export function DonatCta({ lang, catalog, slug }: { lang: Locale; catalog: DonatCatalog | null; slug?: string }) {
  const t = L[lang] || L.uz
  const games = (catalog?.games || []).filter((g) => g.items.length)
  const minPrice = (g: (typeof games)[number]) => Math.min(...g.items.map((i) => i.price))
  const priceFrom = (p: number) => (lang === 'uz' ? `${formatSum(p)} ${t.sum}${t.from}` : `${t.from} ${formatSum(p)} ${t.sum}`)
  const one = slug ? games.find((g) => g.slug === slug) : undefined

  return (
    <div className="mx-auto max-w-3xl">
      {slug ? (
        <a href={shopUrl(lang, slug)} className="flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm transition hover:shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/images/donat/${slug}.png`} alt={one?.title || slug} width={72} height={72} className="h-[72px] w-[72px] flex-none rounded-2xl object-cover" />
          <div className="min-w-0 flex-1">
            <div className="text-lg font-extrabold">{one?.title || slug}</div>
            {one && <div className="text-sm text-[var(--text-muted)]">{priceFrom(minPrice(one))}</div>}
          </div>
          <span className="w-full rounded-xl bg-[var(--primary)] px-6 py-3 text-center font-extrabold text-white sm:w-auto">{t.cta}</span>
        </a>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {games.map((g) => (
              <a key={g.slug} href={shopUrl(lang, g.slug)} className="flex flex-col items-center gap-1.5 rounded-2xl border border-[var(--border)] bg-white px-3 py-4 text-center transition hover:-translate-y-0.5 hover:shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/donat/${g.slug}.png`} alt={g.title} width={64} height={64} loading="lazy" className="h-16 w-16 rounded-2xl object-cover" />
                <strong className="text-[15px] font-extrabold">{g.title}</strong>
                <span className="text-[13px] text-[var(--text-muted)]">{priceFrom(minPrice(g))}</span>
              </a>
            ))}
          </div>
          <a href={shopUrl(lang)} className="mx-auto mt-4 flex max-w-sm justify-center rounded-xl bg-[var(--primary)] px-6 py-3.5 font-extrabold text-white">{t.cta}</a>
        </>
      )}
      <p className="mt-3 text-center text-sm text-[var(--text-muted)]">{t.note}</p>
    </div>
  )
}
