import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-refund-qaytarish'
const TODAY = '2026-09-16'

function UzAnswerBox() {
  return (
    <p>
      Yo&apos;q, odatda qaytarilmaydi. Telegram&apos;ning rasmiy qoidasiga ko&apos;ra{' '}
      <strong>barcha Stars xaridlari yakuniy</strong> — xohlamay yoki xato sotib olingan
      Stars qaytarilmaydi. Yagona istisno: agar bot yoki mini-app va&apos;da qilingan
      xizmatni belgilangan muddatda ko&apos;rsatib bermasa, o&apos;sha bot ishlab
      chiquvchisi Stars&apos;ni qaytarishi mumkin (<code>/paysupport</code> buyrug&apos;i
      orqali). {siteConfig.bot} orqali xaridda: agar muammo bizning tarafda bo&apos;lsa
      (masalan, to&apos;lov o&apos;tgan, lekin Stars biriktirilmagan) — qaytariladi;
      muvaffaqiyatli yetkazilgandan keyin — yo&apos;q.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Нет, обычно не возвращают. По официальным правилам Telegram{' '}
      <strong>все покупки Stars окончательны</strong> — случайно или по ошибке купленные
      Stars не возвращаются. Единственное исключение: если бот или мини-приложение не
      предоставили обещанную услугу в оговорённый срок, разработчик этого бота может
      вернуть Stars (через команду <code>/paysupport</code>). При покупке через{' '}
      {siteConfig.bot}: если проблема на нашей стороне (например, оплата прошла, но Stars
      не начислены) — деньги возвращают; после успешной доставки — нет.
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
            Telegram — Terms of Service for Stars
          </a>{' '}
          — {uz ? "Stars xaridlarining yakuniyligi, /paysupport jarayoni va istisno holatlar bo'yicha rasmiy qoida" : 'официальное правило об окончательности покупок Stars, процессе /paysupport и исключениях'}.
        </li>
        <li>
          <a href="https://support.apple.com/en-us/118223" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Apple Support — Request a refund
          </a>{' '}
          — {uz ? "App Store orqali qilingan xaridni qanday va qachon qaytarish so'ralishi mumkinligi" : 'как и когда можно запросить возврат за покупку через App Store'}.
        </li>
        <li>
          <a href="https://support.google.com/googleplay/answer/15574908" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Google Play Help — Refund policies
          </a>{' '}
          — {uz ? "Google Play orqali ichki xaridlar uchun 48 soatlik qaytarish oynasi va shartlari" : 'окно возврата в 48 часов и условия для покупок внутри приложений через Google Play'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Manbalar, Uzgets xizmat shartlarining 5-bandi (buyurtma muammolari va qaytarib berish) 2026-yil 16-sentabrda tekshirildi."
          : 'Источники и пункт 5 условий сервиса Uzgets (проблемы заказа и возврат) проверены 16 сентября 2026 года.'}
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
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">{siteConfig.bot} orqali xaridda qaytarish</a></li>
          <li><a href="#botlar" className="hover:text-[var(--primary)] hover:underline">Boshqa bot/mini-app xizmat bermasa</a></li>
          <li><a href="#dokonlar" className="hover:text-[var(--primary)] hover:underline">App Store va Google Play orqali</a></li>
          <li><a href="#sorash" className="hover:text-[var(--primary)] hover:underline">Qaytarish qanday so&apos;raladi?</a></li>
        </ol>
      </nav>

      <h2 id="qoida">Telegram&apos;ning rasmiy qoidasi: Stars xaridlari yakuniy</h2>
      <p>
        Telegram&apos;ning rasmiy Stars foydalanish shartlariga ko&apos;ra{' '}
        <strong>barcha Stars sotib olishlar yakuniy hisoblanadi</strong> — xohlamay yoki
        xato qilingan xaridlar uchun Telegram qaytarib bermaydi. Akkaunt o&apos;chirilsa
        yoki unga kirish imkoni yo&apos;qolsa, qolgan Stars balansi ham qaytarilmaydigan
        hisoblanadi. Bu — istalgan manbadan (Uzgets, App Store, Google Play) sotib
        olingan Stars&apos;ga tegishli umumiy qoida.
      </p>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Yagona istisno:</strong> agar Stars sarflangan bot yoki mini-app
        va&apos;da qilingan xizmat yoki mahsulotni belgilangan muddatda ko&apos;rsatib
        bermasa, o&apos;sha botning ishlab chiquvchisi jarima&apos;siz Stars&apos;ni
        qaytarishi mumkin. Bu — Telegram platformasining o&apos;zi emas, balki har bir
        bot/mini-app ishlab chiquvchisining vazifasi.
      </div>

      <h2 id="holat">Holat → qoida → nima qilish kerak</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Holat</th><th className="px-4 py-3 text-left">Qoida</th><th className="px-4 py-3 text-left">Amal</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Stars sotib olindi, lekin xato miqdor tanlangan</td><td className="px-4 py-3">Xato yoki xohlamay qilingan xarid qaytarilmaydi</td><td className="px-4 py-3">Qolgan Stars&apos;ni keyingi safar ishlatish uchun saqlab qo&apos;ying</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">{siteConfig.bot} orqali to&apos;lov o&apos;tdi, lekin Stars akkauntga tushmadi</td><td className="px-4 py-3">Muammo sotuvchi (Uzgets) tarafida</td><td className="px-4 py-3">30 daqiqa kuting, keyin buyurtma ID&apos;si bilan botga yozing — qayta yuboriladi yoki qaytariladi</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Stars muvaffaqiyatli tushdi, keyin fikr o&apos;zgardi</td><td className="px-4 py-3">Muvaffaqiyatli yetkazilgan xarid uchun qaytarish yo&apos;q</td><td className="px-4 py-3">Qaytarish so&apos;rovi rad etiladi — bu kutilgan holat</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Bot/mini-app&apos;dan Stars bilan xarid qilindi, xizmat kelmadi</td><td className="px-4 py-3">Xizmat ko&apos;rsatilmasa, developer qaytarishi mumkin</td><td className="px-4 py-3">O&apos;sha botga <code>/paysupport</code> yuboring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">App Store orqali xato yoki xohlamay xarid qilindi</td><td className="px-4 py-3">Apple o&apos;z siyosatiga ko&apos;ra alohida ko&apos;rib chiqadi</td><td className="px-4 py-3">reportaproblem.apple.com orqali so&apos;rov yuboring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Google Play orqali 48 soat ichida xarid qilindi</td><td className="px-4 py-3">Google&apos;ning qisqa muddatli qaytarish oynasi bor</td><td className="px-4 py-3">Google Play&apos;dan to&apos;g&apos;ridan-to&apos;g&apos;ri qaytarish so&apos;rang</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="uzgets">{siteConfig.bot} orqali xaridda qaytarish qanday ishlaydi?</h2>
      <p>
        Uzgets xizmat shartlariga ko&apos;ra: agar to&apos;lov amalga oshirilgan, lekin
        Stars akkauntga biriktirilmagan bo&apos;lsa va bu bizning tarafimizdagi texnik
        muammo sabab bo&apos;lsa — mahsulot qayta yuboriladi yoki to&apos;lov to&apos;liq
        qaytariladi. Sabab foydalanuvchi xatosi (masalan, noto&apos;g&apos;ri
        @username) bo&apos;lsa, holat alohida ko&apos;rib chiqiladi. Stars
        muvaffaqiyatli yetkazilgandan keyin (akkauntga tushgandan so&apos;ng) to&apos;lov
        qaytarilmaydi — bu Telegram va to&apos;lov tizimlarining umumiy standartiga mos.
      </p>
      <p>
        Agar Stars umuman kelmasa yoki to&apos;lov o&apos;tmasa, avval diagnostika
        qiling:{' '}
        <Link href="/blog/telegram-stars-kelmadi-sabablar-yechim" className="text-[var(--primary)] hover:underline">
          Stars kelmadi — sabablar va yechim
        </Link>{' '}
        yoki{' '}
        <Link href="/blog/telegram-stars-tolov-otmadi-yechim" className="text-[var(--primary)] hover:underline">
          to&apos;lov o&apos;tmasligi bo&apos;yicha qo&apos;llanma
        </Link>
        ga qarang — bu maqola aynan &laquo;pul qaytariladimi?&raquo; savoliga javob beradi.
      </p>
      <InlineBotCTA lang="uz" text="Buyurtma bilan muammo bormi? Botda holatni tekshiring yoki supportga yozing." />

      <h2 id="botlar">Boshqa bot yoki mini-app xizmat ko&apos;rsatib bermasa</h2>
      <p>
        Telegram&apos;dagi istalgan botga Stars orqali to&apos;langan xizmat
        (kanal a&apos;zoligi, raqamli mahsulot, o&apos;yin ichidagi buyum va h.k.)
        va&apos;da qilinganidek yetkazilmasa:
      </p>
      <ol>
        <li>O&apos;sha botga <code>/paysupport</code> buyrug&apos;ini yuboring — bu barcha to&apos;lov qabul qiluvchi botlar uchun majburiy funksiya.</li>
        <li>Bot javob bermasa yoki asosli so&apos;rovni rad etsa, Telegram&apos;ning <strong>Sozlamalar → Stars</strong> bo&apos;limidan tranzaksiya ID&apos;sini toping.</li>
        <li>Shu ID bilan Telegram&apos;ga rasmiy shikoyat yuboring — bot rad etgan asosli qaytarish so&apos;rovlari shu tartibda ko&apos;rib chiqiladi.</li>
      </ol>

      <h2 id="dokonlar">App Store va Google Play orqali sotib olingan bo&apos;lsa</h2>
      <p>
        Stars ilova ichidan (in-app purchase) sotib olinganda, to&apos;lovni Telegram
        emas, balki Apple yoki Google qayta ishlaydi — qaytarish so&apos;rovi ham
        tegishli do&apos;konga yuboriladi.
      </p>
      <h3>App Store (iPhone/iPad)</h3>
      <p>
        <strong>reportaproblem.apple.com</strong> sahifasiga hisobingiz bilan kiring,
        &laquo;I&apos;d like to&raquo; → &laquo;Request a refund&raquo;ni tanlang,
        sababni ko&apos;rsatib, Stars xaridini belgilang. Apple bunday so&apos;rovlarni
        o&apos;z siyosatiga ko&apos;ra alohida ko&apos;rib chiqadi — natija odatda
        24–48 soat ichida ma&apos;lum bo&apos;ladi.
      </p>
      <h3>Google Play (Android)</h3>
      <p>
        Ichki xaridlar uchun Google odatda <strong>48 soatlik</strong> qaytarish
        oynasini taqdim etadi — shu muddat ichida Google Play&apos;ning o&apos;zidan
        to&apos;g&apos;ridan-to&apos;g&apos;ri qaytarish so&apos;rashingiz mumkin. 48
        soatdan keyin so&apos;rov Telegram (ilova ishlab chiquvchisi) orqali ko&apos;rib
        chiqiladi va kafolatlanmaydi.
      </p>

      <h2 id="sorash">Qaytarish so&apos;rovi uchun nimalar kerak?</h2>
      <ul>
        <li>Tranzaksiya yoki buyurtma ID&apos;si (Sozlamalar → Stars bo&apos;limida yoki bot buyurtmasida);</li>
        <li>Xarid sanasi, vaqti va summasi;</li>
        <li>Qaysi kanaldan sotib olingani ({siteConfig.bot}, App Store yoki Google Play);</li>
        <li>Muammoning qisqa tavsifi (xizmat kelmadi, xato miqdor, ikki marta yechildi va h.k.).</li>
      </ul>
      <p>
        <strong>Yubormang:</strong> qaytarish so&apos;rovi bahonasida hech kim Telegram
        login/SMS kodi, 2FA paroli yoki karta CVV kodini so&apos;ramaydi. Bunday
        ma&apos;lumot talab qilinsa, bu firibgarlik belgisi — hech kimga yubormang.
      </p>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Telegram&apos;ning umumiy Stars qoidasi telegram.org/tos/stars&apos;ga, Uzgets bo&apos;yicha ma&apos;lumot esa ichki xizmat shartlariga tayangan — ikkalasi aralashtirilmagan.</p>
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
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Статус → правило → действие</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Возврат при покупке через {siteConfig.bot}</a></li>
          <li><a href="#botlar" className="hover:text-[var(--primary)] hover:underline">Если другой бот/мини-приложение не оказали услугу</a></li>
          <li><a href="#dokonlar" className="hover:text-[var(--primary)] hover:underline">Через App Store и Google Play</a></li>
          <li><a href="#sorash" className="hover:text-[var(--primary)] hover:underline">Как запросить возврат?</a></li>
        </ol>
      </nav>

      <h2 id="qoida">Официальное правило Telegram: покупки Stars окончательны</h2>
      <p>
        По официальным условиям использования Stars от Telegram{' '}
        <strong>все покупки Stars считаются окончательными</strong> — за случайные или
        нежелательные покупки Telegram деньги не возвращает. Если аккаунт удалён или
        доступ к нему утерян, оставшийся баланс Stars также считается невозвратным. Это
        общее правило касается Stars, купленных через любой канал — Uzgets, App Store
        или Google Play.
      </p>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Единственное исключение:</strong> если бот или мини-приложение, на
        которое потрачены Stars, не оказали обещанную услугу или товар в оговорённый
        срок, разработчик этого бота может вернуть Stars без штрафа. Это обязанность
        разработчика конкретного бота, а не самой платформы Telegram.
      </div>

      <h2 id="holat">Статус → правило → что делать</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Статус</th><th className="px-4 py-3 text-left">Правило</th><th className="px-4 py-3 text-left">Действие</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Stars куплены, но выбрано неверное количество</td><td className="px-4 py-3">Ошибочная или случайная покупка не возвращается</td><td className="px-4 py-3">Сохраните остаток Stars для следующей покупки</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Оплата через {siteConfig.bot} прошла, а Stars не зачислены</td><td className="px-4 py-3">Проблема на стороне продавца (Uzgets)</td><td className="px-4 py-3">Подождите 30 минут, затем напишите в бот с ID заказа — товар отправят повторно или вернут деньги</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Stars успешно зачислены, но передумали</td><td className="px-4 py-3">За успешно доставленную покупку возврата нет</td><td className="px-4 py-3">Запрос на возврат будет отклонён — это ожидаемо</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Куплено через бота/мини-приложение, услуга не оказана</td><td className="px-4 py-3">Разработчик может вернуть Stars, если услуга не оказана</td><td className="px-4 py-3">Отправьте этому боту <code>/paysupport</code></td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Ошибочная покупка через App Store</td><td className="px-4 py-3">Apple рассматривает индивидуально по своей политике</td><td className="px-4 py-3">Отправьте запрос через reportaproblem.apple.com</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Покупка через Google Play в течение 48 часов</td><td className="px-4 py-3">У Google есть короткое окно возврата</td><td className="px-4 py-3">Запросите возврат напрямую в Google Play</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="uzgets">Как работает возврат при покупке через {siteConfig.bot}?</h2>
      <p>
        По условиям сервиса Uzgets: если оплата прошла, но Stars не были привязаны к
        аккаунту из-за технической проблемы на нашей стороне — товар отправляют повторно
        или полностью возвращают деньги. Если причина — ошибка пользователя (например,
        неверный @username), случай рассматривается индивидуально. После успешной
        доставки Stars (когда они уже зачислены на аккаунт) деньги не возвращаются — это
        соответствует общим стандартам Telegram и платёжных систем.
      </p>
      <p>
        Если Stars вообще не пришли или платёж не прошёл, сначала проведите диагностику:{' '}
        <Link href="/ru/blog/telegram-stars-kelmadi-sabablar-yechim" className="text-[var(--primary)] hover:underline">
          Stars не пришли — причины и решение
        </Link>{' '}
        или{' '}
        <Link href="/ru/blog/telegram-stars-tolov-otmadi-yechim" className="text-[var(--primary)] hover:underline">
          гид по неудачным платежам
        </Link>{' '}
        — эта же статья отвечает именно на вопрос «вернут ли деньги».
      </p>
      <InlineBotCTA lang="ru" text="Проблема с заказом? Проверьте статус в боте или напишите в поддержку." />

      <h2 id="botlar">Если другой бот или мини-приложение не оказали услугу</h2>
      <p>
        Если оплаченная Stars услуга в любом боте Telegram (доступ к каналу, цифровой
        товар, предмет в игре и т.д.) не была предоставлена как обещано:
      </p>
      <ol>
        <li>Отправьте этому боту команду <code>/paysupport</code> — это обязательная функция для всех ботов, принимающих оплату.</li>
        <li>Если бот не отвечает или необоснованно отказывает, найдите ID транзакции в разделе <strong>Настройки → Stars</strong>.</li>
        <li>С этим ID отправьте официальную жалобу в Telegram — обоснованные запросы на возврат, отклонённые ботом, рассматриваются в этом порядке.</li>
      </ol>

      <h2 id="dokonlar">Если куплено через App Store или Google Play</h2>
      <p>
        Если Stars куплены как покупка внутри приложения (in-app purchase), платёж
        обрабатывает не Telegram, а Apple или Google — запрос на возврат тоже нужно
        направлять в соответствующий магазин.
      </p>
      <h3>App Store (iPhone/iPad)</h3>
      <p>
        Войдите на <strong>reportaproblem.apple.com</strong> под своим Apple ID,
        выберите «I&apos;d like to» → «Request a refund», укажите причину и отметьте
        покупку Stars. Apple рассматривает такие запросы индивидуально по своей
        политике — ответ обычно приходит за 24–48 часов.
      </p>
      <h3>Google Play (Android)</h3>
      <p>
        Для покупок внутри приложений у Google обычно есть окно возврата в{' '}
        <strong>48 часов</strong> — в этот срок можно запросить возврат напрямую через
        Google Play. После 48 часов запрос рассматривается через разработчика
        приложения (Telegram) и не гарантирован.
      </p>

      <h2 id="sorash">Что нужно для запроса возврата?</h2>
      <ul>
        <li>ID транзакции или заказа (в разделе Настройки → Stars или в заказе бота);</li>
        <li>дата, время и сумма покупки;</li>
        <li>канал покупки ({siteConfig.bot}, App Store или Google Play);</li>
        <li>краткое описание проблемы (услуга не оказана, ошибочное количество, двойное списание и т.д.).</li>
      </ul>
      <p>
        <strong>Не отправляйте:</strong> под предлогом запроса на возврат никто не
        запрашивает код входа/SMS Telegram, пароль 2FA или CVV карты. Если такие данные
        требуют — это признак мошенничества, не отправляйте их никому.
      </p>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Общее правило Telegram по Stars основано на telegram.org/tos/stars, сведения об Uzgets — на условиях сервиса; эти два источника не смешиваются.</p>
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
      title: "Telegram Stars qaytarib beriladimi? Refund shartlari",
      description:
        "Telegram Stars sotib olingandan keyin pul qaytariladimi? Telegram'ning rasmiy qoidasi, Uzgets, App Store va Google Play uchun aniq refund shartlari va qanday so'rov berish kerakligi.",
      metaTitle: "Telegram Stars qaytarib beriladimi? Refund shartlari",
      metaDescription:
        "Telegram Stars refund qilinadimi? Telegram'ning rasmiy qoidasi, /paysupport jarayoni, Uzgets, App Store va Google Play uchun aniq shartlar va qaytarish so'rovi qadamlari.",
      ogDescription:
        "Stars xaridlari odatda yakuniy. Qachon va qanday qaytarish so'ralishi mumkinligi — Telegram, Uzgets, App Store va Google Play bo'yicha aniq qoidalar.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Stars sotib olgandan keyin fikrim o'zgarsa, pulni qaytarib olsam bo'ladimi?", answer: "Yo'q. Telegram'ning rasmiy qoidasiga ko'ra barcha Stars xaridlari yakuniy — xohlamay yoki xato sotib olingan Stars qaytarilmaydi." },
        { question: "Qaysi holatda Stars qaytariladi?", answer: "Agar Stars sarflangan bot yoki mini-app va'da qilingan xizmatni belgilangan muddatda ko'rsatib bermasa, o'sha botning ishlab chiquvchisi Stars'ni qaytarishi mumkin. Bundan tashqari, Uzgets orqali xaridda muammo bizning tarafimizda bo'lsa (masalan, to'lov o'tgan, Stars tushmagan), to'lov qaytariladi." },
        { question: "/paysupport nima va qachon ishlatiladi?", answer: "Bu — Stars orqali to'lov qabul qiluvchi har qanday botga yuboriladigan maxsus buyruq. Bot va'da qilingan xizmatni bermasa, shu buyruq orqali qaytarish so'raladi." },
        { question: "App Store yoki Google Play orqali sotib olingan Stars qaytariladimi?", answer: "Bu holda to'lovni Apple yoki Google boshqaradi. App Store'da reportaproblem.apple.com orqali so'rov beriladi, Apple alohida ko'rib chiqadi. Google Play'da odatda 48 soatlik qaytarish oynasi bor." },
        { question: "Uzgets orqali Stars sotib oldim, lekin akkauntga tushmadi — pul qaytariladimi?", answer: "Ha, agar muammo bizning tarafimizda bo'lsa. 30 daqiqa kutib, buyurtma ID'si bilan botga yozing — mahsulot qayta yuboriladi yoki to'lov to'liq qaytariladi." },
        { question: "Qaytarish so'rovi uchun login kodi yoki karta ma'lumoti kerakmi?", answer: "Yo'q. Hech qanday qonuniy qaytarish jarayoni Telegram login/SMS kodi, 2FA paroli yoki karta CVV kodini so'ramaydi. Bunday so'rov — firibgarlik belgisi." },
      ],
      finalCtaHeading: "Stars sotib olishdan oldin ishonchli manbani tanlang",
      finalCtaBody: `Xato yoki muammoli xariddan saqlanish uchun ${siteConfig.bot}da miqdorni tekshirib, @username'ni to'g'ri kiriting va bir necha daqiqada faollashtiring.`,
    },
    ru: {
      title: 'Возвращают ли деньги за Telegram Stars? Условия возврата',
      description:
        'Можно ли вернуть деньги за купленные Telegram Stars? Официальное правило Telegram, условия возврата для Uzgets, App Store и Google Play, и как подать запрос.',
      metaTitle: 'Возвращают ли деньги за Telegram Stars?',
      metaDescription:
        'Возвращают ли Telegram Stars? Официальное правило Telegram, процесс /paysupport, условия для Uzgets, App Store и Google Play, шаги запроса на возврат.',
      ogDescription:
        'Покупки Stars обычно окончательны. Когда и как можно запросить возврат — точные правила для Telegram, Uzgets, App Store и Google Play.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Если я передумал после покупки Telegram Stars, можно ли вернуть деньги?', answer: 'Нет. По официальному правилу Telegram все покупки Stars окончательны — случайные или нежелательные покупки не возвращаются.' },
        { question: 'В каком случае Stars возвращают?', answer: 'Если бот или мини-приложение, на которое потрачены Stars, не оказали обещанную услугу в срок, разработчик этого бота может вернуть Stars. Также при покупке через Uzgets, если проблема на нашей стороне (оплата прошла, а Stars не зачислены), деньги возвращают.' },
        { question: 'Что такое /paysupport и когда его использовать?', answer: 'Это специальная команда, которую можно отправить любому боту, принимающему оплату Stars. Если бот не оказал обещанную услугу, через эту команду запрашивается возврат.' },
        { question: 'Возвращают ли Stars, купленные через App Store или Google Play?', answer: 'В этом случае платёж обрабатывает Apple или Google. В App Store запрос подаётся через reportaproblem.apple.com и рассматривается индивидуально. В Google Play обычно есть окно возврата 48 часов.' },
        { question: 'Я купил Stars через Uzgets, но они не пришли на аккаунт — вернут ли деньги?', answer: 'Да, если проблема на нашей стороне. Подождите 30 минут и напишите в бот с ID заказа — товар отправят повторно или деньги вернут полностью.' },
        { question: 'Нужен ли код входа или данные карты для запроса возврата?', answer: 'Нет. Ни один легитимный процесс возврата не требует код входа/SMS Telegram, пароль 2FA или CVV карты. Такой запрос — признак мошенничества.' },
      ],
      finalCtaHeading: 'Выбирайте надёжный источник перед покупкой Stars',
      finalCtaBody: `Чтобы избежать ошибочной или проблемной покупки, проверьте количество и правильно укажите @username в ${siteConfig.bot} — активация занимает несколько минут.`,
    },
  },
}
