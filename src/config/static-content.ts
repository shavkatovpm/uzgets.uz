import type { Locale } from '@/i18n/config'

export type FeatureItem = { title: string; description: string }

const PREMIUM_FEATURES_UZ: FeatureItem[] = [
  {
    title: '4 GB gacha fayl yuklash',
    description:
      "Bitta faylda 4 GB gacha hujjat, video yoki audio yuklash. Bepul Telegram'da bu chegara 2 GB ni tashkil etadi.",
  },
  {
    title: "2 marta ko'p cheklovlar",
    description:
      "Pinned chats 5 dan 10 ga, public link'lar 10 dan 20 ga, kanal va papkalar barcha cheklovlari ikki barobar ortadi.",
  },
  {
    title: 'Reklamalarsiz tajriba',
    description:
      "Katta umumiy kanallarda Telegram tarafidan ko'rsatiladigan sponsorlik postlari Premium foydalanuvchilarga ko'rinmaydi.",
  },
  {
    title: 'Premium emoji va stikerlar',
    description:
      "Yopiq emoji va stiker to'plamlaridan foydalanish — ular sizning chatlaringizda boshqalar uchun ham harakatda ko'rinadi.",
  },
  {
    title: 'Custom emoji yaratish',
    description: "O'zingizning suratlaringizdan custom emoji to'plamlari yaratish va chatlaringizda erkin ishlatish.",
  },
  {
    title: 'Ovozli xabar transkripsiyasi',
    description: "Ovozli va video xabarlarni avtomatik matnga aylantirish — vaqt tejaydi, ko'pchilik holatda foydali.",
  },
  {
    title: 'Profilda Premium belgisi',
    description: "Ism yonida maxsus yulduzcha belgisi — sizni Premium foydalanuvchi sifatida tanitadi.",
  },
  {
    title: 'Animatsion va katta avatar',
    description: "Statik rasmli profil o'rniga harakat qiluvchi animatsion video avatar qo'yish imkoniyati.",
  },
  {
    title: 'Tezroq fayl yuklash',
    description: "Yuklash tezligida cheklov yo'q — yuqori tezlikli internetdan maksimal foydalanasiz.",
  },
  {
    title: 'Custom app ikonkalar',
    description: "Telefonida Telegram ilovasi ikonkasini Premium uslublardan biriga almashtirish.",
  },
  {
    title: '60+ Premium reaksiyalar',
    description: "Faqat Premium foydalanuvchilarda mavjud bo'lgan maxsus reaksiyalar to'plami.",
  },
  {
    title: 'Avtomatik xabar tarjimasi',
    description: "Boshqa tildagi xabarlarni darhol o'z tilingizga tarjima qilish — to'liq chatlar uchun ham.",
  },
]

const PREMIUM_FEATURES_RU: FeatureItem[] = [
  {
    title: 'Загрузка файлов до 4 ГБ',
    description:
      'Один файл размером до 4 ГБ — документ, видео или аудио. В бесплатном Telegram лимит составляет 2 ГБ.',
  },
  {
    title: 'Удвоенные лимиты',
    description:
      'Закреплённых чатов с 5 до 10, публичных ссылок с 10 до 20, каналы и папки — все ограничения увеличены вдвое.',
  },
  {
    title: 'Без рекламы',
    description:
      'Спонсорские посты, которые Telegram показывает в крупных публичных каналах, не отображаются у Premium-пользователей.',
  },
  {
    title: 'Premium-эмодзи и стикеры',
    description:
      'Доступ к закрытым наборам эмодзи и стикеров — они анимированно отображаются в ваших чатах и для остальных собеседников.',
  },
  {
    title: 'Создание собственных эмодзи',
    description: 'Создавайте кастомные эмодзи-наборы из ваших изображений и используйте их в чатах.',
  },
  {
    title: 'Расшифровка голосовых',
    description:
      'Автоматическое преобразование голосовых и видеосообщений в текст — экономит время в ситуациях, когда нельзя слушать.',
  },
  {
    title: 'Premium-значок в профиле',
    description: 'Особая звёздочка рядом с именем — отмечает вас как Premium-пользователя.',
  },
  {
    title: 'Анимированный аватар',
    description: 'Возможность поставить анимированное видео-аватар вместо статичного фото.',
  },
  {
    title: 'Быстрая загрузка файлов',
    description: 'Скорость скачивания не ограничена — используйте быстрый интернет на полную.',
  },
  {
    title: 'Кастомные иконки приложения',
    description: 'Замените иконку Telegram на устройстве на одну из премиум-вариантов.',
  },
  {
    title: '60+ Premium-реакций',
    description: 'Эксклюзивный набор специальных реакций, доступных только Premium-пользователям.',
  },
  {
    title: 'Авто-перевод сообщений',
    description: 'Мгновенный перевод сообщений на ваш язык — работает и для целых чатов.',
  },
]

