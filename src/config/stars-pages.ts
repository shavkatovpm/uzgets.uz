import { formatNumber, formatUzs } from '@/lib/format'
import { starsPrice } from './products'
import type { Locale } from '@/i18n/config'

export type AudienceCard = { title: string; description: string }
export type UniqueFAQ = { question: string; answer: string }

export type StarsPageContent = {
  metaTitle: string
  metaDescription: string
  oneLineSummary: string
  whyThisAmount: string
  audience: AudienceCard[]
  useCases: { title: string; description: string }[]
  uniqueFAQ: UniqueFAQ[]
}

const FEATURED_UZ: Record<string, StarsPageContent> = {
  '50': {
    metaTitle: "50 Telegram Stars sotib olish — 11 000 so'm — O'zbekistonda",
    metaDescription:
      "50 ta Telegram Stars yulduzchasi O'zbekistonda 11 000 so'm. Eng kichik buyurtma. UzCard, Humo va Click orqali to'lov, @uzgetsbot orqali tezkor faollashtirish.",
    oneLineSummary: "50 ta Telegram Stars — Uzgetsda eng kichik kirish paketi, 11 000 so'mga.",
    whyThisAmount:
      "50 — Telegram Stars'ning eng kichik buyurtma miqdori. Tizimni sinab ko'rmoqchilar, bir martalik kichik xarid yoki sovg'a qilmoqchilar uchun ideal kirish nuqtasi. Bundan kichik miqdor sotib olib bo'lmaydi.",
    audience: [
      {
        title: "Telegram Stars'ni birinchi marta ishlatuvchilar",
        description:
          "Yulduzchalar tizimini sinab ko'rmoqchi, qanday ishlashini tushunmoqchi bo'lganlar uchun minimal investitsiyali boshlanish.",
      },
      {
        title: "Bitta sovg'a yoki reaksiya yubormoqchilar",
        description:
          "Bir do'stga kichik sovg'a, bir kanalga reaksiya yoki bir marta qo'llab-quvvatlash uchun yetarli — ortiqcha pul sarflashga hojat yo'q.",
      },
      {
        title: 'Mini-app foydalanuvchilari',
        description:
          "Telegram Mini App'larda kichik xizmatlar (avatarlar, kichik premium funksiyalar) uchun bir martalik to'lov.",
      },
    ],
    useCases: [
      {
        title: 'Premium emoji uchun',
        description:
          "Telegram Premium foydalanuvchilarida ochiladigan emoji'lardan ba'zilarini ochish va o'z chatlaringizda ishlatish.",
      },
      {
        title: 'Kanalga reaksiya yuborish',
        description:
          "Yoqtirgan kanal mualliflariga maxsus, pullik reaksiyalar yuborib, ularni qo'llab-quvvatlash.",
      },
      {
        title: "Do'stga kichik sovg'a",
        description: "Yaqin do'stga kichik miqdor Stars yuborish — sovg'a sifatida yoki ramziy ravishda.",
      },
      {
        title: "Mini-app to'lovlari",
        description:
          "Telegram Mini App'larida pullik funksiyalar yoki kichik raqamli mahsulotlar uchun to'lov amalga oshirish.",
      },
    ],
    uniqueFAQ: [
      {
        question: '50 ta Stars qancha vaqtga yetadi?',
        answer:
          "Bu sizning ishlatish darajangizga bog'liq. Faol kanal mualliflari yoki ko'p reaksiya yuboruvchilar uchun bir hafta-ikki haftaga, kam ishlatuvchilar uchun bir necha oy yetishi mumkin.",
      },
      {
        question: "50 ta Stars'ni hammasini bir martada sarflash shartmi?",
        answer:
          "Yo'q. Yulduzchalar akkauntda muddatsiz saqlanadi va istalgan vaqtda kerakli miqdorda sarflanadi. Bir necha oy sarflamasdan saqlasangiz ham bo'ladi.",
      },
      {
        question: 'Eng arzon Telegram Stars buyurtmasi qaysi?',
        answer:
          "Uzgetsdagi eng arzon variant — 50 ta Stars 11 000 so'm. Bundan kam buyurtma berish texnik jihatdan mumkin emas — bu Telegram tarafida o'rnatilgan minimal chegara.",
      },
      {
        question: '50 ta Stars 100 ta yoki 500 tadan farqi nima?',
        answer:
          "Faqat miqdor jihatidan farq. Har Stars'ning narxi taxminan 220 so'm — barcha paketlarda bir xil. Katta paket bilan kam buyurtma berasiz, bu vaqt va boshqaruv jihatidan tejamli bo'ladi.",
      },
    ],
  },
  '100': {
    metaTitle: "100 Telegram Stars sotib olish — 25 400 so'm — O'zbekistonda",
    metaDescription:
      "100 ta Telegram Stars yulduzchasi O'zbekistonda 25 400 so'm. UzCard, Humo, Click orqali to'lov. Stars'ni regulyar ishlatuvchilar uchun mos kichik paket.",
    oneLineSummary: "100 ta Telegram Stars — eng mashhur kichik paket, 25 400 so'm.",
    whyThisAmount:
      "100 — eng mashhur kichik paketlardan biri. 50 dan ikki marta ko'p, ammo hali ham kirish darajasidagi narx. Stars'ni regulyar ishlatuvchilar yoki bir necha sovg'a yubormoqchilar uchun ideal kichik zaxira.",
    audience: [
      {
        title: 'Casual Telegram Stars foydalanuvchilari',
        description: "Bir oyda bir necha bor reaksiya, kichik sovg'a yoki mini-app to'lovi qiluvchilar uchun mos zaxira.",
      },
      {
        title: 'Kichik kanal mualliflari',
        description:
          "Yangi kanal egasi sifatida boshlovchilar yoki guruh administratorlari uchun bir necha funksiyani sinab ko'rishga yetadi.",
      },
      {
        title: "Stars sovg'a qiluvchilar",
        description:
          "Bir necha do'stga kichik sovg'a, bayram tabriklarida yoki maxsus kunlarda yulduzcha yuborishni xohlovchilar uchun.",
      },
    ],
    useCases: [
      {
        title: 'Bir necha kun reaksiya marafoni',
        description:
          "Turli kanallarda bir hafta davomida regulyar pullik reaksiyalar yuborib, content kreatorlarini qo'llab-quvvatlash.",
      },
      {
        title: "1-2 ta o'rtacha sovg'a",
        description: "Yaqin do'stga 50, ikkinchi do'stga 50 — yoki bir do'stga 100 ta yulduzcha sovg'a sifatida yuborish.",
      },
      {
        title: "Premium emoji to'plamini sotib olish",
        description: "Bir necha turli premium emoji'larni ochish va o'z chatlarda ishlatish.",
      },
      {
        title: "Mini-app'lardagi xizmatlar uchun",
        description:
          "Bir-ikki Telegram Mini App'da pullik funksiyalar yoki raqamli mahsulotlar uchun bir necha to'lov.",
      },
      {
        title: 'Kanaldagi pullik post uchun',
        description: "Yopiq kanallar yoki pullik kontent ishlab chiquvchi mualliflarga 1-2 marta kirish.",
      },
    ],
    uniqueFAQ: [
      {
        question: '100 Stars sotib olganda bir Stars necha so\'mga tushadi?',
        answer:
          "Bir yulduzcha taxminan 220 so'mga tushadi. Bu narx 50, 100, 500 va boshqa miqdorlar uchun bir xil — sotib olgan miqdoringizga proportsional hisoblanadi.",
      },
      {
        question: '100 va 500 — qaysini tanlash kerak?',
        answer:
          "Agar Stars'ni kamdan-kam ishlatsangiz — 100 ta yetarli. Agar haftada bir necha bor sarflasangiz — 500 ta paket boshqaruv jihatidan tejamliroq (kam marta buyurtma berasiz).",
      },
      {
        question: '100 ta Stars qaysi muddatga yetadi?',
        answer:
          "Bu siz qanchalik faol foydalanishingizga bog'liq. O'rtacha foydalanuvchi uchun 1-2 oyga, kam ishlatuvchilar uchun bir necha oyga, faol foydalanuvchilar uchun 2-3 haftaga yetishi mumkin.",
      },
      {
        question: "100 ta Stars'ni qisman sarflasam, qolganlari saqlanadimi?",
        answer:
          "Albatta. Yulduzchalar akkauntda muddatsiz saqlanadi. 100 dan 30 tasini sarflasangiz, qolgan 70 ta keyingi safar uchun saqlanib turadi.",
      },
    ],
  },
  '500': {
    metaTitle: "500 Telegram Stars sotib olish — 127 000 so'm — O'zbekistonda",
    metaDescription:
      "500 ta Telegram Stars yulduzchasi O'zbekistonda 127 000 so'm. Faol foydalanuvchilar va content kreatorlari uchun ideal o'rta paket. UzCard, Humo, Click orqali to'lov.",
    oneLineSummary: "500 ta Telegram Stars — faol foydalanuvchilar uchun o'rta paket, 127 000 so'm.",
    whyThisAmount:
      "500 — o'rta-yuqori paket. Bir xaridda ko'p Stars olish — har safar kichik buyurtma berishdan ko'ra qulayroq va vaqt jihatidan tejamli. Faol foydalanuvchilar va content kreatorlari uchun mos kattaroq zaxira.",
    audience: [
      {
        title: 'Faol Telegram foydalanuvchilari',
        description:
          "Har kuni Stars sarflaydiganlar — kanallarda regulyar reaksiyalar, ko'p sovg'alar va premium funksiyalardan keng foydalanuvchilar.",
      },
      {
        title: 'Kanal va guruh mualliflari',
        description:
          "Content kreatorlar uchun — pullik postlar, premium funksiyalar, obunachilarni rag'batlantirish, kontent monetizatsiya.",
      },
      {
        title: "Stars to'lovchi mini-app foydalanuvchilari",
        description:
          "Telegram Mini App'larda regulyar to'lov qiluvchilar — o'yin, xizmat yoki raqamli mahsulotlar sotib oluvchilar uchun yaxshi zaxira.",
      },
      {
        title: "Sezilarli sovg'a izlovchilar",
        description:
          "Yaqin do'st yoki oila a'zosiga sezilarli miqdorda Stars sovg'a qilmoqchilar uchun — 500 ta yulduzcha katta va ishlatiladigan sovg'a.",
      },
    ],
    useCases: [
      {
        title: '1-2 oy regulyar Stars sarflash',
        description:
          "Faol foydalanuvchi sifatida bir-ikki oy davomida regulyar reaksiyalar, sovg'alar va premium funksiyalar uchun yetarli zaxira.",
      },
      {
        title: "10-20 ta sovg'a yuborish",
        description:
          "Turli odamlarga turli darajadagi (25-50 dan boshlab) sovg'alar — bayram, tug'ilgan kun yoki maxsus tabriklar uchun.",
      },
      {
        title: "Bir necha katta premium emoji to'plami",
        description:
          "Bir necha to'liq premium emoji to'plamlarini sotib olish va o'z chatlaringizda turli holatlarda ishlatish.",
      },
      {
        title: "Mini-app'larda regulyar to'lov",
        description:
          "Sevimli Telegram Mini App'larda regulyar premium funksiyalar, o'yin ichidagi xaridlar yoki raqamli xizmatlar uchun.",
      },
      {
        title: 'Top-tier reaksiyalar',
        description:
          "Boshqalar profillarida yuqori darajadagi pullik reaksiyalar yuborib, ko'rinishingizni oshirish.",
      },
      {
        title: 'Kanal/guruh administratorlari uchun',
        description:
          "Kanal egalari Stars'ni post oldindan ko'rishlari, custom emoji yaratishi va boshqa admin funksiyalar uchun ishlatadi.",
      },
    ],
    uniqueFAQ: [
      {
        question: '500 Stars qaysi muddatga yetadi?',
        answer:
          'Faol foydalanuvchi uchun taxminan 1-2 oy. Agar siz content kreator bo\'lsangiz va premium funksiyalarni faol ishlatsangiz — 1 oy. Casual foydalanuvchi uchun bir necha oy yoki undan ko\'p.',
      },
      {
        question: '500 dan ham kattaroq paketlar bormi?',
        answer:
          'Ha, Uzgetsda 1000, 2500, 5000 va 10 000 ta Stars paketlari ham mavjud. Bundan tashqari, botda istalgan miqdorni belgilash mumkin — minimal 50 dan boshlab.',
      },
      {
        question: '500 Stars sotib olganda chegirma yoki bonus bormi?',
        answer:
          "Narx miqdorga proportsional hisoblanadi — har Stars taxminan 220 so'm, miqdor o'zgarganda ham. Lekin katta paket bilan kam marta buyurtma berasiz, bu vaqt va boshqaruv jihatidan tejamli.",
      },
      {
        question: '500 Stars akkauntda muddatli saqlanadimi?',
        answer:
          "Yo'q, Telegram Stars muddati cheklanmagan. Hozir sotib olib, bir yildan keyin sarflasangiz ham mavjud bo'ladi. Yulduzchalar akkauntda doimo saqlanadi.",
      },
      {
        question: "500 ta Stars'ni boshqa odamga sovg'a qilsa bo'ladimi?",
        answer:
          "Ha. Buyurtma berishda istalgan @username kiritsangiz, 500 ta yulduzcha o'sha akkauntga to'g'ridan-to'g'ri yuboriladi. Sovg'a oluvchi keyin Stars'ni o'z xohishi bo'yicha sarflashi mumkin.",
      },
    ],
  },
}

