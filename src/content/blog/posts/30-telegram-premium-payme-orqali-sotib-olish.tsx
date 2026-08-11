import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-payme-orqali-sotib-olish'
const TODAY = '2026-08-11'

function UzAnswerBox() {
  return <p>Telegram Premium&apos;ni Payme orqali olish uchun <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a> da 3, 6 yoki 12 oylik paketni tanlang, Premium tushadigan aniq @username&apos;ni kiriting va bot ko&apos;rsatgan Payme yoki mahalliy karta to&apos;lov oqimida summani tasdiqlang. Eng kichik paket — <strong>{formatUzs(PREMIUM_PERIODS[0].priceUzs)}ga 3 oy</strong>. Telegram paroli, login kodi yoki 2FA paroli kerak emas.</p>
}

function RuAnswerBox() {
  return <p>Чтобы купить Telegram Premium через Payme, выберите подписку на 3, 6 или 12 месяцев в <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>, укажите точный @username получателя и подтвердите сумму в показанном ботом потоке Payme или локальной карты. Минимальный пакет — <strong>3 месяца за {formatUzs(PREMIUM_PERIODS[0].priceUzs)}</strong>. Пароль Telegram, код входа и пароль 2FA не нужны.</p>
}

function PriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]"><table className="w-full text-sm"><thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">{uz ? 'Muddat' : 'Срок'}</th><th className="px-4 py-3 text-left">{uz ? 'Jami narx' : 'Общая цена'}</th><th className="px-4 py-3 text-left">{uz ? 'Oyiga' : 'В месяц'}</th></tr></thead><tbody>{PREMIUM_PERIODS.map((p) => <tr key={p.months} className="border-t border-[var(--border)]"><td className="px-4 py-3 font-medium">{p.months} {uz ? 'oy' : 'мес.'}</td><td className="px-4 py-3">{formatUzs(p.priceUzs)}</td><td className="px-4 py-3">≈ {formatUzs(p.perMonthHint)}</td></tr>)}</tbody></table></div>
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm"><div className="mb-2 font-semibold">{uz ? 'Manbalar va tekshiruv' : 'Источники и проверка'}</div><ul className="space-y-2 text-[var(--text-muted)]">
    <li><a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Premium FAQ</a> — {uz ? "obuna, sovg'a va to'lov bo'yicha rasmiy ma'lumot" : 'официальные сведения о подписке, подарках и оплате'}.</li>
    <li><a href="https://p2p.payme.uz/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Payme</a> — {uz ? "Uzcard/Humo o'tkazmalari va to'lovlari" : 'платежи и переводы Uzcard/Humo'}.</li>
    <li><a href="https://help.payme.uz/uz/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Payme yordam markazi</a> — {uz ? "kartalar, chek va to'lov monitoringi" : 'карты, чеки и мониторинг платежей'}.</li>
  </ul><p className="mt-3 text-[var(--text-muted)]">{uz ? "Web research va Uzgets narxlari 2026-yil 11-avgustda tekshirildi. Botdagi joriy summa yakuniy hisoblanadi." : 'Веб-источники и цены Uzgets проверены 11 августа 2026 года. Итоговой считается текущая сумма в боте.'}</p></div>
}

