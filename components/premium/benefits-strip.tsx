import Link from "next/link";

type BenefitItem = {
  title: string;
  detail: string;
};

export function BenefitsStrip({ items }: { items: BenefitItem[] }) {
  return (
    <section className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Benefits</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Why Liverpool clients choose consultation-led fat freezing
          </h2>
        </div>
        <Link href="/book/" className="btn-primary px-5 py-2.5 text-sm">
          Book Consultation
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <h3 className="text-base font-semibold text-[var(--accent-navy)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
