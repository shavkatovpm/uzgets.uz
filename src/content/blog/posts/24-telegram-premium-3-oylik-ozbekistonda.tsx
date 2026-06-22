import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-3-oylik-ozbekistonda'
const TODAY = '2026-06-22'

const P3 = PREMIUM_PERIODS.find((p) => p.months === 3)!
const P6 = PREMIUM_PERIODS.find((p) => p.months === 6)!
const P12 = PREMIUM_PERIODS.find((p) => p.months === 12)!

// Raqobatchi narxi — 2026-06-22 holatiga ko'ra WebSearch orqali tekshirilgan (StarsJoy: 3 oy 172 000 so'm).
const COMPETITOR_3M = 172_000
const SAVE_VS_COMPETITOR = COMPETITOR_3M - P3.priceUzs

function UzAnswerBox() {
  return (
    <p>
      3 oylik Telegram Premium O&apos;zbekistonda{' '}
      <a
        href={siteConfig.botUrl}
        target="_blank"
        rel="noopener"
        className="font-semibold text-[var(--primary)]"
      >
        {siteConfig.bot}
      </a>{' '}
      orqali <strong>{formatUzs(P3.priceUzs)}</strong> — oyiga taxminan{' '}
      <strong>{formatUzs(P3.perMonthHint)}</strong>. Bu Premium&apos;ning eng past kirish
      nuqtasi: birinchi marta sinab ko&apos;ruvchilar, sovg&apos;a yuboruvchilar va qisqa
      muddatga olmoqchilar uchun mos. To&apos;lov UzCard / Humo / Click / Payme orqali so&apos;mda,
      Premium <strong>2–5 daqiqada</strong> akkauntda faollashadi va aniq <strong>90 kun</strong>{' '}
      amal qiladi. Mahalliy karta bilan to&apos;lash mumkin bo&apos;lgan variantlar orasida
      uzgets narxi eng arzonlaridan: masalan StarsJoy&apos;da 3 oylik {formatUzs(COMPETITOR_3M)},
      ya&apos;ni uzgets {formatUzs(SAVE_VS_COMPETITOR)} arzonroq.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Premium на 3 месяца в Узбекистане через{' '}
      <a
        href={siteConfig.botUrl}
        target="_blank"
        rel="noopener"
        className="font-semibold text-[var(--primary)]"
      >
        {siteConfig.bot}
      </a>{' '}
      стоит <strong>{formatUzs(P3.priceUzs)}</strong> — в месяц примерно{' '}
      <strong>{formatUzs(P3.perMonthHint)}</strong>. Это самая низкая точка входа в Premium:
      для тех, кто пробует впервые, отправляет подарок или берёт на короткий срок. Оплата
      UzCard / Humo / Click / Payme в сумах, Premium активируется за <strong>2–5 минут</strong>{' '}
      и действует ровно <strong>90 дней</strong>. Среди вариантов с оплатой локальной картой
      цена uzgets — одна из самых низких: например, в StarsJoy 3 месяца стоят{' '}
      {formatUzs(COMPETITOR_3M)}, то есть uzgets дешевле на {formatUzs(SAVE_VS_COMPETITOR)}.
    </p>
  )
}

