import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-tolay-olmayapman-yechim'
const TODAY = '2026-05-17'

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium uchun to&apos;lay olmaslikning eng tez-tez uchraydigan sababi —{' '}
      <strong>O&apos;zbekiston kartalari (UzCard/Humo)</strong> Telegram ichidagi rasmiy
      obuna formasida qabul qilinmaydi: bu yerda faqat xalqaro Visa/Mastercard ishlaydi,
      lekin O&apos;zbek banklari chiqargan Visa/Mastercard ham BIN-tekshiruvdan ko&apos;p
      hollarda o&apos;tmaydi. App Store/Google Play orqali ham xuddi shu cheklov.
      Fragment.com (Telegram&apos;ning rasmiy marketplace&apos;i) ishlaydi, lekin TON
      crypto va majburiy KYC (passport + selfie) talab qiladi. Eng oson va kafolatlangan
      yo&apos;l — O&apos;zbek vositachi botdan foydalanish: <strong>@uzgetsbot</strong>{' '}
      UzCard, Humo, Click, Payme&apos;ni to&apos;g&apos;ridan-to&apos;g&apos;ri qabul qiladi,
      Premium 2–5 daqiqada faollashadi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Самая частая причина невозможности оплатить Telegram Premium —{' '}
      <strong>узбекские карты (UzCard/Humo)</strong> не принимаются в официальной форме
      подписки внутри Telegram: там работают только международные Visa/Mastercard, но
      даже Visa/Mastercard, выпущенные узбекскими банками, часто не проходят BIN-проверку.
      В App Store/Google Play — то же ограничение. Fragment.com (официальный маркетплейс
      Telegram) работает, но требует TON-крипту и обязательный KYC (паспорт + селфи).
      Самый простой и гарантированный путь — узбекский посредник-бот:{' '}
      <strong>@uzgetsbot</strong> принимает UzCard, Humo, Click, Payme напрямую, Premium
      активируется за 2–5 минут.
    </p>
  )
}

