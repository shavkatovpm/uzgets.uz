import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-va-ton-farqi'
const TODAY = '2026-08-11'

function UzAnswerBox() {
  return <p><strong>Telegram Stars</strong> — Telegram ichida botlar, mini-ilovalar, paid media, sovg&apos;alar va kreatorlarni qo&apos;llab-quvvatlash uchun ishlatiladigan virtual birlik. <strong>TON</strong> esa blokcheyn tarmog&apos;i va uning wallet orqali boshqariladigan kriptoaktivi. Shaxsiy Stars balansini oddiy pul yoki TON kabi erkin yuborib, yechib bo&apos;lmaydi; faqat ayrim kreator/bot daromadlari Telegram belgilagan shartlarda Fragment orqali TON ekotizimiga chiqarilishi mumkin.</p>
}

function RuAnswerBox() {
  return <p><strong>Telegram Stars</strong> — виртуальные единицы Telegram для ботов, mini apps, платных медиа, подарков и поддержки авторов. <strong>TON</strong> — блокчейн-сеть и криптоактив, которым управляют через кошелёк. Личный баланс Stars нельзя свободно переводить и выводить как TON; только определённый доход авторов и ботов может выводиться через Fragment на условиях Telegram.</p>
}

const rows = [
  ['Turi / Тип', 'Telegram ichidagi virtual birlik / Виртуальная единица Telegram', 'Blokcheyn va kriptoaktiv / Блокчейн и криптоактив'],
  ['Saqlash / Хранение', 'Telegram akkauntidagi balans / Баланс аккаунта Telegram', 'Kriptohamyon manzili / Адрес криптокошелька'],
  ['Asosiy vazifa / Назначение', "Bot, mini-app, gift, paid media / Боты, mini apps, подарки", "On-chain o'tkazma va ilovalar / Ончейн-переводы и приложения"],
  ["Oddiy o'tkazma / Обычный перевод", "Shaxsiy balans erkin transfer qilinmaydi / Личный баланс свободно не переводится", "Wallet manziliga yuboriladi / Переводится на адрес кошелька"],
  ['Narx / Цена', "Paket va provayderga bog'liq / Зависит от пакета и провайдера", 'Bozor kursi o‘zgaradi / Рыночный курс меняется'],
  ['Komissiya / Комиссия', "Xarid provayderi shartlari / Условия провайдера покупки", 'Tarmoq tranzaksiya to‘lovi / Сетевая комиссия'],
  ['Pulga chiqarish / Вывод', 'Shaxsiy xarid balansi uchun yo‘q / Для личного купленного баланса — нет', 'Wallet va servislar orqali mumkin / Возможен через кошелёк и сервисы'],
]

function DiffTable({ lang }: { lang: 'uz' | 'ru' }) {
  const i = lang === 'uz' ? 0 : 1
  const pick = (s: string) => s.split(' / ')[i] ?? s
  return <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]"><table className="w-full min-w-[620px] text-sm"><thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">{lang === 'uz' ? 'Mezon' : 'Критерий'}</th><th className="px-4 py-3 text-left">Telegram Stars</th><th className="px-4 py-3 text-left">TON</th></tr></thead><tbody>{rows.map((r) => <tr key={r[0]} className="border-t border-[var(--border)]"><td className="px-4 py-3 font-medium">{pick(r[0])}</td><td className="px-4 py-3">{pick(r[1])}</td><td className="px-4 py-3">{pick(r[2])}</td></tr>)}</tbody></table></div>
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm"><div className="mb-2 font-semibold">{uz ? 'Rasmiy manbalar' : 'Официальные источники'}</div><ul className="space-y-2 text-[var(--text-muted)]">
    <li><a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Stars Terms</a> — {uz ? "shaxsiy balans, foydalanish va o'tkazish cheklovlari" : 'личный баланс, использование и ограничения переводов'}.</li>
    <li><a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Stars API</a> — {uz ? "Stars daromadi va Fragment orqali yechish oqimi" : 'доход Stars и вывод через Fragment'}.</li>
    <li><a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Stars e&apos;loni</a> — {uz ? "Stars vazifasi va TON bilan bog'lanishi" : 'назначение Stars и связь с TON'}.</li>
    <li><a href="https://docs.ton.org/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">TON Docs</a> — {uz ? "TON tarmog'i, wallet va tranzaksiyalar" : 'сеть TON, кошельки и транзакции'}.</li>
  </ul><p className="mt-3 text-[var(--text-muted)]">{uz ? "Web research 2026-yil 11-avgustda yangilandi. Telegram va TON qoidalari o'zgarishi mumkin." : 'Веб-исследование обновлено 11 августа 2026 года. Правила Telegram и TON могут меняться.'}</p></div>
}

