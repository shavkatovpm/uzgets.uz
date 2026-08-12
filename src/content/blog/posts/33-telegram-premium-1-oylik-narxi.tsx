import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-1-oylik-narxi'
const TODAY = '2026-08-12'
const P3 = PREMIUM_PERIODS.find((period) => period.months === 3)!

function UzAnswerBox() {
  return (
    <p>
      <strong>Ha, Telegram Premium&apos;ning 1 oylik shaxsiy obunasi ayrim akkaunt va to&apos;lov
      provayderlarida mavjud bo&apos;lishi mumkin.</strong> Uni Telegram&apos;dagi{' '}
      <strong>Sozlamalar → Telegram Premium</strong> bo&apos;limida tekshirasiz; narx mamlakat,
      App Store, Google Play yoki boshqa provayderga qarab o&apos;zgaradi. Ammo 1 oylik Premium&apos;ni
      boshqa odamga rasmiy sovg&apos;a qilib bo&apos;lmaydi. Uzgets&apos;da eng kichik paket —{' '}
      <strong>3 oyga {formatUzs(P3.priceUzs)}</strong>.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      <strong>Да, месячная личная подписка Telegram Premium может быть доступна для некоторых
      аккаунтов и платёжных провайдеров.</strong> Проверьте раздел{' '}
      <strong>Настройки → Telegram Premium</strong>; цена зависит от страны, App Store,
      Google Play или другого провайдера. Но подарить Premium на один месяц другому человеку
      официально нельзя. Минимальный пакет Uzgets —{' '}
      <strong>3 месяца за {formatUzs(P3.priceUzs)}</strong>.
    </p>
  )
}

function ComparisonTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  const rows = uz
    ? [
        ['1 oylik shaxsiy obuna', "Telegram ichida ko'rinsa", "Provayder ko'rsatadi", 'Odatda avtomatik', "O'z akkauntingiz"],
        ["1 oylik sovg'a", "Mavjud emas", '—', 'Yo‘q', '—'],
        ['Uzgets 3 oylik', 'Mavjud', formatUzs(P3.priceUzs), 'Yo‘q, bir martalik', "O'zingiz yoki boshqa odam"],
      ]
    : [
        ['Личная подписка на 1 месяц', 'Если показана в Telegram', 'Показывает провайдер', 'Обычно да', 'Свой аккаунт'],
        ['Подарок на 1 месяц', 'Недоступен', '—', 'Нет', '—'],
        ['Uzgets на 3 месяца', 'Доступен', formatUzs(P3.priceUzs), 'Нет, разовая оплата', 'Себе или другому'],
      ]
  const headers = uz
    ? ['Variant', 'Mavjudlik', 'Narx', 'Avtomatik uzayish', 'Kim uchun']
    : ['Вариант', 'Доступность', 'Цена', 'Автопродление', 'Для кого']

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>{headers.map((header) => <th key={header} className="px-4 py-3 text-left">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-[var(--border)]">
              {row.map((cell, index) => <td key={cell + index} className={`px-4 py-3 ${index === 0 ? 'font-medium' : ''}`}>{cell}</td>)}
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
        <li><a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Premium FAQ</a> — {uz ? "oylik/yillik shaxsiy obuna, narxning mamlakatga bog'liqligi va 3/6/12 oylik sovg'alar" : 'месячная/годовая личная подписка, региональные цены и подарки на 3/6/12 месяцев'}.</li>
        <li><a href="https://core.telegram.org/constructor/premiumSubscriptionOption" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram PremiumSubscriptionOption</a> — {uz ? "mavjud muddat va narxlar akkauntga dinamik qaytarilishini ko'rsatuvchi rasmiy API hujjati" : 'официальная API-документация о динамических сроках и ценах для аккаунта'}.</li>
        <li><a href="https://support.google.com/googleplay/answer/7018481" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Google Play Help</a> — {uz ? "obunani boshqarish, bekor qilish va billing davrini almashtirish" : 'управление, отмена и изменение периода подписки'}.</li>
        <li><a href="https://support.apple.com/en-by/guide/iphone/iph4e3e7324f/ios" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Apple Support</a> — {uz ? "iPhone'da obunani ko'rish, o'zgartirish va bekor qilish" : 'просмотр, изменение и отмена подписки на iPhone'}.</li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Web research va Uzgets konfiguratsiyasi 2026-yil 12-avgustda tekshirildi. Telegram ichidagi mavjudlik va narx xarid ekranida qayta tekshirilishi kerak."
          : 'Веб-источники и конфигурация Uzgets проверены 12 августа 2026 года. Доступность и цену внутри Telegram нужно перепроверить на экране покупки.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="bir-oylik-bormi">Telegram Premium 1 oylik bormi?</h2>
      <p>Telegram rasmiy FAQ&apos;ida shaxsiy obunaning birinchi <strong>oyi yoki yili</strong> haqida alohida yozilgan. Demak, 1 oylik billing varianti Telegram&apos;ning ayrim rasmiy xarid oqimlarida mavjud. Lekin qaysi muddatlar ko&apos;rinishi akkaunt, mamlakat, qurilma va provayderga bog&apos;liq: eng to&apos;g&apos;ri javobni o&apos;z Telegram ilovangizdagi Premium xarid oynasi beradi.</p>
      <p>Bu yerda ikki tushunchani aralashtirmaslik kerak: <strong>o&apos;zingiz uchun oylik obuna</strong> va <strong>boshqa odamga oldindan to&apos;langan sovg&apos;a</strong>. Telegram rasmiy sovg&apos;a muddatlari 3, 6 va 12 oy; 1 oylik sovg&apos;a varianti yo&apos;q.</p>
      <ComparisonTable lang="uz" />

      <h2 id="narxi">Telegram Premium 1 oylik narxi qancha?</h2>
      <p>Hamma foydalanuvchi uchun bitta universal 1 oylik narx yo&apos;q. Telegram rasmiy FAQ&apos;iga ko&apos;ra, summa telefon raqami mamlakat kodi, to&apos;lov kartasi mamlakati, App Store yoki Google Play akkaunti, mahalliy soliq va provayder komissiyalariga qarab farq qilishi mumkin.</p>
      <p>Shu sabab internetdagi boshqa mamlakat yoki eski sanadagi dollar/so&apos;m narxini sizning yakuniy narxingiz deb olish noto&apos;g&apos;ri. Joriy summani quyidagicha tekshiring:</p>
      <ol>
        <li>Telegram&apos;ning rasmiy ilovasini oching.</li>
        <li><strong>Sozlamalar → Telegram Premium</strong> bo&apos;limiga kiring.</li>
        <li>Taklif etilgan billing muddatlarini ko&apos;ring.</li>
        <li>1 oy mavjud bo&apos;lsa, to&apos;lovdan oldingi yakuniy summa va valyutani tekshiring.</li>
      </ol>
      <p>Bu tekshiruv to&apos;lov qilmaydi; tasdiqlashdan oldin ortga qaytishingiz mumkin.</p>

      <h2 id="uzgetsda">Uzgets&apos;da 1 oylik Premium bormi?</h2>
      <p><strong>Yo&apos;q.</strong> 2026-yil 12-avgust holatiga Uzgets katalogida 1 oylik paket mavjud emas. Eng kichik paket — <strong>3 oyga {formatUzs(P3.priceUzs)}</strong>, bir oyga hisoblaganda taxminan <strong>{formatUzs(P3.perMonthHint)}</strong>. Xarid bir martalik: muddat tugagach kartadan avtomatik pul yechilmaydi.</p>
      <InlineBotCTA lang="uz" text={`Eng kichik paket — 3 oyga ${formatUzs(P3.priceUzs)}. Joriy narxni botda tekshiring.`} />
      <p>3 oylik paketning kimga mosligi va xarid qadamlari <Link href="/blog/telegram-premium-3-oylik-ozbekistonda" className="text-[var(--primary)] hover:underline">3 oylik Telegram Premium qo&apos;llanmasida</Link> tushuntirilgan.</p>

      <h2 id="qaysi-usullar">1 oylik Premium&apos;ni qayerdan olish mumkin?</h2>
      <p>Akkauntingizda 1 oylik variant ko&apos;rinsa, xarid provayderi Telegram&apos;ning o&apos;zi ko&apos;rsatgan oqimga bog&apos;liq bo&apos;ladi:</p>
      <ul>
        <li><strong>Telegram ichidagi bot yoki invoice:</strong> mavjudligi mamlakat va akkauntga bog&apos;liq.</li>
        <li><strong>Google Play:</strong> Android&apos;dagi obuna Google Play orqali boshqarilishi va avtomatik yangilanishi mumkin.</li>
        <li><strong>App Store:</strong> iPhone&apos;dagi obuna Apple ID orqali boshqarilishi va avtomatik yangilanishi mumkin.</li>
      </ul>
      <p>Telegram rasmiy FAQ&apos;i App Store va Google Play narxiga do&apos;kon komissiyasi, soliq yoki uchinchi tomon to&apos;lovlari ta&apos;sir qilishi mumkinligini aytadi. Mahalliy Uzcard/Humo kartasi aynan shu oqimlarda ishlashi alohida bank va do&apos;kon sozlamalariga bog&apos;liq; ishlashini oldindan kafolatlab bo&apos;lmaydi.</p>

      <h2 id="bir-oylik-sovga">1 oylik Premium&apos;ni sovg&apos;a qilish mumkinmi?</h2>
      <p><strong>Yo&apos;q, Telegram&apos;ning rasmiy gift oqimida 1 oylik variant yo&apos;q.</strong> Boshqa foydalanuvchiga oldindan to&apos;langan Premium 3, 6 yoki 12 oyga yuboriladi. Bu cheklovni “1 oylik sovg&apos;a” deb va&apos;da qiladigan loginli xizmat bilan aylanib o&apos;tishga urinish xavfli bo&apos;lishi mumkin.</p>
      <p>Sovg&apos;a uchun parol yoki login kodi shart emas — faqat qabul qiluvchining aniq @username manzili kerak. Batafsil jarayon <Link href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">Premium sovg&apos;a qilish qo&apos;llanmasida</Link>.</p>

      <h2 id="avtomatik-uzayish">1 oylik Premium avtomatik uzayadimi?</h2>
      <p><strong>Ko&apos;pincha ha.</strong> Bir oylik shaxsiy Premium odatda recurring subscription — ya&apos;ni bekor qilinmasa, keyingi billing davrida yana pul yechishga urinadi. Aniq holatni xarid ekranidagi shartlar va obunalar ro&apos;yxatidan tekshiring.</p>
      <ul>
        <li><strong>Android:</strong> Google Play → profil → Payments &amp; subscriptions → Subscriptions.</li>
        <li><strong>iPhone:</strong> Settings → Apple ID → Subscriptions.</li>
        <li><strong>Telegram provayderi:</strong> Telegram rasmiy FAQ&apos;i bo&apos;yicha obuna olingan provayderning o&apos;zida bekor qilinadi.</li>
      </ul>
      <p>Bekor qilish Premium&apos;ni shu zahoti o&apos;chirmaydi: joriy to&apos;langan davr oxirigacha imkoniyatlar saqlanadi. Uzgets&apos;ning 3/6/12 oylik paketlari esa bir martalik va avtomatik uzaymaydi.</p>

      <h2 id="qaysi-biri">1 oy yoki 3 oy: qaysi biri mos?</h2>
      <ul>
        <li><strong>1 oy:</strong> shaxsiy akkauntda qisqa sinov kerak bo&apos;lsa, variant ko&apos;rinsa va provayder to&apos;lov usulingizni qabul qilsa.</li>
        <li><strong>3 oy:</strong> mahalliy to&apos;lov, boshqa odamga sovg&apos;a yoki avtomatik yechimsiz bir martalik xarid kerak bo&apos;lsa.</li>
        <li><strong>6/12 oy:</strong> Premium&apos;ni doimiy ishlatsangiz va bir oyga to&apos;g&apos;ri keladigan Uzgets xarajatini kamaytirmoqchi bo&apos;lsangiz.</li>
      </ul>
      <p>Barcha mahalliy paketlar narxini <Link href="/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">3/6/12 oylik Premium taqqoslashida</Link> ko&apos;ring.</p>
      <Sources lang="uz" />
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="est-li">Есть ли Telegram Premium на 1 месяц?</h2>
      <p>Официальный FAQ Telegram отдельно упоминает первый <strong>месяц или год</strong> личной подписки. Значит, месячный период доступен в некоторых официальных потоках покупки. Конкретные варианты зависят от аккаунта, страны, устройства и провайдера — проверяйте экран Premium в своём приложении.</p>
      <p>Личная месячная подписка и подарок другому человеку — разные продукты. Официальные подарочные сроки Telegram: 3, 6 и 12 месяцев. Подарка на один месяц нет.</p>
      <ComparisonTable lang="ru" />

      <h2 id="cena">Сколько стоит Telegram Premium на месяц?</h2>
      <p>Единой цены для всех стран нет. Она зависит от кода страны, платёжного метода, аккаунта App Store или Google Play, налогов и сборов провайдера. Актуальную сумму можно увидеть только перед покупкой в <strong>Настройки → Telegram Premium</strong>.</p>
      <ol><li>Откройте официальное приложение Telegram.</li><li>Перейдите в <strong>Настройки → Telegram Premium</strong>.</li><li>Посмотрите доступные периоды.</li><li>Если есть один месяц, проверьте валюту и итоговую сумму до подтверждения.</li></ol>

      <h2 id="uzgets">Есть ли месячный пакет в Uzgets?</h2>
      <p><strong>Нет.</strong> На 12 августа 2026 года минимальный пакет Uzgets — <strong>3 месяца за {formatUzs(P3.priceUzs)}</strong>, примерно <strong>{formatUzs(P3.perMonthHint)}</strong> в месяц. Это разовая покупка без автоматического списания после окончания срока.</p>
      <InlineBotCTA lang="ru" text={`Минимальный пакет — 3 месяца за ${formatUzs(P3.priceUzs)}. Проверьте текущую цену в боте.`} />
      <p>Подробности есть в <Link href="/ru/blog/telegram-premium-3-oylik-ozbekistonda" className="text-[var(--primary)] hover:underline">руководстве по пакету на 3 месяца</Link>.</p>

      <h2 id="gde-kupit">Где можно оформить месячную подписку?</h2>
      <ul><li><strong>Внутри Telegram:</strong> через показанный аккаунту официальный поток оплаты.</li><li><strong>Google Play:</strong> подписка управляется в центре подписок Google.</li><li><strong>App Store:</strong> подписка управляется через Apple ID.</li></ul>
      <p>Поддержка конкретной карты и итоговая цена зависят от страны и провайдера. Telegram предупреждает, что в стоимость могут входить комиссии магазина, налоги и сторонние сборы.</p>

      <h2 id="podarok">Можно ли подарить Premium на один месяц?</h2>
      <p><strong>Нет.</strong> Официальный подарок Telegram Premium можно отправить на 3, 6 или 12 месяцев. Пароль, код входа и 2FA для подарка не нужны — достаточно точного @username. См. <Link href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">инструкцию по подарку Premium</Link>.</p>

      <h2 id="avtoprodlenie">Месячный Premium продлевается автоматически?</h2>
      <p><strong>Обычно да.</strong> Месячная личная подписка чаще всего является регулярной. Проверяйте условия на экране покупки и отменяйте её у того же провайдера, где оформили.</p>
      <ul><li><strong>Android:</strong> Google Play → профиль → Payments &amp; subscriptions → Subscriptions.</li><li><strong>iPhone:</strong> Settings → Apple ID → Subscriptions.</li><li><strong>Другой провайдер Telegram:</strong> используйте его интерфейс управления.</li></ul>
      <p>После отмены Premium действует до конца уже оплаченного периода. Пакеты Uzgets на 3/6/12 месяцев не продлеваются автоматически.</p>

      <h2 id="chto-vybrat">Один или три месяца: что выбрать?</h2>
      <ul><li><strong>1 месяц:</strong> для короткого теста на своём аккаунте, если период и способ оплаты доступны.</li><li><strong>3 месяца:</strong> для локальной оплаты, подарка или разовой покупки без автосписания.</li><li><strong>6/12 месяцев:</strong> для постоянного использования с меньшей стоимостью месяца в Uzgets.</li></ul>
      <p>Сравните все локальные пакеты в <Link href="/ru/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">таблице цен Premium</Link>.</p>
      <Sources lang="ru" />
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'info',
  locales: {
    uz: {
      title: "Telegram Premium 1 oylik bormi? Narxi va mavjud usullar",
      description: "Telegram Premium'ning 1 oylik obunasi qayerda mavjud, narxi nega o'zgaradi, avtomatik uzayishi va Uzgets'dagi 3 oylik muqobil.",
      metaTitle: "Telegram Premium 1 oylik bormi? Narxi va usullar",
      metaDescription: "Telegram Premium 1 oylik mavjudligini tekshiring: narx nega o'zgaradi, qayerdan olinadi, avtomatik uzayish va 3 oylik mahalliy muqobil.",
      ogDescription: "Telegram Premium 1 oylik: mavjudlik, o'zgaruvchan narx, sovg'a cheklovi va Uzgets muqobili.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Premium 1 oylik bormi?", answer: "Ha, ayrim akkaunt va rasmiy to'lov provayderlarida 1 oylik shaxsiy obuna ko'rinishi mumkin. Sozlamalar → Telegram Premium bo'limida tekshiring." },
        { question: "Telegram Premium 1 oylik narxi qancha?", answer: "Universal narx yo'q. Summa mamlakat, App Store yoki Google Play akkaunti, to'lov usuli, soliq va provayder xarajatlariga bog'liq; xarid ekranidagi summa yakuniy." },
        { question: "Uzgets'da 1 oylik Premium bormi?", answer: `Yo'q. 2026-yil 12-avgust holatiga eng kichik Uzgets paketi 3 oyga ${formatUzs(P3.priceUzs)}.` },
        { question: "1 oylik Premium'ni sovg'a qilsa bo'ladimi?", answer: "Yo'q. Telegram'ning rasmiy sovg'a muddatlari 3, 6 va 12 oy. Bir oylik shaxsiy obunani boshqa akkauntga gift sifatida yuborib bo'lmaydi." },
        { question: "1 oylik Premium avtomatik uzayadimi?", answer: "Odatda ha. Shaxsiy oylik obuna bekor qilinmasa qayta to'lovga urinadi. Holatni xarid qilingan provayderning subscriptions bo'limida tekshiring." },
        { question: "1 oylik yoki 3 oylik Premium yaxshimi?", answer: "Qisqa shaxsiy sinov uchun 1 oylik, mahalliy to'lov, sovg'a va avtomatik yechimsiz xarid uchun 3 oylik Uzgets paketi qulayroq bo'lishi mumkin." },
      ],
      finalCtaHeading: "3 oylik mahalliy paketni tanlaysizmi?",
      finalCtaBody: `@uzgetsbot'da 3 oylik Premium ${formatUzs(P3.priceUzs)}. @username va summani tekshirib, mavjud mahalliy usulda to'lang.`,
    },
    ru: {
      title: 'Есть ли Telegram Premium на 1 месяц? Цена и способы',
      description: 'Где доступна месячная подписка Telegram Premium, почему меняется цена, как работает автопродление и альтернатива Uzgets на 3 месяца.',
      metaTitle: 'Telegram Premium на 1 месяц: цена и способы',
      metaDescription: 'Проверьте Telegram Premium на месяц: от чего зависит цена, где оформить, автопродление, ограничения подарка и локальная альтернатива.',
      ogDescription: 'Telegram Premium на месяц: доступность, переменная цена, ограничения подарка и альтернатива Uzgets.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Есть ли Telegram Premium на один месяц?', answer: 'Да, месячная личная подписка может отображаться для некоторых аккаунтов и официальных провайдеров. Проверьте Настройки → Telegram Premium.' },
        { question: 'Сколько стоит Premium на месяц?', answer: 'Единой цены нет. Она зависит от страны, App Store или Google Play, способа оплаты, налогов и сборов. Итоговая сумма отображается перед покупкой.' },
        { question: 'Есть ли месячный Premium в Uzgets?', answer: `Нет. На 12 августа 2026 года минимальный пакет Uzgets — 3 месяца за ${formatUzs(P3.priceUzs)}.` },
        { question: 'Можно подарить Premium на один месяц?', answer: 'Нет. Официальные подарочные сроки Telegram — 3, 6 и 12 месяцев. Месячная личная подписка не отправляется как подарок.' },
        { question: 'Месячный Premium продлевается автоматически?', answer: 'Обычно да. Проверьте условия и при необходимости отмените подписку у того же провайдера, где она была оформлена.' },
        { question: 'Что лучше: один или три месяца?', answer: 'Для короткого личного теста подходит месяц, если он доступен. Для локальной оплаты, подарка и покупки без автосписания удобен пакет Uzgets на 3 месяца.' },
      ],
      finalCtaHeading: 'Выбираете локальный пакет на 3 месяца?',
      finalCtaBody: `Premium на 3 месяца в @uzgetsbot стоит ${formatUzs(P3.priceUzs)}. Проверьте @username и сумму перед оплатой.`,
    },
  },
}
