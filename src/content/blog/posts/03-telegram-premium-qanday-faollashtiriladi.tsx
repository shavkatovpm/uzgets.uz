import Link from 'next/link'
import { siteConfig } from '@/config/site'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-qanday-faollashtiriladi'
const TODAY = '2026-05-06'

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium <strong>qo&apos;lda faollashtirish kerak emas</strong> — to&apos;lov tasdiqlanganidan so&apos;ng
      obuna ko&apos;rsatilgan akkauntga avtomatik biriktiriladi. Faol bo&apos;lganini tekshirish uchun: profil yonida ⭐
      belgisi paydo bo&apos;lishi yoki Sozlamalar &gt; Telegram Premium bo&apos;limiga kirib, muddatini ko&apos;rishingiz
      mumkin. Agar bir necha daqiqada faollashmasa, &quot;Faollashmasa&quot; bo&apos;limidagi tekshiruv ro&apos;yxatini
      ko&apos;ring.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Telegram Premium <strong>не нужно активировать вручную</strong> — после подтверждения оплаты подписка автоматически
      зачисляется на указанный аккаунт. Чтобы убедиться, что Premium активен: проверьте значок ⭐ рядом с именем профиля
      или зайдите в Настройки &gt; Telegram Premium и посмотрите срок. Если в течение нескольких минут активация не
      произошла — см. раздел &quot;Если не активировался&quot; ниже.
    </p>
  )
}

function ScenarioCard({
  num,
  title,
  body,
}: {
  num: number
  title: string
  body: React.ReactNode
}) {
  return (
    <div className="uz-card my-3 flex gap-4 rounded-xl border border-[var(--border)] p-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
        {num}
      </span>
      <div className="flex-1">
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{body}</div>
      </div>
    </div>
  )
}

