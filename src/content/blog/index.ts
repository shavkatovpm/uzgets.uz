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
