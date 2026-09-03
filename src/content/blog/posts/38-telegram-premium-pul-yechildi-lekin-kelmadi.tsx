import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'telegram-premium-pul-yechildi-lekin-kelmadi'
const TODAY = '2026-09-03'
const P3 = PREMIUM_PERIODS.find((p) => p.months === 3)!

function UzAnswerBox() {
  return (
    <p>
      Pul yechilgan, lekin Telegram Premium hali akkauntga biriktirilmagan bo&apos;lsa —
      avval oddiy kechikish (odatda 2–5, sekin holatda 10–15 daqiqa) ekanligini tekshiring.
      30 daqiqadan ko&apos;p vaqt o&apos;tsa va Premium hali yo&apos;q bo&apos;lsa, qayta
      to&apos;lamang: buyurtma ID&apos;si va chek bilan xarid qilingan kanalning (
      {siteConfig.bot}, App Store yoki Google Play) supportiga murojaat qiling. Muammo
      sotuvchi tarafida bo&apos;lsa, mahsulot qayta yuboriladi yoki to&apos;lov qaytariladi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Если деньги списаны, а Telegram Premium ещё не появился на аккаунте — сначала
      проверьте, не обычная ли это задержка (обычно 2–5, при сбоях 10–15 минут). Если
      прошло больше 30 минут, а Premium так и не пришёл — не платите повторно: обратитесь
      в поддержку канала покупки ({siteConfig.bot}, App Store или Google Play) с ID заказа
      и чеком. Если проблема на стороне продавца, товар отправят повторно или вернут деньги.
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
          <a href="https://telegram.org/faq_premium" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Premium FAQ
          </a>{' '}
          — {uz ? "obuna faollashish va xarid manbai bo'yicha rasmiy ma'lumot" : 'официальные сведения об активации подписки и источнике покупки'}
        </li>
        <li>
          <a href="https://support.apple.com/108095" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Apple Support
          </a>{' '}
          — {uz ? "App Store'da kutilayotgan yoki tasdiqlanmagan to'lovni tekshirish yo'riqnomasi" : 'инструкция по проверке ожидающего или неподтверждённого платежа в App Store'}
        </li>
        <li>
          <a href="https://support.google.com/googleplay/answer/1267137" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Google Play Help
          </a>{' '}
          — {uz ? "Google Play to'lov holati va xaridni tekshirish bo'yicha rasmiy sahifa" : 'официальная страница проверки статуса платежа и покупки Google Play'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz
          ? "Manbalar va Uzgets xizmat shartlarining 4-5-bandlari (faollashtirish, buyurtma muammolari va qaytarib berish) 2026-yil 3-sentabrda tekshirildi."
          : 'Источники и пункты 4-5 условий сервиса Uzgets (активация, проблемы заказа и возврат) проверены 3 сентября 2026 года.'}
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
          <li><a href="#qancha-kutish" className="hover:text-[var(--primary)] hover:underline">Qancha kutish normal?</a></li>
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Holat → sabab → amal</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Uzgets orqali xarid qilingan bo&apos;lsa</a></li>
          <li><a href="#app-store" className="hover:text-[var(--primary)] hover:underline">App Store yoki Google Play orqali</a></li>
          <li><a href="#qaytarish" className="hover:text-[var(--primary)] hover:underline">Pul qaytariladimi?</a></li>
          <li><a href="#support" className="hover:text-[var(--primary)] hover:underline">Supportga nima yuborish kerak?</a></li>
        </ol>
      </nav>

      <h2 id="qancha-kutish">Pul yechilgandan keyin Premium qancha vaqtda kelishi kerak?</h2>
      <p>
        {siteConfig.bot} orqali to&apos;lov tasdiqlangach, Premium odatda <strong>2–5 daqiqada</strong> akkauntga
        biriktiriladi. To&apos;lov tizimi sekinlashsa, bu <strong>10–15 daqiqagacha</strong> cho&apos;zilishi
        mumkin — bu hali muammo emas. Faqat <strong>30 daqiqadan</strong> ko&apos;p vaqt o&apos;tib, Premium
        hamon ko&apos;rinmasa, buni anomaliya deb hisoblab, quyidagi qadamlarga o&apos;ting.
      </p>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Muhim:</strong> 30 daqiqa ichida qayta to&apos;lov qilmang va ikkinchi buyurtma bermang.
        Agar birinchi to&apos;lov kechikib bo&apos;lsa ham yetib borsa, ikkita alohida to&apos;lov uchun
        pul yechilgan bo&apos;lib qoladi.
      </div>

      <h2 id="holat">Holat → ehtimoliy sabab → nima qilish kerak</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Holat</th><th className="px-4 py-3 text-left">Ehtimoliy sabab</th><th className="px-4 py-3 text-left">Amal</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Pul yechildi, 5 daqiqadan kam vaqt o&apos;tdi</td><td className="px-4 py-3">Normal qayta ishlash vaqti</td><td className="px-4 py-3">Kuting, hech narsa qilish shart emas</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Pul yechildi, 5–30 daqiqa o&apos;tdi</td><td className="px-4 py-3">To&apos;lov tizimi yoki tarmoq sekinligi</td><td className="px-4 py-3">Bot ichida buyurtma holatini kuzating, qayta to&apos;lamang</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">30 daqiqadan ko&apos;p o&apos;tdi, holat &quot;kutilmoqda&quot;</td><td className="px-4 py-3">Texnik nosozlik yoki tasdiqlash yakunlanmagan</td><td className="px-4 py-3">Chek va buyurtma ID&apos;si bilan supportga murojaat qiling</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Bank &quot;bloklangan&quot;/&quot;pending&quot; ko&apos;rsatadi</td><td className="px-4 py-3">Yakuniy status hali aniqlanmagan</td><td className="px-4 py-3">Qayta to&apos;lamang; bankning yakuniy holatini kuting</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Premium App Store/Google Play&apos;da ko&apos;rinmayapti</td><td className="px-4 py-3">Do&apos;kon tomonidagi kechikish yoki xarid tarixi yangilanmagan</td><td className="px-4 py-3">Xarid tarixini tekshiring, keyin do&apos;kon supportiga yozing</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Noto&apos;g&apos;ri @username kiritilgan</td><td className="px-4 py-3">Foydalanuvchi xatosi</td><td className="px-4 py-3">Darhol supportga yozing — akkaunt hali topilmagan bo&apos;lishi mumkin</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="uzgets">Uzgets orqali xarid qilingan bo&apos;lsa</h2>
      <p>
        Uzgets&apos;da xarid faqat <a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> orqali
        amalga oshadi — saytning o&apos;zida to&apos;lov qilinmaydi. Masalan, 3 oylik paket ({formatUzs(P3.priceUzs)})
        uchun to&apos;lov tasdiqlangach, bot avtomatik ravishda ko&apos;rsatilgan @username&apos;ga Premium&apos;ni biriktiradi.
      </p>
      <ol>
        <li>Botda <strong>&quot;Mening buyurtmalarim&quot;</strong> bo&apos;limini ochib, buyurtma holatini ko&apos;ring.</li>
        <li>Kiritilgan @username to&apos;g&apos;ri va profil ochiq (yashirin emas) ekanini tekshiring.</li>
        <li>30 daqiqadan kam vaqt o&apos;tgan bo&apos;lsa, kuting — bu hali normal oraliqda.</li>
        <li>30 daqiqadan ko&apos;p o&apos;tsa, yangi buyurtma bermasdan, chek va buyurtma ID&apos;si bilan bot supportiga yozing.</li>
      </ol>
      <p>
        Uzgets xizmat shartlariga ko&apos;ra, agar to&apos;lov amalga oshirilgan, lekin mahsulot akkauntga
        biriktirilmagan bo&apos;lsa, har bir holat alohida ko&apos;rib chiqiladi: muammo sotuvchi tarafida
        bo&apos;lsa, mahsulot qayta yuboriladi yoki to&apos;lov qaytariladi.
      </p>
      <InlineBotCTA lang="uz" text="Buyurtma holatini botda tekshiring yoki yangi buyurtma bering." />

      <h2 id="app-store">App Store yoki Google Play orqali sotib olingan bo&apos;lsa</h2>
      <p>
        Agar Premium ilova ichidan (App Store yoki Google Play orqali) obuna sifatida olingan bo&apos;lsa,
        to&apos;lovni Uzgets emas, balki Apple yoki Google qayta ishlaydi. Kechikish yoki &quot;pul
        yechildi, Premium yo&apos;q&quot; holatida quyidagilarni tekshiring:
      </p>
      <h3>iPhone va iPad</h3>
      <ol>
        <li><strong>Sozlamalar → ismingiz → Media &amp; Purchases → Xarid tarixi</strong> bo&apos;limida to&apos;lov qayd etilganini tekshiring.</li>
        <li>Telegram ilovasini yopib qayta oching — Sozlamalar → Telegram Premium bo&apos;limi yangilanadimi, ko&apos;ring.</li>
        <li>Xarid tarixida ko&apos;rinsa-yu Telegram&apos;da ko&apos;rinmasa, ilovadan chiqib qayta kiring.</li>
        <li>Hech narsa yordam bermasa, Apple Support&apos;ning &quot;Report a Problem&quot; sahifasi orqali murojaat qiling.</li>
      </ol>
      <h3>Android va Google Play</h3>
      <ol>
        <li><strong>Google Play → Profil → To&apos;lovlar va obunalar → Buyurtmalar tarixi</strong> bo&apos;limini tekshiring.</li>
        <li>Telegram ilovasini qayta ishga tushiring.</li>
        <li>Buyurtma &quot;Yakunlangan&quot; deb ko&apos;rinsa-yu Premium faol bo&apos;lmasa, Google Play Help orqali murojaat qiling.</li>
      </ol>

      <h2 id="qaytarish">Pul qaytariladimi?</h2>
      <p>
        Uzgets orqali xaridda: muammo sotuvchi tarafida bo&apos;lsa (masalan, to&apos;lov tasdiqlangan,
        lekin texnik nosozlik sababli biriktirilmagan) — mahsulot qayta yuboriladi yoki to&apos;lov
        qaytariladi. Agar sabab foydalanuvchi xatosi bo&apos;lsa (noto&apos;g&apos;ri @username, mavjud
        bo&apos;lmagan akkaunt), bu holat alohida ko&apos;rib chiqiladi. Mahsulot muvaffaqiyatli
        yetkazilgandan so&apos;ng (Premium akkauntga biriktirilgan) to&apos;lov qaytarilmaydi.
      </p>
      <p>
        App Store yoki Google Play orqali xaridda qaytarish tegishli do&apos;konning o&apos;z refund
        siyosatiga bo&apos;ysunadi — bu holatda Uzgets to&apos;lovni boshqarmaydi.
      </p>
      <p>
        Stars xaridida shunga o&apos;xshash holat yuz bersa,{' '}
        <Link href="/blog/telegram-stars-kelmadi-sabablar-yechim" className="text-[var(--primary)] hover:underline">
          &quot;Telegram Stars kelmadi&quot; diagnostikasi
        </Link>ga qarang. To&apos;lovning o&apos;zi rad etilsa (mablag&apos; hali yechilmagan bo&apos;lsa),
        bu boshqa holat —{' '}
        <Link href="/blog/telegram-stars-tolov-otmadi-yechim" className="text-[var(--primary)] hover:underline">
          to&apos;lov o&apos;tmasligi bo&apos;yicha qo&apos;llanma
        </Link>ni ko&apos;ring.
      </p>

      <h2 id="support">Supportga nimalarni yuborish kerak?</h2>
      <ul>
        <li>Buyurtma yoki tranzaksiya ID&apos;si;</li>
        <li>To&apos;lov sanasi, vaqti va summasi;</li>
        <li>Bank yoki to&apos;lov tizimi cheki (skrinshot);</li>
        <li>Buyurtmada kiritilgan @username;</li>
        <li>Qaysi kanaldan xarid qilingani ({siteConfig.bot}, App Store yoki Google Play).</li>
      </ul>
      <p>
        <strong>Yubormang:</strong> Telegram login/SMS kodi, 2FA paroli, karta CVV kodi yoki PIN.
        Buyurtmani tekshirish uchun bunday maxfiy ma&apos;lumotlar hech qachon talab qilinmaydi.
      </p>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Uzgets bo&apos;yicha ma&apos;lumot ichki xizmat shartlariga, App Store/Google Play bo&apos;yicha ma&apos;lumot esa Apple va Google&apos;ning rasmiy yordam sahifalariga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#qancha-kutish" className="hover:text-[var(--primary)] hover:underline">Сколько ждать — это нормально?</a></li>
          <li><a href="#holat" className="hover:text-[var(--primary)] hover:underline">Статус → причина → действие</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Если покупка через Uzgets</a></li>
          <li><a href="#app-store" className="hover:text-[var(--primary)] hover:underline">App Store или Google Play</a></li>
          <li><a href="#qaytarish" className="hover:text-[var(--primary)] hover:underline">Вернут ли деньги?</a></li>
          <li><a href="#support" className="hover:text-[var(--primary)] hover:underline">Что отправить в поддержку?</a></li>
        </ol>
      </nav>

      <h2 id="qancha-kutish">Через сколько после списания должен прийти Premium?</h2>
      <p>
        После подтверждения оплаты через {siteConfig.bot} Premium обычно активируется за{' '}
        <strong>2–5 минут</strong>. При замедлении платёжной системы это может растянуться до{' '}
        <strong>10–15 минут</strong> — это ещё не проблема. Только если прошло больше{' '}
        <strong>30 минут</strong>, а Premium так и не появился, считайте это отклонением от нормы
        и переходите к следующим шагам.
      </p>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Важно:</strong> в течение 30 минут не платите повторно и не создавайте второй заказ.
        Если первый платёж всё же дойдёт с задержкой, у вас останутся списанными деньги за два
        отдельных платежа.
      </div>

      <h2 id="holat">Статус → возможная причина → действие</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Статус</th><th className="px-4 py-3 text-left">Возможная причина</th><th className="px-4 py-3 text-left">Действие</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Деньги списаны, прошло меньше 5 минут</td><td className="px-4 py-3">Обычное время обработки</td><td className="px-4 py-3">Подождите, действий не требуется</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Списано, прошло 5–30 минут</td><td className="px-4 py-3">Замедление платёжной системы или сети</td><td className="px-4 py-3">Следите за статусом заказа в боте, не платите повторно</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Прошло больше 30 минут, статус «в обработке»</td><td className="px-4 py-3">Технический сбой или незавершённое подтверждение</td><td className="px-4 py-3">Обратитесь в поддержку с чеком и ID заказа</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Банк показывает «заблокировано»/«pending»</td><td className="px-4 py-3">Итоговый статус ещё не определён</td><td className="px-4 py-3">Не платите повторно; дождитесь финального статуса банка</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Premium не виден в App Store/Google Play</td><td className="px-4 py-3">Задержка на стороне магазина или не обновилась история покупок</td><td className="px-4 py-3">Проверьте историю покупок, затем обратитесь в поддержку магазина</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Указан неверный @username</td><td className="px-4 py-3">Ошибка пользователя</td><td className="px-4 py-3">Сразу напишите в поддержку — аккаунт мог не быть найден</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="uzgets">Если покупка через Uzgets</h2>
      <p>
        Покупка в Uzgets проходит только через <a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> —
        на самом сайте оплата не производится. Например, за пакет на 3 месяца ({formatUzs(P3.priceUzs)})
        после подтверждения оплаты бот автоматически привязывает Premium к указанному @username.
      </p>
      <ol>
        <li>Откройте в боте раздел <strong>«Мои заказы»</strong> и посмотрите статус.</li>
        <li>Проверьте, что указан верный @username и профиль не скрыт.</li>
        <li>Если прошло меньше 30 минут — подождите, это ещё в пределах нормы.</li>
        <li>Если прошло больше 30 минут, не создавайте новый заказ — напишите в поддержку бота с чеком и ID заказа.</li>
      </ol>
      <p>
        По условиям сервиса Uzgets, если оплата прошла, но товар не был привязан к аккаунту,
        каждый случай рассматривается индивидуально: если проблема на стороне продавца — товар
        отправляют повторно или возвращают деньги.
      </p>
      <InlineBotCTA lang="ru" text="Проверьте статус заказа в боте или оформите новый заказ." />

      <h2 id="app-store">Если куплено через App Store или Google Play</h2>
      <p>
        Если Premium оформлен как подписка внутри приложения, оплату обрабатывает не Uzgets, а
        Apple или Google. При задержке или ситуации «деньги списаны, Premium нет» проверьте:
      </p>
      <h3>iPhone и iPad</h3>
      <ol>
        <li><strong>Настройки → ваше имя → Media & Purchases → История покупок</strong> — платёж зафиксирован?</li>
        <li>Закройте и снова откройте Telegram — обновился ли раздел Настройки → Telegram Premium.</li>
        <li>Если в истории покупок платёж есть, а в Telegram нет — выйдите из аккаунта и войдите снова.</li>
        <li>Если не помогает, обратитесь через «Report a Problem» в поддержку Apple.</li>
      </ol>
      <h3>Android и Google Play</h3>
      <ol>
        <li>Проверьте <strong>Google Play → Профиль → Платежи и подписки → История заказов</strong>.</li>
        <li>Перезапустите приложение Telegram.</li>
        <li>Если заказ отмечен «Завершён», а Premium не активен — обратитесь в поддержку Google Play.</li>
      </ol>

      <h2 id="qaytarish">Вернут ли деньги?</h2>
      <p>
        При покупке через Uzgets: если проблема на стороне продавца (например, оплата подтверждена,
        но из-за технического сбоя товар не привязан) — товар отправляют повторно или возвращают
        деньги. Если причина — ошибка пользователя (неверный @username, несуществующий аккаунт),
        случай рассматривается индивидуально. После успешной доставки (Premium привязан к аккаунту)
        деньги не возвращаются.
      </p>
      <p>
        При покупке через App Store или Google Play возврат регулируется политикой возврата
        соответствующего магазина — в этом случае Uzgets не управляет платежом.
      </p>
      <p>
        Если похожая ситуация произошла с покупкой Stars, смотрите{' '}
        <Link href="/ru/blog/telegram-stars-kelmadi-sabablar-yechim" className="text-[var(--primary)] hover:underline">
          диагностику «Telegram Stars не пришли»
        </Link>. Если сам платёж отклонён (деньги ещё не списаны) — это другая ситуация, см.{' '}
        <Link href="/ru/blog/telegram-stars-tolov-otmadi-yechim" className="text-[var(--primary)] hover:underline">
          гид по неудачным платежам
        </Link>.
      </p>

      <h2 id="support">Что отправить в поддержку?</h2>
      <ul>
        <li>ID заказа или транзакции;</li>
        <li>дату, время и сумму платежа;</li>
        <li>чек банка или платёжной системы (скриншот);</li>
        <li>указанный в заказе @username;</li>
        <li>канал покупки ({siteConfig.bot}, App Store или Google Play).</li>
      </ul>
      <p>
        <strong>Не отправляйте:</strong> код входа/SMS Telegram, пароль 2FA, CVV или PIN карты.
        Такие данные никогда не требуются для проверки заказа.
      </p>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Сведения об Uzgets основаны на условиях сервиса, а сведения об App Store/Google Play — на официальных страницах поддержки Apple и Google.</p>
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
      title: "Telegram Premium puli yechildi, lekin hali kelmadi — nima qilish kerak?",
      description: "Premium uchun pul yechilgan, lekin akkauntga biriktirilmagan bo'lsa, qancha kutish normal va qachon supportga murojaat qilish kerakligi bo'yicha aniq qo'llanma.",
      metaTitle: "Premium puli yechildi, lekin kelmadi — nima qilish kerak?",
      metaDescription: "Telegram Premium puli yechildi, lekin hali kelmadi? Qancha kutish normal, Uzgets, App Store va Google Play uchun aniq qadamlar va qaytarib berish shartlari.",
      ogDescription: "Pul yechilgan, Premium hali yo'q — 30 daqiqagacha kuting, keyin qayta to'lamasdan to'g'ri supportga murojaat qiling.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Premium uchun pul yechilgandan keyin qancha vaqtda kelishi kerak?", answer: "Odatda 2-5 daqiqada, to'lov tizimi sekinlashsa 10-15 daqiqagacha. 30 daqiqadan ko'p vaqt o'tsa, bu normal chegaradan chiqqan hisoblanadi." },
        { question: "30 daqiqadan keyin ham Premium kelmasa, qayta to'lasam bo'ladimi?", answer: "Yo'q. Qayta to'lamang va yangi buyurtma bermang — bu ikkita alohida to'lov uchun pul yechilishiga olib kelishi mumkin. Buyurtma ID'si va chek bilan supportga murojaat qiling." },
        { question: "Uzgets orqali xaridda pul qaytariladimi?", answer: "Agar muammo sotuvchi tarafida bo'lsa (masalan, texnik nosozlik), mahsulot qayta yuboriladi yoki to'lov qaytariladi. Foydalanuvchi xatosi (noto'g'ri @username) bo'lsa, holat alohida ko'rib chiqiladi. Muvaffaqiyatli yetkazilgandan keyin to'lov qaytarilmaydi." },
        { question: "App Store yoki Google Play orqali sotib olganda pul yechilib, Premium kelmasa nima qilaman?", answer: "Avval xarid tarixini (App Store yoki Google Play) tekshiring, Telegram'dan chiqib qayta kiring. Yordam bermasa, tegishli do'konning support xizmatiga (Apple Report a Problem yoki Google Play Help) murojaat qiling — bu holatda Uzgets to'lovni boshqarmaydi." },
        { question: "Supportga nimalarni yuborish kerak?", answer: "Buyurtma yoki tranzaksiya ID'si, to'lov sanasi/vaqti/summasi, bank cheki, buyurtmadagi @username va xarid qilingan kanal nomi." },
        { question: "Supportga karta CVV yoki Telegram kodini yuborish kerakmi?", answer: "Yo'q. CVV, PIN, Telegram login/SMS kodi va 2FA parolini hech kimga yubormang — buyurtmani tekshirish uchun bunday ma'lumotlar talab qilinmaydi." },
      ],
      finalCtaHeading: "Yangi Premium buyurtma bermoqchimisiz?",
      finalCtaBody: `Avvalgi to'lov holati aniqlangach, ${siteConfig.bot}'da 3, 6 yoki 12 oylik paketni tanlab, @username'ni tekshirib yangi buyurtma bering.`,
    },
    ru: {
      title: 'Деньги за Telegram Premium списаны, но он не пришёл — что делать?',
      description: 'Деньги за Premium списаны, но он не привязан к аккаунту? Сколько ждать — это нормально, и когда обращаться в поддержку.',
      metaTitle: 'Деньги за Premium списаны, но он не пришёл',
      metaDescription: 'Деньги за Telegram Premium списаны, но он не пришёл? Сколько ждать нормально, шаги для Uzgets, App Store и Google Play, условия возврата денег.',
      ogDescription: 'Деньги списаны, Premium ещё не пришёл — подождите до 30 минут, затем обратитесь в правильную поддержку без повторной оплаты.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Через сколько после списания должен прийти Premium?', answer: 'Обычно за 2-5 минут, при замедлении платёжной системы — до 10-15 минут. Если прошло больше 30 минут, это уже выходит за пределы нормы.' },
        { question: 'Можно ли заплатить повторно, если Premium не пришёл через 30 минут?', answer: 'Нет. Не платите повторно и не создавайте новый заказ — это может привести к списанию за два отдельных платежа. Обратитесь в поддержку с ID заказа и чеком.' },
        { question: 'Вернут ли деньги при покупке через Uzgets?', answer: 'Если проблема на стороне продавца (например, технический сбой), товар отправят повторно или вернут деньги. Если причина — ошибка пользователя (неверный @username), случай рассматривается индивидуально. После успешной доставки деньги не возвращаются.' },
        { question: 'Деньги списаны при покупке через App Store или Google Play, а Premium не пришёл — что делать?', answer: 'Сначала проверьте историю покупок (App Store или Google Play), выйдите из Telegram и войдите снова. Если не помогает, обратитесь в поддержку соответствующего магазина (Apple Report a Problem или Google Play Help) — в этом случае Uzgets не управляет платежом.' },
        { question: 'Что отправить в поддержку?', answer: 'ID заказа или транзакции, дату/время/сумму платежа, банковский чек, указанный в заказе @username и название канала покупки.' },
        { question: 'Нужно ли отправлять поддержке CVV карты или код Telegram?', answer: 'Нет. Никому не отправляйте CVV, PIN, код входа/SMS Telegram или пароль 2FA — такие данные не требуются для проверки заказа.' },
      ],
      finalCtaHeading: 'Хотите оформить новый заказ Premium?',
      finalCtaBody: `Убедившись в статусе предыдущего платежа, выберите пакет на 3, 6 или 12 месяцев в ${siteConfig.bot}, проверьте @username и оформите новый заказ.`,
    },
  },
}
