import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-bilan-nima-qilish-mumkin'
const TODAY = '2026-06-05'

function UzAnswerBox() {
  return (
    <p>
      Telegram Stars bilan: boshqa odamga sovg&apos;a (oddiy va kolleksion) yuborish va sovg&apos;a
      marketplace&apos;ida ularni sotib olish/sotish, Telegram Premium obunani hadya qilish, kreatorga Star Reaction
      berish, bot/o&apos;yin/Mini App ichida xarid qilish, pulli xabarlar (Star Messages) uchun to&apos;lov olish va
      kanalga Suggested Post taklif qilish mumkin. Kreatorlar topgan Stars&apos;ni Fragment orqali pulga aylantiradi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      С Telegram Stars можно: отправлять подарки другим (обычные и коллекционные) и покупать/продавать их на
      маркетплейсе подарков, дарить подписку Telegram Premium, отправлять Star Reaction автору, оплачивать покупки в
      ботах/играх/Mini App, получать оплату за платные сообщения (Star Messages) и предлагать каналу Suggested Post.
      Заработанные Stars авторы выводят через Fragment.
    </p>
  )
}

function ActionCard({
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

function CanCannotTable({ lang }: { lang: 'uz' | 'ru' }) {
  const headers = lang === 'uz' ? ['Qila olasiz ✅', 'Qila olmaysiz ❌'] : ['Можно ✅', 'Нельзя ❌']
  const rows =
    lang === 'uz'
      ? [
          ['Sovg\'a yuborish va marketplace\'da sotib olish', 'Stars\'ni to\'g\'ridan-to\'g\'ri bank kartasiga yechish'],
          ['Premium obunani hadya qilish', 'Boshqa odamga Stars\'ni naqd pul sifatida o\'tkazish'],
          ['Bot va Mini App ichida xarid qilish', 'Telegram\'dan tashqarida ishlatish'],
          ['Star Reaction bilan kreatorni qo\'llash', 'Sotib olgandan keyin Telegram\'dan refund olish'],
          ['Pulli xabar olish (Star Messages)', 'Akkaunt o\'chsa balansni qaytarish'],
        ]
      : [
          ['Отправлять подарки и покупать на маркетплейсе', 'Вывести Stars напрямую на банковскую карту'],
          ['Дарить подписку Premium', 'Перевести Stars другому как наличные деньги'],
          ['Покупать в ботах и Mini App', 'Использовать вне Telegram'],
          ['Поддержать автора через Star Reaction', 'Получить refund от Telegram после покупки'],
          ['Получать платные сообщения (Star Messages)', 'Вернуть баланс при удалении аккаунта'],
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
                <td key={j} className="px-4 py-2">
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
          <a href="https://telegram.org/blog/gift-marketplace-and-more" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/gift-marketplace-and-more
          </a>{' '}
          — {lang === 'uz' ? "sovg'a marketplace e'loni" : 'анонс маркетплейса подарков'}
        </li>
        <li>
          <a href="https://telegram.org/blog/collectible-gifts-and-more" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/collectible-gifts-and-more
          </a>{' '}
          — {lang === 'uz' ? 'kolleksion sovg&apos;alar' : 'коллекционные подарки'}
        </li>
        <li>
          <a href="https://telegram.org/blog/star-messages-gateway-2-0-and-more" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/star-messages-gateway-2-0-and-more
          </a>{' '}
          — {lang === 'uz' ? 'Star Messages (pulli xabarlar)' : 'Star Messages (платные сообщения)'}
        </li>
        <li>
          <a href="https://telegram.org/blog/checklists-suggested-posts" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/checklists-suggested-posts
          </a>{' '}
          — {lang === 'uz' ? 'Suggested Posts' : 'Suggested Posts'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/gifts" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/gifts
          </a>{' '}
          — {lang === 'uz' ? 'texnik hujjat' : 'техническая документация'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <p>
        Telegram Stars (yulduzchalar, ⭐) — Telegram ichidagi rasmiy raqamli valyuta. Agar Stars umuman nima ekanligini
        bilmoqchi bo&apos;lsangiz, avval{' '}
        <Link href="/blog/telegram-stars-nima" className="font-semibold text-[var(--primary)] hover:underline">
          &laquo;Telegram Stars nima&raquo;
        </Link>{' '}
        maqolasini o&apos;qing. Bu yerda esa amaliy savolga javob beramiz: <strong>Stars bilan aniq nima qilish
        mumkin</strong> — har bir imkoniyatni qanday bajarish bilan birga.
      </p>

      <h2 id="sovga">1. Sovg&apos;a (Gifts) yuborish va marketplace</h2>
      <p>
        Bu 2025-2026 yildagi eng katta yo&apos;nalish. Stars yordamida boshqa Telegram foydalanuvchisiga{' '}
        <strong>sovg&apos;a</strong> yuborishingiz mumkin — profilda ko&apos;rinadigan animatsiyali narsa. Qabul qilgan
        odam uni profilida saqlaydi yoki Stars&apos;ga qaytaradi.
      </p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        <ActionCard
          emoji="🎁"
          title="Oddiy sovg'a"
          body="Suhbat oynasidagi sovg'a tugmasi orqali yuborasiz. Narxi sovg'a turiga qarab farq qiladi — arzonidan
          tortib noyob/qimmatigacha."
        />
        <ActionCard
          emoji="💎"
          title="Kolleksion (collectible) sovg'a"
          body="Olingan sovg'ani kichik miqdordagi Stars evaziga 'upgrade' qilib, noyob ko'rinish, fon va raqam beruvchi
          kolleksion narsaga aylantirasiz — har biri yagona."
        />
        <ActionCard
          emoji="🛒"
          title="Sovg'a marketplace"
          body="Telegram ichidagi rasmiy bozorda boshqa foydalanuvchilardan noyob sovg'alarni Stars bilan sotib olasiz
          yoki o'zingiznikini sotib, yangisi uchun Stars topasiz."
        />
        <ActionCard
          emoji="🔁"
          title="Almashish va o'tkazish"
          body="Kolleksion sovg'alar boshqa foydalanuvchiga o'tkazilishi yoki TON blokcheyni orqali tashqi NFT bozorlarida
          sotilishi mumkin."
        />
      </div>
      <p>
        Marketplace&apos;dagi barcha amallar (sotib olish, sotish, narx qo&apos;yish) Stars orqali amalga oshiriladi.
        Kolleksion sovg&apos;ani upgrade qilish blokcheyn to&apos;lovini qoplash uchun ozgina Stars talab qiladi.
      </p>

      <InlineBotCTA lang="uz" text="Sovg'a yoki upgrade uchun Stars kerakmi? Botda o'zbek karta bilan oling." />

      <h2 id="premium-hadya">2. Telegram Premium obunani hadya qilish</h2>
      <p>
        Stars balansidan foydalanib, boshqa odamga <strong>Telegram Premium</strong> obunani sovg&apos;a sifatida
        yuborishingiz mumkin — tug&apos;ilgan kun yoki bayram uchun mos. Qadamlar va paketlar haqida{' '}
        <Link
          href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          alohida qo&apos;llanmamizda
        </Link>{' '}
        batafsil yozilgan.
      </p>

      <h2 id="star-reaction">3. Star Reaction — kreatorni qo&apos;llab-quvvatlash</h2>
      <p>
        Yoqgan post ostiga oddiy reaktsiya emas, <strong>Star Reaction</strong> qo&apos;yishingiz mumkin — bu post
        muallifiga to&apos;g&apos;ridan-to&apos;g&apos;ri Stars yuboradi. Bu kanal va kreatorlarni moliyaviy
        qo&apos;llashning sodda usuli: bir bosishda muallif real Stars oladi.
      </p>

      <h2 id="bot-mini-app">4. Bot, o&apos;yin va Mini App ichida xarid</h2>
      <p>
        Stars — Telegram ekotizimidagi universal to&apos;lov birligi. Botlar va Mini App&apos;larda raqamli mahsulot
        sotib olasiz: kurslar, e-kitoblar, obunalar, o&apos;yinlardagi ichki narsalar va xizmatlar. To&apos;lov
        Telegram&apos;ning o&apos;zida, ortiqcha karta kiritmasdan kechadi.
      </p>

      <InlineBotCTA lang="uz" text="Bot ichidagi xaridlar uchun balansni to'ldiring." />

      <h2 id="paid-messages">5. Pulli xabarlar (Star Messages)</h2>
      <p>
        Bu yerda Stars sizga <strong>daromad keltiradi</strong>, sarflamaydi. Kontaktda bo&apos;lmagan
        foydalanuvchilardan keladigan xabar uchun narx belgilashingiz mumkin — shunda faqat vaqtingizni qadrlaydiganlar
        yozadi.
      </p>
      <ul>
        <li>
          Shaxsiy chatda: <strong>Settings → Privacy and Security → Messages</strong> bo&apos;limidan yoqiladi (Telegram
          Premium talab qilinadi).
        </li>
        <li>
          Guruhda: a&apos;zolar uchun <strong>&laquo;Charge Stars for Messages&raquo;</strong> ruxsatini yoqasiz.
        </li>
        <li>
          Xohlasangiz, har bir xabar uchun olingan Stars&apos;ni bir bosishda qaytarib yuborishingiz (refund)
          mumkin.
        </li>
      </ul>

      <h2 id="suggested-posts">6. Suggested Posts — kanalga taklif</h2>
      <p>
        2025-yil 1-iyuldan boshlab Stars (yoki Toncoin) yordamida kanalga <strong>tayyor post taklif qilish</strong>
        mumkin: siz egasiga to&apos;lov taklif qilasiz, post chiqqach hisob-kitob amalga oshadi. Bu reklama va
        homiylik kontentini Telegram ichida, firibgarliksiz tashkil qilishning rasmiy yo&apos;li.
      </p>

      <h2 id="monetizatsiya">7. Kreator bo&apos;lsangiz: Stars&apos;ni pulga aylantirish</h2>
      <p>
        Star Reactions, pulli xabarlar, pulli media va sovg&apos;alar orqali <strong>ishlab topilgan</strong>{' '}
        Stars&apos;ni Telegram&apos;ning rasmiy hamkori <strong>Fragment</strong> platformasi orqali pulga
        chiqarishingiz mumkin. Diqqat: bu faqat ishlab topilgan Stars&apos;ga tegishli — siz <em>sotib olgan</em> Stars
        qaytarib pulga aylantirilmaydi.
      </p>

      <h2 id="cheklovlar">Stars bilan nima qila OLMAYSIZ</h2>
      <p>
        Halol bo&apos;lish uchun cheklovlarni ham aytamiz. Stars ekotizim ichida ishlash uchun yaratilgan, shuning
        uchun bir nechta muhim qoidasi bor:
      </p>
      <CanCannotTable lang="uz" />

      <h2 id="qayerdan">Stars qayerdan olinadi?</h2>
      <p>
        Stars sotib olishning ikki yo&apos;li bor: Telegram ilovasi orqali (Apple/Google to&apos;lovi — xorijiy karta
        kerak) yoki vositachi bot orqali mahalliy karta bilan. O&apos;zbekistondan UzCard, Humo, Click yoki Payme bilan
        sotib olish uchun{' '}
        <Link
          href="/blog/telegram-stars-ozbekistondan-sotib-olish"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          to&apos;liq qo&apos;llanmamizga
        </Link>{' '}
        qarang. Joriy narxlar va paketlar —{' '}
        <Link href="/stars" className="font-semibold text-[var(--primary)] hover:underline">
          Stars sahifasida
        </Link>
        .
      </p>

      <InlineBotCTA lang="uz" text="Eng kichik paket — 50 ta yulduzcha. Botda buyurtma bering." />

      <Sources lang="uz" />
    </>
  )
}

function RuBody() {
  return (
    <>
      <p>
        Telegram Stars (звёзды, ⭐) — официальная цифровая валюта внутри Telegram. Если вы вообще не знаете, что такое
        Stars, сначала прочитайте статью{' '}
        <Link href="/ru/blog/telegram-stars-nima" className="font-semibold text-[var(--primary)] hover:underline">
          &laquo;Что такое Telegram Stars&raquo;
        </Link>
        . А здесь отвечаем на практический вопрос: <strong>что конкретно можно делать со Stars</strong> — с инструкцией
        по каждой возможности.
      </p>

      <h2 id="sovga">1. Подарки (Gifts) и маркетплейс</h2>
      <p>
        Это главное направление 2025-2026 годов. Через Stars вы можете отправить другому пользователю Telegram{' '}
        <strong>подарок</strong> — анимированный предмет, который виден в профиле. Получатель оставляет его у себя или
        конвертирует обратно в Stars.
      </p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        <ActionCard
          emoji="🎁"
          title="Обычный подарок"
          body="Отправляется через кнопку подарка в чате. Цена зависит от типа подарка — от недорогих до редких и
          дорогих."
        />
        <ActionCard
          emoji="💎"
          title="Коллекционный подарок"
          body="Полученный подарок можно за небольшое количество Stars 'upgrade' до коллекционного — с уникальным видом,
          фоном и номером. Каждый экземпляр уникален."
        />
        <ActionCard
          emoji="🛒"
          title="Маркетплейс подарков"
          body="На официальном внутреннем рынке вы покупаете редкие подарки у других за Stars или продаёте свои, чтобы
          заработать Stars на новые."
        />
        <ActionCard
          emoji="🔁"
          title="Обмен и передача"
          body="Коллекционные подарки можно передать другому пользователю или продать на внешних NFT-площадках через
          блокчейн TON."
        />
      </div>
      <p>
        Все операции на маркетплейсе (покупка, продажа, установка цены) проходят через Stars. Upgrade коллекционного
        подарка требует немного Stars для покрытия блокчейн-комиссии.
      </p>

      <InlineBotCTA lang="ru" text="Нужны Stars для подарка или upgrade? Купите в боте локальной картой." />

      <h2 id="premium-hadya">2. Подарить подписку Telegram Premium</h2>
      <p>
        Используя баланс Stars, можно подарить кому-то <strong>Telegram Premium</strong> — на день рождения или
        праздник. Шаги и пакеты подробно описаны в{' '}
        <Link
          href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          отдельном руководстве
        </Link>
        .
      </p>

      <h2 id="star-reaction">3. Star Reaction — поддержка автора</h2>
      <p>
        Под понравившимся постом можно поставить не обычную реакцию, а <strong>Star Reaction</strong> — она отправляет
        автору поста реальные Stars напрямую. Это простой способ финансово поддержать каналы и авторов: одно нажатие — и
        автор получает Stars.
      </p>

      <h2 id="bot-mini-app">4. Покупки в ботах, играх и Mini App</h2>
      <p>
        Stars — универсальная единица оплаты в экосистеме Telegram. В ботах и Mini App вы покупаете цифровые товары:
        курсы, e-книги, подписки, внутриигровые предметы и услуги. Оплата проходит внутри самого Telegram, без ввода
        карты.
      </p>

      <InlineBotCTA lang="ru" text="Пополните баланс для покупок внутри ботов." />

      <h2 id="paid-messages">5. Платные сообщения (Star Messages)</h2>
      <p>
        Здесь Stars <strong>приносят вам доход</strong>, а не тратятся. Можно установить плату за сообщения от
        пользователей не из контактов — тогда пишут только те, кто ценит ваше время.
      </p>
      <ul>
        <li>
          В личных чатах: включается в <strong>Settings → Privacy and Security → Messages</strong> (нужен Telegram
          Premium).
        </li>
        <li>
          В группах: включаете разрешение <strong>&laquo;Charge Stars for Messages&raquo;</strong> для участников.
        </li>
        <li>При желании полученные за сообщение Stars можно вернуть (refund) одним нажатием.</li>
      </ul>

      <h2 id="suggested-posts">6. Suggested Posts — предложение каналу</h2>
      <p>
        С 1 июля 2025 года через Stars (или Toncoin) можно <strong>предложить каналу готовый пост</strong>: вы
        предлагаете владельцу оплату, а расчёт проходит после публикации. Это официальный способ организовать рекламу и
        спонсорский контент внутри Telegram, защищённый от мошенничества.
      </p>

      <h2 id="monetizatsiya">7. Если вы автор: вывод Stars в деньги</h2>
      <p>
        <strong>Заработанные</strong> через Star Reactions, платные сообщения, платный контент и подарки Stars можно
        вывести в деньги через официального партнёра Telegram — платформу <strong>Fragment</strong>. Важно: это касается
        только заработанных Stars — <em>купленные</em> вами Stars обналичить нельзя.
      </p>

      <h2 id="cheklovlar">Что со Stars сделать НЕЛЬЗЯ</h2>
      <p>
        Будем честны и про ограничения. Stars созданы для работы внутри экосистемы, поэтому у них есть несколько важных
        правил:
      </p>
      <CanCannotTable lang="ru" />

      <h2 id="qayerdan">Откуда берутся Stars?</h2>
      <p>
        Купить Stars можно двумя способами: через приложение Telegram (Apple/Google Pay — нужна зарубежная карта) или
        через бот-посредник локальной картой. Для покупки из Узбекистана через UzCard, Humo, Click или Payme смотрите{' '}
        <Link
          href="/ru/blog/telegram-stars-ozbekistondan-sotib-olish"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          наше подробное руководство
        </Link>
        . Актуальные цены и пакеты —{' '}
        <Link href="/ru/stars" className="font-semibold text-[var(--primary)] hover:underline">
          на странице Stars
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="Минимальный пакет — 50 звёзд. Оформите заказ в боте." />

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
      title: 'Telegram Stars bilan nima qilish mumkin — barcha imkoniyatlar',
      description:
        "Telegram Stars bilan nima qilish mumkin: sovg'alar va marketplace, Premium hadya, Star Reaction, bot xaridlari, pulli xabarlar, Suggested Posts va Stars'ni pulga aylantirish.",
      metaTitle: "Telegram Stars bilan nima qilish mumkin — 7 ta amaliy imkoniyat",
      metaDescription:
        "Telegram Stars bilan aniq nima qilish mumkin: sovg'a yuborish va marketplace, Premium hadya, Star Reaction, bot/Mini App xaridlari, pulli xabarlar va kreator monetizatsiyasi.",
      ogDescription:
        "Telegram Stars bilan nima qilish mumkin — sovg'alar, marketplace, Premium hadya, pulli xabarlar va boshqalar.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Telegram Stars bilan eng ko\'p nima qilinadi?',
          answer:
            "2025-2026 yilda eng ommabop yo'nalish — sovg'alar: oddiy sovg'a yuborish, uni kolleksion (collectible) sovg'aga upgrade qilish va sovg'a marketplace'da Stars bilan sotib olish/sotish.",
        },
        {
          question: 'Stars bilan Telegram Premium sotib olsa bo\'ladimi?',
          answer:
            "Ha — Stars balansidan boshqa odamga Premium obunani hadya qilish mumkin. O'zingizga ham bot orqali Premium olishingiz mumkin; bu uchun alohida qo'llanmalarimiz bor.",
        },
        {
          question: 'Star Reaction nima va u qanday ishlaydi?',
          answer:
            "Star Reaction — post ostiga qo'yiladigan pulli reaktsiya. Bir bosishda u post muallifiga real Stars yuboradi. Bu kanal va kreatorlarni qo'llab-quvvatlashning sodda usuli.",
        },
        {
          question: 'Pulli xabar (Star Messages) qanday yoqiladi?',
          answer:
            "Shaxsiy chatda: Settings → Privacy and Security → Messages bo'limidan (Telegram Premium kerak). Guruhda: a'zolar uchun 'Charge Stars for Messages' ruxsatini yoqasiz. Olingan Stars'ni bir bosishda qaytarib ham yuborsa bo'ladi.",
        },
        {
          question: 'Sotib olgan Stars\'ni pulga aylantirsa bo\'ladimi?',
          answer:
            "Yo'q. Faqat ishlab topilgan Stars (Star Reactions, pulli xabarlar, pulli media, sovg'alar orqali) Fragment platformasi orqali pulga chiqariladi. Siz sotib olgan Stars qaytarib pulga aylantirilmaydi.",
        },
        {
          question: 'Stars\'ni to\'g\'ridan-to\'g\'ri boshqa odamga pul sifatida yuborsa bo\'ladimi?',
          answer:
            "Yo'q. Stars naqd pul sifatida o'tkazilmaydi. Lekin sovg'a yoki Star Reaction orqali boshqa foydalanuvchiga qiymat yuborish mumkin.",
        },
        {
          question: 'Kolleksion sovg\'a oddiy sovg\'adan nimasi bilan farq qiladi?',
          answer:
            "Kolleksion sovg'a — oddiy sovg'aning upgrade qilingan, noyob ko'rinish, fon va raqamga ega versiyasi. Uni boshqa foydalanuvchiga o'tkazish yoki TON orqali tashqi NFT bozorlarida sotish mumkin. Upgrade ozgina Stars talab qiladi.",
        },
      ],
      finalCtaHeading: 'Stars sotib olishni xohlaysizmi?',
      finalCtaBody:
        "Botga kirib, kerakli miqdorni mahalliy karta bilan to'lang. Stars to'lov tasdiqlangach akkauntga avtomatik biriktiriladi.",
    },
    ru: {
      title: 'Что можно делать с Telegram Stars — все возможности',
      description:
        'Что можно делать с Telegram Stars: подарки и маркетплейс, подарок Premium, Star Reaction, покупки в ботах, платные сообщения, Suggested Posts и вывод Stars в деньги.',
      metaTitle: 'Что можно делать с Telegram Stars — 7 практических возможностей',
      metaDescription:
        'Что конкретно можно делать с Telegram Stars: отправка подарков и маркетплейс, подарок Premium, Star Reaction, покупки в ботах/Mini App, платные сообщения и монетизация авторов.',
      ogDescription:
        'Что можно делать с Telegram Stars — подарки, маркетплейс, подарок Premium, платные сообщения и другое.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Что чаще всего делают с Telegram Stars?',
          answer:
            'В 2025-2026 самое популярное направление — подарки: отправка обычного подарка, его upgrade до коллекционного и покупка/продажа на маркетплейсе подарков за Stars.',
        },
        {
          question: 'Можно ли купить Telegram Premium за Stars?',
          answer:
            'Да — с баланса Stars можно подарить кому-то подписку Premium. Себе Premium тоже можно оформить через бот; об этом есть отдельные руководства.',
        },
        {
          question: 'Что такое Star Reaction и как она работает?',
          answer:
            'Star Reaction — платная реакция под постом. Одним нажатием она отправляет автору поста реальные Stars. Это простой способ поддержать каналы и авторов.',
        },
        {
          question: 'Как включить платные сообщения (Star Messages)?',
          answer:
            "В личных чатах: Settings → Privacy and Security → Messages (нужен Telegram Premium). В группах: включаете разрешение 'Charge Stars for Messages' для участников. Полученные Stars можно вернуть одним нажатием.",
        },
        {
          question: 'Можно ли обналичить купленные Stars?',
          answer:
            'Нет. Вывести через Fragment можно только заработанные Stars (через Star Reactions, платные сообщения, платный контент, подарки). Купленные вами Stars обналичить нельзя.',
        },
        {
          question: 'Можно ли перевести Stars другому человеку как деньги?',
          answer:
            'Нет. Stars не переводятся как наличные. Но можно отправить ценность другому пользователю через подарок или Star Reaction.',
        },
        {
          question: 'Чем коллекционный подарок отличается от обычного?',
          answer:
            'Коллекционный подарок — это upgrade обычного с уникальным видом, фоном и номером. Его можно передать другому пользователю или продать на внешних NFT-площадках через TON. Upgrade требует немного Stars.',
        },
      ],
      finalCtaHeading: 'Хотите купить Stars?',
      finalCtaBody:
        'Зайдите в бот, оплатите нужное количество локальной картой. Stars зачислятся на аккаунт автоматически после подтверждения оплаты.',
    },
  },
}
