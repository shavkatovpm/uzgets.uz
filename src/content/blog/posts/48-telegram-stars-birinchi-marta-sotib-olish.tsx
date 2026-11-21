import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, STAR_PRICE, PRICES_DATE_UZ, PRICE_NOTE } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-birinchi-marta-sotib-olish'
const TODAY = '2026-11-21'

const pack = (amount: number) => STARS_PACKS.find((p) => p.amount === amount) ?? STARS_PACKS[0]
const P50 = pack(50)
const P100 = pack(100)
const P250 = pack(250)
const ruSum = (amount: number) => `${formatNumber(amount)} сум`

const linkCls = 'text-[var(--primary)] hover:underline'
const thCls = 'px-4 py-3 text-left'
const tdCls = 'px-4 py-3'
const trCls = 'border-t border-[var(--border)]'

function UzAnswerBox() {
  return (
    <p>
      Birinchi xariddan oldin Telegram&apos;da <strong>@username</strong> o&apos;rnating, keyin{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>da
      50 yoki 100 ⭐ tanlang va <strong>Uzcard va Humo</strong> kartasi, Click yoki Payme orqali bot ko&apos;rsatgan
      aniq summani to&apos;lang. 50 ⭐ narxi <strong>{formatUzs(P50.priceUzs)}</strong>. Parol, SMS kod va CVV
      so&apos;ralmaydi. Stars kelganini Sozlamalar &gt; My Stars bo&apos;limida ko&apos;rasiz.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Перед первой покупкой задайте в Telegram <strong>@username</strong>, затем в{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      выберите 50 или 100 ⭐ и оплатите картой <strong>Uzcard и Humo</strong>, через Click или Payme ровно ту
      сумму, которую покажет бот. 50 ⭐ стоят <strong>{ruSum(P50.priceUzs)}</strong>. Пароль, SMS-код и CVV не
      нужны. Зачисление видно в Настройки &gt; Мои звёзды.
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
          <a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram: Terms of Service for Telegram Stars
          </a>
          {uz
            ? ". Stars sotuvi qaytarilmasligi, Stars'ni boshqa akkauntga o'tkazish yoki sotish taqiqlangani, tranzaksiya ID'si Sozlamalar ichidagi Stars bo'limida turishi."
            : '. Продажи Stars окончательные, Stars нельзя передавать или перепродавать, ID транзакции хранится в разделе Stars в настройках.'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram API: Telegram Stars
          </a>
          {uz
            ? ". Balans va tranzaksiya tarixi qanday saqlanishi, tranzaksiyada pending va failed holatlari borligi, boshqa foydalanuvchiga Stars sovg'a qilish imkoniyati."
            : '. Как хранятся баланс и история, у транзакций есть статусы pending и failed, Stars можно подарить другому пользователю.'}
        </li>
        <li>
          <a href="https://telegram.org/faq" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram FAQ
          </a>
          {uz
            ? ". Username Sozlamalarda o'rnatilishi, ruxsat etilgan belgilar (a-z, 0-9, pastki chiziq) va login kodini hech kimga, hatto boshqa servislarga ham bermaslik kerakligi."
            : '. Username задаётся в настройках, допустимые символы (a-z, 0-9, подчёркивание), код входа нельзя сообщать никому, включая другие сервисы.'}
        </li>
        <li>
          <a href="https://support.apple.com/en-us/111741" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Apple Support: Payment methods that you can use with your Apple Account
          </a>
          {uz
            ? ". O'zbekiston uchun App Store'da to'lov usuli sifatida faqat \"Most credit and debit cards\" ko'rsatilgan."
            : '. Для Узбекистана в App Store указан только способ «Most credit and debit cards».'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? `Manbalar 2026-yil 21-noyabrda tekshirildi. Uzgets narxlari joriy konfiguratsiyadan olingan va ${PRICES_DATE_UZ} dan amalda. Buyurtma paytida botda ko'rsatilgan summa asosiy hisoblanadi.`
          : `Источники проверены 21 ноября 2026 года. Цены Uzgets взяты из текущей конфигурации и действуют с ${PRICES_DATE_UZ}. Основной считается сумма, которую бот показывает при заказе.`}
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
          <li><a href="#tayyorgarlik" className="hover:text-[var(--primary)] hover:underline">To&apos;lovdan oldin nimani tayyorlash kerak?</a></li>
          <li><a href="#qadamlar" className="hover:text-[var(--primary)] hover:underline">Birinchi xarid qanday o&apos;tadi? 7 qadam</a></li>
          <li><a href="#miqdor" className="hover:text-[var(--primary)] hover:underline">Birinchi marta nechta Stars olish kerak?</a></li>
          <li><a href="#aniq-summa" className="hover:text-[var(--primary)] hover:underline">Nega summani aynan bot ko&apos;rsatgandek o&apos;tkazish kerak?</a></li>
          <li><a href="#soralmaydi" className="hover:text-[var(--primary)] hover:underline">Qaysi ma&apos;lumotni hech kimga bermaysiz?</a></li>
          <li><a href="#xatolar" className="hover:text-[var(--primary)] hover:underline">Yangi xaridorlar qayerda adashadi?</a></li>
          <li><a href="#kelmasa" className="hover:text-[var(--primary)] hover:underline">Stars kelmasa nima qilasiz?</a></li>
        </ol>
      </nav>

      <h2 id="tayyorgarlik">To&apos;lovdan oldin nimani tayyorlash kerak?</h2>
      <p>
        Sizga uchta narsa kerak: Telegram akkauntingizdagi @username, pul bor Uzcard yoki Humo kartasi
        (yoki Click, Payme ilovasi) va {siteConfig.bot}. Boshqa hech narsa talab qilinmaydi.
      </p>
      <p>
        Username&apos;ni Telegram&apos;da <strong>Sozlamalar</strong> bo&apos;limida ko&apos;rasiz va
        o&apos;zgartirasiz. Telegram unda faqat lotin harflari, raqamlar va pastki chiziqni qabul qiladi.
        Username bo&apos;lmasa, avval uni o&apos;rnating. Stars aynan shu nomga biriktiriladi.
      </p>
      <p>
        App Store yoki Google Play orqali olmoqchi bo&apos;lsangiz, odatda xalqaro karta kerak bo&apos;ladi:
        Apple sahifasida O&apos;zbekiston uchun faqat &laquo;kredit va debet kartalar&raquo; ko&apos;rsatilgan.
        Mahalliy karta bilan to&apos;lash uchun bot orqali xarid qulayroq. Mexanikasi{' '}
        <Link href="/blog/telegram-stars-uzcard-humo-bilan-sotib-olish" className={linkCls}>
          Uzcard va Humo bilan Stars olish
        </Link>{' '}
        maqolasida alohida yozilgan.
      </p>

      <h2 id="qadamlar">Birinchi xarid qanday o&apos;tadi? 7 qadam</h2>
      <p>
        Birinchi xarid odatda bir necha daqiqa oladi. Har qadamni tartib bilan bajarsangiz, xato qilish
        ehtimoli juda kam qoladi.
      </p>
      <ol>
        <li>
          <strong>Username&apos;ni nusxalang.</strong> Sozlamalardan @username&apos;ni nusxa oling, qo&apos;lda
          yozmang. Bitta harf xatosi Stars&apos;ni boshqa odamga yuborib yuboradi.
        </li>
        <li>
          <strong>Kimga ekanini hal qiling.</strong> O&apos;zingizga bo&apos;lsa o&apos;z username&apos;ingiz,
          do&apos;stga bo&apos;lsa uning username&apos;i. Telegram shartlariga ko&apos;ra Stars&apos;ni keyin
          boshqa akkauntga o&apos;tkazib bo&apos;lmaydi.
        </li>
        <li>
          <strong>Botni oching.</strong>{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className={linkCls}>{siteConfig.bot}</a>{' '}
          ni oching, START bosing va Telegram Stars bo&apos;limini tanlang. Nomi aynan {siteConfig.bot} ekanini
          tekshiring.
        </li>
        <li>
          <strong>Kichik miqdorni tanlang.</strong> Birinchi marta 50 yoki 100 ⭐ yetadi. Pastda jadval bor.
        </li>
        <li>
          <strong>To&apos;lov usulini tanlang.</strong> Uzcard va Humo kartasi, Click yoki Payme. Narx
          hammasida bir xil, bank yoki ilova o&apos;z komissiyasini ko&apos;rsatishi mumkin.
        </li>
        <li>
          <strong>Aniq summani o&apos;tkazing.</strong> Bot ko&apos;rsatgan summani yaxlitlamang va o&apos;zgartirmang.
          Chekni saqlab qo&apos;ying.
        </li>
        <li>
          <strong>Balansni tekshiring.</strong> Telegram&apos;da Sozlamalar &gt; My Stars bo&apos;limini oching.
          Yangi tranzaksiya va balans shu yerda ko&apos;rinadi.
        </li>
      </ol>
      <InlineBotCTA lang="uz" text="Username tayyor bo'lsa, birinchi 50 ⭐ ni botda bir necha daqiqada olasiz." />

      <h2 id="miqdor">Birinchi marta nechta Stars olish kerak?</h2>
      <p>
        Sinab ko&apos;rish uchun 50 yoki 100 ⭐ yetarli. Bu bir nechta reaksiya, kichik sovg&apos;a yoki bitta
        arzon bot funksiyasiga yetadi. Kerakli miqdor aniq bo&apos;lsa, aynan shuni oling.
      </p>
      <p>
        {siteConfig.bot}da 1 ⭐ narxi <strong>{formatNumber(STAR_PRICE)} so&apos;m</strong>, narx miqdorga
        mutanosib. Katta paket olganda birlik narxi tushmaydi, shuning uchun kichikdan boshlash ortiqcha
        xarajatdan saqlaydi.
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[520px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className={thCls}>Paket</th><th className={thCls}>Narx</th><th className={thCls}>Kimga mos</th></tr></thead>
          <tbody>
            <tr className={trCls}><td className={tdCls}><Link href={`/stars/${P50.slug}`} className={linkCls}>{formatNumber(P50.amount)} ⭐</Link></td><td className={tdCls}>{formatUzs(P50.priceUzs)}</td><td className={tdCls}>Faqat sinab ko&apos;rmoqchi bo&apos;lganga</td></tr>
            <tr className={trCls}><td className={tdCls}><Link href={`/stars/${P100.slug}`} className={linkCls}>{formatNumber(P100.amount)} ⭐</Link></td><td className={tdCls}>{formatUzs(P100.priceUzs)}</td><td className={tdCls}>Bir necha reaksiya yoki kichik sovg&apos;a uchun</td></tr>
            <tr className={trCls}><td className={tdCls}><Link href={`/stars/${P250.slug}`} className={linkCls}>{formatNumber(P250.amount)} ⭐</Link></td><td className={tdCls}>{formatUzs(P250.priceUzs)}</td><td className={tdCls}>Aniq bitta sovg&apos;a yoki yopiq kontent uchun</td></tr>
          </tbody>
        </table>
        <p className="border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--text-muted)]">{PRICE_NOTE.uz} Narxlar {PRICES_DATE_UZ} holatiga.</p>
      </div>
      <p>
        Boshqa miqdorlar{' '}
        <Link href="/stars" className={linkCls}>Stars sahifasida</Link> va{' '}
        <Link href="/blog/telegram-stars-eng-kichik-eng-katta-paket" className={linkCls}>
          paket tanlash maqolasida
        </Link>. Telegram ilovasidagi narx bilan solishtirmoqchi bo&apos;lsangiz, ilovadagi xarid oynasini
        oching: u yerda narx do&apos;kon, soliq va mamlakatga qarab chiqadi.
      </p>

      <h2 id="aniq-summa">Nega summani aynan bot ko&apos;rsatgandek o&apos;tkazish kerak?</h2>
      <p>
        Chunki bot to&apos;lovni summa bo&apos;yicha avtomatik tekshiradi. Uzcard va Humo kartasi bilan
        to&apos;laganda bot karta raqami va aniq summani ko&apos;rsatadi, siz shu summani o&apos;tkazasiz.
      </p>
      <p>
        Summani yaxlitlab yuborsangiz yoki ikki bo&apos;lib to&apos;lasangiz, tekshiruv o&apos;tmasligi va
        buyurtma kutishda qolishi mumkin. Click&apos;da to&apos;lov to&apos;g&apos;ridan to&apos;g&apos;ri ilova
        ichida tasdiqlanadi, batafsil{' '}
        <Link href="/blog/telegram-stars-click-orqali-sotib-olish" className={linkCls}>Click orqali Stars</Link>{' '}
        va{' '}
        <Link href="/blog/telegram-stars-payme-orqali-sotib-olish" className={linkCls}>Payme orqali Stars</Link>{' '}
        maqolalarida.
      </p>

      <h2 id="soralmaydi">Qaysi ma&apos;lumotni hech kimga bermaysiz?</h2>
      <p>
        Stars olish uchun faqat @username kerak. Telegram paroli, SMS yoki login kodi, 2FA paroli, karta
        CVV kodi va PIN&apos;i hech qachon kerak emas.
      </p>
      <p>
        Telegram FAQ&apos;da ham login kodi hech kimga, jumladan boshqa servislarga ham berilmasligi yozilgan.
        Kimdir &laquo;Stars tushishi uchun kod yuboring&raquo; desa, bu sotuvchi emas, firibgar. Ishonchli
        sotuvchini qanday ajratish{' '}
        <Link href="/blog/arzon-stars-qayerdan-olinadi-3-belgi" className={linkCls}>3 belgi maqolasida</Link>.
      </p>

      <h2 id="xatolar">Yangi xaridorlar qayerda adashadi?</h2>
      <p>
        Ko&apos;p muammo to&apos;lovdan oldin paydo bo&apos;ladi: username, summa yoki karta limiti.
        Quyidagi jadvalni to&apos;lashdan oldin bir ko&apos;zdan kechiring.
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[680px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className={thCls}>Holat</th><th className={thCls}>Sabab</th><th className={thCls}>Yechim</th></tr></thead>
          <tbody>
            <tr className={trCls}><td className={tdCls}>Akkauntda username yo&apos;q</td><td className={tdCls}>Telegram&apos;da username majburiy emas</td><td className={tdCls}>Sozlamalarda username o&apos;rnating, keyin buyurtma bering</td></tr>
            <tr className={trCls}><td className={tdCls}>Stars boshqa odamga ketdi</td><td className={tdCls}>Username qo&apos;lda, xato bilan yozilgan</td><td className={tdCls}>Doim nusxa olib qo&apos;ying, to&apos;lashdan oldin profil bilan solishtiring</td></tr>
            <tr className={trCls}><td className={tdCls}>Buyurtma kutishda qoldi</td><td className={tdCls}>Summa yaxlitlangan yoki bo&apos;lib o&apos;tkazilgan</td><td className={tdCls}>Chekni saqlang, qayta to&apos;lamang, supportga yozing</td></tr>
            <tr className={trCls}><td className={tdCls}>Karta rad etildi</td><td className={tdCls}>Balans yoki onlayn to&apos;lov limiti yetmaydi</td><td className={tdCls}>Bank ilovasida limitni tekshiring yoki boshqa usulni tanlang</td></tr>
            <tr className={trCls}><td className={tdCls}>Balans ko&apos;rinmayapti</td><td className={tdCls}>Boshqa akkaunt ochiq yoki ilova eski holatni ko&apos;rsatyapti</td><td className={tdCls}>To&apos;g&apos;ri akkauntda My Stars bo&apos;limini qayta oching</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="kelmasa">Stars kelmasa nima qilasiz?</h2>
      <p>
        Avval ikkinchi marta to&apos;lamang. Keyin bank ilovasidagi operatsiyani, botdagi buyurtma holatini va
        My Stars tarixini tekshiring. Telegram tranzaksiyalarida kutish (pending) holati ham bo&apos;ladi.
      </p>
      <p>
        Odatda Stars bir necha daqiqada keladi. 30 daqiqadan keyin ham bo&apos;lmasa, buyurtma ID, chek
        skrinshoti va @username bilan <strong>@uzgets_jbot</strong> ga yozing. Muammo bizning tarafda
        bo&apos;lsa, Stars qayta yuboriladi yoki pul qaytariladi. Bosqichma bosqich tekshiruv{' '}
        <Link href="/blog/telegram-stars-kelmadi-sabablar-yechim" className={linkCls}>
          &laquo;Stars kelmadi&raquo; maqolasida
        </Link>.
      </p>
      <p>
        Yodda tuting: Telegram shartlariga ko&apos;ra Stars sotuvi qaytarilmaydi, ya&apos;ni muvaffaqiyatli
        tushgan Stars uchun pul qaytmaydi. Shu sababli miqdor va username&apos;ni to&apos;lovdan oldin bir marta
        tekshirish eng foydali odat.
      </p>
      <InlineBotCTA lang="uz" text="Tayyormisiz? Botda 50 ⭐ dan boshlang." />
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Telegram qoidalari rasmiy manbalardan, narx va yetkazish shartlari Uzgets konfiguratsiyasi va xizmat shartlaridan olingan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#tayyorgarlik" className="hover:text-[var(--primary)] hover:underline">Что подготовить до оплаты?</a></li>
          <li><a href="#qadamlar" className="hover:text-[var(--primary)] hover:underline">Как проходит первая покупка? 7 шагов</a></li>
          <li><a href="#miqdor" className="hover:text-[var(--primary)] hover:underline">Сколько звёзд брать в первый раз?</a></li>
          <li><a href="#aniq-summa" className="hover:text-[var(--primary)] hover:underline">Почему нужно переводить точную сумму?</a></li>
          <li><a href="#soralmaydi" className="hover:text-[var(--primary)] hover:underline">Какие данные никому не сообщать?</a></li>
          <li><a href="#xatolar" className="hover:text-[var(--primary)] hover:underline">Где чаще всего ошибаются новички?</a></li>
          <li><a href="#kelmasa" className="hover:text-[var(--primary)] hover:underline">Что делать, если звёзды не пришли?</a></li>
        </ol>
      </nav>

      <h2 id="tayyorgarlik">Что подготовить до оплаты?</h2>
      <p>
        Нужно три вещи: @username в вашем Telegram, карта Uzcard или Humo с деньгами (или приложение Click,
        Payme) и {siteConfig.bot}. Больше ничего не требуется.
      </p>
      <p>
        Username задаётся в Telegram в разделе <strong>Настройки</strong>. Допустимы только латинские буквы,
        цифры и подчёркивание. Если имени пользователя нет, сначала создайте его: звёзды привязываются именно к нему.
      </p>
      <p>
        Через App Store или Google Play обычно нужна международная карта: у Apple для Узбекистана указаны
        только «кредитные и дебетовые карты». Если хотите платить местной картой, удобнее бот. Как именно
        проходит оплата, разобрано в статье{' '}
        <Link href="/ru/blog/telegram-stars-uzcard-humo-bilan-sotib-olish" className={linkCls}>
          про Stars с Uzcard и Humo
        </Link>.
      </p>

      <h2 id="qadamlar">Как проходит первая покупка? 7 шагов</h2>
      <p>
        Первая покупка обычно занимает несколько минут. Если идти по шагам, шанс ошибиться минимальный.
      </p>
      <ol>
        <li>
          <strong>Скопируйте username.</strong> Возьмите его из настроек, а не набирайте вручную. Одна
          опечатка, и звёзды уйдут другому человеку.
        </li>
        <li>
          <strong>Решите, кому звёзды.</strong> Себе указываете свой username, другу его username. По
          правилам Telegram переносить Stars на другой аккаунт потом нельзя.
        </li>
        <li>
          <strong>Откройте бота.</strong>{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className={linkCls}>{siteConfig.bot}</a>,
          нажмите START и выберите Telegram Stars. Проверьте, что имя бота именно {siteConfig.bot}.
        </li>
        <li>
          <strong>Выберите небольшое количество.</strong> Для первого раза хватит 50 или 100 ⭐, таблица ниже.
        </li>
        <li>
          <strong>Выберите способ оплаты.</strong> Карта Uzcard и Humo, Click или Payme. Цена одинаковая,
          банк или приложение может показать свою комиссию.
        </li>
        <li>
          <strong>Переведите точную сумму.</strong> Не округляйте и не меняйте сумму из бота. Сохраните чек.
        </li>
        <li>
          <strong>Проверьте баланс.</strong> В Telegram откройте Настройки &gt; Мои звёзды (My Stars). Там
          видны баланс и новая транзакция.
        </li>
      </ol>
      <InlineBotCTA lang="ru" text="Username готов? Первые 50 ⭐ в боте за несколько минут." />

      <h2 id="miqdor">Сколько звёзд брать в первый раз?</h2>
      <p>
        Чтобы попробовать, достаточно 50 или 100 ⭐. Этого хватит на несколько реакций, небольшой подарок
        или одну недорогую функцию в боте. Если точно знаете, сколько нужно, берите ровно столько.
      </p>
      <p>
        В {siteConfig.bot} 1 ⭐ стоит <strong>{formatNumber(STAR_PRICE)} сум</strong>, цена пропорциональна
        количеству. Скидки за объём нет, поэтому начать с малого выгоднее, чем купить лишнее.
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[520px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className={thCls}>Пакет</th><th className={thCls}>Цена</th><th className={thCls}>Кому подходит</th></tr></thead>
          <tbody>
            <tr className={trCls}><td className={tdCls}><Link href={`/ru/stars/${P50.slug}`} className={linkCls}>{formatNumber(P50.amount)} ⭐</Link></td><td className={tdCls}>{ruSum(P50.priceUzs)}</td><td className={tdCls}>Просто попробовать</td></tr>
            <tr className={trCls}><td className={tdCls}><Link href={`/ru/stars/${P100.slug}`} className={linkCls}>{formatNumber(P100.amount)} ⭐</Link></td><td className={tdCls}>{ruSum(P100.priceUzs)}</td><td className={tdCls}>Несколько реакций или небольшой подарок</td></tr>
            <tr className={trCls}><td className={tdCls}><Link href={`/ru/stars/${P250.slug}`} className={linkCls}>{formatNumber(P250.amount)} ⭐</Link></td><td className={tdCls}>{ruSum(P250.priceUzs)}</td><td className={tdCls}>Конкретный подарок или платный контент</td></tr>
          </tbody>
        </table>
        <p className="border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--text-muted)]">{PRICE_NOTE.ru} Цены на {PRICES_DATE_UZ}.</p>
      </div>
      <p>
        Другие количества есть{' '}
        <Link href="/ru/stars" className={linkCls}>на странице Stars</Link> и в статье{' '}
        <Link href="/ru/blog/telegram-stars-eng-kichik-eng-katta-paket" className={linkCls}>
          о выборе пакета
        </Link>. Чтобы сравнить с ценой в приложении Telegram, откройте окно покупки в самом приложении:
        там цена зависит от магазина, налога и страны.
      </p>

      <h2 id="aniq-summa">Почему нужно переводить точную сумму?</h2>
      <p>
        Потому что бот проверяет оплату автоматически по сумме. При оплате картой Uzcard и Humo бот
        показывает номер карты и точную сумму, вы переводите именно её.
      </p>
      <p>
        Если округлить сумму или разбить её на два перевода, проверка может не пройти, и заказ зависнет в
        ожидании. В Click платёж подтверждается прямо в приложении, подробнее в статьях{' '}
        <Link href="/ru/blog/telegram-stars-click-orqali-sotib-olish" className={linkCls}>Stars через Click</Link>{' '}
        и{' '}
        <Link href="/ru/blog/telegram-stars-payme-orqali-sotib-olish" className={linkCls}>Stars через Payme</Link>.
      </p>

      <h2 id="soralmaydi">Какие данные никому не сообщать?</h2>
      <p>
        Для покупки звёзд нужен только @username. Пароль Telegram, SMS-код или код входа, облачный пароль
        2FA, CVV и PIN карты не нужны никогда.
      </p>
      <p>
        В FAQ Telegram прямо сказано, что код входа нельзя сообщать никому, в том числе другим сервисам.
        Если кто-то пишет «пришлите код, чтобы звёзды зачислились», это мошенник, а не продавец. Как
        отличить надёжного продавца, читайте в статье{' '}
        <Link href="/ru/blog/arzon-stars-qayerdan-olinadi-3-belgi" className={linkCls}>о трёх признаках</Link>.
      </p>

      <h2 id="xatolar">Где чаще всего ошибаются новички?</h2>
      <p>
        Большинство проблем возникает ещё до оплаты: username, сумма или лимит карты. Пробегитесь по
        таблице, прежде чем платить.
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[680px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className={thCls}>Ситуация</th><th className={thCls}>Причина</th><th className={thCls}>Что сделать</th></tr></thead>
          <tbody>
            <tr className={trCls}><td className={tdCls}>В аккаунте нет username</td><td className={tdCls}>В Telegram он не обязателен</td><td className={tdCls}>Задайте username в настройках, потом оформляйте заказ</td></tr>
            <tr className={trCls}><td className={tdCls}>Звёзды ушли другому</td><td className={tdCls}>Username набран вручную с опечаткой</td><td className={tdCls}>Всегда копируйте и сверяйте с профилем до оплаты</td></tr>
            <tr className={trCls}><td className={tdCls}>Заказ висит в ожидании</td><td className={tdCls}>Сумма округлена или переведена частями</td><td className={tdCls}>Сохраните чек, не платите повторно, напишите в поддержку</td></tr>
            <tr className={trCls}><td className={tdCls}>Карту отклонили</td><td className={tdCls}>Не хватает баланса или лимита онлайн-платежей</td><td className={tdCls}>Проверьте лимит в банковском приложении или выберите другой способ</td></tr>
            <tr className={trCls}><td className={tdCls}>Баланс не виден</td><td className={tdCls}>Открыт другой аккаунт или приложение показывает старые данные</td><td className={tdCls}>В нужном аккаунте заново откройте Мои звёзды</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="kelmasa">Что делать, если звёзды не пришли?</h2>
      <p>
        Первым делом не платите второй раз. Затем проверьте операцию в банковском приложении, статус заказа в
        боте и историю в разделе Мои звёзды. У транзакций Telegram бывает статус ожидания (pending).
      </p>
      <p>
        Обычно звёзды приходят за несколько минут. Если через 30 минут их нет, напишите в{' '}
        <strong>@uzgets_jbot</strong>: ID заказа, скриншот чека и @username. Если проблема на нашей стороне,
        звёзды отправят повторно или вернут деньги. Пошаговая проверка в статье{' '}
        <Link href="/ru/blog/telegram-stars-kelmadi-sabablar-yechim" className={linkCls}>
          «Stars не пришли»
        </Link>.
      </p>
      <p>
        Учтите: по правилам Telegram продажи Stars окончательные, за успешно зачисленные звёзды деньги не
        возвращаются. Поэтому одна проверка количества и username до оплаты экономит больше всего нервов.
      </p>
      <InlineBotCTA lang="ru" text="Готовы? Начните в боте с 50 ⭐." />
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Правила Telegram взяты из официальных источников, цены и условия доставки из конфигурации и условий сервиса Uzgets.</p>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'cta',
  locales: {
    uz: {
      title: "Telegram Stars'ni birinchi marta sotib olish: Uzcard va Humo bilan arzon va xavfsiz 7 qadam",
      description:
        "Birinchi xariddan oldin nimani bilish kerak: username, nechta Stars olish, aniq summa bilan to'lov, nima so'ralmasligi va balansni qayerda ko'rish.",
      metaTitle: "Stars'ni birinchi marta olish: Uzcard va Humo bilan 7 qadam",
      metaDescription:
        `Telegram Stars'ni birinchi marta olyapsizmi? Uzcard va Humo bilan 7 qadam: username, ${formatNumber(P50.amount)} ⭐ dan boshlash, aniq summa, parolsiz to'lov va My Stars'da tekshirish.`,
      ogDescription:
        "Birinchi Stars xaridi uchun 7 qadamlik tekshiruv ro'yxati: username, kichik paket, aniq summa, so'ralmaydigan ma'lumotlar va balansni tekshirish.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Stars olish uchun username shartmi?", answer: "Ha. Stars aynan @username'ga biriktiriladi. Username bo'lmasa, Telegram Sozlamalarida o'rnating va uni qo'lda yozmasdan nusxa oling." },
        { question: "Birinchi marta nechta Stars olgan ma'qul?", answer: `Sinab ko'rish uchun ${formatNumber(P50.amount)} yoki ${formatNumber(P100.amount)} ⭐ yetarli. ${siteConfig.bot}da ${formatNumber(P50.amount)} ⭐ narxi ${formatUzs(P50.priceUzs)}, katta paketda birlik narxi tushmaydi.` },
        { question: "Uzcard va Humo kartasi bilan to'lasa bo'ladimi?", answer: `Ha. ${siteConfig.bot} Uzcard va Humo kartasi, Click va Payme orqali to'lovni qabul qiladi. Narx bir xil, bank o'z komissiyasini ko'rsatishi mumkin.` },
        { question: "Nega summani yaxlitlab o'tkazmaslik kerak?", answer: "Bot to'lovni summa bo'yicha avtomatik tekshiradi. Yaxlitlangan yoki bo'lib o'tkazilgan summa tekshiruvdan o'tmasligi va buyurtma kutishda qolishi mumkin." },
        { question: "Bot parol yoki SMS kod so'raydimi?", answer: "Yo'q. Faqat @username kerak. Telegram paroli, SMS yoki login kodi, 2FA paroli, CVV va PIN hech qachon so'ralmaydi. So'rasa, bu firibgarlik." },
        { question: "Stars kelganini qayerda ko'raman?", answer: "Telegram'da Sozlamalar > My Stars bo'limida. U yerda balans va tranzaksiyalar tarixi ko'rinadi." },
        { question: "Stars qancha vaqtda keladi?", answer: "Odatda bir necha daqiqada. 30 daqiqadan keyin ham kelmasa, ikkinchi marta to'lamang va buyurtma ID, chek bilan @uzgets_jbot ga yozing." },
        { question: "Username'ni xato yozsam nima bo'ladi?", answer: "Stars o'sha username egasiga ketadi va Telegram qoidalariga ko'ra uni boshqa akkauntga ko'chirib bo'lmaydi. Bunday holat supportda alohida ko'rib chiqiladi, shuning uchun to'lovdan oldin tekshiring." },
        { question: "Stars'ning muddati tugaydimi?", answer: "Telegram shartlarida Stars uchun muddat belgilanmagan. Lekin akkaunt o'chirilsa yoki unga kirish yo'qolsa, balans ham yo'qoladi." },
        { question: "Do'stimga birinchi xaridni sovg'a qilsam bo'ladimi?", answer: "Ha. Botda o'z username'ingiz o'rniga do'stingizning @username'ini kiriting. Stars to'g'ridan to'g'ri uning balansiga tushadi." },
      ],
      finalCtaHeading: "Birinchi Stars'ni kichik paketdan boshlang",
      finalCtaBody: `${siteConfig.bot}da ${formatNumber(P50.amount)} ⭐ ni tanlang, Uzcard va Humo, Click yoki Payme bilan aniq summani to'lang va balansni My Stars'da tekshiring.`,
    },
    ru: {
      title: 'Первая покупка Telegram Stars: 7 шагов с Uzcard и Humo, недорого и безопасно',
      description:
        'Что знать перед первой покупкой звёзд: username, сколько брать, оплата точной суммой, какие данные не нужны и где посмотреть баланс.',
      metaTitle: 'Первая покупка Telegram Stars с Uzcard и Humo: 7 шагов',
      metaDescription:
        `Покупаете звёзды Telegram впервые? 7 шагов с Uzcard и Humo: username, старт с ${formatNumber(P50.amount)} ⭐, точная сумма, без пароля и кода, проверка баланса в Мои звёзды.`,
      ogDescription:
        'Чек-лист первой покупки звёзд Telegram: username, небольшой пакет, точная сумма, какие данные не сообщать и как проверить баланс.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Нужен ли username, чтобы купить звёзды?', answer: 'Да. Звёзды привязываются к @username. Если его нет, задайте его в настройках Telegram и копируйте, а не набирайте вручную.' },
        { question: 'Сколько звёзд взять в первый раз?', answer: `Чтобы попробовать, хватит ${formatNumber(P50.amount)} или ${formatNumber(P100.amount)} ⭐. В ${siteConfig.bot} ${formatNumber(P50.amount)} ⭐ стоят ${ruSum(P50.priceUzs)}, скидки за объём нет.` },
        { question: 'Можно оплатить картой Uzcard или Humo?', answer: `Да. ${siteConfig.bot} принимает оплату картами Uzcard и Humo, через Click и Payme. Цена одна, банк может показать свою комиссию.` },
        { question: 'Почему нельзя округлять сумму?', answer: 'Бот проверяет оплату автоматически по сумме. Округлённая или разбитая на части сумма может не пройти проверку, и заказ зависнет в ожидании.' },
        { question: 'Бот спросит пароль или SMS-код?', answer: 'Нет. Нужен только @username. Пароль Telegram, SMS-код, код входа, пароль 2FA, CVV и PIN никогда не нужны. Если их просят, это мошенничество.' },
        { question: 'Где посмотреть баланс звёзд?', answer: 'В Telegram: Настройки > Мои звёзды (My Stars). Там видны баланс и история транзакций.' },
        { question: 'Через сколько приходят звёзды?', answer: 'Обычно за несколько минут. Если через 30 минут их нет, не платите повторно и напишите в @uzgets_jbot с ID заказа и чеком.' },
        { question: 'Что будет, если ошибиться в username?', answer: 'Звёзды получит владелец этого username, и по правилам Telegram перенести их на другой аккаунт нельзя. Такой случай поддержка рассматривает отдельно, поэтому проверяйте до оплаты.' },
        { question: 'Сгорают ли звёзды?', answer: 'В условиях Telegram срок действия Stars не установлен. Но при удалении аккаунта или потере доступа к нему баланс теряется.' },
        { question: 'Можно сделать первую покупку в подарок другу?', answer: 'Да. Укажите в боте @username друга вместо своего, звёзды придут прямо на его баланс.' },
      ],
      finalCtaHeading: 'Начните с небольшого пакета звёзд',
      finalCtaBody: `Выберите в ${siteConfig.bot} ${formatNumber(P50.amount)} ⭐, оплатите точную сумму картой Uzcard и Humo, через Click или Payme и проверьте баланс в Мои звёзды.`,
    },
  },
}