const STARS_USE_CASES_UZ: FeatureItem[] = [
  {
    title: 'Premium emoji va stikerlar',
    description: "Telegramda yopiq emoji to'plamlarini ochish va chatlaringizda erkin ishlatish.",
  },
  {
    title: 'Pullik reaksiyalar',
    description: "Yoqtirgan kanal mualliflariga maxsus pullik reaksiyalar yuborib, ularni qo'llab-quvvatlash.",
  },
  {
    title: "Sovg'a yuborish",
    description: "Yaqin do'stlaringizga, oila a'zolaringizga yulduzchalar sovg'a sifatida yuborish.",
  },
  {
    title: "Telegram Mini App to'lovlari",
    description:
      "Mini-ilovalardagi raqamli mahsulotlar, o'yinlar va premium funksiyalar uchun to'lov amalga oshirish.",
  },
  {
    title: 'Pullik kanal kontenti',
    description: "Yopiq kanallarga kirish, premium materiallarni ochish va content kreatorlarni qo'llab-quvvatlash.",
  },
  {
    title: 'Custom emoji yaratish',
    description: "Stars yordamida o'z chatlaringiz uchun maxsus emoji to'plamlari yasash.",
  },
]

const STARS_USE_CASES_RU: FeatureItem[] = [
  {
    title: 'Premium-эмодзи и стикеры',
    description: 'Открытие закрытых наборов эмодзи в Telegram и их свободное использование в чатах.',
  },
  {
    title: 'Платные реакции',
    description:
      'Отправляйте авторам любимых каналов специальные платные реакции — это способ их поддержать.',
  },
  {
    title: 'Подарки',
    description: 'Дарите звёзды близким друзьям и родным как символический подарок.',
  },
  {
    title: 'Оплата в Telegram Mini App',
    description:
      'Покупайте цифровые товары, услуги и премиум-функции в мини-приложениях Telegram.',
  },
  {
    title: 'Платный контент в каналах',
    description:
      'Доступ в закрытые каналы, разблокировка премиум-материалов и поддержка авторов контента.',
  },
  {
    title: 'Создание кастом-эмодзи',
    description: 'С помощью Stars создавайте уникальные наборы эмодзи для своих чатов.',
  },
]

const PAYMENT_METHODS_UZ: FeatureItem[] = [
  {
    title: 'UzCard / Humo karta',
    description:
      "Bot ko'rsatadigan karta raqamiga aynan belgilangan summani o'tkazasiz — UzCard yoki Humo karta orqali. To'lov tasdiqlangach, mahsulot avtomatik faollashadi.",
  },
  {
    title: 'Click',
    description:
      "Click ilovasi orqali to'g'ridan-to'g'ri to'lov — kartaga o'tkazish kerak emas. Tasdiqlash darhol Click ilovangiz orqali keladi.",
  },
  {
    title: 'Payme va boshqa banking ilovalar',
    description:
      "Payme, Apelsin yoki istalgan banking ilovasi orqali bot ko'rsatadigan kartaga belgilangan summani o'tkazasiz.",
  },
]

const PAYMENT_METHODS_RU: FeatureItem[] = [
  {
    title: 'Карта UzCard / Humo',
    description:
      'Перевод точной указанной суммы на карту, которую покажет бот — через UzCard или Humo. После подтверждения оплаты товар активируется автоматически.',
  },
  {
    title: 'Click',
    description:
      'Прямая оплата через приложение Click — перевод на карту не нужен. Подтверждение приходит сразу в ваше приложение Click.',
  },
  {
    title: 'Payme и другие банковские приложения',
    description:
      'Через Payme, Apelsin или любое банковское приложение переведите точную сумму на карту, которую покажет бот.',
  },
]

const PREMIUM_FEATURES_BY_LOCALE: Record<Locale, FeatureItem[]> = {
  uz: PREMIUM_FEATURES_UZ,
  ru: PREMIUM_FEATURES_RU,
}

const STARS_USE_CASES_BY_LOCALE: Record<Locale, FeatureItem[]> = {
  uz: STARS_USE_CASES_UZ,
  ru: STARS_USE_CASES_RU,
}

const PAYMENT_METHODS_BY_LOCALE: Record<Locale, FeatureItem[]> = {
  uz: PAYMENT_METHODS_UZ,
  ru: PAYMENT_METHODS_RU,
}

export function getPremiumFeatures(lang: Locale): FeatureItem[] {
  return PREMIUM_FEATURES_BY_LOCALE[lang]
}

export function getStarsUseCases(lang: Locale): FeatureItem[] {
  return STARS_USE_CASES_BY_LOCALE[lang]
}

export function getPaymentMethods(lang: Locale): FeatureItem[] {
  return PAYMENT_METHODS_BY_LOCALE[lang]
}

// Backwards-compat exports (Uzbek defaults) — to be removed when all callers migrate
export const PREMIUM_FEATURES = PREMIUM_FEATURES_UZ
export const STARS_USE_CASES = STARS_USE_CASES_UZ
export const PAYMENT_METHODS = PAYMENT_METHODS_UZ
