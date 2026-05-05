import { JsonLd } from './JsonLd'

export type FAQItem = { question: string; answer: string }

export function FAQ({
  items,
  title = 'Tez-tez beriladigan savollar',
}: {
  items: FAQItem[]
  title?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  return (
    <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="faq-heading">
      <JsonLd data={schema} />
      <h2 id="faq-heading" className="mb-6 text-2xl font-bold sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <details
            key={i}
            className="uz-card group rounded-lg border border-[var(--border)] p-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between font-medium">
              <span>{item.question}</span>
              <span className="ml-4 text-[var(--text-muted)] transition-transform group-open:rotate-180">
                &#9662;
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-[var(--text-muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
