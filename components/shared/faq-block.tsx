import type { FaqItem } from "@/lib/content/types";

export function FaqBlock({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="section-shell mt-14 p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Frequently asked questions
          </h2>
        </div>
        <p className="text-xs text-[var(--text-muted)]">Answers are informational and consultation-led.</p>
      </div>
      <div className="mt-6 grid gap-3">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 open:border-[var(--primary)] open:bg-[var(--primary-soft)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-[var(--text)]">
              <span>
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-navy)] text-xs font-semibold text-[var(--text-inverse)]">
                  {index + 1}
                </span>
                {faq.question}
              </span>
              <span className="text-[var(--text-muted)] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 border-t border-[var(--border)] pt-3 text-sm leading-7 text-[var(--text-muted)]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
