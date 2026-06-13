import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-hadya-qanday-sovga-qilinadi'
const TODAY = '2026-05-18'

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium hadyasini O&apos;zbekistondan eng oson yuborish yo&apos;li —{' '}
      <strong>@uzgetsbot</strong>: botga START bosing, qabul qiluvchining{' '}
      <strong>@username</strong>&apos;ini kiriting, 3/6/12 oylik paketni tanlang va{' '}
      <strong>UzCard/Humo/Click/Payme</strong> bilan to&apos;lang. Premium qabul qiluvchining
      akkauntiga <strong>to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram tomonidan</strong>{' '}
      biriktiriladi (rasmiy &quot;gift&quot; bildirishnomasi bilan), 2–5 daqiqada faollashadi.
      Jo&apos;natuvchining o&apos;zida Premium bo&apos;lishi shart emas, anonim hadya ham
      mumkin. Narxlar: <strong>3 oy — 168 000 so&apos;m</strong>, 6 oy — 228 000 so&apos;m,
      12 oy — 408 000 so&apos;m.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Самый простой способ подарить Telegram Premium из Узбекистана —{' '}
      <strong>@uzgetsbot</strong>: нажмите START, введите <strong>@username</strong>{' '}
      получателя, выберите пакет на 3/6/12 месяцев и оплатите через{' '}
      <strong>UzCard/Humo/Click/Payme</strong>. Premium зачисляется на аккаунт получателя{' '}
      <strong>напрямую от Telegram</strong> (с официальным уведомлением о подарке),
      активация — за 2–5 минут. Отправителю самому быть Premium необязательно, возможен и
      анонимный подарок. Цены: <strong>3 месяца — 168 000 сум</strong>, 6 месяцев —
      228 000 сум, 12 месяцев — 408 000 сум.
    </p>
  )
}

function StepCard({
  num,
  title,
  body,
}: {
  num: number
  title: string
  body: React.ReactNode
}) {
  return (
    <div className="uz-card my-4 rounded-xl border border-[var(--border)] p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
          {num}
        </span>
        <div className="flex-1">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-1 text-sm text-[var(--text-muted)]">{body}</div>
        </div>
      </div>
    </div>
  )
}

function PriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  const headers =
    lang === 'uz'
      ? ['Paket', 'Narx (uzgets)', 'Fragment (taxminiy)', 'Foyda']
      : ['Пакет', 'Цена (uzgets)', 'Fragment (примерно)', 'Выгода']
  const rows =
    lang === 'uz'
      ? [
          ['3 oylik Premium', '168 000 so\'m', '~$13.99 ≈ 175 000 so\'m', 'Eng arzon kirish'],
          ['6 oylik Premium', '228 000 so\'m', '~$19.99 ≈ 250 000 so\'m', 'Eng mashhur'],
          ['12 oylik Premium', '408 000 so\'m', '~$28.99 ≈ 363 000 so\'m', 'Yiliga eng katta tejam'],
        ]
      : [
          ['3 месяца Premium', '168 000 сум', '~$13.99 ≈ 175 000 сум', 'Самый дешёвый старт'],
          ['6 месяцев Premium', '228 000 сум', '~$19.99 ≈ 250 000 сум', 'Самый популярный'],
          ['12 месяцев Premium', '408 000 сум', '~$28.99 ≈ 363 000 сум', 'Максимальная годовая экономия'],
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
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-[var(--border)] px-3 py-2 align-top text-[var(--text-muted)]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Fragment narxi TON kursiga qarab o'zgaradi; uzgets narxi so'mda qat'iy."
          : 'Цена Fragment колеблется по курсу TON; цена uzgets фиксирована в сумах.'}
      </p>
    </div>
  )
}