const FEATURED_RU: Record<string, StarsPageContent> = {
  '50': {
    metaTitle: 'Купить 50 Telegram Stars — 11 000 сум — в Узбекистане',
    metaDescription:
      '50 звёзд Telegram Stars в Узбекистане — 11 000 сум. Минимальный заказ. Оплата UzCard, Humo и Click, быстрая активация через @uzgetsbot.',
    oneLineSummary: '50 Telegram Stars — самый маленький стартовый пакет в Uzgets, за 11 000 сум.',
    whyThisAmount:
      '50 — минимальное количество для заказа Telegram Stars. Идеальная точка входа для тех, кто хочет попробовать систему, разово сделать небольшую покупку или подарок. Меньше купить технически нельзя.',
    audience: [
      {
        title: 'Те, кто впервые пользуется Telegram Stars',
        description:
          'Минимальная инвестиция, чтобы попробовать систему звёзд и понять, как она работает.',
      },
      {
        title: 'Хотят отправить один подарок или реакцию',
        description:
          'Достаточно для маленького подарка другу, реакции в одном канале или разовой поддержки автора — без лишних трат.',
      },
      {
        title: 'Пользователи мини-приложений',
        description:
          'Разовая оплата мелких услуг в Telegram Mini App (аватары, мелкие премиум-функции).',
      },
    ],
    useCases: [
      {
        title: 'Для Premium-эмодзи',
        description:
          'Откройте часть закрытых эмодзи Premium-пользователей и используйте их в своих чатах.',
      },
      {
        title: 'Реакции в каналах',
        description:
          'Отправляйте авторам любимых каналов специальные платные реакции — это способ их поддержать.',
      },
      {
        title: 'Маленький подарок другу',
        description: 'Перешлите близкому другу немного звёзд — как подарок или символический жест.',
      },
      {
        title: 'Оплата в Mini App',
        description:
          'Оплачивайте платные функции или мелкие цифровые товары в Telegram Mini App.',
      },
    ],
    uniqueFAQ: [
      {
        question: 'На сколько хватит 50 звёзд?',
        answer:
          'Зависит от того, как часто вы их тратите. Активным авторам каналов или тем, кто часто отправляет реакции, может хватить на одну-две недели; редким пользователям — на несколько месяцев.',
      },
      {
        question: 'Обязательно ли тратить все 50 звёзд сразу?',
        answer:
          'Нет. Звёзды хранятся на аккаунте бессрочно, и тратятся в любое время по необходимости. Можно несколько месяцев их вообще не использовать.',
      },
      {
        question: 'Какой самый дешёвый заказ Telegram Stars?',
        answer:
          'Самый дешёвый вариант в Uzgets — 50 Stars за 11 000 сум. Меньше заказать технически нельзя — это минимальная граница, установленная Telegram.',
      },
      {
        question: 'Чем 50 отличается от 100 или 500?',
        answer:
          'Только количеством. Цена за одну Stars одинакова — около 220 сум во всех пакетах. С большим пакетом вы делаете меньше заказов, что удобно по времени и удобству.',
      },
    ],
  },
  '100': {
    metaTitle: 'Купить 100 Telegram Stars — 25 400 сум — в Узбекистане',
    metaDescription:
      '100 звёзд Telegram Stars в Узбекистане — 25 400 сум. Оплата UzCard, Humo, Click. Подходящий маленький пакет для регулярных пользователей Stars.',
    oneLineSummary: '100 Telegram Stars — самый популярный маленький пакет, 25 400 сум.',
    whyThisAmount:
      '100 — один из самых популярных маленьких пакетов. В два раза больше 50, но всё ещё в стартовом ценовом диапазоне. Идеальный небольшой запас для регулярных пользователей или тех, кто хочет отправить несколько подарков.',
    audience: [
      {
        title: 'Casual-пользователи Telegram Stars',
        description: 'Подходящий запас для тех, кто несколько раз в месяц ставит реакции, дарит мелкие подарки или платит в мини-приложениях.',
      },
      {
        title: 'Авторы небольших каналов',
        description:
          'Тем, кто только начинает вести канал, или администраторам групп — хватит, чтобы попробовать несколько функций.',
      },
      {
        title: 'Те, кто дарит звёзды',
        description:
          'Для тех, кто хочет отправить несколько маленьких подарков-звёзд друзьям, поздравить с праздниками или особыми днями.',
      },
    ],
    useCases: [
      {
        title: 'Реакционный марафон на несколько дней',
        description:
          'Отправляйте в течение недели регулярные платные реакции в разных каналах, поддерживая контент-креаторов.',
      },
      {
        title: '1–2 средних подарка',
        description:
          'Близкому другу 50, второму другу 50 — или одному другу сразу 100 звёзд в качестве подарка.',
      },
      {
        title: 'Покупка набора Premium-эмодзи',
        description: 'Откройте несколько разных Premium-эмодзи и используйте их в своих чатах.',
      },
      {
        title: 'Услуги в мини-приложениях',
        description:
          'Несколько платежей за платные функции или цифровые товары в одном-двух Telegram Mini App.',
      },
      {
        title: 'Платный пост в канале',
        description:
          'Один-два раза получите доступ в закрытые каналы или к платному контенту авторов.',
      },
    ],
    uniqueFAQ: [
      {
        question: 'Сколько стоит одна звезда при покупке 100?',
        answer:
          'Одна звезда стоит примерно 220 сум. Эта цена одинакова для пакетов в 50, 100, 500 и других — рассчитывается пропорционально объёму.',
      },
      {
        question: '100 или 500 — что выбрать?',
        answer:
          'Если вы пользуетесь Stars редко — хватит 100. Если несколько раз в неделю их тратите — пакет на 500 удобнее по управлению (реже придётся делать заказы).',
      },
      {
        question: 'На какой срок хватит 100 звёзд?',
        answer:
          'Зависит от частоты использования. Среднему пользователю хватит на 1–2 месяца, редким — на несколько месяцев, активным — на 2–3 недели.',
      },
      {
        question: 'Если я потрачу 100 частично, остаток сохранится?',
        answer:
          'Конечно. Звёзды хранятся на аккаунте бессрочно. Если вы потратите 30 из 100, оставшиеся 70 сохранятся для следующего раза.',
      },
    ],
  },
  '500': {
    metaTitle: 'Купить 500 Telegram Stars — 127 000 сум — в Узбекистане',
    metaDescription:
      '500 звёзд Telegram Stars в Узбекистане — 127 000 сум. Идеальный средний пакет для активных пользователей и контент-креаторов. Оплата UzCard, Humo, Click.',
    oneLineSummary: '500 Telegram Stars — средний пакет для активных пользователей, 127 000 сум.',
    whyThisAmount:
      '500 — средне-крупный пакет. Купить много Stars за один раз удобнее и быстрее, чем заказывать маленькими порциями. Подходящий запас для активных пользователей и контент-креаторов.',
    audience: [
      {
        title: 'Активные пользователи Telegram',
        description:
          'Те, кто тратит звёзды каждый день — регулярные реакции в каналах, много подарков, активное использование премиум-функций.',
      },
      {
        title: 'Авторы каналов и групп',
        description:
          'Контент-креаторам — для платных постов, премиум-функций, поощрения подписчиков, монетизации контента.',
      },
      {
        title: 'Регулярные пользователи Mini App',
        description:
          'Тем, кто регулярно платит в Telegram Mini App — игры, услуги, цифровые товары — хороший запас.',
      },
      {
        title: 'Ищут серьёзный подарок',
        description:
          'Для тех, кто хочет подарить близкому или родственнику заметную сумму звёзд — 500 это большой и используемый подарок.',
      },
    ],
    useCases: [
      {
        title: 'Регулярные траты на 1–2 месяца',
        description:
          'Запас, которого хватит активному пользователю на 1–2 месяца регулярных реакций, подарков и премиум-функций.',
      },
      {
        title: '10–20 подарков',
        description:
          'Подарки разным людям разного размера (от 25–50) — на праздники, дни рождения или особые поводы.',
      },
      {
        title: 'Несколько крупных наборов Premium-эмодзи',
        description:
          'Покупка нескольких полных премиум-наборов эмодзи и их использование в разных ситуациях в чатах.',
      },
      {
        title: 'Регулярные оплаты в Mini App',
        description:
          'В любимых Telegram Mini App — премиум-функции, внутриигровые покупки или цифровые услуги.',
      },
      {
        title: 'Топ-уровень реакций',
        description:
          'Отправляйте более «дорогие» платные реакции в профилях других, чтобы повысить заметность.',
      },
      {
        title: 'Для администраторов каналов/групп',
        description:
          'Авторы каналов используют звёзды для платных предпросмотров постов, создания кастом-эмодзи и других админ-функций.',
      },
    ],
    uniqueFAQ: [
      {
        question: 'На сколько хватит 500 звёзд?',
        answer:
          'Активному пользователю — примерно на 1–2 месяца. Если вы контент-креатор и активно используете премиум-функции — на 1 месяц. Casual-пользователю — на несколько месяцев и больше.',
      },
      {
        question: 'Есть ли пакеты больше 500?',
        answer:
          'Да, в Uzgets также есть пакеты на 1000, 2500, 5000 и 10 000 Stars. Кроме того, в боте можно указать любое количество, начиная от 50.',
      },
      {
        question: 'Есть ли скидки или бонусы при покупке 500?',
        answer:
          'Цена пропорциональна количеству — около 220 сум за каждую Stars при любом объёме. Но с большим пакетом вы реже делаете заказы, что удобнее по времени и управлению.',
      },
      {
        question: 'Хранятся ли 500 звёзд на аккаунте по сроку?',
        answer:
          'Нет, у Telegram Stars нет срока действия. Купите сейчас, потратите через год — они всё равно будут доступны. Звёзды хранятся на аккаунте бессрочно.',
      },
      {
        question: 'Можно ли подарить 500 звёзд другому человеку?',
        answer:
          'Да. При оформлении заказа укажите любой Telegram @username — 500 звёзд напрямую отправятся на этот аккаунт. Получатель сможет тратить их по своему усмотрению.',
      },
    ],
  },
}

