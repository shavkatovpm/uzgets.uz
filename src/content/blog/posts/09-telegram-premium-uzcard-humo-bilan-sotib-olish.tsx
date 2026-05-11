import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { localePath } from '@/i18n/config'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-uzcard-humo-bilan-sotib-olish'
const TODAY = '2026-05-11'

function UzAnswerBox() {
  return (
    <p>
      UzCard yoki Humo bilan Telegram Premium&apos;ni to&apos;g&apos;ridan-to&apos;g&apos;ri
      Telegram&apos;ning o&apos;zidan sotib olib bo&apos;lmaydi — App Store, Google Play, Fragment
      va rasmiy @PremiumBot mahalliy O&apos;zbek kartalarini qabul qilmaydi. Amaliy yo&apos;l —
      mahalliy bot{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      orqali. UzCard yoki Humo karta raqamini kiritib (yoki Click/Payme orqali) to&apos;laysiz va
      Premium 2-5 daqiqada akkauntga biriktiriladi. Eng arzon paket — <strong>3 oylik 168 000 so&apos;m</strong>.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Купить Telegram Premium напрямую в Telegram картой UzCard или Humo нельзя — App Store,
      Google Play, Fragment и официальный @PremiumBot не принимают узбекские карты. Практический
      путь — через локальный бот{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>:{' '}
      вы вводите номер карты UzCard или Humo (либо платите через Click/Payme), и Premium
      зачисляется на аккаунт за 2-5 минут. Самый дешёвый пакет —{' '}
      <strong>3 месяца за 168 000 сум</strong>.
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
                <Link href={localePath(lang, `/premium/${p.slug}`)} className="text-[var(--primary)] hover:underline">
                  {lang === 'uz' ? 'Batafsil →' : 'Подробнее →'}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PaymentPathsTable({ lang }: { lang: 'uz' | 'ru' }) {
  type Row = {
    method: string
    accepts: { uz: string; ru: string }
    speed: { uz: string; ru: string }
    note: { uz: string; ru: string }
  }
  const rows: Row[] = [
    {
      method: 'UzCard',
      accepts: { uz: 'UzCard kartalari', ru: 'Карты UzCard' },
      speed: { uz: '~30 soniya', ru: '~30 секунд' },
      note: {
        uz: "Karta raqami va SMS-kod orqali to'lov.",
        ru: 'Оплата по номеру карты с SMS-кодом.',
      },
    },
    {
      method: 'Humo',
      accepts: { uz: 'Humo kartalari', ru: 'Карты Humo' },
      speed: { uz: '~30 soniya', ru: '~30 секунд' },
      note: {
        uz: "Karta raqami va SMS-kod orqali to'lov.",
        ru: 'Оплата по номеру карты с SMS-кодом.',
      },
    },
    {
      method: 'Click',
      accepts: { uz: 'UzCard, Humo (ilova ichida)', ru: 'UzCard, Humo (внутри приложения)' },
      speed: { uz: '~10 soniya', ru: '~10 секунд' },
      note: {
        uz: "Click ilovasi ochilib, biometrik tasdiq.",
        ru: 'Открывается приложение Click, биометрическое подтверждение.',
      },
    },
    {
      method: 'Payme',
      accepts: { uz: 'UzCard, Humo (ilova ichida)', ru: 'UzCard, Humo (внутри приложения)' },
      speed: { uz: '~10 soniya', ru: '~10 секунд' },
      note: {
        uz: "Payme ilovasi ochilib, biometrik tasdiq.",
        ru: 'Открывается приложение Payme, биометрическое подтверждение.',
      },
    },
  ]

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Usul' : 'Способ'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Qabul qiladi' : 'Принимает'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Tezlik' : 'Скорость'}</th>
            <th className="px-4 py-2 text-left font-semibold">{lang === 'uz' ? 'Qanday ishlaydi' : 'Как работает'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.method} className="border-t border-[var(--border)]">
              <td className="px-4 py-2 font-medium">{r.method}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.accepts[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.speed[lang]}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.note[lang]}</td>
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
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/faq_premium
          </a>{' '}
          — {lang === 'uz' ? 'Telegram Premium rasmiy FAQ' : 'официальный FAQ Telegram Premium'}
        </li>
        <li>
          <a href="https://humocard.uz" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            humocard.uz
          </a>{' '}
          — {lang === 'uz' ? "Humo to'lov tizimi rasmiy sayti" : 'официальный сайт платёжной системы Humo'}
        </li>
        <li>
          <a href="https://uzcard.uz" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            uzcard.uz
          </a>{' '}
          — {lang === 'uz' ? "UzCard to'lov tizimi rasmiy sayti" : 'официальный сайт платёжной системы UzCard'}
        </li>
        <li>
          <a href="https://fragment.com/premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            fragment.com/premium
          </a>{' '}
          — {lang === 'uz' ? 'Fragment Premium sahifasi' : 'страница Fragment Premium'}
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
      <h2 id="bevosita-tolanadimi">UzCard/Humo bilan Telegram&apos;ga to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;lash mumkinmi?</h2>
      <p>
        <strong>Yo&apos;q.</strong> Telegram Premium&apos;ni rasmiy yo&apos;llar (App Store
        ichidagi xarid, Google Play, <a href="https://fragment.com/premium" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Fragment</a>{' '}
        yoki rasmiy <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@PremiumBot</a>) UzCard
        yoki Humo qabul qilmaydi. Sabab — bu platformalar Visa/Mastercard, Apple ID balansi, Google
        Play balansi yoki TON crypto talab qiladi. UzCard va Humo — milliy O&apos;zbek to&apos;lov
        tizimlari, ular xalqaro xaridlarda ishlamaydi.
      </p>
      <p>
        Shuning uchun mahalliy bot (Uzgets) kabi vositachi orqali to&apos;lov amalga oshiriladi.
        Bot UzCard/Humo&apos;dan to&apos;lovni qabul qiladi va Telegram tomonidan akkauntga
        Premium&apos;ni biriktiradi.
      </p>

      <InlineBotCTA lang="uz" text="UzCard yoki Humo bilan Premium — botda 5 daqiqada. Hoziroq buyurtma bering." />

      <h2 id="uzcard-vs-humo">UzCard va Humo — farqi nimada?</h2>
      <p>
        Ikkalasi ham O&apos;zbekistondagi milliy plastik karta tizimlari. Telegram Premium
        sotib olish nuqtai nazaridan farq <strong>yo&apos;q</strong>: ular bir xil ishlaydi va
        Uzgets&apos;da har ikkalasi ham qo&apos;llab-quvvatlanadi.
      </p>
      <ul>
        <li>
          <strong>UzCard</strong> — <a href="https://uzcard.uz" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">UzCard.uz</a>{' '}
          tomonidan boshqariladigan milliy tizim. Aksariyat O&apos;zbek banklari standart
          ravishda UzCard chiqaradi.
        </li>
        <li>
          <strong>Humo</strong> — Markaziy bank protsessing markazi tomonidan boshqariladigan
          alternativ tizim. <a href="https://humocard.uz" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">humocard.uz</a>{' '}
          orqali batafsil. Funksional jihatdan UzCard&apos;ga teng.
        </li>
      </ul>
      <p>
        Buyurtma rasmiylashtirayotganda qaysi karta qulay bo&apos;lsa, shuni tanlang. Agar bitta
        karta rad etsa, ikkinchisi orqali urinib ko&apos;rishingiz mumkin.
      </p>

      <h2 id="qanday-tolanadi">Qanday to&apos;lash mumkin? 4 ta yo&apos;l</h2>
      <p>
        @uzgetsbot ichida UzCard va Humo&apos;ni to&apos;rt xil yo&apos;l bilan ishlatish mumkin
        — barchasi bir xil natija beradi (Premium akkauntga 2-5 daqiqada biriktiriladi):
      </p>
      <PaymentPathsTable lang="uz" />
      <p>
        <strong>Qaysi yo&apos;l qulay?</strong> Click yoki Payme ilovasi telefoningizda bo&apos;lsa
        — eng tez (10 soniya, biometrik tasdiq). Ilovani o&apos;rnatishni xohlamasangiz, UzCard
        yoki Humo to&apos;g&apos;ridan-to&apos;g&apos;ri ham ishlaydi (karta raqami va SMS-kod).
      </p>

      <h2 id="qadam-baqadam">5 qadamda Premium (UzCard yoki Humo bilan)</h2>
      <ol>
        <li>
          Telegram&apos;da{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          ni oching va <strong>START</strong> tugmasini bosing.
        </li>
        <li>
          <strong>&quot;💎 Premium&quot;</strong> bo&apos;limini tanlang.
        </li>
        <li>
          <strong>@username</strong> kiriting (o&apos;zingizniki yoki sovg&apos;a uchun
          boshqa odamniki). Faqat username — telefon raqami, parol yoki SMS-kod hech qachon
          so&apos;ralmaydi.
        </li>
        <li>
          Muddatni tanlang: <strong>3 oy</strong> (168 000 so&apos;m), <strong>6 oy</strong>{' '}
          (228 000) yoki <strong>12 oy</strong> (408 000).
        </li>
        <li>
          To&apos;lov usulini tanlang: <strong>UzCard</strong>, <strong>Humo</strong>,{' '}
          <strong>Click</strong> yoki <strong>Payme</strong>. Karta raqami yoki ilova orqali
          to&apos;lang. Tasdiqlangach, Premium 2-5 daqiqada akkauntga biriktiriladi.
        </li>
      </ol>
      <p>
        Faollashganini tekshirish bo&apos;yicha alohida qo&apos;llanma:{' '}
        <Link href="/blog/telegram-premium-qanday-faollashtiriladi" className="text-[var(--primary)] hover:underline">
          Telegram Premium qanday faollashtiriladi
        </Link>
        .
      </p>

      <InlineBotCTA lang="uz" text="UzCard, Humo, Click yoki Payme — to'lov usulini siz tanlaysiz. Botga o'ting." />

      <h2 id="narxlar">UzCard/Humo bilan Premium narxlari</h2>
      <p>
        To&apos;lov usuli narxni o&apos;zgartirmaydi — UzCard, Humo, Click va Payme bir xil
        narxda ishlaydi:
      </p>
      <PremiumPriceTable lang="uz" />
      <p>
        12 oylik paket bir oyiga taxminan <strong>34 000 so&apos;m</strong>ga to&apos;g&apos;ri
        keladi — bu 3 oyligidan ~40% arzon. Doimiy ishlatuvchilar uchun eng tejamli variant.
        Birinchi marta sinab ko&apos;rish uchun 3 oylik mos.
      </p>

      <h2 id="karta-rad-etsa">Karta rad etilsa nima qilish kerak?</h2>
      <p>
        UzCard yoki Humo to&apos;lovi rad etilsa, bu odatda quyidagi 4 ta sababdan biri:
      </p>
      <ol>
        <li>
          <strong>Internet/online to&apos;lov o&apos;chirilgan.</strong> Karta egasi mobil
          ilovasidan yoki bank menyusi orqali &quot;internet xaridlari&quot; opsiyasini yoqish
          kerak. Aksariyat banklarda standart o&apos;chirilgan.
        </li>
        <li>
          <strong>Kunlik limit yetmaydi.</strong> Aksariyat UzCard/Humo kartalarining standart
          kunlik onlayn-limiti 5-10 mln so&apos;m. Premium uchun yetadi, lekin agar limit
          o&apos;rnatgan bo&apos;lsangiz — ko&apos;tarib qo&apos;ying.
        </li>
        <li>
          <strong>Hisobda mablag&apos; yo&apos;q.</strong> Hisob qoldig&apos;ini bank ilovasidan
          tekshiring.
        </li>
        <li>
          <strong>SMS-kod kechikadi yoki kelmaydi.</strong> Bank tomonidan tasdiqlash kodi 1-2
          daqiqada keladi. Telefon signali kuchsiz bo&apos;lsa kechikadi. Yangi SMS so&apos;rang
          yoki Click/Payme orqali urinib ko&apos;ring.
        </li>
      </ol>
      <p>
        Yechim topilmasa — botda{' '}
        <Link href="/aloqa" className="text-[var(--primary)] hover:underline">
          aloqa
        </Link>
        {' '}orqali yordamga murojaat qiling. Pul yechib olingan bo&apos;lsa, to&apos;lov
        avtomatik qaytariladi (1-3 ish kuni).
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Tayyormisiz? Botda START bosing — Premium 5 daqiqada." />

      <h2 id="muhim">Sotib olishdan oldin tekshiring</h2>
      <ul>
        <li>
          <strong>Karta UzCard yoki Humo ekanligi.</strong> Visa/Mastercard&apos;ni bot qabul
          qilmaydi (bunday kartani Telegram&apos;ning rasmiy yo&apos;llaridan ishlatishingiz
          mumkin — vositachi shart emas).
        </li>
        <li>
          <strong>Internet xaridlari yoqilgan.</strong> Bank ilovasidan tekshiring va kerak
          bo&apos;lsa yoqing.
        </li>
        <li>
          <strong>@username aniq.</strong> Telefon raqami emas, username (masalan, @example).
          Sozlamalar &gt; Username bo&apos;limidan tekshiring.
        </li>
        <li>
          <strong>Faqat rasmiy bot.</strong> t.me/uzgetsbot — boshqa o&apos;xshash nomli botlar
          (uzgetbot, uzg3tsbot) firibgar klonlar.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="bevosita-tolanadimi">Можно ли оплатить Telegram Premium UzCard или Humo напрямую?</h2>
      <p>
        <strong>Нет.</strong> Официальные пути покупки Telegram Premium (внутренняя покупка App
        Store, Google Play, <a href="https://fragment.com/premium" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">Fragment</a>{' '}
        и официальный <a href="https://t.me/PremiumBot" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@PremiumBot</a>) не
        принимают UzCard или Humo. Причина — эти платформы требуют Visa/Mastercard, баланс Apple
        ID, баланс Google Play или TON-крипто. UzCard и Humo — национальные узбекские платёжные
        системы и не работают за рубежом.
      </p>
      <p>
        Поэтому оплата проходит через локальный бот-посредник вроде Uzgets. Бот принимает оплату
        UzCard/Humo и зачисляет Premium на аккаунт через Telegram.
      </p>

      <InlineBotCTA lang="ru" text="UzCard или Humo — Premium за 5 минут в боте. Закажите сейчас." />

      <h2 id="uzcard-vs-humo">UzCard и Humo — в чём разница?</h2>
      <p>
        Обе системы — национальные платёжные сети Узбекистана. Для покупки Telegram Premium
        разница <strong>нет</strong>: они работают одинаково, и Uzgets поддерживает обе.
      </p>
      <ul>
        <li>
          <strong>UzCard</strong> — национальная система, управляемая{' '}
          <a href="https://uzcard.uz" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">UzCard.uz</a>.
          Большинство узбекских банков по умолчанию выдают карту UzCard.
        </li>
        <li>
          <strong>Humo</strong> — альтернативная система, управляемая Национальным
          межбанковским процессинговым центром. Подробнее на{' '}
          <a href="https://humocard.uz" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">humocard.uz</a>.
          По функциональности равнозначна UzCard.
        </li>
      </ul>
      <p>
        При оформлении заказа выберите ту карту, которая удобнее. Если одна карта отклонит
        транзакцию, можно попробовать через другую.
      </p>

      <h2 id="qanday-tolanadi">Как оплатить — 4 пути</h2>
      <p>
        Внутри @uzgetsbot UzCard и Humo можно использовать четырьмя способами — все приводят к
        одному результату (Premium зачисляется на аккаунт за 2-5 минут):
      </p>
      <PaymentPathsTable lang="ru" />
      <p>
        <strong>Какой путь удобнее?</strong> Если приложение Click или Payme установлено на
        телефоне — самый быстрый (10 секунд, биометрия). Если не хотите ставить приложение —
        UzCard или Humo работают напрямую (номер карты + SMS-код).
      </p>

      <h2 id="qadam-baqadam">5 шагов до Premium (UzCard или Humo)</h2>
      <ol>
        <li>
          В Telegram откройте{' '}
          <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="text-[var(--primary)]">{siteConfig.bot}</a>{' '}
          и нажмите <strong>START</strong>.
        </li>
        <li>
          Выберите <strong>«💎 Premium»</strong>.
        </li>
        <li>
          Введите <strong>@username</strong> (свой или другого пользователя для подарка). Только
          username — пароль, телефон или SMS-код никогда не запрашиваются.
        </li>
        <li>
          Выберите срок: <strong>3 месяца</strong> (168 000 сум), <strong>6 месяцев</strong>{' '}
          (228 000) или <strong>12 месяцев</strong> (408 000).
        </li>
        <li>
          Выберите способ оплаты: <strong>UzCard</strong>, <strong>Humo</strong>,{' '}
          <strong>Click</strong> или <strong>Payme</strong>. Оплатите по номеру карты или через
          приложение. После подтверждения Premium зачислится за 2-5 минут.
        </li>
      </ol>
      <p>
        Как проверить, что Premium активирован:{' '}
        <Link href="/ru/blog/telegram-premium-qanday-faollashtiriladi" className="text-[var(--primary)] hover:underline">
          Как активируется Telegram Premium
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="UzCard, Humo, Click или Payme — выбор за вами. Перейдите в бот." />

      <h2 id="narxlar">Цены на Premium при оплате UzCard/Humo</h2>
      <p>
        Способ оплаты не меняет цену — UzCard, Humo, Click и Payme работают по одной и той же
        стоимости:
      </p>
      <PremiumPriceTable lang="ru" />
      <p>
        12-месячный пакет в пересчёте на месяц — около <strong>34 000 сум</strong>, на ~40%
        дешевле 3-месячного. Для постоянного использования — самый выгодный. Чтобы попробовать
        впервые — подойдёт 3-месячный.
      </p>

      <h2 id="karta-rad-etsa">Что делать, если карта отклонила оплату?</h2>
      <p>Если UzCard или Humo отклоняет платёж, обычно одна из 4 причин:</p>
      <ol>
        <li>
          <strong>Отключены интернет-платежи.</strong> Включите опцию «интернет-покупки» в
          мобильном приложении банка или через банкомат. По умолчанию у большинства банков
          отключена.
        </li>
        <li>
          <strong>Не хватает дневного лимита.</strong> Стандартный лимит онлайн-покупок UzCard/Humo
          — 5-10 млн сум в день. Для Premium хватит, но если вы устанавливали свой лимит —
          поднимите его.
        </li>
        <li>
          <strong>На счёте недостаточно средств.</strong> Проверьте остаток в приложении банка.
        </li>
        <li>
          <strong>SMS-код не приходит или задерживается.</strong> Подтверждение от банка обычно
          приходит за 1-2 минуты. При слабом сигнале — задерживается. Запросите новый код или
          попробуйте через Click/Payme.
        </li>
      </ol>
      <p>
        Если решение не находится — обратитесь в{' '}
        <Link href="/ru/aloqa" className="text-[var(--primary)] hover:underline">
          поддержку
        </Link>
        . Если деньги списались, оплата возвращается автоматически (1-3 рабочих дня).
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Готовы? Нажмите START в боте — Premium за 5 минут." />

      <h2 id="muhim">Что проверить перед покупкой</h2>
      <ul>
        <li>
          <strong>Карта — UzCard или Humo.</strong> Visa/Mastercard бот не принимает (для
          международной карты можно использовать официальные пути Telegram, посредник не нужен).
        </li>
        <li>
          <strong>Интернет-покупки включены.</strong> Проверьте в приложении банка и при
          необходимости включите.
        </li>
        <li>
          <strong>@username точный.</strong> Не номер телефона, а username (например, @example).
          Подтвердите в Настройках &gt; Username.
        </li>
        <li>
          <strong>Только официальный бот.</strong> t.me/uzgetsbot — другие похожие имена
          (uzgetbot, uzg3tsbot) — мошеннические клоны.
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
      title: "Telegram Premium UzCard yoki Humo bilan sotib olish — to'liq qo'llanma 2026",
      description:
        "UzCard yoki Humo bilan Telegram Premium qanday sotib olinadi: nega bevosita ishlamaydi, qaysi yo'l (UzCard / Humo / Click / Payme) qulay, narxlar va karta rad etsa nima qilish kerak.",
      metaTitle: "Telegram Premium UzCard / Humo bilan sotib olish 2026",
      metaDescription:
        "UzCard yoki Humo orqali Telegram Premium — botda 5 qadam, 2-5 daqiqa. 3 oy 168 000, 12 oy 408 000 so'm. Karta rad etilishi sabablari va yechimi.",
      ogDescription:
        "UzCard / Humo bilan Telegram Premium sotib olishning amaliy yo'li. To'lov usullari, narxlar va karta xatoliklarining yechimi.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'UzCard yoki Humo bilan Telegram Premium sotib olish mumkinmi?',
          answer:
            "Ha, lekin Telegram'ning o'zidan emas — mahalliy bot orqali. Telegram'ning rasmiy yo'llari (App Store, Google Play, Fragment, @PremiumBot) UzCard/Humo'ni qabul qilmaydi. Mahalliy vositachi (@uzgetsbot) UzCard/Humo'ni qabul qiladi va Premium'ni akkauntga biriktiradi.",
        },
        {
          question: 'UzCard va Humo orasida Premium sotib olishda farq bormi?',
          answer:
            "Yo'q, ikkalasi ham bir xil ishlaydi. Uzgets'da har ikkalasi qo'llab-quvvatlanadi va narx o'zgarmaydi. Qaysi karta sizda mavjud bo'lsa, shuni tanlang.",
        },
        {
          question: 'UzCard bilan to\'g\'ridan-to\'g\'ri @PremiumBot\'da to\'lasa bo\'ladimi?',
          answer:
            "Yo'q. Telegram'ning rasmiy @PremiumBot'i Visa, Mastercard yoki TON crypto qabul qiladi — UzCard/Humo qabul qilinmaydi. Shuning uchun mahalliy karta egalari uchun mahalliy bot kerak.",
        },
        {
          question: 'Click yoki Payme orqali to\'lasa narxi qimmatroqmi?',
          answer:
            "Yo'q. Uzgets'da to'lov usuli narxni o'zgartirmaydi — UzCard, Humo, Click va Payme bir xil narxda ishlaydi. Tanlovingiz qulaylikka qarab.",
        },
        {
          question: 'Karta rad etilsa pul yo\'qoladimi?',
          answer:
            "Yo'q. Agar to'lov tasdiqlanmasa, pul olinmaydi. Agar pul olinib, keyin xato yuzaga kelsa — to'lov tizimi tomonidan avtomatik qaytariladi (odatda 1-3 ish kuni). Botda aloqa bo'limi orqali xabar bersangiz tekshiriladi.",
        },
        {
          question: 'Premium qancha vaqtda faollashadi?',
          answer:
            "To'lov tasdiqlangach 2-5 daqiqada akkauntga biriktiriladi. To'lov tizimi sekinlashsa 10-15 daqiqagacha cho'ziladi. Qo'lda hech narsa qilish kerak emas — Telegram avtomatik biriktiradi.",
        },
        {
          question: 'UzCard/Humo limitim yetmaydi — nima qilaman?',
          answer:
            "Aksariyat O'zbek banklarining onlayn xaridlar uchun standart kunlik limiti 5-10 mln so'm. Premium narxi (eng katta paket 408 000 so'm) shu limitdan ancha kam. Agar siz o'zingiz pastroq limit o'rnatgan bo'lsangiz — bank ilovasi orqali ko'taring.",
        },
        {
          question: 'Karta ma\'lumotlarim botda saqlanadimi?',
          answer:
            "Yo'q. Uzgets karta ma'lumotlarini saqlamaydi — to'lov to'g'ridan-to'g'ri rasmiy to'lov tizimi (UzCard, Humo, Click yoki Payme) tomonidan ishlov beriladi. Bot faqat to'lov natijasi (muvaffaqiyatli/rad) haqida ma'lumot oladi.",
        },
      ],
      finalCtaHeading: "UzCard yoki Humo bilan Premium sotib olishga tayyormisiz?",
      finalCtaBody:
        "Botga kiring, muddatni tanlang va UzCard, Humo, Click yoki Payme bilan to'lang. Premium akkauntga 2-5 daqiqada biriktiriladi.",
    },
    ru: {
      title: 'Купить Telegram Premium UzCard или Humo — полное руководство 2026',
      description:
        'Как купить Telegram Premium UzCard или Humo: почему напрямую не работает, какой путь (UzCard / Humo / Click / Payme) удобнее, цены и что делать при отклонении карты.',
      metaTitle: 'Купить Telegram Premium UzCard / Humo 2026',
      metaDescription:
        'Telegram Premium через UzCard или Humo — 5 шагов в боте, 2-5 минут. 3 мес. 168 000, 12 мес. 408 000 сум. Причины отклонения карты и решения.',
      ogDescription:
        'Практический способ купить Telegram Premium UzCard или Humo. Способы оплаты, цены и решение ошибок карты.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Можно ли купить Telegram Premium с UzCard или Humo?',
          answer:
            'Да, но не напрямую в Telegram, а через локальный бот. Официальные пути Telegram (App Store, Google Play, Fragment, @PremiumBot) UzCard/Humo не принимают. Локальный посредник (@uzgetsbot) принимает UzCard/Humo и зачисляет Premium на аккаунт.',
        },
        {
          question: 'Есть ли разница между UzCard и Humo для покупки Premium?',
          answer:
            'Нет, обе работают одинаково. В Uzgets поддерживаются обе системы, цена не меняется. Выберите ту карту, которая у вас есть.',
        },
        {
          question: 'Можно ли заплатить UzCard напрямую в @PremiumBot?',
          answer:
            'Нет. Официальный @PremiumBot Telegram принимает Visa, Mastercard или TON-крипто — UzCard/Humo не принимаются. Поэтому держателям локальных карт нужен локальный бот.',
        },
        {
          question: 'Если оплачивать через Click или Payme — будет дороже?',
          answer:
            'Нет. В Uzgets способ оплаты не меняет цену — UzCard, Humo, Click и Payme работают по одной и той же стоимости. Выбор зависит от удобства.',
        },
        {
          question: 'Если карта отклонит оплату — потеряются ли деньги?',
          answer:
            'Нет. Если оплата не подтверждена, деньги не списываются. Если списались, а потом возникла ошибка — платёжная система автоматически возвращает (обычно за 1-3 рабочих дня). Через раздел поддержки в боте можно проверить статус.',
        },
        {
          question: 'За сколько активируется Premium?',
          answer:
            'После подтверждения оплаты Premium зачисляется на аккаунт за 2-5 минут. Если платёжная система тормозит, может растянуться до 10-15 минут. Вручную ничего делать не нужно — Telegram зачисляет автоматически.',
        },
        {
          question: 'Не хватает лимита UzCard/Humo — что делать?',
          answer:
            'У большинства узбекских банков стандартный дневной лимит онлайн-покупок 5-10 млн сум. Цена Premium (максимум 408 000 сум) намного меньше этого лимита. Если вы установили более низкий собственный лимит — поднимите его в приложении банка.',
        },
        {
          question: 'Сохраняются ли данные моей карты в боте?',
          answer:
            'Нет. Uzgets не хранит данные карт — оплату обрабатывает напрямую официальная платёжная система (UzCard, Humo, Click или Payme). Бот получает только результат оплаты (успешно/отклонено).',
        },
      ],
      finalCtaHeading: 'Готовы купить Premium с UzCard или Humo?',
      finalCtaBody:
        'Зайдите в бот, выберите срок и оплатите UzCard, Humo, Click или Payme. Premium зачислится на аккаунт за 2-5 минут.',
    },
  },
}
