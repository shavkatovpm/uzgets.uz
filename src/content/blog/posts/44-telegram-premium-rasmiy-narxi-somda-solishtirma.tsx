import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-rasmiy-narxi-somda-solishtirma'
const TODAY = '2026-10-07'

// Markaziy bank kursi, 07.10.2026 (cbu.uz). Narxlar shu kunda tekshirilgan.
const USD_RATE = 11_790.79
const USD_RATE_LABEL = '11 790,79'

type Lang = 'uz' | 'ru'
type Row = { uz: string; ru: string }
type Triple = [number, number, number]

const MONTHS: Triple = [3, 6, 12]
const UZGETS: Triple = [
  PREMIUM_PERIODS.find((p) => p.months === 3)!.priceUzs,
  PREMIUM_PERIODS.find((p) => p.months === 6)!.priceUzs,
  PREMIUM_PERIODS.find((p) => p.months === 12)!.priceUzs,
]

// App Store (O'zbekiston vitrinasi) va Fragment narxlari, USD
const APP_PACK: Triple = [14.99, 19.99, 39.99]
const APP_SUB: Triple = [3.99 * 3, 3.99 * 6, 29.99]
const FRAGMENT: Triple = [11.99, 15.99, 28.99]

const CHANNELS: { name: Row; pay: Row; usd: Triple }[] = [
  {
    name: { uz: 'App Store — bir martalik paket', ru: 'App Store — разовый пакет' },
    pay: { uz: 'Xalqaro karta, uzaymaydi', ru: 'Международная карта, без продления' },
    usd: APP_PACK,
  },
  {
    name: { uz: 'App Store — obuna ($3.99/oy yoki $29.99/yil)', ru: 'App Store — подписка ($3.99/мес. или $29.99/год)' },
    pay: { uz: 'Xalqaro karta, avtomatik uzayadi', ru: 'Международная карта, автопродление' },
    usd: APP_SUB,
  },
  {
    name: { uz: 'Fragment', ru: 'Fragment' },
    pay: { uz: 'TON yoki USDT kripto-hamyon', ru: 'Криптокошелёк TON или USDT' },
    usd: FRAGMENT,
  },
]

const toUzs = (usd: number) => Math.round((usd * USD_RATE) / 100) * 100
const money = (n: number, lang: Lang) => `${formatNumber(n)} ${lang === 'uz' ? "so'm" : 'сум'}`
const pct = (usd: number, i: number) => Math.round((Math.abs(UZGETS[i] - toUzs(usd)) / toUzs(usd)) * 100)
const pctRange = (usd: Triple) => {
  const all = usd.map((u, i) => pct(u, i))
  return `${Math.min(...all)}–${Math.max(...all)}%`
}

function diffLabel(usd: number, i: number, lang: Lang) {
  const official = toUzs(usd)
  const gap = money(Math.abs(UZGETS[i] - official), lang)
  if (UZGETS[i] < official) {
    return lang === 'uz' ? `Uzgets ${pct(usd, i)}% arzon (−${gap})` : `Uzgets дешевле на ${pct(usd, i)}% (−${gap})`
  }
  return lang === 'uz' ? `Uzgets ${pct(usd, i)}% qimmat (+${gap})` : `Uzgets дороже на ${pct(usd, i)}% (+${gap})`
}

const PACK_RANGE = pctRange(APP_PACK)
const FRAGMENT_RANGE = pctRange(FRAGMENT)
const ANNUAL_PCT = pct(APP_SUB[2], 2)
const FRAGMENT_MAX = Math.max(...FRAGMENT.map((u, i) => pct(u, i)))

