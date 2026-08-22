import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-obunasini-bekor-qilish'
const TODAY = '2026-08-23'
const P3 = PREMIUM_PERIODS.find((p) => p.months === 3)!

function UzAnswerBox() {
  return (
    <p>
      <strong>{siteConfig.bot}</strong> orqali olingan Telegram Premium&apos;ni bekor qilish shart
      emas — bu bir martalik to&apos;lov, avtomatik uzaymaydi va muddat tugagach o&apos;zi
      to&apos;xtaydi. Agar Premium App Store, Google Play yoki Telegram ichidagi rasmiy to&apos;lov
      orqali <strong>obuna</strong> sifatida olingan bo&apos;lsa, uni Sozlamalar &gt; Premium
      bo&apos;limidagi &laquo;Obunani boshqarish&raquo; tugmasi yoki App Store/Google Play
      obunalar ro&apos;yxati orqali bekor qilasiz.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Отменять Telegram Premium, купленный через <strong>{siteConfig.bot}</strong>, не нужно — это
      разовая оплата без автопродления, она сама заканчивается по истечении срока. Если Premium
      оформлен как <strong>подписка</strong> через App Store, Google Play или официальную оплату
      внутри Telegram, отмените её в разделе Настройки &gt; Premium через кнопку «Управление
      подпиской» либо напрямую в списке подписок App Store/Google Play.
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
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Telegram Premium FAQ</a>
          {' '}— {uz ? "obuna, xarid manbai va muddat bo'yicha rasmiy ma'lumot" : 'официальные сведения о подписке, источнике покупки и сроке'}.
        </li>
        <li>
          <a href="https://support.apple.com/en-us/HT202039" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Apple — Obunalarni bekor qilish</a>
          {' '}— {uz ? "App Store orqali sotib olingan obunalarni bekor qilish rasmiy yo'riqnomasi" : 'официальная инструкция Apple по отмене подписок, купленных через App Store'}.
        </li>
        <li>
          <a href="https://support.google.com/googleplay/answer/7018481" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">Google Play — Obunani bekor qilish</a>
          {' '}— {uz ? "Google Play orqali sotib olingan obunalarni bekor qilish rasmiy yo'riqnomasi" : 'официальная инструкция Google по отмене подписок, купленных через Google Play'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Web research, Uzgets konfiguratsiyasi, xizmat shartlari va maxfiylik siyosati 2026-yil 23-avgustda tekshirildi. Do'kon ilovalarining menyu joylashuvi vaqt o'tishi bilan o'zgarishi mumkin — ekrandagi joriy nomlanishga amal qiling."
          : 'Веб-источники, конфигурация Uzgets, условия и политика конфиденциальности проверены 23 августа 2026 года. Расположение пунктов меню в приложениях магазинов может меняться — следуйте текущим названиям на экране.'}
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
          <li><a href="#turi" className="hover:text-[var(--primary)] hover:underline">Qaysi turdagi Premium&apos;ingiz bor?</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Uzgets orqali olingan Premium</a></li>
          <li><a href="#iphone" className="hover:text-[var(--primary)] hover:underline">iPhone&apos;da bekor qilish</a></li>
          <li><a href="#android" className="hover:text-[var(--primary)] hover:underline">Android&apos;da bekor qilish</a></li>
          <li><a href="#telegram-ichida" className="hover:text-[var(--primary)] hover:underline">Telegram ichidagi to&apos;lov</a></li>
          <li><a href="#keyin" className="hover:text-[var(--primary)] hover:underline">Bekor qilgandan keyin nima bo&apos;ladi?</a></li>
        </ol>
      </nav>

      <h2 id="turi">Qaysi turdagi Premium&apos;ingiz bor?</h2>
      <p>Telegram Premium uchta boshqa-boshqa yo&apos;l bilan faollashadi va har biri bekor qilinishi jihatidan farq qiladi:</p>
      <ul>
        <li><strong>Uzgets kabi vositachi bot orqali:</strong> bir martalik to&apos;lov, sizga &laquo;sovg&apos;a&raquo; sifatida biriktiriladi. Telegram bu yerda takroriy to&apos;lovni kuzatmaydi.</li>
        <li><strong>App Store yoki Google Play orqali:</strong> haqiqiy avtomatik uzayuvchi obuna — kartangizdan har muddat oxirida qayta yechiladi, siz bekor qilmaguningizcha.</li>
        <li><strong>Telegram ichidagi rasmiy to&apos;lov formasi orqali:</strong> ko&apos;pincha xuddi shu App Store/Google Play billing tizimiga tayanadi.</li>
      </ul>
      <p>Qaysi turga tegishli ekaningizni tekshirish uchun Telegram&apos;da <strong>Sozlamalar → Telegram Premium</strong> bo&apos;limini oching. Agar u yerda muddat va &laquo;Obunani boshqarish&raquo; yoki &laquo;Manage Subscription&raquo; tugmasi ko&apos;rinsa — bu avtomatik uzayuvchi obuna. Faqat muddat sanasi ko&apos;rinib, boshqaruv tugmasi bo&apos;lmasa, odatda bu Uzgets kabi bir martalik xarid.</p>

      <h2 id="uzgets">Uzgets orqali olingan Premium&apos;ni bekor qilish kerakmi?</h2>
      <p><strong>Yo&apos;q.</strong> {siteConfig.bot} orqali sotib olingan 3, 6 yoki 12 oylik paketlar ({formatUzs(P3.priceUzs)}dan boshlab) — bir martalik to&apos;lov. Uzgets kartangiz yoki to&apos;lov ma&apos;lumotingizni saqlamaydi va muddat tugaganda hech qanday qo&apos;shimcha pul yechilmaydi. Premium shunchaki belgilangan kunda o&apos;chadi; davom ettirish uchun botdan yangi buyurtma berish kerak bo&apos;ladi.</p>
      <p>Paketlar va narxlar bilan batafsil tanishish uchun <Link href="/premium" className="text-[var(--primary)] hover:underline">/premium</Link> bo&apos;limini yoki <Link href="/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">Premium narxlari va muddatlari</Link> qo&apos;llanmasini ko&apos;ring.</p>
      <InlineBotCTA lang="uz" text="Yangi muddat kerakmi? Botda paketni tanlang — eski obunani bekor qilish shart emas." />

      <h2 id="iphone">iPhone&apos;da (App Store) qanday bekor qilaman?</h2>
      <ol>
        <li><strong>Sozlamalar</strong> ilovasini oching va ismingizga (Apple ID) bosing.</li>
        <li><strong>Obunalar (Subscriptions)</strong> bo&apos;limini tanlang.</li>
        <li>Ro&apos;yxatdan <strong>Telegram Premium</strong> yoki <strong>Telegram Messenger</strong>ni toping.</li>
        <li><strong>Obunani bekor qilish</strong>ni bosib, tasdiqlang.</li>
      </ol>
      <p>Muqobil yo&apos;l: App Store ilovasini oching → yuqori o&apos;ng burchakdagi profil belgisini bosing → <strong>Obunalar</strong> → Telegram → <strong>Obunani bekor qilish</strong>.</p>

      <h2 id="android">Android&apos;da (Google Play) qanday bekor qilaman?</h2>
      <ol>
        <li><strong>Google Play</strong> ilovasini oching va profil belgisini bosing.</li>
        <li><strong>To&apos;lovlar va obunalar → Obunalar</strong> bo&apos;limiga o&apos;ting.</li>
        <li>Faol obunalar ro&apos;yxatidan <strong>Telegram</strong>ni tanlang.</li>
        <li><strong>Obunani bekor qilish</strong>ni bosib, so&apos;ralgan sabab va tasdiqni tanlang.</li>
      </ol>
      <p>Kompyuterdan ham amalga oshirish mumkin: <strong>play.google.com/store/account/subscriptions</strong> manziliga kirib, Telegram qatorida bekor qilishni tanlang.</p>

      <h2 id="telegram-ichida">Telegram ilovasi ichidan bekor qilsa bo&apos;ladimi?</h2>
      <p>Telegram&apos;ning o&apos;zida <strong>Sozlamalar → Telegram Premium</strong> bo&apos;limida &laquo;Obunani boshqarish&raquo; tugmasi bo&apos;lishi mumkin — lekin u odatda sizni to&apos;g&apos;ridan-to&apos;g&apos;ri App Store yoki Google Play&apos;ning obuna sahifasiga yo&apos;naltiradi, chunki mobil ilovada to&apos;lovni shu do&apos;konlar qayta ishlaydi. Ya&apos;ni yakuniy bekor qilish amali baribir yuqoridagi iPhone yoki Android bosqichlari orqali tugaydi.</p>
      <p>Agar Premium boshqa usul (masalan, veb-versiya yoki Fragment/TON hisobi) orqali faollashtirilgan bo&apos;lsa, to&apos;lovni aynan amalga oshirgan xizmat — bank ilovasi yoki Fragment hisobingiz — orqali obuna holatini tekshiring.</p>

      <h2 id="keyin">Bekor qilgandan keyin nima bo&apos;ladi?</h2>
      <ul>
        <li><strong>Darhol o&apos;chmaydi:</strong> Premium allaqachon to&apos;langan davr oxirigacha to&apos;liq ishlaydi.</li>
        <li><strong>Muddat tugagach:</strong> akkaunt oddiy (bepul) Telegram&apos;ga qaytadi, qayta pul yechilmaydi.</li>
        <li><strong>Hech narsa yo&apos;qolmaydi:</strong> chatlar, kanallar, papkalar va xabarlar saqlanib qoladi — faqat 4 GB fayl, premium emoji kabi Premium&apos;ga xos imkoniyatlar o&apos;chadi.</li>
        <li><strong>Qayta yoqish:</strong> istalgan vaqt App Store/Google Play&apos;dan qayta obuna bo&apos;lish yoki {siteConfig.bot} orqali yangi bir martalik buyurtma berish mumkin.</li>
      </ul>
      <p>Bekor qilish jarayonida Telegram sizdan parol, SMS/login kodi yoki 2FA parolini so&apos;ramaydi — bu amal to&apos;liq Apple ID yoki Google akkauntingiz sozlamalarida kechadi.</p>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Uzgets bo&apos;yicha ma&apos;lumot joriy ichki konfiguratsiyaga, App Store/Google Play bosqichlari esa Apple va Google&apos;ning rasmiy yordam sahifalariga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#turi" className="hover:text-[var(--primary)] hover:underline">Какой у вас тип Premium?</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Premium, купленный через Uzgets</a></li>
          <li><a href="#iphone" className="hover:text-[var(--primary)] hover:underline">Отмена на iPhone</a></li>
          <li><a href="#android" className="hover:text-[var(--primary)] hover:underline">Отмена на Android</a></li>
          <li><a href="#telegram-ichida" className="hover:text-[var(--primary)] hover:underline">Оплата внутри Telegram</a></li>
          <li><a href="#keyin" className="hover:text-[var(--primary)] hover:underline">Что будет после отмены?</a></li>
        </ol>
      </nav>

      <h2 id="turi">Какой у вас тип Telegram Premium?</h2>
      <p>Premium активируется тремя разными способами, и они по-разному отменяются:</p>
      <ul>
        <li><strong>Через бота-посредника вроде Uzgets:</strong> разовая оплата, активируется как «подарок». Telegram не отслеживает здесь повторное списание.</li>
        <li><strong>Через App Store или Google Play:</strong> настоящая автопродлевающаяся подписка — деньги списываются с карты по окончании каждого периода, пока вы не отмените.</li>
        <li><strong>Через официальную форму оплаты внутри Telegram:</strong> чаще всего опирается на ту же систему биллинга App Store/Google Play.</li>
      </ul>
      <p>Чтобы понять, какой у вас тип, откройте в Telegram <strong>Настройки → Telegram Premium</strong>. Если там виден срок и кнопка «Управление подпиской» — это автопродлевающаяся подписка. Если видна только дата окончания без кнопки управления — это, как правило, разовая покупка вроде Uzgets.</p>

      <h2 id="uzgets">Нужно ли отменять Premium, купленный через Uzgets?</h2>
      <p><strong>Нет.</strong> Пакеты на 3, 6 или 12 месяцев через {siteConfig.bot} (от {formatUzs(P3.priceUzs)}) — это разовая оплата. Uzgets не хранит данные вашей карты, и по окончании срока никакие деньги повторно не списываются. Premium просто отключается в назначенный день; для продолжения нужно оформить новый заказ в боте.</p>
      <p>Подробности о пакетах и ценах — в разделе <Link href="/ru/premium" className="text-[var(--primary)] hover:underline">/ru/premium</Link> или в <Link href="/ru/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">гиде по ценам Premium</Link>.</p>
      <InlineBotCTA lang="ru" text="Нужен новый срок? Выберите пакет в боте — отменять старую подписку не нужно." />

      <h2 id="iphone">Как отменить на iPhone (App Store)?</h2>
      <ol>
        <li>Откройте <strong>Настройки</strong> и нажмите на своё имя (Apple ID).</li>
        <li>Выберите <strong>Подписки (Subscriptions)</strong>.</li>
        <li>Найдите в списке <strong>Telegram Premium</strong> или <strong>Telegram Messenger</strong>.</li>
        <li>Нажмите <strong>Отменить подписку</strong> и подтвердите.</li>
      </ol>
      <p>Альтернатива: откройте App Store → значок профиля в правом верхнем углу → <strong>Подписки</strong> → Telegram → <strong>Отменить подписку</strong>.</p>

      <h2 id="android">Как отменить на Android (Google Play)?</h2>
      <ol>
        <li>Откройте <strong>Google Play</strong> и нажмите на значок профиля.</li>
        <li>Перейдите в <strong>Платежи и подписки → Подписки</strong>.</li>
        <li>В списке активных подписок выберите <strong>Telegram</strong>.</li>
        <li>Нажмите <strong>Отменить подписку</strong> и подтвердите причину.</li>
      </ol>
      <p>Также можно через компьютер: зайдите на <strong>play.google.com/store/account/subscriptions</strong> и отмените подписку Telegram там.</p>

      <h2 id="telegram-ichida">Можно ли отменить прямо в Telegram?</h2>
      <p>В самом Telegram в разделе <strong>Настройки → Telegram Premium</strong> может быть кнопка «Управление подпиской» — но она обычно перенаправляет прямо на страницу подписок App Store или Google Play, поскольку оплату в мобильном приложении обрабатывают именно эти магазины. То есть итоговая отмена всё равно завершается шагами для iPhone или Android выше.</p>
      <p>Если Premium активирован другим способом (например, через веб-версию или аккаунт Fragment/TON), проверьте статус подписки в сервисе, через который прошла оплата, — банковском приложении или аккаунте Fragment.</p>

      <h2 id="keyin">Что будет после отмены?</h2>
      <ul>
        <li><strong>Не сразу:</strong> Premium продолжает работать до конца уже оплаченного периода.</li>
        <li><strong>После окончания срока:</strong> аккаунт возвращается к обычному бесплатному Telegram, повторных списаний нет.</li>
        <li><strong>Ничего не теряется:</strong> чаты, каналы, папки и сообщения сохраняются — отключаются только функции Premium, например загрузка файлов до 4 ГБ или premium-эмодзи.</li>
        <li><strong>Повторное включение:</strong> в любой момент можно снова оформить подписку через App Store/Google Play или сделать новый разовый заказ через {siteConfig.bot}.</li>
      </ul>
      <p>При отмене Telegram не запрашивает пароль, SMS-код или пароль 2FA — весь процесс происходит в настройках вашего Apple ID или аккаунта Google.</p>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Сведения об Uzgets основаны на текущей внутренней конфигурации, а шаги для App Store/Google Play — на официальных страницах поддержки Apple и Google.</p>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'howto',
  locales: {
    uz: {
      title: "Telegram Premium obunasini qanday bekor qilish mumkin?",
      description:
        "Uzgets orqali olingan Premium avtomatik uzaymaydi va bekor qilish shart emas. App Store va Google Play orqali olingan obunani bekor qilish uchun aniq qadamlar.",
      metaTitle: "Telegram Premium obunasini bekor qilish — qo'llanma",
      metaDescription:
        "Telegram Premium obunasini qanday bekor qilish mumkin: Uzgets orqali olingan Premium avtomatik uzaymaydi, App Store va Google Play uchun aniq qadamlar bilan yo'riqnoma.",
      ogDescription:
        "Uzgets Premium avtomatik uzaymaydi. App Store va Google Play orqali olingan obunani bekor qilish qadamlari shu yerda.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: 'Telegram Premium avtomatik uzayadimi?', answer: "Bu qaysi kanaldan sotib olinganiga bog'liq. Uzgets orqali olingan Premium avtomatik uzaymaydi — bir martalik to'lov. App Store yoki Google Play orqali obuna sifatida olingan bo'lsa, siz bekor qilmaguningizcha avtomatik uzayveradi." },
        { question: "Uzgets orqali olingan Premium'ni bekor qilish kerakmi?", answer: "Yo'q. Bu bir martalik to'lov, Uzgets kartangizni saqlamaydi va muddat tugaganda qo'shimcha pul yechilmaydi. Premium shunchaki belgilangan kunda o'chadi." },
        { question: "iPhone'da Premium obunasini qanday bekor qilaman?", answer: "Sozlamalar > ismingiz (Apple ID) > Obunalar > Telegram Premium (yoki Telegram Messenger) > Obunani bekor qilish, so'ng tasdiqlang." },
        { question: "Android'da Premium obunasini qanday bekor qilaman?", answer: "Google Play ilovasi > profil belgisi > To'lovlar va obunalar > Obunalar > Telegram > Obunani bekor qilish." },
        { question: "Bekor qilsam Premium darhol o'chadimi?", answer: "Yo'q. Premium allaqachon to'langan davr oxirigacha to'liq ishlaydi, faqat keyingi muddatga pul yechilmaydi." },
        { question: "Bekor qilgandan keyin qayta yoqsam bo'ladimi?", answer: "Ha. Istalgan vaqt App Store yoki Google Play'dan qayta obuna bo'lish, yoki Uzgets orqali yangi bir martalik buyurtma berish mumkin." },
        { question: "Obunani bekor qilish uchun Telegram parolim kerakmi?", answer: "Yo'q. Bekor qilish to'liq Apple ID yoki Google akkaunt sozlamalarida amalga oshiriladi; Telegram paroli, SMS/login kodi yoki 2FA so'ralmaydi." },
      ],
      finalCtaHeading: "Yangi Premium muddati kerakmi?",
      finalCtaBody: `Eski obunani bekor qilish bilan bog'liq bo'lmagan holda, ${siteConfig.bot}'da 3, 6 yoki 12 oylikdan birini tanlab, bir martalik to'lov bilan darhol faollashtiring.`,
    },
    ru: {
      title: 'Как отменить подписку Telegram Premium?',
      description:
        'Premium, купленный через Uzgets, не продлевается автоматически — отменять его не нужно. Для подписки через App Store и Google Play — точные шаги отмены.',
      metaTitle: 'Как отменить подписку Telegram Premium',
      metaDescription:
        'Как отменить подписку Telegram Premium: Premium через Uzgets не продлевается автоматически, для App Store и Google Play — пошаговая инструкция по отмене.',
      ogDescription:
        'Premium через Uzgets не автопродлевается. Шаги отмены подписки для App Store и Google Play — здесь.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Telegram Premium продлевается автоматически?', answer: 'Зависит от канала покупки. Premium через Uzgets не продлевается автоматически — это разовая оплата. Если оформлен как подписка через App Store или Google Play, он продлевается, пока вы его не отмените.' },
        { question: 'Нужно ли отменять Premium, купленный через Uzgets?', answer: 'Нет. Это разовая оплата, Uzgets не хранит данные карты, и по окончании срока деньги повторно не списываются. Premium просто отключается в назначенный день.' },
        { question: 'Как отменить подписку Premium на iPhone?', answer: 'Настройки > ваше имя (Apple ID) > Подписки > Telegram Premium (или Telegram Messenger) > Отменить подписку, затем подтвердите.' },
        { question: 'Как отменить подписку Premium на Android?', answer: 'Приложение Google Play > значок профиля > Платежи и подписки > Подписки > Telegram > Отменить подписку.' },
        { question: 'Premium отключится сразу после отмены?', answer: 'Нет. Premium продолжает работать до конца уже оплаченного периода, просто за следующий период деньги не спишутся.' },
        { question: 'Можно ли снова включить Premium после отмены?', answer: 'Да. В любой момент можно оформить новую подписку через App Store или Google Play, либо сделать новый разовый заказ через Uzgets.' },
        { question: 'Нужен ли пароль Telegram для отмены подписки?', answer: 'Нет. Отмена полностью происходит в настройках Apple ID или аккаунта Google; пароль Telegram, SMS-код или 2FA не запрашиваются.' },
      ],
      finalCtaHeading: 'Нужен новый срок Premium?',
      finalCtaBody: `Независимо от старой подписки выберите 3, 6 или 12 месяцев в ${siteConfig.bot} и активируйте Premium разовой оплатой прямо сейчас.`,
    },
  },
}
