import type { Metadata } from "next";
import { BeforeAfterGallery } from "@/components/premium/before-after-gallery";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getCorePage } from "@/lib/content/core-pages";
import { buildMetadata } from "@/lib/seo";

const page = getCorePage("/fat-freezing/how-it-works/");

if (!page) {
  throw new Error("How it works page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: ["how fat freezing works", "cryolipolysis process", "fat freezing Liverpool guide"],
});

export default function HowItWorksPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/fat-freezing/how-it-works/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={page.faqs}
        webPage={{
          path: "/fat-freezing/how-it-works/",
          name: "How Fat Freezing Works",
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
        supportLabel="Treatment overview"
        moneyAnchor="Cryolipolysis overview"
        eyebrow="Science & Process"
        withInlineCtas
        beforeSections={<BeforeAfterGallery />}
      />
    </>
  );
}
