import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { PREMIUM_PERIODS } from '@/config/products'
import { siteConfig } from '@/config/site'
import { formatUzs } from '@/lib/format'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-click-orqali-sotib-olish'
const TODAY = '2026-08-12'

function AnswerBox({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <p>
      {uz ? "Telegram Premium'ni Click orqali olish uchun " : 'Чтобы купить Telegram Premium через Click, откройте '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">
        {siteConfig.bot}
      </a>
      {uz
        ? " botida Premium muddatini tanlang, qabul qiluvchining aniq @username manzilini kiriting va Click ilovasida to'lovni tasdiqlang. Paketlar 3 oyga "
        : ', выберите срок, укажите точный @username получателя и подтвердите оплату в приложении Click. Пакеты: 3 месяца — '}
      <strong>{formatUzs(PREMIUM_PERIODS[0].priceUzs)}</strong>
      {uz ? ', 6 oyga ' : ', 6 месяцев — '}
      <strong>{formatUzs(PREMIUM_PERIODS[1].priceUzs)}</strong>
      {uz ? ' va 12 oyga ' : ', 12 месяцев — '}
      <strong>{formatUzs(PREMIUM_PERIODS[2].priceUzs)}</strong>.
      {uz
        ? " Saytning o'zida to'lov qilinmaydi; Telegram paroli va login kodi kerak emas."
        : ' Оплата на самом сайте не проводится; пароль и код входа Telegram не нужны.'}
    </p>
  )
}

function PriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-3 text-left">{uz ? 'Muddat' : 'Срок'}</th>
            <th className="px-4 py-3 text-left">{uz ? 'Jami narx' : 'Итоговая цена'}</th>
            <th className="px-4 py-3 text-left">{uz ? 'Oyiga' : 'В месяц'}</th>
          </tr>
        </thead>
        <tbody>
          {PREMIUM_PERIODS.map((period) => (
            <tr key={period.months} className="border-t border-[var(--border)]">
              <td className="px-4 py-3 font-medium">{period.months} {uz ? 'oy' : 'мес.'}</td>
              <td className="px-4 py-3">{formatUzs(period.priceUzs)}</td>
              <td className="px-4 py-3">≈ {formatUzs(period.perMonthHint)}</td>
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
        <li><a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Premium FAQ</a> — {uz ? "Premium obunasi va 3/6/12 oylik sovg'a muddatlari" : 'подписка Premium и подарочные сроки 3/6/12 месяцев'}.</li>
        <li><a href="https://click.uz/uz/tarifs" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Click tariflari</a> — {uz ? "to'lov va o'tkazmalar uchun amaldagi tariflar" : 'действующие тарифы на платежи и переводы'}.</li>
        <li><a href="https://click.uz/en/faq" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Click FAQ</a> — {uz ? "kartani ulash, to'lov holati va xavfsizlik bo'yicha rasmiy ma'lumot" : 'официальная информация о картах, статусе платежа и безопасности'}.</li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Web research va Uzgets konfiguratsiyasi 2026-yil 12-avgustda tekshirildi. Xarid paytida bot va Click ko'rsatgan yakuniy summa amal qiladi."
          : 'Веб-источники и конфигурация Uzgets проверены 12 августа 2026 года. Действует итоговая сумма, показанная ботом и Click при покупке.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="click-orqali-qanday-ishlaydi">Click orqali Telegram Premium olish qanday ishlaydi?</h2>
      <p>Uzgets saytida login yoki karta formasi yo&apos;q. Saytdagi tugma sizni rasmiy <strong>{siteConfig.bot}</strong> botiga olib boradi: buyurtma botda yaratiladi, Click to&apos;lovi esa Click ilovasida tasdiqlanadi. To&apos;lov tasdiqlangach Premium buyurtmada ko&apos;rsatilgan Telegram akkauntiga biriktiriladi.</p>
      <p>Click bu yerda faqat to&apos;lov usuli. Premium&apos;ning imkoniyatlari, tanlangan muddati va qaysi qurilmalarda ishlashi Payme, Uzcard yoki Humo bilan to&apos;laganingizdan farq qilmaydi.</p>
      <InlineBotCTA lang="uz" text="Click orqali Premium buyurtmasini rasmiy botda boshlang." />

      <h2 id="olti-qadam">Telegram Premium&apos;ni Click orqali sotib olish — 6 qadam</h2>
      <ol>
        <li><a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> ni ochib <strong>START</strong> tugmasini bosing.</li>
        <li><strong>Telegram Premium</strong> mahsulotini tanlang.</li>
        <li>3, 6 yoki 12 oylik paketlardan birini belgilang.</li>
        <li>Premium tushadigan akkauntning aniq <strong>@username</strong> manzilini kiriting.</li>
        <li>To&apos;lov usullaridan <strong>Click</strong>ni tanlab, Click ilovasidagi so&apos;rovni oching.</li>
        <li>@username, muddat va yakuniy summani tekshirib to&apos;lovni tasdiqlang; chek va buyurtma ID&apos;sini saqlang.</li>
      </ol>
      <p>@username&apos;ni Telegram profilidan nusxalash ma&apos;qul. Noto&apos;g&apos;ri yoki mavjud bo&apos;lmagan username kiritilishi foydalanuvchi xatosi sifatida alohida ko&apos;rib chiqiladi.</p>

      <h2 id="narxlar">Click orqali Telegram Premium narxi qancha?</h2>
      <PriceTable lang="uz" />
      <p>Jadvaldagi narxlar joriy Uzgets konfiguratsiyasidan olinadi. Click rasmiy tarifida mahsulot va xizmatlar uchun to&apos;lov odatda 0% deb berilgan, ammo ayrim xizmatlar istisno bo&apos;lishi mumkin. Shuning uchun tasdiqlashdan oldin Click oynasidagi yakuniy summani tekshiring; botda ko&apos;rsatilmagan komissiyani oldindan va&apos;da qilib bo&apos;lmaydi.</p>
      <p>Paketlarni batafsil solishtirish uchun <Link href="/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">Telegram Premium narxlari va muddatlari</Link> qo&apos;llanmasini ko&apos;ring.</p>

      <h2 id="talablar">Click bilan to&apos;lash uchun nima kerak?</h2>
      <ul>
        <li>Click ishlaydigan telefon va faol Click akkaunti;</li>
        <li>Click&apos;ka ulangan, mablag&apos;i yetarli to&apos;lov manbasi;</li>
        <li>Premium oluvchining aniq Telegram @username manzili;</li>
        <li>Click ilovasida to&apos;lovni tasdiqlash imkoniyati.</li>
      </ul>
      <p>Telegram paroli, SMS orqali kelgan Telegram login kodi, QR-login yoki 2FA paroli kerak emas. Uzgets bunday maxfiy ma&apos;lumotlarni so&apos;ramaydi.</p>

      <h2 id="xavfsizlik">Xavfsiz to&apos;lov checklisti</h2>
      <ul>
        <li>Faqat sayt bog&apos;langan <strong>{siteConfig.bot}</strong> botidan foydalaning.</li>
        <li>Click tasdiqlash kodi va Telegram login kodini hech kimga bermang.</li>
        <li>Tasdiqlash oynasidagi xizmat, summa va akkauntni qayta tekshiring.</li>
        <li>Natija chiqquncha elektron chek va buyurtma ID&apos;sini saqlang.</li>
        <li>Shubhali havola yoki boshqa bot orqali qayta to&apos;lov qilmang.</li>
      </ul>

      <h2 id="yetkazish">To&apos;lovdan keyin Premium qachon tushadi?</h2>
      <p>Uzgets shartlariga ko&apos;ra, Click to&apos;lovi tasdiqlangach Premium ko&apos;rsatilgan @username akkauntiga odatda tezda biriktiriladi. Aniq vaqt texnik holatga bog&apos;liq, shu sabab “darhol” kafolati berilmaydi. Premium shu akkaunt kirilgan barcha qo&apos;llab-quvvatlanadigan Telegram ilovalarida ishlaydi.</p>

      <h2 id="tolov-otmadi">Click to&apos;lovi o&apos;tmadi: sabab va yechim</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Belgi</th><th className="px-4 py-3 text-left">Ehtimoliy sabab</th><th className="px-4 py-3 text-left">Amal</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Mablag&apos; yetarli emas</td><td className="px-4 py-3">Balans summadan past</td><td className="px-4 py-3">Balans va yakuniy summani tekshiring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Karta bloklangan</td><td className="px-4 py-3">Bank yoki Click cheklovi</td><td className="px-4 py-3">Click/bank ko&apos;rsatmasiga amal qiling</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">So&apos;rov muddati tugadi</td><td className="px-4 py-3">Tasdiq kechikdi</td><td className="px-4 py-3">Botdagi buyurtma holatini tekshirib, yangi so&apos;rov yarating</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Pul yechildi, Premium yo&apos;q</td><td className="px-4 py-3">Tasdiq yoki yetkazish kechikdi</td><td className="px-4 py-3">Qayta to&apos;lamang; chek va ID bilan supportga yozing</td></tr>
          </tbody>
        </table>
      </div>
      <p>Premium akkauntda ko&apos;rinmasa, <Link href="/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">diagnostika qo&apos;llanmasidagi</Link> tekshiruvlarni bajaring. Muammo Uzgets tarafida bo&apos;lsa, mahsulot qayta yuborilishi yoki to&apos;lov qaytarilishi mumkin; muvaffaqiyatli yetkazilgan mahsulot uchun to&apos;lov qaytarilmaydi.</p>

      <h2 id="click-yoki-payme">Click yoki Payme: qaysi birini tanlash kerak?</h2>
      <p>Premium paketi va yetkaziladigan mahsulot bir xil. Click sizda faol va to&apos;lovni ilovada tasdiqlash qulay bo&apos;lsa — Click&apos;ni tanlang. Payme oqimi qulayroq bo&apos;lsa, <Link href="/blog/telegram-premium-payme-orqali-sotib-olish" className="text-[var(--primary)] hover:underline">Payme orqali Premium olish</Link> yo&apos;riqnomasidan foydalaning. Har ikki holatda bot ko&apos;rsatgan joriy to&apos;lov variantlari amal qiladi.</p>
      <Sources lang="uz" />
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="kak-rabotaet">Как работает покупка Telegram Premium через Click?</h2>
      <p>На сайте Uzgets нет формы входа или оплаты. Заказ создаётся только в официальном боте <strong>{siteConfig.bot}</strong>, а платёж подтверждается в приложении Click. После подтверждения Premium привязывается к аккаунту Telegram, указанному в заказе.</p>
      <InlineBotCTA lang="ru" text="Начните заказ Premium с оплатой через Click в официальном боте." />

      <h2 id="shest-shagov">Как купить Telegram Premium через Click — 6 шагов</h2>
      <ol>
        <li>Откройте <a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> и нажмите <strong>START</strong>.</li>
        <li>Выберите <strong>Telegram Premium</strong>.</li>
        <li>Выберите пакет на 3, 6 или 12 месяцев.</li>
        <li>Укажите точный <strong>@username</strong> получателя.</li>
        <li>Выберите <strong>Click</strong> и откройте запрос в приложении.</li>
        <li>Проверьте аккаунт, срок и сумму, подтвердите платёж и сохраните чек с ID заказа.</li>
      </ol>

      <h2 id="ceny">Цены Telegram Premium при оплате через Click</h2>
      <PriceTable lang="ru" />
      <p>Цены берутся из текущей конфигурации Uzgets. В официальных тарифах Click платежи за товары и услуги обычно указаны с комиссией 0%, но возможны исключения. Перед подтверждением проверьте итоговую сумму в Click; действующей считается сумма на экране оплаты.</p>
      <p>Сравните сроки в <Link href="/ru/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">таблице цен Premium</Link>.</p>

      <h2 id="chto-nuzhno">Что нужно для оплаты?</h2>
      <ul><li>Активный аккаунт Click и доступ к приложению;</li><li>подключённый источник оплаты с достаточным балансом;</li><li>точный @username получателя;</li><li>возможность подтвердить платёж в Click.</li></ul>
      <p>Пароль Telegram, код входа, QR-вход и пароль 2FA не нужны. Uzgets не запрашивает эти секретные данные.</p>

      <h2 id="bezopasnost">Чек-лист безопасности</h2>
      <ul><li>Используйте только <strong>{siteConfig.bot}</strong> по ссылке с сайта.</li><li>Никому не сообщайте коды Click и Telegram.</li><li>До оплаты проверьте сумму, срок и @username.</li><li>Сохраните чек и ID заказа.</li><li>Не платите повторно через подозрительную ссылку или другой бот.</li></ul>

      <h2 id="dostavka">Когда появится Premium?</h2>
      <p>После подтверждения оплаты Premium обычно быстро привязывается к указанному @username, но точное время зависит от технического состояния. Гарантия мгновенной доставки не даётся. Подписка работает на всех поддерживаемых устройствах, где выполнен вход в этот аккаунт.</p>

      <h2 id="oshibka">Платёж Click не прошёл или Premium не появился</h2>
      <ol><li>Проверьте статус платежа и баланс в Click.</li><li>Сверьте @username и ID заказа в боте.</li><li>Не создавайте повторный платёж, если деньги уже списаны.</li><li>Перезапустите Telegram и проверьте профиль.</li><li>Отправьте чек, ID заказа и @username поддержке внутри бота.</li></ol>
      <p>Дополнительные шаги есть в <Link href="/ru/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">инструкции по диагностике</Link>. Если проблема на стороне Uzgets, товар может быть отправлен повторно или платёж возвращён. После успешной доставки возврат не производится.</p>

      <h2 id="click-ili-payme">Click или Payme?</h2>
      <p>Продукт и срок Premium одинаковы. Выберите Click, если это приложение уже настроено и удобно для подтверждения. Для второго варианта используйте <Link href="/ru/blog/telegram-premium-payme-orqali-sotib-olish" className="text-[var(--primary)] hover:underline">инструкцию по оплате через Payme</Link>.</p>
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
      title: "Telegram Premium'ni Click orqali sotib olish: narx va yo'riqnoma",
      description: "Click orqali Telegram Premium olish: @uzgetsbot'da 6 qadam, 3/6/12 oylik narxlar, komissiya, xavfsizlik va to'lov muammolari yechimi.",
      metaTitle: "Telegram Premium'ni Click orqali olish — 6 qadam",
      metaDescription: "Click orqali Telegram Premium oling: 3 oy 168 000 so'mdan, 6 ta aniq qadam, joriy narxlar, xavfsizlik va to'lov muammosi yechimi.",
      ogDescription: "Click orqali Telegram Premium: joriy narxlar, 6 qadam va xavfsiz to'lov checklisti.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: () => <AnswerBox lang="uz" />,
      Body: UzBody,
      faq: [
        { question: "Click orqali Telegram Premium olsa bo'ladimi?", answer: "Ha. @uzgetsbot'da Premium muddati va qabul qiluvchining @username manzilini tanlab, to'lovni Click ilovasida tasdiqlash mumkin." },
        { question: "Click orqali Premium qancha turadi?", answer: "2026-yil 12-avgustdagi Uzgets narxlari: 3 oy — 168 000 so'm, 6 oy — 228 000 so'm, 12 oy — 408 000 so'm. Xarid ekranidagi summa yakuniy." },
        { question: "Click to'lovi uchun komissiya bormi?", answer: "Click rasmiy tarifida mahsulot va xizmatlar to'lovi odatda 0%, ammo istisnolar mavjud. Tasdiqlashdan oldin Click ko'rsatgan yakuniy summani tekshiring." },
        { question: "Premium uchun Telegram paroli kerakmi?", answer: "Yo'q. Faqat Premium tushadigan aniq @username kerak. Telegram paroli, login kodi, QR-login va 2FA parolini bermang." },
        { question: "Click'da pul yechildi, Premium kelmadi. Nima qilaman?", answer: "Takroriy to'lov qilmang. Click cheki, buyurtma ID va @username bilan @uzgetsbot ichidagi supportga murojaat qiling." },
        { question: "Click orqali boshqa odamga Premium olib bersa bo'ladimi?", answer: "Ha. Buyurtmada qabul qiluvchining aniq @username manzilini kiriting; Premium o'sha akkauntga biriktiriladi." },
      ],
      finalCtaHeading: "Click orqali Premium olishga tayyormisiz?",
      finalCtaBody: "@uzgetsbot'da muddat va @username'ni tanlang, yakuniy summani tekshirib Click ilovasida tasdiqlang.",
    },
    ru: {
      title: 'Как купить Telegram Premium через Click: цены и инструкция',
      description: 'Покупка Telegram Premium через Click: 6 шагов в @uzgetsbot, цены на 3/6/12 месяцев, комиссия, безопасность и решение проблем.',
      metaTitle: 'Telegram Premium через Click — цены и 6 шагов',
      metaDescription: 'Купите Telegram Premium через Click: от 168 000 сум за 3 месяца, 6 шагов, актуальные цены, безопасность и решение проблем оплаты.',
      ogDescription: 'Telegram Premium через Click: актуальные цены, 6 шагов и чек-лист безопасности.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: () => <AnswerBox lang="ru" />,
      Body: RuBody,
      faq: [
        { question: 'Можно ли купить Telegram Premium через Click?', answer: 'Да. Выберите срок и @username в @uzgetsbot, затем подтвердите платёж в приложении Click.' },
        { question: 'Сколько стоит Premium через Click?', answer: 'На 12 августа 2026 года цены Uzgets: 3 месяца — 168 000 сум, 6 — 228 000, 12 — 408 000. Итоговой считается сумма на экране оплаты.' },
        { question: 'Есть ли комиссия Click?', answer: 'В официальных тарифах Click платежи за товары и услуги обычно указаны с комиссией 0%, но есть исключения. Проверяйте итоговую сумму до подтверждения.' },
        { question: 'Нужен ли пароль Telegram?', answer: 'Нет. Нужен только точный @username. Не сообщайте пароль, код входа, QR-вход или пароль 2FA.' },
        { question: 'Деньги списались, но Premium не появился. Что делать?', answer: 'Не платите повторно. Отправьте чек Click, ID заказа и @username поддержке внутри @uzgetsbot.' },
        { question: 'Можно купить Premium другому человеку?', answer: 'Да. Укажите точный @username получателя — Premium будет привязан к этому аккаунту.' },
      ],
      finalCtaHeading: 'Готовы купить Premium через Click?',
      finalCtaBody: 'Выберите срок и @username в @uzgetsbot, проверьте итоговую сумму и подтвердите платёж в Click.',
    },
  },
}
