import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-bot-orqali-tolash-xavfsizmi'
const TODAY = '2026-05-22'

function UzAnswerBox() {
  return (
    <p>
      Ha, lekin <strong>qoidalarga rioya qilingan holda</strong>. O&apos;zbek Telegram-botlarida
      (Uzgets ham shu jumladan) to&apos;lov shunday ishlaydi: bot mini-app ichida karta raqami va{' '}
      <strong>aniq summa</strong> (masalan 10,950 so&apos;m) ko&apos;rsatadi. Siz{' '}
      <strong>o&apos;zingizning</strong> Click/Payme/UzCard/Humo ilovangizdan shu kartaga aynan
      shu summani o&apos;tkazasiz — tizim summa orqali to&apos;lovingizni avtomatik tanib oladi.
      Bot sizdan <strong>karta raqami, parol, SMS-kod hech qachon so&apos;ramaydi</strong> —
      karta sizning bank ilovangizdan chiqmaydi. Xavf esa <strong>anonim</strong> botlarda:
      sayti yo&apos;q, /terms yo&apos;q, identifikatsiya yo&apos;q, chat ichida karta yoki kod
      so&apos;raydi. Pastda 7 ta xavf signali va 5 ta xavfsizlik belgisi — to&apos;lashdan oldin
      har birini tekshiring.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Да, но <strong>при соблюдении правил</strong>. В узбекских Telegram-ботах (включая Uzgets)
      оплата работает так: бот в мини-приложении показывает номер карты и{' '}
      <strong>точную сумму</strong> (например 10,950 сум). Вы переводите эту сумму из{' '}
      <strong>своего</strong> приложения Click/Payme/UzCard/Humo на указанную карту — система
      автоматически распознаёт платёж по сумме. Бот <strong>никогда не запрашивает номер карты,
      пароль, SMS-код</strong> — карта не покидает ваше банковское приложение. Опасны{' '}
      <strong>анонимные</strong> боты: нет сайта, нет /terms, нет идентификации, или просят карту
      и код в чате. Ниже 7 признаков опасности и 5 признаков безопасности — проверьте каждый
      перед оплатой.
    </p>
  )
}