function deriveStarsContentUz(amount: number): StarsPageContent {
  const price = starsPrice(amount)
  const amountStr = formatNumber(amount)
  return {
    metaTitle: `${amountStr} Telegram Stars sotib olish — ${formatUzs(price)} — O'zbekistonda`,
    metaDescription: `${amountStr} ta Telegram Stars yulduzchasi O'zbekistonda ${formatUzs(price)}. UzCard, Humo, Click orqali to'lov, @uzgetsbot orqali tezkor sotib olish.`,
    oneLineSummary: `${amountStr} ta Telegram Stars — ${formatUzs(price)}, O'zbekistondan tezda sotib olish.`,
    whyThisAmount: `${amountStr} ta Telegram Stars — turli xil Telegram ichidagi xizmatlar, sovg'alar va mini-app to'lovlari uchun yetadigan miqdor. Mahalliy to'lov usullari bilan tezkor sotib olish.`,
    audience: [
      {
        title: 'Faol Stars foydalanuvchilari',
        description: "Telegram'da regulyar Stars sarflovchilar uchun mos zaxira.",
      },
      {
        title: 'Kanal va guruh mualliflari',
        description: 'Content kreatorlar va community boshqaruvchilari uchun — premium funksiyalar va monetizatsiya.',
      },
      {
        title: "Sovg'a izlovchilar",
        description:
          "Yaqinlarga Stars sovg'a qilmoqchilar uchun — buyurtmada istalgan @username kiritish mumkin.",
      },
    ],
    useCases: [
      {
        title: "Premium funksiyalar uchun to'lov",
        description: "Telegram'dagi pullik xizmatlar, premium emoji va custom reaksiyalar uchun.",
      },
      {
        title: "Sovg'alar yuborish",
        description: "Do'stlar va yaqinlarga Stars sovg'asi sifatida yuborish.",
      },
      {
        title: "Mini-app to'lovlari",
        description: "Telegram Mini App'larda raqamli mahsulot va xizmatlar uchun to'lash.",
      },
      {
        title: 'Kanal kontentini sotib olish',
        description: 'Pullik kanallar yoki content kreatorlarning premium materiallarini ochish.',
      },
    ],
    uniqueFAQ: [
      {
        question: `${amountStr} Stars sotib olishda 1 ta Stars necha so'mga tushadi?`,
        answer:
          "Bir Stars taxminan 220 so'mga tushadi. Bu narx barcha miqdorlar uchun bir xil — proportsional hisoblanadi.",
      },
      {
        question: `${amountStr} ta Stars qaysi muddatga yetadi?`,
        answer:
          "Bu sizning ishlatish darajangizga bog'liq. Yulduzchalar akkauntda muddatsiz saqlanadi va istalgan vaqtda sarflanadi.",
      },
    ],
  }
}