function UzAnswerBox() {
  return (
    <p>
      2026-yil 7-oktabr holatiga App Store&apos;ning O&apos;zbekiston vitrinasida Telegram Premium{' '}
      <strong>oyiga $3.99</strong> (≈ {money(toUzs(3.99), 'uz')}), yillik obuna <strong>$29.99</strong>{' '}
      (≈ {money(toUzs(29.99), 'uz')}). Fragment&apos;da 3 oy $11.99, 12 oy $28.99. Uzgets narxi —{' '}
      {money(UZGETS[0], 'uz')} / {money(UZGETS[1], 'uz')} / {money(UZGETS[2], 'uz')}: bu App
      Store&apos;ning bir martalik paketlaridan <strong>{PACK_RANGE} arzon</strong>, lekin yillik
      obuna va Fragment&apos;dan <strong>{ANNUAL_PCT}–{FRAGMENT_MAX}% qimmat</strong>.
      Farqi — rasmiy yo&apos;llar xalqaro karta yoki kripto talab qiladi, Uzgets esa UzCard, Humo,
      Click va Payme&apos;ni qabul qiladi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      На 7 октября 2026 года в узбекистанской витрине App Store Telegram Premium стоит{' '}
      <strong>$3.99 в месяц</strong> (≈ {money(toUzs(3.99), 'ru')}), годовая подписка —{' '}
      <strong>$29.99</strong> (≈ {money(toUzs(29.99), 'ru')}). На Fragment 3 месяца — $11.99, 12
      месяцев — $28.99. Цена Uzgets — {money(UZGETS[0], 'ru')} / {money(UZGETS[1], 'ru')} /{' '}
      {money(UZGETS[2], 'ru')}: это на <strong>{PACK_RANGE} дешевле</strong> разовых пакетов App
      Store, но на <strong>{ANNUAL_PCT}–{FRAGMENT_MAX}% дороже</strong>{' '}
      годовой подписки и Fragment. Разница в том, что официальные способы требуют международную
      карту или крипто, а Uzgets принимает UzCard, Humo, Click и Payme.
    </p>
  )
}

function PriceTable({ lang }: { lang: Lang }) {
  const uz = lang === 'uz'
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-3 text-left">{uz ? 'Kanal' : 'Канал'}</th>
            {MONTHS.map((m) => (
              <th key={m} className="px-4 py-3 text-left">{m} {uz ? 'oy' : 'мес.'}</th>
            ))}
            <th className="px-4 py-3 text-left">{uz ? "To'lov" : 'Оплата'}</th>
          </tr>
        </thead>
        <tbody>
          {CHANNELS.map((c) => (
            <tr key={c.name.uz} className="border-t border-[var(--border)]">
              <td className="px-4 py-3 font-medium">{c.name[lang]}</td>
              {c.usd.map((u, i) => (
                <td key={i} className="px-4 py-3">
                  {money(toUzs(u), lang)}
                  <div className="text-xs text-[var(--text-muted)]">${u.toFixed(2)}</div>
                </td>
              ))}
              <td className="px-4 py-3 text-[var(--text-muted)]">{c.pay[lang]}</td>
            </tr>
          ))}
          <tr className="border-t border-[var(--border)] bg-[var(--primary)]/5">
            <td className="px-4 py-3 font-medium">Uzgets ({siteConfig.bot})</td>
            {UZGETS.map((p, i) => (
              <td key={i} className="px-4 py-3 font-semibold">{money(p, lang)}</td>
            ))}
            <td className="px-4 py-3 text-[var(--text-muted)]">
              {uz ? 'UzCard, Humo, Click, Payme; uzaymaydi' : 'UzCard, Humo, Click, Payme; без продления'}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="border-t border-[var(--border)] bg-[var(--muted)]/30 px-4 py-2 text-xs text-[var(--text-muted)]">
        {uz
          ? `Dollar narxlari 2026-yil 7-oktabrda tekshirilgan. So'mga Markaziy bank kursi bo'yicha o'tkazilgan: 1 USD = ${USD_RATE_LABEL} so'm, 100 so'mgacha yaxlitlangan. Obuna qatorida 3 va 6 oy — oylik $3.99 to'lovlar yig'indisi.`
          : `Цены в долларах проверены 7 октября 2026 года. Пересчёт по курсу Центробанка: 1 USD = ${USD_RATE_LABEL} сум, округление до 100 сум. В строке подписки 3 и 6 месяцев — сумма ежемесячных платежей по $3.99.`}
      </div>
    </div>
  )
}