function FlowSteps({ lang }: { lang: 'uz' | 'ru' }) {
  type Step = {
    n: number
    title: { uz: string; ru: string }
    body: { uz: string; ru: string }
  }
  const steps: Step[] = [
    {
      n: 1,
      title: { uz: "Botda buyurtma berasiz", ru: 'Оформляете заказ в боте' },
      body: {
        uz: "Masalan 3 oylik Premium @username uchun. Bot summa va karta raqamini mini-app ichida ko'rsatadi.",
        ru: 'Например 3 месяца Premium для @username. Бот показывает сумму и номер карты в мини-приложении.',
      },
    },
    {
      n: 2,
      title: { uz: "O'z to'lov ilovangizni ochasiz", ru: 'Открываете своё платёжное приложение' },
      body: {
        uz: "Click, Payme, UzCard yoki Humo — qaysi ilovangiz mavjud bo'lsa. Bot ichida karta yoki kod yozmaysiz.",
        ru: 'Click, Payme, UzCard или Humo — то, что у вас установлено. В чате бота карту или код не вводите.',
      },
    },
    {
      n: 3,
      title: { uz: "Aniq summani o'tkazasiz", ru: 'Переводите точную сумму' },
      body: {
        uz: "10,950 so'm bo'lsa — aynan 10,950. Bu summa tranzaksiya ID'si vazifasini bajaradi va tizim shu orqali sizni aniqlaydi.",
        ru: 'Если 10,950 сум — ровно 10,950. Эта сумма выполняет роль идентификатора транзакции, по ней система распознаёт ваш платёж.',
      },
    },
    {
      n: 4,
      title: { uz: "Tizim avtomatik tanib oladi", ru: 'Система распознаёт автоматически' },
      body: {
        uz: "Screenshot yuborish shart emas — tizim summa va vaqt bo'yicha to'lovingizni topadi.",
        ru: 'Скриншот отправлять не нужно — система находит ваш платёж по сумме и времени.',
      },
    },
    {
      n: 5,
      title: { uz: "Buyurtma bajariladi", ru: 'Заказ выполняется' },
      body: {
        uz: "1-2 daqiqa ichida Premium @username'ga biriktiriladi yoki Stars beriladi.",
        ru: 'В течение 1–2 минут Premium активируется на @username или зачисляются Stars.',
      },
    },
  ]
  return (
    <div className="my-6 space-y-3">
      {steps.map((s) => (
        <div key={s.n} className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-semibold text-white">
            {s.n}
          </div>
          <div>
            <div className="font-semibold">{s.title[lang]}</div>
            <div className="mt-0.5 text-sm text-[var(--text-muted)]">{s.body[lang]}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function RedFlagsTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    signal: { uz: string; ru: string }
    why: { uz: string; ru: string }
  }
  const rows: Row[] = [
    {
      signal: {
        uz: "Chat ichida karta raqami, CVV yoki amal qilish muddatini yozish so'raladi",
        ru: 'Просят написать номер карты, CVV или срок в чате',
      },
      why: {
        uz: "Qonuniy xizmat siz to'layotgan kartaga aralashmaydi — karta sizning to'lov ilovangizda qoladi.",
        ru: 'Легальный сервис не вмешивается в карту, с которой вы платите — она остаётся в вашем приложении.',
      },
    },
    {
      signal: {
        uz: "Parol, SMS-kod, 2FA tasdiqlash kodi yoki Telegram kirish kodini so'raydi",
        ru: 'Запрашивают пароль, SMS-код, 2FA или код входа в Telegram',
      },
      why: {
        uz: "Hech qaysi qonuniy xizmat akkaunt parolini yoki kodini so'ramaydi. Bu akkauntni o'g'irlash sxemasi.",
        ru: 'Ни один легальный сервис не запрашивает пароль или код подтверждения. Это схема угона аккаунта.',
      },
    },
    {
      signal: {
        uz: "Karta egasi anonim — bot ortida sayt, /terms, kontakt yo'q",
        ru: 'Получатель анонимный — у бота нет сайта, /terms, контактов',
      },
      why: {
        uz: "Tanilgan biznes kartasi bilan anonim shaxsiy karta orasidagi farq aniq: biznes javobgar, anonim emas.",
        ru: 'Карта известного бизнеса и анонимная личная карта — разница огромная: бизнес отвечает, аноним — нет.',
      },
    },
    {
      signal: {
        uz: "To'lov summasi 'taxminan' yoki yumaloq raqam — aniq summa yo'q",
        ru: 'Сумма «примерно» или круглая — нет точной суммы',
      },
      why: {
        uz: "Aniq summa tranzaksiya identifikatori vazifasini bajaradi (10,950 — 11,000 emas). Aniqlik yo'q bo'lsa, kim qaysi to'lovni qildi noaniq.",
        ru: 'Точная сумма работает как ID транзакции (10,950 — а не 11,000). Без точности непонятно, кто что заплатил.',
      },
    },
    {
      signal: {
        uz: "Bozordan 40-50% past 'ajoyib' narx",
        ru: 'Цена на 40–50% ниже рынка',
      },
      why: {
        uz: "Real bozor narxi ma'lum chegaradan past tushmaydi (qiyosiy jadval — pastdagi havolada). Past narx — qopqon.",
        ru: 'Реальная рыночная цена не опускается ниже определённого порога (сравнительная таблица — ниже). Низкая цена = ловушка.',
      },
    },
    {
      signal: {
        uz: "'Bepul Premium yutib oldingiz' / 'Tez ro'yxatdan o'ting' shoshilish",
        ru: '«Вы выиграли бесплатный Premium» / «Срочно зарегистрируйтесь»',
      },
      why: {
        uz: "Aura va Kaspersky tasvirlab bergan klassik phishing: tasodifiy 'sovg'a' → soxta login sahifa → akkaunt o'g'irlanadi.",
        ru: 'Классический фишинг (описан Aura и Kaspersky): случайный «подарок» → фейковая страница входа → угон аккаунта.',
      },
    },
    {
      signal: {
        uz: "Bot nomi mashhur xizmat nomiga juda o'xshash, lekin 1-2 harf farq qiladi",
        ru: 'Имя бота очень похоже на известный сервис, но отличается 1–2 буквами',
      },
      why: {
        uz: "Klassik usul: 'o' → '0', 'l' → '1', oxiriga '_official' qo'shish. Doimo to'liq URL'ni tekshiring.",
        ru: "Классика: 'o' → '0', 'l' → '1', добавление '_official' в конце. Всегда сверяйте полный URL.",
      },
    },
  ]
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Xavf signali' : 'Признак опасности'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Nima uchun xavfli' : 'Почему опасно'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{r.signal[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.why[lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function GreenFlagsTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    signal: { uz: string; ru: string }
    note: { uz: string; ru: string }
  }
  const rows: Row[] = [
    {
      signal: {
        uz: "Bot mini-app ichida aniq summa va karta raqami ko'rsatiladi",
        ru: 'В мини-приложении бота показаны точная сумма и номер карты',
      },
      note: {
        uz: "Aniq summa (10,950) tranzaksiya ID'si — tizim avtomatik tanib oladi",
        ru: 'Точная сумма (10,950) — это ID транзакции, система распознаёт автоматически',
      },
    },
    {
      signal: {
        uz: "O'tkazma siz tanlagan to'lov ilovasidan amalga oshiriladi",
        ru: 'Перевод выполняется из выбранного вами платёжного приложения',
      },
      note: {
        uz: 'Click, Payme, UzCard yoki Humo — barchasi O\'zbekiston Markaziy banki nazoratidagi tizimlar',
        ru: 'Click, Payme, UzCard или Humo — все под надзором Центробанка Узбекистана',
      },
    },
    {
      signal: {
        uz: "Bot ortida sayt mavjud (HTTPS, aniq domen, /terms, /privacy)",
        ru: 'У бота есть сайт (HTTPS, точный домен, /terms, /privacy)',
      },
      note: {
        uz: "Identifikatsiya bor — javobgar biznes (anonim shaxs emas)",
        ru: 'Есть идентификация — ответственный бизнес (не анонимный человек)',
      },
    },
    {
      signal: {
        uz: "Bot faqat @username so'raydi (parol, kod, CVV emas)",
        ru: 'Бот запрашивает только @username (не пароль, код или CVV)',
      },
      note: {
        uz: "Telegram'ga Premium/Stars yetkazish uchun shu kifoya",
        ru: 'Для зачисления Premium/Stars в Telegram этого достаточно',
      },
    },
    {
      signal: {
        uz: "Narxlar saytda va botda bir xil (oshkora va izchil)",
        ru: 'Цены одинаковы на сайте и в боте (открытые и согласованные)',
      },
      note: {
        uz: 'Narx farqi sezilsa — bu klon yoki nusxa bot',
        ru: 'Если видите расхождение — это клон или копия бота',
      },
    },
  ]
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Xavfsizlik belgisi' : 'Признак безопасности'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? "Izoh" : 'Примечание'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[var(--primary)]/20 bg-[var(--primary)]/5">
              <td className="px-4 py-2 font-medium">{r.signal[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.note[lang]}</td>
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
          <a href="https://www.aura.com/learn/telegram-app-scams" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            aura.com/learn/telegram-app-scams
          </a>{' '}
          — {lang === 'uz' ? "Telegram firibgarliklari ro'yxati 2026 (giveaway, fake support, fishing)" : 'Список Telegram-мошенничеств 2026 (giveaway, fake support, фишинг)'}
        </li>
        <li>
          <a href="https://nordpass.com/blog/telegram-scams/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            nordpass.com/blog/telegram-scams
          </a>{' '}
          — {lang === 'uz' ? "NordPass tahlili: fake bot belgilari, username almashtirish (O→0, I→l)" : 'Анализ NordPass: признаки фейковых ботов, подмена username (O→0, I→l)'}
        </li>
        <li>
          <a href="https://core.telegram.org/bots" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/bots
          </a>{' '}
          — {lang === 'uz' ? "Telegram BotFather standartlari (bot nomi 'bot' suffixiga ega bo'lishi shart)" : 'Стандарты Telegram BotFather (имя бота должно заканчиваться на «bot»)'}
        </li>
        <li>
          <a href={`${siteConfig.url}/privacy`} className="hover:text-[var(--primary)] hover:underline">
            uzgets.uz/privacy
          </a>{' '}
          — {lang === 'uz' ? "Uzgets maxfiylik siyosati: karta ma'lumotlari saqlanmaydi" : 'Политика конфиденциальности Uzgets: данные карт не хранятся'}
        </li>
        <li>
          <a href={`${siteConfig.url}/terms`} className="hover:text-[var(--primary)] hover:underline">
            uzgets.uz/terms
          </a>{' '}
          — {lang === 'uz' ? "Foydalanish shartlari va pul qaytarish bandi" : 'Условия использования и пункт о возврате'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Oxirgi tekshiruv: 2026-yil may. To'lov tizimlari va Telegram qoidalari o'zgarishi bilan yangilanadi."
          : 'Последняя проверка: май 2026. Обновляется при изменениях правил платёжных систем и Telegram.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="qanday-ishlaydi">O&apos;zbek Telegram-botlarida to&apos;lov qanday ishlaydi?</h2>
      <p>
        O&apos;zbek Telegram-botlarida (Uzgets, shu jumladan) <strong>siz</strong> o&apos;tkazmani
        boshlovchisiz — bot sizning hisobingizdan avtomatik pul tortib olmaydi. Tartib oddiy:
      </p>
      <FlowSteps lang="uz" />
      <p>
        Bu modelda <strong>karta sizning bank ilovangizdan chiqmaydi</strong>: bot va Telegram
        karta raqamiga, CVV&apos;ga, parolga — hech narsaga ega bo&apos;la olmaydi. Aniq summa
        (masalan 10,950 so&apos;m) bir vaqtning o&apos;zida ikki vazifani bajaradi: (a) tizim shu
        summa orqali sizning to&apos;lovingizni boshqa to&apos;lovlardan farqlaydi, (b) yumaloqlash
        yo&apos;qligi screenshot yoki manual tasdiqlash kerakligini bartaraf qiladi.
      </p>

      <h2 id="nima-uchun-xavfsiz">Nima uchun bu model xavfsiz?</h2>
      <ol>
        <li>
          <strong>Karta sizning bank ilovangizdan chiqmaydi.</strong> Siz Click, Payme, UzCard yoki
          Humo ilovasi ichida qolasiz — botda hech qanday karta ma&apos;lumoti yozmaysiz.
        </li>
        <li>
          <strong>To&apos;lov tizimlari litsenziyalangan.</strong> Click, Payme, UzCard, Humo —
          barchasi O&apos;zbekiston Markaziy banki nazoratidagi infratuzilma. Karta ma&apos;lumotlari
          ulardan tashqariga chiqmaydi.
        </li>
        <li>
          <strong>O&apos;tkazmani siz boshlaysiz.</strong> Botning avtomatik pul yechish vakolati
          yo&apos;q — agar pul jo&apos;natmasangiz, hech narsa sodir bo&apos;lmaydi.
        </li>
        <li>
          <strong>Bot @username dan boshqa ma&apos;lumot so&apos;ramaydi.</strong> Parol, SMS-kod,
          2FA — hech qachon. Faqat kim uchun Premium/Stars kerakligini ko&apos;rsatasiz.
        </li>
      </ol>

      <InlineBotCTA lang="uz" text="Rasmiy bot: t.me/uzgetsbot — modelni o'zingiz tekshiring." />

      <h2 id="xavf-signallari">Xavf signallari — 7 ta belgi</h2>
      <p>
        Quyidagi belgilarning <strong>birortasi</strong> ham sezilsa — to&apos;xtang, to&apos;lov
        qilmang:
      </p>
      <RedFlagsTable lang="uz" />

      <h2 id="xavfsizlik-belgilari">Xavfsizlik belgilari — 5 ta yashil bayroq</h2>
      <p>
        Aksincha, quyidagi belgilar mavjud bo&apos;lsa — bot tegishli xavfsizlik modelini
        ishlatmoqda:
      </p>
      <GreenFlagsTable lang="uz" />

      <h2 id="tekshirish-qadamlari">To&apos;lashdan oldin — 4 qadam tekshiruv</h2>
      <ol>
        <li>
          <strong>Bot nomini diqqat bilan o&apos;qing.</strong> @uzgetsbot — bu rasmiy. Klonlar
          bir-ikki harfni almashtiradi (@uzg3tsbot, @uzgets_official, @uzgetbot). Doimo{' '}
          <em>saytdagi havola</em> orqali o&apos;ting — qo&apos;lda yozmang.
        </li>
        <li>
          <strong>Bot ortida sayt borligini tekshiring.</strong> Bot profili → sayt havolasi →
          HTTPS qulf belgisi → /privacy va /terms sahifalari ochilishi shart. Yo&apos;q bo&apos;lsa
          — anonim, javobgar yo&apos;q.
        </li>
        <li>
          <strong>Summa va karta aniq ko&apos;rsatilganini ko&apos;ring.</strong> Bot mini-app
          ichida aniq summa (masalan 10,950 so&apos;m — yumaloq emas) va karta raqami chiqishi
          shart. Agar &quot;karta raqamingizni yozing&quot; xabari kelsa — bu firibgarlik, darhol
          chiqib keting.
        </li>
        <li>
          <strong>Narx bozor diapazonida ekanligini tekshiring.</strong> 50⭐ uchun ~11 000 so&apos;m,
          3 oylik Premium uchun ~168 000 so&apos;m — bu O&apos;zbekistondagi bozor darajasi (
          <Link href="/blog/telegram-stars-narxlari-jadval" className="text-[var(--primary)] hover:underline">to&apos;liq narx jadvali</Link>).
          Bundan 40-50% past narx — qopqon belgisi.
        </li>
      </ol>

      <InlineBotCTA lang="uz" text="To'rtta tekshiruvdan o'tdimi? Botda buyurtmangizni rasmiylashtiring." />

      <h2 id="muammo-bolsa">Muammo yuzaga kelsa — nima qilish kerak?</h2>
      <p>
        Agar to&apos;lov o&apos;tib, mahsulot kelmagan bo&apos;lsa — bu doim firibgarlik degani
        emas. Bir nechta texnik sabab bor (akkaunt cheklovi, @username xato, Telegram tomondan
        kechikish, summa yumaloqlangan bo&apos;lishi). Tartib:
      </p>
      <ol>
        <li>
          <strong>To&apos;lov chekini saqlang.</strong> Click/Payme ilovasidan tranzaksiya
          tafsilotini screenshot oling — bu keyingi muloqotlar uchun asosiy dalil.
        </li>
        <li>
          <strong>Summa aynan bot ko&apos;rsatganidek yuborilganini tekshiring.</strong>{' '}
          10,950 o&apos;rniga 11,000 yuborilgan bo&apos;lsa — tizim sizni avtomatik aniqlay olmaydi,
          qo&apos;lda tasdiqlash kerak.
        </li>
        <li>
          <strong>Bot ichidagi qo&apos;llab-quvvatlash menyusiga yozing.</strong> Rasmiy botda{' '}
          <em>Yordam</em> yoki <em>Support</em> tugmasi bo&apos;ladi — to&apos;lov screenshot va{' '}
          @username ni yuboring.
        </li>
        <li>
          <strong>Javob kelmasa — saytdagi aloqa orqali yozing.</strong>{' '}
          <Link href="/aloqa" className="text-[var(--primary)] hover:underline">/aloqa</Link>{' '}
          sahifasida pochta va Telegram aloqa kanali bor. Pul qaytarish shartlari —{' '}
          <Link href="/terms" className="text-[var(--primary)] hover:underline">/terms 5-band</Link>.
        </li>
        <li>
          <strong>Karta xizmati orqali murojaat.</strong> Agar javob umuman bo&apos;lmasa
          (firibgar bot) — UzCard/Humo/karta beruvchi bankingizga to&apos;lov tortishuvi (dispute)
          arizasi bering. To&apos;lov screenshot va yozishmalar shart.
        </li>
      </ol>

      <h2 id="uzgets-misol">Uzgets bu mezonlarga qanday mos keladi?</h2>
      <p>
        Yuqoridagi 5 ta yashil bayroqning hammasi Uzgets uchun ham amal qiladi:
      </p>
      <ul>
        <li>
          Bot mini-app ichida <strong>aniq summa va karta raqami</strong> ko&apos;rsatiladi —
          chat ichida karta yoki kod so&apos;ralmaydi.
        </li>
        <li>
          O&apos;tkazma siz tanlagan ilovadan: <strong>Click, Payme, UzCard, Humo</strong> —
          O&apos;zbekiston Markaziy banki nazoratidagi tizimlar.
        </li>
        <li>
          Bot ortida sayt: <strong>uzgets.uz</strong> (HTTPS), narxlar oshkora —{' '}
          <Link href="/premium" className="text-[var(--primary)] hover:underline">/premium</Link>,{' '}
          <Link href="/stars" className="text-[var(--primary)] hover:underline">/stars</Link>{' '}
          sahifalarida bot bilan bir xil. Identifikatsiya bor — anonim emas.
        </li>
        <li>
          Bot faqat <strong>@username</strong> so&apos;raydi — parol, SMS-kod, CVV hech qachon.
        </li>
        <li>
          <Link href="/privacy" className="text-[var(--primary)] hover:underline">/privacy</Link>{' '}
          va <Link href="/terms" className="text-[var(--primary)] hover:underline">/terms</Link>{' '}
          ochiq — pul qaytarish bandi 5-band.
        </li>
      </ul>
      <p>
        Texnik tafsilot bilan to&apos;liqroq tanishish uchun —{' '}
        <Link href="/blog/uzgets-ishonchli-mi-tekshirish-belgilari" className="text-[var(--primary)] hover:underline">
          Uzgets ishonchli mi? — 7 ta tekshirish signali
        </Link>.
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Yashil bayroqlarni tekshirdingizmi? Botga ishonch bilan o'ting." />

      <h2 id="qoshimcha-resurslar">Qo&apos;shimcha resurslar</h2>
      <ul>
        <li>
          <Link href="/blog/uzgets-ishonchli-mi-tekshirish-belgilari" className="text-[var(--primary)] hover:underline">
            Uzgets ishonchli mi? — saytni va botni tekshirish belgilari
          </Link>{' '}
          — universal tekshirishni Uzgets misolida qo&apos;llash
        </li>
        <li>
          <Link href="/blog/arzon-stars-qayerdan-olinadi-3-belgi" className="text-[var(--primary)] hover:underline">
            Arzon Stars qayerdan olinadi — 3 ta belgi
          </Link>{' '}
          — narx-asoslangan firibgarlikning belgilari
        </li>
        <li>
          <Link href="/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">
            Akkauntda Premium ko&apos;rinmayapti — sabablari
          </Link>{' '}
          — to&apos;lov o&apos;tib mahsulot kelmasa nima qilish kerak
        </li>
        <li>
          <Link href="/blog/telegram-premium-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">
            Premium UzCard/Humo bilan — sotib olish
          </Link>{' '}
          — to&apos;lov qadamlari bo&apos;yicha amaliy qo&apos;llanma
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="qanday-ishlaydi">Как работают платежи через узбекские Telegram-боты?</h2>
      <p>
        В узбекских Telegram-ботах (включая Uzgets) <strong>вы сами</strong> инициируете перевод —
        бот не списывает деньги автоматически. Порядок прост:
      </p>
      <FlowSteps lang="ru" />
      <p>
        В этой модели <strong>карта не покидает ваше банковское приложение</strong>: ни бот, ни
        Telegram не имеют доступа к номеру карты, CVV, паролю — ни к чему. Точная сумма
        (например 10,950 сум) выполняет сразу две функции: (а) система отличает ваш платёж от
        других именно по этой сумме, (б) отсутствие округления исключает необходимость скриншота
        или ручного подтверждения.
      </p>

      <h2 id="nima-uchun-xavfsiz">Почему эта модель безопасна?</h2>
      <ol>
        <li>
          <strong>Карта не покидает ваше банковское приложение.</strong> Вы остаётесь внутри Click,
          Payme, UzCard или Humo — в боте никаких данных карты не вводите.
        </li>
        <li>
          <strong>Платёжные системы лицензированы.</strong> Click, Payme, UzCard, Humo — все под
          надзором Центробанка Узбекистана. Данные карты не покидают эту инфраструктуру.
        </li>
        <li>
          <strong>Перевод инициируете вы.</strong> У бота нет полномочий списать деньги
          автоматически — если вы не отправили, ничего не произойдёт.
        </li>
        <li>
          <strong>Бот не запрашивает ничего, кроме @username.</strong> Пароль, SMS-код, 2FA —
          никогда. Вы только указываете, для кого нужен Premium/Stars.
        </li>
      </ol>

      <InlineBotCTA lang="ru" text="Официальный бот: t.me/uzgetsbot — проверьте модель сами." />

      <h2 id="xavf-signallari">Признаки опасности — 7 сигналов</h2>
      <p>
        Если замечаете <strong>хотя бы один</strong> из этих признаков — остановитесь, не платите:
      </p>
      <RedFlagsTable lang="ru" />

      <h2 id="xavfsizlik-belgilari">Признаки безопасности — 5 зелёных флагов</h2>
      <p>
        И наоборот, при наличии этих признаков бот использует корректную модель безопасности:
      </p>
      <GreenFlagsTable lang="ru" />

      <h2 id="tekshirish-qadamlari">Перед оплатой — 4 шага проверки</h2>
      <ol>
        <li>
          <strong>Внимательно прочитайте имя бота.</strong> @uzgetsbot — официальный. Клоны меняют
          одну-две буквы (@uzg3tsbot, @uzgets_official, @uzgetbot). Всегда переходите{' '}
          <em>по ссылке с сайта</em> — не вводите имя вручную.
        </li>
        <li>
          <strong>Проверьте, что у бота есть сайт.</strong> Профиль бота → ссылка на сайт →
          иконка замка HTTPS → страницы /privacy и /terms открываются. Если нет — это анонимный
          бот, отвечать некому.
        </li>
        <li>
          <strong>Посмотрите, чётко ли указаны сумма и карта.</strong> В мини-приложении бота
          должна быть точная сумма (например 10,950 сум — не округлённая) и номер карты. Если в
          чате появляется сообщение «введите номер карты» — это мошенничество, выходите.
        </li>
        <li>
          <strong>Сверьте цену с рыночной.</strong> 50⭐ — около 11 000 сум, 3 месяца Premium —
          около 168 000 сум, это рыночный уровень в Узбекистане (
          <Link href="/ru/blog/telegram-stars-narxlari-jadval" className="text-[var(--primary)] hover:underline">полная таблица цен</Link>).
          Цена на 40–50% ниже — признак ловушки.
        </li>
      </ol>

      <InlineBotCTA lang="ru" text="Прошли 4 проверки? Оформите заказ в боте." />

      <h2 id="muammo-bolsa">Что делать, если возникла проблема?</h2>
      <p>
        Если оплата прошла, а товар не пришёл — это не всегда мошенничество. Есть технические
        причины (ограничение аккаунта, ошибка в @username, задержка со стороны Telegram, сумма
        отправлена округлённой). Порядок:
      </p>
      <ol>
        <li>
          <strong>Сохраните чек оплаты.</strong> Из приложения Click/Payme сделайте скриншот
          транзакции — это основное доказательство для дальнейшего общения.
        </li>
        <li>
          <strong>Проверьте, что сумма отправлена ровно как показал бот.</strong> Если вместо
          10,950 отправили 11,000 — система не сможет автоматически опознать ваш платёж, нужно
          ручное подтверждение.
        </li>
        <li>
          <strong>Напишите в меню поддержки бота.</strong> В официальном боте есть кнопка{' '}
          <em>Помощь</em> или <em>Support</em> — отправьте скриншот платежа и @username.
        </li>
        <li>
          <strong>Нет ответа — напишите через контакты на сайте.</strong>{' '}
          <Link href="/ru/aloqa" className="text-[var(--primary)] hover:underline">/ru/aloqa</Link>{' '}
          содержит почту и канал в Telegram. Условия возврата —{' '}
          <Link href="/ru/terms" className="text-[var(--primary)] hover:underline">/ru/terms, пункт 5</Link>.
        </li>
        <li>
          <strong>Обращение в банк.</strong> Если ответа вообще нет (мошеннический бот) — подайте
          заявление о спорной транзакции (dispute) в банк-эмитент UzCard/Humo. Понадобится
          скриншот платежа и переписка.
        </li>
      </ol>

      <h2 id="uzgets-misol">Как Uzgets соответствует этим критериям?</h2>
      <p>
        Все 5 зелёных флагов выше применимы и к Uzgets:
      </p>
      <ul>
        <li>
          В мини-приложении бота показаны <strong>точная сумма и номер карты</strong> — в чате
          карту или код не запрашивают.
        </li>
        <li>
          Перевод из выбранного вами приложения: <strong>Click, Payme, UzCard, Humo</strong> —
          под надзором Центробанка Узбекистана.
        </li>
        <li>
          За ботом сайт: <strong>uzgets.uz</strong> (HTTPS), цены открыты —{' '}
          <Link href="/ru/premium" className="text-[var(--primary)] hover:underline">/ru/premium</Link>,{' '}
          <Link href="/ru/stars" className="text-[var(--primary)] hover:underline">/ru/stars</Link>{' '}
          совпадают с ботом. Идентификация есть — не аноним.
        </li>
        <li>
          Бот запрашивает только <strong>@username</strong> — пароль, SMS-код, CVV никогда.
        </li>
        <li>
          <Link href="/ru/privacy" className="text-[var(--primary)] hover:underline">/ru/privacy</Link>{' '}
          и <Link href="/ru/terms" className="text-[var(--primary)] hover:underline">/ru/terms</Link>{' '}
          открыты — пункт возврата 5.
        </li>
      </ul>
      <p>
        Глубже о технической проверке —{' '}
        <Link href="/ru/blog/uzgets-ishonchli-mi-tekshirish-belgilari" className="text-[var(--primary)] hover:underline">
          Можно ли доверять Uzgets? — 7 сигналов проверки
        </Link>.
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Проверили зелёные флаги? Переходите в бот уверенно." />

      <h2 id="qoshimcha-resurslar">Дополнительные ресурсы</h2>
      <ul>
        <li>
          <Link href="/ru/blog/uzgets-ishonchli-mi-tekshirish-belgilari" className="text-[var(--primary)] hover:underline">
            Можно ли доверять Uzgets? — Сигналы проверки сайта и бота
          </Link>{' '}
          — универсальные проверки на примере Uzgets
        </li>
        <li>
          <Link href="/ru/blog/arzon-stars-qayerdan-olinadi-3-belgi" className="text-[var(--primary)] hover:underline">
            Откуда брать дешёвые Stars — 3 признака
          </Link>{' '}
          — признаки мошенничества с точки зрения цены
        </li>
        <li>
          <Link href="/ru/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">
            Premium не отображается в аккаунте — причины
          </Link>{' '}
          — что делать, если оплата прошла, а товара нет
        </li>
        <li>
          <Link href="/ru/blog/telegram-premium-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">
            Premium через UzCard/Humo — покупка
          </Link>{' '}
          — практическое руководство по шагам оплаты
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
      title: "Telegram bot orqali to'lash xavfsizmi? — 7 xavf va 5 xavfsizlik belgisi",
      description:
        "O'zbek Telegram-botlarida to'lov qanday ishlaydi (mini-app, aniq summa, avtomatik aniqlash), qachon xavfli va qachon xavfsiz — 7 xavf signali, 5 yashil bayroq va 4 qadam tekshiruvi.",
      metaTitle: "Telegram bot orqali to'lash xavfsizmi? — 2026 qo'llanma",
      metaDescription:
        "Telegram bot orqali to'lov xavfsizmi? O'zbek botlarda to'lov modeli (mini-app + aniq summa), qaysi belgilar firibgar bot demoqda — 7 xavf va 5 xavfsizlik signali bilan to'liq qo'llanma.",
      ogDescription:
        "O'zbek Telegram-botlarida to'lov qanday ishlaydi va qachon xavfli — to'liq tekshirish qo'llanmasi.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "Telegram bot orqali to'lash xavfsizmi?",
          answer:
            "Texnik jihatdan ha, agar bot to'g'ri modelni ishlatsa. O'zbek botlarida (Uzgets ham shu jumladan) to'lov shunday: bot mini-app ichida karta raqami va aniq summa ko'rsatadi, siz o'zingizning Click/Payme/UzCard/Humo ilovangizdan shu kartaga aynan shu summani o'tkazasiz. Karta sizning bank ilovangizdan chiqmaydi, botga hech qanday ma'lumot bermaysiz. Lekin firibgar botlar bu modelni buzadi — chat ichida karta yoki kod so'rab xavfsizlikni yo'qqa chiqaradi. 7 ta xavf va 5 ta xavfsizlik belgisini tekshirib ko'rgandan keyingina to'lov qiling.",
        },
        {
          question: "Bot karta raqamimni ko'ra oladimi?",
          answer:
            "Yo'q, agar to'lov to'g'ri modelda amalga oshirilsa. To'g'ri modelda siz Click/Payme/UzCard/Humo ilovangizdan bot ko'rsatgan kartaga aniq summani o'tkazasiz — karta sizning bank ilovangizdan chiqmaydi. Bot va Telegram karta raqami, CVV, parolga ega bo'la olmaydi. Bot faqat to'lov natijasini (siz aniq summa o'tkazganingizni) tizim orqali aniqlaydi. Agar bot karta raqami yoki CVV ni chat ichida so'rasa — bu firibgarlik, darhol to'xtang.",
        },
        {
          question: "Nima uchun aniq summa (10,950 so'm — yumaloq emas) muhim?",
          answer:
            "Aniq summa tranzaksiya identifikatori vazifasini bajaradi. Tizim sizning to'lovingizni boshqa to'lovlardan aynan shu noyob summa orqali farqlaydi. Agar 10,950 o'rniga 11,000 o'tkazsangiz — tizim avtomatik tanib olmaydi, qo'lda tasdiqlash kerak. Shuning uchun bot ko'rsatgan summani aynan o'sha shaklda yuborish kerak.",
        },
        {
          question: "Bot 'parol yoki SMS-kodni yuboring' desa nima qilish kerak?",
          answer:
            "Darhol to'xtang va botdan chiqing. Hech qaysi qonuniy xizmat akkaunt parolini, SMS-kodini yoki 2FA kodini so'ramaydi — Telegram'ga Premium yoki Stars yetkazish uchun bu hech qachon kerak emas. Faqat @username talab qilinadi. Parol so'rash — bu akkountingizni o'g'irlash sxemasi (Aura va NordPass tavsifiga ko'ra eng tarqalgan firibgarlik usuli).",
        },
        {
          question: "Klon va firibgar botlarni qanday tanib olish mumkin?",
          answer:
            "Eng aniq belgilar: (1) bot nomi mashhur xizmatga juda o'xshash, lekin 1-2 harf farqi bor (uzg3tsbot, uzgetbot, uzgets_official); (2) bot ortida sayt yo'q yoki HTTPS yo'q; (3) chat ichida karta yoki kod so'raydi; (4) summa aniq emas yoki yumaloq; (5) bozor narxidan 40-50% past 'ajoyib' narx; (6) shoshilish va 'tez ro'yxatdan o'ting' xabarlari. Doimo saytdagi havola orqali botga o'ting — qo'lda yozish katta xavf.",
        },
        {
          question: "To'lov o'tib mahsulot kelmasa nima qilish kerak?",
          answer:
            "Birinchi navbatda paniklik qilmang — sabab bir nechta bo'lishi mumkin. (1) Summani aynan bot ko'rsatganidek yuborganingizni tekshiring (10,950 o'rniga 11,000 yuborilgan bo'lsa, tizim avtomatik aniqlay olmaydi); (2) Click/Payme chek screenshot oling; (3) bot ichidagi support menyusiga screenshot va @username bilan yozing; (4) javob bo'lmasa saytdagi /aloqa orqali yozing; (5) firibgar bot bo'lsa — bankka tortishuv arizasi bering. Uzgets uchun pul qaytarish bandi — /terms 5-band.",
        },
        {
          question: "Uzgets bu mezonlarga mos keladimi?",
          answer:
            "Ha. (1) Bot mini-app ichida aniq summa va karta raqami ko'rsatiladi — chat ichida karta yoki kod so'ralmaydi; (2) O'tkazma Click/Payme/UzCard/Humo ilovasidan — O'zbekiston Markaziy banki nazoratidagi tizimlar; (3) Bot ortida uzgets.uz sayti, HTTPS, /privacy va /terms ochiq; (4) Bot faqat @username so'raydi; (5) Pul qaytarish bandi /terms 5-bandda. Texnik tekshiruvning to'liq versiyasi — 'Uzgets ishonchli mi?' maqolasida.",
        },
      ],
      finalCtaHeading: "Tekshirib bo'ldingizmi?",
      finalCtaBody:
        "Bot orqali to'lov modelini va xavfsizlik belgilarini bilib oldingiz. Tayyor bo'lsangiz — rasmiy bot orqali buyurtma rasmiylashtiring: t.me/uzgetsbot.",
    },
    ru: {
      title: 'Безопасно ли платить через Telegram-бот? — 7 признаков опасности и 5 безопасности',
      description:
        'Как работают платежи через узбекские Telegram-боты (мини-приложение, точная сумма, автораспознавание), когда это опасно и когда безопасно — 7 признаков опасности, 5 зелёных флагов и 4 шага проверки.',
      metaTitle: 'Безопасно ли платить через Telegram-бот? — Руководство 2026',
      metaDescription:
        'Безопасна ли оплата через Telegram-бот? Модель оплаты в узбекских ботах (мини-приложение + точная сумма), признаки мошенничества — 7 опасных и 5 безопасных сигналов в одном руководстве.',
      ogDescription:
        'Как работают платежи через узбекские Telegram-боты и когда это опасно — полное руководство по проверке.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Безопасно ли платить через Telegram-бот?',
          answer:
            'Технически да, если бот использует правильную модель. В узбекских ботах (включая Uzgets) оплата работает так: бот в мини-приложении показывает номер карты и точную сумму, вы переводите эту сумму из своего Click/Payme/UzCard/Humo на указанную карту. Карта не покидает ваше банковское приложение, бот не получает никаких данных. Но мошеннические боты ломают эту модель — просят карту или код в чате, отменяя всю защиту. Оплачивайте только после проверки 7 признаков опасности и 5 признаков безопасности.',
        },
        {
          question: 'Видит ли бот номер моей карты?',
          answer:
            'Нет, если оплата идёт по правильной модели. В правильной модели вы из приложения Click/Payme/UzCard/Humo переводите точную сумму на показанную ботом карту — карта не покидает ваше банковское приложение. Бот и Telegram не получают доступа к номеру карты, CVV, паролю. Бот только распознаёт ваш платёж по точной сумме. Если бот запрашивает номер карты или CVV в чате — это мошенничество, прекращайте сразу.',
        },
        {
          question: 'Почему точная сумма (10,950 сум — не округлённая) важна?',
          answer:
            'Точная сумма выполняет роль идентификатора транзакции. Система отличает ваш платёж от других именно по этой уникальной сумме. Если отправите 11,000 вместо 10,950 — система не сможет автоматически распознать платёж, потребуется ручное подтверждение. Поэтому отправляйте сумму ровно так, как показал бот.',
        },
        {
          question: 'Бот просит «отправьте пароль или SMS-код» — что делать?',
          answer:
            'Немедленно остановитесь и выйдите из бота. Ни один легальный сервис не запрашивает пароль аккаунта, SMS-код или код 2FA — для зачисления Premium или Stars в Telegram это никогда не нужно. Требуется только @username. Запрос пароля — схема угона аккаунта (по описанию Aura и NordPass, самый распространённый тип мошенничества).',
        },
        {
          question: 'Как отличить клонов и мошеннических ботов?',
          answer:
            'Главные признаки: (1) имя бота очень похоже на известный сервис, но отличается 1–2 буквами (uzg3tsbot, uzgetbot, uzgets_official); (2) за ботом нет сайта или нет HTTPS; (3) в чате просят карту или код; (4) сумма неточная или округлённая; (5) цена на 40–50% ниже рыночной; (6) сообщения «срочно зарегистрируйтесь». Всегда переходите в бот по ссылке с сайта — ручной ввод имени = большой риск.',
        },
        {
          question: 'Что делать, если оплата прошла, а товар не пришёл?',
          answer:
            'Сначала не паникуйте — причин может быть несколько. (1) Проверьте, что сумма отправлена ровно как показал бот (11,000 вместо 10,950 — система не сможет распознать автоматически); (2) сделайте скриншот чека Click/Payme; (3) напишите в меню поддержки бота, приложив скриншот и @username; (4) нет ответа — пишите через /aloqa на сайте; (5) если бот мошеннический — подавайте заявление о спорной транзакции в банк-эмитент. Условия возврата Uzgets — /ru/terms пункт 5.',
        },
        {
          question: 'Соответствует ли Uzgets этим критериям?',
          answer:
            'Да. (1) В мини-приложении бота показаны точная сумма и номер карты — в чате карту или код не запрашивают; (2) Перевод из Click/Payme/UzCard/Humo — все под надзором Центробанка Узбекистана; (3) За ботом сайт uzgets.uz на HTTPS, /privacy и /terms открыты; (4) Бот запрашивает только @username; (5) Пункт возврата в /terms 5. Полная техническая проверка — в статье «Можно ли доверять Uzgets?».',
        },
      ],
      finalCtaHeading: 'Проверили?',
      finalCtaBody:
        'Теперь вы знаете, как работает модель оплаты через бот и какие признаки безопасности проверить. Готовы — оформите заказ через официальный бот: t.me/uzgetsbot.',
    },
  },
}
