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
import { PricingTeaser } from "@/components/premium/pricing-teaser";
import { QuickExplainer } from "@/components/premium/quick-explainer";
import { Section } from "@/components/premium/section";
import { TestimonialsSection } from "@/components/premium/testimonials-section";
import { TrustSection } from "@/components/premium/trust-section";
import { areaPages } from "@/lib/content/areas";
import { getCorePage } from "@/lib/content/core-pages";
import { concernPages } from "@/lib/content/concerns";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

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
    <main className="pb-16">
      <PageSchema
        crumbs={crumbs}
        faqs={homePageContent.faqs}
        webPage={{
          path: "/",
          name: "Fat Freezing Liverpool Home",
          type: "MedicalWebPage",
          description:
            "Homepage for our Liverpool clinic with consultation-led cryolipolysis pathways, key area guidance, trust information, and booking CTAs.",
        }}
      />
      <Container className="pt-8">
        <BreadcrumbNav crumbs={crumbs} />
      </Container>
      <Section className="pt-4">
        <ConversionHero
          eyebrow="Premium Liverpool Clinic"
          title="Clear, consultation-led body contouring in Liverpool"
          intro="We explain your options in plain English, set realistic expectations, and make booking straightforward."
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
      </Section>
      <Section className="py-6">
        <TrustSection />
      </Section>
      <Section className="py-6">
        <QuickExplainer />
      </Section>
      <Section className="py-6">
        <BenefitsStrip
          items={[
            {
              title: "Clear first step",
              detail:
                "Start with your concern or area, then move to pricing and booking when you are ready.",
            },
            {
              title: "Consultation-led decisions",
              detail:
                "Every recommendation is based on suitability, realistic milestones, and clinically safe communication.",
            },
            {
              title: "Transparent expectations",
              detail:
                "No hype and no guesswork: clear boundaries, practical timelines, and clear next steps.",
            },
          ]}
        />
      </Section>
      <Section className="py-6">
        <AreasGrid areas={areaPages} />
      </Section>
      <Section className="py-6">
        <ConcernsGrid concerns={concernPages} />
      </Section>
      <Section className="py-6">
        <ProcessTimeline
          steps={[
            {
              title: "Book consultation",
              detail: "Share your details and preferred slot through our simple 3-step booking flow.",
            },
            {
              title: "Suitability review",
              detail: "We confirm whether treatment is appropriate for your area and goals.",
            },
            {
              title: "Treatment planning",
              detail: "We build a staged plan with realistic expectations and review milestones.",
            },
            {
              title: "Progress tracking",
              detail: "Follow-up checkpoints help us review progress and decide the next step safely.",
            },
          ]}
        />
      </Section>
      <Section className="py-6">
        <PricingTeaser />
      </Section>
      <Section className="py-6">
        <ConsultationBanner
          title="Book your consultation in one step"
          description="Choose your slot online and receive confirmation by email. Same-day treatment may be available subject to suitability and schedule."
        />
      </Section>
      <Section className="py-6">
        <TestimonialsSection />
      </Section>
      <Section className="py-6">
        <MapContactStrip />
      </Section>
      <Section className="py-6">
        {homePageContent.faqs?.length ? <FaqBlock faqs={homePageContent.faqs} /> : null}
      </Section>
      <Section className="py-6">
        <FinalConversionBlock />
      </Section>
    </main>
  );
}
