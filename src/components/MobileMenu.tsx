'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS, STARS_PACKS } from '@/config/products'
import { formatUzs } from '@/lib/format'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

const FEATURED_STARS = [50, 100, 500]
const ANIM_MS = 280

export function MobileMenu({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const orig = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.setTimeout(() => {
        document.body.style.overflow = orig
      }, ANIM_MS)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  const monthLabel = dict.common.monthsShort

  const otherLang: Locale = lang === 'uz' ? 'ru' : 'uz'
  const otherLangLabel = lang === 'uz' ? 'Русский' : "O'zbekcha"

  return (
    <>
      <button
        type="button"
        aria-label={dict.common.menu}
        aria-expanded={open}
        aria-controls="uz-mobile-drawer"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-[var(--muted)] active:bg-[var(--muted)]"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      <div
        id="uz-mobile-drawer"
        className={`fixed inset-0 z-50 transition-opacity ease-out sm:hidden ${
          open ? 'pointer-events-auto opacity-100 duration-200' : 'pointer-events-none opacity-0 duration-150'
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          className="absolute inset-0 bg-black/35 backdrop-blur-sm"
          onClick={close}
          aria-label={dict.common.close}
        />

        <div
          role="dialog"
          aria-modal={open}
          aria-label={dict.common.menu}
          className={`absolute inset-y-0 right-0 flex w-80 max-w-[88vw] flex-col bg-[var(--background)] transition-transform ease-out will-change-transform ${
            open ? 'translate-x-0 duration-300' : 'translate-x-full duration-200'
          }`}
          style={{
            borderLeft: '2px solid var(--border)',
            boxShadow: '-6px 0 0 var(--pastel-shadow)',
          }}
        >
          <div className="flex shrink-0 items-center justify-between border-b-2 border-[var(--border)] px-4 py-3">
            <span className="font-bold tracking-tight">{dict.common.menu}</span>
            <button
              type="button"
              aria-label={dict.common.close}
              onClick={close}
              className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-[var(--muted)]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 text-sm">
            <Link
              href={`/${lang}`}
              onClick={close}
              className="block rounded-lg px-3 py-2.5 font-semibold transition-colors hover:bg-[var(--muted)] active:bg-[var(--muted)]"
            >
              {dict.common.home}
            </Link>

            <div className="mt-3">
              <Link
                href={`/${lang}/premium`}
                onClick={close}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 font-semibold transition-colors hover:bg-[var(--muted)]"
              >
                <span>{dict.footer.premiumLabel}</span>
                <span className="text-xs text-[var(--text-muted)]">
                  {dict.common.all} &rarr;
                </span>
              </Link>
              <ul className="mt-1 space-y-0.5">
                {PREMIUM_PERIODS.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${lang}/premium/${p.slug}`}
                      onClick={close}
                      className="flex items-center justify-between rounded-lg px-6 py-2 text-[var(--text-muted)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                    >
                      <span>
                        {p.months} {lang === 'uz' ? 'oylik' : monthLabel}
                      </span>
                      <span className="text-xs">{formatUzs(p.priceUzs)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-3">
              <Link
                href={`/${lang}/stars`}
                onClick={close}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 font-semibold transition-colors hover:bg-[var(--muted)]"
              >
                <span>{dict.footer.starsLabel}</span>
                <span className="text-xs text-[var(--text-muted)]">
                  {dict.common.all} &rarr;
                </span>
              </Link>
              <ul className="mt-1 space-y-0.5">
                {FEATURED_STARS.map((amount) => {
                  const pack = STARS_PACKS.find((s) => s.amount === amount)
                  if (!pack) return null
                  return (
                    <li key={pack.slug}>
                      <Link
                        href={`/${lang}/stars/${pack.slug}`}
                        onClick={close}
                        className="flex items-center justify-between rounded-lg px-6 py-2 text-[var(--text-muted)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                      >
                        <span>{pack.amount} ⭐</span>
                        <span className="text-xs">{formatUzs(pack.priceUzs)}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="mt-3 border-t border-[var(--border)] pt-3">
              <Link
                href={`/${lang}/blog`}
                onClick={close}
                className="block rounded-lg px-3 py-2.5 font-semibold transition-colors hover:bg-[var(--muted)]"
              >
                {dict.nav.blog}
              </Link>
              <Link
                href={`/${lang}/aloqa`}
                onClick={close}
                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--muted)]"
              >
                {dict.footer.contactLink}
              </Link>
              <Link
                href={`/${lang}/haqimizda`}
                onClick={close}
                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--muted)]"
              >
                {dict.nav.about}
              </Link>
              <Link
                href={`/${lang}/privacy`}
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-[var(--text-muted)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
              >
                {dict.nav.privacy}
              </Link>
              <Link
                href={`/${lang}/terms`}
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-[var(--text-muted)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
              >
                {dict.nav.terms}
              </Link>
            </div>

            <div className="mt-3 border-t border-[var(--border)] pt-3">
              <Link
                href={`/${otherLang}`}
                onClick={close}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 font-semibold text-[var(--primary)] transition-colors hover:bg-[var(--muted)]"
              >
                <span>{otherLangLabel}</span>
                <span className="text-xs">&rarr;</span>
              </Link>
            </div>
          </nav>

          <div
            className="shrink-0 border-t-2 border-[var(--border)] p-3"
            style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
          >
            <a
              href={siteConfig.botUrl}
              target="_blank"
              rel="noopener"
              onClick={close}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-3 font-semibold text-white shadow-lg shadow-[var(--primary)]/20 transition-all hover:bg-[var(--primary-hover)] active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.6 4.3 18.4 19.6c-.2 1.1-.9 1.3-1.8.8L11.7 17l-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.2-8.3c.4-.4-.1-.6-.6-.2L6 13.5 1.4 12c-1-.3-1-1 .2-1.5l18.5-7c.8-.3 1.5.2 1.5 1.4Z" />
              </svg>
              {dict.common.botCta}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
