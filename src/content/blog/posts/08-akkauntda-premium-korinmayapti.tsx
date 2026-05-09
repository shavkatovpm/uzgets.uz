import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'akkauntda-premium-korinmayapti'
const TODAY = '2026-05-08'

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium to&apos;lov tasdiqlangach <strong>2-5 daqiqa</strong> ichida akkauntga
      biriktiriladi. Agar 30 daqiqadan keyin ham ko&apos;rinmasa, asosiy 6 ta sabab bor:{' '}
      <strong>(1)</strong> @username noto&apos;g&apos;ri kiritilgan,{' '}
      <strong>(2)</strong> ilova UI cache yangilanmagan (logout/login yechadi),{' '}
      <strong>(3)</strong> akkauntda allaqachon faol Premium obuna mavjud,{' '}
      <strong>(4)</strong> Telegram ilovasi eski versiya,{' '}
      <strong>(5)</strong> to&apos;lov yetib bormagan (bot ichida holat &quot;kutilmoqda&quot;
      yoki &quot;rad etildi&quot;), <strong>(6)</strong> Telegram serverida sinxronizatsiya
      muammosi. Pastda har biri uchun aniq tekshirish va yechim ko&apos;rsatilgan.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      После подтверждения оплаты Telegram Premium зачисляется на аккаунт за{' '}
      <strong>2-5 минут</strong>. Если через 30 минут всё ещё не появился, есть 6 основных
      причин: <strong>(1)</strong> @username введён неверно,{' '}
      <strong>(2)</strong> кэш интерфейса приложения не обновился (выход/вход решает),{' '}
      <strong>(3)</strong> на аккаунте уже активна Premium-подписка,{' '}
      <strong>(4)</strong> устаревшая версия приложения Telegram,{' '}
      <strong>(5)</strong> платёж не дошёл (в боте статус &quot;ожидание&quot; или
      &quot;отклонён&quot;), <strong>(6)</strong> сбой синхронизации на серверах Telegram.
      Ниже — конкретная проверка и решение для каждого случая.
    </p>
  )
}

