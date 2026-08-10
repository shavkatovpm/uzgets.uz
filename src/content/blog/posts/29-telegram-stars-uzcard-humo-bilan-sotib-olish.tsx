import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, STARS_BASE } from '@/config/products'
import { formatNumber, formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-uzcard-humo-bilan-sotib-olish'
const TODAY = '2026-08-10'
const FEATURED = [50, 100, 500, 1000, 2500, 5000]

function UzAnswerBox() {
  return <p>Telegram Stars&apos;ni UzCard yoki Humo bilan olish uchun <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a> da Stars miqdorini tanlang, qabul qiluvchining aniq @username&apos;ini kiriting va bot ko&apos;rsatgan mahalliy karta to&apos;lovini tasdiqlang. Minimal paket <strong>{STARS_BASE.amount} Stars — {formatUzs(STARS_BASE.priceUzs)}</strong>. Telegram paroli, SMS-kodi yoki karta PIN-kodini berish shart emas.</p>
}

function RuAnswerBox() {
  return <p>Чтобы купить Telegram Stars с UzCard или Humo, выберите количество в <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>, укажите точный @username получателя и подтвердите показанную ботом оплату локальной картой. Минимальный пакет — <strong>{STARS_BASE.amount} Stars за {formatUzs(STARS_BASE.priceUzs)}</strong>. Пароль Telegram, SMS-код входа и PIN карты не нужны.</p>
}

function PriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]"><table className="w-full text-sm"><thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Stars</th><th className="px-4 py-3 text-left">{uz ? 'Narx' : 'Цена'}</th><th className="px-4 py-3 text-left">{uz ? '1 Stars' : '1 Star'}</th><th className="px-4 py-3 text-left">{uz ? 'Paket' : 'Пакет'}</th></tr></thead><tbody>{STARS_PACKS.filter((p) => FEATURED.includes(p.amount)).map((p) => <tr key={p.amount} className="border-t border-[var(--border)]"><td className="px-4 py-3 font-medium">{formatNumber(p.amount)} ⭐</td><td className="px-4 py-3">{formatUzs(p.priceUzs)}</td><td className="px-4 py-3">{p.priceUzs / p.amount} {uz ? "so'm" : 'сум'}</td><td className="px-4 py-3"><Link href={localePath(lang, `/stars/${p.slug}`)} className="text-[var(--primary)] hover:underline">{uz ? 'Batafsil →' : 'Подробнее →'}</Link></td></tr>)}</tbody></table></div>
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm"><div className="mb-2 font-semibold">{uz ? 'Manbalar' : 'Источники'}</div><ul className="space-y-2 text-[var(--text-muted)]">
    <li><a href="https://uzcard.uz/en/news/official_statement_from_uzcard" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">uzcard.uz</a> — {uz ? 'karta operatsiyalari va xavfsizlik bo‘yicha rasmiy tavsiyalar' : 'официальные рекомендации по операциям и безопасности карт'}</li>
    <li><a href="https://humocard.uz/en/payment-system/question_answer/3303/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">humocard.uz</a> — {uz ? 'Humo kartasi va internet to‘lovlari haqida rasmiy ma’lumot' : 'официальная информация о карте Humo и интернет-платежах'}</li>
    <li><a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">telegram.org/tos/stars</a> — {uz ? 'Telegram Stars rasmiy shartlari' : 'официальные условия Telegram Stars'}</li>
    <li><a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">core.telegram.org/api/stars</a> — {uz ? 'Stars balansi va tranzaksiyalari bo‘yicha hujjat' : 'документация о балансе и транзакциях Stars'}</li>
  </ul><p className="mt-3 text-[var(--text-muted)]">{uz ? 'Uzgets narxlari 2026-yil 10-avgust holatiga tekshirildi. Bot ko‘rsatgan joriy summa yakuniy hisoblanadi.' : 'Цены Uzgets проверены 10 августа 2026 года. Итоговой считается текущая сумма в боте.'}</p></div>
}

