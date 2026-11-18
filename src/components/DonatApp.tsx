'use client'

/**
 * Donat do'koni (uzgets.uz/donat): 1 o'yin → 2 paket → 3 ID (nik tekshiruvi) → to'lov (karta + noyob summa, 8 daqiqa) → holat.
 * StarsJoy'dagi bilan bir xil oqim; backend: stars.uzgets.uz/api/donat/*.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import type { Locale } from '@/i18n/config'
import { DONAT_API, formatSum, type DonatCatalog, type DonatGame, type DonatItem } from '@/lib/donat'
import './donat.css'

const SUPPORT = 'https://t.me/uzgets_jbot'

const TXT = {
  uz: {
    s1: "O'yinni tanlang", s2: 'Paketni tanlang', s3: "O'yinchi ID", s4: 'Aloqa (ixtiyoriy)',
    currency: 'Valyuta', passes: 'Obuna va passlar', popular: 'Ommabop', more: 'Yana {n} ta', less: "Yig'ish",
    idPh: 'Masalan: 51221257198', idWhere: 'ID qayerda?', check: 'Tekshirish', checking: 'Tekshirilmoqda…',
    notVerified: "Bu o'yinda nik ko'rinmaydi, ID to'g'riligini tekshiring", needId: "ID'ni kiriting",
    idHelp: {
      'pubg-mobile': "O'yinga kiring → chap yuqoridagi avatarga bosing. Nik ostidagi raqam sizning Player ID'ingiz (odatda 10–11 raqam).",
      'free-fire': "O'yinga kiring → chap yuqoridagi profil rasmiga bosing. Nik ostidagi raqam sizning UID'ingiz.",
    } as Record<string, string>,
    gift: "Standoff 2 uchun ID kerak emas: to'lovdan keyin aktivatsiya havolasi beriladi.",
    contactPh: 'Telegram @username yoki telefon', contactHint: "Muammo bo'lsa siz bilan bog'lanamiz",
    pay: "To'lash", pickPack: 'Paketni tanlang', enterId: "ID'ni kiriting", soon: 'Tez orada',
    unavailable: 'Vaqtincha mavjud emas', loading: 'Narxlar yuklanmoqda…',
    agree: "Noto'g'ri ID'ga yuborilgan donat qaytarilmaydi. To'lashdan oldin nikni tekshiring.",
    payTitle: "To'lov", payLeft: 'qoldi', amount: "O'tkaziladigan summa", card: 'Karta', copy: 'Nusxa', copied: '✓ Nusxalandi',
    howPay: ['Bank ilovangizni oching (Click, Payme, Uzum…)', "Shu kartaga o'tkazma qiling", 'Summani aynan shunday yozing'],
    payWait: "To'lovni kutyapmiz. Pul tushishi bilan avtomatik yuboramiz.",
    payNote: "Boshqa summa yoki bo'lib o'tkazilsa, to'lov avtomatik tasdiqlanmaydi.",
    cancel: 'Bekor qilish', st: ["To'landi", 'Yuborilmoqda', 'Yetkazildi'],
    delivering: "To'lov qabul qilindi! Donat yuborilyapti…", delivered: 'Donat yetkazildi!',
    deliveredGame: 'akkauntingizga tushdi. Rahmat!', linkTitle: 'Aktivatsiya havolasi',
    linkHint: "Havolani oching: ko'rsatilgan skinni o'yin bozoriga aytilgan narxda qo'yasiz va Gold akkauntingizga tushadi. Havolani hech kimga bermang.",
    open: 'Havolani ochish', problem: "To'lov qabul qilindi, lekin yetkazishda muammo bo'ldi. Biz uni hal qilyapmiz, pulingiz kuymaydi.",
    expired: "To'lov vaqti tugadi. Pul o'tkazgan bo'lsangiz, chekni supportga yuboring.",
    support: 'Supportga yozish', again: 'Yana xarid qilish', order: 'Buyurtma',
    errNet: "Ulanishda xato. Internetni tekshirib qayta urinib ko'ring.", sum: "so'm",
    sub: { 'pubg-mobile': 'UC va Prime', 'free-fire': 'Olmos', 'standoff-2': 'Gold' } as Record<string, string>,
    unit: { UC: 'UC', Diamonds: 'olmos', Gold: 'Gold' } as Record<string, string>,
  },
  ru: {
    s1: 'Выберите игру', s2: 'Выберите пакет', s3: 'ID игрока', s4: 'Контакт (необязательно)',
    currency: 'Валюта', passes: 'Подписки и пропуски', popular: 'Популярно', more: 'Ещё {n}', less: 'Свернуть',
    idPh: 'Например: 51221257198', idWhere: 'Где найти ID?', check: 'Проверить', checking: 'Проверяем…',
    notVerified: 'В этой игре ник не показывается, проверьте ID', needId: 'Введите ID',
    idHelp: {
      'pubg-mobile': 'Зайдите в игру → нажмите на аватар слева вверху. Число под ником — ваш Player ID (обычно 10–11 цифр).',
      'free-fire': 'Зайдите в игру → нажмите на аватар слева вверху. Число под ником — ваш UID.',
    } as Record<string, string>,
    gift: 'Для Standoff 2 ID не нужен: после оплаты вы получите ссылку активации.',
    contactPh: 'Telegram @username или телефон', contactHint: 'Свяжемся, если возникнет проблема',
    pay: 'Оплатить', pickPack: 'Выберите пакет', enterId: 'Введите ID', soon: 'Скоро',
    unavailable: 'Временно недоступно', loading: 'Загружаем цены…',
    agree: 'Донат на неверный ID не возвращается. Проверьте ник перед оплатой.',
    payTitle: 'Оплата', payLeft: 'осталось', amount: 'Сумма перевода', card: 'Карта', copy: 'Копировать', copied: '✓ Скопировано',
    howPay: ['Откройте банковское приложение (Click, Payme, Uzum…)', 'Сделайте перевод на эту карту', 'Укажите сумму точно'],
    payWait: 'Ждём оплату. Как только деньги поступят, отправим автоматически.',
    payNote: 'Если перевести другую сумму или частями, оплата не подтвердится автоматически.',
    cancel: 'Отменить', st: ['Оплачено', 'Отправляем', 'Доставлено'],
    delivering: 'Оплата получена! Отправляем донат…', delivered: 'Донат доставлен!',
    deliveredGame: 'зачислено на аккаунт. Спасибо!', linkTitle: 'Ссылка активации',
    linkHint: 'Откройте ссылку: выставите указанный скин на рынок по указанной цене, и Gold поступит на аккаунт. Никому не передавайте ссылку.',
    open: 'Открыть ссылку', problem: 'Оплата получена, но при доставке возникла проблема. Мы уже решаем её, деньги не пропадут.',
    expired: 'Время оплаты истекло. Если вы перевели деньги, отправьте чек в поддержку.',
    support: 'Написать в поддержку', again: 'Купить ещё', order: 'Заказ',
    errNet: 'Ошибка соединения. Проверьте интернет и попробуйте снова.', sum: 'сум',
    sub: { 'pubg-mobile': 'UC и Prime', 'free-fire': 'Алмазы', 'standoff-2': 'Gold' } as Record<string, string>,
    unit: { UC: 'UC', Diamonds: 'алмазов', Gold: 'Gold' } as Record<string, string>,
  },
}

const NAME_L10N: [RegExp, string, string][] = [
  [/^Prime \(1 Month\)$/i, 'Prime · 1 oy', 'Prime · 1 мес'],
  [/^Prime Plus \(1 Month\)$/i, 'Prime Plus · 1 oy', 'Prime Plus · 1 мес'],
  [/^Weekly Membership$/i, "Haftalik a'zolik", 'Недельная подписка'],
  [/^Monthly Membership$/i, "Oylik a'zolik", 'Месячная подписка'],
  [/^Weekly Lite$/i, 'Haftalik Lite', 'Недельная Lite'],
  [/^Newbie Bundle$/i, "Yangi o'yinchi to'plami", 'Набор новичка'],
  [/^Evo Access (\d+)d$/i, 'Evo Access · $1 kun', 'Evo Access · $1 дн'],
  [/^Level Up Package (\d+)$/i, 'Level Up · $1-daraja', 'Level Up · $1 ур.'],
]

type Order = {
  token?: string
  order_id?: number
  amount?: number
  expires_at?: string
  card?: { number?: string; name?: string | null; brand?: string | null; type?: string | null } | null
  game?: string
  item?: string
  player_id?: string | null
  player_name?: string | null
  state?: 'awaiting_payment' | 'delivering' | 'delivered' | 'problem' | 'expired'
  link?: string | null
}

const STORE_KEY = 'uz_dn_order'

export function DonatApp({ lang, catalog: initial, initialGame }: { lang: Locale; catalog: DonatCatalog | null; initialGame?: string }) {
  const T = TXT[lang]
  const [catalog, setCatalog] = useState<DonatCatalog | null>(initial)
  const [slug, setSlug] = useState(initialGame || initial?.games[0]?.slug || 'pubg-mobile')
  const [itemId, setItemId] = useState('')
  const [pid, setPid] = useState('')
  const [nick, setNick] = useState<{ text: string; kind: 'ok' | 'bad' | 'wait' } | null>(null)
  const [checkedFor, setCheckedFor] = useState('')
  const [contact, setContact] = useState('')
  const [helpOpen, setHelpOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const [order, setOrder] = useState<Order | null>(null)
  const [now, setNow] = useState(() => Date.now())
  const [copied, setCopied] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)
  const pidRef = useRef<HTMLInputElement>(null)
  const pollRef = useRef<number | undefined>(undefined)

  const game: DonatGame | undefined = catalog?.games.find((g) => g.slug === slug)
  const enabled = Boolean(catalog?.enabled)

  const parseName = useCallback(
    (name: string) => {
      const m = String(name).match(/^([\d\s.,]+)\s+(UC|Diamonds|Gold)$/i)
      if (!m) return null
      const key = Object.keys(T.unit).find((k) => k.toLowerCase() === m[2].toLowerCase()) || m[2]
      return { qty: m[1].trim(), unit: T.unit[key] || m[2] }
    },
    [T],
  )
  const trName = useCallback(
    (name: string) => {
      for (const [re, uz, ru] of NAME_L10N) if (re.test(name)) return name.replace(re, lang === 'ru' ? ru : uz)
      return name
    },
    [lang],
  )
  const prettyName = useCallback((name: string) => { const p = parseName(name); return p ? `${p.qty} ${p.unit}` : trName(name) }, [parseName, trName])

  const { cur, other, popId } = useMemo(() => {
    const items = game?.items || []
    const c = items.filter((i) => parseName(i.name))
    return { cur: c, other: items.filter((i) => !parseName(i.name)), popId: (c[1] || c[0])?.id }
  }, [game, parseName])

  // tanlangan paket o'yin almashganda moslanadi
  useEffect(() => {
    if (!game?.items.length) return
    if (!game.items.some((i) => i.id === itemId)) setItemId(popId || game.items[0].id)
  }, [game, itemId, popId])

  const item: DonatItem | undefined = game?.items.find((i) => i.id === itemId)

  // katalogni yangilash + davom etayotgan buyurtma
  useEffect(() => {
    fetch(`${DONAT_API}/api/donat/catalog`)
      .then((r) => r.json())
      .then((d) => { if (d?.success) setCatalog({ enabled: Boolean(d.enabled), pay_window_min: d.pay_window_min || 8, games: d.games || [] }) })
      .catch(() => {})
    let token = ''
    try { token = new URLSearchParams(location.search).get('order') || localStorage.getItem(STORE_KEY) || '' } catch {}
    if (token) poll(token)
    return () => window.clearTimeout(pollRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // taymer
  useEffect(() => {
    if (order?.state !== 'awaiting_payment') return
    const t = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(t)
  }, [order?.state])

  const scrollTop = () => {
    const el = rootRef.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 90
    if (Math.abs(window.scrollY - top) > 40) window.scrollTo({ top, behavior: 'smooth' })
  }

  async function api(path: string, body?: unknown) {
    const r = await fetch(DONAT_API + path, body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {})
    const d = await r.json().catch(() => ({}))
    return { ok: r.ok && d.success !== false, d }
  }

  const cleanPid = (v: string) => v.trim().replace(/\s+/g, '')

  async function checkPlayer(force = false): Promise<boolean> {
    if (!game?.needs_player_id) return true
    const id = cleanPid(pid)
    if (!id) { setNick({ text: T.needId, kind: 'bad' }); pidRef.current?.focus(); return false }
    if (!force && checkedFor === `${slug}:${id}`) return true
    setNick({ text: T.checking, kind: 'wait' })
    try {
      const { ok, d } = await api('/api/donat/check-player', { game: slug, player_id: id, item: item?.name })
      if (!ok) { setNick({ text: d.error || T.errNet, kind: 'bad' }); setCheckedFor(''); return false }
      setNick({ text: d.player_name ? `✓ ${d.player_name}` : T.notVerified, kind: 'ok' })
      setCheckedFor(`${slug}:${id}`)
      return true
    } catch { setNick({ text: T.errNet, kind: 'bad' }); return false }
  }

  // yozib bo'lgach o'zi tekshiradi
  useEffect(() => {
    const id = cleanPid(pid)
    if (!game?.needs_player_id || id.length < 6 || checkedFor === `${slug}:${id}`) return
    const t = window.setTimeout(() => { checkPlayer() }, 900)
    return () => window.clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pid, slug])

  async function startOrder() {
    setErr('')
    if (!game || !item) return
    if (!(await checkPlayer())) return
    setBusy(true)
    try {
      const id = cleanPid(pid)
      const { ok, d } = await api('/api/donat/order', {
        game: slug, item: item.id, player_id: game.needs_player_id ? id : undefined,
        contact: contact.trim(), site: location.hostname, lang,
      })
      if (!ok) { setErr(d.error || T.errNet); return }
      try { localStorage.setItem(STORE_KEY, d.token) } catch {}
      history.replaceState(null, '', `${location.pathname}?order=${encodeURIComponent(d.token)}`)
      const name = nick?.kind === 'ok' && nick.text.startsWith('✓') ? nick.text.slice(2) : null
      setOrder({ ...d, game: game.title, item: item.name, player_id: game.needs_player_id ? id : null, player_name: name, state: 'awaiting_payment' })
      scrollTop()
      poll(d.token)
    } catch { setErr(T.errNet) } finally { setBusy(false) }
  }

  function poll(token: string) {
    window.clearTimeout(pollRef.current)
    fetch(`${DONAT_API}/api/donat/order/${encodeURIComponent(token)}`, { cache: 'no-store' })
      .then(async (r) => {
        if (r.status === 404) { try { localStorage.removeItem(STORE_KEY) } catch {}; history.replaceState(null, '', location.pathname); setOrder(null); return 'stop' }
        const o = await r.json()
        if (!o?.success) return
        setOrder((prev) => {
          const next: Order = { ...(prev || {}), ...o, card: o.card || prev?.card }
          if (prev?.state !== next.state) setTimeout(scrollTop, 50)
          return next
        })
        if (o.state === 'delivered' || o.state === 'expired') { try { localStorage.removeItem(STORE_KEY) } catch {}; return 'stop' }
      })
      .catch(() => {})
      .then((res) => { if (res !== 'stop') pollRef.current = window.setTimeout(() => poll(token), 4000) })
  }

  function reset() {
    window.clearTimeout(pollRef.current)
    try { localStorage.removeItem(STORE_KEY) } catch {}
    history.replaceState(null, '', location.pathname)
    setOrder(null)
    scrollTop()
  }

  async function copy(what: 'amount' | 'card') {
    const v = what === 'amount' ? String(order?.amount || '') : String(order?.card?.number || '').replace(/\D/g, '')
    try { await navigator.clipboard.writeText(v); setCopied(what); setTimeout(() => setCopied(''), 1600) } catch {}
  }

  const needId = Boolean(game?.needs_player_id) && !cleanPid(pid)
  const next = !item ? 'pack' : needId ? 'id' : 'pay'
  const onPayClick = () => {
    if (next === 'pack') return document.getElementById('dn-items')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    if (next === 'id') {
      pidRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => pidRef.current?.focus(), 350)
      setNick({ text: T.needId, kind: 'bad' })
      return
    }
    startOrder()
  }

  const what = (o: Order) => (
    <>
      <b>{o.game} · {prettyName(o.item || '')}</b>
      {o.player_id ? ` · ID ${o.player_id}` : ''}
      {o.player_name ? ` (${o.player_name})` : ''}
      {o.order_id ? ` · ${T.order} #${o.order_id}` : ''}
    </>
  )

  const itemBtn = (it: DonatItem) => {
    const p = parseName(it.name)
    return (
      <button key={it.id} type="button" className={`dn-item${it.id === itemId ? ' is-on' : ''}`} onClick={() => setItemId(it.id)}>
        {it.id === popId && <span className="dn-badge">{T.popular}</span>}
        <span className="dn-item-name">
          {p ? (<><b>{p.qty}</b> <small>{p.unit}</small></>) : trName(it.name)}
        </span>
        <span className="dn-item-price">{formatSum(it.price)} {T.sum}</span>
      </button>
    )
  }

  // ───────── to'lov ─────────
  if (order && order.state === 'awaiting_payment') {
    const end = order.expires_at ? new Date(order.expires_at).getTime() : now
    const ms = Math.max(0, end - now)
    const s = Math.round(ms / 1000)
    const late = s < 90
    const digits = String(order.card?.number || '').replace(/[^\d*]/g, '')
    return (
      <div className={`dn-app${late ? ' is-late' : ''}`} ref={rootRef}>
        <div className="dn-pay-head">
          <div>
            <div className="dn-pay-title">{T.payTitle}</div>
            <div className="dn-what">{what(order)}</div>
          </div>
          <div className="dn-timer"><b>{Math.floor(s / 60)}:{String(s % 60).padStart(2, '0')}</b><span>{T.payLeft}</span></div>
        </div>
        <div className="dn-progress"><span style={{ width: `${Math.min(100, (ms / (8 * 60000)) * 100)}%` }} /></div>
        <div className="dn-amount-box">
          <div className="dn-cap">{T.amount}</div>
          <div className="dn-amount-row">
            <b className="dn-amount">{formatSum(order.amount || 0)} {T.sum}</b>
            <button type="button" className={`dn-copy${copied === 'amount' ? ' is-ok' : ''}`} onClick={() => copy('amount')}>{copied === 'amount' ? T.copied : T.copy}</button>
          </div>
        </div>
        <div className="dn-bank">
          <div className="dn-bank-top"><span>{T.card}</span><span>{String(order.card?.type || order.card?.brand || '').toUpperCase()}</span></div>
          <div className="dn-bank-num">{digits.replace(/(.{4})(?=.)/g, '$1 ')}</div>
          <div className="dn-bank-bottom">
            <span>{order.card?.name || ''}</span>
            <button type="button" className={`dn-copy dn-copy-w${copied === 'card' ? ' is-ok' : ''}`} onClick={() => copy('card')}>{copied === 'card' ? T.copied : T.copy}</button>
          </div>
        </div>
        <ol className="dn-howpay">{T.howPay.map((x) => <li key={x}>{x}</li>)}</ol>
        <div className="dn-wait"><span className="dn-dots"><i /><i /><i /></span>{T.payWait}</div>
        <p className="dn-hint">{T.payNote}</p>
        <button type="button" className="dn-link-btn" onClick={reset}>{T.cancel}</button>
      </div>
    )
  }

  // ───────── holat ─────────
  if (order && order.state) {
    const st = order.state
    const step = st === 'delivered' ? 2 : st === 'delivering' || st === 'problem' ? 1 : -1
    const ico = ({ delivering: '🚀', delivered: '🎉', problem: '🛠️', expired: '⌛' } as Record<string, string>)[st] || '🚀'
    const text =
      st === 'delivered' ? (order.link ? T.delivered : `${prettyName(order.item || '')} ${T.deliveredGame}`)
      : st === 'problem' ? T.problem : st === 'expired' ? T.expired : T.delivering
    return (
      <div className={`dn-app${st === 'delivered' ? ' is-done' : ''}`} ref={rootRef}>
        {st !== 'expired' && (
          <ol className="dn-track">
            {T.st.map((x, i) => (
              <li key={x} className={[i < step || (st === 'delivered' && i <= step) ? 'done' : '', i === step && st !== 'delivered' ? 'now' : '', i === step && st === 'problem' ? 'bad' : ''].join(' ')}>
                <span className="dn-dot" />{x}
              </li>
            ))}
          </ol>
        )}
        <div className="dn-status-ico">{ico}</div>
        <div className="dn-status-text">{text}</div>
        <div className="dn-what dn-center">{what(order)}</div>
        {order.link && (
          <div className="dn-linkbox">
            <div className="dn-cap">🔗 {T.linkTitle}</div>
            <a className="dn-pay dn-pay-full" href={order.link} target="_blank" rel="noopener noreferrer">{T.open}</a>
            <p className="dn-hint">{T.linkHint}</p>
          </div>
        )}
        <div className="dn-status-actions">
          {(st === 'problem' || st === 'expired') && <a className="dn-ghost" href={SUPPORT} target="_blank" rel="noopener">💬 {T.support}</a>}
          {st !== 'delivering' && <button type="button" className="dn-ghost" onClick={reset}>{T.again}</button>}
        </div>
      </div>
    )
  }

  // ───────── do'kon ─────────
  const LIMIT = 4
  const selIdx = other.findIndex((x) => x.id === itemId)
  const collapse = other.length > LIMIT + 1 && !showAll && selIdx < LIMIT
  const help = T.idHelp[slug]
  return (
    <div className="dn-app" ref={rootRef}>
      <div className="dn-sh is-done"><span className="dn-n">1</span>{T.s1}</div>
      <div className="dn-games" role="tablist">
        {(catalog?.games || []).map((g) => (
          <button
            key={g.slug}
            type="button"
            role="tab"
            aria-selected={g.slug === slug}
            className={`dn-game g-${g.slug}${g.slug === slug ? ' is-on' : ''}`}
            onClick={() => { if (g.slug !== slug) { setSlug(g.slug); setItemId(''); setPid(''); setNick(null); setCheckedFor(''); setErr(''); setShowAll(false); setHelpOpen(false) } }}
          >
            <Image className="dn-game-art" src={`/images/donat/${g.slug}.png`} alt={g.title} width={64} height={64} />
            <span className="dn-game-name">{g.title}</span>
            <span className="dn-game-sub">{T.sub[g.slug] || g.unit}</span>
          </button>
        ))}
      </div>

      <div className={`dn-sh${item ? ' is-done' : ''}`}><span className="dn-n">2</span>{T.s2}</div>
      <div id="dn-items">
        {!game ? <div className="dn-muted">{T.loading}</div>
          : !game.available || !game.items.length ? <div className="dn-muted">{T.unavailable}</div>
          : (
            <>
              {other.length > 0 && cur.length > 0 && <div className="dn-group">{T.currency}</div>}
              {cur.length > 0 && <div className="dn-items">{cur.map(itemBtn)}</div>}
              {other.length > 0 && cur.length > 0 && <div className="dn-group">{T.passes}</div>}
              {other.length > 0 && <div className="dn-items">{(collapse ? other.slice(0, LIMIT) : other).map(itemBtn)}</div>}
              {other.length > LIMIT + 1 && selIdx < LIMIT && (
                <button type="button" className="dn-more" onClick={() => setShowAll((v) => !v)}>
                  {showAll ? T.less : T.more.replace('{n}', String(other.length - LIMIT))}
                </button>
              )}
            </>
          )}
      </div>

      {game?.needs_player_id ? (
        <div>
          <div className={`dn-sh${checkedFor ? ' is-done' : ''}`}>
            <span className="dn-n">3</span>{T.s3}
            {help && <button type="button" className="dn-where" onClick={() => setHelpOpen((v) => !v)}>{T.idWhere}</button>}
          </div>
          {helpOpen && help && <div className="dn-help">{help}</div>}
          <div className="dn-idwrap">
            <input
              ref={pidRef}
              className={`dn-input${nick?.kind === 'ok' ? ' is-ok' : nick?.kind === 'bad' ? ' is-bad' : ''}`}
              inputMode="numeric"
              autoComplete="off"
              maxLength={40}
              placeholder={T.idPh}
              value={pid}
              onChange={(e) => { setPid(e.target.value); setCheckedFor(''); setNick(null) }}
              onKeyDown={(e) => { if (e.key === 'Enter') checkPlayer(true) }}
            />
            <button type="button" className="dn-check" disabled={nick?.kind === 'wait'} onClick={() => checkPlayer(true)}>{T.check}</button>
          </div>
          {nick && <div className={`dn-nick is-${nick.kind}`}>{nick.text}</div>}
        </div>
      ) : game ? (
        <div className="dn-giftnote">🔗 {T.gift}</div>
      ) : null}

      <details className="dn-contact">
        <summary>{T.s4}</summary>
        <input className="dn-input" maxLength={64} placeholder={T.contactPh} value={contact} onChange={(e) => setContact(e.target.value)} />
        <div className="dn-hint">{T.contactHint}</div>
      </details>

      <div className="dn-bar">
        <div className="dn-bar-info">
          <span className="dn-bar-v">{item ? prettyName(item.name) : '—'}</span>
          <span className="dn-bar-p">{item ? `${formatSum(item.price)} ${T.sum}` : ''}</span>
        </div>
        <button type="button" className={`dn-pay${next === 'pay' && enabled ? ' is-ready' : ''}${busy ? ' is-busy' : ''}`} disabled={!enabled || busy} onClick={onPayClick}>
          {!enabled ? T.soon : next === 'pack' ? T.pickPack : next === 'id' ? T.enterId : T.pay}
        </button>
      </div>
      <p className="dn-agree">🛡️ {T.agree}</p>
      {err && <div className="dn-err">{err}</div>}
    </div>
  )
}