function CauseCard({
  num,
  title,
  symptom,
  fix,
  lang,
}: {
  num: number
  title: string
  symptom: React.ReactNode
  fix: React.ReactNode
  lang: 'uz' | 'ru'
}) {
  const labels =
    lang === 'uz'
      ? { symptom: 'Belgi', fix: 'Yechim' }
      : { symptom: 'Признак', fix: 'Решение' }
  return (
    <div className="uz-card my-4 rounded-xl border border-[var(--border)] p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
          {num}
        </span>
        <div className="flex-1">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-3 text-xs">
              <div className="font-semibold">{labels.symptom}</div>
              <div className="mt-1 text-[var(--text-muted)]">{symptom}</div>
            </div>
            <div className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-3 text-xs">
              <div className="font-semibold text-[var(--primary)]">{labels.fix}</div>
              <div className="mt-1 text-[var(--text-muted)]">{fix}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PaymentComparisonTable({ lang }: { lang: 'uz' | 'ru' }) {
  const headers =
    lang === 'uz'
      ? ['Yo\'l', 'O\'zbek karta', 'KYC', 'Murakkablik', 'Faollashuv']
      : ['Способ', 'Узбек. карта', 'KYC', 'Сложность', 'Активация']
  const rows =
    lang === 'uz'
      ? [
          [
            'Telegram → Premium (in-app)',
            '❌ rad etiladi',
            'Yo\'q',
            'Past',
            'Darhol (agar o\'tsa)',
          ],
          [
            'App Store / Google Play',
            '❌ ko\'p hollarda yo\'q',
            'Yo\'q',
            'O\'rtacha',
            'Darhol',
          ],
          [
            'Fragment.com (TON crypto)',
            '⚠️ TON sotib olish kerak',
            '✅ majburiy (passport+selfie)',
            'Yuqori',
            '5–15 daqiqa',
          ],
          [
            'Fragment.com (xalqaro Visa)',
            '⚠️ kamdan-kam o\'tadi',
            '✅ majburiy',
            'Yuqori',
            'Darhol',
          ],
          [
            '@uzgetsbot (UzCard/Humo/Click/Payme)',
            '✅ to\'g\'ridan-to\'g\'ri',
            'Yo\'q',
            'Past',
            '2–5 daqiqa',
          ],
        ]
      : [
          [
            'Telegram → Premium (внутри)',
            '❌ отклоняется',
            'Нет',
            'Низкая',
            'Сразу (если пройдёт)',
          ],
          [
            'App Store / Google Play',
            '❌ чаще всего нет',
            'Нет',
            'Средняя',
            'Сразу',
          ],
          [
            'Fragment.com (TON crypto)',
            '⚠️ нужно сначала купить TON',
            '✅ обязателен (паспорт+селфи)',
            'Высокая',
            '5–15 минут',
          ],
          [
            'Fragment.com (междунар. Visa)',
            '⚠️ редко проходит',
            '✅ обязателен',
            'Высокая',
            'Сразу',
          ],
          [
            '@uzgetsbot (UzCard/Humo/Click/Payme)',
            '✅ напрямую',
            'Нет',
            'Низкая',
            '2–5 минут',
          ],
        ]

  return (
    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--muted)]/40">
            {headers.map((h) => (
              <th
                key={h}
                className="border border-[var(--border)] px-3 py-2 text-left font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isUzgets = i === rows.length - 1
            return (
              <tr
                key={i}
                className={
                  isUzgets ? 'bg-[var(--primary)]/5 font-medium' : ''
                }
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="border border-[var(--border)] px-3 py-2 align-top text-[var(--text-muted)]"
                  >
                    {cell}
                  </td>
                ))}
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
            ? 'Telegram Premium rasmiy FAQ, to\'lov usullari'
            : 'официальный FAQ Telegram Premium, методы оплаты'}
        </li>
        <li>
          <a
            href="https://fragment.com/premium"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            fragment.com/premium
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? 'Telegram rasmiy hamkori, TON va Visa orqali Premium'
            : 'официальный партнёр Telegram, Premium через TON и Visa'}
        </li>
        <li>
          <a
            href="https://bugs.telegram.org/c/46971"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            bugs.telegram.org/c/46971
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? 'Premium hadya to\'lov muammosi (rasmiy bug tracker)'
            : 'проблема оплаты Premium-подарка (официальный bug tracker)'}
        </li>
        <li>
          <a
            href="https://github.com/telegramdesktop/tdesktop/issues/28939"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            github.com/telegramdesktop/tdesktop#28939
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? 'Premium uchun bir nechta karta rad etilishi haqida issue'
            : 'issue о множественных отказах карт при оплате Premium'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="nega-otmayapti">Nega Premium uchun to&apos;lov o&apos;tmayapti?</h2>
      <p>
        Telegram Premium — bu <strong>obuna asosidagi (subscription)</strong> xizmat, va
        Telegram uni butun dunyo bo&apos;ylab bir xil to&apos;lov gateway orqali qabul
        qiladi. Bu gateway har bir kartani <strong>BIN raqami</strong> (kartaning birinchi
        6 raqami) bo&apos;yicha tekshiradi: agar BIN cheklangan/yuqori risk hudud sifatida
        belgilangan bo&apos;lsa — tranzaksiya avtomatik rad etiladi. O&apos;zbekiston
        kartalari ko&apos;pincha shu filtrlarga tushadi.
      </p>
      <p>Bundan tashqari Premium uchun karta <strong>3 ta talabni</strong> qondirishi shart:</p>
      <ul>
        <li>Xalqaro to&apos;lovlar yoqilgan</li>
        <li>3-D Secure faol</li>
        <li>Recurring (qayta-qayta) to&apos;lovlarga ruxsat</li>
      </ul>
      <p>
        O&apos;zbek banklari chiqargan ko&apos;plab Visa/Mastercard kartalari uchinchi
        talabni qondirmaydi — bu &quot;one-time only&quot; turidagi kartalar. Pastda har
        bir asosiy sabab va aniq yechim.
      </p>

      <InlineBotCTA
        lang="uz"
        text="To'lov muammosini bir martada chetlab o'tmoqchimisiz? Botda UzCard/Humo bilan to'lang."
      />

      <h2 id="sabab-1">Sabab 1: UzCard/Humo Telegram ichida ishlamaydi</h2>
      <CauseCard
        lang="uz"
        num={1}
        title="Eng tez-tez uchraydigan to'siq"
        symptom="Telegram > Sozlamalar > Premium ga kirib, UzCard yoki Humo raqamini kiritasiz. Forma 'Card not supported' yoki 'Payment failed' xatosini qaytaradi. Yoki shunchaki karta turlari ro'yxatida UzCard/Humo umuman yo'q."
        fix="Bu — Telegram qoidasi: rasmiy in-app obunada faqat xalqaro to'lov tarmoqlari (Visa, Mastercard, JCB) qabul qilinadi. UzCard va Humo — mahalliy tarmoqlar, ular Telegram'ning to'lov gateway'iga ulanmagan. Yagona to'g'ri yechim — O'zbekistondagi vositachi xizmat (@uzgetsbot, Click, Payme orqali UzCard/Humo qabul qiladi)."
      />
      <p>
        Bu cheklov O&apos;zbekistonga xos emas — Markaziy Osiyo, Afrika va ko&apos;p
        boshqa hududlardagi mahalliy karta tarmoqlari ham bir xil holatda. Buni o&apos;zgartirib
        bo&apos;lmaydi, atrofidan o&apos;tish kerak.
      </p>

      <h2 id="sabab-2">Sabab 2: Visa/Mastercard rad etilmoqda</h2>
      <CauseCard
        lang="uz"
        num={2}
        title="O'zbek banki chiqargan xalqaro karta ham o'tmaydi"
        symptom="Sizda Kapitalbank/Asaka/TBC kabi bankdan Visa yoki Mastercard bor. Telegram'da karta ma'lumotlari qabul qilinadi, lekin 'Transaction declined' yoki 'Bank declined' xatosi chiqadi. Bankka tegishli SMS kelmaydi yoki '0 so'm hold' va darhol qaytarish ko'rinadi."
        fix="3 ta tekshirish: (1) Banking ilovasidan kartada 'Xalqaro to'lovlar' va '3-D Secure' yoqilganligini ko'ring. (2) Kunlik xarid limitini tekshiring — Premium summasidan past bo'lmasligi kerak. (3) Bu Telegram'ning subscription billing tizimi — agar karta faqat 'one-time' to'lovni qo'llab-quvvatlasa, rad etiladi. Bank qo'llab-quvvatlash xizmatiga 'recurring/subscription billing' yoqishni so'rab murojaat qiling. Ishlamasa — Uzgets bot orqali to'lang (faqat oddiy karta, recurring talab qilinmaydi)."
      />

      <h2 id="sabab-3">Sabab 3: App Store / Google Play orqali to&apos;lov bloklangan</h2>
      <CauseCard
        lang="uz"
        num={3}
        title="iOS/Android orqali Premium sotib olib bo'lmaydi"
        symptom="iOS'da Telegram > Premium > Subscribe bosasiz, App Store sahifasi ochiladi va 'Cannot connect to App Store' yoki 'Your payment method was declined' chiqadi. Android'da Google Play xato qaytaradi."
        fix="App Store va Google Play O'zbekiston regionida Telegram Premium uchun cheklangan to'lov usullarini qabul qiladi — odatda faqat AQSH/Yevropa kartalari. Yechim: (a) account regionini o'zgartirish murakkab va xavfli (ko'plab funksiyalar yo'qoladi), (b) Google Play balansiga gift card to'ldirib to'lash mumkin lekin gift card ham O'zbekistondan sotib olish qiyin. Eng oddiy yo'l — Fragment yoki mahalliy vositachi orqali, Telegram hisobiga to'g'ridan-to'g'ri."
      />

      <InlineBotCTA
        lang="uz"
        text="Region o'zgartirmasdan, App Store talashmasdan — botda Premium oling."
      />

      <h2 id="sabab-4">Sabab 4: Fragment KYC va TON murakkab</h2>
      <CauseCard
        lang="uz"
        num={4}
        title="Fragment ishlaydi, lekin oddiy foydalanuvchiga og'ir"
        symptom="Fragment.com ga kirasiz, 3/6/12 oylik Premium ko'rinadi (taxminan $11.99 / $15.99 / $28.99), lekin to'lov uchun TON crypto kerak yoki xalqaro Visa. TON balansingiz yo'q. Visa kiritasiz — yana rad etiladi."
        fix="Fragment 2024-yil noyabridan beri MAJBURIY KYC talab qiladi: passport skani + jonli selfi tasdiqlash. Agar TON yo'lini tanlasangiz — avval Wallet in Telegram orqali TON sotib olish kerak (UzCard/Humo bilan mumkin, 2026-da O'zbekistonda rasman litsenziyalangan), keyin TON'ni Fragment hamyoniga o'tkazish, keyin Premium uchun to'lash. Bu 3 bosqich va kurs xavfini o'z ichiga oladi. Bilim talab qiladigan foydalanuvchilar uchun — yaxshi yo'l. Oddiy foydalanuvchilar uchun esa vositachi bot ancha sodda."
      />
      <p>
        Fragment&apos;ni qachon ishlatish mantiqiy: NFT, anonim raqamlar yoki noyob
        username sotib olayotgan bo&apos;lsangiz. Faqat Premium uchun esa — vaqt va asab
        ortiqcha.
      </p>

      <h2 id="sabab-5">Sabab 5: Karta limiti yoki onlayn xarid o&apos;chirilgan</h2>
      <CauseCard
        lang="uz"
        num={5}
        title="Karta texnik sabablarga ko'ra o'tmaydi"
        symptom="Karta umuman ishlaydi (do'konlarda to'laydi), lekin Premium uchun rad etiladi. Banking ilovasida 'tranzaksiya bloklangan' bildirishnomasi ko'rinadi."
        fix="Banking ilovasini oching: (1) Karta sozlamalarida 'Internet to'lovlari' / 'CNP transactions' yoqilganmi? (2) Kunlik xarid limiti Premium summasidan ko'pmi? Odatda 200 000–500 000 so'm limit qo'yilgan bo'ladi, Premium 168 000 so'mdan boshlanadi — yetadi, lekin avvalgi xaridlar bilan birga limit to'lib qolishi mumkin. (3) Antifraud filtri xorijiy savdogarni shubhali deb belgilamoqda — bankga qo'ng'iroq qilib, 'Telegram' xaridini whitelist'ga qo'shishni so'rang. (4) Karta muddati tugagan yoki yangi qayta chiqarilgan bo'lsa — eski yo'q deb hisoblanadi."
      />

      <h2 id="taqqoslash">Qaysi yo&apos;l qulay? — taqqoslash jadvali</h2>
      <p>
        5 ta asosiy yo&apos;lni bir jadvalda ko&apos;rib chiqamiz. Tanlov foydalanuvchining
        kontekstiga bog&apos;liq, lekin O&apos;zbekistondagi oddiy foydalanuvchi uchun
        ohirgi qator — eng past qarshilikli yo&apos;l:
      </p>
      <PaymentComparisonTable lang="uz" />
      <p>
        Bu taqqoslash{' '}
        <Link href="/blog/eng-arzon-telegram-premium-ozbekistonda" className="text-[var(--primary)] hover:underline">
          eng arzon Premium varianti
        </Link>{' '}
        bilan to&apos;ldiriladi va{' '}
        <Link href="/blog/ishonchli-oson-premium-sotib-olish-uzgets" className="text-[var(--primary)] hover:underline">
          ishonchlilik mezonlari
        </Link>{' '}
        bilan birga ko&apos;rib chiqilishi kerak.
      </p>

      <h2 id="eng-oson">Eng oson yechim qaysi?</h2>
      <p>
        <strong>O&apos;zbek karta egasi uchun</strong> — @uzgetsbot orqali to&apos;lash:
        UzCard, Humo, Click yoki Payme qabul qilinadi (to&apos;lov O&apos;zbekiston
        provayderlari — Click va Payme orqali, kartaning o&apos;z OTP tasdiq oqimi
        ishlatiladi), KYC yo&apos;q, TON sotib olish kerak emas. Premium odatda 2–5 daqiqada
        akkauntga biriktiriladi.
      </p>
      <p>
        Narxlar:{' '}
        <Link href="/premium/3-oy" className="text-[var(--primary)] hover:underline">
          3 oy — 168 000 so&apos;m
        </Link>
        ,{' '}
        <Link href="/premium/6-oy" className="text-[var(--primary)] hover:underline">
          6 oy — 228 000 so&apos;m
        </Link>
        ,{' '}
        <Link href="/premium/12-oy" className="text-[var(--primary)] hover:underline">
          12 oy — 408 000 so&apos;m
        </Link>
        .
      </p>

      <InlineBotCTA
        lang="uz"
        text="3 oylik 168 000 so'mdan boshlab — START bosib oson buyurtma bering."
      />

      <h2 id="qaror">30 soniyalik qaror algoritmi</h2>
      <ol>
        <li>
          <strong>Sizda xalqaro Visa/Mastercard bormi (xorijiy bank, 3DS + recurring
          yoqilgan)?</strong> Ha bo&apos;lsa — Telegram in-app ishlaydi, qayta urinib
          ko&apos;ring. Yo&apos;q bo&apos;lsa — 2-qadam.
        </li>
        <li>
          <strong>Sizda TON crypto bormi va KYC uchun passport tayyormi?</strong> Ha
          bo&apos;lsa — Fragment.com. Yo&apos;q bo&apos;lsa — 3-qadam.
        </li>
        <li>
          <strong>Sizda UzCard/Humo/Click/Payme bormi?</strong> Ha — @uzgetsbot
          (eng oson, 2-5 daqiqa). Bu yerda yakunlanadi.
        </li>
      </ol>
      <p>
        Aksariyat O&apos;zbekiston foydalanuvchilari to&apos;g&apos;ridan-to&apos;g&apos;ri
        3-qadamga boradi.
      </p>

      <h2 id="diagnostika">Diagnostika ro&apos;yxati (to&apos;lay olmagandagi tartib)</h2>
      <ol>
        <li>
          Sizdagi karta — UzCard/Humo mi? Ha bo&apos;lsa — in-app to&apos;lov asla
          ishlamaydi, vaqtni isrof qilmang.
        </li>
        <li>
          Sizdagi karta — Visa/Mastercard mi? Banking ilovasidan 3DS, xalqaro to&apos;lov,
          recurring tekshirilganmi?
        </li>
        <li>
          Karta yetarli limitga egami? Premium 168 000+ so&apos;m, hold paytida muvaqqat
          200 000+ so&apos;m qo&apos;yiladi.
        </li>
        <li>
          VPN ulanganmi? Telegram to&apos;lovida VPN region nomuvofiqligini keltirib
          chiqarishi mumkin — o&apos;chirib qayta urinib ko&apos;ring.
        </li>
        <li>
          To&apos;lov muvaffaqiyatsiz bo&apos;lsa — pul yechilmaydi (hold 1-3 ish kuni
          ichida qaytariladi). Ko&apos;p marta urinish bank antifraud filtrini
          faollashtirishi mumkin.
        </li>
        <li>
          Yuqoridagilarning hammasi tekshirildi va ishlamadi? — Vositachi bot orqali
          o&apos;ting. Bu maxsus shu muammoni hal qiladi.
        </li>
      </ol>

      <h2 id="xavfsizlik">Vositachi bot xavfsizmi?</h2>
      <p>
        Mantiqiy savol. Premium <strong>to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram
        tomonidan</strong> akkauntga biriktiriladi — vositachi (bot) faqat to&apos;lov
        ko&apos;prigi. Sizning Telegram parolingiz, 2FA, akkauntdagi xabarlar — botda
        ko&apos;rinmaydi. Bot faqat @username&apos;ni biladi (Premium qaysi akkauntga
        ketishi uchun). Bu Telegram&apos;ning standart Premium gift mexanizmidan foydalanadi —{' '}
        <Link href="/blog/uzgets-ishonchli-mi-tekshirish-belgilari" className="text-[var(--primary)] hover:underline">
          to&apos;liq texnik tushuntirish bu yerda
        </Link>
        .
      </p>

      <Sources lang="uz" />

      <InlineBotCTA
        lang="uz"
        text="To'lash uchun tayyormisiz? UzCard/Humo bilan bir necha daqiqada Premium."
      />

      <h2 id="muhim">Muhim eslatmalar</h2>
      <ul>
        <li>
          <strong>To&apos;lov muvaffaqiyatsiz bo&apos;lsa, pul yechilmaydi</strong> —
          bankda &quot;hold&quot; ko&apos;rinishi mumkin, lekin u 1-3 ish kuni ichida
          qaytariladi.
        </li>
        <li>
          <strong>Telegram qoidasiga ko&apos;ra, Premium qaytarilmaydi</strong> — to&apos;lov
          muvaffaqiyatli bo&apos;lib, noto&apos;g&apos;ri @username&apos;ga ketgan
          bo&apos;lsa, vositachi yoki Telegram bekor qila olmaydi. Username&apos;ni
          clipboarddan ko&apos;chirish odat qiling.
        </li>
        <li>
          <strong>Vositachi xizmat tanlashda diqqat</strong> — narx mantiqsiz arzon bo&apos;lsa
          (masalan 3 oylik Premium 100 000 so&apos;mdan past) yoki ish vaqti talab qilinmasa
          (24/7 deb bo&apos;lsa) — ehtiyot bo&apos;ling.{' '}
          <Link
            href="/blog/arzon-stars-qayerdan-olinadi-3-belgi"
            className="text-[var(--primary)] hover:underline"
          >
            Aldanmaslik belgilari ro&apos;yxati
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
      <h2 id="nega-otmayapti">Почему оплата Premium не проходит?</h2>
      <p>
        Telegram Premium — это <strong>подписочный</strong> сервис, и Telegram
        принимает оплату через единый глобальный платёжный шлюз. Этот шлюз проверяет
        каждую карту по <strong>BIN-номеру</strong> (первые 6 цифр карты): если BIN
        отмечен как ограниченный или высокорисковый регион — транзакция отклоняется
        автоматически. Узбекские карты часто попадают в эти фильтры.
      </p>
      <p>Также карта для Premium должна соответствовать <strong>3 требованиям</strong>:</p>
      <ul>
        <li>Включены международные платежи</li>
        <li>Активен 3-D Secure</li>
        <li>Разрешены повторяющиеся (recurring) платежи</li>
      </ul>
      <p>
        Многие Visa/Mastercard, выпущенные узбекскими банками, не выполняют третье
        требование — это карты типа &quot;one-time only&quot;. Ниже — каждая основная
        причина и конкретное решение.
      </p>

      <InlineBotCTA
        lang="ru"
        text="Хотите обойти проблему оплаты за один раз? Платите в боте UzCard/Humo."
      />

      <h2 id="sabab-1">Причина 1: UzCard/Humo не работают внутри Telegram</h2>
      <CauseCard
        lang="ru"
        num={1}
        title="Самая частая преграда"
        symptom="Заходите в Telegram > Настройки > Premium, вводите номер UzCard или Humo. Форма возвращает 'Card not supported' или 'Payment failed'. Или в списке типов карт UzCard/Humo вовсе нет."
        fix="Это правило Telegram: в официальной in-app подписке принимаются только международные платёжные сети (Visa, Mastercard, JCB). UzCard и Humo — локальные сети, они не подключены к платёжному шлюзу Telegram. Единственное верное решение — посредник в Узбекистане (@uzgetsbot принимает UzCard/Humo через Click, Payme)."
      />
      <p>
        Это ограничение не специфично для Узбекистана — локальные карточные сети
        Центральной Азии, Африки и многих других регионов в том же положении. Изменить
        это нельзя, нужно обойти.
      </p>

      <h2 id="sabab-2">Причина 2: Visa/Mastercard отклоняется</h2>
      <CauseCard
        lang="ru"
        num={2}
        title="Международная карта узбекского банка тоже не проходит"
        symptom="У вас Visa или Mastercard от Капиталбанка/Асака/TBC. Данные карты в Telegram принимаются, но появляется 'Transaction declined' или 'Bank declined'. От банка не приходит SMS или виден 'hold 0 сум' с моментальным возвратом."
        fix="3 проверки: (1) В банковском приложении проверьте, что на карте включены 'Международные платежи' и '3-D Secure'. (2) Проверьте дневной лимит покупок — он не должен быть меньше суммы Premium. (3) Это subscription billing Telegram — если карта поддерживает только 'one-time' платежи, отклонится. Обратитесь в поддержку банка с просьбой включить 'recurring/subscription billing'. Если не получается — оплатите через Uzgets bot (обычная карта, recurring не требуется)."
      />

      <h2 id="sabab-3">Причина 3: Оплата через App Store / Google Play заблокирована</h2>
      <CauseCard
        lang="ru"
        num={3}
        title="Через iOS/Android Premium купить нельзя"
        symptom="На iOS нажимаете Telegram > Premium > Subscribe, открывается страница App Store и появляется 'Cannot connect to App Store' или 'Your payment method was declined'. На Android Google Play выдаёт ошибку."
        fix="App Store и Google Play в узбекском регионе принимают ограниченные методы оплаты для Telegram Premium — обычно только карты США/Европы. Решения: (a) менять регион аккаунта — сложно и рискованно (теряются многие функции), (b) можно пополнить баланс Google Play gift card'ом, но и gift card сложно купить из Узбекистана. Самый простой путь — Fragment или местный посредник, напрямую на счёт Telegram."
      />

      <InlineBotCTA
        lang="ru"
        text="Без смены региона и борьбы с App Store — получите Premium в боте."
      />

      <h2 id="sabab-4">Причина 4: Fragment требует KYC, а TON — сложно</h2>
      <CauseCard
        lang="ru"
        num={4}
        title="Fragment работает, но обычному пользователю тяжело"
        symptom="Заходите на Fragment.com, видите Premium 3/6/12 месяцев (~$11.99 / $15.99 / $28.99), но для оплаты нужна TON-крипта или международная Visa. TON-баланса нет. Вводите Visa — снова отказ."
        fix="Fragment с ноября 2024 требует ОБЯЗАТЕЛЬНЫЙ KYC: скан паспорта + живое селфи. Если выбираете путь TON — сначала нужно купить TON через Wallet in Telegram (можно через UzCard/Humo, в 2026 официально лицензирован в Узбекистане), потом перевести TON в кошелёк Fragment, потом оплатить Premium. Это 3 этапа и риск курса. Для подкованных пользователей — нормальный путь. Для обычных — посредник-бот значительно проще."
      />
      <p>
        Когда Fragment имеет смысл: если покупаете NFT, анонимные номера или редкий
        username. Только ради Premium — лишние время и нервы.
      </p>

      <h2 id="sabab-5">Причина 5: Лимит карты или отключены онлайн-покупки</h2>
      <CauseCard
        lang="ru"
        num={5}
        title="Карта не проходит по техническим причинам"
        symptom="Карта в целом работает (платит в магазинах), но для Premium отказ. В банковском приложении — уведомление 'транзакция заблокирована'."
        fix="Откройте банковское приложение: (1) В настройках карты включены ли 'Интернет-платежи' / 'CNP transactions'? (2) Дневной лимит покупок больше суммы Premium? Обычно лимит 200 000–500 000 сум, Premium от 168 000 сум — хватает, но вместе с предыдущими покупками лимит может быть исчерпан. (3) Антифрод-фильтр помечает иностранного продавца как подозрительного — позвоните в банк и попросите внести 'Telegram' в whitelist. (4) Срок карты истёк или карта перевыпущена — старая считается недействительной."
      />

      <h2 id="taqqoslash">Какой путь удобнее? — сравнительная таблица</h2>
      <p>
        Сводим 5 основных способов в одну таблицу. Выбор зависит от контекста
        пользователя, но для обычного пользователя в Узбекистане последняя строка —
        путь с наименьшим сопротивлением:
      </p>
      <PaymentComparisonTable lang="ru" />
      <p>
        Это сравнение дополняет{' '}
        <Link
          href="/ru/blog/eng-arzon-telegram-premium-ozbekistonda"
          className="text-[var(--primary)] hover:underline"
        >
          самый дешёвый вариант Premium
        </Link>{' '}
        и должно рассматриваться вместе с{' '}
        <Link
          href="/ru/blog/ishonchli-oson-premium-sotib-olish-uzgets"
          className="text-[var(--primary)] hover:underline"
        >
          критериями надёжности
        </Link>
        .
      </p>

      <h2 id="eng-oson">Какое решение самое простое?</h2>
      <p>
        <strong>Для владельца узбекской карты</strong> — оплата через @uzgetsbot:
        принимаются UzCard, Humo, Click или Payme (оплата идёт через узбекских
        провайдеров — Click и Payme, используется родной OTP-поток карты), KYC нет,
        TON покупать не нужно. Premium обычно зачисляется на аккаунт за 2–5 минут.
      </p>
      <p>
        Цены:{' '}
        <Link href="/ru/premium/3-oy" className="text-[var(--primary)] hover:underline">
          3 месяца — 168 000 сум
        </Link>
        ,{' '}
        <Link href="/ru/premium/6-oy" className="text-[var(--primary)] hover:underline">
          6 месяцев — 228 000 сум
        </Link>
        ,{' '}
        <Link href="/ru/premium/12-oy" className="text-[var(--primary)] hover:underline">
          12 месяцев — 408 000 сум
        </Link>
        .
      </p>

      <InlineBotCTA
        lang="ru"
        text="От 168 000 сум за 3 месяца — нажмите START и оформите легко."
      />

      <h2 id="qaror">30-секундный алгоритм решения</h2>
      <ol>
        <li>
          <strong>Есть международная Visa/Mastercard (зарубежный банк, 3DS +
          recurring включены)?</strong> Если да — Telegram in-app работает, попробуйте
          снова. Если нет — шаг 2.
        </li>
        <li>
          <strong>Есть TON-крипта и паспорт для KYC?</strong> Если да —
          Fragment.com. Если нет — шаг 3.
        </li>
        <li>
          <strong>Есть UzCard/Humo/Click/Payme?</strong> Да — @uzgetsbot (самый
          простой, 2-5 минут). На этом заканчивается.
        </li>
      </ol>
      <p>
        Большинство пользователей в Узбекистане идут сразу к 3-му шагу.
      </p>

      <h2 id="diagnostika">Диагностический чек-лист (если не получается оплатить)</h2>
      <ol>
        <li>
          Ваша карта — UzCard/Humo? Если да — in-app оплата вообще не сработает, не
          тратьте время.
        </li>
        <li>
          Ваша карта — Visa/Mastercard? Проверены ли в банковском приложении 3DS,
          международные платежи, recurring?
        </li>
        <li>
          У карты достаточный лимит? Premium от 168 000 сум, на время hold временно
          блокируется 200 000+ сум.
        </li>
        <li>
          Включён ли VPN? При оплате Telegram VPN может вызвать несоответствие региона —
          отключите и попробуйте снова.
        </li>
        <li>
          Если оплата неуспешна — деньги не списываются (hold возвращается в течение
          1-3 рабочих дней). Много попыток подряд могут активировать антифрод банка.
        </li>
        <li>
          Всё проверено и не работает? — Переходите к посреднику-боту. Он специально
          решает именно эту проблему.
        </li>
      </ol>

      <h2 id="xavfsizlik">Безопасен ли посредник-бот?</h2>
      <p>
        Логичный вопрос. Premium <strong>зачисляется напрямую от Telegram</strong> на
        аккаунт — посредник (бот) лишь платёжный мост. Ваш Telegram-пароль, 2FA, сообщения
        в аккаунте — боту не видны. Бот знает только @username (чтобы Premium ушёл на
        правильный аккаунт). Используется стандартный механизм Premium gift от Telegram —{' '}
        <Link
          href="/ru/blog/uzgets-ishonchli-mi-tekshirish-belgilari"
          className="text-[var(--primary)] hover:underline"
        >
          полное техническое объяснение здесь
        </Link>
        .
      </p>

      <Sources lang="ru" />

      <InlineBotCTA
        lang="ru"
        text="Готовы оплатить? Premium за несколько минут с UzCard/Humo."
      />

      <h2 id="muhim">Важные замечания</h2>
      <ul>
        <li>
          <strong>При неуспешной оплате деньги не списываются</strong> — в банке может
          отобразиться &quot;hold&quot;, но он возвращается в течение 1-3 рабочих дней.
        </li>
        <li>
          <strong>По правилам Telegram Premium не возвращается</strong> — если оплата
          прошла и Premium ушёл на неверный @username, ни посредник, ни Telegram не
          смогут отменить. Возьмите в привычку копировать username из буфера.
        </li>
        <li>
          <strong>Будьте внимательны при выборе посредника</strong> — если цена
          подозрительно низкая (например, 3 месяца Premium дешевле 100 000 сум) или нет
          указания режима работы (написано просто &quot;24/7&quot;) — будьте осторожны.{' '}
          <Link
            href="/ru/blog/arzon-stars-qayerdan-olinadi-3-belgi"
            className="text-[var(--primary)] hover:underline"
          >
            Список признаков обмана
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
  type: 'problem',
  locales: {
    uz: {
      title: "Telegram Premium uchun to'lay olmayapman — 5 sabab va aniq yechim 2026",
      description:
        "Telegram Premium uchun karta o'tmayapti? UzCard/Humo qabul qilinmasligi, Visa rad etilishi, App Store bloki, Fragment KYC — har bir muammoning sababi va eng oson yechim.",
      metaTitle: "Telegram Premium to'lay olmayapman — yechim 2026 | Uzgets",
      metaDescription:
        "Telegram Premium uchun to'lay olmayapsizmi? 5 ta asosiy sabab (UzCard rad etiladi, Visa o'tmaydi, App Store bloki, Fragment KYC) va O'zbekiston uchun eng oson yechim.",
      ogDescription:
        "Telegram Premium uchun to'lay olmaslikning 5 sababi va eng oson yechim — taqqoslash jadvali bilan.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "Nega Telegram'da UzCard yoki Humo qabul qilinmaydi?",
          answer:
            "UzCard va Humo — O'zbekistonning mahalliy karta tarmoqlari, ular Telegram'ning xalqaro to'lov gateway'iga ulanmagan. Telegram in-app obunada faqat Visa, Mastercard va JCB qabul qilinadi. Bu cheklov O'zbekistondagi vositachi xizmatlar orqali (UzCard/Humo qabul qiluvchi bot) chetlab o'tiladi.",
        },
        {
          question: "Mening Visa kartam bor, lekin Telegram uni rad etmoqda — nega?",
          answer:
            "3 ta mumkin sabab: (1) Karta uchun 'xalqaro to'lov' yoki '3-D Secure' yoqilmagan — banking ilovasidan yoqing. (2) Karta faqat 'one-time' to'lovlarga ruxsat beradi, lekin Premium — subscription billing, bu recurring rejimini talab qiladi. (3) Kartaning BIN raqami Telegram gateway'i tomonidan yuqori risk hudud sifatida belgilangan — bu O'zbek banklari kartalari uchun keng tarqalgan muammo. Yechim: bankka recurring billing yoqishni so'rang yoki vositachi bot ishlatib oching.",
        },
        {
          question: "Fragment.com orqali Premium sotib olish kerakmi?",
          answer:
            "Faqat sizda allaqachon TON crypto bo'lsa va KYC tasdiqlash (passport + selfi) o'tishga tayyor bo'lsangiz mantiqiy. Fragment 2024 noyabridan beri MAJBURIY KYC talab qiladi. Aks holda — TON sotib olish (Wallet in Telegram orqali), o'tkazma va kurs xavfi bilan birga bu 3 bosqichli jarayonga aylanadi. Oddiy Premium uchun mahalliy vositachi 10× sodda.",
        },
        {
          question: "App Store / Google Play orqali to'lay olamanmi?",
          answer:
            "Amalda — yo'q. O'zbekiston regionidagi App Store va Google Play hisoblari Telegram Premium uchun cheklangan to'lov usullarini qabul qiladi (AQSH/Yevropa kartalari). Hisob regionini o'zgartirish ko'plab boshqa funksiyalarni yo'qotadi va texnik jihatdan murakkab. Yagona ishonchli yo'l — Telegram hisobiga to'g'ridan-to'g'ri (Fragment yoki mahalliy vositachi orqali).",
        },
        {
          question: "Vositachi bot orqali to'lash xavfsizmi?",
          answer:
            "Ha. Premium to'g'ridan-to'g'ri Telegram tomonidan sizning akkauntingizga biriktiriladi — bot faqat to'lov ko'prigi. Bot sizning Telegram parolingiz, 2FA yoki xabarlaringizga kira olmaydi. Bot faqat @username'ni biladi (Premium qaysi akkauntga ketishi uchun). Bu Telegram'ning standart Premium gift mexanizmidan foydalanadi — bot Telegram'ning ochiq Bot API'si orqali ishlaydi (rasmiy hamkor degani emas, balki Telegram tomonidan har kim foydalanishi mumkin bo'lgan API).",
        },
        {
          question: "Bir necha marta urinib ko'rdim, hech qanaqasi ishlamadi — nima qilaman?",
          answer:
            "Avval to'xtang — bir necha rad etilgan urinishlar bank antifraud filtrini faollashtirishi mumkin va karta bir muddat 'cooldown'ga tushadi. Diagnostika: kartangiz UzCard/Humo bo'lsa — in-app asla ishlamaydi (vaqt isrof qilmang). Visa/Mastercard bo'lsa — bank ilovasida xalqaro to'lov + 3DS + recurring yoqilgan, limit yetarli bo'lganini tekshiring. Hech narsa yordam bermasa — @uzgetsbot orqali to'lang, u maxsus shu muammoni hal qilish uchun yaratilgan.",
        },
        {
          question: "Pul yechilib ketmadimi, agar to'lov rad etilsa?",
          answer:
            "Yo'q. Rad etilgan to'lovda pul yechilmaydi. Banking ilovasida 'hold' (vaqtinchalik bloklash) ko'rinishi mumkin, lekin u 1-3 ish kuni ichida avtomatik qaytariladi. Pulingiz yo'qolmaydi. Faqat eslatma: ko'p marta urinish (5-6 dan oshiq) bank tomonidan shubhali deb qaralishi mumkin, kartani bir muddat bloklashga olib kelishi mumkin.",
        },
        {
          question: "Tezroq usul qaysi — bot orqali yoki Fragment?",
          answer:
            "@uzgetsbot orqali tezroq. Botda: START → @username → to'lov → 2-5 daqiqa kutish = jami 5-7 daqiqa. Fragment'da: KYC (15-30 daqiqa, birinchi marta) → TON sotib olish (yo'q bo'lsa, 10-20 daqiqa) → o'tkazma (5-10 daqiqa) → to'lov (1-2 daqiqa) = jami 30-60 daqiqa birinchi marta. Keyingi marta Fragment'da ham tezroq bo'ladi, lekin TON balans saqlab turish kerak.",
        },
      ],
      finalCtaHeading: "To'lov muammosini bir martada hal qiling",
      finalCtaBody:
        "Botga kiring, @username'ni clipboarddan ko'chirib joylashtiring va UzCard/Humo bilan to'lang. Premium 2-5 daqiqada akkauntga biriktiriladi.",
    },
    ru: {
      title:
        'Не могу оплатить Telegram Premium — 5 причин и конкретное решение 2026',
      description:
        'Карта не проходит для Telegram Premium? UzCard/Humo не принимаются, Visa отклоняется, App Store блокирует, Fragment требует KYC — причина каждой проблемы и самое простое решение.',
      metaTitle: 'Не могу оплатить Telegram Premium — решение 2026 | Uzgets',
      metaDescription:
        'Не получается оплатить Telegram Premium? 5 основных причин (UzCard отклоняется, Visa не проходит, блок App Store, KYC Fragment) и самое простое решение для Узбекистана.',
      ogDescription:
        '5 причин невозможности оплатить Telegram Premium и самое простое решение — со сравнительной таблицей.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Почему в Telegram не принимаются UzCard или Humo?',
          answer:
            'UzCard и Humo — локальные карточные сети Узбекистана, они не подключены к международному платёжному шлюзу Telegram. В in-app подписке Telegram принимаются только Visa, Mastercard и JCB. Это ограничение обходится через посредников в Узбекистане (бот, принимающий UzCard/Humo).',
        },
        {
          question: 'У меня есть Visa, но Telegram её отклоняет — почему?',
          answer:
            '3 возможные причины: (1) Для карты не включены "международные платежи" или "3-D Secure" — включите в банковском приложении. (2) Карта разрешает только "one-time" платежи, а Premium — subscription billing, требующий режима recurring. (3) BIN-номер карты помечен шлюзом Telegram как высокорисковый регион — частая проблема для карт узбекских банков. Решение: попросите банк включить recurring billing или используйте посредник-бот.',
        },
        {
          question: 'Нужно ли покупать Premium через Fragment.com?',
          answer:
            'Имеет смысл только если у вас уже есть TON-крипта и вы готовы пройти KYC (паспорт + селфи). С ноября 2024 Fragment требует ОБЯЗАТЕЛЬНЫЙ KYC. Иначе — нужно сначала купить TON (через Wallet in Telegram), сделать перевод, и учитывая риск курса это превращается в 3-этапный процесс. Для обычной покупки Premium местный посредник в 10× проще.',
        },
        {
          question: 'Можно ли оплатить через App Store / Google Play?',
          answer:
            'Фактически — нет. Аккаунты App Store и Google Play в узбекском регионе принимают ограниченные методы оплаты для Telegram Premium (карты США/Европы). Менять регион аккаунта рискованно (теряются другие функции) и технически сложно. Единственный надёжный путь — прямая оплата на счёт Telegram (через Fragment или местного посредника).',
        },
        {
          question: 'Безопасна ли оплата через посредник-бот?',
          answer:
            'Да. Premium зачисляется напрямую от Telegram на ваш аккаунт — бот лишь платёжный мост. Бот не имеет доступа к вашему Telegram-паролю, 2FA или сообщениям. Бот знает только @username (чтобы Premium ушёл на правильный аккаунт). Используется стандартный механизм Premium gift от Telegram — бот работает через открытый Bot API Telegram (это не означает «официальный партнёр», просто API, которым может пользоваться любой разработчик).',
        },
        {
          question: 'Пробовал несколько раз, ничего не работает — что делать?',
          answer:
            'Сначала остановитесь — несколько отклонённых попыток могут активировать антифрод банка, и карта попадёт в cooldown. Диагностика: если ваша карта UzCard/Humo — in-app никогда не сработает (не тратьте время). Если Visa/Mastercard — проверьте в банковском приложении, что включены международные платежи + 3DS + recurring и лимит достаточен. Если ничего не помогло — оплатите через @uzgetsbot, он создан специально для этой проблемы.',
        },
        {
          question: 'Списываются ли деньги, если оплата отклонена?',
          answer:
            'Нет. При отклонённой оплате деньги не списываются. В банковском приложении может отобразиться "hold" (временная блокировка), но он автоматически возвращается в течение 1-3 рабочих дней. Деньги не теряются. Только напоминание: много попыток (более 5-6) могут показаться банку подозрительными и привести к временной блокировке карты.',
        },
        {
          question: 'Какой способ быстрее — бот или Fragment?',
          answer:
            'Через @uzgetsbot быстрее. В боте: START → @username → оплата → ожидание 2-5 минут = всего 5-7 минут. На Fragment: KYC (15-30 минут, в первый раз) → покупка TON (если нет, 10-20 минут) → перевод (5-10 минут) → оплата (1-2 минуты) = всего 30-60 минут в первый раз. В следующий раз Fragment тоже быстрее, но нужно держать TON-баланс.',
        },
      ],
      finalCtaHeading: 'Решите проблему оплаты за один раз',
      finalCtaBody:
        'Зайдите в бот, скопируйте @username из буфера и оплатите UzCard/Humo. Premium зачислится на аккаунт за 2-5 минут.',
    },
  },
}