function UzBody() {
  return <>
    <h2 id="asosiy-farq">Stars va TON o&apos;rtasidagi asosiy farq</h2>
    <p>Ularning ikkalasi Telegram ekotizimida uchrashi sababli ko&apos;p odam ularni bir xil deb o&apos;ylaydi. Aslida Stars — Telegram ichidagi xarid birligi, TON esa mustaqil blokcheyn infratuzilmasi. Stars Telegram akkauntiga, TON aktivlari esa wallet manziliga bog&apos;lanadi.</p>
    <DiffTable lang="uz" />

    <h2 id="stars-nima">Telegram Stars nima?</h2>
    <p>Telegram rasmiy shartlariga ko&apos;ra, Stars bot va mini-ilovalardagi raqamli tovarlar, paid media, sovg&apos;alar va kreatorlarni qo&apos;llab-quvvatlash uchun ishlatiladigan virtual item hisoblanadi. Uni Telegram, ilova do&apos;koni yoki uchinchi tomon provayderi orqali sotib olish mumkin.</p>
    <ul><li>Telegram Gifts sotib olish;</li><li>bot va Mini App ichidagi raqamli xizmatlarga to&apos;lash;</li><li>kanaldagi pullik media yoki obunani ochish;</li><li>kreatorlarga reaksiya yoki xabar orqali yordam berish.</li></ul>
    <p>Stars haqida umumiy tushuncha uchun <Link href="/blog/telegram-stars-nima" className="text-[var(--primary)] hover:underline">Telegram Stars nima?</Link> qo&apos;llanmasini ko&apos;ring.</p>
    <InlineBotCTA lang="uz" text="Shaxsiy foydalanish uchun kerakli Stars paketini botda tanlang." />

    <h2 id="ton-nima">TON nima?</h2>
    <p>TON — smart-kontraktlar, ilovalar va on-chain to&apos;lovlar ishlaydigan blokcheyn platformasi. Undagi aktiv wallet orqali boshqariladi: foydalanuvchi qabul qiluvchi wallet manzilini va summani ko&apos;rsatib tranzaksiya yuboradi. Blokcheyn o&apos;tkazmalari qaytarilmasligi mumkin, shu sabab manzil va tarmoqni tasdiqlashdan oldin tekshirish zarur.</p>
    <p>TON bozor kursiga ega kriptoaktiv ekotizimi; Stars esa Telegram belgilaydigan virtual birlik. Shuning uchun “1 Stars har doim falon TON” degan doimiy universal kurs yo&apos;q.</p>

    <h2 id="starsni-ton">Stars&apos;ni TON&apos;ga aylantirish mumkinmi?</h2>
    <p><strong>Oddiy foydalanuvchining sotib olingan shaxsiy Stars balansini erkin TON&apos;ga aylantirib bo&apos;lmaydi.</strong> Telegram Stars shartlari shaxsiy balansdagi Stars&apos;ni ruxsat etilgan foydalanishlardan tashqari sotish, yechish yoki transfer qilishni taqiqlaydi.</p>
    <p>Boshqa holat — bot, kanal yoki ayrim kreatorlar ishlab topgan Stars daromadi. Telegram texnik hujjatlarida tegishli minimal balans, kutish muddati, 2FA va mavjudlik shartlari bajarilganda Fragment orqali TON wallet&apos;ga chiqarish oqimi tasvirlangan. Bu har bir sotib olingan Stars uchun avtomatik huquq emas.</p>

    <h2 id="kim-chiqara-oladi">Kim Stars daromadini chiqarishi mumkin?</h2>
    <ul><li>Stars orqali raqamli mahsulot sotgan bot yoki mini-ilova egasi;</li><li>paid media, reaksiya yoki monetizatsiya orqali Stars olgan kanal/kreator;</li><li>Telegram akkauntida withdrawal funksiyasi yoqilgan va minimal talab bajarilgan egasi.</li></ul>
    <p>Aniq minimum, kutish va mavjudlik qiymatlari Telegram konfiguratsiyasida o&apos;zgarishi mumkin. Shu sabab maqola statik raqam va&apos;da qilmaydi — yechish oynasidagi joriy shart tekshiriladi.</p>

    <h2 id="yuborish">Stars va TON qanday yuboriladi?</h2>
    <h3>Stars</h3><p>Shaxsiy Stars balansi boshqa walletga oddiy token kabi yuborilmaydi. Ruxsat etilgan usullar — sovg&apos;a, paid media, bot/Mini App xaridi va Telegram ko&apos;rsatgan boshqa ichki funksiyalar.</p>
    <h3>TON</h3><p>TON wallet manziliga blockchain tranzaksiyasi bilan yuboriladi. Manzilni birinchi va oxirgi belgilarigacha tekshiring, to&apos;g&apos;ri tarmoqdan foydalaning va avval kichik test summa yuborishni o&apos;ylab ko&apos;ring.</p>

    <h2 id="qaysi-biri">Sizga Stars kerakmi yoki TON?</h2>
    <ul><li><strong>Telegram ichida sovg&apos;a yoki bot xizmati:</strong> Stars.</li><li><strong>Kanal yoki botdagi paid kontent:</strong> Stars.</li><li><strong>Walletdan walletga kripto o&apos;tkazma:</strong> TON ekotizimidagi aktiv.</li><li><strong>On-chain ilova yoki smart-kontrakt:</strong> TON.</li><li><strong>Kontent daromadini chiqarish:</strong> avval Stars daromadi, so&apos;ng Telegram ruxsat bergan Fragment/TON oqimi.</li></ul>

    <h2 id="xavfsizlik">Xavfsizlikda eng muhim 5 qoida</h2>
    <ol><li>Shaxsiy Stars&apos;ni “naqdlashtirib beramiz” degan norasmiy takliflarga ishonmang.</li><li>TON wallet seed phrase yoki private key&apos;ni hech kimga bermang.</li><li>Telegram login kodi va 2FA parolini supportga ham yubormang.</li><li>Stars xaridida qabul qiluvchi @username&apos;ni, TON o&apos;tkazmasida wallet manzilini tekshiring.</li><li>Telegram va TON&apos;ning joriy rasmiy qoidalarini operatsiyadan oldin qayta o&apos;qing.</li></ol>
    <Sources lang="uz" />
  </>
}

