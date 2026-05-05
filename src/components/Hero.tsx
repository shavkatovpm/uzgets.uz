import { BotCTA } from './BotCTA'

type Props = {
  eyebrow?: string
  title: React.ReactNode
  subtitle: string
  bullets?: string[]
  ctaLabel?: string
}

export function Hero({ eyebrow, title, subtitle, bullets, ctaLabel }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:pt-20 sm:pb-16">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)] sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" /> {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">{subtitle}</p>
        {bullets && (
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg
                  className="mt-1 shrink-0 text-[var(--primary)]"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <BotCTA size="lg" label={ctaLabel} />
        </div>
      </div>
    </section>
  )
}
