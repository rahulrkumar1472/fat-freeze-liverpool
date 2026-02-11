export function ComparisonBlock() {
  return (
    <section className="section-shell p-6 sm:p-8">
      <p className="eyebrow">Comparison clarity</p>
      <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
        Fat freezing versus broad weight-loss goals
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-[var(--border)] bg-[#ecfff7] p-5">
          <h3 className="text-base font-semibold text-[#104133]">Fat freezing is for</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-7 text-[#145c47]">
            <li>Localized contour goals in specific body areas</li>
            <li>Consultation-led treatment sequencing</li>
            <li>Non-invasive planning with realistic timeline checkpoints</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-[#f5d39a] bg-[#fff4de] p-5">
          <h3 className="text-base font-semibold text-[#7b4f00]">Fat freezing is not for</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-7 text-[#7b4f00]">
            <li>Rapid whole-body weight reduction</li>
            <li>Guaranteed same-speed response for every person</li>
            <li>Skipping consultation and suitability checks</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
