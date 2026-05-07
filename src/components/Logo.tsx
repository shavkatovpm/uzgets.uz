import { siteConfig } from '@/config/site'

// Same path as src/app/icon.svg + apple-icon.tsx — single source of truth for the mark.
const STAR_PATH =
  'M48 14 L56.2 36.7 L80.3 37.5 L61.3 52.3 L68 75.5 L48 62 L28 75.5 L34.7 52.3 L15.7 37.5 L39.8 36.7 Z'

export function Logo({ size = 28 }: { size?: number } = {}) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden="true">
        <rect width="96" height="96" rx="20" fill="#0a6d65" />
        <path d={STAR_PATH} fill="#ecf6f3" />
      </svg>
      <span className="text-base font-extrabold tracking-tight text-[var(--foreground)]">
        {siteConfig.name.toLowerCase()}
      </span>
    </span>
  )
}
