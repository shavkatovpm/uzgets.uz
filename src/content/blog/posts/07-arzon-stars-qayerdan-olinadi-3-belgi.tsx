import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { STARS_BASE } from '@/config/products'
import { formatUzs } from '@/lib/format'
import { InlineBotCTA } from '@/components/InlineBotCTA'
import type { BlogPost } from '../types'

const SLUG = 'arzon-stars-qayerdan-olinadi-3-belgi'
const TODAY = '2026-05-08'

function UzAnswerBox() {
  return (
    <p>
      Arzon Telegram Stars sotaman degan e&apos;lonlar ko&apos;p, lekin barchasi xavfsiz emas.
      Ishonchli sotuvchini 3 ta belgi orqali ajratish mumkin: <strong>(1)</strong> avtomatik
      bot tizimi (operator emas), <strong>(2)</strong> to&apos;lov bot tomonidan
      kuzatiladi va avtomatik tekshiriladi (chat&apos;da yozilgan tasodifiy karta raqamiga emas),
      <strong>(3)</strong> parol va kod talab qilmaslik (faqat @username yetarli). Uchchovi
      bir vaqtda mavjud bo&apos;lsa — sotuvchi xavfsiz. Bittasi yo&apos;q bo&apos;lsa —
      to&apos;xtang.{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      uchchala mezonni bajaradi va 50 ⭐ {formatUzs(STARS_BASE.priceUzs)}dan boshlanadi.
    </p>
  )
}

function RuAnswerBox() {
  return (
    <p>
      Объявлений «дешёвые Telegram Stars» много, но не все безопасны. Надёжного продавца
      отличают 3 признака: <strong>(1)</strong> автоматизированный бот (а не оператор вручную),{' '}
      <strong>(2)</strong> оплата отслеживается и проверяется ботом автоматически (а не на
      случайный номер карты из чата), <strong>(3)</strong> отсутствие запроса пароля и кода
      (хватает @username). Все три должны быть одновременно. Если хоть одного нет —
      остановитесь.{' '}
      <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="font-semibold text-[var(--primary)]">{siteConfig.bot}</a>{' '}
      соответствует всем трём, цена начинается с {formatUzs(STARS_BASE.priceUzs)} за 50 ⭐.
    </p>
  )
}

function SignalCard({
  num,
  title,
  body,
  uzgets,
  scam,
}: {
  num: number
  title: string
  body: React.ReactNode
  uzgets: string
  scam: string
}) {
  return (
    <div className="uz-card my-4 rounded-xl border border-[var(--border)] p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
          {num}
        </span>
        <div className="flex-1">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{body}</div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-3 text-xs">
              <div className="font-semibold text-[var(--primary)]">✓ Ishonchli</div>
              <div className="mt-1 text-[var(--text-muted)]">{uzgets}</div>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-3 text-xs">
              <div className="font-semibold">✗ Firibgar</div>
              <div className="mt-1 text-[var(--text-muted)]">{scam}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SignalCardRu({
  num,
  title,
  body,
  uzgets,
  scam,
}: {
  num: number
  title: string
  body: React.ReactNode
  uzgets: string
  scam: string
}) {
  return (
    <div className="uz-card my-4 rounded-xl border border-[var(--border)] p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
          {num}
        </span>
        <div className="flex-1">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{body}</div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-3 text-xs">
              <div className="font-semibold text-[var(--primary)]">✓ Надёжный</div>
              <div className="mt-1 text-[var(--text-muted)]">{uzgets}</div>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-3 text-xs">
              <div className="font-semibold">✗ Мошенник</div>
              <div className="mt-1 text-[var(--text-muted)]">{scam}</div>
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
          <a href="https://telegram.org/blog/telegram-stars" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            telegram.org/blog/telegram-stars
          </a>{' '}
          — {lang === 'uz' ? "Stars rasmiy e'lon" : 'официальный анонс Stars'}
        </li>
        <li>
          <a href="https://t.me/notoscam" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            t.me/notoscam
          </a>{' '}
          — {lang === 'uz' ? "Telegram'da firibgarlikni rasmiy bildirish boti" : 'официальный бот Telegram для жалоб на мошенничество'}
        </li>
        <li>
          <a href="https://core.telegram.org/api/payments" target="_blank" rel="noopener" className="hover:text-[var(--primary)] hover:underline">
            core.telegram.org/api/payments
          </a>{' '}
          — {lang === 'uz' ? "Telegram to'lovlar texnik hujjati" : 'техническая документация Telegram-платежей'}
        </li>
      </ul>
      <p className="mt-3 text-[var(--text-muted)]">
        {lang === 'uz'
          ? "Belgilar 2026-yil may holatiga ko'ra, Telegram rasmiy hujjatlari va firibgarlik haqidagi joriy hisobotlardan."
          : 'Признаки на май 2026 года, основаны на официальной документации Telegram и текущих отчётах о мошенничестве.'}
      </p>
    </div>
  )
}

function UzBody() {
  return (
    <>
      <h2 id="nega-muhim">Nega arzon Stars sotib olishda ehtiyot bo&apos;lish kerak?</h2>
      <p>
        Telegram Stars 2024-yilda joriy etilgandan beri uning narxini O&apos;zbekistonda mahalliy
        karta bilan to&apos;lab olish bo&apos;yicha o&apos;nlab kichik bot va guruh paydo
        bo&apos;ldi. Ularning hammasi rasmiy emas, hammasi xavfsiz emas. &quot;50 ⭐ 8 000
        so&apos;m&quot; deb yozadigan firibgarlar ham bor — narx atayin past, lekin pul
        olib qochiladi yoki kartadan ko&apos;proq mablag&apos; yechib olinadi.
      </p>
      <p>
        Pastdagi 3 ta belgi — Telegram&apos;ning rasmiy to&apos;lov hujjati va xavfsizlik
        bo&apos;yicha sanoat tavsiyalariga asoslangan. Uchchovini bir vaqtda taminlamagan har
        qanday sotuvchi <strong>shubhali</strong>: arzon ko&apos;rinishi mumkin, lekin amalda
        yo Stars yetkazilmaydi, yo karta ma&apos;lumotingiz xavf ostida.
      </p>

      <InlineBotCTA lang="uz" text="Ishonchli va arzon — 50 ⭐ 11 000 so'mga, botda buyurtma bering." />

      <h2 id="belgi-1">1-belgi: Buyurtma avtomatik bot tizimida bajariladi</h2>
      <SignalCard
        num={1}
        title="Operator emas — bot ichida avtomatik"
        body={
          <>
            <p>
              Ishonchli sotuvchi buyurtmani <strong>kod yozgan tizim</strong> orqali
              bajaradi: siz START bosasiz, miqdor va @username kiritasiz, to&apos;laysiz —
              barchasi bot ichida ko&apos;rinadi va Stars Telegram tomonidan akkauntga
              biriktiriladi.
            </p>
            <p className="mt-2">
              Firibgar sotuvchi esa odatda &quot;menga shaxsiy yozing&quot; deydi yoki
              guruhda &quot;men sotaman, karta raqamiga to&apos;lang&quot; deb e&apos;lon
              qiladi. Operator orqali jarayon — kechikish va xato ehtimoli yuqori, va eng
              muhimi — kafolat yo&apos;q.
            </p>
          </>
        }
        uzgets="Buyurtma t.me/uzgetsbot ichida 5 ta menyu bilan: Stars > miqdor > @username > to'lov tizimi > tasdiq. Hech qaysi qadamda inson aralashmaydi."
        scam="Tasodifiy kanal yoki shaxsiy chat'da: 'menga 50 000 so'm tashlang, 200 ⭐ qo'yaman'. To'lasangiz — biron ovoz yo'q, akkaunt bloklab qo'yiladi."
      />

      <p>
        <strong>Tekshirish usuli:</strong> bot ichida menyu bormi? START dan keyin tugmalar
        chiqdimi? &quot;Avtomatik tarzda&quot; degan so&apos;zlar bormi? Agar har narsa qo&apos;l
        bilan kiritiladigan, operator javob beradigan bo&apos;lsa — bu ishonchli emas.
      </p>

      <h2 id="belgi-2">2-belgi: To&apos;lov bot tomonidan kuzatiladi va avtomatik tekshiriladi</h2>
      <SignalCard
        num={2}
        title="Buyurtma ID, aniq summa, avtomatik tasdiq"
        body={
          <>
            <p>
              Ishonchli sotuvchida to&apos;lov bot ichidagi <strong>aniq buyurtmaga
              bog&apos;langan</strong>: siz @username va miqdorni kiritasiz, bot sizga
              ko&apos;rsatadigan to&apos;lov ma&apos;lumotini (karta raqami yoki Click/Payme
              link) beradi va aynan o&apos;sha summani ko&apos;rsatilgan manzilga
              o&apos;tkazasiz. Bot kelgan to&apos;lovni summa va boshqa belgilar bo&apos;yicha
              avtomatik aniqlaydi va Stars/Premium darhol biriktiriladi. Bu — minglab
              foydalanuvchi tomonidan sinalgan, takrorlanadigan jarayon.
            </p>
            <p className="mt-2">
              Firibgar sotuvchi esa to&apos;lovni <strong>tasodifiy chat yoki kanaldan</strong>{' '}
              tashlangan kartaga so&apos;raydi: &quot;9860 1234... ga 11 000 so&apos;m
              tashla&quot; — buyurtma raqami yo&apos;q, summa nimaga ekani aniq emas, kim
              ekani noma&apos;lum, hech qanday avtomatik tekshiruv yo&apos;q. Pul
              o&apos;tdimi — natija oddiy javob bermaslik yoki bloklash. Farq <em>karta
              raqami</em>da emas — <strong>kontekst va tekshirilishida</strong>: ishonchli
              sotuvchida to&apos;lov bot tomonidan bog&apos;lanadi va kuzatiladi.
            </p>
          </>
        }
        uzgets="Bot @username + miqdor olgach to'lov ma'lumotini ko'rsatadi (karta yoki Click/Payme link). Aynan o'sha summani o'tkazsangiz — bot avtomatik tekshiradi va Stars/Premium darhol biriktiriladi. Buyurtma ID bilan kuzatiladigan jarayon."
        scam="Tasodifiy guruhda 'menga 11 000 ga 50 ⭐ bersam, 9860 1234... ga tashla' — buyurtma raqami yo'q, bot tekshirmaydi, Telegram tomonidan biriktirilmaydi. Pul o'tgach javob yo'q."
      />

      <p>
        <strong>Tekshirish usuli:</strong> to&apos;lov ma&apos;lumotini bot ichida olganmisiz
        (avtomatik), yoki kim biron chat yoki shaxsiy yozishmada qo&apos;lda yuborganmi? Birinchi
        — ishonchli, ikkinchi — risk. Bot to&apos;lovdan keyin avtomatik tekshiruv qilgan va
        Stars/Premium o&apos;zi biriktirilganmi? Ha bo&apos;lsa — tizim ishlaydi.
      </p>

      <InlineBotCTA lang="uz" text="Avtomatik tekshiriladigan to'lov tizimi — Uzgets botida buyurtmangizni qo'ying." />

      <h2 id="belgi-3">3-belgi: Akkaunt parol va kod so&apos;ramaydi</h2>
      <SignalCard
        num={3}
        title="Faqat @username yetarli"
        body={
          <>
            <p>
              Telegram&apos;ning <strong>texnik dizayni</strong> shunday: Stars yoki Premium
              olish uchun sotuvchiga faqat <strong>@username</strong> kerak. Telegram
              tomonidan Stars o&apos;sha username egasiga avtomatik biriktiriladi. Boshqa
              hech narsa kerak emas — parol, SMS-kod, 2FA pin, hatto telefon raqami ham.
            </p>
            <p className="mt-2">
              Firibgar sotuvchi esa odatda &quot;arzon narx uchun parolni vaqtinchalik bering,
              biz sizning akkauntingiz orqali xarid qilamiz&quot; yoki &quot;SMS-kodni
              tasdiq uchun yuboring&quot; deb so&apos;raydi. Bu — <strong>akkauntni
              o&apos;g&apos;irlashning klassik sxemasi</strong>: kod kelganda kiritsangiz,
              akkauntdan foydalanish huquqi sotuvchiga o&apos;tadi.
            </p>
          </>
        }
        uzgets="Bot @username so'raydi — bo'ldi. Parol, SMS-kod, 2FA — hech qachon, hech qanday qadamda."
        scam="'2FA parolingizni vaqtinchalik o'chiring' yoki 'tasdiq kodi keladi, menga yuboring' — bu akkauntni egallashga urinish. Stars uchun bularning hech biri kerak emas."
      />

      <p>
        <strong>Tekshirish usuli:</strong> bot @username dan boshqa nima so&apos;raydi? Hech
        nima bo&apos;lmasin. Agar &quot;akkaunt egaligini tasdiqlash uchun kod kerak&quot;
        kabi gap chiqsa — darhol to&apos;xtang va botni{' '}
        <a href="https://t.me/notoscam" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@notoscam</a>{' '}
        ga shikoyat qiling.
      </p>

      <h2 id="qoshimcha">Qo&apos;shimcha 4 ta xavfli signal</h2>
      <p>
        Yuqoridagi 3 ta belgi asosiy. Lekin yana e&apos;tibor berishga arziydigan signallar
        bor:
      </p>
      <ul>
        <li>
          <strong>Bozor narxidan keskin past:</strong> 50 ⭐ uchun 8 000 so&apos;m yoki
          undan kam — bu fizik jihatdan iqtisodiy emas. Uzgets&apos;ning 11 000 so&apos;m
          narxi to&apos;lov tizimi komissiyalari va Telegram&apos;ning ulgurji narxi
          asosidagi minimum. &quot;Aksiya&quot; deb tushuntirilsa ham — shubhalanish kerak.
        </li>
        <li>
          <strong>Vaqt bosimi:</strong> &quot;faqat shu kun&quot;, &quot;keyingi soat ichida
          to&apos;lasangiz — 30% chegirma&quot;. Bu psixologik bosim — qaror qabul qilishni
          tezlashtirib, mantiqiy tahlilni o&apos;chirish uchun.
        </li>
        <li>
          <strong>Profil yangi yoki bo&apos;sh:</strong> bot/kanal 1 oydan kam, ko&apos;rsatkichlar
          yo&apos;q, izohlar shubhali. Ishonchli bot odatda uzoq vaqt mavjud va aniq tarix bilan.
        </li>
        <li>
          <strong>Username&apos;da raqam yoki harf almashtirilgan:</strong>{' '}
          <code>@uzg3tsbot</code>, <code>@uzgets_official</code>, <code>@uzgetsbot1</code> —
          rasmiy <code>@uzgetsbot</code> dan farqli. Klon botlar — odatdiy firibgarlik usuli.
        </li>
      </ul>

      <h2 id="aldanmaslik">Aldansangiz nima qilish kerak?</h2>
      <ol>
        <li>
          <strong>Darhol to&apos;lovni to&apos;xtatishga harakat qiling:</strong> banking
          ilovasi orqali tranzaksiyani bekor qilishga so&apos;rov yuboring. Tezda harakat
          qilsangiz ba&apos;zan muvaffaqiyat ehtimoli bor.
        </li>
        <li>
          <strong>Skrinshotlarni saqlang:</strong> chat tarixi, to&apos;lov maslahati, bot
          username&apos;i — shikoyat uchun kerak.
        </li>
        <li>
          <strong>Telegram&apos;ning rasmiy{' '}
          <a href="https://t.me/notoscam" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@notoscam</a>{' '}
          botiga shikoyat:</strong> firibgar bot/akkauntni yuboring. Telegram odatda 24
          soat ichida bunday akkauntlarni bloklaydi.
        </li>
        <li>
          <strong>Bankga murojaat qiling:</strong> ayniqsa karta ma&apos;lumotini bergan
          bo&apos;lsangiz — kartani bloklash va yangisini buyurtma berish. Banking
          ilovasidagi 24/7 qo&apos;llab-quvvatlash orqali eng tez.
        </li>
        <li>
          <strong>Politsiyaga ham xabar bering:</strong> 1006 (Kiber-politsiya) — yirik
          summa bo&apos;lsa rasmiy ariza yozish foydali.
        </li>
      </ol>

      <InlineBotCTA lang="uz" text="Xavfsiz va ishonchli — Uzgets botida arzon Stars buyurtma bering." />

      <h2 id="uzgets-nega">Nega Uzgets uchchala mezonni bajaradi?</h2>
      <p>
        Uzgets — O&apos;zbekistonda mahalliy karta bilan to&apos;lash mumkin bo&apos;lgan eng
        arzon Stars/Premium yetkazib beruvchisi (50 ⭐ {formatUzs(STARS_BASE.priceUzs)};
        StarsJoy 12 000, boshqa botlar 14-18 000 so&apos;m). Lekin narxning past
        bo&apos;lishi ishonchsizlik belgisi <strong>emas</strong> — quyidagi sabablardan:
      </p>
      <ul>
        <li>
          <strong>Avtomatik tizim</strong> — buyurtma t.me/uzgetsbot ichida tugmalar
          bilan, har qadam logikalashtirilgan. Operator emas, kod ishlaydi.
        </li>
        <li>
          <strong>To&apos;lov bot tomonidan kuzatiladi</strong> — bot @username va miqdorni
          olgach to&apos;lov ma&apos;lumotini ko&apos;rsatadi (karta raqami yoki Click/Payme
          link), siz aynan o&apos;sha summani o&apos;tkazasiz, bot avtomatik tekshirib
          biriktiradi. Buyurtma ID bilan kuzatiladi — minglab foydalanuvchi tomonidan
          sinalgan.
        </li>
        <li>
          <strong>Faqat @username</strong> — parol, kod, 2FA hech qachon so&apos;ralmaydi.
          Stars to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram tomonidan akkauntga
          biriktiriladi.
        </li>
        <li>
          <strong>Ochiq narx jadvali</strong> —{' '}
          <Link href="/uz/stars" className="text-[var(--primary)] hover:underline">
            /uz/stars
          </Link>{' '}
          sahifasida har paket uchun aniq narx, yashirin yig&apos;im yo&apos;q.
        </li>
        <li>
          <strong>Uzun mavjudlik</strong> — Uzgets oylar davomida ishlaydi, foydalanuvchi
          tarixi bor.
        </li>
      </ul>
      <p>
        Batafsil narx taqqoslama:{' '}
        <Link href="/uz/blog/eng-arzon-telegram-stars-ozbekistonda" className="text-[var(--primary)] hover:underline">
          Eng arzon Telegram Stars O&apos;zbekistonda 2026
        </Link>
        .
      </p>

      <Sources lang="uz" />

      <h2 id="muhim">Eslatma</h2>
      <ul>
        <li>
          Bu ro&apos;yxat — universal mezon. Aynan Uzgets uchun emas, har qanday Stars/Premium
          sotuvchini tekshirishda foydalaning.
        </li>
        <li>
          &quot;Ishonchli&quot; va &quot;arzon&quot; bir-birini istisno qiluvchi tushunchalar
          emas — narxning past bo&apos;lishi avtomatik ravishda firibgarlikni anglatmaydi,
          lekin yuqoridagi 3 ta belgi bo&apos;lmasa — narx muhim emas.
        </li>
        <li>
          Telegram Stars to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram tomonidan
          akkauntga biriktiriladi — vositachi <em>narxni</em> emas, faqat <em>to&apos;lov
          yo&apos;lini</em> ta&apos;minlaydi. Shuning uchun arzon narx mahsulot sifatiga
          ta&apos;sir qilmaydi.
        </li>
      </ul>
    </>
  )
}

function RuBody() {
  return (
    <>
      <h2 id="nega-muhim">Почему важно быть осторожным с дешёвыми Stars?</h2>
      <p>
        С момента запуска Telegram Stars в 2024 году в Узбекистане появились десятки мелких
        ботов и групп, обещающих оплату локальной картой. Не все они официальные и не все
        безопасные. Встречаются мошенники, которые пишут «50 ⭐ за 8 000 сум» — цена занижена
        специально, но в итоге деньги уводят или со счёта снимают больше.
      </p>
      <p>
        3 признака ниже основаны на официальной платёжной документации Telegram и отраслевых
        рекомендациях по безопасности. Любой продавец, у которого хоть один признак отсутствует,{' '}
        <strong>сомнительный</strong>: цена может казаться выгодной, но на практике или
        Stars не зачисляются, или данные карты под угрозой.
      </p>

      <InlineBotCTA lang="ru" text="Надёжно и дёшево — 50 ⭐ за 11 000 сум, оформите в боте." />

      <h2 id="belgi-1">Признак 1: Заказ выполняется в автоматизированном боте</h2>
      <SignalCardRu
        num={1}
        title="Не оператор — внутри бота автоматически"
        body={
          <>
            <p>
              Надёжный продавец оформляет заказ через <strong>программную систему</strong>:
              вы нажимаете START, вводите количество и @username, оплачиваете — всё
              происходит внутри бота, и Stars зачисляются Telegram&apos;ом напрямую.
            </p>
            <p className="mt-2">
              Мошенник обычно пишет «напишите мне в личку» или объявляет в группе «продаю,
              переведите на карту». Процесс через оператора — выше риск задержек, ошибок и
              главное — нет гарантий.
            </p>
          </>
        }
        uzgets="Заказ внутри t.me/uzgetsbot — 5 пунктов меню: Stars > количество > @username > способ оплаты > подтверждение. Ни на одном шаге нет ручного оператора."
        scam="В случайном канале или личке: «отправь 50 000 сум — закину 200 ⭐». Оплатил — и тишина, аккаунт блокирует."
      />

      <p>
        <strong>Как проверить:</strong> есть ли в боте меню? Появляются ли кнопки после
        START? Указано ли «автоматически»? Если всё вводится вручную и отвечает оператор —
        ненадёжно.
      </p>

      <h2 id="belgi-2">Признак 2: Оплата отслеживается и проверяется ботом автоматически</h2>
      <SignalCardRu
        num={2}
        title="ID заказа, точная сумма, автоматическое подтверждение"
        body={
          <>
            <p>
              У надёжного продавца оплата <strong>привязана к конкретному заказу</strong>{' '}
              внутри бота: вы вводите @username и количество, бот показывает реквизиты
              оплаты (номер карты или ссылка Click/Payme), вы переводите ровно ту же сумму
              по указанному реквизиту. Бот автоматически распознаёт поступление по сумме и
              другим признакам — Stars/Premium зачисляются сразу. Это процесс, проверенный
              тысячами пользователей.
            </p>
            <p className="mt-2">
              Мошенник же просит перевести деньги на карту, которую он скинул в{' '}
              <strong>случайном чате или канале</strong>: «9860 1234… отправь 11 000 сум» —
              без номера заказа, без понимания за что именно сумма, без автоматической
              проверки. Перевели — в ответ либо тишина, либо блок. Дело <em>не в самом
              номере карты</em>, а в <strong>контексте и проверяемости</strong>: у надёжного
              продавца платёж привязан к боту и отслеживается.
            </p>
          </>
        }
        uzgets="После ввода @username и количества бот показывает реквизит оплаты (карту или ссылку Click/Payme). Переводите ту же сумму — бот проверит автоматически и сразу зачислит Stars/Premium. Заказ отслеживается по ID."
        scam="В случайной группе: «закину 50 ⭐ за 11 000, переведи на 9860 1234…» — нет ID заказа, бот не проверяет, Telegram сам ничего не зачисляет. Деньги ушли — ответа нет."
      />

      <p>
        <strong>Как проверить:</strong> реквизиты оплаты получены внутри бота (автоматически)
        или их прислал кто-то в чате/личке вручную? Первый — надёжно, второй — риск. После
        оплаты бот сам проверил поступление и зачислил Stars/Premium? Да — система работает.
      </p>

      <InlineBotCTA lang="ru" text="Автоматически проверяемая оплата — оформите в боте Uzgets." />

      <h2 id="belgi-3">Признак 3: Не запрашивает пароль и код от аккаунта</h2>
      <SignalCardRu
        num={3}
        title="Достаточно @username"
        body={
          <>
            <p>
              <strong>Технический дизайн</strong> Telegram таков, что для зачисления Stars
              или Premium продавцу нужен только <strong>@username</strong>. Telegram сам
              зачисляет Stars владельцу этого username. Больше ничего не требуется — ни
              пароль, ни SMS-код, ни 2FA-пин, ни даже номер телефона.
            </p>
            <p className="mt-2">
              Мошенник, наоборот, попросит «временно отключите 2FA, мы купим через ваш
              аккаунт» или «пришлите код подтверждения». Это{' '}
              <strong>классическая схема угона аккаунта</strong>: вводите код — права на
              аккаунт переходят к продавцу.
            </p>
          </>
        }
        uzgets="Бот спрашивает @username — и всё. Ни пароля, ни SMS-кода, ни 2FA — никогда и ни на каком шаге."
        scam="«Временно отключите пароль 2FA» или «пришлите код подтверждения» — попытка угона аккаунта. Для Stars ничего из этого не нужно."
      />

      <p>
        <strong>Как проверить:</strong> что бот спрашивает кроме @username? Должен — ничего.
        Если что-то вроде «нужен код для подтверждения владения аккаунтом» — стоп, и пожалуйтесь
        на бота{' '}
        <a href="https://t.me/notoscam" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@notoscam</a>.
      </p>

      <h2 id="qoshimcha">4 дополнительных тревожных сигнала</h2>
      <p>3 признака выше — основные. Но обратить внимание стоит и на эти:</p>
      <ul>
        <li>
          <strong>Резко ниже рыночной цены:</strong> 50 ⭐ за 8 000 сум или меньше — это
          физически нерентабельно. Цена Uzgets 11 000 сум — минимум, основанный на комиссиях
          платёжных систем и оптовой цене Telegram. Даже если оформляют как «акцию» —
          поставьте под сомнение.
        </li>
        <li>
          <strong>Давление по времени:</strong> «только сегодня», «за час оплатите — 30%
          скидка». Это психологическое давление: ускорить решение, отключить логический
          анализ.
        </li>
        <li>
          <strong>Профиль новый или пустой:</strong> бот/канал моложе месяца, активности
          нет, отзывы подозрительные. Надёжный бот обычно существует давно и с понятной
          историей.
        </li>
        <li>
          <strong>Username с подменой буквы или цифры:</strong> <code>@uzg3tsbot</code>,{' '}
          <code>@uzgets_official</code>, <code>@uzgetsbot1</code> — отличаются от
          официального <code>@uzgetsbot</code>. Боты-клоны — стандартный приём мошенников.
        </li>
      </ul>

      <h2 id="aldanmaslik">Что делать, если уже обманули?</h2>
      <ol>
        <li>
          <strong>Срочно остановите оплату:</strong> через банковское приложение отправьте
          запрос на отмену транзакции. При быстрой реакции иногда удаётся.
        </li>
        <li>
          <strong>Сохраните скриншоты:</strong> история чата, реквизиты оплаты, username
          бота — всё пригодится для жалобы.
        </li>
        <li>
          <strong>Жалоба в официальный{' '}
          <a href="https://t.me/notoscam" target="_blank" rel="noopener" className="text-[var(--primary)] hover:underline">@notoscam</a>{' '}
          Telegram:</strong> отправьте мошеннического бота/аккаунт. Telegram обычно
          блокирует такие в течение 24 часов.
        </li>
        <li>
          <strong>Обратитесь в банк:</strong> особенно если вы дали данные карты — заблокируйте
          и закажите новую. Через 24/7-поддержку банковского приложения — быстрее всего.
        </li>
        <li>
          <strong>Сообщите в полицию:</strong> 1006 (киберполиция) — при крупной сумме
          стоит подать официальное заявление.
        </li>
      </ol>

      <InlineBotCTA lang="ru" text="Безопасно и дёшево — оформите Stars в боте Uzgets." />

      <h2 id="uzgets-nega">Почему Uzgets соответствует всем трём?</h2>
      <p>
        Uzgets — самый дешёвый поставщик Stars/Premium в Узбекистане среди тех, кто принимает
        локальную карту (50 ⭐ за {formatUzs(STARS_BASE.priceUzs)}; StarsJoy — 12 000, другие
        боты — 14–18 000 сум). При этом низкая цена <strong>не</strong> признак ненадёжности
        — вот почему:
      </p>
      <ul>
        <li>
          <strong>Автоматизированная система</strong> — заказ внутри t.me/uzgetsbot
          оформляется кнопками, каждый шаг логически выстроен. Не оператор, а код.
        </li>
        <li>
          <strong>Оплата отслеживается ботом</strong> — после ввода @username и количества
          бот показывает реквизит (карта или ссылка Click/Payme), вы переводите ту же сумму,
          бот автоматически проверяет и зачисляет. Заказ отслеживается по ID — процесс,
          проверенный тысячами пользователей.
        </li>
        <li>
          <strong>Только @username</strong> — пароль, код, 2FA не запрашиваются никогда.
          Stars зачисляются от Telegram напрямую.
        </li>
        <li>
          <strong>Открытая ценовая таблица</strong> —{' '}
          <Link href="/ru/stars" className="text-[var(--primary)] hover:underline">
            /ru/stars
          </Link>{' '}
          с указанием точной цены каждого пакета, без скрытых сборов.
        </li>
        <li>
          <strong>Долгое присутствие</strong> — Uzgets работает не первый месяц, есть история
          пользователей.
        </li>
      </ul>
      <p>
        Полное сравнение цен:{' '}
        <Link href="/ru/blog/eng-arzon-telegram-stars-ozbekistonda" className="text-[var(--primary)] hover:underline">
          Самые дешёвые Telegram Stars в Узбекистане 2026
        </Link>
        .
      </p>

      <Sources lang="ru" />

      <h2 id="muhim">Замечание</h2>
      <ul>
        <li>
          Этот список — универсальный критерий. Используйте его не только для Uzgets, а
          для проверки любого продавца Stars/Premium.
        </li>
        <li>
          «Надёжно» и «дёшево» — не взаимоисключающие понятия: низкая цена сама по себе не
          означает мошенничество, но без 3 признаков выше — цена не имеет значения.
        </li>
        <li>
          Telegram Stars зачисляются на аккаунт напрямую от Telegram — посредник влияет на{' '}
          <em>способ оплаты</em>, а не на <em>сам продукт</em>. Поэтому низкая цена не
          сказывается на качестве.
        </li>
      </ul>
    </>
  )
}

export const post: BlogPost = {
  slug: SLUG,
  publishedAt: TODAY,
  updatedAt: TODAY,
  type: 'trust',
  locales: {
    uz: {
      title: "Arzon Stars qayerdan olinadi — aldanmaslik uchun 3 ta belgi 2026",
      description:
        "Arzon Telegram Stars sotuvchi ishonchli yoki yo'qmi — 3 ta universal belgi: avtomatik bot, rasmiy to'lov tizimi, parol so'ramaslik. Aldanmaslik bo'yicha to'liq qo'llanma.",
      metaTitle: "Arzon Stars qayerdan olinadi — aldanmaslik uchun 3 ta belgi",
      metaDescription:
        "Arzon Telegram Stars sotib olishda firibgarni aniqlash — 3 ta belgi: avtomatik bot, mahalliy to'lov tizimi, parolsiz. Universal mezon, har sotuvchini tekshirish uchun.",
      ogDescription:
        "Arzon Stars sotuvchini tekshirish — 3 ta universal belgi va aldansangiz nima qilish kerak.",
      answerBoxTitle: 'Qisqa javob',
      answerBoxBody: UzAnswerBox,
      Body: UzBody,
      faq: [
        {
          question: 'Arzon Stars sotuvchi ishonchli ekanligini qanday bilish mumkin?',
          answer:
            "3 ta universal belgi orqali: (1) buyurtma avtomatik bot ichida bajariladimi (operator emas), (2) to'lov bot tomonidan kuzatiladimi va avtomatik tekshiriladimi (chat'da yozilgan tasodifiy karta raqamiga emas), (3) parol/SMS-kod/2FA so'ralmaydimi (faqat @username yetarli). Uchchovi bo'lsa — ishonchli; bittasi yo'q bo'lsa — to'xtang.",
        },
        {
          question: "Nega narx past bo'lishi avtomatik firibgarlik degani emas?",
          answer:
            "Telegram Stars to'g'ridan-to'g'ri Telegram tomonidan akkauntga biriktiriladi — vositachi narxni emas, faqat to'lov yo'lini ta'minlaydi. Uzgets'ning 50 ⭐ 11 000 so'm narxi mahalliy to'lov tizimi xarajatlariga asoslangan rentabel narx. Lekin agar 50 ⭐ 8 000 so'm yoki undan past bo'lsa — bu shubhali, chunki to'lov tizimi komissiyasi bilan ham hech kim shu narxda sotmaydi.",
        },
        {
          question: 'Sotuvchi parol so\'rasa nima qilish kerak?',
          answer:
            "Darhol jarayonni to'xtating va botni @notoscam ga shikoyat qiling. Telegram Stars yoki Premium uchun parol, SMS-kod yoki 2FA hech qachon kerak emas — faqat @username yetarli. Parol so'raydigan har qanday sotuvchi — akkauntni o'g'irlashga uringan firibgar.",
        },
        {
          question: 'Bot ko\'rsatgan kartaga o\'tkazma orqali to\'lash xavfsizmi?',
          answer:
            "Ha, agar to'lov ma'lumoti (karta raqami yoki Click/Payme link) avtomatik bot tomonidan @username va miqdor kiritilgandan keyin ko'rsatilgan bo'lsa va bot kelgan to'lovni avtomatik tekshirsa. Bu — Uzgets'da minglab foydalanuvchi tomonidan sinalgan ish jarayoni. Xavfli holat — karta raqami tasodifiy chat yoki guruhda yuborilgan, hech qanday buyurtma raqami va avtomatik tekshiruv yo'q bo'lsa.",
        },
        {
          question: 'Uzgets uchchala mezonni qanday bajaradi?',
          answer:
            "Avtomatik bot — buyurtma t.me/uzgetsbot ichida tugmalar bilan bajariladi. To'lov kuzatiladi — bot @username va miqdorni olgach to'lov ma'lumotini ko'rsatadi, aynan o'sha summani o'tkazsangiz avtomatik tekshiradi va biriktiradi. Faqat @username — parol, kod, 2FA hech qachon so'ralmaydi.",
        },
        {
          question: 'Aldansam nima qilaman?',
          answer:
            "1) Banking ilovasi orqali to'lovni bekor qilish so'rovini yuboring. 2) Skrinshotlarni saqlang. 3) @notoscam ga firibgar bot/akkauntni shikoyat qiling. 4) Bankka murojaat qiling — kartani bloklash. 5) Yirik summa bo'lsa kiber-politsiyaga (1006) ariza yozing.",
        },
        {
          question: 'Bot username\'ida farq bor — bu xavflimi?',
          answer:
            "Ha. @uzg3tsbot, @uzgets_official, @uzgetsbot1 — bu rasmiy @uzgetsbot dan farqli klon botlar. Klonlar firibgarlikning eng odatdiy usuli. Faqat aniq @uzgetsbot va t.me/uzgetsbot havolasini ishlating.",
        },
      ],
      finalCtaHeading: "Ishonchli va arzon Stars sotib olishga tayyormisiz?",
      finalCtaBody:
        "Uzgets uchchala mezonni bajaradi: avtomatik bot, kuzatiladigan to'lov, parolsiz. Botda START bosib, 50 ⭐ 11 000 so'mga buyurtma bering.",
    },
    ru: {
      title: 'Где купить дешёвые Stars — 3 признака надёжного продавца 2026',
      description:
        'Как отличить надёжного продавца Telegram Stars от мошенника — 3 универсальных признака: автоматизированный бот, официальная оплата, без пароля. Полное руководство.',
      metaTitle: 'Где купить дешёвые Stars — 3 признака надёжного продавца',
      metaDescription:
        'Распознать мошенника при покупке дешёвых Telegram Stars — 3 признака: автобот, локальная система оплаты, без пароля. Универсальный критерий проверки любого продавца.',
      ogDescription:
        'Проверка продавца дешёвых Stars — 3 универсальных признака и что делать, если обманули.',
      answerBoxTitle: 'Краткий ответ',
      answerBoxBody: RuAnswerBox,
      Body: RuBody,
      faq: [
        {
          question: 'Как понять, что продавец дешёвых Stars надёжный?',
          answer:
            'По 3 универсальным признакам: (1) заказ выполняется в автоматизированном боте (а не оператором), (2) оплата отслеживается ботом и проверяется автоматически (а не на случайный номер карты, скинутый в чате), (3) не запрашиваются пароль/SMS-код/2FA (хватает @username). Все три должны быть; если хоть одного нет — стоп.',
        },
        {
          question: 'Почему низкая цена — не автоматически признак мошенничества?',
          answer:
            'Telegram Stars зачисляются напрямую от Telegram — посредник влияет только на способ оплаты, а не на сам продукт. Цена Uzgets (50 ⭐ за 11 000 сум) основана на расходах локальных платёжных систем — это рентабельный минимум. Но если 50 ⭐ за 8 000 сум или ниже — это сомнительно, потому что даже с учётом комиссий никто за такую цену не продаёт.',
        },
        {
          question: 'Что делать, если продавец просит пароль?',
          answer:
            'Сразу остановите процесс и пожалуйтесь на бота в @notoscam. Для зачисления Stars или Premium пароль, SMS-код или 2FA никогда не нужны — достаточно @username. Любой, кто просит пароль, — мошенник, пытающийся угнать аккаунт.',
        },
        {
          question: 'Безопасно ли переводить на номер карты, который показывает бот?',
          answer:
            'Да, если реквизиты (номер карты или ссылка Click/Payme) показал автоматизированный бот после ввода @username и количества, и бот сам проверяет поступление. Это процесс Uzgets, проверенный тысячами пользователей. Опасный случай — если номер карты скинули в случайном чате/группе, без номера заказа и автоматической проверки.',
        },
        {
          question: 'Как Uzgets соответствует всем трём признакам?',
          answer:
            'Автобот — заказ оформляется кнопками внутри t.me/uzgetsbot. Оплата отслеживается — после ввода @username и количества бот показывает реквизит, при переводе той же суммы автоматически проверяется и зачисляется. Только @username — пароль, код, 2FA никогда не запрашиваются.',
        },
        {
          question: 'Что делать, если уже обманули?',
          answer:
            '1) Через банковское приложение отправьте запрос на отмену транзакции. 2) Сохраните скриншоты. 3) Пожалуйтесь на мошеннического бота/аккаунт в @notoscam. 4) Свяжитесь с банком — заблокируйте карту. 5) При крупной сумме подайте заявление в киберполицию (1006).',
        },
        {
          question: 'Username бота немного отличается — это опасно?',
          answer:
            'Да. @uzg3tsbot, @uzgets_official, @uzgetsbot1 — это боты-клоны, отличающиеся от официального @uzgetsbot. Клоны — стандартный приём мошенников. Используйте только точный @uzgetsbot и ссылку t.me/uzgetsbot.',
        },
      ],
      finalCtaHeading: 'Готовы купить дешёвые и надёжные Stars?',
      finalCtaBody:
        'Uzgets соответствует всем трём признакам: автобот, отслеживаемая оплата, без пароля. Нажмите START в боте — 50 ⭐ за 11 000 сум.',
    },
  },
}
