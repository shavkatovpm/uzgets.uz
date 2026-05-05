import type { PremiumPeriod } from './products'
import type { Locale } from '@/i18n/config'

export type AudienceCard = { title: string; description: string }
export type UniqueFAQ = { question: string; answer: string }

export type PremiumPageContent = {
  metaTitle: string
  metaDescription: string
  h1: { highlight: string; rest: string }
  oneLineSummary: string
  whyThisPeriod: string
  perMonthAngle: string
  audience: AudienceCard[]
  uniqueFAQ: UniqueFAQ[]
}

const UZ: Record<PremiumPeriod['slug'], PremiumPageContent> = {
  '3-oylik': {
    metaTitle: "Telegram Premium 3 oylik narxi — 168 000 so'm — O'zbekistonda sotib olish",
    metaDescription:
      "Telegram Premium 3 oylik obuna O'zbekistonda 168 000 so'm. UzCard, Humo va Click orqali to'lov, @uzgetsbot orqali avtomatik faollashtirish. Premium imkoniyatlari va sotib olish bo'yicha to'liq qo'llanma.",
    h1: { highlight: '3 oylik', rest: 'Telegram Premium' },
    oneLineSummary: "Telegram Premium uch oylik obunani O'zbekistondagi mahalliy to'lov usullari bilan sotib olish.",
    whyThisPeriod:
      "3 oylik paket — Telegram Premium'ni xavfsiz sinab ko'rish uchun eng past kirish nuqtasi. Sizdan uzoq muddatli majburiyat talab etilmaydi, lekin Premium'ning barcha imkoniyatlaridan to'liq foydalanish uchun yetarli vaqt beradi. Ayniqsa Premium birinchi marta sinaladigan bo'lsa yoki sovg'a sifatida olinadigan bo'lsa, eng mantiqiy tanlov.",
    perMonthAngle:
      "Oyiga taxminan 56 000 so'm — bu 6 oylik (oyiga 38 000) va 12 oylik (oyiga 34 000) paketlarga nisbatan biroz qimmat. Ammo qisqa muddatli majburiyat va Premium'ni sinab ko'rish moslashuvchanligi uchun bu narx oqlanadi.",
    audience: [
      {
        title: "Premium'ni birinchi marta sinaydiganlar",
        description:
          "Telegram Premium imkoniyatlarini bir yilga obuna bo'lmasdan oldin 3 oy davomida bemalol sinab ko'rmoqchi bo'lganlar uchun ideal kirish paketi.",
      },
      {
        title: "Sovg'a sifatida olmoqchilar",
        description:
          "Yaqin do'st yoki oila a'zosiga 3 oylik Telegram Premium — qulay va mazmunli sovg'a. Buyurtma berishda istalgan @username kiritish mumkin.",
      },
      {
        title: 'Mavsumiy yoki vaqtinchalik foydalanish',
        description:
          "Aniq bir loyiha, sayohat yoki ish davri uchun Premium kerak bo'lsa — qisqa muddatli paket eng to'g'ri yondashuv.",
      },
      {
        title: 'Yillik majburiyatdan oldin sinov',
        description:
          '12 oylik paketga o\'tishdan oldin Premium imkoniyatlarini real foydalanishda baholash uchun 3 oylik — past xavfli sinov muddati.',
      },
    ],
    uniqueFAQ: [
      {
        question: 'Telegram Premium 3 oylik avtomatik yangilanadimi?',
        answer:
          "Yo'q. 3 oy tugagach Premium o'z-o'zidan o'chadi. Davom ettirish uchun yana botda buyurtma berish kerak — avtomatik to'lov tizimi yo'q. Bu sizni keyingi davrlarda nazoratdan chiqib ketgan to'lovlardan himoya qiladi.",
      },
      {
        question: '3 oylik Premium qachon va qayerda faollashadi?',
        answer:
          "To'lov tasdiqlangach, Premium ko'rsatilgan @username akkauntiga to'g'ridan-to'g'ri Telegram tomonidan biriktiriladi. Vaqt hisobi obuna faollashgan paytdan boshlanadi va aniq 90 kunni tashkil etadi.",
      },
      {
        question: "3 oylikni o'rtada to'xtatib boshqa muddatga aylantirish mumkinmi?",
        answer:
          "Yo'q. Bu bir martalik to'lov bo'lib, o'rtada paketni o'zgartirish funksiyasi mavjud emas. Lekin 3 oy tugagach, istalgan boshqa muddatga (6 yoki 12 oylik) yangi sotib olishingiz mumkin.",
      },
      {
        question: "3 oylik Premium muddati tugaganda nima bo'ladi?",
        answer:
          "Premium o'chadi va akkaunt oddiy (free) Telegram'ga qaytadi. Davomida foydalangan stikerlar va premium emoji'lar boshqalarga ko'rinmaydigan bo'ladi, fayl yuklash chegarasi 4 GB dan 2 GB ga tushadi va boshqa Premium imkoniyatlari yo'qoladi.",
      },
    ],
  },
  '6-oylik': {
    metaTitle: "Telegram Premium 6 oylik narxi — 228 000 so'm — O'zbekistonda sotib olish",
    metaDescription:
      "Telegram Premium 6 oylik obuna O'zbekistonda 228 000 so'm — oyiga taxminan 38 000 so'm. UzCard, Humo, Click orqali to'lov. Mashhur tanlov: 3 oylikdan tejamli, 12 oylikdan moslashuvchan.",
    h1: { highlight: '6 oylik', rest: 'Telegram Premium' },
    oneLineSummary:
      'Telegram Premium olti oylik obuna — eng mashhur tanlov, tejash va moslashuvchanlik balansi.',
    whyThisPeriod:
      "6 oylik paket — eng mashhur tanlov hisoblanadi. Oyiga 38 000 so'm bilan 3 oylikdan ~32% arzonroq, lekin 12 oylik bilan farq atigi ~12%. Yarim yillik majburiyat ko'pchilik foydalanuvchi uchun aniq prognoz qilinadigan davr — masalan, akademik semestr yoki yarim yillik ish loyihasiga mos.",
    perMonthAngle:
      "Oyiga 38 000 so'm — bu 3 oylikdan 18 000 so'm tejaganingizni anglatadi. 6 oy davomida jami 108 000 so'm tejov. 12 oylik bilan solishtirganda esa atigi 4 000 so'm farq — moslashuvchanlik uchun mantiqiy savdo.",
    audience: [
      {
        title: "Premium'ni regulyar ishlatuvchilar",
        description:
          "Premium imkoniyatlariga muhtoj, lekin yillik obunaga to'g'ridan-to'g'ri o'tishga tayyor bo'lmagan foydalanuvchilar uchun ideal davomiy paket.",
      },
      {
        title: 'Eng balansli tanlovni izlovchilar',
        description:
          'Qisqa muddatli 3 oylikdan tejash va uzoq 12 oylikdan moslashuv — 6 oylik ikkalasidan eng yaxshisini birlashtiradi.',
      },
      {
        title: 'Akademik yoki ish davriga mos keluvchilar',
        description:
          "Aniq yarim yillik davr (semestr, ish loyihasi muddati) bilan ishlaydiganlar uchun 6 oylik — to'g'ri muddat tanlovi.",
      },
      {
        title: '12 oylikdan oldin uzoqroq sinov istovchilar',
        description:
          "3 oylik kam, 12 oylik ko'p tuyulsa — 6 oylik o'rta yo'l. Premium'ning real qiymatini chuqurroq baholash uchun yetarli vaqt.",
      },
    ],
    uniqueFAQ: [
      {
        question: 'Nega 6 oylik Premium eng mashhur tanlov hisoblanadi?',
        answer:
          "Tejash va moslashuvchanlik o'rtasidagi to'g'ri balans tufayli. Foydalanuvchi 3 oylikdan jiddiy arzon narx bilan tejaydi, lekin 12 oylikga o'xshab uzoq majburiyat olmaydi — yarim yildan keyin holatini qayta baholash imkoniyati saqlanadi.",
      },
      {
        question: "6 oylik tugagach davom ettirsam nima bo'ladi?",
        answer:
          "6 oy tugaganidan keyin yana 6 oylik (yoki istalgan boshqa muddat) sotib olishingiz mumkin. Ikki paket o'rtasida bo'shliq bo'lmasligi uchun muddat tugashidan oldin yangi paketni sotib olib qo'yish maslahat beriladi.",
      },
      {
        question: '6 oylik vs 12 oylik — qaysini tanlash kerak?',
        answer:
          "Agar Telegram'ni har kuni faol ishlatsangiz va kelgusi 12 oyga rejangiz aniq bo'lsa — 12 oylik tejamliroq (oyiga atigi 4 000 so'm farq). Agar 6 oydan keyin holatingiz o'zgarishi mumkin yoki Premium kerakligini baholash davom etayotgan bo'lsa — 6 oylik xavfsizroq tanlov.",
      },
      {
        question: '6 oy davomida narx oshib ketishi mumkinmi?',
        answer:
          "Yo'q. To'lov bir martalik amalga oshiriladi va paket muddati davomida hech qanday qo'shimcha to'lov olinmaydi. Telegram va Uzgets tomonidan narxlar o'zgarsa ham, sizning sotib olgan obunangizga ta'sir qilmaydi.",
      },
      {
        question: "6 oylikni do'stga sovg'a qila olamanmi?",
        answer:
          "Albatta. Buyurtma vaqtida sovg'a olinadigan @username ni kiritsangiz, Premium o'sha akkauntga biriktiriladi. Sovg'a oluvchi sizning to'lovingiz haqida xabardor bo'ladi va 6 oy davomida Premium imkoniyatlaridan foydalana oladi.",
      },
    ],
  },
  '12-oylik': {
    metaTitle: "Telegram Premium 12 oylik narxi — 408 000 so'm — yillik obuna",
    metaDescription:
      "Telegram Premium 12 oylik (yillik) obuna 408 000 so'm — oyiga taxminan 34 000 so'm. Bozordagi eng tejamli paket. UzCard, Humo, Click orqali to'lov.",
    h1: { highlight: '12 oylik', rest: 'Telegram Premium (yillik)' },
    oneLineSummary: "Telegram Premium yillik obuna — eng tejamli paket, oyiga 34 000 so'mga tushadi.",
    whyThisPeriod:
      "12 oylik (yillik) paket — Uzgetsdagi eng tejamli variant. Oyiga 34 000 so'm — 3 oylikdan ~40% arzonroq, 6 oylikdan ~12% arzonroq. Telegram'ni har kuni faol ishlatuvchilar, content kreatorlari va biznes egalari uchun moliyaviy jihatdan eng to'g'ri tanlov.",
    perMonthAngle:
      "Oyiga atigi 34 000 so'm. 3 oylik paketga nisbatan bir yilda 264 000 so'm tejaysiz (3 oylik 4 marta sotib olinsa 672 000 so'm bo'ladi, 12 oylik esa 408 000). Bu summa o'sha pulga 1 oy qo'shimcha Premium emas, taxminan 7-8 oylik qo'shimcha imkoniyatlarni anglatadi.",
    audience: [
      {
        title: "Telegram'ni har kuni faol ishlatuvchilar",
        description:
          "Mass-mediya kanallari, biznes chatlari, ko'p fayl yuklash, kanal va guruh boshqaruvi — Premium imkoniyatlaridan kunda foydalanuvchilar uchun yillik paket eng to'g'ri.",
      },
      {
        title: 'Eng tejamli variantni izlovchilar',
        description:
          "Oyiga 34 000 so'm — bu Telegram Premium uchun mahalliy to'lov bilan bozordagi eng past oylik narxlardan biri. Pulingiz uchun maksimal qiymat.",
      },
      {
        title: 'Content kreatorlar va biznes egalari',
        description:
          "Kanal yuritish, ko'p chat boshqarish, kanal va papka cheklovlari yuqori bo'lishi zarur bo'lganlar uchun yillik paket eng samarali.",
      },
      {
        title: "Sezilarli sovg'a izlovchilar",
        description:
          "Bir yillik Premium — Telegram'ni faol ishlatuvchi yaqiningiz uchun ham qulay, ham seziladigan sovg'a. Tug'ilgan kun, yangi yil yoki maxsus sanalar uchun mos.",
      },
    ],
    uniqueFAQ: [
      {
        question: "12 oylik Premium tugagach nima bo'ladi?",
        answer:
          "Premium o'z-o'zidan o'chadi va akkaunt oddiy (free) Telegram'ga qaytadi. Davom ettirish uchun yana botdan sotib olish kerak — avtomatik tarzda yangilanmaydi.",
      },
      {
        question: "Yillik Premium'ni bo'lib to'lash mumkinmi?",
        answer:
          "Yo'q. Bu bir martalik to'lov bo'lib, summa to'liq to'lanadi va akkauntda 12 oyga faollashadi. Bo'lib to'lash funksiyasi mavjud emas — agar bir martaga 408 000 so'm to'lash qiyin bo'lsa, 6 oylik (228 000) yoki 3 oylik (168 000) paketlarni ko'rib chiqing.",
      },
      {
        question: 'Yillik Premium nima uchun eng tejamli hisoblanadi?',
        answer:
          "Sotib olish bir martalik bo'lsa-da, narx 12 oyga taqsimlanadi. Oyiga 34 000 so'm — 3 oylik paketdan 22 000 so'm va 6 oylikdan 4 000 so'm arzonroq. Bir yilda jami 264 000 so'm tejaysiz (3 oylik bilan solishtirganda).",
      },
      {
        question: '1 yil davomida narx kafolati bormi?',
        answer:
          "Sotib olgan paytdan boshlab 12 oy davomida hech qanday qo'shimcha to'lov olinmaydi. Telegram yoki Uzgets tarafidan narxlar o'zgartirilsa ham, mavjud obunangizga ta'sir qilmaydi.",
      },
      {
        question: 'Yillik Premium muddati 1 yilda yo\'qolmasligi kafolatlanganmi?',
        answer:
          "Telegram Premium akkauntga to'g'ridan-to'g'ri Telegram tomonidan biriktiriladi. Uzgets faqat sotib olish jarayonini soddalashtiradi. Premium muddati Telegram tarafida saqlanadi va 12 oy davomida amal qiladi.",
      },
      {
        question: "Yillik paket sovg'a sifatida ham yaxshi tanlovmi?",
        answer:
          "Ha, ayniqsa Telegram'ni har kuni ishlatuvchi do'st, oila a'zosi yoki kasbiy hamkasb uchun. 1 yillik Premium — sezilarli, ishlatiladigan va doimiy ravishda eslatib turadigan sovg'a.",
      },
    ],
  },
}

