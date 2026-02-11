import Link from "next/link";

const testimonials = [
  {
    quote:
      "The consultation felt structured and clear. I knew exactly what was realistic and when to review progress.",
    name: "Liverpool client",
  },
  {
    quote:
      "I liked how practical the team was. No exaggerated claims, just a clear plan and timeline.",
    name: "City centre client",
  },
  {
    quote:
      "The process was straightforward and easy to fit around work. Communication stayed strong throughout.",
    name: "Merseyside client",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Client feedback</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            What clients value most
          </h2>
        </div>
        <Link href="/book/" className="btn-secondary px-4 py-2 text-sm">
          Start your consultation
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.quote} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <p className="text-sm leading-7 text-[var(--text-muted)]">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
