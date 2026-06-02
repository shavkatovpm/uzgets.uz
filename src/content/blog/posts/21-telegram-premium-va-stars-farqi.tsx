import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS, STARS_BASE } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-va-stars-farqi'
const TODAY = '2026-05-24'

const P3 = PREMIUM_PERIODS[0]
const P12 = PREMIUM_PERIODS[2]

function UzAnswerBox() {
  return (
    <p>
      <strong>Telegram Premium</strong> va <strong>Telegram Stars</strong> — bu ikki butunlay boshqa
      mahsulot. Premium — bu butun akkauntingizga ta&apos;sir qiluvchi <strong>obuna</strong>{' '}
      (reklamasiz, 4 GB fayl, ovozni matnga aylantirish va boshqalar; 3 / 6 / 12 oyga). Stars esa —
      Telegram ichidagi <strong>raqamli valyuta</strong>: u bilan sovg&apos;a, bot/mini-app to&apos;lovi,
      paid kontent va kreatorlarni qo&apos;llab-quvvatlash amalga oshiriladi. Qisqasi: Premium —{' '}
      <em>tajribangizni yaxshilaydi</em>, Stars — <em>ichki to&apos;lovlar uchun</em>. Ikkalasini ham{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      orqali mahalliy karta bilan alohida sotib olasiz.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      <strong>Telegram Premium</strong> и <strong>Telegram Stars</strong> — это два совершенно разных
      продукта. Premium — это <strong>подписка</strong>, влияющая на весь аккаунт (без рекламы, файлы
      до 4 ГБ, расшифровка голосовых и др.; на 3 / 6 / 12 месяцев). Stars — это{' '}
      <strong>цифровая валюта</strong> внутри Telegram: ею оплачивают подарки, ботов и mini-app, paid
      контент и поддержку авторов. Коротко: Premium <em>улучшает ваш опыт</em>, Stars нужны{' '}
      <em>для внутренних оплат</em>. И то, и другое вы покупаете отдельно через{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      локальной картой.
    </p>
  )
}

type Row = { label: { uz: string; ru: string }; premium: { uz: string; ru: string }; stars: { uz: string; ru: string } }

const ROWS: Row[] = [
  {
    label: { uz: 'Turi', ru: 'Тип' },
    premium: { uz: 'Obuna (muddatli)', ru: 'Подписка (на срок)' },
    stars: { uz: 'Raqamli valyuta', ru: 'Цифровая валюта' },
  },
  {
    label: { uz: 'Nimaga taʼsir qiladi', ru: 'На что влияет' },
    premium: { uz: 'Butun akkaunt tajribasi', ru: 'Весь опыт аккаунта' },
    stars: { uz: 'Har bir alohida toʻlov', ru: 'Каждая отдельная оплата' },
  },
  {
    label: { uz: 'Asosiy foyda', ru: 'Главная польза' },
    premium: { uz: 'Reklamasiz, 4 GB, transkripsiya, kengaytirilgan limitlar', ru: 'Без рекламы, 4 ГБ, расшифровка, расширенные лимиты' },
    stars: { uz: 'Sovgʻa, bot/mini-app, paid kontent, kreatorlar', ru: 'Подарки, боты/mini-app, paid контент, авторы' },
  },
  {
    label: { uz: 'Muddati', ru: 'Срок' },
    premium: { uz: '3 / 6 / 12 oy — keyin oʻchadi', ru: '3 / 6 / 12 мес. — затем отключается' },
    stars: { uz: 'Muddatsiz — ishlatilguncha turadi', ru: 'Бессрочно — пока не потратите' },
  },
  {
    label: { uz: 'Pulga aylantirish', ru: 'Вывод в деньги' },
    premium: { uz: 'Yoʻq', ru: 'Нет' },
    stars: { uz: 'Ha — kreatorlar TON orqali', ru: 'Да — авторы через TON' },
  },
  {
    label: { uz: 'Uzgets narxi', ru: 'Цена в Uzgets' },
    premium: { uz: `${formatUzs(P3.priceUzs)}dan (3 oylik)`, ru: `от ${formatUzs(P3.priceUzs)} (3 мес.)` },
    stars: { uz: `${formatUzs(STARS_BASE.priceUzs)} (50 ⭐)dan`, ru: `от ${formatUzs(STARS_BASE.priceUzs)} (50 ⭐)` },
  },
]

function DiffTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Mezon' : 'Критерий'}</th>
            <th className="px-4 py-2 text-left font-semibold">Telegram Premium</th>
            <th className="px-4 py-2 text-left font-semibold">Telegram Stars</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.label.uz} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{r.label[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.premium[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.stars[lang]}</td>
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
          — {lang === 'uz' ? 'Premium rasmiy FAQ' : 'официальный FAQ Premium'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/premium
          </a>{' '}
          — {lang === 'uz' ? 'Premium limitlari va hadya qilish' : 'лимиты Premium и подарки'}
        </li>
        <li>
          <a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/telegram-stars
          </a>{' '}
          — {lang === 'uz' ? 'Stars rasmiy eʼlon' : 'официальный анонс Stars'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Maʼlumotlar 2026-yil may holatiga koʻra. Telegram narx va imkoniyatlarni yangilashi mumkin — sahifa kuzatib boriladi."
          : 'Данные на май 2026 года. Telegram может обновлять цены и возможности — страница отслеживается.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="qisqa-farq">Premium va Stars — eng qisqa farq</h2>
      <p>
        Bitta jumlada: <strong>Telegram Premium</strong> — bu <strong>obuna</strong>, u butun
        akkauntingizni yaxshilaydi (reklamasiz, kattaroq fayllar, qoʻshimcha imkoniyatlar).{' '}
        <strong>Telegram Stars</strong> — bu <strong>ichki valyuta</strong>, u bilan Telegram ichida
        narsalar sotib olasiz (sovgʻa, bot funksiyalari, paid kontent). Ular bir-birini
        almashtirmaydi — har biri oʻz vazifasini bajaradi.
      </p>
      <DiffTable lang="uz" />
      <p>
        Koʻp foydalanuvchilar ikkalasini ham ishlatadi: kundalik qulaylik uchun <strong>Premium</strong>,
        va kerak boʻlganda alohida toʻlovlar uchun <strong>Stars</strong>. Bu — raqobat emas, ikki
        xil ehtiyoj.
      </p>

      <h2 id="premium-nima">Telegram Premium nima va kimga kerak?</h2>
      <p>
        Premium — oylik/yillik <strong>obuna</strong>. Toʻlov qilingach, u <em>butun akkauntingizga</em>{' '}
        bir qancha imkoniyat qoʻshadi. Eng sezilarli foydalar:
      </p>
      <ul>
        <li><strong>Reklamasiz</strong> — yirik ommaviy kanallardagi homiylik postlari koʻrinmaydi.</li>
        <li><strong>4 GB fayl</strong> — bepul foydalanuvchidagi 2 GB oʻrniga ikki barobar.</li>
        <li><strong>Ovozni matnga aylantirish</strong> — ovozli va video-xabarlarni oʻqish.</li>
        <li><strong>Kengaytirilgan limitlar</strong> — 1000 tagacha kanal, koʻproq papka, qadab qoʻyilgan chatlar.</li>
        <li><strong>Yuklash tezligi cheklanmagan</strong>, animatsion avatar, emoji status va boshqalar.</li>
      </ul>
      <p>
        Premium <strong>tugaydigan</strong> obuna: 3, 6 yoki 12 oydan keyin oʻzi oʻchadi va akkaunt
        oddiy holatga qaytadi. Toʻliq roʻyxat va batafsil tushuntirish:{' '}
        <Link href="/blog/telegram-premium-imkoniyatlari-12-farq" className="text-[var(--primary)] hover:underline">
          Telegram Premium imkoniyatlari — 12+ farq
        </Link>{' '}
        hamda{' '}
        <Link href="/blog/telegram-premium-nima-toliq-qollanma" className="text-[var(--primary)] hover:underline">
          Telegram Premium nima — toʻliq qoʻllanma
        </Link>
        .
      </p>
      <p>
        <strong>Kimga mos:</strong> Telegramni har kuni faol ishlatadigan, reklamadan charchagan,
        katta fayllar yuboradigan, koʻp kanal/guruh boshqaradigan foydalanuvchilarga.
      </p>

      <InlineBotCTA lang="uz" text="Premium 3 / 6 / 12 oylik — botda mahalliy karta bilan rasmiylashtiring." />

      <h2 id="stars-nima">Telegram Stars nima va kimga kerak?</h2>
      <p>
        Stars — Telegramning <strong>ichki raqamli valyutasi</strong> (yulduzcha ⭐). Premium kabi
        akkauntga &quot;yoqilmaydi&quot; — u hisobingizda turadi va siz har safar biror narsaga{' '}
        <em>sarflaysiz</em>. Stars asosan quyidagilar uchun:
      </p>
      <ul>
        <li><strong>Sovgʻalar (Gifts)</strong> — doʻstga raqamli sovgʻa yuborish, sovgʻa marketplace.</li>
        <li><strong>Bot va mini-app toʻlovlari</strong> — oʻyinlar, xizmatlar ichidagi xaridlar.</li>
        <li><strong>Paid kontent</strong> — kanaldagi yopiq post yoki media uchun toʻlov.</li>
        <li><strong>Kreatorlarni qoʻllab-quvvatlash</strong> — yoqqan muallifga &quot;tip&quot; berish.</li>
      </ul>
      <p>
        Muhim farq: Stars <strong>tugamaydi</strong> — ishlatmaguningizcha hisobda qoladi. Bundan
        tashqari, kreatorlar oʻzi <strong>ishlab topgan</strong> Stars&apos;ni TON kriptovalyutasi
        orqali pulga aylantira oladi (bu — sotib oluvchiga emas, kontent muallifiga tegishli). Stars
        haqida batafsil:{' '}
        <Link href="/blog/telegram-stars-nima" className="text-[var(--primary)] hover:underline">
          Telegram Stars nima va nima uchun kerak
        </Link>
        .
      </p>
      <p>
        <strong>Kimga mos:</strong> bot/mini-app ichida toʻlov qiladigan, sovgʻa yuboradigan yoki
        yoqqan kanal/muallifni qoʻllab-quvvatlamoqchi boʻlganlarga.
      </p>

      <InlineBotCTA lang="uz" text="Stars 50 dan 10 000 gacha — kerakli miqdorni botda tanlang." />

      <h2 id="stars-bilan-premium">Stars bilan Premium olib boʻladimi?</h2>
      <p>
        Bu — eng koʻp beriladigan savol. Aniq javob: <strong>oʻz akkauntingizni shunchaki Stars
        yigʻib Premium qilib boʻlmaydi</strong>. Premium — alohida obuna, Stars esa alohida valyuta.
        Oddiy foydalanuvchi uchun bular ikki xil xarid.
      </p>
      <p>
        Bitta nozik holat bor: Telegram <strong>Premium&apos;ni sovgʻa qilish</strong>ni qoʻllab-quvvatlaydi
        va texnik jihatdan Premium sovgʻasini Stars bilan ham toʻlash imkoniyati mavjud. Ammo bu —
        boshqasiga Premium <em>hadya qilish</em> stsenariysi, oʻzingizga emas. Uzgets&apos;da esa siz
        Premium va Stars&apos;ni toʻgʻridan-toʻgʻri mahalliy karta bilan, alohida-alohida sotib olasiz —
        bu eng sodda va arzon yoʻl. Premium hadya haqida:{' '}
        <Link href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">
          Telegram Premium hadya — qanday sovgʻa qilinadi
        </Link>
        .
      </p>

      <h2 id="qaysi-biri">Qaysi biri sizga kerak?</h2>
      <p>Tanlovni soddalashtiramiz:</p>
      <ul>
        <li>
          <strong>Premium tanlang —</strong> agar reklamadan qutulmoqchi boʻlsangiz, katta fayllar
          yuborsangiz, koʻp kanal boshqarsangiz yoki Telegramni har kuni jiddiy ishlatsangiz.
        </li>
        <li>
          <strong>Stars tanlang —</strong> agar bot/mini-app ichida toʻlov qilmoqchi, sovgʻa
          yubormoqchi yoki paid kontentga kira olmoqchi boʻlsangiz.
        </li>
        <li>
          <strong>Ikkalasini ham —</strong> agar Premium qulayligi ham, ichki toʻlovlar imkoniyati
          ham kerak boʻlsa. Koʻp faol foydalanuvchilar shunday qiladi.
        </li>
      </ul>

      <h2 id="narx">Narx taqqoslash (Uzgets, mahalliy karta)</h2>
      <p>
        Ikkala mahsulot ham <strong>{siteConfig.bot}</strong> da UzCard, Humo, Click yoki Payme bilan
        sotib olinadi:
      </p>
      <ul>
        <li>
          <strong>Premium:</strong> 3 oylik {formatUzs(P3.priceUzs)}, 12 oylik {formatUzs(P12.priceUzs)}
          {' '}(oyiga taxminan {formatUzs(P12.perMonthHint)}). Barcha paketlar:{' '}
          <Link href="/premium" className="text-[var(--primary)] hover:underline">/premium</Link>.
        </li>
        <li>
          <strong>Stars:</strong> 50 ⭐ {formatUzs(STARS_BASE.priceUzs)} dan boshlab, miqdorga
          proportsional. Barcha paketlar:{' '}
          <Link href="/stars" className="text-[var(--primary)] hover:underline">/stars</Link>.
        </li>
      </ul>
      <p>
        Eslatma: Telegramning global Premium narxi ($4.99/oy yoki $35.99/yil) chet el kartasini
        talab qiladi. Uzgets esa mahalliy karta bilan toʻlov imkonini beradi — O&apos;zbekistondagi
        foydalanuvchi uchun amaliy farq shunda.
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Premium yoki Stars — botda tanlang va mahalliy karta bilan toʻlang." />

      <h2 id="xulosa">Xulosa</h2>
      <ul>
        <li><strong>Premium</strong> = obuna, butun akkauntni yaxshilaydi, muddat tugagach oʻchadi.</li>
        <li><strong>Stars</strong> = valyuta, alohida toʻlovlar uchun, tugamaydi.</li>
        <li>Ular bir-birini almashtirmaydi — vazifalari boshqa.</li>
        <li>Uzgets&apos;da har ikkisini mahalliy karta bilan, alohida sotib olasiz.</li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="qisqa-farq">Premium и Stars — самое короткое отличие</h2>
      <p>
        Одной фразой: <strong>Telegram Premium</strong> — это <strong>подписка</strong>, которая
        улучшает весь ваш аккаунт (без рекламы, большие файлы, дополнительные возможности).{' '}
        <strong>Telegram Stars</strong> — это <strong>внутренняя валюта</strong>, которой вы покупаете
        что-то внутри Telegram (подарки, функции ботов, paid контент). Они не заменяют друг друга —
        у каждого своя задача.
      </p>
      <DiffTable lang="ru" />
      <p>
        Многие пользователи используют и то, и другое: <strong>Premium</strong> для повседневного
        удобства и <strong>Stars</strong> для отдельных оплат по необходимости. Это не конкуренция, а
        две разные потребности.
      </p>

      <h2 id="premium-nima">Что такое Telegram Premium и кому он нужен?</h2>
      <p>
        Premium — это <strong>подписка</strong> на месяцы. После оплаты она добавляет ряд
        возможностей <em>всему вашему аккаунту</em>. Самые заметные:
      </p>
      <ul>
        <li><strong>Без рекламы</strong> — не видно спонсорских постов в крупных публичных каналах.</li>
        <li><strong>Файлы до 4 ГБ</strong> — вдвое больше, чем 2 ГБ у бесплатных пользователей.</li>
        <li><strong>Расшифровка голосовых</strong> — перевод голосовых и видео-сообщений в текст.</li>
        <li><strong>Расширенные лимиты</strong> — до 1000 каналов, больше папок и закреплённых чатов.</li>
        <li><strong>Безлимитная скорость загрузки</strong>, анимированный аватар, эмодзи-статус и др.</li>
      </ul>
      <p>
        Premium — <strong>срочная</strong> подписка: через 3, 6 или 12 месяцев она отключается, и
        аккаунт возвращается в обычный режим. Полный список и подробности:{' '}
        <Link href="/ru/blog/telegram-premium-imkoniyatlari-12-farq" className="text-[var(--primary)] hover:underline">
          Возможности Telegram Premium — 12+ отличий
        </Link>{' '}
        и{' '}
        <Link href="/ru/blog/telegram-premium-nima-toliq-qollanma" className="text-[var(--primary)] hover:underline">
          Что такое Telegram Premium — полное руководство
        </Link>
        .
      </p>
      <p>
        <strong>Кому подходит:</strong> тем, кто пользуется Telegram каждый день, устал от рекламы,
        отправляет большие файлы, управляет множеством каналов и групп.
      </p>

      <InlineBotCTA lang="ru" text="Premium на 3 / 6 / 12 месяцев — оформите в боте локальной картой." />

      <h2 id="stars-nima">Что такое Telegram Stars и кому они нужны?</h2>
      <p>
        Stars — <strong>внутренняя цифровая валюта</strong> Telegram (звёздочка ⭐). В отличие от
        Premium, она не «включается» на аккаунте — она лежит на балансе, и вы каждый раз{' '}
        <em>тратите</em> её на что-то. Stars в основном нужны для:
      </p>
      <ul>
        <li><strong>Подарков (Gifts)</strong> — отправить цифровой подарок другу, маркетплейс подарков.</li>
        <li><strong>Оплаты ботов и mini-app</strong> — покупки внутри игр и сервисов.</li>
        <li><strong>Paid контента</strong> — оплата закрытого поста или медиа в канале.</li>
        <li><strong>Поддержки авторов</strong> — «чаевые» понравившемуся автору.</li>
      </ul>
      <p>
        Важное отличие: Stars <strong>не сгорают</strong> — лежат на балансе, пока вы их не
        потратите. Кроме того, авторы могут <strong>заработанные</strong> Stars выводить через
        криптовалюту TON (это относится к создателю контента, а не к покупателю). Подробнее о Stars:{' '}
        <Link href="/ru/blog/telegram-stars-nima" className="text-[var(--primary)] hover:underline">
          Что такое Telegram Stars и зачем они нужны
        </Link>
        .
      </p>
      <p>
        <strong>Кому подходит:</strong> тем, кто платит внутри ботов/mini-app, отправляет подарки или
        хочет поддержать любимый канал/автора.
      </p>

      <InlineBotCTA lang="ru" text="Stars от 50 до 10 000 — выберите количество в боте." />

      <h2 id="stars-bilan-premium">Можно ли получить Premium за Stars?</h2>
      <p>
        Это самый частый вопрос. Чёткий ответ: <strong>просто накопив Stars, сделать свой аккаунт
        Premium нельзя</strong>. Premium — отдельная подписка, Stars — отдельная валюта. Для обычного
        пользователя это две разные покупки.
      </p>
      <p>
        Есть один нюанс: Telegram поддерживает <strong>дарение Premium</strong>, и технически подарок
        Premium можно оплатить в том числе Stars. Но это сценарий, когда вы <em>дарите</em> Premium
        кому-то другому, а не себе. В Uzgets же вы покупаете Premium и Stars напрямую локальной
        картой, по отдельности — это самый простой и дешёвый путь. О подарке Premium:{' '}
        <Link href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">
          Подарок Telegram Premium — как подарить
        </Link>
        .
      </p>

      <h2 id="qaysi-biri">Что выбрать именно вам?</h2>
      <p>Упростим выбор:</p>
      <ul>
        <li>
          <strong>Выбирайте Premium —</strong> если хотите избавиться от рекламы, отправляете большие
          файлы, управляете множеством каналов или серьёзно пользуетесь Telegram каждый день.
        </li>
        <li>
          <strong>Выбирайте Stars —</strong> если хотите платить внутри ботов/mini-app, отправлять
          подарки или получать доступ к paid контенту.
        </li>
        <li>
          <strong>И то, и другое —</strong> если нужны и удобство Premium, и возможность внутренних
          оплат. Так делают многие активные пользователи.
        </li>
      </ul>

      <h2 id="narx">Сравнение цен (Uzgets, локальная карта)</h2>
      <p>
        Оба продукта покупаются в <strong>{siteConfig.bot}</strong> через UzCard, Humo, Click или
        Payme:
      </p>
      <ul>
        <li>
          <strong>Premium:</strong> 3 месяца {formatUzs(P3.priceUzs)}, 12 месяцев {formatUzs(P12.priceUzs)}
          {' '}(примерно {formatUzs(P12.perMonthHint)} в месяц). Все пакеты:{' '}
          <Link href="/ru/premium" className="text-[var(--primary)] hover:underline">/premium</Link>.
        </li>
        <li>
          <strong>Stars:</strong> от 50 ⭐ {formatUzs(STARS_BASE.priceUzs)}, пропорционально
          количеству. Все пакеты:{' '}
          <Link href="/ru/stars" className="text-[var(--primary)] hover:underline">/stars</Link>.
        </li>
      </ul>
      <p>
        Замечание: глобальная цена Premium ($4.99/мес. или $35.99/год) требует зарубежной карты.
        Uzgets даёт возможность оплаты локальной картой — в этом и есть практическая разница для
        пользователя из Узбекистана.
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Premium или Stars — выберите в боте и оплатите локальной картой." />

      <h2 id="xulosa">Итог</h2>
      <ul>
        <li><strong>Premium</strong> = подписка, улучшает весь аккаунт, по истечении срока отключается.</li>
        <li><strong>Stars</strong> = валюта для отдельных оплат, не сгорает.</li>
        <li>Они не заменяют друг друга — у них разные задачи.</li>
        <li>В Uzgets вы покупаете оба продукта локальной картой, по отдельности.</li>
      </ul>
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
      title: "Telegram Premium va Stars farqi — qaysi biri sizga kerak (2026)",
      description:
        "Telegram Premium va Telegram Stars oʻrtasidagi farq: biri obuna, ikkinchisi ichki valyuta. Qaysi biri kimga kerakligi, narxlar va Uzgets orqali mahalliy karta bilan sotib olish.",
      metaTitle: "Telegram Premium va Stars farqi — qaysi biri kerak (2026)",
      metaDescription:
        "Telegram Premium — obuna (reklamasiz, 4 GB, limitlar), Stars — ichki valyuta (sovgʻa, bot, paid kontent). Farqi, taqqoslash jadvali va qaysi biri sizga kerakligi. Uzgets, mahalliy karta.",
      ogDescription:
        "Telegram Premium va Stars — ikki xil mahsulot. Farqi, taqqoslash va qaysi biri sizga kerakligi.",
      answerBoxTitle: 'Qisqa javob: farqi nima?',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Telegram Premium va Stars bir xil narsami?',
          answer:
            "Yoʻq. Premium — bu butun akkauntingizga taʼsir qiluvchi obuna (reklamasiz, 4 GB fayl, transkripsiya, kengaytirilgan limitlar). Stars — Telegram ichidagi raqamli valyuta, u bilan sovgʻa, bot/mini-app toʻlovi va paid kontent sotib olinadi. Ikki butunlay boshqa mahsulot.",
        },
        {
          question: 'Stars bilan oʻzimga Premium yoqsam boʻladimi?',
          answer:
            "Yoʻq, shunchaki Stars yigʻib oʻz akkauntingizni Premium qilib boʻlmaydi — bular alohida xaridlar. Telegram Premiumʼni boshqasiga sovgʻa qilishni qoʻllab-quvvatlaydi va texnik jihatdan bu sovgʻani Stars bilan toʻlash mumkin, lekin bu oʻzingizga emas, hadya stsenariysi.",
        },
        {
          question: 'Qaysi biri arzonroq?',
          answer:
            "Ularni narxda solishtirib boʻlmaydi, chunki vazifasi boshqa. Uzgetsʼda Premium 3 oylik " +
            formatUzs(P3.priceUzs) +
            " dan, Stars esa 50 ⭐ " +
            formatUzs(STARS_BASE.priceUzs) +
            " dan boshlanadi. Premium — muddatli obuna, Stars — ishlatilguncha turadigan valyuta.",
        },
        {
          question: 'Premium tugaganda Stars ham yoʻqoladimi?',
          answer:
            "Yoʻq. Bular bogʻliq emas. Premium muddati (3/6/12 oy) tugaganda faqat obuna oʻchadi. Stars esa hisobingizda turaveradi — ular muddatsiz va ishlatmaguningizcha yoʻqolmaydi.",
        },
        {
          question: 'Ikkalasini bitta botdan sotib olsam boʻladimi?',
          answer:
            siteConfig.bot +
            " da ham Premium, ham Stars mavjud — boshqa botga oʻtish shart emas. UzCard, Humo, Click yoki Payme bilan toʻlaysiz, mahsulot koʻrsatilgan akkauntga avtomatik biriktiriladi.",
        },
        {
          question: 'Starsʼni pulga aylantirsam boʻladimi?',
          answer:
            "Faqat siz ularni ishlab topgan boʻlsangiz (masalan, kanal yoki bot orqali) — kreatorlar Starsʼni TON kriptovalyutasi orqali yechib olishi mumkin. Oddiy sotib olingan Stars sarflash uchun moʻljallangan, ularni qaytarib pulga aylantirib boʻlmaydi.",
        },
        {
          question: 'Menga Premium ham, Stars ham kerakmi?',
          answer:
            "Bu ehtiyojga bogʻliq. Agar reklamasiz, katta fayllar va kengaytirilgan limitlar kerak boʻlsa — Premium. Agar bot/mini-app ichida toʻlov yoki sovgʻa kerak boʻlsa — Stars. Koʻp faol foydalanuvchilar ikkalasini ham oladi.",
        },
      ],
      finalCtaHeading: 'Qaysi biri kerakligini hal qildingizmi?',
      finalCtaBody:
        "Botga kiring — Premium yoki Starsʼni tanlang, mahalliy karta bilan toʻlang, mahsulot akkauntga avtomatik biriktiriladi.",
    },
    ru: {
      title: 'Разница между Telegram Premium и Stars — что выбрать (2026)',
      description:
        'Разница между Telegram Premium и Telegram Stars: одно — подписка, другое — внутренняя валюта. Кому что нужно, цены и покупка через Uzgets локальной картой.',
      metaTitle: 'Разница Telegram Premium и Stars — что выбрать (2026)',
      metaDescription:
        'Telegram Premium — подписка (без рекламы, 4 ГБ, лимиты), Stars — внутренняя валюта (подарки, боты, paid контент). Отличие, таблица сравнения и что выбрать. Uzgets, локальная карта.',
      ogDescription:
        'Telegram Premium и Stars — два разных продукта. Отличие, сравнение и что выбрать именно вам.',
      answerBoxTitle: 'Краткий ответ: в чём разница?',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Telegram Premium и Stars — это одно и то же?',
          answer:
            'Нет. Premium — это подписка, влияющая на весь аккаунт (без рекламы, файлы 4 ГБ, расшифровка, расширенные лимиты). Stars — внутренняя цифровая валюта Telegram, ею оплачивают подарки, ботов/mini-app и paid контент. Это два совершенно разных продукта.',
        },
        {
          question: 'Можно ли включить себе Premium за Stars?',
          answer:
            'Нет, просто накопив Stars, сделать свой аккаунт Premium нельзя — это отдельные покупки. Telegram поддерживает дарение Premium, и технически такой подарок можно оплатить в том числе Stars, но это сценарий подарка другому, а не себе.',
        },
        {
          question: 'Что дешевле?',
          answer:
            'Их нельзя сравнивать по цене, потому что задачи разные. В Uzgets Premium на 3 месяца — от ' +
            formatUzs(P3.priceUzs) +
            ', а Stars — от 50 ⭐ за ' +
            formatUzs(STARS_BASE.priceUzs) +
            '. Premium — срочная подписка, Stars — валюта, которая лежит до момента траты.',
        },
        {
          question: 'Когда заканчивается Premium, Stars тоже пропадают?',
          answer:
            'Нет. Они не связаны. Когда истекает срок Premium (3/6/12 мес.), отключается только подписка. Stars остаются на балансе — они бессрочные и не пропадают, пока вы их не потратите.',
        },
        {
          question: 'Можно купить и то, и другое в одном боте?',
          answer:
            'В ' +
            siteConfig.bot +
            ' есть и Premium, и Stars — переходить в другой бот не нужно. Оплата через UzCard, Humo, Click или Payme, товар автоматически зачисляется на указанный аккаунт.',
        },
        {
          question: 'Можно ли вывести Stars в деньги?',
          answer:
            'Только если вы их заработали (например, через канал или бота) — авторы могут выводить Stars через криптовалюту TON. Обычные купленные Stars предназначены для траты, обратно в деньги их вывести нельзя.',
        },
        {
          question: 'Мне нужны и Premium, и Stars?',
          answer:
            'Зависит от потребностей. Нужны отсутствие рекламы, большие файлы и расширенные лимиты — Premium. Нужны оплаты внутри ботов/mini-app или подарки — Stars. Многие активные пользователи берут и то, и другое.',
        },
      ],
      finalCtaHeading: 'Решили, что именно вам нужно?',
      finalCtaBody:
        'Зайдите в бот — выберите Premium или Stars, оплатите локальной картой, товар зачислится на аккаунт автоматически.',
    },
  },
}