const RU: Record<PremiumPeriod['slug'], PremiumPageContent> = {
  '3-oylik': {
    metaTitle: 'Telegram Premium на 3 месяца — 168 000 сум — купить в Узбекистане',
    metaDescription:
      'Подписка Telegram Premium на 3 месяца в Узбекистане — 168 000 сум. Оплата UzCard, Humo и Click, автоматическая активация через @uzgetsbot. Полное руководство по возможностям и покупке.',
    h1: { highlight: '3 месяца', rest: 'Telegram Premium' },
    oneLineSummary: 'Покупка трёхмесячной подписки Telegram Premium через локальные платёжные методы Узбекистана.',
    whyThisPeriod:
      'Пакет на 3 месяца — самая низкая точка входа, чтобы безопасно попробовать Telegram Premium. Не требует долгосрочных обязательств, но даёт достаточно времени, чтобы полноценно использовать все функции Premium. Особенно подходит, если вы пробуете Premium впервые или дарите его кому-то.',
    perMonthAngle:
      'Около 56 000 сум в месяц — это немного дороже по сравнению с 6-месячным (38 000 в месяц) и 12-месячным (34 000) пакетами. Однако короткое обязательство и гибкость пробного периода Premium оправдывают эту цену.',
    audience: [
      {
        title: 'Те, кто пробует Premium впервые',
        description:
          'Идеальный стартовый пакет для тех, кто хочет 3 месяца без давления попробовать возможности Telegram Premium перед годовой подпиской.',
      },
      {
        title: 'Хочется подарить',
        description:
          'Telegram Premium на 3 месяца — удобный и значимый подарок близкому другу или члену семьи. При оформлении можно указать любой @username.',
      },
      {
        title: 'Сезонное или временное использование',
        description:
          'Если Premium нужен под конкретный проект, поездку или рабочий период — короткий пакет это самое логичное решение.',
      },
      {
        title: 'Тест перед годовым обязательством',
        description:
          'Перед переходом на 12-месячный пакет 3 месяца — низко-рисковый тестовый период, чтобы оценить реальную ценность Premium на практике.',
      },
    ],
    uniqueFAQ: [
      {
        question: 'Telegram Premium на 3 месяца обновляется автоматически?',
        answer:
          'Нет. После 3 месяцев Premium отключается сам. Чтобы продолжить, нужно снова сделать заказ в боте — автоматических списаний нет. Это защищает вас от непредвиденных платежей в будущем.',
      },
      {
        question: 'Когда и где активируется Premium на 3 месяца?',
        answer:
          'После подтверждения оплаты Premium привязывается напрямую от Telegram к указанному @username. Отсчёт времени начинается с момента активации подписки и составляет ровно 90 дней.',
      },
      {
        question: 'Можно ли посередине срока изменить 3-месячный пакет на другой?',
        answer:
          'Нет. Это разовая оплата — функции смены пакета посередине срока нет. Однако после окончания 3 месяцев вы можете купить любой другой пакет (6 или 12 месяцев).',
      },
      {
        question: 'Что произойдёт, когда срок Premium на 3 месяца закончится?',
        answer:
          'Premium отключится, и аккаунт вернётся в обычный (бесплатный) режим Telegram. Стикеры и Premium-эмодзи перестанут отображаться у других, лимит загрузки файлов снизится с 4 ГБ до 2 ГБ, и другие возможности Premium станут недоступными.',
      },
    ],
  },
  '6-oylik': {
    metaTitle: 'Telegram Premium на 6 месяцев — 228 000 сум — купить в Узбекистане',
    metaDescription:
      'Подписка Telegram Premium на 6 месяцев в Узбекистане — 228 000 сум, около 38 000 сум в месяц. Оплата UzCard, Humo, Click. Популярный выбор: дешевле 3-месячного, гибче 12-месячного.',
    h1: { highlight: '6 месяцев', rest: 'Telegram Premium' },
    oneLineSummary:
      'Подписка Telegram Premium на полгода — самый популярный выбор: баланс экономии и гибкости.',
    whyThisPeriod:
      '6-месячный пакет — самый популярный выбор. 38 000 сум в месяц — это примерно на 32% дешевле 3-месячного, а отличие от 12-месячного составляет всего ~12%. Полугодовой срок — прогнозируемый период для большинства пользователей: например, академический семестр или полугодовой рабочий проект.',
    perMonthAngle:
      'В месяц 38 000 сум — это значит, вы экономите 18 000 сум по сравнению с 3-месячным. За 6 месяцев общая экономия — 108 000 сум. По сравнению с 12-месячным разница всего 4 000 сум — логичный размен ради гибкости.',
    audience: [
      {
        title: 'Регулярные пользователи Premium',
        description:
          'Идеальный «следующий шаг» для тех, кому нужен Premium, но кто пока не готов сразу к годовой подписке.',
      },
      {
        title: 'Ищут самый сбалансированный выбор',
        description:
          'Экономия по сравнению с 3-месячным и гибкость по сравнению с 12-месячным — 6 месяцев объединяют лучшее из обоих вариантов.',
      },
      {
        title: 'Подходящие под академический или рабочий период',
        description:
          'Тем, кто работает с конкретным полугодовым циклом (семестр, продолжительность проекта) — 6 месяцев это правильный выбор срока.',
      },
      {
        title: 'Хотят более длинный тест перед годовой подпиской',
        description:
          'Если 3 месяца кажется мало, а 12 — много, 6 месяцев это золотая середина. Времени достаточно, чтобы глубже оценить реальную ценность Premium.',
      },
    ],
    uniqueFAQ: [
      {
        question: 'Почему 6-месячный Premium считается самым популярным?',
        answer:
          'Из-за идеального баланса между экономией и гибкостью. Пользователь серьёзно экономит по сравнению с 3-месячным, но не берёт на себя длинного обязательства как с 12-месячным — возможность переоценить ситуацию через полгода сохраняется.',
      },
      {
        question: 'Что произойдёт, если я продолжу после 6 месяцев?',
        answer:
          'После 6 месяцев вы можете купить ещё 6-месячный (или любой другой срок) пакет. Чтобы между двумя пакетами не было разрыва, рекомендуется оформить новый заказ заранее.',
      },
      {
        question: '6 месяцев vs 12 месяцев — что выбрать?',
        answer:
          'Если вы пользуетесь Telegram каждый день и ваш план на ближайшие 12 месяцев определён — 12-месячный экономнее (разница всего 4 000 сум в месяц). Если ситуация может поменяться через полгода или вы всё ещё оцениваете нужность Premium — 6 месяцев это безопаснее.',
      },
      {
        question: 'Может ли цена вырасти за 6 месяцев?',
        answer:
          'Нет. Оплата производится единовременно, и в течение срока действия пакета никаких дополнительных платежей не списывается. Даже если Telegram или Uzgets изменят цены, на уже купленную подписку это не влияет.',
      },
      {
        question: 'Могу ли я подарить 6 месяцев другу?',
        answer:
          'Конечно. При оформлении укажите @username получателя — Premium активируется на этот аккаунт. Получатель будет в курсе, что вы оплатили подписку, и сможет 6 месяцев пользоваться возможностями Premium.',
      },
    ],
  },
  '12-oylik': {
    metaTitle: 'Telegram Premium на 12 месяцев — 408 000 сум — годовая подписка',
    metaDescription:
      'Telegram Premium на 12 месяцев (год) — 408 000 сум, около 34 000 сум в месяц. Самый экономный пакет на рынке. Оплата UzCard, Humo, Click.',
    h1: { highlight: '12 месяцев', rest: 'Telegram Premium (год)' },
    oneLineSummary:
      'Годовая подписка Telegram Premium — самый экономный пакет, выходит примерно 34 000 сум в месяц.',
    whyThisPeriod:
      '12-месячный (годовой) пакет — самый экономный вариант в Uzgets. 34 000 сум в месяц — это примерно на 40% дешевле 3-месячного и на 12% дешевле 6-месячного. Финансово самый выгодный выбор для тех, кто ежедневно пользуется Telegram, для контент-креаторов и владельцев бизнеса.',
    perMonthAngle:
      'Всего 34 000 сум в месяц. По сравнению с 3-месячным пакетом за год вы экономите 264 000 сум (4 покупки 3-месячного = 672 000 сум, тогда как 12-месячный — 408 000). За эту сумму получаете не один дополнительный месяц, а примерно 7–8 месяцев дополнительных возможностей.',
    audience: [
      {
        title: 'Активные ежедневные пользователи Telegram',
        description:
          'Каналы массмедиа, бизнес-чаты, частая загрузка файлов, управление каналами и группами — для тех, кто пользуется возможностями Premium ежедневно, годовой пакет это правильный выбор.',
      },
      {
        title: 'Ищут самый экономный вариант',
        description:
          '34 000 сум в месяц — одна из самых низких ежемесячных цен на Telegram Premium на рынке через локальные платежи. Максимум выгоды за ваши деньги.',
      },
      {
        title: 'Контент-креаторы и владельцы бизнеса',
        description:
          'Для тех, кто ведёт каналы, управляет множеством чатов, и кому нужны высокие лимиты на каналы и папки — годовой пакет самый эффективный.',
      },
      {
        title: 'Ищут серьёзный подарок',
        description:
          'Год Premium — одновременно удобный и значимый подарок близкому, который активно пользуется Telegram. Подходит на день рождения, Новый год или особые даты.',
      },
    ],
    uniqueFAQ: [
      {
        question: 'Что произойдёт, когда закончится 12-месячный Premium?',
        answer:
          'Premium отключится сам, аккаунт вернётся в обычный (бесплатный) режим Telegram. Чтобы продолжить, нужно снова сделать заказ в боте — автоматического обновления нет.',
      },
      {
        question: 'Можно ли оплатить годовой Premium в рассрочку?',
        answer:
          'Нет. Это разовая оплата — сумма вносится полностью, и Premium активируется на 12 месяцев. Функции рассрочки нет — если оплатить 408 000 сум сразу сложно, рассмотрите 6-месячный (228 000) или 3-месячный (168 000) пакеты.',
      },
      {
        question: 'Почему годовой Premium считается самым экономным?',
        answer:
          'Покупка разовая, но цена распределена на 12 месяцев. 34 000 сум в месяц — это на 22 000 сум дешевле 3-месячного и на 4 000 сум дешевле 6-месячного. За год вы экономите 264 000 сум (по сравнению с 3-месячным).',
      },
      {
        question: 'Есть ли гарантия цены на 12 месяцев?',
        answer:
          'С момента покупки в течение 12 месяцев никаких дополнительных списаний не будет. Даже если Telegram или Uzgets изменят цены, на вашу действующую подписку это не повлияет.',
      },
      {
        question: 'Гарантировано ли, что Premium не пропадёт за 12 месяцев?',
        answer:
          'Telegram Premium привязывается к аккаунту напрямую от Telegram. Uzgets лишь упрощает процесс покупки. Срок Premium хранится у Telegram и действует все 12 месяцев.',
      },
      {
        question: 'Подойдёт ли годовой пакет в качестве подарка?',
        answer:
          'Да, особенно для друга, члена семьи или коллеги, который ежедневно пользуется Telegram. Год Premium — заметный, используемый и постоянно напоминающий о себе подарок.',
      },
    ],
  },
}

const PREMIUM_CONTENT_BY_LOCALE: Record<Locale, Record<PremiumPeriod['slug'], PremiumPageContent>> = {
  uz: UZ,
  ru: RU,
}

export function getPremiumPageContent(lang: Locale, slug: PremiumPeriod['slug']): PremiumPageContent {
  return PREMIUM_CONTENT_BY_LOCALE[lang][slug]
}

// Backwards-compat (Uzbek default) for incremental migration
export const PREMIUM_PAGE_CONTENT = UZ
