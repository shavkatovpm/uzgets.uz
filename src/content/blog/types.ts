import type { ComponentType } from 'react'
import type { Locale } from '@/i18n/config'
import type { FAQItem } from '@/components/FAQ'

export type BlogType = 'cta' | 'info' | 'howto' | 'comparison' | 'problem' | 'trust'

export type BlogPostLocale = {
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  ogDescription?: string
  answerBoxTitle: string
  answerBoxBody: ComponentType
  Body: ComponentType
  faq: FAQItem[]
  finalCtaHeading: string
  finalCtaBody: string
}

export type BlogPost = {
  slug: string
  publishedAt: string
  updatedAt: string
  type: BlogType
  locales: Record<Locale, BlogPostLocale>
}

export const BLOG_TYPE_LABELS: Record<BlogType, Record<Locale, string>> = {
  cta: { uz: 'Sotib olish', ru: 'Покупка' },
  info: { uz: 'Tushuntirish', ru: 'Объяснение' },
  howto: { uz: "Qo'llanma", ru: 'Инструкция' },
  comparison: { uz: 'Taqqoslash', ru: 'Сравнение' },
  problem: { uz: 'Yechim', ru: 'Решение' },
  trust: { uz: 'Ishonch', ru: 'Доверие' },
}
