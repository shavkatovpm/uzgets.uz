export type PremiumPeriod = {
  months: 3 | 6 | 12
  slug: '3-oylik' | '6-oylik' | '12-oylik'
  priceUzs: number
  badge?: string
  perMonthHint: number
}

export const PREMIUM_PERIODS: PremiumPeriod[] = [
  { months: 3, slug: '3-oylik', priceUzs: 168_000, perMonthHint: Math.round(168_000 / 3) },
  { months: 6, slug: '6-oylik', priceUzs: 228_000, perMonthHint: Math.round(228_000 / 6) },
  { months: 12, slug: '12-oylik', priceUzs: 408_000, perMonthHint: Math.round(408_000 / 12) },
]

export const STARS_BASE = { amount: 50, priceUzs: 12_700 } as const

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