function UzBody() {
  return <>
    <h2 id="uzcard-humo-bilan-olish">UzCard yoki Humo bilan Stars olsa bo‘ladimi?</h2>
    <p>Ha. Uzgets orqali to‘lov so‘mda mahalliy karta bilan amalga oshiriladi, Stars esa siz ko‘rsatgan Telegram akkauntiga yetkaziladi. UzCard va Humo Telegram&apos;ning ichki to‘lov tugmasi emas; ular Uzgets buyurtmasini to‘lash uchun ishlatiladi.</p>
    <InlineBotCTA lang="uz" text="UzCard yoki Humo bilan Stars olish uchun buyurtmani boshlang." />

    <h2 id="qadamlar">UzCard/Humo orqali Stars olish — 6 qadam</h2>
    <ol><li><a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> ni ochib, <strong>START</strong> bosing.</li><li><strong>Telegram Stars</strong> bo‘limini tanlang.</li><li>Kerakli Stars paketini belgilang.</li><li>Stars tushadigan akkauntning aniq <strong>@username</strong> manzilini kiriting.</li><li>Bot ko‘rsatgan UzCard/Humo to‘lov oqimini oching.</li><li>Summa va buyurtmani tekshirib, bank yoki to‘lov ilovasida tasdiqlang.</li></ol>
    <p>Tugmalar bank, to‘lov ilovasi va botdagi joriy usulga qarab farq qilishi mumkin. To‘lov oynasidagi summa bot buyurtmasiga mosligini tekshiring.</p>

    <h2 id="narxlar">UzCard va Humo orqali Stars narxlari</h2>
    <p>Uzgets bazaviy kursi <strong>1 Stars = {STARS_BASE.priceUzs / STARS_BASE.amount} so‘m</strong>. Katalog narxi karta turiga qarab o‘zgarmaydi. Bank yoki to‘lov ilovasi alohida komissiya ko‘rsatsa, yakuniy summani tasdiqlashdan oldin ko‘ring.</p>
    <PriceTable lang="uz" />
    <p>Barcha miqdorlar <Link href="/stars">Telegram Stars narxlari</Link> sahifasida mavjud.</p>

    <h2 id="qaysi-karta">UzCard yoki Humo — qaysi biri yaxshi?</h2>
    <p>Amalda faol, balansida yetarli mablag‘i bor va bankingiz ilovasiga ulangan karta qulayroq. Stars paketi ikkala kartada ham bir xil; farq bank yoki ilovaning tasdiqlash oqimi va ehtimoliy komissiyasida bo‘lishi mumkin.</p>

    <h2 id="xavfsizlik">Xavfsiz to‘lov uchun 6 qoida</h2>
    <ul><li>Botga faqat Uzgets saytidagi rasmiy havola orqali kiring.</li><li>@username&apos;ni Telegram profilidan nusxalang.</li><li>Karta PIN-kodi, CVV yoki bir martalik SMS-kodni chatga yubormang.</li><li>Telegram paroli, QR-login va 2FA kodini bermang.</li><li>Summa va qabul qiluvchini tasdiqlashdan oldin tekshiring.</li><li>Chek hamda buyurtma ID&apos;sini Stars kelguncha saqlang.</li></ul>

    <h2 id="tolov-otmasa">UzCard yoki Humo to‘lovi o‘tmasa</h2>
    <ol><li>Karta balansi va ilovadagi limitlarni tekshiring.</li><li>Karta faol ekanini va SMS-tasdiqlash ishlashini tekshiring.</li><li>Bot ko‘rsatgan summani o‘zgartirmang.</li><li>Pul yechilgan bo‘lsa, yana to‘lamang — avval operatsiya holatini ko‘ring.</li><li>Rad etish davom etsa, bankingiz yoki karta ilovasi supportiga murojaat qiling.</li></ol>
    <p>Click ishlatsangiz, <Link href="/blog/telegram-stars-click-orqali-sotib-olish">Click orqali Stars</Link>; Payme ishlatsangiz, <Link href="/blog/telegram-stars-payme-orqali-sotib-olish">Payme orqali Stars</Link> qo‘llanmasini oching.</p>

    <h2 id="stars-kelmadi">Pul yechildi, lekin Stars kelmadi</h2>
    <p>Bank ilovasidagi holat, bot buyurtmasi va Telegram&apos;dagi <strong>Sozlamalar → My Stars</strong> tarixini tekshiring. Takroran to‘lamang. Buyurtma ID, chek va @username bilan rasmiy supportga yozing. Batafsil tekshiruv <Link href="/blog/telegram-stars-kelmadi-sabablar-yechim">“Telegram Stars kelmadi” qo‘llanmasida</Link>.</p>
    <Sources lang="uz" />
  </>
}

