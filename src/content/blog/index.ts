import { post as starsOzbekistondanSotibOlish } from './posts/01-telegram-stars-ozbekistondan-sotib-olish'
import { post as telegramStarsNima } from './posts/02-telegram-stars-nima'
import { post as premiumQandayFaollashtiriladi } from './posts/03-telegram-premium-qanday-faollashtiriladi'
import { post as engArzonStars } from './posts/04-eng-arzon-telegram-stars-ozbekistonda'
import { post as engArzonPremium } from './posts/05-eng-arzon-telegram-premium-ozbekistonda'
import { post as premiumOzbekistondanSotibOlish } from './posts/06-telegram-premium-ozbekistondan-sotib-olish'
import { post as arzonStars3Belgi } from './posts/07-arzon-stars-qayerdan-olinadi-3-belgi'
import { post as akkauntdaPremiumKorinmayapti } from './posts/08-akkauntda-premium-korinmayapti'
import { post as premiumUzcardHumo } from './posts/09-telegram-premium-uzcard-humo-bilan-sotib-olish'
import { post as uzgetsIshonchliMi } from './posts/10-uzgets-ishonchli-mi-tekshirish-belgilari'
import { post as starsClick } from './posts/11-telegram-stars-click-orqali-sotib-olish'
import { post as starsNarxlariJadval } from './posts/12-telegram-stars-narxlari-jadval'
import { post as premiumToliqQollanma } from './posts/13-telegram-premium-toliq-qollanma-barcha-usullar'
import { post as ishonchliOsonPremium } from './posts/14-ishonchli-oson-premium-sotib-olish-uzgets'
import { post as premiumNimaToliqQollanma } from './posts/15-telegram-premium-nima-toliq-qollanma'
import { post as premiumTolayOlmayapman } from './posts/16-telegram-premium-tolay-olmayapman-yechim'
import { post as premiumHadyaQandaySovgaQilinadi } from './posts/17-telegram-premium-hadya-qanday-sovga-qilinadi'
import { post as premiumImkoniyatlari12Farq } from './posts/18-telegram-premium-imkoniyatlari-12-farq'
import { post as premiumNarxlariPaketlar } from './posts/19-telegram-premium-narxlari-paketlar'
import { post as botOrqaliTolashXavfsizmi } from './posts/20-telegram-bot-orqali-tolash-xavfsizmi'
import { post as premiumVaStarsFarqi } from './posts/21-telegram-premium-va-stars-farqi'
import { post as starsBilanNimaQilishMumkin } from './posts/22-telegram-stars-bilan-nima-qilish-mumkin'
import { post as starsBilanSovgaYuborish } from './posts/23-telegram-stars-bilan-sovga-yuborish'
import { post as premium3Oylik } from './posts/24-telegram-premium-3-oylik-ozbekistonda'
import { post as starsKartagaChiqarish } from './posts/25-telegram-stars-kartaga-chiqarish-pulga-aylantirish'
import { post as businessFunksiyalari } from './posts/26-telegram-business-funksiyalari-toliq-qollanma'
import { post as starsKelmadi } from './posts/27-telegram-stars-kelmadi-sabablar-yechim'
import { post as starsPayme } from './posts/28-telegram-stars-payme-orqali-sotib-olish'
import { post as starsUzcardHumo } from './posts/29-telegram-stars-uzcard-humo-bilan-sotib-olish'
import { post as premiumPayme } from './posts/30-telegram-premium-payme-orqali-sotib-olish'
import { post as starsVaTonFarqi } from './posts/31-telegram-stars-va-ton-farqi'
import { post as premiumClick } from './posts/32-telegram-premium-click-orqali-sotib-olish'
import { post as premiumOneMonth } from './posts/33-telegram-premium-1-oylik-narxi'
import { post as premiumSixMonths } from './posts/34-telegram-premium-6-oylik-narxi'
import { post as premiumTwelveMonths } from './posts/35-telegram-premium-12-oylik-narxi'
import { post as premiumBekorQilish } from './posts/36-telegram-premium-obunasini-bekor-qilish'
import { post as starsTolovOtmadi } from './posts/37-telegram-stars-tolov-otmadi-yechim'
import { post as premiumPulYechildiLekinKelmadi } from './posts/38-telegram-premium-pul-yechildi-lekin-kelmadi'
import { post as premiumMuddatiTugadiYangilash } from './posts/39-telegram-premium-muddati-tugadi-yangilash'
import { post as starsRefundQaytarish } from './posts/40-telegram-stars-refund-qaytarish'
import { post as starsEngKichikEngKattaPaket } from './posts/41-telegram-stars-eng-kichik-eng-katta-paket'
import type { BlogPost } from './types'

export const BLOG_POSTS: BlogPost[] = [
  starsOzbekistondanSotibOlish,
  telegramStarsNima,
  premiumQandayFaollashtiriladi,
  engArzonStars,
  engArzonPremium,
  premiumOzbekistondanSotibOlish,
  arzonStars3Belgi,
  akkauntdaPremiumKorinmayapti,
  premiumUzcardHumo,
  uzgetsIshonchliMi,
  starsClick,
  starsNarxlariJadval,
  premiumToliqQollanma,
  ishonchliOsonPremium,
  premiumNimaToliqQollanma,
  premiumTolayOlmayapman,
  premiumHadyaQandaySovgaQilinadi,
  premiumImkoniyatlari12Farq,
  premiumNarxlariPaketlar,
  botOrqaliTolashXavfsizmi,
  premiumVaStarsFarqi,
  starsBilanNimaQilishMumkin,
  starsBilanSovgaYuborish,
  premium3Oylik,
  starsKartagaChiqarish,
  businessFunksiyalari,
  starsKelmadi,
  starsPayme,
  starsUzcardHumo,
  premiumPayme,
  starsVaTonFarqi,
  premiumClick,
  premiumOneMonth,
  premiumSixMonths,
  premiumTwelveMonths,
  premiumBekorQilish,
  starsTolovOtmadi,
  premiumPulYechildiLekinKelmadi,
  premiumMuddatiTugadiYangilash,
  starsRefundQaytarish,
  starsEngKichikEngKattaPaket,
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getPostsSorted(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug)
}
