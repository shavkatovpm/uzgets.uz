import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-ozbekistondan-sotib-olish'
const TODAY = '2026-05-08'

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium&apos;ni O&apos;zbekistondan sotib olishning eng amaliy yo&apos;li —{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      orqali UzCard, Humo, Click yoki Payme bilan to&apos;lash. Eng arzon paket{' '}
      <strong>3 oylik 168 000 so&apos;m</strong>, 6 oylik 228 000, 12 oylik 408 000 so&apos;m.
      Botda START &gt; @username &gt; muddat &gt; mahalliy karta — odatda 2-5 daqiqada akkauntga
      biriktiriladi. Fragment, App Store yoki rasmiy @PremiumBot O&apos;zbek kartani qabul
      qilmaydi, shuning uchun mahalliy bot — amaliy yagona yo&apos;l.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Самый практичный способ купить Telegram Premium из Узбекистана — через бот{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      с оплатой UzCard, Humo, Click или Payme. Самый дешёвый пакет —{' '}
      <strong>3 месяца за 168 000 сум</strong>, 6 месяцев — 228 000, 12 месяцев — 408 000.
      В боте: START &gt; @username &gt; срок &gt; локальная карта — обычно за 2-5 минут
      зачисляется на аккаунт. Fragment, App Store и официальный @PremiumBot узбекские карты
      не принимают, поэтому локальный бот — практически единственный путь.
    </p>
  )
}

