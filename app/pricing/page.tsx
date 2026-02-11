import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getCorePage } from "@/lib/content/core-pages";
import { buildMetadata } from "@/lib/seo";

const page = getCorePage("/pricing/");

if (!page) {
  throw new Error("Pricing page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: "Fat Freezing Prices Liverpool | Fat Freeze",
  description: page.metaDescription,
  keywords: ["fat freezing cost Liverpool", "fat freezing pricing Liverpool", "cryolipolysis consultation price"],
});

const packages = [
  {
    line: "1 applicator: £49",
    includes: [],
  },
  {
    line: "2 applicators: £99",
    includes: ["Complimentary RF eye lift", "Complimentary supersonic chin reduction"],
  },
  {
    line: "4 applicators: £149",
    includes: ["Complimentary RF eye lift", "Complimentary supersonic chin reduction"],
  },
  {
    line: "6 applicators: £198",
    includes: [
      "Complimentary RF eye lift",
      "Complimentary supersonic chin reduction",
      "Complimentary supersonic body fat melting",
    ],
  },
  {
    line: "8 applicators: £249",
    includes: [
      "Complimentary RF eye lift",
      "Complimentary supersonic chin reduction",
      "Complimentary supersonic body fat melting",
    ],
  },
];

export default function PricingPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={page.faqs}
        webPage={{
          path: "/pricing/",
          name: "Fat Freezing Pricing Liverpool",
          type: "MedicalWebPage",
          description: page.metaDescription,
        }}
      />
      <ContentPage
        crumbs={crumbs}
        heroTitle={page.heroTitle}
        heroIntro={page.heroIntro}
        sections={page.sections}
        faqs={page.faqs}
        supportLink="/fat-freezing-liverpool/"
        supportLabel="fat freezing service page"
        moneyAnchor="cryolipolysis liverpool"
        eyebrow="Transparent Pricing"
        withInlineCtas
        beforeSections={
          <section className="section-shell p-6 sm:p-8">
            <p className="eyebrow">Packages</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
              Fat freezing package prices
            </h2>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {packages.map((pkg) => (
                <article key={pkg.line} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5">
                  <h3 className="font-display text-xl font-semibold text-[var(--accent-navy)]">{pkg.line}</h3>
                  {pkg.includes.length ? (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Includes:</p>
                      <ul className="mt-2 grid gap-1 text-sm text-[var(--text-muted)]">
                        {pkg.includes.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-[var(--text-muted)]">Single applicator option with direct booking.</p>
                  )}

                  <Link href="/book/" className="btn-primary mt-5 inline-flex px-5 py-2.5 text-sm">
                    Book Now
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--primary-soft)] p-4">
              <p className="text-sm font-semibold text-[var(--accent-navy)]">Pricing explainer</p>
              <ul className="mt-2 grid gap-1 text-sm leading-7 text-[var(--text-muted)]">
                <li>• We charge per applicator.</li>
                <li>• One applicator covers roughly a 20cm treatment zone.</li>
                <li>• You can use the palm-of-hand method to estimate concern areas before consultation.</li>
                <li>• Final applicator count is confirmed during consultation.</li>
              </ul>
            </div>
          </section>
        }
      />
    </>
  );
}
