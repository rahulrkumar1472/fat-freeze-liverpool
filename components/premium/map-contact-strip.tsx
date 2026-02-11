import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function MapContactStrip() {
  return (
    <section className="section-shell p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">Clinic location</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Visit our Liverpool clinic
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--text-muted)]">{siteConfig.address}</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Phone: {siteConfig.phone}</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Email: {siteConfig.enquiryEmail}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn-secondary px-4 py-2.5 text-sm">
              Contact page
            </Link>
            <Link href="/book/" className="btn-primary px-4 py-2.5 text-sm">
              Book
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
          <Image
            src="/images/liverpool-map-placeholder.svg"
            alt="Map placeholder for Liverpool clinic location"
            width={800}
            height={520}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
