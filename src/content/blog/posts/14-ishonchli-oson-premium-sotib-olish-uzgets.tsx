import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'ishonchli-oson-premium-sotib-olish-uzgets'

const PREMIUM_3M = PREMIUM_PERIODS.find((p) => p.months === 3)!
const PREMIUM_6M = PREMIUM_PERIODS.find((p) => p.months === 6)!
const PREMIUM_12M = PREMIUM_PERIODS.find((p) => p.months === 12)!

type Criterion = {
  key: string
  uz: { name: string; what: string; uzgets: string }
  ru: { name: string; what: string; uzgets: string }
}

const CRITERIA: Criterion[] = [
  {
    key: 'payment',
    uz: {
      name: "To'lov xavfsizligi",
      what:
        "Pul rasmiy to'lov tizimi orqali o'tishi kerak — shaxsiy kartaga emas. Bank tomonidan himoya bor.",
      uzgets:
        "UzCard, Humo, Click va Payme — har biri rasmiy tizim orqali, har bir tranzaksiya tasdiqlangan reseiv bilan.",
    },
    ru: {
      name: 'Безопасность оплаты',
      what:
        'Деньги должны идти через официальную платёжную систему, а не на «личную карту». Так есть защита банка.',
      uzgets:
        'UzCard, Humo, Click и Payme — каждая через официальный шлюз, по каждой транзакции есть чек.',
    },
  },
  {
    key: 'delivery',
    uz: {
      name: 'Yetkazish mexanizmi',
      what:
        "Premium Telegram'ning rasmiy gift mexanizmi orqali biriktiriladi — uchinchi tomon hech narsaga kira olmaydi.",
      uzgets:
        "Bot to'lovni qabul qilgach, Telegram'ga to'g'ridan-to'g'ri rasmiy so'rov yuboradi. Akkauntingizga doimiy va shaffof biriktiriladi.",
    },
    ru: {
      name: 'Механизм доставки',
      what:
        'Premium должен зачисляться через официальный gift-механизм Telegram — никакой третьей стороны в аккаунте.',
      uzgets:
        'Бот после оплаты отправляет официальный запрос в Telegram напрямую. Подписка зачисляется на аккаунт прозрачно и навсегда (на свой срок).',
    },
  },
  {
    key: 'no-password',
    uz: {
      name: "Parol / kod so'ramaslik",
      what:
        "Premium uchun faqat @username yetarli. Parol, SMS kod yoki sessiya so'rasa — bu firibgarlik.",
      uzgets:
        "Hech qachon parol, kod yoki sessiya so'ralmaydi. Faqat @username — Telegram qoidasi shu.",
    },
    ru: {
      name: 'Без запроса пароля / кода',
      what:
        'Для Premium достаточно @username. Если просят пароль, SMS-код или сессию — это мошенничество.',
      uzgets:
        'Никогда не запрашиваются пароль, код или сессия. Только @username — так требует Telegram.',
    },
  },
  {
    key: 'price-transparency',
    uz: {
      name: 'Narx shaffofligi',
      what:
        "Narx oldindan, oxirgi raqamigacha aniq ko'rinishi shart — to'lov vaqtida o'zgarmaydi, qo'shimcha to'lov bo'lmaydi.",
      uzgets:
        "Botda har tarif uchun aniq narx ko'rsatiladi va sahifadagi narx bilan bir xil. Yashirin to'lov yo'q.",
    },
    ru: {
      name: 'Прозрачность цены',
      what:
        'Цена должна быть видна заранее до последней цифры — не меняться при оплате, без скрытых платежей.',
      uzgets:
        'В боте для каждого тарифа показана точная цена, совпадающая со страницей. Скрытых платежей нет.',
    },
  },
  {
    key: 'delivery-time',
    uz: {
      name: 'Yetkazish vaqti',
      what:
        "Yetkazish odatda qancha olishi e'lon qilingan bo'lishi kerak. Kechiksa — aloqa kanali mavjud bo'lishi shart.",
      uzgets:
        "To'lov tasdiqlangach odatda bir necha daqiqada Premium akkauntda paydo bo'ladi. Kechiksa — @uzgets_jbot admin botiga yozish mumkin.",
    },
    ru: {
      name: 'Время доставки',
      what:
        'Должно быть заявлено примерное время доставки. При задержке должен быть канал связи.',
      uzgets:
        'После подтверждения оплаты Premium обычно появляется на аккаунте за несколько минут. При задержке — можно написать в админ-бот @uzgets_jbot.',
    },
  },
  {
    key: 'recourse',
    uz: {
      name: 'Muammo bo\'lsa yechim',
      what:
        "Pul ketdi-yu Premium kelmasa — sotuvchi muammoni hal qilishi yoki pul qaytarishi shart.",
      uzgets:
        "Uzgets'da rasmiy refund policy mavjud: agar to'lov amalga oshgan-u, Premium yetkazib berilmasa — admin bilan bog'langach masala hal qilinadi.",
    },
    ru: {
      name: 'Что делать при проблеме',
      what:
        'Если деньги ушли, а Premium не пришёл — продавец обязан решить или вернуть деньги.',
      uzgets:
        'В Uzgets есть официальная политика возврата: если оплата прошла, но Premium не доставлен — после связи с админом вопрос решается.',
    },
  },
]