function WaysComparisonTable({ lang }: { lang: 'uz' | 'ru' }) {
  const headers =
    lang === 'uz'
      ? ["Yo'l", "O'zbek karta", 'Premium kerakmi?', 'Bosqichlar', 'Vaqt']
      : ['Способ', 'Узбек. карта', 'Premium нужен?', 'Шагов', 'Время']
  const rows =
    lang === 'uz'
      ? [
          ['Telegram in-app (Profile → Gift)', '❌ Visa/MC kerak', '✅ Ha (Telegram qoidasi)', '4', '5–10 daqiqa'],
          ['App Store / Google Play (gift)', '❌ ko\'p hollarda', '✅ Ha', '5', '10–15 daqiqa'],
          ['Fragment.com', '⚠️ TON yoki xalqaro Visa', '❌ Yo\'q', '4–6 (+KYC)', '20–60 daqiqa (birinchi marta)'],
          ['@uzgetsbot', '✅ UzCard/Humo/Click/Payme', '❌ Yo\'q', '3', '2–5 daqiqa'],
        ]
      : [
          ['Telegram in-app (Профиль → Gift)', '❌ нужен Visa/MC', '✅ Да (правило Telegram)', '4', '5–10 минут'],
          ['App Store / Google Play (gift)', '❌ чаще всего', '✅ Да', '5', '10–15 минут'],
          ['Fragment.com', '⚠️ TON или междунар. Visa', '❌ Нет', '4–6 (+KYC)', '20–60 минут (впервые)'],
          ['@uzgetsbot', '✅ UzCard/Humo/Click/Payme', '❌ Нет', '3', '2–5 минут'],
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
                className={isUzgets ? 'bg-[var(--primary)]/5 font-medium' : ''}
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
            ? "Telegram Premium rasmiy FAQ va hadya bo'limi"
            : 'Официальный FAQ Telegram Premium и раздел подарка'}
        </li>
        <li>
          <a
            href="https://fragment.com/premium/gift"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            fragment.com/premium/gift
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? 'Premium hadya narxlari (TON, KYC talab qiladi)'
            : 'Цены Premium-подарка (TON, требует KYC)'}
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
            ? "Premium API va hadya mexanizmining texnik tavsifi"
            : 'Premium API и техническое описание механизма подарка'}
        </li>
        <li>
          <a
            href="https://telegram.org/blog/star-messages-gateway-2-0-and-more"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            telegram.org/blog — Stars bilan Premium gift
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? "Premium hadyaning Telegram Stars orqali yuborilishi (2026)"
            : 'Отправка Premium-подарка через Telegram Stars (2026)'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="hadya-nima">Telegram Premium hadya — nima va kimga mos?</h2>
      <p>
        Telegram Premium <strong>hadya</strong> (gift) — bu siz kimningdir akkauntiga
        oldindan to&apos;lab beradigan Premium obunangiz. Qabul qiluvchi siz to&apos;langan
        muddat — <strong>3, 6 yoki 12 oy</strong> davomida Premium funksiyalardan
        foydalanadi: yangilanmagan reklamasiz Telegram, 4 GB fayl yuklash, premium emoji,
        ko&apos;proq pin&apos;langan chatlar va boshqalar. Hadya tugagach, qabul qiluvchi
        avtomatik to&apos;lov bo&apos;lmasdan oddiy akkauntga qaytadi — uzaytirishni
        o&apos;zi tanlaydi.
      </p>
      <p>
        Hadyani <strong>kim uchun</strong> sotib olishadi:
      </p>
      <ul>
        <li>Yaqin do&apos;st yoki qarindoshga tug&apos;ilgan kunga</li>
        <li>Yangi yil, 8-mart, 14-fevral, Navro&apos;z sovg&apos;asiga</li>
        <li>Hamkasbga bayram munosabati bilan</li>
        <li>O&apos;zining ikkinchi akkauntiga (work/personal ajratish uchun)</li>
        <li>Kontent yaratuvchiga (blogger, kanal egasi) — minnatdorlik sifatida</li>
      </ul>

      <InlineBotCTA
        lang="uz"
        text="Sovg'a qilmoqchimisiz? Botda @username kiritib, 2 daqiqada hadya yuboring."
      />

      <h2 id="rasmiy-yol">Rasmiy yo&apos;l — Telegram&apos;dagi &quot;Gift Premium&quot;</h2>
      <p>
        Telegram&apos;ning o&apos;z ichida hadya mexanizmi bor. Qadamlar:
      </p>
      <ol>
        <li>Qabul qiluvchining profilini oching</li>
        <li>O&apos;ng yuqoridagi <strong>⋮ / ⋯</strong> menyusiga bosing</li>
        <li><strong>Send a Gift</strong> yoki <strong>Gift Premium</strong> tanlang</li>
        <li>3, 6 yoki 12 oylik paketni tanlab to&apos;lov qiling</li>
      </ol>
      <p>
        Bu yo&apos;l ishonchli, lekin <strong>O&apos;zbekiston foydalanuvchisi uchun 2 ta
        muammo</strong> bor:
      </p>
      <ul>
        <li>
          <strong>UzCard/Humo qabul qilinmaydi</strong> — faqat xalqaro Visa/Mastercard,
          App Store yoki Google Play balansi. O&apos;zbek banklari Visa kartalari ham
          BIN-filtrga ko&apos;p hollarda tushib qoladi (
          <Link
            href="/blog/telegram-premium-tolay-olmayapman-yechim"
            className="text-[var(--primary)] hover:underline"
          >
            sabablari va yechimi
          </Link>
          ).
        </li>
        <li>
          <strong>Jo&apos;natuvchining o&apos;zi Premium bo&apos;lishi shart</strong> —
          Telegram FAQ bo&apos;yicha, in-app hadya yuborish uchun siz o&apos;zingiz
          Premium obunaga ega bo&apos;lishingiz kerak. Premiumingiz yo&apos;q bo&apos;lsa,
          bu tugma faollashtirilmagan.
        </li>
      </ul>

      <h2 id="fragment">Fragment.com — TON va KYC talab qiladi</h2>
      <p>
        Telegram&apos;ning rasmiy marketplace&apos;i Fragment.com hadya sotishni
        qo&apos;llab-quvvatlaydi:{' '}
        <a
          href="https://fragment.com/premium/gift"
          target="_blank"
          rel="noopener"
          className="text-[var(--primary)] hover:underline"
        >
          fragment.com/premium/gift
        </a>
        . Bu yerda Premium $13.99 / $19.99 / $28.99 atrofida (3/6/12 oy uchun). Lekin:
      </p>
      <ul>
        <li>
          <strong>To&apos;lov TON crypto&apos;da</strong> (yoki kamdan-kam xalqaro Visa) —
          O&apos;zbek karta to&apos;g&apos;ridan-to&apos;g&apos;ri ishlamaydi.
        </li>
        <li>
          <strong>Majburiy KYC</strong> 2024-yil noyabridan beri: passport va selfi.
          Birinchi marta — 15–30 daqiqa.
        </li>
        <li>
          TON kursi tebranadi — yakuniy so&apos;mdagi narx ham o&apos;zgarib turadi.
        </li>
      </ul>

      <h2 id="uzgets-yol">@uzgetsbot orqali hadya — qadam-baqadam</h2>
      <p>
        O&apos;zbekistondagi foydalanuvchi uchun eng oson va eng past qarshilikli yo&apos;l —{' '}
        <strong>@uzgetsbot</strong>. Hadya rejimi oddiy Premium sotib olish bilan deyarli
        bir xil, faqat bitta farq bilan: <strong>@username</strong> qatoriga o&apos;zingizning
        emas, <strong>qabul qiluvchining</strong> usernameini kiritasiz.
      </p>
      <StepCard
        num={1}
        title="Botga kirish va START"
        body={
          <>
            Telegram&apos;da <strong>@uzgetsbot</strong>&apos;ni qidiring va
            START tugmasini bosing. Menu&apos;dan <strong>Premium</strong> bo&apos;limini
            tanlang. Hadya uchun alohida tugma kerak emas — Premium oqimi
            o&apos;z-o&apos;zidan istalgan @usernamega yuborishni qo&apos;llab-quvvatlaydi.
          </>
        }
      />
      <StepCard
        num={2}
        title="Qabul qiluvchining @username'ini kiritish"
        body={
          <>
            Telegram&apos;da qabul qiluvchining profilidan @username&apos;ni nusxa
            oling (masalan <code>@nodira</code>). Botda kiritish qatoriga joylashtiring.{' '}
            <strong>Diqqat:</strong> bir harf xato bo&apos;lsa Premium boshqa odamga ketadi
            va bekor qilib bo&apos;lmaydi. Username&apos;ni clipboarddan ko&apos;chirish
            xavfsizroq.
          </>
        }
      />
      <StepCard
        num={3}
        title="Muddatni tanlash (3 / 6 / 12 oy)"
        body={
          <>
            Bot 3 ta paket ko&apos;rsatadi: <strong>3 oy — 168 000 so&apos;m</strong>,{' '}
            <strong>6 oy — 228 000 so&apos;m</strong>,{' '}
            <strong>12 oy — 408 000 so&apos;m</strong>. Bayram sovg&apos;asi uchun 3 oy ko&apos;pincha
            yetarli; uzoq munosabat sovg&apos;asi uchun 12 oy eng tejamli.
          </>
        }
      />
      <StepCard
        num={4}
        title="UzCard / Humo / Click / Payme bilan to'lov"
        body={
          <>
            Bot to&apos;lov sahifasiga olib o&apos;tadi: <strong>UzCard, Humo, Click,
            Payme</strong> orasidan tanlaysiz. To&apos;lov o&apos;zbek provayderlari orqali
            o&apos;tadi (kartaning oddiy OTP-SMS tasdig&apos;i bilan) — KYC, TON, xalqaro
            karta talab qilinmaydi.
          </>
        }
      />
      <StepCard
        num={5}
        title="2–5 daqiqada qabul qiluvchiga yetkaziladi"
        body={
          <>
            To&apos;lov tasdiqlangach, bot Premium hadyani Telegram&apos;ning rasmiy gift
            API&apos;si orqali yuboradi. Qabul qiluvchi o&apos;z Telegram&apos;ida{' '}
            <strong>rasmiy &quot;You received a Premium gift&quot;</strong> bildirishnomasini
            oladi (jo&apos;natuvchi sifatida — uzgets bot yoki sizning username&apos;ingiz,
            tanlovga qarab). Premium darhol faollashadi.
          </>
        }
      />

      <InlineBotCTA
        lang="uz"
        text="3 ta qadam, 3–5 daqiqa. Hadya hozir yuboriladi."
      />

      <h2 id="rasmiy-yetkazish">Hadya kim tomonidan yuboriladi?</h2>
      <p>
        Bu eng tez-tez beriladigan savol va eng muhim ishonch nuqtasi.{' '}
        <strong>Premium qabul qiluvchining akkauntiga to&apos;g&apos;ridan-to&apos;g&apos;ri
        Telegram tomonidan biriktiriladi.</strong> Uzgets bot — faqat to&apos;lov ko&apos;prigi
        va Telegram&apos;ning rasmiy Premium gift mexanizmini ishga tushiruvchi vositadir.
      </p>
      <p>Texnik tarafdan amalda nima sodir bo&apos;ladi:</p>
      <ul>
        <li>Bot sizning UzCard/Humo to&apos;lovingizni Click/Payme orqali qabul qiladi</li>
        <li>
          Bot Telegram&apos;ning <strong>rasmiy Premium gift mexanizmi</strong> orqali
          qabul qiluvchining @username&apos;iga Premium jo&apos;natadi
        </li>
        <li>
          Qabul qiluvchi Telegram&apos;ning <strong>rasmiy tizim akkauntidan</strong>{' '}
          bildirishnoma oladi — bu uzgets emas, Telegram&apos;ning o&apos;zi
        </li>
        <li>
          Premium statusi akkauntda ko&apos;rinadi: profilda yulduzcha, premium emoji
          ishlatish imkoniyati va boshqa belgilar — Telegram&apos;ning oddiy obunasi bilan
          aynan bir xil
        </li>
      </ul>
      <p>
        Bu nimani anglatadi: <strong>jo&apos;natuvchining Telegram parolingiz, 2FA, shaxsiy
        xabarlaringiz uzgetsga ko&apos;rinmaydi.</strong> Bot faqat 2 narsani biladi —
        qabul qiluvchining @username&apos;i va to&apos;lov natijasi. Bu mexanizmning to&apos;liq
        tushuntirishi —{' '}
        <Link
          href="/blog/uzgets-ishonchli-mi-tekshirish-belgilari"
          className="text-[var(--primary)] hover:underline"
        >
          uzgets ishonchli mi? — texnik tekshirish
        </Link>
        .
      </p>

      <h2 id="narxlar">Hadya narxlari va taqqoslash</h2>
      <p>
        Hadya narxi oddiy Premium narxi bilan bir xil — qo&apos;shimcha xizmat haqi
        olinmaydi:
      </p>
      <PriceTable lang="uz" />
      <p>
        Eng to&apos;g&apos;ri solishtirish jadvali (qaysi yo&apos;l O&apos;zbek karta egasi
        uchun ishlaydi):
      </p>
      <WaysComparisonTable lang="uz" />
      <p>
        Bog&apos;liq:{' '}
        <Link
          href="/blog/eng-arzon-telegram-premium-ozbekistonda"
          className="text-[var(--primary)] hover:underline"
        >
          eng arzon Premium O&apos;zbekistonda
        </Link>{' '}
        va{' '}
        <Link
          href="/blog/telegram-premium-uzcard-humo-bilan-sotib-olish"
          className="text-[var(--primary)] hover:underline"
        >
          UzCard/Humo bilan Premium
        </Link>
        .
      </p>

      <h2 id="qabul">Qabul qiluvchi nima ko&apos;radi?</h2>
      <p>Telegram qabul qiluvchiga 2 xil bildirishnoma yuboradi:</p>
      <ol>
        <li>
          <strong>Sistem akkauntdan xabar</strong> — &quot;Sizga 3/6/12 oylik Telegram
          Premium hadya qilindi&quot; matnli rasmiy bildirishnoma. Bu Telegram&apos;ning
          o&apos;z xizmat akkauntidan keladi.
        </li>
        <li>
          <strong>Premium darhol faollashadi</strong> — profilda yulduzcha belgisi paydo
          bo&apos;ladi, premium funksiyalar (4 GB fayl, premium emoji, reklamasiz va h.k.)
          ochiladi.
        </li>
      </ol>
      <p>
        Qabul qiluvchi xohlasa, hadyani <strong>rad eta olmaydi</strong> — Telegram
        Premium gift bir martalik, qaytarib bo&apos;lmaydigan transaksiya. Lekin qabul
        qiluvchi xohlamasa shunchaki Premium funksiyalardan foydalanmasligi mumkin —
        ularga to&apos;lov olmaydi va muddat tugagach avtomatik bekor bo&apos;ladi.
      </p>

      <h2 id="anonim">Anonim hadya yuborib bo&apos;ladimi?</h2>
      <p>
        Ha, <strong>anonim hadya</strong> mumkin: botda hadya yuborayotganingizda
        jo&apos;natuvchi sifatida o&apos;z username&apos;ingizni ko&apos;rsatmaslikni tanlay
        olasiz. Telegram bildirishnomasida &quot;Sizga Premium hadya qilindi&quot; deb
        yoziladi, lekin kim tomonidan ekani ko&apos;rsatilmaydi. Sovg&apos;ani sirpriz
        qilmoqchi bo&apos;lsangiz — bu juda foydali.
      </p>
      <p>
        Eslatma: <strong>to&apos;lov chekida</strong> sizning ismingiz va karta
        oxirgi 4 raqami saqlanadi (Click/Payme tomonidan, qonun talabi bo&apos;yicha).
        Qabul qiluvchiga bu yetib bormaydi.
      </p>

      <h2 id="vaziyatlar">Ko&apos;p uchraydigan vaziyatlar</h2>
      <ul>
        <li>
          <strong>Tug&apos;ilgan kun sovg&apos;asi</strong> — eng mashhur paket 12 oylik
          (yil davomida eslatib turadi). Username&apos;ni do&apos;stning profilidan
          oldindan nusxa oling.
        </li>
        <li>
          <strong>Yangi yil / 8-mart / 14-fevral</strong> — odatda 3 oylik paket
          tanlanadi (arzimas lekin yoqimli).
        </li>
        <li>
          <strong>O&apos;z ikkinchi akkauntingizga</strong> — work va personal ajratayotganlar
          uchun. Ikkala akkauntda ham Premium ishlaydi (bir nechta qurilmada
          chegaralanmagan).
        </li>
        <li>
          <strong>Hamkasb yoki mijozga minnatdorlik</strong> — 6 oylik paket professional
          munosabatda standart.
        </li>
      </ul>

      <InlineBotCTA
        lang="uz"
        text="Sovg'ani tayyorlang — 3 oylik 168 000 so'mdan boshlanadi."
      />

      <h2 id="muhim">Muhim eslatmalar</h2>
      <ul>
        <li>
          <strong>Username&apos;ni 2 marta tekshiring</strong> — Premium gift bir martalik,
          noto&apos;g&apos;ri @username&apos;ga ketsa, Telegram ham, vositachi ham qaytara
          olmaydi.
        </li>
        <li>
          <strong>To&apos;lov muvaffaqiyatsiz bo&apos;lsa pul yechilmaydi</strong> — bankda
          &quot;hold&quot; ko&apos;rinishi mumkin, 1-3 ish kuni ichida qaytariladi.
        </li>
        <li>
          <strong>Qabul qiluvchining akkaunti ochiq bo&apos;lishi kerak</strong> — o&apos;chirilgan
          yoki bloklangan @username&apos;ga hadya yuborib bo&apos;lmaydi (bot oldindan
          tekshirib xato qaytaradi).
        </li>
        <li>
          <strong>Bayram kunlari to&apos;lov navbati bo&apos;lishi mumkin</strong> — odatdagi
          2–5 daqiqa o&apos;rniga 5–15 daqiqa kutish; 24/7 dispetcherlik yo&apos;q deb
          ko&apos;rsatadigan xizmatlarga ishonmang (
          <Link
            href="/blog/arzon-stars-qayerdan-olinadi-3-belgi"
            className="text-[var(--primary)] hover:underline"
          >
            aldanmaslik belgilari
          </Link>
          ).
        </li>
      </ul>

      <Sources lang="uz" />
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="hadya-nima">Telegram Premium в подарок — что это и кому подходит?</h2>
      <p>
        Telegram Premium <strong>в подарок</strong> (gift) — это Premium-подписка, которую
        вы оплачиваете заранее на чужой аккаунт. Получатель пользуется Premium-функциями
        в течение оплаченного периода — <strong>3, 6 или 12 месяцев</strong>: Telegram без
        рекламы, загрузка файлов до 4 ГБ, премиум-эмодзи, больше закреплённых чатов и т. д.
        По окончании срока подарок автоматически не продлевается — получатель сам решает,
        продолжать ли подписку.
      </p>
      <p>
        <strong>Кому</strong> обычно дарят Premium:
      </p>
      <ul>
        <li>Близкому другу или родственнику на день рождения</li>
        <li>На Новый год, 8 марта, 14 февраля, Навруз</li>
        <li>Коллеге к празднику</li>
        <li>Своему второму аккаунту (work/personal)</li>
        <li>Контент-мейкеру (блогеру, владельцу канала) в знак благодарности</li>
      </ul>

      <InlineBotCTA
        lang="ru"
        text="Хотите подарить? В боте введите @username и отправьте подарок за 2 минуты."
      />

      <h2 id="rasmiy-yol">Официальный путь — &quot;Gift Premium&quot; внутри Telegram</h2>
      <p>В самом Telegram есть встроенный механизм подарка. Шаги:</p>
      <ol>
        <li>Откройте профиль получателя</li>
        <li>Нажмите меню <strong>⋮ / ⋯</strong> в правом верхнем углу</li>
        <li>Выберите <strong>Send a Gift</strong> или <strong>Gift Premium</strong></li>
        <li>Выберите пакет 3, 6 или 12 месяцев и оплатите</li>
      </ol>
      <p>
        Путь надёжный, но <strong>для пользователя в Узбекистане 2 проблемы</strong>:
      </p>
      <ul>
        <li>
          <strong>UzCard/Humo не принимаются</strong> — только международные Visa/Mastercard,
          баланс App Store или Google Play. Visa-карты узбекских банков тоже часто не
          проходят BIN-фильтр (
          <Link
            href="/ru/blog/telegram-premium-tolay-olmayapman-yechim"
            className="text-[var(--primary)] hover:underline"
          >
            причины и решение
          </Link>
          ).
        </li>
        <li>
          <strong>Сам отправитель должен быть Premium</strong> — по FAQ Telegram, чтобы
          отправить подарок в in-app, у вас самих должна быть Premium-подписка. Иначе
          кнопка неактивна.
        </li>
      </ul>

      <h2 id="fragment">Fragment.com — требует TON и KYC</h2>
      <p>
        Официальный маркетплейс Telegram — Fragment.com — поддерживает подарок:{' '}
        <a
          href="https://fragment.com/premium/gift"
          target="_blank"
          rel="noopener"
          className="text-[var(--primary)] hover:underline"
        >
          fragment.com/premium/gift
        </a>
        . Здесь Premium стоит примерно $13.99 / $19.99 / $28.99 (за 3/6/12 месяцев). Но:
      </p>
      <ul>
        <li>
          <strong>Оплата в TON-крипте</strong> (или редко международной Visa) — узбекская
          карта напрямую не работает.
        </li>
        <li>
          <strong>Обязательный KYC</strong> с ноября 2024: паспорт и селфи. В первый раз —
          15–30 минут.
        </li>
        <li>
          Курс TON колеблется — итоговая сумма в сумах тоже меняется.
        </li>
      </ul>

      <h2 id="uzgets-yol">Подарок через @uzgetsbot — пошагово</h2>
      <p>
        Для пользователя в Узбекистане самый простой путь с минимальным сопротивлением —{' '}
        <strong>@uzgetsbot</strong>. Режим подарка почти не отличается от обычной покупки
        Premium, с одной разницей: в поле <strong>@username</strong> вы вводите{' '}
        <strong>username получателя</strong>, а не свой.
      </p>
      <StepCard
        num={1}
        title="Войти в бот и нажать START"
        body={
          <>
            В Telegram найдите <strong>@uzgetsbot</strong> и нажмите START. В меню
            выберите раздел <strong>Premium</strong>. Отдельной кнопки &quot;подарок&quot;
            не нужно — стандартный поток Premium поддерживает отправку на любой
            @username.
          </>
        }
      />
      <StepCard
        num={2}
        title="Ввести @username получателя"
        body={
          <>
            В Telegram скопируйте @username из профиля получателя (например{' '}
            <code>@nodira</code>) и вставьте в поле ввода в боте.{' '}
            <strong>Внимание:</strong> одна ошибка в букве — Premium уйдёт другому
            человеку, отменить нельзя. Безопаснее копировать через буфер обмена.
          </>
        }
      />
      <StepCard
        num={3}
        title="Выбрать срок (3 / 6 / 12 месяцев)"
        body={
          <>
            Бот покажет 3 пакета: <strong>3 месяца — 168 000 сум</strong>,{' '}
            <strong>6 месяцев — 228 000 сум</strong>,{' '}
            <strong>12 месяцев — 408 000 сум</strong>. Для праздничного подарка обычно
            хватает 3 месяцев; для подарка близкому — 12 месяцев самый экономный
            на месяц.
          </>
        }
      />
      <StepCard
        num={4}
        title="Оплатить UzCard / Humo / Click / Payme"
        body={
          <>
            Бот переведёт на страницу оплаты: на выбор <strong>UzCard, Humo, Click,
            Payme</strong>. Платёж идёт через узбекских провайдеров (с привычным
            OTP-SMS-подтверждением карты) — KYC, TON или международная карта не нужны.
          </>
        }
      />
      <StepCard
        num={5}
        title="2–5 минут и подарок у получателя"
        body={
          <>
            После подтверждения платежа бот отправляет Premium-подарок через официальный
            gift-API Telegram. Получатель видит в своём Telegram{' '}
            <strong>официальное уведомление &quot;You received a Premium gift&quot;</strong>{' '}
            (отправителем будет либо @uzgetsbot, либо ваш username — на выбор). Premium
            активируется мгновенно.
          </>
        }
      />

      <InlineBotCTA
        lang="ru"
        text="3 шага, 3–5 минут. Подарок уходит сразу."
      />

      <h2 id="rasmiy-yetkazish">Кто фактически отправляет подарок?</h2>
      <p>
        Это самый частый вопрос и важнейшая точка доверия.{' '}
        <strong>Premium зачисляется на аккаунт получателя напрямую от Telegram.</strong>{' '}
        Бот @uzgetsbot — только платёжный мост и средство запуска официального механизма
        Premium gift в Telegram.
      </p>
      <p>Что технически происходит на практике:</p>
      <ul>
        <li>Бот принимает ваш платёж UzCard/Humo через Click/Payme</li>
        <li>
          Бот через <strong>официальный механизм Premium gift Telegram</strong> отправляет
          Premium на @username получателя
        </li>
        <li>
          Получатель получает уведомление от <strong>официального системного аккаунта
          Telegram</strong> — это не uzgets, а сам Telegram
        </li>
        <li>
          Premium-статус виден в аккаунте: звёздочка в профиле, возможность использовать
          премиум-эмодзи и другие признаки — идентично обычной подписке Telegram
        </li>
      </ul>
      <p>
        Что это значит: <strong>пароль Telegram, 2FA, личные сообщения боту не видны.</strong>{' '}
        Бот знает только 2 вещи — @username получателя и результат оплаты. Полное техническое
        объяснение —{' '}
        <Link
          href="/ru/blog/uzgets-ishonchli-mi-tekshirish-belgilari"
          className="text-[var(--primary)] hover:underline"
        >
          uzgets надёжен? — техническая проверка
        </Link>
        .
      </p>

      <h2 id="narxlar">Цены подарка и сравнение</h2>
      <p>
        Цена подарка такая же, как у обычного Premium — дополнительной комиссии за
        &quot;gift&quot; нет:
      </p>
      <PriceTable lang="ru" />
      <p>
        Корректное сравнение (какой путь реально работает для держателя узбекской карты):
      </p>
      <WaysComparisonTable lang="ru" />
      <p>
        Связанное:{' '}
        <Link
          href="/ru/blog/eng-arzon-telegram-premium-ozbekistonda"
          className="text-[var(--primary)] hover:underline"
        >
          самый дешёвый Premium в Узбекистане
        </Link>{' '}
        и{' '}
        <Link
          href="/ru/blog/telegram-premium-uzcard-humo-bilan-sotib-olish"
          className="text-[var(--primary)] hover:underline"
        >
          Premium через UzCard/Humo
        </Link>
        .
      </p>

      <h2 id="qabul">Что увидит получатель?</h2>
      <p>Telegram отправляет получателю 2 уведомления:</p>
      <ol>
        <li>
          <strong>Сообщение от системного аккаунта</strong> — официальное уведомление
          &quot;Вам подарили Telegram Premium на 3/6/12 месяцев&quot;. Приходит от
          собственного сервисного аккаунта Telegram.
        </li>
        <li>
          <strong>Premium активируется сразу</strong> — в профиле появляется звёздочка,
          открываются Premium-функции (4 ГБ файл, премиум-эмодзи, без рекламы и т. д.).
        </li>
      </ol>
      <p>
        Получатель <strong>не может отказаться</strong> от подарка — Premium gift это
        одноразовая, необратимая транзакция. Но он может просто не пользоваться Premium —
        с него ничего не списывается, по истечении срока всё автоматически отключается.
      </p>

      <h2 id="anonim">Можно ли отправить подарок анонимно?</h2>
      <p>
        Да, <strong>анонимный подарок</strong> возможен: при отправке через бот можно
        не указывать свой username в качестве отправителя. В уведомлении Telegram
        будет написано просто &quot;Вам подарили Premium&quot; без указания, от кого. Если
        вы хотите сделать сюрприз — это удобно.
      </p>
      <p>
        Заметка: <strong>в платёжной квитанции</strong> сохраняются ваше имя и последние 4
        цифры карты (Click/Payme, по требованию закона). До получателя эта информация не
        доходит.
      </p>

      <h2 id="vaziyatlar">Частые ситуации</h2>
      <ul>
        <li>
          <strong>День рождения</strong> — самый популярный пакет 12 месяцев (напоминание
          в течение всего года). Username скопируйте из профиля заранее.
        </li>
        <li>
          <strong>Новый год / 8 марта / 14 февраля</strong> — обычно берут 3 месяца
          (недорого, но приятно).
        </li>
        <li>
          <strong>Свой второй аккаунт</strong> — для тех, кто разделяет work и personal.
          Premium работает на обоих (количество устройств не ограничено).
        </li>
        <li>
          <strong>Коллега или клиент в знак благодарности</strong> — 6 месяцев — стандарт
          в профессиональных отношениях.
        </li>
      </ul>

      <InlineBotCTA
        lang="ru"
        text="Подготовьте подарок — от 168 000 сум за 3 месяца."
      />

      <h2 id="muhim">Важные замечания</h2>
      <ul>
        <li>
          <strong>Проверьте username 2 раза</strong> — Premium gift — одноразовая операция,
          при ошибке ни Telegram, ни посредник не смогут отменить.
        </li>
        <li>
          <strong>При неуспешной оплате деньги не списываются</strong> — в банке может
          появиться &quot;hold&quot;, возвращается в течение 1-3 рабочих дней.
        </li>
        <li>
          <strong>Аккаунт получателя должен быть активен</strong> — на удалённый или
          заблокированный @username подарок отправить нельзя (бот проверяет заранее).
        </li>
        <li>
          <strong>В праздничные дни возможна очередь оплат</strong> — вместо обычных 2–5
          минут ожидание 5–15 минут; не доверяйте сервисам, которые обещают &quot;24/7
          без задержек&quot; без указания режима работы (
          <Link
            href="/ru/blog/arzon-stars-qayerdan-olinadi-3-belgi"
            className="text-[var(--primary)] hover:underline"
          >
            признаки обмана
          </Link>
          ).
        </li>
      </ul>

      <Sources lang="ru" />
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
      title: "Telegram Premium hadya — qanday sovg'a qilinadi 2026 (to'liq qo'llanma)",
      description:
        "O'zbekistondan Telegram Premium hadyasini qanday yuborish: @username kiritib, UzCard/Humo bilan to'lab, 2–5 daqiqada rasmiy Telegram bildirishnomasi bilan yetkaziladi. Narxlar, qadamlar, taqqoslash.",
      metaTitle: "Telegram Premium hadya — qanday yuboriladi 2026 | Uzgets",
      metaDescription:
        "Telegram Premium hadyasini O'zbekistondan @username orqali yuboring — UzCard/Humo qabul qilinadi, Telegram rasmiy bildirishnomasi bilan 2–5 daqiqada faollashadi. 3 oy — 168 000 so'm.",
      ogDescription:
        "O'zbekistondan Telegram Premium hadyasini qanday yuborish — qadam-baqadam to'liq qo'llanma.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "Qabul qiluvchi Telegram Premium hadyasi kelganini qanday biladi?",
          answer:
            "Telegram qabul qiluvchining akkauntiga o'z rasmiy sistem akkauntidan bildirishnoma yuboradi: «Sizga 3/6/12 oylik Telegram Premium hadya qilindi». Shu zahotiyoq profilda yulduzcha belgisi paydo bo'ladi, Premium funksiyalar (4 GB fayl, premium emoji, reklamasiz va h.k.) avtomatik faollashadi. Hech qanday «qabul qilish» tasdig'i talab qilinmaydi — Premium darhol ishlay boshlaydi.",
        },
        {
          question: "Hadyani yubordim — bekor qilib bo'ladimi yoki qaytarib olishim mumkinmi?",
          answer:
            "Yo'q. Telegram qoidasiga ko'ra, Premium gift bir martalik va qaytarilmaydigan transaksiya. To'lov tasdiqlangach Premium darhol qabul qiluvchining akkauntiga biriktiriladi va ni Telegram, ni vositachi xizmat (uzgets yoki boshqasi) bekor qila olmaydi. Shuning uchun @username'ni 2 marta tekshirish va clipboarddan ko'chirib joylashtirish muhim.",
        },
        {
          question: "Jo'natuvchining o'zi Telegram Premium bo'lishi shartmi?",
          answer:
            "@uzgetsbot orqali — yo'q. Bot Telegram'ning rasmiy gift API'sini boshqa kanal orqali ishga tushiradi, sizning Premium statusingiz talab qilinmaydi. Telegram'ning o'z in-app hadya tugmasini ishlatish uchun esa siz Premium bo'lishingiz shart (Telegram FAQ qoidasi). Bu uzgets botning O'zbek foydalanuvchi uchun amaliy afzalliklaridan biri.",
        },
        {
          question: "Hadyani anonim yuborish mumkinmi?",
          answer:
            "Ha. Botda hadya yuborayotganda jo'natuvchi sifatida o'z username'ingizni ko'rsatmaslikni tanlashingiz mumkin. Bunday holda Telegram bildirishnomasida «Sizga Premium hadya qilindi» yoziladi, kim tomonidan ekani ko'rsatilmaydi. Bayram sirprizlari uchun qulay. Eslatma: to'lov chekida (Click/Payme tomonidan) sizning ismingiz va karta oxirgi 4 raqami qonun talabi bo'yicha saqlanadi, lekin qabul qiluvchiga bu ma'lumot yetib bormaydi.",
        },
        {
          question: "Premium hadyasi kim tomonidan yetkaziladi — uzgetsbot orqalimi?",
          answer:
            "Premium qabul qiluvchining akkauntiga to'g'ridan-to'g'ri Telegram tomonidan biriktiriladi — uzgets bot faqat to'lov ko'prigi va Telegram'ning rasmiy Premium gift mexanizmini ishga tushiruvchi vositadir. Qabul qiluvchi bildirishnomani Telegram'ning rasmiy sistem akkauntidan oladi (botdan emas). Premium statusi va funksiyalari to'g'ridan-to'g'ri Telegram tomonidan ochiladi — oddiy obunadan farqsiz.",
        },
        {
          question: "Hadya nechta vaqtda yetkaziladi?",
          answer:
            "To'lov tasdiqlangandan keyin 2–5 daqiqa ichida. Ish vaqtidan (10:00–22:00) tashqarida va bayram kunlarida 5–15 daqiqagacha cho'zilishi mumkin — bu Telegram tomonidagi gift API kechikishi yoki to'lov navbatlari sabab. Agar 30 daqiqadan ko'p kutsangiz, botda yordam tugmasi bor.",
        },
        {
          question: "@username noto'g'ri kiritsam nima bo'ladi?",
          answer:
            "Bot to'lovdan oldin @username Telegram'da mavjudligini tekshiradi — agar @username umuman yo'q yoki o'chirilgan bo'lsa, xato qaytaradi va to'lov olinmaydi. Lekin agar @username mavjud, faqat siz boshqa odamning username'ini noto'g'ri yozsangiz — Premium o'sha odamga ketadi va qaytarilmaydi. Shuning uchun MAJBURIY: qabul qiluvchining profilidan @username'ni clipboardga nusxa olib, botga joylashtiring.",
        },
        {
          question: "Hadya muddati tugagach nima bo'ladi?",
          answer:
            "Muddat (3/6/12 oy) tugagach Premium avtomatik bekor bo'ladi — qabul qiluvchining kartasidan hech narsa yechilmaydi (Telegram avtomatik to'lov ulamagan). Qabul qiluvchi xohlasa o'zi yana sotib oladi yoki @uzgetsbot orqali yangi paket oladi. Akkaunt o'z ma'lumotlarini saqlab qoladi (premium funksiyalar bilan yaratilgan kontent (premium emoji bilan yozilgan xabarlar va h.k.) joyida qoladi, faqat yangilarini yarata olmaydi).",
        },
      ],
      finalCtaHeading: "Hadyani hozir yuboring",
      finalCtaBody:
        "Botga kiring, qabul qiluvchining @username'ini joylashtiring va UzCard/Humo bilan to'lang. 2–5 daqiqada Telegram rasmiy bildirishnomasi qabul qiluvchining akkauntiga keladi.",
    },
    ru: {
      title:
        'Подарок Telegram Premium — как отправить из Узбекистана 2026 (полный гид)',
      description:
        'Как подарить Telegram Premium из Узбекистана: ввести @username, оплатить UzCard/Humo, за 2–5 минут официальное уведомление Telegram у получателя. Цены, шаги, сравнение.',
      metaTitle: 'Подарок Telegram Premium — как отправить 2026 | Uzgets',
      metaDescription:
        'Подарите Telegram Premium из Узбекистана через @username — UzCard/Humo принимаются, активация за 2–5 минут с официальным уведомлением Telegram. 3 месяца — 168 000 сум.',
      ogDescription:
        'Как отправить Telegram Premium в подарок из Узбекистана — пошаговая полная инструкция.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Как получатель узнаёт, что ему прислали Telegram Premium в подарок?',
          answer:
            'Telegram отправляет на аккаунт получателя уведомление от своего официального системного аккаунта: «Вам подарили Telegram Premium на 3/6/12 месяцев». Сразу же в профиле появляется звёздочка, Premium-функции (4 ГБ файл, премиум-эмодзи, без рекламы и т. д.) активируются автоматически. Никакого подтверждения «принять подарок» не требуется — Premium работает мгновенно.',
        },
        {
          question: 'Я отправил подарок — можно ли отменить или вернуть?',
          answer:
            'Нет. По правилам Telegram, Premium gift — одноразовая, невозвратная транзакция. После подтверждения платежа Premium сразу зачисляется на аккаунт получателя, и ни Telegram, ни сервис-посредник (uzgets или другой) не могут отменить. Поэтому критически важно проверить @username дважды и копировать его из буфера обмена.',
        },
        {
          question: 'Должен ли сам отправитель быть Telegram Premium?',
          answer:
            'Через @uzgetsbot — нет. Бот запускает официальный Premium gift API Telegram по альтернативному каналу, ваша Premium-подписка не требуется. Для нативной кнопки подарка внутри Telegram (in-app) вы должны быть Premium (правило Telegram FAQ). Это одно из практических преимуществ uzgets-бота для узбекского пользователя.',
        },
        {
          question: 'Можно ли отправить подарок анонимно?',
          answer:
            'Да. При отправке через бот можно не указывать свой username в качестве отправителя. Тогда в уведомлении Telegram будет «Вам подарили Premium» без указания, от кого. Удобно для праздничных сюрпризов. Заметка: в платёжной квитанции (через Click/Payme) ваше имя и последние 4 цифры карты сохраняются по требованию закона, но до получателя эта информация не доходит.',
        },
        {
          question: 'Кто фактически отправляет Premium-подарок — через бота или нет?',
          answer:
            'Premium зачисляется на аккаунт получателя напрямую от Telegram — бот uzgets лишь платёжный мост и средство запуска официального Premium gift-механизма Telegram. Уведомление получатель видит от официального системного аккаунта Telegram (не от бота). Сам Premium-статус и функции открываются напрямую через Telegram — ничем не отличается от обычной подписки.',
        },
        {
          question: 'За сколько времени доставляется подарок?',
          answer:
            'В течение 2–5 минут после подтверждения платежа. Вне рабочих часов (10:00–22:00) и в праздничные дни возможно до 5–15 минут — это связано с задержками gift API Telegram или очередью платежей. Если ждёте больше 30 минут — в боте есть кнопка поддержки.',
        },
        {
          question: 'Что будет, если я неправильно введу @username?',
          answer:
            'Бот перед оплатой проверяет, существует ли @username в Telegram — если username вовсе нет или он удалён, бот вернёт ошибку и платёж не возьмётся. Но если username существует и вы просто ошиблись в букве (попали на другого человека) — Premium уйдёт ему и его не вернут. Поэтому ОБЯЗАТЕЛЬНО: скопируйте @username из профиля получателя через буфер обмена и вставьте в бот.',
        },
        {
          question: 'Что произойдёт, когда срок подарка истечёт?',
          answer:
            'По истечении срока (3/6/12 месяцев) Premium автоматически отключится — с карты получателя ничего не спишется (Telegram автоплатёж не подключал). Получатель может сам купить новую подписку или взять следующий пакет через @uzgetsbot. Данные аккаунта сохраняются (контент, созданный с премиум-функциями (сообщения с премиум-эмодзи и т. п.) останется на месте, просто новые создавать не получится).',
        },
      ],
      finalCtaHeading: 'Отправьте подарок сейчас',
      finalCtaBody:
        'Зайдите в бот, вставьте @username получателя и оплатите UzCard/Humo. За 2–5 минут официальное уведомление Telegram придёт на аккаунт получателя.',
    },
  },
}
