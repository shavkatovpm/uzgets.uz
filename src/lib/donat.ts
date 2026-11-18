/**
 * Donat (o'yin valyutasi) — uzgets.uz/donat. Narxlar backend'dan jonli (StarsPaymee + ustama),
 * pul UzGets kartasiga tushadi. Backend: stars.uzgets.uz/api/donat/*
 */
import type { Locale } from '@/i18n/config'

export const DONAT_API = 'https://stars.uzgets.uz'
export const DONAT_SLUGS = ['pubg-mobile', 'free-fire', 'standoff-2'] as const
export type DonatSlug = (typeof DONAT_SLUGS)[number]

export type DonatItem = { id: string; name: string; price: number }
export type DonatGame = {
  slug: string
  title: string
  unit: string
  kind: 'game' | 'giftcard'
  needs_player_id: boolean
  available: boolean
  items: DonatItem[]
}
export type DonatCatalog = { enabled: boolean; pay_window_min: number; games: DonatGame[] }

/** SSR: narxlar HTML'da bo'lsin (SEO). 60 soniya keshlanadi; javob bo'lmasa — null, brauzer o'zi yuklaydi. */
export async function fetchDonatCatalog(): Promise<DonatCatalog | null> {
  try {
    const r = await fetch(`${DONAT_API}/api/donat/catalog`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(4000),
    })
    if (!r.ok) return null
    const d = await r.json()
    return d?.success ? { enabled: Boolean(d.enabled), pay_window_min: d.pay_window_min || 8, games: d.games || [] } : null
  } catch {
    return null
  }
}

export const isDonatSlug = (v: string): v is DonatSlug => (DONAT_SLUGS as readonly string[]).includes(v)

type Seo = { title: string; h1: string; desc: string; lead: string }

export const DONAT_HUB_SEO: Record<Locale, Seo> = {
  uz: {
    title: "O'yinlarga donat — PUBG UC, Free Fire olmos, Standoff 2 Gold | Uzgets",
    h1: "O'yinlarga donat",
    desc: "PUBG Mobile UC, Free Fire olmos va Standoff 2 Gold sotib olish. Uzcard va Humo bilan to'lov, akkauntga avtomatik yetkazish.",
    lead: "O'yinni tanlang, ID'ni kiriting va kartadan to'lang. Donat akkauntingizga avtomatik tushadi.",
  },
  ru: {
    title: 'Донат в игры — UC PUBG, алмазы Free Fire, Gold Standoff 2 | Uzgets',
    h1: 'Донат в игры',
    desc: 'Купить UC PUBG Mobile, алмазы Free Fire и Gold Standoff 2. Оплата Uzcard и Humo, автоматическое зачисление.',
    lead: 'Выберите игру, введите ID и оплатите картой. Донат поступит на аккаунт автоматически.',
  },
}

export const DONAT_GAME_SEO: Record<DonatSlug, Record<Locale, Seo>> = {
  'pubg-mobile': {
    uz: {
      title: "PUBG Mobile UC sotib olish — Uzcard va Humo bilan | Uzgets",
      h1: 'PUBG Mobile UC sotib olish',
      desc: "PUBG Mobile UC sotib olish Player ID orqali: 60, 325, 660, 1800, 3850 va 8100 UC, Prime va Elite Pass. Uzcard va Humo bilan to'lov, avtomatik yetkazish.",
      lead: "Player ID'ni kiriting, nikingizni ko'ring, paketni tanlang va kartadan to'lang. UC odatda 2–5 daqiqada tushadi.",
    },
    ru: {
      title: 'Купить UC PUBG Mobile в Узбекистане — Uzcard и Humo | Uzgets',
      h1: 'Купить UC для PUBG Mobile',
      desc: 'Пополнение UC PUBG Mobile по Player ID: 60, 325, 660, 1800, 3850 и 8100 UC, Prime и Elite Pass. Оплата Uzcard или Humo, автоматическое зачисление.',
      lead: 'Введите Player ID, проверьте ник, выберите пакет и оплатите картой. UC приходят обычно за 2–5 минут.',
    },
  },
  'free-fire': {
    uz: {
      title: "Free Fire olmos sotib olish — Uzcard va Humo bilan | Uzgets",
      h1: 'Free Fire olmos sotib olish',
      desc: "Free Fire olmos sotib olish UID orqali: 110 dan 6160 olmosgacha, haftalik va oylik a'zolik. Uzcard va Humo bilan to'lov, avtomatik yetkazish.",
      lead: "UID'ni kiriting, nikingizni ko'ring, paketni tanlang va kartadan to'lang. Olmoslar odatda 1–3 daqiqada tushadi.",
    },
    ru: {
      title: 'Купить алмазы Free Fire в Узбекистане — Uzcard и Humo | Uzgets',
      h1: 'Купить алмазы Free Fire',
      desc: 'Алмазы Free Fire по UID: от 110 до 6160 алмазов, недельная и месячная подписка. Оплата Uzcard или Humo, автоматическое зачисление.',
      lead: 'Введите UID, проверьте ник, выберите пакет и оплатите картой. Алмазы приходят обычно за 1–3 минуты.',
    },
  },
  'standoff-2': {
    uz: {
      title: "Standoff 2 Gold sotib olish — Uzcard va Humo bilan | Uzgets",
      h1: 'Standoff 2 Gold sotib olish',
      desc: "Standoff 2 Gold sotib olish: 100 dan 10 000 Gold gacha. Uzcard va Humo bilan to'lov, aktivatsiya havolasi darhol beriladi.",
      lead: "Paketni tanlang va kartadan to'lang. To'lovdan keyin shu sahifada aktivatsiya havolasi chiqadi, uni ochib Gold'ni olasiz.",
    },
    ru: {
      title: 'Купить Gold Standoff 2 в Узбекистане — Uzcard и Humo | Uzgets',
      h1: 'Купить Gold для Standoff 2',
      desc: 'Gold Standoff 2: от 100 до 10 000 Gold. Оплата Uzcard или Humo, ссылка активации сразу после оплаты.',
      lead: 'Выберите пакет и оплатите картой. После оплаты на этой странице появится ссылка активации, откройте её и получите Gold.',
    },
  },
}

export const formatSum = (n: number) => Number(n || 0).toLocaleString('ru-RU').replace(/,/g, ' ').replace(/ /g, ' ')
