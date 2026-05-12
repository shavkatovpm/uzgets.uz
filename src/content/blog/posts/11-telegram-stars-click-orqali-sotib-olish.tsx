import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_PACKS, STARS_BASE } from '@/config/products'
import { formatUzs, formatNumber } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-click-orqali-sotib-olish'
const TODAY = '2026-05-11'

const FEATURED_AMOUNTS = [50, 100, 500, 1000, 2500, 5000]

function UzAnswerBox() {
  return (
    <p>
      Telegram Stars&apos;ni Click ilovasi orqali O&apos;zbekistondan sotib olishning eng tez
      yo&apos;li —{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      botida buyurtma berib, to&apos;lov usuli sifatida <strong>Click</strong>ni tanlash.
      Click ilovasi avtomatik ochiladi, biometrik tasdiq bilan to&apos;lov ~10 soniyada
      yakunlanadi va Stars 2-5 daqiqada akkauntga biriktiriladi. Eng kichik paket —{' '}
      <strong>50 ⭐ uchun {formatUzs(STARS_BASE.priceUzs)}</strong>.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Самый быстрый способ купить Telegram Stars через приложение Click из Узбекистана — оформить
      заказ в боте{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      и выбрать <strong>Click</strong> как способ оплаты. Приложение Click открывается
      автоматически, оплата по биометрии завершается за ~10 секунд, и Stars зачисляются на
      аккаунт за 2-5 минут. Минимальный пакет —{' '}
      <strong>50 ⭐ за {formatUzs(STARS_BASE.priceUzs)}</strong>.
    </p>
  )
}

function StarsPriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  const rows = STARS_PACKS.filter((s) => FEATURED_AMOUNTS.includes(s.amount))
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Stars' : 'Stars'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Narx' : 'Цена'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? '1 ta uchun' : 'За 1 шт.'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Sahifa' : 'Страница'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((s) => {
            const perStar = s.priceUzs / s.amount
            return (
              <tr key={s.slug} className="border-t border-[var(--border)]">
                <td className="px-4 py-2 font-medium">{formatNumber(s.amount)} ⭐</td>
                <td className="px-4 py-2">{formatUzs(s.priceUzs)}</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">~{perStar.toFixed(2)} {lang === 'uz' ? "so'm" : 'сум'}</td>
                <td className="px-4 py-2">
                  <Link href={localePath(lang, `/stars/${s.slug}`)} className="text-[var(--primary)] hover:underline">
                    {lang === 'uz' ? 'Batafsil →' : 'Подробнее →'}
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

function ClickVsCardTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    feature: { uz: string; ru: string }
    click: { uz: string; ru: string }
    direct: { uz: string; ru: string }
  }
  const rows: Row[] = [
    {
      feature: { uz: 'Tezlik', ru: 'Скорость' },
      click: { uz: '~10 soniya', ru: '~10 секунд' },
      direct: { uz: '~30 soniya', ru: '~30 секунд' },
    },
    {
      feature: { uz: 'Karta raqamini kiritish', ru: 'Ввод номера карты' },
      click: { uz: 'Yo\'q (karta saqlangan)', ru: 'Нет (карта сохранена)' },
      direct: { uz: 'Ha, har safar', ru: 'Да, каждый раз' },
    },
    {
      feature: { uz: 'SMS-kod', ru: 'SMS-код' },
      click: { uz: 'Yo\'q (biometrik tasdiq)', ru: 'Нет (биометрия)' },
      direct: { uz: 'Ha, har safar', ru: 'Да, каждый раз' },
    },
    {
      feature: { uz: "Ilova kerak", ru: 'Нужно приложение' },
      click: { uz: 'Ha — Click', ru: 'Да — Click' },
      direct: { uz: 'Yo\'q — faqat karta', ru: 'Нет — только карта' },
    },
    {
      feature: { uz: 'Internet xaridlar sozlamasi', ru: 'Настройка интернет-покупок' },
      click: { uz: "Click ichida avtomatik", ru: 'Автоматически в Click' },
      direct: { uz: "Bankda alohida yoqilishi kerak", ru: 'Нужно включить в банке отдельно' },
    },
  ]

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Xususiyat' : 'Параметр'}</th>
            <th className="px-4 py-2 text-left font-semibold">Click</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'UzCard/Humo bevosita' : 'UzCard/Humo напрямую'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{r.feature[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.click[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.direct[lang]}</td>
            </tr>
          ))}
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
          <a href="https://click.uz/en" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            click.uz
          </a>{' '}
          — {lang === 'uz' ? 'Click SuperApp rasmiy sayti' : 'официальный сайт Click SuperApp'}
        </li>
        <li>
          <a href="https://core.telegram.org/bots/payments" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/bots/payments
          </a>{' '}
          — {lang === 'uz' ? 'Telegram Bot Payments API (rasmiy hujjat)' : 'Telegram Bot Payments API (официальная документация)'}
        </li>
        <li>
          <a href="https://telegram.org/blog/payments" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/payments
          </a>{' '}
          — {lang === 'uz' ? "Telegram'da to'lovlar haqida rasmiy blog" : 'официальный блог Telegram о платежах'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Narxlar 2026-yil may holatiga ko'ra. Click ilovasidagi sozlamalar bank/ilova versiyasiga qarab biroz farq qilishi mumkin."
          : 'Цены на май 2026 года. Настройки в Click могут немного отличаться в зависимости от банка и версии приложения.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="click-nima">Click nima va Stars sotib olishda nima uchun qulay?</h2>
      <p>
        Click — O&apos;zbekistondagi yetakchi mobil to&apos;lov platformasi (SuperApp).
        Foydalanuvchi UzCard yoki Humo kartasini ilovaga bog&apos;laydi, va keyin har safar
        karta raqami kiritmasdan, ilova orqali to&apos;laydi. To&apos;lov biometrik tasdiq
        (Face ID, barmoq izi yoki PIN) bilan amalga oshiriladi.
      </p>
      <p>
        Telegram Stars sotib olganda Click&apos;ning afzalligi — <strong>tezlik va qulaylik</strong>.
        Karta raqami va SMS-kod kiritish shart emas: bot Click ilovasini avtomatik ochib, to&apos;lov
        oynasini ko&apos;rsatadi. Tasdiqlasangiz, Stars 2-5 daqiqada akkauntga biriktiriladi.
      </p>
      <p>
        <strong>Eslatma:</strong> Click ilovasi UzCard/Humo orqali ishlaydi — Click&apos;ning
        o&apos;zining ham hisob raqami (kapchok) bor, lekin to&apos;lov manbai sifatida
        bog&apos;langan karta yoki Click hisobi ishlatiladi.
      </p>

      <InlineBotCTA lang="uz" text="Click bilan Stars 5 daqiqada — botda hozir buyurtma bering." />

      <h2 id="qadam-baqadam">Click orqali Stars — 5 qadam</h2>
      <ol>
        <li>
          Telegram&apos;da{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          ni oching, <strong>START</strong> tugmasini bosing.
        </li>
        <li>
          Asosiy menyudan <strong>&quot;⭐ Stars&quot;</strong> bo&apos;limini tanlang.
        </li>
        <li>
          Stars miqdorini tanlang ({STARS_BASE.amount} dan 10 000 gacha) va Stars qaysi
          akkauntga biriktirilishi kerak bo&apos;lgan{' '}
          <strong>@username</strong>ni kiriting (o&apos;zingiznikini yoki sovg&apos;a uchun
          boshqa odamniki).
        </li>
        <li>
          To&apos;lov usuli sifatida <strong>Click</strong>ni tanlang. Bot tomonidan Click
          ilovasi avtomatik ochiladi. Telefoningizda Click o&apos;rnatilgan bo&apos;lsa — to&apos;g&apos;ridan-to&apos;g&apos;ri
          to&apos;lov oynasi chiqadi.
        </li>
        <li>
          Click ilovasida summani tekshiring va biometrik tasdiq (Face ID / barmoq izi / PIN)
          bilan to&apos;lang. Tasdiqlangach Telegram&apos;ga qaytasiz va Stars 2-5 daqiqada
          akkauntga biriktiriladi.
        </li>
      </ol>
      <p>
        Yulduzchalar muvaffaqiyatli kelganini tekshirish: Telegram &gt; Settings &gt; My Profile &gt;
        Stars bo&apos;limi.
      </p>

      <h2 id="click-vs-bevosita">Click vs UzCard/Humo bevosita — qaysi tezroq?</h2>
      <ClickVsCardTable lang="uz" />
      <p>
        <strong>Click qulay:</strong> agar Click ilovasi telefoningizda bor bo&apos;lsa va karta
        bog&apos;langan bo&apos;lsa — 10 soniya ichida to&apos;lov. Karta raqami va SMS-kod
        kiritish shart emas.
      </p>
      <p>
        <strong>UzCard/Humo bevosita qulay:</strong> agar Click ilovasini o&apos;rnatmagan
        bo&apos;lsangiz — karta raqamini va SMS-kodni qo&apos;lda kiritib to&apos;lov qilasiz.
        Tezligi pastroq, lekin alohida ilova kerak emas.
      </p>

      <InlineBotCTA lang="uz" text="Click ilovangiz tayyormi? Botda Click'ni tanlang." />

      <h2 id="narxlar">Click orqali to&apos;laganda Stars narxlari</h2>
      <p>
        To&apos;lov usuli narxni o&apos;zgartirmaydi — Click, UzCard, Humo va Payme bir xil
        narxda ishlaydi. Eng mashhur paketlar:
      </p>
      <StarsPriceTable lang="uz" />
      <p>
        To&apos;liq ro&apos;yxat va har bir paket uchun batafsil sahifa{' '}
        <Link href="/stars" className="font-semibold text-[var(--primary)] hover:underline">
          /stars
        </Link>{' '}
        bo&apos;limida.
      </p>

      <h2 id="click-yoq-bolsa">Click ilovasi yo&apos;q bo&apos;lsa nima qilish kerak?</h2>
      <p>
        Click ilovasi <a href="https://play.google.com/store/apps/details?id=air.com.ssdsoftwaresolutions.clickuz" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Google Play</a>{' '}
        va App Store&apos;da bepul mavjud. O&apos;rnatish jarayoni:
      </p>
      <ol>
        <li>Ilovani o&apos;rnating va telefon raqamingiz bilan ro&apos;yxatdan o&apos;ting.</li>
        <li>
          Karta bog&apos;lang — UzCard yoki Humo karta raqami va amal qilish muddatini kiriting.
          O&apos;zbekiston Markaziy bankining 2026-yil aprel qoidalariga muvofiq endi karta
          bog&apos;lashda biometrik tasdiqlash (yuz tanish) ham talab qilinadi.
        </li>
        <li>To&apos;lovni biometrik tasdiqlash uchun Face ID, barmoq izi yoki PIN sozlang.</li>
      </ol>
      <p>
        Ilova o&apos;rnatishni xohlamasangiz — UzCard yoki Humo orqali to&apos;g&apos;ridan-to&apos;g&apos;ri
        to&apos;lash mumkin. Mavzu bo&apos;yicha alohida qo&apos;llanma:{' '}
        <Link href="/blog/telegram-premium-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">
          Premium UzCard/Humo bilan sotib olish
        </Link>{' '}
        (Stars uchun jarayon bir xil).
      </p>

      <h2 id="click-rad-etsa">Click to&apos;lovi rad etilsa nima qilish kerak?</h2>
      <p>
        Click to&apos;lovi rad etilsa, odatda quyidagi sabablarning biri:
      </p>
      <ol>
        <li>
          <strong>Click hisobida mablag&apos; yetmaydi.</strong> Click ilovasida hisob qoldig&apos;ini
          tekshiring va kerak bo&apos;lsa karta orqali Click hisobini to&apos;ldiring (yoki
          to&apos;g&apos;ridan-to&apos;g&apos;ri bog&apos;langan karta orqali to&apos;lash variantini tanlang).
        </li>
        <li>
          <strong>Karta bog&apos;lanmagan yoki muddati o&apos;tgan.</strong> Click ichida
          &quot;Kartalar&quot; bo&apos;limidan tekshiring va kerak bo&apos;lsa qayta bog&apos;lang.
        </li>
        <li>
          <strong>Biometrik tasdiq xato.</strong> Yuz tanish ishlamasa — PIN kodga qayting yoki
          ilovani qayta ochib uringining.
        </li>
        <li>
          <strong>Internet aloqasi yo&apos;q yoki kuchsiz.</strong> Click to&apos;lov uchun
          internet talab qiladi. Wi-Fi yoki mobil internet aloqasini tekshiring.
        </li>
      </ol>
      <p>
        Yechim topilmasa — UzCard yoki Humo orqali to&apos;g&apos;ridan-to&apos;g&apos;ri
        to&apos;lashga o&apos;ting (bot ichida boshqa to&apos;lov usulini tanlang) yoki{' '}
        <Link href="/aloqa" className="text-[var(--primary)] hover:underline">
          aloqa
        </Link>{' '}
        orqali murojaat qiling.
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Tayyormisiz? Botga o'ting va Click bilan to'lang." />

      <h2 id="muhim">Sotib olishdan oldin tekshiring</h2>
      <ul>
        <li>
          <strong>Click ilovasi yangilangan.</strong> Eski versiyalarda bot orqali to&apos;lov
          to&apos;g&apos;ri ochilmasligi mumkin. Google Play yoki App Store&apos;dan yangilang.
        </li>
        <li>
          <strong>@username aniq.</strong> Telefon raqami emas, username (masalan, @example).
          Sozlamalar &gt; Username bo&apos;limidan tasdiqlang.
        </li>
        <li>
          <strong>Faqat rasmiy bot.</strong> t.me/uzgetsbot — o&apos;xshash nomli botlar
          (uzgetbot, uzg3tsbot) firibgar klonlar. Saytdagi tugma orqali o&apos;ting.
        </li>
        <li>
          <strong>Click summani tekshiring.</strong> To&apos;lov oynasida ko&apos;rsatilgan summa
          buyurtma summasiga teng ekanligini ko&apos;ring — har safar tasdiqlashdan oldin tekshiring.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="click-nima">Что такое Click и почему удобно для покупки Stars?</h2>
      <p>
        Click — ведущая мобильная платёжная платформа Узбекистана (SuperApp). Пользователь
        привязывает карту UzCard или Humo к приложению и потом каждый раз платит без ввода номера
        карты — через приложение. Оплата подтверждается биометрией (Face ID, отпечатком пальца
        или PIN-кодом).
      </p>
      <p>
        При покупке Telegram Stars главное преимущество Click — <strong>скорость и удобство</strong>.
        Не нужно вводить номер карты и SMS-код: бот автоматически открывает приложение Click и
        показывает окно оплаты. После подтверждения Stars зачисляются на аккаунт за 2-5 минут.
      </p>
      <p>
        <strong>Уточнение:</strong> приложение Click работает через UzCard/Humo — у Click есть
        и свой счёт (кошелёк), но источником оплаты используется привязанная карта или счёт Click.
      </p>

      <InlineBotCTA lang="ru" text="С Click Stars за 5 минут — оформите заказ в боте." />

      <h2 id="qadam-baqadam">Stars через Click — 5 шагов</h2>
      <ol>
        <li>
          В Telegram откройте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>,
          нажмите <strong>START</strong>.
        </li>
        <li>
          В главном меню выберите <strong>«⭐ Stars»</strong>.
        </li>
        <li>
          Выберите количество Stars (от {STARS_BASE.amount} до 10 000) и введите{' '}
          <strong>@username</strong>, на который зачислятся Stars (свой или другого пользователя
          для подарка).
        </li>
        <li>
          В качестве способа оплаты выберите <strong>Click</strong>. Бот автоматически откроет
          приложение Click. Если оно установлено на телефоне — сразу появится окно оплаты.
        </li>
        <li>
          В Click проверьте сумму и подтвердите оплату биометрией (Face ID / отпечатком пальца /
          PIN). После подтверждения вы вернётесь в Telegram, и Stars зачислятся на аккаунт за
          2-5 минут.
        </li>
      </ol>
      <p>
        Проверить, что Stars пришли: Telegram &gt; Settings &gt; My Profile &gt; раздел Stars.
      </p>

      <h2 id="click-vs-bevosita">Click против UzCard/Humo напрямую — что быстрее?</h2>
      <ClickVsCardTable lang="ru" />
      <p>
        <strong>Click удобен:</strong> если приложение Click установлено и карта привязана —
        оплата за 10 секунд. Не нужно вводить номер карты и SMS-код.
      </p>
      <p>
        <strong>UzCard/Humo напрямую удобны:</strong> если не хотите устанавливать Click —
        вводите номер карты и SMS-код вручную. Скорость ниже, но отдельное приложение не нужно.
      </p>

      <InlineBotCTA lang="ru" text="Click готов? Выберите Click в боте." />

      <h2 id="narxlar">Цены на Stars при оплате через Click</h2>
      <p>
        Способ оплаты не меняет цену — Click, UzCard, Humo и Payme работают по одной и той же
        стоимости. Самые популярные пакеты:
      </p>
      <StarsPriceTable lang="ru" />
      <p>
        Полный список и страница каждого пакета —{' '}
        <Link href="/ru/stars" className="font-semibold text-[var(--primary)] hover:underline">
          /ru/stars
        </Link>
        .
      </p>

      <h2 id="click-yoq-bolsa">Что делать, если приложения Click нет?</h2>
      <p>
        Приложение Click бесплатно в{' '}
        <a href="https://play.google.com/store/apps/details?id=air.com.ssdsoftwaresolutions.clickuz" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Google Play</a>{' '}
        и App Store. Процесс установки:
      </p>
      <ol>
        <li>Установите приложение и зарегистрируйтесь по номеру телефона.</li>
        <li>
          Привяжите карту — введите номер карты UzCard или Humo и срок действия. По правилам
          Центробанка Узбекистана с апреля 2026 года при привязке карты требуется биометрическое
          подтверждение (распознавание лица).
        </li>
        <li>
          Настройте подтверждение оплаты биометрией — Face ID, отпечатком пальца или PIN.
        </li>
      </ol>
      <p>
        Если не хотите ставить приложение — можно оплатить напрямую UzCard или Humo. Подробное
        руководство:{' '}
        <Link href="/ru/blog/telegram-premium-uzcard-humo-bilan-sotib-olish" className="text-[var(--primary)] hover:underline">
          Premium UzCard/Humo — полное руководство
        </Link>{' '}
        (процесс для Stars аналогичен).
      </p>

      <h2 id="click-rad-etsa">Что делать, если Click отклонил оплату?</h2>
      <p>Если Click отклонил платёж, обычно одна из причин:</p>
      <ol>
        <li>
          <strong>Недостаточно средств в Click.</strong> Проверьте баланс в приложении Click и
          при необходимости пополните счёт с карты (или выберите оплату напрямую с привязанной карты).
        </li>
        <li>
          <strong>Карта не привязана или просрочена.</strong> В разделе «Карты» в Click проверьте
          и при необходимости привяжите заново.
        </li>
        <li>
          <strong>Биометрия не сработала.</strong> Если распознавание лица не работает —
          перейдите на PIN или перезапустите приложение.
        </li>
        <li>
          <strong>Нет интернета или слабая связь.</strong> Для оплаты Click нужен интернет.
          Проверьте Wi-Fi или мобильную связь.
        </li>
      </ol>
      <p>
        Если решение не находится — перейдите на оплату UzCard или Humo напрямую (выберите
        другой способ оплаты в боте) или свяжитесь через{' '}
        <Link href="/ru/aloqa" className="text-[var(--primary)] hover:underline">
          контакты
        </Link>
        .
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Готовы? Перейдите в бот и оплатите через Click." />

      <h2 id="muhim">Что проверить перед покупкой</h2>
      <ul>
        <li>
          <strong>Приложение Click обновлено.</strong> В старых версиях оплата через бот может
          открываться некорректно. Обновите в Google Play или App Store.
        </li>
        <li>
          <strong>@username точный.</strong> Не номер телефона, а username (например, @example).
          Подтвердите в Настройках &gt; Username.
        </li>
        <li>
          <strong>Только официальный бот.</strong> t.me/uzgetsbot — похожие имена (uzgetbot,
          uzg3tsbot) — мошеннические клоны. Переходите по кнопке с сайта.
        </li>
        <li>
          <strong>Сумма в Click совпадает.</strong> В окне оплаты убедитесь, что сумма равна
          сумме заказа — проверяйте перед каждым подтверждением.
        </li>
      </ul>
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
      title: "Telegram Stars Click orqali sotib olish — to'liq qo'llanma 2026",
      description:
        "Telegram Stars'ni Click ilovasi orqali sotib olish: biometrik tasdiq bilan 10 soniyada to'lov, Click vs UzCard/Humo taqqoslama, narxlar va Click rad etilganda yechimi.",
      metaTitle: "Telegram Stars Click orqali sotib olish 2026",
      metaDescription:
        "Click ilovasi orqali Telegram Stars sotib olish — botda 5 qadam, biometrik tasdiq, 10 soniyalik to'lov. 50 ⭐ uchun 11 000 so'm. Click vs karta taqqoslama, xatoliklar yechimi.",
      ogDescription:
        "Telegram Stars Click ilovasi orqali — eng tez to'lov yo'li. Qadamlar, taqqoslama va xatoliklar.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Click orqali Telegram Stars sotib olish mumkinmi?',
          answer:
            "Ha. @uzgetsbot ichida buyurtma rasmiylashtirilganda to'lov usuli sifatida Click'ni tanlash mumkin. Bot Click ilovasini avtomatik ochadi, siz biometrik tasdiq bilan to'lovni yakunlaysiz va Stars 2-5 daqiqada akkauntga biriktiriladi.",
        },
        {
          question: "Click bilan to'lash karta orqali to'lashdan tez ekanmi?",
          answer:
            "Ha, ~3 marta tez. Click bilan to'lov ~10 soniyada yakunlanadi (biometrik tasdiq), karta orqali to'g'ridan-to'g'ri to'lash ~30 soniya oladi (karta raqami + SMS-kod kiritish kerak).",
        },
        {
          question: "Click bilan to'laganda Stars narxi qimmatroqmi?",
          answer:
            "Yo'q. To'lov usuli narxni o'zgartirmaydi — Click, UzCard, Humo va Payme bir xil narxda ishlaydi. 50 ⭐ uchun 11 000 so'm, 100 ⭐ uchun 22 000 so'm va h.k.",
        },
        {
          question: 'Click ilovasini o\'rnatmasdan to\'lay olamanmi?',
          answer:
            "Ha. Bot UzCard, Humo va Payme'ni ham qabul qiladi — Click majburiy emas. UzCard yoki Humo orqali to'g'ridan-to'g'ri to'lash mumkin (karta raqami + SMS-kod) yoki Payme ilovasi orqali to'lash mumkin.",
        },
        {
          question: 'Click karta bog\'lash uchun biometrik tasdiq talab qiladi — bu nima?',
          answer:
            "O'zbekiston Markaziy bankining 2026-yil aprel qoidalariga muvofiq, kartani Click ilovasiga bog'lashda endi yuz tanish (liveness detection) talab qilinadi. Bu xavfsizlik talabi — sizning shaxsingiz tasdiqlanadi. Bir marta o'tasiz, keyingi to'lovlarda har safar takror talab qilinmaydi.",
        },
        {
          question: "Click bilan to'lov rad etilsa pul yo'qoladimi?",
          answer:
            "Yo'q. To'lov tasdiqlanmasa pul olinmaydi. Agar pul olinib, keyin xato bo'lsa — to'lov avtomatik qaytariladi (odatda 1-3 ish kuni). Bot ichidagi qo'llab-quvvatlash menyusi orqali tekshirsangiz holatni ko'rsatadi.",
        },
        {
          question: "Click hisobida mablag' yetmaydi — to'lay olamanmi?",
          answer:
            "Ha. Click ichida ikki manba bor: Click hisobi (kapchok) va bog'langan karta. Hisobda mablag' yetmasa, to'lov bog'langan kartadan to'g'ridan-to'g'ri olinadi. Yoki Click hisobini avval kartadan to'ldirib, keyin to'lov qilishingiz mumkin.",
        },
        {
          question: "Stars qancha vaqtda akkauntga keladi?",
          answer:
            "Click bilan to'lov tasdiqlangach 2-5 daqiqada akkauntga biriktiriladi. To'lov tizimi sekinlashsa 10-15 daqiqagacha cho'ziladi. Telegram > Settings > My Profile > Stars bo'limidan ko'rishingiz mumkin.",
        },
      ],
      finalCtaHeading: "Click bilan Stars sotib olishga tayyormisiz?",
      finalCtaBody:
        "Botga kiring, Stars miqdorini tanlang va Click bilan biometrik tasdiq orqali to'lang. Yulduzchalar akkauntga 2-5 daqiqada biriktiriladi.",
    },
    ru: {
      title: 'Купить Telegram Stars через Click — полное руководство 2026',
      description:
        'Покупка Telegram Stars через приложение Click: оплата биометрией за 10 секунд, Click против UzCard/Humo, цены и решение ошибок Click.',
      metaTitle: 'Купить Telegram Stars через Click 2026',
      metaDescription:
        'Telegram Stars через Click — 5 шагов в боте, биометрия, оплата за 10 секунд. 50 ⭐ за 11 000 сум. Сравнение Click с картой и решение ошибок.',
      ogDescription:
        'Telegram Stars через Click — самый быстрый способ оплаты. Шаги, сравнение и устранение ошибок.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Можно ли купить Telegram Stars через Click?',
          answer:
            'Да. При оформлении заказа в @uzgetsbot можно выбрать Click как способ оплаты. Бот автоматически откроет приложение Click, вы подтвердите оплату биометрией, и Stars зачислятся на аккаунт за 2-5 минут.',
        },
        {
          question: 'Click быстрее, чем оплата напрямую с карты?',
          answer:
            'Да, примерно в 3 раза. Оплата через Click — ~10 секунд (биометрия), оплата картой напрямую — ~30 секунд (нужно ввести номер карты и SMS-код).',
        },
        {
          question: 'Через Click Stars стоят дороже?',
          answer:
            'Нет. Способ оплаты не меняет цену — Click, UzCard, Humo и Payme работают по одной и той же стоимости. 50 ⭐ за 11 000 сум, 100 ⭐ за 22 000 сум и т. д.',
        },
        {
          question: 'Могу ли я оплатить без установки Click?',
          answer:
            'Да. Бот также принимает UzCard, Humo и Payme — Click не обязателен. Можно оплатить UzCard или Humo напрямую (номер карты + SMS-код) или через приложение Payme.',
        },
        {
          question: 'Click требует биометрию при привязке карты — что это?',
          answer:
            'По правилам Центробанка Узбекистана с апреля 2026 года при привязке карты в Click требуется распознавание лица (liveness detection). Это требование безопасности — подтверждается ваша личность. Проходите один раз, при каждой оплате не требуется заново.',
        },
        {
          question: 'Если Click отклонил оплату — потеряются ли деньги?',
          answer:
            'Нет. Если оплата не подтверждена — деньги не списываются. Если списались и затем возникла ошибка — оплата возвращается автоматически (обычно 1-3 рабочих дня). Через меню поддержки в боте можно проверить статус.',
        },
        {
          question: 'На счёте Click не хватает средств — могу ли оплатить?',
          answer:
            'Да. В Click есть два источника: счёт Click (кошелёк) и привязанная карта. Если на счёте не хватает, оплата спишется напрямую с привязанной карты. Или можно сначала пополнить счёт Click с карты и потом оплатить.',
        },
        {
          question: 'Через сколько Stars зачисляются на аккаунт?',
          answer:
            'После подтверждения оплаты Click — за 2-5 минут. Если платёжная система тормозит, может растянуться до 10-15 минут. Проверить можно в Telegram > Settings > My Profile > раздел Stars.',
        },
      ],
      finalCtaHeading: 'Готовы купить Stars через Click?',
      finalCtaBody:
        'Зайдите в бот, выберите количество Stars и оплатите через Click с биометрическим подтверждением. Звёзды зачислятся на аккаунт за 2-5 минут.',
    },
  },
}
