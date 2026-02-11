import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const trustPoints = [
  "Qualified practitioners",
  "In-house standards review every six months",
  "Consultation-led suitability screening",
  "Medical-safe communication and realistic planning",
];

export function TrustSection() {
  return (
    <section className="section-shell p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Trust and credibility</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Clinical standards built for confident decisions
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--text-muted)]">
            We start with suitability, then build a practical plan around your goals and schedule. You will always know what is realistic before you commit to treatment.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/about/" className="btn-secondary px-4 py-2 text-sm">
              About clinic standards
            </Link>
            <Link href="/medical-disclaimer/" className="btn-secondary px-4 py-2 text-sm">
              Medical disclaimer
            </Link>
          </div>
        </div>

        <div className="surface-soft p-5">
          <p className="text-sm font-semibold text-[var(--accent-navy)]">Clinic details</p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{siteConfig.address}</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Phone: {siteConfig.phone}</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Email: {siteConfig.enquiryEmail}</p>

          <ul className="mt-4 grid gap-2 text-sm text-[var(--text-muted)]">
            {trustPoints.map((point) => (
              <li key={point} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
