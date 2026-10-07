import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-sovgasi-kelmadi'
const TODAY = '2026-10-07'

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium sovg&apos;asi qabul qiluvchiga yetib bormagan bo&apos;lsa, ko&apos;pincha
      sabab uchtadan biri: <strong>@username xato kiritilgan</strong>, qabul qiluvchi{' '}
      <strong>Premium sovg&apos;alarini qabul qilishni o&apos;chirib qo&apos;ygan</strong> yoki
      sovg&apos;a aslida kelgan, lekin <strong>xabar e&apos;tibordan chetda qolgan</strong>.
      Avval qabul qiluvchi Sozlamalar → Telegram Premium bo&apos;limini tekshirsin. {siteConfig.bot}{' '}
      orqali yuborilgan sovg&apos;a odatda 2–5 daqiqada biriktiriladi; 30 daqiqadan keyin ham
      yo&apos;q bo&apos;lsa, qayta to&apos;lamasdan buyurtma ID&apos;si va chek bilan supportga yozing.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Если подарок Telegram Premium не дошёл до получателя, причина чаще всего одна из трёх:{' '}
      <strong>ошибка в @username</strong>, получатель{' '}
      <strong>отключил приём подарков Premium</strong> или подарок на самом деле пришёл, но{' '}
      <strong>сообщение осталось незамеченным</strong>. Сначала пусть получатель проверит раздел
      Настройки → Telegram Premium. Подарок через {siteConfig.bot} обычно зачисляется за 2–5 минут;
      если его нет и через 30 минут, не платите повторно — напишите в поддержку с ID заказа и чеком.
    </p>
  )
}

type Row = { uz: string; ru: string }

const CASES: { state: Row; cause: Row; fix: Row }[] = [
  {
    state: { uz: "To'lovdan keyin 5 daqiqadan kam vaqt o'tdi", ru: 'После оплаты прошло меньше 5 минут' },
    cause: { uz: 'Oddiy qayta ishlash vaqti', ru: 'Обычное время обработки' },
    fix: { uz: 'Kuting, qayta buyurtma bermang', ru: 'Подождите, не оформляйте заказ повторно' },
  },
  {
    state: { uz: "Buyurtma «yetkazildi», lekin qabul qiluvchi xabar ko'rmayapti", ru: 'Заказ «доставлен», но получатель не видит сообщения' },
    cause: { uz: "Xabar boshqa chatda, arxivda yoki bildirishnomasi o'chirilgan", ru: 'Сообщение в другом чате, в архиве или без уведомления' },
    fix: { uz: "Qabul qiluvchi Sozlamalar → Telegram Premium bo'limini va profilidagi yulduzchani tekshirsin", ru: 'Пусть получатель проверит Настройки → Telegram Premium и звезду в профиле' },
  },
  {
    state: { uz: "Buyurtmada boshqa @username yozilgan", ru: 'В заказе указан другой @username' },
    cause: { uz: "Bir harf xato — sovg'a boshqa akkauntga ketgan", ru: 'Ошибка в одной букве — подарок ушёл на другой аккаунт' },
    fix: { uz: "Darhol supportga yozing; yetkazilgan sovg'ani qaytarib bo'lmaydi", ru: 'Сразу напишите в поддержку; доставленный подарок вернуть нельзя' },
  },
  {
    state: { uz: "Qabul qiluvchi yaqinda username'ini o'zgartirgan yoki o'chirgan", ru: 'Получатель недавно сменил или удалил username' },
    cause: { uz: "Eski username endi unga tegishli emas", ru: 'Старый username ему больше не принадлежит' },
    fix: { uz: "Joriy username'ni profilidan nusxalab oling va supportga xabar bering", ru: 'Скопируйте актуальный username из профиля и сообщите поддержке' },
  },
  {
    state: { uz: "Yuborishda xato chiqdi yoki sovg'a tugmasi yo'q", ru: 'При отправке ошибка или нет кнопки подарка' },
    cause: { uz: "Qabul qiluvchi maxfiylik sozlamalarida Premium sovg'alarini taqiqlagan", ru: 'Получатель запретил подарки Premium в настройках конфиденциальности' },
    fix: { uz: "U Sozlamalar → Maxfiylik va xavfsizlik → Sovg'alar bo'limida Premium sovg'alariga ruxsat bersin", ru: 'Пусть разрешит подарки Premium в Настройки → Конфиденциальность → Подарки' },
  },
  {
    state: { uz: "Qabul qiluvchida allaqachon faol Premium bor", ru: 'У получателя уже активен Premium' },
    cause: { uz: "Yangi narsa ko'rinmaydi — imkoniyatlar avval ham ochiq edi", ru: 'Ничего нового не видно — функции были открыты и раньше' },
    fix: { uz: "Sozlamalar → Telegram Premium'da tugash sanasini to'lovdan oldingi sana bilan solishtiring", ru: 'Сравните дату окончания в Настройки → Telegram Premium с датой до оплаты' },
  },
  {
    state: { uz: "Sovg'a havola (kod) ko'rinishida kelgan", ru: 'Подарок пришёл в виде ссылки (кода)' },
    cause: { uz: "Kod hali faollashtirilmagan", ru: 'Код ещё не активирован' },
    fix: { uz: "Qabul qiluvchi Telegram xizmat akkauntidan kelgan xabardagi havolani ochib, faollashtirsin", ru: 'Пусть получатель откроет ссылку из сообщения сервисного аккаунта Telegram и активирует' },
  },
  {
    state: { uz: "Ilova ichidan (App Store / Google Play) yuborilgan, pul yechilgan", ru: 'Отправлено из приложения (App Store / Google Play), деньги списаны' },
    cause: { uz: "Do'kon tomonidagi kechikish yoki tasdiqlanmagan to'lov", ru: 'Задержка на стороне магазина или неподтверждённый платёж' },
    fix: { uz: "Xarid tarixini tekshiring, keyin Apple yoki Google supportiga murojaat qiling", ru: 'Проверьте историю покупок, затем обратитесь в поддержку Apple или Google' },
  },
]

function CasesTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-3 text-left">{uz ? 'Holat' : 'Ситуация'}</th>
            <th className="px-4 py-3 text-left">{uz ? 'Ehtimoliy sabab' : 'Возможная причина'}</th>
            <th className="px-4 py-3 text-left">{uz ? 'Yechim' : 'Решение'}</th>
          </tr>
        </thead>
        <tbody>
          {CASES.map((c) => (
            <tr key={c.state.uz} className="border-t border-[var(--border)]">
              <td className="px-4 py-3 font-medium">{c.state[lang]}</td>
              <td className="px-4 py-3">{c.cause[lang]}</td>
              <td className="px-4 py-3">{c.fix[lang]}</td>
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
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Premium FAQ
          </a>{' '}
          — {uz ? "3, 6 va 12 oylik oldindan to'langan obunani sovg'a qilish" : 'подарок предоплаченной подписки на 3, 6 и 12 месяцев'}.
        </li>
        <li>
          <a href="https://core.telegram.org/api/premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/premium
          </a>{' '}
          — {uz ? "sovg'a qabul qiluvchiga xizmat xabari sifatida yetkazilishi" : 'доставка подарка получателю служебным сообщением'}.
        </li>
        <li>
          <a href="https://core.telegram.org/constructor/disallowedGiftsSettings" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org — disallowedGiftsSettings
          </a>{' '}
          — {uz ? "Premium sovg'alarini qabul qilishni taqiqlash sozlamasi" : 'настройка запрета на приём подарков Premium'}.
        </li>
        <li>
          <a href="https://core.telegram.org/api/giveaways" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/giveaways
          </a>{' '}
          — {uz ? "sovg'a kodi va uni faollashtirish havolasi" : 'подарочный код и ссылка для его активации'}.
        </li>
        <li>
          <Link href={uz ? '/terms' : '/ru/terms'} className="hover:text-[var(--primary)] hover:underline">uzgets.uz/terms</Link>{' '}
          — {uz ? 'Uzgets xizmat shartlari, 4–6-bandlar' : 'условия сервиса Uzgets, пункты 4–6'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "2026-yil 7-oktabrda tekshirilgan. Telegram interfeysidagi bo'lim nomlari ilova versiyasi va tiliga qarab biroz farq qilishi mumkin."
          : 'Проверено 7 октября 2026 года. Названия разделов в интерфейсе Telegram могут немного отличаться в зависимости от версии и языка приложения.'}
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
          <li><a href="#qanday-keladi" className="hover:text-[var(--primary)] hover:underline">Sovg&apos;a qabul qiluvchiga qanday keladi</a></li>
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Holat → sabab → yechim</a></li>
          <li><a href="#jonatuvchi" className="hover:text-[var(--primary)] hover:underline">Jo&apos;natuvchi nimani tekshiradi</a></li>
          <li><a href="#qabul-qiluvchi" className="hover:text-[var(--primary)] hover:underline">Qabul qiluvchi nimani tekshiradi</a></li>
          <li><a href="#qaytarish" className="hover:text-[var(--primary)] hover:underline">Pul qaytariladimi</a></li>
          <li><a href="#support" className="hover:text-[var(--primary)] hover:underline">Supportga nima yuborish kerak</a></li>
        </ol>
      </nav>

      <h2 id="qanday-keladi">Premium sovg&apos;asi qabul qiluvchiga qanday keladi?</h2>
      <p>
        Sovg&apos;a qabul qiluvchiga <strong>xizmat xabari</strong> sifatida keladi va Premium uning
        akkauntiga biriktiriladi. Telegram hujjatlariga ko&apos;ra, to&apos;lov muvaffaqiyatli
        o&apos;tgach qabul qiluvchi sovg&apos;a muddati ko&apos;rsatilgan xabarni avtomatik oladi.
        Xabar qayerda paydo bo&apos;lishi yuborish usuliga bog&apos;liq:
      </p>
      <ul>
        <li><strong>Ilova ichidan yuborilgan sovg&apos;a</strong> — jo&apos;natuvchi bilan shaxsiy chatda, sovg&apos;a stikeri bilan.</li>
        <li><strong>Kod orqali yuborilgan sovg&apos;a</strong> — Telegram&apos;ning xizmat akkauntidan kelgan xabarda, faollashtirish havolasi bilan.</li>
      </ul>
      <p>
        Shuning uchun &laquo;xabar kelmadi&raquo; degani har doim ham &laquo;sovg&apos;a kelmadi&raquo;
        degani emas. Ishonchli tekshiruv bitta: qabul qiluvchi <strong>Sozlamalar → Telegram
        Premium</strong> bo&apos;limini ochadi — Premium faol bo&apos;lsa, sovg&apos;a yetib borgan.
      </p>

      <h2 id="holat">Holat → ehtimoliy sabab → yechim</h2>
      <p>
        Quyidagi jadvalda sovg&apos;a yetib bormasligining 8 ta holati yig&apos;ilgan. O&apos;z
        holatingizni toping va faqat shu qatordagi amalni bajaring:
      </p>
      <CasesTable lang="uz" />
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Muhim:</strong> sabab aniqlanmaguncha ikkinchi marta to&apos;lamang. Birinchi
        sovg&apos;a kechikib yetib borsa, ikkala to&apos;lov ham yechilgan bo&apos;lib qoladi.
      </div>

      <h2 id="jonatuvchi">Jo&apos;natuvchi nimani tekshiradi?</h2>
      <ol>
        <li><strong>Buyurtma holati.</strong> {siteConfig.bot}da &laquo;Mening buyurtmalarim&raquo; bo&apos;limini oching: holat &laquo;kutilmoqda&raquo;mi yoki &laquo;yetkazildi&raquo;mi.</li>
        <li><strong>Buyurtmadagi @username.</strong> Uni qabul qiluvchining profilidagi username bilan harfma-harf solishtiring. <code>l</code> va <code>I</code>, <code>_</code> va nuqta kabi belgilar eng ko&apos;p adashtiriladi.</li>
        <li><strong>Vaqt.</strong> Uzgets orqali sovg&apos;a odatda 2–5 daqiqada biriktiriladi; 30 daqiqagacha kutish hali normal oraliq.</li>
        <li><strong>Qabul qiluvchidan so&apos;rang.</strong> U Sozlamalar → Telegram Premium bo&apos;limini tekshirsin — ko&apos;p hollarda sovg&apos;a allaqachon faol bo&apos;ladi.</li>
      </ol>
      <p>
        Pul yechilgan, lekin buyurtma hali &laquo;kutilmoqda&raquo; bo&apos;lsa, bu to&apos;lov
        tasdig&apos;i bilan bog&apos;liq holat:{' '}
        <Link href="/blog/telegram-premium-pul-yechildi-lekin-kelmadi" className="text-[var(--primary)] hover:underline">
          Premium puli yechildi, lekin kelmadi
        </Link>.
      </p>
      <InlineBotCTA lang="uz" text="Buyurtma holatini botda tekshiring — «Mening buyurtmalarim» bo'limi." />

      <h2 id="qabul-qiluvchi">Qabul qiluvchi nimani tekshiradi?</h2>
      <ol>
        <li><strong>Premium holati.</strong> Sozlamalar → Telegram Premium: obuna faolmi va tugash sanasi qaysi.</li>
        <li><strong>Sovg&apos;a sozlamalari.</strong> Telegram foydalanuvchiga ayrim sovg&apos;a turlarini, jumladan Premium obunasini qabul qilishni taqiqlash imkonini beradi. Sozlamalar → Maxfiylik va xavfsizlik → Sovg&apos;alar bo&apos;limida Premium sovg&apos;alari yoqilganini ko&apos;rsin.</li>
        <li><strong>Username.</strong> Sozlamalarda joriy @username jo&apos;natuvchiga aytilgani bilan bir xilmi.</li>
        <li><strong>Ilovani yangilash.</strong> Premium faol, lekin belgilar ko&apos;rinmasa, Telegram&apos;ni yangilab, qayta ishga tushirsin. Batafsil:{' '}
          <Link href="/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">akkauntda Premium ko&apos;rinmayapti</Link>.
        </li>
      </ol>
      <p>
        Qabul qiluvchida allaqachon Premium bo&apos;lsa, sovg&apos;adan keyin hech narsa
        o&apos;zgarmagandek ko&apos;rinadi, chunki imkoniyatlar avval ham ochiq edi. Bunday holatda
        yagona ko&apos;rsatkich — Premium bo&apos;limidagi tugash sanasi. Telegram&apos;ning rasmiy
        FAQ&apos;i bu holatni alohida tushuntirmaydi, shuning uchun sana o&apos;zgarmagan
        bo&apos;lsa, supportga yozing.
      </p>

      <h2 id="qaytarish">Sovg&apos;a yetib bormasa, pul qaytariladimi?</h2>
      <p>
        Uzgets xizmat shartlariga ko&apos;ra har bir holat alohida ko&apos;rib chiqiladi:
      </p>
      <ul>
        <li><strong>Muammo Uzgets tarafida</strong> (to&apos;lov tasdiqlangan, lekin texnik sabab bilan biriktirilmagan) — sovg&apos;a qayta yuboriladi yoki to&apos;lov qaytariladi.</li>
        <li><strong>Foydalanuvchi xatosi</strong> (noto&apos;g&apos;ri @username, mavjud bo&apos;lmagan akkaunt) — holat alohida ko&apos;rib chiqilib, imkoniyat darajasida hal qilinadi. To&apos;g&apos;ri username kiritish — buyurtmachining mas&apos;uliyati.</li>
        <li><strong>Sovg&apos;a muvaffaqiyatli yetkazilgan</strong> (Premium ko&apos;rsatilgan akkauntga biriktirilgan) — to&apos;lov qaytarilmaydi, hatto u boshqa odamning akkaunti bo&apos;lsa ham.</li>
      </ul>
      <p>
        App Store yoki Google Play orqali yuborilgan sovg&apos;a bo&apos;yicha qaytarishni Apple yoki
        Google hal qiladi — Uzgets bu to&apos;lovlarni boshqarmaydi.
      </p>

      <h2 id="support">Supportga nimalarni yuborish kerak?</h2>
      <ul>
        <li>Buyurtma ID&apos;si;</li>
        <li>To&apos;lov sanasi, vaqti va summasi;</li>
        <li>Bank yoki to&apos;lov ilovasi cheki (skrinshot);</li>
        <li>Buyurtmada kiritilgan @username va qabul qiluvchining joriy @username&apos;i;</li>
        <li>Qabul qiluvchining Sozlamalar → Telegram Premium bo&apos;limi skrinshoti.</li>
      </ul>
      <p>
        <strong>Yubormang:</strong> Telegram login kodi, 2FA paroli, karta CVV kodi yoki SMS kod.
        Sovg&apos;ani tekshirish uchun bu ma&apos;lumotlar na jo&apos;natuvchidan, na qabul
        qiluvchidan so&apos;ralmaydi. Sovg&apos;a yuborish tartibining o&apos;zi:{' '}
        <Link href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">
          Telegram Premium hadya qanday sovg&apos;a qilinadi
        </Link>.
      </p>

      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Telegram bo&apos;yicha ma&apos;lumot rasmiy FAQ va API hujjatlariga, Uzgets bo&apos;yicha ma&apos;lumot xizmat shartlariga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#qanday-keladi" className="hover:text-[var(--primary)] hover:underline">Как подарок приходит получателю</a></li>
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Ситуация → причина → решение</a></li>
          <li><a href="#jonatuvchi" className="hover:text-[var(--primary)] hover:underline">Что проверить отправителю</a></li>
          <li><a href="#qabul-qiluvchi" className="hover:text-[var(--primary)] hover:underline">Что проверить получателю</a></li>
          <li><a href="#qaytarish" className="hover:text-[var(--primary)] hover:underline">Вернут ли деньги</a></li>
          <li><a href="#support" className="hover:text-[var(--primary)] hover:underline">Что отправить в поддержку</a></li>
        </ol>
      </nav>

      <h2 id="qanday-keladi">Как подарок Premium приходит получателю?</h2>
      <p>
        Подарок приходит получателю в виде <strong>служебного сообщения</strong>, а Premium
        привязывается к его аккаунту. По документации Telegram, после успешной оплаты получатель
        автоматически получает сообщение с указанием срока подарка. Где оно появится, зависит от
        способа отправки:
      </p>
      <ul>
        <li><strong>Подарок из приложения</strong> — в личном чате с отправителем, со стикером подарка.</li>
        <li><strong>Подарок через код</strong> — в сообщении от сервисного аккаунта Telegram, со ссылкой для активации.</li>
      </ul>
      <p>
        Поэтому «сообщение не пришло» не всегда значит «подарок не пришёл». Надёжная проверка одна:
        получатель открывает <strong>Настройки → Telegram Premium</strong> — если Premium активен,
        подарок доставлен.
      </p>

      <h2 id="holat">Ситуация → возможная причина → решение</h2>
      <p>
        В таблице собраны 8 ситуаций, когда подарок не доходит. Найдите свою и выполните действие
        только из этой строки:
      </p>
      <CasesTable lang="ru" />
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Важно:</strong> не платите второй раз, пока причина не выяснена. Если первый подарок
        дойдёт с задержкой, списанными останутся оба платежа.
      </div>

      <h2 id="jonatuvchi">Что проверить отправителю?</h2>
      <ol>
        <li><strong>Статус заказа.</strong> Откройте в {siteConfig.bot} раздел «Мои заказы»: статус «в обработке» или «доставлен».</li>
        <li><strong>@username в заказе.</strong> Сверьте его с username в профиле получателя посимвольно. Чаще всего путают <code>l</code> и <code>I</code>, <code>_</code> и точку.</li>
        <li><strong>Время.</strong> Подарок через Uzgets обычно зачисляется за 2–5 минут; ожидание до 30 минут ещё в пределах нормы.</li>
        <li><strong>Спросите получателя.</strong> Пусть проверит Настройки → Telegram Premium — часто подарок уже активен.</li>
      </ol>
      <p>
        Если деньги списаны, а заказ всё ещё «в обработке», это вопрос подтверждения платежа:{' '}
        <Link href="/ru/blog/telegram-premium-pul-yechildi-lekin-kelmadi" className="text-[var(--primary)] hover:underline">
          деньги за Premium списаны, но он не пришёл
        </Link>.
      </p>
      <InlineBotCTA lang="ru" text="Проверьте статус заказа в боте — раздел «Мои заказы»." />

      <h2 id="qabul-qiluvchi">Что проверить получателю?</h2>
      <ol>
        <li><strong>Статус Premium.</strong> Настройки → Telegram Premium: активна ли подписка и какая дата окончания.</li>
        <li><strong>Настройки подарков.</strong> Telegram позволяет пользователю запретить приём отдельных типов подарков, включая подписку Premium. В разделе Настройки → Конфиденциальность → Подарки нужно убедиться, что подарки Premium разрешены.</li>
        <li><strong>Username.</strong> Совпадает ли текущий @username в настройках с тем, что был назван отправителю.</li>
        <li><strong>Обновление приложения.</strong> Если Premium активен, но значки не видны, обновите и перезапустите Telegram. Подробнее:{' '}
          <Link href="/ru/blog/akkauntda-premium-korinmayapti" className="text-[var(--primary)] hover:underline">Premium не отображается на аккаунте</Link>.
        </li>
      </ol>
      <p>
        Если у получателя уже есть Premium, после подарка кажется, что ничего не изменилось: функции
        были открыты и раньше. В этом случае единственный показатель — дата окончания в разделе
        Premium. Официальный FAQ Telegram отдельно эту ситуацию не описывает, поэтому, если дата не
        изменилась, напишите в поддержку.
      </p>

      <h2 id="qaytarish">Вернут ли деньги, если подарок не дошёл?</h2>
      <p>По условиям сервиса Uzgets каждый случай рассматривается индивидуально:</p>
      <ul>
        <li><strong>Проблема на стороне Uzgets</strong> (оплата подтверждена, но из-за технического сбоя подарок не привязан) — подарок отправляют повторно или возвращают деньги.</li>
        <li><strong>Ошибка пользователя</strong> (неверный @username, несуществующий аккаунт) — случай рассматривается индивидуально и решается в пределах возможного. Правильный ввод username — ответственность заказчика.</li>
        <li><strong>Подарок успешно доставлен</strong> (Premium привязан к указанному аккаунту) — деньги не возвращаются, даже если это аккаунт другого человека.</li>
      </ul>
      <p>
        Возврат за подарок, отправленный через App Store или Google Play, решает Apple или Google —
        Uzgets этими платежами не управляет.
      </p>

      <h2 id="support">Что отправить в поддержку?</h2>
      <ul>
        <li>ID заказа;</li>
        <li>дату, время и сумму платежа;</li>
        <li>чек банка или платёжного приложения (скриншот);</li>
        <li>@username из заказа и текущий @username получателя;</li>
        <li>скриншот раздела Настройки → Telegram Premium у получателя.</li>
      </ul>
      <p>
        <strong>Не отправляйте:</strong> код входа в Telegram, пароль 2FA, CVV карты или SMS-код.
        Для проверки подарка эти данные не запрашивают ни у отправителя, ни у получателя. Сам порядок
        отправки подарка:{' '}
        <Link href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">
          как подарить Telegram Premium
        </Link>.
      </p>

      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Сведения о Telegram основаны на официальном FAQ и документации API, сведения об Uzgets — на условиях сервиса.</p>
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
      title: "Telegram Premium sovg'asi qabul qiluvchiga yetib bormadi — sabablari va yechim",
      description:
        "Premium sovg'asi yuborildi, lekin qabul qiluvchida ko'rinmayapti: 8 ta holat, har birining sababi va yechimi, jo'natuvchi va qabul qiluvchi uchun tekshiruv ro'yxati hamda pul qaytarish shartlari.",
      metaTitle: "Telegram Premium sovg'asi kelmadi — sabab va yechim",
      metaDescription:
        "Telegram Premium sovg'asi qabul qiluvchiga yetib bormadimi? Xato @username, sovg'a sozlamalari, faol Premium — jami 8 holat bo'yicha aniq yechim. Buyurtmani @uzgetsbot'da tekshiring.",
      ogDescription:
        "Premium sovg'asi kelmadi: holat → sabab → yechim jadvali, jo'natuvchi va qabul qiluvchi nimani tekshirishi kerak.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Premium sovg'asi qancha vaqtda yetib boradi?", answer: "@uzgetsbot orqali yuborilgan sovg'a to'lov tasdiqlangach odatda 2–5 daqiqada qabul qiluvchi akkauntiga biriktiriladi. 30 daqiqadan ko'p vaqt o'tsa va Premium ko'rinmasa, buyurtma ID'si va chek bilan supportga murojaat qiling." },
        { question: "Sovg'a yetib borganini qanday bilish mumkin?", answer: "Qabul qiluvchi Sozlamalar → Telegram Premium bo'limini ochadi: obuna faol bo'lsa, sovg'a yetib borgan. Bundan tashqari unga sovg'a muddati ko'rsatilgan xizmat xabari keladi va profilida Premium yulduzchasi paydo bo'ladi." },
        { question: "@username'ni xato yozdim, sovg'a boshqa odamga ketdi — nima qilaman?", answer: "Darhol supportga yozing. Agar Premium hali biriktirilmagan bo'lsa, holat alohida ko'rib chiqiladi. Premium ko'rsatilgan akkauntga muvaffaqiyatli biriktirilgan bo'lsa, uni qaytarib olish yoki boshqa akkauntga o'tkazish mumkin emas va to'lov qaytarilmaydi." },
        { question: "Qabul qiluvchi Premium sovg'asini qabul qilishni o'chirib qo'yishi mumkinmi?", answer: "Ha. Telegram foydalanuvchiga maxfiylik sozlamalarida ayrim sovg'a turlarini, jumladan sovg'a qilingan Premium obunasini qabul qilishni taqiqlash imkonini beradi. Bunday holatda qabul qiluvchi Sozlamalar → Maxfiylik va xavfsizlik → Sovg'alar bo'limida ruxsatni yoqishi kerak." },
        { question: "Qabul qiluvchida allaqachon Premium bo'lsa, sovg'a yo'qoladimi?", answer: "Sovg'adan keyin yangi narsa ko'rinmasligi mumkin, chunki Premium imkoniyatlari avval ham ochiq edi. Sozlamalar → Telegram Premium bo'limidagi tugash sanasini to'lovdan oldingi sana bilan solishtiring; sana o'zgarmagan bo'lsa, supportga yozing." },
        { question: "Sovg'a yetib bormasa, pul qaytariladimi?", answer: "Uzgets shartlariga ko'ra, muammo Uzgets tarafida bo'lsa, sovg'a qayta yuboriladi yoki to'lov qaytariladi. Foydalanuvchi xatosi alohida ko'rib chiqiladi. Sovg'a ko'rsatilgan akkauntga muvaffaqiyatli yetkazilgan bo'lsa, to'lov qaytarilmaydi." },
      ],
      finalCtaHeading: "Sovg'ani to'g'ri @username bilan yuboring",
      finalCtaBody: `${siteConfig.bot}da Premium muddatini tanlang, qabul qiluvchining @username'ini profilidan nusxalab kiriting va UzCard, Humo, Click yoki Payme orqali to'lang. Sovg'a odatda 2–5 daqiqada biriktiriladi.`,
    },
    ru: {
      title: 'Подарок Telegram Premium не дошёл до получателя — причины и решение',
      description:
        'Подарок Premium отправлен, но у получателя его не видно: 8 ситуаций с причиной и решением, чек-лист для отправителя и получателя и условия возврата денег.',
      metaTitle: 'Подарок Telegram Premium не пришёл — причины и решение',
      metaDescription:
        'Подарок Telegram Premium не дошёл до получателя? Ошибка в @username, настройки подарков, активный Premium — всего 8 ситуаций с решением. Проверьте заказ в @uzgetsbot.',
      ogDescription:
        'Подарок Premium не пришёл: таблица «ситуация → причина → решение», что проверить отправителю и получателю.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Через сколько доходит подарок Telegram Premium?', answer: 'Подарок через @uzgetsbot после подтверждения оплаты обычно привязывается к аккаунту получателя за 2–5 минут. Если прошло больше 30 минут, а Premium не появился, обратитесь в поддержку с ID заказа и чеком.' },
        { question: 'Как понять, что подарок дошёл?', answer: 'Получатель открывает Настройки → Telegram Premium: если подписка активна, подарок доставлен. Кроме того, ему приходит служебное сообщение со сроком подарка, а в профиле появляется звезда Premium.' },
        { question: 'Я ошибся в @username, подарок ушёл другому человеку — что делать?', answer: 'Сразу напишите в поддержку. Если Premium ещё не привязан, случай рассмотрят индивидуально. Если Premium успешно привязан к указанному аккаунту, вернуть его или перенести на другой аккаунт нельзя, и деньги не возвращаются.' },
        { question: 'Может ли получатель отключить приём подарков Premium?', answer: 'Да. Telegram позволяет в настройках конфиденциальности запретить приём отдельных типов подарков, включая подаренную подписку Premium. В таком случае получателю нужно включить разрешение в разделе Настройки → Конфиденциальность → Подарки.' },
        { question: 'Если у получателя уже есть Premium, подарок пропадёт?', answer: 'После подарка может не появиться ничего нового, потому что функции Premium были открыты и раньше. Сравните дату окончания в Настройки → Telegram Premium с датой до оплаты; если она не изменилась, напишите в поддержку.' },
        { question: 'Вернут ли деньги, если подарок не дошёл?', answer: 'По условиям Uzgets, если проблема на стороне Uzgets, подарок отправляют повторно или возвращают деньги. Ошибка пользователя рассматривается индивидуально. Если подарок успешно доставлен на указанный аккаунт, деньги не возвращаются.' },
      ],
      finalCtaHeading: 'Отправьте подарок с правильным @username',
      finalCtaBody: `Выберите срок Premium в ${siteConfig.bot}, скопируйте @username получателя из его профиля и оплатите через UzCard, Humo, Click или Payme. Подарок обычно зачисляется за 2–5 минут.`,
    },
  },
}
