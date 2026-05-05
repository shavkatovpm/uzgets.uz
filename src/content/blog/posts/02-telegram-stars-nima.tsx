import Link from 'next/link'
import { siteConfig } from '@/config/site'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-nima'
const TODAY = '2026-05-06'

function UzAnswerBox() {
  return (
    <p>
      Telegram Stars (yulduzchalar) — Telegram ekosistemasi ichidagi rasmiy raqamli to&apos;lov birligi. Ular bot va
      mini-applarda raqamli mahsulot sotib olish, sovg&apos;a yuborish, Premium obunani sovg&apos;a qilish, paid
      messages uchun to&apos;lash, Premium emoji va Star Reactions kabi funksiyalar uchun ishlatiladi. Stars akkauntga
      bog&apos;langan, faqat Telegram ichida ishlaydi va boshqa platformalarga o&apos;tkazib bo&apos;lmaydi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Telegram Stars (звёзды) — внутренняя цифровая валюта экосистемы Telegram. Их используют для покупки цифровых
      товаров в ботах и mini-app, отправки подарков, дарения подписки Premium, оплаты платных сообщений, премиум-эмодзи
      и Star Reactions. Stars привязаны к аккаунту, работают только внутри Telegram и не переводятся на другие
      платформы.
    </p>
  )
}

function UseCaseCard({
  emoji,
  title,
  body,
}: {
  emoji: string
  title: string
  body: React.ReactNode
}) {
  return (
    <div className="uz-card rounded-xl border border-[var(--border)] p-4">
      <div className="mb-1 flex items-center gap-2">
        <span aria-hidden className="text-xl">
          {emoji}
        </span>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
    </div>
  )
}

