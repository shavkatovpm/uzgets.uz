import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { LanguageSwitcher } from './LanguageSwitcher'
import { PREMIUM_PERIODS, STARS_PACKS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

const FEATURED_STARS = [50, 100, 500]

type NavMenuProps = {
  label: string
  allLabel: string
  href: string
  items: { href: string; label: string; hint: string }[]
}

function NavMenu({ label, allLabel, href, items }: NavMenuProps) {
  return (
    <div className="uz-nav-group relative">
      <Link
        href={href}
        className="flex min-h-11 items-center gap-1 px-3 text-sm font-medium transition-colors hover:text-[var(--foreground)]"
      >
        {label}
        <svg
          className="uz-nav-chevron hidden transition-transform sm:inline-block"
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2 4 L6 8 L10 4 Z" />
        </svg>
      </Link>
      <div className="uz-nav-menu absolute left-0 top-full z-50 min-w-[240px] pt-2">
        <div
          className="rounded-xl bg-white p-2 text-[var(--foreground)]"
          style={{
            border: '2px solid var(--border)',
            boxShadow: '4px 4px 0 var(--pastel-shadow)',
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center justify-between gap-4 rounded-md px-3 hover:bg-[var(--muted)]"
            >
              <span className="font-semibold">{item.label}</span>
              <span className="text-xs text-[var(--text-muted)]">{item.hint}</span>
            </Link>
          ))}
          <div className="mt-1 border-t border-[var(--border)] pt-1">
            <Link
              href={href}
              className="flex min-h-11 items-center justify-between gap-4 rounded-md px-3 font-medium text-[var(--primary)] hover:bg-[var(--muted)]"
            >
              <span>{allLabel}</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const monthsLabel = dict.common.monthsShort
  const premiumNav = PREMIUM_PERIODS.map((p) => ({
    href: `/${lang}/premium/${p.slug}`,
    label: lang === 'uz' ? `${p.months} oylik` : `${p.months} ${monthsLabel}`,
    hint: formatUzs(p.priceUzs),
  }))

  const starsNav = FEATURED_STARS.map((amount) => {
    const pack = STARS_PACKS.find((s) => s.amount === amount)
    if (!pack) throw new Error(`Featured stars pack not found: ${amount}`)
    return {
      href: `/${lang}/stars/${pack.slug}`,
      label: `${pack.amount} ⭐`,
      hint: formatUzs(pack.priceUzs),
    }
  })

  return (
    <header className="uz-header sticky top-0 z-40 border-b border-[var(--border)]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href={`/${lang}`} aria-label={siteConfig.name}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 text-[var(--text-muted)] sm:flex">
          <NavMenu label={dict.nav.premium} allLabel={dict.common.all} href={`/${lang}/premium`} items={premiumNav} />
          <NavMenu label={dict.nav.stars} allLabel={dict.common.all} href={`/${lang}/stars`} items={starsNav} />
          <Link
            href={`/${lang}/haqimizda`}
            className="flex min-h-11 items-center px-3 text-sm font-medium transition-colors hover:text-[var(--foreground)]"
          >
            {dict.nav.about}
          </Link>
          <LanguageSwitcher current={lang} />
          <a
            href={siteConfig.botUrl}
            target="_blank"
            rel="noopener"
            className="ml-1 rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            {dict.common.botCta}
          </a>
        </nav>

        {/* Mobile nav */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={siteConfig.botUrl}
            target="_blank"
            rel="noopener"
            className="rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            {dict.common.botCtaShort}
          </a>
          <MobileMenu lang={lang} dict={dict} />
        </div>
      </div>
    </header>
  )
}