function PremiumPriceTable({ lang }: { lang: 'uz' | 'ru' }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Muddat' : 'Срок'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Narx' : 'Цена'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Bir oyga' : 'В месяц'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Sahifa' : 'Страница'}</th>
          </tr>
        </thead>
        <tbody>
          {PREMIUM_PERIODS.map((p) => (
            <tr key={p.slug} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{p.months} {lang === 'uz' ? 'oy' : 'мес.'}</td>
              <td className="px-4 py-2">{formatUzs(p.priceUzs)}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">~{formatUzs(p.perMonthHint)}</td>
              <td className="px-4 py-2">
                <Link href={`/${lang}/premium/${p.slug}`} className="text-[var(--primary)] hover:underline">
                  {lang === 'uz' ? "Batafsil →" : 'Подробнее →'}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PathsTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    name: string
    works: 'yes' | 'no'
    payment: { uz: string; ru: string }
    note: { uz: string; ru: string }
  }
  const rows: Row[] = [
    {
      name: 'Uzgets',
      works: 'yes',
      payment: { uz: 'UzCard / Humo / Click / Payme', ru: 'UzCard / Humo / Click / Payme' },
      note: {
        uz: "Mahalliy karta to'g'ridan-to'g'ri ishlaydi.",
        ru: 'Локальная карта работает напрямую.',
      },
    },
    {
      name: '@PremiumBot (Telegram rasmiy)',
      works: 'no',
      payment: { uz: 'Visa / Mastercard / crypto', ru: 'Visa / Mastercard / крипто' },
      note: {
        uz: "O'zbek banklari kartasi qabul qilinmaydi.",
        ru: 'Узбекские банковские карты не принимаются.',
      },
    },
    {
      name: 'Fragment',
      works: 'no',
      payment: { uz: 'TON crypto / xorijiy karta', ru: 'TON / зарубежная карта' },
      note: {
        uz: "UzCard/Humo bloklangan; faqat crypto orqali kirish mumkin.",
        ru: 'UzCard/Humo заблокированы; вход только через крипто.',
      },
    },
    {
      name: 'App Store / Google Play',
      works: 'no',
      payment: { uz: 'Apple ID / Google Play balans', ru: 'Apple ID / баланс Google Play' },
      note: {
        uz: "O'zbek kartalar Apple/Google ichidagi xarid uchun qabul qilinmaydi.",
        ru: 'Узбекские карты для in-app покупки не принимаются.',
      },
    },
  ]

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Yo‘l' : 'Путь'}</th>
            <th className="px-4 py-2 text-left font-semibold">
              {lang === 'uz' ? "O'zbek karta" : 'Узб. карта'}
            </th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? "To'lov" : 'Оплата'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Izoh' : 'Примечание'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const isUzgets = r.name === 'Uzgets'
            return (
              <tr key={r.name} className={`border-t border-[var(--border)] ${isUzgets ? 'bg-[var(--primary)]/5' : ''}`}>
                <td className="px-4 py-2 font-medium">{r.name}</td>
                <td className="px-4 py-2">
                  {r.works === 'yes' ? (
                    <span className="rounded-full bg-[var(--primary)] px-2 py-0.5 text-xs font-semibold text-white">
                      {lang === 'uz' ? 'Ishlaydi' : 'Работает'}
                    </span>
                  ) : (
                    <span className="rounded-full bg-[var(--border)] px-2 py-0.5 text-xs font-semibold text-[var(--text-muted)]">
                      {lang === 'uz' ? 'Ishlamaydi' : 'Не работает'}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 text-[var(--text-muted)]">{r.payment[lang]}</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">{r.note[lang]}</td>
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
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/faq_premium
          </a>{' '}
          — {lang === 'uz' ? 'Telegram Premium rasmiy FAQ' : 'официальный FAQ Telegram Premium'}
        </li>
        <li>
          <a href="https://fragment.com/premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            fragment.com/premium
          </a>{' '}
          — {lang === 'uz' ? "Fragment Premium sahifasi (faqat TON / xorijiy karta)" : 'страница Fragment Premium (только TON / зарубежная карта)'}
        </li>
        <li>
          <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            t.me/PremiumBot
          </a>{' '}
          — {lang === 'uz' ? "Telegram'ning rasmiy Premium boti" : 'официальный Premium-бот Telegram'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Narxlar 2026-yil may holatiga ko'ra. Yangilanishlarda sahifa qayta tekshiriladi."
          : 'Цены на май 2026 года. При обновлениях страница будет пересмотрена.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="oson-yol">O&apos;zbekistondan Telegram Premium qanday sotib olinadi?</h2>
      <p>
        O&apos;zbek karta egasi uchun amaliy yo&apos;l bitta — mahalliy bot orqali. Aksariyat
        rasmiy yo&apos;llar (App Store, Google Play, Fragment, hatto Telegram&apos;ning o&apos;z
        @PremiumBot&apos;i) UzCard yoki Humo&apos;ni qabul qilmaydi: ular Visa/Mastercard, Apple
        ID balansi yoki TON crypto talab qiladi. Shuning uchun ko&apos;pchilik foydalanuvchi
        @uzgetsbot kabi mahalliy vositachi orqali to&apos;laydi.
      </p>
      <PathsTable lang="uz" />
      <p>
        Quyidagi qadamlar — botda buyurtmani 5 daqiqada yakunlash uchun:
      </p>

      <InlineBotCTA lang="uz" text="Premium 3 oylik 168 000 so'mga — botda buyurtmangizni hozir rasmiylashtiring." />

      <h2 id="qadam-baqadam">5 qadamda Premium sotib olish</h2>
      <ol>
        <li>
          Telegram&apos;da{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          ni oching va <strong>START</strong> tugmasini bosing.
        </li>
        <li>
          Asosiy menyudan <strong>&quot;💎 Premium&quot;</strong> bo&apos;limini tanlang.
        </li>
        <li>
          Premium qaysi akkauntga biriktirilishini ko&apos;rsating — o&apos;zingiz yoki
          sovg&apos;a sifatida boshqa <strong>@username</strong>. Telefon raqami emas, faqat
          username kerak.
        </li>
        <li>
          Muddatni tanlang: <strong>3 oy</strong> (168 000 so&apos;m), <strong>6 oy</strong>{' '}
          (228 000) yoki <strong>12 oy</strong> (408 000).
        </li>
        <li>
          UzCard, Humo, Click yoki Payme orqali to&apos;lang. Tasdiq kelgach, Premium 2-5
          daqiqada akkauntga biriktiriladi — qo&apos;lda faollashtirish kerak emas.
        </li>
      </ol>
      <p>
        Faollashganini tekshirish:{' '}
        <Link href="/blog/telegram-premium-qanday-faollashtiriladi" className="text-[var(--primary)] hover:underline">
          Telegram Premium qanday faollashtiriladi
        </Link>
        .
      </p>

      <h2 id="narxlar">Premium narxlari va qaysi paket foydaliroq?</h2>
      <PremiumPriceTable lang="uz" />
      <p>
        12 oylik paket bir oyiga taxminan <strong>34 000 so&apos;m</strong>ni tashkil qiladi —
        bu 3 oyligidan ~40% arzon. Agar Premium&apos;ni doimiy ishlatish niyatingiz bo&apos;lsa,
        12 oylik eng tejamli. Birinchi marta sinab ko&apos;rish uchun 3 oylik mos. 6 oylik —
        oraliq variant, eng mashhur tarif.
      </p>
      <p>
        Batafsil paket sahifasi:{' '}
        <Link href="/premium" className="font-semibold text-[var(--primary)] hover:underline">
          /premium
        </Link>
        .
      </p>

      <InlineBotCTA lang="uz" text="12 oylik 408 000 so'm — bir oyiga ~34 000 so'm. Botda buyurtma bering." />

      <h2 id="qaysi-tolov">Qaysi to&apos;lov usuli mos? UzCard, Humo, Click, Payme</h2>
      <p>
        @uzgetsbot to&apos;rtta mahalliy to&apos;lov tizimini qo&apos;llab-quvvatlaydi. Ular
        teng ishlaydi — qaysi karta yoki ilova qulay bo&apos;lsa, shuni tanlang:
      </p>
      <ul>
        <li>
          <strong>UzCard</strong> — milliy plastik tizim, ko&apos;p banklarda standart.
          To&apos;g&apos;ridan-to&apos;g&apos;ri karta raqami orqali to&apos;lov.
        </li>
        <li>
          <strong>Humo</strong> — UzCard&apos;ning muqobili, ko&apos;plab banklarda mavjud.
          Worker mexanizmi bir xil.
        </li>
        <li>
          <strong>Click</strong> — mobil ilova orqali tezkor to&apos;lov; karta ma&apos;lumotini
          qo&apos;lda kiritmaslik mumkin.
        </li>
        <li>
          <strong>Payme</strong> — yana bir mobil to&apos;lov platformasi; biometrik tasdiq
          bilan ishlaydi.
        </li>
      </ul>
      <p>
        To&apos;rttala usul ham bir xil narxga, qo&apos;shimcha komissiyasiz. Bot @username va
        muddatni olgach to&apos;lov ma&apos;lumotini ko&apos;rsatadi (karta raqami yoki
        Click/Payme link), siz aynan o&apos;sha summani o&apos;tkazasiz va bot avtomatik tekshirib
        Premium&apos;ni biriktiradi. Karta ma&apos;lumotlari Uzgets&apos;da saqlanmaydi.
      </p>

      <h2 id="sovga">Premium&apos;ni sovg&apos;a qilish — boshqa @username uchun</h2>
      <p>
        Botda buyurtma berishda <em>o&apos;zingizning</em> akkauntingizni emas, har qanday boshqa
        Telegram foydalanuvchisining @username&apos;ini kiritish mumkin. Bu kishida Premium
        kelganligi haqida bildirishnoma chiqadi va u darhol yangi imkoniyatlardan foydalana
        boshlaydi. Sovg&apos;a qilingan obuna har qanday muddatda — 3, 6 yoki 12 oylik bo&apos;lishi
        mumkin.
      </p>
      <p>
        Tug&apos;ilgan kun, Yangi yil yoki shunchaki minnatdorchilik uchun mos. Pul o&apos;tkazma
        qilishdan ko&apos;ra Premium sovg&apos;a — texnologiyaga moyil odamlar uchun yanada
        qadrli.
      </p>

      <InlineBotCTA lang="uz" text="Yaqin do'stingizga Premium sovg'a qiling — botda @username kiriting." />

      <h2 id="boshqa-yollar">Boshqa yo&apos;llar nega ishlamaydi?</h2>
      <p>
        Foydalanuvchilar tez-tez quyidagilarni sinab ko&apos;rishadi va to&apos;xtab qolishadi —
        sababini bilib qo&apos;yish foydali:
      </p>
      <ul>
        <li>
          <strong>App Store / Google Play ichidagi xarid:</strong> ilovada &quot;Subscribe&quot;
          tugmasini bossangiz, to&apos;lov UzCard/Humo orqali rad etiladi. Apple ID yoki Google
          Play balansiga xorijiy karta orqali to&apos;ldirib, undan to&apos;lash kerak — bu
          texnik jihatdan murakkab va qimmatroq tushadi.
        </li>
        <li>
          <strong>Telegram&apos;ning rasmiy{' '}
          <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">
            @PremiumBot
          </a>:
          </strong>{' '}
          mavjud bo&apos;lgan to&apos;lov usullari Visa/Mastercard yoki crypto. UzCard tanlasangiz
          xato chiqadi.
        </li>
        <li>
          <strong>Fragment:</strong> Telegram&apos;ning rasmiy crypto-marketplace&apos;i, lekin
          to&apos;lovlar TON tokeni yoki xorijiy plastik orqali. O&apos;zbek banki bergan TON
          balans yo&apos;q bo&apos;lsa — yo&apos;l yopiq.
        </li>
      </ul>
      <p>
        Aynan shu uzilish — &quot;men UzCard egasiman, Premium istayman&quot; — Uzgets va shunga
        o&apos;xshash mahalliy vositachilar mavjudligining sababi.
      </p>

      <h2 id="vaqt-xavf">Qancha vaqt oladi va xavfsizmi?</h2>
      <p>
        Buyurtma <strong>2-5 daqiqa</strong>da yakunlanadi. Ba&apos;zan to&apos;lov tizimi
        sekinlashsa 10-15 daqiqaga cho&apos;ziladi. 30 daqiqada faollashmasa — bot ichida
        &quot;Yordam&quot; tugmasi orqali murojaat qiling.
      </p>
      <p>
        Xavfsizlik nuqtai nazaridan: Premium <strong>to&apos;g&apos;ridan-to&apos;g&apos;ri
        Telegram tomonidan</strong> akkauntga biriktiriladi — vositachi narxni emas, faqat
        to&apos;lov yo&apos;lini ta&apos;minlaydi. Bot{' '}
        <strong>parol, SMS-kod yoki 2FA so&apos;ramaydi</strong> — faqat @username yetarli. Agar
        biror sotuvchi parol so&apos;rasa — bu firibgarlik belgisi, darhol to&apos;xtang.
      </p>
      <p>
        Ishonch va xavfsizlik haqida batafsil:{' '}
        <Link href="/blog/eng-arzon-telegram-stars-ozbekistonda" className="text-[var(--primary)] hover:underline">
          Eng arzon Stars — aldanmaslik uchun 3 ta belgi
        </Link>
        .
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Tayyormisiz? Botda START bosib, 5 daqiqada Premium sotib oling." />

      <h2 id="muhim">Sotib olishdan oldin tekshiring</h2>
      <ul>
        <li>
          <strong>@username aniq</strong> — telefon raqami emas, foydalanuvchi nomi (masalan,
          @example). Telegram&apos;da Sozlamalar &gt; Username&apos;dan tasdiqlang.
        </li>
        <li>
          <strong>Akkaunt akademik holatda</strong> — bloklangan akkauntga Premium
          biriktirilmaydi.
        </li>
        <li>
          <strong>Karta limiti yetarli</strong> — UzCard/Humo&apos;da kun limiti odatda 5-10 mln
          so&apos;m, bu Premium uchun yetarli, lekin onlayn xarid yoqilgan bo&apos;lsin.
        </li>
        <li>
          <strong>Faqat rasmiy bot link</strong> — t.me/uzgetsbot. O&apos;xshash nomli
          (uzgetbot, uzg3tsbot) firibgar botlardan ehtiyot bo&apos;ling.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="oson-yol">Как купить Telegram Premium из Узбекистана?</h2>
      <p>
        Для владельца узбекской карты практический путь один — через локальный бот. Большинство
        официальных каналов (App Store, Google Play, Fragment, даже собственный @PremiumBot
        Telegram) UzCard и Humo не принимают: им нужны Visa/Mastercard, баланс Apple ID или
        TON-крипто. Поэтому большинство пользователей оплачивают через локального посредника
        вроде @uzgetsbot.
      </p>
      <PathsTable lang="ru" />
      <p>Ниже шаги — оформить заказ в боте за 5 минут:</p>

      <InlineBotCTA lang="ru" text="Premium 3 месяца — 168 000 сум. Оформите заказ в боте прямо сейчас." />

      <h2 id="qadam-baqadam">5 шагов к покупке Premium</h2>
      <ol>
        <li>
          Откройте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          в Telegram и нажмите <strong>START</strong>.
        </li>
        <li>
          В главном меню выберите <strong>&quot;💎 Premium&quot;</strong>.
        </li>
        <li>
          Укажите аккаунт, на который зачислить Premium — свой или <strong>@username</strong>{' '}
          получателя для подарка. Нужен именно username, не номер телефона.
        </li>
        <li>
          Выберите срок: <strong>3 месяца</strong> (168 000 сум), <strong>6 месяцев</strong>{' '}
          (228 000) или <strong>12 месяцев</strong> (408 000).
        </li>
        <li>
          Оплатите через UzCard, Humo, Click или Payme. После подтверждения Premium зачисляется
          на аккаунт за 2-5 минут — вручную активировать не нужно.
        </li>
      </ol>
      <p>
        Как проверить активацию:{' '}
        <Link href="/ru/blog/telegram-premium-qanday-faollashtiriladi" className="text-[var(--primary)] hover:underline">
          Как активируется Telegram Premium
        </Link>
        .
      </p>

      <h2 id="narxlar">Цены Premium и какой пакет выгоднее?</h2>
      <PremiumPriceTable lang="ru" />
      <p>
        12-месячный пакет в пересчёте на месяц — около <strong>34 000 сум</strong>, это на ~40%
        дешевле 3-месячного. Если планируете пользоваться постоянно, 12 месяцев — самый выгодный
        вариант. Для первой пробы подходит 3 месяца. 6 месяцев — компромисс, самый популярный
        тариф.
      </p>
      <p>
        Подробная страница пакетов:{' '}
        <Link href="/ru/premium" className="font-semibold text-[var(--primary)] hover:underline">
          /ru/premium
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="12 месяцев — 408 000 сум, около 34 000 сум в месяц. Оформите в боте." />

      <h2 id="qaysi-tolov">Какой способ оплаты выбрать? UzCard, Humo, Click, Payme</h2>
      <p>
        @uzgetsbot поддерживает четыре локальных способа оплаты. Они работают одинаково — выбирайте
        то, что удобнее:
      </p>
      <ul>
        <li>
          <strong>UzCard</strong> — национальная пластиковая система, стандарт во многих банках.
          Оплата напрямую по номеру карты.
        </li>
        <li>
          <strong>Humo</strong> — альтернатива UzCard, доступна в большинстве банков. Принцип
          работы тот же.
        </li>
        <li>
          <strong>Click</strong> — мобильное приложение для быстрой оплаты; данные карты вручную
          вводить не нужно.
        </li>
        <li>
          <strong>Payme</strong> — ещё одна мобильная платёжная платформа; работает с биометрией.
        </li>
      </ul>
      <p>
        Все четыре способа — без дополнительной комиссии и по одной цене. После ввода @username
        и срока бот показывает реквизит оплаты (номер карты или ссылку Click/Payme), вы переводите
        ту же сумму, бот автоматически проверяет поступление и зачисляет Premium. Данные карты
        в Uzgets не хранятся.
      </p>

      <h2 id="sovga">Подарить Premium на другой @username</h2>
      <p>
        В заказе можно указать не свой аккаунт, а <em>любой другой</em> @username Telegram. Получатель
        увидит уведомление о подарке и сразу получит доступ к Premium. Подарочную подписку можно
        оформить на любой срок — 3, 6 или 12 месяцев.
      </p>
      <p>
        Подойдёт для дня рождения, Нового года или просто как благодарность. Premium в подарок —
        ценный жест для людей, которым важны технологии.
      </p>

      <InlineBotCTA lang="ru" text="Подарите Premium близкому — введите @username в боте." />

      <h2 id="boshqa-yollar">Почему другие пути не работают?</h2>
      <p>
        Пользователи часто пробуют следующие способы и упираются — полезно понимать причину:
      </p>
      <ul>
        <li>
          <strong>Покупка внутри App Store / Google Play:</strong> при нажатии &quot;Subscribe&quot;
          оплата UzCard/Humo отклоняется. Чтобы заплатить, нужно сначала пополнить баланс Apple
          ID или Google Play зарубежной картой — это технически сложно и выходит дороже.
        </li>
        <li>
          <strong>Официальный Telegram-бот{' '}
          <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">
            @PremiumBot
          </a>:
          </strong>{' '}
          доступны Visa/Mastercard или крипто. UzCard выдаёт ошибку.
        </li>
        <li>
          <strong>Fragment:</strong> официальная крипто-площадка Telegram, но оплата идёт TON-токеном
          или зарубежным пластиком. Без TON-баланса от узбекского банка путь закрыт.
        </li>
      </ul>
      <p>
        Именно этот разрыв — &quot;у меня UzCard, я хочу Premium&quot; — объясняет существование
        Uzgets и подобных локальных посредников.
      </p>

      <h2 id="vaqt-xavf">Сколько времени и насколько безопасно?</h2>
      <p>
        Заказ выполняется за <strong>2-5 минут</strong>. Иногда платёжная система тормозит и срок
        растягивается до 10-15 минут. Если за 30 минут не активировалось — нажмите кнопку
        &quot;Помощь&quot; в боте.
      </p>
      <p>
        По безопасности: Premium <strong>зачисляется напрямую от Telegram</strong> на аккаунт —
        посредник влияет на способ оплаты, а не на сам продукт. Бот{' '}
        <strong>не запрашивает пароль, SMS-код или 2FA</strong> — достаточно @username. Если
        какой-то продавец просит пароль — это признак мошенничества, прекращайте.
      </p>
      <p>
        Подробнее о безопасности и доверии:{' '}
        <Link href="/ru/blog/eng-arzon-telegram-stars-ozbekistonda" className="text-[var(--primary)] hover:underline">
          Самые дешёвые Stars — 3 признака надёжности
        </Link>
        .
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Готовы? Нажмите START в боте — Premium за 5 минут." />

      <h2 id="muhim">Что проверить перед покупкой</h2>
      <ul>
        <li>
          <strong>@username точный</strong> — не номер телефона, а имя пользователя (например,
          @example). Подтвердите в Настройках &gt; Username.
        </li>
        <li>
          <strong>Аккаунт активен</strong> — на заблокированный аккаунт Premium не зачислится.
        </li>
        <li>
          <strong>Достаточный лимит карты</strong> — у UzCard/Humo дневной лимит обычно 5-10 млн
          сум, для Premium хватит, но онлайн-покупки должны быть включены.
        </li>
        <li>
          <strong>Только официальная ссылка бота</strong> — t.me/uzgetsbot. Опасайтесь похожих
          (uzgetbot, uzg3tsbot) — это мошеннические клоны.
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
      title: "Telegram Premium O'zbekistondan qanday sotib olinadi — to'liq qo'llanma 2026",
      description:
        "O'zbekistondan UzCard, Humo, Click yoki Payme bilan Telegram Premium sotib olish — botda 5 qadam, 2-5 daqiqa. Narxlar, alternativalar va xavfsizlik qoidalari.",
      metaTitle: "Telegram Premium O'zbekistondan qanday sotib olinadi 2026",
      metaDescription:
        "Telegram Premium O'zbekistonda UzCard/Humo/Click/Payme orqali — 3 oy 168 000, 12 oy 408 000 so'm. To'liq qo'llanma, alternativalar, xavfsizlik.",
      ogDescription:
        "Telegram Premium O'zbekistondan — mahalliy karta orqali. Narxlar, qadamlar, alternativalar va xavfsizlik.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "O'zbekistondan Telegram Premium qanday sotib olinadi?",
          answer:
            "Eng amaliy yo'l — @uzgetsbot orqali UzCard, Humo, Click yoki Payme bilan to'lash. Botda START bosib, @username va muddatni (3/6/12 oy) tanlasangiz, mahalliy karta orqali to'laysiz va Premium 2-5 daqiqada akkauntga biriktiriladi.",
        },
        {
          question: "Telegram Premium narxi qancha?",
          answer:
            "Uzgets'da: 3 oylik 168 000 so'm, 6 oylik 228 000 so'm, 12 oylik 408 000 so'm. 12 oylik bir oyiga taxminan 34 000 so'mga to'g'ri keladi — uzoq muddatda eng tejamli.",
        },
        {
          question: 'UzCard yoki Humo bilan to\'g\'ridan-to\'g\'ri Telegram\'ga to\'lasa bo\'ladimi?',
          answer:
            "Yo'q. Telegram'ning ichidagi xarid (App Store, Google Play yoki @PremiumBot) UzCard/Humo'ni qabul qilmaydi — Visa/Mastercard yoki crypto talab qiladi. Mahalliy karta orqali to'lash uchun mahalliy bot (Uzgets) kabi vositachi kerak.",
        },
        {
          question: 'Premium qancha vaqtda faollashadi?',
          answer:
            "To'lov tasdiqlangach 2-5 daqiqada akkauntga biriktiriladi. Ba'zan to'lov tizimi sekinlashsa 10-15 daqiqagacha cho'ziladi. Qo'lda faollashtirish kerak emas — avtomatik bo'ladi.",
        },
        {
          question: 'Boshqa odamga Premium sovg\'a qilish mumkinmi?',
          answer:
            "Ha. Botda buyurtma berishda o'zingizning emas, har qanday boshqa Telegram foydalanuvchisining @username'ini kiritsangiz, Premium o'sha akkauntga biriktiriladi. Sovg'a qabul qiluvchi bildirishnoma oladi va darhol foydalanishi mumkin.",
        },
        {
          question: 'Bot mening akkauntimga kirish huquqini oladimi?',
          answer:
            "Yo'q. Bot faqat @username so'raydi — parol, SMS-kod yoki 2FA so'ramaydi. Premium to'g'ridan-to'g'ri Telegram tomonidan akkauntga biriktiriladi, vositachi sizning akkauntingizga kirmaydi. Agar biror sotuvchi parol so'rasa — bu firibgarlik.",
        },
        {
          question: '12 oylik vs 3 oylik — qaysisi mos?',
          answer:
            "Birinchi marta sinab ko'rmoqchi bo'lsangiz — 3 oylik (168 000 so'm). Doimiy ishlatmoqchi bo'lsangiz — 12 oylik (408 000), bir oyiga ~34 000 so'mga tushadi va 3 oylikdan 40% arzon. 6 oylik — oraliq variant, eng mashhur tarif.",
        },
        {
          question: 'Karta ma\'lumotlarim Uzgets\'da saqlanadimi?',
          answer:
            "Yo'q. Uzgets karta ma'lumotlarini saqlamaydi — to'lov to'g'ridan-to'g'ri rasmiy to'lov tizimi (UzCard, Humo, Click yoki Payme) tomonidan ishlov beriladi. Bot faqat to'lovning natijasi (muvaffaqiyatli/rad) haqida ma'lumot oladi.",
        },
      ],
      finalCtaHeading: "Premium sotib olishga tayyormisiz?",
      finalCtaBody:
        "Botga kiring, muddatni tanlang va mahalliy karta bilan to'lang. Premium akkauntga avtomatik biriktiriladi — 2-5 daqiqada.",
    },
    ru: {
      title: 'Как купить Telegram Premium из Узбекистана — полное руководство 2026',
      description:
        'Купить Telegram Premium из Узбекистана через UzCard, Humo, Click или Payme — 5 шагов в боте, 2-5 минут. Цены, альтернативы и правила безопасности.',
      metaTitle: 'Как купить Telegram Premium из Узбекистана 2026',
      metaDescription:
        'Telegram Premium в Узбекистане через UzCard/Humo/Click/Payme — 3 мес. 168 000, 12 мес. 408 000 сум. Полное руководство, альтернативы, безопасность.',
      ogDescription:
        'Telegram Premium из Узбекистана — локальной картой. Цены, шаги, альтернативы и безопасность.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Как купить Telegram Premium из Узбекистана?',
          answer:
            'Самый практичный путь — через @uzgetsbot с оплатой UzCard, Humo, Click или Payme. Нажмите START, выберите @username и срок (3/6/12 месяцев), оплатите локальной картой — Premium зачислится на аккаунт за 2-5 минут.',
        },
        {
          question: 'Сколько стоит Telegram Premium?',
          answer:
            'В Uzgets: 3 месяца — 168 000 сум, 6 месяцев — 228 000, 12 месяцев — 408 000. 12-месячный пакет в пересчёте на месяц — около 34 000 сум, самый выгодный на длительный срок.',
        },
        {
          question: 'Можно ли оплатить UzCard или Humo напрямую в Telegram?',
          answer:
            'Нет. Встроенная покупка Telegram (App Store, Google Play или @PremiumBot) не принимает UzCard/Humo — нужны Visa/Mastercard или крипто. Чтобы заплатить локальной картой, нужен локальный посредник вроде Uzgets.',
        },
        {
          question: 'За сколько активируется Premium?',
          answer:
            'После подтверждения оплаты Premium зачисляется на аккаунт за 2-5 минут. Иногда платёжная система тормозит — растягивается до 10-15 минут. Вручную активировать не нужно — всё автоматически.',
        },
        {
          question: 'Можно ли подарить Premium другому пользователю?',
          answer:
            'Да. В заказе укажите @username не свой, а любого другого пользователя Telegram — Premium зачислится на его аккаунт. Получатель увидит уведомление о подарке и сразу сможет пользоваться.',
        },
        {
          question: 'Получит ли бот доступ к моему аккаунту?',
          answer:
            'Нет. Бот запрашивает только @username — без пароля, SMS-кода или 2FA. Premium зачисляется напрямую от Telegram, посредник не получает доступ к вашему аккаунту. Если какой-то продавец просит пароль — это мошенничество.',
        },
        {
          question: '12 месяцев или 3 месяца — что выбрать?',
          answer:
            'Если хотите попробовать впервые — 3 месяца (168 000 сум). Если планируете пользоваться постоянно — 12 месяцев (408 000), это около 34 000 сум в месяц, на 40% дешевле 3-месячного. 6 месяцев — промежуточный, самый популярный.',
        },
        {
          question: 'Сохраняются ли данные моей карты в Uzgets?',
          answer:
            'Нет. Uzgets не хранит данные карт — оплату обрабатывает напрямую официальная платёжная система (UzCard, Humo, Click или Payme). Бот получает только информацию о результате оплаты (успешно/отклонено).',
        },
      ],
      finalCtaHeading: 'Готовы купить Premium?',
      finalCtaBody:
        'Зайдите в бот, выберите срок и оплатите локальной картой. Premium зачислится автоматически — за 2-5 минут.',
    },
  },
}
