import Link from "next/link";

export function ConsultationBanner({
  title = "Ready for a tailored fat freezing plan?",
  description = "Book your consultation to confirm suitability, map timeline expectations, and receive a clear staged plan.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-gradient-to-r from-[var(--primary-soft)] via-[var(--surface)] to-[#dff6ee] p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-[var(--accent-navy)]">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/book/" className="btn-primary px-5 py-2.5 text-sm">
            Book Consultation
          </Link>
          <Link href="/fat-freezing-liverpool/" className="btn-secondary px-5 py-2.5 text-sm">
            Learn about treatment
          </Link>
        </div>
      </div>
    </section>
  );
}
