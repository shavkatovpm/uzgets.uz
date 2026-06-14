import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, STARS_BASE } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-bilan-sovga-yuborish'
const TODAY = '2026-06-13'

// Common gift budgets shown as Stars → so'm at the uzgets rate (~220/star).
// Minimum uzgets purchase is 50 ⭐ — smaller gifts still need a 50 ⭐ pack.
const GIFT_BUDGETS = [50, 100, 250, 500]

function GiftCostTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Stars zaxirasi' : 'Запас Stars'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Uzgets narxi' : 'Цена в Uzgets'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Nimaga yetadi' : 'На что хватит'}</th>
          </tr>
        </thead>
        <tbody>
          {GIFT_BUDGETS.map((amount) => {
            const pack = STARS_PACKS.find((p) => p.amount === amount)
            if (!pack) return null
            const note =
              lang === 'uz'
                ? {
                    50: '1 ta oddiy sovgʼa (15–50 ⭐)',
                    100: '1–2 ta sovgʼa yoki bittasi + qoldiq',
                    250: 'bir nechta oddiy sovgʼa yoki 1 ta noyob',
                    500: 'noyob/kolleksion sovgʼa darajasi',
                  }[amount]
                : {
                    50: '1 обычный подарок (15–50 ⭐)',
                    100: '1–2 подарка или один + остаток',
                    250: 'несколько обычных или 1 редкий',
                    500: 'уровень редкого/коллекционного подарка',
                  }[amount]
            return (
              <tr key={pack.slug} className="border-t border-[var(--border)]">
                <td className="px-4 py-2 font-medium">{formatNumber(pack.amount)} ⭐</td>
                <td className="px-4 py-2">{formatUzs(pack.priceUzs)}</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">{note}</td>
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
          <a href="https://telegram.org/blog/gifts-verification-platform" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/gifts-verification-platform
          </a>{' '}
          — {lang === 'uz' ? 'Telegram Gifts rasmiy eʼlon' : 'официальный анонс Telegram Gifts'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/gifts" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/gifts
          </a>{' '}
          — {lang === 'uz' ? 'sovgʼa mexanizmi texnik hujjati' : 'техническая документация механизма подарков'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/stars
          </a>{' '}
          — {lang === 'uz' ? 'Telegram Stars hujjati' : 'документация Telegram Stars'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? 'Sovgʼa narxlari Telegram tomonidan vaqti-vaqti bilan oʻzgartiriladi; Stars ekvivalenti taxminiy (uzgets tarifi ~220 soʻm/⭐).'
          : 'Цены подарков периодически меняет Telegram; эквивалент в Stars приблизительный (тариф uzgets ~220 сум/⭐).'}
      </p>
    </div>
  )
}

function UzAnswerBox() {
  return (
    <p>
      Telegram&apos;da sovg&apos;a yuborish uchun qabul qiluvchining profilini oching →{' '}
      <strong>⋮ / ⋯ → Sovg&apos;a yuborish (Send a Gift)</strong> → sovg&apos;ani tanlang va xohlasangiz xabar
      qo&apos;shing. To&apos;lov balansingizdagi <strong>Telegram Stars</strong> bilan amalga oshiriladi — oddiy
      sovg&apos;alar taxminan 15–50 ⭐, noyoblari 500–1000 ⭐ va undan yuqori. Sovg&apos;a yuborish uchun
      <strong> Premium shart emas</strong>, anonim yuborish ham mumkin. Lekin avval balansda Stars bo&apos;lishi
      kerak — O&apos;zbekistondan Telegram ichidagi to&apos;ldirish xorijiy karta talab qiladi, shuning uchun Stars&apos;ni{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      orqali UzCard/Humo bilan oling — 50 ⭐ {formatUzs(STARS_BASE.priceUzs)}.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Чтобы отправить подарок в Telegram, откройте профиль получателя →{' '}
      <strong>⋮ / ⋯ → Отправить подарок (Send a Gift)</strong> → выберите подарок и при желании добавьте сообщение.
      Оплата идёт <strong>Telegram Stars</strong> с вашего баланса — обычные подарки примерно 15–50 ⭐, редкие
      500–1000 ⭐ и выше. Для отправки подарка <strong>Premium не нужен</strong>, можно отправить и анонимно. Но
      сначала на балансе должны быть Stars — пополнение внутри Telegram из Узбекистана требует зарубежную карту,
      поэтому купите Stars через{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      по UzCard/Humo — 50 ⭐ {formatUzs(STARS_BASE.priceUzs)}.
    </p>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="qanday-yuboriladi">Telegram Stars bilan sovg&apos;a qanday yuboriladi?</h2>
      <p>
        Telegram&apos;ning rasmiy <strong>Gifts</strong> (sovg&apos;alar) funksiyasi orqali do&apos;stingizga animatsion
        sovg&apos;a yuborish mumkin — bunga balansdagi <strong>Telegram Stars</strong> sarflanadi. Qadamlar:
      </p>
      <ol>
        <li>Qabul qiluvchining <strong>profilini</strong> oching (chat ustidagi ism yoki @username).</li>
        <li>O&apos;ng yuqoridagi <strong>⋮ / ⋯</strong> menyusini bosing.</li>
        <li><strong>Sovg&apos;a yuborish (Send a Gift)</strong> bandini tanlang.</li>
        <li>Ro&apos;yxatdan sovg&apos;ani tanlang — har birining narxi Stars&apos;da ko&apos;rsatilgan.</li>
        <li>Xohlasangiz <strong>xabar yoki emoji</strong> qo&apos;shing va anonim yuborishni belgilang.</li>
        <li>Tasdiqlang — narx balansingizdan Stars sifatida yechiladi, sovg&apos;a darhol yetkaziladi.</li>
      </ol>
      <p>
        Qabul qiluvchi sovg&apos;ani Telegram&apos;ning rasmiy bildirishnomasi bilan oladi va uni profilidagi yangi{' '}
        <strong>&quot;Gifts&quot;</strong> bo&apos;limida ko&apos;rsatishi mumkin.
      </p>

      <InlineBotCTA lang="uz" text="Sovg'a uchun Stars kerakmi? Botda 50 ⭐ atigi 11 000 so'mdan — UzCard/Humo bilan." />

      <h2 id="qancha-stars">Sovg&apos;a yuborish uchun qancha Stars kerak?</h2>
      <p>
        Sovg&apos;a narxi turiga qarab farqlanadi: oddiy sovg&apos;alar taxminan <strong>15–50 ⭐</strong>, o&apos;rta
        darajadagilari 100–200 ⭐, noyob va kolleksion sovg&apos;alar esa <strong>500–1000 ⭐</strong> va undan yuqori.
        Sovg&apos;ani yuborish uchun avval balansda yetarli Stars bo&apos;lishi kerak. Quyida Uzgets&apos;dagi Stars
        zaxirasi va u nimaga yetishi:
      </p>
      <GiftCostTable lang="uz" />
      <p>
        Eng kichik buyurtma — <strong>{STARS_BASE.amount} ⭐ ({formatUzs(STARS_BASE.priceUzs)})</strong>. Agar sovg&apos;a
        15 ⭐ bo&apos;lsa ham, eng kam 50 ⭐ paket olinadi — qoldiq balansda saqlanadi va keyingi sovg&apos;a yoki
        reaksiyalar uchun ishlatiladi. To&apos;liq narx jadvali{' '}
        <Link href="/stars" className="font-semibold text-[var(--primary)] hover:underline">/stars</Link>{' '}
        bo&apos;limida.
      </p>

      <h2 id="stars-qayerdan">Sovg&apos;a yuborishdan oldin Stars&apos;ni qayerdan olaman?</h2>
      <p>
        Mana shu yerda O&apos;zbekiston foydalanuvchilari uchun asosiy to&apos;siq bor: sovg&apos;a yuborish uchun
        balansda Stars bo&apos;lishi shart, lekin Telegram ichidagi to&apos;ldirish (Apple/Google orqali) yoki Fragment{' '}
        <strong>O&apos;zbek kartalarini (UzCard/Humo) qabul qilmaydi</strong> — xorijiy karta yoki TON crypto talab
        etiladi.
      </p>
      <p>
        Yechim — Stars&apos;ni mahalliy karta bilan{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
        orqali olish. Ikki variant bor:
      </p>
      <ul>
        <li>
          <strong>O&apos;z balansingizga:</strong> botda @username&apos;ingizni ko&apos;rsatib Stars sotib oling — keyin
          sovg&apos;ani o&apos;zingiz Telegram&apos;dagi &quot;Send a Gift&quot; orqali yuborasiz.
        </li>
        <li>
          <strong>To&apos;g&apos;ridan-to&apos;g&apos;ri do&apos;stingizga:</strong> botda qabul qiluvchining @username&apos;ini
          kiriting — Stars o&apos;sha akkaunt balansiga biriktiriladi (bu ham sovg&apos;aning bir ko&apos;rinishi).
        </li>
      </ul>
      <p>
        Stars sotib olish bo&apos;yicha to&apos;liq qadam-baqadam qo&apos;llanma:{' '}
        <Link href="/blog/telegram-stars-ozbekistondan-sotib-olish" className="text-[var(--primary)] hover:underline">
          Telegram Stars O&apos;zbekistondan qanday sotib olinadi
        </Link>
        .
      </p>

      <InlineBotCTA lang="uz" text="Do'stingizning @username'iga to'g'ridan-to'g'ri Stars sovg'a qiling — botda bir necha qadamda." />

      <h2 id="anonim">Anonim sovg&apos;a yuborsa bo&apos;ladimi?</h2>
      <p>
        Ha. Sovg&apos;a yuborayotganda <strong>ismni yashirish</strong> opsiyasini tanlashingiz mumkin. Bunda qabul
        qiluvchi sovg&apos;ani kimdan kelganini ko&apos;radi, lekin sovg&apos;a uning profilida ochiq ko&apos;rsatilsa,{' '}
        <strong>boshqalar yuboruvchi ismini ko&apos;rmaydi</strong>. Bu bayram va syurprizlar uchun qulay.
      </p>

      <h2 id="qabul-qiluvchi">Sovg&apos;ani olgan odam nima qila oladi?</h2>
      <p>Qabul qiluvchining ikki tanlovi bor:</p>
      <ul>
        <li>
          <strong>Profilda ko&apos;rsatish:</strong> sovg&apos;a profildagi &quot;Gifts&quot; bo&apos;limida animatsion
          ko&apos;rinishda turadi.
        </li>
        <li>
          <strong>Stars&apos;ga aylantirish:</strong> sovg&apos;ani &quot;buzib&quot;, uning o&apos;rniga bir qism Stars
          oladi (to&apos;liq narxidan kam) — bu Stars&apos;ni boshqa sovg&apos;a yoki xizmatlarga sarflash mumkin.
          Aylantirish faqat belgilangan muddat ichida amal qiladi.
        </li>
      </ul>
      <p>
        Premium&apos;ni sovg&apos;a qilmoqchimisiz? U boshqa mexanizm —{' '}
        <Link href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">
          Telegram Premium hadya yo&apos;riqnomasi
        </Link>
        .
      </p>

      <h2 id="premium-kerakmi">Sovg&apos;a yuborish uchun Premium kerakmi?</h2>
      <p>
        <strong>Yo&apos;q.</strong> Stars sovg&apos;asini yuborish uchun yuboruvchida Premium bo&apos;lishi shart emas —
        balansda Stars bo&apos;lsa kifoya. Faqat ayrim maxsus (premium-talab qiluvchi) sovg&apos;alar qabul qiluvchidan
        Premium talab qilishi mumkin, lekin oddiy sovg&apos;alar uchun bu kerak emas. Stars haqida umumiy ma&apos;lumot:{' '}
        <Link href="/blog/telegram-stars-nima" className="text-[var(--primary)] hover:underline">
          Telegram Stars nima va nima uchun kerak
        </Link>
        .
      </p>

      <InlineBotCTA lang="uz" text="Stars zaxirangizni to'ldiring va istalgan do'stingizga sovg'a yuboring." />

      <Sources lang="uz" />

      <h2 id="muhim">Muhim eslatmalar</h2>
      <ul>
        <li>Qabul qiluvchining <strong>@username</strong>i bo&apos;lishi kerak — sovg&apos;a yetkazish uchun.</li>
        <li>Sovg&apos;a yuborilgach <strong>qaytarib bo&apos;lmaydi</strong> — @username&apos;ni diqqat bilan tekshiring.</li>
        <li>Stars&apos;ga aylantirilganda <strong>to&apos;liq narx qaytmaydi</strong> — bu Telegram qoidasi.</li>
        <li>Stars balansda <strong>muddatsiz</strong> saqlanadi — oldindan olib qo&apos;ysangiz ham yo&apos;qolmaydi.</li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="qanday-yuboriladi">Как отправить подарок с помощью Telegram Stars?</h2>
      <p>
        Через официальную функцию <strong>Gifts</strong> (подарки) Telegram можно отправить другу анимированный подарок —
        за него списываются <strong>Telegram Stars</strong> с баланса. Шаги:
      </p>
      <ol>
        <li>Откройте <strong>профиль</strong> получателя (имя или @username над чатом).</li>
        <li>Нажмите меню <strong>⋮ / ⋯</strong> в правом верхнем углу.</li>
        <li>Выберите пункт <strong>Отправить подарок (Send a Gift)</strong>.</li>
        <li>Выберите подарок из списка — цена каждого указана в Stars.</li>
        <li>При желании добавьте <strong>сообщение или эмодзи</strong> и отметьте анонимную отправку.</li>
        <li>Подтвердите — стоимость спишется с баланса в Stars, подарок доставится сразу.</li>
      </ol>
      <p>
        Получатель получает подарок с официальным уведомлением Telegram и может показать его в новой вкладке{' '}
        <strong>&quot;Gifts&quot;</strong> своего профиля.
      </p>

      <InlineBotCTA lang="ru" text="Нужны Stars для подарка? В боте 50 ⭐ всего от 11 000 сум — по UzCard/Humo." />

      <h2 id="qancha-stars">Сколько Stars нужно для подарка?</h2>
      <p>
        Цена подарка зависит от типа: обычные подарки примерно <strong>15–50 ⭐</strong>, средние 100–200 ⭐, а редкие и
        коллекционные — <strong>500–1000 ⭐</strong> и выше. Чтобы отправить подарок, на балансе сначала должно быть
        достаточно Stars. Ниже — запас Stars в Uzgets и на что его хватит:
      </p>
      <GiftCostTable lang="ru" />
      <p>
        Минимальный заказ — <strong>{STARS_BASE.amount} ⭐ ({formatUzs(STARS_BASE.priceUzs)})</strong>. Даже если подарок
        стоит 15 ⭐, покупается минимум пакет 50 ⭐ — остаток хранится на балансе и идёт на следующий подарок или
        реакции. Полная таблица цен — в разделе{' '}
        <Link href="/ru/stars" className="font-semibold text-[var(--primary)] hover:underline">/ru/stars</Link>.
      </p>

      <h2 id="stars-qayerdan">Где взять Stars перед отправкой подарка?</h2>
      <p>
        Именно здесь главный барьер для пользователей из Узбекистана: для подарка на балансе нужны Stars, но пополнение
        внутри Telegram (через Apple/Google) или Fragment <strong>не принимает узбекские карты (UzCard/Humo)</strong> —
        нужна зарубежная карта или TON-крипта.
      </p>
      <p>
        Решение — купить Stars локальной картой через{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>.
        Есть два варианта:
      </p>
      <ul>
        <li>
          <strong>На свой баланс:</strong> укажите в боте свой @username и купите Stars — затем сами отправите подарок
          через &quot;Send a Gift&quot; в Telegram.
        </li>
        <li>
          <strong>Напрямую другу:</strong> укажите в боте @username получателя — Stars зачислятся на баланс этого
          аккаунта (это тоже форма подарка).
        </li>
      </ul>
      <p>
        Полное пошаговое руководство по покупке Stars:{' '}
        <Link href="/ru/blog/telegram-stars-ozbekistondan-sotib-olish" className="text-[var(--primary)] hover:underline">
          Как купить Telegram Stars из Узбекистана
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="Подарите Stars напрямую на @username друга — в боте за несколько шагов." />

      <h2 id="anonim">Можно ли отправить подарок анонимно?</h2>
      <p>
        Да. При отправке подарка можно выбрать опцию <strong>скрыть имя</strong>. Получатель всё равно увидит, кто
        отправил, но если подарок отображается в его профиле, <strong>другие не увидят имя отправителя</strong>. Удобно
        для праздников и сюрпризов.
      </p>

      <h2 id="qabul-qiluvchi">Что может сделать получатель подарка?</h2>
      <p>У получателя два варианта:</p>
      <ul>
        <li>
          <strong>Показать в профиле:</strong> подарок отображается анимированным во вкладке &quot;Gifts&quot; профиля.
        </li>
        <li>
          <strong>Конвертировать в Stars:</strong> &quot;разобрать&quot; подарок и получить часть Stars взамен (меньше
          полной цены) — их можно потратить на другой подарок или услуги. Конвертация доступна только в течение
          установленного срока.
        </li>
      </ul>
      <p>
        Хотите подарить Premium? Это другой механизм —{' '}
        <Link href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">
          руководство по подарку Telegram Premium
        </Link>
        .
      </p>

      <h2 id="premium-kerakmi">Нужен ли Premium для отправки подарка?</h2>
      <p>
        <strong>Нет.</strong> Чтобы отправить подарок за Stars, Premium у отправителя не требуется — достаточно Stars на
        балансе. Лишь отдельные особые (premium-required) подарки могут требовать Premium у получателя, но для обычных
        подарков это не нужно. Общая информация о Stars:{' '}
        <Link href="/ru/blog/telegram-stars-nima" className="text-[var(--primary)] hover:underline">
          Что такое Telegram Stars и зачем они нужны
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="Пополните запас Stars и отправьте подарок любому другу." />

      <Sources lang="ru" />

      <h2 id="muhim">Важные замечания</h2>
      <ul>
        <li>У получателя должен быть <strong>@username</strong> — для доставки подарка.</li>
        <li>Отправленный подарок <strong>нельзя вернуть</strong> — внимательно проверяйте @username.</li>
        <li>При конвертации в Stars <strong>полная цена не возвращается</strong> — это правило Telegram.</li>
        <li>Stars хранятся на балансе <strong>бессрочно</strong> — купленные заранее не пропадут.</li>
      </ul>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'howto',
  locales: {
    uz: {
      title: "Telegram Stars bilan sovg'a qanday yuboriladi — qadam-baqadam",
      description:
        "Telegram'da Stars bilan sovg'a yuborish: profil → Send a Gift → tanlash. Qancha Stars kerak, anonim yuborish, qabul qiluvchi nima qila oladi va Stars'ni O'zbekistondan qanday olish.",
      metaTitle: "Telegram Stars bilan sovg'a qanday yuboriladi 2026",
      metaDescription:
        "Telegram Stars bilan sovg'a yuborish — qadam-baqadam: Send a Gift, narx, anonim opsiya. Stars'ni UzCard/Humo bilan @uzgetsbot orqali oling, 50 ⭐ 11 000 so'm.",
      ogDescription:
        "Telegram Stars bilan sovg'a yuborishning to'liq qo'llanmasi — qadamlar, narx jadvali va O'zbekistondan Stars olish.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "Telegram'da Stars bilan sovg'a qanday yuboriladi?",
          answer:
            "Qabul qiluvchining profilini oching → o'ng yuqoridagi ⋮ / ⋯ menyusi → 'Sovg'a yuborish (Send a Gift)' → sovg'ani tanlang, xohlasangiz xabar qo'shing → tasdiqlang. Narx balansingizdagi Telegram Stars'dan yechiladi va sovg'a darhol yetkaziladi.",
        },
        {
          question: "Sovg'a yuborish uchun qancha Stars kerak?",
          answer:
            "Oddiy sovg'alar taxminan 15–50 ⭐, o'rtachalari 100–200 ⭐, noyob va kolleksion sovg'alar 500–1000 ⭐ va undan yuqori. Uzgets'da 50 ⭐ — 11 000 so'm, 100 ⭐ — 22 000, 500 ⭐ — 110 000 so'm.",
        },
        {
          question: "Sovg'a yuborish uchun Telegram Premium kerakmi?",
          answer:
            "Yo'q. Stars sovg'asini yuborish uchun yuboruvchida Premium shart emas — balansda yetarli Stars bo'lsa kifoya. Faqat ba'zi maxsus sovg'alar qabul qiluvchidan Premium talab qilishi mumkin.",
        },
        {
          question: "O'zbekistondan sovg'a uchun Stars'ni qanday olaman?",
          answer:
            "Telegram ichidagi to'ldirish va Fragment UzCard/Humo'ni qabul qilmaydi (xorijiy karta yoki TON kerak). Mahalliy karta bilan Stars'ni @uzgetsbot orqali oling — o'z balansingizga yoki to'g'ridan-to'g'ri do'stingizning @username'iga.",
        },
        {
          question: "Sovg'ani anonim yuborsa bo'ladimi?",
          answer:
            "Ha. Yuborishda 'ismni yashirish' opsiyasini tanlang. Qabul qiluvchi kimdan kelganini ko'radi, lekin sovg'a profilda ochiq turganda boshqalar yuboruvchi ismini ko'rmaydi.",
        },
        {
          question: "Sovg'ani olgan odam uni Stars'ga aylantira oladimi?",
          answer:
            "Ha. Qabul qiluvchi sovg'ani profilida ko'rsatishi yoki uni 'buzib' o'rniga bir qism Stars olishi mumkin (to'liq narxidan kam). Aylantirish faqat belgilangan muddat ichida amal qiladi.",
        },
        {
          question: "Stars bilan sovg'a va Premium hadya bir xilmi?",
          answer:
            "Yo'q. Stars sovg'asi — animatsion gift yoki Stars balansi. Telegram Premium hadya esa alohida obuna sovg'asi va boshqa mexanizm orqali yuboriladi — buni 'Telegram Premium hadya' qo'llanmasida ko'ring.",
        },
      ],
      finalCtaHeading: "Sovg'a yuborishga tayyormisiz?",
      finalCtaBody:
        "Avval Stars zaxirasini to'ldiring — botga kiring, @username va miqdorni tanlab UzCard/Humo bilan to'lang. Keyin istalgan do'stingizga sovg'a yuboring.",
    },
    ru: {
      title: 'Как отправить подарок с помощью Telegram Stars — пошагово',
      description:
        'Отправка подарка за Telegram Stars: профиль → Send a Gift → выбор. Сколько нужно Stars, анонимная отправка, что может получатель и как купить Stars из Узбекистана.',
      metaTitle: 'Как отправить подарок с Telegram Stars 2026',
      metaDescription:
        'Отправка подарка за Telegram Stars — пошагово: Send a Gift, цена, анонимная опция. Купите Stars по UzCard/Humo через @uzgetsbot, 50 ⭐ за 11 000 сум.',
      ogDescription:
        'Полное руководство по отправке подарка за Telegram Stars — шаги, таблица цен и покупка Stars из Узбекистана.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Как отправить подарок за Stars в Telegram?',
          answer:
            "Откройте профиль получателя → меню ⋮ / ⋯ в правом верхнем углу → 'Отправить подарок (Send a Gift)' → выберите подарок, при желании добавьте сообщение → подтвердите. Стоимость спишется с баланса Telegram Stars, подарок доставится сразу.",
        },
        {
          question: 'Сколько Stars нужно для подарка?',
          answer:
            'Обычные подарки примерно 15–50 ⭐, средние 100–200 ⭐, редкие и коллекционные 500–1000 ⭐ и выше. В Uzgets 50 ⭐ — 11 000 сум, 100 ⭐ — 22 000, 500 ⭐ — 110 000 сум.',
        },
        {
          question: 'Нужен ли Telegram Premium для отправки подарка?',
          answer:
            'Нет. Для отправки подарка за Stars Premium у отправителя не требуется — достаточно Stars на балансе. Лишь некоторые особые подарки могут требовать Premium у получателя.',
        },
        {
          question: 'Как купить Stars для подарка из Узбекистана?',
          answer:
            'Пополнение внутри Telegram и Fragment не принимают UzCard/Humo (нужна зарубежная карта или TON). Купите Stars локальной картой через @uzgetsbot — на свой баланс или напрямую на @username друга.',
        },
        {
          question: 'Можно ли отправить подарок анонимно?',
          answer:
            'Да. При отправке выберите опцию «скрыть имя». Получатель увидит, кто отправил, но если подарок отображается в профиле, другие не увидят имя отправителя.',
        },
        {
          question: 'Может ли получатель конвертировать подарок в Stars?',
          answer:
            'Да. Получатель может показать подарок в профиле или «разобрать» его, получив взамен часть Stars (меньше полной цены). Конвертация доступна только в течение установленного срока.',
        },
        {
          question: 'Подарок за Stars и подарок Premium — это одно и то же?',
          answer:
            'Нет. Подарок за Stars — это анимированный gift или баланс Stars. Подарок Telegram Premium — отдельный подарок подписки, отправляется через другой механизм — см. руководство «Подарок Telegram Premium».',
        },
      ],
      finalCtaHeading: 'Готовы отправить подарок?',
      finalCtaBody:
        'Сначала пополните запас Stars — зайдите в бот, выберите @username и количество, оплатите UzCard/Humo. Затем отправьте подарок любому другу.',
    },
  },
}
