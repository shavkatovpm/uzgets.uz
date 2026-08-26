import Link from 'next/link'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import { siteConfig } from '@/config/site'
import type { BlogPost } from '../types'

const SLUG = 'telegram-stars-tolov-otmadi-yechim'
const TODAY = '2026-08-26'

function UzAnswerBox() {
  return (
    <p>
      Telegram Stars uchun to&apos;lov o&apos;tmasa, avval pul yechilgan-yechilmaganini va
      buyurtma holatini tekshiring. Pul yechilmagan bo&apos;lsa, balans, karta limiti,
      internet va to&apos;lov ma&apos;lumotlarini tekshirib, faqat bir marta qayta urinib
      ko&apos;ring. Pul yechilgan bo&apos;lsa, takroran to&apos;lamang: chek va buyurtma ID&apos;si
      bilan aynan to&apos;lovni qayta ishlagan xizmatga murojaat qiling.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Если оплата Telegram Stars не проходит, сначала проверьте, списались ли деньги и
      какой статус у заказа. Если списания нет, проверьте баланс, лимиты карты, интернет
      и платёжные данные, затем повторите попытку только один раз. Если деньги списаны,
      не платите повторно: сохраните чек и ID заказа и обратитесь в сервис, который
      обрабатывал платёж.
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
          <a href="https://telegram.org/tos/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Stars Terms of Service
          </a>{' '}
          — {uz ? 'Stars xarid kanallari va to‘lov protsessoriga murojaat qilish qoidasi' : 'каналы покупки Stars и правило обращения к платёжному оператору'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Telegram Stars API
          </a>{' '}
          — {uz ? 'hududiy xarid cheklovi va tranzaksiya manbalari bo‘yicha rasmiy hujjat' : 'официальная документация о региональных ограничениях и источниках транзакций'}
        </li>
        <li>
          <a href="https://support.apple.com/108095" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Apple Support
          </a>{' '}
          — {uz ? 'App Store’da rad etilgan to‘lovni tuzatish yo‘riqnomasi' : 'инструкция по исправлению отклонённого платежа в App Store'}
        </li>
        <li>
          <a href="https://support.google.com/googleplay/answer/1267137" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            Google Play Help
          </a>{' '}
          — {uz ? 'Google Play to‘lov xatolari bo‘yicha rasmiy diagnostika' : 'официальная диагностика ошибок оплаты Google Play'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {uz ? 'Manbalar va Uzgets xizmat qoidalari 2026-yil 26-avgustda tekshirildi.' : 'Источники и правила сервиса Uzgets проверены 26 августа 2026 года.'}
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
          <li><a href="#birinchi-qadam" className="hover:text-[var(--primary)] hover:underline">Birinchi qadam</a></li>
          <li><a href="#diagnostika" className="hover:text-[var(--primary)] hover:underline">Xato, sabab va yechim</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Uzgets orqali to‘lov</a></li>
          <li><a href="#app-store" className="hover:text-[var(--primary)] hover:underline">App Store va Google Play</a></li>
          <li><a href="#pul-yechildi" className="hover:text-[var(--primary)] hover:underline">Pul yechilgan holat</a></li>
          <li><a href="#support" className="hover:text-[var(--primary)] hover:underline">Support uchun ma’lumotlar</a></li>
        </ol>
      </nav>

      <h2 id="birinchi-qadam">Telegram Stars to&apos;lovi o&apos;tmasa, birinchi nima qilish kerak?</h2>
      <p><strong>Avval bank ilovasini ochib, pul haqiqatan yechilganmi va operatsiya qanday holatda ekanini tekshiring.</strong> Keyingi harakat aynan shunga bog&apos;liq:</p>
      <ul>
        <li><strong>Pul yechilmagan:</strong> xatoni tuzatib, bir marta qayta urinib ko&apos;rish mumkin.</li>
        <li><strong>Pul bloklangan yoki “kutilmoqda”:</strong> takroriy to&apos;lov qilmang; bank/to&apos;lov tizimidagi yakuniy holatni kuting.</li>
        <li><strong>Pul yechilgan:</strong> chekni saqlang va buyurtma holatini tekshiring; darhol ikkinchi buyurtma bermang.</li>
      </ul>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Muhim:</strong> Telegram&apos;ning o&apos;zi Stars xaridlarini qayta ishlamasligini,
        to&apos;lov muammosi tegishli protsessorga yuborilishi kerakligini aytadi. Shu sabab
        avval qayerda to&apos;laganingizni aniqlang: {siteConfig.bot}, App Store, Google Play
        yoki Telegram&apos;ning boshqa rasmiy xarid kanali.
      </div>

      <h2 id="diagnostika">Xato → ehtimoliy sabab → nima qilish kerak</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Belgi yoki xato</th><th className="px-4 py-3 text-left">Ehtimoliy sabab</th><th className="px-4 py-3 text-left">Amal</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Mablag&apos; yetarli emas</td><td className="px-4 py-3">Balans yakuniy summadan kam</td><td className="px-4 py-3">Balans va ko&apos;rsatilgan summani solishtiring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Karta rad etildi</td><td className="px-4 py-3">Limit, xalqaro/onlayn to&apos;lov cheklovi yoki bank bloki</td><td className="px-4 py-3">Bank ilovasidagi limitlarni tekshiring, kerak bo&apos;lsa bankka murojaat qiling</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Tasdiqlash oynasi yopildi</td><td className="px-4 py-3">3-D Secure/Click tasdig&apos;i yakunlanmagan</td><td className="px-4 py-3">Buyurtma holatini tekshirib, yangi to&apos;lovdan oldin eski urinish yakunlanganiga ishonch hosil qiling</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Aylana aylanib qoladi yoki timeout</td><td className="px-4 py-3">Internet uzilishi yoki vaqtinchalik servis xatosi</td><td className="px-4 py-3">Ilovani qayta oching, tarmoqni almashtiring va holatni tekshiring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Xarid mavjud emas</td><td className="px-4 py-3">Hudud, akkaunt yoki ilova versiyasi cheklovi</td><td className="px-4 py-3">Telegram&apos;ni yangilang; rasmiy xarid kanalining mavjudligini tekshiring</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Pul yechildi, Stars yo&apos;q</td><td className="px-4 py-3">To&apos;lov tasdiqlanishi yoki yetkazish yakunlanmagan</td><td className="px-4 py-3">Qayta to&apos;lamang; chek, vaqt va buyurtma ID&apos;sini saqlang</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="uzgets">Uzgets orqali Stars to&apos;lovi o&apos;tmasa</h2>
      <p>Uzgets&apos;da xarid faqat <a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a> orqali bajariladi; saytning o&apos;zida login yoki to&apos;lov formasi yo&apos;q. Bot ko&apos;rsatgan summani, karta/qabul qiluvchi ma&apos;lumotini va buyurtma ID&apos;sini qayta tekshiring.</p>
      <ol>
        <li>Botdagi buyurtmani ochib, holatini ko&apos;ring.</li>
        <li>Bank ilovasida summa yechilganmi, bloklanganmi yoki rad etilganmi — tekshiring.</li>
        <li>Pul yechilmagan bo&apos;lsa, balans va o&apos;tkazma limitini tekshiring.</li>
        <li>Pul yechilgan yoki holat noaniq bo&apos;lsa, qayta to&apos;lamasdan chek va buyurtma ID&apos;si bilan bot supportiga yozing.</li>
      </ol>
      <p>Uzgets xizmat shartlariga ko&apos;ra, to&apos;lov tasdiqlangach Stars buyurtmada ko&apos;rsatilgan @username&apos;ga yuboriladi. Shuning uchun to&apos;lovdan oldin username&apos;ni profil sahifasidan nusxalab, harfma-harf tekshirish foydalanuvchining muhim vazifasidir.</p>
      <InlineBotCTA lang="uz" text="Stars buyurtmasini rasmiy botda tekshiring yoki davom ettiring." />

      <h2 id="app-store">App Store yoki Google Play&apos;da to&apos;lov rad etilsa</h2>
      <p>iPhone&apos;da Stars ilova ichidan olinsa, billingni Apple; Google Play versiyasida esa Google qayta ishlaydi. Telegram Stars shartlarida bunday xarid muammolari tegishli to&apos;lov protsessoriga yuborilishi aytilgan.</p>
      <h3>iPhone va iPad</h3>
      <ol>
        <li><strong>Sozlamalar → ismingiz → Payment &amp; Shipping</strong> bo&apos;limini oching.</li>
        <li>To&apos;lov usuli va billing ma&apos;lumotlarini tekshiring.</li>
        <li>Apple ko&apos;rsatmasiga ko&apos;ra, kerak bo&apos;lsa boshqa to&apos;lov usulini qo&apos;shib qayta urinib ko&apos;ring.</li>
        <li>Rad etish sababi ko&apos;rinmasa, kartani chiqargan bankka murojaat qiling.</li>
      </ol>
      <h3>Android va Google Play</h3>
      <ol>
        <li>Google Payments profilida ogohlantirish yoki tasdiqlash talabi bor-yo&apos;qligini tekshiring.</li>
        <li>Karta muddati, billing manzili va mablag&apos; yetarliligini tekshiring.</li>
        <li>Boshqa mavjud to&apos;lov usulini sinab ko&apos;ring.</li>
        <li>Karta cheklovi bo&apos;lsa, bank bilan bog&apos;laning.</li>
      </ol>

      <h2 id="pul-yechildi">Pul yechilgan bo&apos;lsa, yana to&apos;lash mumkinmi?</h2>
      <p><strong>Yo&apos;q, avvalgi operatsiya yakuniy holati aniqlanmaguncha takroran to&apos;lamang.</strong> Bankdagi “bloklangan”, “kutilmoqda” yoki “pending” summa yakuniy yechim emas: u tasdiqlanishi yoki bank tomonidan qaytarilishi mumkin. Aniq muddatni faqat to&apos;lovni qayta ishlagan bank yoki platforma ayta oladi.</p>
      <p>Agar Uzgets buyurtmasida pul yechilgan, lekin Stars kelmagan bo&apos;lsa, <Link href="/blog/telegram-stars-kelmadi-sabablar-yechim">“Telegram Stars kelmadi” diagnostikasiga</Link> o&apos;ting. App Store yoki Google Play xaridida esa o&apos;sha platformaning xarid tarixi va supportidan foydalaning.</p>

      <h2 id="support">Supportga nimalarni yuborish kerak?</h2>
      <ul>
        <li>buyurtma yoki tranzaksiya ID&apos;si;</li>
        <li>to&apos;lov sanasi, vaqti va summasi;</li>
        <li>xato matni yoki skrinshoti;</li>
        <li>bank cheki (maxfiy rekvizitlarni yopib);</li>
        <li>Uzgets buyurtmasi bo&apos;lsa, kiritilgan @username va botdagi holat.</li>
      </ul>
      <p><strong>Yubormang:</strong> Telegram login/SMS kodi, 2FA paroli, karta CVV kodi, PIN yoki kartaning to&apos;liq rekvizitlari. Uzgets Stars yetkazish uchun bunday maxfiy ma&apos;lumotlarni talab qilmaydi.</p>
      <p>Keyingi xarid uchun <Link href="/stars">joriy Stars paketlari</Link>, <Link href="/blog/telegram-stars-uzcard-humo-bilan-sotib-olish">UzCard/Humo yo&apos;riqnomasi</Link> va <Link href="/blog/telegram-stars-payme-orqali-sotib-olish">Payme orqali xarid qo&apos;llanmasi</Link>ni ko&apos;ring.</p>
      <Sources lang="uz" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Editorial izoh:</strong> Uzgets ushbu sahifada o&apos;z xizmatini taklif qiladi. Uzgets haqidagi ma&apos;lumot ichki konfiguratsiya va xizmat shartlariga, ilova ichidagi xarid bo&apos;yicha ma&apos;lumot esa Telegram, Apple va Google rasmiy hujjatlariga tayangan.</p>
    </>
  )
}

function RuBody() {
  return (
    <>
      <nav aria-label="Содержание" className="not-prose my-6 rounded-xl border border-[var(--border)] p-5">
        <div className="font-semibold">Содержание</div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li><a href="#perviy-shag" className="hover:text-[var(--primary)] hover:underline">Первый шаг</a></li>
          <li><a href="#diagnostika" className="hover:text-[var(--primary)] hover:underline">Ошибка, причина и решение</a></li>
          <li><a href="#uzgets" className="hover:text-[var(--primary)] hover:underline">Оплата через Uzgets</a></li>
          <li><a href="#app-store" className="hover:text-[var(--primary)] hover:underline">App Store и Google Play</a></li>
          <li><a href="#dengi-spisani" className="hover:text-[var(--primary)] hover:underline">Если деньги списаны</a></li>
          <li><a href="#support" className="hover:text-[var(--primary)] hover:underline">Данные для поддержки</a></li>
        </ol>
      </nav>

      <h2 id="perviy-shag">Что делать первым, если оплата Telegram Stars не проходит?</h2>
      <p><strong>Сначала откройте банковское приложение и проверьте, списались ли деньги и какой статус у операции.</strong> Дальнейшее действие зависит от результата:</p>
      <ul>
        <li><strong>Списания нет:</strong> исправьте причину и повторите попытку один раз.</li>
        <li><strong>Сумма заблокирована или ожидает:</strong> не платите повторно; дождитесь итогового статуса банка.</li>
        <li><strong>Деньги списаны:</strong> сохраните чек и проверьте заказ; второй заказ сразу не создавайте.</li>
      </ul>
      <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Важно:</strong> Telegram указывает, что покупки Stars обрабатывают сторонние
        платёжные операторы. Поэтому сначала определите канал покупки: {siteConfig.bot},
        App Store, Google Play или другой официальный канал Telegram.
      </div>

      <h2 id="diagnostika">Ошибка → возможная причина → действие</h2>
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--muted)]"><tr><th className="px-4 py-3 text-left">Ошибка</th><th className="px-4 py-3 text-left">Возможная причина</th><th className="px-4 py-3 text-left">Что делать</th></tr></thead>
          <tbody>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Недостаточно средств</td><td className="px-4 py-3">Баланс меньше итоговой суммы</td><td className="px-4 py-3">Сверьте баланс и сумму оплаты</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Карта отклонена</td><td className="px-4 py-3">Лимит, запрет онлайн/международных платежей или блок банка</td><td className="px-4 py-3">Проверьте лимиты и обратитесь в банк</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Окно подтверждения закрылось</td><td className="px-4 py-3">3-D Secure или подтверждение Click не завершено</td><td className="px-4 py-3">Проверьте старый заказ до новой попытки</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Загрузка или timeout</td><td className="px-4 py-3">Сбой сети или сервиса</td><td className="px-4 py-3">Перезапустите приложение, смените сеть и проверьте статус</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Покупка недоступна</td><td className="px-4 py-3">Ограничение региона, аккаунта или версии приложения</td><td className="px-4 py-3">Обновите Telegram и проверьте доступные официальные каналы</td></tr>
            <tr className="border-t border-[var(--border)]"><td className="px-4 py-3">Деньги списаны, Stars нет</td><td className="px-4 py-3">Платёж или доставка ещё не завершены</td><td className="px-4 py-3">Не платите повторно; сохраните чек, время и ID</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="uzgets">Если не проходит оплата Stars через Uzgets</h2>
      <p>Покупка в Uzgets проходит только через <a href={siteConfig.botUrl} target="_blank" rel="noopener">{siteConfig.bot}</a>; на сайте нет формы входа или оплаты. Проверьте сумму, реквизиты получателя платежа и ID заказа, показанные ботом.</p>
      <ol>
        <li>Откройте заказ в боте и посмотрите его статус.</li>
        <li>Проверьте в банковском приложении: сумма списана, заблокирована или платёж отклонён.</li>
        <li>Если списания нет, проверьте баланс и лимит переводов.</li>
        <li>Если деньги списаны или статус неясен, не платите повторно — отправьте чек и ID заказа в поддержку бота.</li>
      </ol>
      <p>По условиям Uzgets после подтверждения оплаты Stars отправляются на @username из заказа. Скопируйте username со страницы профиля и внимательно проверьте его до оплаты.</p>
      <InlineBotCTA lang="ru" text="Проверьте заказ Stars или продолжите покупку в официальном боте." />

      <h2 id="app-store">Если платёж отклонён в App Store или Google Play</h2>
      <p>При покупке Stars внутри приложения на iPhone биллинг обрабатывает Apple, а в версии Google Play — Google. Telegram рекомендует обращаться по проблемам покупки к соответствующему оператору.</p>
      <h3>iPhone и iPad</h3>
      <ol>
        <li>Откройте <strong>Настройки → ваше имя → Payment &amp; Shipping</strong>.</li>
        <li>Проверьте способ оплаты и платёжные данные.</li>
        <li>При необходимости добавьте другой способ оплаты и повторите покупку.</li>
        <li>Если причина отказа не видна, обратитесь в банк-эмитент.</li>
      </ol>
      <h3>Android и Google Play</h3>
      <ol>
        <li>Проверьте уведомления и запросы подтверждения в профиле Google Payments.</li>
        <li>Проверьте срок карты, платёжный адрес и наличие средств.</li>
        <li>Попробуйте другой доступный способ оплаты.</li>
        <li>При ограничении карты свяжитесь с банком.</li>
      </ol>

      <h2 id="dengi-spisani">Можно ли заплатить ещё раз, если деньги списаны?</h2>
      <p><strong>Нет, не повторяйте платёж, пока не выяснен итоговый статус первой операции.</strong> Статус «заблокировано», «ожидает» или pending ещё не означает окончательное списание: операция может подтвердиться или сумма вернётся. Точный срок сообщает только банк или платформа, обработавшая платёж.</p>
      <p>Если деньги списаны по заказу Uzgets, но Stars не пришли, откройте <Link href="/ru/blog/telegram-stars-kelmadi-sabablar-yechim">диагностику «Telegram Stars не пришли»</Link>. Для App Store или Google Play используйте историю покупок и поддержку соответствующей платформы.</p>

      <h2 id="support">Что отправить поддержке?</h2>
      <ul>
        <li>ID заказа или транзакции;</li>
        <li>дату, время и сумму;</li>
        <li>текст или скриншот ошибки;</li>
        <li>банковский чек со скрытыми секретными реквизитами;</li>
        <li>для Uzgets — указанный @username и статус заказа в боте.</li>
      </ul>
      <p><strong>Не отправляйте:</strong> код входа/SMS Telegram, пароль 2FA, CVV, PIN или полные данные карты. Uzgets не требует эти секретные данные для доставки Stars.</p>
      <p>Перед следующей покупкой посмотрите <Link href="/ru/stars">актуальные пакеты Stars</Link>, <Link href="/ru/blog/telegram-stars-uzcard-humo-bilan-sotib-olish">инструкцию для UzCard/Humo</Link> и <Link href="/ru/blog/telegram-stars-payme-orqali-sotib-olish">покупку через Payme</Link>.</p>
      <Sources lang="ru" />
      <p className="text-sm text-[var(--text-muted)]"><strong>Редакционная пометка:</strong> Uzgets предлагает на этой странице собственный сервис. Сведения об Uzgets основаны на внутренней конфигурации и условиях сервиса, а сведения о покупках внутри приложений — на официальных документах Telegram, Apple и Google.</p>
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
      title: "Telegram Stars uchun to'lov o'tmadi: sabablar va yechimlar",
      description: "Stars to'lovi rad etildimi yoki pul yechilib, buyurtma yakunlanmadimi? Uzgets, App Store va Google Play uchun xato-sabab-yechim diagnostikasi.",
      metaTitle: "Telegram Stars to'lovi o'tmadi: nima qilish kerak?",
      metaDescription: "Telegram Stars to'lovi o'tmasa nima qilish kerak? Karta xatosi, limit, pending holati, Uzgets, App Store va Google Play uchun aniq yechimlar.",
      ogDescription: "Telegram Stars to'lovi rad etilganda pul holatini tekshirish, takroriy to'lovdan saqlanish va to'g'ri supportga murojaat qilish yo'li.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        { question: "Telegram Stars uchun to'lov nega o'tmaydi?", answer: "Ko'p uchraydigan sabablar — kartada mablag' yetishmasligi, bank limiti yoki xavfsizlik bloki, noto'g'ri to'lov ma'lumoti, tasdiqlash oynasining yakunlanmagani, internet uzilishi yoki xarid kanalidagi vaqtinchalik cheklov." },
        { question: "Stars to'lovi rad etilsa, qayta urinib ko'rsam bo'ladimi?", answer: "Pul yechilmaganini va eski urinish yakunlanganini tekshirgach, xatoni tuzatib bir marta qayta urinib ko'rish mumkin. Pul yechilgan yoki pending bo'lsa, takroran to'lamang." },
        { question: "Pul yechildi, lekin Stars kelmadi — nima qilaman?", answer: "Takroriy to'lov qilmang. Chek, tranzaksiya yoki buyurtma ID'si, vaqt, summa va @username'ni saqlang. Uzgets buyurtmasi bo'lsa @uzgetsbot supportiga, App Store/Google Play xaridi bo'lsa tegishli platformaga murojaat qiling." },
        { question: "Karta rad etilishining aniq sababini Telegram biladimi?", answer: "Odatda yo'q. Telegram Stars xaridlarini uchinchi tomon protsessorlari qayta ishlaydi. Karta rad etilishining aniq sababini bank, App Store, Google Play yoki xarid amalga oshirilgan to'lov xizmati aniqlaydi." },
        { question: "Uzgets saytida to'lovni qayta qilish kerakmi?", answer: "Yo'q. Saytning o'zida to'lov qilinmaydi; xarid faqat @uzgetsbot orqali bajariladi. Pul yechilgan yoki holat noaniq bo'lsa, yangi buyurtma bermasdan bot supportiga murojaat qiling." },
        { question: "Supportga karta CVV yoki Telegram kodini yuborish kerakmi?", answer: "Yo'q. CVV, PIN, Telegram login/SMS kodi va 2FA parolini hech kimga yubormang. Muammoni tekshirish uchun buyurtma ID'si, chek, vaqt, summa va xato skrinshoti yetarli bo'lishi kerak." },
      ],
      finalCtaHeading: "Stars xaridini davom ettirmoqchimisiz?",
      finalCtaBody: `Avvalgi to'lov holati yakunlanganiga ishonch hosil qiling, keyin ${siteConfig.bot}'da paket va @username'ni tekshirib yangi buyurtma bering.`,
    },
    ru: {
      title: 'Не проходит оплата Telegram Stars: причины и решения',
      description: 'Платёж Stars отклонён или деньги списались, но заказ не завершён? Диагностика для Uzgets, App Store и Google Play: ошибка, причина и действие.',
      metaTitle: 'Не проходит оплата Telegram Stars: что делать?',
      metaDescription: 'Что делать, если не проходит оплата Telegram Stars: карта, лимит, pending, Uzgets, App Store и Google Play — причины и пошаговые решения.',
      ogDescription: 'Как проверить платёж Telegram Stars, не допустить двойного списания и обратиться в правильную поддержку.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        { question: 'Почему не проходит оплата Telegram Stars?', answer: 'Частые причины: недостаточно средств, лимит или защитная блокировка банка, неверные платёжные данные, незавершённое подтверждение, сбой интернета или временное ограничение канала покупки.' },
        { question: 'Можно ли повторить отклонённый платёж Stars?', answer: 'Если деньги не списаны и предыдущая попытка завершена, исправьте причину и повторите оплату один раз. При списании или статусе pending повторно не платите.' },
        { question: 'Деньги списались, но Stars не пришли — что делать?', answer: 'Не платите повторно. Сохраните чек, ID транзакции или заказа, время, сумму и @username. Для Uzgets обратитесь в поддержку @uzgetsbot, для App Store или Google Play — в поддержку соответствующей платформы.' },
        { question: 'Telegram знает точную причину отказа карты?', answer: 'Обычно нет. Покупки Stars обрабатывают сторонние платёжные операторы. Точную причину определяет банк, App Store, Google Play или платёжный сервис, через который прошла попытка.' },
        { question: 'Нужно ли повторно платить на сайте Uzgets?', answer: 'Нет. На сайте Uzgets оплата не проводится — покупка выполняется только через @uzgetsbot. Если деньги списаны или статус неясен, сначала обратитесь в поддержку бота.' },
        { question: 'Нужно ли отправлять поддержке CVV или код Telegram?', answer: 'Нет. Никому не отправляйте CVV, PIN, код входа/SMS Telegram или пароль 2FA. Для проверки нужны ID заказа, чек, время, сумма и скриншот ошибки.' },
      ],
      finalCtaHeading: 'Хотите продолжить покупку Stars?',
      finalCtaBody: `Убедитесь, что предыдущий платёж получил итоговый статус, затем проверьте пакет и @username и создайте новый заказ в ${siteConfig.bot}.`,
    },
  },
}