function UzBody() {
  return <>
    <h2 id="payme-qanday-ishlaydi">Payme orqali Premium olish qanday ishlaydi?</h2>
    <p>Payme Telegram Premium&apos;ning ichki to&apos;lov tugmasi emas. Uzgets orqali xaridda siz botda buyurtma yaratasiz, so&apos;mda mahalliy to&apos;lov qilasiz va Premium ko&apos;rsatilgan Telegram akkauntiga biriktiriladi. Saytning o&apos;zida karta ma&apos;lumoti yoki login kiritilmaydi.</p>
    <p>Payme rasmiy sahifasi Uzcard va Humo kartalari orqali to&apos;lov va o&apos;tkazmalarni qo&apos;llashini ko&apos;rsatadi. Botdagi mavjud tugma yoki to&apos;lov yo&apos;li vaqt o&apos;tishi bilan o&apos;zgarishi mumkin — ekrandagi joriy ko&apos;rsatmaga amal qiling.</p>
    <InlineBotCTA lang="uz" text="Payme orqali Premium buyurtmasini rasmiy botda boshlang." />

    <h2 id="olti-qadam">Telegram Premium&apos;ni Payme orqali olish — 6 qadam</h2>
    <ol><li><a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> ni ochib <strong>START</strong> bosing.</li><li><strong>Telegram Premium</strong> bo&apos;limini tanlang.</li><li>3, 6 yoki 12 oylik paketni belgilang.</li><li>Premium tushadigan profilning aniq <strong>@username</strong> manzilini kiriting.</li><li>Bot ko&apos;rsatgan Payme yoki mahalliy karta to&apos;lov oqimini oching.</li><li>Qabul qiluvchi, muddat va summani tekshirib Payme&apos;da tasdiqlang; chekni saqlang.</li></ol>
    <p>@username&apos;ni qo&apos;lda taxmin qilib yozmang — Telegram profilidan nusxalash xavfsizroq. Noto&apos;g&apos;ri username foydalanuvchi xatosi hisoblanadi va alohida ko&apos;rib chiqiladi.</p>

    <h2 id="narxlar">Payme orqali Premium narxlari</h2>
    <PriceTable lang="uz" />
    <p>Payme tanlanishi Uzgets katalogidagi paket narxini o&apos;zgartirmaydi. Agar Payme tasdiqlash oynasida alohida komissiya yoki boshqa yakuniy summa ko&apos;rsatilsa, to&apos;lashdan oldin tekshiring. Narxlar o&apos;zgarishi mumkin; xarid paytidagi bot narxi amal qiladi.</p>

    <h2 id="qaysi-paket">Qaysi muddatni tanlash kerak?</h2>
    <ul><li><strong>3 oy:</strong> Premium&apos;ni birinchi marta sinash yoki qisqa sovg&apos;a uchun.</li><li><strong>6 oy:</strong> narx va muddat o&apos;rtasidagi muvozanatni istaganlar uchun.</li><li><strong>12 oy:</strong> Telegram&apos;ni doimiy ishlatadigan va oyiga eng past xarajatni istaganlar uchun.</li></ul>
    <p>Batafsil taqqoslashni <Link href="/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">Premium paketlari va narxlari</Link> maqolasida ko&apos;ring.</p>

    <h2 id="xavfsizlik">Xavfsiz to&apos;lov checklisti</h2>
    <ul><li>Faqat <strong>{siteConfig.bot}</strong> va saytdagi rasmiy havoladan foydalaning.</li><li>Telegram paroli, SMS login kodi, QR-login yoki 2FA parolini bermang.</li><li>Payme tasdiqlash kodini chatdagi hech kimga yubormang.</li><li>Paket, summa va @username&apos;ni tasdiqlashdan oldin qayta tekshiring.</li><li>Natija chiqquncha Payme cheki va buyurtma ID&apos;sini saqlang.</li></ul>

    <h2 id="qachon-faollashadi">Premium qachon faollashadi?</h2>
    <p>Uzgets shartlariga ko&apos;ra, to&apos;lov tasdiqlangach mahsulot ko&apos;rsatilgan @username akkauntiga odatda tezda biriktiriladi. Premium barcha qurilmalarda shu akkaunt bilan sinxronlanadi. U qo&apos;lda yoqilmaydi; profil yonidagi Premium belgisi va Sozlamalar bo&apos;limidagi muddat orqali tekshiriladi.</p>

    <h2 id="pul-yechildi">Pul yechildi, Premium kelmadi — nima qilish kerak?</h2>
    <ol><li>Payme&apos;dagi operatsiya holati va chekni tekshiring.</li><li>Botdagi buyurtma ID&apos;si va @username to&apos;g&apos;riligini tekshiring.</li><li>Telegram&apos;ni to&apos;liq yopib qayta oching va profilni tekshiring.</li><li>Takroriy to&apos;lov qilmang.</li><li>Buyurtma ID, chek va @username bilan bot ichidagi supportga yozing.</li></ol>
    <p>Muammo Uzgets tarafida bo&apos;lsa, amaldagi shartlarga ko&apos;ra mahsulot qayta yuboriladi yoki to&apos;lov qaytariladi. Premium muvaffaqiyatli yetkazilgach to&apos;lov qaytarilmaydi. Faollashish diagnostikasi uchun <Link href="/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">Premium ko&apos;rinmayapti</Link> qo&apos;llanmasini o&apos;qing.</p>

    <h2 id="payme-yoki-click">Payme va Click: qaysi biri yaxshiroq?</h2>
    <p>Uzgets paketi va Premium imkoniyatlari bir xil. Farq siz ishlatadigan to&apos;lov ilovasida: kartangiz qaysi servisga bog&apos;langan va qaysi biri joriy paytda qulay ishlasa, o&apos;shani tanlang. Click yoki Uzcard/Humo uchun mavjud to&apos;lov yo&apos;li botda ko&apos;rsatiladi.</p>
    <Sources lang="uz" />
  </>
}

