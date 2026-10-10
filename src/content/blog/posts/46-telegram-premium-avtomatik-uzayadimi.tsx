import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatNumber, formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-avtomatik-uzayadimi'
const TODAY = '2026-10-10'
const P3 = PREMIUM_PERIODS.find((p) => p.months === 3)!
const P12 = PREMIUM_PERIODS.find((p) => p.months === 12)!
const ruSum = (amount: number) => `${formatNumber(amount)} сум`

function UzAnswerBox() {
  return (
    <p>
      Bu Premium qayerdan olinganiga bog&apos;liq. App Store, Google Play yoki rasmiy{' '}
      <strong>@PremiumBot</strong> orqali olingan Premium — <strong>obuna</strong>: siz bekor
      qilmaguningizcha har oy yoki har yili kartadan avtomatik yechiladi. Uni Sozlamalar →
      Telegram Premium, do&apos;kondagi obunalar ro&apos;yxati yoki @PremiumBot&apos;ga{' '}
      <code>/stop</code> yuborib to&apos;xtatasiz. {siteConfig.bot} orqali olingan 3, 6 yoki 12
      oylik Premium esa bir martalik to&apos;lov — avtomatik uzaymaydi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Зависит от того, где куплен Premium. Premium через App Store, Google Play или официальный{' '}
      <strong>@PremiumBot</strong> — это <strong>подписка</strong>: деньги списываются с карты
      каждый месяц или год, пока вы её не отмените. Остановить её можно в разделе Настройки →
      Telegram Premium, в списке подписок магазина или командой <code>/stop</code> в @PremiumBot.
      Premium на 3, 6 или 12 месяцев через {siteConfig.bot} — разовая оплата, автопродления нет.
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
          — {uz ? "Premium obunasi takroriy (oylik yoki yillik) to'lovga ruxsat ekani, bekor qilish tartibi va narx o'zgarishi haqida 30 kunlik ogohlantirish" : 'подписка Premium как разрешение на регулярное (ежемесячное или ежегодное) списание, порядок отмены и уведомление об изменении цены за 30 дней'}.
        </li>
        <li>
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Premium FAQ
          </a>{' '}
          — {uz ? "obuna kanallari, @PremiumBot uchun /stop buyrug'i va 3, 6, 12 oylik oldindan to'langan sovg'alar" : 'каналы подписки, команда /stop для @PremiumBot и предоплаченные подарки на 3, 6 и 12 месяцев'}.
        </li>
        <li>
          <a href="https://support.apple.com/en-us/118223" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Apple Support — Request a refund
          </a>{' '}
          — {uz ? "kutilmagan yechilish uchun so'rov yuborish, 24–48 soatlik javob muddati va boshqa Apple hisobini tekshirish tavsiyasi" : 'запрос по неожиданному списанию, срок ответа 24–48 часов и совет проверить другой аккаунт Apple'}.
        </li>
        <li>
          <a href="https://support.google.com/googleplay/answer/15574908" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Google Play Help — Refund policies
          </a>{' '}
          — {uz ? "xariddan keyingi 48 soatlik qaytarish oynasi" : 'окно возврата 48 часов после покупки'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Manbalar, Uzgets konfiguratsiyasi, xizmat shartlari va maxfiylik siyosati 2026-yil 10-oktabrda tekshirildi. Do'kon ilovalaridagi menyu nomlari vaqt o'tishi bilan o'zgarishi mumkin."
          : 'Источники, конфигурация Uzgets, условия сервиса и политика конфиденциальности проверены 10 октября 2026 года. Названия пунктов меню в приложениях магазинов могут меняться.'}
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
          <li><a href="#kanal" className="hover:text-[var(--primary)] hover:underline">Qaysi Premium avtomatik uzayadi?</a></li>
          <li><a href="#sabab" className="hover:text-[var(--primary)] hover:underline">Kutilmagan yechilish: sabab → yechim</a></li>
          <li><a href="#toxtatish" className="hover:text-[var(--primary)] hover:underline">Avtomatik uzayishni to&apos;xtatish</a></li>
          <li><a href="#yechildi" className="hover:text-[var(--primary)] hover:underline">Pul allaqachon yechilgan bo&apos;lsa</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Avtomatik uzaymaydigan variant</a></li>
          <li><a href="#oldini-olish" className="hover:text-[var(--primary)] hover:underline">Oldini olish uchun 5 qadam</a></li>
        </ol>
      </nav>

      <h2 id="kanal">Qaysi Telegram Premium avtomatik uzayadi?</h2>
      <p>
        Telegram&apos;ning rasmiy foydalanish shartlariga ko&apos;ra, Premium&apos;ga obuna
        bo&apos;lish — tanlangan to&apos;lov usulidan <strong>har oy yoki har yili takroriy
        to&apos;lov yechilishiga ruxsat berish</strong> demakdir. Lekin bu faqat obuna sifatida
        olingan Premium&apos;ga tegishli. Oldindan to&apos;langan (prepaid) muddatlar — sovg&apos;a
        yoki {siteConfig.bot} kabi bir martalik xarid — belgilangan kunda o&apos;zi tugaydi.
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Xarid kanali</th><th className="px-4 py-3 text-left">Avtomatik uzayadimi?</th><th className="px-4 py-3 text-left">Qayerda to&apos;xtatiladi</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">App Store (iPhone/iPad)</td><td className="px-4 py-3"><strong>Ha</strong> — oylik yoki yillik</td><td className="px-4 py-3">Sozlamalar → Apple ID → Obunalar</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Google Play (Android)</td><td className="px-4 py-3"><strong>Ha</strong> — oylik yoki yillik</td><td className="px-4 py-3">Google Play → To&apos;lovlar va obunalar → Obunalar</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">@PremiumBot (rasmiy bot)</td><td className="px-4 py-3"><strong>Ha</strong></td><td className="px-4 py-3">Botga <code>/stop</code> buyrug&apos;ini yuborish</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Sovg&apos;a qilingan Premium (3, 6, 12 oy)</td><td className="px-4 py-3"><strong>Yo&apos;q</strong> — oldindan to&apos;langan muddat</td><td className="px-4 py-3">To&apos;xtatish shart emas</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">{siteConfig.bot} (3, 6, 12 oy)</td><td className="px-4 py-3"><strong>Yo&apos;q</strong> — bir martalik to&apos;lov</td><td className="px-4 py-3">To&apos;xtatish shart emas</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Qaysi turga tegishli ekaningizni bilish uchun Telegram&apos;da{' '}
        <strong>Sozlamalar → Telegram Premium</strong> bo&apos;limini oching: u yerda obunani
        boshqarish tugmasi ko&apos;rinsa — bu avtomatik uzayuvchi obuna.
      </p>
      <InlineBotCTA lang="uz" text={`Takroriy yechilishsiz Premium: 3 oy — ${formatUzs(P3.priceUzs)}, bir martalik to'lov.`} />

      <h2 id="sabab">Kutilmagan pul yechilishi: sabab → yechim</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Holat</th><th className="px-4 py-3 text-left">Sabab</th><th className="px-4 py-3 text-left">Yechim</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Har oy bir xil summa yechilmoqda</td><td className="px-4 py-3">App Store yoki Google Play&apos;dagi faol oylik obuna</td><td className="px-4 py-3">Do&apos;kondagi obunalar ro&apos;yxatidan bekor qiling</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Yiliga bir marta katta summa yechildi</td><td className="px-4 py-3">Yillik obuna yangi yilga uzaydi</td><td className="px-4 py-3">Obunani bekor qiling; do&apos;kondan qaytarish so&apos;rang</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Telegram&apos;ni o&apos;chirdim, pul baribir yechildi</td><td className="px-4 py-3">Ilovani yoki akkauntni o&apos;chirish obunani bekor qilmaydi</td><td className="px-4 py-3">Obunani do&apos;kon sozlamalaridan alohida bekor qiling</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Obunalar ro&apos;yxatida Telegram yo&apos;q, lekin pul yechilmoqda</td><td className="px-4 py-3">Obuna boshqa Apple ID / Google hisobida yoki @PremiumBot orqali</td><td className="px-4 py-3">Boshqa hisoblarni tekshiring; @PremiumBot&apos;ga <code>/stop</code> yuboring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Summa avvalgidan farq qilyapti</td><td className="px-4 py-3">Valyuta konvertatsiyasi, bank komissiyasi yoki narx o&apos;zgarishi</td><td className="px-4 py-3">Bank ko&apos;chirmasidagi kurs va Telegram xabarlarini tekshiring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Hech qayerda obuna yo&apos;q, notanish yechilish</td><td className="px-4 py-3">Karta ma&apos;lumoti begona bot yoki saytga tushgan bo&apos;lishi mumkin</td><td className="px-4 py-3">Kartani bank ilovasida bloklang va bankka murojaat qiling</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Narx bo&apos;yicha aniqlik: Telegram shartlariga ko&apos;ra obuna narxi o&apos;zgarsa, bu
        haqda kamida <strong>30 kun oldin</strong> akkauntingizga xabar yuboriladi. To&apos;lov
        tizimlari esa o&apos;z komissiyasi va konvertatsiya kursini qo&apos;llashi mumkin — shu
        sababli so&apos;mdagi yechilgan summa oydan oyga biroz farq qiladi.
      </p>

      <h2 id="toxtatish">Avtomatik uzayishni qanday to&apos;xtatish mumkin?</h2>
      <ol>
        <li><strong>iPhone:</strong> Sozlamalar → ismingiz (Apple ID) → Obunalar → Telegram → Obunani bekor qilish.</li>
        <li><strong>Android:</strong> Google Play → profil belgisi → To&apos;lovlar va obunalar → Obunalar → Telegram → Obunani bekor qilish.</li>
        <li><strong>@PremiumBot:</strong> botni ochib, <code>/stop</code> buyrug&apos;ini yuboring. Bu bot faqat Telegram&apos;ning to&apos;g&apos;ridan-to&apos;g&apos;ri (do&apos;kondan tashqari) Android, Desktop va macOS versiyalarida ishlaydi.</li>
      </ol>
      <p>
        Bekor qilgandan keyin Premium darhol o&apos;chmaydi — to&apos;langan davr oxirigacha
        ishlaydi, keyin qayta pul yechilmaydi. Muddat tugashidan kamida bir kun oldin bekor
        qilish xavfsizroq. Har bir qadam batafsil yozilgan qo&apos;llanma:{' '}
        <Link href="/blog/telegram-premium-obunasini-bekor-qilish" className="text-[var(--primary)] hover:underline">
          Telegram Premium obunasini qanday bekor qilish mumkin
        </Link>
        .
      </p>

      <h2 id="yechildi">Pul allaqachon yechilgan bo&apos;lsa nima qilish kerak?</h2>
      <p>
        Avval obunani bekor qiling — aks holda keyingi davrda yana yechiladi. Keyin qaytarishni
        to&apos;lovni qayta ishlagan do&apos;kondan so&apos;rang:
      </p>
      <ul>
        <li><strong>App Store:</strong> reportaproblem.apple.com sahifasida &laquo;Request a refund&raquo;ni tanlang. Apple so&apos;rovni alohida ko&apos;rib chiqadi, javob odatda 24–48 soatda keladi. To&apos;lov hali &laquo;pending&raquo; holatida bo&apos;lsa, chek kelguncha so&apos;rov yuborib bo&apos;lmaydi.</li>
        <li><strong>Google Play:</strong> xariddan keyingi <strong>48 soat</strong> ichida Google Play&apos;ning o&apos;zidan qaytarish so&apos;rash mumkin; undan keyin so&apos;rov ilova ishlab chiquvchisi orqali ko&apos;riladi.</li>
        <li><strong>Telegram qoidasi:</strong> bekor qilingan obunaning qolgan kunlari uchun pul qaytarilmaydi — Premium davr oxirigacha faol qoladi.</li>
      </ul>
      <p>
        Qaytarish shartlari to&apos;liq yoritilgan maqola:{' '}
        <Link href="/blog/telegram-premium-pul-qaytariladimi" className="text-[var(--primary)] hover:underline">
          Telegram Premium uchun to&apos;langan pul qaytariladimi
        </Link>
        .
      </p>

      <h2 id="uzgets">Avtomatik uzaymaydigan variant: bir martalik to&apos;lov</h2>
      <p>
        {siteConfig.bot} orqali Premium 3, 6 yoki 12 oyga <strong>bir martalik to&apos;lov</strong>{' '}
        bilan olinadi: UzCard, Humo yoki Click orqali bir marta to&apos;laysiz, Premium
        ko&apos;rsatilgan @username&apos;ga biriktiriladi va muddat tugagach o&apos;zi
        o&apos;chadi. Uzgets bank kartasi raqamini yig&apos;maydi va saqlamaydi, shuning uchun
        keyingi oyda kutilmagan yechilish bo&apos;lishi mumkin emas. Davom ettirish kerak
        bo&apos;lsa, o&apos;zingiz yangi buyurtma berasiz —{' '}
        <Link href="/blog/telegram-premium-muddati-tugadi-yangilash" className="text-[var(--primary)] hover:underline">
          muddat tugaganda yangilash tartibi
        </Link>{' '}
        alohida yozilgan.
      </p>
      <p>
        {siteConfig.bot}dagi Telegram Premium narxlari (2026-yil 10-oktabr holatiga):
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Muddat</th><th className="px-4 py-3 text-left">Narx (bir martalik)</th><th className="px-4 py-3 text-left">Oyiga</th><th className="px-4 py-3 text-left">Avtomatik uzayish</th></tr></thead>
          <tbody>
            {PREMIUM_PERIODS.map((p) => (
              <tr key={p.slug} className="border-t border-[var(--border)]"><td className="px-4 py-3">{p.months} oy</td><td className="px-4 py-3"><strong>{formatUzs(p.priceUzs)}</strong></td><td className="px-4 py-3">≈ {formatUzs(p.perMonthHint)}</td><td className="px-4 py-3">Yo&apos;q</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Narxlar o&apos;zgarishi mumkin — joriy holat har doim <Link href="/premium" className="text-[var(--primary)] hover:underline">/premium</Link> sahifasida va botning o&apos;zida ko&apos;rsatiladi.
      </p>
      <InlineBotCTA lang="uz" text={`12 oylik Premium — ${formatUzs(P12.priceUzs)}, yil davomida birorta ham takroriy yechilishsiz.`} />

      <h2 id="oldini-olish">Kutilmagan yechilishning oldini olish uchun 5 qadam</h2>
      <ol>
        <li>Obuna bo&apos;lgan kuni telefon taqvimiga muddat tugashidan 2–3 kun oldinga eslatma qo&apos;ying.</li>
        <li>Oyiga bir marta App Store yoki Google Play&apos;dagi obunalar ro&apos;yxatini ko&apos;zdan kechiring.</li>
        <li>Bankingizning SMS yoki push xabarnomalarini yoqib qo&apos;ying — har yechilish darhol ko&apos;rinadi.</li>
        <li>Telegram&apos;ni o&apos;chirishdan oldin obunani alohida bekor qiling.</li>
        <li>Karta ma&apos;lumotini faqat rasmiy to&apos;lov sahifasiga kiriting; SMS kodni hech kimga bermang.</li>
      </ol>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Obuna va takroriy to&apos;lov qoidalari Telegram, Apple va Google&apos;ning rasmiy sahifalariga, Uzgets bo&apos;yicha ma&apos;lumot esa ichki konfiguratsiya va xizmat shartlariga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#kanal" className="hover:text-[var(--primary)] hover:underline">Какой Premium продлевается автоматически?</a></li>
          <li><a href="#sabab" className="hover:text-[var(--primary)] hover:underline">Неожиданное списание: причина → решение</a></li>
          <li><a href="#toxtatish" className="hover:text-[var(--primary)] hover:underline">Как отключить автопродление</a></li>
          <li><a href="#yechildi" className="hover:text-[var(--primary)] hover:underline">Если деньги уже списаны</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Вариант без автопродления</a></li>
          <li><a href="#oldini-olish" className="hover:text-[var(--primary)] hover:underline">5 шагов профилактики</a></li>
        </ol>
      </nav>

      <h2 id="kanal">Какой Telegram Premium продлевается автоматически?</h2>
      <p>
        По официальным условиям Telegram, оформляя подписку Premium, вы{' '}
        <strong>разрешаете регулярное списание — каждый месяц или каждый год</strong> — с
        выбранного способа оплаты. Но это касается только Premium, оформленного как подписка.
        Предоплаченные сроки — подарок или разовая покупка вроде {siteConfig.bot} — просто
        заканчиваются в назначенный день.
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Канал покупки</th><th className="px-4 py-3 text-left">Автопродление?</th><th className="px-4 py-3 text-left">Где отключается</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">App Store (iPhone/iPad)</td><td className="px-4 py-3"><strong>Да</strong> — раз в месяц или год</td><td className="px-4 py-3">Настройки → Apple ID → Подписки</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Google Play (Android)</td><td className="px-4 py-3"><strong>Да</strong> — раз в месяц или год</td><td className="px-4 py-3">Google Play → Платежи и подписки → Подписки</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">@PremiumBot (официальный бот)</td><td className="px-4 py-3"><strong>Да</strong></td><td className="px-4 py-3">Команда <code>/stop</code> в боте</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Подаренный Premium (3, 6, 12 мес.)</td><td className="px-4 py-3"><strong>Нет</strong> — предоплаченный срок</td><td className="px-4 py-3">Отключать не нужно</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">{siteConfig.bot} (3, 6, 12 мес.)</td><td className="px-4 py-3"><strong>Нет</strong> — разовая оплата</td><td className="px-4 py-3">Отключать не нужно</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Чтобы понять свой тип, откройте в Telegram <strong>Настройки → Telegram Premium</strong>:
        если там есть кнопка управления подпиской — это автопродлевающаяся подписка.
      </p>
      <InlineBotCTA lang="ru" text={`Premium без регулярных списаний: 3 месяца — ${ruSum(P3.priceUzs)}, разовая оплата.`} />

      <h2 id="sabab">Неожиданное списание: причина → решение</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Ситуация</th><th className="px-4 py-3 text-left">Причина</th><th className="px-4 py-3 text-left">Решение</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Каждый месяц списывается одна и та же сумма</td><td className="px-4 py-3">Активная месячная подписка в App Store или Google Play</td><td className="px-4 py-3">Отмените её в списке подписок магазина</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Раз в год списалась крупная сумма</td><td className="px-4 py-3">Годовая подписка продлилась на новый год</td><td className="px-4 py-3">Отмените подписку; запросите возврат в магазине</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Удалил Telegram, а деньги всё равно списали</td><td className="px-4 py-3">Удаление приложения или аккаунта не отменяет подписку</td><td className="px-4 py-3">Отдельно отмените подписку в настройках магазина</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">В списке подписок нет Telegram, но списания идут</td><td className="px-4 py-3">Подписка на другом Apple ID / аккаунте Google или через @PremiumBot</td><td className="px-4 py-3">Проверьте другие аккаунты; отправьте <code>/stop</code> в @PremiumBot</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Сумма отличается от прежней</td><td className="px-4 py-3">Конвертация валюты, комиссия банка или изменение цены</td><td className="px-4 py-3">Проверьте курс в выписке банка и сообщения от Telegram</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Подписки нигде нет, списание незнакомое</td><td className="px-4 py-3">Данные карты могли попасть к постороннему боту или сайту</td><td className="px-4 py-3">Заблокируйте карту в приложении банка и обратитесь в банк</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Уточнение по цене: по условиям Telegram об изменении стоимости подписки вас уведомляют
        сообщением в аккаунте минимум за <strong>30 дней</strong>. Платёжные системы при этом
        могут применять собственную комиссию и курс конвертации — поэтому сумма в сумах от месяца
        к месяцу немного меняется.
      </p>

      <h2 id="toxtatish">Как отключить автопродление?</h2>
      <ol>
        <li><strong>iPhone:</strong> Настройки → ваше имя (Apple ID) → Подписки → Telegram → Отменить подписку.</li>
        <li><strong>Android:</strong> Google Play → значок профиля → Платежи и подписки → Подписки → Telegram → Отменить подписку.</li>
        <li><strong>@PremiumBot:</strong> откройте бота и отправьте команду <code>/stop</code>. Бот доступен только в прямых (не из магазинов) версиях Telegram для Android, Desktop и macOS.</li>
      </ol>
      <p>
        После отмены Premium не отключается сразу — он работает до конца оплаченного периода, а
        новых списаний уже не будет. Надёжнее отменять минимум за день до конца срока. Подробная
        пошаговая инструкция:{' '}
        <Link href="/ru/blog/telegram-premium-obunasini-bekor-qilish" className="text-[var(--primary)] hover:underline">
          как отменить подписку Telegram Premium
        </Link>
        .
      </p>

      <h2 id="yechildi">Что делать, если деньги уже списаны?</h2>
      <p>
        Сначала отмените подписку — иначе в следующем периоде спишут снова. Затем запросите
        возврат у магазина, который обработал платёж:
      </p>
      <ul>
        <li><strong>App Store:</strong> на reportaproblem.apple.com выберите «Request a refund». Apple рассматривает запрос индивидуально, ответ обычно приходит за 24–48 часов. Пока платёж в статусе «pending», запрос отправить нельзя — нужно дождаться чека.</li>
        <li><strong>Google Play:</strong> в течение <strong>48 часов</strong> после покупки возврат можно запросить прямо в Google Play; позже запрос рассматривается через разработчика приложения.</li>
        <li><strong>Правило Telegram:</strong> за оставшиеся дни отменённой подписки деньги не возвращают — Premium остаётся активным до конца периода.</li>
      </ul>
      <p>
        Полный разбор условий возврата:{' '}
        <Link href="/ru/blog/telegram-premium-pul-qaytariladimi" className="text-[var(--primary)] hover:underline">
          возвращают ли деньги за Telegram Premium
        </Link>
        .
      </p>

      <h2 id="uzgets">Вариант без автопродления: разовая оплата</h2>
      <p>
        Через {siteConfig.bot} Premium покупается на 3, 6 или 12 месяцев{' '}
        <strong>разовой оплатой</strong>: вы один раз платите через UzCard, Humo или Click, Premium
        привязывается к указанному @username и сам отключается по окончании срока. Uzgets не
        собирает и не хранит номер банковской карты, поэтому неожиданного списания в следующем
        месяце быть не может. Если нужно продолжить, вы сами оформляете новый заказ —{' '}
        <Link href="/ru/blog/telegram-premium-muddati-tugadi-yangilash" className="text-[var(--primary)] hover:underline">
          как продлить Premium после окончания срока
        </Link>
        .
      </p>
      <p>
        Цены на Telegram Premium в {siteConfig.bot} (по состоянию на 10 октября 2026 года):
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Срок</th><th className="px-4 py-3 text-left">Цена (разово)</th><th className="px-4 py-3 text-left">В месяц</th><th className="px-4 py-3 text-left">Автопродление</th></tr></thead>
          <tbody>
            {PREMIUM_PERIODS.map((p) => (
              <tr key={p.slug} className="border-t border-[var(--border)]"><td className="px-4 py-3">{p.months} мес.</td><td className="px-4 py-3"><strong>{ruSum(p.priceUzs)}</strong></td><td className="px-4 py-3">≈ {ruSum(p.perMonthHint)}</td><td className="px-4 py-3">Нет</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Цены могут меняться — актуальные всегда указаны на странице <Link href="/ru/premium" className="text-[var(--primary)] hover:underline">/ru/premium</Link> и в самом боте.
      </p>
      <InlineBotCTA lang="ru" text={`Premium на 12 месяцев — ${ruSum(P12.priceUzs)}, и ни одного повторного списания за год.`} />

      <h2 id="oldini-olish">5 шагов, чтобы избежать неожиданных списаний</h2>
      <ol>
        <li>В день оформления подписки поставьте напоминание в календаре за 2–3 дня до конца срока.</li>
        <li>Раз в месяц просматривайте список подписок в App Store или Google Play.</li>
        <li>Включите SMS или push-уведомления банка — каждое списание будет видно сразу.</li>
        <li>Перед удалением Telegram отдельно отмените подписку.</li>
        <li>Вводите данные карты только на официальной платёжной странице; никому не сообщайте SMS-код.</li>
      </ol>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Правила подписки и регулярных списаний основаны на официальных страницах Telegram, Apple и Google, сведения об Uzgets — на внутренней конфигурации и условиях сервиса.</p>
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
      title: "Telegram Premium avtomatik uzayadimi? Kutilmagan pul yechilishini to'xtatish",
      description:
        "Telegram Premium qaysi holatda avtomatik uzayadi, kartadan kutilmagan pul nega yechiladi va uni App Store, Google Play yoki @PremiumBot orqali qanday to'xtatish mumkin.",
      metaTitle: "Telegram Premium avtomatik uzayadimi? To'xtatish yo'li",
      metaDescription:
        "Telegram Premium App Store, Google Play va @PremiumBot orqali avtomatik uzayadi, bir martalik xaridda esa yo'q. Kutilmagan yechilishning 6 sababi va to'xtatish yo'li.",
      ogDescription:
        "Do'kon obunasi har oy yoki yili avtomatik yechiladi, bir martalik xarid esa yo'q. Kutilmagan yechilishning 6 sababi va to'xtatish qadamlari.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: 'Telegram Premium avtomatik uzayadimi?', answer: "App Store, Google Play yoki rasmiy @PremiumBot orqali obuna sifatida olingan bo'lsa — ha, siz bekor qilmaguningizcha har oy yoki har yili kartadan yechiladi. Sovg'a qilingan yoki Uzgets orqali olingan 3, 6, 12 oylik Premium avtomatik uzaymaydi." },
        { question: "Telegram Premium uchun kartamdan nega kutilmagan pul yechildi?", answer: "Eng ko'p uchraydigan sabab — App Store yoki Google Play'dagi unutilgan faol obuna, jumladan yillik obunaning yangi yilga uzayishi. Boshqa sabablar: obuna boshqa Apple ID yoki Google hisobida, @PremiumBot orqali rasmiylashtirilgan, yoki karta ma'lumoti begona xizmatga tushgan." },
        { question: "Telegram ilovasini o'chirsam obuna to'xtaydimi?", answer: "Yo'q. Ilovani yoki akkauntni o'chirish obunani bekor qilmaydi. Obunani App Store yoki Google Play'dagi obunalar ro'yxatidan alohida bekor qilish kerak." },
        { question: "@PremiumBot orqali olingan obunani qanday to'xtataman?", answer: "@PremiumBot'ni ochib, /stop buyrug'ini yuboring. Shundan keyin kelgusi to'lovlar to'xtaydi, Premium esa to'langan davr oxirigacha ishlaydi." },
        { question: "Obunani bekor qilsam, yechilgan pul qaytariladimi?", answer: "Telegram qoidasiga ko'ra qolgan kunlar uchun pul qaytarilmaydi — Premium davr oxirigacha faol qoladi. Qaytarishni to'lovni qayta ishlagan do'kondan so'rash mumkin: Apple'da reportaproblem.apple.com orqali, Google Play'da xariddan keyingi 48 soat ichida." },
        { question: "Uzgets orqali olingan Premium muddati tugaganda pul yechiladimi?", answer: "Yo'q. Bu bir martalik to'lov: Uzgets karta raqamini yig'maydi va saqlamaydi, muddat tugagach Premium o'zi o'chadi. Davom ettirish uchun botda yangi buyurtma berasiz." },
        { question: "Premium narxi ogohlantirishsiz o'zgarishi mumkinmi?", answer: "Telegram shartlariga ko'ra obuna narxi o'zgarsa, bu haqda kamida 30 kun oldin akkauntga xabar yuboriladi. So'mdagi summa esa valyuta kursi va bank komissiyasi tufayli oydan oyga biroz farq qilishi mumkin." },
      ],
      finalCtaHeading: 'Avtomatik yechilishsiz Premium',
      finalCtaBody: `${siteConfig.bot}'da Premium ${formatUzs(P3.priceUzs)}dan (3 oy) boshlanadi: UzCard, Humo yoki Click orqali bir marta to'laysiz, muddat tugagach hech qanday pul yechilmaydi.`,
    },
    ru: {
      title: 'Продлевается ли Telegram Premium автоматически? Как остановить списания',
      description:
        'В каких случаях Telegram Premium продлевается автоматически, почему с карты списываются деньги и как отключить автопродление в App Store, Google Play или @PremiumBot.',
      metaTitle: 'Автопродление Telegram Premium: как отключить',
      metaDescription:
        'Telegram Premium через App Store, Google Play и @PremiumBot продлевается автоматически, разовая покупка — нет. 6 причин неожиданного списания и как его остановить.',
      ogDescription:
        'Подписка из магазина списывается каждый месяц или год, разовая покупка — нет. 6 причин неожиданного списания и шаги отключения.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Telegram Premium продлевается автоматически?', answer: 'Если он оформлен как подписка через App Store, Google Play или официальный @PremiumBot — да, деньги списываются каждый месяц или год, пока вы её не отмените. Подаренный Premium и Premium на 3, 6, 12 месяцев через Uzgets автоматически не продлеваются.' },
        { question: 'Почему с карты неожиданно списали деньги за Telegram Premium?', answer: 'Самая частая причина — забытая активная подписка в App Store или Google Play, в том числе продление годовой подписки. Другие причины: подписка оформлена на другом Apple ID или аккаунте Google, через @PremiumBot, либо данные карты попали к постороннему сервису.' },
        { question: 'Если удалить Telegram, подписка остановится?', answer: 'Нет. Удаление приложения или аккаунта не отменяет подписку. Её нужно отдельно отменить в списке подписок App Store или Google Play.' },
        { question: 'Как остановить подписку, оформленную через @PremiumBot?', answer: 'Откройте @PremiumBot и отправьте команду /stop. После этого будущие списания прекратятся, а Premium будет работать до конца оплаченного периода.' },
        { question: 'Вернут ли списанные деньги после отмены подписки?', answer: 'По правилу Telegram деньги за оставшиеся дни не возвращают — Premium остаётся активным до конца периода. Возврат можно запросить у магазина, обработавшего платёж: у Apple через reportaproblem.apple.com, в Google Play — в течение 48 часов после покупки.' },
        { question: 'Спишут ли деньги, когда закончится Premium, купленный через Uzgets?', answer: 'Нет. Это разовая оплата: Uzgets не собирает и не хранит номер карты, по окончании срока Premium просто отключается. Чтобы продолжить, нужно оформить новый заказ в боте.' },
        { question: 'Может ли цена Premium измениться без предупреждения?', answer: 'По условиям Telegram об изменении цены подписки уведомляют сообщением в аккаунте минимум за 30 дней. Сумма в сумах при этом может немного меняться из-за курса валют и комиссии банка.' },
      ],
      finalCtaHeading: 'Premium без автосписаний',
      finalCtaBody: `В ${siteConfig.bot} Premium стоит от ${ruSum(P3.priceUzs)} (3 месяца): одна оплата через UzCard, Humo или Click, после окончания срока деньги не списываются.`,
    },
  },
}
