import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_BASE } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-gifts-sovgalar-nima-qanday-ishlaydi'
const TODAY = '2026-09-30'

function UzAnswerBox() {
  return (
    <p>
      <strong>Telegram Gifts</strong> — Telegram&apos;ning 2024-yil 5-oktabrda ishga tushgan
      rasmiy sovg&apos;a funksiyasi: boshqa foydalanuvchiga animatsion sovg&apos;a yuborasiz va
      uning narxi <strong>Telegram Stars</strong> bilan to&apos;lanadi. Sovg&apos;a uch turda
      bo&apos;ladi — oddiy, cheklangan (limited) va noyob kolleksion (collectible). Qabul
      qiluvchi sovg&apos;ani profilida ko&apos;rsatadi, belgilangan muddat ichida Stars&apos;ga
      aylantiradi yoki Stars to&apos;lab kolleksionga yangilaydi. Kolleksion sovg&apos;ani
      sotish, boshqaga o&apos;tkazish va TON blokcheyniga NFT sifatida chiqarish mumkin.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      <strong>Telegram Gifts</strong> — официальная функция подарков Telegram, запущенная 5
      октября 2024 года: вы отправляете другому пользователю анимированный подарок и платите за
      него <strong>Telegram Stars</strong>. Подарки бывают трёх типов — обычные, лимитированные
      (limited) и уникальные коллекционные (collectible). Получатель может показать подарок в
      профиле, в течение установленного срока обменять его на Stars или за Stars улучшить до
      коллекционного. Коллекционный подарок можно продать, передать другому или вывести в
      блокчейн TON как NFT.
    </p>
  )
}

type Row = { uz: string; ru: string }

const TYPE_ROWS: { type: Row; what: Row; convert: Row; trade: Row }[] = [
  {
    type: { uz: 'Oddiy', ru: 'Обычный' },
    what: { uz: "Cheksiz miqdorda chiqariladigan animatsion sovg'a", ru: 'Анимированный подарок без ограничения тиража' },
    convert: { uz: "Ha — belgilangan muddat ichida, xarid narxidan kam Stars", ru: 'Да — в течение установленного срока, Stars меньше цены покупки' },
    trade: { uz: "Yo'q (avval kolleksionga yangilash kerak)", ru: 'Нет (сначала нужно улучшить до коллекционного)' },
  },
  {
    type: { uz: 'Cheklangan (limited)', ru: 'Лимитированный (limited)' },
    what: { uz: "Tiraji belgilangan, bir kishiga sotib olish limiti bo'lishi mumkin; tugasa qayta chiqmaydi", ru: 'Тираж фиксирован, может быть лимит на одного покупателя; после распродажи не выпускается' },
    convert: { uz: "Ha — oddiy sovg'a kabi (auksiondan olinganlari bundan mustasno)", ru: 'Да — как обычный (кроме полученных на аукционе)' },
    trade: { uz: "Kolleksionga yangilangach — ha", ru: 'После улучшения до коллекционного — да' },
  },
  {
    type: { uz: 'Kolleksion (collectible)', ru: 'Коллекционный (collectible)' },
    what: { uz: "Tasodifiy model, fon va belgi hamda tartib raqamiga ega noyob nusxa", ru: 'Уникальный экземпляр со случайной моделью, фоном, символом и порядковым номером' },
    convert: { uz: "Yo'q", ru: 'Нет' },
    trade: { uz: "Ha — Telegram marketplace'da Stars'ga sotish, o'tkazish, TON'ga NFT sifatida chiqarish", ru: 'Да — продажа за Stars в маркетплейсе Telegram, передача, вывод в TON как NFT' },
  },
]

