import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-6-oylik-narxi'
const TODAY = '2026-08-14'
const P3 = PREMIUM_PERIODS.find((period) => period.months === 3)!
const P6 = PREMIUM_PERIODS.find((period) => period.months === 6)!
const P12 = PREMIUM_PERIODS.find((period) => period.months === 12)!
const SAVING_VS_TWO_P3 = P3.priceUzs * 2 - P6.priceUzs

function UzAnswerBox() {
  return (
    <p>
      <strong>Uzgets&apos;da 6 oylik Telegram Premium narxi {formatUzs(P6.priceUzs)}</strong>, ya&apos;ni
      oyiga <strong>{formatUzs(P6.perMonthHint)}</strong>. Bu 3 oylik paketni ikki marta olishdan{' '}
      <strong>{formatUzs(SAVING_VS_TWO_P3)} arzonroq</strong>. Bir martalik xarid avtomatik
      uzaymaydi; Premium aniq @username&apos;ga 6 oyga biriktiriladi. Yarim yil foydalanmoqchi,
      lekin 12 oylik majburiyatni istamaydiganlar uchun balansli variant.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      <strong>Telegram Premium на 6 месяцев в Uzgets стоит {formatUzs(P6.priceUzs)}</strong>,
      то есть <strong>{formatUzs(P6.perMonthHint)} в месяц</strong>. Это на{' '}
      <strong>{formatUzs(SAVING_VS_TWO_P3)} дешевле</strong>, чем дважды покупать пакет на
      3 месяца. Разовая покупка не продлевается автоматически; Premium привязывается к
      указанному @username на 6 месяцев.
    </p>
  )
}

function PriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  const rows = PREMIUM_PERIODS.map((period) => [
    uz ? `${period.months} oy` : `${period.months} мес.`,
    formatUzs(period.priceUzs),
    formatUzs(period.perMonthHint),
    period.months === 3
      ? (uz ? 'Qisqa sinov' : 'Короткий тест')
      : period.months === 6
        ? (uz ? 'Tejash va moslashuv balansi' : 'Баланс экономии и гибкости')
        : (uz ? 'Eng past oylik xarajat' : 'Минимальная цена за месяц'),
  ])

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            {(uz ? ['Muddat', 'Jami narx', 'Oyiga', 'Kimga mos'] : ['Срок', 'Итого', 'В месяц', 'Кому подходит']).map((header) => (
              <th key={header} className="px-4 py-3 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className={`border-t border-[var(--border)] ${row[0].startsWith('6') ? 'bg-[var(--primary)]/5' : ''}`}>
              {row.map((cell, index) => (
                <td key={cell + index} className={`px-4 py-3 ${index === 0 ? 'font-semibold' : ''}`}>{cell}</td>
              ))}
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
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Premium FAQ</a>
          {' '}— {uz ? "rasmiy xarid usullari, 3/6/12 oylik sovg'a muddatlari va provayder bo'yicha bekor qilish qoidalari" : 'официальные способы покупки, подарки на 3/6/12 месяцев и отмена у провайдера'}.
        </li>
        <li>
          <a href="https://core.telegram.org/constructor/premiumSubscriptionOption" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram PremiumSubscriptionOption</a>
          {' '}— {uz ? "muddat, valyuta va jami narx akkauntga dinamik qaytarilishini ko'rsatuvchi rasmiy API hujjati" : 'официальная API-документация о динамических сроках, валюте и полной цене'}.
        </li>
        <li>
          <a href="https://core.telegram.org/bots/api#giftpremiumsubscription" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Bot API</a>
          {' '}— {uz ? "Premium sovg'asi uchun rasmiy muddatlardan biri 6 oy ekanini tasdiqlaydi" : 'подтверждает, что 6 месяцев — один из официальных сроков подарка Premium'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Web research, Uzgets konfiguratsiyasi, xizmat shartlari va maxfiylik siyosati 2026-yil 14-avgustda tekshirildi. Narxlar o'zgarishi mumkin; to'lovdan oldin botdagi summani tekshiring."
          : 'Веб-источники, конфигурация Uzgets, условия и политика конфиденциальности проверены 14 августа 2026 года. Цены могут измениться — проверьте сумму в боте перед оплатой.'}
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
          <li><a href="#narxi" className="hover:text-[var(--primary)] hover:underline">6 oylik Premium narxi</a></li>
          <li><a href="#taqqoslash" className="hover:text-[var(--primary)] hover:underline">3, 6 va 12 oy taqqoslash</a></li>
          <li><a href="#kimga-mos" className="hover:text-[var(--primary)] hover:underline">Kimga mos?</a></li>
          <li><a href="#sotib-olish" className="hover:text-[var(--primary)] hover:underline">Sotib olish qadamlari</a></li>
          <li><a href="#xavfsizlik" className="hover:text-[var(--primary)] hover:underline">Xavfsizlik va muddat</a></li>
        </ol>
      </nav>

      <h2 id="narxi">Telegram Premium 6 oylik narxi qancha?</h2>
      <p>2026-yil 14-avgust holatiga Uzgets&apos;da 6 oylik Telegram Premium <strong>{formatUzs(P6.priceUzs)}</strong>. Hisob oddiy: {formatUzs(P6.priceUzs)} ÷ 6 = <strong>{formatUzs(P6.perMonthHint)} oyiga</strong>. To&apos;lov bir marta qilinadi; Uzgets bu paket uchun har oy kartadan pul yechmaydi.</p>
      <p>Bu Uzgets narxi. Telegram, App Store, Google Play yoki boshqa sotuvchidagi narx boshqacha bo&apos;lishi mumkin. Telegram rasmiy API hujjatida ham muddat, valyuta va summa alohida xarid variantining parametrlari sifatida ko&apos;rsatiladi. Shuning uchun turli provayder narxlarini aralashtirmang.</p>
      <InlineBotCTA lang="uz" text={`6 oylik Premium — ${formatUzs(P6.priceUzs)}. Joriy summani @uzgetsbot'da tekshiring.`} />

      <h2 id="taqqoslash">3, 6 va 12 oylik Premium: qaysi biri foydali?</h2>
      <PriceTable lang="uz" />
      <p><strong>6 oylik paket 3 oylikdan qanday tejaydi?</strong> 3 oylik paketni ikki marta olish {formatUzs(P3.priceUzs * 2)} bo&apos;ladi. Bitta 6 oylik paket {formatUzs(P6.priceUzs)}: farq <strong>{formatUzs(SAVING_VS_TWO_P3)}</strong>.</p>
      <p><strong>12 oylik nega oyiga arzonroq?</strong> 12 oylik paketda jami {formatUzs(P12.priceUzs)} oldindan to&apos;lanadi va bir oyga {formatUzs(P12.perMonthHint)} tushadi. Bu 6 oylikdan oyiga {formatUzs(P6.perMonthHint - P12.perMonthHint)} arzon, ammo boshlang&apos;ich to&apos;lov va muddat ikki baravar katta.</p>

      <h2 id="kimga-mos">6 oylik Telegram Premium kimga mos?</h2>
      <ul>
        <li><strong>Premium&apos;ni muntazam ishlatadiganlarga:</strong> 4 GB fayl, tezroq yuklash, transkripsiya va yuqori limitlardan bir necha oy foydalanadiganlar.</li>
        <li><strong>Yillik paketga hali tayyor bo&apos;lmaganlarga:</strong> 12 oy uchun birdan to&apos;lamasdan, 3 oylikdan pastroq oylik xarajat olish mumkin.</li>
        <li><strong>Yarim yillik loyiha yoki o&apos;qish davriga:</strong> muddat semestr, mavsum yoki ish loyihasiga mos keladi.</li>
        <li><strong>Sovg&apos;a qiluvchilarga:</strong> Telegram rasmiy FAQ&apos;ida 6 oy qo&apos;llab-quvvatlanadigan sovg&apos;a muddatlaridan biri sifatida ko&apos;rsatilgan.</li>
      </ul>
      <p>Agar Premium sizga kerakligini hali bilmasangiz, <Link href="/blog/telegram-premium-3-oylik-ozbekistonda" className="text-[var(--primary)] hover:underline">3 oylik paket</Link> xavfi pastroq. Telegram&apos;ni har kuni ishlatsangiz va bir yilga rejangiz aniq bo&apos;lsa, 12 oylik paketning oylik xarajati pastroq.</p>

      <h2 id="sotib-olish">6 oylik Premium qanday sotib olinadi?</h2>
      <ol>
        <li>Faqat rasmiy <a href="https://telegram.me/uzgetsbot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@uzgetsbot</a>ni oching.</li>
        <li>Telegram Premium va <strong>6 oy</strong> muddatini tanlang.</li>
        <li>Premium tushadigan @username&apos;ni xatosiz kiriting. O&apos;zingizga ham, boshqa odamga ham olish mumkin.</li>
        <li>Bot ko&apos;rsatgan joriy summa va to&apos;lov usulini tekshiring.</li>
        <li>To&apos;lovni tasdiqlang va buyurtma holatini kuzating.</li>
        <li>Qabul qiluvchi akkauntda Premium belgisi va muddatini tekshiring.</li>
      </ol>
      <p>Mahalliy karta bo&apos;yicha batafsil yo&apos;riqnoma <Link href="/blog/telegram-premium-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">UzCard/Humo orqali Premium olish</Link> maqolasida, umumiy variantlar esa <Link href="/blog/telegram-premium-toliq-qollanma-barcha-usullar" className="text-[var(--primary)] hover:underline">to&apos;liq xarid qo&apos;llanmasida</Link> berilgan.</p>

      <h2 id="xavfsizlik">Avtomatik uzayish, akkaunt va xavfsizlik</h2>
      <p>Uzgets&apos;dagi 6 oylik paket <strong>bir martalik xarid</strong>: 6 oy tugaganda Uzgets kartadan avtomatik pul yechmaydi. Davom ettirishni istasangiz, yangi buyurtma berasiz. App Store, Google Play yoki @PremiumBot orqali olingan shaxsiy obuna boshqa qoidalarga ega bo&apos;lishi mumkin; Telegram ularni xarid qilingan provayder orqali boshqarishni tavsiya qiladi.</p>
      <p>Premium to&apos;lov tasdiqlangach kiritilgan @username&apos;ga biriktiriladi. Username to&apos;g&apos;riligini to&apos;lovdan oldin tekshiring. Uzgets Telegram paroli, SMS/login kodi, QR-login, 2FA paroli yoki karta CVV kodini so&apos;ramaydi. Muvaffaqiyatli yetkazilgan mahsulot uchun refund xizmat shartlariga muvofiq berilmaydi; Uzgets tarafidagi muammo alohida tekshiriladi.</p>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taqdim etadi. Taqqoslash joriy ichki narxlar va ochiq rasmiy Telegram manbalariga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#narxi" className="hover:text-[var(--primary)] hover:underline">Цена Premium на 6 месяцев</a></li>
          <li><a href="#taqqoslash" className="hover:text-[var(--primary)] hover:underline">Сравнение 3, 6 и 12 месяцев</a></li>
          <li><a href="#kimga-mos" className="hover:text-[var(--primary)] hover:underline">Кому подходит</a></li>
          <li><a href="#sotib-olish" className="hover:text-[var(--primary)] hover:underline">Как купить</a></li>
          <li><a href="#xavfsizlik" className="hover:text-[var(--primary)] hover:underline">Безопасность и срок</a></li>
        </ol>
      </nav>

      <h2 id="narxi">Сколько стоит Telegram Premium на 6 месяцев?</h2>
      <p>На 14 августа 2026 года пакет Uzgets на 6 месяцев стоит <strong>{formatUzs(P6.priceUzs)}</strong>. Расчёт: {formatUzs(P6.priceUzs)} ÷ 6 = <strong>{formatUzs(P6.perMonthHint)} в месяц</strong>. Оплата разовая — Uzgets не списывает деньги с карты каждый месяц.</p>
      <p>Это цена Uzgets. Стоимость в Telegram, App Store, Google Play или у другого продавца может отличаться. В официальной документации Telegram срок, валюта и сумма являются параметрами конкретного варианта покупки, поэтому сравнивать нужно итоговые условия одного провайдера.</p>
      <InlineBotCTA lang="ru" text={`Premium на 6 месяцев — ${formatUzs(P6.priceUzs)}. Проверьте актуальную сумму в @uzgetsbot.`} />

      <h2 id="taqqoslash">Premium на 3, 6 или 12 месяцев: что выгоднее?</h2>
      <PriceTable lang="ru" />
      <p><strong>Экономия относительно двух пакетов по 3 месяца:</strong> две покупки обойдутся в {formatUzs(P3.priceUzs * 2)}, а один пакет на 6 месяцев — в {formatUzs(P6.priceUzs)}. Разница составляет <strong>{formatUzs(SAVING_VS_TWO_P3)}</strong>.</p>
      <p>Годовой пакет стоит {formatUzs(P12.priceUzs)}, или {formatUzs(P12.perMonthHint)} в месяц. Это на {formatUzs(P6.perMonthHint - P12.perMonthHint)} в месяц меньше, чем у шестимесячного, но срок и первоначальный платёж вдвое больше.</p>

      <h2 id="kimga-mos">Кому подходит пакет на 6 месяцев?</h2>
      <ul>
        <li><strong>Регулярным пользователям Premium:</strong> тем, кто постоянно использует файлы до 4 ГБ, повышенные лимиты, расшифровку и быструю загрузку.</li>
        <li><strong>Тем, кто не готов платить за год:</strong> цена за месяц ниже, чем у пакета на 3 месяца, а обязательство короче годового.</li>
        <li><strong>Для семестра или проекта:</strong> полугодовой срок удобно сопоставить с учёбой, сезоном или рабочим проектом.</li>
        <li><strong>Для подарка:</strong> официальный FAQ Telegram указывает 6 месяцев как один из поддерживаемых подарочных сроков.</li>
      </ul>
      <p>Если вы только проверяете, нужен ли Premium, рассмотрите <Link href="/ru/blog/telegram-premium-3-oylik-ozbekistonda" className="text-[var(--primary)] hover:underline">пакет на 3 месяца</Link>. Если пользуетесь Telegram ежедневно и уверены в планах на год, у годового пакета ниже цена за месяц.</p>

      <h2 id="sotib-olish">Как купить Premium на 6 месяцев?</h2>
      <ol>
        <li>Откройте только официальный <a href="https://telegram.me/uzgetsbot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@uzgetsbot</a>.</li>
        <li>Выберите Telegram Premium и срок <strong>6 месяцев</strong>.</li>
        <li>Без ошибки укажите @username получателя — купить можно себе или другому человеку.</li>
        <li>Проверьте актуальную сумму и способ оплаты, показанные ботом.</li>
        <li>Подтвердите оплату и следите за статусом заказа.</li>
        <li>Проверьте значок Premium и срок в аккаунте получателя.</li>
      </ol>
      <p>Подробности локальной оплаты есть в инструкции <Link href="/ru/blog/telegram-premium-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">по UzCard и Humo</Link>, а другие варианты — в <Link href="/ru/blog/telegram-premium-toliq-qollanma-barcha-usullar" className="text-[var(--primary)] hover:underline">полном руководстве по покупке Premium</Link>.</p>

      <h2 id="xavfsizlik">Автопродление, аккаунт и безопасность</h2>
      <p>Пакет Uzgets на 6 месяцев — <strong>разовая покупка</strong>: после окончания срока Uzgets не списывает деньги автоматически. Для продолжения оформите новый заказ. У личных подписок через App Store, Google Play или @PremiumBot могут быть другие правила — Telegram рекомендует управлять ими у того же провайдера.</p>
      <p>После подтверждения оплаты Premium привязывается к указанному @username. Проверьте его до оплаты. Uzgets не запрашивает пароль Telegram, SMS-код входа, QR-вход, пароль 2FA или CVV карты. Успешно доставленный продукт не возвращается согласно условиям сервиса; проблема на стороне Uzgets рассматривается отдельно.</p>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> на этой странице Uzgets предлагает собственный сервис. Сравнение основано на текущей внутренней конфигурации и открытых официальных источниках Telegram.</p>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'comparison',
  locales: {
    uz: {
      title: 'Telegram Premium 6 oylik: narxi, foydasi va kimga mos',
      description: `6 oylik Telegram Premium ${formatUzs(P6.priceUzs)}: oyiga narx, 3/12 oylik paketlar bilan hisob-kitob, xarid qadamlari va kimga mosligi.`,
      metaTitle: 'Telegram Premium 6 oylik narxi va foydasi',
      metaDescription: `Telegram Premium 6 oylik narxi ${formatUzs(P6.priceUzs)}. Oyiga xarajat, 3 va 12 oy bilan taqqoslash, ${formatUzs(SAVING_VS_TWO_P3)} tejash va xarid qadamlari.`,
      ogDescription: `6 oylik Premium — ${formatUzs(P6.priceUzs)}: oyiga narx, tejash hisobi va xavfsiz xarid qadamlari.`,
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: 'Telegram Premium 6 oylik narxi qancha?', answer: `2026-yil 14-avgust holatiga Uzgets'da ${formatUzs(P6.priceUzs)}, ya'ni oyiga ${formatUzs(P6.perMonthHint)}.` },
        { question: '6 oylik Premium 3 oylikdan qancha arzon?', answer: `3 oylik paketni ikki marta olish ${formatUzs(P3.priceUzs * 2)}. 6 oylik paket ${formatUzs(P6.priceUzs)}, shuning uchun ${formatUzs(SAVING_VS_TWO_P3)} tejaysiz.` },
        { question: '6 oylik yoki 12 oylik Premium yaxshimi?', answer: `Moslashuvchanlik va pastroq boshlang'ich to'lov uchun 6 oy; Telegram'dan bir yil foydalanish aniq bo'lsa, oyiga ${formatUzs(P12.perMonthHint)} tushadigan 12 oy tejamliroq.` },
        { question: '6 oylik Premium avtomatik uzayadimi?', answer: "Uzgets'dagi paket avtomatik uzaymaydi va har oy pul yechilmaydi. Boshqa provayderdan olingan obunani o'sha provayder qoidalari bo'yicha tekshiring." },
        { question: "6 oylik Premium'ni sovg'a qilsa bo'ladimi?", answer: "Ha. Telegram 6 oyni rasmiy sovg'a muddatlaridan biri sifatida qo'llab-quvvatlaydi. Buyurtmada qabul qiluvchining aniq @username'ini kiriting." },
        { question: "Xarid uchun Telegram paroli yoki login kodi kerakmi?", answer: "Yo'q. Uzgets'ga faqat mahsulot tushadigan @username kerak; Telegram paroli, SMS/2FA kodi, QR-login va karta CVV kodini bermang." },
      ],
      finalCtaHeading: '6 oylik Premium sizga mosmi?',
      finalCtaBody: `@uzgetsbot'da joriy narx ${formatUzs(P6.priceUzs)}. 6 oyni tanlang, @username va summani tekshirib, bir martalik to'lovni amalga oshiring.`,
    },
    ru: {
      title: 'Telegram Premium на 6 месяцев: цена, выгода и кому подходит',
      description: `Premium на 6 месяцев за ${formatUzs(P6.priceUzs)}: цена в месяц, сравнение с пакетами на 3 и 12 месяцев, шаги покупки и кому подходит.`,
      metaTitle: 'Telegram Premium на 6 месяцев: цена и выгода',
      metaDescription: `Premium на 6 месяцев стоит ${formatUzs(P6.priceUzs)}. Цена в месяц, сравнение сроков, экономия ${formatUzs(SAVING_VS_TWO_P3)} и инструкция покупки.`,
      ogDescription: `Premium на 6 месяцев за ${formatUzs(P6.priceUzs)}: расчёт цены, экономия и безопасная покупка.`,
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Сколько стоит Telegram Premium на 6 месяцев?', answer: `На 14 августа 2026 года в Uzgets — ${formatUzs(P6.priceUzs)}, или ${formatUzs(P6.perMonthHint)} в месяц.` },
        { question: 'Насколько 6 месяцев выгоднее двух пакетов по 3 месяца?', answer: `Два пакета по 3 месяца стоят ${formatUzs(P3.priceUzs * 2)}, а один на 6 месяцев — ${formatUzs(P6.priceUzs)}. Экономия — ${formatUzs(SAVING_VS_TWO_P3)}.` },
        { question: 'Что лучше: 6 или 12 месяцев?', answer: `Для гибкости и меньшего первоначального платежа — 6 месяцев. Если Premium точно нужен на год, пакет на 12 месяцев выгоднее: ${formatUzs(P12.perMonthHint)} в месяц.` },
        { question: 'Пакет на 6 месяцев продлевается автоматически?', answer: 'Пакет Uzgets не продлевается автоматически. У подписок других провайдеров могут быть иные правила — проверяйте их в месте покупки.' },
        { question: 'Можно подарить Premium на 6 месяцев?', answer: 'Да. Telegram официально поддерживает такой подарочный срок. В заказе укажите точный @username получателя.' },
        { question: 'Нужны пароль Telegram или код входа?', answer: 'Нет. Uzgets нужен только @username получателя. Никому не сообщайте пароль, SMS/2FA-код, QR-вход и CVV карты.' },
      ],
      finalCtaHeading: 'Подходит пакет на 6 месяцев?',
      finalCtaBody: `Актуальная цена в @uzgetsbot — ${formatUzs(P6.priceUzs)}. Выберите 6 месяцев, проверьте @username и сумму, затем выполните разовую оплату.`,
    },
  },
}
