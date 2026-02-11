import type { Metadata } from "next";
import { PageSchema } from "@/components/seo/page-schema";
import { BreadcrumbNav } from "@/components/shared/breadcrumb-nav";
import { FaqBlock } from "@/components/shared/faq-block";
import { AreasGrid } from "@/components/premium/areas-grid";
import { BenefitsStrip } from "@/components/premium/benefits-strip";
import { ConcernsGrid } from "@/components/premium/concerns-grid";
import { ConsultationBanner } from "@/components/premium/consultation-banner";
import { ConversionHero } from "@/components/premium/conversion-hero";
import { FinalConversionBlock } from "@/components/premium/final-conversion-block";
import { MapContactStrip } from "@/components/premium/map-contact-strip";
import { ProcessTimeline } from "@/components/premium/process-timeline";
import { QuickExplainer } from "@/components/premium/quick-explainer";
import { TestimonialsSection } from "@/components/premium/testimonials-section";
import { TrustSection } from "@/components/premium/trust-section";
import { areaPages } from "@/lib/content/areas";
import { getCorePage } from "@/lib/content/core-pages";
import { concernPages } from "@/lib/content/concerns";
import { buildMetadata } from "@/lib/seo";

const homePageContent = getCorePage("/");

if (!homePageContent) {
  throw new Error("Home page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: "Fat Freezing Liverpool | Cryolipolysis Clinic",
  description:
    "Consultation-led cryolipolysis in Liverpool with clear pricing, realistic expectations, and an easy route to booking.",
  keywords: [
    "fat freeze liverpool",
    "fat freezing liverpool",
    "cryolipolysis liverpool",
    "book fat freezing consultation liverpool",
  ],
});

export default function HomePage() {
  const crumbs = [{ name: "Home", path: "/" }];

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      <PageSchema
        crumbs={crumbs}
        faqs={homePageContent.faqs}
        webPage={{
          path: "/",
          name: "Fat Freeze Liverpool Home",
          type: "MedicalWebPage",
          description:
            "Homepage for Fat Freeze Liverpool with consultation-led cryolipolysis pathways, key area guidance, trust information, and booking CTAs.",
        }}
      />
      <BreadcrumbNav crumbs={crumbs} />

      <div className="grid gap-8">
        <ConversionHero
          eyebrow="Premium Liverpool Clinic"
          title="Modern, consultation-led fat freezing in Liverpool"
          intro="We explain your options in plain English, show clear pricing, and make booking simple."
          primaryLabel="Book"
          primaryHref="/book/"
          secondaryLabel="Treatment overview"
          secondaryHref="/fat-freezing-liverpool/"
          trustItems={[
            { label: "Consultation hours", value: "10:00-20:00" },
            { label: "Clinical standard review", value: "6-Month Cycle" },
            { label: "Service focus", value: "Non-Invasive" },
          ]}
        />

        <TrustSection />

        <QuickExplainer />

        <BenefitsStrip
          items={[
            {
              title: "Clear first step",
              detail:
                "Start with your area or concern, then move to pricing and booking when you are ready.",
            },
            {
              title: "Consultation-led decisions",
              detail:
                "We base every recommendation on suitability, realistic milestones, and clinically safe communication.",
            },
            {
              title: "Transparent expectations",
              detail:
                "No hype and no guesswork: clear boundaries, clear timeline, and clear next steps.",
            },
          ]}
        />

        <AreasGrid areas={areaPages} />

        <ConcernsGrid concerns={concernPages} />

        <ProcessTimeline
          steps={[
            {
              title: "Book consultation",
              detail: "Share your details and preferred appointment slot through our 3-step booking flow.",
            },
            {
              title: "Suitability review",
              detail: "We confirm whether fat freezing is appropriate for your area and goals.",
            },
            {
              title: "Treatment planning",
              detail: "We create a staged treatment plan with realistic expectations and review milestones.",
            },
            {
              title: "Progress tracking",
              detail: "Follow-up checkpoints help us evaluate progress and decide the next step safely.",
            },
          ]}
        />

        <ConsultationBanner
          title="Book your consultation in one click"
          description="Choose your slot online and receive confirmation by email. Same-day treatment may be available subject to suitability and schedule."
        />

        <TestimonialsSection />

        <MapContactStrip />

        {homePageContent.faqs?.length ? <FaqBlock faqs={homePageContent.faqs} /> : null}

        <FinalConversionBlock />
      </div>
    </main>
  );
}
