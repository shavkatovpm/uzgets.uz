import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-12-oylik-narxi'
const TODAY = '2026-08-18'
const P3 = PREMIUM_PERIODS.find((period) => period.months === 3)!
const P6 = PREMIUM_PERIODS.find((period) => period.months === 6)!
const P12 = PREMIUM_PERIODS.find((period) => period.months === 12)!
const SAVING_VS_FOUR_P3 = P3.priceUzs * 4 - P12.priceUzs
const SAVING_VS_TWO_P6 = P6.priceUzs * 2 - P12.priceUzs

function UzAnswerBox() {
  return (
    <p>
      <strong>Uzgets&apos;da 12 oylik Telegram Premium narxi {formatUzs(P12.priceUzs)}</strong>,
      ya&apos;ni oyiga <strong>{formatUzs(P12.perMonthHint)}</strong>. Bu 3 oylik paketni yil
      davomida to&apos;rt marta olishdan <strong>{formatUzs(SAVING_VS_FOUR_P3)}</strong>, 6 oylikni
      ikki marta olishdan esa <strong>{formatUzs(SAVING_VS_TWO_P6)} arzonroq</strong>. Xarid bir
      martalik va Uzgets tomonidan avtomatik uzaytirilmaydi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      <strong>Telegram Premium на 12 месяцев в Uzgets стоит {formatUzs(P12.priceUzs)}</strong>,
      или <strong>{formatUzs(P12.perMonthHint)} в месяц</strong>. Это на{' '}
      <strong>{formatUzs(SAVING_VS_FOUR_P3)} дешевле</strong> четырёх пакетов по 3 месяца и на{' '}
      <strong>{formatUzs(SAVING_VS_TWO_P6)} дешевле</strong> двух пакетов по 6 месяцев. Покупка
      разовая и не продлевается Uzgets автоматически.
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
            {(uz ? ['Muddat', 'Jami narx', 'Oyiga', '12 oy bilan farq'] : ['Срок', 'Итого', 'В месяц', 'Разница с 12 мес.']).map((header) => (
              <th key={header} className="px-4 py-3 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-[var(--border)]">
            <td className="px-4 py-3 font-semibold">{uz ? '3 oy × 4' : '3 мес. × 4'}</td>
            <td className="px-4 py-3">{formatUzs(P3.priceUzs * 4)}</td>
            <td className="px-4 py-3">{formatUzs(P3.perMonthHint)}</td>
            <td className="px-4 py-3">+{formatUzs(SAVING_VS_FOUR_P3)}</td>
          </tr>
          <tr className="border-t border-[var(--border)]">
            <td className="px-4 py-3 font-semibold">{uz ? '6 oy × 2' : '6 мес. × 2'}</td>
            <td className="px-4 py-3">{formatUzs(P6.priceUzs * 2)}</td>
            <td className="px-4 py-3">{formatUzs(P6.perMonthHint)}</td>
            <td className="px-4 py-3">+{formatUzs(SAVING_VS_TWO_P6)}</td>
          </tr>
          <tr className="border-t border-[var(--border)] bg-[var(--primary)]/5">
            <td className="px-4 py-3 font-semibold">{uz ? '12 oy' : '12 мес.'}</td>
            <td className="px-4 py-3 font-semibold">{formatUzs(P12.priceUzs)}</td>
            <td className="px-4 py-3 font-semibold">{formatUzs(P12.perMonthHint)}</td>
            <td className="px-4 py-3">—</td>
          </tr>
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
          {' '}— {uz ? "12 oy rasmiy sovg'a muddatlaridan biri ekani, yillik chegirma, narxning mamlakat va provayderga bog'liqligi" : 'официальный срок подарка 12 месяцев, годовая скидка и зависимость цены от страны и провайдера'}.
        </li>
        <li>
          <a href="https://core.telegram.org/constructor/premiumSubscriptionOption" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram PremiumSubscriptionOption</a>
          {' '}— {uz ? "muddat, valyuta va jami narx har bir obuna variantining alohida parametrlari ekanini ko'rsatadi" : 'показывает, что срок, валюта и полная цена — параметры конкретного варианта подписки'}.
        </li>
        <li>
          <a href="https://core.telegram.org/bots/api#giftpremiumsubscription" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Bot API</a>
          {' '}— {uz ? "Premium sovg'asi uchun 3, 6 va 12 oylik muddatlarni rasman belgilaydi" : 'официально определяет сроки подарка Premium: 3, 6 и 12 месяцев'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Web research, Uzgets konfiguratsiyasi, xizmat shartlari va maxfiylik siyosati 2026-yil 18-avgustda tekshirildi. Narx o'zgarishi mumkin; to'lovdan oldin botdagi summani tekshiring."
          : 'Веб-источники, конфигурация Uzgets, условия и политика конфиденциальности проверены 18 августа 2026 года. Цена может измениться — проверьте сумму в боте перед оплатой.'}
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
          <li><a href="#narxi" className="hover:text-[var(--primary)] hover:underline">12 oylik Premium narxi</a></li>
          <li><a href="#tejash" className="hover:text-[var(--primary)] hover:underline">Qancha tejaysiz?</a></li>
          <li><a href="#tanlov" className="hover:text-[var(--primary)] hover:underline">Kimga mos?</a></li>
          <li><a href="#sotib-olish" className="hover:text-[var(--primary)] hover:underline">Sotib olish qadamlari</a></li>
          <li><a href="#muddat" className="hover:text-[var(--primary)] hover:underline">Muddat va xavfsizlik</a></li>
        </ol>
      </nav>

      <h2 id="narxi">Telegram Premium 12 oylik narxi qancha?</h2>
      <p>2026-yil 18-avgust holatiga Uzgets&apos;da 12 oylik Telegram Premium <strong>{formatUzs(P12.priceUzs)}</strong>. Jami narxni 12 ga bo&apos;lsak, <strong>{formatUzs(P12.perMonthHint)} oyiga</strong> tushadi. To&apos;lov har oy emas, buyurtma paytida bir marta amalga oshiriladi.</p>
      <p>Bu Uzgets&apos;ning joriy narxi. Telegram rasmiy FAQ&apos;iga ko&apos;ra, narx mamlakat, xarid provayderi, do&apos;kon komissiyasi va soliqlarga qarab farqlanishi mumkin. Shu sababli Uzgets narxini App Store, Google Play yoki @PremiumBot narxi deb talqin qilmaslik kerak.</p>
      <InlineBotCTA lang="uz" text={`12 oylik Premium — ${formatUzs(P12.priceUzs)}. To'lovdan oldin joriy summani @uzgetsbot'da tekshiring.`} />

      <h2 id="tejash">12 oylik Telegram Premium bilan qancha tejaysiz?</h2>
      <PriceTable lang="uz" />
      <p><strong>3 oylik paketlarga nisbatan:</strong> {formatUzs(P3.priceUzs)} × 4 = {formatUzs(P3.priceUzs * 4)}. Yillik paket {formatUzs(P12.priceUzs)}, demak bir yil uchun <strong>{formatUzs(SAVING_VS_FOUR_P3)} tejaysiz</strong>.</p>
      <p><strong>6 oylik paketlarga nisbatan:</strong> {formatUzs(P6.priceUzs)} × 2 = {formatUzs(P6.priceUzs * 2)}. 12 oylik paketni bir marta olish <strong>{formatUzs(SAVING_VS_TWO_P6)} arzonroq</strong>.</p>
      <p>Bu hisob bir xil 12 oylik foydalanish davrini Uzgets&apos;dagi joriy paketlar bilan taqqoslaydi. Kelajakdagi narx o&apos;zgarishi yoki boshqa provayder taklifi hisobga olinmagan.</p>

      <h2 id="tanlov">12 oylik Premium kimga mos?</h2>
      <ul>
        <li><strong>Telegram&apos;dan har kuni foydalanadiganlarga:</strong> Premium funksiyalari bir yil kerakligi aniq bo&apos;lsa, oylik xarajat eng past.</li>
        <li><strong>Bir martalik to&apos;lovni afzal ko&apos;rganlarga:</strong> yil davomida qayta buyurtma berish shart emas.</li>
        <li><strong>Uzoq muddatli sovg&apos;a izlayotganlarga:</strong> Telegram 12 oyni rasmiy prepaid sovg&apos;a muddatlaridan biri sifatida qo&apos;llab-quvvatlaydi.</li>
      </ul>
      <p>Agar Premium sizga kerakligiga ishonchingiz komil bo&apos;lmasa, <Link href="/blog/telegram-premium-3-oylik-ozbekistonda" className="text-[var(--primary)] hover:underline">3 oylik paket</Link> moslashuvchanroq. Boshlang&apos;ich to&apos;lovni kamaytirib, oyiga nisbatan tejamli narx istasangiz, <Link href="/blog/telegram-premium-6-oylik-narxi" className="text-[var(--primary)] hover:underline">6 oylik paket</Link> o&apos;rta variant.</p>

      <h2 id="sotib-olish">12 oylik Premium qanday sotib olinadi?</h2>
      <ol>
        <li>Faqat rasmiy <a href="https://telegram.me/uzgetsbot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@uzgetsbot</a>ni oching.</li>
        <li>Telegram Premium bo&apos;limidan <strong>12 oy</strong> muddatini tanlang.</li>
        <li>Premium tushadigan @username&apos;ni xatosiz kiriting.</li>
        <li>Botdagi joriy narx va to&apos;lov usulini tekshiring.</li>
        <li>Bir martalik to&apos;lovni tasdiqlang va buyurtma holatini kuzating.</li>
        <li>Qabul qiluvchi akkauntda Premium belgisi paydo bo&apos;lganini tekshiring.</li>
      </ol>
      <p>Mahalliy kartadan xarid qilish uchun <Link href="/blog/telegram-premium-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">UzCard/Humo yo&apos;riqnomasi</Link>ni, barcha variantlar uchun esa <Link href="/blog/telegram-premium-toliq-qollanma-barcha-usullar" className="text-[var(--primary)] hover:underline">Premium sotib olish bo&apos;yicha to&apos;liq qo&apos;llanma</Link>ni ko&apos;ring.</p>

      <h2 id="muddat">12 oylik paket avtomatik uzayadimi?</h2>
      <p>Uzgets&apos;dagi 12 oylik paket <strong>avtomatik uzaymaydi</strong>: muddat tugaganda Uzgets kartadan yana pul yechmaydi. Davom ettirish uchun yangi buyurtma beriladi. App Store, Google Play yoki @PremiumBot orqali olingan shaxsiy obuna qoidalari boshqacha bo&apos;lishi mumkin; Telegram uni aynan xarid qilingan provayder orqali boshqarishni tavsiya qiladi.</p>
      <p>Premium to&apos;lov tasdiqlangach ko&apos;rsatilgan @username&apos;ga biriktiriladi. Uni boshqa akkauntga ko&apos;chirib bo&apos;lmaydi, shuning uchun username&apos;ni to&apos;lovdan oldin tekshiring. Uzgets Telegram paroli, SMS/login kodi, QR-login, 2FA paroli yoki karta CVV kodini so&apos;ramaydi. Muvaffaqiyatli yetkazilgan mahsulot qaytarilmaydi; Uzgets tarafidagi muammo bo&apos;lsa, mahsulot qayta yuborilishi yoki to&apos;lov qaytarilishi mumkin.</p>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Hisob-kitob joriy ichki narxlarga, Telegram haqidagi da&apos;volar esa rasmiy ochiq manbalarga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#narxi" className="hover:text-[var(--primary)] hover:underline">Цена Premium на 12 месяцев</a></li>
          <li><a href="#tejash" className="hover:text-[var(--primary)] hover:underline">Расчёт экономии</a></li>
          <li><a href="#tanlov" className="hover:text-[var(--primary)] hover:underline">Кому подходит</a></li>
          <li><a href="#sotib-olish" className="hover:text-[var(--primary)] hover:underline">Как купить</a></li>
          <li><a href="#muddat" className="hover:text-[var(--primary)] hover:underline">Срок и безопасность</a></li>
        </ol>
      </nav>

      <h2 id="narxi">Сколько стоит Telegram Premium на 12 месяцев?</h2>
      <p>На 18 августа 2026 года пакет Uzgets на 12 месяцев стоит <strong>{formatUzs(P12.priceUzs)}</strong>, или <strong>{formatUzs(P12.perMonthHint)} в месяц</strong>. Полная сумма оплачивается один раз при заказе.</p>
      <p>Это цена Uzgets. По официальному FAQ Telegram стоимость может зависеть от страны, провайдера, комиссии магазина и налогов. Поэтому она не является ценой App Store, Google Play или @PremiumBot.</p>
      <InlineBotCTA lang="ru" text={`Premium на 12 месяцев — ${formatUzs(P12.priceUzs)}. Перед оплатой проверьте актуальную сумму в @uzgetsbot.`} />

      <h2 id="tejash">Сколько можно сэкономить за 12 месяцев?</h2>
      <PriceTable lang="ru" />
      <p><strong>Относительно пакетов на 3 месяца:</strong> {formatUzs(P3.priceUzs)} × 4 = {formatUzs(P3.priceUzs * 4)}. Годовой пакет дешевле на <strong>{formatUzs(SAVING_VS_FOUR_P3)}</strong>.</p>
      <p><strong>Относительно пакетов на 6 месяцев:</strong> {formatUzs(P6.priceUzs)} × 2 = {formatUzs(P6.priceUzs * 2)}. Экономия годового пакета — <strong>{formatUzs(SAVING_VS_TWO_P6)}</strong>.</p>
      <p>Расчёт сравнивает одинаковый период в 12 месяцев по текущим ценам Uzgets и не учитывает будущие изменения цен или предложения других провайдеров.</p>

      <h2 id="tanlov">Кому подходит Premium на 12 месяцев?</h2>
      <ul>
        <li><strong>Ежедневным пользователям Telegram:</strong> если Premium точно нужен весь год, цена месяца минимальна.</li>
        <li><strong>Тем, кто предпочитает разовую оплату:</strong> не нужно повторно оформлять заказ в течение года.</li>
        <li><strong>Для долгосрочного подарка:</strong> Telegram официально поддерживает предоплаченный подарок Premium на 12 месяцев.</li>
      </ul>
      <p>Если вы ещё проверяете пользу Premium, гибче <Link href="/ru/blog/telegram-premium-3-oylik-ozbekistonda" className="text-[var(--primary)] hover:underline">пакет на 3 месяца</Link>. Если важен меньший первоначальный платёж, рассмотрите <Link href="/ru/blog/telegram-premium-6-oylik-narxi" className="text-[var(--primary)] hover:underline">6 месяцев</Link>.</p>

      <h2 id="sotib-olish">Как купить Premium на 12 месяцев?</h2>
      <ol>
        <li>Откройте только официальный <a href="https://telegram.me/uzgetsbot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@uzgetsbot</a>.</li>
        <li>Выберите Telegram Premium и срок <strong>12 месяцев</strong>.</li>
        <li>Без ошибки укажите @username получателя.</li>
        <li>Проверьте актуальную цену и способ оплаты в боте.</li>
        <li>Подтвердите разовую оплату и следите за статусом заказа.</li>
        <li>Проверьте появление значка Premium в аккаунте получателя.</li>
      </ol>
      <p>Для оплаты локальной картой прочитайте инструкцию по <Link href="/ru/blog/telegram-premium-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">UzCard и Humo</Link>, а все варианты собраны в <Link href="/ru/blog/telegram-premium-toliq-qollanma-barcha-usullar" className="text-[var(--primary)] hover:underline">полном руководстве по покупке Premium</Link>.</p>

      <h2 id="muddat">Продлевается ли пакет на 12 месяцев автоматически?</h2>
      <p>Пакет Uzgets <strong>не продлевается автоматически</strong>: после окончания срока Uzgets не списывает деньги снова. Для продолжения оформляется новый заказ. У подписок через App Store, Google Play или @PremiumBot могут быть другие правила — управлять ими нужно у провайдера покупки.</p>
      <p>После подтверждения оплаты Premium привязывается к указанному @username и не переносится на другой аккаунт. Проверьте имя до оплаты. Uzgets не запрашивает пароль Telegram, SMS-код, QR-вход, пароль 2FA или CVV карты. Успешно доставленный товар не возвращается; при проблеме на стороне Uzgets товар может быть отправлен повторно или платёж возвращён.</p>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Расчёты основаны на текущих внутренних ценах, а сведения о Telegram — на официальных открытых источниках.</p>
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
      title: 'Telegram Premium 12 oylik: yillik narx va qancha tejaysiz',
      description: `12 oylik Telegram Premium ${formatUzs(P12.priceUzs)}: oyiga narx, 3 va 6 oylik paketlar bilan aniq tejash hisobi hamda xarid qadamlari.`,
      metaTitle: 'Telegram Premium 12 oylik narxi va tejash hisobi',
      metaDescription: `Telegram Premium 12 oylik narxi ${formatUzs(P12.priceUzs)}. Oyiga ${formatUzs(P12.perMonthHint)}, paketlar taqqoslanishi va ${formatUzs(SAVING_VS_FOUR_P3)} gacha tejash hisobi.`,
      ogDescription: `12 oylik Premium — ${formatUzs(P12.priceUzs)}: oyiga narx, 3/6 oylik paketlarga nisbatan tejash va xarid qadamlari.`,
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: 'Telegram Premium 12 oylik narxi qancha?', answer: `2026-yil 18-avgust holatiga Uzgets'da ${formatUzs(P12.priceUzs)}, ya'ni oyiga ${formatUzs(P12.perMonthHint)}.` },
        { question: '12 oylik Premium bilan qancha tejash mumkin?', answer: `3 oylikni to'rt marta olishga nisbatan ${formatUzs(SAVING_VS_FOUR_P3)}, 6 oylikni ikki marta olishga nisbatan ${formatUzs(SAVING_VS_TWO_P6)} tejaysiz.` },
        { question: '12 oylik Premium avtomatik uzayadimi?', answer: "Uzgets'dagi paket avtomatik uzaymaydi. 12 oy tugagach davom ettirish uchun yangi buyurtma beriladi." },
        { question: "12 oylik Premium'ni sovg'a qilsa bo'ladimi?", answer: "Ha. Telegram 12 oyni rasmiy prepaid sovg'a muddatlaridan biri sifatida qo'llab-quvvatlaydi. Aniq @username kiriting." },
        { question: "Premium'ni boshqa akkauntga o'tkazish mumkinmi?", answer: "Yo'q. Telegram Premium biriktirilgan akkauntdan boshqasiga ko'chirilmaydi. Telefon raqamini o'sha akkaunt ichida almashtirish obunani yo'qotmaydi." },
        { question: 'Xarid uchun Telegram paroli yoki login kodi kerakmi?', answer: "Yo'q. Uzgets'ga faqat mahsulot tushadigan @username kerak; parol, SMS/2FA kodi, QR-login va CVV kodini bermang." },
      ],
      finalCtaHeading: 'Premium bir yil kerak bo‘ladimi?',
      finalCtaBody: `@uzgetsbot'da joriy narx ${formatUzs(P12.priceUzs)}. 12 oyni tanlang, @username va summani tekshirib, bir martalik to'lovni amalga oshiring.`,
    },
    ru: {
      title: 'Telegram Premium на 12 месяцев: цена за год и экономия',
      description: `Premium на 12 месяцев за ${formatUzs(P12.priceUzs)}: цена в месяц, точное сравнение с пакетами на 3 и 6 месяцев и шаги покупки.`,
      metaTitle: 'Telegram Premium на 12 месяцев: цена и экономия',
      metaDescription: `Premium на 12 месяцев стоит ${formatUzs(P12.priceUzs)}, или ${formatUzs(P12.perMonthHint)} в месяц. Сравнение пакетов и экономия до ${formatUzs(SAVING_VS_FOUR_P3)}.`,
      ogDescription: `Premium на 12 месяцев за ${formatUzs(P12.priceUzs)}: цена в месяц, экономия и безопасные шаги покупки.`,
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Сколько стоит Telegram Premium на 12 месяцев?', answer: `На 18 августа 2026 года в Uzgets — ${formatUzs(P12.priceUzs)}, или ${formatUzs(P12.perMonthHint)} в месяц.` },
        { question: 'Сколько можно сэкономить с годовым пакетом?', answer: `Относительно четырёх пакетов по 3 месяца — ${formatUzs(SAVING_VS_FOUR_P3)}, относительно двух пакетов по 6 месяцев — ${formatUzs(SAVING_VS_TWO_P6)}.` },
        { question: 'Годовой пакет продлевается автоматически?', answer: 'Пакет Uzgets не продлевается автоматически. После 12 месяцев для продолжения нужно оформить новый заказ.' },
        { question: 'Можно подарить Premium на 12 месяцев?', answer: 'Да. Telegram официально поддерживает предоплаченный подарок Premium на 12 месяцев. Укажите точный @username.' },
        { question: 'Можно перенести Premium на другой аккаунт?', answer: 'Нет. Telegram не позволяет переносить Premium между аккаунтами. Смена номера внутри того же аккаунта не отменяет подписку.' },
        { question: 'Нужны пароль Telegram или код входа?', answer: 'Нет. Uzgets нужен только @username получателя. Не сообщайте пароль, SMS/2FA-код, QR-вход или CVV карты.' },
      ],
      finalCtaHeading: 'Premium нужен на весь год?',
      finalCtaBody: `Актуальная цена в @uzgetsbot — ${formatUzs(P12.priceUzs)}. Выберите 12 месяцев, проверьте @username и сумму, затем выполните разовую оплату.`,
    },
  },
}