function UzAnswerBox() {
  return (
    <p>
      O&apos;zbekistondan Telegram Premium sotib olishning eng ishonchli va oson usuli —{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      orqali. Sotuvchini 6 ta mezon bo&apos;yicha tanlash kerak: to&apos;lov xavfsizligi (rasmiy
      to&apos;lov tizimi), yetkazish mexanizmi (Telegram&apos;ning gift mexanizmi orqali),
      parol so&apos;ramaslik, narx shaffofligi, yetkazish vaqti va muammo bo&apos;lsa yechim.
      Uzgets oltita mezonni ham bajaradi: UzCard/Humo/Click/Payme orqali to&apos;lov, Telegram&apos;ning
      rasmiy gift mexanizmi orqali yetkazish, faqat @username, narx oldindan ko&apos;rinadi, odatda
      bir necha daqiqada faollashish va admin botga aloqa. 3 oylik —{' '}
      {formatUzs(PREMIUM_3M.priceUzs)}, jarayon 5 qadam — bitta xizmatda.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Самый надёжный и простой способ купить Telegram Premium из Узбекистана —{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>.
      Продавца стоит проверять по 6 критериям: безопасность оплаты (официальная платёжная система),
      механизм доставки (через gift-механизм Telegram), отсутствие запроса пароля, прозрачность
      цены, время доставки и путь решения при проблеме. Uzgets закрывает все шесть: оплата через
      UzCard/Humo/Click/Payme, доставка через официальный gift-механизм Telegram, только @username,
      цена видна заранее, активация обычно за несколько минут и связь с админом через бот. 3 месяца —{' '}
      {formatUzs(PREMIUM_3M.priceUzs)}, процесс из 5 шагов — в одном сервисе.
    </p>
  )
}

function CriteriaTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold w-10">#</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Mezon' : 'Критерий'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Nima talab qilinadi' : 'Что требуется'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? "Uzgets'da" : 'В Uzgets'}</th>
          </tr>
        </thead>
        <tbody>
          {CRITERIA.map((c, idx) => (
            <tr key={c.key} className="border-t border-[var(--border)] align-top">
              <td className="px-4 py-3 text-[var(--text-muted)]">{idx + 1}</td>
              <td className="px-4 py-3 font-medium">{c[lang].name}</td>
              <td className="px-4 py-3 text-[var(--text-muted)]">{c[lang].what}</td>
              <td className="px-4 py-3">{c[lang].uzgets}</td>
            </tr>
          ))}
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
          — {lang === 'uz' ? 'Premium rasmiy savol-javob' : 'официальный FAQ Premium'}
        </li>
        <li>
          <a href="https://telegram.org/tos" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/tos
          </a>{' '}
          — {lang === 'uz' ? 'Telegram xizmat shartlari' : 'условия обслуживания Telegram'}
        </li>
        <li>
          <a href="https://fragment.com/premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            fragment.com/premium
          </a>{' '}
          — {lang === 'uz' ? "Premium uchun rasmiy TON marketplace (xorijiy karta/crypto talab qiladi)" : 'официальный TON-маркетплейс Premium (требует зарубежную карту/крипто)'}
        </li>
        <li>
          <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            t.me/PremiumBot
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? "Telegram'ning rasmiy boti (Apple/Google IAP)"
            : 'официальный бот Telegram (Apple/Google IAP)'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="ishonchli-oson-nima">&quot;Ishonchli va oson&quot; degan nima — Premium kontekstida?</h2>
      <p>
        Telegram Premium sotib olishda foydalanuvchining ikkita asosiy qo&apos;rquvi bor:{' '}
        <strong>pul ketadi-yu Premium kelmaydi</strong> va{' '}
        <strong>jarayon shu qadar chigalki, oxirigacha yetkaza olmayman</strong>. Ko&apos;p
        sotuvchilar bu ikkitasidan birini hal qilishadi — yo arzon va ishonchsiz, yo qulay va
        qimmat. Quyida sotuvchini tanlash uchun 6 ta tekshirish mezoni va Uzgets bo&apos;yicha
        javoblar.
      </p>

      <h2 id="6-mezon">Premium sotuvchini tanlashning 6 ta mezoni</h2>
      <p>
        Quyidagi olti mezonning hammasi bajarilsa, sotuvchi ishonchli; bittasi tushib qolsa — risk
        bor:
      </p>
      <CriteriaTable lang="uz" />
      <p>
        Yuqoridagi jadval{' '}
        <Link href="/blog/uzgets-ishonchli-mi-tekshirish-belgilari" className="text-[var(--primary)] hover:underline">
          Uzgets ishonchli mi degan maqolaning
        </Link>{' '}
        amaliy davomidir: u yerda umumiy sayt va bot ishonchliligi, bu yerda esa aniq{' '}
        <em>Premium sotib olish</em> jarayoniga tegishli mezonlar.
      </p>

      <InlineBotCTA lang="uz" text="6 mezon — 6 ✅. Botda Premium buyurtmangizni rasmiylashtiring." />

      <h2 id="oson-5-qadam">&quot;Oson&quot; qismi — 5 qadamda Premium</h2>
      <p>
        Ishonch — bir tomoni. Ikkinchi tomoni — jarayonning soddaligi. Uzgets&apos;da Premium sotib
        olish 2–5 daqiqa oladi, hammasi botning o&apos;zida:
      </p>
      <ol>
        <li>
          Telegram&apos;da{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          ni oching va <strong>START</strong> tugmasini bosing.
        </li>
        <li>Asosiy menyudan <strong>&quot;💎 Premium&quot;</strong> bo&apos;limini tanlang.</li>
        <li>Muddatni tanlang: 3 oy / 6 oy / 12 oy.</li>
        <li>
          Premium qaysi akkauntga biriktirilishini ko&apos;rsating — o&apos;zingiznikiga yoki
          sovg&apos;a sifatida @username.
        </li>
        <li>
          UzCard, Humo, Click yoki Payme orqali to&apos;lang. To&apos;lov tasdiqlangach Premium
          akkauntda odatda bir necha daqiqada paydo bo&apos;ladi.
        </li>
      </ol>
      <p>
        Hech bir qadamda parol, kod yoki shaxsiy ma&apos;lumot so&apos;ralmaydi. Visa, Apple Pay,
        crypto yoki KYC kerak emas. Faollashtirish jarayoni haqida batafsil:{' '}
        <Link href="/blog/telegram-premium-qanday-faollashtiriladi" className="text-[var(--primary)] hover:underline">
          Premium qanday faollashtiriladi
        </Link>
        .
      </p>

      <h2 id="qaysi-tarif">Qaysi tarif eng mos? Oddiy hisob-kitob</h2>
      <p>
        Uzgets&apos;da uchta tarif mavjud. Uzoq muddat tanlasangiz, oyiga arzonroq:
      </p>
      <PriceTable lang="uz" />
      <ul>
        <li>
          <strong>3 oylik ({formatUzs(PREMIUM_3M.priceUzs)}):</strong> Premium&apos;ni birinchi
          marta sinab ko&apos;rmoqchilar uchun. Eng past kirish narxi.
        </li>
        <li>
          <strong>6 oylik ({formatUzs(PREMIUM_6M.priceUzs)}):</strong> Eng mashhur — tejash va
          moslashuvchanlik o&apos;rtasidagi balans.
        </li>
        <li>
          <strong>12 oylik ({formatUzs(PREMIUM_12M.priceUzs)}):</strong> Eng tejamli — Premium&apos;ni
          doimiy ishlatadiganlar uchun. Oyiga atigi {formatUzs(PREMIUM_12M.perMonthHint)}.
        </li>
      </ul>

      <InlineBotCTA lang="uz" text="O'zingizga mos muddatni tanlang — narxlar oldindan, qo'shimchasiz." />

      <h2 id="aldanmaslik-5-belgi">Aldanmaslik uchun 5 ta belgi (sotuvchini tekshirish)</h2>
      <p>
        Faqat &quot;Uzgets yaxshi&quot; deyish kifoya emas. Quyidagi 5 ta belgi <em>har qanday</em>{' '}
        Premium sotuvchini xolisona tekshirish uchun ishlatilishi mumkin — Uzgets, raqobatchi yoki
        notanish kanal:
      </p>
      <ol>
        <li>
          <strong>Sotuvchi parol/kod so&apos;rasa — to&apos;xtang.</strong> Telegram&apos;ning
          rasmiy gift mexanizmi faqat @username talab qiladi. Parol so&apos;ralsa — bu akkauntni
          o&apos;g&apos;irlash urinishi.
        </li>
        <li>
          <strong>Pul shaxsiy kartaga so&apos;ralsa — to&apos;xtang.</strong> Rasmiy reseller pul
          to&apos;lov tizimi (UzCard/Humo/Click/Payme) orqali qabul qiladi va sizga reseiv beradi.
        </li>
        <li>
          <strong>Narx noaniq yoki o&apos;zgaruvchan bo&apos;lsa — to&apos;xtang.</strong> Aniq
          raqam oldindan ko&apos;rsatilishi va to&apos;lov vaqtida o&apos;zgarmasligi shart.
        </li>
        <li>
          <strong>Yetkazish vaqti aytilmasa — ehtiyot bo&apos;ling.</strong> Ishonchli sotuvchi
          taxminiy vaqtni e&apos;lon qiladi (Uzgets&apos;da odatda bir necha daqiqa).
        </li>
        <li>
          <strong>Muammo bo&apos;lsa yo&apos;l yo&apos;q bo&apos;lsa — riskli.</strong> Refund yoki
          aloqa kanali yo&apos;q bo&apos;lgan joydan sotib olmang.
        </li>
      </ol>

      <h2 id="muammo-bolsa">Pul to&apos;ladim, Premium kelmadi — nima qilish?</h2>
      <p>
        Ehtimol kam, lekin to&apos;lov tizimida texnik kechikish bo&apos;lishi mumkin. Tartib
        quyidagicha:
      </p>
      <ol>
        <li>
          <strong>Bir necha daqiqa kuting.</strong> Ko&apos;p hollarda kechikish Telegram tomonidan
          bo&apos;ladi va o&apos;z-o&apos;zidan hal bo&apos;ladi.
        </li>
        <li>
          <strong>Akkauntingizni tekshiring.</strong> Telegram &rarr; Sozlamalar &rarr; Telegram
          Premium &rarr; faol holatda bo&apos;lishi kerak. Ko&apos;rinmasa,{' '}
          <Link href="/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">
            sabablari ro&apos;yxati
          </Link>
          .
        </li>
        <li>
          <strong>Admin botga yozing.</strong>{' '}
          <a href="https://t.me/uzgets_jbot" target="_blank" rel="noopener" className="text-[var(--primary)]">@uzgets_jbot</a>{' '}
          orqali tranzaksiya tafsilotlarini yuboring — Uzgets&apos;da rasmiy refund policy mavjud,
          shuning uchun masala hal qilinadi.
        </li>
      </ol>

      <InlineBotCTA lang="uz" text="Mahalliy karta, oson buyurtma — Uzgets botida Premium oling." />

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Ishonchli, oson va arzon — uchtasi bitta xizmatda. Botga kiring." />

      <h2 id="muhim-eslatma">Muhim eslatmalar</h2>
      <ul>
        <li>
          Bu sahifadagi mezonlar va narxlar 2026-yil may holatiga taalluqli. O&apos;zgarishlar
          bo&apos;lsa sahifa yangilanadi.
        </li>
        <li>
          Fragment va @PremiumBot — Telegram&apos;ning rasmiy yo&apos;llari, lekin xorijiy karta
          yoki crypto talab qiladi. Bu sahifa mahalliy karta foydalanuvchilari uchun.
        </li>
        <li>
          Premium uchun{' '}
          <Link href="/blog/telegram-premium-toliq-qollanma-barcha-usullar" className="text-[var(--primary)] hover:underline">
            barcha sotib olish usullarini ko&apos;rib chiqish
          </Link>{' '}
          — yo&apos;llar va qiyosi.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="ishonchli-oson-nima">Что значит «надёжно и просто» применительно к Premium?</h2>
      <p>
        У пользователя при покупке Telegram Premium два главных страха: <strong>деньги ушли, а
        Premium не пришёл</strong> и <strong>процесс настолько запутан, что не довожу до конца</strong>.
        Многие сервисы закрывают один из них, но не оба — либо дёшево и ненадёжно, либо удобно и
        дорого. Ниже — 6 критериев проверки продавца и ответы Uzgets по каждому.
      </p>

      <h2 id="6-mezon">6 критериев выбора продавца Premium</h2>
      <p>
        Если все шесть критериев выполняются — продавец надёжный; если хотя бы один не закрыт —
        есть риск:
      </p>
      <CriteriaTable lang="ru" />
      <p>
        Эта таблица — практическое продолжение{' '}
        <Link href="/ru/blog/uzgets-ishonchli-mi-tekshirish-belgilari" className="text-[var(--primary)] hover:underline">
          статьи «Надёжен ли Uzgets»
        </Link>
        : там — общие признаки сайта и бота, здесь — критерии именно для <em>покупки Premium</em>.
      </p>

      <InlineBotCTA lang="ru" text="6 критериев — 6 ✅. Оформите Premium в боте." />

      <h2 id="oson-5-qadam">«Просто» — Premium за 5 шагов</h2>
      <p>
        Доверие — одна сторона. Вторая — простота процесса. В Uzgets покупка Premium занимает 2–5
        минут, всё внутри бота:
      </p>
      <ol>
        <li>
          Откройте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          в Telegram и нажмите <strong>START</strong>.
        </li>
        <li>В главном меню выберите <strong>«💎 Premium»</strong>.</li>
        <li>Выберите срок: 3 / 6 / 12 месяцев.</li>
        <li>
          Укажите аккаунт получателя — свой или @username другого пользователя (как подарок).
        </li>
        <li>
          Оплатите через UzCard, Humo, Click или Payme. После подтверждения оплаты Premium обычно
          появляется на аккаунте за несколько минут.
        </li>
      </ol>
      <p>
        Ни на одном шаге не запрашиваются пароль, код или личные данные. Visa, Apple Pay, крипто и
        KYC не нужны. Подробно об активации:{' '}
        <Link href="/ru/blog/telegram-premium-qanday-faollashtiriladi" className="text-[var(--primary)] hover:underline">
          как активируется Premium
        </Link>
        .
      </p>

      <h2 id="qaysi-tarif">Какой тариф выбрать — простой расчёт</h2>
      <p>В Uzgets три тарифа. Чем длиннее срок, тем дешевле в месяц:</p>
      <PriceTable lang="ru" />
      <ul>
        <li>
          <strong>3 месяца ({formatUzs(PREMIUM_3M.priceUzs)}):</strong> для тех, кто пробует
          Premium впервые. Минимальный стартовый платёж.
        </li>
        <li>
          <strong>6 месяцев ({formatUzs(PREMIUM_6M.priceUzs)}):</strong> самый популярный — баланс
          экономии и гибкости.
        </li>
        <li>
          <strong>12 месяцев ({formatUzs(PREMIUM_12M.priceUzs)}):</strong> самый выгодный — для
          постоянных пользователей. Всего {formatUzs(PREMIUM_12M.perMonthHint)} в месяц.
        </li>
      </ul>

      <InlineBotCTA lang="ru" text="Выберите подходящий срок — цены прозрачные, без доплат." />

      <h2 id="aldanmaslik-5-belgi">5 признаков, чтобы не быть обманутым</h2>
      <p>
        Сказать «Uzgets хороший» — мало. Следующие 5 признаков работают для проверки <em>любого</em>{' '}
        продавца Premium — Uzgets, конкурента или незнакомого канала:
      </p>
      <ol>
        <li>
          <strong>Просят пароль/код — стоп.</strong> Официальный gift-механизм Telegram требует
          только @username. Запрос пароля — попытка угнать аккаунт.
        </li>
        <li>
          <strong>Деньги просят на личную карту — стоп.</strong> Легальный реселлер принимает
          оплату через платёжную систему (UzCard/Humo/Click/Payme) и выдаёт чек.
        </li>
        <li>
          <strong>Цена непрозрачна или плавающая — стоп.</strong> Точная сумма должна быть видна
          заранее и не меняться при оплате.
        </li>
        <li>
          <strong>Время доставки не заявлено — осторожно.</strong> Надёжный продавец называет
          ориентировочное время (в Uzgets — обычно несколько минут).
        </li>
        <li>
          <strong>Нет пути решения при проблеме — рискованно.</strong> Не покупайте там, где нет
          возврата или канала связи.
        </li>
      </ol>

      <h2 id="muammo-bolsa">Оплатил, Premium не пришёл — что делать?</h2>
      <p>
        Вероятность мала, но техническая задержка платёжной системы возможна. Порядок действий:
      </p>
      <ol>
        <li>
          <strong>Подождите несколько минут.</strong> Чаще всего задержка со стороны Telegram и
          разрешается сама.
        </li>
        <li>
          <strong>Проверьте аккаунт.</strong> Telegram &rarr; Настройки &rarr; Telegram Premium —
          подписка должна быть активной. Если не отображается —{' '}
          <Link href="/ru/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">
            список причин
          </Link>
          .
        </li>
        <li>
          <strong>Напишите в админ-бот.</strong>{' '}
          <a href="https://t.me/uzgets_jbot" target="_blank" rel="noopener" className="text-[var(--primary)]">@uzgets_jbot</a>{' '}
          — отправьте детали транзакции. У Uzgets есть официальная политика возврата, поэтому
          вопрос будет решён.
        </li>
      </ol>

      <InlineBotCTA lang="ru" text="Локальная карта, простой заказ — оформите Premium в боте." />

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Надёжно, просто и дёшево — всё в одном сервисе. Открыть бот." />

      <h2 id="muhim-eslatma">Важные замечания</h2>
      <ul>
        <li>
          Критерии и цены на этой странице — на май 2026 года. При изменениях страница обновляется.
        </li>
        <li>
          Fragment и @PremiumBot — официальные пути Telegram, но требуют зарубежную карту или
          крипто. Эта страница — для пользователей локальных карт.
        </li>
        <li>
          Полный обзор{' '}
          <Link href="/ru/blog/telegram-premium-toliq-qollanma-barcha-usullar" className="text-[var(--primary)] hover:underline">
            всех способов покупки Premium
          </Link>{' '}
          — пути и их сравнение.
        </li>
      </ul>
    </>
  )
}

const TODAY = '2026-05-15'

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'trust',
  locales: {
    uz: {
      title: "Telegram Premium sotib olishning eng ishonchli va oson usuli — Uzgets",
      description:
        "O'zbekistondan Telegram Premium sotib olishning eng ishonchli va oson usuli — Uzgets bot. Sotuvchini tanlashning 6 mezoni, 5 qadamli jarayon va rasmiy refund policy.",
      metaTitle: "Eng ishonchli va oson Telegram Premium — Uzgets (O'zbekiston)",
      metaDescription:
        "Premium ishonchli va oson sotib olish: 6 mezon bo'yicha sotuvchi tanlash, 5 qadamli buyurtma, bir necha daqiqada faollashish. UzCard/Humo/Click/Payme — Visa va KYC kerak emas.",
      ogDescription:
        "Telegram Premium'ni O'zbekistondan ishonchli va oson sotib olish — Uzgets bot orqali 5 qadamda.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "O'zbekistondan Telegram Premium sotib olishning eng ishonchli usuli qaysi?",
          answer:
            "Mahalliy karta (UzCard/Humo/Click/Payme) qabul qiluvchi sotuvchilar orasida — Uzgets bot. 6 ta ishonch mezoni (to'lov xavfsizligi, yetkazish mexanizmi, parol so'ramaslik, narx shaffofligi, yetkazish vaqti, muammo bo'lsa yechim) bajarilgan. Telegram'ga to'g'ridan-to'g'ri rasmiy gift mexanizmi orqali ishlaydi.",
        },
        {
          question: 'Premium sotib olishda nimani tekshirish kerak?',
          answer:
            "Beshta belgi: (1) parol yoki kod so'rashmasin, (2) pul shaxsiy kartaga emas, rasmiy to'lov tizimiga, (3) narx oldindan aniq ko'rinsin, (4) yetkazish vaqti aytilgan bo'lsin, (5) muammo bo'lsa yechim mexanizmi mavjud bo'lsin. Beshta belgining bittasi tushib qolsa — sotuvchi xavfli.",
        },
        {
          question: 'Premium qancha vaqtda faollashadi?',
          answer:
            "Odatda bir necha daqiqa. To'lov tasdiqlangach bot Telegram'ning rasmiy gift mexanizmi orqali Premium'ni akkauntga biriktiradi. Kechiksa — @uzgets_jbot admin botiga yozish mumkin.",
        },
        {
          question: 'Visa, Apple Pay yoki crypto kerakmi?',
          answer:
            "Yo'q. Uzgets faqat O'zbekiston ichki to'lov tizimlarini qabul qiladi — UzCard, Humo, Click va Payme. Xorijiy karta, Apple/Google to'lov yoki crypto kerak emas. KYC (passport/identifikatsiya) ham talab qilinmaydi.",
        },
        {
          question: 'Pul to\'ladim, lekin Premium kelmadi — nima qilaman?',
          answer:
            "Avval bir necha daqiqa kuting — to'lov tizimida texnik kechikish bo'lishi mumkin. So'ng Telegram → Sozlamalar → Telegram Premium qismini tekshiring. Premium ko'rinmasa, @uzgets_jbot admin botiga tranzaksiya tafsilotlarini yuboring. Uzgets'da rasmiy refund policy mavjud — masala hal qilinadi.",
        },
        {
          question: 'Sovg\'a sifatida ishonchli yuborish mumkinmi?',
          answer:
            "Ha. Buyurtma vaqtida qabul qiluvchining @username'ini kiriting. Premium Telegram'ning rasmiy gift mexanizmi orqali to'g'ridan-to'g'ri uning akkauntiga biriktiriladi — sizda ham, qabul qiluvchida ham hech qanday qo'shimcha qadam kerak emas. Narx o'zingizga olganidagi bilan bir xil.",
        },
        {
          question: "Bot Telegram'ning rasmiy hamkorimi?",
          answer:
            "Uzgets — Telegram'ning rasmiy hamkori emas (Telegram bunday rasmiy status bermaydi), lekin Telegram'ning gift mexanizmidan foydalanib Premium yetkazib beradi — bu ToS doirasidagi standart yo'l. Ishonchli sotuvchilar shu mexanizm orqali ishlaydi.",
        },
        {
          question: "Premium narxi muddat ichida o'zgarishi mumkinmi?",
          answer:
            "Yo'q. To'lov bir martalik amalga oshiriladi va paket muddati davomida hech qanday qo'shimcha to'lov olinmaydi. Telegram global narxlarni o'zgartirsa ham, sizning sotib olgan obunangizga ta'sir qilmaydi — muddat tugaguncha to'liq amal qiladi.",
        },
      ],
      finalCtaHeading: "Ishonchli va oson — Premium buyurtmangizni rasmiylashtiring",
      finalCtaBody:
        "Botga kiring, muddatni tanlang va mahalliy karta orqali to'lang. Premium odatda bir necha daqiqada akkauntga biriktiriladi.",
    },
    ru: {
      title: 'Самый надёжный и простой способ купить Telegram Premium — Uzgets',
      description:
        'Самый надёжный и простой способ купить Telegram Premium из Узбекистана — бот Uzgets. 6 критериев выбора продавца, процесс из 5 шагов и официальная политика возврата.',
      metaTitle: 'Самый надёжный и простой Telegram Premium — Uzgets (Узбекистан)',
      metaDescription:
        'Premium надёжно и просто: 6 критериев выбора продавца, оформление в 5 шагов, активация за несколько минут. UzCard/Humo/Click/Payme — без Visa и KYC.',
      ogDescription:
        'Купить Telegram Premium из Узбекистана надёжно и просто — через бот Uzgets за 5 шагов.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Какой самый надёжный способ купить Telegram Premium из Узбекистана?',
          answer:
            'Среди продавцов с приёмом локальной карты (UzCard/Humo/Click/Payme) — бот Uzgets. Все 6 критериев доверия (безопасность оплаты, механизм доставки, отсутствие запроса пароля, прозрачность цены, время доставки, путь решения проблем) выполнены. Premium доставляется через официальный gift-механизм Telegram напрямую.',
        },
        {
          question: 'Что проверять при покупке Premium?',
          answer:
            'Пять признаков: (1) не запрашивают пароль/код, (2) деньги идут через платёжную систему, а не на личную карту, (3) цена показана заранее и точно, (4) заявлено время доставки, (5) есть механизм решения проблем. Если хотя бы один признак не выполнен — продавец рискованный.',
        },
        {
          question: 'За сколько активируется Premium?',
          answer:
            'Обычно за несколько минут. После подтверждения оплаты бот зачисляет Premium на аккаунт через официальный gift-механизм Telegram. При задержке — можно написать в админ-бот @uzgets_jbot.',
        },
        {
          question: 'Нужны ли Visa, Apple Pay или крипто?',
          answer:
            'Нет. Uzgets принимает только узбекские системы — UzCard, Humo, Click и Payme. Зарубежная карта, Apple/Google Pay и крипто не нужны. KYC (паспорт/идентификация) тоже не требуется.',
        },
        {
          question: 'Оплатил, а Premium не пришёл — что делать?',
          answer:
            'Сначала подождите несколько минут — возможна техническая задержка платёжной системы. Затем проверьте Telegram → Настройки → Telegram Premium. Если Premium не отображается, напишите в админ-бот @uzgets_jbot и отправьте детали транзакции. У Uzgets есть официальная политика возврата — вопрос будет решён.',
        },
        {
          question: 'Можно ли надёжно подарить Premium другому пользователю?',
          answer:
            'Да. При оформлении укажите @username получателя — Premium через официальный gift-механизм Telegram зачислится напрямую на его аккаунт. Никаких дополнительных шагов ни вам, ни получателю не нужно. Цена такая же, как для покупки себе.',
        },
        {
          question: 'Бот — официальный партнёр Telegram?',
          answer:
            'Uzgets не является официальным партнёром Telegram (Telegram такого статуса не выдаёт), но использует gift-механизм Telegram для доставки Premium — это стандартный путь в рамках ToS. Все надёжные реселлеры работают по этому механизму.',
        },
        {
          question: 'Может ли цена Premium измениться внутри срока?',
          answer:
            'Нет. Оплата разовая, и в течение срока никаких дополнительных списаний не будет. Даже если Telegram изменит глобальные цены, ваша подписка действует до конца срока без изменений.',
        },
      ],
      finalCtaHeading: 'Надёжно и просто — оформите заказ Premium',
      finalCtaBody:
        'Зайдите в бот, выберите срок и оплатите локальной картой. Premium обычно зачисляется на аккаунт за несколько минут.',
    },
  },
}