function TypesTable({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-3 text-left">{uz ? 'Turi' : 'Тип'}</th>
            <th className="px-4 py-3 text-left">{uz ? 'Nima bu' : 'Что это'}</th>
            <th className="px-4 py-3 text-left">{uz ? "Stars'ga aylantirish" : 'Обмен на Stars'}</th>
            <th className="px-4 py-3 text-left">{uz ? "Sotish / o'tkazish" : 'Продажа / передача'}</th>
          </tr>
        </thead>
        <tbody>
          {TYPE_ROWS.map((r) => (
            <tr key={r.type.uz} className="border-t border-[var(--border)]">
              <td className="px-4 py-3 font-medium">{r.type[lang]}</td>
              <td className="px-4 py-3">{r.what[lang]}</td>
              <td className="px-4 py-3">{r.convert[lang]}</td>
              <td className="px-4 py-3">{r.trade[lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const TIMELINE: { date: Row; event: Row }[] = [
  { date: { uz: '2024-yil 5-oktabr', ru: '5 октября 2024' }, event: { uz: "Gifts ishga tushdi: Stars bilan sovg'a yuborish, profildagi \"Gifts\" bo'limi, Stars'ga aylantirish", ru: 'Запуск Gifts: отправка подарков за Stars, вкладка «Gifts» в профиле, обмен на Stars' } },
  { date: { uz: '2025-yil 1-yanvar', ru: '1 января 2025' }, event: { uz: "Sovg'alarni kolleksionga yangilash (upgrade) imkoniyati", ru: 'Появилось улучшение подарков до коллекционных (upgrade)' } },
  { date: { uz: '2025-yil 24-yanvar', ru: '24 января 2025' }, event: { uz: "Kolleksion sovg'ani emoji-status sifatida kiyish, TON blokcheyniga chiqarish, kanallarga sovg'a yuborish", ru: 'Коллекционный подарок как эмодзи-статус, вывод в блокчейн TON, подарки каналам' } },
  { date: { uz: '2025-yil 8-may', ru: '8 мая 2025' }, event: { uz: "Ilova ichidagi Gift Marketplace: kolleksion sovg'ani Stars'ga sotish va sotib olish", ru: 'Gift Marketplace внутри приложения: продажа и покупка коллекционных подарков за Stars' } },
  { date: { uz: '2025-yil 19-noyabr', ru: '19 ноября 2025' }, event: { uz: "Yangi cheklangan sovg'alar uchun Stars bilan bir necha raundli auksion", ru: 'Многораундовые аукционы за Stars для новых лимитированных подарков' } },
]

function Timeline({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full min-w-[520px] text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-3 text-left">{uz ? 'Sana' : 'Дата'}</th>
            <th className="px-4 py-3 text-left">{uz ? "Nima qo'shildi" : 'Что добавили'}</th>
          </tr>
        </thead>
        <tbody>
          {TIMELINE.map((r) => (
            <tr key={r.date.uz} className="border-t border-[var(--border)]">
              <td className="whitespace-nowrap px-4 py-3 font-medium">{r.date[lang]}</td>
              <td className="px-4 py-3">{r.event[lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  const links = [
    { href: 'https://telegram.org/blog/gifts-verification-platform', title: 'Telegram — Gifts, Verification Platform and More (05.10.2024)', note: uz ? "Gifts ishga tushishi, yuborish, Stars'ga aylantirish, ismni yashirish" : 'запуск Gifts, отправка, обмен на Stars, скрытие имени' },
    { href: 'https://telegram.org/blog/collectible-gifts-and-more', title: 'Telegram — Collectible Gifts (01.01.2025)', note: uz ? 'kolleksionga yangilash' : 'улучшение до коллекционных' },
    { href: 'https://telegram.org/blog/wear-gifts-blockchain-and-more', title: 'Telegram — Wear Collectible Gifts, Move Gifts to the Blockchain (24.01.2025)', note: uz ? "emoji-status, TON'ga chiqarish, kanallarga sovg'a" : 'эмодзи-статус, вывод в TON, подарки каналам' },
    { href: 'https://telegram.org/blog/gift-marketplace-and-more', title: 'Telegram — Gift Marketplace (08.05.2025)', note: uz ? "ilova ichida sotish va sotib olish" : 'продажа и покупка внутри приложения' },
    { href: 'https://telegram.org/blog/live-stories-gift-auctions', title: 'Telegram — Auctions for Gifts (19.11.2025)', note: uz ? 'auksion mexanikasi' : 'механика аукционов' },
    { href: 'https://core.telegram.org/api/gifts', title: 'core.telegram.org/api/gifts', note: uz ? "texnik hujjat: turlar, aylantirish, o'tkazish to'lovi, sotuv komissiyasi, NFT eksport" : 'техдокументация: типы, обмен, плата за передачу, комиссия, экспорт NFT' },
  ]
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{uz ? 'Manbalar va tekshiruv' : 'Источники и проверка'}</div>
      <ul className="space-y-2 text-[var(--text-muted)]">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
              {l.title}
            </a>{' '}
            — {l.note}.
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "2026-yil 30-sentabrda tekshirilgan. Sovg'a narxlari, aylantirish muddati, o'tkazish to'lovi va marketplace komissiyasini Telegram o'zgartirib turadi — aniq qiymat ilovada ko'rsatiladi."
          : 'Проверено 30 сентября 2026 года. Цены подарков, срок обмена, плату за передачу и комиссию маркетплейса Telegram меняет — точные значения показаны в приложении.'}
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
          <li><a href="#nima" className="hover:text-[var(--primary)] hover:underline">Telegram Gifts nima?</a></li>
          <li><a href="#turlar" className="hover:text-[var(--primary)] hover:underline">Sovg&apos;a turlari: oddiy, cheklangan, kolleksion</a></li>
          <li><a href="#hayot-yoli" className="hover:text-[var(--primary)] hover:underline">Sovg&apos;a qanday ishlaydi: yuborishdan sotishgacha</a></li>
          <li><a href="#kolleksion" className="hover:text-[var(--primary)] hover:underline">Kolleksion sovg&apos;a va NFT</a></li>
          <li><a href="#tarix" className="hover:text-[var(--primary)] hover:underline">Gifts qanday rivojlandi (2024–2025)</a></li>
          <li><a href="#stars" className="hover:text-[var(--primary)] hover:underline">O&apos;zbekistondan sovg&apos;a uchun Stars qayerdan olinadi</a></li>
        </ol>
      </nav>

      <h2 id="nima">Telegram Gifts nima?</h2>
      <p>
        Telegram Gifts — Telegram ichidagi raqamli sovg&apos;alar tizimi. Siz do&apos;stingiz
        yoki kanal profiliga animatsion sovg&apos;a yuborasiz, u esa buni profilidagi{' '}
        <strong>&laquo;Gifts&raquo;</strong> bo&apos;limida ko&apos;rsatadi. Barcha sovg&apos;alar
        Telegram&apos;ning ichki valyutasi — <strong>Telegram Stars</strong> bilan sotib olinadi,
        shuning uchun Gifts&apos;dan foydalanish Stars balansidan boshlanadi.
      </p>
      <p>
        Oddiy &laquo;stiker&raquo;dan farqi — sovg&apos;aning <strong>qiymati bor</strong>: uni
        Stars&apos;ga qaytarib aylantirish, noyob kolleksion nusxaga yangilash va kolleksion
        bo&apos;lgach boshqa foydalanuvchiga sotish mumkin. Shu sabab Gifts bugun nafaqat
        tabrik vositasi, balki kolleksiya va savdo bozori hamdir.
      </p>

      <h2 id="turlar">Sovg&apos;a turlari: oddiy, cheklangan, kolleksion</h2>
      <p>
        Telegram&apos;ning texnik hujjatiga ko&apos;ra sovg&apos;alar uch turga bo&apos;linadi.
        Qaysi turdaligi sovg&apos;a bilan nima qila olishingizni belgilaydi:
      </p>
      <TypesTable lang="uz" />
      <InlineBotCTA lang="uz" text="Sovg'a uchun Stars kerakmi? Botda UzCard yoki Humo bilan bir necha daqiqada oling." />

      <h2 id="hayot-yoli">Sovg&apos;a qanday ishlaydi: yuborishdan sotishgacha</h2>
      <ol>
        <li>
          <strong>Yuborish.</strong> Qabul qiluvchi profilini oching →{' '}
          <strong>⋮ / ⋯ → Send a Gift</strong> → sovg&apos;ani tanlang. Narx balansingizdagi
          Stars&apos;dan yechiladi. Xohlasangiz ismingizni yashirasiz: qabul qiluvchi kimdan
          kelganini ko&apos;radi, boshqalar esa ko&apos;rmaydi. Qadam-baqadam yo&apos;riqnoma:{' '}
          <Link href="/blog/telegram-stars-bilan-sovga-yuborish" className="text-[var(--primary)] hover:underline">
            Telegram Stars bilan sovg&apos;a qanday yuboriladi
          </Link>.
        </li>
        <li>
          <strong>Qabul qilish.</strong> Qabul qiluvchi sovg&apos;ani profilda ko&apos;rsatishi,
          yashirishi yoki to&apos;plamlarga (collections) ajratishi mumkin.
        </li>
        <li>
          <strong>Stars&apos;ga aylantirish.</strong> Oddiy yoki cheklangan sovg&apos;ani
          belgilangan muddat ichida &laquo;buzib&raquo;, uning o&apos;rniga Stars olish mumkin —
          lekin Telegram hujjatiga ko&apos;ra bu summa <strong>xarid narxidan kam</strong>.
          Auksionda olingan sovg&apos;alarni aylantirib bo&apos;lmaydi.
        </li>
        <li>
          <strong>Kolleksionga yangilash.</strong> Stars to&apos;lab sovg&apos;ani noyob
          nusxaga aylantirasiz. Yuboruvchi yangilash narxini oldindan to&apos;lab qo&apos;yishi
          ham mumkin — shunda qabul qiluvchi uni bepul yangilaydi.
        </li>
        <li>
          <strong>Sotish yoki o&apos;tkazish.</strong> Kolleksion sovg&apos;ani profilda{' '}
          <strong>Sell</strong> tugmasi orqali Stars&apos;ga sotuvga qo&apos;yasiz yoki boshqa
          foydalanuvchiga o&apos;tkazasiz. Sotuvda Telegram komissiya ushlaydi, o&apos;tkazish esa
          Stars&apos;dagi to&apos;lov talab qilishi mumkin.
        </li>
      </ol>

      <h2 id="kolleksion">Kolleksion sovg&apos;a va NFT</h2>
      <p>
        Kolleksion sovg&apos;a — yangilangan sovg&apos;aning noyob nusxasi. Unga tasodifiy{' '}
        <strong>model, fon va belgi</strong> hamda tartib raqami beriladi, shuning uchun ayrim
        nusxalar boshqalaridan noyobroq va qimmatroq bo&apos;ladi. Telegram 2025-yil yanvarida
        20 dan ortiq sovg&apos;a uchun 1400 dan ortiq noyob ko&apos;rinish e&apos;lon qilgan.
      </p>
      <ul>
        <li><strong>Emoji-status:</strong> kolleksion sovg&apos;ani ismingiz yonida status sifatida &laquo;kiyish&raquo; mumkin.</li>
        <li><strong>Havola:</strong> har bir nusxaning t.me/nft/… ko&apos;rinishidagi alohida havolasi bor.</li>
        <li>
          <strong>TON blokcheyni:</strong> sovg&apos;ani Fragment orqali TON hamyoniga NFT
          sifatida chiqarish mumkin. Buning uchun Telegram akkauntida ikki bosqichli parol (2FA)
          yoqilgan bo&apos;lishi va eksport ruxsat etilgan sana o&apos;tgan bo&apos;lishi kerak.
        </li>
      </ul>
      <p>
        <strong>Muhim:</strong> kolleksion sovg&apos;a narxi bozorga bog&apos;liq va tushib
        ketishi mumkin. Uni investitsiya emas, kolleksiya sifatida ko&apos;ring va tashqi
        &laquo;sovg&apos;a sotuvchi&raquo; akkauntlarga oldindan pul o&apos;tkazmang — xavfsiz
        savdo Telegram&apos;ning o&apos;z marketplace&apos;ida bo&apos;ladi.
      </p>

      <h2 id="tarix">Gifts qanday rivojlandi (2024–2025)</h2>
      <Timeline lang="uz" />

      <h2 id="stars">O&apos;zbekistondan sovg&apos;a uchun Stars qayerdan olinadi</h2>
      <p>
        Har qanday sovg&apos;a — yuborish, yangilash yoki marketplace&apos;dan sotib olish —
        Stars talab qiladi. Telegram ichidagi Stars to&apos;ldirish (App Store / Google Play)
        va Fragment O&apos;zbekiston kartalari UzCard va Humo&apos;ni qabul qilmaydi. Shuning
        uchun Stars&apos;ni mahalliy karta bilan {siteConfig.bot} orqali olish qulay: eng kichik
        paket <strong>{formatNumber(STARS_BASE.amount)} ⭐ — {formatUzs(STARS_BASE.priceUzs)}</strong>.
        Qancha Stars kerakligini tanlashda{' '}
        <Link href="/blog/telegram-stars-eng-kichik-eng-katta-paket" className="text-[var(--primary)] hover:underline">
          paket tanlash qo&apos;llanmasi
        </Link>{' '}
        yordam beradi.
      </p>
      <p>
        Premium obunasini sovg&apos;a qilmoqchi bo&apos;lsangiz — bu boshqa mexanizm:{' '}
        <Link href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">
          Telegram Premium hadya qanday qilinadi
        </Link>.
      </p>
      <InlineBotCTA lang="uz" text="Stars balansini to'ldiring va birinchi sovg'angizni bugun yuboring." />

      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets Telegram Stars va Premium sotadi, sovg&apos;alarning o&apos;zini sotmaydi. Gifts mexanikasi Telegram&apos;ning rasmiy blogi va texnik hujjatiga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#nima" className="hover:text-[var(--primary)] hover:underline">Что такое Telegram Gifts?</a></li>
          <li><a href="#turlar" className="hover:text-[var(--primary)] hover:underline">Типы подарков: обычные, лимитированные, коллекционные</a></li>
          <li><a href="#hayot-yoli" className="hover:text-[var(--primary)] hover:underline">Как работает подарок: от отправки до продажи</a></li>
          <li><a href="#kolleksion" className="hover:text-[var(--primary)] hover:underline">Коллекционные подарки и NFT</a></li>
          <li><a href="#tarix" className="hover:text-[var(--primary)] hover:underline">Как развивались Gifts (2024–2025)</a></li>
          <li><a href="#stars" className="hover:text-[var(--primary)] hover:underline">Где взять Stars на подарки из Узбекистана</a></li>
        </ol>
      </nav>

      <h2 id="nima">Что такое Telegram Gifts?</h2>
      <p>
        Telegram Gifts — система цифровых подарков внутри Telegram. Вы отправляете другу или
        каналу анимированный подарок, а получатель показывает его во вкладке{' '}
        <strong>«Gifts»</strong> своего профиля. Все подарки покупаются за внутреннюю валюту
        Telegram — <strong>Telegram Stars</strong>, поэтому пользование Gifts начинается с
        баланса Stars.
      </p>
      <p>
        В отличие от обычного стикера, у подарка <strong>есть ценность</strong>: его можно
        обменять обратно на Stars, улучшить до уникального коллекционного экземпляра, а
        коллекционный — продать другому пользователю. Поэтому сегодня Gifts — это не только
        способ поздравить, но и рынок коллекционных предметов.
      </p>

      <h2 id="turlar">Типы подарков: обычные, лимитированные, коллекционные</h2>
      <p>
        По технической документации Telegram подарки делятся на три типа. От типа зависит, что
        с подарком можно делать:
      </p>
      <TypesTable lang="ru" />
      <InlineBotCTA lang="ru" text="Нужны Stars для подарка? Купите в боте за пару минут по UzCard или Humo." />

      <h2 id="hayot-yoli">Как работает подарок: от отправки до продажи</h2>
      <ol>
        <li>
          <strong>Отправка.</strong> Откройте профиль получателя →{' '}
          <strong>⋮ / ⋯ → Send a Gift</strong> → выберите подарок. Цена списывается со Stars на
          балансе. При желании скройте имя: получатель увидит, от кого подарок, остальные — нет.
          Пошаговая инструкция:{' '}
          <Link href="/ru/blog/telegram-stars-bilan-sovga-yuborish" className="text-[var(--primary)] hover:underline">
            Как отправить подарок за Telegram Stars
          </Link>.
        </li>
        <li>
          <strong>Получение.</strong> Получатель может показать подарок в профиле, скрыть его или
          разложить по коллекциям (collections).
        </li>
        <li>
          <strong>Обмен на Stars.</strong> Обычный или лимитированный подарок в течение
          установленного срока можно «разобрать» и получить Stars — но, по документации
          Telegram, <strong>меньше цены покупки</strong>. Подарки с аукциона обменять нельзя.
        </li>
        <li>
          <strong>Улучшение до коллекционного.</strong> За Stars подарок превращается в
          уникальный экземпляр. Отправитель может оплатить улучшение заранее — тогда получатель
          улучшит его бесплатно.
        </li>
        <li>
          <strong>Продажа или передача.</strong> Коллекционный подарок выставляется на продажу за
          Stars кнопкой <strong>Sell</strong> в профиле или передаётся другому пользователю. С
          продажи Telegram удерживает комиссию, передача может стоить Stars.
        </li>
      </ol>

      <h2 id="kolleksion">Коллекционные подарки и NFT</h2>
      <p>
        Коллекционный подарок — уникальный экземпляр улучшенного подарка. Он получает случайные{' '}
        <strong>модель, фон и символ</strong> и порядковый номер, поэтому одни экземпляры
        редче и дороже других. В январе 2025 года Telegram объявил более 1400 уникальных
        вариантов для более чем 20 подарков.
      </p>
      <ul>
        <li><strong>Эмодзи-статус:</strong> коллекционный подарок можно «надеть» как статус рядом с именем.</li>
        <li><strong>Ссылка:</strong> у каждого экземпляра есть своя ссылка вида t.me/nft/….</li>
        <li>
          <strong>Блокчейн TON:</strong> подарок можно вывести через Fragment в TON-кошелёк как
          NFT. Для этого в аккаунте Telegram должен быть включён облачный пароль (2FA) и должна
          наступить дата, с которой экспорт разрешён.
        </li>
      </ul>
      <p>
        <strong>Важно:</strong> цена коллекционного подарка зависит от рынка и может упасть.
        Относитесь к нему как к коллекции, а не к инвестиции, и не переводите деньги заранее
        сторонним «продавцам подарков» — безопасная сделка проходит во встроенном маркетплейсе
        Telegram.
      </p>

      <h2 id="tarix">Как развивались Gifts (2024–2025)</h2>
      <Timeline lang="ru" />

      <h2 id="stars">Где взять Stars на подарки из Узбекистана</h2>
      <p>
        Любое действие с подарком — отправка, улучшение или покупка в маркетплейсе — требует
        Stars. Пополнение Stars внутри Telegram (App Store / Google Play) и Fragment не
        принимают узбекские карты UzCard и Humo. Поэтому Stars удобно покупать локальной картой
        через {siteConfig.bot}: минимальный пакет{' '}
        <strong>{formatNumber(STARS_BASE.amount)} ⭐ — {formatUzs(STARS_BASE.priceUzs)}</strong>.
        Выбрать нужное количество поможет{' '}
        <Link href="/ru/blog/telegram-stars-eng-kichik-eng-katta-paket" className="text-[var(--primary)] hover:underline">
          гид по выбору пакета
        </Link>.
      </p>
      <p>
        Хотите подарить подписку Premium — это другой механизм:{' '}
        <Link href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi" className="text-[var(--primary)] hover:underline">
          как подарить Telegram Premium
        </Link>.
      </p>
      <InlineBotCTA lang="ru" text="Пополните баланс Stars и отправьте первый подарок уже сегодня." />

      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets продаёт Telegram Stars и Premium, сами подарки не продаёт. Механика Gifts основана на официальном блоге и технической документации Telegram.</p>
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
      title: "Telegram Gifts (sovg'alar) nima va qanday ishlaydi — to'liq qo'llanma 2026",
      description:
        "Telegram Gifts nima: oddiy, cheklangan va kolleksion sovg'alar farqi, Stars'ga aylantirish, kolleksionga yangilash, marketplace'da sotish va TON'ga NFT sifatida chiqarish — rasmiy manbalar asosida.",
      metaTitle: "Telegram Gifts nima va qanday ishlaydi — 2026 qo'llanma",
      metaDescription:
        "Telegram Gifts (sovg'alar) qanday ishlaydi: 3 turdagi sovg'a, Stars'ga aylantirish, kolleksion upgrade, sotish va NFT. Sovg'a uchun Stars'ni UzCard/Humo bilan @uzgetsbot'da oling.",
      ogDescription:
        "Telegram sovg'alari haqida hammasi: turlari, Stars'ga aylantirish, kolleksion sovg'alar, marketplace va NFT.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: 'Telegram Gifts nima?', answer: "Telegram'ning 2024-yil oktabrida ishga tushgan rasmiy sovg'a funksiyasi. Boshqa foydalanuvchi yoki kanalga animatsion sovg'a yuborasiz, narxi Telegram Stars bilan to'lanadi, qabul qiluvchi uni profilidagi Gifts bo'limida ko'rsatadi." },
        { question: "Telegram sovg'asi nimaga sotib olinadi?", answer: "Faqat Telegram Stars'ga. Shuning uchun avval Stars balansini to'ldirish kerak — O'zbekistondan buni UzCard yoki Humo bilan @uzgetsbot orqali qilish mumkin." },
        { question: "Olingan sovg'ani pulga yoki Stars'ga aylantirsa bo'ladimi?", answer: "Oddiy va cheklangan sovg'ani belgilangan muddat ichida Stars'ga aylantirish mumkin, lekin xarid narxidan kamroq Stars qaytadi. Kolleksion sovg'ani esa marketplace'da Stars'ga sotish mumkin." },
        { question: "Kolleksion (collectible) sovg'a nima?", answer: "Stars to'lab yangilangan sovg'aning noyob nusxasi: tasodifiy model, fon, belgi va tartib raqamiga ega. Uni emoji-status qilish, sotish, boshqaga o'tkazish va Fragment orqali TON blokcheyniga NFT sifatida chiqarish mumkin." },
        { question: "Sovg'a yuborish uchun Telegram Premium kerakmi?", answer: "Yo'q. Sovg'a yuborish uchun balansda yetarli Stars bo'lsa kifoya." },
        { question: "Sovg'ani anonim yuborsa bo'ladimi?", answer: "Ha, ismni yashirish mumkin. Qabul qiluvchi kimdan kelganini ko'radi, lekin sovg'a uning profilida turganda boshqalar yuboruvchini ko'rmaydi." },
        { question: "Kolleksion sovg'ani qayerda xavfsiz sotish mumkin?", answer: "Eng xavfsiz yo'l — Telegram ilovasi ichidagi marketplace: profilda sovg'ani ochib Sell tugmasini bosasiz va Stars'da narx qo'yasiz. Begona akkauntlarga oldindan pul yoki sovg'a o'tkazmang." },
      ],
      finalCtaHeading: "Sovg'a uchun Stars'ni hozir oling",
      finalCtaBody: `${siteConfig.bot}da Stars'ni ${formatNumber(STARS_BASE.amount)} ⭐ dan boshlab UzCard, Humo yoki Click bilan sotib oling va istalgan sovg'ani yuboring.`,
    },
    ru: {
      title: 'Telegram Gifts (подарки): что это и как работают — полное руководство 2026',
      description:
        'Что такое Telegram Gifts: разница между обычными, лимитированными и коллекционными подарками, обмен на Stars, улучшение, продажа в маркетплейсе и вывод в TON как NFT — по официальным источникам.',
      metaTitle: 'Telegram Gifts: что это и как работают — руководство 2026',
      metaDescription:
        'Как работают подарки Telegram Gifts: 3 типа подарков, обмен на Stars, улучшение до коллекционных, продажа и NFT. Stars для подарков — по UzCard/Humo в @uzgetsbot.',
      ogDescription:
        'Всё о подарках Telegram: типы, обмен на Stars, коллекционные подарки, маркетплейс и NFT.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Что такое Telegram Gifts?', answer: 'Официальная функция подарков Telegram, запущенная в октябре 2024 года. Вы отправляете пользователю или каналу анимированный подарок, платите Telegram Stars, а получатель показывает его во вкладке Gifts профиля.' },
        { question: 'За что покупаются подарки в Telegram?', answer: 'Только за Telegram Stars. Поэтому сначала нужно пополнить баланс Stars — из Узбекистана это можно сделать по UzCard или Humo через @uzgetsbot.' },
        { question: 'Можно ли обменять полученный подарок на Stars или деньги?', answer: 'Обычный и лимитированный подарок можно в течение установленного срока обменять на Stars, но вернётся меньше цены покупки. Коллекционный подарок можно продать за Stars в маркетплейсе.' },
        { question: 'Что такое коллекционный (collectible) подарок?', answer: 'Уникальный экземпляр подарка, улучшенного за Stars: со случайной моделью, фоном, символом и порядковым номером. Его можно сделать эмодзи-статусом, продать, передать и вывести через Fragment в блокчейн TON как NFT.' },
        { question: 'Нужен ли Telegram Premium, чтобы отправить подарок?', answer: 'Нет. Для отправки подарка достаточно Stars на балансе.' },
        { question: 'Можно ли отправить подарок анонимно?', answer: 'Да, имя можно скрыть. Получатель увидит, от кого подарок, но пока подарок в его профиле, другие отправителя не увидят.' },
        { question: 'Где безопасно продать коллекционный подарок?', answer: 'Самый безопасный путь — маркетплейс внутри приложения Telegram: откройте подарок в профиле, нажмите Sell и укажите цену в Stars. Не переводите деньги или подарки заранее незнакомым аккаунтам.' },
      ],
      finalCtaHeading: 'Купите Stars для подарков прямо сейчас',
      finalCtaBody: `В ${siteConfig.bot} купите Stars от ${formatNumber(STARS_BASE.amount)} ⭐ по UzCard, Humo или Click и отправьте любой подарок.`,
    },
  },
}
