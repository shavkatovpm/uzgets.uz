/**
 * Donat (o'yin valyutasi) — uzgets.uz/donat. Narxlar backend'dan jonli (StarsPaymee + ustama),
 * pul UzGets kartasiga tushadi. Backend: stars.uzgets.uz/api/donat/*
 */
import type { Locale } from '@/i18n/config'

export const DONAT_API = 'https://stars.uzgets.uz'
export const DONAT_SLUGS = ['pubg-mobile', 'free-fire', 'mobile-legends', 'roblox', 'delta-force', 'blood-strike', 'honor-of-kings', 'arena-breakout'] as const
export type DonatSlug = (typeof DONAT_SLUGS)[number]

export type DonatItem = { id: string; name: string; price: number }
export type DonatGame = {
  slug: string
  title: string
  unit: string
  kind: 'game' | 'giftcard'
  needs_player_id: boolean
  needs_server?: boolean
  secret_kind?: 'link' | 'code' | null
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
    title: "O'yinlarga donat — PUBG UC, Free Fire, Mobile Legends, Roblox | Uzgets",
    h1: "O'yinlarga donat",
    desc: "PUBG Mobile UC, Free Fire va Mobile Legends olmos, Roblox Robux va boshqa o'yinlar. Uzcard va Humo bilan to'lov, akkauntga avtomatik yetkazish.",
    lead: "O'yinni tanlang, ID'ni kiriting va kartadan to'lang. Donat akkauntingizga avtomatik tushadi.",
  },
  ru: {
    title: 'Донат в игры — UC PUBG, Free Fire, Mobile Legends, Roblox | Uzgets',
    h1: 'Донат в игры',
    desc: 'Купить UC PUBG Mobile, алмазы Free Fire и Mobile Legends. Оплата Uzcard и Humo, автоматическое зачисление.',
    lead: 'Выберите игру, введите ID и оплатите картой. Донат поступит на аккаунт автоматически.',
  },
}

export const DONAT_GAME_SEO: Record<string, Record<Locale, Seo>> = {
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
}

export const formatSum = (n: number) => Number(n || 0).toLocaleString('ru-RU').replace(/,/g, ' ').replace(/ /g, ' ')

type GameWords = { name: string; cur: Record<Locale, string>; packs: string; how: 'id' | 'zone' | 'code' }
const NEW_GAMES: Record<string, GameWords> = {
  'mobile-legends': { name: 'Mobile Legends', cur: { uz: 'olmos', ru: 'алмазы' }, packs: '14, 70, 140, 355, 716, 1446, 2976, Weekly Pass', how: 'zone' },
  roblox: { name: 'Roblox', cur: { uz: 'Robux', ru: 'Robux' }, packs: '50, 100, 800, 1000, 2000, 4500, 10000 Robux', how: 'code' },
  'delta-force': { name: 'Delta Force', cur: { uz: 'Delta Coins', ru: 'Delta Coins' }, packs: '60, 320, 750, 1480, 3950, 8100', how: 'id' },
  'blood-strike': { name: 'Blood Strike', cur: { uz: 'BC (Gold)', ru: 'BC (Gold)' }, packs: '105, 320, 540, 1100, 2260, 5800 BC, Strike Pass', how: 'id' },
  'honor-of-kings': { name: 'Honor of Kings', cur: { uz: 'token', ru: 'токены' }, packs: '80, 240, 400, 830, 2508, 8360, Weekly Card', how: 'id' },
  'arena-breakout': { name: 'Arena Breakout', cur: { uz: 'Bonds', ru: 'Bonds' }, packs: '66, 335, 675, 1690, 3400, 6820 Bonds', how: 'id' },
}
for (const [slug, w] of Object.entries(NEW_GAMES)) {
  const idUz = w.how === 'zone' ? "ID va Zone ID'ni kiriting, nikingizni ko'ring, " : w.how === 'code' ? '' : "Player ID'ni kiriting, nikingizni ko'ring, "
  const idRu = w.how === 'zone' ? 'Введите ID и Zone ID, проверьте ник, ' : w.how === 'code' ? '' : 'Введите Player ID, проверьте ник, '
  const endUz = w.how === 'code' ? "To'lovdan keyin Robux kodi shu sahifada chiqadi, uni roblox.com/redeem da kiritasiz." : 'Donat akkauntingizga avtomatik tushadi.'
  const endRu = w.how === 'code' ? 'После оплаты код Robux появится на этой странице, активируйте его на roblox.com/redeem.' : 'Донат поступит на аккаунт автоматически.'
  ;(DONAT_GAME_SEO as Record<string, Record<Locale, Seo>>)[slug] = {
    uz: {
      title: `${w.name} ${w.cur.uz} sotib olish — Uzcard va Humo bilan | Uzgets`,
      h1: `${w.name} ${w.cur.uz} sotib olish`,
      desc: `${w.name} ${w.cur.uz} sotib olish: ${w.packs}. Uzcard va Humo bilan to'lov, ${w.how === 'code' ? 'kod darhol beriladi' : 'akkauntga avtomatik yetkazish'}.`,
      lead: `${idUz}${idUz ? 'paketni' : 'Paketni'} tanlang va kartadan to'lang. ${endUz}`,
    },
    ru: {
      title: `Купить ${w.cur.ru} ${w.name} в Узбекистане — Uzcard и Humo | Uzgets`,
      h1: `Купить ${w.cur.ru} ${w.name}`,
      desc: `${w.cur.ru[0].toUpperCase() + w.cur.ru.slice(1)} ${w.name}: ${w.packs}. Оплата Uzcard или Humo, ${w.how === 'code' ? 'код сразу после оплаты' : 'автоматическое зачисление'}.`,
      lead: `${idRu}${idRu ? 'выберите' : 'Выберите'} пакет и оплатите картой. ${endRu}`,
    },
  }
}
