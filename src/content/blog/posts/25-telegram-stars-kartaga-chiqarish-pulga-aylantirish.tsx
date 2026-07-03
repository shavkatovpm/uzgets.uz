import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

function UzAnswerBox() {
  return (
    <p>
      Ha, lekin faqat <strong>kanal/bot egalariga boshqa foydalanuvchilar tomonidan yuborilgan
      Stars</strong> pulga aylantiriladi — o&apos;zingiz sotib olib sarflagan Stars&apos;ni
      &quot;qaytarib&quot; pulga aylantirib bo&apos;lmaydi. Pulga aylantirish uchun kamida{' '}
      <strong>1000 Stars</strong> yig&apos;ilishi va ularning har biri kamida <strong>21
      kun</strong> hisobingizda turishi kerak. Keyin Fragment orqali TON kriptovalyutasiga
      almashtiriladi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Да, но обналичить можно только <strong>Stars, полученные от других пользователей</strong>{' '}
      как владелец канала/бота — Stars, купленные и потраченные вами самими, «вернуть» и
      обналичить нельзя. Для вывода нужно минимум <strong>1000 Stars</strong>, каждая из
      которых должна пролежать на счету минимум <strong>21 день</strong>. После этого они
      конвертируются в TON через Fragment.
    </p>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="qaysi-stars">Qanday Stars pulga aylantiriladi?</h2>
      <p>
        Bu — eng ko&apos;p chalkashtiriladigan nuqta. Telegram Stars ikki xil holatda
        bo&apos;lishi mumkin:
      </p>
      <ul>
        <li>
          <strong>Siz sotib olgan Stars</strong> — botlarga to&apos;lov qilish, kanalga
          sovg&apos;a yuborish yoki reaksiya qo&apos;yish uchun ishlatiladi. Bu Stars&apos;ni
          orqaga pulga aylantirib bo&apos;lmaydi.
        </li>
        <li>
          <strong>Sizga kelgan Stars</strong> — agar sizning kanalingiz/botingiz bo&apos;lsa
          va boshqa foydalanuvchilar sizga pullik kontent, sovg&apos;a yoki xizmat uchun
          Stars yuborgan bo&apos;lsa. Aynan shu turdagi Stars pulga aylantiriladi.
        </li>
      </ul>
      <p>
        Ya&apos;ni pulga aylantirish faqat <strong>kontentmeyker/kanal egasi</strong> rolida
        ishlaydi, oddiy xaridor sifatida emas.
      </p>

      <InlineBotCTA lang="uz" text="Sizga shunchaki Stars kerakmi (pulga aylantirish emas)? Botimizdan arzon narxda sotib oling." />

      <h2 id="minimal-muddat">Minimal miqdor va kutish muddati qancha?</h2>
      <p>
        Pulga aylantirish uchun ikkita shart bajarilishi kerak:
      </p>
      <ol>
        <li>
          <strong>Kamida 1000 Stars</strong> to&apos;plangan bo&apos;lishi kerak (taxminan
          13 AQSH dollari atrofida, joriy kursga qarab).
        </li>
        <li>
          <strong>Har bir Stars kamida 21 kun</strong> hisobingizda turgan bo&apos;lishi
          kerak — bu Telegram&apos;ning firibgarlik/qaytarib olishga qarshi muddati.
        </li>
      </ol>
      <p>
        21 kunlik muddat o&apos;tgan Stars&apos;lar &quot;yechib olishga tayyor&quot; holatga
        o&apos;tadi, qolganlari esa muddati to&apos;lguncha kutadi.
      </p>

      <h2 id="qanday-amalga-oshiriladi">Qanday amalga oshiriladi — bosqichma-bosqich</h2>
      <ol>
        <li><strong>Telegram Sozlamalar &gt; Stars</strong> bo&apos;limiga kiring va balansingizni tekshiring.</li>
        <li>&quot;Withdraw&quot; (pulga aylantirish) tugmasini bosing.</li>
        <li><strong>Fragment.com</strong>ga o&apos;tkazasiz — bu Telegram&apos;ning rasmiy Web3 marketpleysi.</li>
        <li>TON kriptovalyuta hamyonini ulaysiz (masalan Tonkeeper).</li>
        <li>Stars avtomatik TON&apos;ga almashtiriladi — 21 kunlik muddat o&apos;tgan bo&apos;lsa, bu deyarli bir zumda amalga oshadi.</li>
        <li>TON hamyoningizga tushadi, undan keyin xohlagan birja orqali so&apos;mga yoki boshqa valyutaga almashtirishingiz mumkin.</li>
      </ol>

      <h2 id="komissiya">Necha foiz komissiya olinadi?</h2>
      <p>
        Fragment o&apos;zi pulga aylantirish uchun qo&apos;shimcha komissiya olmaydi. Asosiy
        xarajatlar — TON tarmoq to&apos;lovi (odatda 1 sentdan kam) va agar keyinchalik TON&apos;ni
        birja orqali sotsangiz, o&apos;sha birjaning savdo komissiyasi (odatda 0.1% atrofida).
      </p>

      <h2 id="ozbekiston-uchun">Bu jarayon O&apos;zbekistonlik foydalanuvchi uchun qulaymi?</h2>
      <p>
        To&apos;g&apos;ridan-to&apos;g&apos;ri emas. Jarayon TON kriptovalyuta hamyoni va
        xalqaro kripto-birja bilan ishlashni talab qiladi — bu O&apos;zbekistondagi oddiy
        foydalanuvchi uchun qo&apos;shimcha bosqich (hamyon ochish, birjada ro&apos;yxatdan
        o&apos;tish, TON&apos;ni naqd pulga almashtirish). Agar sizda kanal/bot orqali muntazam
        Stars daromadi bo&apos;lmasa (masalan kam sonli sovg&apos;a olsangiz), 1000 Stars
        chegarasiga yetish va butun jarayonni bosqichma-bosqich o&apos;tish ko&apos;pincha
        arzimaydi.
      </p>

      <InlineBotCTA lang="uz" text="Stars sotib olish kerakmi (kanalga, botga, sovg'aga)? Uzcard/Humo orqali so'mda, tez yetkazish." />

      <h2 id="xulosa">Xulosa</h2>
      <p>
        Telegram Stars&apos;ni pulga aylantirish real imkoniyat, lekin u faqat kontentmeykerlar
        uchun va texnik jarayon (Fragment + TON hamyon + kripto-birja) talab qiladi. Oddiy
        foydalanuvchi — ya&apos;ni Stars&apos;ni sotib olib, kanal/bot/sovg&apos;a uchun
        sarflaydiganlar uchun bu mavzu umuman tegishli emas.
      </p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="kakie-stars">Какие Stars можно обналичить?</h2>
      <p>
        Это самый частый источник путаницы. Telegram Stars бывают двух типов:
      </p>
      <ul>
        <li>
          <strong>Stars, которые купили вы</strong> — используются для оплаты ботов,
          отправки подарков в канал или реакций. Их обналичить обратно нельзя.
        </li>
        <li>
          <strong>Stars, которые пришли вам</strong> — если у вас есть канал/бот, и другие
          пользователи отправили вам Stars за платный контент, подарок или услугу. Именно
          такие Stars можно обналичить.
        </li>
      </ul>
      <p>
        То есть обналичивание работает только в роли <strong>контент-мейкера/владельца
        канала</strong>, а не обычного покупателя.
      </p>

      <InlineBotCTA lang="ru" text="Нужны просто Stars (не вывод)? Купите у нас дешевле." />

      <h2 id="minimum-srok">Какой минимум и срок ожидания?</h2>
      <p>
        Для вывода должны выполняться два условия:
      </p>
      <ol>
        <li>
          <strong>Минимум 1000 Stars</strong> должно накопиться (примерно 13 долларов США
          по текущему курсу).
        </li>
        <li>
          <strong>Каждая Stars должна пролежать минимум 21 день</strong> на счету — это
          защитный период Telegram от мошенничества/возвратов.
        </li>
      </ol>
      <p>
        Stars, у которых истёк 21-дневный срок, переходят в статус «готовы к выводу»,
        остальные ждут своего срока.
      </p>

      <h2 id="kak-proishodit">Как происходит вывод — пошагово</h2>
      <ol>
        <li>Зайдите в <strong>Настройки Telegram &gt; Stars</strong> и проверьте баланс.</li>
        <li>Нажмите «Withdraw» (вывести).</li>
        <li>Вас перенаправит на <strong>Fragment.com</strong> — официальный Web3-маркетплейс Telegram.</li>
        <li>Подключите TON-кошелёк (например Tonkeeper).</li>
        <li>Stars автоматически конвертируются в TON — если 21-дневный срок прошёл, это происходит почти мгновенно.</li>
        <li>TON поступает в кошелёк, дальше его можно обменять на сумы или другую валюту через любую биржу.</li>
      </ol>

      <h2 id="komissiya-ru">Какая комиссия взимается?</h2>
      <p>
        Fragment сам не берёт дополнительную комиссию за вывод. Основные расходы — комиссия
        сети TON (обычно меньше 1 цента) и, если потом продаёте TON через биржу — торговая
        комиссия биржи (обычно около 0.1%).
      </p>

      <h2 id="udobno-li">Удобен ли этот процесс для пользователя из Узбекистана?</h2>
      <p>
        Не напрямую. Процесс требует работы с криптовалютным TON-кошельком и международной
        криптобиржей — это дополнительный шаг для обычного пользователя в Узбекистане
        (открытие кошелька, регистрация на бирже, обмен TON на наличные). Если у вас нет
        постоянного дохода в Stars через канал/бота (например получаете лишь немного
        подарков), достижение порога в 1000 Stars и весь процесс часто не оправдывают себя.
      </p>

      <InlineBotCTA lang="ru" text="Нужны Stars для канала, бота или подарка? Оплата в сумах через Uzcard/Humo, быстрая доставка." />

      <h2 id="itog">Итог</h2>
      <p>
        Обналичивание Telegram Stars — реальная возможность, но только для контент-мейкеров,
        и требует технического процесса (Fragment + TON-кошелёк + криптобиржа). Для обычного
        пользователя, который покупает Stars и тратит их на канал/бота/подарки, эта тема
        вообще не актуальна.
      </p>
    </>
  )
}

