import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, STARS_BASE } from '@/config/products'
import { formatNumber, formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-payme-orqali-sotib-olish'
const TODAY = '2026-08-09'
const FEATURED = [50, 100, 500, 1000, 2500, 5000]

function UzAnswerBox() {
  return <p>Telegram Stars&apos;ni Payme orqali olish uchun <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a> da Stars miqdori va qabul qiluvchi @username&apos;ni kiriting, bot ko&apos;rsatgan Payme/mahalliy to&apos;lov oqimini tanlang va summani tasdiqlang. Minimal paket <strong>{STARS_BASE.amount} Stars — {formatUzs(STARS_BASE.priceUzs)}</strong>, ya&apos;ni 1 Stars {STARS_BASE.priceUzs / STARS_BASE.amount} so&apos;m. Telegram paroli yoki login kodi kerak emas.</p>
}

function RuAnswerBox() {
  return <p>Чтобы купить Telegram Stars через Payme, укажите количество и @username получателя в <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>, выберите доступный поток Payme/локальной карты и подтвердите сумму. Минимальный пакет — <strong>{STARS_BASE.amount} Stars за {formatUzs(STARS_BASE.priceUzs)}</strong>, то есть {STARS_BASE.priceUzs / STARS_BASE.amount} сум за 1 Star. Пароль Telegram и код входа не нужны.</p>
}

function PriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Stars</th><th className="px-4 py-3 text-left">{lang === 'uz' ? 'Narx' : 'Цена'}</th><th className="px-4 py-3 text-left">{lang === 'uz' ? '1 Stars' : '1 Star'}</th><th className="px-4 py-3 text-left">{lang === 'uz' ? 'Paket' : 'Пакет'}</th></tr></thead>
        <tbody>{STARS_PACKS.filter((p) => FEATURED.includes(p.amount)).map((p) => <tr key={p.amount} className="border-t border-[var(--border)]"><td className="px-4 py-3 font-medium">{formatNumber(p.amount)} ⭐</td><td className="px-4 py-3">{formatUzs(p.priceUzs)}</td><td className="px-4 py-3">{p.priceUzs / p.amount} {lang === 'uz' ? "so'm" : 'сум'}</td><td className="px-4 py-3"><Link href={localePath(lang, `/stars/${p.slug}`)} className="text-[var(--primary)] hover:underline">{lang === 'uz' ? 'Batafsil →' : 'Подробнее →'}</Link></td></tr>)}</tbody>
      </table>
    </div>
  )
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm"><div className="mb-2 font-semibold">{uz ? 'Manbalar' : 'Источники'}</div><ul className="space-y-2 text-[var(--text-muted)]">
    <li><a href="https://p2p.payme.uz/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">p2p.payme.uz</a> — {uz ? 'Payme to‘lov va Uzcard/Humo o‘tkazmalari rasmiy sahifasi' : 'официальная страница Payme об оплате и переводах Uzcard/Humo'}</li>
    <li><a href="https://help.payme.uz/uz/chavo/payme-card---elektronnyy-koshelek/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">help.payme.uz</a> — {uz ? 'Payme CARD rasmiy yordam sahifasi' : 'официальная справка Payme CARD'}</li>
    <li><a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">core.telegram.org/api/stars</a> — {uz ? 'Telegram Stars rasmiy hujjati' : 'официальная документация Telegram Stars'}</li>
    <li><a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">telegram.org/tos/stars</a> — {uz ? 'Stars foydalanish va refund shartlari' : 'условия использования и возврата Stars'}</li>
  </ul><p className="mt-3 text-[var(--text-muted)]">{uz ? 'Uzgets narxlari 2026-yil 9-avgust holatiga tekshirildi. Botdagi joriy summa yakuniy hisoblanadi.' : 'Цены Uzgets проверены 9 августа 2026 года. Итоговой считается текущая сумма в боте.'}</p></div>
}

