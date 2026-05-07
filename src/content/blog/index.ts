import { post as starsOzbekistondanSotibOlish } from './posts/01-telegram-stars-ozbekistondan-sotib-olish'
import { post as telegramStarsNima } from './posts/02-telegram-stars-nima'
import { post as premiumQandayFaollashtiriladi } from './posts/03-telegram-premium-qanday-faollashtiriladi'
import { post as engArzonStars } from './posts/04-eng-arzon-telegram-stars-ozbekistonda'
import { post as engArzonPremium } from './posts/05-eng-arzon-telegram-premium-ozbekistonda'
import type { BlogPost } from './types'

export const BLOG_POSTS: BlogPost[] = [
  starsOzbekistondanSotibOlish,
  telegramStarsNima,
  premiumQandayFaollashtiriladi,
  engArzonStars,
  engArzonPremium,
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
