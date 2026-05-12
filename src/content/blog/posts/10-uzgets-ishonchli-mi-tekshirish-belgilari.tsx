import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'uzgets-ishonchli-mi-tekshirish-belgilari'
const TODAY = '2026-05-11'

function UzAnswerBox() {
  return (
    <p>
      Uzgets — uzgets.uz domenida joylashgan sayt va{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      Telegram boti orqali ishlovchi mahalliy vositachi. Telegram&apos;ning rasmiy hamkori emas
      (Telegram bunday vakolat bermaydi), lekin ishonchni mustaqil tekshirish mumkin:{' '}
      <strong>(1)</strong> sayt HTTPS&apos;da, narxlar oshkora;{' '}
      <strong>(2)</strong> bot rasmiy BotFather orqali yaratilgan va <em>bot</em> suffixi bilan;{' '}
      <strong>(3)</strong> bot faqat <em>@username</em> so&apos;raydi — parol, kod yoki 2FA
      hech qachon so&apos;ramaydi; <strong>(4)</strong> shartlar va maxfiylik siyosati saytda.
      Quyida har bir signalni qanday tekshirish ko&apos;rsatilgan.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Uzgets — локальный посредник, работающий через сайт на домене uzgets.uz и Telegram-бот{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>.
      Это не официальный партнёр Telegram (Telegram таких полномочий не выдаёт), но доверие
      можно проверить самостоятельно: <strong>(1)</strong> сайт на HTTPS, цены публичны;{' '}
      <strong>(2)</strong> бот создан через официальный BotFather и имеет суффикс <em>bot</em>;{' '}
      <strong>(3)</strong> бот запрашивает только <em>@username</em> — пароль, код или 2FA
      никогда не запрашиваются; <strong>(4)</strong> условия и политика конфиденциальности
      опубликованы на сайте. Ниже — как проверить каждый сигнал.
    </p>
  )
}

function ChecklistTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    signal: { uz: string; ru: string }
    check: { uz: string; ru: string }
    uzgets: { uz: string; ru: string }
  }
  const rows: Row[] = [
    {
      signal: { uz: 'HTTPS sertifikat', ru: 'Сертификат HTTPS' },
      check: {
        uz: "Brauzer manzil satrida qulf belgisi bo'lishi va domen aniq ko'rinishi",
        ru: 'Иконка замка в адресной строке и точное имя домена',
      },
      uzgets: {
        uz: '✅ uzgets.uz — HTTPS, valid sertifikat',
        ru: '✅ uzgets.uz — HTTPS, валидный сертификат',
      },
    },
    {
      signal: { uz: 'Aniq domen nomi', ru: 'Точное имя домена' },
      check: {
        uz: "Imloda 'o'/'0', 'l'/'1' kabi almashtirishlar yo'qmi",
        ru: 'Отсутствие подмен типа \'o\'/\'0\', \'l\'/\'1\'',
      },
      uzgets: {
        uz: '✅ uzgets.uz — toza imlo',
        ru: '✅ uzgets.uz — чистая орфография',
      },
    },
    {
      signal: { uz: "Bot rasmiy 'bot' suffix bilan", ru: "Бот с официальным суффиксом 'bot'" },
      check: {
        uz: "@uzgetsbot — Telegram BotFather standarti (har rasmiy bot 'bot' bilan tugaydi)",
        ru: "@uzgetsbot — стандарт Telegram BotFather (каждый официальный бот заканчивается на 'bot')",
      },
      uzgets: {
        uz: '✅ @uzgetsbot — to\'g\'ri suffix',
        ru: '✅ @uzgetsbot — правильный суффикс',
      },
    },
    {
      signal: { uz: 'Oshkora narxlar', ru: 'Открытые цены' },
      check: {
        uz: "Narxlar sayt va botda bir xil va aniq ko'rsatilgan",
        ru: 'Цены одинаковы на сайте и в боте',
      },
      uzgets: {
        uz: '✅ /premium va /stars sahifalarda — botda bir xil',
        ru: '✅ /ru/premium и /ru/stars — те же цены в боте',
      },
    },
    {
      signal: { uz: 'Maxfiylik siyosati', ru: 'Политика конфиденциальности' },
      check: { uz: 'Saytda /privacy sahifasi mavjudmi', ru: 'Есть ли /privacy на сайте' },
      uzgets: {
        uz: '✅ /privacy — karta ma\'lumotlari saqlanmaydi',
        ru: '✅ /ru/privacy — данные карт не хранятся',
      },
    },
    {
      signal: { uz: 'Foydalanish shartlari', ru: 'Условия использования' },
      check: { uz: '/terms sahifasi va pul qaytarish bandi', ru: 'Страница /terms и пункт о возврате' },
      uzgets: {
        uz: '✅ /terms — 5-band: pul qaytarish qoidalari',
        ru: '✅ /ru/terms — пункт 5: правила возврата',
      },
    },
    {
      signal: { uz: 'Faqat @username so\'raladi', ru: 'Запрашивается только @username' },
      check: {
        uz: 'Parol, SMS-kod, 2FA so\'ralmaydi — bu firibgarlik belgisi',
        ru: 'Пароль, SMS-код, 2FA не запрашиваются — это признак мошенничества',
      },
      uzgets: {
        uz: '✅ Faqat @username — boshqa hech narsa',
        ru: '✅ Только @username — больше ничего',
      },
    },
  ]

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Signal' : 'Сигнал'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Tekshirish usuli' : 'Как проверить'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Uzgets' : 'Uzgets'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{r.signal[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.check[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.uzgets[lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CloneBotsTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    name: string
    type: { uz: string; ru: string }
    note: { uz: string; ru: string }
  }
  const rows: Row[] = [
    {
      name: '@uzgetsbot',
      type: { uz: 'Rasmiy', ru: 'Официальный' },
      note: {
        uz: 't.me/uzgetsbot — sayt va barcha rasmiy havolalardan shu manzil ko\'rsatiladi',
        ru: 't.me/uzgetsbot — этот адрес указан на сайте и во всех официальных ссылках',
      },
    },
    {
      name: '@uzg3tsbot',
      type: { uz: 'Klon', ru: 'Клон' },
      note: {
        uz: '"e" o\'rniga "3" raqami — firibgarlikning klassik usuli',
        ru: '"e" заменена цифрой "3" — классический приём мошенников',
      },
    },
    {
      name: '@uzgets_official',
      type: { uz: 'Klon', ru: 'Клон' },
      note: {
        uz: '"_official" qo\'shimchasi yo\'q — rasmiy bot allaqachon "bot" suffixiga ega',
        ru: 'Приставки "_official" нет — официальный бот уже имеет суффикс "bot"',
      },
    },
    {
      name: '@uzgetbot',
      type: { uz: 'Klon', ru: 'Клон' },
      note: {
        uz: '"s" tushirilgan — bitta harf farq, ehtiyot bo\'ling',
        ru: 'Пропущена "s" — разница в одной букве, будьте внимательны',
      },
    },
    {
      name: '@uzgetsbot1',
      type: { uz: 'Klon', ru: 'Клон' },
      note: {
        uz: 'Oxirda raqam qo\'shilgan — rasmiy nomda raqam yo\'q',
        ru: 'В конце добавлена цифра — в официальном имени цифры нет',
      },
    },
  ]
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Nomi' : 'Имя'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Turi' : 'Тип'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Izoh' : 'Примечание'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const isOfficial = r.type.uz === 'Rasmiy'
            return (
              <tr key={r.name} className={`border-t border-[var(--border)] ${isOfficial ? 'bg-[var(--primary)]/5' : ''}`}>
                <td className="px-4 py-2 font-medium">{r.name}</td>
                <td className="px-4 py-2">
                  {isOfficial ? (
                    <span className="rounded-full bg-[var(--primary)] px-2 py-0.5 text-xs font-semibold text-white">
                      {r.type[lang]}
                    </span>
                  ) : (
                    <span className="rounded-full bg-[var(--border)] px-2 py-0.5 text-xs font-semibold text-[var(--text-muted)]">
                      {r.type[lang]}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 text-[var(--text-muted)]">{r.note[lang]}</td>
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
          <a href="https://core.telegram.org/bots" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/bots
          </a>{' '}
          — {lang === 'uz' ? "Telegram BotFather va bot standartlari (rasmiy hujjat)" : 'BotFather и стандарты ботов (официальная документация)'}
        </li>
        <li>
          <a href="https://telegram.org/faq#q-how-do-i-create-a-bot" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/faq
          </a>{' '}
          — {lang === 'uz' ? "Telegram rasmiy FAQ (bot qanday tekshiriladi)" : 'официальный FAQ Telegram (как проверить бот)'}
        </li>
        <li>
          <a href={`${siteConfig.url}/terms`} className="hover:text-[var(--primary)] hover:underline">
            uzgets.uz/terms
          </a>{' '}
          — {lang === 'uz' ? "Foydalanish shartlari va pul qaytarish bandi" : 'Условия использования и пункт о возврате'}
        </li>
        <li>
          <a href={`${siteConfig.url}/privacy`} className="hover:text-[var(--primary)] hover:underline">
            uzgets.uz/privacy
          </a>{' '}
          — {lang === 'uz' ? "Maxfiylik siyosati (karta ma'lumotlari saqlanmaydi)" : 'Политика конфиденциальности (данные карт не хранятся)'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Sahifa muntazam yangilanadi. Oxirgi tekshiruv: 2026-yil may."
          : 'Страница регулярно обновляется. Последняя проверка: май 2026.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="ishonchli-mi">Uzgets ishonchli mi — qisqacha javob</h2>
      <p>
        Uzgets — Telegram&apos;ning rasmiy hamkori <strong>emas</strong>, chunki Telegram bunday
        vakolat bermaydi. U mahalliy vositachi (reseller): foydalanuvchidan UzCard, Humo, Click
        yoki Payme bilan to&apos;lovni qabul qiladi va o&apos;z hisobidan Telegram&apos;dan
        Premium/Stars sotib olib, ko&apos;rsatilgan akkauntga biriktiradi.
      </p>
      <p>
        Bu yo&apos;l nima uchun kerak? Telegram&apos;ning o&apos;z @PremiumBot&apos;i,
        Fragment va App Store/Google Play O&apos;zbek karta (UzCard/Humo) qabul qilmaydi —
        ular Visa/Mastercard yoki TON crypto talab qiladi. Shuning uchun mahalliy karta egasi
        uchun vositachi amaliy yagona yo&apos;l.
      </p>
      <p>
        Ishonchni mustaqil baholash uchun oltita texnik signalni tekshirib chiqing — pastdagi
        jadval va bo&apos;limlarda har biri ko&apos;rsatilgan.
      </p>

      <h2 id="tekshirish-belgilari">Ishonchni tekshirish — 7 ta signal</h2>
      <ChecklistTable lang="uz" />

      <InlineBotCTA lang="uz" text="Tekshirib bo'lgach, botda buyurtmangizni rasmiylashtiring." />

      <h2 id="saytni-tekshirish">Saytni qanday tekshirish mumkin?</h2>
      <ol>
        <li>
          <strong>HTTPS belgisi.</strong> Brauzer manzil satridagi qulf belgisini bosing. Sertifikat
          haqida ma&apos;lumot chiqadi — domain nomi <em>uzgets.uz</em> bo&apos;lishi shart.
        </li>
        <li>
          <strong>Domain nomi aniq imlo bilan.</strong> Firibgar saytlar <em>uzg3ts.uz</em>,{' '}
          <em>uzgets.com</em> yoki <em>uzgets-bot.uz</em> kabi farq qiluvchi domenlarni
          ishlatadi. Rasmiy manzil — <strong>uzgets.uz</strong>.
        </li>
        <li>
          <strong>Narxlar oshkora va izchil.</strong> /premium va /stars sahifalarida ko&apos;rsatilgan
          narxlar bot ichidagi narxlar bilan bir xil. Agar farq sezsangiz — bu klon yoki nusxa sayt.
        </li>
        <li>
          <strong>Shartlar va maxfiylik siyosati.</strong>{' '}
          <Link href="/terms" className="text-[var(--primary)] hover:underline">/terms</Link> va{' '}
          <Link href="/privacy" className="text-[var(--primary)] hover:underline">/privacy</Link>{' '}
          sahifalari mavjud va o&apos;qib bo&apos;ladigan. Yo&apos;q bo&apos;lsa — bu jiddiy
          ogohlantirish belgisi.
        </li>
      </ol>

      <h2 id="botni-tekshirish">Botni qanday tekshirish mumkin?</h2>
      <p>
        Telegram&apos;ning <em>bot verified</em> belgisi (ko&apos;k tasdiq nishoni) faqat juda
        katta platformalar uchun beriladi. Aksariyat ishonchli botlarda bu belgi yo&apos;q —
        shuning uchun <strong>boshqa belgilar bilan baholang</strong>:
      </p>
      <ol>
        <li>
          <strong>Bot nomi &quot;bot&quot; suffix bilan tugaydi.</strong> Telegram BotFather
          standartiga ko&apos;ra har bir bot nomi <em>bot</em> bilan tugaydi —{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@uzgetsbot</a>.
          Bu Telegram tomonidan majburiy qoida.
        </li>
        <li>
          <strong>Profil to&apos;ldirilgan.</strong> Bot avatari, tavsif va saytga havola
          mavjudligini tekshiring (bot profili ochish).
        </li>
        <li>
          <strong>Bot faqat @username so&apos;raydi.</strong> Parol, SMS-kod, 2FA kodi yoki
          telefon raqamini hech qachon so&apos;ramaydi. Agar bot bunday narsa so&apos;rasa —
          bu firibgarlik belgisi (akkountingiz o&apos;g&apos;irlanishi mumkin).
        </li>
        <li>
          <strong>Bot menyusi izchil ishlaydi.</strong> Boshqa menyu/start chiqishi yoki to&apos;lovga
          o&apos;tmasdan tashqi havola yuborishi — shubhali belgi.
        </li>
      </ol>

      <h2 id="klon-botlardan-farq">Klon va firibgar botlardan qanday farqlash mumkin?</h2>
      <p>
        Mashhur botlarni firibgarlar nusxa qiladi — bir-ikki harfni o&apos;zgartirib o&apos;xshash
        nom qo&apos;yadi. Quyida Uzgets atrofida uchragan klonlar:
      </p>
      <CloneBotsTable lang="uz" />
      <p>
        Botga o&apos;tishdan oldin <strong>doimo to&apos;liq URL&apos;ni tekshiring</strong>:{' '}
        <code className="rounded bg-[var(--muted)] px-1.5 py-0.5">t.me/uzgetsbot</code>. Saytdagi
        tugmalar yoki bu maqolalardagi havolalar shu manzilga olib boradi — qo&apos;lda yozish
        emas, bosish orqali o&apos;ting.
      </p>

      <InlineBotCTA lang="uz" text="Rasmiy bot: t.me/uzgetsbot — havola orqali to'g'ri o'ting." />

      <h2 id="pul-qaytarish">Pul qaytarish kafolati — qanday ishlaydi?</h2>
      <p>
        Foydalanish shartlarining 5-bandida{' '}
        <Link href="/terms" className="text-[var(--primary)] hover:underline">to&apos;liq matn</Link>{' '}
        keltirilgan. Qisqacha:
      </p>
      <ul>
        <li>
          <strong>To&apos;lov o&apos;tib, mahsulot biriktirilmasa</strong> (texnik xato, tizim
          to&apos;xtagan) — pul to&apos;liq qaytariladi yoki mahsulot qayta yuboriladi.
        </li>
        <li>
          <strong>Foydalanuvchi xatosi</strong> (noto&apos;g&apos;ri @username, mavjud bo&apos;lmagan
          akkaunt) — alohida ko&apos;rib chiqiladi va imkon darajasida hal qilinadi.
        </li>
        <li>
          <strong>Mahsulot muvaffaqiyatli yetkazilgach</strong> (Premium biriktirilgan, Stars
          biriktirilgan) — to&apos;lov qaytarilmaydi (bu Telegram va to&apos;lov tizimlari
          standartiga muvofiq).
        </li>
      </ul>
      <p>
        Muammo yuzaga kelsa — bot ichidagi qo&apos;llab-quvvatlash menyusi yoki{' '}
        <Link href="/aloqa" className="text-[var(--primary)] hover:underline">aloqa sahifasi</Link>{' '}
        orqali murojaat qilish mumkin.
      </p>

      <h2 id="karta-xavfsizligi">Karta ma&apos;lumotlari xavfsizmi?</h2>
      <p>
        Uzgets karta ma&apos;lumotlarini <strong>saqlamaydi</strong>. To&apos;lov to&apos;g&apos;ridan-to&apos;g&apos;ri
        rasmiy to&apos;lov tizimi (UzCard, Humo, Click yoki Payme) tomonidan ishlov beriladi —
        bu tizimlar O&apos;zbekiston Markaziy banki nazoratidagi infratuzilma. Bot faqat to&apos;lov
        natijasini (muvaffaqiyatli yoki rad etilgan) oladi.
      </p>
      <p>
        Maxfiylik siyosatining to&apos;liq matni —{' '}
        <Link href="/privacy" className="text-[var(--primary)] hover:underline">/privacy</Link>.
      </p>

      <h2 id="firibgar-belgilari">Firibgarlikning 5 ta universal belgisi</h2>
      <p>
        Telegram-bot orqali xarid qilayotganda quyidagi belgilarning birortasi sezilsa —
        darhol to&apos;xtang:
      </p>
      <ul>
        <li>
          <strong>Parol, SMS-kod yoki 2FA so&apos;raladi.</strong> Hech qaysi qonuniy xizmat
          akkauntingiz parolini yoki tasdiqlash kodini so&apos;ramaydi.
        </li>
        <li>
          <strong>&quot;Bepul Premium yutib oldingiz&quot; kabi xabarlar.</strong>{' '}
          <a href="https://www.kaspersky.com/blog/telegram-premium-scam/52696/" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Kaspersky</a>{' '}
          tasvirlab bergan klassik phishing: tasodifiy &quot;sovg&apos;a&quot; → soxta
          login sahifa → akkount o&apos;g&apos;rilanadi.
        </li>
        <li>
          <strong>Bozordan past narx (50% va undan ko&apos;p).</strong> Real narx ma&apos;lum
          chegaradan past tusha olmaydi — qiyosiy narx jadvali uchun{' '}
          <Link href="/blog/eng-arzon-telegram-premium-ozbekistonda" className="text-[var(--primary)] hover:underline">Eng arzon Premium</Link>.
        </li>
        <li>
          <strong>Manzil yoki nom imlosida xato.</strong> uzg3ts, uzget, uzgetbot, uzgets-uz —
          ulardan biri klon. Faqat <em>uzgets.uz</em> va <em>@uzgetsbot</em>.
        </li>
        <li>
          <strong>Telegram tashqarisida to&apos;lov so&apos;raladi.</strong> Qonuniy reseller
          to&apos;lov tizimi (UzCard/Humo/Click/Payme) ichida to&apos;lashni so&apos;raydi, shaxsiy
          karta yoki Telegram chat ichida raqam emas.
        </li>
      </ul>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Belgilarni tekshirdingizmi? Botga ishonch bilan o'ting." />

      <h2 id="qoshimcha-resurslar">Qo&apos;shimcha resurslar</h2>
      <ul>
        <li>
          <Link href="/blog/arzon-stars-qayerdan-olinadi-3-belgi" className="text-[var(--primary)] hover:underline">
            Arzon Stars qayerdan olinadi — aldanmaslik uchun 3 ta belgi
          </Link>{' '}
          — chuqurroq trust signallari (xizmat, narx, to&apos;lov)
        </li>
        <li>
          <Link href="/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">
            Akkauntda Premium ko&apos;rinmayapti — sabablari
          </Link>{' '}
          — agar to&apos;lov o&apos;tib mahsulot ko&apos;rinmasa, nima qilish kerak
        </li>
        <li>
          <Link href="/haqimizda" className="text-[var(--primary)] hover:underline">
            Uzgets haqida
          </Link>{' '}
          — xizmat tarixi, missiya va aloqa
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="ishonchli-mi">Можно ли доверять Uzgets — короткий ответ</h2>
      <p>
        Uzgets — <strong>не</strong> официальный партнёр Telegram, потому что Telegram таких
        полномочий не выдаёт. Это локальный посредник (реселлер): принимает оплату UzCard, Humo,
        Click или Payme от пользователя и со своего счёта покупает у Telegram Premium/Stars,
        зачисляя их на указанный аккаунт.
      </p>
      <p>
        Почему вообще нужен такой путь? Официальный @PremiumBot, Fragment и App Store/Google Play
        не принимают узбекские карты (UzCard/Humo) — требуется Visa/Mastercard или TON-крипто.
        Поэтому для держателя локальной карты посредник — практически единственный способ.
      </p>
      <p>
        Чтобы самостоятельно оценить надёжность, проверьте семь технических сигналов — таблица
        и разделы ниже описывают каждый.
      </p>

      <h2 id="tekshirish-belgilari">Сигналы проверки доверия — 7 пунктов</h2>
      <ChecklistTable lang="ru" />

      <InlineBotCTA lang="ru" text="Проверили? Оформите заказ в боте." />

      <h2 id="saytni-tekshirish">Как проверить сайт?</h2>
      <ol>
        <li>
          <strong>HTTPS-замок.</strong> Нажмите на иконку замка в адресной строке. Появится
          информация о сертификате — имя домена должно быть <em>uzgets.uz</em>.
        </li>
        <li>
          <strong>Точное имя домена.</strong> Мошеннические сайты используют похожие имена —{' '}
          <em>uzg3ts.uz</em>, <em>uzgets.com</em> или <em>uzgets-bot.uz</em>. Официальный адрес —{' '}
          <strong>uzgets.uz</strong>.
        </li>
        <li>
          <strong>Цены публичны и согласованы.</strong> Цены на /ru/premium и /ru/stars совпадают
          с ценами внутри бота. Если видите расхождение — это клон или копия.
        </li>
        <li>
          <strong>Условия и политика конфиденциальности.</strong>{' '}
          <Link href="/ru/terms" className="text-[var(--primary)] hover:underline">/ru/terms</Link> и{' '}
          <Link href="/ru/privacy" className="text-[var(--primary)] hover:underline">/ru/privacy</Link>{' '}
          доступны и читаемы. Если их нет — серьёзный сигнал тревоги.
        </li>
      </ol>

      <h2 id="botni-tekshirish">Как проверить бот?</h2>
      <p>
        Синяя галочка <em>verified</em> у Telegram выдаётся только очень крупным площадкам. У
        большинства надёжных ботов её нет — поэтому оценивайте по{' '}
        <strong>другим признакам</strong>:
      </p>
      <ol>
        <li>
          <strong>Имя бота заканчивается на «bot».</strong> По стандарту Telegram BotFather имя
          любого бота заканчивается на <em>bot</em> —{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@uzgetsbot</a>.
          Это обязательное правило Telegram.
        </li>
        <li>
          <strong>Профиль заполнен.</strong> Проверьте аватар, описание и ссылку на сайт в
          профиле бота.
        </li>
        <li>
          <strong>Бот запрашивает только @username.</strong> Пароль, SMS-код, 2FA или номер
          телефона никогда не запрашиваются. Если запрашивает — это мошенничество (аккаунт
          могут украсть).
        </li>
        <li>
          <strong>Меню бота работает стабильно.</strong> Сбои меню, странные стартовые экраны
          или ссылки в чат, минуя оплату — подозрительный признак.
        </li>
      </ol>

      <h2 id="klon-botlardan-farq">Как отличить клонов и мошеннических ботов?</h2>
      <p>
        Популярные боты копируются мошенниками: они меняют одну-две буквы и создают похожее имя.
        Ниже — клоны, замеченные вокруг Uzgets:
      </p>
      <CloneBotsTable lang="ru" />
      <p>
        Перед переходом в бот <strong>всегда проверяйте полный URL</strong>:{' '}
        <code className="rounded bg-[var(--muted)] px-1.5 py-0.5">t.me/uzgetsbot</code>. Кнопки на
        сайте и ссылки в этих статьях ведут именно сюда — переходите по клику, а не вводите имя
        вручную.
      </p>

      <InlineBotCTA lang="ru" text="Официальный бот: t.me/uzgetsbot — переходите по ссылке." />

      <h2 id="pul-qaytarish">Как работает гарантия возврата?</h2>
      <p>
        Пункт 5 Условий использования (полный текст —{' '}
        <Link href="/ru/terms" className="text-[var(--primary)] hover:underline">/ru/terms</Link>).
        Кратко:
      </p>
      <ul>
        <li>
          <strong>Оплата прошла, но товар не зачислен</strong> (техническая ошибка, сбой) — деньги
          возвращаются полностью либо товар отправляется заново.
        </li>
        <li>
          <strong>Ошибка пользователя</strong> (неверный @username, несуществующий аккаунт) —
          рассматривается индивидуально и решается в пределах возможного.
        </li>
        <li>
          <strong>Товар успешно доставлен</strong> (Premium зачислен, Stars зачислены) — возврат
          не предусмотрен (по стандартам Telegram и платёжных систем).
        </li>
      </ul>
      <p>
        При проблеме обращайтесь через меню поддержки внутри бота или{' '}
        <Link href="/ru/aloqa" className="text-[var(--primary)] hover:underline">страницу контактов</Link>.
      </p>

      <h2 id="karta-xavfsizligi">Безопасны ли данные карты?</h2>
      <p>
        Uzgets <strong>не хранит</strong> данные карт. Оплату обрабатывает напрямую официальная
        платёжная система (UzCard, Humo, Click или Payme) — инфраструктура под надзором
        Центробанка Узбекистана. Бот получает только результат оплаты (успешно или отклонено).
      </p>
      <p>
        Полная политика —{' '}
        <Link href="/ru/privacy" className="text-[var(--primary)] hover:underline">/ru/privacy</Link>.
      </p>

      <h2 id="firibgar-belgilari">5 универсальных признаков мошенничества</h2>
      <p>
        Если при покупке через Telegram-бот замечаете один из этих признаков — немедленно
        остановитесь:
      </p>
      <ul>
        <li>
          <strong>Запрашивают пароль, SMS-код или 2FA.</strong> Ни один легальный сервис не
          запрашивает пароль вашего аккаунта или код подтверждения.
        </li>
        <li>
          <strong>Сообщения «вы выиграли бесплатный Premium».</strong> Классический фишинг,
          описанный{' '}
          <a href="https://www.kaspersky.com/blog/telegram-premium-scam/52696/" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Kaspersky</a>:
          случайный «подарок» → фейковая страница входа → угон аккаунта.
        </li>
        <li>
          <strong>Цена ниже рыночной на 50% и более.</strong> Реальная цена не может опуститься
          ниже определённой границы — сравнение в{' '}
          <Link href="/ru/blog/eng-arzon-telegram-premium-ozbekistonda" className="text-[var(--primary)] hover:underline">«Самый дешёвый Premium»</Link>.
        </li>
        <li>
          <strong>Опечатка в адресе или имени.</strong> uzg3ts, uzget, uzgetbot, uzgets-uz — это
          клоны. Только <em>uzgets.uz</em> и <em>@uzgetsbot</em>.
        </li>
        <li>
          <strong>Оплату просят вне Telegram.</strong> Легальный реселлер просит оплачивать
          внутри платёжной системы (UzCard/Humo/Click/Payme), а не на личную карту или номер в
          чате.
        </li>
      </ul>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Проверили признаки? Переходите в бот уверенно." />

      <h2 id="qoshimcha-resurslar">Дополнительные ресурсы</h2>
      <ul>
        <li>
          <Link href="/ru/blog/arzon-stars-qayerdan-olinadi-3-belgi" className="text-[var(--primary)] hover:underline">
            Откуда брать дешёвые Stars — 3 признака надёжности
          </Link>{' '}
          — глубже о trust-сигналах (сервис, цена, оплата)
        </li>
        <li>
          <Link href="/ru/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">
            Premium не отображается в аккаунте — причины
          </Link>{' '}
          — что делать, если оплата прошла, а товара не видно
        </li>
        <li>
          <Link href="/ru/haqimizda" className="text-[var(--primary)] hover:underline">
            О Uzgets
          </Link>{' '}
          — история сервиса, миссия и контакты
        </li>
      </ul>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'trust',
  locales: {
    uz: {
      title: "Uzgets ishonchli mi? — saytni va botni tekshirish belgilari",
      description:
        "Uzgets ishonchli mi? Saytni (HTTPS, domen, narxlar), botni (@uzgetsbot suffix, parol so'ramaslik), klon botlarni va firibgarlik belgilarini qanday tekshirish kerak — 7 ta amaliy signal.",
      metaTitle: "Uzgets ishonchli mi? — tekshirish belgilari 2026",
      metaDescription:
        "Uzgets ishonchli mi — saytni, botni va to'lovni qanday tekshirish: HTTPS, domen, @uzgetsbot suffix, klon botlar, pul qaytarish kafolati. 7 ta signal va amaliy yo'l-yo'riq.",
      ogDescription:
        "Uzgets ishonchli mi — saytni, botni va to'lovni mustaqil tekshirish belgilari.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Uzgets ishonchli xizmatmi?',
          answer:
            "Uzgets — Telegram'ning rasmiy hamkori emas (Telegram bunday vakolat bermaydi), lekin mahalliy vositachi sifatida ishlaydi. Ishonchni 7 ta texnik signal orqali baholash mumkin: HTTPS, aniq domen, BotFather standartiga mos bot nomi, oshkora narxlar, /privacy va /terms sahifalari, faqat @username so'rash. Hammasi tekshirilishi mumkin.",
        },
        {
          question: "Uzgets Telegram tomonidan tasdiqlanganmi?",
          answer:
            "Yo'q. Telegram'da reseller'lar uchun rasmiy tasdiq tizimi yo'q — Telegram faqat juda katta platformalarga ko'k 'verified' nishonini beradi. @uzgetsbot rasmiy BotFather orqali yaratilgan va 'bot' suffixi bilan tugaydi (Telegram standartiga muvofiq) — bu botning Telegram tizimida qonuniy ro'yxatdan o'tganini ko'rsatadi, lekin verification belgisi emas.",
        },
        {
          question: 'Botga akkauntim parolini berishim kerakmi?',
          answer:
            "Yo'q, hech qachon. Rasmiy @uzgetsbot faqat @username so'raydi — parol, SMS-kod, 2FA yoki telefon raqami so'ramaydi. Agar biror bot bunday narsa so'rasa — bu firibgarlik, akkountingiz o'g'irlanishi xavfi bor.",
        },
        {
          question: 'Klon va firibgar botlarni qanday tanib olish mumkin?',
          answer:
            "Rasmiy bot — @uzgetsbot. Klonlar bir-ikki harfni o'zgartiradi: @uzg3tsbot (e o'rniga 3), @uzgets_official, @uzgetbot (s yo'q), @uzgetsbot1. Faqat sayt yoki bu maqolalardagi havola orqali o'ting — qo'lda yozish emas.",
        },
        {
          question: "Pul qaytarish qanday ishlaydi?",
          answer:
            "Foydalanish shartlarining 5-bandida yozilgan: to'lov o'tib, mahsulot biriktirilmagan bo'lsa (texnik xato) — pul to'liq qaytariladi yoki mahsulot qayta yuboriladi. Foydalanuvchi xatosi (noto'g'ri @username) — alohida ko'rib chiqiladi. Mahsulot muvaffaqiyatli yetkazilgach to'lov qaytarilmaydi.",
        },
        {
          question: "Karta ma'lumotlarim qayerda saqlanadi?",
          answer:
            "Uzgets karta ma'lumotlarini saqlamaydi. To'lov to'g'ridan-to'g'ri rasmiy to'lov tizimi (UzCard, Humo, Click yoki Payme) tomonidan ishlov beriladi — bu tizimlar O'zbekiston Markaziy banki nazoratidagi infratuzilma. Bot faqat to'lov natijasini (muvaffaqiyatli/rad) oladi.",
        },
        {
          question: 'Sotuvchini boshqa qanday tekshirsam bo\'ladi?',
          answer:
            "Whois orqali domen qachon ro'yxatdan o'tganini ko'ring (yangi yaratilgan domen — qizil bayroq). Saytda /privacy va /terms sahifalari mavjudligini tekshiring. Bot profilida sayt havolasi va tavsif mavjudligini ko'ring. Narxlar bozor diapazonida ekanligini tekshiring — bozordan 50%+ past narx ham xavfli signal.",
        },
      ],
      finalCtaHeading: "Tekshirib bo'ldingizmi?",
      finalCtaBody:
        "Saytdagi belgilarni va botni baholab chiqdingiz. Tayyor bo'lsangiz, rasmiy bot orqali buyurtma rasmiylashtiring — t.me/uzgetsbot.",
    },
    ru: {
      title: 'Можно ли доверять Uzgets? — Сигналы проверки сайта и бота',
      description:
        'Можно ли доверять Uzgets? Как проверить сайт (HTTPS, домен, цены), бот (@uzgetsbot, не запрашивает пароль), клонов и признаки мошенничества — 7 практических сигналов.',
      metaTitle: 'Можно ли доверять Uzgets? — Сигналы проверки 2026',
      metaDescription:
        'Можно ли доверять Uzgets — как проверить сайт, бот и оплату: HTTPS, домен, суффикс @uzgetsbot, клоны, гарантия возврата. 7 сигналов и практическое руководство.',
      ogDescription:
        'Можно ли доверять Uzgets — самостоятельная проверка сайта, бота и оплаты.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Можно ли доверять сервису Uzgets?',
          answer:
            'Uzgets — не официальный партнёр Telegram (Telegram таких полномочий не выдаёт), но работает как локальный посредник. Доверие можно оценить по 7 техническим сигналам: HTTPS, точное имя домена, имя бота по стандарту BotFather, открытые цены, страницы /privacy и /terms, запрос только @username. Всё проверяется самостоятельно.',
        },
        {
          question: 'Подтверждён ли Uzgets от Telegram?',
          answer:
            'Нет. В Telegram нет официальной системы подтверждения для реселлеров — синяя галочка «verified» выдаётся только очень крупным площадкам. @uzgetsbot создан через официальный BotFather и имеет суффикс «bot» (по стандарту Telegram) — это значит, что бот легально зарегистрирован в системе Telegram, но это не verified-знак.',
        },
        {
          question: 'Нужно ли давать боту пароль от аккаунта?',
          answer:
            'Нет, никогда. Официальный @uzgetsbot запрашивает только @username — пароль, SMS-код, 2FA или номер телефона не запрашиваются. Если какой-то бот просит это — мошенничество, ваш аккаунт могут украсть.',
        },
        {
          question: 'Как отличить клонов и мошеннических ботов?',
          answer:
            'Официальный бот — @uzgetsbot. Клоны меняют одну-две буквы: @uzg3tsbot (e заменена на 3), @uzgets_official, @uzgetbot (нет s), @uzgetsbot1. Переходите только по ссылке с сайта или из этих статей — не вводите имя вручную.',
        },
        {
          question: 'Как работает возврат денег?',
          answer:
            'Описано в пункте 5 Условий использования: если оплата прошла, а товар не зачислен (техническая ошибка), деньги возвращаются полностью или товар отправляется заново. Ошибка пользователя (неверный @username) — рассматривается индивидуально. После успешной доставки возврат не предусмотрен.',
        },
        {
          question: 'Где хранятся данные моей карты?',
          answer:
            'Uzgets не хранит данные карт. Оплату обрабатывает напрямую официальная платёжная система (UzCard, Humo, Click или Payme) — инфраструктура под надзором Центробанка Узбекистана. Бот получает только результат оплаты (успешно или отклонено).',
        },
        {
          question: 'Как ещё можно проверить продавца?',
          answer:
            'Через WHOIS посмотрите дату регистрации домена (свежесозданный домен — красный флаг). Проверьте наличие страниц /privacy и /terms на сайте. В профиле бота посмотрите ссылку на сайт и описание. Убедитесь, что цены в рыночном диапазоне — цена на 50%+ ниже рынка тоже опасный сигнал.',
        },
      ],
      finalCtaHeading: 'Проверили?',
      finalCtaBody:
        'Вы оценили сайт и бот. Если готовы — оформите заказ через официальный бот: t.me/uzgetsbot.',
    },
  },
}