export const post: BlogPost = {
  slug: 'telegram-stars-kartaga-chiqarish-pulga-aylantirish',
  publishedAt: '2026-07-03',
  updatedAt: '2026-07-03',
  type: 'info',
  locales: {
    uz: {
      title: "Telegram Stars'ni kartaga chiqarish mumkinmi? To'liq javob 2026",
      description:
        "Telegram Stars'ni pulga aylantirish faqat kanal/bot egalariga kelgan Stars uchun ishlaydi: 1000 Stars minimal, 21 kun kutish, Fragment orqali TON'ga almashtirish. To'liq jarayon va O'zbekiston uchun amaliy tomoni.",
      metaTitle: "Telegram Stars'ni kartaga chiqarish mumkinmi? 2026",
      metaDescription:
        "Stars'ni pulga aylantirish: faqat kanalga/botga kelgan Stars uchun, 1000 Stars minimal, 21 kun kutish, Fragment + TON hamyon orqali. Bosqichma-bosqich va komissiyalar.",
      ogDescription:
        "Telegram Stars'ni pulga aylantirish jarayoni: kimlar uchun ishlaydi, minimal miqdor, kutish muddati va Fragment orqali TON'ga almashtirish.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "Sotib olgan Stars'imni orqaga pulga aylantira olamanmi?",
          answer:
            "Yo'q. Faqat kanal/bot egasi sifatida boshqa foydalanuvchilardan kelgan Stars pulga aylantiriladi. O'zingiz xarid qilib sarflagan Stars qaytarilmaydi.",
        },
        {
          question: 'Pulga aylantirish uchun minimal miqdor qancha?',
          answer:
            "Kamida 1000 Stars kerak (taxminan 13 AQSH dollari atrofida, joriy kursga qarab), va har bir Stars kamida 21 kun hisobda turgan bo'lishi kerak.",
        },
        {
          question: 'Nega 21 kun kutish kerak?',
          answer:
            "Bu Telegram'ning firibgarlik va noto'g'ri to'lovlarga qarshi himoya muddati — shu vaqt ichida to'lov qaytarilishi (chargeback) ehtimoli tekshiriladi.",
        },
        {
          question: "TON'ni O'zbekistonda naqd pulga qanday almashtirsa bo'ladi?",
          answer:
            "TON hamyonga tushgach, xalqaro kripto-birja (masalan Bybit, OKX) orqali sotib, keyin mahalliy usullar bilan naqd pulga o'tkazish mumkin. Bu qo'shimcha bosqich va birja bilan tanishlikni talab qiladi.",
        },
      ],
      finalCtaHeading: 'Stars sotib olmoqchimisiz?',
      finalCtaBody:
        "Agar pulga aylantirish emas, oddiy Stars sotib olish kerak bo'lsa — Uzcard/Humo orqali so'mda, 1-5 daqiqada yetkazamiz.",
    },
    ru: {
      title: 'Можно ли обналичить Telegram Stars? Полный ответ 2026',
      description:
        'Обналичивание Telegram Stars работает только для Stars, полученных владельцем канала/бота: минимум 1000 Stars, 21 день ожидания, обмен на TON через Fragment. Весь процесс и практическая сторона для Узбекистана.',
      metaTitle: 'Можно ли обналичить Telegram Stars? 2026',
      metaDescription:
        'Обналичивание Stars: только для Stars от канала/бота, минимум 1000, 21 день ожидания, через Fragment + TON-кошелёк. Пошагово и о комиссиях.',
      ogDescription:
        'Процесс обналичивания Telegram Stars: кому подходит, минимальная сумма, срок ожидания и обмен на TON через Fragment.',
      answerBoxTitle: 'Короткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Могу ли я обналичить купленные мной Stars обратно?',
          answer:
            'Нет. Обналичить можно только Stars, полученные от других пользователей в роли владельца канала/бота. Купленные и потраченные вами Stars не возвращаются.',
        },
        {
          question: 'Какой минимум для обналичивания?',
          answer:
            'Минимум 1000 Stars (примерно 13 долларов США по текущему курсу), и каждая Stars должна пролежать на счету минимум 21 день.',
        },
        {
          question: 'Почему нужно ждать 21 день?',
          answer:
            'Это защитный период Telegram от мошенничества и неверных платежей — за это время проверяется вероятность возврата платежа (chargeback).',
        },
        {
          question: 'Как обменять TON на наличные в Узбекистане?',
          answer:
            'После поступления TON в кошелёк его можно продать через международную криптобиржу (например Bybit, OKX), а затем перевести деньги локальными способами. Это дополнительный шаг, требующий знакомства с биржей.',
        },
      ],
      finalCtaHeading: 'Хотите купить Stars?',
      finalCtaBody:
        'Если нужен не вывод, а обычная покупка Stars — оплата в сумах через Uzcard/Humo, доставка за 1-5 минут.',
    },
  },
}
