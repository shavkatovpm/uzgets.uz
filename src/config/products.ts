/**
 * UzGets narxlari — yagona manba. Saytdagi barcha narxlar (sahifalar, bloglar, JSON-LD) shu yerdan olinadi.
 * Backend .env (STARS_PRICE_PER_UNIT, VITE_PREMIUM_3/6/12) bilan bir xil bo'lishi shart.
 */

/** 1 Telegram Star narxi, so'm (2026-11-15 dan). */
export const STAR_PRICE = 234

/** Telegram Premium narxlari, so'm. */
export const PREMIUM_PRICE = { 3: 175_000, 6: 235_000, 12: 415_000 } as const

/** Narxlar shu sanadan amalda. */
export const PRICES_DATE = '2026-11-15'
export const PRICES_DATE_UZ = '15.11.2026'

/** Narx izohi — har bir narx jadvali/bloki yonida ko'rsatiladi. */
export const PRICE_NOTE = {
  uz: "Narxlar soliq va to'lov tizimi komissiyalariga qarab o'zgarishi mumkin. Aniq narx buyurtma paytida ko'rsatiladi.",
  ru: 'Цены могут меняться в зависимости от налогов и комиссий платёжных систем. Точная цена показывается при оформлении заказа.',
} as const

export type PremiumPeriod = {
  months: 3 | 6 | 12
  slug: '3-oylik' | '6-oylik' | '12-oylik'
  priceUzs: number
  badge?: string
  perMonthHint: number
}

export const PREMIUM_PERIODS: PremiumPeriod[] = [
  { months: 3, slug: '3-oylik', priceUzs: PREMIUM_PRICE[3], perMonthHint: Math.round(PREMIUM_PRICE[3] / 3) },
  { months: 6, slug: '6-oylik', priceUzs: PREMIUM_PRICE[6], perMonthHint: Math.round(PREMIUM_PRICE[6] / 6) },
  { months: 12, slug: '12-oylik', priceUzs: PREMIUM_PRICE[12], perMonthHint: Math.round(PREMIUM_PRICE[12] / 12) },
]

export const STARS_BASE = { amount: 50, priceUzs: 50 * STAR_PRICE } as const

export function starsPrice(amount: number) {
  return Math.round((amount / STARS_BASE.amount) * STARS_BASE.priceUzs)
}

export type StarsPack = {
  amount: number
  slug: string
  priceUzs: number
  badge?: string
}

export const STARS_PACK_AMOUNTS = [50, 75, 100, 150, 250, 500, 1000, 2500, 5000, 10_000] as const

export const STARS_PACKS: StarsPack[] = STARS_PACK_AMOUNTS.map((amount) => ({
  amount,
  slug: String(amount),
  priceUzs: starsPrice(amount),
}))

export function getPremiumBySlug(slug: string): PremiumPeriod | undefined {
  return PREMIUM_PERIODS.find((p) => p.slug === slug)
}

export function getStarsBySlug(slug: string): StarsPack | undefined {
  const amount = Number(slug)
  if (!Number.isInteger(amount) || amount < STARS_BASE.amount) return undefined
  return STARS_PACKS.find((p) => p.amount === amount)
}