function RuBody() {
  return <>
    <h2 id="kak-rabotaet">Как работает покупка Premium через Payme?</h2>
    <p>Payme не является встроенной кнопкой оплаты Telegram Premium. При покупке через Uzgets заказ создаётся в боте, оплата проходит в сумах, а Premium привязывается к указанному аккаунту Telegram. На сайте нет формы входа или ввода банковской карты.</p>
    <p>Официальные страницы Payme подтверждают поддержку платежей и переводов с Uzcard и Humo. Доступная кнопка или платёжный поток в боте может меняться — следуйте текущей инструкции на экране.</p>
    <InlineBotCTA lang="ru" text="Начните заказ Premium через Payme в официальном боте." />

    <h2 id="shest-shagov">Как купить Telegram Premium через Payme — 6 шагов</h2>
    <ol><li>Откройте <a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> и нажмите <strong>START</strong>.</li><li>Выберите <strong>Telegram Premium</strong>.</li><li>Выберите пакет на 3, 6 или 12 месяцев.</li><li>Введите точный <strong>@username</strong> получателя.</li><li>Откройте показанный ботом поток Payme или локальной карты.</li><li>Проверьте аккаунт, срок и сумму, подтвердите платёж и сохраните чек.</li></ol>
    <p>Безопаснее скопировать @username из профиля Telegram. Ошибка в имени считается ошибкой пользователя и рассматривается отдельно.</p>

    <h2 id="ceny">Цены Premium через Payme</h2>
    <PriceTable lang="ru" />
    <p>Выбор Payme не меняет цену каталога Uzgets. Если Payme показывает отдельную комиссию или другую итоговую сумму, проверьте её до подтверждения. При покупке действует текущая цена в боте.</p>

    <h2 id="paket">Какой срок выбрать?</h2>
    <ul><li><strong>3 месяца:</strong> чтобы впервые попробовать Premium или сделать небольшой подарок.</li><li><strong>6 месяцев:</strong> баланс срока и ежемесячной стоимости.</li><li><strong>12 месяцев:</strong> для постоянного использования и минимальной цены за месяц.</li></ul>
    <p>Подробности — в <Link href="/ru/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">сравнении пакетов Premium</Link>.</p>

    <h2 id="bezopasnost">Чек-лист безопасной оплаты</h2>
    <ul><li>Используйте только <strong>{siteConfig.bot}</strong> по официальной ссылке сайта.</li><li>Не сообщайте пароль Telegram, SMS-код, QR-вход или пароль 2FA.</li><li>Не отправляйте код подтверждения Payme в чат.</li><li>Проверьте пакет, сумму и @username до оплаты.</li><li>Сохраните чек Payme и ID заказа до результата.</li></ul>

    <h2 id="aktivaciya">Когда активируется Premium?</h2>
    <p>После подтверждения оплаты продукт обычно быстро привязывается к указанному @username. Premium синхронизируется на всех устройствах этого аккаунта. Проверить его можно по значку у профиля и сроку в настройках.</p>

    <h2 id="spisali">Деньги списались, но Premium не появился</h2>
    <ol><li>Проверьте статус и чек в Payme.</li><li>Проверьте ID заказа и @username в боте.</li><li>Полностью перезапустите Telegram.</li><li>Не оплачивайте заказ повторно.</li><li>Отправьте поддержке ID заказа, чек и @username.</li></ol>
    <p>Если проблема на стороне Uzgets, товар отправляется повторно или платёж возвращается. После успешной доставки Premium оплата не возвращается. Дополнительные шаги есть в <Link href="/ru/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">инструкции по активации</Link>.</p>

    <h2 id="payme-ili-click">Payme или Click?</h2>
    <p>Пакет Uzgets и возможности Premium одинаковы. Выбирайте приложение, где ваша карта уже подключена и которое удобно работает сейчас. Доступный поток Click или Uzcard/Humo будет показан в боте.</p>
    <Sources lang="ru" />
  </>
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'howto',
  locales: {
    uz: {
      title: "Telegram Premium'ni Payme orqali sotib olish: narx va 6 qadam",
      description: "Payme orqali Telegram Premium olish: @uzgetsbot'da 6 qadam, 3/6/12 oylik narxlar, xavfsizlik va to'lovdan keyingi yechimlar.",
      metaTitle: "Telegram Premium'ni Payme orqali olish — 6 qadam",
      metaDescription: "Payme orqali Telegram Premium oling: 3 oy 168 000 so'mdan, 6 ta aniq qadam, Uzcard/Humo, xavfsiz to'lov va muammo yechimi.",
      ogDescription: "Payme orqali Telegram Premium: joriy narxlar, 6 qadam va xavfsiz to'lov checklisti.",
      answerBoxTitle: 'Qisqa javob', answerBoxBody: UzAnswerBox, Body: UzBody,
      faq: [
        { question: "Payme orqali Telegram Premium olsa bo'ladimi?", answer: "Ha. @uzgetsbot'da muddat va @username'ni tanlab, bot ko'rsatgan Payme yoki mahalliy karta to'lov oqimida summani tasdiqlash mumkin." },
        { question: "Payme orqali Premium qancha turadi?", answer: "2026-yil 11-avgustda Uzgets narxlari: 3 oy — 168 000 so'm, 6 oy — 228 000 so'm, 12 oy — 408 000 so'm. Xarid paytidagi bot summasi yakuniy." },
        { question: "Premium uchun Telegram paroli kerakmi?", answer: "Yo'q. Faqat Premium tushadigan aniq @username kerak. Telegram paroli, login kodi, QR-login va 2FA parolini bermang." },
        { question: "Boshqa odamga Premium olib bersam bo'ladimi?", answer: "Ha. Buyurtmada qabul qiluvchining aniq @username manzilini kiriting. Premium o'sha akkauntga biriktiriladi." },
        { question: "Payme'da pul yechildi, Premium kelmadi. Nima qilaman?", answer: "Takroriy to'lov qilmang. Chek, buyurtma ID va @username bilan bot ichidagi rasmiy supportga murojaat qiling." },
        { question: "Uzgets Premium avtomatik uzayadimi?", answer: "Yo'q. Uzgets paketlari bir martalik to'lov; muddat tugagach davom ettirish uchun yangi buyurtma beriladi." },
      ],
      finalCtaHeading: 'Payme orqali Premium olishga tayyormisiz?', finalCtaBody: "@uzgetsbot'da muddat va @username'ni tanlang, summani tekshirib mavjud Payme oqimida to'lang.",
    },
    ru: {
      title: 'Как купить Telegram Premium через Payme: цены и 6 шагов',
      description: 'Покупка Telegram Premium через Payme: 6 шагов в @uzgetsbot, цены на 3/6/12 месяцев, безопасность и решение проблем оплаты.',
      metaTitle: 'Telegram Premium через Payme — цены и 6 шагов',
      metaDescription: 'Купите Telegram Premium через Payme: от 168 000 сум за 3 месяца, 6 шагов, Uzcard/Humo, безопасная оплата и решение проблем.',
      ogDescription: 'Telegram Premium через Payme: актуальные цены, 6 шагов и чек-лист безопасности.',
      answerBoxTitle: 'Краткий ответ', answerBoxBody: RuAnswerBox, Body: RuBody,
      faq: [
        { question: 'Можно ли купить Telegram Premium через Payme?', answer: 'Да. Выберите срок и @username в @uzgetsbot, затем подтвердите сумму в показанном ботом потоке Payme или локальной карты.' },
        { question: 'Сколько стоит Premium через Payme?', answer: 'На 11 августа 2026 года цены Uzgets: 3 месяца — 168 000 сум, 6 — 228 000, 12 — 408 000. Итоговой считается сумма в боте.' },
        { question: 'Нужен ли пароль Telegram?', answer: 'Нет. Нужен только точный @username. Не сообщайте пароль, код входа, QR-вход или пароль 2FA.' },
        { question: 'Можно купить Premium другому человеку?', answer: 'Да. Укажите точный @username получателя — Premium привяжется к этому аккаунту.' },
        { question: 'Payme списал деньги, но Premium не появился. Что делать?', answer: 'Не платите повторно. Отправьте официальной поддержке в боте чек, ID заказа и @username.' },
        { question: 'Premium от Uzgets продлевается автоматически?', answer: 'Нет. Это разовая оплата; после окончания срока для продолжения создаётся новый заказ.' },
      ],
      finalCtaHeading: 'Готовы купить Premium через Payme?', finalCtaBody: 'Выберите срок и @username в @uzgetsbot, проверьте сумму и оплатите через доступный поток Payme.',
    },
  },
}