function CauseCard({
  num,
  title,
  symptom,
  fix,
}: {
  num: number
  title: string
  symptom: React.ReactNode
  fix: React.ReactNode
}) {
  return (
    <div className="uz-card my-4 rounded-xl border border-[var(--border)] p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
          {num}
        </span>
        <div className="flex-1">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-3 text-xs">
              <div className="font-semibold">Belgi</div>
              <div className="mt-1 text-[var(--text-muted)]">{symptom}</div>
            </div>
            <div className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-3 text-xs">
              <div className="font-semibold text-[var(--primary)]">Yechim</div>
              <div className="mt-1 text-[var(--text-muted)]">{fix}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CauseCardRu({
  num,
  title,
  symptom,
  fix,
}: {
  num: number
  title: string
  symptom: React.ReactNode
  fix: React.ReactNode
}) {
  return (
    <div className="uz-card my-4 rounded-xl border border-[var(--border)] p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
          {num}
        </span>
        <div className="flex-1">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-3 text-xs">
              <div className="font-semibold">Признак</div>
              <div className="mt-1 text-[var(--text-muted)]">{symptom}</div>
            </div>
            <div className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-3 text-xs">
              <div className="font-semibold text-[var(--primary)]">Решение</div>
              <div className="mt-1 text-[var(--text-muted)]">{fix}</div>
            </div>
          </div>
        </div>
      </div>
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
          <a href="https://bugs.telegram.org/c/24379" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            bugs.telegram.org/c/24379
          </a>{' '}
          — {lang === 'uz' ? "Premium muddatining serverda saqlanishi haqida hisobot" : 'отчёт о хранении срока Premium на сервере'}
        </li>
        <li>
          <a href="https://tginfo.me/managing-telegram-premium-en/" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            tginfo.me/managing-telegram-premium
          </a>{' '}
          — {lang === 'uz' ? 'Premium boshqaruvi bo\'yicha qo\'llanma' : 'руководство по управлению Premium'}
        </li>
      </ul>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="birinchi-qadam">Birinchi 30 daqiqada nima qilish kerak?</h2>
      <p>
        Premium odatda <strong>2-5 daqiqa</strong>da faollashadi, lekin Telegram serverlari
        yuklangan bo&apos;lsa 30 daqiqagacha cho&apos;zilishi mumkin. Shu vaqt o&apos;tmaguncha
        diagnoz qo&apos;ymaslik kerak. Avval shuni qiling:
      </p>
      <ol>
        <li>
          <strong>Telegram ilovani to&apos;liq yoping va qayta oching</strong> — UI cache
          tufayli Premium faollashgan bo&apos;lsa ham eski holat ko&apos;rinishi mumkin.
        </li>
        <li>
          <strong>Sozlamalar &gt; Telegram Premium</strong> bo&apos;limiga kiring — agar
          aktiv bo&apos;lsa, muddat ko&apos;rsatiladi (masalan &quot;30 may 2027 gacha&quot;).
        </li>
        <li>
          <strong>Profilingiz yonida ⭐ belgisini tekshiring</strong> — boshqa qurilmadan
          (web.telegram.org orqali) o&apos;zingizning chatga kirib, profil oldida yulduz
          ko&apos;rinadimi qarang.
        </li>
      </ol>
      <p>
        Hech qaysi belgi yo&apos;q bo&apos;lsa — pastdagi 6 ta sababdan biri.
      </p>

      <InlineBotCTA lang="uz" text="Yangi buyurtma kerakmi? Botda START bosib, qayta urinib ko'ring." />

      <h2 id="sabab-1">Sabab 1: @username noto&apos;g&apos;ri kiritilgan</h2>
      <CauseCard
        num={1}
        title="Eng tez-tez uchraydigan sabab"
        symptom="Premium boshqa odamning akkauntiga ketgan: u bildirishnoma olgan, siz olmagansiz."
        fix="Bot tarixida buyurtmani oching — qaysi @username ko'rsatilgan? Sizning username'ingizmi? Sozlamalar > Username dan o'z username'ingizni tasdiqlang. Agar boshqa username yozilgan bo'lsa — buyurtma o'sha akkauntga ketgan, qaytarib olib bo'lmaydi (Telegram Premium qaytarib olinmaydi). Yangi buyurtma kerak."
      />
      <p>
        Tipik xatolar:
      </p>
      <ul>
        <li>
          <strong>@ belgisi qo&apos;shilmagan:</strong> bot &quot;username&quot; deb so&apos;raydi,
          siz <code>example</code> deb yozasiz, lekin bot @ qo&apos;shadi va boshqa ekzotik
          username topilishi mumkin. Doim &quot;@example&quot; to&apos;liq formatda yozing.
        </li>
        <li>
          <strong>Harf almashtirilgan:</strong> <code>@example_uz</code> va{' '}
          <code>@example.uz</code> — turli akkauntlar. <code>l</code> (kichik L) va{' '}
          <code>I</code> (katta I) — vizual o&apos;xshash, lekin alohida.
        </li>
        <li>
          <strong>Telefon raqami yozilgan:</strong> Premium uchun faqat @username kerak,
          telefon raqami emas. Agar bot raqamni qabul qilsa ham — bu boshqa odamning
          username&apos;iga mos kelishi mumkin.
        </li>
      </ul>

      <h2 id="sabab-2">Sabab 2: Ilova UI cache yangilanmagan</h2>
      <CauseCard
        num={2}
        title="Premium faol, lekin ilovada ko'rinmaydi"
        symptom="Sozlamalar > Telegram Premium bo'limida muddat ko'rsatilgan, lekin profilda ⭐ belgisi yo'q yoki Premium imkoniyatlari ishlamayapti."
        fix="1) Telegram'dan to'liq chiqing (logout). 2) Ilova kesh tozalang (Sozlamalar > Ilovalar > Telegram > Storage > Cache tozalash). 3) Qaytadan login qiling. Bu cache muammosini 99% holatda yechadi. iOS'da: ilovani tabdan o'chirib qaytadan oching."
      />
      <p>
        Bu — eng tez-tez uchraydigan &quot;false negative&quot;. Premium aslida faollashgan,
        ammo ilova eski holatni ko&apos;rsatadi. Agar buyurtma bot tarixida{' '}
        <strong>&quot;Yetkazildi&quot;</strong> ko&apos;rinishida bo&apos;lsa — ehtimol shu
        muammo. Logout/login deyarli har doim yechadi.
      </p>

      <InlineBotCTA lang="uz" text="Buyurtma holatini bot ichida tekshiring — START bosib, 'Mening buyurtmalarim' tanlang." />

      <h2 id="sabab-3">Sabab 3: Akkauntda allaqachon faol Premium bor</h2>
      <CauseCard
        num={3}
        title="Telegram bir vaqtda 2 ta obuna saqlamaydi"
        symptom="Bot 'Yetkazildi' deydi, lekin yangi muddat boshlanmagan. Sozlamalar > Premium da eski muddat saqlangan."
        fix="Telegram qoidasi: faol obuna mavjud bo'lsa, yangi obuna avtomatik 'queue'ga (navbatga) tushadi va eski muddat tugagach boshlanadi. Agar siz 'darhol qo'shilsin' deb kutgan bo'lsangiz — bu Telegram tomonida texnik chegara. Eski obuna tugagach yangi obuna avtomatik faollashadi. Sozlamalar > Premium > obunalar tarixida ikki yozuv ko'rinadi: faol va navbatda turgan."
      />
      <p>
        Bu &quot;muammo&quot; emas — Telegram&apos;ning xususiyati. Yangi obuna eskisi tugagach
        ishga tushadi, hech narsa yo&apos;qolmaydi. Lekin bu o&apos;zgarish tabiati haqida
        oldindan bilish foydali — ayniqsa hadya qilingan obunada.
      </p>
      <p>
        Premium muddatini uzaytirish bo&apos;yicha to&apos;liq qo&apos;llanma:{' '}
        <Link href="/uz/premium" className="text-[var(--primary)] hover:underline">
          /uz/premium
        </Link>
        .
      </p>

      <h2 id="sabab-4">Sabab 4: Telegram ilovasi eski versiya</h2>
      <CauseCard
        num={4}
        title="Yangi Premium imkoniyatlari ko'rinmaydi"
        symptom="Premium asosan ishlayapti (⭐ belgisi bor), lekin ba'zi yangi imkoniyatlar (premium emoji, business funksiyalar, story sozlamalari) yo'q yoki eski ko'rinishda."
        fix="App Store yoki Google Play orqali Telegram'ni eng yangi versiyaga yangilang. Premium imkoniyatlari Telegram tomonidan tez-tez kengaytiriladi — eski versiyada yangilarini ko'rish mumkin emas. Yangilangach ilovani qayta ishga tushiring."
      />

      <h2 id="sabab-5">Sabab 5: To&apos;lov amalda yetib bormagan</h2>
      <CauseCard
        num={5}
        title="Bot ichida buyurtma 'kutilmoqda' yoki 'rad etildi'"
        symptom="Bot tarixida buyurtma holati 'Yetkazildi' emas, balki 'Kutilmoqda', 'To'lov tekshirilmoqda' yoki 'Rad etildi'."
        fix="To'lov tasdiq jarayonidan o'tmagan. Mumkin sabablar: (a) karta limiti yetishmadi, (b) onlayn xarid yoqilmagan, (c) bank tomonidan tranzaksiya bloklangan (firibgarlik filtri), (d) summa noto'g'ri yuborilgan (kartaga o'tkazma usuli ishlatilgan bo'lsa). Banking ilovasidan to'lov tarixini tekshiring. Pul yechilmagan bo'lsa — qayta urinib ko'ring. Pul yechilgan, lekin bot 'kutilmoqda' deyayotgan bo'lsa — bot ichida 'Yordam' tugmasi orqali murojaat qiling, chek skrinini yuboring."
      />

      <h2 id="sabab-6">Sabab 6: Telegram serverida sinxronizatsiya muammosi</h2>
      <CauseCard
        num={6}
        title="Kamdan-kam, lekin uchraydi"
        symptom="Hamma narsa to'g'ri (username, to'lov, ilova versiyasi), bot 'Yetkazildi' deydi, lekin Premium hech qanday belgida ko'rinmaydi — hatto logout/login dan keyin ham."
        fix="Bu Telegram tomonidagi server muammosi — vositachi (bot) hech narsa qila olmaydi. Ikki yo'l: (1) 24-48 soat kutib turing — Telegram odatda sinxronizatsiya muammolarini avtomatik tuzatadi. (2) recover@telegram.org ga elektron pochta orqali murojaat qiling: akkaunt @username, taxminiy to'lov sanasi va sotuvchi nomi (Uzgets) bilan."
      />
      <p>
        Bu eng kam uchraydigan sabab. Lekin yuqoridagi 5 sabab tugatilgach, Premium hali ham
        ko&apos;rinmasa — odatda shu yo&apos;l qoladi.
      </p>

      <InlineBotCTA lang="uz" text="Yordam kerakmi? Botda 'Yordam' tugmasini bosing — operator chek va @username asosida tekshiradi." />

      <h2 id="diagnostic">Tezkor diagnostika ro&apos;yxati</h2>
      <p>
        Quyidagi tartibda tekshiring — har qadam bir oldingisidan keyin keladi:
      </p>
      <ol>
        <li>
          <strong>30 daqiqa kutdingizmi?</strong> Yo&apos;q bo&apos;lsa — kuting, yana
          tekshiring.
        </li>
        <li>
          <strong>Ilovani qayta ishga tushirdingizmi?</strong> Yo&apos;q — yoping va qayta
          oching.
        </li>
        <li>
          <strong>Bot tarixida buyurtma holati &quot;Yetkazildi&quot;mi?</strong> Yo&apos;q
          — Sabab 5 (to&apos;lov yetib bormagan).
        </li>
        <li>
          <strong>Buyurtmadagi @username sizniki ekanligini tasdiqladingizmi?</strong>{' '}
          Yo&apos;q — Sabab 1 (xato username).
        </li>
        <li>
          <strong>Sozlamalar &gt; Premium da muddat ko&apos;rsatilganmi?</strong> Ha — Sabab
          2 (UI cache, logout/login). Yo&apos;q — Sabab 3 (faol obuna mavjud) yoki Sabab 6
          (server).
        </li>
        <li>
          <strong>Telegram eng yangi versiyami?</strong> Yo&apos;q — App Store/Google Play
          orqali yangilang.
        </li>
        <li>
          <strong>Hali ham yo&apos;q?</strong> Bot ichidan &quot;Yordam&quot; tugmasi yoki
          recover@telegram.org.
        </li>
      </ol>

      <h2 id="oldini-olish">Keyingi marta muammoni oldini olish</h2>
      <ul>
        <li>
          <strong>Username&apos;ni clipboardga ko&apos;chiring</strong> — Sozlamalar &gt;
          Username&apos;dan to&apos;g&apos;ri formatda copy qiling, qo&apos;lda yozmang.
        </li>
        <li>
          <strong>Faol obunani oldindan tekshiring</strong> — Sozlamalar &gt; Premium&apos;da
          mavjud muddat bo&apos;lsa, yangi obuna navbatga tushadi.
        </li>
        <li>
          <strong>Telegram&apos;ni yangilab turing</strong> — Premium imkoniyatlari yangi
          versiyalarda kengaytiriladi.
        </li>
        <li>
          <strong>Kartada onlayn xarid yoqilganligini tekshiring</strong> — banking
          ilovasidan, ayniqsa kun limitini.
        </li>
        <li>
          <strong>To&apos;lov chekini saqlang</strong> — kelishmovchilik bo&apos;lsa
          murojaat uchun kerak.
        </li>
      </ul>

      <Sources lang="uz" />

      <InlineBotCTA lang="uz" text="Yangi Premium buyurtmasi uchun — botda START bosib boshlang." />

      <h2 id="muhim">Muhim eslatmalar</h2>
      <ul>
        <li>
          Premium <strong>to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram tomonidan</strong>{' '}
          akkauntga biriktiriladi — vositachi (Uzgets) faqat to&apos;lov ko&apos;prigi.
          Shuning uchun aksariyat muammolar Telegram tomonida hal qilinadi.
        </li>
        <li>
          Premium <strong>qaytarib olinmaydi</strong> — agar noto&apos;g&apos;ri username&apos;ga
          ketgan bo&apos;lsa, Telegram bunday tranzaksiyani bekor qilmaydi.
          Username&apos;ni yozishdan oldin qo&apos;sh tekshirish odat qiling.
        </li>
        <li>
          Bot &quot;Yetkazildi&quot; deyishi <strong>Telegram tomonidan ham
          tasdiqlangan</strong> degan ma&apos;noni anglatadi — bot Telegram&apos;dan response
          olmasdan &quot;Yetkazildi&quot; deb yozmaydi.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="birinchi-qadam">Что сделать в первые 30 минут?</h2>
      <p>
        Premium обычно активируется за <strong>2-5 минут</strong>, но при загрузке серверов
        Telegram может растянуться до 30 минут. До этого времени делать выводы рано. Сначала:
      </p>
      <ol>
        <li>
          <strong>Полностью закройте и снова откройте приложение Telegram</strong> — из-за
          кэша UI Premium может быть активным, но отображаться по-старому.
        </li>
        <li>
          <strong>Зайдите в Настройки &gt; Telegram Premium</strong> — если активна,
          показывается срок (например, &quot;до 30 мая 2027&quot;).
        </li>
        <li>
          <strong>Проверьте значок ⭐ рядом с профилем</strong> — зайдите с другого устройства
          (через web.telegram.org) в свой чат и посмотрите, есть ли звёздочка перед
          профилем.
        </li>
      </ol>
      <p>
        Если ни одного признака нет — одна из 6 причин ниже.
      </p>

      <InlineBotCTA lang="ru" text="Нужен новый заказ? Нажмите START в боте — попробуйте снова." />

      <h2 id="sabab-1">Причина 1: Неверно введён @username</h2>
      <CauseCardRu
        num={1}
        title="Самая частая причина"
        symptom="Premium ушёл к другому человеку: он получил уведомление, вы — нет."
        fix="Откройте историю заказа в боте — какой @username указан? Ваш ли? В Настройках > Username проверьте свой username. Если указан другой — заказ ушёл на тот аккаунт, вернуть нельзя (Telegram Premium не отзывается). Нужен новый заказ."
      />
      <p>Типичные ошибки:</p>
      <ul>
        <li>
          <strong>Не добавлен символ @:</strong> бот спрашивает &quot;username&quot;, вы пишете{' '}
          <code>example</code>, бот добавляет @ — может попасть на экзотический username. Всегда
          пишите полностью, например &quot;@example&quot;.
        </li>
        <li>
          <strong>Заменена буква:</strong> <code>@example_uz</code> и <code>@example.uz</code>{' '}
          — разные аккаунты. <code>l</code> (маленькая L) и <code>I</code> (большая I) визуально
          похожи, но это разные символы.
        </li>
        <li>
          <strong>Указан номер телефона:</strong> для Premium нужен только @username, не номер.
          Если бот примет номер — он может совпасть с чужим username.
        </li>
      </ul>

      <h2 id="sabab-2">Причина 2: Кэш интерфейса не обновился</h2>
      <CauseCardRu
        num={2}
        title="Premium активен, но в приложении не виден"
        symptom="В Настройках > Telegram Premium показан срок, но значка ⭐ в профиле нет или функции Premium не работают."
        fix="1) Полностью выйдите из Telegram (logout). 2) Очистите кэш приложения (Настройки > Приложения > Telegram > Хранилище > Очистить кэш). 3) Снова войдите. Это решает проблему кэша в 99% случаев. На iOS: смахните приложение из меню недавних и снова откройте."
      />
      <p>
        Это самый частый &quot;ложный негатив&quot;. Premium на самом деле активен, но
        приложение показывает старое состояние. Если в боте заказ имеет статус{' '}
        <strong>&quot;Доставлено&quot;</strong> — почти наверняка эта проблема. Logout/login
        почти всегда решает.
      </p>

      <InlineBotCTA lang="ru" text="Проверьте статус заказа в боте — START > 'Мои заказы'." />

      <h2 id="sabab-3">Причина 3: На аккаунте уже активна Premium</h2>
      <CauseCardRu
        num={3}
        title="Telegram не хранит две подписки одновременно"
        symptom="Бот пишет 'Доставлено', но новый срок не начался. В Настройках > Premium хранится прежний срок."
        fix="Правило Telegram: если активна подписка, новая автоматически попадает в очередь и начнётся после окончания текущей. Если вы ждали 'добавится сразу' — это техническое ограничение Telegram. Старая закончится — новая активируется автоматически. В Настройках > Premium > история подписок видны две записи: активная и в очереди."
      />
      <p>
        Это не &quot;проблема&quot; — это особенность Telegram. Новая подписка начнётся после
        окончания текущей, ничего не теряется. Но об этом полезно знать заранее — особенно
        с подарочной подпиской.
      </p>
      <p>
        Полное руководство по продлению Premium:{' '}
        <Link href="/ru/premium" className="text-[var(--primary)] hover:underline">
          /ru/premium
        </Link>
        .
      </p>

      <h2 id="sabab-4">Причина 4: Старая версия приложения Telegram</h2>
      <CauseCardRu
        num={4}
        title="Новые функции Premium не отображаются"
        symptom="Premium в целом работает (значок ⭐ есть), но некоторые новые функции (premium-эмодзи, business-функции, настройки stories) отсутствуют или выглядят по-старому."
        fix="Обновите Telegram до последней версии через App Store или Google Play. Telegram регулярно расширяет возможности Premium — в старой версии новые функции не видны. После обновления перезапустите приложение."
      />

      <h2 id="sabab-5">Причина 5: Платёж не дошёл</h2>
      <CauseCardRu
        num={5}
        title="В боте заказ 'ожидание' или 'отклонён'"
        symptom="В истории бота статус заказа не 'Доставлено', а 'Ожидание', 'Проверка платежа' или 'Отклонён'."
        fix="Платёж не прошёл подтверждение. Возможные причины: (a) недостаточный лимит карты, (b) не включены онлайн-покупки, (c) транзакция заблокирована банком (антифрод), (d) сумма отправлена неверно (если использовался перевод на карту). Проверьте историю в банковском приложении. Если деньги не списались — попробуйте заново. Если списались, но бот пишет 'ожидание' — нажмите 'Помощь' в боте, отправьте скриншот чека."
      />

      <h2 id="sabab-6">Причина 6: Сбой синхронизации на серверах Telegram</h2>
      <CauseCardRu
        num={6}
        title="Редко, но бывает"
        symptom="Всё корректно (username, оплата, версия приложения), бот пишет 'Доставлено', но Premium не виден ни по одному признаку — даже после logout/login."
        fix="Это серверная проблема Telegram — посредник (бот) ничего сделать не может. Два пути: (1) Подождите 24-48 часов — Telegram обычно сам устраняет сбои синхронизации. (2) Напишите на recover@telegram.org с указанием @username аккаунта, примерной даты оплаты и имени продавца (Uzgets)."
      />
      <p>
        Это самая редкая причина. Но если 5 предыдущих исключены, а Premium всё ещё не виден —
        обычно остаётся этот путь.
      </p>

      <InlineBotCTA lang="ru" text="Нужна помощь? Нажмите 'Помощь' в боте — оператор проверит чек и @username." />

      <h2 id="diagnostic">Быстрая диагностическая последовательность</h2>
      <p>Проверяйте в таком порядке — каждый пункт следует за предыдущим:</p>
      <ol>
        <li>
          <strong>Прошло 30 минут?</strong> Нет — подождите и проверьте снова.
        </li>
        <li>
          <strong>Перезапускали приложение?</strong> Нет — закройте и откройте.
        </li>
        <li>
          <strong>Статус заказа в боте — &quot;Доставлено&quot;?</strong> Нет — Причина 5
          (платёж не дошёл).
        </li>
        <li>
          <strong>В заказе указан ваш @username?</strong> Нет — Причина 1 (ошибка в
          username).
        </li>
        <li>
          <strong>В Настройках &gt; Premium показан срок?</strong> Да — Причина 2 (кэш UI,
          logout/login). Нет — Причина 3 (есть активная подписка) или Причина 6 (сервер).
        </li>
        <li>
          <strong>Telegram обновлён до последней версии?</strong> Нет — обновите через App
          Store/Google Play.
        </li>
        <li>
          <strong>Всё ещё не виден?</strong> Кнопка &quot;Помощь&quot; в боте или
          recover@telegram.org.
        </li>
      </ol>

      <h2 id="oldini-olish">Как избежать в будущем</h2>
      <ul>
        <li>
          <strong>Скопируйте username в буфер обмена</strong> — из Настроек &gt; Username,
          в правильном формате, не вводите вручную.
        </li>
        <li>
          <strong>Заранее проверьте активную подписку</strong> — если в Настройках &gt; Premium
          есть срок, новая подписка попадёт в очередь.
        </li>
        <li>
          <strong>Держите Telegram обновлённым</strong> — функции Premium расширяются с
          новыми версиями.
        </li>
        <li>
          <strong>Проверьте, включены ли онлайн-покупки на карте</strong> — в банковском
          приложении, особенно дневной лимит.
        </li>
        <li>
          <strong>Сохраняйте чек платежа</strong> — может понадобиться при спорной ситуации.
        </li>
      </ul>

      <Sources lang="ru" />

      <InlineBotCTA lang="ru" text="Для нового заказа Premium — START в боте." />

      <h2 id="muhim">Важные замечания</h2>
      <ul>
        <li>
          Premium <strong>зачисляется напрямую от Telegram</strong> на аккаунт — посредник
          (Uzgets) лишь платёжный мост. Поэтому большинство проблем решается на стороне
          Telegram.
        </li>
        <li>
          Premium <strong>не отзывается</strong> — если ушёл на неверный username, Telegram
          не отменит транзакцию. Сделайте привычкой двойную проверку username перед
          отправкой.
        </li>
        <li>
          Когда бот пишет &quot;Доставлено&quot;, это значит <strong>подтверждено
          Telegram</strong> — без ответа от Telegram бот этот статус не выставит.
        </li>
      </ul>
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
      title: "Akkauntda Telegram Premium ko'rinmayapti — 6 ta sabab va yechim 2026",
      description:
        "Telegram Premium to'lov qilingan, lekin akkauntda ko'rinmayapti? 6 ta asosiy sabab (username xatosi, ilova cache, faol obuna, eski versiya, to'lov muammosi, server) va har biri uchun aniq yechim.",
      metaTitle: "Telegram Premium akkauntda ko'rinmayapti — 6 sabab va yechim",
      metaDescription:
        "Telegram Premium ko'rinmayapti? 6 sabab: username xatosi, kesh, faol obuna, eski versiya, to'lov, server. Har biri uchun tezkor diagnostika va yechim.",
      ogDescription:
        "Telegram Premium ko'rinmayapti — 6 sabab va har biri uchun aniq yechim, tezkor diagnostika ketma-ketligi.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Premium qancha vaqtda faollashishi kerak?',
          answer:
            "Odatda 2-5 daqiqada faollashadi. Telegram serverlari yuklangan bo'lsa 30 daqiqagacha cho'zilishi mumkin. 30 daqiqadan keyin ham ko'rinmasa — diagnostika qilish vaqti.",
        },
        {
          question: 'Premium ko\'rinmayapti — eng birinchi nima qilish kerak?',
          answer:
            "Telegram ilovasini to'liq yopib, qaytadan oching. Keyin Sozlamalar > Telegram Premium bo'limini tekshiring — agar muddat ko'rsatilgan bo'lsa, Premium aslida faol, faqat UI cache muammosi (logout/login yechadi).",
        },
        {
          question: 'Bot \'Yetkazildi\' deydi, lekin Premium yo\'q. Nima qilaman?',
          answer:
            "Eng tez-tez sabab — UI cache (logout/login yeching). Agar logout/login yordam bermasa: (1) buyurtmadagi @username sizniki ekanligini tasdiqlang, (2) Sozlamalar > Premium da boshqa faol obuna yo'qligini tekshiring, (3) ilovani yangilang. Hech biri yordam bermasa — bot ichidan 'Yordam' tugmasi orqali murojaat qiling.",
        },
        {
          question: 'Noto\'g\'ri username\'ga Premium ketdi — qaytarib olib bo\'ladimi?',
          answer:
            "Yo'q. Telegram Premium boshqa akkauntga biriktirilgach qaytarib olinmaydi — bu Telegram qoidasi, vositachi (bot) yoki sotuvchi tomonidan o'zgartirilmaydi. Yangi buyurtma kerak. Shuning uchun har doim username'ni clipboarddan ko'chirib joylashtiring, qo'lda yozmang.",
        },
        {
          question: 'Akkauntimda allaqachon Premium bor — yangi obuna nima bo\'ladi?',
          answer:
            "Yangi obuna avtomatik 'queue'ga (navbatga) tushadi va eski muddat tugagach boshlanadi — hech narsa yo'qolmaydi. Sozlamalar > Premium > obunalar tarixida ikki yozuv ko'rinadi: faol va navbatda turgan. Bu Telegram qoidasi.",
        },
        {
          question: 'Premium imkoniyatlari ishlamayapti, lekin ⭐ belgisi bor — nega?',
          answer:
            "Ehtimol Telegram ilovasi eski versiya. Premium imkoniyatlari (yangi emoji palitrasi, business funksiyalar, story sozlamalari) yangi versiyalarda kengaytiriladi. App Store yoki Google Play orqali yangilang va ilovani qayta ishga tushiring.",
        },
        {
          question: 'Bot \'kutilmoqda\' deyayotgan bo\'lsa nima qilaman?',
          answer:
            "To'lov tasdiq jarayonidan o'tmagan. Banking ilovasidan to'lov tarixini tekshiring. Pul yechilmagan bo'lsa — qayta urinib ko'ring (karta limiti, onlayn xarid yoqilganligini tekshiring). Pul yechilgan, lekin bot 'kutilmoqda' bo'lsa — bot ichidan 'Yordam' tugmasi orqali chek skrinini yuboring, jamoa qo'lda tekshiradi.",
        },
        {
          question: 'Hech narsa yordam bermayapti — kimga murojaat qilaman?',
          answer:
            "Avval Uzgets bot ichidagi 'Yordam' tugmasi — chek va @username asosida tekshiriladi. Agar muammo Telegram tomonida bo'lsa, recover@telegram.org ga elektron pochta yuboring: @username, taxminiy to'lov sanasi va sotuvchi nomi (Uzgets) bilan. Telegram odatda 24-48 soat ichida javob beradi.",
        },
      ],
      finalCtaHeading: "Yangi Premium buyurtmasi kerakmi?",
      finalCtaBody:
        "Botga kiring, @username'ni clipboarddan ko'chirib joylashtiring va to'lang. Premium 2-5 daqiqada akkauntga biriktiriladi.",
    },
    ru: {
      title: 'Telegram Premium не отображается на аккаунте — 6 причин и решение 2026',
      description:
        'Telegram Premium оплачен, но не виден на аккаунте? 6 основных причин (ошибка username, кэш, активная подписка, старая версия, проблема платежа, сервер) и решение каждой.',
      metaTitle: 'Telegram Premium не виден на аккаунте — 6 причин и решение',
      metaDescription:
        'Telegram Premium не отображается? 6 причин: ошибка username, кэш, активная подписка, старая версия, платёж, сервер. Быстрая диагностика и решение.',
      ogDescription:
        'Telegram Premium не виден — 6 причин и решение каждой, быстрая диагностическая последовательность.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'За сколько Premium должен активироваться?',
          answer:
            'Обычно за 2-5 минут. При загрузке серверов Telegram может растянуться до 30 минут. Если через 30 минут всё ещё не виден — пора начинать диагностику.',
        },
        {
          question: 'Premium не виден — что сделать в первую очередь?',
          answer:
            'Полностью закройте и снова откройте Telegram. Затем проверьте Настройки > Telegram Premium — если показан срок, Premium на самом деле активен, проблема только в кэше UI (logout/login решает).',
        },
        {
          question: 'Бот пишет «Доставлено», но Premium нет. Что делать?',
          answer:
            'Самая частая причина — кэш UI (logout/login решает). Если не помогло: (1) убедитесь, что в заказе указан ваш @username, (2) проверьте, нет ли активной подписки в Настройках > Premium, (3) обновите приложение. Если ничего не помогло — нажмите «Помощь» в боте.',
        },
        {
          question: 'Premium ушёл на неверный username — можно ли вернуть?',
          answer:
            'Нет. Telegram Premium после зачисления на другой аккаунт не отзывается — это правило Telegram, посредник (бот) или продавец это не меняет. Нужен новый заказ. Поэтому всегда копируйте username из буфера обмена, не вводите вручную.',
        },
        {
          question: 'У меня уже активна Premium — что будет с новой подпиской?',
          answer:
            'Новая подписка автоматически попадает в очередь и начнётся после окончания текущей — ничего не теряется. В Настройках > Premium > история подписок видны две записи: активная и в очереди. Это правило Telegram.',
        },
        {
          question: 'Функции Premium не работают, но значок ⭐ есть — почему?',
          answer:
            'Скорее всего, устаревшая версия Telegram. Функции Premium (новые эмодзи, business-функции, настройки stories) расширяются с новыми версиями. Обновите через App Store или Google Play и перезапустите приложение.',
        },
        {
          question: 'Что делать, если бот пишет «ожидание»?',
          answer:
            'Платёж не прошёл подтверждение. Проверьте историю в банковском приложении. Если деньги не списались — попробуйте заново (проверьте лимит карты, включены ли онлайн-покупки). Если списались, но бот пишет «ожидание» — нажмите «Помощь» в боте, отправьте скриншот чека, команда проверит вручную.',
        },
        {
          question: 'Ничего не помогает — куда обратиться?',
          answer:
            'Сначала «Помощь» в боте Uzgets — проверят по чеку и @username. Если проблема на стороне Telegram — напишите на recover@telegram.org с @username, примерной датой оплаты и именем продавца (Uzgets). Telegram обычно отвечает в течение 24-48 часов.',
        },
      ],
      finalCtaHeading: 'Нужен новый заказ Premium?',
      finalCtaBody:
        'Зайдите в бот, скопируйте @username из буфера и оплатите. Premium зачислится на аккаунт за 2-5 минут.',
    },
  },
}