function RuBody() {
  return <>
    <h2 id="glavnoe-otlichie">Главное отличие Stars от TON</h2>
    <p>Оба продукта встречаются в экосистеме Telegram, поэтому их часто путают. Stars — внутренняя единица покупок Telegram, а TON — самостоятельная блокчейн-инфраструктура. Stars привязаны к аккаунту Telegram, активы TON — к адресу кошелька.</p>
    <DiffTable lang="ru" />

    <h2 id="stars">Что такое Telegram Stars?</h2>
    <p>По официальным условиям Telegram, Stars — виртуальные предметы для цифровых товаров в ботах и mini apps, платных медиа, подарков и поддержки авторов. Их покупают через Telegram, магазин приложений или стороннего провайдера.</p>
    <ul><li>покупка Telegram Gifts;</li><li>цифровые услуги в ботах и Mini Apps;</li><li>платные медиа и подписки каналов;</li><li>поддержка авторов реакциями и сообщениями.</li></ul>
    <p>Подробнее — в руководстве <Link href="/ru/blog/telegram-stars-nima" className="text-[var(--primary)] hover:underline">«Что такое Telegram Stars»</Link>.</p>
    <InlineBotCTA lang="ru" text="Выберите пакет Stars для личного использования в боте." />

    <h2 id="ton">Что такое TON?</h2>
    <p>TON — блокчейн-платформа для смарт-контрактов, приложений и ончейн-платежей. Активами управляют через кошелёк: пользователь указывает адрес получателя и сумму. Блокчейн-переводы могут быть необратимыми, поэтому адрес и сеть проверяют до подтверждения.</p>
    <p>Криптоактив TON имеет рыночный курс, а Stars — виртуальная единица с условиями Telegram. Постоянного универсального курса «1 Star = X TON» нет.</p>

    <h2 id="obmen">Можно ли обменять Stars на TON?</h2>
    <p><strong>Купленный личный баланс Stars нельзя свободно обменивать на TON.</strong> Условия Telegram запрещают продавать, выводить или переводить личные Stars вне прямо разрешённых сценариев.</p>
    <p>Другая ситуация — доход бота, канала или автора. Техническая документация Telegram описывает вывод через Fragment на TON-кошелёк при выполнении минимального баланса, ожидания, 2FA и других условий. Покупка Stars сама по себе такого права не даёт.</p>

    <h2 id="kto-vyvodit">Кто может выводить доход Stars?</h2>
    <ul><li>владелец бота или mini app, заработавшего Stars;</li><li>канал или автор с доходом от paid media и монетизации;</li><li>владелец, у которого включён withdrawal и выполнены текущие требования.</li></ul>
    <p>Минимум, срок ожидания и доступность могут меняться в конфигурации Telegram, поэтому проверяйте текущий экран вывода.</p>

    <h2 id="perevod">Как переводятся Stars и TON?</h2>
    <h3>Stars</h3><p>Личный баланс нельзя отправить на кошелёк как обычный токен. Разрешённые сценарии — подарки, paid media, покупки в ботах и другие функции Telegram.</p>
    <h3>TON</h3><p>Актив отправляется блокчейн-транзакцией на адрес кошелька. Проверьте адрес, сеть и подумайте о небольшой тестовой сумме.</p>

    <h2 id="chto-vybrat">Что выбрать?</h2>
    <ul><li><strong>Подарок или услуга внутри Telegram:</strong> Stars.</li><li><strong>Paid-контент канала:</strong> Stars.</li><li><strong>Криптоперевод между кошельками:</strong> актив TON.</li><li><strong>Ончейн-приложение:</strong> TON.</li><li><strong>Вывод дохода автора:</strong> заработанные Stars и разрешённый Telegram поток Fragment/TON.</li></ul>

    <h2 id="bezopasnost">5 правил безопасности</h2>
    <ol><li>Не верьте неофициальным предложениям «обналичить личные Stars».</li><li>Никому не сообщайте seed-фразу и private key кошелька.</li><li>Не отправляйте код входа Telegram или пароль 2FA.</li><li>Для Stars проверяйте @username, для TON — адрес кошелька.</li><li>Перед операцией перечитайте актуальные официальные правила.</li></ol>
    <Sources lang="ru" />
  </>
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'comparison',
  locales: {
    uz: {
      title: "Telegram Stars va TON farqi: qaysi biri nima uchun kerak?",
      description: "Telegram Stars va TON farqi: saqlash, yuborish, narx, wallet va Stars daromadini TON orqali chiqarish qoidalari.",
      metaTitle: 'Telegram Stars va TON farqi — to‘liq taqqoslash',
      metaDescription: "Stars va TON bir xil emas. Ularning vazifasi, wallet, transfer, narx va Stars'ni TON orqali chiqarish shartlarini jadvalda solishtiring.",
      ogDescription: "Telegram Stars va TON: virtual birlik va blokcheyn aktivi o'rtasidagi 7 ta asosiy farq.",
      answerBoxTitle: 'Qisqa javob', answerBoxBody: UzAnswerBox, Body: UzBody,
      faq: [
        { question: "Telegram Stars va TON bir xilmi?", answer: "Yo'q. Stars — Telegram ichidagi virtual xarid birligi; TON — wallet va blockchain tranzaksiyalariga ega alohida tarmoq hamda kriptoaktiv ekotizimi." },
        { question: "Stars'ni TON'ga aylantirish mumkinmi?", answer: "Sotib olingan shaxsiy Stars balansini erkin TON'ga almashtirib bo'lmaydi. Faqat ayrim bot, kanal va kreator daromadlari Telegram shartlarida Fragment orqali chiqarilishi mumkin." },
        { question: "Oddiy foydalanuvchi Stars'ni kartaga chiqara oladimi?", answer: "Yo'q. Shaxsiy sotib olingan Stars balansini kartaga yoki walletga yechish Telegram Stars shartlarida ruxsat etilmagan." },
        { question: "TON uchun Telegram akkaunti kerakmi?", answer: "TON aktivi blockchain wallet orqali boshqariladi. Telegram ichidagi wallet ishlatilishi mumkin, lekin Stars balansidan farqli ravishda asosiy identifikator wallet manzilidir." },
        { question: "Stars yoki TON — qaysi biri sovg'a uchun?", answer: "Telegram ichidagi Gifts va bot xizmatlari uchun Stars kerak. On-chain kripto o'tkazmasi uchun esa TON wallet va tegishli aktiv ishlatiladi." },
        { question: "Stars va TON orasida doimiy kurs bormi?", answer: "Yo'q. Stars paketi provayder shartlariga, TON esa bozor kursiga bog'liq. Doimiy universal 1 Stars = X TON kursi yo'q." },
      ],
      finalCtaHeading: 'Telegram ichidagi xarid uchun Stars kerakmi?', finalCtaBody: "@uzgetsbot orqali kerakli Stars miqdorini mahalliy to'lov usuli bilan oling.",
    },
    ru: {
      title: 'Чем Telegram Stars отличаются от TON: полное сравнение',
      description: 'Разница Telegram Stars и TON: хранение, перевод, цена, кошелёк и условия вывода дохода Stars через TON.',
      metaTitle: 'Telegram Stars и TON — в чём разница?',
      metaDescription: 'Stars и TON — не одно и то же. Сравните назначение, кошелёк, переводы, цену и условия вывода заработанных Stars через TON.',
      ogDescription: 'Telegram Stars и TON: 7 отличий внутренней единицы и блокчейн-актива.',
      answerBoxTitle: 'Краткий ответ', answerBoxBody: RuAnswerBox, Body: RuBody,
      faq: [
        { question: 'Telegram Stars и TON — одно и то же?', answer: 'Нет. Stars — виртуальная единица покупок внутри Telegram; TON — отдельная блокчейн-сеть и экосистема криптоактивов с кошельками.' },
        { question: 'Можно обменять Stars на TON?', answer: 'Личный купленный баланс нельзя свободно обменивать. Только определённый доход ботов, каналов и авторов может выводиться через Fragment по условиям Telegram.' },
        { question: 'Обычный пользователь может вывести Stars на карту?', answer: 'Нет. Вывод личного купленного баланса на карту или кошелёк не разрешён условиями Telegram Stars.' },
        { question: 'Для TON нужен аккаунт Telegram?', answer: 'Актив TON управляется через блокчейн-кошелёк. Можно использовать кошелёк в экосистеме Telegram, но основным идентификатором служит адрес кошелька.' },
        { question: 'Для подарка нужны Stars или TON?', answer: 'Для Telegram Gifts и услуг ботов нужны Stars. Для ончейн-криптоперевода используется TON-кошелёк и соответствующий актив.' },
        { question: 'Есть постоянный курс Stars к TON?', answer: 'Нет. Цена Stars зависит от пакета и провайдера, а курс TON меняется на рынке. Универсального постоянного курса нет.' },
      ],
      finalCtaHeading: 'Нужны Stars для покупок в Telegram?', finalCtaBody: 'Выберите нужное количество в @uzgetsbot и оплатите локальным способом.',
    },
  },
}
