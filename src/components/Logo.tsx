import { siteConfig } from '@/config/site'

const STAR_PATH =
  'M14 2 L16.94 9.95 L25.41 10.29 L18.76 15.55 L21.05 23.71 L14 19 L6.95 23.71 L9.24 15.55 L2.59 10.29 L11.06 9.95 Z'

export function Logo({ size = 28 }: { size?: number } = {}) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
        <path
          d={STAR_PATH}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-base font-extrabold tracking-tight text-[var(--foreground)]">
        {siteConfig.name.toLowerCase()}
      </span>
    </span>
  )
}