function DiffTable({ lang }: { lang: Lang }) {
  const uz = lang === 'uz'
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-3 text-left">{uz ? 'Uzgets nimaga nisbatan' : 'Uzgets в сравнении с'}</th>
            {MONTHS.map((m) => (
              <th key={m} className="px-4 py-3 text-left">{m} {uz ? 'oy' : 'мес.'}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CHANNELS.map((c) => (
            <tr key={c.name.uz} className="border-t border-[var(--border)]">
              <td className="px-4 py-3 font-medium">{c.name[lang]}</td>
              {c.usd.map((u, i) => (
                <td key={i} className="px-4 py-3">{diffLabel(u, i, lang)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Sources({ lang }: { lang: Lang }) {
  const uz = lang === 'uz'
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{uz ? 'Manbalar va tekshiruv' : 'Источники и проверка'}</div>
      <ul className="space-y-2 text-[var(--text-muted)]">
        <li>
          <a href="https://apps.apple.com/uz/app/telegram-messenger/id686449807" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            App Store (O&apos;zbekiston) — Telegram Messenger
          </a>{' '}
          — {uz ? "ilova ichidagi xaridlar ro'yxati: oylik, yillik va 3/6/12 oylik paketlar narxi" : 'список встроенных покупок: цены на месяц, год и пакеты на 3/6/12 месяцев'}.
        </li>
        <li>
          <a href="https://fragment.com/premium/gift" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            fragment.com/premium/gift
          </a>{' '}
          — {uz ? "3, 6 va 12 oylik Premium narxi va to'lov usullari" : 'цены Premium на 3, 6 и 12 месяцев и способы оплаты'}.
        </li>
        <li>
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Premium FAQ
          </a>{' '}
          — {uz ? "narx nega farq qilishi, do'kon komissiyasi, @PremiumBot chegirmasi" : 'почему цена различается, комиссии магазинов, скидка в @PremiumBot'}.
        </li>
        <li>
          <a href="https://cbu.uz/uz/arkhiv-kursov-valyut/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            cbu.uz — valyuta kurslari
          </a>{' '}
          — {uz ? '07.10.2026 uchun AQSH dollari kursi' : 'курс доллара США на 07.10.2026'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "2026-yil 7-oktabrda tekshirilgan. Rasmiy narxlar va kurs o'zgarishi mumkin — to'lashdan oldin do'kon yoki botdagi yakuniy summani ko'ring."
          : 'Проверено 7 октября 2026 года. Официальные цены и курс могут измениться — перед оплатой смотрите итоговую сумму в магазине или боте.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <nav aria-label="Mundarija" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Mundarija</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#narxlar" className="hover:text-[var(--primary)] hover:underline">Rasmiy narxlar so&apos;mda</a></li>
          <li><a href="#farq" className="hover:text-[var(--primary)] hover:underline">Uzgets rasmiy narxdan qancha farq qiladi</a></li>
          <li><a href="#real-summa" className="hover:text-[var(--primary)] hover:underline">Nega kartadan yechiladigan summa boshqacha chiqadi</a></li>
          <li><a href="#kimga" className="hover:text-[var(--primary)] hover:underline">Qaysi yo&apos;l kimga mos</a></li>
          <li><a href="#boshqa-kanallar" className="hover:text-[var(--primary)] hover:underline">Google Play va @PremiumBot</a></li>
        </ol>
      </nav>

      <h2 id="narxlar">Telegram Premium rasmiy narxi so&apos;mda qancha?</h2>
      <p>
        Telegram Premium&apos;ning rasmiy narxi dollarda belgilangan va kanalga qarab farq qiladi.
        App Store&apos;ning O&apos;zbekiston vitrinasida oylik obuna <strong>$3.99</strong>, yillik
        obuna <strong>$29.99</strong>; bir martalik paketlar — 3 oy $14.99, 6 oy $19.99, 12 oy
        $39.99. Fragment&apos;da 3 oy $11.99, 6 oy $15.99, 12 oy $28.99. Markaziy bankning
        07.10.2026 kursi bo&apos;yicha so&apos;mda:
      </p>
      <PriceTable lang="uz" />
      <p>
        Jadvaldagi eng arzon rasmiy variant — Fragment&apos;dagi 12 oylik paket
        ({money(toUzs(FRAGMENT[2]), 'uz')}) va App Store&apos;dagi yillik obuna
        ({money(toUzs(APP_SUB[2]), 'uz')}). Eng qimmati — App Store&apos;ning 12 oylik bir martalik
        paketi ({money(toUzs(APP_PACK[2]), 'uz')}).
      </p>

      <h2 id="farq">Uzgets rasmiy narxdan qancha farq qiladi?</h2>
      <p>
        Uzgets bir xil rasmiy kanalga nisbatan ham arzon, ham qimmat chiqadi — bu qaysi variant
        bilan solishtirishga bog&apos;liq. Uzgets&apos;dagi Premium bir martalik to&apos;lov va
        avtomatik uzaymaydi, shuning uchun eng to&apos;g&apos;ri taqqos — App Store&apos;ning bir
        martalik paketlari:
      </p>
      <DiffTable lang="uz" />
      <ul>
        <li>
          <strong>App Store bir martalik paketlariga nisbatan</strong> Uzgets {PACK_RANGE} arzon:
          12 oylikda farq {money(toUzs(APP_PACK[2]) - UZGETS[2], 'uz')}.
        </li>
        <li>
          <strong>App Store yillik obunasiga nisbatan</strong> Uzgets {ANNUAL_PCT}% qimmat
          (+{money(UZGETS[2] - toUzs(APP_SUB[2]), 'uz')}). Lekin obuna avtomatik uzayadi va xalqaro
          karta talab qiladi.
        </li>
        <li>
          <strong>Fragment&apos;ga nisbatan</strong> Uzgets {FRAGMENT_RANGE} qimmat: 3 oylikda
          +{money(UZGETS[0] - toUzs(FRAGMENT[0]), 'uz')}, 12 oylikda
          +{money(UZGETS[2] - toUzs(FRAGMENT[2]), 'uz')}. Fragment&apos;da to&apos;lov faqat kripto bilan.
        </li>
      </ul>
      <p>
        Demak, &laquo;Uzgets rasmiy narxdan arzon&raquo; degan umumiy da&apos;vo noto&apos;g&apos;ri
        bo&apos;lardi. To&apos;g&apos;risi: Uzgets — mahalliy karta bilan to&apos;lash imkoniyati uchun
        eng arzon rasmiy yo&apos;ldan {FRAGMENT_RANGE} qimmatroq, lekin App Store&apos;ning aynan
        shunday bir martalik paketlaridan arzonroq variant.
      </p>
      <InlineBotCTA lang="uz" text="Xalqaro karta va kriptosiz — 3 oylik Premium 168 000 so'm, UzCard yoki Humo bilan." />

      <h2 id="real-summa">Nega kartadan yechiladigan summa jadvaldagidan boshqacha chiqadi?</h2>
      <p>
        Jadvaldagi so&apos;m — Markaziy bankning rasmiy kursi bo&apos;yicha hisob. Amalda rasmiy
        kanal orqali to&apos;laganda summa odatda yuqoriroq bo&apos;ladi:
      </p>
      <ul>
        <li><strong>Bank kursi.</strong> Dollardagi to&apos;lovni bank o&apos;zining sotish kursi bo&apos;yicha konvertatsiya qiladi; bu kurs Markaziy bank kursidan yuqori bo&apos;ladi, ayrim kartalarda konvertatsiya komissiyasi ham bor.</li>
        <li><strong>Do&apos;kon komissiyasi va soliqlar.</strong> Telegram FAQ&apos;iga ko&apos;ra, obuna narxiga do&apos;kon yoki uchinchi tomon to&apos;lovlari, mahalliy soliqlar va Telegram nazoratida bo&apos;lmagan boshqa to&apos;lovlar kirishi mumkin.</li>
        <li><strong>Kripto kursi.</strong> Fragment&apos;da dollardagi narx TON yoki USDT bilan to&apos;lanadi; kriptoni sotib olish va o&apos;tkazishda birja spredi va tarmoq to&apos;lovi qo&apos;shiladi.</li>
      </ul>
      <p>
        Uzgets narxi esa so&apos;mda qat&apos;iy: botda ko&apos;rsatilgan summa — kartadan
        yechiladigan summa.
      </p>

      <h2 id="kimga">Qaysi yo&apos;l kimga mos?</h2>
      <ul>
        <li><strong>Xalqaro kartangiz va iPhone&apos;ingiz bor, avtomatik uzayish muammo emas</strong> — App Store yillik obunasi ($29.99) uzoq muddatga arzon rasmiy yo&apos;l. Uzayishni to&apos;xtatish tartibi:{' '}
          <Link href="/blog/telegram-premium-obunasini-bekor-qilish" className="text-[var(--primary)] hover:underline">Premium obunasini bekor qilish</Link>.
        </li>
        <li><strong>TON yoki USDT hamyoningiz bor</strong> — Fragment har uch muddatda ham eng past dollar narxini beradi.</li>
        <li><strong>Faqat UzCard, Humo, Click yoki Payme bor</strong> — rasmiy kanallar bu kartalarni qabul qilmaydi; Uzgets orqali so&apos;mda to&apos;lab, faqat @username ko&apos;rsatasiz. Mahalliy botlar o&apos;rtasidagi narx farqi:{' '}
          <Link href="/blog/eng-arzon-telegram-premium-ozbekistonda" className="text-[var(--primary)] hover:underline">O&apos;zbekistonda eng arzon Premium</Link>.
        </li>
        <li><strong>Boshqa odamga sovg&apos;a qilmoqchisiz</strong> — App Store&apos;ning bir martalik paketlari bilan solishtirganda Uzgets {PACK_RANGE} arzon.</li>
      </ul>
      <p>
        Barcha usullarning qadam-baqadam tartibi alohida qo&apos;llanmada:{' '}
        <Link href="/blog/telegram-premium-toliq-qollanma-barcha-usullar" className="text-[var(--primary)] hover:underline">
          Telegram Premium sotib olish — barcha usullar
        </Link>. Uzgets tariflari — <Link href="/premium" className="text-[var(--primary)] hover:underline">/premium</Link> sahifasida.
      </p>

      <h2 id="boshqa-kanallar">Google Play va @PremiumBot nega jadvalda yo&apos;q?</h2>
      <p>
        Bu ikki kanal narxini ochiq sahifada e&apos;lon qilmaydi — summa faqat to&apos;lov oynasida,
        akkaunt mintaqasiga qarab ko&apos;rinadi. Shu sababli tekshirib bo&apos;lmaydigan raqam
        jadvalga kiritilmadi. Telegram FAQ&apos;i faqat shuni tasdiqlaydi: @PremiumBot orqali
        olingan obunalar Apple va Google komissiyasi yo&apos;qligi uchun sukut bo&apos;yicha
        chegirmali. Aniq narxni Telegram&apos;da Sozlamalar → Telegram Premium bo&apos;limida yoki
        botning o&apos;zida ko&apos;rasiz.
      </p>

      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Rasmiy narxlar App Store va Fragment sahifalaridan, Uzgets narxlari joriy tariflardan olingan; foizlar Markaziy bank kursi bo&apos;yicha hisoblangan va bank konvertatsiyasini hisobga olmaydi.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#narxlar" className="hover:text-[var(--primary)] hover:underline">Официальные цены в сумах</a></li>
          <li><a href="#farq" className="hover:text-[var(--primary)] hover:underline">Насколько Uzgets отличается от официальной цены</a></li>
          <li><a href="#real-summa" className="hover:text-[var(--primary)] hover:underline">Почему с карты списывается другая сумма</a></li>
          <li><a href="#kimga" className="hover:text-[var(--primary)] hover:underline">Какой способ кому подходит</a></li>
          <li><a href="#boshqa-kanallar" className="hover:text-[var(--primary)] hover:underline">Google Play и @PremiumBot</a></li>
        </ol>
      </nav>

      <h2 id="narxlar">Сколько стоит Telegram Premium официально в сумах?</h2>
      <p>
        Официальная цена Telegram Premium задана в долларах и зависит от канала. В узбекистанской
        витрине App Store месячная подписка стоит <strong>$3.99</strong>, годовая —{' '}
        <strong>$29.99</strong>; разовые пакеты — 3 месяца $14.99, 6 месяцев $19.99, 12 месяцев
        $39.99. На Fragment: 3 месяца $11.99, 6 месяцев $15.99, 12 месяцев $28.99. В сумах по курсу
        Центробанка на 07.10.2026:
      </p>
      <PriceTable lang="ru" />
      <p>
        Самые дешёвые официальные варианты в таблице — пакет на 12 месяцев на Fragment
        ({money(toUzs(FRAGMENT[2]), 'ru')}) и годовая подписка App Store
        ({money(toUzs(APP_SUB[2]), 'ru')}). Самый дорогой — разовый пакет App Store на 12 месяцев
        ({money(toUzs(APP_PACK[2]), 'ru')}).
      </p>

      <h2 id="farq">Насколько Uzgets отличается от официальной цены?</h2>
      <p>
        Uzgets оказывается и дешевле, и дороже официального канала — в зависимости от того, с каким
        вариантом сравнивать. Premium в Uzgets — разовый платёж без автопродления, поэтому самое
        корректное сравнение — с разовыми пакетами App Store:
      </p>
      <DiffTable lang="ru" />
      <ul>
        <li>
          <strong>По сравнению с разовыми пакетами App Store</strong> Uzgets дешевле на {PACK_RANGE}:
          на 12 месяцах разница — {money(toUzs(APP_PACK[2]) - UZGETS[2], 'ru')}.
        </li>
        <li>
          <strong>По сравнению с годовой подпиской App Store</strong> Uzgets дороже на {ANNUAL_PCT}%
          (+{money(UZGETS[2] - toUzs(APP_SUB[2]), 'ru')}). Но подписка продлевается автоматически и
          требует международную карту.
        </li>
        <li>
          <strong>По сравнению с Fragment</strong> Uzgets дороже на {FRAGMENT_RANGE}: на 3 месяцах
          +{money(UZGETS[0] - toUzs(FRAGMENT[0]), 'ru')}, на 12 месяцах
          +{money(UZGETS[2] - toUzs(FRAGMENT[2]), 'ru')}. Оплата на Fragment — только криптовалютой.
        </li>
      </ul>
      <p>
        То есть общее утверждение «Uzgets дешевле официальной цены» было бы неверным. Точнее так:
        Uzgets на {FRAGMENT_RANGE} дороже самого дешёвого официального способа — за возможность
        платить локальной картой, — но дешевле таких же разовых пакетов App Store.
      </p>
      <InlineBotCTA lang="ru" text="Без международной карты и крипто — Premium на 3 месяца за 168 000 сум, оплата UzCard или Humo." />

      <h2 id="real-summa">Почему с карты списывается не та сумма, что в таблице?</h2>
      <p>
        Суммы в таблице посчитаны по официальному курсу Центробанка. На практике при оплате через
        официальный канал выходит обычно больше:
      </p>
      <ul>
        <li><strong>Курс банка.</strong> Платёж в долларах банк конвертирует по своему курсу продажи; он выше курса Центробанка, а по некоторым картам есть ещё и комиссия за конвертацию.</li>
        <li><strong>Комиссия магазина и налоги.</strong> По FAQ Telegram, в цену подписки могут входить сборы магазина или третьих сторон, местные налоги и другие платежи вне контроля Telegram.</li>
        <li><strong>Курс крипто.</strong> На Fragment цена в долларах оплачивается в TON или USDT; при покупке и переводе крипто добавляются спред биржи и сетевая комиссия.</li>
      </ul>
      <p>
        Цена Uzgets зафиксирована в сумах: сумма в боте — это сумма, которая спишется с карты.
      </p>

      <h2 id="kimga">Какой способ кому подходит?</h2>
      <ul>
        <li><strong>Есть международная карта и iPhone, автопродление не мешает</strong> — годовая подписка App Store ($29.99) — дешёвый официальный способ на долгий срок. Как отключить продление:{' '}
          <Link href="/ru/blog/telegram-premium-obunasini-bekor-qilish" className="text-[var(--primary)] hover:underline">отмена подписки Premium</Link>.
        </li>
        <li><strong>Есть кошелёк TON или USDT</strong> — Fragment даёт самую низкую цену в долларах на всех трёх сроках.</li>
        <li><strong>Есть только UzCard, Humo, Click или Payme</strong> — официальные каналы эти карты не принимают; через Uzgets вы платите в сумах и указываете только @username. Разница цен между локальными ботами:{' '}
          <Link href="/ru/blog/eng-arzon-telegram-premium-ozbekistonda" className="text-[var(--primary)] hover:underline">самый дешёвый Premium в Узбекистане</Link>.
        </li>
        <li><strong>Хотите подарить другому человеку</strong> — по сравнению с разовыми пакетами App Store Uzgets дешевле на {PACK_RANGE}.</li>
      </ul>
      <p>
        Пошаговые инструкции по всем способам — в отдельном руководстве:{' '}
        <Link href="/ru/blog/telegram-premium-toliq-qollanma-barcha-usullar" className="text-[var(--primary)] hover:underline">
          купить Telegram Premium — все способы
        </Link>. Тарифы Uzgets — на странице <Link href="/ru/premium" className="text-[var(--primary)] hover:underline">/premium</Link>.
      </p>

      <h2 id="boshqa-kanallar">Почему в таблице нет Google Play и @PremiumBot?</h2>
      <p>
        Эти два канала не публикуют цену на открытой странице — сумма видна только в окне оплаты и
        зависит от региона аккаунта. Поэтому непроверяемые цифры в таблицу не включены. FAQ Telegram
        подтверждает лишь одно: подписки через @PremiumBot по умолчанию идут со скидкой, так как не
        облагаются комиссией Apple и Google. Точную цену вы увидите в Telegram в разделе
        Настройки → Telegram Premium или в самом боте.
      </p>

      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Официальные цены взяты со страниц App Store и Fragment, цены Uzgets — из действующих тарифов; проценты посчитаны по курсу Центробанка и не учитывают банковскую конвертацию.</p>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'comparison',
  locales: {
    uz: {
      title: "Telegram Premium rasmiy narxi so'mda: App Store, Fragment va Uzgets solishtirmasi (2026)",
      description:
        "Telegram Premium'ning App Store va Fragment'dagi rasmiy narxi so'mda qancha, Uzgets narxi undan necha foiz arzon yoki qimmat va qaysi yo'l kimga mos — 2026-yil 7-oktabr holatiga raqamli solishtirma.",
      metaTitle: "Telegram Premium rasmiy narxi so'mda — 2026 solishtirma",
      metaDescription:
        "Telegram Premium rasmiy narxi so'mda: App Store $3.99/oy, yillik $29.99, Fragment 3 oy $11.99. Uzgets bilan foizli farq jadvali. UzCard/Humo bilan @uzgetsbot orqali oling.",
      ogDescription:
        "App Store, Fragment va Uzgets'da Telegram Premium narxi so'mda — qayerda arzon, qayerda qimmat, aniq foizlar bilan.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Premium rasmiy narxi so'mda qancha?", answer: `2026-yil 7-oktabr holatiga App Store'ning O'zbekiston vitrinasida oylik obuna $3.99 (≈ ${money(toUzs(3.99), 'uz')}), yillik obuna $29.99 (≈ ${money(toUzs(29.99), 'uz')}). Hisob Markaziy bank kursi bo'yicha (1 USD = ${USD_RATE_LABEL} so'm); bank konvertatsiyasi bilan real summa yuqoriroq bo'ladi.` },
        { question: "Uzgets rasmiy narxdan arzonmi?", answer: `Qisman. Uzgets App Store'ning bir martalik 3/6/12 oylik paketlaridan ${PACK_RANGE} arzon, lekin App Store yillik obunasidan ${ANNUAL_PCT}% va Fragment'dan ${FRAGMENT_RANGE} qimmat. Rasmiy yo'llar xalqaro karta yoki kripto talab qiladi, Uzgets esa UzCard, Humo, Click va Payme'ni qabul qiladi.` },
        { question: "Eng arzon rasmiy yo'l qaysi?", answer: `Dollar narxi bo'yicha — Fragment: 3 oy $11.99, 6 oy $15.99, 12 oy $28.99, to'lov TON yoki USDT bilan. Karta bilan to'lanadigan variantlar ichida App Store yillik obunasi ($29.99) eng arzon, lekin u avtomatik uzayadi.` },
        { question: "App Store'da UzCard yoki Humo bilan Premium olsa bo'ladimi?", answer: "Yo'q. App Store to'lovi xalqaro to'lov tizimidagi kartani talab qiladi, faqat ichki UzCard yoki Humo kartasi bilan to'lab bo'lmaydi. Mahalliy karta bilan Premium odatda mahalliy xizmatlar, masalan @uzgetsbot orqali olinadi." },
        { question: "Nega bir xil Premium turli kanalda turlicha turadi?", answer: "Telegram FAQ'iga ko'ra, narxga do'kon yoki uchinchi tomon to'lovlari va mahalliy soliqlar kirishi mumkin, @PremiumBot orqali obunalar esa Apple va Google komissiyasi yo'qligi uchun chegirmali. Shuning uchun App Store, Fragment va vositachilar narxi bir xil emas." },
        { question: "Uzgets'da Premium avtomatik uzayadimi?", answer: "Yo'q. Uzgets'dagi 3, 6 va 12 oylik Premium — bir martalik to'lov. Muddat tugaganda kartadan pul yechilmaydi; davom ettirish uchun botda yangi buyurtma beriladi." },
      ],
      finalCtaHeading: "Premium'ni so'mda, mahalliy karta bilan oling",
      finalCtaBody: `${siteConfig.bot}da 3, 6 yoki 12 oylik paketni tanlang, @username kiriting va UzCard, Humo, Click yoki Payme orqali to'lang. Xalqaro karta va kripto kerak emas, summa so'mda qat'iy.`,
    },
    ru: {
      title: 'Официальная цена Telegram Premium в сумах: сравнение App Store, Fragment и Uzgets (2026)',
      description:
        'Сколько стоит Telegram Premium в App Store и на Fragment в пересчёте на сумы, на сколько процентов цена Uzgets ниже или выше и какой способ кому подходит — сравнение в цифрах на 7 октября 2026 года.',
      metaTitle: 'Официальная цена Telegram Premium в сумах — 2026',
      metaDescription:
        'Официальная цена Telegram Premium в сумах: App Store $3.99/мес., год $29.99, Fragment 3 мес. $11.99. Таблица разницы с Uzgets в процентах. Оплата UzCard/Humo через @uzgetsbot.',
      ogDescription:
        'Цена Telegram Premium в App Store, на Fragment и в Uzgets в сумах — где дешевле, где дороже, с точными процентами.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Сколько стоит Telegram Premium официально в сумах?', answer: `На 7 октября 2026 года в узбекистанской витрине App Store месячная подписка стоит $3.99 (≈ ${money(toUzs(3.99), 'ru')}), годовая — $29.99 (≈ ${money(toUzs(29.99), 'ru')}). Пересчёт по курсу Центробанка (1 USD = ${USD_RATE_LABEL} сум); с банковской конвертацией реальная сумма выше.` },
        { question: 'Uzgets дешевле официальной цены?', answer: `Частично. Uzgets на ${PACK_RANGE} дешевле разовых пакетов App Store на 3/6/12 месяцев, но на ${ANNUAL_PCT}% дороже годовой подписки App Store и на ${FRAGMENT_RANGE} дороже Fragment. Официальные способы требуют международную карту или крипто, а Uzgets принимает UzCard, Humo, Click и Payme.` },
        { question: 'Какой официальный способ самый дешёвый?', answer: 'По цене в долларах — Fragment: 3 месяца $11.99, 6 месяцев $15.99, 12 месяцев $28.99, оплата в TON или USDT. Среди вариантов с оплатой картой дешевле всего годовая подписка App Store ($29.99), но она продлевается автоматически.' },
        { question: 'Можно ли купить Premium в App Store картой UzCard или Humo?', answer: 'Нет. Оплата в App Store требует карту международной платёжной системы, только внутренней картой UzCard или Humo заплатить не получится. Локальной картой Premium обычно покупают через местные сервисы, например @uzgetsbot.' },
        { question: 'Почему один и тот же Premium стоит по-разному в разных каналах?', answer: 'По FAQ Telegram, в цену могут входить сборы магазина или третьих сторон и местные налоги, а подписки через @PremiumBot идут со скидкой, так как не облагаются комиссией Apple и Google. Поэтому цены App Store, Fragment и посредников не совпадают.' },
        { question: 'Premium в Uzgets продлевается автоматически?', answer: 'Нет. Premium на 3, 6 и 12 месяцев в Uzgets — разовый платёж. По окончании срока деньги с карты не списываются; для продолжения оформляется новый заказ в боте.' },
      ],
      finalCtaHeading: 'Купите Premium в сумах, локальной картой',
      finalCtaBody: `Выберите в ${siteConfig.bot} пакет на 3, 6 или 12 месяцев, введите @username и оплатите через UzCard, Humo, Click или Payme. Международная карта и крипто не нужны, сумма зафиксирована в сумах.`,
    },
  },
}
