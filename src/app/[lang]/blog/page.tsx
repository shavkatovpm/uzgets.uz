import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/JsonLd'
import { getDictionary } from '@/i18n/dictionaries'
import { type Locale, isLocale } from '@/i18n/config'
import { getPostsSorted } from '@/content/blog'
import { BLOG_TYPE_LABELS } from '@/content/blog/types'

type Params = { lang: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) return {}
  const lang: Locale = langRaw
  const dict = getDictionary(lang)
  return {
    title: dict.blog.indexMetaTitle,
    description: dict.blog.indexMetaDescription,
    alternates: { canonical: `/${lang}/blog` },
    openGraph: {
      title: dict.blog.indexMetaTitle,
      description: dict.blog.indexMetaDescription,
      url: `${siteConfig.url}/${lang}/blog`,
    },
  }
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang: langRaw } = await params
  if (!isLocale(langRaw)) notFound()
  const lang: Locale = langRaw
  const dict = getDictionary(lang)
  const posts = getPostsSorted()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.common.home, item: `${siteConfig.url}/${lang}` },
      { '@type': 'ListItem', position: 2, name: dict.nav.blog, item: `${siteConfig.url}/${lang}/blog` },
    ],
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: dict.blog.indexMetaTitle,
    url: `${siteConfig.url}/${lang}/blog`,
    description: dict.blog.indexMetaDescription,
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.locales[lang].title,
      description: p.locales[lang].description,
      url: `${siteConfig.url}/${lang}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt,
      author: { '@type': 'Organization', name: siteConfig.name },
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogSchema} />

      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6 sm:pt-16">
        <nav aria-label={dict.common.breadcrumb} className="mb-4 text-sm text-[var(--text-muted)]">
          <Link href={`/${lang}`} className="hover:text-[var(--foreground)]">
            {dict.common.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{dict.nav.blog}</span>
        </nav>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {dict.blog.indexTitle}
        </h1>
        <p className="mt-3 text-lg text-[var(--text-muted)]">{dict.blog.indexSubtitle}</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8" aria-label={dict.nav.blog}>
        {posts.length === 0 ? (
          <p className="text-[var(--text-muted)]">{dict.blog.empty}</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => {
              const t = post.locales[lang]
              return (
                <li key={post.slug}>
                  <Link
                    href={`/${lang}/blog/${post.slug}`}
                    className="uz-card block rounded-2xl border border-[var(--border)] p-5 transition-colors hover:border-[var(--primary)]/50"
                  >
                    <div className="mb-2 flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-[var(--primary)]/10 px-2 py-0.5 font-medium text-[var(--primary)]">
                        {BLOG_TYPE_LABELS[post.type][lang]}
                      </span>
                      <span className="text-[var(--text-muted)]">
                        {dict.blog.publishedOn}: {post.publishedAt}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold leading-tight sm:text-2xl">{t.title}</h2>
                    <p className="mt-2 leading-relaxed text-[var(--text-muted)]">{t.description}</p>
                    <div className="mt-3 font-medium text-[var(--primary)]">{dict.blog.readMore} →</div>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </>
  )
}
