import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-kelmadi-sabablar-yechim'
const TODAY = '2026-08-09'

function UzAnswerBox() {
  return (
    <p>
      Telegram Stars to&apos;lovdan keyin kelmagan bo&apos;lsa, avval <strong>Telegram →
      Sozlamalar → My Stars</strong> ichidagi balans va tranzaksiya tarixini, keyin Uzgets
      botidagi buyurtma holati hamda @username&apos;ni tekshiring. Eng ko&apos;p uchraydigan
      sabablar — to&apos;lov hali tasdiqlanmagani, noto&apos;g&apos;ri username, boshqa akkauntni
      tekshirish, eski ilova/kesh yoki Telegram tranzaksiyasining pending/failed holati.
      Parol, SMS-kod yoki 2FA kodini hech kimga bermang.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Если Telegram Stars не поступили после оплаты, сначала проверьте баланс и историю в
      разделе <strong>Telegram → Настройки → My Stars</strong>, затем статус заказа и
      @username в боте Uzgets. Частые причины — платёж ещё не подтверждён, неверный
      username, проверяется другой аккаунт, устаревшее приложение/кэш или статус
      транзакции Telegram pending/failed. Никому не сообщайте пароль, SMS-код или код 2FA.
    </p>
  )
}

function Sources({ lang }: { lang: 'uz' | 'ru' }) {
  const uz = lang === 'uz'
  return (
    <div className="my-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-5 text-sm">
      <div className="mb-2 font-semibold">{uz ? 'Manbalar' : 'Источники'}</div>
      <ul className="space-y-2 text-[var(--text-muted)]">
        <li>
          <a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/stars
          </a>{' '}
          — {uz ? 'Stars balansi va tranzaksiya holatlari bo‘yicha rasmiy texnik hujjat' : 'официальная документация о балансе и статусах транзакций Stars'}
        </li>
        <li>
          <a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/tos/stars
          </a>{' '}
          — {uz ? 'Telegram Stars rasmiy foydalanish va refund shartlari' : 'официальные условия использования и возврата Telegram Stars'}
        </li>
        <li>
          <a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/telegram-stars
          </a>{' '}
          — {uz ? 'Telegram Stars rasmiy e’loni' : 'официальный анонс Telegram Stars'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="tezkor-tekshiruv">Avval bajariladigan 5 ta tezkor tekshiruv</h2>
      <ol>
        <li><strong>To‘g‘ri Telegram akkauntini ochganingizni</strong> telefon raqami va @username orqali tekshiring.</li>
        <li><strong>Sozlamalar → My Stars</strong> bo‘limida balans va oxirgi tranzaksiyalarni ko‘ring.</li>
        <li>Uzgets botida buyurtma holati <strong>tasdiqlangan/yetkazilganmi</strong> yoki hali kutilmoqdami — tekshiring.</li>
        <li>Buyurtmadagi <strong>@username’ni profil username’i bilan harfma-harf</strong> solishtiring.</li>
        <li>Telegram’ni yangilang, ilovani to‘liq yopib qayta oching.</li>
      </ol>

      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Xavfsizlik:</strong> balansni tekshirish yoki Stars yetkazish uchun Telegram
        paroli, SMS-kod, QR-login yoki ikki bosqichli himoya kodi kerak emas. Support nomidan
        bunday ma’lumot so‘ralganda yubormang.
      </div>

      <h2 id="sabab-1">1. To‘lov yoki buyurtma hali tasdiqlanmagan</h2>
      <p>
        Bank ilovasida pul yechilgandek ko‘rinishi buyurtma Uzgets tizimida darhol
        tasdiqlanganini anglatmasligi mumkin. Botdagi buyurtma holatini oching. Holat
        “kutilmoqda” bo‘lsa, ikkinchi marta to‘lashga shoshilmang.
      </p>
      <p>
        Pul kartadan yechilgan, ammo buyurtma o‘zgarmagan bo‘lsa, buyurtma ID va to‘lov
        chekini saqlang va botdagi yordam bo‘limiga yuboring. Chekni ochiq guruhga emas,
        faqat rasmiy support oqimiga yuborish kerak.
      </p>

      <h2 id="sabab-2">2. @username noto‘g‘ri kiritilgan</h2>
      <p>
        Stars telefon raqamiga emas, buyurtmada ko‘rsatilgan Telegram akkauntiga
        yo‘naltiriladi. Bitta harf, pastki chiziq yoki o‘xshash belgi xatosi boshqa
        foydalanuvchini anglatishi mumkin.
      </p>
      <ul>
        <li><code>@ali_uz</code> va <code>@aliuz</code> — ikki xil username.</li>
        <li>Kichik <code>l</code>, katta <code>I</code> va <code>1</code> ko‘rinishda o‘xshashi mumkin.</li>
        <li>Username’ni qo‘lda yozish o‘rniga Telegram profilidan nusxalash xavfsizroq.</li>
      </ul>
      <p>
        Xato aniqlansa, yangi buyurtma bermasdan oldin Uzgets supportiga buyurtma ID bilan
        murojaat qiling. Yakuniy natija tranzaksiyaning amaldagi holatiga bog‘liq.
      </p>

      <InlineBotCTA lang="uz" text="Buyurtmangiz holatini @uzgetsbot ichida tekshiring." />

      <h2 id="sabab-3">3. Siz boshqa Telegram akkauntini tekshiryapsiz</h2>
      <p>
        Bitta telefonda bir nechta Telegram akkaunti bo‘lsa, Stars boshqa akkauntga kelib,
        foydalanuvchi asosiy profil balansini tekshirishi mumkin. Telegram menyusidagi
        telefon raqami va username buyurtmadagi qabul qiluvchiga mosligini tasdiqlang.
      </p>
      <p>
        Stars shaxsiy balansga bog‘lanadi. Bir qurilmadagi boshqa profil balansida u
        ko‘rinmaydi.
      </p>

      <h2 id="sabab-4">4. Balans yangilangan, lekin ilova eski holatni ko‘rsatmoqda</h2>
      <p>
        Telegram serveri balans o‘zgarganda ilovaga yangilanish yuboradi. Internet uzilishi,
        eski Telegram versiyasi yoki vaqtinchalik kesh sabab yangi balans darhol
        ko‘rinmasligi mumkin.
      </p>
      <ol>
        <li>Telegram’ni App Store yoki Google Play orqali yangilang.</li>
        <li>Ilovani to‘liq yoping va qayta oching.</li>
        <li>Wi-Fi va mobil internet o‘rtasida almashib ko‘ring.</li>
        <li>My Stars bo‘limini qaytadan ochib tranzaksiya tarixini tekshiring.</li>
      </ol>
      <p>
        Darhol logout qilish shart emas. Avval yuqoridagi xavfsiz amallarni bajaring;
        akkauntdan chiqish faqat login ma’lumotlaringizga kirish imkoningiz borligiga amin
        bo‘lsangiz ko‘rib chiqiladi.
      </p>

      <h2 id="sabab-5">5. Telegram tranzaksiyasi pending yoki failed holatida</h2>
      <p>
        Telegram’ning rasmiy texnik hujjatida Stars tranzaksiyalari uchun
        <strong> pending</strong> va <strong>failed</strong> holatlari mavjud. Pending —
        operatsiya hali yakunlanmaganini, failed esa Telegram tomonida muvaffaqiyatsiz
        tugaganini bildiradi.
      </p>
      <p>
        My Stars tarixida shunday holat ko‘rinsa, skrinshot, vaqt va buyurtma ID’ni saqlang.
        Uzgets buyurtmasi bo‘lsa avval rasmiy bot supportiga murojaat qiling; support qaysi
        bosqichda muammo yuz berganini tekshiradi.
      </p>

      <h2 id="sabab-6">6. Stars kelgan, keyin sarflangan yoki balans o‘zgargan</h2>
      <p>
        Faqat joriy balansga qarash yetarli emas. Stars bot yoki Mini App xaridi, pulli
        media, sovg‘a yoki boshqa Telegram funksiyasiga sarflangan bo‘lishi mumkin. My Stars
        tranzaksiya tarixida kirim va chiqimlarni ketma-ket tekshiring.
      </p>
      <p>
        Siz tanimaydigan chiqim bo‘lsa, faol Telegram sessiyalarini tekshiring, begona
        qurilmalarni yakunlang va ikki bosqichli himoyani yoqing. Hech kimga tasdiqlash
        kodini bermang.
      </p>

      <h2 id="sabab-7">7. Telegram yoki hududiy xarid cheklovi</h2>
      <p>
        Telegram texnik hujjatlarida ayrim akkauntlarda hududiy cheklov sabab Stars xaridi
        bloklanishi mumkinligi ko‘rsatilgan. Vaqtinchalik Telegram nosozligi ham balans
        yangilanishini kechiktirishi mumkin. Bu holatda qayta-qayta to‘lov qilish muammoni
        hal qilmaydi.
      </p>
      <p>
        Buyurtma Uzgets’da tasdiqlanmagan bo‘lsa — Uzgets supporti tekshiradi. Buyurtma
        yetkazilgan deb ko‘rsatilsa-yu, Telegram tarixida umuman kirim bo‘lmasa, buyurtma ID,
        @username, sana-vaqt va My Stars skrinshotini supportga yuboring.
      </p>

      <h2 id="supportga-nima-yuborish">Supportga nimalarni yuborish kerak?</h2>
      <ul>
        <li>Uzgets buyurtma ID’si;</li>
        <li>buyurtmada kiritilgan @username;</li>
        <li>to‘lov sanasi va taxminiy vaqti;</li>
        <li>bank cheki yoki tranzaksiya ID’si;</li>
        <li>My Stars balans/tarix skrinshoti;</li>
        <li>botda ko‘rsatilgan buyurtma holati.</li>
      </ul>
      <p>
        <strong>Yubormang:</strong> karta CVV kodi, Telegram paroli, SMS-kod, QR-login,
        2FA paroli yoki to‘liq karta rekvizitlari.
      </p>

      <h2 id="oldini-olish">Keyingi buyurtmada muammoni qanday oldini olish mumkin?</h2>
      <ul>
        <li>@username’ni profil sahifasidan nusxalang va to‘lovdan oldin yana tekshiring.</li>
        <li>Buyurtma ID va chekni Stars balansga tushguncha saqlang.</li>
        <li>Bitta buyurtma kutilayotgan paytda takroriy to‘lov qilmang.</li>
        <li>Faqat <strong>@uzgetsbot</strong> va sayt ko‘rsatgan rasmiy aloqa kanalidan foydalaning.</li>
        <li>Telegram ilovasini yangilangan holda saqlang.</li>
      </ul>

      <p>
        Joriy Stars paketlari va narxlar <Link href="/stars">Telegram Stars narxlari
        sahifasida</Link>, umumiy xarid jarayoni esa{' '}
        <Link href="/blog/telegram-stars-ozbekistondan-sotib-olish">O‘zbekistondan Stars
        sotib olish qo‘llanmasida</Link> berilgan.
      </p>

      <Sources lang="uz" />
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="bystraya-proverka">Первые 5 проверок</h2>
      <ol>
        <li>Сверьте номер и @username открытого аккаунта Telegram.</li>
        <li>Откройте <strong>Настройки → My Stars</strong> и проверьте баланс с историей.</li>
        <li>Посмотрите статус заказа в боте Uzgets: подтверждён, доставлен или ожидает.</li>
        <li>Посимвольно сравните @username заказа с username профиля.</li>
        <li>Обновите Telegram, полностью закройте и снова откройте приложение.</li>
      </ol>

      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Безопасность:</strong> для проверки баланса или доставки Stars не нужны
        пароль Telegram, SMS-код, QR-вход или код двухэтапной защиты. Никому их не сообщайте.
      </div>

      <h2 id="prichina-1">1. Платёж или заказ ещё не подтверждён</h2>
      <p>
        Списание в банковском приложении не всегда означает мгновенное подтверждение
        заказа. Если в боте указан статус «ожидает», не оплачивайте заказ повторно.
        Сохраните ID заказа и чек. Если деньги списаны, а статус не меняется, отправьте их
        через официальный раздел помощи в боте.
      </p>

      <h2 id="prichina-2">2. В заказе указан неверный @username</h2>
      <p>
        Stars направляются указанному аккаунту Telegram, а не номеру телефона. Один символ,
        подчёркивание или похожая буква могут вести к другому пользователю. Например,
        <code>@ali_uz</code> и <code>@aliuz</code> — разные username. Безопаснее копировать
        username из профиля, а не вводить вручную.
      </p>
      <p>
        При обнаружении ошибки сначала обратитесь в поддержку Uzgets с ID заказа. Результат
        зависит от фактического состояния транзакции.
      </p>

      <InlineBotCTA lang="ru" text="Проверьте статус заказа внутри @uzgetsbot." />

      <h2 id="prichina-3">3. Вы проверяете другой аккаунт Telegram</h2>
      <p>
        На одном телефоне может быть несколько аккаунтов. Сверьте номер телефона и
        @username текущего профиля с получателем заказа. Личный баланс Stars привязан к
        конкретному аккаунту и не отображается в другом профиле на том же устройстве.
      </p>

      <h2 id="prichina-4">4. Баланс обновился, но приложение показывает старые данные</h2>
      <p>
        При изменении баланса сервер Telegram отправляет обновление приложению. Слабый
        интернет, старая версия или временный кэш могут задержать отображение.
      </p>
      <ol>
        <li>Обновите Telegram через App Store или Google Play.</li>
        <li>Полностью закройте и снова откройте приложение.</li>
        <li>Переключитесь между Wi-Fi и мобильным интернетом.</li>
        <li>Снова откройте My Stars и историю транзакций.</li>
      </ol>
      <p>Не выходите из аккаунта, если не уверены, что сможете безопасно войти обратно.</p>

      <h2 id="prichina-5">5. Транзакция Telegram имеет статус pending или failed</h2>
      <p>
        В официальной документации Telegram у транзакций Stars предусмотрены статусы
        <strong> pending</strong> и <strong>failed</strong>. Первый означает, что операция
        ещё не завершена, второй — что она завершилась ошибкой. Сохраните скриншот, время и
        ID заказа, затем обратитесь в официальный бот Uzgets.
      </p>

      <h2 id="prichina-6">6. Stars поступили, но затем были потрачены</h2>
      <p>
        Проверяйте не только текущий баланс, но и историю. Stars могли быть использованы в
        боте или Mini App, для платного медиа, подарка или другой функции Telegram. Если вы
        не узнаёте расход, завершите неизвестные активные сеансы и включите двухэтапную
        защиту.
      </p>

      <h2 id="prichina-7">7. Временный сбой или региональное ограничение Telegram</h2>
      <p>
        Официальная техническая документация указывает, что покупка Stars может быть
        заблокирована для отдельных аккаунтов из-за региональных ограничений. Временный
        сбой Telegram также способен задержать обновление баланса. Повторные оплаты в такой
        ситуации не помогают.
      </p>
      <p>
        Если заказ отмечен доставленным, но в истории Telegram нет прихода, отправьте в
        поддержку ID заказа, @username, дату и время, а также скриншот My Stars.
      </p>

      <h2 id="dannye-dlya-supporta">Что отправить поддержке?</h2>
      <ul>
        <li>ID заказа Uzgets;</li>
        <li>@username из заказа;</li>
        <li>дату и примерное время оплаты;</li>
        <li>чек или ID банковской транзакции;</li>
        <li>скриншот баланса и истории My Stars;</li>
        <li>статус заказа в боте.</li>
      </ul>
      <p>
        <strong>Не отправляйте:</strong> CVV карты, пароль Telegram, SMS-код, QR-вход,
        пароль 2FA или полные реквизиты карты.
      </p>

      <h2 id="profilaktika">Как избежать проблемы в следующий раз?</h2>
      <ul>
        <li>Копируйте @username из профиля и повторно проверяйте перед оплатой.</li>
        <li>Сохраняйте ID заказа и чек до поступления Stars.</li>
        <li>Не делайте повторную оплату, пока первый заказ ожидает.</li>
        <li>Используйте только <strong>@uzgetsbot</strong> и официальные контакты сайта.</li>
        <li>Поддерживайте приложение Telegram в актуальном состоянии.</li>
      </ul>

      <p>
        Актуальные пакеты находятся на <Link href="/ru/stars">странице цен Telegram
        Stars</Link>, а общий процесс описан в{' '}
        <Link href="/ru/blog/telegram-stars-ozbekistondan-sotib-olish">инструкции по
        покупке Stars из Узбекистана</Link>.
      </p>

      <Sources lang="ru" />
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'problem',
  locales: {
    uz: {
      title: 'Telegram Stars kelmadi: 7 ta sabab va tezkor yechim 2026',
      description:
        "Telegram Stars to'lovdan keyin kelmadimi? Buyurtma holati, username, My Stars tarixi, pending/failed tranzaksiya va xavfsiz support tekshiruvi bo'yicha 7 sabab va yechim.",
      metaTitle: 'Telegram Stars kelmadi — 7 sabab va yechim (2026)',
      metaDescription:
        "Telegram Stars kelmadimi? To'lov, username, boshqa akkaunt, kesh va pending/failed tranzaksiyani tekshiring. 7 sabab, aniq yechim va xavfsiz support tartibi.",
      ogDescription:
        "Telegram Stars kelmasa nima qilish kerak: 7 sabab, My Stars diagnostikasi va supportga yuboriladigan ma'lumotlar.",
      answerBoxTitle: 'Qisqa javob: Stars kelmasa nima qilish kerak?',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: "Telegram Stars kelmasa birinchi nima qilish kerak?",
          answer:
            "Telegram Sozlamalaridagi My Stars bo'limidan balans va tranzaksiya tarixini tekshiring. Keyin Uzgets botidagi buyurtma holati va @username'ni profil bilan solishtiring. Buyurtma kutilayotgan bo'lsa, ikkinchi marta to'lamang.",
        },
        {
          question: "Bot yetkazildi deydi, lekin Stars balansda yo'q. Nima qilaman?",
          answer:
            "To'g'ri Telegram akkauntini tekshirayotganingizga amin bo'ling, My Stars tarixini oching va ilovani yangilab qayta ishga tushiring. Kirim bo'lmasa, buyurtma ID, @username va My Stars skrinshotini rasmiy Uzgets supportiga yuboring.",
        },
        {
          question: "Stars buyurtmasida username xato yozilsa nima bo'ladi?",
          answer:
            "Stars buyurtmada ko'rsatilgan akkauntga yo'naltiriladi. Xatoni ko'rsangiz, qayta buyurtma bermasdan oldin Uzgets supportiga buyurtma ID bilan murojaat qiling. Natija tranzaksiyaning amaldagi holatiga bog'liq.",
        },
        {
          question: 'Pending Stars tranzaksiyasi nimani anglatadi?',
          answer:
            "Pending — Telegram tranzaksiyasi hali yakunlanmaganini bildiradi. Vaqt, skrinshot va buyurtma ID'ni saqlang; Uzgets buyurtmasi bo'lsa rasmiy bot supportiga murojaat qiling va takroriy to'lov qilmang.",
        },
        {
          question: "Stars kelganini qayerdan tekshirish mumkin?",
          answer:
            "Telegram ilovasida Sozlamalar → My Stars bo'limini oching. U yerda joriy balans va kirim-chiqim tranzaksiyalari ko'rsatiladi. Faqat joriy balansga emas, tarixga ham qarang.",
        },
        {
          question: "Supportga qanday ma'lumot yuborish kerak?",
          answer:
            "Buyurtma ID, @username, to'lov sanasi-vaqti, bank cheki yoki tranzaksiya ID'si, My Stars tarixi va botdagi holatni yuboring. Telegram paroli, SMS/2FA kodi, CVV yoki QR-login yuborilmaydi.",
        },
        {
          question: "Muammoni hal qilish uchun Telegram paroli yoki SMS-kod kerakmi?",
          answer:
            "Yo'q. Stars balansini tekshirish va buyurtmani aniqlash uchun Telegram paroli, SMS-kod, QR-login yoki 2FA kodi kerak emas. Bunday ma'lumotni so'ragan shaxsga bermang.",
        },
      ],
      finalCtaHeading: "Stars buyurtmangizni tekshirish kerakmi?",
      finalCtaBody:
        "@uzgetsbot ichida buyurtma holatini oching. Muammo bo'lsa, buyurtma ID va chek bilan rasmiy yordam bo'limiga murojaat qiling.",
    },
    ru: {
      title: 'Telegram Stars не пришли: 7 причин и быстрое решение 2026',
      description:
        'Что делать, если Telegram Stars не поступили после оплаты: статус заказа, username, история My Stars, pending/failed, безопасность и обращение в поддержку.',
      metaTitle: 'Telegram Stars не пришли — 7 причин и решение (2026)',
      metaDescription:
        'Telegram Stars не поступили? Проверьте платёж, username, аккаунт, кэш и pending/failed. 7 причин, точные решения и безопасное обращение в поддержку.',
      ogDescription:
        'Что делать, если Telegram Stars не пришли: 7 причин, диагностика My Stars и данные для поддержки.',
      answerBoxTitle: 'Краткий ответ: что делать, если Stars не пришли?',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Что проверить в первую очередь, если Telegram Stars не пришли?',
          answer:
            'Откройте Настройки → My Stars и проверьте баланс с историей. Затем сравните статус заказа и @username в боте Uzgets с текущим профилем. Пока заказ ожидает, не платите повторно.',
        },
        {
          question: 'Бот показывает «доставлено», но Stars нет. Что делать?',
          answer:
            'Убедитесь, что открыт правильный аккаунт, проверьте историю My Stars, обновите и перезапустите Telegram. Если прихода нет, отправьте официальной поддержке ID заказа, @username и скриншот My Stars.',
        },
        {
          question: 'Что будет, если ошибиться в username?',
          answer:
            'Stars направляются аккаунту, указанному в заказе. Обнаружив ошибку, не создавайте повторный заказ, а обратитесь в поддержку Uzgets с ID заказа. Результат зависит от фактического статуса транзакции.',
        },
        {
          question: 'Что означает pending у транзакции Stars?',
          answer:
            'Pending означает, что транзакция Telegram ещё не завершена. Сохраните время, скриншот и ID заказа, обратитесь в официальный бот Uzgets и не оплачивайте заказ повторно.',
        },
        {
          question: 'Где проверить поступление Stars?',
          answer:
            'Откройте в Telegram Настройки → My Stars. Там отображаются текущий баланс и история входящих и исходящих операций. Проверяйте не только баланс, но и историю.',
        },
        {
          question: 'Какие данные отправлять поддержке?',
          answer:
            'Отправьте ID заказа, @username, дату и время оплаты, чек или ID банковской транзакции, историю My Stars и статус в боте. Не отправляйте пароль, SMS/2FA-код, CVV или QR-вход.',
        },
        {
          question: 'Нужен ли пароль или SMS-код для решения проблемы?',
          answer:
            'Нет. Для проверки заказа и баланса Stars не нужны пароль Telegram, SMS-код, QR-вход или код 2FA. Никому их не сообщайте.',
        },
      ],
      finalCtaHeading: 'Нужно проверить заказ Stars?',
      finalCtaBody:
        'Откройте статус заказа в @uzgetsbot. Если есть проблема, обратитесь в официальный раздел помощи с ID заказа и чеком.',
    },
  },
}