function VerifyChecklist({ lang }: { lang: 'uz' | 'ru' }) {
  const items =
    lang === 'uz'
      ? [
          ['Profilda ⭐ belgisi', 'Ismingiz yonida yulduzcha paydo bo\'ladi (mobile va desktop ko\'rinishida).'],
          ['Sozlamalar > Telegram Premium', "Aniq muddat (kun va sana) ko'rsatilishi kerak — masalan \"30 may 2027 gacha\"."],
          ["4 GB fayl yuklash", "Chat'da fayl yuklab ko'ring — 2 GB chegarasi 4 GB gacha kengaygan bo'lishi kerak."],
          ['Reklamalar yo\'q', "Public kanallarda Telegram tomonidan ko'rsatiladigan reklama postlari ko'rinmaydi."],
          ['Premium emoji ishlaydi', "Yozishmada ⭐ belgili emoji palitrasidan tanlasangiz, oddiy emoji o'rniga premium emoji yuboriladi."],
        ]
      : [
          ['Значок ⭐ в профиле', 'Рядом с именем появится звёздочка (видно в мобильной и десктопной версии).'],
          ['Настройки > Telegram Premium', 'Должна показываться конкретная дата окончания — например, "до 30 мая 2027".'],
          ['Загрузка файлов до 4 ГБ', 'Попробуйте загрузить файл — лимит 2 ГБ должен быть расширен до 4 ГБ.'],
          ['Нет рекламы', 'В публичных каналах не показываются рекламные посты от Telegram.'],
          ['Премиум-эмодзи работают', 'При отправке эмодзи из палитры со значком ⭐ отправится премиум-эмодзи вместо обычного.'],
        ]

  return (
    <div className="not-prose my-6 grid gap-2 sm:grid-cols-2">
      {items.map(([title, body], i) => (
        <div key={i} className="uz-card flex gap-3 rounded-xl border border-[var(--border)] p-4">
          <svg
            className="mt-0.5 shrink-0 text-[var(--primary)]"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
          </svg>
          <div>
            <div className="font-semibold">{title}</div>
            <div className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{body}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function TroubleshootBlock({ lang }: { lang: 'uz' | 'ru' }) {
  const rows =
    lang === 'uz'
      ? [
          ['To\'lov noaniq summa bilan o\'tkazildi', "Bot kartaga aynan belgilangan summani kutadi. Boshqa miqdor o'tkazilsa avtomatik faollashish ishlamaydi — qo'llab-quvvatlashga yozing, qo'lda tekshiriladi."],
          ['Bot hali to\'lovni tasdiqlamadi', "Bank to'lovni qayta ishlash uchun 1–10 daqiqa olishi mumkin. Biroz kuting va botda /status buyrug'i (yoki menyudagi \"Mening buyurtmam\") orqali tekshiring."],
          ['Noto\'g\'ri @username kiritildi', "Premium boshqa akkauntga ketgan bo'lishi mumkin. Bu holda qo'llab-quvvatlash xizmatiga to'g'ri @username bilan murojaat qiling."],
          ['Bank tomonida cheklov', "Karta orqali to'lov bank tomonidan rad etilgan bo'lishi mumkin (kunlik limit, blok). Boshqa karta yoki Click ilovasi orqali qayta urinib ko'ring."],
          ['Akkauntda Premium ko\'rinmayapti', "Telegram ilovasini to'liq yoping (recent apps'dan ham olib tashlang) va qayta oching. Cache yangilanmagan bo'lsa shu yordam beradi."],
        ]
      : [
          ['Оплата прошла неточной суммой', 'Бот ожидает на карту именно указанную сумму. При другой сумме автоматическая активация не сработает — напишите в поддержку, проверим вручную.'],
          ['Бот ещё не подтвердил оплату', 'Банку может потребоваться 1–10 минут на обработку. Подождите и проверьте через /status в боте (или "Мой заказ" в меню).'],
          ['Введён неверный @username', 'Premium мог уйти на другой аккаунт. В этом случае напишите в поддержку с правильным @username.'],
          ['Ограничение со стороны банка', 'Платёж по карте мог быть отклонён банком (дневной лимит, блокировка). Попробуйте другую карту или приложение Click.'],
          ['Premium не отображается в аккаунте', 'Полностью закройте приложение Telegram (включая из недавних) и откройте снова — иногда нужно обновить кэш.'],
        ]

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Sabab' : 'Причина'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Yechim' : 'Решение'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([cause, fix], i) => (
            <tr key={i} className="border-t border-[var(--border)]">
              <td className="px-4 py-3 align-top font-medium">{cause}</td>
              <td className="px-4 py-3 align-top text-[var(--text-muted)]">{fix}</td>
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
          — {lang === 'uz' ? 'texnik hujjat' : 'техническая документация'}
        </li>
        <li>
          <a href="https://telegram.org/blog/700-million-and-premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/700-million-and-premium
          </a>{' '}
          — {lang === 'uz' ? "Premium e'lon" : 'анонс Premium'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="qanday-faollashadi">Premium qanday faollashadi?</h2>
      <p>
        Uzgets orqali Telegram Premium sotib olganingizda{' '}
        <strong>hech qanday qo&apos;lda faollashtirish kerak emas</strong>. Bot to&apos;lovni tasdiqlangach,
        Telegram&apos;ning rasmiy tizimi orqali obuna ko&apos;rsatilgan @username&apos;dagi akkauntga avtomatik
        biriktiriladi. Faollashish odatda bir necha daqiqada amalga oshadi (bank to&apos;lovni qayta ishlash vaqtiga
        qarab kechikish bo&apos;lishi mumkin).
      </p>
      <p>
        Premium akkauntga biriktirilgach, Telegram avtomatik <em>messageActionGiftPremium</em> tipidagi tizim xabarini
        chatga yuboradi (yoki sovg&apos;a sifatida olganda — sovg&apos;a yuboruvchi bilan suhbatga). Bu xabar
        obunaning narxi va muddati haqida ma&apos;lumot beradi.
      </p>

      <h2 id="stsenariy-1">Stsenariy 1: O&apos;zingiz uchun Premium sotib olganda</h2>
      <ScenarioCard
        num={1}
        title="To'lov amalga oshiriladi"
        body={
          <>
            Bot ko&apos;rsatadigan kartaga aynan belgilangan summani UzCard/Humo/Payme orqali o&apos;tkazasiz yoki
            Click ilovasi orqali to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;laysiz.
          </>
        }
      />
      <ScenarioCard
        num={2}
        title="Bot to'lovni tasdiqlaydi"
        body={
          <>
            Avtomatik tekshirish ishga tushadi. Bot sizga &quot;to&apos;lov qabul qilindi&quot; xabarini yuboradi.
          </>
        }
      />
      <ScenarioCard
        num={3}
        title="Premium akkauntga biriktiriladi"
        body={
          <>
            Telegram tomonidan obuna kiritilgan @username&apos;dagi akkauntga avtomatik o&apos;tadi. Bir necha
            daqiqadan so&apos;ng profilda ⭐ belgisi paydo bo&apos;ladi.
          </>
        }
      />

      <h2 id="stsenariy-2">Stsenariy 2: Sizga Premium hadya qilinganda</h2>
      <p>
        Boshqa odam sizga Premium sovg&apos;a qilsa, jarayon shunday bo&apos;ladi:
      </p>
      <ul>
        <li>
          Sovg&apos;a yuboruvchi bilan o&apos;rtangizdagi chatga Telegram avtomatik xabar yuboradi —
          obuna muddati va narxi ko&apos;rsatiladi.
        </li>
        <li>
          Premium darhol akkauntingizga faollashadi — siz tomonidan biror amal kerak emas.
        </li>
        <li>
          Telegram&apos;ning rasmiy qoidasiga ko&apos;ra, sovg&apos;a sifatida olingan Premium odatda{' '}
          <strong>global narx</strong> stavkasida hisoblanadi (mahalliy narxlardan farq qilishi mumkin).
        </li>
      </ul>
      <p>
        <Link href="/uz/premium" className="font-semibold text-[var(--primary)] hover:underline">
          Premium narxlari va muddatlari haqida batafsil
        </Link>
        .
      </p>

      <h2 id="stsenariy-3">Stsenariy 3: Eski Premium muddati tugagach yangilash</h2>
      <p>
        Telegram Premium <strong>avtomatik uzaytirilmaydi</strong> — muddat tugagach, akkaunt avtomatik oddiy (free)
        rejimga qaytadi. Yangilash uchun{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">
          {siteConfig.bot}
        </a>{' '}
        ga yana o&apos;ting va kerakli muddatni tanlab to&apos;lang. Yangi obuna oldingisi tugagan vaqtdan emas, balki
        yangi to&apos;lov tasdiqlangan vaqtdan boshlab hisoblanadi.
      </p>

      <h2 id="qanday-tekshirish">Premium faol ekanligini qanday tekshirish? — 5 ta yo&apos;l</h2>
      <VerifyChecklist lang="uz" />

      <h2 id="faollashmasa">Faollashmasa — sabab va yechim</h2>
      <p>
        Agar to&apos;lov o&apos;tkazilganidan keyin 10–15 daqiqa o&apos;tib ham Premium akkauntda ko&apos;rinmasa,
        quyidagi sabablardan biri bo&apos;lishi mumkin:
      </p>
      <TroubleshootBlock lang="uz" />
      <p>
        Yuqoridagilardan birortasi yordam bermasa,{' '}
        <Link href="/uz/aloqa" className="font-semibold text-[var(--primary)] hover:underline">
          qo&apos;llab-quvvatlashga
        </Link>{' '}
        murojaat qiling — to&apos;lov chekini va @username&apos;ni yuboring, qo&apos;lda tekshiriladi.
      </p>

      <h2 id="muddat">Muddat qachon boshlanadi va tugaydi?</h2>
      <p>
        Premium muddati <strong>obuna faollashgan paytdan</strong> boshlanadi. Masalan, 6 oylik obuna 1-iyun kuni
        faollashsa, 30-noyabrgacha amal qiladi (taxminan 180 kun). Muddat tugagach Premium o&apos;chadi va akkaunt
        oddiy holatga qaytadi — barcha xabarlar va kontaktlar saqlanib qoladi, faqat Premium imkoniyatlari
        cheklanadi.
      </p>

      <Sources lang="uz" />
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="qanday-faollashadi">Как активируется Premium?</h2>
      <p>
        При покупке Telegram Premium через Uzgets <strong>ручная активация не нужна</strong>. После подтверждения
        оплаты бот через официальную систему Telegram автоматически зачисляет подписку на аккаунт по указанному
        @username. Активация обычно занимает несколько минут (зависит от времени обработки платежа банком).
      </p>
      <p>
        После зачисления Premium Telegram автоматически отправляет в чат системное сообщение типа{' '}
        <em>messageActionGiftPremium</em> (или в чат с дарителем — если это подарок). В нём указаны цена и срок
        подписки.
      </p>

      <h2 id="stsenariy-1">Сценарий 1: Покупка Premium для себя</h2>
      <ScenarioCard
        num={1}
        title="Производится оплата"
        body={
          <>
            Переводите указанную сумму на карту, которую покажет бот, через UzCard/Humo/Payme. Либо оплачиваете
            напрямую через Click.
          </>
        }
      />
      <ScenarioCard
        num={2}
        title="Бот подтверждает оплату"
        body={<>Запускается автоматическая проверка. Бот присылает сообщение «оплата принята».</>}
      />
      <ScenarioCard
        num={3}
        title="Premium зачисляется на аккаунт"
        body={
          <>
            Telegram автоматически активирует подписку на аккаунт по указанному @username. Через несколько минут в
            профиле появится значок ⭐.
          </>
        }
      />

      <h2 id="stsenariy-2">Сценарий 2: Когда вам подарили Premium</h2>
      <p>Если кто-то подарил вам Premium, всё происходит так:</p>
      <ul>
        <li>В чат с дарителем приходит автоматическое сообщение от Telegram — указаны срок и цена подписки.</li>
        <li>Premium активируется на ваш аккаунт сразу — никаких действий с вашей стороны не требуется.</li>
        <li>
          По официальным правилам Telegram подаренный Premium считается по <strong>глобальной цене</strong> (может
          отличаться от локальной).
        </li>
      </ul>
      <p>
        <Link href="/ru/premium" className="font-semibold text-[var(--primary)] hover:underline">
          Подробнее о ценах и сроках Premium
        </Link>
        .
      </p>

      <h2 id="stsenariy-3">Сценарий 3: Продление после окончания старого Premium</h2>
      <p>
        Telegram Premium <strong>не продлевается автоматически</strong> — после окончания срока аккаунт возвращается
        в обычный (free) режим. Чтобы продлить, зайдите в{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">
          {siteConfig.bot}
        </a>{' '}
        снова и выберите нужный срок. Новая подписка считается не от момента окончания старой, а от подтверждения
        новой оплаты.
      </p>

      <h2 id="qanday-tekshirish">Как проверить, что Premium активен — 5 способов</h2>
      <VerifyChecklist lang="ru" />

      <h2 id="faollashmasa">Если не активировался — причины и решения</h2>
      <p>
        Если через 10–15 минут после оплаты Premium не появился в аккаунте, проверьте следующие причины:
      </p>
      <TroubleshootBlock lang="ru" />
      <p>
        Если ничего из перечисленного не помогло, обратитесь в{' '}
        <Link href="/ru/aloqa" className="font-semibold text-[var(--primary)] hover:underline">
          поддержку
        </Link>{' '}
        — пришлите чек об оплате и @username, проверим вручную.
      </p>

      <h2 id="muddat">Когда срок начинается и заканчивается?</h2>
      <p>
        Срок Premium считается <strong>с момента активации подписки</strong>. Например, 6-месячная подписка,
        активированная 1 июня, действует до 30 ноября (около 180 дней). По окончании срока Premium отключается, и
        аккаунт возвращается в обычное состояние — все сообщения и контакты сохраняются, ограничиваются только
        Premium-возможности.
      </p>

      <Sources lang="ru" />
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
      title: "Telegram Premium qanday faollashtiriladi — step-by-step",
      description:
        "Telegram Premium sotib olgach qanday faollashadi, faol ekanligini qanday tekshirish va faollashmasa nima qilish kerakligi haqida to'liq qo'llanma.",
      metaTitle: "Telegram Premium qanday faollashtiriladi — qadam-baqadam qo'llanma",
      metaDescription:
        "Telegram Premium avtomatik faollashadi. Tekshirish 5 yo'li, faollashmasa sabab va yechimlar, muddat hisoblanishi va sovg'a sifatida olganda nima bo'ladi.",
      ogDescription: "Telegram Premium qanday faollashtiriladi — 3 stsenariya, 5 tekshirish yo'li va troubleshooting.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Telegram Premium qanday faollashtiriladi?',
          answer:
            "Premium qo'lda faollashtirilmaydi — to'lov tasdiqlanganidan so'ng Telegram avtomatik ravishda obuna kiritilgan @username'dagi akkauntga biriktiradi. Odatda bir necha daqiqada amalga oshadi.",
        },
        {
          question: 'Premium faol ekanligini qanday bilish mumkin?',
          answer:
            "Profilda ism yonida ⭐ belgisi paydo bo'ladi va Sozlamalar > Telegram Premium bo'limida aniq muddat ko'rsatiladi. Shuningdek, 4 GB fayl yuklash, reklamasiz interfeys va premium emoji ishlay boshlaydi.",
        },
        {
          question: 'Premium o\'zi-o\'zidan uzayadimi?',
          answer:
            "Yo'q. Telegram Premium avtomatik uzaytirilmaydi — muddat tugagach Premium o'chadi va akkaunt oddiy rejimga qaytadi. Yangilash uchun yana botga o'tib qaytadan to'lash kerak.",
        },
        {
          question: 'Sovg\'a sifatida olingan Premium qanday faollashadi?',
          answer:
            "Sovg'a yuboruvchi bilan o'rtangizdagi chatga Telegram avtomatik xabar yuboradi va Premium darhol akkauntingizga faollashadi. Sizdan biror amal talab etilmaydi.",
        },
        {
          question: 'Premium faollashmasa nima qilish kerak?',
          answer:
            "Avval Telegram ilovasini to'liq yopib qayta ochib ko'ring (cache yangilanishi). Agar 10–15 daqiqada faollashmasa, qo'llab-quvvatlash xizmatiga to'lov chekini va @username'ni yuboring — qo'lda tekshiriladi.",
        },
        {
          question: 'Premium muddati qachondan boshlanadi?',
          answer:
            "Muddat obuna faollashgan paytdan boshlanadi (oldingi obuna tugashidan emas). Masalan, 1-iyun kuni faollashgan 6 oylik Premium 30-noyabrgacha amal qiladi.",
        },
        {
          question: 'Muddat tugagach akkauntga nima bo\'ladi?',
          answer:
            "Premium o'chadi va akkaunt oddiy (free) rejimga qaytadi. Barcha xabarlar, kontaktlar va sozlamalar saqlanib qoladi — faqat Premium imkoniyatlari (4 GB, premium emoji, reklamasiz va boshqalar) endi ishlamaydi.",
        },
      ],
      finalCtaHeading: "Premium uchun tayyormisiz?",
      finalCtaBody:
        "Botga kirib, kerakli muddatni tanlang. To'lov tasdiqlangach Premium akkauntga avtomatik biriktiriladi.",
    },
    ru: {
      title: 'Как активируется Telegram Premium — пошаговое руководство',
      description:
        'Как активируется Telegram Premium после покупки, как проверить, что он работает, и что делать, если не активировался — полное руководство.',
      metaTitle: 'Как активируется Telegram Premium — пошаговое руководство',
      metaDescription:
        'Telegram Premium активируется автоматически. 5 способов проверить, причины и решения, если не сработало, как считается срок и что происходит с подаренным Premium.',
      ogDescription: 'Как активируется Telegram Premium — 3 сценария, 5 способов проверки и troubleshooting.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Как активируется Telegram Premium?',
          answer:
            'Premium не нужно активировать вручную — после подтверждения оплаты Telegram автоматически зачисляет подписку на аккаунт по указанному @username. Обычно занимает несколько минут.',
        },
        {
          question: 'Как понять, что Premium активен?',
          answer:
            'В профиле рядом с именем появляется значок ⭐, а в Настройки > Telegram Premium указан конкретный срок. Также начинают работать загрузка файлов до 4 ГБ, отсутствие рекламы и премиум-эмодзи.',
        },
        {
          question: 'Premium продлевается автоматически?',
          answer:
            'Нет. Telegram Premium не продлевается автоматически — по окончании срока Premium отключается, и аккаунт возвращается в обычный режим. Для продления нужно снова зайти в бот и оплатить.',
        },
        {
          question: 'Как активируется подаренный Premium?',
          answer:
            'В чат с дарителем приходит автоматическое сообщение от Telegram, и Premium сразу же активируется на ваш аккаунт. От вас никаких действий не требуется.',
        },
        {
          question: 'Что делать, если Premium не активировался?',
          answer:
            'Сначала полностью закройте и снова откройте Telegram (нужно обновить кэш). Если через 10–15 минут активации нет, напишите в поддержку с чеком об оплате и @username — проверим вручную.',
        },
        {
          question: 'С какого момента считается срок Premium?',
          answer:
            'Срок начинается с момента активации подписки (а не от окончания старой). Например, 6-месячный Premium, активированный 1 июня, действует до 30 ноября.',
        },
        {
          question: 'Что происходит с аккаунтом по окончании срока?',
          answer:
            'Premium отключается, и аккаунт возвращается в обычный (free) режим. Все сообщения, контакты и настройки сохраняются — перестают работать только Premium-возможности (4 ГБ, премиум-эмодзи, без рекламы и т. д.).',
        },
      ],
      finalCtaHeading: 'Готовы к Premium?',
      finalCtaBody:
        'Зайдите в бот, выберите нужный срок. После подтверждения оплаты Premium активируется на аккаунт автоматически.',
    },
  },
}
