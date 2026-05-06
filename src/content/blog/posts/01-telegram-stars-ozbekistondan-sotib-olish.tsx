import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_BASE, STARS_PACKS } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-ozbekistondan-sotib-olish'

const FEATURED_AMOUNTS = [50, 100, 500, 1000, 2500, 5000]

function UzAnswerBox() {
  return (
    <p>
      Telegram Stars — Telegram ekotizimi ichidagi raqamli to&apos;lov birligi. O&apos;zbekistondan
      sotib olish uchun ikkita yo&apos;l mavjud: ilova ichidagi xarid (Apple/Google orqali, xorijiy
      karta talab etadi) yoki <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      orqali UzCard, Humo, Click yoki Payme bilan to&apos;lash. Bot orqali xarid uch qadamda
      yakunlanadi: STARTni bosish, @username va miqdor kiritish, mahalliy karta orqali to&apos;lash.
      Stars eng kichik paket — {STARS_BASE.amount} ta ({formatUzs(STARS_BASE.priceUzs)}).
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Telegram Stars — внутренняя цифровая валюта экосистемы Telegram. Купить из Узбекистана
      можно двумя способами: через встроенную покупку в приложении (Apple/Google, нужна
      зарубежная карта) или через бот{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      с оплатой UzCard, Humo, Click или Payme. Покупка в боте занимает три шага: START,
      ввод @username и количества, оплата локальной картой. Минимальный пакет — {STARS_BASE.amount}{' '}
      звёзд ({formatUzs(STARS_BASE.priceUzs)}).
    </p>
  )
}

function PriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Miqdor' : 'Количество'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Narx' : 'Цена'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Sahifa' : 'Страница'}</th>
          </tr>
        </thead>
        <tbody>
          {FEATURED_AMOUNTS.map((amount) => {
            const pack = STARS_PACKS.find((p) => p.amount === amount)
            if (!pack) return null
            return (
              <tr key={pack.slug} className="border-t border-[var(--border)]">
                <td className="px-4 py-2 font-medium">{formatNumber(pack.amount)} ⭐</td>
                <td className="px-4 py-2">{formatUzs(pack.priceUzs)}</td>
                <td className="px-4 py-2">
                  <Link href={`/${lang}/stars/${pack.slug}`} className="text-[var(--primary)] hover:underline">
                    {lang === 'uz' ? "Batafsil →" : 'Подробнее →'}
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{lang === 'uz' ? 'Manbalar' : 'Источники'}</div>
      <ul className="space-y-1 text-[var(--text-muted)]">
        <li>
          <a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/telegram-stars
          </a>{' '}
          — {lang === 'uz' ? "Stars rasmiy e'lon" : 'официальный анонс Stars'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/stars
          </a>{' '}
          — {lang === 'uz' ? 'texnik hujjat' : 'техническая документация'}
        </li>
        <li>
          <a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/tos/stars
          </a>{' '}
          — {lang === 'uz' ? 'foydalanish shartlari' : 'условия использования'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="stars-nima">Telegram Stars nima?</h2>
      <p>
        Telegram Stars — Telegram ichidagi raqamli to&apos;lov birligi. Stars yordamida bot va
        mini-applarda raqamli mahsulot sotib olish, paid media uchun to&apos;lash, sovg&apos;a
        yuborish va premium emoji obunalariga to&apos;lov qilish mumkin. Stars sof Telegram
        ekosistemasida ishlaydi — uni boshqa platformalarga o&apos;tkazib bo&apos;lmaydi.
      </p>
      <p>
        Telegram&apos;ning rasmiy hujjatiga ko&apos;ra, Stars — yagona kafolatlangan ichki
        valyuta: balans akkauntga bog&apos;langan, yo&apos;qotishlar qaytarilmaydi, akkaunt
        o&apos;chirilsa balans yo&apos;qoladi.
      </p>

      <InlineBotCTA lang="uz" text="Stars hoziroq kerakmi? Bot orqali bir necha daqiqada bo'shab oling." />

      <h2 id="ozbekistondan-qanday">O&apos;zbekistondan Telegram Stars qanday sotib olinadi?</h2>
      <p>
        O&apos;zbekistondagi foydalanuvchi uchun ikkita asosiy yo&apos;l mavjud:
      </p>

      <h3 id="usul-1-ilova">1-usul: Telegram ilovasi orqali</h3>
      <p>
        Telegram&apos;ning iOS yoki Android ilovasida Stars bo&apos;limini tanlab, Apple Pay yoki
        Google Pay orqali to&apos;lash mumkin. Lekin bu yo&apos;lda <strong>xorijiy karta talab
        etiladi</strong>: O&apos;zbekistonda chiqarilgan UzCard yoki Humo bunda ishlamaydi, chunki
        Apple/Google to&apos;lov tizimlari mahalliy kartalarni qabul qilmaydi.
      </p>

      <h3 id="usul-2-bot">2-usul: {siteConfig.bot} orqali (mahalliy karta)</h3>
      <p>
        <Link href="/uz/stars" className="font-semibold text-[var(--primary)] hover:underline">
          Uzgets
        </Link>{' '}
        bu bo&apos;shliqni to&apos;ldiradi: Stars{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
        orqali UzCard, Humo, Click yoki Payme bilan sotib olinadi. To&apos;lov tasdiqlanganidan
        so&apos;ng Stars ko&apos;rsatilgan @username akkauntga avtomatik biriktiriladi.
      </p>

      <h2 id="qadam-baqadam">Qadam-baqadam: bot orqali sotib olish</h2>
      <ol>
        <li>
          <strong>Botga o&apos;ting.</strong> Telegram&apos;da{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          ni oching va START tugmasini bosing.
        </li>
        <li>
          <strong>Stars bo&apos;limini tanlang.</strong> Asosiy menyudan &quot;⭐ Stars&quot; ni
          tanlang.
        </li>
        <li>
          <strong>@username kiriting.</strong> Stars qaysi akkauntga biriktirilishini ko&apos;rsating
          — o&apos;zingizniki yoki sovg&apos;a sifatida boshqa odamniki.
        </li>
        <li>
          <strong>Miqdorni tanlang.</strong> {STARS_BASE.amount} dan boshlab. Eng ommabop
          paketlar: 50, 100, 500, 1000.
        </li>
        <li>
          <strong>To&apos;lov qiling.</strong> Bot ko&apos;rsatadigan kartaga{' '}
          <strong>aynan belgilangan summani</strong> UzCard/Humo/Payme orqali o&apos;tkazing yoki
          Click ilovasi orqali to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;lang.
        </li>
        <li>
          <strong>Stars akkauntga biriktiriladi.</strong> To&apos;lov tasdiqlangach, yulduzchalar
          ko&apos;rsatilgan akkauntga avtomatik o&apos;tadi.
        </li>
      </ol>

      <InlineBotCTA lang="uz" text="Qadamlarni o'qidingiz — endi botga o'tib bir necha daqiqada xarid qiling." />

      <h2 id="narxlar">Telegram Stars narxlari</h2>
      <p>
        Narx miqdorga proportsional — har Stars uchun bir xil baho. Eng kichik paket{' '}
        <strong>{STARS_BASE.amount} ta {formatUzs(STARS_BASE.priceUzs)}</strong>. Quyidagi
        jadvalda ommabop paketlar:
      </p>
      <PriceTable lang="uz" />
      <p>
        Barcha mavjud paketlar va to&apos;liq narxlar uchun{' '}
        <Link href="/uz/stars" className="font-semibold text-[var(--primary)] hover:underline">
          Stars sahifasi
        </Link>{' '}
        ga o&apos;ting.
      </p>

      <h2 id="qaysi-paket">Qaysi paket kim uchun?</h2>
      <ul>
        <li>
          <strong>50–100 ta:</strong> Bir-ikki bot/mini-app to&apos;lovi yoki kichik sovg&apos;a uchun.
        </li>
        <li>
          <strong>500–1000 ta:</strong> Premium emoji obunasi, paid media, kanalga sovg&apos;a yuborish uchun.
        </li>
        <li>
          <strong>2500+ ta:</strong> Faol foydalanuvchilar, biznes mini-app to&apos;lovlari va
          ko&apos;p marta sovg&apos;a yuborish uchun. Katta paket bilan kam buyurtma berasiz.
        </li>
      </ul>

      <InlineBotCTA lang="uz" text="Narxlarni ko'rdingizmi? Eng mos paketni tanlash uchun botga o'ting." />

      <h2 id="xavfsizlik">Xavfsizlik va kafolat</h2>
      <p>
        Stars to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram tomonidan akkauntga biriktiriladi —
        bot faqat to&apos;lov vositasi sifatida ishlaydi. @username kiritganingizda parol yoki
        kirish ma&apos;lumotlari talab etilmaydi: hech kim akkauntingizga kira olmaydi.
      </p>
      <p>
        Texnik nosozlik tufayli Stars yetkazilmasa, Uzgets to&apos;lovni to&apos;liq qaytaradi.
        Telegram&apos;ning o&apos;z qoidasiga ko&apos;ra esa, Stars sotib olingach{' '}
        <a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">
          Telegram tomonidan qaytarib berilmaydi
        </a>{' '}
        — bu rasmiy ToS shartidir.
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Xavfsizlik shartlari aniq — endi botda buyurtmangizni rasmiylashtiring." />

      <h2 id="muhim-eslatma">Muhim eslatmalar</h2>
      <ul>
        <li>
          <strong>Aynan summa:</strong> kartaga belgilangan summadan farq qiladigan miqdor
          o&apos;tkazsangiz, mahsulot avtomatik yetkazilmaydi — qo&apos;lda tekshirish kerak bo&apos;ladi.
        </li>
        <li>
          <strong>Akkaunt o&apos;chirilsa:</strong> Telegram qoidasiga ko&apos;ra, akkaunt
          o&apos;chirilsa Stars balansi qaytarib berilmaydi.
        </li>
        <li>
          <strong>Uchinchi shaxs:</strong> Stars boshqa Telegram foydalanuvchisiga sovg&apos;a
          sifatida yuborilishi mumkin — buyurtma vaqtida shu shaxsning @username&apos;ini kiriting.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="stars-nima">Что такое Telegram Stars?</h2>
      <p>
        Telegram Stars — внутренняя цифровая валюта Telegram. Звёздами можно оплачивать
        цифровые товары в ботах и mini-app, paid media, отправлять подарки и оплачивать
        подписки на премиум-эмодзи. Stars работают только внутри экосистемы Telegram —
        перевести их на другие платформы нельзя.
      </p>
      <p>
        По официальной документации Telegram, Stars — единая внутренняя валюта: баланс
        привязан к аккаунту, потери не возмещаются, при удалении аккаунта баланс пропадает.
      </p>

      <InlineBotCTA lang="ru" text="Stars нужны прямо сейчас? Купите через бот за пару минут." />

      <h2 id="ozbekistondan-qanday">Как купить Telegram Stars из Узбекистана?</h2>
      <p>Для пользователя из Узбекистана есть два основных способа:</p>

      <h3 id="usul-1-ilova">Способ 1: через приложение Telegram</h3>
      <p>
        В iOS или Android-приложении Telegram можно выбрать раздел Stars и оплатить через
        Apple Pay или Google Pay. Но в этом способе <strong>требуется зарубежная карта</strong>:
        выпущенные в Узбекистане UzCard или Humo здесь не работают, поскольку платёжные системы
        Apple/Google не принимают локальные карты.
      </p>

      <h3 id="usul-2-bot">Способ 2: через {siteConfig.bot} (локальная карта)</h3>
      <p>
        <Link href="/ru/stars" className="font-semibold text-[var(--primary)] hover:underline">
          Uzgets
        </Link>{' '}
        закрывает этот пробел: Stars покупаются через бот{' '}
        <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
        с оплатой UzCard, Humo, Click или Payme. После подтверждения оплаты Stars автоматически
        зачисляются на указанный @username.
      </p>

      <h2 id="qadam-baqadam">Пошагово: покупка через бот</h2>
      <ol>
        <li>
          <strong>Откройте бот.</strong> Зайдите в{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          в Telegram и нажмите START.
        </li>
        <li>
          <strong>Выберите раздел Stars.</strong> В главном меню — &quot;⭐ Stars&quot;.
        </li>
        <li>
          <strong>Введите @username.</strong> Укажите аккаунт, на который зачисляются Stars —
          свой или для подарка.
        </li>
        <li>
          <strong>Выберите количество.</strong> От {STARS_BASE.amount} штук. Популярные пакеты:
          50, 100, 500, 1000.
        </li>
        <li>
          <strong>Оплатите.</strong> Переведите <strong>точно указанную сумму</strong> на карту,
          которую покажет бот, через UzCard/Humo/Payme. Либо оплатите напрямую через Click.
        </li>
        <li>
          <strong>Stars зачислятся на аккаунт.</strong> После подтверждения оплаты звёзды
          автоматически попадают на указанный аккаунт.
        </li>
      </ol>

      <InlineBotCTA lang="ru" text="Шаги ясны — теперь зайдите в бот и оформите заказ за пару минут." />

      <h2 id="narxlar">Цены Telegram Stars</h2>
      <p>
        Цена пропорциональна количеству — стоимость каждой звезды одинаковая. Минимальный
        пакет — <strong>{STARS_BASE.amount} штук за {formatUzs(STARS_BASE.priceUzs)}</strong>.
        Популярные пакеты в таблице:
      </p>
      <PriceTable lang="ru" />
      <p>
        Полный список доступных пакетов и цен —{' '}
        <Link href="/ru/stars" className="font-semibold text-[var(--primary)] hover:underline">
          на странице Stars
        </Link>
        .
      </p>

      <h2 id="qaysi-paket">Какой пакет кому подходит?</h2>
      <ul>
        <li>
          <strong>50–100 штук:</strong> для одной-двух оплат в боте/mini-app или небольшого подарка.
        </li>
        <li>
          <strong>500–1000 штук:</strong> для подписки на премиум-эмодзи, paid media, отправки
          подарков на канал.
        </li>
        <li>
          <strong>2500+ штук:</strong> для активных пользователей, оплаты mini-app в бизнес-сценариях
          и регулярной отправки подарков. С большим пакетом нужно реже оформлять заказ.
        </li>
      </ul>

      <InlineBotCTA lang="ru" text="Цены посмотрели? Зайдите в бот, чтобы выбрать подходящий пакет." />

      <h2 id="xavfsizlik">Безопасность и гарантия</h2>
      <p>
        Stars зачисляются на аккаунт напрямую от Telegram — бот выступает только средством
        оплаты. При вводе @username не требуются пароль или данные для входа: никто не получает
        доступ к вашему аккаунту.
      </p>
      <p>
        При недоставке Stars из-за технического сбоя Uzgets возвращает оплату полностью.
        Сам Telegram при этом{' '}
        <a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">
          по своим правилам не возвращает Stars
        </a>{' '}
        после покупки — это официальное условие ToS.
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Условия безопасности понятны — оформите заказ в боте." />

      <h2 id="muhim-eslatma">Важные замечания</h2>
      <ul>
        <li>
          <strong>Точная сумма:</strong> при переводе суммы, отличной от указанной, заказ не
          доставится автоматически — потребуется ручная проверка.
        </li>
        <li>
          <strong>Удаление аккаунта:</strong> по правилам Telegram баланс Stars не возвращается
          при удалении аккаунта.
        </li>
        <li>
          <strong>Подарок:</strong> Stars можно отправить другому пользователю Telegram —
          укажите его @username при оформлении заказа.
        </li>
      </ul>
    </>
  )
}

const TODAY = '2026-05-06'

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'cta',
  locales: {
    uz: {
      title: "Telegram Stars O'zbekistondan qanday sotib olinadi",
      description:
        "Telegram Stars'ni O'zbekistondan UzCard, Humo, Click yoki Payme orqali sotib olish bo'yicha to'liq qo'llanma — bot orqali, qadam-baqadam, narxlar bilan.",
      metaTitle: "Telegram Stars O'zbekistondan qanday sotib olinadi — to'liq qo'llanma",
      metaDescription:
        "Telegram Stars'ni O'zbekistondan UzCard/Humo/Click bilan sotib olish — bot orqali 6 qadamda, narxlar va xavfsizlik shartlari. Eng kichik paket 50 ta yulduzcha.",
      ogDescription:
        "Telegram Stars'ni O'zbekistondan mahalliy karta bilan sotib olish — bot orqali 6 qadamda.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "Telegram Stars'ni O'zbekistondan qanday sotib olinadi?",
          answer:
            "Telegram ilovasida Apple/Google Pay orqali (xorijiy karta talab etadi) yoki @uzgetsbot orqali UzCard/Humo/Click/Payme bilan. Bot variantida buyurtma 6 qadamda yakunlanadi: START → Stars → @username → miqdor → to'lov → faollashish.",
        },
        {
          question: 'O‘zbek karta bilan to‘g‘ridan-to‘g‘ri Telegram’dan sotib olib bo‘ladimi?',
          answer:
            "Yo'q. Telegram ilovasi ichidagi xarid Apple Pay yoki Google Pay orqali ishlaydi va O'zbekistonda chiqarilgan UzCard/Humo bu tizimlarda qabul qilinmaydi. Mahalliy karta bilan sotib olish uchun @uzgetsbot kabi vositachi bot kerak bo'ladi.",
        },
        {
          question: 'Eng kichik Stars paketi nechta?',
          answer: `Uzgetsda eng kichik paket — ${STARS_BASE.amount} ta yulduzcha, narxi ${formatUzs(STARS_BASE.priceUzs)}. Bundan kattaroq paketlar mavjud: 75, 100, 150, 250, 500, 1000, 2500, 5000, 10 000.`,
        },
        {
          question: "Stars yetkazilmasa pul qaytariladimi?",
          answer:
            "Texnik nosozlik tufayli yetkazilmasa, Uzgets to'lovni to'liq qaytaradi. Lekin agar Stars akkauntga muvaffaqiyatli biriktirilgan bo'lsa, Telegram'ning rasmiy qoidasiga ko'ra ular qaytarib berilmaydi.",
        },
        {
          question: 'Boshqa odamga sovg‘a sifatida yuborib bo‘ladimi?',
          answer:
            "Ha. Buyurtma vaqtida o'zingiz xohlagan Telegram foydalanuvchisining @username'ini kiriting — Stars to'g'ridan-to'g'ri uning akkauntiga biriktiriladi.",
        },
        {
          question: 'Stars qancha vaqtda akkauntga keladi?',
          answer:
            "Odatda to'lov tasdiqlanganidan so'ng bir necha daqiqada. Bot avtomatik ishlaydi — qo'lda tekshirish kerak emas, ammo bank to'lovni qayta ishlash vaqti tufayli kechikish bo'lishi mumkin.",
        },
        {
          question: "Akkauntim o'chirilsa Stars qaytariladimi?",
          answer:
            "Telegram'ning rasmiy ToS qoidasiga ko'ra, akkaunt o'chirilsa Stars balansi yo'qoladi va qaytarilmaydi. Bu Telegram'ning umumiy qoidasi, vositachi bot bunga ta'sir qila olmaydi.",
        },
      ],
      finalCtaHeading: "Stars sotib olishga tayyormisiz?",
      finalCtaBody:
        "Botga kirib, kerakli miqdorni tanlang. To'lov tasdiqlangach, Stars akkauntga avtomatik biriktiriladi.",
    },
    ru: {
      title: 'Как купить Telegram Stars из Узбекистана',
      description:
        'Полное руководство по покупке Telegram Stars из Узбекистана через UzCard, Humo, Click или Payme — пошагово, через бот, с ценами.',
      metaTitle: 'Как купить Telegram Stars из Узбекистана — полное руководство',
      metaDescription:
        'Покупка Telegram Stars из Узбекистана через UzCard/Humo/Click — пошагово в боте, цены и условия безопасности. Минимальный пакет — 50 звёзд.',
      ogDescription: 'Покупка Telegram Stars из Узбекистана через локальную карту — пошагово.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Как купить Telegram Stars из Узбекистана?',
          answer:
            'Через приложение Telegram (Apple/Google Pay, нужна зарубежная карта) или через бот @uzgetsbot с оплатой UzCard/Humo/Click/Payme. В боте покупка занимает 6 шагов: START → Stars → @username → количество → оплата → активация.',
        },
        {
          question: 'Можно ли купить напрямую в Telegram локальной картой?',
          answer:
            'Нет. Встроенная покупка работает через Apple Pay или Google Pay, а UzCard/Humo, выпущенные в Узбекистане, в этих системах не принимаются. Для оплаты локальной картой нужен бот-посредник, например @uzgetsbot.',
        },
        {
          question: 'Какой минимальный пакет Stars?',
          answer: `В Uzgets минимальный пакет — ${STARS_BASE.amount} звёзд за ${formatUzs(STARS_BASE.priceUzs)}. Доступны и более крупные: 75, 100, 150, 250, 500, 1000, 2500, 5000, 10 000.`,
        },
        {
          question: 'Возвращаются ли деньги, если Stars не доставлены?',
          answer:
            'При недоставке из-за технического сбоя Uzgets возвращает оплату полностью. Но если Stars уже зачислены на аккаунт, по официальным правилам Telegram возврат не предусмотрен.',
        },
        {
          question: 'Можно ли отправить Stars в подарок другому пользователю?',
          answer:
            'Да. При оформлении заказа укажите @username нужного пользователя — Stars зачислятся напрямую на его аккаунт.',
        },
        {
          question: 'За какое время Stars приходят на аккаунт?',
          answer:
            'Обычно через несколько минут после подтверждения оплаты. Бот работает автоматически, ручная проверка не нужна, но возможны задержки из-за времени обработки платежа банком.',
        },
        {
          question: 'Если удалить аккаунт, вернутся ли Stars?',
          answer:
            'По официальным условиям Telegram баланс Stars при удалении аккаунта пропадает и не возвращается. Это общее правило Telegram, на него не может повлиять бот-посредник.',
        },
      ],
      finalCtaHeading: 'Готовы купить Stars?',
      finalCtaBody: 'Зайдите в бот, выберите нужное количество. После подтверждения оплаты Stars зачислятся на аккаунт автоматически.',
    },
  },
}
