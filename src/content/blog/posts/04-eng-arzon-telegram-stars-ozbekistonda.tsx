import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_BASE, STARS_PACKS } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'eng-arzon-telegram-stars-ozbekistonda'

const FEATURED_AMOUNTS = [50, 100, 500, 1000, 2500, 5000]

type Competitor = {
  name: string
  pricePer50: number
  pricePerStar: number
  paymentNote: { uz: string; ru: string }
}

const COMPETITORS: Competitor[] = [
  {
    name: 'Uzgets',
    pricePer50: STARS_BASE.priceUzs,
    pricePerStar: Math.round(STARS_BASE.priceUzs / STARS_BASE.amount),
    paymentNote: {
      uz: 'UzCard / Humo / Click / Payme',
      ru: 'UzCard / Humo / Click / Payme',
    },
  },
  {
    name: 'StarsJoy',
    pricePer50: 12_000,
    pricePerStar: 240,
    paymentNote: {
      uz: 'Mahalliy karta',
      ru: 'Локальная карта',
    },
  },
  {
    name: 'Boshqa botlar va ilovalar',
    pricePer50: 14_000,
    pricePerStar: 280,
    paymentNote: {
      uz: '14 000 – 18 000 so‘m oralig‘ida',
      ru: 'диапазон 14 000 – 18 000 сум',
    },
  },
]

