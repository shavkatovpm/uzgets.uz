type Props = {
  title?: string
  children: React.ReactNode
}

export function AnswerBox({ title = 'Qisqa javob', children }: Props) {
  return (
    <aside
      role="note"
      aria-label={title}
      className="uz-card uz-card-accent mx-auto my-8 max-w-3xl rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 px-5 py-4"
    >
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">{title}</div>
      <div className="leading-relaxed">{children}</div>
    </aside>
  )
}
