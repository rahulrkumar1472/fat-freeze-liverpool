import type { Metadata } from "next";
import { BeforeAfterGallery } from "@/components/premium/before-after-gallery";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getCorePage } from "@/lib/content/core-pages";
import { buildMetadata } from "@/lib/seo";

const page = getCorePage("/fat-freezing/results-timeline/");

if (!page) {
  throw new Error("Results page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: ["fat freezing results", "what to expect after fat freezing", "Liverpool cryolipolysis timeline"],
});

export default function ResultsTimelinePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Results & Timeline", path: "/fat-freezing/results-timeline/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={page.faqs}
        webPage={{
          path: "/fat-freezing/results-timeline/",
          name: "Fat Freezing Results Timeline",
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
        supportLink="/book/"
        supportLabel="Book your consultation"
        moneyAnchor="Treatment overview"
        eyebrow="Outcome Planning"
        withInlineCtas
        beforeSections={<BeforeAfterGallery />}
      />
    </>
  );
}