function deriveStarsContentRu(amount: number): StarsPageContent {
  const price = starsPrice(amount)
  const amountStr = formatNumber(amount)
  return {
    metaTitle: `Купить ${amountStr} Telegram Stars — ${formatUzs(price)} — в Узбекистане`,
    metaDescription: `${amountStr} звёзд Telegram Stars в Узбекистане — ${formatUzs(price)}. Оплата UzCard, Humo, Click, быстрая покупка через @uzgetsbot.`,
    oneLineSummary: `${amountStr} Telegram Stars — ${formatUzs(price)}, быстрая покупка из Узбекистана.`,
    whyThisAmount: `${amountStr} Telegram Stars — количество, достаточное для разнообразных услуг, подарков и оплат в Mini App. Быстрая покупка через локальные платёжные методы.`,
    audience: [
      {
        title: 'Активные пользователи Stars',
        description: 'Подходящий запас для тех, кто регулярно тратит звёзды в Telegram.',
      },
      {
        title: 'Авторы каналов и групп',
        description: 'Для контент-креаторов и администраторов сообществ — премиум-функции и монетизация.',
      },
      {
        title: 'Те, кто дарит',
        description: 'Для тех, кто хочет подарить звёзды близким — в боте можно указать любой @username.',
      },
    ],
    useCases: [
      {
        title: 'Оплата премиум-функций',
        description: 'За платные сервисы Telegram, Premium-эмодзи и кастомные реакции.',
      },
      {
        title: 'Отправка подарков',
        description: 'Дарите звёзды друзьям и близким.',
      },
      {
        title: 'Оплата в Mini App',
        description: 'Платите за цифровые товары и услуги в Telegram Mini App.',
      },
      {
        title: 'Покупка контента в каналах',
        description: 'Открывайте платные каналы или премиум-материалы контент-креаторов.',
      },
    ],
    uniqueFAQ: [
      {
        question: `Сколько стоит одна звезда при покупке ${amountStr}?`,
        answer:
          'Одна Stars стоит примерно 220 сум. Эта цена одинакова для всех количеств — рассчитывается пропорционально.',
      },
      {
        question: `На сколько хватит ${amountStr} звёзд?`,
        answer:
          'Зависит от частоты использования. Звёзды хранятся на аккаунте бессрочно и тратятся в любое время.',
      },
    ],
  }
}

export function getStarsPageContent(lang: Locale, slug: string, amount: number): StarsPageContent {
  if (lang === 'uz') {
    return FEATURED_UZ[slug] ?? deriveStarsContentUz(amount)
  }
  return FEATURED_RU[slug] ?? deriveStarsContentRu(amount)
}
