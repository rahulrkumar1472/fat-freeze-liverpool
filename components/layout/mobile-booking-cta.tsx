import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function MobileBookingCta() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 px-3 md:hidden">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-2 shadow-2xl backdrop-blur">
        <div className="grid grid-cols-[1fr_1fr] gap-2">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="rounded-xl border border-[var(--border)] px-3 py-3 text-center text-xs font-semibold text-[var(--accent-navy)]"
          >
            Call Clinic
          </a>
          <Link
            href="/book/"
            className="rounded-xl bg-[var(--primary)] px-3 py-3 text-center text-xs font-semibold text-[var(--text-inverse)] shadow-lg shadow-[rgba(14,116,144,0.22)] hover:bg-[var(--primary-hover)]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
