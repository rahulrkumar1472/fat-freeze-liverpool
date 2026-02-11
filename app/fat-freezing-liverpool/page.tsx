import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/seo/page-schema";
import { BreadcrumbNav } from "@/components/shared/breadcrumb-nav";
import { FaqBlock } from "@/components/shared/faq-block";
import { SectionRenderer } from "@/components/shared/section-renderer";
import { SupportCta } from "@/components/shared/support-cta";
import { BeforeAfterGallery } from "@/components/premium/before-after-gallery";
import { ComparisonBlock } from "@/components/premium/comparison-block";
import { ConsultationBanner } from "@/components/premium/consultation-banner";
import { ConversionHero } from "@/components/premium/conversion-hero";
import { FinalConversionBlock } from "@/components/premium/final-conversion-block";
import { QuickJumpNav } from "@/components/premium/quick-jump-nav";
import { TrustSection } from "@/components/premium/trust-section";
import { getCorePage } from "@/lib/content/core-pages";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

const page = getCorePage("/fat-freezing-liverpool/");

if (!page) {
  throw new Error("Money page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: ["fat freezing liverpool", "fat freeze liverpool", "cryolipolysis liverpool"],
});

export default function FatFreezingLiverpoolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Fat Freezing Liverpool", path: "/fat-freezing-liverpool/" },
  ];

  const jumpItems = [
    { id: "service-overview", label: "Overview" },
    { id: "trust-callouts", label: "Trust" },
    { id: "comparison", label: "Comparison" },
    { id: "long-form-guide", label: "Full Guide" },
    { id: "faqs", label: "FAQs" },
    { id: "book-now", label: "Book" },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageSchema
        crumbs={crumbs}
        faqs={page.faqs}
        extraSchemas={[buildServiceSchema()]}
        webPage={{
          path: "/fat-freezing-liverpool/",
          name: "Fat Freezing Liverpool",
          type: "MedicalWebPage",
          description: page.metaDescription,
        }}
      />
      <BreadcrumbNav crumbs={crumbs} />

      <section id="service-overview">
        <ConversionHero
          eyebrow="Treatment overview"
          title="Fat freezing in Liverpool, explained clearly"
          intro="If you are comparing options, this page gives you the full treatment overview, realistic expectations, and a direct route to booking."
          primaryLabel="Book Consultation"
          primaryHref="/book/"
          secondaryLabel="View pricing and planning"
          secondaryHref="/pricing/"
          trustItems={[
            { label: "Treatment Path", value: "Consultation-Led" },
            { label: "Consultation Window", value: "10:00-20:00" },
            { label: "Communication Standard", value: "Medical-Safe" },
          ]}
        />
      </section>

      <div className="mt-6">
        <QuickJumpNav items={jumpItems} />
      </div>

      <div className="mt-8 grid gap-8">
        <section id="trust-callouts" className="grid gap-4 lg:grid-cols-3">
          <article className="surface-card p-5 shadow-sm">
            <p className="eyebrow">Suitability first</p>
            <h2 className="mt-2 text-lg font-semibold text-[var(--accent-navy)]">No treatment without consultation screening</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
              We review goals, anatomy, and contraindications before any protocol recommendation.
            </p>
          </article>
          <article className="surface-card p-5 shadow-sm">
            <p className="eyebrow">Medically responsible copy</p>
            <h2 className="mt-2 text-lg font-semibold text-[var(--accent-navy)]">FDA-cleared wording and realistic claims</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
              This is not a weight-loss treatment. Results vary by individual. We keep messaging medically responsible.
            </p>
          </article>
          <article className="surface-card p-5 shadow-sm">
            <p className="eyebrow">Clear next steps</p>
            <h2 className="mt-2 text-lg font-semibold text-[var(--accent-navy)]">One-click booking from every major section</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
              We keep every section actionable so you can move from research to a consultation without friction.
            </p>
          </article>
        </section>

        <ConsultationBanner
          title="Fastest path: book your fat freezing consultation in Liverpool"
          description="Choose your appointment slot and receive a confirmation email immediately after submission."
        />

        <TrustSection />

        <section id="comparison">
          <ComparisonBlock />
        </section>

        <BeforeAfterGallery />

        <section id="long-form-guide" className="section-shell p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Long-form service guide</p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
                Full treatment guide
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <Link href="/book/" className="btn-primary px-3 py-1.5">
                Book consultation
              </Link>
              <Link href="/fat-freezing/how-it-works/" className="btn-secondary px-3 py-1.5">
                How it works
              </Link>
            </div>
          </div>
          <p className="mt-3 text-sm leading-8 text-[var(--text-muted)]">
            The sections below provide full detail in a cleaner format, so you can read at your pace and move to booking when ready.
          </p>
          <div className="mt-6">
            <SectionRenderer sections={page.sections} withInlineCtas />
          </div>
        </section>

        <section id="faqs">
          {page.faqs?.length ? <FaqBlock faqs={page.faqs} /> : null}
        </section>

        <SupportCta
          heading="Turn research into a structured treatment plan"
          supportLink="/book/"
          supportLabel="Speak to our team"
          moneyAnchor="Cryolipolysis guide"
        />

        <section id="book-now">
          <FinalConversionBlock />
        </section>
      </div>
    </main>
  );
}
