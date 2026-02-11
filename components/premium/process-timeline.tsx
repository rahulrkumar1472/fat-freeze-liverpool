import Link from "next/link";

type Step = {
  title: string;
  detail: string;
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <section className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Consultation to results in clear stages
          </h2>
        </div>
        <Link href="/fat-freezing/how-it-works/" className="btn-secondary px-4 py-2 text-sm">
          View full process
        </Link>
      </div>

      <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-navy)] text-sm font-semibold text-[var(--text-inverse)]">
              {index + 1}
            </p>
            <h3 className="mt-3 text-base font-semibold text-[var(--accent-navy)]">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{step.detail}</p>
          </li>
        ))}
      </ol>

      <p className="mt-6 rounded-2xl border border-[#f5d39a] bg-[#fff4de] px-4 py-3 text-sm text-[#7b4f00]">
        This is not a weight-loss treatment. Results vary by individual.
      </p>
    </section>
  );
}