function ComparisonTable({ lang }: { lang: 'uz' | 'ru' }) {
  const headers =
    lang === 'uz'
      ? ['Xususiyat', 'Telegram Stars', 'Oddiy pul (UZS)']
      : ['Свойство', 'Telegram Stars', 'Обычные деньги (UZS)']
  const rows =
    lang === 'uz'
      ? [
          ['Qayerda ishlaydi', 'Faqat Telegram ichida', 'Hamma joyda'],
          ['Akkauntga bog\'liqmi', 'Ha — akkaunt o\'chirilsa balans yo\'qoladi', "Yo'q"],
          ['Boshqa odamga yuborish', 'Telegram username orqali (sovg\'a / reaktsiya)', "Bank o'tkazmasi orqali"],
          ['Qaytarib olish (refund)', 'Telegram tomonidan qaytarilmaydi', 'Bank qoidalari bo\'yicha'],
          ['Pulga aylantirish', 'Faqat Fragment orqali (kreatorlar uchun)', "To'g'ridan-to'g'ri"],
        ]
      : [
          ['Где работает', 'Только в Telegram', 'Везде'],
          ['Привязка к аккаунту', 'Да — при удалении аккаунта баланс пропадёт', 'Нет'],
          ['Перевод другому', 'Через Telegram username (подарок / реакция)', 'Через банковский перевод'],
          ['Возврат (refund)', 'Telegram не возвращает', 'По правилам банка'],
          ['Обналичивание', 'Только через Fragment (для создателей)', 'Напрямую'],
        ]

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[var(--border)]">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2 ${j === 0 ? 'font-medium' : ''}`}>
                  {cell}
                </td>
              ))}
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
          <a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/telegram-stars
          </a>{' '}
          — {lang === 'uz' ? "Stars rasmiy e'lon" : 'официальный анонс Stars'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/stars
          </a>{' '}
          — {lang === 'uz' ? 'texnik hujjat' : 'техническая документация'}
        </li>
        <li>
          <a href="https://telegram.org/blog/star-messages-gateway-2-0-and-more" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/star-messages-gateway-2-0-and-more
          </a>{' '}
          — {lang === 'uz' ? 'Star Messages va sovg\'alar haqida e\'lon' : 'анонс Star Messages и подарков'}
        </li>
        <li>
          <a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/tos/stars
          </a>{' '}
          — {lang === 'uz' ? 'foydalanish shartlari' : 'условия использования'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Telegram Stars — bu nima?</h2>
      <p>
        Telegram Stars (yulduzchalar, ⭐) — Telegram&apos;ning rasmiy ichki raqamli valyutasi. Ular Telegram tomonidan
        2024-yilda joriy etilgan va shu vaqtdan beri ekosistema bo&apos;ylab kengayib bormoqda. Stars Telegram&apos;ning
        rasmiy hujjatiga ko&apos;ra, &quot;raqamli mahsulot va xizmatlar uchun to&apos;lov birligi&quot; sifatida
        belgilangan.
      </p>
      <p>
        Eng muhim xususiyat — Stars <strong>akkauntga bog&apos;langan</strong>. Ular boshqa Telegram foydalanuvchisiga
        sovg&apos;a yoki reaktsiya orqali yuborilishi mumkin, ammo Telegram&apos;dan tashqariga (boshqa to&apos;lov
        tizimi yoki kriptovalyutaga) chiqarib bo&apos;lmaydi.
      </p>

      <h2 id="nima-uchun">Stars nima uchun kerak? — 7 ta asosiy ishlatish</h2>
      <p>
        Stars Telegram ekotizimi ichida bir nechta funksiyaga xizmat qiladi. Quyida har biri qanday ishlatilishi
        haqida qisqa ma&apos;lumot:
      </p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        <UseCaseCard
          emoji="🤖"
          title="Bot va mini-app to'lovlari"
          body="Stars'lar bilan bot orqali raqamli mahsulot sotib olish mumkin: kursllar, e-kitoblar, o'yinlardagi
          ichki narsalar, mini-applardagi xizmatlar."
        />
        <UseCaseCard
          emoji="🎁"
          title="Sovg'a (Gifts) yuborish"
          body="Boshqa Telegram foydalanuvchisiga sovg'a yuborish mumkin. Qabul qilgan odam uni profilda ko'rsatadi
          yoki Stars'ga qaytaradi."
        />
        <UseCaseCard
          emoji="⭐"
          title="Premium obunani sovg'a qilish"
          body="Stars yordamida boshqa odamga Telegram Premium obunani sovg'a sifatida yuborish — tug'ilgan kun,
          bayram uchun mos."
        />
        <UseCaseCard
          emoji="✉️"
          title="Paid messages (pulli xabarlar)"
          body="Kontaktda bo'lmagan foydalanuvchilardan keladigan xabarlar uchun narx belgilash mumkin — faqat sizning
          vaqtingizni qadrlaydiganlar yozadi."
        />
        <UseCaseCard
          emoji="😀"
          title="Premium emoji va Star Reactions"
          body="Maxsus emoji'lar, animatsiyali reaktsiyalar — yozishmada va kanallarda ishlatish uchun. Star Reaction
          esa muallifga to'g'ridan-to'g'ri Stars beradi."
        />
        <UseCaseCard
          emoji="📺"
          title="Paid media (pulli kontent)"
          body="Kanallar va biznes akkauntlari Stars yordamida pulli kontent (post, video, fayl) sotishi mumkin —
          obuna sxemasi ham mavjud."
        />
        <UseCaseCard
          emoji="💼"
          title="Kreatorlar uchun monetizatsiya"
          body="Star Reactions, Paid messages va paid media orqali olingan Stars'larni Fragment platformasida
          (Telegram'ning rasmiy hamkori) qaytarib pul qilish mumkin."
        />
      </div>

      <h2 id="qanday-ishlaydi">Stars qanday ishlaydi?</h2>
      <p>
        Stars sof Telegram ichida ishlaydigan virtual hisob-kitob birligi. Quyidagi qoidalar Telegram&apos;ning rasmiy
        ToS&apos;ida belgilangan:
      </p>
      <ul>
        <li>
          <strong>Akkauntga bog&apos;liq:</strong> balans Telegram akkauntingizga biriktirilgan. Akkaunt o&apos;chirilsa
          yoki kirish yo&apos;qolsa, Stars qaytarilmaydi.
        </li>
        <li>
          <strong>Final sale:</strong> Stars sotib olingach Telegram tomonidan qaytarib berilmaydi.
        </li>
        <li>
          <strong>Faqat Telegram ichida:</strong> ekosistema tashqarisidagi to&apos;lov tizimlariga o&apos;tkazib
          bo&apos;lmaydi (kreatorlar uchun Fragment istisno).
        </li>
        <li>
          <strong>Yagona valyuta:</strong> Stars bilan amalga oshiriladigan barcha xaridlar (gifts, paid media,
          subscriptions) bir xil birlikda hisoblanadi.
        </li>
      </ul>

      <h2 id="vs-pul">Stars vs oddiy pul — farqi nimada?</h2>
      <p>
        Stars ko&apos;p jihatdan oddiy pulga o&apos;xshasada, ekosistema ichida xizmat qilish uchun mo&apos;ljallangan
        va shu sababli muhim cheklovlari bor:
      </p>
      <ComparisonTable lang="uz" />

      <h2 id="qayerdan">Stars qayerdan olinadi?</h2>
      <p>
        Stars sotib olishning ikki rasmiy yo&apos;li bor: Telegram ilovasi orqali (Apple/Google to&apos;lov tizimlari
        — xorijiy karta talab etadi) yoki vositachi bot orqali mahalliy karta bilan. O&apos;zbekistondan UzCard,
        Humo, Click yoki Payme bilan sotib olish uchun{' '}
        <Link
          href="/uz/blog/telegram-stars-ozbekistondan-sotib-olish"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          to&apos;liq qo&apos;llanmamizda
        </Link>{' '}
        qadamlar yozilgan.
      </p>
      <p>
        Joriy narxlar va paketlar —{' '}
        <Link href="/uz/stars" className="font-semibold text-[var(--primary)] hover:underline">
          Stars sahifasida
        </Link>
        . Eng kichik paket 50 ta yulduzcha; ommabop paketlar — 500, 1000, 2500.
      </p>

      <h2 id="bilish-kerak">Stars haqida bilish kerak bo&apos;lgan eslatmalar</h2>
      <ul>
        <li>
          <strong>Yo&apos;qotish riski:</strong> agar siz akkauntingizdan kirishni yo&apos;qotsangiz yoki
          o&apos;chirsangiz, Stars balansi qaytarilmaydi. Akkauntning xavfsizligini ta&apos;minlash zarur (ikki
          bosqichli tasdiqlash, kuchli parol).
        </li>
        <li>
          <strong>Yosh chegarasi:</strong> Telegram&apos;ning rasmiy shartlariga ko&apos;ra, Stars sotib olishda yosh
          chegarasi bor. Siz yashayotgan davlat qonunchiligiga ham bog&apos;liq.
        </li>
        <li>
          <strong>Refundlar:</strong> Stars va ular orqali sotib olingan mahsulotlar uchun refund Telegram tomonidan
          taqdim etilmaydi — bu rasmiy ToS shartidir. Bot xato qilsa, vositachi xizmat (masalan{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">
            {siteConfig.bot}
          </a>
          ) o&apos;z navbatida pul qaytarishi mumkin.
        </li>
        <li>
          <strong>Vaqt chegarasi yo&apos;q:</strong> Stars vaqt o&apos;tishi bilan kuyib ketmaydi. Akkaunt faol
          turguncha balansda saqlanadi.
        </li>
      </ul>

      <Sources lang="uz" />
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Telegram Stars?</h2>
      <p>
        Telegram Stars (звёзды, ⭐) — официальная внутренняя цифровая валюта Telegram. Stars введены Telegram в 2024 году
        и с тех пор расширяются по всей экосистеме. По официальной документации Telegram, Stars — это &quot;единица
        оплаты цифровых товаров и услуг&quot;.
      </p>
      <p>
        Главная особенность — Stars <strong>привязаны к аккаунту</strong>. Их можно отправить другому пользователю
        Telegram через подарок или реакцию, но нельзя вывести за пределы Telegram (на банковскую карту, в крипту
        и т.п.).
      </p>

      <h2 id="nima-uchun">Зачем нужны Stars? — 7 основных применений</h2>
      <p>Stars выполняют несколько функций внутри экосистемы Telegram. Краткий обзор каждой:</p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        <UseCaseCard
          emoji="🤖"
          title="Оплата в ботах и mini-app"
          body="Через Stars в ботах покупают цифровые товары: курсы, e-книги, внутриигровые предметы, услуги в mini-app."
        />
        <UseCaseCard
          emoji="🎁"
          title="Отправка подарков (Gifts)"
          body="Подарок другому пользователю Telegram. Получатель показывает его в профиле или конвертирует обратно в Stars."
        />
        <UseCaseCard
          emoji="⭐"
          title="Подписка Premium в подарок"
          body="Через Stars можно подарить кому-то Telegram Premium — на день рождения, праздник, в качестве благодарности."
        />
        <UseCaseCard
          emoji="✉️"
          title="Paid messages (платные сообщения)"
          body="Можно установить плату за сообщения от пользователей не из контактов — пишут только те, кто действительно ценит ваше время."
        />
        <UseCaseCard
          emoji="😀"
          title="Премиум-эмодзи и Star Reactions"
          body="Эксклюзивные эмодзи, анимированные реакции в чатах и каналах. Star Reaction передаёт автору поста реальные Stars."
        />
        <UseCaseCard
          emoji="📺"
          title="Paid media (платный контент)"
          body="Каналы и бизнес-аккаунты могут продавать через Stars платный контент (посты, видео, файлы), есть и подписочная модель."
        />
        <UseCaseCard
          emoji="💼"
          title="Монетизация для авторов"
          body="Stars, заработанные через Star Reactions, paid messages и paid media, можно вывести через Fragment — официального партнёра Telegram."
        />
      </div>

      <h2 id="qanday-ishlaydi">Как работают Stars?</h2>
      <p>
        Stars — виртуальная расчётная единица, действующая исключительно внутри Telegram. Правила установлены в
        официальном ToS Telegram:
      </p>
      <ul>
        <li>
          <strong>Привязка к аккаунту:</strong> баланс закреплён за вашим Telegram-аккаунтом. При удалении или потере
          доступа Stars не возвращаются.
        </li>
        <li>
          <strong>Final sale:</strong> после покупки Telegram не возвращает Stars.
        </li>
        <li>
          <strong>Только внутри Telegram:</strong> Stars нельзя вывести во внешние платёжные системы (исключение —
          вывод через Fragment для создателей).
        </li>
        <li>
          <strong>Единая валюта:</strong> все покупки через Stars (gifts, paid media, subscriptions) считаются в
          одной единице.
        </li>
      </ul>

      <h2 id="vs-pul">Stars vs обычные деньги — в чём разница?</h2>
      <p>
        Stars во многом похожи на обычные деньги, но созданы для работы внутри экосистемы — отсюда важные ограничения:
      </p>
      <ComparisonTable lang="ru" />

      <h2 id="qayerdan">Откуда берутся Stars?</h2>
      <p>
        Купить Stars можно двумя официальными способами: через приложение Telegram (Apple/Google Pay — нужна
        зарубежная карта) или через бот-посредник с локальной картой. Для покупки из Узбекистана через UzCard, Humo,
        Click или Payme шаги описаны{' '}
        <Link
          href="/ru/blog/telegram-stars-ozbekistondan-sotib-olish"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          в нашем подробном руководстве
        </Link>
        .
      </p>
      <p>
        Актуальные цены и пакеты —{' '}
        <Link href="/ru/stars" className="font-semibold text-[var(--primary)] hover:underline">
          на странице Stars
        </Link>
        . Минимальный пакет — 50 звёзд; популярные пакеты — 500, 1000, 2500.
      </p>

      <h2 id="bilish-kerak">Что важно знать про Stars</h2>
      <ul>
        <li>
          <strong>Риск потери:</strong> при потере доступа или удалении аккаунта баланс Stars не возвращается.
          Защитите аккаунт (двухфакторная аутентификация, надёжный пароль).
        </li>
        <li>
          <strong>Возрастные ограничения:</strong> по официальным условиям Telegram при покупке Stars действуют
          возрастные ограничения. Также влияет законодательство страны проживания.
        </li>
        <li>
          <strong>Возвраты:</strong> Telegram не возвращает Stars и купленные через них товары — это условие
          официального ToS. При сбое посредник (например{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">
            {siteConfig.bot}
          </a>
          ) может вернуть оплату со своей стороны.
        </li>
        <li>
          <strong>Без срока действия:</strong> Stars не сгорают со временем. Пока аккаунт активен, баланс сохраняется.
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
  type: 'info',
  locales: {
    uz: {
      title: 'Telegram Stars nima va nima uchun kerak — 7 ta asosiy ishlatish',
      description:
        "Telegram Stars (yulduzchalar) — Telegram ichidagi rasmiy raqamli valyuta. Bot to'lovlari, sovg'alar, Premium hadya, paid messages, Premium emoji va kreator monetizatsiyasi uchun.",
      metaTitle: 'Telegram Stars nima va nima uchun kerak — to\'liq tushuntirish',
      metaDescription:
        "Telegram Stars (yulduzchalar) qanday valyuta va qayerda ishlatiladi: 7 ta asosiy ishlatish, qoidalar, oddiy puldan farqi va sotib olish yo'llari.",
      ogDescription:
        "Telegram Stars nima — qanday ishlaydi, qayerda ishlatiladi, oddiy puldan farqi.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Telegram Stars — bu pulning bir turi mi?',
          answer:
            "Stars — virtual hisob-kitob birligi, faqat Telegram ekosistemasi ichida ishlaydi. Boshqa to'lov tizimlari yoki kriptovalyutaga o'tkazib bo'lmaydi. Texnik jihatdan u Telegram'ning ichki valyutasi.",
        },
        {
          question: "Stars'larni boshqa odamga jo'natib bo'ladimi?",
          answer:
            "Ha — Telegram username orqali sovg'a sifatida yoki Star Reaction sifatida yuborish mumkin. Lekin to'g'ridan-to'g'ri pul ko'rinishida o'tkazib bo'lmaydi.",
        },
        {
          question: 'Stars vaqt o\'tishi bilan kuyib ketadimi?',
          answer:
            "Yo'q. Stars muddatsiz — akkauntingiz faol turguncha balansda qoladi. Lekin akkaunt o'chirilsa, balans yo'qoladi.",
        },
        {
          question: "Stars'ni pulga aylantirish mumkinmi?",
          answer:
            "Oddiy foydalanuvchi sotib olgan Stars'larni qaytarib pulga aylantirib bo'lmaydi. Faqat kreatorlar — Star Reactions, Paid messages, Paid media orqali ishlab topgan Stars'larni Fragment orqali pulga chiqarishi mumkin.",
        },
        {
          question: "Stars qancha turadi?",
          answer:
            "Telegram tomonidan rasmiy narx — bir Stars taxminan 0.013 USD atrofida (paket hajmiga qarab biroz farq qiladi). O'zbekistonda mahalliy karta bilan sotib olishda narx so'mga konvertatsiya qilinadi — joriy narxlar Stars sahifasida ko'rsatilgan.",
        },
        {
          question: 'Stars sotib olish xavfsizmi?',
          answer:
            "Stars Telegram tomonidan to'g'ridan-to'g'ri akkauntga biriktiriladi — vositachi bot faqat to'lov vositasi bo'ladi. @username kiritish parol bermaganidan akkaunt xavfsiz qoladi.",
        },
        {
          question: 'Stars Telegram Premium bilan bir xil narsami?',
          answer:
            "Yo'q. Premium — bu obuna (oylik xizmat). Stars — bu valyuta (har gal sarflash uchun). Lekin Stars yordamida boshqa odamga Premium obunani sovg'a qilish mumkin.",
        },
      ],
      finalCtaHeading: "Stars sotib olishni xohlaysizmi?",
      finalCtaBody:
        "Botga kirib, kerakli miqdorni mahalliy karta bilan to'lang. Stars to'lov tasdiqlangach akkauntga avtomatik biriktiriladi.",
    },
    ru: {
      title: 'Что такое Telegram Stars и зачем они нужны — 7 основных применений',
      description:
        'Telegram Stars (звёзды) — официальная внутренняя цифровая валюта Telegram. Используются для оплаты в ботах, подарков, дарения Premium, paid messages, премиум-эмодзи и монетизации авторов.',
      metaTitle: 'Что такое Telegram Stars и зачем они нужны — полное объяснение',
      metaDescription:
        'Что за валюта Telegram Stars и где они используются: 7 основных применений, правила, отличия от обычных денег и способы покупки.',
      ogDescription: 'Telegram Stars — что это, как работает, чем отличается от обычных денег.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Telegram Stars — это разновидность денег?',
          answer:
            'Stars — виртуальная расчётная единица, работающая только внутри экосистемы Telegram. Их нельзя перевести в другие платёжные системы или крипту. Технически — это внутренняя валюта Telegram.',
        },
        {
          question: 'Можно ли отправить Stars другому человеку?',
          answer:
            'Да — через Telegram username как подарок или Star Reaction. Но напрямую в виде денег перевести нельзя.',
        },
        {
          question: 'Stars сгорают со временем?',
          answer:
            'Нет. Stars без срока — пока ваш аккаунт активен, баланс сохраняется. Но при удалении аккаунта баланс пропадает.',
        },
        {
          question: 'Можно ли обналичить Stars?',
          answer:
            'Обычный пользователь не может обналичить купленные Stars. Только авторы — Stars, заработанные через Star Reactions, Paid messages, Paid media, можно вывести через Fragment.',
        },
        {
          question: 'Сколько стоят Stars?',
          answer:
            'По официальной цене Telegram одна звезда стоит около 0.013 USD (немного зависит от размера пакета). При покупке локальной картой в Узбекистане цена конвертируется в сум — актуальные цены на странице Stars.',
        },
        {
          question: 'Безопасно ли покупать Stars?',
          answer:
            'Stars зачисляются на аккаунт напрямую от Telegram — бот-посредник выступает только средством оплаты. При вводе @username пароль не требуется, поэтому аккаунт остаётся в безопасности.',
        },
        {
          question: 'Stars и Telegram Premium — это одно и то же?',
          answer:
            'Нет. Premium — это подписка (ежемесячный сервис). Stars — это валюта (тратится за каждое действие). Но через Stars можно подарить кому-то подписку Premium.',
        },
      ],
      finalCtaHeading: 'Хотите купить Stars?',
      finalCtaBody:
        'Зайдите в бот, оплатите нужное количество локальной картой. Stars зачислятся на аккаунт автоматически после подтверждения оплаты.',
    },
  },
}
