import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-muddati-tugadi-yangilash'
const TODAY = '2026-09-06'
const P3 = PREMIUM_PERIODS.find((p) => p.months === 3)!
const P6 = PREMIUM_PERIODS.find((p) => p.months === 6)!
const P12 = PREMIUM_PERIODS.find((p) => p.months === 12)!

function UzAnswerBox() {
  return (
    <p>
      Telegram Premium muddati tugasa, akkaunt darhol oddiy (bepul) rejimga qaytadi — chatlar,
      fayllar va kanallar yo&apos;qolmaydi, faqat premium imkoniyatlar o&apos;chadi. Yangilash
      yo&apos;li xarid qilingan kanalga bog&apos;liq: {siteConfig.bot} orqali olingan bo&apos;lsa
      bu bir martalik to&apos;lov edi — botda yangi muddat tanlab qayta buyurtma berasiz. App
      Store yoki Google Play orqali obuna sifatida olingan bo&apos;lsa, tegishli do&apos;kondagi
      obunalar bo&apos;limidan uni qayta yoqasiz yoki to&apos;lov usulini yangilaysiz.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Когда срок Telegram Premium заканчивается, аккаунт сразу переходит на обычный (бесплатный)
      режим — чаты, файлы и каналы не пропадают, отключаются только премиум-функции. Способ
      продления зависит от канала покупки: если Premium куплен через {siteConfig.bot}, это была
      разовая оплата — оформите новый заказ с нужным сроком в боте. Если оформлено как подписка
      через App Store или Google Play, продлите её в разделе подписок соответствующего магазина
      или обновите способ оплаты.
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
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Premium FAQ
          </a>{' '}
          — {uz ? "obuna muddati, xarid manbai va faollashtirish bo'yicha rasmiy ma'lumot" : 'официальные сведения о сроке подписки, источнике покупки и активации'}.
        </li>
        <li>
          <a href="https://support.apple.com/en-us/HT202039" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Apple — Obunalarni boshqarish
          </a>{' '}
          — {uz ? "App Store orqali obunani qayta yoqish va to'lov usulini yangilash yo'riqnomasi" : 'инструкция по повторной активации подписки и обновлению способа оплаты в App Store'}.
        </li>
        <li>
          <a href="https://support.google.com/googleplay/answer/7018481" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Google Play — Obunalarni boshqarish
          </a>{' '}
          — {uz ? "Google Play orqali obunani qayta yoqish rasmiy yo'riqnomasi" : 'официальная инструкция по повторной активации подписки в Google Play'}.
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Manbalar, Uzgets konfiguratsiyasi va xizmat shartlari 2026-yil 6-sentabrda tekshirildi. Do'kon ilovalarining menyu joylashuvi vaqt o'tishi bilan o'zgarishi mumkin — ekrandagi joriy nomlanishga amal qiling."
          : 'Источники, конфигурация Uzgets и условия сервиса проверены 6 сентября 2026 года. Расположение пунктов меню в приложениях магазинов может меняться — следуйте текущим названиям на экране.'}
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
          <li><a href="#nima-boladi" className="hover:text-[var(--primary)] hover:underline">Muddat tugaganda nima bo&apos;ladi?</a></li>
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Holat → sabab → amal</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Uzgets orqali yangilash</a></li>
          <li><a href="#app-store" className="hover:text-[var(--primary)] hover:underline">App Store orqali qayta yoqish</a></li>
          <li><a href="#google-play" className="hover:text-[var(--primary)] hover:underline">Google Play orqali qayta yoqish</a></li>
          <li><a href="#muddat" className="hover:text-[var(--primary)] hover:underline">Qaysi muddatni tanlash kerak?</a></li>
        </ol>
      </nav>

      <h2 id="nima-boladi">Premium muddati tugaganda nima bo&apos;ladi?</h2>
      <p>
        Muddat tugashi bilan akkaunt <strong>darhol</strong> oddiy (bepul) Telegram rejimiga
        qaytadi. Xabarlar, chatlar, kanallar, papkalar va fayllar to&apos;liq saqlanib qoladi —
        hech narsa o&apos;chirilmaydi. Faqat Premium&apos;ga xos imkoniyatlar (4 GB&apos;gacha fayl
        yuklash, premium emoji va stikerlar, tezlashtirilgan yuklab olish va h.k.) o&apos;chadi.
        Qayta yangilaganingizdan so&apos;ng bu imkoniyatlar avvalgidek darhol tiklanadi.
      </p>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Muhim:</strong> Uzgets kabi vositachi bot orqali olingan Premium — bir martalik
        to&apos;lov. U <em>avtomatik uzaymaydi</em>, shuning uchun muddat tugashi &laquo;muammo&raquo;
        emas — bu kutilgan holat. Yangilash uchun har safar yangi buyurtma berish kerak bo&apos;ladi.
      </div>

      <h2 id="holat">Holat → ehtimoliy sabab → nima qilish kerak</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Holat</th><th className="px-4 py-3 text-left">Ehtimoliy sabab</th><th className="px-4 py-3 text-left">Amal</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Muddat yangi tugadi, imkoniyatlar o&apos;chdi</td><td className="px-4 py-3">Bu normal holat — avtomatik uzaytirish yo&apos;q edi</td><td className="px-4 py-3">Botda yoki do&apos;konda yangi muddat tanlang</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">App Store/Google Play&apos;da &quot;Obuna tugagan&quot; deb ko&apos;rsatilmoqda</td><td className="px-4 py-3">Kartada mablag&apos; yetmadi yoki obuna avvalroq bekor qilingan</td><td className="px-4 py-3">To&apos;lov usulini yangilab, obunani qayta yoqing</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">{siteConfig.bot} orqali oldin xarid qilingan, endi muddat tugagan</td><td className="px-4 py-3">Bu bir martalik to&apos;lov edi, avtomatik uzaymaydi</td><td className="px-4 py-3">Botda yangi buyurtma bering, @username&apos;ni qayta kiriting</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Muddat tugashiga bir necha kun qoldi</td><td className="px-4 py-3">Hali tugamagan, faqat eslatma</td><td className="px-4 py-3">Oldindan yangi muddat sotib olib, tanaffussiz davom ettirish mumkin</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Yangilagandan keyin ham Premium ko&apos;rinmayapti</td><td className="px-4 py-3">To&apos;lov hali tasdiqlanmagan yoki @username xato kiritilgan</td><td className="px-4 py-3">30 daqiqa kuting, keyin buyurtma ID&apos;si bilan supportga yozing</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="uzgets">{siteConfig.bot} orqali eng tez yangilash</h2>
      <p>
        Muddati tugagan Premium&apos;ni tiklashning eng tez yo&apos;li — {siteConfig.bot}dan yangi
        muddat tanlab, bir martalik to&apos;lov qilish. Karta ma&apos;lumotlari saqlanmaydi va
        avtomatik uzaytirish bo&apos;lmaydi, shuning uchun keyingi safar ham xuddi shu jarayonni
        takrorlaysiz:
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[480px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Muddat</th><th className="px-4 py-3 text-left">Narx</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">3 oy</td><td className="px-4 py-3">{formatUzs(P3.priceUzs)}</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">6 oy</td><td className="px-4 py-3">{formatUzs(P6.priceUzs)}</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">12 oy</td><td className="px-4 py-3">{formatUzs(P12.priceUzs)}</td></tr>
          </tbody>
        </table>
      </div>
      <ol>
        <li>{siteConfig.bot}ni oching va <strong>&quot;Premium sotib olish&quot;</strong> bo&apos;limini tanlang.</li>
        <li>3, 6 yoki 12 oylik muddatlardan birini tanlang.</li>
        <li>Premium biriktiriladigan @username&apos;ni kiriting va tekshiring.</li>
        <li>UzCard, Humo yoki Click orqali to&apos;lovni yakunlang — odatda 2–5 daqiqada faollashadi.</li>
      </ol>
      <p>
        Narxlar va muddatlar haqida batafsil <Link href="/premium" className="text-[var(--primary)] hover:underline">/premium</Link> bo&apos;limida
        yoki <Link href="/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">Premium narxlari va paketlari</Link> qo&apos;llanmasida bor.
      </p>
      <InlineBotCTA lang="uz" text="Muddat tugadimi? Botda yangi paketni tanlab, darhol qayta faollashtiring." />

      <h2 id="app-store">App Store orqali qayta yoqish</h2>
      <p>Agar Premium App Store obunasi sifatida olingan bo&apos;lsa va muddati tugagan bo&apos;lsa:</p>
      <ol>
        <li><strong>Sozlamalar → ismingiz (Apple ID) → Obunalar (Subscriptions)</strong> bo&apos;limini oching.</li>
        <li><strong>Telegram Premium</strong> yoki <strong>Telegram Messenger</strong>ni toping.</li>
        <li>Obuna &quot;tugagan&quot; yoki &quot;faol emas&quot; deb ko&apos;rsatilsa, <strong>Obunaga qayta yozilish</strong> tugmasini bosing.</li>
        <li>To&apos;lov muvaffaqiyatsiz bo&apos;lgani sababli tugagan bo&apos;lsa, avval <strong>To&apos;lov usuli</strong> bo&apos;limida kartani yangilang.</li>
      </ol>

      <h2 id="google-play">Google Play orqali qayta yoqish</h2>
      <ol>
        <li><strong>Google Play → profil belgisi → To&apos;lovlar va obunalar → Obunalar</strong> bo&apos;limiga o&apos;ting.</li>
        <li>Ro&apos;yxatdan <strong>Telegram</strong>ni tanlang.</li>
        <li>Obuna tugagan bo&apos;lsa, <strong>Qayta obuna bo&apos;lish</strong> tugmasini bosing.</li>
        <li>Kerak bo&apos;lsa, <strong>To&apos;lov usullari</strong> bo&apos;limida bank kartasini yangilang yoki almashtiring.</li>
      </ol>
      <p>Kompyuterdan ham amalga oshirish mumkin: <strong>play.google.com/store/account/subscriptions</strong> manziliga kirib, Telegram qatorida qayta faollashtiring.</p>

      <h2 id="muddat">Qaysi muddatni tanlash kerak?</h2>
      <p>
        Uzoq muddatda foydalanishni rejalashtirsangiz, 6 yoki 12 oylik paket oylik narxni pasaytiradi.
        Muddatlarni oylik-oylik solishtirish uchun{' '}
        <Link href="/blog/telegram-premium-12-oylik-narxi" className="text-[var(--primary)] hover:underline">
          12 oylik narx qo&apos;llanmasi
        </Link>ga qarang. Agar bu safar faqat sinab ko&apos;rmoqchi bo&apos;lsangiz, 3 oylik paket
        eng kam boshlang&apos;ich to&apos;lovni talab qiladi.
      </p>
      <p>
        Muddat qachon tugashini oldindan bilib, tanaffussiz yangilash haqida{' '}
        <Link href="/blog/telegram-premium-obunasini-bekor-qilish" className="text-[var(--primary)] hover:underline">
          obunani boshqarish qo&apos;llanmasi
        </Link>da ham ma&apos;lumot bor.
      </p>
      <p>
        <strong>Yubormang:</strong> yangilash jarayonida hech kim sizdan Telegram login/SMS kodi,
        2FA paroli yoki karta CVV kodini so&apos;ramaydi. Bunday ma&apos;lumot talab qilinsa, bu
        firibgarlik belgisi.
      </p>
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
          <li><a href="#nima-boladi" className="hover:text-[var(--primary)] hover:underline">Что происходит по окончании срока?</a></li>
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Статус → причина → действие</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Продление через Uzgets</a></li>
          <li><a href="#app-store" className="hover:text-[var(--primary)] hover:underline">Повторная активация в App Store</a></li>
          <li><a href="#google-play" className="hover:text-[var(--primary)] hover:underline">Повторная активация в Google Play</a></li>
          <li><a href="#muddat" className="hover:text-[var(--primary)] hover:underline">Какой срок выбрать?</a></li>
        </ol>
      </nav>

      <h2 id="nima-boladi">Что происходит, когда срок Premium заканчивается?</h2>
      <p>
        По окончании срока аккаунт <strong>сразу</strong> переходит на обычный (бесплатный) режим
        Telegram. Сообщения, чаты, каналы, папки и файлы полностью сохраняются — ничего не
        удаляется. Отключаются только функции Premium (загрузка файлов до 4 ГБ, премиум-эмодзи и
        стикеры, ускоренная загрузка и т.д.). После продления эти функции сразу восстанавливаются.
      </p>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Важно:</strong> Premium, купленный через бота-посредника вроде Uzgets — это разовая
        оплата. Он <em>не продлевается автоматически</em>, поэтому окончание срока — это не
        проблема, а ожидаемое поведение. Для продления каждый раз нужно оформлять новый заказ.
      </div>

      <h2 id="holat">Статус → возможная причина → действие</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Статус</th><th className="px-4 py-3 text-left">Возможная причина</th><th className="px-4 py-3 text-left">Действие</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Срок только закончился, функции отключились</td><td className="px-4 py-3">Нормальная ситуация — автопродления не было</td><td className="px-4 py-3">Выберите новый срок в боте или магазине</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">В App Store/Google Play показано «Подписка истекла»</td><td className="px-4 py-3">Не хватило средств на карте или подписка была отменена ранее</td><td className="px-4 py-3">Обновите способ оплаты и повторно активируйте подписку</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Ранее куплено через {siteConfig.bot}, теперь срок истёк</td><td className="px-4 py-3">Это была разовая оплата, автопродления нет</td><td className="px-4 py-3">Оформите новый заказ в боте, укажите @username заново</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">До окончания срока осталось несколько дней</td><td className="px-4 py-3">Срок ещё не истёк, это просто напоминание</td><td className="px-4 py-3">Купите новый срок заранее, чтобы избежать перерыва</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">После продления Premium всё ещё не виден</td><td className="px-4 py-3">Платёж ещё не подтверждён или указан неверный @username</td><td className="px-4 py-3">Подождите 30 минут, затем напишите в поддержку с ID заказа</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="uzgets">Самый быстрый способ продления через {siteConfig.bot}</h2>
      <p>
        Быстрее всего восстановить истёкший Premium — выбрать новый срок в {siteConfig.bot} и
        оплатить разовым платежом. Данные карты не сохраняются, автопродления нет, поэтому в
        следующий раз процесс повторяется так же:
      </p>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[480px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Срок</th><th className="px-4 py-3 text-left">Цена</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">3 месяца</td><td className="px-4 py-3">{formatUzs(P3.priceUzs)}</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">6 месяцев</td><td className="px-4 py-3">{formatUzs(P6.priceUzs)}</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">12 месяцев</td><td className="px-4 py-3">{formatUzs(P12.priceUzs)}</td></tr>
          </tbody>
        </table>
      </div>
      <ol>
        <li>Откройте {siteConfig.bot} и выберите раздел <strong>«Купить Premium»</strong>.</li>
        <li>Выберите срок — 3, 6 или 12 месяцев.</li>
        <li>Укажите и проверьте @username, на который будет привязан Premium.</li>
        <li>Оплатите через UzCard, Humo или Click — обычно активируется за 2–5 минут.</li>
      </ol>
      <p>
        Подробнее о ценах и сроках — в разделе <Link href="/ru/premium" className="text-[var(--primary)] hover:underline">/ru/premium</Link> или
        в <Link href="/ru/blog/telegram-premium-narxlari-paketlar" className="text-[var(--primary)] hover:underline">гиде по ценам и пакетам Premium</Link>.
      </p>
      <InlineBotCTA lang="ru" text="Срок истёк? Выберите новый пакет в боте и активируйте Premium заново." />

      <h2 id="app-store">Повторная активация через App Store</h2>
      <p>Если Premium был оформлен как подписка через App Store и срок истёк:</p>
      <ol>
        <li>Откройте <strong>Настройки → ваше имя (Apple ID) → Подписки (Subscriptions)</strong>.</li>
        <li>Найдите <strong>Telegram Premium</strong> или <strong>Telegram Messenger</strong>.</li>
        <li>Если подписка отмечена как «истекла» или «неактивна», нажмите <strong>Возобновить подписку</strong>.</li>
        <li>Если срок истёк из-за неудачного платежа, сначала обновите карту в разделе <strong>Способ оплаты</strong>.</li>
      </ol>

      <h2 id="google-play">Повторная активация через Google Play</h2>
      <ol>
        <li>Перейдите в <strong>Google Play → значок профиля → Платежи и подписки → Подписки</strong>.</li>
        <li>Найдите в списке <strong>Telegram</strong>.</li>
        <li>Если подписка истекла, нажмите <strong>Возобновить подписку</strong>.</li>
        <li>При необходимости обновите или замените банковскую карту в разделе <strong>Способы оплаты</strong>.</li>
      </ol>
      <p>Также можно через компьютер: зайдите на <strong>play.google.com/store/account/subscriptions</strong> и возобновите подписку Telegram там.</p>

      <h2 id="muddat">Какой срок выбрать?</h2>
      <p>
        Если планируете пользоваться Premium долго, пакет на 6 или 12 месяцев снижает цену за
        месяц. Сравнение сроков по месячной стоимости — в{' '}
        <Link href="/ru/blog/telegram-premium-12-oylik-narxi" className="text-[var(--primary)] hover:underline">
          гиде по цене на 12 месяцев
        </Link>. Если хотите сначала попробовать, пакет на 3 месяца требует наименьшего
        первоначального платежа.
      </p>
      <p>
        О том, как заранее узнать дату окончания и продлить без перерыва, читайте в{' '}
        <Link href="/ru/blog/telegram-premium-obunasini-bekor-qilish" className="text-[var(--primary)] hover:underline">
          гиде по управлению подпиской
        </Link>.
      </p>
      <p>
        <strong>Не отправляйте:</strong> в процессе продления никто не запрашивает код входа/SMS
        Telegram, пароль 2FA или CVV карты. Если такие данные требуют — это признак мошенничества.
      </p>
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
      title: 'Telegram Premium muddati tugadi — qanday yangilash mumkin?',
      description:
        "Premium muddati tugagach nima bo'lishi, ma'lumot yo'qolmasligi va Uzgets, App Store yoki Google Play orqali qanday tezda qayta faollashtirish mumkinligi bo'yicha to'liq qo'llanma.",
      metaTitle: "Premium muddati tugadi — qanday yangilash mumkin?",
      metaDescription:
        "Telegram Premium muddati tugadimi? Nima bo'lishi, Uzgets, App Store va Google Play orqali qanday qayta faollashtirish va qaysi muddatni tanlash kerakligi haqida aniq qo'llanma.",
      ogDescription:
        "Premium muddati tugasa, ma'lumot yo'qolmaydi — faqat funksiyalar o'chadi. Uzgets, App Store va Google Play orqali qayta faollashtirish qadamlari shu yerda.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Premium muddati tugasa, xabarlarim yoki fayllarim yo'qoladimi?", answer: "Yo'q. Chatlar, kanallar, papkalar va fayllar to'liq saqlanadi — faqat Premium'ga xos imkoniyatlar (4 GB fayl, premium emoji va h.k.) o'chadi." },
        { question: "Uzgets orqali sotib olingan Premium muddati tugasa, avtomatik yangilanadimi?", answer: "Yo'q. Bu bir martalik to'lov, avtomatik uzaytirish yo'q. Davom ettirish uchun botda yangi muddat tanlab, qayta buyurtma berish kerak." },
        { question: "App Store yoki Google Play orqali olingan Premium muddati tugasa nima qilaman?", answer: "Tegishli do'kondagi Obunalar bo'limini oching, Telegram'ni topib 'Obunaga qayta yozilish' yoki 'Qayta obuna bo'lish'ni bosing. Muddat to'lov xatosi sabab tugagan bo'lsa, avval to'lov usulini yangilang." },
        { question: "Yangilash uchun eski kanalni ishlatishim shartmi?", answer: "Yo'q. Istalgan safar Uzgets, App Store yoki Google Play'dan birini tanlab, yangi muddat sotib olish mumkin." },
        { question: "3, 6 va 12 oylik muddatlardan qaysi biri tejamliroq?", answer: "Uzoq muddatda foydalanish rejalashtirilsa, 6 yoki 12 oylik paket oylik narxni pasaytiradi. Aniq raqamlar Premium narxlari qo'llanmasida keltirilgan." },
        { question: "Yangilagandan keyin Premium qancha vaqtda faollashadi?", answer: "Uzgets orqali odatda 2-5 daqiqada. App Store yoki Google Play orqali qayta yoqilganda ham xuddi shu oraliqda faollashishi kutiladi; 30 daqiqadan ko'p vaqt o'tsa, support bilan bog'laning." },
      ],
      finalCtaHeading: 'Premium muddatini hozir yangilamoqchimisiz?',
      finalCtaBody: `${siteConfig.bot}da 3, 6 yoki 12 oylik paketni tanlab, @username'ni tekshiring va bir necha daqiqada qayta faollashtiring.`,
    },
    ru: {
      title: 'Срок Telegram Premium истёк — как продлить?',
      description:
        'Что происходит по окончании срока Premium, теряются ли данные и как быстро возобновить подписку через Uzgets, App Store или Google Play.',
      metaTitle: 'Срок Premium истёк — как продлить?',
      metaDescription:
        'Срок Telegram Premium истёк? Что происходит, как продлить через Uzgets, App Store и Google Play, и какой срок выбрать — подробное руководство.',
      ogDescription:
        'Если срок Premium истёк, данные не пропадают — отключаются только функции. Шаги возобновления через Uzgets, App Store и Google Play — здесь.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Если срок Telegram Premium истёк, пропадут ли сообщения или файлы?', answer: 'Нет. Чаты, каналы, папки и файлы полностью сохраняются — отключаются только функции Premium (файлы до 4 ГБ, премиум-эмодзи и т.д.).' },
        { question: 'Продлится ли автоматически Premium, купленный через Uzgets, после истечения срока?', answer: 'Нет. Это разовая оплата без автопродления. Чтобы продолжить, нужно выбрать новый срок и оформить новый заказ в боте.' },
        { question: 'Что делать, если истёк срок Premium, купленного через App Store или Google Play?', answer: 'Откройте раздел подписок в соответствующем магазине, найдите Telegram и нажмите «Возобновить подписку». Если срок истёк из-за неудачного платежа, сначала обновите способ оплаты.' },
        { question: 'Обязательно ли продлевать через тот же канал?', answer: 'Нет. В любой раз можно выбрать Uzgets, App Store или Google Play и купить новый срок.' },
        { question: 'Какой срок выгоднее — 3, 6 или 12 месяцев?', answer: 'При долгосрочном использовании пакеты на 6 или 12 месяцев снижают цену за месяц. Точные цифры — в гиде по ценам Premium.' },
        { question: 'Через сколько активируется Premium после продления?', answer: 'Через Uzgets обычно за 2-5 минут. При повторной активации через App Store или Google Play ожидается похожий срок; если прошло больше 30 минут, обратитесь в поддержку.' },
      ],
      finalCtaHeading: 'Хотите продлить Premium прямо сейчас?',
      finalCtaBody: `Выберите пакет на 3, 6 или 12 месяцев в ${siteConfig.bot}, проверьте @username и активируйте Premium за пару минут.`,
    },
  },
}
