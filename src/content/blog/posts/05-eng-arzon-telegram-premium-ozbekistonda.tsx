import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'eng-arzon-telegram-premium-ozbekistonda'

const PREMIUM_3M = PREMIUM_PERIODS.find((p) => p.months === 3)!
const PREMIUM_6M = PREMIUM_PERIODS.find((p) => p.months === 6)!
const PREMIUM_12M = PREMIUM_PERIODS.find((p) => p.months === 12)!

type Competitor3M = {
  name: string
  price: number
  isRange?: boolean
  paymentNote: { uz: string; ru: string }
}

const COMPETITORS_3M: Competitor3M[] = [
  {
    name: 'Uzgets',
    price: PREMIUM_3M.priceUzs,
    paymentNote: {
      uz: 'UzCard / Humo / Click / Payme',
      ru: 'UzCard / Humo / Click / Payme',
    },
  },
  {
    name: 'StarsJoy',
    price: 172_000,
    paymentNote: { uz: 'Mahalliy karta', ru: 'Локальная карта' },
  },
  {
    name: 'Boshqa botlar',
    price: 170_000,
    isRange: true,
    paymentNote: {
      uz: '170 000 – 180 000 so‘m oralig‘ida',
      ru: 'диапазон 170 000 – 180 000 сум',
    },
  },
]

