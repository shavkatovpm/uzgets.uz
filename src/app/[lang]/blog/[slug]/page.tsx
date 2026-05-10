import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/JsonLd'
import { AnswerBox } from '@/components/AnswerBox'
import { BotCTA } from '@/components/BotCTA'
import { FAQ } from '@/components/FAQ'
import { getDictionary } from '@/i18n/dictionaries'
import { type Locale, isLocale, LOCALES, localePath, localeUrl } from '@/i18n/config'
import { getPostBySlug, getPostsSorted, BLOG_POSTS } from '@/content/blog'
import { BLOG_TYPE_LABELS } from '@/content/blog/types'

type Params = { lang: string; slug: string }

export function generateStaticParams() {
  const out: { lang: string; slug: string }[] = []
  for (const lang of LOCALES) {
    for (const post of BLOG_POSTS) {
      out.push({ lang, slug: post.slug })
    }
  }
  return out
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang: langRaw, slug } = await params
  if (!isLocale(langRaw)) return {}
  const lang: Locale = langRaw
  const post = getPostBySlug(slug)
  if (!post) return {}
  const t = post.locales[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: localePath(lang, `/blog/${slug}`) },
    openGraph: {
      title: t.metaTitle,
      description: t.ogDescription ?? t.metaDescription,
      url: localeUrl(siteConfig.url, lang, `/blog/${slug}`),
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang: langRaw, slug } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const post = getPostBySlug(slug)
  if (!post) notFound()
  const t = post.locales[lang]
  const dict = getDictionary(lang)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.common.home, item: localeUrl(siteConfig.url, lang) },
      { '@type': 'ListItem', position: 2, name: dict.nav.blog, item: localeUrl(siteConfig.url, lang, '/blog') },
      { '@type': 'ListItem', position: 3, name: t.title, item: localeUrl(siteConfig.url, lang, `/blog/${slug}`) },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t.title,
    description: t.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': localeUrl(siteConfig.url, lang, `/blog/${slug}`) },
    inLanguage: lang === 'ru' ? 'ru-RU' : 'uz-UZ',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }

  const related = getPostsSorted()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  const Body = t.Body
  const AnswerBoxBody = t.answerBoxBody

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6 sm:pt-16">
        <nav aria-label={dict.common.breadcrumb} className="mb-4 text-sm text-[var(--text-muted)]">
          <Link href={localePath(lang)} className="hover:text-[var(--foreground)]">
            {dict.common.home}
          </Link>
          <span className="mx-2">/</span>
          <Link href={localePath(lang, '/blog')} className="hover:text-[var(--foreground)]">
            {dict.nav.blog}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{t.title}</span>
        </nav>

        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-[var(--primary)]/10 px-2.5 py-0.5 font-medium text-[var(--primary)]">
            {BLOG_TYPE_LABELS[post.type][lang]}
          </span>
          <span className="text-[var(--text-muted)]">
            {dict.blog.publishedOn}: {post.publishedAt}
          </span>
          {post.updatedAt !== post.publishedAt && (
            <span className="text-[var(--text-muted)]">
              · {dict.blog.updatedOn}: {post.updatedAt}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {t.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[var(--text-muted)]">{t.description}</p>
      </section>

      <AnswerBox title={t.answerBoxTitle}>
        <AnswerBoxBody />
      </AnswerBox>

      <article className="uz-prose mx-auto max-w-3xl px-4 pb-8">
        <Body />
      </article>

      <FAQ items={t.faq} title={dict.common.faqTitle} />

      <section className="mx-auto my-10 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.finalCtaHeading}</h2>
        <p className="mt-3 text-[var(--text-muted)]">{t.finalCtaBody}</p>
        <div className="mt-6 flex justify-center">
          <BotCTA size="lg" />
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="mb-4 text-xl font-bold sm:text-2xl">
            {dict.blog.relatedHeading}
          </h2>
          <ul className="space-y-3">
            {related.map((p) => {
              const rt = p.locales[lang]
              return (
                <li key={p.slug}>
                  <Link
                    href={localePath(lang, `/blog/${p.slug}`)}
                    className="uz-card block rounded-xl border border-[var(--border)] p-4 transition-colors hover:border-[var(--primary)]/50"
                  >
                    <div className="font-semibold">{rt.title}</div>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{rt.description}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <Link href={localePath(lang, '/blog')} className="text-sm font-medium text-[var(--primary)] hover:underline">
          ← {dict.blog.backToBlog}
        </Link>
      </section>
    </>
  )
}
