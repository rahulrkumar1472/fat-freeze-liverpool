import Image from "next/image";

const labels = [
  "Abdomen contour plan",
  "Flanks and waistline",
  "Upper arms and profile",
];

export function BeforeAfterGallery() {
  return (
    <section className="section-shell p-6 sm:p-8">
      <p className="eyebrow">Gallery</p>
      <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
        Before-and-after style visual planning
      </h2>
      <p className="mt-3 text-sm leading-8 text-[var(--text-muted)]">
        These visuals are placeholders to help explain area planning. They are not guarantees of outcome. Consultation is required and suitability is assessed individually.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {labels.map((label) => (
          <article key={label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-3">
            <Image
              src="/images/before-after-placeholder.svg"
              alt={`${label} placeholder before and after layout`}
              width={420}
              height={320}
              className="h-auto w-full rounded-xl object-cover"
              loading="lazy"
            />
            <p className="mt-3 text-sm font-semibold text-[var(--accent-navy)]">{label}</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">Illustrative placeholders for visual guidance only.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
