'use client'

import { useRouter, usePathname } from 'next/navigation'
import { LOCALES, type Locale, isLocale } from '@/i18n/config'

const LABEL: Record<Locale, string> = {
  uz: 'UZ',
  ru: 'RU',
}

export function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchTo = (target: Locale) => {
    if (target === current) return
    const segments = (pathname ?? `/${current}`).split('/').filter(Boolean)
    if (segments.length > 0 && isLocale(segments[0])) {
      segments[0] = target
    } else {
      segments.unshift(target)
    }
    const newPath = '/' + segments.join('/')
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-[var(--border)] bg-white p-0.5">
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          aria-label={`Switch language to ${l}`}
          aria-pressed={l === current}
          onClick={() => switchTo(l)}
          className={`rounded px-2 py-1 text-xs font-bold transition-colors ${
            l === current
              ? 'bg-[var(--primary)] text-white'
              : 'text-[var(--text-muted)] hover:text-[var(--foreground)]'
          }`}
        >
          {LABEL[l]}
        </button>
      ))}
    </div>
  )
}
