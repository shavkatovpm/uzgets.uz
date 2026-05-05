import Link from 'next/link'
import { formatUzs } from '@/lib/format'

type Props = {
  title: string
  subtitle?: string
  priceUzs: number
  href: string
  badge?: string
  highlight?: boolean
  footerHint?: string
}

export function PriceCard({ title, subtitle, priceUzs, href, badge, highlight, footerHint }: Props) {
  return (
    <Link
      href={href}
      className={`uz-card ${
        highlight ? 'uz-card-accent border-[var(--primary)] bg-[var(--primary)]/5' : 'border-[var(--border)]'
      } group relative flex flex-col gap-3 rounded-2xl border p-6 transition-all`}
    >
      {badge && (
        <span className="absolute -top-2 left-6 rounded bg-[var(--primary)] px-2 py-0.5 text-xs font-semibold text-white">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-[var(--text-muted)]">{subtitle}</p>}
      <div className="mt-auto pt-2">
        <div className="text-2xl font-bold">{formatUzs(priceUzs)}</div>
        {footerHint && <div className="mt-1 text-xs text-[var(--text-muted)]">{footerHint}</div>}
        <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
          Sotib olish
          <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </div>
      </div>
    </Link>
  )
}