function UzAnswerBox() {
  return (
    <p>
      O&apos;zbekistondan mahalliy karta bilan to&apos;lab Telegram Premium sotib olish mumkin
      bo&apos;lgan xizmatlar orasida{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      eng arzon. 3 oylik narx — <strong>{formatUzs(PREMIUM_3M.priceUzs)}</strong> (oyiga ~
      {formatUzs(PREMIUM_3M.perMonthHint)}). Yaqin raqobatchi StarsJoy 3 oylik 172 000 so&apos;m,
      boshqa botlarda 170 000–180 000 so&apos;m. 6 oylik {formatUzs(PREMIUM_6M.priceUzs)} (oyiga ~
      {formatUzs(PREMIUM_6M.perMonthHint)}), 12 oylik {formatUzs(PREMIUM_12M.priceUzs)} (oyiga ~
      {formatUzs(PREMIUM_12M.perMonthHint)}). To&apos;lov UzCard, Humo, Click yoki Payme orqali —
      Apple Pay yoki Visa kerak emas.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Среди сервисов, где из Узбекистана можно купить Telegram Premium локальной картой,{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      — самый дешёвый. 3-месячная цена — <strong>{formatUzs(PREMIUM_3M.priceUzs)}</strong> (около{' '}
      {formatUzs(PREMIUM_3M.perMonthHint)} в месяц). У ближайшего конкурента StarsJoy 3 месяца —
      172 000 сум, у других ботов — 170 000–180 000 сум. 6 месяцев — {formatUzs(PREMIUM_6M.priceUzs)}{' '}
      (~{formatUzs(PREMIUM_6M.perMonthHint)}/мес), 12 месяцев — {formatUzs(PREMIUM_12M.priceUzs)}{' '}
      (~{formatUzs(PREMIUM_12M.perMonthHint)}/мес). Оплата UzCard, Humo, Click или Payme — Apple
      Pay или Visa не требуются.
    </p>
  )
}

function ComparisonTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Xizmat' : 'Сервис'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? '3 oylik narxi' : '3 месяца'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Oyiga' : 'В месяц'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? "To'lov" : 'Оплата'}</th>
          </tr>
        </thead>
        <tbody>
          {COMPETITORS_3M.map((c) => {
            const isUzgets = c.name === 'Uzgets'
            const perMonth = Math.round(c.price / 3)
            return (
              <tr key={c.name} className={`border-t border-[var(--border)] ${isUzgets ? 'bg-[var(--primary)]/5' : ''}`}>
                <td className="px-4 py-2 font-medium">
                  {c.name}
                  {isUzgets && (
                    <span className="ml-2 rounded-full bg-[var(--primary)] px-2 py-0.5 text-xs font-semibold text-white">
                      {lang === 'uz' ? 'eng arzon' : 'самый дешёвый'}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2">{formatUzs(c.price)}{c.isRange ? '+' : ''}</td>
                <td className="px-4 py-2">~{formatUzs(perMonth)}</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">{c.paymentNote[lang]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="border-t border-[var(--border)] bg-[var(--muted)]/30 px-4 py-2 text-xs text-[var(--text-muted)]">
        {lang === 'uz'
          ? "2026-yil may holatiga ko'ra qo'lda taqqoslangan. Raqobatchi narxlari o'zgarsa sahifa yangilanadi."
          : 'Сравнение вручную на май 2026 года. При изменении цен конкурентов страница обновляется.'}
      </div>
    </div>
  )
}

function UzgetsPriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Muddat' : 'Срок'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Narx' : 'Цена'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Oyiga' : 'В месяц'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Sahifa' : 'Страница'}</th>
          </tr>
        </thead>
        <tbody>
          {PREMIUM_PERIODS.map((p) => (
            <tr key={p.slug} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{p.months} {lang === 'uz' ? 'oy' : 'мес'}</td>
              <td className="px-4 py-2">{formatUzs(p.priceUzs)}</td>
              <td className="px-4 py-2">~{formatUzs(p.perMonthHint)}</td>
              <td className="px-4 py-2">
                <Link href={`/${lang}/premium/${p.slug}`} className="text-[var(--primary)] hover:underline">
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

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{lang === 'uz' ? 'Manbalar' : 'Источники'}</div>
      <ul className="space-y-1 text-[var(--text-muted)]">
        <li>
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/faq_premium
          </a>{' '}
          — {lang === 'uz' ? 'Premium rasmiy savol-javob' : 'официальный FAQ Premium'}
        </li>
        <li>
          <a href="https://telegram.org/tos" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/tos
          </a>{' '}
          — {lang === 'uz' ? 'Telegram xizmat shartlari' : 'условия обслуживания Telegram'}
        </li>
        <li>
          <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            t.me/PremiumBot
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? "Telegram'ning rasmiy boti (Apple/Google IAP, xorijiy karta talab etadi)"
            : 'официальный бот Telegram (Apple/Google IAP, требует зарубежную карту)'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="kim-eng-arzon">O&apos;zbekistonda Telegram Premium eng arzon kim?</h2>
      <p>
        Mahalliy karta (UzCard, Humo, Click, Payme) bilan to&apos;lash mumkin bo&apos;lgan
        xizmatlar orasida{' '}
        <strong>Uzgets eng arzon</strong> — 3 oylik {formatUzs(PREMIUM_3M.priceUzs)},
        oyiga taxminan {formatUzs(PREMIUM_3M.perMonthHint)}. Quyidagi jadvalda 3 oylik tarif
        bo&apos;yicha to&apos;liq taqqoslama:
      </p>
      <ComparisonTable lang="uz" />
      <p>
        StarsJoy bilan farq 4 000 so&apos;m, boshqa botlar bilan 2 000–12 000 so&apos;m. Bir
        ko&apos;rinishda kichik, lekin 12 oylik bo&apos;yicha qaralganda bu farq{' '}
        <strong>16 000–48 000 so&apos;m</strong> tejovga aylanadi.
      </p>

      <InlineBotCTA lang="uz" text="3 oylik Premium 168 000 so'mga — botda buyurtmangizni rasmiylashtiring." />

      <h2 id="fragment-app-store">Nega Apple Pay va @PremiumBot taqqoslamada yo&apos;q?</h2>
      <p>
        Telegram Premium&apos;ni rasmiy ravishda quyidagi yo&apos;llar orqali sotib olish mumkin —
        lekin barchasi O&apos;zbekistondan amalda mavjud emas:
      </p>
      <ul>
        <li>
          <strong>Apple App Store / Google Play in-app sotib olish</strong> — Apple Pay yoki
          Google Pay orqali to&apos;lov o&apos;tkaziladi. Bu tizimlar O&apos;zbekistonda
          chiqarilgan UzCard yoki Humo&apos;ni qabul qilmaydi. Foydalanuvchi xorijiy karta
          (Visa/Mastercard) ulashi shart.
        </li>
        <li>
          <strong>@PremiumBot</strong> — Telegram&apos;ning rasmiy boti. To&apos;lov hali ham
          Apple/Google qatlami orqali o&apos;tadi, ya&apos;ni xorijiy karta talabi bekor
          qilinmaydi.
        </li>
        <li>
          <strong>Fragment</strong> — Premium uchun TON crypto qabul qiladi yoki @PremiumBot orqali
          yo&apos;naltiradi. UzCard/Humo bunda ham ishlamaydi.
        </li>
      </ul>
      <p>
        Shuning uchun &quot;O&apos;zbekistonda eng arzon&quot; deyilganda, qonuniy va amaliy
        taqqoslama mahalliy karta qabul qiladigan vositachilar orasida bo&apos;lishi shart.
      </p>

      <h2 id="qanday-arzon">Uzgets qanday qilib eng arzon — narx tarkibi</h2>
      <p>
        Uzgets&apos;ning narx ustunligi quyidagilarga asoslangan:
      </p>
      <ul>
        <li>
          <strong>Avtomatlashtirilgan jarayon:</strong> bot to&apos;lovni qabul qilgach
          Telegram&apos;ga to&apos;g&apos;ridan-to&apos;g&apos;ri obuna so&apos;rovini yuboradi —
          operator yoki qo&apos;lda ish qadami yo&apos;q. Bu xarajatni kamaytiradi.
        </li>
        <li>
          <strong>Mahalliy to&apos;lov tizimlari bilan to&apos;g&apos;ridan-to&apos;g&apos;ri
          ulanish:</strong> UzCard, Humo, Click, Payme orqali — har biri bilan eng past komissiya.
        </li>
        <li>
          <strong>Ortiqcha qatlamlar yo&apos;q:</strong> reseller-of-reseller modeli ishlatilmaydi.
          Uzgets to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram bilan ishlaydi.
        </li>
      </ul>

      <h2 id="paketlar-narxi">Uzgets&apos;da Premium tariflari va oyiga to&apos;g&apos;ri keladigan narx</h2>
      <p>
        Uzgets&apos;da uch tarif mavjud — uzoq muddat tanlasangiz, oyiga arzonroq:
      </p>
      <UzgetsPriceTable lang="uz" />
      <p>
        12 oylik tarif — eng tejamli: oyiga atigi {formatUzs(PREMIUM_12M.perMonthHint)}. 3 oylikga
        nisbatan oyiga {formatUzs(PREMIUM_3M.perMonthHint - PREMIUM_12M.perMonthHint)} arzon. Yiliga
        umumiy tejov {formatUzs((PREMIUM_3M.perMonthHint - PREMIUM_12M.perMonthHint) * 12)} so&apos;mni
        tashkil etadi (3 oylik bilan solishtirganda).
      </p>

      <InlineBotCTA lang="uz" text="Uzoq muddat tanlasangiz, oyiga 34 000 so'mdan boshlab. Botda buyurtma bering." />

      <h2 id="qanday-sotib-olinadi">168 000 so&apos;mga 3 oylik Premium qanday sotib olinadi?</h2>
      <ol>
        <li>
          Telegram&apos;da{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          ni oching va START tugmasini bosing.
        </li>
        <li>Asosiy menyudan &quot;💎 Premium&quot; bo&apos;limini tanlang.</li>
        <li>Muddatni tanlang: 3 oy / 6 oy / 12 oy.</li>
        <li>
          Premium qaysi akkauntga biriktirilishini ko&apos;rsating — o&apos;zingiz yoki
          sovg&apos;a sifatida @username.
        </li>
        <li>UzCard, Humo, Click yoki Payme orqali to&apos;lang.</li>
        <li>
          Telegram Premium avtomatik faollashadi (odatda bir necha daqiqada). Faollashtirish
          jarayoni haqida:{' '}
          <Link href="/uz/blog/telegram-premium-qanday-faollashtiriladi" className="text-[var(--primary)] hover:underline">
            qanday faollashtiriladi
          </Link>
          .
        </li>
      </ol>

      <h2 id="qaysi-tarif">Qaysi tarif arzon va kimga mos?</h2>
      <ul>
        <li>
          <strong>3 oylik ({formatUzs(PREMIUM_3M.priceUzs)}, oyiga ~{formatUzs(PREMIUM_3M.perMonthHint)}):</strong>{' '}
          Premium&apos;ni sinab ko&apos;rmoqchilar uchun. Eng kichik kirish narxi, lekin oyiga
          eng yuqori.
        </li>
        <li>
          <strong>6 oylik ({formatUzs(PREMIUM_6M.priceUzs)}, oyiga ~{formatUzs(PREMIUM_6M.perMonthHint)}):</strong>{' '}
          Eng mashhur tarif. Tejash va moslashuvchanlik o&apos;rtasidagi balans — yarim yildan
          keyin holatni qayta baholash mumkin.
        </li>
        <li>
          <strong>12 oylik ({formatUzs(PREMIUM_12M.priceUzs)}, oyiga ~{formatUzs(PREMIUM_12M.perMonthHint)}):</strong>{' '}
          Eng tejamli — Premium&apos;ni doimiy ishlatadiganlar uchun. Bir martalik to&apos;lov,
          12 oy davomida narx kafolati.
        </li>
      </ul>

      <InlineBotCTA lang="uz" text="O'zingizga mos tarifni tanlang — botda buyurtmangizni rasmiylashtiring." />

      <h2 id="aldanmaslik">Arzon Premium sotib olishda aldanmaslik uchun 3 ta belgi</h2>
      <ol>
        <li>
          <strong>Akkaunt parolini so&apos;ramaydi.</strong> Premium uchun faqat @username yetarli.
          Parol, kod yoki sessiya ulashish so&apos;ralsa — bu firibgarlik.
        </li>
        <li>
          <strong>Mahalliy to&apos;lov tizimi orqali to&apos;g&apos;ridan-to&apos;g&apos;ri.</strong>{' '}
          UzCard/Humo/Click/Payme tizimga ulangan, &quot;shaxsiy karta&quot;ga emas. Shaxsiy
          kartaga so&apos;raydigan sotuvchi rasmiy emas.
        </li>
        <li>
          <strong>Avtomatik tasdiq.</strong> Buyurtma operator orqali emas, bot ichida o&apos;zi
          ishlanadi. Telegram&apos;ning rasmiy gift mexanizmi orqali Premium akkauntga
          biriktiriladi — bu uzgets uchun ham, boshqa qonuniy reseller uchun ham bir xil.
        </li>
      </ol>
      <p>
        Bu uch mezon uzgets&apos;da to&apos;liq mavjud — shuning uchun arzon va ishonchli birga
        keladi.
      </p>

      <h2 id="muddat-kafolati">Narx kafolati va muddat ichida o&apos;zgarish bormi?</h2>
      <p>
        To&apos;lov bir martalik amalga oshiriladi va paket muddati davomida hech qanday
        qo&apos;shimcha to&apos;lov olinmaydi. Telegram tomonidan Premium narxi global o&apos;zgarsa
        ham, sizning sotib olgan obunangizga ta&apos;sir qilmaydi — muddat tugaguncha to&apos;liq
        amal qiladi.
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Eng arzon va ishonchli — Uzgets botida Premium buyurtmangizni rasmiylashtiring." />

      <h2 id="muhim-eslatma">Muhim eslatmalar</h2>
      <ul>
        <li>
          Bu sahifadagi raqobatchi narxlari 2026-yil may holatiga taalluqli; Uzgets bozorni xolisona
          kuzatib boradi va o&apos;zgarish bo&apos;lsa sahifa yangilanadi.
        </li>
        <li>
          Apple/Google ilova ichidagi xarid va Fragment xorijiy karta yoki crypto talab qilgani
          uchun taqqoslamadan tashqarida.
        </li>
        <li>
          Telegram Premium&apos;ni{' '}
          <Link href="/uz/blog/telegram-stars-ozbekistondan-sotib-olish" className="text-[var(--primary)] hover:underline">
            bot orqali sotib olish jarayoni
          </Link>{' '}
          Stars uchun ham, Premium uchun ham bir xil arxitekturada ishlaydi.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="kim-eng-arzon">Кто продаёт Telegram Premium дешевле всего в Узбекистане?</h2>
      <p>
        Среди сервисов с оплатой локальной картой (UzCard, Humo, Click, Payme){' '}
        <strong>Uzgets — самый дешёвый</strong>: 3 месяца — {formatUzs(PREMIUM_3M.priceUzs)}, около{' '}
        {formatUzs(PREMIUM_3M.perMonthHint)} в месяц. Полное сравнение по 3-месячному тарифу:
      </p>
      <ComparisonTable lang="ru" />
      <p>
        Разница со StarsJoy — 4 000 сум, с другими ботами — 2 000–12 000 сум. На первый взгляд
        немного, но за 12 месяцев это экономия{' '}
        <strong>16 000–48 000 сум</strong>.
      </p>

      <InlineBotCTA lang="ru" text="3 месяца Premium за 168 000 сум — оформите заказ в боте." />

      <h2 id="fragment-app-store">Почему Apple Pay и @PremiumBot не входят в сравнение?</h2>
      <p>
        Telegram Premium официально можно купить тремя путями — но из Узбекистана они на практике
        недоступны:
      </p>
      <ul>
        <li>
          <strong>Apple App Store / Google Play (in-app):</strong> оплата через Apple Pay или
          Google Pay. Эти системы не принимают узбекские карты UzCard и Humo. Нужна зарубежная
          карта (Visa/Mastercard).
        </li>
        <li>
          <strong>@PremiumBot</strong> — официальный бот Telegram. Оплата всё равно проходит через
          слой Apple/Google, требование зарубежной карты не снимается.
        </li>
        <li>
          <strong>Fragment</strong> для Premium принимает TON-крипто или перенаправляет в
          @PremiumBot. UzCard/Humo и здесь не работают.
        </li>
      </ul>
      <p>
        Поэтому корректное сравнение «самый дешёвый в Узбекистане» — между сервисами, которые
        принимают локальные карты.
      </p>

      <h2 id="qanday-arzon">Как Uzgets держит самую низкую цену</h2>
      <ul>
        <li>
          <strong>Автоматизация процесса:</strong> бот после оплаты сам отправляет запрос подписки
          напрямую в Telegram — без операторов и ручных шагов. Это снижает себестоимость.
        </li>
        <li>
          <strong>Прямое подключение к локальным платёжным системам:</strong> UzCard, Humo, Click,
          Payme — у каждой минимальная комиссия.
        </li>
        <li>
          <strong>Без лишних слоёв:</strong> модель reseller-of-reseller не используется. Uzgets
          работает напрямую с Telegram.
        </li>
      </ul>

      <h2 id="paketlar-narxi">Тарифы Premium и цена в месяц</h2>
      <p>В Uzgets три тарифа — чем длиннее, тем дешевле в месяц:</p>
      <UzgetsPriceTable lang="ru" />
      <p>
        12-месячный тариф — самый выгодный: всего {formatUzs(PREMIUM_12M.perMonthHint)} в месяц.
        Это на {formatUzs(PREMIUM_3M.perMonthHint - PREMIUM_12M.perMonthHint)} в месяц меньше, чем
        3-месячный. За год экономия —{' '}
        {formatUzs((PREMIUM_3M.perMonthHint - PREMIUM_12M.perMonthHint) * 12)} сум по сравнению с
        тарифом на 3 месяца.
      </p>

      <InlineBotCTA lang="ru" text="Длинный тариф — от 34 000 сум в месяц. Оформите заказ в боте." />

      <h2 id="qanday-sotib-olinadi">Как купить 3-месячный Premium за 168 000 сум?</h2>
      <ol>
        <li>
          Откройте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          в Telegram и нажмите START.
        </li>
        <li>В главном меню выберите &quot;💎 Premium&quot;.</li>
        <li>Выберите срок: 3 месяца / 6 месяцев / 12 месяцев.</li>
        <li>
          Укажите аккаунт, на который зачислить Premium — свой или @username получателя для подарка.
        </li>
        <li>Оплатите через UzCard, Humo, Click или Payme.</li>
        <li>
          Telegram Premium активируется автоматически (обычно за пару минут). Подробнее о процессе
          активации:{' '}
          <Link href="/ru/blog/telegram-premium-qanday-faollashtiriladi" className="text-[var(--primary)] hover:underline">
            как активируется
          </Link>
          .
        </li>
      </ol>

      <h2 id="qaysi-tarif">Какой тариф выбрать?</h2>
      <ul>
        <li>
          <strong>3 месяца ({formatUzs(PREMIUM_3M.priceUzs)}, ~{formatUzs(PREMIUM_3M.perMonthHint)}/мес):</strong>{' '}
          для тех, кто пробует Premium. Самая низкая стартовая цена, но самая высокая в пересчёте
          на месяц.
        </li>
        <li>
          <strong>6 месяцев ({formatUzs(PREMIUM_6M.priceUzs)}, ~{formatUzs(PREMIUM_6M.perMonthHint)}/мес):</strong>{' '}
          самый популярный. Баланс между экономией и гибкостью — после полугода можно
          переоценить ситуацию.
        </li>
        <li>
          <strong>12 месяцев ({formatUzs(PREMIUM_12M.priceUzs)}, ~{formatUzs(PREMIUM_12M.perMonthHint)}/мес):</strong>{' '}
          самый выгодный — для тех, кто пользуется Premium регулярно. Один платёж, гарантия цены
          на 12 месяцев.
        </li>
      </ul>

      <InlineBotCTA lang="ru" text="Выберите подходящий тариф — оформите заказ в боте." />

      <h2 id="aldanmaslik">3 признака надёжного дешёвого продавца Premium</h2>
      <ol>
        <li>
          <strong>Не запрашивает пароль аккаунта.</strong> Для Premium достаточно @username. Если
          просят пароль, код или передачу сессии — это мошенничество.
        </li>
        <li>
          <strong>Оплата напрямую через локальные системы.</strong> UzCard/Humo/Click/Payme
          подключены к платформе, а не «личная карта». Если просят перевод на личную карту —
          продавец нелегальный.
        </li>
        <li>
          <strong>Автоматическое подтверждение.</strong> Заказ обрабатывается ботом, а не
          оператором. Premium зачисляется через официальный gift-механизм Telegram — это работает
          одинаково для Uzgets и любого другого легального реселлера.
        </li>
      </ol>
      <p>
        Все три условия выполняются в Uzgets — поэтому «дёшево» здесь идёт вместе с «надёжно».
      </p>

      <h2 id="muddat-kafolati">Гарантия цены и возможные изменения внутри срока</h2>
      <p>
        Оплата разовая — внутри срока подписки никаких дополнительных списаний не будет. Даже если
        Telegram изменит цены Premium на глобальном уровне, ваша подписка действует до конца
        срока без изменений.
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Самое дешёвое и надёжное предложение — оформите Premium в боте." />

      <h2 id="muhim-eslatma">Важные замечания</h2>
      <ul>
        <li>
          Цены конкурентов — на май 2026 года. Uzgets отслеживает рынок и обновляет страницу при
          изменениях.
        </li>
        <li>
          Apple/Google in-app и Fragment требуют зарубежную карту или крипто — поэтому не
          участвуют в сравнении.
        </li>
        <li>
          Покупка Premium через бот{' '}
          <Link href="/ru/blog/telegram-stars-ozbekistondan-sotib-olish" className="text-[var(--primary)] hover:underline">
            работает по той же архитектуре
          </Link>
          , что и покупка Stars.
        </li>
      </ul>
    </>
  )
}

const TODAY = '2026-05-07'

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'comparison',
  locales: {
    uz: {
      title: "Eng arzon Telegram Premium O'zbekistonda — 3 oylik 168 000 so'm",
      description:
        "O'zbekistonda mahalliy karta bilan Telegram Premium sotib olish uchun eng arzon variant — Uzgets, 3 oylik 168 000 so'm. StarsJoy va boshqa botlar bilan to'liq taqqoslama.",
      metaTitle: "Eng arzon Telegram Premium O'zbekistonda — 3 oylik 168 000 so'm",
      metaDescription:
        "Telegram Premium eng arzon — Uzgets'da 3 oylik 168 000 so'm. StarsJoy 172 000, boshqa botlar 170–180 000. UzCard/Humo/Click/Payme bilan to'lov, viza kerak emas.",
      ogDescription:
        "O'zbekistonda eng arzon Telegram Premium — Uzgets, 3 oylik 168 000 so'm. Raqobatchilar bilan taqqoslama.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "O'zbekistonda eng arzon Telegram Premium qaerda?",
          answer: `Mahalliy karta (UzCard, Humo, Click, Payme) bilan to'lash mumkin bo'lgan xizmatlar orasida — Uzgets'da. 3 oylik ${formatUzs(PREMIUM_3M.priceUzs)}, oyiga taxminan ${formatUzs(PREMIUM_3M.perMonthHint)}. Raqobatchi StarsJoy'da 3 oylik 172 000 so'm, boshqa botlarda 170 000–180 000 so'm.`,
        },
        {
          question: 'Apple Pay yoki Visa orqali Premium arzonroq emasmi?',
          answer:
            "Apple/Google ichidagi xarid va @PremiumBot xorijiy karta talab qiladi — UzCard yoki Humo bu tizimlarda ishlamaydi. Visa/Mastercard egasi bo'lsangiz, Apple App Store narxi mintaqaga qarab o'zgaradi (ko'pchilik mintaqada o'rta-yuqori). O'zbek mahalliy karta egasi uchun bu yo'l mavjud emas.",
        },
        {
          question: '6 oylik va 12 oylik tariflar uchun raqobatchilar bilan farq qancha?',
          answer: `Uzgets'da 6 oylik ${formatUzs(PREMIUM_6M.priceUzs)} (oyiga ${formatUzs(PREMIUM_6M.perMonthHint)}), 12 oylik ${formatUzs(PREMIUM_12M.priceUzs)} (oyiga ${formatUzs(PREMIUM_12M.perMonthHint)}). 3 oylik tarifda Uzgets eng past ko'rsatkich bo'lgani uchun, uzoq tariflarda ham proportsional ravishda eng arzon. Konkret raqobatchi narxlarini kuzatib boramiz va sahifani yangilab turamiz.`,
        },
        {
          question: 'Qaysi tarifda eng ko\'p tejov?',
          answer: `12 oylik tarifda. Oyiga ${formatUzs(PREMIUM_12M.perMonthHint)} — bu 3 oyliknikidan ${formatUzs(PREMIUM_3M.perMonthHint - PREMIUM_12M.perMonthHint)} arzon. Yiliga umumiy tejov ${formatUzs((PREMIUM_3M.perMonthHint - PREMIUM_12M.perMonthHint) * 12)} so'm bo'ladi (3 oylik bilan solishtirganda).`,
        },
        {
          question: 'Premium narxi muddati davomida o\'zgaradimi?',
          answer:
            "Yo'q. To'lov bir martalik amalga oshiriladi va paket muddati davomida hech qanday qo'shimcha to'lov olinmaydi. Telegram global narxlarni o'zgartirsa ham, sizning sotib olgan obunangizga ta'sir qilmaydi.",
        },
        {
          question: 'Premium qancha vaqtda faollashadi?',
          answer:
            "Odatda to'lov tasdiqlanganidan so'ng bir necha daqiqada. Telegram avtomatik biriktiradi — qo'lda biror amal kerak emas. Faollashtirish jarayoni haqida alohida qo'llanma /uz/blog/telegram-premium-qanday-faollashtiriladi sahifasida.",
        },
        {
          question: 'Sovg\'a sifatida arzon Premium yuborib bo\'ladimi?',
          answer:
            "Ha. Buyurtma vaqtida o'zingiz xohlagan Telegram foydalanuvchisining @username'ini kiriting — Premium to'g'ridan-to'g'ri uning akkauntiga biriktiriladi. Narx o'zingizga olganidagi bilan bir xil.",
        },
      ],
      finalCtaHeading: "Eng arzon narxda Premium sotib olishga tayyormisiz?",
      finalCtaBody:
        "Botga kiring, kerakli muddatni tanlang va mahalliy karta orqali to'lang. Premium akkauntga avtomatik biriktiriladi.",
    },
    ru: {
      title: 'Самый дешёвый Telegram Premium в Узбекистане — 3 месяца за 168 000 сум',
      description:
        'Самый дешёвый способ купить Telegram Premium локальной картой в Узбекистане — Uzgets, 3 месяца за 168 000 сум. Полное сравнение со StarsJoy и другими ботами.',
      metaTitle: 'Самый дешёвый Telegram Premium в Узбекистане — 3 месяца за 168 000 сум',
      metaDescription:
        'Telegram Premium дёшево — в Uzgets 3 месяца за 168 000 сум. StarsJoy 172 000, другие боты 170–180 000. Оплата UzCard/Humo/Click/Payme — без Visa.',
      ogDescription:
        'Самый дешёвый Telegram Premium в Узбекистане — Uzgets, 3 месяца за 168 000 сум. Сравнение с конкурентами.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Где в Узбекистане самый дешёвый Telegram Premium?',
          answer: `Среди сервисов с оплатой локальной картой (UzCard, Humo, Click, Payme) — в Uzgets. 3 месяца — ${formatUzs(PREMIUM_3M.priceUzs)}, около ${formatUzs(PREMIUM_3M.perMonthHint)} в месяц. У StarsJoy 3 месяца — 172 000 сум, у других ботов — 170 000–180 000.`,
        },
        {
          question: 'Не дешевле ли Premium через Apple Pay или Visa?',
          answer:
            'Встроенная покупка Apple/Google и @PremiumBot требуют зарубежную карту — UzCard и Humo в этих системах не работают. Для владельца зарубежной Visa/Mastercard цена App Store зависит от региона (в среднем выше). Для пользователя локальной узбекской карты этот путь недоступен.',
        },
        {
          question: 'А разница на 6 и 12 месяцев?',
          answer: `В Uzgets 6 месяцев — ${formatUzs(PREMIUM_6M.priceUzs)} (${formatUzs(PREMIUM_6M.perMonthHint)}/мес), 12 месяцев — ${formatUzs(PREMIUM_12M.priceUzs)} (${formatUzs(PREMIUM_12M.perMonthHint)}/мес). Поскольку Uzgets самый дешёвый на 3-месячном тарифе, и на длинных тарифах он остаётся самым низким. Цены конкурентов отслеживаем и обновляем страницу.`,
        },
        {
          question: 'На каком тарифе максимальная экономия?',
          answer: `На 12-месячном. ${formatUzs(PREMIUM_12M.perMonthHint)} в месяц — это на ${formatUzs(PREMIUM_3M.perMonthHint - PREMIUM_12M.perMonthHint)} меньше, чем при 3-месячной оплате. За год экономия — ${formatUzs((PREMIUM_3M.perMonthHint - PREMIUM_12M.perMonthHint) * 12)} сум по сравнению с тарифом на 3 месяца.`,
        },
        {
          question: 'Цена меняется внутри срока подписки?',
          answer:
            'Нет. Оплата разовая, и в течение срока никаких дополнительных списаний не будет. Даже если Telegram изменит глобальные цены Premium, ваша подписка действует до конца срока без изменений.',
        },
        {
          question: 'Через сколько активируется Premium?',
          answer:
            'Обычно через несколько минут после подтверждения оплаты. Telegram зачисляет автоматически — никаких ручных шагов не нужно. Подробнее об активации — на странице /ru/blog/telegram-premium-qanday-faollashtiriladi.',
        },
        {
          question: 'Можно ли подарить дешёвый Premium кому-то другому?',
          answer:
            'Да. При оформлении заказа укажите @username нужного пользователя — Premium зачислится напрямую на его аккаунт. Цена такая же, как для покупки себе.',
        },
      ],
      finalCtaHeading: 'Готовы купить Premium по самой низкой цене?',
      finalCtaBody:
        'Зайдите в бот, выберите нужный срок и оплатите локальной картой. Premium активируется автоматически.',
    },
  },
}
