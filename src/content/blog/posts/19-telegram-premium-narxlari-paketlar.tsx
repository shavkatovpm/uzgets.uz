import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-narxlari-paketlar'
const TODAY = '2026-05-21'

const P3 = PREMIUM_PERIODS.find((p) => p.months === 3)!
const P6 = PREMIUM_PERIODS.find((p) => p.months === 6)!
const P12 = PREMIUM_PERIODS.find((p) => p.months === 12)!

const SAVE_6_VS_3 = P3.priceUzs * 2 - P6.priceUzs
const SAVE_12_VS_3 = P3.priceUzs * 4 - P12.priceUzs
const SAVE_12_VS_6 = P6.priceUzs * 2 - P12.priceUzs
const PCT_6_VS_3 = Math.round((1 - P6.perMonthHint / P3.perMonthHint) * 100)
const PCT_12_VS_3 = Math.round((1 - P12.perMonthHint / P3.perMonthHint) * 100)
const PCT_12_VS_6 = Math.round((1 - P12.perMonthHint / P6.perMonthHint) * 100)

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium narxlari O&apos;zbekistonda{' '}
      <a
        href={siteConfig.botUrl}
        target="_blank"
        rel="noopener"
        className="font-semibold text-[var(--primary)]"
      >
        {siteConfig.bot}
      </a>{' '}
      orqali: <strong>3 oy — {formatUzs(P3.priceUzs)}</strong> (oyiga{' '}
      {formatUzs(P3.perMonthHint)}), <strong>6 oy — {formatUzs(P6.priceUzs)}</strong> (oyiga{' '}
      {formatUzs(P6.perMonthHint)}), <strong>12 oy — {formatUzs(P12.priceUzs)}</strong> (oyiga{' '}
      {formatUzs(P12.perMonthHint)}). Eng tejamli — 12 oylik (oyiga{' '}
      {formatUzs(P12.perMonthHint)}), 3 oylikka qaraganda <strong>{PCT_12_VS_3}%</strong> arzon.
      To&apos;lov UzCard / Humo / Click / Payme orqali, Premium 2–5 daqiqada akkauntda
      faollashadi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Цены Telegram Premium в Узбекистане через{' '}
      <a
        href={siteConfig.botUrl}
        target="_blank"
        rel="noopener"
        className="font-semibold text-[var(--primary)]"
      >
        {siteConfig.bot}
      </a>
      : <strong>3 месяца — {formatUzs(P3.priceUzs)}</strong> (в месяц{' '}
      {formatUzs(P3.perMonthHint)}), <strong>6 месяцев — {formatUzs(P6.priceUzs)}</strong> (в
      месяц {formatUzs(P6.perMonthHint)}),{' '}
      <strong>12 месяцев — {formatUzs(P12.priceUzs)}</strong> (в месяц{' '}
      {formatUzs(P12.perMonthHint)}). Самый выгодный — 12 месяцев (в месяц{' '}
      {formatUzs(P12.perMonthHint)}), на <strong>{PCT_12_VS_3}%</strong> дешевле 3-месячного.
      Оплата UzCard / Humo / Click / Payme, Premium активируется на аккаунте за 2–5 минут.
    </p>
  )
}

function FullPriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  const headers =
    lang === 'uz'
      ? ['Muddat', 'Narx', 'Oyiga', '3 oylikdan tejov', 'Sahifa']
      : ['Срок', 'Цена', 'В месяц', 'Экономия vs 3 мес.', 'Страница']
  const rows = [
    {
      label: lang === 'uz' ? '3 oy' : '3 месяца',
      price: P3.priceUzs,
      perMonth: P3.perMonthHint,
      save: 0,
      slug: P3.slug,
      badge: null,
    },
    {
      label: lang === 'uz' ? '6 oy' : '6 месяцев',
      price: P6.priceUzs,
      perMonth: P6.perMonthHint,
      save: SAVE_6_VS_3,
      slug: P6.slug,
      badge: lang === 'uz' ? 'Mashhur' : 'Популярный',
    },
    {
      label: lang === 'uz' ? '12 oy' : '12 месяцев',
      price: P12.priceUzs,
      perMonth: P12.perMonthHint,
      save: SAVE_12_VS_3,
      slug: P12.slug,
      badge: lang === 'uz' ? 'Eng tejamli' : 'Самый выгодный',
    },
  ]
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.slug} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">
                {r.label}
                {r.badge && (
                  <span className="ml-2 inline-block rounded-full bg-[var(--primary)]/10 px-2 py-0.5 text-xs font-semibold text-[var(--primary)]">
                    {r.badge}
                  </span>
                )}
              </td>
              <td className="px-4 py-2 font-semibold">{formatUzs(r.price)}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{formatUzs(r.perMonth)}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">
                {r.save > 0 ? `−${formatUzs(r.save)}` : '—'}
              </td>
              <td className="px-4 py-2">
                <Link
                  href={localePath(lang, `/premium/${r.slug}`)}
                  className="text-[var(--primary)] hover:underline"
                >
                  {lang === 'uz' ? 'Batafsil →' : 'Подробнее →'}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function GiftTable({ lang }: { lang: 'uz' | 'ru' }) {
  const headers =
    lang === 'uz' ? ['Hadya muddati', 'Narx', 'Oyiga'] : ['Срок подарка', 'Цена', 'В месяц']
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-[var(--border)]">
            <td className="px-4 py-2 font-medium">{lang === 'uz' ? '3 oy hadya' : 'Подарок 3 мес.'}</td>
            <td className="px-4 py-2 font-semibold">{formatUzs(P3.priceUzs)}</td>
            <td className="px-4 py-2 text-[var(--text-muted)]">{formatUzs(P3.perMonthHint)}</td>
          </tr>
          <tr className="border-t border-[var(--border)]">
            <td className="px-4 py-2 font-medium">{lang === 'uz' ? '6 oy hadya' : 'Подарок 6 мес.'}</td>
            <td className="px-4 py-2 font-semibold">{formatUzs(P6.priceUzs)}</td>
            <td className="px-4 py-2 text-[var(--text-muted)]">{formatUzs(P6.perMonthHint)}</td>
          </tr>
          <tr className="border-t border-[var(--border)]">
            <td className="px-4 py-2 font-medium">{lang === 'uz' ? '12 oy hadya' : 'Подарок 12 мес.'}</td>
            <td className="px-4 py-2 font-semibold">{formatUzs(P12.priceUzs)}</td>
            <td className="px-4 py-2 text-[var(--text-muted)]">{formatUzs(P12.perMonthHint)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{lang === 'uz' ? 'Manbalar' : 'Источники'}</div>
      <ul className="space-y-1 text-[var(--text-muted)]">
        <li>
          <a
            href="https://telegram.org/faq_premium"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            telegram.org/faq_premium
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? "Telegram Premium rasmiy FAQ — paketlar, faollashtirish, hadya qoidalari"
            : 'Официальный FAQ Telegram Premium — пакеты, активация, правила подарка'}
        </li>
        <li>
          <a
            href="https://core.telegram.org/api/premium"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            core.telegram.org/api/premium
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? "Premium API hujjati va obuna muddatlari"
            : 'Документация Premium API и сроков подписки'}
        </li>
        <li>
          <a
            href="https://humocard.uz/uz/press_center/news/telegram-botda-premium-funksiyalar/"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            humocard.uz — Telegram-botda Premium-funksiyalar
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? "Humo rasmiy bayonoti: O'zbek karta bilan Telegram Premium to'lash"
            : 'Официальное заявление Humo: оплата Telegram Premium с узб. картой'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? `Narxlar 2026-yil may holatiga ko'ra (uzgets so'mdagi narxi). Yangilanish bo'lsa shu sahifa va botda aks etadi.`
          : 'Цены на май 2026 года (цена uzgets в сумах). При обновлении она отражается на этой странице и в боте.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="toliq-jadval">Telegram Premium narxlari — to&apos;liq jadval</h2>
      <p>
        {siteConfig.bot} botida Telegram Premium uchta paketda sotiladi:{' '}
        <strong>3, 6 va 12 oylik</strong>. Jami narx muddatga qarab oshadi, lekin{' '}
        <strong>oyiga to&apos;g&apos;ri keladigan narx</strong> uzunroq muddatda arzonroq —
        ya&apos;ni 12 oylik eng tejamli, 3 oylik esa eng past kirish nuqtasi.
      </p>
      <FullPriceTable lang="uz" />
      <p>
        Har paket uchun alohida sahifa{' '}
        <Link href="/premium" className="font-semibold text-[var(--primary)] hover:underline">
          /premium
        </Link>{' '}
        bo&apos;limida — paketning batafsil tavsifi va buyurtma havolasi bilan.
      </p>

      <InlineBotCTA lang="uz" text="Premium muddatini tanlang va botda buyurtma bering." />

      <h2 id="3-oylik">3 oylik Premium narxi qancha?</h2>
      <p>
        <strong>{formatUzs(P3.priceUzs)}</strong>. Oyiga taxminan{' '}
        <strong>{formatUzs(P3.perMonthHint)}</strong>. Bu — Premium uchun eng past kirish
        nuqtasi: birinchi marta sinab ko&apos;ruvchilar, sovg&apos;a yuboruvchilar va
        qisqa muddatli foydalanish kerak bo&apos;lganlar uchun mos.
      </p>
      <ul>
        <li>{formatUzs(P3.priceUzs)} = 3 oylik Premium (90 kun)</li>
        <li>Oyiga: {formatUzs(P3.perMonthHint)}</li>
        <li>To&apos;lov: UzCard / Humo / Click / Payme</li>
        <li>
          Batafsil:{' '}
          <Link
            href={`/premium/${P3.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            /premium/{P3.slug}
          </Link>
        </li>
      </ul>

      <h2 id="6-oylik">6 oylik Premium narxi qancha?</h2>
      <p>
        <strong>{formatUzs(P6.priceUzs)}</strong>. Oyiga taxminan{' '}
        <strong>{formatUzs(P6.perMonthHint)}</strong> — 3 oylikga nisbatan oyiga{' '}
        <strong>{PCT_6_VS_3}% arzon</strong>. Eng mashhur paket: 3 oylik qisqa, 12 oylik
        uzoq tuyulsa — o&apos;rta yo&apos;l.
      </p>
      <ul>
        <li>{formatUzs(P6.priceUzs)} = 6 oylik Premium (180 kun)</li>
        <li>Oyiga: {formatUzs(P6.perMonthHint)}</li>
        <li>
          3 oylik 2 marta sotib olganga nisbatan tejov:{' '}
          <strong>−{formatUzs(SAVE_6_VS_3)}</strong>
        </li>
        <li>
          Batafsil:{' '}
          <Link
            href={`/premium/${P6.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            /premium/{P6.slug}
          </Link>
        </li>
      </ul>

      <InlineBotCTA
        lang="uz"
        text="6 oylik — eng mashhur tanlov. Botda paketni tanlang."
      />

      <h2 id="12-oylik">12 oylik (yillik) Premium narxi qancha?</h2>
      <p>
        <strong>{formatUzs(P12.priceUzs)}</strong>. Oyiga taxminan{' '}
        <strong>{formatUzs(P12.perMonthHint)}</strong> — eng past oylik narx.{' '}
        3 oylikka qaraganda oyiga <strong>{PCT_12_VS_3}% arzon</strong>, 6 oylikka qaraganda{' '}
        <strong>{PCT_12_VS_6}% arzon</strong>. Telegram&apos;ni har kuni faol ishlatuvchilar
        uchun moliyaviy jihatdan eng to&apos;g&apos;ri tanlov.
      </p>
      <ul>
        <li>{formatUzs(P12.priceUzs)} = 12 oylik Premium (365 kun)</li>
        <li>Oyiga: {formatUzs(P12.perMonthHint)}</li>
        <li>
          3 oylikni 4 marta sotib olganga nisbatan tejov:{' '}
          <strong>−{formatUzs(SAVE_12_VS_3)}</strong>
        </li>
        <li>
          6 oylikni 2 marta sotib olganga nisbatan tejov:{' '}
          <strong>−{formatUzs(SAVE_12_VS_6)}</strong>
        </li>
        <li>
          Batafsil:{' '}
          <Link
            href={`/premium/${P12.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            /premium/{P12.slug}
          </Link>
        </li>
      </ul>

      <h2 id="qaysi-tanlash">Qaysi paketni tanlash kerak?</h2>
      <p>Tanlov asosan ikkita savolga bog&apos;liq: muddat va byudjet.</p>
      <ul>
        <li>
          <strong>Birinchi marta sinab ko&apos;ryapsizmi?</strong> →{' '}
          <Link
            href={`/premium/${P3.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            3 oylik
          </Link>
          . Past xavf, qisqa muddat.
        </li>
        <li>
          <strong>Premium kerakligi aniq, lekin yillik uzun tuyuladimi?</strong> →{' '}
          <Link
            href={`/premium/${P6.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            6 oylik
          </Link>
          . Tejash va moslashuvchanlik balansi.
        </li>
        <li>
          <strong>Telegram&apos;ni har kuni faol ishlatasizmi?</strong> →{' '}
          <Link
            href={`/premium/${P12.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            12 oylik
          </Link>
          . Oyiga {formatUzs(P12.perMonthHint)} — eng past narx.
        </li>
        <li>
          <strong>Sovg&apos;a yubormoqchimisiz?</strong> Har uchta paket hadya sifatida
          ham yuboriladi —{' '}
          <Link
            href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi"
            className="text-[var(--primary)] hover:underline"
          >
            hadya yo&apos;riqnomasi
          </Link>
          .
        </li>
      </ul>

      <InlineBotCTA
        lang="uz"
        text="Hali tanlay olmayapsizmi? Botda har uchta paket alohida ko'rinadi."
      />

      <h2 id="hadya">Premium hadya sifatida narxi qancha?</h2>
      <p>
        Hadya narxi o&apos;zingiz uchun sotib olish bilan <strong>bir xil</strong>. Bot
        boshlanganda &quot;Hadya&quot; rejimida qabul qiluvchining @username&apos;ini
        kiritasiz, qolgani — to&apos;lov tasdiqlanishi bilan Premium o&apos;sha akkauntga
        biriktiriladi.
      </p>
      <GiftTable lang="uz" />
      <p>
        Hadya qabul qiluvchi Telegram&apos;dan rasmiy bildirishnoma oladi va Premium
        odatdagidek faollashadi — siz tomondan keyingi to&apos;lov yoki yangilash kerak
        emas. Batafsil:{' '}
        <Link
          href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi"
          className="text-[var(--primary)] hover:underline"
        >
          Telegram Premium hadya qo&apos;llanmasi
        </Link>
        .
      </p>

      <h2 id="narx-qanday">Narx qanday shakllanadi?</h2>
      <p>
        Uzgets so&apos;mdagi narxi <strong>statik</strong> — kunlik tebranish yo&apos;q.
        Bu O&apos;zbek foydalanuvchisi uchun aniq tushuniladigan, prognoz qilinadigan summa
        beradi. Qiymat quyidagilarga asoslanadi:
      </p>
      <ul>
        <li>
          Telegram&apos;ning xalqaro rasmiy narxi (TON ekvivalentida) va joriy USD/UZS kursi
        </li>
        <li>O&apos;zbek bank tizimida karta to&apos;lovlari bo&apos;yicha komissiya</li>
        <li>Yetkazib berish va qo&apos;llab-quvvatlash xarajatlari</li>
      </ul>
      <p>
        Narx yangilanishi sezilarli o&apos;zgarish bo&apos;lganda (TON/USD kursi yoki bank
        komissiyalari) qo&apos;lda amalga oshiriladi. Botda ko&apos;rsatilgan summa —{' '}
        <strong>yakuniy summa</strong>, qo&apos;shimcha to&apos;lov yo&apos;q.
      </p>

      <h2 id="boshqa-yollar">Premium&apos;ni boshqa yo&apos;llar bilan ham sotib olish mumkinmi?</h2>
      <p>Texnik jihatdan ha — uchta asosiy yo&apos;l bor:</p>
      <ul>
        <li>
          <strong>Telegram in-app obuna formasi</strong> — to&apos;g&apos;ridan-to&apos;g&apos;ri
          Telegram ichida. Lekin O&apos;zbek UzCard/Humo kartalari amalda qabul
          qilinmaydi —{' '}
          <Link
            href="/blog/telegram-premium-tolay-olmayapman-yechim"
            className="text-[var(--primary)] hover:underline"
          >
            nima uchun
          </Link>
          .
        </li>
        <li>
          <strong>App Store / Google Play</strong> — region cheklovi va xalqaro karta talabi
          bilan O&apos;zbekistondan amalda ishlamaydi.
        </li>
        <li>
          <strong>Mahalliy vositachi bot</strong> ({siteConfig.bot}) — UzCard, Humo, Click,
          Payme bilan to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;lov. Premium 2–5
          daqiqada Telegram tomondan biriktiriladi.
        </li>
      </ul>
      <p>
        Mahalliy karta bilan to&apos;lash mumkin bo&apos;lganlar orasida{' '}
        <strong>uzgets — eng arzon variant</strong>:{' '}
        <Link
          href="/blog/eng-arzon-telegram-premium-ozbekistonda"
          className="text-[var(--primary)] hover:underline"
        >
          narx taqqoslama
        </Link>
        .
      </p>

      <h2 id="qanday-tolash">Qanday to&apos;lash mumkin?</h2>
      <p>{siteConfig.bot} barcha mashhur O&apos;zbek to&apos;lov usullarini qabul qiladi:</p>
      <ul>
        <li>
          <strong>UzCard / Humo</strong> — bot ko&apos;rsatgan karta raqamiga aniq summani
          o&apos;tkazasiz (istalgan bank ilovasidan).{' '}
          <Link
            href="/blog/telegram-premium-uzcard-humo-bilan-sotib-olish"
            className="text-[var(--primary)] hover:underline"
          >
            UzCard/Humo bilan sotib olish qo&apos;llanmasi
          </Link>
          .
        </li>
        <li>
          <strong>Click</strong> — ilova ichida bevosita to&apos;lov, summa avtomatik.
        </li>
        <li>
          <strong>Payme</strong> — Payme ilovasi orqali, bot havolani avtomatik beradi.
        </li>
      </ul>
      <p>
        To&apos;lov usuli <strong>narxni o&apos;zgartirmaydi</strong> — UzCard, Humo, Click
        va Payme bir xil narxda ishlaydi.
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Narx aniq — paketni tanlang va Premium'ni hozir oching." />

      <h2 id="muhim">Sotib olishdan oldin tekshiring</h2>
      <ul>
        <li>
          <strong>@username aniq.</strong> Premium qaysi akkauntga kelishi kerakligini
          username bilan aniq belgilang (telefon raqami emas). Sozlamalar &gt; Username
          bo&apos;limidan tasdiqlang.
        </li>
        <li>
          <strong>Faqat rasmiy bot.</strong> t.me/uzgetsbot — o&apos;xshash nomli klonlar
          (uzgetbot, uzg3tsbot) firibgar bo&apos;lishi mumkin. Saytdagi tugma orqali
          o&apos;ting.
        </li>
        <li>
          <strong>Botda ko&apos;rsatilgan summa.</strong> UzCard/Humo bilan to&apos;laganda
          bot karta raqamiga <strong>aniq summa</strong>ni ko&apos;rsatadi — boshqa summa
          o&apos;tkazsangiz mahsulot avtomatik yetkazilmaydi. Click bilan bunday muammo
          yo&apos;q (summa avtomatik to&apos;ldiriladi).
        </li>
        <li>
          <strong>Avtomatik yangilanish yo&apos;q.</strong> Hech bir paket avtomatik
          uzaytirilmaydi — muddat tugagach Premium o&apos;chadi va davom ettirish uchun
          yana botdan buyurtma berasiz. Bu sizni rejaning tashqarisidagi to&apos;lovlardan
          himoya qiladi.
        </li>
      </ul>

      <p>
        Bog&apos;liq qo&apos;llanmalar:{' '}
        <Link
          href="/blog/telegram-premium-toliq-qollanma-barcha-usullar"
          className="text-[var(--primary)] hover:underline"
        >
          Premium sotib olishning barcha usullari
        </Link>
        ,{' '}
        <Link
          href="/blog/telegram-premium-qanday-faollashtiriladi"
          className="text-[var(--primary)] hover:underline"
        >
          qanday faollashtiriladi
        </Link>
        ,{' '}
        <Link
          href="/blog/telegram-premium-imkoniyatlari-12-farq"
          className="text-[var(--primary)] hover:underline"
        >
          Premium imkoniyatlari (12+ farq)
        </Link>
        .
      </p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="toliq-jadval">Цены Telegram Premium — полная таблица</h2>
      <p>
        В боте {siteConfig.bot} Telegram Premium продаётся в трёх пакетах:{' '}
        <strong>3, 6 и 12 месяцев</strong>. Общая стоимость растёт с увеличением срока, но{' '}
        <strong>цена за месяц</strong> ниже в длинных пакетах — то есть 12 месяцев самый
        выгодный, а 3 — самая низкая точка входа.
      </p>
      <FullPriceTable lang="ru" />
      <p>
        Для каждого пакета — отдельная страница в разделе{' '}
        <Link href="/ru/premium" className="font-semibold text-[var(--primary)] hover:underline">
          /ru/premium
        </Link>{' '}
        с подробным описанием и ссылкой на заказ.
      </p>

      <InlineBotCTA lang="ru" text="Выберите срок Premium и оформите заказ в боте." />

      <h2 id="3-oylik">Сколько стоит Premium на 3 месяца?</h2>
      <p>
        <strong>{formatUzs(P3.priceUzs)}</strong>. В месяц примерно{' '}
        <strong>{formatUzs(P3.perMonthHint)}</strong>. Это — самая низкая точка входа в
        Premium: для тех, кто пробует впервые, отправляет подарок или нуждается в
        Premium на короткий период.
      </p>
      <ul>
        <li>{formatUzs(P3.priceUzs)} = Premium на 3 месяца (90 дней)</li>
        <li>В месяц: {formatUzs(P3.perMonthHint)}</li>
        <li>Оплата: UzCard / Humo / Click / Payme</li>
        <li>
          Подробнее:{' '}
          <Link
            href={`/ru/premium/${P3.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            /ru/premium/{P3.slug}
          </Link>
        </li>
      </ul>

      <h2 id="6-oylik">Сколько стоит Premium на 6 месяцев?</h2>
      <p>
        <strong>{formatUzs(P6.priceUzs)}</strong>. В месяц примерно{' '}
        <strong>{formatUzs(P6.perMonthHint)}</strong> — на{' '}
        <strong>{PCT_6_VS_3}% дешевле</strong> 3-месячного. Самый популярный пакет: если
        3 месяца кажется мало, а 12 — много, это золотая середина.
      </p>
      <ul>
        <li>{formatUzs(P6.priceUzs)} = Premium на 6 месяцев (180 дней)</li>
        <li>В месяц: {formatUzs(P6.perMonthHint)}</li>
        <li>
          Экономия по сравнению с 2 × 3-месячными: <strong>−{formatUzs(SAVE_6_VS_3)}</strong>
        </li>
        <li>
          Подробнее:{' '}
          <Link
            href={`/ru/premium/${P6.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            /ru/premium/{P6.slug}
          </Link>
        </li>
      </ul>

      <InlineBotCTA
        lang="ru"
        text="6 месяцев — самый популярный выбор. Откройте бот и оформите заказ."
      />

      <h2 id="12-oylik">Сколько стоит Premium на 12 месяцев (год)?</h2>
      <p>
        <strong>{formatUzs(P12.priceUzs)}</strong>. В месяц примерно{' '}
        <strong>{formatUzs(P12.perMonthHint)}</strong> — самая низкая цена в месяц.{' '}
        На <strong>{PCT_12_VS_3}% дешевле</strong> 3-месячного и на{' '}
        <strong>{PCT_12_VS_6}% дешевле</strong> 6-месячного. Финансово самый правильный
        выбор для тех, кто ежедневно пользуется Telegram.
      </p>
      <ul>
        <li>{formatUzs(P12.priceUzs)} = Premium на 12 месяцев (365 дней)</li>
        <li>В месяц: {formatUzs(P12.perMonthHint)}</li>
        <li>
          Экономия по сравнению с 4 × 3-месячными:{' '}
          <strong>−{formatUzs(SAVE_12_VS_3)}</strong>
        </li>
        <li>
          Экономия по сравнению с 2 × 6-месячными:{' '}
          <strong>−{formatUzs(SAVE_12_VS_6)}</strong>
        </li>
        <li>
          Подробнее:{' '}
          <Link
            href={`/ru/premium/${P12.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            /ru/premium/{P12.slug}
          </Link>
        </li>
      </ul>

      <h2 id="qaysi-tanlash">Какой пакет выбрать?</h2>
      <p>Выбор зависит от двух вопросов: срок и бюджет.</p>
      <ul>
        <li>
          <strong>Пробуете впервые?</strong> →{' '}
          <Link
            href={`/ru/premium/${P3.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            3 месяца
          </Link>
          . Низкий риск, короткий срок.
        </li>
        <li>
          <strong>Premium нужен точно, но год кажется долгим?</strong> →{' '}
          <Link
            href={`/ru/premium/${P6.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            6 месяцев
          </Link>
          . Баланс экономии и гибкости.
        </li>
        <li>
          <strong>Telegram ежедневно?</strong> →{' '}
          <Link
            href={`/ru/premium/${P12.slug}`}
            className="text-[var(--primary)] hover:underline"
          >
            12 месяцев
          </Link>
          . В месяц {formatUzs(P12.perMonthHint)} — самая низкая цена.
        </li>
        <li>
          <strong>Хотите подарить?</strong> Все три пакета можно отправить как подарок —{' '}
          <Link
            href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi"
            className="text-[var(--primary)] hover:underline"
          >
            гид по подарку Premium
          </Link>
          .
        </li>
      </ul>

      <InlineBotCTA
        lang="ru"
        text="Не определились? В боте все три пакета представлены отдельно."
      />

      <h2 id="hadya">Сколько стоит Premium в подарок?</h2>
      <p>
        Цена подарка <strong>такая же</strong>, как и для покупки себе. В боте
        выбираете режим &laquo;Подарок&raquo;, указываете @username получателя — после
        подтверждения оплаты Premium активируется на его аккаунте.
      </p>
      <GiftTable lang="ru" />
      <p>
        Получатель видит официальное уведомление от Telegram, и Premium активируется
        в обычном режиме — никаких дополнительных действий или платежей от вас не
        требуется. Подробнее:{' '}
        <Link
          href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi"
          className="text-[var(--primary)] hover:underline"
        >
          Руководство по подарку Telegram Premium
        </Link>
        .
      </p>

      <h2 id="narx-qanday">Как формируется цена?</h2>
      <p>
        Цена uzgets в сумах <strong>фиксирована</strong> — ежедневных колебаний нет. Это
        даёт узбекскому пользователю чёткую, прогнозируемую сумму. Расчёт основан на:
      </p>
      <ul>
        <li>
          Международная официальная цена Telegram (в TON-эквиваленте) и текущий курс USD/UZS
        </li>
        <li>Комиссии узбекской банковской системы за карточные платежи</li>
        <li>Расходы на доставку и поддержку</li>
      </ul>
      <p>
        Цена обновляется вручную при значительных изменениях (курс TON/USD или банковские
        комиссии). Сумма в боте — <strong>итоговая</strong>, без дополнительных комиссий.
      </p>

      <h2 id="boshqa-yollar">Можно ли купить Premium другим способом?</h2>
      <p>Технически да — три основных пути:</p>
      <ul>
        <li>
          <strong>Форма подписки внутри Telegram</strong> — прямо в приложении. Но
          узбекские UzCard/Humo фактически не принимаются —{' '}
          <Link
            href="/ru/blog/telegram-premium-tolay-olmayapman-yechim"
            className="text-[var(--primary)] hover:underline"
          >
            почему
          </Link>
          .
        </li>
        <li>
          <strong>App Store / Google Play</strong> — региональные ограничения и
          требование международной карты делают этот путь фактически недоступным из Узбекистана.
        </li>
        <li>
          <strong>Местный посредник-бот</strong> ({siteConfig.bot}) — оплата напрямую
          через UzCard, Humo, Click, Payme. Premium активируется со стороны Telegram
          за 2–5 минут.
        </li>
      </ul>
      <p>
        Среди вариантов оплаты локальной картой <strong>uzgets — самый дешёвый</strong>:{' '}
        <Link
          href="/ru/blog/eng-arzon-telegram-premium-ozbekistonda"
          className="text-[var(--primary)] hover:underline"
        >
          сравнение цен
        </Link>
        .
      </p>

      <h2 id="qanday-tolash">Как можно оплатить?</h2>
      <p>{siteConfig.bot} принимает все популярные узбекские способы оплаты:</p>
      <ul>
        <li>
          <strong>UzCard / Humo</strong> — перевод точной суммы на карту, указанную ботом
          (из любого банковского приложения).{' '}
          <Link
            href="/ru/blog/telegram-premium-uzcard-humo-bilan-sotib-olish"
            className="text-[var(--primary)] hover:underline"
          >
            Руководство по покупке через UzCard/Humo
          </Link>
          .
        </li>
        <li>
          <strong>Click</strong> — прямая оплата в приложении, сумма автоматически.
        </li>
        <li>
          <strong>Payme</strong> — через приложение Payme, бот выдаёт ссылку автоматически.
        </li>
      </ul>
      <p>
        Способ оплаты <strong>не меняет цену</strong> — UzCard, Humo, Click и Payme
        работают по одинаковой стоимости.
      </p>

      <Sources lang="ru" />

      <InlineBotCTA
        lang="ru"
        text="Цены чёткие — выберите пакет и активируйте Premium сейчас."
      />

      <h2 id="muhim">Что проверить перед покупкой</h2>
      <ul>
        <li>
          <strong>Точный @username.</strong> Чётко укажите, на какой аккаунт активировать
          Premium — через username (не номер телефона). Подтвердите в Настройки &gt; Username.
        </li>
        <li>
          <strong>Только официальный бот.</strong> t.me/uzgetsbot — похожие имена
          (uzgetbot, uzg3tsbot) могут быть мошенническими клонами. Переходите по кнопке с сайта.
        </li>
        <li>
          <strong>Сумма в боте.</strong> При оплате UzCard/Humo бот указывает{' '}
          <strong>точную сумму</strong> на карту — при переводе другой суммы продукт
          автоматически не доставится. С Click такой проблемы нет (сумма подставляется
          автоматически).
        </li>
        <li>
          <strong>Нет автоматического продления.</strong> Ни один пакет не продлевается
          автоматически — по окончании срока Premium отключается, и для продолжения нужно
          снова сделать заказ в боте. Это защищает вас от неожиданных списаний.
        </li>
      </ul>

      <p>
        Связанные руководства:{' '}
        <Link
          href="/ru/blog/telegram-premium-toliq-qollanma-barcha-usullar"
          className="text-[var(--primary)] hover:underline"
        >
          все способы покупки Premium
        </Link>
        ,{' '}
        <Link
          href="/ru/blog/telegram-premium-qanday-faollashtiriladi"
          className="text-[var(--primary)] hover:underline"
        >
          как активировать
        </Link>
        ,{' '}
        <Link
          href="/ru/blog/telegram-premium-imkoniyatlari-12-farq"
          className="text-[var(--primary)] hover:underline"
        >
          возможности Premium (12+ отличий)
        </Link>
        .
      </p>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'cta',
  locales: {
    uz: {
      title:
        "Telegram Premium narxlari 2026 — 3/6/12 oylik paketlar (to'liq jadval)",
      description:
        "Telegram Premium narxlari O'zbekistonda: 3 oy 168 000, 6 oy 228 000, 12 oy 408 000 so'm. Oyiga to'g'ri keladigan narx, tejov hisobi, hadya narxlari va sotib olish yo'llari.",
      metaTitle: "Telegram Premium narxlari — 3/6/12 oylik 2026 | Uzgets",
      metaDescription:
        "Telegram Premium 3/6/12 oylik narxlari O'zbekistonda — 168 000 / 228 000 / 408 000 so'm. Oyiga narx, tejov, hadya jadvali. UzCard/Humo/Click/Payme bilan to'lov.",
      ogDescription:
        "Telegram Premium narxlari 2026: 3 oy 168 000, 6 oy 228 000, 12 oy 408 000 so'm — to'liq jadval va paket tanlash bo'yicha qo'llanma.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Telegram Premium 3 oylik qancha turadi?',
          answer:
            "3 oylik Telegram Premium uzgets botida 168 000 so'm — oyiga taxminan 56 000 so'm. To'lov UzCard, Humo, Click yoki Payme orqali. Premium 2–5 daqiqada akkauntda faollashadi va aniq 90 kun amal qiladi.",
        },
        {
          question: 'Telegram Premium 6 oylik qancha turadi?',
          answer:
            "6 oylik Telegram Premium 228 000 so'm — oyiga taxminan 38 000 so'm. 3 oylikni 2 marta sotib olishga nisbatan 108 000 so'm tejaysiz. Eng mashhur tanlov: tejash va moslashuvchanlik balansi.",
        },
        {
          question: 'Telegram Premium 12 oylik (yillik) qancha turadi?',
          answer:
            "12 oylik Telegram Premium 408 000 so'm — oyiga taxminan 34 000 so'm. Eng past oylik narx: 3 oylikga qaraganda oyiga 40% arzon, 6 oylikga qaraganda 12% arzon. Telegram'ni har kuni faol ishlatuvchilar uchun eng tejamli paket.",
        },
        {
          question: 'Qaysi paket eng tejamli?',
          answer:
            "12 oylik (yillik) paket — oyiga 34 000 so'mga tushadi. 3 oylikni 4 marta sotib olganga nisbatan bir yilda 264 000 so'm tejaysiz. Lekin oldindan 408 000 so'm to'lash kerak — agar bir martaga qiyin bo'lsa, 6 oylik (228 000) keyingi mantiqiy tanlov.",
        },
        {
          question: 'Premium hadya yuborilsa narxi bir xilmi?',
          answer:
            "Ha, hadya narxi o'zingiz uchun sotib olish bilan to'liq bir xil: 3 oy 168 000, 6 oy 228 000, 12 oy 408 000 so'm. Bot ichida 'Hadya' rejimini tanlab, qabul qiluvchining @username'ini kiritasiz. Premium o'sha akkauntga to'g'ridan-to'g'ri biriktiriladi va Telegram rasmiy bildirishnoma yuboradi.",
        },
        {
          question: 'Narx oyma-oy o\'zgaradimi?',
          answer:
            "Yo'q. Uzgets so'mdagi narxi statik — kunlik tebranish yo'q. Yangilanish faqat sezilarli o'zgarishlar bo'lganda (TON/USD kursi yoki bank komissiyalari) qo'lda amalga oshiriladi. Sotib olgan paketingiz davomida hech qanday qo'shimcha to'lov olinmaydi.",
        },
        {
          question: 'Premium avtomatik yangilanadimi?',
          answer:
            "Yo'q. Hech bir paket avtomatik uzaytirilmaydi — muddat tugagach Premium o'chadi va akkaunt oddiy Telegram'ga qaytadi. Davom ettirish uchun yana botdan buyurtma berasiz. Bu sizni rejaning tashqarisidagi to'lovlardan himoya qiladi.",
        },
        {
          question: "Oyma-oy bo'lib to'lash mumkinmi?",
          answer:
            "Yo'q. Har paket bir martalik to'lov — to'liq summa to'lanadi va Premium tanlangan muddatga faollashadi. Agar 12 oylik (408 000) bir martaga qiyin bo'lsa, 6 oylik (228 000) yoki 3 oylik (168 000) paketni ko'rib chiqing. Yarim yil yoki choragiga keyin yana sotib olish mumkin.",
        },
        {
          question: 'Premium narxi qayerga to\'lanadi?',
          answer:
            "Bot UzCard yoki Humo bo'yicha karta raqamini va aniq summani ko'rsatadi — siz istalgan bank ilovasidan o'sha summani o'sha kartaga o'tkazasiz. Click ishlatilsa — ilova ichida bevosita to'lov, summa avtomatik to'ldiriladi. Payme — bot havola beradi. Hammasida yakuniy summa botda ko'rsatilgan bilan bir xil, qo'shimcha komissiya yo'q.",
        },
      ],
      finalCtaHeading: "Premium paketni tanlashga tayyormisiz?",
      finalCtaBody:
        "Botga kiring, 3/6/12 oylikdan birini tanlang va UzCard, Humo, Click yoki Payme bilan to'lang. Premium 2–5 daqiqada akkauntda faollashadi — narx aniq, qo'shimcha komissiya yo'q.",
    },
    ru: {
      title:
        'Цены Telegram Premium 2026 — пакеты 3/6/12 месяцев (полная таблица)',
      description:
        'Цены Telegram Premium в Узбекистане: 3 месяца 168 000, 6 — 228 000, 12 — 408 000 сум. Цена за месяц, расчёт экономии, цены подарков и способы покупки.',
      metaTitle: 'Цены Telegram Premium — 3/6/12 месяцев 2026 | Uzgets',
      metaDescription:
        'Цены Telegram Premium 3/6/12 месяцев в Узбекистане — 168 000 / 228 000 / 408 000 сум. Цена в месяц, экономия, таблица подарков. Оплата UzCard/Humo/Click/Payme.',
      ogDescription:
        'Цены Telegram Premium 2026: 3 мес. 168 000, 6 мес. 228 000, 12 мес. 408 000 сум — полная таблица и гид по выбору пакета.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Сколько стоит Telegram Premium на 3 месяца?',
          answer:
            'Premium на 3 месяца в боте uzgets — 168 000 сум, в месяц около 56 000 сум. Оплата UzCard, Humo, Click или Payme. Premium активируется на аккаунте за 2–5 минут и действует ровно 90 дней.',
        },
        {
          question: 'Сколько стоит Telegram Premium на 6 месяцев?',
          answer:
            'Premium на 6 месяцев — 228 000 сум, в месяц около 38 000 сум. По сравнению с покупкой 3-месячного дважды экономия 108 000 сум. Самый популярный выбор: баланс экономии и гибкости.',
        },
        {
          question: 'Сколько стоит Telegram Premium на 12 месяцев (год)?',
          answer:
            'Premium на 12 месяцев — 408 000 сум, в месяц около 34 000 сум. Самая низкая цена в месяц: на 40% дешевле 3-месячного и на 12% дешевле 6-месячного. Самый экономный пакет для ежедневных пользователей Telegram.',
        },
        {
          question: 'Какой пакет самый выгодный?',
          answer:
            '12-месячный (годовой) — в месяц всего 34 000 сум. По сравнению с покупкой 3-месячного 4 раза за год экономите 264 000 сум. Но нужно сразу оплатить 408 000 сум — если это сложно, следующий логичный выбор 6-месячный (228 000).',
        },
        {
          question: 'Цена подарка Premium такая же?',
          answer:
            'Да, цена подарка полностью такая же: 3 мес. 168 000, 6 мес. 228 000, 12 мес. 408 000 сум. В боте выбираете режим «Подарок», указываете @username получателя — Premium активируется напрямую на его аккаунте, Telegram отправляет официальное уведомление.',
        },
        {
          question: 'Цена меняется каждый месяц?',
          answer:
            'Нет. Цена uzgets в сумах фиксирована — ежедневных колебаний нет. Обновление происходит только при значительных изменениях (курс TON/USD или банковские комиссии) и вручную. На время действия уже купленного пакета никаких дополнительных списаний не будет.',
        },
        {
          question: 'Premium обновляется автоматически?',
          answer:
            'Нет. Ни один пакет автоматически не продлевается — по окончании срока Premium отключается, и аккаунт возвращается в обычный Telegram. Для продолжения нужно снова сделать заказ в боте. Это защищает от неожиданных списаний.',
        },
        {
          question: 'Можно ли оплатить в рассрочку?',
          answer:
            'Нет. Каждый пакет — это разовая оплата: вся сумма вносится сразу, Premium активируется на выбранный срок. Если 12-месячный (408 000) сразу сложно, рассмотрите 6-месячный (228 000) или 3-месячный (168 000). Через полгода или квартал можно купить снова.',
        },
        {
          question: 'Куда именно оплачивается Premium?',
          answer:
            'Бот указывает номер карты UzCard или Humo и точную сумму — вы переводите эту сумму на эту карту из любого банковского приложения. С Click — прямая оплата в приложении, сумма подставляется автоматически. С Payme — бот даёт ссылку. Во всех случаях итоговая сумма совпадает с указанной в боте, без дополнительных комиссий.',
        },
      ],
      finalCtaHeading: 'Готовы выбрать пакет Premium?',
      finalCtaBody:
        'Зайдите в бот, выберите 3/6/12 месяцев и оплатите через UzCard, Humo, Click или Payme. Premium активируется на аккаунте за 2–5 минут — цена чёткая, без дополнительных комиссий.',
    },
  },
}
