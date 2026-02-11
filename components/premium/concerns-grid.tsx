import Link from "next/link";
import type { ConcernPage } from "@/lib/content/concerns";

export function ConcernsGrid({ concerns }: { concerns: ConcernPage[] }) {
  return (
    <section className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Concerns</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Start with your concern, then move to consultation
          </h2>
        </div>
        <Link href="/concerns/" className="text-sm font-semibold text-[var(--accent-navy)] underline">
          Explore concerns hub
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {concerns.map((concern) => (
          <article
            key={concern.slug}
            className="rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-[var(--primary-soft)] p-5 transition hover:border-[var(--primary)] hover:shadow-md"
          >
            <h3 className="text-base font-semibold text-[var(--accent-navy)]">{concern.heroTitle}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{concern.heroIntro}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={concern.path} className="btn-secondary px-3 py-1.5 text-xs">
                Read concern guide
              </Link>
              <Link href="/fat-freezing-liverpool/" className="btn-secondary px-3 py-1.5 text-xs">
                Treatment overview
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