function UzBody() {
  return <>
    <h2 id="payme-va-stars">Payme Telegram Stars’ning ichki to‘lov usulimi?</h2>
    <p>Yo‘q. Payme — O‘zbekistondagi mahalliy to‘lov ilovasi, Telegram Stars esa Telegram ichidagi virtual birlik. Payme Telegram’ning ichki Stars oynasida bevosita ko‘rinmasligi mumkin. Uzgets oqimida siz so‘mda to‘lov qilasiz, Stars esa ko‘rsatilgan Telegram akkauntiga yetkaziladi.</p>
    <p>Payme rasmiy ma’lumotiga ko‘ra, ilova Uzcard va Humo orqali to‘lov hamda o‘tkazmalarni qo‘llaydi. Payme CARD hamyonini ham Uzcard/Humo’dan to‘ldirish mumkin.</p>
    <InlineBotCTA lang="uz" text="Payme bilan Stars olish uchun botda buyurtmani boshlang." />

    <h2 id="qadamlar">Payme orqali Stars olish — 6 qadam</h2>
    <ol><li><a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> ni oching va <strong>START</strong> bosing.</li><li><strong>Telegram Stars</strong> bo‘limini tanlang.</li><li>Kerakli Stars miqdorini tanlang.</li><li>Stars tushadigan akkauntning aniq <strong>@username</strong> manzilini kiriting.</li><li>Bot ko‘rsatgan Payme yoki mahalliy karta to‘lov oqimini oching.</li><li>Qabul qiluvchi va summani tekshirib, Payme ichida tasdiqlang.</li></ol>
    <p>Tugma nomi va tasdiqlash bosqichi Payme versiyasi hamda botdagi mavjud to‘lov oqimiga qarab farq qilishi mumkin. Har doim botdagi joriy ko‘rsatmaga amal qiling.</p>

    <h2 id="narxlar">Payme orqali Stars narxlari</h2>
    <p>Uzgets bazaviy kursi <strong>1 Stars = {STARS_BASE.priceUzs / STARS_BASE.amount} so‘m</strong>. Payme tanlanishi katalog narxini o‘zgartirmaydi; ilova alohida komissiya ko‘rsatsa, tasdiqlashdan oldin yakuniy summani tekshiring.</p>
    <PriceTable lang="uz" />
    <p>Barcha paketlar <Link href="/stars">Telegram Stars narxlari</Link> sahifasida mavjud.</p>

    <h2 id="nima-kerak">To‘lovdan oldin nima kerak?</h2>
    <ul><li>faol va yangilangan Payme ilovasi;</li><li>yetarli mablag‘li Uzcard/Humo yoki Payme ko‘rsatgan balans manbasi;</li><li>qabul qiluvchining aniq @username’i;</li><li>barqaror internet;</li><li>chek va buyurtma ID’sini saqlash.</li></ul>
    <p>Telegram paroli, login SMS-kodi, QR-login yoki 2FA paroli kerak emas.</p>

    <h2 id="xavfsizlik">Payme orqali Stars olish xavfsizmi?</h2>
    <p>Xavfsizlik ikki qismdan iborat: Payme’dagi pul to‘lovi va Telegram’dagi Stars yetkazilishi. Payme oynasida summa va qabul qiluvchini tekshiring; Telegram uchun esa faqat @username kerak.</p>
    <ul><li>Botga sayt ichidagi rasmiy havola orqali kiring.</li><li>Payme tasdiqlash kodini chatda hech kimga yubormang.</li><li>Karta CVV’si va Telegram login kodini bermang.</li><li>Chek va buyurtma ID’sini natijagacha saqlang.</li><li>@username’ni profilidan nusxalang.</li></ul>

    <h2 id="tolov-otmasa">Payme to‘lovi o‘tmasa nima qilish kerak?</h2>
    <ol><li><strong>Balansni tekshiring:</strong> buyurtma va ko‘rsatilishi mumkin bo‘lgan komissiya uchun mablag‘ yetarli bo‘lsin.</li><li><strong>Kartani tekshiring:</strong> Uzcard/Humo faol va Payme’ga to‘g‘ri bog‘langan bo‘lsin.</li><li><strong>Summani o‘zgartirmang:</strong> bot aniq summa ko‘rsatsa, aynan shuni yuboring.</li><li><strong>Takroriy to‘lov qilmang:</strong> avval Payme tarixidagi statusni tekshiring.</li><li><strong>Chek bilan murojaat qiling:</strong> pul yechilib bot yangilanmasa, buyurtma ID va chekni supportga yuboring.</li></ol>

    <h2 id="stars-kelmadi">Pul yechildi, lekin Stars kelmadi</h2>
    <p>Payme operatsiyasi, bot buyurtmasi va Telegram’dagi <strong>Sozlamalar → My Stars</strong> tarixini tekshiring. Takroriy to‘lov qilmang. Batafsil diagnostika <Link href="/blog/telegram-stars-kelmadi-sabablar-yechim">“Telegram Stars kelmadi” qo‘llanmasida</Link>.</p>

    <h2 id="payme-yoki-click">Payme yoki Click — qaysi biri qulay?</h2>
    <p>Kartangiz qaysi ilovaga bog‘langan va faol bo‘lsa, odatda o‘sha qulayroq. Uzgets paket narxi bir xil. Click bo‘yicha alohida qadamlar <Link href="/blog/telegram-stars-click-orqali-sotib-olish">Click orqali Stars qo‘llanmasida</Link>.</p>
    <Sources lang="uz" />
  </>
}

