import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, STARS_BASE } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-eng-kichik-eng-katta-paket'
const TODAY = '2026-09-16'

const SMALLEST = STARS_PACKS[0]
const LARGEST = STARS_PACKS[STARS_PACKS.length - 1]
const PER_STAR = STARS_BASE.priceUzs / STARS_BASE.amount

function UzAnswerBox() {
  return (
    <p>
      {siteConfig.bot}da eng kichik paket — <strong>{formatNumber(SMALLEST.amount)} ⭐
      ({formatUzs(SMALLEST.priceUzs)})</strong>, eng katta paket esa{' '}
      <strong>{formatNumber(LARGEST.amount)} ⭐ ({formatUzs(LARGEST.priceUzs)})</strong>.
      Qaysi miqdorni tanlash maqsadga bog&apos;liq: bitta reaksiya yoki kichik
      &laquo;choy puli&raquo; uchun 50–150 ⭐ yetarli, sovg&apos;a yoki bitta yopiq
      kontentni ochish uchun 250–500 ⭐, muntazam foydalanish yoki obuna uchun
      1000–2500 ⭐, kanal/bot monetizatsiyasi yoki ko&apos;p marta ishlatish uchun
      5000–10 000 ⭐ tavsiya etiladi. Katta paket birlik narxini pasaytirmaydi — narx
      miqdorga aniq mutanosib.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      В {siteConfig.bot} самый маленький пакет —{' '}
      <strong>{formatNumber(SMALLEST.amount)} ⭐ ({formatUzs(SMALLEST.priceUzs)})</strong>,
      самый большой —{' '}
      <strong>{formatNumber(LARGEST.amount)} ⭐ ({formatUzs(LARGEST.priceUzs)})</strong>.
      Выбор зависит от цели: для одной реакции или небольших «чаевых» хватит 50–150 ⭐,
      для подарка или разблокировки одного платного контента — 250–500 ⭐, для
      регулярного использования или подписки — 1000–2500 ⭐, для монетизации канала/бота
      или частого использования — 5000–10 000 ⭐. Крупный пакет не снижает цену за
      единицу — цена строго пропорциональна количеству.
    </p>
  )
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{uz ? 'Manbalar va tekshiruv' : 'Источники и проверка'}</div>
      <ul className="space-y-2 text-[var(--text-muted)]">
        <li>
          <a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram — Stars: Pay for Digital Goods and More
          </a>{' '}
          — {uz ? "Stars'ning rasmiy foydalanish holatlari: raqamli mahsulot, bot va mini-app to'lovlari, sovg'alar" : "официальные сценарии использования Stars: цифровые товары, оплата в ботах и мини-приложениях, подарки"}.
        </li>
        <li>
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Premium FAQ
          </a>{' '}
          — {uz ? "Stars orqali sovg'a va Premium sotib olish imkoniyati bo'yicha ma'lumot" : 'сведения о возможности покупки подарков и Premium за Stars'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Narxlar joriy Uzgets konfiguratsiyasidan olingan va 2026-yil 16-sentabrda tekshirilgan. Aniq narxlar botda ko'rsatilgan qiymatga amal qiladi."
          : 'Цены взяты из текущей конфигурации Uzgets и проверены 16 сентября 2026 года. Актуальные цены — те, что показаны в боте.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <nav aria-label="Mundarija" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Mundarija</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#jadval" className="hover:text-[var(--primary)] hover:underline">Barcha paketlar: eng kichikdan eng kattagacha</a></li>
          <li><a href="#maqsad" className="hover:text-[var(--primary)] hover:underline">Maqsadga qarab qaysi miqdorni tanlash kerak</a></li>
          <li><a href="#kichik" className="hover:text-[var(--primary)] hover:underline">50 ⭐ kimga mos?</a></li>
          <li><a href="#katta" className="hover:text-[var(--primary)] hover:underline">10 000 ⭐ kimga mos?</a></li>
          <li><a href="#xato" className="hover:text-[var(--primary)] hover:underline">Ko&apos;p sotib olishda keng tarqalgan xato</a></li>
        </ol>
      </nav>

      <h2 id="jadval">Barcha paketlar: eng kichikdan eng kattagacha</h2>
      <p>
        {siteConfig.bot}da Stars <strong>{formatNumber(SMALLEST.amount)}</strong> dan{' '}
        <strong>{formatNumber(LARGEST.amount)}</strong>&apos;gacha miqdorda sotib
        olinadi. Narx miqdorga to&apos;g&apos;ridan-to&apos;g&apos;ri mutanosib —
        taxminan <strong>{PER_STAR.toFixed(0)} so&apos;m/Star</strong>:
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[420px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Miqdor</th><th className="px-4 py-3 text-left">Narx</th></tr></thead>
          <tbody>
            {STARS_PACKS.map((p) => (
              <tr key={p.amount} className="border-t border-[var(--border)]">
                <td className="px-4 py-3">{formatNumber(p.amount)} ⭐</td>
                <td className="px-4 py-3">{formatUzs(p.priceUzs)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        To&apos;liq narx jadvali va boshqa miqdorlar bo&apos;yicha hisob-kitob{' '}
        <Link href="/blog/telegram-stars-narxlari-jadval" className="text-[var(--primary)] hover:underline">
          Stars narxlari qo&apos;llanmasi
        </Link>da bor. Bu maqola esa — <strong>qaysi miqdorni tanlash</strong> savoliga javob beradi.
      </p>

      <h2 id="maqsad">Maqsadga qarab qaysi miqdorni tanlash kerak</h2>
      <p>
        Telegram Stars raqamli mahsulotlar, bot va mini-app to&apos;lovlari, kanal
        kontenti, reaksiyalar va sovg&apos;alar uchun ishlatiladi. Har bir maqsad uchun
        alohida katta paket sotib olish shart emas — quyidagi jadval tanlovni osonlashtiradi:
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Maqsad</th><th className="px-4 py-3 text-left">Tavsiya etilgan miqdor</th><th className="px-4 py-3 text-left">Sabab</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Bitta reaksiya yoki kichik &laquo;choy puli&raquo;</td><td className="px-4 py-3">50–150 ⭐</td><td className="px-4 py-3">Eng kam narxni sinab ko&apos;rish uchun yetarli, qoldiq keyingi safarga saqlanadi</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Bitta sovg&apos;a yoki yopiq kontentni ochish</td><td className="px-4 py-3">250–500 ⭐</td><td className="px-4 py-3">Aksariyat oddiy sovg&apos;a va bir martalik kontent shu oraliqqa to&apos;g&apos;ri keladi</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Muntazam foydalanish yoki kanal obunasi</td><td className="px-4 py-3">1000–2500 ⭐</td><td className="px-4 py-3">Bir necha oylik takroriy to&apos;lovni qamrab oladi, har safar qayta xarid qilish shart emas</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Kanal/bot monetizatsiyasi, ko&apos;p marta ishlatish</td><td className="px-4 py-3">5000–10 000 ⭐</td><td className="px-4 py-3">Bitta xaridda zaxira yaratadi, tez-tez to&apos;lov qilish tavakkalini kamaytiradi</td></tr>
          </tbody>
        </table>
      </div>
      <InlineBotCTA lang="uz" text="Maqsadingizga mos miqdorni botda tanlab, bir necha daqiqada faollashtiring." />

      <h2 id="kichik">Eng kichik paket ({formatNumber(SMALLEST.amount)} ⭐) kimga mos?</h2>
      <p>
        {formatNumber(SMALLEST.amount)} ⭐ ({formatUzs(SMALLEST.priceUzs)}) — Stars&apos;ni
        birinchi marta sinab ko&apos;rmoqchi bo&apos;lganlar, bitta post reaksiyasi yoki
        arzon mini-app funksiyasi uchun kifoya qiladigan minimal miqdor. Muntazam
        foydalanish rejalashtirilmagan bo&apos;lsa, katta miqdor sotib olishning hojati
        yo&apos;q — Stars muddati tugamaydi va istalgan vaqt sarflanishi mumkin.
      </p>

      <h2 id="katta">Eng katta paket ({formatNumber(LARGEST.amount)} ⭐) kimga mos?</h2>
      <p>
        {formatNumber(LARGEST.amount)} ⭐ ({formatUzs(LARGEST.priceUzs)}) — asosan kanal
        egalari, mini-app ishlab chiquvchilari yoki Stars&apos;ni muntazam, ko&apos;p
        marta sarflaydigan foydalanuvchilar uchun mo&apos;ljallangan. Bitta yirik xarid
        tez-tez kichik summalarda to&apos;lov qilish zaruratini kamaytiradi, lekin{' '}
        <strong>birlik narxini pasaytirmaydi</strong> — Uzgets&apos;da chegirma faqat
        aniq e&apos;lon qilingan aksiyalarda beriladi.
      </p>

      <h2 id="xato">Ko&apos;p sotib olishda keng tarqalgan xato</h2>
      <p>
        &laquo;Katta paket har doim arzonroq&raquo; degan taxmin — noto&apos;g&apos;ri.
        {siteConfig.bot}da narx miqdorga qat&apos;iy mutanosib: 100 ⭐ narxi 50
        ⭐&apos;ning ikki barobariga teng, 1000 ⭐ esa 50 ⭐&apos;ning yigirma barobariga
        teng. Shuning uchun miqdorni real ehtiyojga qarab tanlash — ortiqcha Stars sotib
        olib, ulardan foydalanmay qolishdan ko&apos;ra tejamliroq.
      </p>
      <p>
        Qaysi to&apos;lov usuli qulayligi haqida{' '}
        <Link href="/blog/telegram-stars-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">
          UzCard va Humo bilan Stars sotib olish
        </Link>{' '}
        qo&apos;llanmasida batafsil yozilgan.
      </p>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Narxlar joriy ichki konfiguratsiyaga, Stars&apos;ning umumiy foydalanish holatlari esa Telegram&apos;ning rasmiy blogiga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#jadval" className="hover:text-[var(--primary)] hover:underline">Все пакеты: от самого маленького до самого большого</a></li>
          <li><a href="#maqsad" className="hover:text-[var(--primary)] hover:underline">Какое количество выбрать в зависимости от цели</a></li>
          <li><a href="#kichik" className="hover:text-[var(--primary)] hover:underline">Кому подходит 50 ⭐?</a></li>
          <li><a href="#katta" className="hover:text-[var(--primary)] hover:underline">Кому подходит 10 000 ⭐?</a></li>
          <li><a href="#xato" className="hover:text-[var(--primary)] hover:underline">Частая ошибка при покупке большого количества</a></li>
        </ol>
      </nav>

      <h2 id="jadval">Все пакеты: от самого маленького до самого большого</h2>
      <p>
        В {siteConfig.bot} Stars можно купить в количестве от{' '}
        <strong>{formatNumber(SMALLEST.amount)}</strong> до{' '}
        <strong>{formatNumber(LARGEST.amount)}</strong>. Цена строго пропорциональна
        количеству — примерно <strong>{PER_STAR.toFixed(0)} сум за Star</strong>:
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[420px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Количество</th><th className="px-4 py-3 text-left">Цена</th></tr></thead>
          <tbody>
            {STARS_PACKS.map((p) => (
              <tr key={p.amount} className="border-t border-[var(--border)]">
                <td className="px-4 py-3">{formatNumber(p.amount)} ⭐</td>
                <td className="px-4 py-3">{formatUzs(p.priceUzs)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Полная таблица цен и расчёты для других количеств — в{' '}
        <Link href="/ru/blog/telegram-stars-narxlari-jadval" className="text-[var(--primary)] hover:underline">
          гиде по ценам Stars
        </Link>. А эта статья отвечает на вопрос — <strong>какое количество выбрать</strong>.
      </p>

      <h2 id="maqsad">Какое количество выбрать в зависимости от цели</h2>
      <p>
        Telegram Stars используются для цифровых товаров, оплаты в ботах и
        мини-приложениях, контента каналов, реакций и подарков. Для каждой цели не
        обязательно покупать крупный пакет — таблица ниже упрощает выбор:
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Цель</th><th className="px-4 py-3 text-left">Рекомендуемое количество</th><th className="px-4 py-3 text-left">Причина</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Одна реакция или небольшие «чаевые»</td><td className="px-4 py-3">50–150 ⭐</td><td className="px-4 py-3">Достаточно для минимальной проверки, остаток сохраняется на будущее</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Один подарок или разблокировка контента</td><td className="px-4 py-3">250–500 ⭐</td><td className="px-4 py-3">Большинство обычных подарков и разового контента укладывается в этот диапазон</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Регулярное использование или подписка на канал</td><td className="px-4 py-3">1000–2500 ⭐</td><td className="px-4 py-3">Покрывает несколько повторяющихся платежей без частых новых покупок</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Монетизация канала/бота, частое использование</td><td className="px-4 py-3">5000–10 000 ⭐</td><td className="px-4 py-3">Создаёт запас за одну покупку, снижает риск частых платежей</td></tr>
          </tbody>
        </table>
      </div>
      <InlineBotCTA lang="ru" text="Выберите подходящее количество в боте и активируйте за пару минут." />

      <h2 id="kichik">Кому подходит самый маленький пакет ({formatNumber(SMALLEST.amount)} ⭐)?</h2>
      <p>
        {formatNumber(SMALLEST.amount)} ⭐ ({formatUzs(SMALLEST.priceUzs)}) — минимальное
        количество для тех, кто хочет впервые попробовать Stars, оставить реакцию на
        пост или воспользоваться недорогой функцией мини-приложения. Если регулярное
        использование не планируется, нет смысла покупать больше — у Stars нет срока
        действия, их можно потратить в любое время.
      </p>

      <h2 id="katta">Кому подходит самый большой пакет ({formatNumber(LARGEST.amount)} ⭐)?</h2>
      <p>
        {formatNumber(LARGEST.amount)} ⭐ ({formatUzs(LARGEST.priceUzs)}) —
        предназначен в основном для владельцев каналов, разработчиков мини-приложений
        или тех, кто регулярно и часто тратит Stars. Одна крупная покупка снижает
        необходимость частых мелких платежей, но <strong>не снижает цену за
        единицу</strong> — скидки у Uzgets предоставляются только в рамках отдельно
        объявленных акций.
      </p>

      <h2 id="xato">Частая ошибка при покупке большого количества</h2>
      <p>
        Предположение «крупный пакет всегда дешевле» — неверно. В {siteConfig.bot} цена
        строго пропорциональна количеству: 100 ⭐ стоит вдвое дороже 50 ⭐, а 1000 ⭐ —
        в двадцать раз дороже 50 ⭐. Поэтому выбор количества по реальной потребности
        экономнее, чем покупка избыточного количества, которое потом не используется.
      </p>
      <p>
        Подробнее об удобных способах оплаты — в{' '}
        <Link href="/ru/blog/telegram-stars-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">
          гиде по покупке Stars через UzCard и Humo
        </Link>.
      </p>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Цены основаны на текущей внутренней конфигурации, а общие сценарии использования Stars — на официальном блоге Telegram.</p>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'comparison',
  locales: {
    uz: {
      title: "Telegram Stars eng kichik va eng katta paket qancha — qaysi miqdorni tanlash kerak",
      description:
        "Telegram Stars'ning eng kichik va eng katta paketi qancha, va maqsadingizga (reaksiya, sovg'a, obuna, monetizatsiya) qarab qaysi miqdorni tanlash kerakligi bo'yicha aniq qo'llanma.",
      metaTitle: "Stars eng kichik va eng katta paket — qaysi miqdor kerak?",
      metaDescription:
        `Telegram Stars eng kichik paketi ${formatNumber(SMALLEST.amount)} ⭐, eng kattasi ${formatNumber(LARGEST.amount)} ⭐. Maqsadga qarab qaysi miqdorni tanlash kerakligi va narx jadvali shu yerda.`,
      ogDescription:
        "Stars 50 dan 10 000 gacha sotib olinadi. Reaksiya, sovg'a, obuna yoki monetizatsiya uchun qaysi miqdor optimal — aniq jadval bilan.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Stars'ning eng kichik paketi qancha?", answer: `${siteConfig.bot}da eng kichik paket ${formatNumber(SMALLEST.amount)} ⭐ (${formatUzs(SMALLEST.priceUzs)}).` },
        { question: "Telegram Stars'ning eng katta paketi qancha?", answer: `${siteConfig.bot}da eng katta paket ${formatNumber(LARGEST.amount)} ⭐ (${formatUzs(LARGEST.priceUzs)}).` },
        { question: "Ko'p miqdorda Stars sotib olsam, birlik narxi pasayadimi?", answer: "Yo'q. Narx miqdorga qat'iy mutanosib — katta paket birlik narxini pasaytirmaydi. Chegirma faqat alohida e'lon qilingan aksiyalarda bo'ladi." },
        { question: "Birinchi marta Stars sotib olayotgan bo'lsam, qaysi miqdorni tanlashim kerak?", answer: "50-150 ⭐ sinab ko'rish uchun yetarli. Muntazam foydalanish rejalashtirilsa, keyinroq kattaroq paket sotib olsangiz bo'ladi — Stars muddati tugamaydi." },
        { question: "Kanal yoki bot uchun Stars sotib olayotgan bo'lsam, qancha kerak?", answer: "Muntazam monetizatsiya yoki ko'p marta ishlatish rejalashtirilsa, 5000-10 000 ⭐ oralig'idagi paket tez-tez kichik to'lov qilish zaruratini kamaytiradi." },
        { question: "Stars'ning amal qilish muddati bormi?", answer: "Yo'q, Stars muddati tugamaydi — istalgan vaqtda sarflanishi mumkin, shuning uchun katta paket sotib olib, keyin ishlatmay qolish xavfi yo'q, faqat ortiqcha pul sarflash xavfi bor." },
      ],
      finalCtaHeading: "Maqsadingizga mos Stars miqdorini hozir tanlang",
      finalCtaBody: `${siteConfig.bot}da ${formatNumber(SMALLEST.amount)} dan ${formatNumber(LARGEST.amount)} ⭐'gacha miqdorni tanlab, UzCard, Humo yoki Click orqali bir necha daqiqada faollashtiring.`,
    },
    ru: {
      title: 'Самый маленький и самый большой пакет Telegram Stars — какое количество выбрать',
      description:
        'Сколько Stars в самом маленьком и самом большом пакете, и какое количество выбрать в зависимости от цели (реакция, подарок, подписка, монетизация).',
      metaTitle: 'Stars — самый маленький и большой пакет, какое количество выбрать',
      metaDescription:
        `Самый маленький пакет Telegram Stars — ${formatNumber(SMALLEST.amount)} ⭐, самый большой — ${formatNumber(LARGEST.amount)} ⭐. Какое количество выбрать под вашу цель и таблица цен — здесь.`,
      ogDescription:
        'Stars продаются от 50 до 10 000. Какое количество оптимально для реакции, подарка, подписки или монетизации — с точной таблицей.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Сколько Stars в самом маленьком пакете?', answer: `В ${siteConfig.bot} самый маленький пакет — ${formatNumber(SMALLEST.amount)} ⭐ (${formatUzs(SMALLEST.priceUzs)}).` },
        { question: 'Сколько Stars в самом большом пакете?', answer: `В ${siteConfig.bot} самый большой пакет — ${formatNumber(LARGEST.amount)} ⭐ (${formatUzs(LARGEST.priceUzs)}).` },
        { question: 'Снижается ли цена за единицу при покупке большого количества?', answer: 'Нет. Цена строго пропорциональна количеству — крупный пакет не снижает цену за единицу. Скидки бывают только в рамках отдельно объявленных акций.' },
        { question: 'Какое количество выбрать при первой покупке Stars?', answer: '50-150 ⭐ достаточно, чтобы попробовать. Если планируется регулярное использование, позже можно купить пакет побольше — у Stars нет срока действия.' },
        { question: 'Сколько Stars нужно для канала или бота?', answer: 'Если планируется регулярная монетизация или частое использование, пакет в диапазоне 5000-10 000 ⭐ снижает необходимость частых мелких платежей.' },
        { question: 'Есть ли у Stars срок действия?', answer: 'Нет, у Stars нет срока действия — их можно потратить в любое время, поэтому риска "не успеть использовать" крупный пакет нет, есть только риск переплатить за неиспользуемый остаток.' },
      ],
      finalCtaHeading: 'Выберите подходящее количество Stars прямо сейчас',
      finalCtaBody: `В ${siteConfig.bot} выберите количество от ${formatNumber(SMALLEST.amount)} до ${formatNumber(LARGEST.amount)} ⭐ и активируйте за пару минут через UzCard, Humo или Click.`,
    },
  },
}
