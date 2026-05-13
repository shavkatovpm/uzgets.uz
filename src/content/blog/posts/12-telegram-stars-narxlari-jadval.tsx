import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, STARS_BASE } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-narxlari-jadval'
const TODAY = '2026-05-13'

const PER_STAR = STARS_BASE.priceUzs / STARS_BASE.amount

function UzAnswerBox() {
  return (
    <p>
      Telegram Stars narxlari O&apos;zbekistonda{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      orqali — <strong>{formatNumber(STARS_BASE.amount)} ⭐ uchun {formatUzs(STARS_BASE.priceUzs)}</strong> dan
      boshlanadi (taxminan <strong>{PER_STAR.toFixed(0)} so&apos;m/Star</strong>). Narx miqdorga mutanosib:
      <strong> 100 ⭐ = {formatUzs(220 * 100)}</strong>, <strong>500 ⭐ = {formatUzs(220 * 500)}</strong>,{' '}
      <strong>1000 ⭐ = {formatUzs(220 * 1000)}</strong>. To&apos;lov UzCard, Humo, Click yoki Payme orqali —
      Stars 2–5 daqiqada akkauntga biriktiriladi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Цены на Telegram Stars в Узбекистане через{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      начинаются от <strong>{formatNumber(STARS_BASE.amount)} ⭐ за {formatUzs(STARS_BASE.priceUzs)}</strong>{' '}
      (примерно <strong>{PER_STAR.toFixed(0)} сум за Star</strong>). Цена пропорциональна количеству:
      <strong> 100 ⭐ = {formatUzs(220 * 100)}</strong>, <strong>500 ⭐ = {formatUzs(220 * 500)}</strong>,{' '}
      <strong>1000 ⭐ = {formatUzs(220 * 1000)}</strong>. Оплата UzCard, Humo, Click или Payme —
      Stars зачисляются на аккаунт за 2–5 минут.
    </p>
  )
}

function FullPriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Miqdor' : 'Количество'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Narx' : 'Цена'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? '1 ⭐ uchun' : 'За 1 ⭐'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Sahifa' : 'Страница'}</th>
          </tr>
        </thead>
        <tbody>
          {STARS_PACKS.map((s) => {
            const perStar = s.priceUzs / s.amount
            return (
              <tr key={s.slug} className="border-t border-[var(--border)]">
                <td className="px-4 py-2 font-medium">{formatNumber(s.amount)} ⭐</td>
                <td className="px-4 py-2">{formatUzs(s.priceUzs)}</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">{perStar.toFixed(0)} {lang === 'uz' ? "so'm" : 'сум'}</td>
                <td className="px-4 py-2">
                  <Link href={localePath(lang, `/stars/${s.slug}`)} className="text-[var(--primary)] hover:underline">
                    {lang === 'uz' ? 'Batafsil →' : 'Подробнее →'}
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function ChannelCompareTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    channel: string
    access: { uz: string; ru: string }
    perStar: { uz: string; ru: string }
    notes: { uz: string; ru: string }
  }
  const rows: Row[] = [
    {
      channel: 'Fragment (TON)',
      access: { uz: 'Faqat crypto (TON)', ru: 'Только крипта (TON)' },
      perStar: { uz: "~$0.013 (~165 so'm)", ru: '~$0.013 (~165 сум)' },
      notes: {
        uz: "O'zbek karta ishlamaydi; TON sotib olish va wallet kerak",
        ru: 'Узб. карта не работает; нужны TON и кошелёк',
      },
    },
    {
      channel: '@PremiumBot (Telegram)',
      access: { uz: 'App Store / Google Play', ru: 'App Store / Google Play' },
      perStar: { uz: '~$0.020 (~250 so\'m)', ru: '~$0.020 (~250 сум)' },
      notes: {
        uz: "O'zbekistondan ko'pincha bloklanadi; ~30% ilova do'koni komissiyasi",
        ru: 'Часто блокируется из Узбекистана; ~30% комиссия маркета',
      },
    },
    {
      channel: `${siteConfig.bot}`,
      access: { uz: 'UzCard / Humo / Click / Payme', ru: 'UzCard / Humo / Click / Payme' },
      perStar: { uz: `${PER_STAR.toFixed(0)} so'm`, ru: `${PER_STAR.toFixed(0)} сум` },
      notes: {
        uz: "O'zbek karta bilan bevosita; 2–5 daqiqada yetkazib beriladi",
        ru: 'Прямо с узб. картой; доставка за 2–5 минут',
      },
    },
  ]

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Kanal' : 'Канал'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? "To'lov" : 'Оплата'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? '1 ⭐ taxminan' : '1 ⭐ примерно'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Izoh' : 'Примечание'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.channel} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{r.channel}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.access[lang]}</td>
              <td className="px-4 py-2">{r.perStar[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.notes[lang]}</td>
            </tr>
          ))}
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
          <a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/telegram-stars
          </a>{' '}
          — {lang === 'uz' ? 'Telegram Stars rasmiy e\'lon' : 'официальный анонс Telegram Stars'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/stars
          </a>{' '}
          — {lang === 'uz' ? 'Telegram Stars API hujjati' : 'документация API Telegram Stars'}
        </li>
        <li>
          <a href="https://fragment.com/username/tgstars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            fragment.com/username/tgstars
          </a>{' '}
          — {lang === 'uz' ? 'Fragment Stars sahifasi (TON kursi)' : 'страница Fragment Stars (курс TON)'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? `Narxlar 2026-yil may holatiga ko'ra. Fragment va PremiumBot narxlari TON/USD kursiga bog'liq va kunlik o'zgaradi; uzgets so'mdagi narxi statik (jadvalda ko'rsatilgan).`
          : 'Цены на май 2026 года. Цены Fragment и PremiumBot зависят от курса TON/USD и меняются ежедневно; цена uzgets в сумах фиксирована (указана в таблице).'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="toliq-jadval">Telegram Stars narxlari — to&apos;liq jadval</h2>
      <p>
        Quyida {siteConfig.bot} botida sotiladigan barcha Telegram Stars paketlari va ularning
        so&apos;mdagi narxi. Eng kichik paket — <strong>{formatNumber(STARS_BASE.amount)} ⭐ uchun {formatUzs(STARS_BASE.priceUzs)}</strong>,
        eng katta — <strong>10 000 ⭐ uchun {formatUzs(220 * 10000)}</strong>. Narx miqdorga
        mutanosib, ya&apos;ni har Star uchun <strong>{PER_STAR.toFixed(0)} so&apos;m</strong>.
      </p>
      <FullPriceTable lang="uz" />
      <p>
        Har paket uchun alohida sahifa{' '}
        <Link href="/stars" className="font-semibold text-[var(--primary)] hover:underline">
          /stars
        </Link>{' '}
        bo&apos;limida — batafsil ma&apos;lumot va to&apos;g&apos;ridan-to&apos;g&apos;ri buyurtma havolasi
        bilan.
      </p>

      <InlineBotCTA lang="uz" text="Stars miqdorini tanlang va botda buyurtma bering." />

      <h2 id="50-stars">50 Stars narxi qancha?</h2>
      <p>
        <strong>{formatUzs(220 * 50)}</strong>. Bu eng kichik mavjud paket — Telegram&apos;ning
        minimum sotib olish miqdori ({STARS_BASE.amount} ⭐). Mini App&apos;da kichik to&apos;lovlar,
        post reklamasini boost qilish yoki kanalga 1–2 ta reaksiya yuborish uchun mos.
      </p>
      <ul>
        <li>{formatUzs(220 * 50)} = {formatNumber(50)} ⭐</li>
        <li>1 ⭐ uchun: {PER_STAR.toFixed(0)} so&apos;m</li>
        <li>To&apos;lov: UzCard / Humo / Click / Payme</li>
        <li>
          Batafsil:{' '}
          <Link href="/stars/50" className="text-[var(--primary)] hover:underline">
            /stars/50
          </Link>
        </li>
      </ul>

      <h2 id="100-stars">100 Stars narxi qancha?</h2>
      <p>
        <strong>{formatUzs(220 * 100)}</strong>. Eng ko&apos;p so&apos;raladigan paketlardan biri —
        bir nechta Mini App to&apos;lovi yoki kanalga premium emoji/reaksiya uchun yetadi.
      </p>
      <ul>
        <li>{formatUzs(220 * 100)} = {formatNumber(100)} ⭐</li>
        <li>1 ⭐ uchun: {PER_STAR.toFixed(0)} so&apos;m</li>
        <li>
          Batafsil:{' '}
          <Link href="/stars/100" className="text-[var(--primary)] hover:underline">
            /stars/100
          </Link>
        </li>
      </ul>

      <h2 id="500-stars">500 Stars narxi qancha?</h2>
      <p>
        <strong>{formatUzs(220 * 500)}</strong>. O&apos;rta paket — Mini App o&apos;yinlarida
        muntazam to&apos;lovlar, kontent yaratuvchilarga &quot;tip&quot; yoki kanalga oylik
        reaksiyalar uchun maqbul.
      </p>
      <ul>
        <li>{formatUzs(220 * 500)} = {formatNumber(500)} ⭐</li>
        <li>1 ⭐ uchun: {PER_STAR.toFixed(0)} so&apos;m</li>
        <li>
          Batafsil:{' '}
          <Link href="/stars/500" className="text-[var(--primary)] hover:underline">
            /stars/500
          </Link>
        </li>
      </ul>

      <InlineBotCTA lang="uz" text="500 yoki 1000 Stars — botda hozir tanlang." />

      <h2 id="1000-stars">1000 Stars narxi qancha?</h2>
      <p>
        <strong>{formatUzs(220 * 1000)}</strong>. Yirik paket — sovg&apos;a sifatida yuborish yoki
        Mini App&apos;da uzoq muddatli foydalanish uchun. 1000 ⭐ deyarli barcha Mini App
        funksiyalari uchun yetarli zaxira.
      </p>
      <ul>
        <li>{formatUzs(220 * 1000)} = {formatNumber(1000)} ⭐</li>
        <li>1 ⭐ uchun: {PER_STAR.toFixed(0)} so&apos;m</li>
        <li>
          Batafsil:{' '}
          <Link href="/stars/1000" className="text-[var(--primary)] hover:underline">
            /stars/1000
          </Link>
        </li>
      </ul>

      <h2 id="narx-qanday">Narx qanday hisoblanadi?</h2>
      <p>
        Formulasi oddiy: <strong>narx = miqdor × {PER_STAR.toFixed(0)} so&apos;m</strong>. Ya&apos;ni
        har Star uchun bir xil narx, miqdor qancha ko&apos;p bo&apos;lsa shuncha so&apos;m
        to&apos;laysiz — chegirma yoki narxning oshishi yo&apos;q. Misol uchun:
      </p>
      <ul>
        <li>75 ⭐ → {formatUzs(220 * 75)}</li>
        <li>250 ⭐ → {formatUzs(220 * 250)}</li>
        <li>2 500 ⭐ → {formatUzs(220 * 2500)}</li>
        <li>10 000 ⭐ → {formatUzs(220 * 10000)}</li>
      </ul>
      <p>
        Aniq narx uchun — yuqoridagi to&apos;liq jadvalga qarang yoki{' '}
        <Link href="/stars" className="text-[var(--primary)] hover:underline">
          /stars
        </Link>{' '}
        bo&apos;limidan paketni tanlang.
      </p>

      <h2 id="kanal-taqqoslash">Boshqa kanallar bilan taqqoslash</h2>
      <p>
        Telegram Stars uchta asosiy kanalda sotiladi: <strong>Fragment</strong> (TON crypto orqali,
        eng past narx), <strong>@PremiumBot</strong> (App Store/Google Play orqali, lekin
        O&apos;zbekistondan ko&apos;pincha ishlamaydi) va <strong>O&apos;zbek mahalliy botlar</strong>{' '}
        (UzCard/Humo). Quyidagi jadvalda taqqoslama:
      </p>
      <ChannelCompareTable lang="uz" />
      <p>
        <strong>Xulosa:</strong> agar TON crypto va Fragment wallet&apos;ingiz bo&apos;lsa — Fragment
        eng arzon. Lekin O&apos;zbek karta bilan bevosita to&apos;lash uchun Fragment va @PremiumBot
        amalda ishlamaydi. Mahalliy karta bilan sotib olganlar uchun{' '}
        <Link href="/blog/eng-arzon-telegram-stars-ozbekistonda" className="text-[var(--primary)] hover:underline">
          uzgets bozordagi eng arzon variantlardan biri
        </Link>
        .
      </p>

      <InlineBotCTA lang="uz" text="UzCard yoki Humo bormi? Botda buyurtma bering." />

      <h2 id="narx-ozgarishi">Narx qachon o&apos;zgaradi?</h2>
      <p>
        Uzgets so&apos;mdagi narxi qo&apos;lda yangilanadi — kunlik tebranish yo&apos;q.
        Yangilanish odatda Telegram tomonidan Fragment yoki PremiumBot narxi sezilarli o&apos;zgarganda
        (TON/USD kursi katta o&apos;zgarsa) yoki bank komissiyalari yangilanganda amalga oshiriladi.
      </p>
      <p>
        Joriy narx har doim shu maqolada, bot ichida va{' '}
        <Link href="/stars" className="text-[var(--primary)] hover:underline">
          /stars
        </Link>{' '}
        sahifasida ko&apos;rsatiladi. Botda ko&apos;rsatilgan summa — yakuniy summa, qo&apos;shimcha
        to&apos;lov yo&apos;q.
      </p>

      <h2 id="qanday-tolash">Qanday to&apos;lash mumkin?</h2>
      <p>
        {siteConfig.bot} barcha mashhur O&apos;zbek to&apos;lov usullarini qabul qiladi:
      </p>
      <ul>
        <li>
          <strong>UzCard / Humo</strong> — karta raqami orqali bevosita to&apos;lov. Eng oddiy yo&apos;l.
        </li>
        <li>
          <strong>Click</strong> — biometrik tasdiq bilan 10 soniyalik to&apos;lov.{' '}
          <Link href="/blog/telegram-stars-click-orqali-sotib-olish" className="text-[var(--primary)] hover:underline">
            Click orqali sotib olish qo&apos;llanmasi
          </Link>
          .
        </li>
        <li>
          <strong>Payme</strong> — Payme ilovasi orqali. Bot Payme havolasini avtomatik beradi.
        </li>
      </ul>
      <p>
        To&apos;lov usuli narxni o&apos;zgartirmaydi — Click, UzCard, Humo va Payme bir xil narxda
        ishlaydi.
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Narx aniq, paket tanlang — Stars 2–5 daqiqada keladi." />

      <h2 id="muhim">Sotib olishdan oldin tekshiring</h2>
      <ul>
        <li>
          <strong>@username aniq.</strong> Stars qaysi akkauntga kelishi kerakligini username bilan
          aniq belgilang. Telefon raqami emas — username (masalan, @example). Sozlamalar &gt;
          Username bo&apos;limidan tasdiqlang.
        </li>
        <li>
          <strong>Faqat rasmiy bot.</strong> t.me/uzgetsbot — o&apos;xshash nomli botlar (uzgetbot,
          uzg3tsbot) firibgar klonlar. Saytdagi tugma orqali o&apos;ting.
        </li>
        <li>
          <strong>Botda ko&apos;rsatilgan summa.</strong> Bot karta raqamiga aniq summani
          ko&apos;rsatadi — boshqa summa o&apos;tkazsangiz mahsulot yetkazilmaydi. Click bilan
          bunday muammo yo&apos;q (summa avtomatik).
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="toliq-jadval">Цены на Telegram Stars — полная таблица</h2>
      <p>
        Ниже все пакеты Telegram Stars, которые продаются в боте {siteConfig.bot}, и их цены в сумах.
        Минимальный пакет — <strong>{formatNumber(STARS_BASE.amount)} ⭐ за {formatUzs(STARS_BASE.priceUzs)}</strong>,
        максимальный — <strong>10 000 ⭐ за {formatUzs(220 * 10000)}</strong>. Цена пропорциональна
        количеству, то есть за каждую Star — <strong>{PER_STAR.toFixed(0)} сум</strong>.
      </p>
      <FullPriceTable lang="ru" />
      <p>
        Для каждого пакета есть отдельная страница в разделе{' '}
        <Link href="/ru/stars" className="font-semibold text-[var(--primary)] hover:underline">
          /ru/stars
        </Link>{' '}
        — с подробной информацией и прямой ссылкой на заказ.
      </p>

      <InlineBotCTA lang="ru" text="Выберите количество Stars и оформите заказ в боте." />

      <h2 id="50-stars">Сколько стоят 50 Stars?</h2>
      <p>
        <strong>{formatUzs(220 * 50)}</strong>. Минимально доступный пакет — минимум, который
        Telegram позволяет купить ({STARS_BASE.amount} ⭐). Подходит для небольших оплат в
        Mini App, буста поста или 1–2 реакций в канале.
      </p>
      <ul>
        <li>{formatUzs(220 * 50)} = {formatNumber(50)} ⭐</li>
        <li>За 1 ⭐: {PER_STAR.toFixed(0)} сум</li>
        <li>Оплата: UzCard / Humo / Click / Payme</li>
        <li>
          Подробнее:{' '}
          <Link href="/ru/stars/50" className="text-[var(--primary)] hover:underline">
            /ru/stars/50
          </Link>
        </li>
      </ul>

      <h2 id="100-stars">Сколько стоят 100 Stars?</h2>
      <p>
        <strong>{formatUzs(220 * 100)}</strong>. Один из самых востребованных пакетов — хватает на
        несколько оплат в Mini App или премиум-эмодзи/реакции в канале.
      </p>
      <ul>
        <li>{formatUzs(220 * 100)} = {formatNumber(100)} ⭐</li>
        <li>За 1 ⭐: {PER_STAR.toFixed(0)} сум</li>
        <li>
          Подробнее:{' '}
          <Link href="/ru/stars/100" className="text-[var(--primary)] hover:underline">
            /ru/stars/100
          </Link>
        </li>
      </ul>

      <h2 id="500-stars">Сколько стоят 500 Stars?</h2>
      <p>
        <strong>{formatUzs(220 * 500)}</strong>. Средний пакет — подходит для регулярных оплат в
        Mini App-играх, чаевых создателям контента или ежемесячных реакций в канале.
      </p>
      <ul>
        <li>{formatUzs(220 * 500)} = {formatNumber(500)} ⭐</li>
        <li>За 1 ⭐: {PER_STAR.toFixed(0)} сум</li>
        <li>
          Подробнее:{' '}
          <Link href="/ru/stars/500" className="text-[var(--primary)] hover:underline">
            /ru/stars/500
          </Link>
        </li>
      </ul>

      <InlineBotCTA lang="ru" text="500 или 1000 Stars — выберите в боте прямо сейчас." />

      <h2 id="1000-stars">Сколько стоят 1000 Stars?</h2>
      <p>
        <strong>{formatUzs(220 * 1000)}</strong>. Крупный пакет — подходит для подарка или
        долгосрочного использования в Mini App. 1000 ⭐ — это запас почти под все функции Mini App.
      </p>
      <ul>
        <li>{formatUzs(220 * 1000)} = {formatNumber(1000)} ⭐</li>
        <li>За 1 ⭐: {PER_STAR.toFixed(0)} сум</li>
        <li>
          Подробнее:{' '}
          <Link href="/ru/stars/1000" className="text-[var(--primary)] hover:underline">
            /ru/stars/1000
          </Link>
        </li>
      </ul>

      <h2 id="narx-qanday">Как рассчитывается цена?</h2>
      <p>
        Формула простая: <strong>цена = количество × {PER_STAR.toFixed(0)} сум</strong>. То есть
        за каждую Star одна и та же цена; чем больше количество, тем больше сумма — никаких
        скидок или наценок. Примеры:
      </p>
      <ul>
        <li>75 ⭐ → {formatUzs(220 * 75)}</li>
        <li>250 ⭐ → {formatUzs(220 * 250)}</li>
        <li>2 500 ⭐ → {formatUzs(220 * 2500)}</li>
        <li>10 000 ⭐ → {formatUzs(220 * 10000)}</li>
      </ul>
      <p>
        Точную цену — смотрите в полной таблице выше или выбирайте пакет в разделе{' '}
        <Link href="/ru/stars" className="text-[var(--primary)] hover:underline">
          /ru/stars
        </Link>
        .
      </p>

      <h2 id="kanal-taqqoslash">Сравнение с другими каналами</h2>
      <p>
        Telegram Stars продаются по трём основным каналам: <strong>Fragment</strong> (через
        TON-крипту, самая низкая цена), <strong>@PremiumBot</strong> (через App Store/Google Play,
        но часто не работает из Узбекистана) и <strong>узбекские локальные боты</strong> (UzCard/Humo).
        Сравнение ниже:
      </p>
      <ChannelCompareTable lang="ru" />
      <p>
        <strong>Вывод:</strong> если у вас есть TON-крипта и кошелёк Fragment — Fragment дешевле всего.
        Но для прямой оплаты узбекской картой Fragment и @PremiumBot фактически не работают.
        Среди тех, кто платит локальной картой,{' '}
        <Link href="/ru/blog/eng-arzon-telegram-stars-ozbekistonda" className="text-[var(--primary)] hover:underline">
          uzgets — один из самых выгодных вариантов на рынке
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="Есть UzCard или Humo? Оформите заказ в боте." />

      <h2 id="narx-ozgarishi">Когда меняется цена?</h2>
      <p>
        Цена uzgets в сумах обновляется вручную — ежедневных колебаний нет. Обновление обычно
        происходит, когда цена Telegram на Fragment или PremiumBot значительно меняется (при больших
        колебаниях курса TON/USD) или когда обновляются банковские комиссии.
      </p>
      <p>
        Актуальная цена всегда указана в этой статье, в самом боте и на странице{' '}
        <Link href="/ru/stars" className="text-[var(--primary)] hover:underline">
          /ru/stars
        </Link>
        . Сумма, отображаемая в боте, — итоговая, без дополнительной комиссии.
      </p>

      <h2 id="qanday-tolash">Как можно оплатить?</h2>
      <p>{siteConfig.bot} принимает все популярные способы оплаты в Узбекистане:</p>
      <ul>
        <li>
          <strong>UzCard / Humo</strong> — прямая оплата по номеру карты. Самый простой способ.
        </li>
        <li>
          <strong>Click</strong> — оплата за 10 секунд с биометрией.{' '}
          <Link href="/ru/blog/telegram-stars-click-orqali-sotib-olish" className="text-[var(--primary)] hover:underline">
            Руководство по покупке через Click
          </Link>
          .
        </li>
        <li>
          <strong>Payme</strong> — через приложение Payme. Бот автоматически выдаст ссылку Payme.
        </li>
      </ul>
      <p>
        Способ оплаты не меняет цену — Click, UzCard, Humo и Payme работают по одинаковой стоимости.
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Цены чёткие, выберите пакет — Stars зачислятся за 2–5 минут." />

      <h2 id="muhim">Что проверить перед покупкой</h2>
      <ul>
        <li>
          <strong>@username точный.</strong> Чётко укажите, на какой аккаунт зачислять Stars — через
          username, не через номер телефона (например, @example). Подтвердите в Настройках &gt; Username.
        </li>
        <li>
          <strong>Только официальный бот.</strong> t.me/uzgetsbot — похожие имена (uzgetbot,
          uzg3tsbot) — мошеннические клоны. Переходите по кнопке с сайта.
        </li>
        <li>
          <strong>Сумма в боте.</strong> Бот указывает точную сумму на карту — если перевести другую
          сумму, продукт не будет доставлен. С Click такой проблемы нет (сумма подставляется автоматически).
        </li>
      </ul>
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
      title: "Telegram Stars narxlari 2026 — 50/100/500/1000 to'liq jadval",
      description:
        "Telegram Stars narxlari O'zbekistonda: 50, 100, 500, 1000 va boshqa paketlar — to'liq jadval, 1 Star uchun narx, qanday hisoblanadi va boshqa kanallar bilan taqqoslash.",
      metaTitle: 'Telegram Stars narxlari 2026 — 50/100/500/1000 jadval',
      metaDescription:
        "Telegram Stars narxlari O'zbekistonda: 50 ⭐ = 11 000 so'm, 100 ⭐ = 22 000, 500 ⭐ = 110 000, 1000 ⭐ = 220 000. To'liq jadval va Fragment/PremiumBot bilan taqqoslash.",
      ogDescription:
        "Telegram Stars to'liq narx jadvali — 50 ⭐ dan 10 000 ⭐ gacha, har Star uchun 220 so'm.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "50 Telegram Stars qancha turadi?",
          answer:
            "50 ⭐ = 11 000 so'm. Bu uzgets botida sotiladigan eng kichik paket — Telegram'ning minimum sotib olish miqdori. Har Star uchun 220 so'm.",
        },
        {
          question: '100 Telegram Stars qancha turadi?',
          answer:
            "100 ⭐ = 22 000 so'm. Eng ko'p so'raladigan paketlardan biri — bir nechta Mini App to'lovi yoki kanalga premium emoji/reaksiya uchun yetadi.",
        },
        {
          question: '500 Telegram Stars qancha turadi?',
          answer:
            "500 ⭐ = 110 000 so'm. O'rta paket — Mini App o'yinlarida muntazam to'lovlar, kontent yaratuvchilarga tip yoki kanalga oylik reaksiyalar uchun maqbul.",
        },
        {
          question: '1000 Telegram Stars qancha turadi?',
          answer:
            "1000 ⭐ = 220 000 so'm. Yirik paket — sovg'a sifatida yuborish yoki Mini App'da uzoq muddatli foydalanish uchun.",
        },
        {
          question: 'Telegram Stars narxi qanday hisoblanadi?',
          answer:
            "Formulasi: narx = miqdor × 220 so'm. Ya'ni har Star uchun bir xil narx, chegirma yoki narxning oshishi yo'q. 75 ⭐ = 16 500 so'm, 250 ⭐ = 55 000 so'm, 2 500 ⭐ = 550 000 so'm.",
        },
        {
          question: "Eng kichik Stars miqdori qancha?",
          answer:
            "50 ⭐ (11 000 so'm). Bu Telegram'ning rasmiy minimum miqdori — barcha kanallarda (Fragment, PremiumBot, uzgets) bir xil. Undan kam Stars sotilmaydi.",
        },
        {
          question: 'Stars narxi PremiumBot va Fragment bilan solishtirilganda qanday?',
          answer:
            "Fragment (TON crypto bilan) eng arzon — taxminan $0.013/Star. @PremiumBot App Store/Google Play orqali — taxminan $0.020/Star (app store komissiyalari sababli). Uzgets — 220 so'm/Star (~$0.017). Lekin Fragment va PremiumBot O'zbek karta bilan amalda ishlamaydi — mahalliy karta bilan sotib olganlar uchun uzgets eng qulay variant.",
        },
        {
          question: 'Narx qachon o\'zgaradi?',
          answer:
            "Uzgets so'mdagi narxi qo'lda yangilanadi — kunlik tebranish yo'q. Yangilanish Telegram tomonidan Fragment/PremiumBot narxi sezilarli o'zgarganda yoki bank komissiyalari yangilanganda amalga oshiriladi. Joriy narx har doim shu maqolada va bot ichida ko'rsatiladi.",
        },
      ],
      finalCtaHeading: 'Telegram Stars sotib olishga tayyormisiz?',
      finalCtaBody:
        "Botga kiring, miqdorni tanlang va UzCard, Humo, Click yoki Payme orqali to'lang. Stars 2–5 daqiqada akkauntga biriktiriladi — narx aniq, qo'shimcha komissiya yo'q.",
    },
    ru: {
      title: 'Цены Telegram Stars 2026 — полная таблица 50/100/500/1000',
      description:
        'Цены на Telegram Stars в Узбекистане: 50, 100, 500, 1000 и другие пакеты — полная таблица, цена за 1 Star, как рассчитывается и сравнение с другими каналами.',
      metaTitle: 'Цены Telegram Stars 2026 — таблица 50/100/500/1000',
      metaDescription:
        'Цены Telegram Stars в Узбекистане: 50 ⭐ = 11 000 сум, 100 ⭐ = 22 000, 500 ⭐ = 110 000, 1000 ⭐ = 220 000. Полная таблица и сравнение с Fragment/PremiumBot.',
      ogDescription:
        'Telegram Stars — полная таблица цен от 50 ⭐ до 10 000 ⭐, по 220 сум за Star.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Сколько стоят 50 Telegram Stars?',
          answer:
            'Это минимальный пакет в боте uzgets — минимум, который Telegram позволяет купить. За 1 Star — 220 сум.',
        },
        {
          question: 'Сколько стоят 100 Telegram Stars?',
          answer:
            'Один из самых востребованных пакетов — хватает на несколько оплат в Mini App или премиум-эмодзи/реакции в канале.',
        },
        {
          question: 'Сколько стоят 500 Telegram Stars?',
          answer:
            '500 ⭐ = 110 000 сум. Средний пакет — для регулярных оплат в Mini App, чаевых создателям контента или ежемесячных реакций в канале.',
        },
        {
          question: 'Сколько стоят 1000 Telegram Stars?',
          answer:
            '1000 ⭐ = 220 000 сум. Крупный пакет — для подарка или долгосрочного использования в Mini App.',
        },
        {
          question: 'Как рассчитывается цена Telegram Stars?',
          answer:
            'Формула: цена = количество × 220 сум. То есть за каждую Star одна и та же цена, без скидок или наценок. 75 ⭐ = 16 500 сум, 250 ⭐ = 55 000 сум, 2 500 ⭐ = 550 000 сум.',
        },
        {
          question: 'Какое минимальное количество Stars?',
          answer:
            '50 ⭐ (11 000 сум). Это официальный минимум Telegram — одинаков на всех каналах (Fragment, PremiumBot, uzgets). Меньше Stars не продаются.',
        },
        {
          question: 'Как цена Stars сравнивается с PremiumBot и Fragment?',
          answer:
            'Fragment (через TON-крипту) — самый дешёвый, примерно $0.013 за Star. @PremiumBot через App Store / Google Play — примерно $0.020 за Star (из-за комиссий маркетов). Uzgets — 220 сум за Star (~$0.017). Но Fragment и PremiumBot фактически не работают с узб. картами — для оплаты локальной картой uzgets — самый удобный вариант.',
        },
        {
          question: 'Когда меняется цена?',
          answer:
            'Цена uzgets в сумах обновляется вручную — ежедневных колебаний нет. Обновление происходит, когда цена Telegram на Fragment / PremiumBot значительно меняется или когда обновляются банковские комиссии. Актуальная цена всегда указана в этой статье и в самом боте.',
        },
      ],
      finalCtaHeading: 'Готовы купить Telegram Stars?',
      finalCtaBody:
        'Зайдите в бот, выберите количество и оплатите через UzCard, Humo, Click или Payme. Stars зачислятся на аккаунт за 2–5 минут — цена чёткая, без дополнительных комиссий.',
    },
  },
}
