import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatNumber, formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-pul-qaytariladimi'
const TODAY = '2026-10-10'
const P3 = PREMIUM_PERIODS.find((p) => p.months === 3)!
const P12 = PREMIUM_PERIODS.find((p) => p.months === 12)!
const ruSum = (amount: number) => `${formatNumber(amount)} сум`

function UzAnswerBox() {
  return (
    <p>
      Ko&apos;p hollarda yo&apos;q. Telegram&apos;ning rasmiy shartlariga ko&apos;ra obuna bekor
      qilinsa, Premium to&apos;langan davr oxirigacha ishlaydi, lekin{' '}
      <strong>qolgan kunlar uchun pul qaytarilmaydi</strong>. App Store yoki Google Play orqali
      to&apos;langan bo&apos;lsa, qaytarishni shu do&apos;kon hal qiladi (Google Play&apos;da
      xariddan keyingi 48 soat ichida). {siteConfig.bot} orqali xaridda: to&apos;lov o&apos;tib,
      Premium bizning tarafdagi muammo sabab biriktirilmagan bo&apos;lsa — qayta yuboriladi yoki
      pul qaytariladi; muvaffaqiyatli faollashgandan keyin — yo&apos;q.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      В большинстве случаев нет. По официальным условиям Telegram после отмены подписки Premium
      работает до конца оплаченного периода, но{' '}
      <strong>деньги за оставшиеся дни не возвращают</strong>. Если оплата прошла через App Store
      или Google Play, решение о возврате принимает магазин (в Google Play — в течение 48 часов
      после покупки). При покупке через {siteConfig.bot}: если оплата прошла, а Premium не
      привязан из-за проблемы на нашей стороне — его отправят повторно или вернут деньги; после
      успешной активации — нет.
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
          <a href="https://telegram.org/tos" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram — Terms of Service
          </a>{' '}
          — {uz ? "bekor qilingan obuna davr oxirigacha faol qolishi, qolgan kunlar uchun pul qaytarilmasligi va uchinchi tomon (Apple/Google) orqali xaridlar" : 'отменённая подписка действует до конца периода, деньги за оставшиеся дни не возвращаются, покупки через третьи стороны (Apple/Google)'}.
        </li>
        <li>
          <a href="https://support.apple.com/en-us/118223" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Apple Support — Request a refund
          </a>{' '}
          — {uz ? "reportaproblem.apple.com orqali so'rov qadamlari va 24–48 soatlik javob muddati" : 'шаги запроса через reportaproblem.apple.com и срок ответа 24–48 часов'}.
        </li>
        <li>
          <a href="https://support.google.com/googleplay/answer/15574908" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Google Play Help — Refund policies
          </a>{' '}
          — {uz ? "48 soatlik qaytarish oynasi va bitta xarid uchun faqat bir marta so'rov berish qoidasi" : 'окно возврата 48 часов и правило одного запроса на покупку'}.
        </li>
        <li>
          <a href="https://fragment.com/terms" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Fragment — Terms of Service
          </a>{' '}
          — {uz ? "barcha xaridlar qaytarilmasligi va TON blokcheyn tranzaksiyalari ortga qaytmasligi" : 'все покупки невозвратны, транзакции в блокчейне TON необратимы'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Manbalar va Uzgets xizmat shartlarining 5-bandi (buyurtma muammolari va qaytarib berish) 2026-yil 10-oktabrda tekshirildi. Do'konlarning qaytarish qarori mamlakat va holatga qarab farq qilishi mumkin."
          : 'Источники и пункт 5 условий сервиса Uzgets (проблемы заказа и возврат) проверены 10 октября 2026 года. Решение магазинов о возврате может зависеть от страны и конкретного случая.'}
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
          <li><a href="#qoida" className="hover:text-[var(--primary)] hover:underline">Telegram&apos;ning rasmiy qoidasi</a></li>
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Holat → qoida → amal</a></li>
          <li><a href="#dokonlar" className="hover:text-[var(--primary)] hover:underline">App Store, Google Play va Fragment</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">{siteConfig.bot} orqali xaridda qaytarish</a></li>
          <li><a href="#sorash" className="hover:text-[var(--primary)] hover:underline">So&apos;rov uchun nimalar kerak?</a></li>
          <li><a href="#oldini-olish" className="hover:text-[var(--primary)] hover:underline">Qaytarishga muhtoj bo&apos;lmaslik uchun</a></li>
        </ol>
      </nav>

      <h2 id="qoida">Telegram&apos;ning rasmiy qoidasi: qolgan kunlar uchun pul qaytarilmaydi</h2>
      <p>
        Telegram foydalanish shartlarida aniq yozilgan: obunani bekor qilsangiz, u{' '}
        <strong>joriy hisob-kitob davri oxirigacha faol qoladi</strong> va qolgan kunlar uchun
        pul ham, kredit ham berilmaydi. Ya&apos;ni &laquo;bir hafta ishlatdim, qolganini
        qaytaring&raquo; degan so&apos;rov Telegram qoidasi bo&apos;yicha qondirilmaydi.
      </p>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Muhim farq:</strong> Premium App Store yoki Google Play orqali olingan
        bo&apos;lsa, to&apos;lov munosabati Telegram bilan emas, shu do&apos;kon bilan
        tuziladi. Shuning uchun qaytarish so&apos;rovi ham Apple yoki Google&apos;ga yuboriladi
        va ularning siyosati bo&apos;yicha ko&apos;riladi.
      </div>

      <h2 id="holat">Holat → qoida → nima qilish kerak</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Holat</th><th className="px-4 py-3 text-left">Qoida</th><th className="px-4 py-3 text-left">Amal</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Premium oldim, keyin fikrim o&apos;zgardi</td><td className="px-4 py-3">Qolgan kunlar uchun pul qaytarilmaydi</td><td className="px-4 py-3">Obunani bekor qiling — keyingi davrga yechilmaydi</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">App Store orqali xato yoki bexosdan to&apos;landi</td><td className="px-4 py-3">Apple har so&apos;rovni alohida ko&apos;rib chiqadi</td><td className="px-4 py-3">reportaproblem.apple.com orqali so&apos;rov yuboring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Google Play orqali 48 soatdan kam vaqt oldin to&apos;landi</td><td className="px-4 py-3">48 soat ichida qaytarish so&apos;rash mumkin</td><td className="px-4 py-3">Google Play&apos;dan to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;rang</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Obuna avtomatik uzayib, pul yechildi</td><td className="px-4 py-3">Uzayish — obuna shartining bir qismi</td><td className="px-4 py-3">Darhol bekor qiling va do&apos;kondan qaytarish so&apos;rang</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Fragment orqali TON bilan to&apos;landi</td><td className="px-4 py-3">Barcha xaridlar qaytarilmaydi</td><td className="px-4 py-3">Qaytarish yo&apos;li yo&apos;q — to&apos;lashdan oldin tekshiring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">{siteConfig.bot} orqali to&apos;landi, Premium kelmadi</td><td className="px-4 py-3">Muammo sotuvchi tarafida bo&apos;lsa — qayta yuboriladi yoki qaytariladi</td><td className="px-4 py-3">30 daqiqa kutib, chek va buyurtma ID&apos;si bilan botga yozing</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">{siteConfig.bot} orqali Premium muvaffaqiyatli faollashdi</td><td className="px-4 py-3">Yetkazilgan mahsulot uchun to&apos;lov qaytarilmaydi</td><td className="px-4 py-3">Qaytarish so&apos;rovi rad etiladi — bu kutilgan holat</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">@username xato kiritildi, Premium boshqa akkauntga ketdi</td><td className="px-4 py-3">Foydalanuvchi xatosi alohida ko&apos;rib chiqiladi</td><td className="px-4 py-3">Zudlik bilan botga yozing — imkoniyat darajasida hal qilinadi</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="dokonlar">App Store, Google Play va Fragment orqali to&apos;langan bo&apos;lsa</h2>
      <h3>App Store (iPhone/iPad)</h3>
      <ol>
        <li><strong>reportaproblem.apple.com</strong> sahifasiga Apple hisobingiz bilan kiring.</li>
        <li>&laquo;I&apos;d like to&raquo; → &laquo;Request a refund&raquo;ni tanlang.</li>
        <li>Sababni ko&apos;rsating va ro&apos;yxatdan Telegram Premium obunasini belgilab, yuboring.</li>
      </ol>
      <p>
        Apple javobni odatda <strong>24–48 soat</strong> ichida beradi; ma&apos;qullansa, pul
        to&apos;lov usuliga qaytishi uchun qo&apos;shimcha vaqt ketishi mumkin. To&apos;lov hali
        &laquo;pending&raquo; holatida bo&apos;lsa, chek kelguncha so&apos;rov yuborib
        bo&apos;lmaydi. Qaytarish huquqi mamlakatga qarab farq qiladi.
      </p>
      <h3>Google Play (Android)</h3>
      <p>
        Xariddan keyingi <strong>48 soat</strong> ichida Google Play&apos;ning o&apos;zidan
        qaytarish so&apos;rash mumkin. 48 soatdan keyin so&apos;rov ilova ishlab chiquvchisi
        (Telegram) orqali ko&apos;riladi va kafolatlanmaydi. Bitta xarid uchun qaytarish faqat
        bir marta so&apos;raladi — qayta sotib olingan obunaga ikkinchi marta berilmaydi.
      </p>
      <h3>Fragment (TON orqali)</h3>
      <p>
        Fragment shartlariga ko&apos;ra <strong>barcha xaridlar qaytarilmaydi</strong>, TON
        blokcheynidagi tranzaksiyani esa ortga qaytarib bo&apos;lmaydi. Bu kanalda noto&apos;g&apos;ri
        akkaunt yoki muddat tanlansa, tuzatish imkoni yo&apos;q.
      </p>


      <h2 id="uzgets">{siteConfig.bot} orqali xaridda qaytarish qanday ishlaydi?</h2>
      <p>
        Uzgets{' '}
        <Link href="/terms" className="text-[var(--primary)] hover:underline">xizmat shartlarining</Link>{' '}
        5-bandiga ko&apos;ra uchta holat bor:
      </p>
      <ul>
        <li><strong>To&apos;lov o&apos;tdi, Premium biriktirilmadi, muammo bizning tarafda:</strong> mahsulot qayta yuboriladi yoki to&apos;lov qaytariladi.</li>
        <li><strong>Sabab foydalanuvchi xatosi</strong> (noto&apos;g&apos;ri @username, mavjud bo&apos;lmagan akkaunt): holat alohida ko&apos;rib chiqiladi va imkoniyat darajasida hal qilinadi.</li>
        <li><strong>Premium muvaffaqiyatli biriktirildi:</strong> to&apos;lov qaytarilmaydi — bu Telegram va to&apos;lov tizimlari standartiga mos.</li>
      </ul>
      <p>
        Pul yechilib, Premium hali ko&apos;rinmayotgan bo&apos;lsa, bu ko&apos;pincha oddiy
        kechikish: odatda 2–5 daqiqa, sekin holatda 10–15 daqiqa. 30 daqiqagacha qayta
        to&apos;lamang — tartib{' '}
        <Link href="/blog/telegram-premium-pul-yechildi-lekin-kelmadi" className="text-[var(--primary)] hover:underline">
          pul yechildi, lekin Premium kelmadi
        </Link>{' '}
        maqolasida, sovg&apos;a holati esa{' '}
        <Link href="/blog/telegram-premium-sovgasi-kelmadi" className="text-[var(--primary)] hover:underline">
          Premium sovg&apos;asi yetib bormadi
        </Link>{' '}
        maqolasida yozilgan.
      </p>
      <p>
        Buyurtma bo&apos;yicha murojaat faqat rasmiy{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">{siteConfig.bot}</a>{' '}
        ichidagi support orqali qabul qilinadi — boshqa bot yoki shaxsiy akkauntlarga pul ham,
        ma&apos;lumot ham yubormang.
      </p>
      <InlineBotCTA lang="uz" text={`Bir martalik to'lov, support shu botda: Premium 3 oy — ${formatUzs(P3.priceUzs)}.`} />

      <h2 id="sorash">Qaytarish so&apos;rovi uchun nimalar kerak?</h2>
      <ul>
        <li>Buyurtma yoki tranzaksiya ID&apos;si va to&apos;lov cheki (skrinshot);</li>
        <li>To&apos;lov sanasi, vaqti va summasi;</li>
        <li>Premium biriktirilishi kerak bo&apos;lgan @username;</li>
        <li>Qaysi kanaldan to&apos;langani ({siteConfig.bot}, App Store, Google Play);</li>
        <li>Muammoning bir-ikki jumlalik tavsifi (kelmadi, ikki marta yechildi, xato akkaunt).</li>
      </ul>
      <p>
        <strong>Yubormang:</strong> qaytarish bahonasida hech kim Telegram login/SMS kodi, 2FA
        paroli yoki karta CVV kodini so&apos;ramaydi. &laquo;Pulingizni qaytarib beramiz, kodni
        ayting&raquo; degan xabar — firibgarlik belgisi.
      </p>

      <h2 id="oldini-olish">Qaytarishga muhtoj bo&apos;lmaslik uchun 4 tekshiruv</h2>
      <ol>
        <li>To&apos;lashdan oldin @username&apos;ni harfma-harf tekshiring — xato akkauntga ketgan Premium&apos;ni qaytarish kafolatlanmaydi.</li>
        <li>Muddatni (3, 6 yoki 12 oy) va summani to&apos;lov sahifasida qayta ko&apos;ring.</li>
        <li>Pul yechilgandan keyin 30 daqiqa ichida ikkinchi marta to&apos;lamang.</li>
        <li>Avtomatik uzayish kerak bo&apos;lmasa, bir martalik to&apos;lovni tanlang —{' '}
          <Link href="/blog/telegram-premium-avtomatik-uzayadimi" className="text-[var(--primary)] hover:underline">
            qaysi Premium avtomatik uzayishi
          </Link>{' '}
          alohida tushuntirilgan.
        </li>
      </ol>
      <InlineBotCTA lang="uz" text={`@username'ni tekshirib, Premium'ni xatosiz oling: 12 oy — ${formatUzs(P12.priceUzs)}.`} />
      <p>
        Stars bo&apos;yicha qoida boshqacha — u{' '}
        <Link href="/blog/telegram-stars-refund-qaytarish" className="text-[var(--primary)] hover:underline">
          Telegram Stars refund shartlari
        </Link>{' '}
        maqolasida yoritilgan.
      </p>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Telegram, Apple, Google va Fragment qoidalari ularning rasmiy sahifalariga, Uzgets bo&apos;yicha ma&apos;lumot esa xizmat shartlariga tayangan — ular aralashtirilmagan. Bu maqola huquqiy maslahat emas.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#qoida" className="hover:text-[var(--primary)] hover:underline">Официальное правило Telegram</a></li>
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Ситуация → правило → действие</a></li>
          <li><a href="#dokonlar" className="hover:text-[var(--primary)] hover:underline">App Store, Google Play и Fragment</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Возврат при покупке через {siteConfig.bot}</a></li>
          <li><a href="#sorash" className="hover:text-[var(--primary)] hover:underline">Что нужно для запроса?</a></li>
          <li><a href="#oldini-olish" className="hover:text-[var(--primary)] hover:underline">Как не довести до возврата</a></li>
        </ol>
      </nav>

      <h2 id="qoida">Официальное правило Telegram: за оставшиеся дни деньги не возвращают</h2>
      <p>
        В условиях использования Telegram сказано прямо: после отмены подписка{' '}
        <strong>остаётся активной до конца текущего расчётного периода</strong>, а за оставшиеся
        дни не полагается ни возврат, ни зачёт. То есть запрос «пользовался неделю, верните
        остальное» по правилам Telegram не удовлетворяется.
      </p>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Важное отличие:</strong> если Premium куплен через App Store или Google Play,
        платёжные отношения у вас не с Telegram, а с этим магазином. Поэтому запрос на возврат
        тоже направляется в Apple или Google и рассматривается по их политике.
      </div>

      <h2 id="holat">Ситуация → правило → что делать</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Ситуация</th><th className="px-4 py-3 text-left">Правило</th><th className="px-4 py-3 text-left">Действие</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Купил Premium, потом передумал</td><td className="px-4 py-3">За оставшиеся дни деньги не возвращают</td><td className="px-4 py-3">Отмените подписку — за следующий период не спишут</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Ошибочная или случайная оплата через App Store</td><td className="px-4 py-3">Apple рассматривает каждый запрос индивидуально</td><td className="px-4 py-3">Отправьте запрос через reportaproblem.apple.com</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Оплата через Google Play меньше 48 часов назад</td><td className="px-4 py-3">В течение 48 часов можно запросить возврат</td><td className="px-4 py-3">Запросите напрямую в Google Play</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Подписка продлилась автоматически, деньги списаны</td><td className="px-4 py-3">Продление — часть условий подписки</td><td className="px-4 py-3">Сразу отмените и запросите возврат в магазине</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Оплата через Fragment в TON</td><td className="px-4 py-3">Все покупки невозвратны</td><td className="px-4 py-3">Возврата нет — проверяйте данные до оплаты</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Оплата через {siteConfig.bot} прошла, Premium не пришёл</td><td className="px-4 py-3">Если проблема на стороне продавца — повторная отправка или возврат</td><td className="px-4 py-3">Подождите 30 минут и напишите в бот с чеком и ID заказа</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Premium через {siteConfig.bot} успешно активирован</td><td className="px-4 py-3">За доставленный товар деньги не возвращают</td><td className="px-4 py-3">Запрос на возврат отклонят — это ожидаемо</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Указан неверный @username, Premium ушёл на чужой аккаунт</td><td className="px-4 py-3">Ошибка пользователя рассматривается индивидуально</td><td className="px-4 py-3">Срочно напишите в бот — решается в пределах возможного</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="dokonlar">Если оплата прошла через App Store, Google Play или Fragment</h2>
      <h3>App Store (iPhone/iPad)</h3>
      <ol>
        <li>Войдите на <strong>reportaproblem.apple.com</strong> под своим аккаунтом Apple.</li>
        <li>Выберите «I&apos;d like to» → «Request a refund».</li>
        <li>Укажите причину, отметьте подписку Telegram Premium и отправьте запрос.</li>
      </ol>
      <p>
        Apple обычно отвечает в течение <strong>24–48 часов</strong>; при одобрении возврат на
        способ оплаты может занять дополнительное время. Пока платёж в статусе «pending», запрос
        подать нельзя — нужно дождаться чека. Право на возврат зависит от страны.
      </p>
      <h3>Google Play (Android)</h3>
      <p>
        В течение <strong>48 часов</strong> после покупки возврат можно запросить прямо в Google
        Play. После 48 часов запрос рассматривается через разработчика приложения (Telegram) и не
        гарантирован. По одной покупке возврат запрашивается только один раз — за повторно
        купленную подписку его уже не дадут.
      </p>
      <h3>Fragment (оплата в TON)</h3>
      <p>
        По условиям Fragment <strong>все покупки невозвратны</strong>, а транзакцию в блокчейне
        TON нельзя отменить. Если в этом канале выбран не тот аккаунт или срок, исправить это
        невозможно.
      </p>


      <h2 id="uzgets">Как работает возврат при покупке через {siteConfig.bot}?</h2>
      <p>
        По пункту 5{' '}
        <Link href="/ru/terms" className="text-[var(--primary)] hover:underline">условий сервиса</Link>{' '}
        Uzgets возможны три случая:
      </p>
      <ul>
        <li><strong>Оплата прошла, Premium не привязан, проблема на нашей стороне:</strong> товар отправляют повторно или возвращают оплату.</li>
        <li><strong>Причина — ошибка пользователя</strong> (неверный @username, несуществующий аккаунт): случай рассматривается индивидуально и решается в пределах возможного.</li>
        <li><strong>Premium успешно привязан:</strong> оплата не возвращается — это соответствует стандартам Telegram и платёжных систем.</li>
      </ul>
      <p>
        Если деньги списаны, а Premium ещё не виден, чаще всего это обычная задержка: как правило
        2–5 минут, в медленных случаях 10–15 минут. В течение 30 минут не платите повторно —
        порядок действий описан в статье{' '}
        <Link href="/ru/blog/telegram-premium-pul-yechildi-lekin-kelmadi" className="text-[var(--primary)] hover:underline">
          деньги списаны, а Premium не пришёл
        </Link>
        , а случай с подарком — в статье{' '}
        <Link href="/ru/blog/telegram-premium-sovgasi-kelmadi" className="text-[var(--primary)] hover:underline">
          подарок Premium не дошёл
        </Link>
        .
      </p>
      <p>
        Обращения по заказу принимаются только через поддержку внутри официального{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">{siteConfig.bot}</a>{' '}
        — не отправляйте ни деньги, ни данные другим ботам и личным аккаунтам.
      </p>
      <InlineBotCTA lang="ru" text={`Разовая оплата, поддержка в том же боте: Premium на 3 месяца — ${ruSum(P3.priceUzs)}.`} />

      <h2 id="sorash">Что нужно для запроса возврата?</h2>
      <ul>
        <li>ID заказа или транзакции и чек об оплате (скриншот);</li>
        <li>дата, время и сумма платежа;</li>
        <li>@username, к которому должен быть привязан Premium;</li>
        <li>канал оплаты ({siteConfig.bot}, App Store, Google Play);</li>
        <li>описание проблемы в одном-двух предложениях (не пришёл, двойное списание, не тот аккаунт).</li>
      </ul>
      <p>
        <strong>Не отправляйте:</strong> под предлогом возврата никто не запрашивает код
        входа/SMS Telegram, пароль 2FA или CVV карты. Сообщение «вернём деньги, назовите код» —
        признак мошенничества.
      </p>

      <h2 id="oldini-olish">4 проверки, чтобы возврат не понадобился</h2>
      <ol>
        <li>Перед оплатой проверьте @username по буквам — возврат за Premium, ушедший на чужой аккаунт, не гарантирован.</li>
        <li>Ещё раз посмотрите срок (3, 6 или 12 месяцев) и сумму на странице оплаты.</li>
        <li>После списания не платите повторно в течение 30 минут.</li>
        <li>Если автопродление не нужно, выбирайте разовую оплату —{' '}
          <Link href="/ru/blog/telegram-premium-avtomatik-uzayadimi" className="text-[var(--primary)] hover:underline">
            какой Premium продлевается автоматически
          </Link>
          , разобрано отдельно.
        </li>
      </ol>
      <InlineBotCTA lang="ru" text={`Проверьте @username и купите Premium без ошибок: 12 месяцев — ${ruSum(P12.priceUzs)}.`} />
      <p>
        Для Stars правило другое — оно описано в статье{' '}
        <Link href="/ru/blog/telegram-stars-refund-qaytarish" className="text-[var(--primary)] hover:underline">
          условия возврата Telegram Stars
        </Link>
        .
      </p>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Правила Telegram, Apple, Google и Fragment основаны на их официальных страницах, сведения об Uzgets — на условиях сервиса; эти источники не смешиваются. Статья не является юридической консультацией.</p>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'problem',
  locales: {
    uz: {
      title: "Telegram Premium uchun to'langan pul qaytariladimi? Shartlari qanday",
      description:
        "Telegram Premium uchun to'langan pul qachon qaytariladi va qachon yo'q: Telegram'ning rasmiy qoidasi, App Store, Google Play, Fragment va Uzgets bo'yicha aniq shartlar.",
      metaTitle: "Telegram Premium puli qaytariladimi? Refund shartlari",
      metaDescription:
        "Telegram Premium puli qolgan kunlar uchun qaytarilmaydi. App Store, Google Play (48 soat), Fragment va Uzgets bo'yicha refund shartlari va so'rov qadamlari.",
      ogDescription:
        "Premium uchun pul odatda qaytarilmaydi, lekin istisnolar bor. Telegram, App Store, Google Play, Fragment va Uzgets bo'yicha aniq qoidalar.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Premium sotib olgandan keyin fikrim o'zgarsa, pulni qaytarib olsam bo'ladimi?", answer: "Telegram qoidasiga ko'ra yo'q: obunani bekor qilsangiz, Premium to'langan davr oxirigacha ishlaydi, qolgan kunlar uchun pul qaytarilmaydi. App Store yoki Google Play orqali to'langan bo'lsa, qaytarishni shu do'kondan so'rab ko'rish mumkin." },
        { question: "Google Play orqali olingan Premium uchun pul qancha vaqt ichida qaytariladi?", answer: "Xariddan keyingi 48 soat ichida Google Play'ning o'zidan qaytarish so'rash mumkin. 48 soatdan keyin so'rov ilova ishlab chiquvchisi orqali ko'riladi va kafolatlanmaydi." },
        { question: "App Store orqali to'langan Premium uchun qaytarish qanday so'raladi?", answer: "reportaproblem.apple.com sahifasiga kirib, Request a refund'ni tanlang, sababni ko'rsating va Telegram Premium obunasini belgilang. Apple odatda 24–48 soat ichida javob beradi va har so'rovni alohida ko'rib chiqadi." },
        { question: "Uzgets orqali to'ladim, lekin Premium kelmadi — pul qaytariladimi?", answer: "Ha, agar muammo bizning tarafda bo'lsa: mahsulot qayta yuboriladi yoki to'lov qaytariladi. Avval 30 daqiqa kuting, keyin chek va buyurtma ID'si bilan @uzgetsbot'ga yozing." },
        { question: "@username'ni xato kiritdim, Premium boshqa akkauntga ketdi — nima bo'ladi?", answer: "Bu foydalanuvchi xatosi hisoblanadi va Uzgets shartlariga ko'ra alohida ko'rib chiqilib, imkoniyat darajasida hal qilinadi. Qaytarish kafolatlanmaydi, shuning uchun darhol botga yozing." },
        { question: "Fragment orqali olingan Premium uchun pul qaytariladimi?", answer: "Yo'q. Fragment shartlariga ko'ra barcha xaridlar qaytarilmaydi, TON blokcheynidagi tranzaksiyani esa ortga qaytarib bo'lmaydi." },
        { question: "Qaytarish uchun login kodi yoki karta CVV kodi kerakmi?", answer: "Yo'q. Hech qanday qonuniy qaytarish jarayoni Telegram login/SMS kodi, 2FA paroli yoki karta CVV kodini so'ramaydi. Bunday so'rov — firibgarlik belgisi." },
      ],
      finalCtaHeading: "Premium'ni xatosiz va bir martalik to'lov bilan oling",
      finalCtaBody: `${siteConfig.bot}'da Premium ${formatUzs(P3.priceUzs)}dan (3 oy): muddatni tanlang, @username'ni tekshirib kiriting va UzCard, Humo yoki Click orqali to'lang — muammo bo'lsa, support shu botning o'zida.`,
    },
    ru: {
      title: 'Возвращают ли деньги за Telegram Premium? Условия возврата',
      description:
        'Когда деньги за Telegram Premium возвращают, а когда нет: официальное правило Telegram и точные условия для App Store, Google Play, Fragment и Uzgets.',
      metaTitle: 'Возврат денег за Telegram Premium: условия',
      metaDescription:
        'За оставшиеся дни Telegram Premium деньги не возвращают. Условия возврата для App Store, Google Play (48 часов), Fragment и Uzgets и шаги запроса.',
      ogDescription:
        'За Premium деньги обычно не возвращают, но есть исключения. Точные правила Telegram, App Store, Google Play, Fragment и Uzgets.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Если я передумал после покупки Telegram Premium, можно ли вернуть деньги?', answer: 'По правилу Telegram — нет: после отмены подписки Premium работает до конца оплаченного периода, а деньги за оставшиеся дни не возвращают. Если оплата прошла через App Store или Google Play, возврат можно попробовать запросить у магазина.' },
        { question: 'В какой срок возвращают деньги за Premium, купленный через Google Play?', answer: 'В течение 48 часов после покупки возврат можно запросить прямо в Google Play. После 48 часов запрос рассматривается через разработчика приложения и не гарантирован.' },
        { question: 'Как запросить возврат за Premium, оплаченный через App Store?', answer: 'Зайдите на reportaproblem.apple.com, выберите Request a refund, укажите причину и отметьте подписку Telegram Premium. Apple обычно отвечает за 24–48 часов и рассматривает каждый запрос индивидуально.' },
        { question: 'Я оплатил через Uzgets, но Premium не пришёл — вернут ли деньги?', answer: 'Да, если проблема на нашей стороне: товар отправят повторно или вернут оплату. Сначала подождите 30 минут, затем напишите в @uzgetsbot с чеком и ID заказа.' },
        { question: 'Я ошибся в @username, и Premium ушёл на другой аккаунт — что будет?', answer: 'Это ошибка пользователя: по условиям Uzgets такой случай рассматривается индивидуально и решается в пределах возможного. Возврат не гарантирован, поэтому сразу напишите в бот.' },
        { question: 'Возвращают ли деньги за Premium, купленный через Fragment?', answer: 'Нет. По условиям Fragment все покупки невозвратны, а транзакцию в блокчейне TON отменить нельзя.' },
        { question: 'Нужен ли для возврата код входа или CVV карты?', answer: 'Нет. Ни один легитимный процесс возврата не требует код входа/SMS Telegram, пароль 2FA или CVV карты. Такой запрос — признак мошенничества.' },
      ],
      finalCtaHeading: 'Покупайте Premium без ошибок и разовой оплатой',
      finalCtaBody: `Premium в ${siteConfig.bot} — от ${ruSum(P3.priceUzs)} (3 месяца): выберите срок, проверьте @username и оплатите через UzCard, Humo или Click — поддержка в этом же боте.`,
    },
  },
}