function RuBody() {
  return <>
    <h2 id="uzcard-humo">Можно ли купить Stars с UzCard или Humo?</h2>
    <p>Да. Через Uzgets вы платите локальной картой в сумах, а Stars доставляются в указанный аккаунт Telegram. UzCard и Humo — не встроенная кнопка оплаты Telegram: карта используется для оплаты заказа Uzgets.</p>
    <InlineBotCTA lang="ru" text="Начните заказ Stars с оплатой картой UzCard или Humo." />

    <h2 id="shagi">Как купить Stars с UzCard/Humo — 6 шагов</h2>
    <ol><li>Откройте <a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> и нажмите <strong>START</strong>.</li><li>Выберите <strong>Telegram Stars</strong>.</li><li>Выберите пакет Stars.</li><li>Укажите точный <strong>@username</strong> получателя.</li><li>Откройте показанный ботом поток оплаты UzCard/Humo.</li><li>Проверьте сумму и подтвердите платёж в банковском или платёжном приложении.</li></ol>
    <p>Названия кнопок зависят от банка, приложения и текущего потока в боте. Сумма в платёжном окне должна совпадать с заказом.</p>

    <h2 id="ceny">Цены Stars при оплате UzCard/Humo</h2>
    <p>Базовая цена Uzgets — <strong>1 Star = {STARS_BASE.priceUzs / STARS_BASE.amount} сум</strong>. Цена каталога не зависит от типа карты. Если банк или приложение показывает отдельную комиссию, проверьте итог до подтверждения.</p>
    <PriceTable lang="ru" />
    <p>Все варианты доступны на <Link href="/ru/stars">странице цен Telegram Stars</Link>.</p>

    <h2 id="kakaya-karta">Что выбрать — UzCard или Humo?</h2>
    <p>Используйте активную карту с достаточным балансом, уже привязанную к вашему банковскому или платёжному приложению. Пакет Stars одинаков; отличаться могут подтверждение и комиссия конкретного банка или приложения.</p>

    <h2 id="bezopasnost">6 правил безопасной оплаты</h2>
    <ul><li>Открывайте бот только по официальной ссылке Uzgets.</li><li>Копируйте @username из профиля Telegram.</li><li>Не отправляйте в чат PIN, CVV и одноразовый SMS-код.</li><li>Не сообщайте пароль Telegram, QR-вход и код 2FA.</li><li>До подтверждения проверьте сумму и получателя.</li><li>Сохраняйте чек и ID заказа до доставки Stars.</li></ul>

    <h2 id="platezh-ne-prohodit">Если платёж UzCard или Humo не проходит</h2>
    <ol><li>Проверьте баланс и лимиты карты.</li><li>Убедитесь, что карта активна и SMS-подтверждение работает.</li><li>Не меняйте сумму, показанную ботом.</li><li>Если деньги списаны, не платите повторно до проверки статуса.</li><li>При повторном отказе обратитесь в банк или поддержку платёжного приложения.</li></ol>
    <p>Для конкретного приложения смотрите инструкции: <Link href="/ru/blog/telegram-stars-click-orqali-sotib-olish">Stars через Click</Link> и <Link href="/ru/blog/telegram-stars-payme-orqali-sotib-olish">Stars через Payme</Link>.</p>

    <h2 id="stars-ne-prishli">Деньги списались, но Stars не пришли</h2>
    <p>Проверьте операцию в банковском приложении, заказ в боте и <strong>Настройки Telegram → My Stars</strong>. Не платите повторно. Отправьте официальной поддержке ID заказа, чек и @username. Полная проверка — в <Link href="/ru/blog/telegram-stars-kelmadi-sabablar-yechim">инструкции “Stars не пришли”</Link>.</p>
    <Sources lang="ru" />
  </>
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'cta',
  locales: {
    uz: {
      title: "Telegram Stars'ni UzCard va Humo orqali sotib olish (2026)",
      description: "UzCard yoki Humo orqali Telegram Stars olish: @uzgetsbot'da 6 qadam, joriy narxlar, xavfsizlik va karta to'lovi o'tmasa yechimlar.",
      metaTitle: "Telegram Stars'ni UzCard va Humo bilan olish (2026)",
      metaDescription: "UzCard yoki Humo bilan Telegram Stars oling: @uzgetsbot'da 6 qadam, 50 Stars 11 000 so'm, xavfsiz to'lov va muammolar yechimi.",
      ogDescription: "UzCard va Humo orqali Telegram Stars: 6 qadam, joriy narxlar va xavfsiz to'lov.",
      answerBoxTitle: "Qisqa javob: UzCard/Humo bilan Stars qanday olinadi?",
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "UzCard bilan Telegram Stars olsa bo'ladimi?", answer: "Ha. @uzgetsbot'da Stars miqdori va aniq @username'ni kiriting, bot ko'rsatgan mahalliy karta to'lovini UzCard orqali tasdiqlang." },
        { question: "Humo bilan Telegram Stars olsa bo'ladimi?", answer: "Ha. Botdagi mavjud mahalliy karta oqimi Humo'ni ko'rsatsa, summa va buyurtmani tekshirib to'lovni tasdiqlang." },
        { question: "50 Stars qancha turadi?", answer: `Uzgets'da 50 Stars ${formatUzs(STARS_BASE.priceUzs)}, ya'ni 1 Stars ${STARS_BASE.priceUzs / STARS_BASE.amount} so'm. Yakuniy joriy summani botda tekshiring.` },
        { question: "UzCard yoki Humo — qaysi biri yaxshi?", answer: "Faol, yetarli balansli va ilovangizga ulangan karta qulayroq. Katalog narxi bir xil, ammo bank yoki ilova alohida komissiya ko'rsatishi mumkin." },
        { question: "Telegram paroli yoki SMS-kod kerakmi?", answer: "Yo'q. Stars yetkazish uchun faqat @username kerak. Telegram kodi, karta PIN/CVV'si va bir martalik SMS-kodni hech kimga bermang." },
        { question: "Pul yechildi, Stars kelmadi. Nima qilaman?", answer: "Bank operatsiyasi, bot buyurtmasi va My Stars tarixini tekshiring. Takroran to'lamang; buyurtma ID va chekni rasmiy supportga yuboring." },
      ],
      finalCtaHeading: "UzCard yoki Humo bilan Stars olishga tayyormisiz?",
      finalCtaBody: "@uzgetsbot'da paket va @username'ni tanlang, summani tekshiring va mahalliy karta orqali buyurtmani yakunlang.",
    },
    ru: {
      title: 'Как купить Telegram Stars с UzCard и Humo в 2026 году',
      description: 'Покупка Telegram Stars с UzCard или Humo: 6 шагов в @uzgetsbot, актуальные цены, безопасность и решения при отказе карты.',
      metaTitle: 'Как купить Telegram Stars с UzCard и Humo (2026)',
      metaDescription: 'Купите Telegram Stars с UzCard или Humo: 6 шагов в @uzgetsbot, 50 Stars за 11 000 сум, безопасная оплата и решение проблем.',
      ogDescription: 'Telegram Stars с UzCard и Humo: 6 шагов, актуальные цены и безопасная оплата.',
      answerBoxTitle: 'Краткий ответ: как купить Stars с UzCard/Humo?',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Можно купить Telegram Stars с UzCard?', answer: 'Да. Укажите количество Stars и точный @username в @uzgetsbot, затем подтвердите показанную ботом оплату картой UzCard.' },
        { question: 'Можно купить Telegram Stars с Humo?', answer: 'Да. Если текущий поток локальной оплаты в боте показывает Humo, проверьте заказ и подтвердите платёж.' },
        { question: 'Сколько стоят 50 Stars?', answer: `В Uzgets 50 Stars стоят ${formatUzs(STARS_BASE.priceUzs)}, то есть ${STARS_BASE.priceUzs / STARS_BASE.amount} сум за 1 Star. Текущую итоговую сумму проверьте в боте.` },
        { question: 'Что лучше — UzCard или Humo?', answer: 'Удобнее активная карта с достаточным балансом, уже привязанная к приложению. Цена каталога одинакова, но банк или приложение может показать отдельную комиссию.' },
        { question: 'Нужны пароль Telegram или SMS-код?', answer: 'Нет. Для доставки нужен только @username. Никому не сообщайте код Telegram, PIN/CVV карты и одноразовый SMS-код.' },
        { question: 'Деньги списались, Stars не пришли. Что делать?', answer: 'Проверьте банковскую операцию, заказ и My Stars. Не платите повторно; отправьте официальной поддержке ID заказа и чек.' },
      ],
      finalCtaHeading: 'Готовы купить Stars с UzCard или Humo?',
      finalCtaBody: 'Выберите пакет и @username в @uzgetsbot, проверьте сумму и завершите заказ локальной картой.',
    },
  },
}