function RuBody() {
  return <>
    <h2 id="payme-i-stars">Payme — встроенный способ Telegram Stars?</h2>
    <p>Нет. Payme — локальное платёжное приложение Узбекистана, а Telegram Stars — виртуальная единица внутри Telegram. Payme может не отображаться во встроенном окне Stars. В потоке Uzgets вы платите в сумах, а Stars доставляются указанному аккаунту.</p>
    <p>По официальной информации Payme, приложение поддерживает платежи и переводы Uzcard/Humo. Payme CARD также пополняется с Uzcard и Humo.</p>
    <InlineBotCTA lang="ru" text="Начните заказ в боте, чтобы оплатить Stars через Payme." />

    <h2 id="shagi">Как купить Stars через Payme — 6 шагов</h2>
    <ol><li>Откройте <a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> и нажмите <strong>START</strong>.</li><li>Выберите <strong>Telegram Stars</strong>.</li><li>Выберите количество Stars.</li><li>Введите точный <strong>@username</strong> получателя.</li><li>Откройте показанный ботом поток Payme или локальной карты.</li><li>Проверьте получателя и сумму, подтвердите в Payme.</li></ol>
    <p>Название кнопок может отличаться в зависимости от версии Payme и доступного потока в боте. Следуйте текущей инструкции бота.</p>

    <h2 id="ceny">Цены Stars через Payme</h2>
    <p>Базовая цена Uzgets — <strong>1 Star = {STARS_BASE.priceUzs / STARS_BASE.amount} сум</strong>. Выбор Payme не меняет цену каталога; если приложение показывает отдельную комиссию, проверьте итог до подтверждения.</p>
    <PriceTable lang="ru" />
    <p>Все пакеты доступны на <Link href="/ru/stars">странице цен Telegram Stars</Link>.</p>

    <h2 id="chto-nuzhno">Что потребуется?</h2>
    <ul><li>активное обновлённое приложение Payme;</li><li>Uzcard/Humo или показанный Payme источник с достаточным балансом;</li><li>точный @username;</li><li>стабильный интернет;</li><li>сохранённые чек и ID заказа.</li></ul>
    <p>Пароль Telegram, SMS-код входа, QR-вход и пароль 2FA не нужны.</p>

    <h2 id="bezopasnost">Безопасно ли покупать Stars через Payme?</h2>
    <p>Есть два этапа: оплата в Payme и доставка в Telegram. В Payme проверяйте сумму и получателя, а для Telegram указывайте только @username.</p>
    <ul><li>Открывайте бот по официальной ссылке сайта.</li><li>Не отправляйте код Payme в чат.</li><li>Не сообщайте CVV и код входа Telegram.</li><li>Сохраняйте чек и ID до выполнения заказа.</li><li>Копируйте @username из профиля.</li></ul>

    <h2 id="platezh-ne-prohodit">Что делать, если платёж не проходит?</h2>
    <ol><li><strong>Проверьте баланс</strong> с учётом возможной комиссии.</li><li><strong>Проверьте карту:</strong> Uzcard/Humo должна быть активна и привязана.</li><li><strong>Не меняйте точную сумму</strong>, показанную ботом.</li><li><strong>Не платите повторно</strong> до проверки истории Payme.</li><li><strong>Отправьте чек поддержке</strong>, если деньги списаны, а статус не обновился.</li></ol>

    <h2 id="stars-ne-prishli">Деньги списались, но Stars не пришли</h2>
    <p>Проверьте Payme, статус заказа и <strong>Настройки Telegram → My Stars</strong>. Не платите повторно. Полная диагностика — в <Link href="/ru/blog/telegram-stars-kelmadi-sabablar-yechim">инструкции “Stars не пришли”</Link>.</p>

    <h2 id="payme-ili-click">Payme или Click — что удобнее?</h2>
    <p>Обычно удобнее приложение, где карта уже привязана. Цена пакета Uzgets одинакова. Шаги Click описаны в <Link href="/ru/blog/telegram-stars-click-orqali-sotib-olish">отдельной инструкции</Link>.</p>
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
      title: "Telegram Stars'ni Payme orqali sotib olish: narx va 6 qadam 2026",
      description: "Payme orqali Telegram Stars olish: @uzgetsbot'da 6 qadam, 50–5000 Stars narxlari, Uzcard/Humo, xavfsizlik va to'lov o'tmasa yechimlar.",
      metaTitle: "Telegram Stars'ni Payme orqali sotib olish (2026)",
      metaDescription: "Payme orqali Telegram Stars oling: @uzgetsbot'da 6 qadam, 50 Stars 11 000 so'm, Uzcard/Humo, xavfsizlik va to'lov muammolari yechimi.",
      ogDescription: "Payme orqali Telegram Stars: 6 qadam, joriy narxlar, xavfsiz to'lov va diagnostika.",
      answerBoxTitle: 'Qisqa javob: Payme orqali Stars qanday olinadi?',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Payme orqali Telegram Stars olsa bo'ladimi?", answer: "Ha. @uzgetsbot'da miqdor va @username'ni kiriting, bot ko'rsatgan Payme yoki mahalliy karta oqimini tanlang va summani tasdiqlang. Payme Telegram'ning ichki usuli emas." },
        { question: "Payme orqali 50 Stars qancha turadi?", answer: `Uzgets'da 50 Stars ${formatUzs(STARS_BASE.priceUzs)}, ya'ni 1 Stars ${STARS_BASE.priceUzs / STARS_BASE.amount} so'm. Botdagi joriy yakuniy summani tekshiring.` },
        { question: "Payme bilan to'laganda narx o'zgaradimi?", answer: "Uzgets katalog narxi o'zgarmaydi. Payme alohida operatsiya komissiyasi ko'rsatsa, tasdiqlash oynasidagi yakuniy summani tekshiring." },
        { question: "Boshqa odamga Stars olsa bo'ladimi?", answer: "Ha. Qabul qiluvchining aniq @username'ini kiriting. Telefon raqami, parol yoki Telegram login kodi kerak emas." },
        { question: "Pul yechildi, Stars kelmadi. Nima qilaman?", answer: "Payme tarixi, bot holati va Telegram My Stars tarixini tekshiring. Takroriy to'lov qilmang; buyurtma ID va chekni rasmiy supportga yuboring." },
        { question: "Telegram paroli yoki SMS-kod kerakmi?", answer: "Yo'q. Faqat @username kerak. Telegram paroli, SMS/2FA kodi, QR-login yoki Payme tasdiqlash kodini chatda hech kimga bermang." },
        { question: "Payme yoki Click — qaysi biri yaxshi?", answer: "Kartangiz qaysi ilovaga bog'langan bo'lsa, o'sha qulayroq. Uzgets paket narxi bir xil; ilova ko'rsatishi mumkin bo'lgan alohida komissiyani tekshiring." },
      ],
      finalCtaHeading: "Payme bilan Stars olishga tayyormisiz?",
      finalCtaBody: "@uzgetsbot'da miqdor va @username'ni tanlang, summani tekshiring va mavjud Payme to'lov oqimi orqali yakunlang.",
    },
    ru: {
      title: 'Как купить Telegram Stars через Payme: цены и 6 шагов 2026',
      description: 'Покупка Telegram Stars через Payme: 6 шагов в @uzgetsbot, цены 50–5000 Stars, Uzcard/Humo, безопасность и решения проблем оплаты.',
      metaTitle: 'Как купить Telegram Stars через Payme в 2026 году',
      metaDescription: 'Купите Telegram Stars через Payme: 6 шагов в @uzgetsbot, 50 Stars за 11 000 сум, Uzcard/Humo, безопасность и решение проблем оплаты.',
      ogDescription: 'Telegram Stars через Payme: 6 шагов, актуальные цены, безопасная оплата и диагностика.',
      answerBoxTitle: 'Краткий ответ: как купить Stars через Payme?',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Можно ли купить Telegram Stars через Payme?', answer: 'Да. Укажите количество и @username в @uzgetsbot, выберите показанный поток Payme или локальной карты и подтвердите сумму. Payme не является встроенным методом Telegram.' },
        { question: 'Сколько стоят 50 Stars через Payme?', answer: `В Uzgets 50 Stars стоят ${formatUzs(STARS_BASE.priceUzs)}, то есть ${STARS_BASE.priceUzs / STARS_BASE.amount} сум за 1 Star. Проверьте текущую сумму в боте.` },
        { question: 'Меняется ли цена при оплате Payme?', answer: 'Цена каталога Uzgets не меняется. Если Payme показывает отдельную комиссию, проверьте итоговую сумму перед подтверждением.' },
        { question: 'Можно купить Stars другому человеку?', answer: 'Да. Укажите точный @username получателя. Номер телефона, пароль и код входа Telegram не нужны.' },
        { question: 'Деньги списались, Stars не пришли. Что делать?', answer: 'Проверьте историю Payme, статус заказа и My Stars. Не платите повторно; отправьте официальной поддержке ID заказа и чек.' },
        { question: 'Нужен ли пароль или SMS-код Telegram?', answer: 'Нет. Нужен только @username. Не сообщайте пароль, SMS/2FA-код, QR-вход или код подтверждения Payme в чате.' },
        { question: 'Что лучше — Payme или Click?', answer: 'Удобнее приложение, где карта уже привязана. Цена Uzgets одинакова; проверьте отдельную комиссию, если приложение её показывает.' },
      ],
      finalCtaHeading: 'Готовы купить Stars через Payme?',
      finalCtaBody: 'Выберите количество и @username в @uzgetsbot, проверьте сумму и завершите заказ через доступный поток Payme.',
    },
  },
}