function UzAnswerBox() {
  return (
    <p>
      O&apos;zbekistondan mahalliy karta bilan (UzCard, Humo, Click, Payme) to&apos;lab Telegram
      Stars sotib olish mumkin bo&apos;lgan xizmatlar orasida{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      eng arzon. Asos paket — 50 ⭐{' '}
      <strong>{formatUzs(STARS_BASE.priceUzs)}</strong> (har Stars taxminan 220 so&apos;m). Yaqin
      raqobatchi StarsJoy&apos;da 50 ⭐ 12 000 so&apos;m, boshqa ilova/botlarda esa 14 000–18 000
      so&apos;m. Fragment va Apple/Google ichidagi xarid texnik jihatdan arzonroq, lekin ular
      O&apos;zbek karta qabul qilmaydi — shuning uchun amaliy taqqoslamada ishtirok etmaydi. Narx
      barcha paketlarga proportsional qo&apos;llaniladi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Среди сервисов, где из Узбекистана можно купить Telegram Stars локальной картой (UzCard,
      Humo, Click, Payme),{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      — самый дешёвый. Базовый пакет — 50 ⭐{' '}
      <strong>{formatUzs(STARS_BASE.priceUzs)}</strong> (около 220 сум за звезду). У ближайшего
      конкурента StarsJoy 50 ⭐ — 12 000 сум, у других ботов и приложений — 14 000–18 000 сум.
      Fragment и встроенная покупка Apple/Google технически дешевле, но они не принимают узбекские
      карты — поэтому в практическое сравнение не входят. Цена пропорциональна ко всем пакетам.
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
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? '50 ⭐ narxi' : 'Цена 50 ⭐'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Har ⭐' : 'За ⭐'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? "To'lov" : 'Оплата'}</th>
          </tr>
        </thead>
        <tbody>
          {COMPETITORS.map((c) => {
            const isUzgets = c.name === 'Uzgets'
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
                <td className="px-4 py-2">{formatUzs(c.pricePer50)}{c.name.startsWith('Boshqa') || c.name.startsWith('Другие') ? '+' : ''}</td>
                <td className="px-4 py-2">~{formatNumber(c.pricePerStar)} {lang === 'uz' ? "so'm" : 'сум'}</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">{c.paymentNote[lang]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function PriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Miqdor' : 'Количество'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Uzgets narxi' : 'Цена в Uzgets'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Sahifa' : 'Страница'}</th>
          </tr>
        </thead>
        <tbody>
          {FEATURED_AMOUNTS.map((amount) => {
            const pack = STARS_PACKS.find((p) => p.amount === amount)
            if (!pack) return null
            return (
              <tr key={pack.slug} className="border-t border-[var(--border)]">
                <td className="px-4 py-2 font-medium">{formatNumber(pack.amount)} ⭐</td>
                <td className="px-4 py-2">{formatUzs(pack.priceUzs)}</td>
                <td className="px-4 py-2">
                  <Link href={localePath(lang, `/stars/${pack.slug}`)} className="text-[var(--primary)] hover:underline">
                    {lang === 'uz' ? "Batafsil →" : 'Подробнее →'}
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

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{lang === 'uz' ? 'Manbalar' : 'Источники'}</div>
      <ul className="space-y-1 text-[var(--text-muted)]">
        <li>
          <a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/telegram-stars
          </a>{' '}
          — {lang === 'uz' ? "Stars rasmiy e'lon" : 'официальный анонс Stars'}
        </li>
        <li>
          <a href="https://fragment.com/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            fragment.com/stars
          </a>{' '}
          — {lang === 'uz' ? 'Fragment Stars sahifasi (TON to‘lovlari, mahalliy karta qabul qilmaydi)' : 'страница Fragment Stars (оплата TON, локальные карты не принимаются)'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/stars
          </a>{' '}
          — {lang === 'uz' ? 'texnik hujjat' : 'техническая документация'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Raqobatchi narxlari 2026-yil may holatiga ko'ra qo'lda taqqoslangan; yangilanishlar bo'lsa sahifa qayta ko'rib chiqiladi."
          : 'Цены конкурентов сверены вручную на май 2026 года; при изменениях страница будет обновлена.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="kim-eng-arzon">O&apos;zbekistonda Telegram Stars eng arzon kim?</h2>
      <p>
        Mahalliy karta bilan to&apos;lab Stars sotib olish mumkin bo&apos;lgan xizmatlar orasida{' '}
        <strong>Uzgets eng arzon</strong> — 50 ⭐ {formatUzs(STARS_BASE.priceUzs)}. Bu narx 50 dan
        boshlab barcha paketlarga proportsional qo&apos;llaniladi: har Stars taxminan{' '}
        <strong>220 so&apos;m</strong>.
      </p>
      <ComparisonTable lang="uz" />
      <p>
        Yaqin raqobatchi StarsJoy&apos;da o&apos;sha 50 ⭐ — 12 000 so&apos;m. Farq 1 000
        so&apos;m kichik tuyulishi mumkin, ammo 1 000 ta Stars sotib olganda farq{' '}
        <strong>20 000 so&apos;m</strong>ga yetadi. Boshqa ilova va botlarda 50 ⭐ 14 000–18 000
        so&apos;m oralig&apos;ida — bu narx Uzgets&apos;dan{' '}
        <strong>30–60% qimmat</strong>.
      </p>

      <InlineBotCTA lang="uz" text="Hozir 50 ⭐ atigi 11 000 so'mga — botda buyurtmangizni rasmiylashtiring." />

      <h2 id="fragment-app-store">Nega Fragment va Apple/Google taqqoslamada yo&apos;q?</h2>
      <p>
        Texnik jihatdan eng arzon yo&apos;l —{' '}
        <a href="https://fragment.com/stars" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Fragment</a>:
        u yerda 1 000 ⭐ taxminan 8–10 dollarga keladi (TON&apos;ning bozor narxiga qarab).
        Apple/Google ilova ichidagi xarid esa 1 000 ⭐ ni ~13.5 dollarga sotadi. Lekin ikkala
        usul ham O&apos;zbekistondagi foydalanuvchi uchun amalda <strong>mavjud emas</strong>:
      </p>
      <ul>
        <li>
          <strong>Fragment</strong> — faqat TON cryptocurrency yoki Visa/Mastercard qabul qiladi.
          O&apos;zbek banklari chiqargan UzCard yoki Humo Fragment&apos;da ishlamaydi.
        </li>
        <li>
          <strong>Apple Pay / Google Pay</strong> ilova ichidagi xarid uchun — bu tizimlar ham
          O&apos;zbek mahalliy kartalarni qabul qilmaydi.
        </li>
        <li>
          <strong>@PremiumBot</strong> (Telegram&apos;ning rasmiy boti) — Telegram Stars qatlami
          uchun ham xorijiy karta talab etadi.
        </li>
      </ul>
      <p>
        Shuning uchun &quot;eng arzon&quot; deyilganda, qonuniy va amaliy taqqoslama
        O&apos;zbekistondan mahalliy karta bilan to&apos;lay olinadigan xizmatlar orasida bo&apos;lishi
        kerak — ana shu kontekstda Uzgets birinchi o&apos;rinda turadi.
      </p>

      <h2 id="qanday-arzon">Uzgets qanday qilib eng arzon — narx tarkibi</h2>
      <p>
        Uzgets&apos;ning narx ustunligi uchta omilga asoslangan:
      </p>
      <ul>
        <li>
          <strong>To&apos;g&apos;ridan-to&apos;g&apos;ri Telegram bilan integratsiya:</strong>{' '}
          buyurtma avtomatik tarzda Stars&apos;ni belgilangan akkauntga biriktiradi — qo&apos;lda
          ishlov beruvchi operator zaruriyati yo&apos;q, demak xarajat past.
        </li>
        <li>
          <strong>Mahalliy to&apos;lov tizimlari bilan to&apos;g&apos;ridan-to&apos;g&apos;ri
          ulanish:</strong> UzCard, Humo, Click, Payme — har biri kichik komissiya bilan, valuta
          aylanmasi uchun qo&apos;shimcha qatlam yo&apos;q.
        </li>
        <li>
          <strong>Yagona narx mantig&apos;i:</strong> har Stars uchun bir xil baho. Sun&apos;iy
          paket marketingi yoki yashirin yig&apos;im yo&apos;q — narx miqdorga to&apos;g&apos;ri
          proportsional.
        </li>
      </ul>

      <h2 id="paketlar-narxi">Uzgets&apos;da barcha paket narxlari</h2>
      <p>
        Asos: 50 ⭐ {formatUzs(STARS_BASE.priceUzs)}. Boshqa paketlar shu tarifga proportsional:
      </p>
      <PriceTable lang="uz" />
      <p>
        To&apos;liq ro&apos;yxat va har bir paket uchun alohida sahifa{' '}
        <Link href="/stars" className="font-semibold text-[var(--primary)] hover:underline">
          /stars
        </Link>{' '}
        bo&apos;limida.
      </p>

      <InlineBotCTA lang="uz" text="Kerakli paketni botda tanlang — narx avtomatik hisoblanadi." />

      <h2 id="qanday-sotib-olinadi">11 000 so&apos;mga 50 Stars qanday sotib olinadi?</h2>
      <ol>
        <li>
          Telegram&apos;da{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          ni oching va START tugmasini bosing.
        </li>
        <li>Asosiy menyudan &quot;⭐ Stars&quot; bo&apos;limini tanlang.</li>
        <li>
          Stars qaysi akkauntga biriktirilishini ko&apos;rsating — o&apos;zingiz yoki
          sovg&apos;a sifatida boshqa @username.
        </li>
        <li>50 (yoki kerakli boshqa miqdor) ni tanlang — narx avtomatik chiqadi.</li>
        <li>UzCard, Humo, Click yoki Payme orqali to&apos;lang.</li>
        <li>Bir necha daqiqada Stars akkauntga biriktiriladi.</li>
      </ol>
      <p>
        Batafsil qo&apos;llanma:{' '}
        <Link href="/blog/telegram-stars-ozbekistondan-sotib-olish" className="text-[var(--primary)] hover:underline">
          Telegram Stars O&apos;zbekistondan qanday sotib olinadi
        </Link>
        .
      </p>

      <h2 id="aldanmaslik">Arzon Stars sotib olishda aldanmaslik uchun 3 ta belgi</h2>
      <p>
        Arzon narxda Stars sotaman degan ovozlar ko&apos;p. Lekin barchasi xavfsiz emas. Quyidagi
        3 ta belgi mavjud bo&apos;lsa, sotuvchi ishonchli:
      </p>
      <ol>
        <li>
          <strong>Avtomatik bot tizimi</strong> — buyurtma operator orqali emas, bot ichida o&apos;zi
          bajariladi. Operator orqali o&apos;tadigan jarayonlarda kechikish va xato ehtimoli yuqori.
        </li>
        <li>
          <strong>To&apos;lov rasmiy mahalliy tizimlar orqali</strong> — UzCard/Humo/Click/Payme
          to&apos;g&apos;ridan-to&apos;g&apos;ri, &quot;shaxsiy karta&quot;ga emas. Shaxsiy
          kartaga so&apos;raydigan sotuvchidan ehtiyot bo&apos;ling.
        </li>
        <li>
          <strong>Akkaunt parolini so&apos;ramaydi</strong> — Stars uchun faqat @username yetarli.
          Parol, kod yoki qo&apos;shimcha qadam talab etilsa — bu firibgarlik.
        </li>
      </ol>
      <p>
        Ushbu uchchovi Uzgets&apos;da ham mavjud — shuning uchun &quot;arzon&quot; bilan
        &quot;ishonchli&quot; bir vaqtda taminlanadi.
      </p>

      <InlineBotCTA lang="uz" text="Xavfsiz va arzon — Uzgets botida buyurtmangizni rasmiylashtiring." />

      <h2 id="qaysi-paket">Qaysi paket qaysi vaziyatga arzon?</h2>
      <ul>
        <li>
          <strong>50–100 ⭐ (11 000–22 000 so&apos;m):</strong> bir-ikki bot/mini-app to&apos;lovi
          yoki kichik sovg&apos;a. Birinchi xarid uchun ham eng past kirish narxi.
        </li>
        <li>
          <strong>500 ⭐ (110 000 so&apos;m):</strong> Premium emoji obunasi yoki bir nechta paid
          media to&apos;lovi uchun. 5–10 ta kichik xarid.
        </li>
        <li>
          <strong>1 000–2 500 ⭐ (220 000–550 000 so&apos;m):</strong> faol foydalanuvchi yoki
          biznes mini-app uchun. Katta paket bilan bir buyurtmada uzoq muddat ishlatasiz.
        </li>
        <li>
          <strong>5 000+ ⭐:</strong> kanal yoki guruh moderatorlari, sovg&apos;alar tarqatuvchilar
          uchun. Har xaridda komissiya iqtisod qiladi.
        </li>
      </ul>
      <p>
        Stars haqida umumiy ma&apos;lumot:{' '}
        <Link href="/blog/telegram-stars-nima" className="text-[var(--primary)] hover:underline">
          Telegram Stars nima va nima uchun kerak
        </Link>
        .
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Eng arzon narxda Stars — botda buyurtmangizni rasmiylashtiring." />

      <h2 id="muhim-eslatma">Muhim eslatmalar</h2>
      <ul>
        <li>
          Bu sahifadagi raqobatchi narxlari 2026-yil may holatiga taalluqli; raqobatchilar narxni
          o&apos;zgartirishi mumkin — Uzgets ham narxni xolisona kuzatib boradi.
        </li>
        <li>
          Fragment va Apple/Google ichidagi xarid xorijiy karta yoki crypto talab qilgani uchun
          taqqoslamadan tashqarida — ular boshqa kontekst.
        </li>
        <li>
          Narxning past bo&apos;lishi sifat yoki xavfsizlikka ta&apos;sir qilmaydi. Stars
          to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram tomonidan akkauntga biriktiriladi —
          vositachi xizmat sifatiga emas, faqat to&apos;lov yo&apos;liga ta&apos;sir qiladi.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="kim-eng-arzon">Кто самый дешёвый по Telegram Stars в Узбекистане?</h2>
      <p>
        Среди сервисов, где можно оплатить Stars локальной картой,{' '}
        <strong>Uzgets — самый дешёвый</strong>: 50 ⭐ — {formatUzs(STARS_BASE.priceUzs)}. Эта цена
        пропорционально применяется ко всем пакетам начиная от 50: одна звезда стоит около{' '}
        <strong>220 сум</strong>.
      </p>
      <ComparisonTable lang="ru" />
      <p>
        У ближайшего конкурента StarsJoy те же 50 ⭐ — 12 000 сум. Разница в 1 000 сум кажется
        небольшой, но при покупке 1 000 звёзд она достигает <strong>20 000 сум</strong>. У других
        ботов и приложений 50 ⭐ продаются за 14 000–18 000 сум — это{' '}
        <strong>на 30–60% дороже</strong> Uzgets.
      </p>

      <InlineBotCTA lang="ru" text="50 ⭐ всего за 11 000 сум — оформите заказ в боте." />

      <h2 id="fragment-app-store">Почему Fragment и Apple/Google не входят в сравнение?</h2>
      <p>
        Технически самый дешёвый путь —{' '}
        <a href="https://fragment.com/stars" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Fragment</a>:
        там 1 000 ⭐ обходится примерно в 8–10 долларов (зависит от курса TON). Встроенная
        покупка Apple/Google продаёт 1 000 ⭐ за ~13.5 долларов. Но оба способа для пользователя
        из Узбекистана <strong>фактически недоступны</strong>:
      </p>
      <ul>
        <li>
          <strong>Fragment</strong> принимает только TON или Visa/Mastercard. Карты UzCard и Humo,
          выпущенные узбекскими банками, на Fragment не работают.
        </li>
        <li>
          <strong>Apple Pay / Google Pay</strong> для встроенной покупки тоже не принимают узбекские
          локальные карты.
        </li>
        <li>
          <strong>@PremiumBot</strong> (официальный бот Telegram) для слоя Stars также требует
          зарубежную карту.
        </li>
      </ul>
      <p>
        Поэтому когда мы говорим «самый дешёвый», корректное и практическое сравнение — между
        сервисами, где можно платить локальной картой из Узбекистана. Именно в этом контексте
        Uzgets занимает первое место.
      </p>

      <h2 id="qanday-arzon">Как Uzgets удерживает самую низкую цену</h2>
      <p>Ценовое преимущество Uzgets держится на трёх факторах:</p>
      <ul>
        <li>
          <strong>Прямая интеграция с Telegram:</strong> заказ автоматически зачисляет Stars на
          указанный аккаунт — без ручной обработки оператором, поэтому себестоимость ниже.
        </li>
        <li>
          <strong>Прямое подключение к локальным платёжным системам:</strong> UzCard, Humo, Click,
          Payme — каждая с минимальной комиссией, без дополнительного слоя валютной конвертации.
        </li>
        <li>
          <strong>Единая ценовая логика:</strong> одна цена за каждую звезду. Нет искусственного
          пакетного маркетинга или скрытых сборов — стоимость прямо пропорциональна количеству.
        </li>
      </ul>

      <h2 id="paketlar-narxi">Цены всех пакетов Uzgets</h2>
      <p>База: 50 ⭐ {formatUzs(STARS_BASE.priceUzs)}. Остальные пакеты — пропорционально:</p>
      <PriceTable lang="ru" />
      <p>
        Полный список и страница каждого пакета —{' '}
        <Link href="/ru/stars" className="font-semibold text-[var(--primary)] hover:underline">
          /ru/stars
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="Выберите пакет в боте — цена считается автоматически." />

      <h2 id="qanday-sotib-olinadi">Как купить 50 Stars за 11 000 сум?</h2>
      <ol>
        <li>
          Откройте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          в Telegram и нажмите START.
        </li>
        <li>В главном меню выберите &quot;⭐ Stars&quot;.</li>
        <li>
          Укажите аккаунт, на который зачислить Stars — свой или @username получателя для подарка.
        </li>
        <li>Выберите 50 (или другое количество) — цена покажется автоматически.</li>
        <li>Оплатите через UzCard, Humo, Click или Payme.</li>
        <li>Через несколько минут Stars зачислятся на аккаунт.</li>
      </ol>
      <p>
        Подробное руководство:{' '}
        <Link href="/ru/blog/telegram-stars-ozbekistondan-sotib-olish" className="text-[var(--primary)] hover:underline">
          Как купить Telegram Stars из Узбекистана
        </Link>
        .
      </p>

      <h2 id="aldanmaslik">3 признака надёжного продавца дешёвых Stars</h2>
      <p>Объявлений «дешёвые Stars» много — но не все безопасны. Надёжный продавец отличается так:</p>
      <ol>
        <li>
          <strong>Автоматизированный бот</strong> — заказ выполняется внутри бота, а не вручную
          оператором. В операторских процессах выше риск задержек и ошибок.
        </li>
        <li>
          <strong>Оплата через официальные локальные системы</strong> — UzCard/Humo/Click/Payme
          напрямую, а не на «личную карту». Если просят оплатить на личную карту — не ваш вариант.
        </li>
        <li>
          <strong>Не запрашивает пароль аккаунта</strong> — для Stars достаточно @username.
          Если требуют пароль, код или дополнительный шаг — это мошенничество.
        </li>
      </ol>
      <p>
        Все три условия выполняются в Uzgets — поэтому «дёшево» здесь сочетается с «надёжно».
      </p>

      <InlineBotCTA lang="ru" text="Безопасно и дёшево — оформите заказ в боте Uzgets." />

      <h2 id="qaysi-paket">Какой пакет выбрать с учётом цены?</h2>
      <ul>
        <li>
          <strong>50–100 ⭐ (11 000–22 000 сум):</strong> одна-две оплаты в боте/mini-app или
          небольшой подарок. Самый низкий порог входа.
        </li>
        <li>
          <strong>500 ⭐ (110 000 сум):</strong> подписка на премиум-эмодзи или несколько paid
          media. 5–10 небольших оплат.
        </li>
        <li>
          <strong>1 000–2 500 ⭐ (220 000–550 000 сум):</strong> активный пользователь или бизнес
          mini-app. Один заказ — на длительный период.
        </li>
        <li>
          <strong>5 000+ ⭐:</strong> модераторы каналов и групп, организаторы розыгрышей. Экономит
          комиссии при каждой покупке.
        </li>
      </ul>
      <p>
        Общая информация о Stars:{' '}
        <Link href="/ru/blog/telegram-stars-nima" className="text-[var(--primary)] hover:underline">
          Что такое Telegram Stars и зачем они нужны
        </Link>
        .
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Самая низкая цена на Stars — оформите заказ в боте." />

      <h2 id="muhim-eslatma">Важные замечания</h2>
      <ul>
        <li>
          Цены конкурентов на этой странице — на май 2026 года. Конкуренты могут менять стоимость;
          Uzgets отслеживает рынок объективно.
        </li>
        <li>
          Fragment и встроенная покупка Apple/Google требуют зарубежную карту или крипто — это
          другой контекст и в наше сравнение не входит.
        </li>
        <li>
          Низкая цена не влияет на качество и безопасность. Stars зачисляются напрямую от Telegram
          на аккаунт — посредник влияет только на способ оплаты, а не на сам продукт.
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
      title: "Eng arzon Telegram Stars O'zbekistonda 2026 — narx taqqoslama",
      description:
        "O'zbekistonda mahalliy karta bilan Telegram Stars sotib olish uchun eng arzon variant — Uzgets, 50 ⭐ 11 000 so'm. StarsJoy va boshqa botlar bilan to'liq narx taqqoslamasi.",
      metaTitle: "Eng arzon Telegram Stars O'zbekistonda — 50 ⭐ 11 000 so'm",
      metaDescription:
        "Telegram Stars eng arzon narxda — Uzgets'da 50 ⭐ 11 000 so'm. StarsJoy 12 000, boshqa botlar 14–18 000. UzCard/Humo/Click/Payme bilan, mahalliy karta orqali.",
      ogDescription:
        "O'zbekistonda eng arzon Telegram Stars — Uzgets, 50 ⭐ 11 000 so'm. Raqobatchilar bilan to'liq taqqoslama.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "O'zbekistonda eng arzon Telegram Stars qaerdan?",
          answer:
            "Mahalliy karta (UzCard, Humo, Click, Payme) bilan to'lash mumkin bo'lgan xizmatlar orasida — Uzgets. 50 ⭐ 11 000 so'm, har Stars taxminan 220 so'm. StarsJoy'da 50 ⭐ 12 000, boshqa botlar/ilovalarda 14 000–18 000 so'm.",
        },
        {
          question: 'Fragment Uzgetsdan arzon emasmi?',
          answer:
            "Texnik jihatdan ha — Fragment'da 1 000 Stars taxminan 8–10 dollar (TON narxiga qarab). Lekin Fragment faqat TON crypto yoki xorijiy Visa/Mastercard qabul qiladi. UzCard yoki Humo Fragment'da ishlamaydi, shuning uchun amaliy taqqoslamada o'rin yo'q.",
        },
        {
          question: "Apple Pay yoki Google Pay orqali Stars'ni arzonroq olib bo'ladimi?",
          answer:
            "Apple/Google ilova ichidagi xarid 1 000 Stars'ni ~13.5 dollarga sotadi (~170 000 so'm). Lekin UzCard/Humo bu tizimlarda qabul qilinmaydi — xorijiy karta kerak. Mahalliy karta egasi uchun bu yo'l mavjud emas.",
        },
        {
          question: 'Eng kichik miqdor qancha?',
          answer:
            "50 ⭐ — 11 000 so'm. Bundan kam buyurtma berib bo'lmaydi: bu Telegram tomonidan o'rnatilgan minimal chegara, hech bir vositachi xizmat undan kichik paketni sotmaydi.",
        },
        {
          question: '1 000 yoki 5 000 ta Stars sotib olganda farq qancha?',
          answer:
            "Uzgets'da 1 000 ⭐ — 220 000 so'm, 5 000 ⭐ — 1 100 000 so'm. StarsJoy'da bir Stars 240 so'm bo'lgani uchun 1 000 ⭐ 240 000 (farq 20 000), 5 000 ⭐ 1 200 000 (farq 100 000). Boshqa botlarda farq yana ko'p bo'ladi.",
        },
        {
          question: 'Arzon Stars sotib olganda xavf bormi?',
          answer:
            "Stars to'g'ridan-to'g'ri Telegram tomonidan akkauntga biriktiriladi — vositachi narxni emas, faqat to'lov yo'lini ta'minlaydi. Shuning uchun arzon narx mahsulot sifatiga ta'sir qilmaydi. Asosiy mezon — sotuvchi avtomatlashtirilgan, mahalliy to'lov tizimlari bilan ishlasin va parol so'ramasin.",
        },
        {
          question: 'StarsJoy va Uzgets bir-biriga raqibmi?',
          answer:
            "Ha, har ikkala xizmat ham O'zbekistonda mahalliy karta bilan Stars/Premium sotadi. 2026-yil may holatiga ko'ra Uzgets narxi (50 ⭐ 11 000 so'm) StarsJoy'dan (12 000 so'm) past. Raqobatchining narxi o'zgarsa sahifa yangilanadi.",
        },
      ],
      finalCtaHeading: "Eng arzon narxda Stars sotib olishga tayyormisiz?",
      finalCtaBody:
        "Botga kiring, kerakli miqdorni tanlang va mahalliy karta orqali to'lang. Stars akkauntga avtomatik biriktiriladi.",
    },
    ru: {
      title: 'Самые дешёвые Telegram Stars в Узбекистане 2026 — сравнение цен',
      description:
        'Самый дешёвый способ купить Telegram Stars локальной картой в Узбекистане — Uzgets, 50 ⭐ за 11 000 сум. Полное сравнение с StarsJoy и другими ботами.',
      metaTitle: 'Самые дешёвые Telegram Stars в Узбекистане — 50 ⭐ за 11 000 сум',
      metaDescription:
        'Telegram Stars дёшево — в Uzgets 50 ⭐ за 11 000 сум. StarsJoy 12 000, остальные боты 14–18 000. UzCard/Humo/Click/Payme — оплата локальной картой.',
      ogDescription:
        'Самые дешёвые Telegram Stars в Узбекистане — Uzgets, 50 ⭐ за 11 000 сум. Сравнение с конкурентами.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Где в Узбекистане самые дешёвые Telegram Stars?',
          answer:
            'Среди сервисов с оплатой локальной картой (UzCard, Humo, Click, Payme) — в Uzgets. 50 ⭐ за 11 000 сум, около 220 сум за звезду. У StarsJoy 50 ⭐ — 12 000, у других ботов и приложений — 14 000–18 000.',
        },
        {
          question: 'Разве Fragment не дешевле Uzgets?',
          answer:
            'Технически да — на Fragment 1 000 Stars стоят около 8–10 долларов (в зависимости от курса TON). Но Fragment принимает только TON-криптовалюту или зарубежные Visa/Mastercard. Узбекские UzCard и Humo там не работают, поэтому в практическое сравнение Fragment не входит.',
        },
        {
          question: 'Можно ли купить Stars дешевле через Apple Pay или Google Pay?',
          answer:
            'Встроенная покупка Apple/Google продаёт 1 000 Stars примерно за 13.5 долларов (~170 000 сум). Но UzCard/Humo эти системы не принимают — нужна зарубежная карта. Для владельца локальной карты этот путь недоступен.',
        },
        {
          question: 'Какое минимальное количество?',
          answer:
            '50 ⭐ — 11 000 сум. Меньше заказать нельзя: это минимум, установленный Telegram, никакой посредник пакет меньше 50 не продаёт.',
        },
        {
          question: 'Какая разница при покупке 1 000 или 5 000 Stars?',
          answer:
            'В Uzgets 1 000 ⭐ — 220 000 сум, 5 000 ⭐ — 1 100 000 сум. У StarsJoy цена за звезду 240 сум, поэтому 1 000 ⭐ обходятся в 240 000 (разница 20 000), 5 000 ⭐ — 1 200 000 (разница 100 000). У других ботов разрыв ещё больше.',
        },
        {
          question: 'Есть ли риск при покупке дешёвых Stars?',
          answer:
            'Stars зачисляются на аккаунт напрямую от Telegram — посредник влияет на способ оплаты, а не на сам продукт. Поэтому низкая цена не сказывается на качестве. Основной критерий выбора — автоматизированный продавец, оплата через локальные системы и отсутствие запроса пароля.',
        },
        {
          question: 'StarsJoy и Uzgets — конкуренты?',
          answer:
            'Да, оба сервиса продают Stars и Premium в Узбекистане с оплатой локальной картой. На май 2026 года цена Uzgets (50 ⭐ за 11 000 сум) ниже, чем у StarsJoy (12 000 сум). При изменении цены конкурента страница будет обновлена.',
        },
      ],
      finalCtaHeading: 'Готовы купить Stars по самой низкой цене?',
      finalCtaBody:
        'Зайдите в бот, выберите количество и оплатите локальной картой. Stars зачислятся на аккаунт автоматически.',
    },
  },
}
