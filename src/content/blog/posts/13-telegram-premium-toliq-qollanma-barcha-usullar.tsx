import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-toliq-qollanma-barcha-usullar'
const TODAY = '2026-05-14'

const P3 = PREMIUM_PERIODS[0]
const P6 = PREMIUM_PERIODS[1]
const P12 = PREMIUM_PERIODS[2]

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium&apos;ni sotib olishning <strong>6 ta asosiy usuli</strong> bor: App Store
      ($4.99/oy), Google Play ($4.99/oy), Telegram&apos;ning rasmiy <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@PremiumBot</a> ($3.99/oy, asosan xorijiy kartochka),
      Fragment (TON crypto, eng arzon — ~$11.99 / 3 oy), boshqa foydalanuvchidan sovg&apos;a (Gift Premium)
      va O&apos;zbek mahalliy bot{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      orqali (UzCard/Humo/Click/Payme — <strong>{formatUzs(P3.priceUzs)} / 3 oy</strong>). O&apos;zbek banklari Visa/Mastercard
      kartalari xorijiy to&apos;lovlarni ko&apos;pincha qabul qilmaydi, shuning uchun amalda mahalliy karta egalari uchun
      mahalliy bot — yagona to&apos;g&apos;ridan-to&apos;g&apos;ri yo&apos;l.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Существует <strong>6 основных способов</strong> купить Telegram Premium: App Store ($4.99/мес.),
      Google Play ($4.99/мес.), официальный <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@PremiumBot</a> Telegram ($3.99/мес., в основном зарубежная карта),
      Fragment (TON-крипта, дешевле всего — ~$11.99 / 3 мес.), подарок от другого пользователя (Gift Premium)
      и узбекский локальный бот{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      (UzCard/Humo/Click/Payme — <strong>{formatUzs(P3.priceUzs)} / 3 мес.</strong>). Узбекские Visa/Mastercard
      обычно не пропускают зарубежные платежи, поэтому для держателей локальных карт практически единственный
      прямой путь — локальный бот.
    </p>
  )
}

function MethodsTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    method: string
    payment: { uz: string; ru: string }
    price: { uz: string; ru: string }
    uzWorks: 'yes' | 'no' | 'partial'
  }
  const rows: Row[] = [
    {
      method: 'App Store (iOS)',
      payment: { uz: 'Apple ID balansi yoki xorijiy karta', ru: 'Баланс Apple ID или зарубежная карта' },
      price: { uz: '$4.99 / oy', ru: '$4.99 / мес.' },
      uzWorks: 'no',
    },
    {
      method: 'Google Play (Android)',
      payment: { uz: 'Google Play balansi yoki xorijiy karta', ru: 'Баланс Google Play или зарубежная карта' },
      price: { uz: '$4.99 / oy', ru: '$4.99 / мес.' },
      uzWorks: 'no',
    },
    {
      method: '@PremiumBot (rasmiy)',
      payment: { uz: 'Visa / Mastercard (xorijiy)', ru: 'Visa / Mastercard (зарубежные)' },
      price: { uz: '$3.99 / oy', ru: '$3.99 / мес.' },
      uzWorks: 'no',
    },
    {
      method: 'Fragment (TON)',
      payment: { uz: 'TON crypto wallet', ru: 'TON-кошелёк (крипта)' },
      price: { uz: '~$11.99 / 3 oy (TON kursiga bog\'liq)', ru: '~$11.99 / 3 мес. (зависит от TON)' },
      uzWorks: 'partial',
    },
    {
      method: lang === 'uz' ? 'Gift Premium (sovg\'a)' : 'Gift Premium (подарок)',
      payment: { uz: 'Boshqa foydalanuvchi to\'laydi', ru: 'Платит другой пользователь' },
      price: { uz: lang === 'uz' ? '$11.99 / 3 oy (sovg\'a beruvchi to\'laydi)' : '$11.99 / 3 мес.', ru: '$11.99 / 3 мес.' },
      uzWorks: 'partial',
    },
    {
      method: `${siteConfig.bot} (O'zbekiston)`,
      payment: { uz: 'UzCard / Humo / Click / Payme', ru: 'UzCard / Humo / Click / Payme' },
      price: { uz: `${formatUzs(P3.priceUzs)} / 3 oy`, ru: `${formatUzs(P3.priceUzs)} / 3 мес.` },
      uzWorks: 'yes',
    },
  ]

  const tick = (s: 'yes' | 'no' | 'partial') => {
    if (s === 'yes') return lang === 'uz' ? '✅ Ha' : '✅ Да'
    if (s === 'no') return lang === 'uz' ? '❌ Yo\'q' : '❌ Нет'
    return lang === 'uz' ? '⚠️ Qisman' : '⚠️ Частично'
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Usul' : 'Способ'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? "To'lov" : 'Оплата'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Narx' : 'Цена'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? "O'zbekistondan ishlaydi?" : 'Работает из Узбекистана?'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.method} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{r.method}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.payment[lang]}</td>
              <td className="px-4 py-2">{r.price[lang]}</td>
              <td className="px-4 py-2">{tick(r.uzWorks)}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Bir oyga' : 'В месяц'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Sahifa' : 'Страница'}</th>
          </tr>
        </thead>
        <tbody>
          {PREMIUM_PERIODS.map((p) => (
            <tr key={p.slug} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{p.months} {lang === 'uz' ? 'oy' : 'мес.'}</td>
              <td className="px-4 py-2">{formatUzs(p.priceUzs)}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">~{formatUzs(p.perMonthHint)}</td>
              <td className="px-4 py-2">
                <Link href={localePath(lang, `/premium/${p.slug}`)} className="text-[var(--primary)] hover:underline">
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
          — {lang === 'uz' ? 'Telegram Premium rasmiy FAQ' : 'официальный FAQ Telegram Premium'}
        </li>
        <li>
          <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            t.me/PremiumBot
          </a>{' '}
          — {lang === 'uz' ? "Telegram'ning rasmiy Premium boti" : 'официальный Premium-бот Telegram'}
        </li>
        <li>
          <a href="https://fragment.com/premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            fragment.com/premium
          </a>{' '}
          — {lang === 'uz' ? 'Fragment Premium (TON marketplace)' : 'Fragment Premium (TON-маркетплейс)'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Narxlar 2026-yil may holatiga ko'ra. App Store/Google Play narxlari mintaqaviy soliqlar bilan o'zgaradi; Fragment narxi TON/USD kursiga bog'liq va kunlik tebranadi."
          : 'Цены на май 2026 года. Цены в App Store / Google Play меняются с региональными налогами; цена Fragment зависит от курса TON/USD и колеблется ежедневно.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="usullar-jadval">Telegram Premium sotib olishning 6 ta usuli — jadval</h2>
      <p>
        Quyida Premium sotib olishning barcha amaldagi usullari va ularning O&apos;zbekistondan
        amalda ishlash-ishlamasligi. Asosiy savol — qaysi to&apos;lov vositangiz bor: xorijiy
        karta, crypto, yoki O&apos;zbek karta (UzCard/Humo).
      </p>
      <MethodsTable lang="uz" />
      <p>
        Quyida har bir usulni alohida tushuntiramiz — qanday ishlaydi, qaysi to&apos;lov qabul
        qilinadi va O&apos;zbekistondan amalda ishlay oladimi.
      </p>

      <InlineBotCTA lang="uz" text="O'zbek kartangiz bo'lsa — eng to'g'ridan-to'g'ri yo'l shu bot." />

      <h2 id="app-store">1. App Store orqali (iPhone foydalanuvchilari)</h2>
      <p>
        iPhone&apos;da Telegram ilovasini ochib — <strong>Sozlamalar &gt; Telegram Premium &gt;
        Subscribe</strong> tugmasini bossangiz, App Store to&apos;lov oynasi ochiladi. Apple
        komissiyasi qo&apos;shilgan narx — <strong>$4.99/oy</strong>.
      </p>
      <ul>
        <li><strong>To&apos;lov:</strong> Apple ID balansi yoki Apple ID&apos;ga biriktirilgan karta.</li>
        <li><strong>O&apos;zbek karta:</strong> domestik UzCard/Humo&apos;ni Apple ID&apos;ga biriktirib bo&apos;lmaydi (Apple O&apos;zbekistonda Apple Pay xizmatini taqdim etmaydi). Apple ID balansini esa odatda gift card orqali to&apos;ldirish kerak.</li>
        <li><strong>Yo&apos;li:</strong> xorijiy Apple ID + xorijiy gift card → ko&apos;p qadamli va qimmat.</li>
      </ul>
      <p>
        Amalda — agar sizda ishlaydigan xorijiy Apple ID va to&apos;ldirilgan balans bo&apos;lsa
        qulay. Aks holda, mahalliy bot orqali olish ancha tezroq va arzonroq.
      </p>

      <h2 id="google-play">2. Google Play orqali (Android foydalanuvchilari)</h2>
      <p>
        Android&apos;da Telegram ilovasida <strong>Sozlamalar &gt; Telegram Premium &gt;
        Subscribe</strong> tugmasi orqali Google Play to&apos;lov ekrani ochiladi. Bu yerda
        ham Google komissiyasi qo&apos;shilgan — <strong>$4.99/oy</strong>.
      </p>
      <ul>
        <li><strong>To&apos;lov:</strong> Google Play balansi yoki Google hisobiga biriktirilgan karta.</li>
        <li><strong>O&apos;zbek karta:</strong> Google Play&apos;da O&apos;zbekiston regioni bor, lekin domestik UzCard/Humo Visa/Mastercard tarmog&apos;iga ulanmagan — bu kartalar bilan to&apos;lov o&apos;tmaydi. Co-branded UzCard-Visa/Humo-Mastercard kartalari texnik jihatdan ishlashi mumkin, lekin bank cheklovlari bilan ko&apos;p hollarda muvaffaqiyatsiz tugaydi.</li>
        <li><strong>Alternativa:</strong> xorijiy Google hisobi yoki Google Play gift card.</li>
      </ul>

      <InlineBotCTA lang="uz" text="App Store/Google Play o'tmadimi? UzCard bilan bevosita to'lang." />

      <h2 id="premium-bot">3. @PremiumBot — Telegram&apos;ning rasmiy boti</h2>
      <p>
        Telegram&apos;da <strong>@PremiumBot</strong> rasmiy bot — App Store/Google Play
        komissiyasiz to&apos;g&apos;ridan-to&apos;g&apos;ri obuna: <strong>$3.99/oy</strong>{' '}
        (App Store va Google Play narxidan past). Bot Telegram&apos;ning xalqaro to&apos;lov
        tizimi orqali ishlaydi va asosan xorijiy Visa/Mastercard (mintaqaga ko&apos;ra Apple Pay/Google Pay)
        kartalarini qabul qiladi.
      </p>
      <ul>
        <li><strong>Foydasi:</strong> Apple/Google komissiyasi yo&apos;q — App Store va Google Play&apos;dan arzonroq.</li>
        <li><strong>Kamchiligi:</strong> O&apos;zbek banklarining Visa/Mastercard kartalari ko&apos;p hollarda xorijiy savdo nuqtalarida bloklanadi yoki 3D-Secure tasdiqlashda muvaffaqiyatsiz tugaydi.</li>
      </ul>

      <h2 id="fragment">4. Fragment orqali (TON crypto)</h2>
      <p>
        <a href="https://fragment.com/premium" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Fragment.com/premium</a>{' '}
        — TON crypto orqali ishlovchi rasmiy Telegram marketplace. Bu yerda Premium narxi
        TON valyutasida ko&apos;rsatiladi va odatda eng arzon (chegirma kampaniyalari paytida
        $11.99/3 oy gacha tushadi).
      </p>
      <ul>
        <li><strong>Talab:</strong> Fragment akkaunti + TON wallet + TON crypto.</li>
        <li><strong>2024-yil noyabridan beri:</strong> Fragment majburiy shaxs tasdiqlash (KYC) kiritdi — shaxsiy hujjat va identifikatsiya jarayonidan o&apos;tish kerak.</li>
        <li><strong>O&apos;zbek karta bilan to&apos;g&apos;ridan-to&apos;g&apos;ri:</strong> ishlamaydi. TON sotib olish uchun crypto-birja yoki P2P platforma kerak — ko&apos;p qadamli.</li>
      </ul>
      <p>
        Crypto bilan tanish bo&apos;lsangiz — Fragment eng arzon. Lekin yangiboshlovchilar uchun
        bu yo&apos;l ko&apos;p texnik bilim va vaqt talab qiladi.
      </p>

      <InlineBotCTA lang="uz" text="Crypto bilan ishlash qiyinmi? Bir necha bosishda — UzCard orqali." />

      <h2 id="gift">5. Boshqa foydalanuvchidan sovg&apos;a (Gift Premium)</h2>
      <p>
        Agar tanishingiz allaqachon Premium foydalanuvchisi bo&apos;lsa — sizning profilingizdagi{' '}
        <strong>&quot;Gift Premium&quot;</strong> tugmasi orqali sovg&apos;a yuborishi mumkin
        (3, 6 yoki 12 oyga). Bu yo&apos;l ishlaydi, lekin sovg&apos;a beruvchi ham yuqoridagi
        usullardan biri orqali to&apos;laydi — ya&apos;ni muammo o&apos;rin almashtiriladi.
      </p>
      <ul>
        <li><strong>Foydasi:</strong> obuna avtomatik yangilanmaydi (faqat ko&apos;rsatilgan muddatga).</li>
        <li><strong>Kamchiligi:</strong> sovg&apos;a beruvchining to&apos;lov muammosi sizga ham tegadi.</li>
        <li><strong>Mahalliy bot ham &quot;sovg&apos;a&quot; rejimida ishlaydi:</strong> uzgets botida @username kiritib, boshqa odamga Premium sovg&apos;a qilish mumkin.</li>
      </ul>

      <h2 id="mahalliy-bot">6. O&apos;zbek mahalliy bot orqali ({siteConfig.bot})</h2>
      <p>
        O&apos;zbek karta egalari uchun amaldagi yagona to&apos;g&apos;ridan-to&apos;g&apos;ri yo&apos;l —
        mahalliy bot. <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
        Telegram Premium&apos;ni quyidagi narxlarda taqdim etadi:
      </p>
      <UzgetsPriceTable lang="uz" />
      <p>
        <strong>To&apos;lov usullari:</strong> UzCard, Humo, Click, Payme — to&apos;rttalasi ham
        bir xil narxda ishlaydi. Bot kanal komissiyalari va valyuta kursini hisobga olib so&apos;mdagi
        yakuniy summani ko&apos;rsatadi — qo&apos;shimcha to&apos;lov yo&apos;q.
      </p>
      <p>
        Jarayon: <strong>START &gt; Premium &gt; @username &gt; muddat &gt; karta tanlash</strong> —
        odatda 2-5 daqiqada akkauntga biriktiriladi.
      </p>

      <h2 id="qaysi-usul">Qaysi usulni tanlash kerak?</h2>
      <ul>
        <li><strong>Sizda xorijiy Visa/Mastercard bor</strong> → @PremiumBot eng arzon oylik rasmiy yo&apos;l ($3.99/oy).</li>
        <li><strong>Sizda faqat Apple/Google balansi bor</strong> → App Store yoki Google Play orqali ($4.99/oy).</li>
        <li><strong>Sizda TON crypto va Fragment akkaunti bor</strong> → Fragment uzoq muddatda eng arzon (chegirmali $11.99/3 oy yoki $28.99/12 oy).</li>
        <li><strong>Sizda faqat O&apos;zbek karta (UzCard/Humo/Click/Payme) bor</strong> → <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a> — amaldagi yagona to&apos;g&apos;ridan-to&apos;g&apos;ri yo&apos;l.</li>
        <li><strong>Sizga uzoq muddatli obuna kerak</strong> → 12 oylik paket ({formatUzs(P12.priceUzs)}) — oyiga ~{formatUzs(P12.perMonthHint)}.</li>
        <li><strong>Sovg&apos;a qilmoqchisiz</strong> → tanishingizning profilidagi &quot;Gift Premium&quot; tugmasi yoki uzgets botida @username kiriting.</li>
      </ul>

      <InlineBotCTA lang="uz" text="O'zbek kartangizdan to'g'ri yo'l — botda 2-5 daqiqada Premium." />

      <h2 id="narx-farqi">Nega App Store narxi ($4.99) PremiumBot narxidan ($3.99) qimmat?</h2>
      <p>
        Apple va Google ilova ichidagi sotuvlardan komissiya oladi (Apple — odatda 30%, Google —
        odatda 15%). Telegram bu komissiyani narxga qo&apos;shadi, shuning uchun App Store/Google Play&apos;da
        Premium $1 chamasi qimmat. Bu Telegram&apos;ning ayblari emas, balki ilova do&apos;konlarining
        ish modeli.
      </p>
      <p>
        Demak: <strong>iste&apos;molchi uchun App Store yo&apos;li doim ortiqcha haqdir</strong>. Agar
        sizda imkon bo&apos;lsa — har qanday boshqa yo&apos;ldan o&apos;ting.
      </p>

      <h2 id="muddat-farqi">3 oy vs 6 oy vs 12 oy — qaysi tejamli?</h2>
      <p>
        Barcha kanallarda paket qancha uzoq bo&apos;lsa shuncha arzon — oyiga narx pasayadi.
        Uzgets misolida:
      </p>
      <ul>
        <li><strong>3 oy:</strong> {formatUzs(P3.priceUzs)} → ~{formatUzs(P3.perMonthHint)}/oy</li>
        <li><strong>6 oy:</strong> {formatUzs(P6.priceUzs)} → ~{formatUzs(P6.perMonthHint)}/oy (3 oylikdan ~{Math.round((1 - P6.perMonthHint / P3.perMonthHint) * 100)}% arzon/oy)</li>
        <li><strong>12 oy:</strong> {formatUzs(P12.priceUzs)} → ~{formatUzs(P12.perMonthHint)}/oy (3 oylikdan ~{Math.round((1 - P12.perMonthHint / P3.perMonthHint) * 100)}% arzon/oy)</li>
      </ul>
      <p>
        Premium&apos;ni doimiy ishlatadiganlar uchun 12 oylik paket eng tejamli. Birinchi marta
        sinab ko&apos;ruvchilar — 3 oylikdan boshlashlari mumkin. Batafsil:{' '}
        <Link href="/premium" className="text-[var(--primary)] hover:underline">/premium</Link>{' '}
        bo&apos;limi.
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Premium tanlovingizni qildingizmi? Botda muddatni tanlang." />

      <h2 id="muhim">Sotib olishdan oldin tekshiring</h2>
      <ul>
        <li>
          <strong>@username aniq.</strong> Premium qaysi akkauntga kelishi kerak — username bilan
          aniq belgilang (masalan, @example). Telefon raqami emas — username. Sozlamalar &gt;
          Username bo&apos;limidan tasdiqlang.
        </li>
        <li>
          <strong>Rasmiy bot.</strong> t.me/uzgetsbot — o&apos;xshash nomli botlar (uzgetbot,
          uzg3tsbot) firibgar klonlar. Saytdagi tugma orqali o&apos;ting.
        </li>
        <li>
          <strong>Bot ko&apos;rsatgan summa.</strong> Bot to&apos;lov uchun aniq summani
          ko&apos;rsatadi — boshqa summa o&apos;tkazsangiz buyurtma yetkazilmaydi. Click bilan
          summa avtomatik to&apos;ldiriladi.
        </li>
        <li>
          <strong>Avtomatik yangilanish yo&apos;q.</strong> Bot orqali olingan Premium muddat
          tugagach o&apos;chadi — yangilash uchun yana bot orqali sotib olish kerak.
        </li>
        <li>
          Mavjud Premium statusingizni tekshirish:{' '}
          <Link href="/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">
            Akkauntda Premium ko&apos;rinmayapti — sabablari
          </Link>
          .
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="usullar-jadval">6 способов купить Telegram Premium — таблица</h2>
      <p>
        Ниже все актуальные способы купить Premium и работают ли они на практике из Узбекистана.
        Главный вопрос — какой у вас платёжный инструмент: зарубежная карта, крипто или
        узбекская карта (UzCard/Humo).
      </p>
      <MethodsTable lang="ru" />
      <p>
        Далее разбираем каждый способ — как работает, какая оплата принимается и работает ли
        он из Узбекистана.
      </p>

      <InlineBotCTA lang="ru" text="Есть узб. карта? Тогда самый прямой путь — этот бот." />

      <h2 id="app-store">1. Через App Store (для iPhone)</h2>
      <p>
        В Telegram-приложении iPhone — <strong>Настройки &gt; Telegram Premium &gt; Subscribe</strong> —
        открывается окно оплаты App Store. С комиссией Apple цена — <strong>$4.99/мес.</strong>
      </p>
      <ul>
        <li><strong>Оплата:</strong> баланс Apple ID или карта, привязанная к Apple ID.</li>
        <li><strong>Узб. карта:</strong> доместик UzCard/Humo к Apple ID не привязать (Apple не предоставляет Apple Pay в Узбекистане). Баланс Apple ID обычно пополняют через gift card.</li>
        <li><strong>Путь:</strong> зарубежный Apple ID + зарубежная gift card → много шагов и дорого.</li>
      </ul>
      <p>
        На практике — удобно, если у вас уже есть рабочий зарубежный Apple ID с пополненным
        балансом. Иначе через локальный бот гораздо быстрее и дешевле.
      </p>

      <h2 id="google-play">2. Через Google Play (для Android)</h2>
      <p>
        На Android в Telegram — <strong>Настройки &gt; Telegram Premium &gt; Subscribe</strong> —
        открывается экран оплаты Google Play. Тут тоже добавлена комиссия Google — <strong>$4.99/мес.</strong>
      </p>
      <ul>
        <li><strong>Оплата:</strong> баланс Google Play или карта, привязанная к Google.</li>
        <li><strong>Узб. карта:</strong> в Google Play регион Узбекистана есть, но доместик UzCard/Humo не подключены к Visa/Mastercard — оплата по ним не проходит. Co-branded UzCard-Visa/Humo-Mastercard технически могут работать, но банковские ограничения часто блокируют такие платежи.</li>
        <li><strong>Альтернатива:</strong> зарубежный Google-аккаунт или Google Play gift card.</li>
      </ul>

      <InlineBotCTA lang="ru" text="App Store / Google Play не прошёл? Заплатите UzCard напрямую." />

      <h2 id="premium-bot">3. @PremiumBot — официальный бот Telegram</h2>
      <p>
        <strong>@PremiumBot</strong> в Telegram — официальный бот без комиссий App Store/Google Play,
        прямая подписка: <strong>$3.99/мес.</strong> (дешевле цены App Store и Google Play). Бот
        работает через международную платёжную систему Telegram и принимает в основном зарубежные
        Visa/Mastercard (в зависимости от региона — Apple Pay/Google Pay).
      </p>
      <ul>
        <li><strong>Плюс:</strong> нет комиссии Apple/Google — дешевле, чем App Store и Google Play.</li>
        <li><strong>Минус:</strong> Visa/Mastercard узбекских банков чаще всего блокируются на зарубежных платёжках или не проходят 3D-Secure.</li>
      </ul>

      <h2 id="fragment">4. Через Fragment (TON-крипта)</h2>
      <p>
        <a href="https://fragment.com/premium" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Fragment.com/premium</a>{' '}
        — официальный Telegram-маркетплейс на TON-крипте. Premium тут — в TON, и обычно
        самая низкая цена (во время промо — до $11.99 / 3 мес.).
      </p>
      <ul>
        <li><strong>Требуется:</strong> аккаунт Fragment + TON-кошелёк + TON-крипта.</li>
        <li><strong>С ноября 2024:</strong> Fragment ввёл обязательную проверку личности (KYC) — нужен документ и прохождение идентификации.</li>
        <li><strong>Узб. карта напрямую:</strong> не работает. Для покупки TON нужна крипто-биржа или P2P — много шагов.</li>
      </ul>
      <p>
        Если вы знакомы с крипто — Fragment самый дешёвый. Для новичков — путь требует
        много технических знаний и времени.
      </p>

      <InlineBotCTA lang="ru" text="Крипта — это сложно? Premium за UzCard в пару кликов." />

      <h2 id="gift">5. Подарок от другого пользователя (Gift Premium)</h2>
      <p>
        Если у знакомого уже есть Premium — он может подарить вам подписку из вашего профиля,
        кнопка <strong>&quot;Gift Premium&quot;</strong> (на 3, 6 или 12 месяцев). Способ
        работает, но даритель сам платит одним из описанных выше способов — проблема
        просто перекладывается.
      </p>
      <ul>
        <li><strong>Плюс:</strong> подписка не продлевается автоматически (только на указанный срок).</li>
        <li><strong>Минус:</strong> платёжная проблема дарителя коснётся и вас.</li>
        <li><strong>Локальный бот тоже работает в режиме &quot;подарка&quot;:</strong> в боте uzgets можно ввести @username и подарить Premium другому человеку.</li>
      </ul>

      <h2 id="mahalliy-bot">6. Через узбекский локальный бот ({siteConfig.bot})</h2>
      <p>
        Для держателей узб. карт практически единственный прямой путь — локальный бот.{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
        продаёт Telegram Premium по следующим ценам:
      </p>
      <UzgetsPriceTable lang="ru" />
      <p>
        <strong>Способы оплаты:</strong> UzCard, Humo, Click, Payme — все четыре по одинаковой цене.
        Бот учитывает банковские комиссии и курс валют, и показывает итоговую сумму в сумах —
        без дополнительной оплаты.
      </p>
      <p>
        Процесс: <strong>START &gt; Premium &gt; @username &gt; срок &gt; карта</strong> —
        обычно за 2-5 минут зачисляется на аккаунт.
      </p>

      <h2 id="qaysi-usul">Какой способ выбрать?</h2>
      <ul>
        <li><strong>У вас есть зарубежная Visa/Mastercard</strong> → @PremiumBot — самая дешёвая ежемесячная официальная цена ($3.99/мес.).</li>
        <li><strong>У вас только баланс Apple/Google</strong> → App Store или Google Play ($4.99/мес.).</li>
        <li><strong>У вас есть TON-крипта и аккаунт Fragment</strong> → Fragment — самый дешёвый на длительный срок (со скидкой $11.99 / 3 мес. или $28.99 / 12 мес.).</li>
        <li><strong>У вас только узб. карта (UzCard/Humo/Click/Payme)</strong> → <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a> — практически единственный прямой путь.</li>
        <li><strong>Вам нужна длительная подписка</strong> → 12 месяцев ({formatUzs(P12.priceUzs)}) — ~{formatUzs(P12.perMonthHint)}/мес.</li>
        <li><strong>Хотите подарить</strong> → кнопка &quot;Gift Premium&quot; в профиле знакомого или ввод @username в боте uzgets.</li>
      </ul>

      <InlineBotCTA lang="ru" text="Узб. картой — прямой путь, Premium за 2-5 минут." />

      <h2 id="narx-farqi">Почему App Store ($4.99) дороже PremiumBot ($3.99)?</h2>
      <p>
        Apple и Google берут комиссию с продаж внутри приложений (Apple — обычно 30%, Google —
        обычно 15%). Telegram эту комиссию включает в цену — поэтому в App Store/Google Play
        Premium примерно на $1 дороже. Это не вина Telegram, а бизнес-модель магазинов приложений.
      </p>
      <p>
        Итог: <strong>App Store — всегда переплата для конечного покупателя</strong>. Если есть
        возможность — пользуйтесь любым другим путём.
      </p>

      <h2 id="muddat-farqi">3 мес. vs 6 мес. vs 12 мес. — что выгоднее?</h2>
      <p>
        Во всех каналах: чем длиннее пакет, тем дешевле в пересчёте на месяц. На примере uzgets:
      </p>
      <ul>
        <li><strong>3 мес.:</strong> {formatUzs(P3.priceUzs)} → ~{formatUzs(P3.perMonthHint)}/мес.</li>
        <li><strong>6 мес.:</strong> {formatUzs(P6.priceUzs)} → ~{formatUzs(P6.perMonthHint)}/мес. (на ~{Math.round((1 - P6.perMonthHint / P3.perMonthHint) * 100)}% дешевле/мес. чем 3-мес.)</li>
        <li><strong>12 мес.:</strong> {formatUzs(P12.priceUzs)} → ~{formatUzs(P12.perMonthHint)}/мес. (на ~{Math.round((1 - P12.perMonthHint / P3.perMonthHint) * 100)}% дешевле/мес. чем 3-мес.)</li>
      </ul>
      <p>
        Для постоянных пользователей 12-месячный пакет выгоднее всего. Кто пробует впервые —
        могут начать с 3-месячного. Подробнее:{' '}
        <Link href="/ru/premium" className="text-[var(--primary)] hover:underline">/ru/premium</Link>.
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Выбрали Premium? Выберите срок в боте." />

      <h2 id="muhim">Что проверить перед покупкой</h2>
      <ul>
        <li>
          <strong>Точный @username.</strong> На какой аккаунт зачислить Premium — точно укажите
          username (например, @example). Не номер телефона — username. Подтвердите в Настройках &gt;
          Username.
        </li>
        <li>
          <strong>Только официальный бот.</strong> t.me/uzgetsbot — похожие имена (uzgetbot,
          uzg3tsbot) — мошеннические клоны. Переходите по кнопке с сайта.
        </li>
        <li>
          <strong>Сумма, указанная в боте.</strong> Бот указывает точную сумму на оплату — если
          перевести другую сумму, заказ не будет доставлен. С Click сумма подставляется автоматически.
        </li>
        <li>
          <strong>Автопродления нет.</strong> Premium, купленный через бот, отключится по окончании
          срока — для продления нужно купить снова через бот.
        </li>
        <li>
          Проверка статуса Premium:{' '}
          <Link href="/ru/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">
            Premium не отображается в аккаунте — причины
          </Link>
          .
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
      title: "Telegram Premium sotib olish — barcha usullar to'liq qo'llanma 2026",
      description:
        "Telegram Premium sotib olishning 6 ta usuli: App Store, Google Play, @PremiumBot, Fragment, Gift va O'zbek mahalliy bot. Narxlar, to'lovlar va O'zbekistondan ishlay oladimi.",
      metaTitle: "Telegram Premium sotib olish — barcha usullar 2026 (to'liq)",
      metaDescription:
        "Telegram Premium sotib olishning 6 usuli: App Store $4.99, Google Play $4.99, @PremiumBot $3.99, Fragment $11.99/3oy, Gift va O'zbek bot — 168 000 so'm/3 oy.",
      ogDescription:
        "6 ta usul, narxlar va qaysi yo'l O'zbekistondan amalda ishlaydi — to'liq qo'llanma.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Telegram Premium sotib olishning eng arzon usuli qaysi?',
          answer:
            "Fragment (TON crypto) — taxminan $11.99 / 3 oy (chegirma kampaniyalari paytida). Lekin Fragment uchun TON wallet va KYC kerak. O'zbek karta egalari uchun Fragment amalda ishlamaydi. Mahalliy karta bilan — uzgets botida 3 oylik 168 000 so'm.",
        },
        {
          question: "O'zbek kartam (UzCard/Humo) bilan App Store'da Premium sotib ololamanmi?",
          answer:
            "Domestik UzCard/Humo bilan — yo'q. Apple O'zbekistonda Apple Pay xizmatini ko'rsatmaydi va domestik UzCard/Humo'ni Apple ID'ga biriktirib bo'lmaydi. Apple ID balansini xorijiy gift card orqali to'ldirish mumkin, lekin bu murakkab va arzon emas.",
        },
        {
          question: 'Nega App Store narxi @PremiumBot narxidan qimmat?',
          answer:
            "App Store/Google Play ilova ichidagi sotuvlardan komissiya oladi (Apple odatda 30%, Google odatda 15%) va Telegram bu komissiyani narxga qo'shadi. Shuning uchun App Store/Google Play'da Premium $4.99/oy, @PremiumBot'da $3.99/oy.",
        },
        {
          question: "@PremiumBot O'zbek karta bilan ishlaydimi?",
          answer:
            "Amalda yo'q. @PremiumBot Visa/Mastercard kartalarini xalqaro to'lov tizimi orqali qabul qiladi va O'zbek banklarining xalqaro kartalari ko'p hollarda xorijiy savdo nuqtalarida bloklanadi yoki 3D-Secure tasdiqlashda muvaffaqiyatsiz tugaydi.",
        },
        {
          question: "Fragment'dan Premium sotib olish uchun nima kerak?",
          answer:
            "Fragment akkaunti, TON wallet (Wallet, Tonkeeper, Tonhub) va TON crypto kerak. 2024-yil noyabridan beri Fragment majburiy shaxs tasdiqlash (KYC) kiritdi — hujjat va identifikatsiya. O'zbek karta bilan to'g'ridan-to'g'ri TON sotib olish — crypto-birja yoki P2P platforma orqali, ko'p qadamli jarayon.",
        },
        {
          question: "O'zbek mahalliy bot orqali olingan Premium qancha vaqt davom etadi?",
          answer:
            "Tanlangan muddat aniq — 3, 6 yoki 12 oy. Avtomatik yangilanish yo'q — muddat tugagach Premium o'chadi va uni yangilash uchun yana bot orqali sotib olish kerak. Bu Telegram'ning standart Premium gift mexanizmi.",
        },
        {
          question: "Premium boshqa odamga sovg'a qilish mumkinmi?",
          answer:
            "Ha. Ikki yo'l: (1) sizning Premium akkauntingiz bo'lsa — tanish profilidagi 'Gift Premium' tugmasi orqali; (2) uzgets botida — @username kiritib boshqa odamga to'lash. Ikkala usulda ham qabul qiluvchining akkaunti aktiv bo'lishi kerak.",
        },
        {
          question: 'Qaysi muddat eng tejamli — 3, 6 yoki 12 oy?',
          answer:
            "12 oylik paket bir oyga eng arzon. Uzgets'da: 3 oy = 56 000 so'm/oy, 6 oy = 38 000 so'm/oy, 12 oy = 34 000 so'm/oy. Premium'ni doimiy ishlatadiganlar uchun 12 oylik 168 000 so'mga emas, balki 408 000 so'mga — lekin oyiga ~22 000 so'm tejam.",
        },
      ],
      finalCtaHeading: 'Premium sotib olishga tayyormisiz?',
      finalCtaBody:
        "Agar sizda faqat O'zbek karta bo'lsa — botga kiring, muddatni tanlang va UzCard, Humo, Click yoki Payme orqali to'lang. Premium 2-5 daqiqada akkauntga biriktiriladi — qo'shimcha komissiya yo'q.",
    },
    ru: {
      title: 'Купить Telegram Premium — все способы 2026, полное руководство',
      description:
        '6 способов купить Telegram Premium: App Store, Google Play, @PremiumBot, Fragment, Gift и узбекский локальный бот. Цены, оплата и работает ли из Узбекистана.',
      metaTitle: 'Купить Telegram Premium — все способы 2026 (полное)',
      metaDescription:
        '6 способов: App Store $4.99, Google Play $4.99, @PremiumBot $3.99, Fragment ~$11.99/3 мес., Gift и узб. бот — 168 000 сум за 3 мес.',
      ogDescription:
        '6 способов, цены и какой путь реально работает из Узбекистана — полное руководство.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Какой самый дешёвый способ купить Telegram Premium?',
          answer:
            'Fragment (TON-крипта) — около $11.99 / 3 мес. (в период скидок). Но для Fragment нужны TON-кошелёк и KYC. Для держателей узб. карт Fragment на практике не работает. С локальной картой — в боте uzgets 3-мес. за 168 000 сум.',
        },
        {
          question: 'Могу ли я купить Premium в App Store моей узб. картой (UzCard/Humo)?',
          answer:
            'С доместик UzCard/Humo — нет. Apple не предоставляет Apple Pay в Узбекистане, и доместик UzCard/Humo нельзя привязать к Apple ID. Баланс Apple ID можно пополнять через зарубежные gift card, но это сложно и недёшево.',
        },
        {
          question: 'Почему в App Store дороже, чем в @PremiumBot?',
          answer:
            'App Store/Google Play берут комиссию с продаж внутри приложений (Apple обычно 30%, Google обычно 15%), и Telegram включает эту комиссию в цену. Поэтому в App Store/Google Play Premium $4.99/мес., в @PremiumBot — $3.99/мес.',
        },
        {
          question: 'Работает ли @PremiumBot с узб. картой?',
          answer:
            'На практике нет. @PremiumBot принимает Visa/Mastercard через международную платёжную систему, а узб. международные карты часто блокируются на зарубежных платёжках или не проходят 3D-Secure.',
        },
        {
          question: 'Что нужно для покупки Premium через Fragment?',
          answer:
            'Аккаунт Fragment, TON-кошелёк (Wallet, Tonkeeper, Tonhub) и TON-крипта. С ноября 2024 Fragment ввёл обязательную проверку личности (KYC) — документ и идентификация. Прямой покупки TON узб. картой нет — нужна крипто-биржа или P2P, много шагов.',
        },
        {
          question: 'Сколько длится Premium, купленный через узб. локальный бот?',
          answer:
            'Ровно выбранный срок — 3, 6 или 12 месяцев. Автопродления нет — по окончании Premium отключается и для продления нужно купить снова через бот. Это стандартный механизм Telegram Premium gift.',
        },
        {
          question: 'Можно ли подарить Premium другому человеку?',
          answer:
            'Да. Два пути: (1) если у вас уже есть Premium — кнопка "Gift Premium" в профиле знакомого; (2) в боте uzgets — ввести @username и оплатить за другого. В обоих случаях аккаунт получателя должен быть активным.',
        },
        {
          question: 'Какой срок выгоднее — 3, 6 или 12 месяцев?',
          answer:
            '12-месячный пакет дешевле всего в пересчёте на месяц. В uzgets: 3 мес. = 56 000 сум/мес., 6 мес. = 38 000 сум/мес., 12 мес. = 34 000 сум/мес. Для постоянных пользователей 12-мес. (408 000 сум) — экономия ~22 000 сум/мес. по сравнению с 3-мес.',
        },
      ],
      finalCtaHeading: 'Готовы купить Premium?',
      finalCtaBody:
        'Если у вас только узб. карта — зайдите в бот, выберите срок и оплатите через UzCard, Humo, Click или Payme. Premium зачисляется на аккаунт за 2-5 минут — без дополнительной комиссии.',
    },
  },
}
