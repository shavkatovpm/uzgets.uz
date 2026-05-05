import { siteConfig } from '@/config/site'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  variant?: 'primary' | 'outline'
  prefill?: string
}

export function BotCTA({ size = 'md', label, variant = 'primary', prefill }: Props) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  }[size]

  const variantClasses =
    variant === 'primary'
      ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-lg shadow-[var(--primary)]/20'
      : 'border border-[var(--border)] hover:border-[var(--text-muted)]'

  const href = prefill ? `${siteConfig.botUrl}?start=${encodeURIComponent(prefill)}` : siteConfig.botUrl

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-2 rounded-lg font-semibold transition-colors ${sizeClasses} ${variantClasses}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.6 4.3 18.4 19.6c-.2 1.1-.9 1.3-1.8.8L11.7 17l-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.2-8.3c.4-.4-.1-.6-.6-.2L6 13.5 1.4 12c-1-.3-1-1 .2-1.5l18.5-7c.8-.3 1.5.2 1.5 1.4Z" />
      </svg>
      {label ?? `${siteConfig.bot} orqali sotib olish`}
    </a>
  )
}
