import Link from "next/link";

export function FinalConversionBlock() {
  return (
    <section className="mt-14 rounded-[2rem] border border-[var(--border)] bg-[var(--accent-navy)] p-8 text-[var(--text-inverse)] shadow-xl sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d7eef4]">Next step</p>
      <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
        Book your consultation with our Liverpool clinic
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-[#e8f1f5]">
        A focused consultation can save weeks of uncertainty. We confirm suitability, explain realistic milestones, and map your plan in clear steps.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/book/" className="btn-book px-6 py-3 text-sm">
          Book Consultation
        </Link>
        <Link href="/contact/" className="btn-secondary border-white/30 bg-white/95 px-6 py-3 text-sm">
          Contact Clinic
        </Link>
      </div>
      <p className="mt-5 text-xs text-[#d7eef4]">This is not a weight-loss treatment. Results vary by individual.</p>
    </section>
  );
}
