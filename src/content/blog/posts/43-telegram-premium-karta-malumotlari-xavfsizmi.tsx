import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-karta-malumotlari-xavfsizmi'
const TODAY = '2026-09-30'

function UzAnswerBox() {
  return (
    <p>
      Ha, agar to&apos;lovni <strong>o&apos;zingizning</strong> Click, Payme, UzCard yoki Humo
      ilovangizdan qilsangiz, karta ma&apos;lumotlaringiz xavfsiz: ular bank ilovasidan
      chiqmaydi, sotuvchi faqat tushgan o&apos;tkazmani ko&apos;radi. Xavf Premium&apos;ning
      o&apos;zida emas, <strong>kimga nima aytganingizda</strong>. Karta raqami bilan
      o&apos;zi pul yechib bo&apos;lmaydi, lekin <strong>SMS/OTP kod, CVV, bank ilovasi paroli
      va Telegram login kodi</strong> hech kimga berilmaydi. Premium uchun sotuvchiga faqat
      @username kerak — boshqa narsa so&apos;rasa, to&apos;lovni to&apos;xtating.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Да, если вы платите из <strong>своего</strong> приложения Click, Payme, UzCard или Humo,
      данные карты в безопасности: они не покидают банковское приложение, продавец видит только
      поступивший перевод. Риск не в самой покупке Premium, а в том,{' '}
      <strong>что и кому вы сообщаете</strong>. По одному номеру карты деньги не списать, но{' '}
      <strong>SMS/OTP-код, CVV, пароль от банковского приложения и код входа в Telegram</strong>{' '}
      никому не передаются. Для Premium продавцу нужен только @username — если просят что-то ещё,
      остановите оплату.
    </p>
  )
}

type Row = { uz: string; ru: string }
type Level = 'low' | 'mid' | 'high'

const DATA_ROWS: { item: Row; level: Level; why: Row }[] = [
  {
    item: { uz: '@username', ru: '@username' },
    level: 'low',
    why: { uz: "Ochiq ma'lumot. Premium biriktirish uchun shu yetarli.", ru: 'Публичные данные. Для активации Premium этого достаточно.' },
  },
  {
    item: { uz: "Karta raqami (16 xona)", ru: 'Номер карты (16 цифр)' },
    level: 'low',
    why: { uz: "O'tkazma qabul qilish uchun ishlatiladi, o'zi pul yechishga yetmaydi. Lekin firibgarlar uni ishonch qozonish uchun ishlatadi — keraksiz joyga yozmang.", ru: 'Нужен для приёма перевода, сам по себе не позволяет списать деньги. Но мошенники используют его, чтобы втереться в доверие, — не пишите его без нужды.' },
  },
  {
    item: { uz: 'Amal qilish muddati', ru: 'Срок действия' },
    level: 'mid',
    why: { uz: "Karta raqami bilan birga onlayn to'lov uchun qo'shimcha kalit bo'ladi. Sotuvchiga kerak emas.", ru: 'Вместе с номером — дополнительный ключ для онлайн-оплаты. Продавцу не нужен.' },
  },
  {
    item: { uz: 'CVV/CVC (Visa/Mastercard orqasidagi 3 raqam)', ru: 'CVV/CVC (3 цифры на обороте Visa/Mastercard)' },
    level: 'high',
    why: { uz: "Raqam va muddat bilan birga xalqaro saytlarda to'lov qilish imkonini beradi.", ru: 'Вместе с номером и сроком позволяет платить на зарубежных сайтах.' },
  },
  {
    item: { uz: 'SMS / OTP tasdiqlash kodi', ru: 'SMS / OTP-код подтверждения' },
    level: 'high',
    why: { uz: "Bu kod bilan operatsiya siz nomingizdan tasdiqlanadi. Markaziy bank uni hech kimga bermaslikni ogohlantiradi.", ru: 'Этим кодом операция подтверждается от вашего имени. ЦБ предупреждает никому его не сообщать.' },
  },
  {
    item: { uz: 'Bank ilovasi login va paroli', ru: 'Логин и пароль банковского приложения' },
    level: 'high',
    why: { uz: "Hisobingizni to'liq boshqarish imkonini beradi.", ru: 'Даёт полный доступ к вашему счёту.' },
  },
  {
    item: { uz: 'Telegram login kodi yoki 2FA paroli', ru: 'Код входа или 2FA-пароль Telegram' },
    level: 'high',
    why: { uz: "Akkauntingizni o'g'irlash uchun yetarli. Premium yetkazish uchun hech qachon kerak emas.", ru: 'Достаточно для угона аккаунта. Для доставки Premium никогда не нужен.' },
  },
]

function DataTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  const label: Record<Level, Row> = {
    low: { uz: 'Past — berish mumkin', ru: 'Низкий — можно сообщить' },
    mid: { uz: "O'rta — kerak emas", ru: 'Средний — не нужен' },
    high: { uz: 'Yuqori — hech kimga', ru: 'Высокий — никому' },
  }
  const color: Record<Level, string> = {
    low: 'text-[var(--primary)]',
    mid: 'text-[var(--text-muted)]',
    high: 'text-[var(--foreground)] underline decoration-2',
  }
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full min-w-[680px] text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-3 text-left">{uz ? "Ma'lumot" : 'Данные'}</th>
            <th className="px-4 py-3 text-left">{uz ? 'Xavf darajasi' : 'Уровень риска'}</th>
            <th className="px-4 py-3 text-left">{uz ? 'Nima uchun' : 'Почему'}</th>
          </tr>
        </thead>
        <tbody>
          {DATA_ROWS.map((r) => (
            <tr key={r.item.uz} className="border-t border-[var(--border)]">
              <td className="px-4 py-3 font-medium">{r.item[lang]}</td>
              <td className={`px-4 py-3 font-semibold ${color[r.level]}`}>{label[r.level][lang]}</td>
              <td className="px-4 py-3 text-[var(--text-muted)]">{r.why[lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const PATH_ROWS: { path: Row; where: Row; uzcard: Row }[] = [
  {
    path: { uz: "Telegram ilovasi ichida (App Store / Google Play)", ru: 'Внутри Telegram (App Store / Google Play)' },
    where: { uz: 'Apple yoki Google hisobida saqlanadi', ru: 'Хранятся в аккаунте Apple или Google' },
    uzcard: { uz: "Yo'q — xorijiy karta kerak", ru: 'Нет — нужна зарубежная карта' },
  },
  {
    path: { uz: 'Fragment', ru: 'Fragment' },
    where: { uz: "Karta ishlatilmaydi — TON hamyonidan to'lanadi", ru: 'Карта не используется — оплата из TON-кошелька' },
    uzcard: { uz: "Yo'q", ru: 'Нет' },
  },
  {
    path: { uz: "Mahalliy bot (masalan, @uzgetsbot)", ru: 'Локальный бот (например, @uzgetsbot)' },
    where: { uz: "Sizning Click/Payme/bank ilovangizda qoladi — botga karta ma'lumoti kiritilmaydi", ru: 'Остаются в вашем Click/Payme/банковском приложении — в бот данные карты не вводятся' },
    uzcard: { uz: 'Ha', ru: 'Да' },
  },
  {
    path: { uz: "Noma'lum sotuvchi chatda", ru: 'Неизвестный продавец в чате' },
    where: { uz: "Xavfli: ko'pincha karta, muddat yoki SMS kod so'raladi", ru: 'Опасно: часто просят карту, срок или SMS-код' },
    uzcard: { uz: "Ha, lekin kafolat yo'q", ru: 'Да, но без гарантий' },
  },
]

function PathsTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full min-w-[680px] text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-3 text-left">{uz ? "Sotib olish yo'li" : 'Способ покупки'}</th>
            <th className="px-4 py-3 text-left">{uz ? "Karta ma'lumotlari qayerda" : 'Где данные карты'}</th>
            <th className="px-4 py-3 text-left">{uz ? 'UzCard/Humo' : 'UzCard/Humo'}</th>
          </tr>
        </thead>
        <tbody>
          {PATH_ROWS.map((r) => (
            <tr key={r.path.uz} className="border-t border-[var(--border)]">
              <td className="px-4 py-3 font-medium">{r.path[lang]}</td>
              <td className="px-4 py-3">{r.where[lang]}</td>
              <td className="px-4 py-3">{r.uzcard[lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{uz ? 'Manbalar va tekshiruv' : 'Источники и проверка'}</div>
      <ul className="space-y-2 text-[var(--text-muted)]">
        <li>
          <a href="https://www.gazeta.uz/oz/2025/01/10/phone-calls/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Gazeta.uz — Markaziy bank bayonoti (10.01.2025)
          </a>{' '}
          — {uz ? "login, parol va SMS kodlarni notanish shaxslarga bermaslik, zararli ilovalar xavfi" : 'не передавать логин, пароль и SMS-коды посторонним, риск вредоносных приложений'}.
        </li>
        <li>
          <a href="https://www.spot.uz/oz/2026/07/22/cb-cyber" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Spot.uz — Markaziy bankning P2P va biometriya bo&apos;yicha loyihasi (22.07.2026)
          </a>{' '}
          — {uz ? "P2P o'tkazmalarda OTP tasdiqlash, veb-sahifa orqali P2P taqiqi saqlanishi" : 'подтверждение P2P-переводов OTP, сохранение запрета P2P через веб-страницы'}.
        </li>
        <li>
          <a href="https://cbu.uz/uz/press_center/question_answer/4173/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            cbu.uz — Ko&apos;p beriladigan savollar
          </a>{' '}
          — {uz ? "Markaziy bankning karta xavfsizligi bo'yicha rasmiy javoblari" : 'официальные ответы ЦБ по безопасности карт'}.
        </li>
        <li>
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Premium FAQ
          </a>{' '}
          — {uz ? "Premium'ni rasmiy sotib olish va sovg'a qilish yo'llari" : 'официальные способы покупки и подарка Premium'}.
        </li>
        <li>
          <Link href="/privacy" className="hover:text-[var(--primary)] hover:underline">uzgets.uz/privacy</Link>{' '}
          — {uz ? "Uzgets qaysi ma'lumotlarni qayta ishlashi" : 'какие данные обрабатывает Uzgets'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "2026-yil 30-sentabrda tekshirilgan. Bank qoidalari o'zgarishi mumkin — aniq talablarni o'z bankingizdan so'rang."
          : 'Проверено 30 сентября 2026 года. Правила банков могут меняться — точные требования уточняйте в своём банке.'}
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
          <li><a href="#qaysi" className="hover:text-[var(--primary)] hover:underline">Qaysi karta ma&apos;lumoti qanchalik xavfli</a></li>
          <li><a href="#yollar" className="hover:text-[var(--primary)] hover:underline">Premium sotib olish yo&apos;llari va karta xavfsizligi</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Uzgets orqali to&apos;laganda karta qayerda qoladi</a></li>
          <li><a href="#qoidalar" className="hover:text-[var(--primary)] hover:underline">To&apos;lashdan oldin 5 qoida</a></li>
          <li><a href="#aytib-qoydim" className="hover:text-[var(--primary)] hover:underline">Karta ma&apos;lumotini aytib qo&apos;ydim — nima qilish kerak</a></li>
        </ol>
      </nav>

      <h2 id="qaysi">Qaysi karta ma&apos;lumoti qanchalik xavfli</h2>
      <p>
        &laquo;Karta ma&apos;lumotlari&raquo; — bitta narsa emas. Ba&apos;zilari o&apos;tkazma
        qabul qilish uchun ochiq ishlatiladi, ba&apos;zilari esa hisobingiz kaliti. Markaziy
        bank 2025-yil yanvarida alohida ta&apos;kidlagan: <strong>login, parol va SMS
        kodlarni notanish shaxslarga berish</strong> va zararli ilovalarni o&apos;rnatish pul
        yo&apos;qotishga olib keladi. Telegram Premium sotib olishda nimani berish mumkinligi:
      </p>
      <DataTable lang="uz" />
      <p>
        Qisqasi: Premium yetkazish uchun sotuvchiga <strong>faqat @username</strong> kerak.
        Jadvalda &laquo;yuqori&raquo; deb belgilangan biror narsani so&apos;rashsa — bu sotuvchi emas, firibgar.
      </p>

      <h2 id="yollar">Premium sotib olish yo&apos;llari va karta xavfsizligi</h2>
      <p>
        O&apos;zbekistondan Premium olishning har bir yo&apos;lida karta ma&apos;lumotlari
        boshqa joyda turadi:
      </p>
      <PathsTable lang="uz" />
      <p>
        Markaziy bank qoidalariga ko&apos;ra O&apos;zbekistonda P2P o&apos;tkazmalar veb-sahifa
        orqali amalga oshirilmaydi — ular bank yoki to&apos;lov ilovasi ichida bajariladi.
        Shuning uchun sizni &laquo;karta ma&apos;lumotlarini kiritish&raquo; uchun noma&apos;lum
        saytga yo&apos;naltirgan &laquo;sotuvchi&raquo; — birinchi xavf belgisi.
      </p>
      <InlineBotCTA lang="uz" text="Botga karta ma'lumoti kiritilmaydi — faqat @username. Premium'ni xavfsiz oling." />

      <h2 id="uzgets">Uzgets orqali to&apos;laganda karta qayerda qoladi</h2>
      <p>
        {siteConfig.bot}da to&apos;lov o&apos;tkazma shaklida bo&apos;ladi: bot mini-app ichida
        summa va qabul qiluvchi kartani ko&apos;rsatadi, siz esa o&apos;tkazmani o&apos;zingizning
        Click, Payme, UzCard yoki Humo ilovangizdan qilasiz. Natijada:
      </p>
      <ul>
        <li>Karta raqamingiz, muddati, CVV va SMS kod <strong>botga kiritilmaydi</strong>;</li>
        <li>SMS/OTP kod faqat <strong>o&apos;z bank ilovangizda</strong>, o&apos;z o&apos;tkazmangizni tasdiqlash uchun ishlatiladi;</li>
        <li>
          Uzgets&apos;ning{' '}
          <Link href="/privacy" className="text-[var(--primary)] hover:underline">maxfiylik siyosati</Link>ga
          ko&apos;ra faqat @username, to&apos;lov tizimi ma&apos;lumotlari va tranzaksiya
          holati qayta ishlanadi va uchinchi tomonlarga berilmaydi.
        </li>
      </ul>
      <p>
        Bot ishonchliligini tekshirishning to&apos;liq ro&apos;yxati (klon botlar, soxta narx,
        anonim karta):{' '}
        <Link href="/blog/telegram-bot-orqali-tolash-xavfsizmi" className="text-[var(--primary)] hover:underline">
          Telegram bot orqali to&apos;lash xavfsizmi — 7 xavf va 5 xavfsizlik belgisi
        </Link>.
      </p>

      <h2 id="qoidalar">To&apos;lashdan oldin 5 qoida</h2>
      <ol>
        <li><strong>O&apos;tkazmani faqat o&apos;z ilovangizdan qiling.</strong> Chatga yoki noma&apos;lum saytga karta ma&apos;lumotini yozmang.</li>
        <li><strong>SMS kodni o&apos;qing.</strong> Kod matnida odatda operatsiya turi va summa bo&apos;ladi — agar u siz qilmoqchi bo&apos;lgan to&apos;lovga mos kelmasa, tasdiqlamang.</li>
        <li><strong>Qabul qiluvchini tekshiring.</strong> Ilova o&apos;tkazmadan oldin karta egasining ismini ko&apos;rsatadi — sotuvchi aytgan ma&apos;lumotga mosligini ko&apos;ring.</li>
        <li><strong>Botni saytdagi havola orqali oching.</strong> Rasmiy bot — {siteConfig.bot}; bir harf farq qiladigan nomlar klon bo&apos;lishi mumkin.</li>
        <li><strong>Telegram&apos;da 2FA yoqing.</strong> Sozlamalar → Maxfiylik va xavfsizlik → Ikki bosqichli tasdiqlash. Login kodi o&apos;g&apos;irlansa ham akkaunt himoyalanadi.</li>
      </ol>

      <h2 id="aytib-qoydim">Karta ma&apos;lumotini aytib qo&apos;ydim — nima qilish kerak</h2>
      <p>Tezlik muhim. Quyidagi tartibda harakat qiling:</p>
      <ol>
        <li><strong>Kartani bloklang</strong> — bank ilovasida yoki bank call-markaziga qo&apos;ng&apos;iroq qilib. SMS kod yoki parol berilgan bo&apos;lsa, bu birinchi qadam.</li>
        <li><strong>Bank ilovasi parolini almashtiring</strong> va notanish qurilmalarni chiqarib yuboring.</li>
        <li><strong>Telegram sessiyalarini tekshiring:</strong> Sozlamalar → Qurilmalar → &laquo;Boshqa barcha seanslarni tugatish&raquo;.</li>
        <li><strong>Yozishmalar va chekni saqlang</strong> va bankka ariza yozing — nizoli operatsiya ko&apos;rib chiqilishi uchun dalil kerak.</li>
        <li>Faqat karta raqami aytilgan bo&apos;lsa (kod, parol, CVV emas) — pul yechilmaydi, lekin keyingi &laquo;bank xodimi&raquo; qo&apos;ng&apos;iroqlariga ehtiyot bo&apos;ling.</li>
      </ol>

      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Xavfsizlik bo&apos;yicha tavsiyalar Markaziy bank bayonotlari va ochiq manbalarga tayangan; bank qoidalari bo&apos;yicha yakuniy javobni o&apos;z bankingiz beradi.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#qaysi" className="hover:text-[var(--primary)] hover:underline">Какие данные карты насколько опасно сообщать</a></li>
          <li><a href="#yollar" className="hover:text-[var(--primary)] hover:underline">Способы покупки Premium и безопасность карты</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Где остаётся карта при оплате через Uzgets</a></li>
          <li><a href="#qoidalar" className="hover:text-[var(--primary)] hover:underline">5 правил перед оплатой</a></li>
          <li><a href="#aytib-qoydim" className="hover:text-[var(--primary)] hover:underline">Я сообщил данные карты — что делать</a></li>
        </ol>
      </nav>

      <h2 id="qaysi">Какие данные карты насколько опасно сообщать</h2>
      <p>
        «Данные карты» — это не что-то одно. Часть из них открыто используется для приёма
        перевода, часть — ключ к вашему счёту. В январе 2025 года Центробанк отдельно
        подчеркнул: <strong>передача логина, пароля и SMS-кодов посторонним</strong> и установка
        вредоносных приложений ведут к потере денег. Что можно сообщать при покупке Telegram
        Premium:
      </p>
      <DataTable lang="ru" />
      <p>
        Коротко: для доставки Premium продавцу нужен <strong>только @username</strong>. Если
        просят что-то с «высоким» риском из таблицы — это не продавец, а мошенник.
      </p>

      <h2 id="yollar">Способы покупки Premium и безопасность карты</h2>
      <p>У каждого способа купить Premium из Узбекистана данные карты находятся в разном месте:</p>
      <PathsTable lang="ru" />
      <p>
        По правилам Центробанка P2P-переводы в Узбекистане не проводятся через веб-страницы —
        они выполняются внутри банковского или платёжного приложения. Поэтому «продавец»,
        который отправляет вас на незнакомый сайт «ввести данные карты», — первый признак
        опасности.
      </p>
      <InlineBotCTA lang="ru" text="В бот данные карты не вводятся — только @username. Купите Premium безопасно." />

      <h2 id="uzgets">Где остаётся карта при оплате через Uzgets</h2>
      <p>
        В {siteConfig.bot} оплата проходит переводом: бот в мини-приложении показывает сумму и
        карту получателя, а перевод вы делаете из своего приложения Click, Payme, UzCard или
        Humo. В итоге:
      </p>
      <ul>
        <li>Номер вашей карты, срок, CVV и SMS-код <strong>в бот не вводятся</strong>;</li>
        <li>SMS/OTP-код используется только <strong>в вашем банковском приложении</strong> для подтверждения вашего же перевода;</li>
        <li>
          Согласно{' '}
          <Link href="/ru/privacy" className="text-[var(--primary)] hover:underline">политике конфиденциальности</Link>{' '}
          Uzgets обрабатываются только @username, данные платёжной системы и статус транзакции,
          и они не передаются третьим сторонам.
        </li>
      </ul>
      <p>
        Полный список проверки бота (клоны, фейковые цены, анонимная карта):{' '}
        <Link href="/ru/blog/telegram-bot-orqali-tolash-xavfsizmi" className="text-[var(--primary)] hover:underline">
          Безопасно ли платить через Telegram-бот — 7 признаков опасности и 5 безопасности
        </Link>.
      </p>

      <h2 id="qoidalar">5 правил перед оплатой</h2>
      <ol>
        <li><strong>Переводите только из своего приложения.</strong> Не пишите данные карты в чат или на незнакомый сайт.</li>
        <li><strong>Читайте SMS-код.</strong> В тексте обычно указаны тип операции и сумма — если они не совпадают с вашим платежом, не подтверждайте.</li>
        <li><strong>Проверьте получателя.</strong> Приложение перед переводом показывает имя владельца карты — сверьте с тем, что сказал продавец.</li>
        <li><strong>Открывайте бот по ссылке с сайта.</strong> Официальный бот — {siteConfig.bot}; имена, отличающиеся на одну букву, могут быть клонами.</li>
        <li><strong>Включите 2FA в Telegram.</strong> Настройки → Конфиденциальность → Облачный пароль. Даже если код входа украдут, аккаунт будет защищён.</li>
      </ol>

      <h2 id="aytib-qoydim">Я сообщил данные карты — что делать</h2>
      <p>Важна скорость. Действуйте в таком порядке:</p>
      <ol>
        <li><strong>Заблокируйте карту</strong> — в банковском приложении или звонком в колл-центр банка. Если сообщили SMS-код или пароль — это первый шаг.</li>
        <li><strong>Смените пароль банковского приложения</strong> и отключите незнакомые устройства.</li>
        <li><strong>Проверьте сеансы Telegram:</strong> Настройки → Устройства → «Завершить все другие сеансы».</li>
        <li><strong>Сохраните переписку и чек</strong> и подайте заявление в банк — для рассмотрения спорной операции нужны доказательства.</li>
        <li>Если сообщили только номер карты (не код, пароль или CVV) — деньги не спишут, но будьте осторожны с последующими звонками «сотрудников банка».</li>
      </ol>

      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Рекомендации по безопасности основаны на заявлениях Центробанка и открытых источниках; окончательный ответ по правилам банка даёт ваш банк.</p>
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
      title: "Telegram Premium sotib olganda karta ma'lumotlari xavfsizmi?",
      description:
        "Telegram Premium sotib olishda qaysi karta ma'lumotini berish mumkin, qaysi biri hech kimga berilmaydi, turli sotib olish yo'llarida karta qayerda qoladi va ma'lumot aytib qo'yilsa nima qilish kerak.",
      metaTitle: "Premium sotib olganda karta ma'lumotlari xavfsizmi? — 2026",
      metaDescription:
        "Telegram Premium uchun to'laganda karta xavfsizmi: karta raqami, CVV, SMS kod — qaysi biri xavfli. To'lov o'z ilovangizdan, botga faqat @username. @uzgetsbot bilan xavfsiz oling.",
      ogDescription:
        "Premium sotib olishda qaysi karta ma'lumoti xavfsiz, qaysi biri hech kimga berilmaydi — aniq jadval va 5 qoida.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Premium sotib olganda karta ma'lumotlarim xavfsizmi?", answer: "Ha, agar o'tkazmani o'zingizning Click, Payme, UzCard yoki Humo ilovangizdan qilsangiz va sotuvchiga faqat @username bersangiz. SMS kod, CVV, parol va Telegram login kodini hech kimga bermang." },
        { question: "Karta raqamimni bilishsa, pul yechib olishadimi?", answer: "Faqat karta raqami bilan pul yechib bo'lmaydi — buning uchun SMS/OTP kod yoki bank ilovasi paroli kerak. Lekin firibgarlar karta raqamini bilib, keyin 'bank xodimi' sifatida qo'ng'iroq qilib kod so'rashi mumkin." },
        { question: "Premium sotuvchi SMS kod so'rasa nima qilish kerak?", answer: "Darhol to'xtating. Premium yetkazish uchun SMS kod hech qachon kerak emas. Markaziy bank ham SMS kod va parollarni notanish shaxslarga bermaslikni ogohlantiradi." },
        { question: "Uzgets karta ma'lumotlarimni ko'radimi?", answer: "Botga karta raqami, muddati, CVV yoki SMS kod kiritilmaydi. O'tkazmani o'z ilovangizdan qilasiz. Maxfiylik siyosatiga ko'ra faqat @username, to'lov tizimi ma'lumotlari va tranzaksiya holati qayta ishlanadi." },
        { question: "Nima uchun Telegram ichida UzCard yoki Humo bilan to'lab bo'lmaydi?", answer: "Telegram ilovasi ichidagi to'lov App Store yoki Google Play orqali o'tadi va ular UzCard/Humo'ni qabul qilmaydi; Fragment esa TON bilan ishlaydi. Shuning uchun mahalliy karta bilan Premium odatda mahalliy xizmatlar orqali olinadi." },
        { question: "Karta ma'lumotimni firibgarga aytib qo'ydim, nima qilay?", answer: "Kartani darhol bloklang, bank ilovasi parolini almashtiring, Telegram'da boshqa seanslarni tugating, yozishma va chekni saqlab bankka ariza yozing." },
      ],
      finalCtaHeading: "Premium'ni karta ma'lumotlarini bermasdan oling",
      finalCtaBody: `${siteConfig.bot}ga faqat @username kerak. O'tkazmani o'zingizning UzCard, Humo, Click yoki Payme ilovangizdan qilasiz — Premium bir necha daqiqada faollashadi.`,
    },
    ru: {
      title: 'Безопасны ли данные карты при покупке Telegram Premium?',
      description:
        'Какие данные карты можно сообщать при покупке Telegram Premium, какие — никому, где остаётся карта при разных способах покупки и что делать, если данные уже переданы.',
      metaTitle: 'Безопасны ли данные карты при покупке Premium? — 2026',
      metaDescription:
        'Безопасна ли карта при оплате Telegram Premium: номер карты, CVV, SMS-код — что опасно. Оплата из своего приложения, в бот только @username. Покупайте безопасно в @uzgetsbot.',
      ogDescription:
        'Какие данные карты безопасно сообщать при покупке Premium, а какие — никому: таблица и 5 правил.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Безопасны ли данные карты при покупке Telegram Premium?', answer: 'Да, если перевод делаете из своего приложения Click, Payme, UzCard или Humo и сообщаете продавцу только @username. SMS-код, CVV, пароль и код входа в Telegram никому не передавайте.' },
        { question: 'Могут ли списать деньги, зная номер карты?', answer: 'Только по номеру карты деньги не списать — нужен SMS/OTP-код или пароль банковского приложения. Но мошенники, узнав номер, могут позвонить как «сотрудник банка» и попросить код.' },
        { question: 'Продавец Premium просит SMS-код — что делать?', answer: 'Сразу остановитесь. Для доставки Premium SMS-код никогда не нужен. Центробанк также предупреждает не сообщать SMS-коды и пароли посторонним.' },
        { question: 'Видит ли Uzgets данные моей карты?', answer: 'В бот не вводятся номер карты, срок, CVV или SMS-код. Перевод вы делаете из своего приложения. По политике конфиденциальности обрабатываются только @username, данные платёжной системы и статус транзакции.' },
        { question: 'Почему внутри Telegram нельзя оплатить UzCard или Humo?', answer: 'Оплата внутри Telegram проходит через App Store или Google Play, а они не принимают UzCard/Humo; Fragment работает с TON. Поэтому локальной картой Premium обычно покупают через местные сервисы.' },
        { question: 'Я сообщил данные карты мошеннику — что делать?', answer: 'Сразу заблокируйте карту, смените пароль банковского приложения, завершите другие сеансы Telegram, сохраните переписку и чек и подайте заявление в банк.' },
      ],
      finalCtaHeading: 'Купите Premium, не сообщая данные карты',
      finalCtaBody: `${siteConfig.bot} нужен только @username. Перевод вы делаете из своего приложения UzCard, Humo, Click или Payme — Premium активируется за пару минут.`,
    },
  },
}
