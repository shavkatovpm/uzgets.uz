import { siteConfig } from '@/config/site'
import type { Locale } from '@/i18n/config'

type Props = {
  lang: Locale
  text?: string
  prefill?: string
}

const DEFAULTS: Record<Locale, string> = {
  uz: "Sotib olishga tayyormisiz?",
  ru: 'Готовы купить?',
}

const ACTION: Record<Locale, string> = {
  uz: 'Sotib olish',
  ru: 'Купить',
}

export function InlineBotCTA({ lang, text, prefill }: Props) {
  const message = text ?? DEFAULTS[lang]
  const action = ACTION[lang]
  const href = prefill ? `${siteConfig.botUrl}?start=${encodeURIComponent(prefill)}` : siteConfig.botUrl
  return (
    <div className="not-prose my-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 px-4 py-3">
      <span className="text-sm font-medium leading-tight">{message}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1 rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--primary-hover)]"
      >
        {action} <span aria-hidden>→</span>
      </a>
    </div>
  )
}
