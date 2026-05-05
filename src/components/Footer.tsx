import Link from 'next/link'
import { siteConfig } from '@/config/site'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const monthLabel = dict.common.monthsShort
  return (
    <footer className="mt-20 border-t border-[var(--border)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-4">
        <div>
          <div className="mb-2 font-semibold">{siteConfig.name}</div>
          <p className="leading-relaxed text-[var(--text-muted)]">
            {lang === 'uz'
              ? "O'zbekistonda Telegram Premium va Stars sotib olish."
              : 'Покупка Telegram Premium и Stars в Узбекистане.'}
          </p>
        </div>
        <div>
          <div className="mb-2 font-semibold">{dict.footer.products}</div>
          <ul className="space-y-1.5 text-[var(--text-muted)]">
            <li>
              <Link href={`/${lang}/premium`} className="hover:text-[var(--foreground)]">
                {dict.footer.premiumLabel}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/premium/3-oylik`} className="hover:text-[var(--foreground)]">
                Premium 3 {monthLabel}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/premium/6-oylik`} className="hover:text-[var(--foreground)]">
                Premium 6 {monthLabel}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/premium/12-oylik`} className="hover:text-[var(--foreground)]">
                Premium 12 {monthLabel}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/stars`} className="hover:text-[var(--foreground)]">
                {dict.footer.starsLabel}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold">{dict.footer.contact}</div>
          <ul className="space-y-1.5 text-[var(--text-muted)]">
            <li>
              <a href={siteConfig.botUrl} target="_blank" rel="noopener" className="hover:text-[var(--foreground)]">
                {siteConfig.bot}
              </a>
            </li>
            <li>
              <Link href={`/${lang}/aloqa`} className="hover:text-[var(--foreground)]">
                {dict.footer.contactLink}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/haqimizda`} className="hover:text-[var(--foreground)]">
                {lang === 'ru' ? 'О Uzgets' : 'Uzgets haqida'}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold">{dict.footer.legal}</div>
          <ul className="space-y-1.5 text-[var(--text-muted)]">
            <li>
              <Link href={`/${lang}/privacy`} className="hover:text-[var(--foreground)]">
                {dict.nav.privacy}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/terms`} className="hover:text-[var(--foreground)]">
                {dict.nav.terms}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--text-muted)]">
        &copy; {new Date().getFullYear()} {siteConfig.name}. {dict.footer.trademarkNotice}
      </div>
    </footer>
  )
}
