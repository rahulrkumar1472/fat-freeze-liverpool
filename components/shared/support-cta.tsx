import Link from "next/link";

export function SupportCta({
  heading = "Plan your next step",
  supportLink,
  supportLabel,
  moneyAnchor = "Treatment overview",
}: {
  heading?: string;
  supportLink: string;
  supportLabel: string;
  moneyAnchor?: string;
}) {
  return (
    <section className="mt-14 rounded-[2rem] border border-[var(--border)] bg-gradient-to-r from-[var(--primary-soft)] via-[var(--surface)] to-[#dff6ee] p-7 shadow-sm sm:p-9">
      <p className="eyebrow">Consultation CTA</p>
      <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">{heading}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-8 text-[var(--text-muted)]">
        If you are deciding between options, start with the treatment overview, review pricing, then book a consultation so we can confirm suitability.
      </p>
      <div className="mt-6 flex flex-wrap gap-2.5">
        <Link href="/fat-freezing-liverpool/" className="btn-secondary px-4 py-2.5 text-sm">
          {moneyAnchor}
        </Link>
        <Link href="/book/" className="btn-primary px-4 py-2.5 text-sm">
          Book consultation
        </Link>
        <Link href={supportLink} className="btn-secondary px-4 py-2.5 text-sm">
          {supportLabel}
        </Link>
      </div>
      <p className="mt-4 text-xs text-[var(--text-muted)]">This is not a weight-loss treatment. Results vary by individual.</p>
    </section>
  );
}