function PriceCompareTable({ lang }: { lang: 'uz' | 'ru' }) {
  const headers =
    lang === 'uz'
      ? ['Xizmat', '3 oylik narxi', 'To’lov usuli', 'Faollashish']
      : ['Сервис', 'Цена 3 мес.', 'Оплата', 'Активация']
  const rows = [
    {
      name: lang === 'uz' ? 'uzgets (mahalliy karta)' : 'uzgets (локальная карта)',
      price: formatUzs(P3.priceUzs),
      pay: 'UzCard / Humo / Click / Payme',
      time: lang === 'uz' ? '2–5 daqiqa' : '2–5 минут',
      highlight: true,
    },
    {
      name: 'StarsJoy',
      price: formatUzs(COMPETITOR_3M),
      pay: 'UzCard / Humo / Click / Payme',
      time: lang === 'uz' ? '5–15 daqiqa' : '5–15 минут',
      highlight: false,
    },
  ]
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead className="bg-[var(--muted)]">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.name}
              className={`border-t border-[var(--border)] ${r.highlight ? 'bg-[var(--primary)]/5' : ''}`}
            >
              <td className="px-4 py-2 font-medium">
                {r.name}
                {r.highlight && (
                  <span className="ml-2 inline-block rounded-full bg-[var(--primary)]/10 px-2 py-0.5 text-xs font-semibold text-[var(--primary)]">
                    {lang === 'uz' ? 'Eng arzon' : 'Дешевле'}
                  </span>
                )}
              </td>
              <td className="px-4 py-2 font-semibold">{r.price}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.pay}</td>
              <td className="px-4 py-2 text-[var(--text-muted)]">{r.time}</td>
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
          <a
            href="https://telegram.org/faq_premium"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            telegram.org/faq_premium
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? "Telegram Premium rasmiy FAQ: 3, 6, 12 oylik prepaid obuna va hadya qoidalari"
            : 'Официальный FAQ Telegram Premium: prepaid-подписка на 3, 6, 12 месяцев и правила подарка'}
        </li>
        <li>
          <a
            href="https://core.telegram.org/api/premium"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            core.telegram.org/api/premium
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? 'Premium API hujjati va obuna muddatlari'
            : 'Документация Premium API и сроков подписки'}
        </li>
        <li>
          <a
            href="https://humocard.uz/uz/press_center/news/telegram-botda-premium-funksiyalar/"
            target="_blank"
            rel="noopener"
            className="hover:text-[var(--primary)] hover:underline"
          >
            humocard.uz — Telegram-botda Premium-funksiyalar
          </a>{' '}
          —{' '}
          {lang === 'uz'
            ? "Humo rasmiy bayonoti: O'zbek karta bilan Telegram Premium to'lash"
            : 'Официальное заявление Humo: оплата Telegram Premium с узб. картой'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? `Narxlar 2026-yil 22-iyun holatiga ko'ra (uzgets so'mdagi narxi; raqobatchi narxi shu kundagi ochiq ma'lumotdan). Yangilanish bo'lsa shu sahifa va botda aks etadi.`
          : 'Цены на 22 июня 2026 года (цена uzgets в сумах; цена конкурента — из открытых данных на эту дату). При обновлении она отражается на этой странице и в боте.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="qancha">3 oylik Telegram Premium qancha turadi?</h2>
      <p>
        {siteConfig.bot} botida 3 oylik Telegram Premium narxi —{' '}
        <strong>{formatUzs(P3.priceUzs)}</strong>, oyiga taxminan{' '}
        <strong>{formatUzs(P3.perMonthHint)}</strong>. Bu uchta paket ichida eng past summa va
        Premium&apos;ni sinab ko&apos;rish uchun eng oson kirish nuqtasi. To&apos;lov
        <strong> so&apos;mda</strong> — xalqaro karta yoki valyuta konvertatsiyasi shart emas.
      </p>
      <p>
        Mahalliy karta bilan to&apos;lash mumkin bo&apos;lgan xizmatlar orasida uzgets narxi eng
        arzonlaridan biri. Quyida 3 oylik bo&apos;yicha taqqoslama:
      </p>
      <PriceCompareTable lang="uz" />
      <p>
        Ko&apos;rinib turibdiki, 3 oylik uchun uzgets{' '}
        <strong>{formatUzs(SAVE_VS_COMPETITOR)} arzonroq</strong> va Premium tezroq
        faollashadi. To&apos;liq paket taqqoslamasi (3/6/12 oylik bir jadvalda) —{' '}
        <Link
          href="/blog/telegram-premium-narxlari-paketlar"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          Telegram Premium narxlari
        </Link>{' '}
        sahifasida.
      </p>

      <InlineBotCTA lang="uz" text="3 oylik Premium narxini botda ko'ring va buyurtma bering." />

      <h2 id="kimga-mos">3 oylik paket kimga mos?</h2>
      <p>3 oylik — &quot;kam xavf, qisqa muddat&quot; tanlovi. U quyidagilar uchun mantiqiy:</p>
      <ul>
        <li>
          <strong>Birinchi marta sinab ko&apos;ruvchilar.</strong> Premium kerakmi-yo&apos;qmi
          hali aniq emasmi — 90 kun yetarli sinov muddati, katta summa to&apos;lamasdan.
        </li>
        <li>
          <strong>Sovg&apos;a yubormoqchilar.</strong> Do&apos;st yoki yaqinga 3 oylik Premium —
          ixcham va arzon hadya.{' '}
          <Link
            href="/blog/telegram-premium-hadya-qanday-sovga-qilinadi"
            className="text-[var(--primary)] hover:underline"
          >
            Hadya qo&apos;llanmasi
          </Link>
          .
        </li>
        <li>
          <strong>Qisqa muddatli ehtiyoj.</strong> Bir loyiha, mavsumiy ish yoki katta fayllar
          almashish kerak bo&apos;lgan davr uchun — 90 kun, keyin avtomatik to&apos;xtaydi.
        </li>
      </ul>
      <p>
        Agar Telegram&apos;ni har kuni faol ishlatsangiz va uzoq muddatga rejalashtirsangiz,
        oyiga hisobida 6 yoki 12 oylik arzonroq tushadi — buni pastda solishtirdik.
      </p>

      <h2 id="qanday-sotib-olish">3 oylikni qanday sotib olish kerak?</h2>
      <p>Jarayon bir necha daqiqa oladi:</p>
      <ol>
        <li>
          Saytdagi tugma orqali rasmiy botga o&apos;ting:{' '}
          <a
            href={siteConfig.botUrl}
            target="_blank"
            rel="noopener"
            className="font-semibold text-[var(--primary)]"
          >
            {siteConfig.bot}
          </a>
          .
        </li>
        <li>
          <strong>Telegram Premium</strong> bo&apos;limini tanlang va{' '}
          <strong>3 oylik</strong> ({formatUzs(P3.priceUzs)}) paketni belgilang.
        </li>
        <li>
          Premium qaysi akkauntga kelishini <strong>@username</strong> bilan kiriting (telefon
          raqami emas). O&apos;zingizga olsangiz — o&apos;z username&apos;ingiz, sovg&apos;a
          bo&apos;lsa — qabul qiluvchiniki.
        </li>
        <li>
          To&apos;lov usulini tanlang: <strong>UzCard / Humo</strong> (bot ko&apos;rsatgan kartaga
          aniq summa), <strong>Click</strong> yoki <strong>Payme</strong> (summa avtomatik).
        </li>
        <li>To&apos;lov tasdiqlangach Premium 2–5 daqiqada akkauntda faollashadi.</li>
      </ol>
      <p>
        UzCard/Humo bilan to&apos;laganda <strong>aniq summa</strong> muhim — boshqa summa
        o&apos;tkazsangiz mahsulot avtomatik yetkazilmaydi. Batafsil:{' '}
        <Link
          href="/blog/telegram-premium-uzcard-humo-bilan-sotib-olish"
          className="text-[var(--primary)] hover:underline"
        >
          UzCard/Humo bilan sotib olish qo&apos;llanmasi
        </Link>
        .
      </p>

      <InlineBotCTA lang="uz" text="Tayyormisiz? Botda 3 oylikni tanlang — 5 daqiqada faol." />

      <h2 id="necha-kun">3 oylik necha kun amal qiladi va avtomatik yangilanadimi?</h2>
      <p>
        3 oylik paket aniq <strong>90 kun</strong> amal qiladi — faollashgan kundan boshlab.
        Muddat tugagach Premium o&apos;chadi va akkaunt oddiy Telegram&apos;ga qaytadi.
      </p>
      <ul>
        <li>
          <strong>Avtomatik to&apos;lov yo&apos;q.</strong> Hech qanday avtomatik uzaytirish yoki
          kutilmagan yechib olish bo&apos;lmaydi — bu sizni rejasiz to&apos;lovlardan himoya
          qiladi.
        </li>
        <li>
          <strong>Davom ettirish.</strong> 90 kun tugagach yana botdan 3 (yoki 6/12) oylik
          buyurtma berasiz. Premium uzluksiz bo&apos;lishi uchun muddat tugashidan oldin
          yangilang.
        </li>
      </ul>

      <h2 id="vs-uzoq">3 oylik vs 6/12 oylik — uzoqroq olish arziydimi?</h2>
      <p>
        3 oylik — eng past umumiy summa, lekin <strong>oyiga hisobida</strong> eng qimmati. Agar
        Premium&apos;ni uzoq ishlatishingiz aniq bo&apos;lsa, uzunroq paket tejaydi:
      </p>
      <ul>
        <li>
          <strong>6 oylik — {formatUzs(P6.priceUzs)}</strong> (oyiga {formatUzs(P6.perMonthHint)}).
          3 oylikni 2 marta olishga nisbatan{' '}
          <strong>−{formatUzs(P3.priceUzs * 2 - P6.priceUzs)}</strong> tejov.
        </li>
        <li>
          <strong>12 oylik — {formatUzs(P12.priceUzs)}</strong> (oyiga{' '}
          {formatUzs(P12.perMonthHint)}). 3 oylikni 4 marta olishga nisbatan{' '}
          <strong>−{formatUzs(P3.priceUzs * 4 - P12.priceUzs)}</strong> tejov.
        </li>
      </ul>
      <p>
        Qoida oddiy: <strong>noaniqlik bo&apos;lsa — 3 oylik</strong>, Premium kerakligi aniq
        bo&apos;lsa — 6 yoki 12 oylik. To&apos;liq tejov hisobi va paket tanlash bo&apos;yicha:{' '}
        <Link
          href="/blog/telegram-premium-narxlari-paketlar"
          className="text-[var(--primary)] hover:underline"
        >
          narxlar va paketlar qo&apos;llanmasi
        </Link>
        .
      </p>

      <InlineBotCTA
        lang="uz"
        text="6 yoki 12 oylik oyiga arzonroq — botda uchchala paketni solishtiring."
      />

      <h2 id="tolay-olmaslik">Telegram ichidan to&apos;lay olmadingizmi?</h2>
      <p>
        Ko&apos;p foydalanuvchi Premium&apos;ni Telegram&apos;ning o&apos;z oynasidan yoki App
        Store / Google Play orqali olmoqchi bo&apos;lib, UzCard/Humo qabul qilinmasligiga duch
        keladi — region cheklovi va xalqaro karta talabi sabab. Mahalliy bot aynan shu
        muammoni yechadi: to&apos;lov so&apos;mda, mahalliy karta bilan. Sabablari va yechim:{' '}
        <Link
          href="/blog/telegram-premium-tolay-olmayapman-yechim"
          className="text-[var(--primary)] hover:underline"
        >
          Telegram Premium to&apos;lay olmayapman — yechim
        </Link>
        .
      </p>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Narx aniq — 3 oylik Premium'ni hozir oching." />

      <h2 id="muhim">Sotib olishdan oldin tekshiring</h2>
      <ul>
        <li>
          <strong>@username aniq.</strong> Premium qaysi akkauntga kelishini username bilan
          belgilang. Sozlamalar &gt; Username bo&apos;limidan tasdiqlang.
        </li>
        <li>
          <strong>Faqat rasmiy bot.</strong> t.me/uzgetsbot — o&apos;xshash nomli klonlar
          (uzgetbot, uzg3tsbot) firibgar bo&apos;lishi mumkin. Saytdagi tugma orqali o&apos;ting.{' '}
          <Link
            href="/blog/uzgets-ishonchli-mi-tekshirish-belgilari"
            className="text-[var(--primary)] hover:underline"
          >
            Ishonchlilik belgilari
          </Link>
          .
        </li>
        <li>
          <strong>Botda ko&apos;rsatilgan summa — yakuniy.</strong> Qo&apos;shimcha komissiya
          yo&apos;q. UzCard/Humo bilan to&apos;laganda aniq summani o&apos;tkazing.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="qancha">Сколько стоит Telegram Premium на 3 месяца?</h2>
      <p>
        В боте {siteConfig.bot} Premium на 3 месяца стоит{' '}
        <strong>{formatUzs(P3.priceUzs)}</strong>, в месяц примерно{' '}
        <strong>{formatUzs(P3.perMonthHint)}</strong>. Это самая низкая сумма из трёх пакетов и
        самая удобная точка входа, чтобы попробовать Premium. Оплата <strong>в сумах</strong> —
        международная карта или конвертация валюты не нужны.
      </p>
      <p>
        Среди сервисов с оплатой локальной картой цена uzgets — одна из самых низких. Ниже
        сравнение по 3-месячному пакету:
      </p>
      <PriceCompareTable lang="ru" />
      <p>
        Как видно, на 3 месяца uzgets <strong>дешевле на {formatUzs(SAVE_VS_COMPETITOR)}</strong>{' '}
        и Premium активируется быстрее. Полное сравнение пакетов (3/6/12 месяцев в одной
        таблице) —{' '}
        <Link
          href="/ru/blog/telegram-premium-narxlari-paketlar"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          Цены Telegram Premium
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="Посмотрите цену 3-месячного Premium в боте и оформите заказ." />

      <h2 id="kimga-mos">Кому подходит 3-месячный пакет?</h2>
      <p>3 месяца — выбор «низкий риск, короткий срок». Он логичен для:</p>
      <ul>
        <li>
          <strong>Тех, кто пробует впервые.</strong> Ещё не уверены, нужен ли Premium — 90 дней
          достаточно для теста без крупной оплаты.
        </li>
        <li>
          <strong>Тех, кто дарит.</strong> 3 месяца Premium другу или близкому — компактный и
          недорогой подарок.{' '}
          <Link
            href="/ru/blog/telegram-premium-hadya-qanday-sovga-qilinadi"
            className="text-[var(--primary)] hover:underline"
          >
            Гид по подарку
          </Link>
          .
        </li>
        <li>
          <strong>Краткосрочной потребности.</strong> На один проект, сезонную задачу или период
          обмена крупными файлами — 90 дней, потом автоматически отключается.
        </li>
      </ul>
      <p>
        Если пользуетесь Telegram ежедневно и планируете надолго, в пересчёте на месяц 6 или 12
        месяцев выходят дешевле — сравнили это ниже.
      </p>

      <h2 id="qanday-sotib-olish">Как купить 3-месячный пакет?</h2>
      <p>Процесс занимает несколько минут:</p>
      <ol>
        <li>
          Перейдите в официальный бот по кнопке с сайта:{' '}
          <a
            href={siteConfig.botUrl}
            target="_blank"
            rel="noopener"
            className="font-semibold text-[var(--primary)]"
          >
            {siteConfig.bot}
          </a>
          .
        </li>
        <li>
          Выберите раздел <strong>Telegram Premium</strong> и пакет{' '}
          <strong>3 месяца</strong> ({formatUzs(P3.priceUzs)}).
        </li>
        <li>
          Укажите аккаунт через <strong>@username</strong> (не номер телефона). Себе — свой
          username, в подарок — username получателя.
        </li>
        <li>
          Выберите способ оплаты: <strong>UzCard / Humo</strong> (точная сумма на карту бота),{' '}
          <strong>Click</strong> или <strong>Payme</strong> (сумма автоматически).
        </li>
        <li>После подтверждения оплаты Premium активируется за 2–5 минут.</li>
      </ol>
      <p>
        При оплате UzCard/Humo важна <strong>точная сумма</strong> — при переводе другой суммы
        продукт автоматически не доставится. Подробнее:{' '}
        <Link
          href="/ru/blog/telegram-premium-uzcard-humo-bilan-sotib-olish"
          className="text-[var(--primary)] hover:underline"
        >
          Руководство по покупке через UzCard/Humo
        </Link>
        .
      </p>

      <InlineBotCTA lang="ru" text="Готовы? Выберите 3 месяца в боте — активно за 5 минут." />

      <h2 id="necha-kun">Сколько действует 3-месячный пакет и продлевается ли автоматически?</h2>
      <p>
        Пакет на 3 месяца действует ровно <strong>90 дней</strong> с момента активации. По
        окончании срока Premium отключается, и аккаунт возвращается в обычный Telegram.
      </p>
      <ul>
        <li>
          <strong>Нет автоплатежа.</strong> Никакого автопродления или неожиданных списаний — это
          защищает от незапланированных трат.
        </li>
        <li>
          <strong>Продление.</strong> После 90 дней снова оформляете заказ на 3 (или 6/12)
          месяцев в боте. Чтобы Premium был непрерывным, продлите до окончания срока.
        </li>
      </ul>

      <h2 id="vs-uzoq">3 месяца vs 6/12 месяцев — стоит ли брать дольше?</h2>
      <p>
        3 месяца — самая низкая общая сумма, но <strong>в пересчёте на месяц</strong> самая
        дорогая. Если точно знаете, что Premium нужен надолго, длинный пакет экономит:
      </p>
      <ul>
        <li>
          <strong>6 месяцев — {formatUzs(P6.priceUzs)}</strong> (в месяц {formatUzs(P6.perMonthHint)}).
          По сравнению с 2 × 3-месячными экономия{' '}
          <strong>−{formatUzs(P3.priceUzs * 2 - P6.priceUzs)}</strong>.
        </li>
        <li>
          <strong>12 месяцев — {formatUzs(P12.priceUzs)}</strong> (в месяц{' '}
          {formatUzs(P12.perMonthHint)}). По сравнению с 4 × 3-месячными экономия{' '}
          <strong>−{formatUzs(P3.priceUzs * 4 - P12.priceUzs)}</strong>.
        </li>
      </ul>
      <p>
        Правило простое: <strong>сомневаетесь — 3 месяца</strong>, уверены, что Premium нужен —
        6 или 12 месяцев. Полный расчёт экономии и выбор пакета:{' '}
        <Link
          href="/ru/blog/telegram-premium-narxlari-paketlar"
          className="text-[var(--primary)] hover:underline"
        >
          руководство по ценам и пакетам
        </Link>
        .
      </p>

      <InlineBotCTA
        lang="ru"
        text="6 или 12 месяцев дешевле в месяц — сравните все три пакета в боте."
      />

      <h2 id="tolay-olmaslik">Не получилось оплатить внутри Telegram?</h2>
      <p>
        Многие пытаются купить Premium прямо в Telegram или через App Store / Google Play и
        сталкиваются с тем, что UzCard/Humo не принимаются — из-за региональных ограничений и
        требования международной карты. Местный бот решает именно это: оплата в сумах, локальной
        картой. Причины и решение:{' '}
        <Link
          href="/ru/blog/telegram-premium-tolay-olmayapman-yechim"
          className="text-[var(--primary)] hover:underline"
        >
          Не могу оплатить Telegram Premium — решение
        </Link>
        .
      </p>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Цена чёткая — откройте 3-месячный Premium сейчас." />

      <h2 id="muhim">Что проверить перед покупкой</h2>
      <ul>
        <li>
          <strong>Точный @username.</strong> Укажите, на какой аккаунт активировать Premium, через
          username. Подтвердите в Настройки &gt; Username.
        </li>
        <li>
          <strong>Только официальный бот.</strong> t.me/uzgetsbot — похожие имена (uzgetbot,
          uzg3tsbot) могут быть мошенническими клонами. Переходите по кнопке с сайта.{' '}
          <Link
            href="/ru/blog/uzgets-ishonchli-mi-tekshirish-belgilari"
            className="text-[var(--primary)] hover:underline"
          >
            Признаки надёжности
          </Link>
          .
        </li>
        <li>
          <strong>Сумма в боте — итоговая.</strong> Без дополнительных комиссий. При оплате
          UzCard/Humo переводите точную сумму.
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
      title:
        "3 oylik Telegram Premium O'zbekistonda — narxi va sotib olish (2026)",
      description:
        "3 oylik Telegram Premium narxi O'zbekistonda — 168 000 so'm (oyiga ~56 000). Kimga mos, qanday sotib olinadi, 90 kun amal qilishi va StarsJoy bilan narx taqqoslama.",
      metaTitle: "3 oylik Telegram Premium narxi — 168 000 so'm 2026 | Uzgets",
      metaDescription:
        "3 oylik Telegram Premium O'zbekistonda 168 000 so'm — oyiga ~56 000. UzCard/Humo/Click/Payme, 2–5 daqiqada faol. Sotib olish bosqichlari va paket taqqoslama.",
      ogDescription:
        "3 oylik Telegram Premium 168 000 so'm — eng past kirish nuqtasi. Kimga mos, qanday olinadi va 6/12 oylikdan farqi.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Telegram Premium 3 oylik qancha turadi?',
          answer:
            "3 oylik Telegram Premium uzgets botida 168 000 so'm — oyiga taxminan 56 000 so'm. To'lov UzCard, Humo, Click yoki Payme orqali so'mda. Premium 2–5 daqiqada akkauntda faollashadi va aniq 90 kun amal qiladi.",
        },
        {
          question: '3 oylik Premium necha kun amal qiladi?',
          answer:
            "Aniq 90 kun — faollashgan kundan boshlab. Muddat tugagach Premium o'chadi va akkaunt oddiy Telegram'ga qaytadi. Avtomatik uzaytirish yo'q, shuning uchun kutilmagan to'lov bo'lmaydi — davom ettirish uchun yana botdan buyurtma berasiz.",
        },
        {
          question: '3 oylik Premium kimga mos?',
          answer:
            "Premium'ni birinchi marta sinab ko'ruvchilar, qisqa muddatga (bir loyiha yoki mavsum) olmoqchilar va sovg'a yubormoqchilar uchun. Bu eng past umumiy summa (168 000 so'm), shuning uchun katta xarajatsiz sinash imkonini beradi.",
        },
        {
          question: 'uzgets 3 oylik Premium boshqa botlardan arzonmi?',
          answer:
            "Mahalliy karta bilan to'lash mumkin bo'lgan variantlar orasida uzgets eng arzonlaridan. Masalan StarsJoy'da 3 oylik 172 000 so'm — uzgets esa 168 000 so'm, ya'ni 4 000 so'm arzonroq, va Premium tezroq (2–5 daqiqa) faollashadi.",
        },
        {
          question: '3 oylik olsam yaxshimi yoki 6/12 oylik?',
          answer:
            "3 oylik eng past umumiy summa, lekin oyiga hisobida eng qimmati. Premium kerakligi noaniq bo'lsa — 3 oylik. Uzoq ishlatishingiz aniq bo'lsa, 6 oylik (228 000, oyiga 38 000) yoki 12 oylik (408 000, oyiga 34 000) oyiga arzonroq tushadi.",
        },
        {
          question: 'Premium 3 oylik avtomatik yangilanadimi?',
          answer:
            "Yo'q. Hech qanday avtomatik uzaytirish yoki yechib olish yo'q. 90 kun tugagach Premium o'chadi. Davom ettirmoqchi bo'lsangiz, muddat tugashidan oldin yana botdan 3 (yoki 6/12) oylik buyurtma berasiz.",
        },
        {
          question: '3 oylik Premium qanday to\'lanadi?',
          answer:
            "UzCard yoki Humo bilan — bot ko'rsatgan karta raqamiga aniq summani o'tkazasiz. Click bilan — ilova ichida bevosita, summa avtomatik. Payme — bot havola beradi. Hammasida yakuniy summa botda ko'rsatilgan bilan bir xil, qo'shimcha komissiya yo'q.",
        },
        {
          question: '3 oylik Premiumni sovg\'a qilish mumkinmi?',
          answer:
            "Ha. Botda 'Hadya' rejimini tanlab, qabul qiluvchining @username'ini kiritasiz. Narx o'zingizga olish bilan bir xil — 168 000 so'm. To'lov tasdiqlangach Premium o'sha akkauntga biriktiriladi va Telegram rasmiy bildirishnoma yuboradi.",
        },
      ],
      finalCtaHeading: "3 oylik Premium'ni olishga tayyormisiz?",
      finalCtaBody:
        "Botga kiring, 3 oylik (168 000 so'm) paketni tanlang, @username'ni kiriting va UzCard, Humo, Click yoki Payme bilan to'lang. Premium 2–5 daqiqada akkauntda faollashadi — narx aniq, qo'shimcha komissiya yo'q.",
    },
    ru: {
      title:
        'Telegram Premium на 3 месяца в Узбекистане — цена и покупка (2026)',
      description:
        'Цена Telegram Premium на 3 месяца в Узбекистане — 168 000 сум (в месяц ~56 000). Кому подходит, как купить, срок 90 дней и сравнение цен со StarsJoy.',
      metaTitle: 'Telegram Premium на 3 месяца — 168 000 сум 2026 | Uzgets',
      metaDescription:
        'Telegram Premium на 3 месяца в Узбекистане 168 000 сум — в месяц ~56 000. UzCard/Humo/Click/Payme, активация за 2–5 минут. Шаги покупки и сравнение пакетов.',
      ogDescription:
        'Telegram Premium на 3 месяца 168 000 сум — самая низкая точка входа. Кому подходит, как купить и отличие от 6/12 месяцев.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Сколько стоит Telegram Premium на 3 месяца?',
          answer:
            'Premium на 3 месяца в боте uzgets — 168 000 сум, в месяц около 56 000 сум. Оплата UzCard, Humo, Click или Payme в сумах. Premium активируется за 2–5 минут и действует ровно 90 дней.',
        },
        {
          question: 'Сколько действует 3-месячный Premium?',
          answer:
            'Ровно 90 дней с момента активации. По окончании срока Premium отключается, и аккаунт возвращается в обычный Telegram. Автопродления нет, поэтому неожиданных списаний не будет — для продолжения снова оформляете заказ в боте.',
        },
        {
          question: 'Кому подходит 3-месячный Premium?',
          answer:
            'Тем, кто пробует Premium впервые, берёт на короткий срок (проект или сезон) или дарит. Это самая низкая общая сумма (168 000 сум), поэтому позволяет протестировать без крупных расходов.',
        },
        {
          question: 'У uzgets 3-месячный Premium дешевле других ботов?',
          answer:
            'Среди вариантов с оплатой локальной картой uzgets — один из самых дешёвых. Например, в StarsJoy 3 месяца стоят 172 000 сум, а в uzgets — 168 000 сум, то есть на 4 000 сум дешевле, и Premium активируется быстрее (2–5 минут).',
        },
        {
          question: 'Лучше взять 3 месяца или 6/12?',
          answer:
            '3 месяца — самая низкая общая сумма, но самая дорогая в пересчёте на месяц. Если не уверены, что Premium нужен — берите 3 месяца. Если точно надолго, 6 месяцев (228 000, в месяц 38 000) или 12 месяцев (408 000, в месяц 34 000) выгоднее.',
        },
        {
          question: 'Premium на 3 месяца продлевается автоматически?',
          answer:
            'Нет. Никакого автопродления или списаний. По истечении 90 дней Premium отключается. Чтобы продолжить, до окончания срока снова оформляете заказ на 3 (или 6/12) месяцев в боте.',
        },
        {
          question: 'Как оплатить 3-месячный Premium?',
          answer:
            'UzCard или Humo — переводите точную сумму на карту, указанную ботом. Click — прямая оплата в приложении, сумма автоматически. Payme — бот даёт ссылку. Во всех случаях итоговая сумма совпадает с указанной в боте, без дополнительных комиссий.',
        },
        {
          question: 'Можно ли подарить 3-месячный Premium?',
          answer:
            'Да. В боте выбираете режим «Подарок» и указываете @username получателя. Цена такая же, как для себя — 168 000 сум. После подтверждения оплаты Premium активируется на его аккаунте, Telegram отправляет официальное уведомление.',
        },
      ],
      finalCtaHeading: 'Готовы оформить Premium на 3 месяца?',
      finalCtaBody:
        'Зайдите в бот, выберите пакет на 3 месяца (168 000 сум), укажите @username и оплатите через UzCard, Humo, Click или Payme. Premium активируется за 2–5 минут — цена чёткая, без дополнительных комиссий.',
    },
  },
}
