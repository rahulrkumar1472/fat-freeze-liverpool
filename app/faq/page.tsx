import type { Metadata } from "next";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getCorePage } from "@/lib/content/core-pages";
import { buildMetadata } from "@/lib/seo";

const page = getCorePage("/faq/");

if (!page) {
  throw new Error("FAQ page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: ["fat freezing Liverpool FAQ", "cryolipolysis questions Liverpool"],
});

export default function FaqPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={page.faqs}
        webPage={{
          path: "/faq/",
          name: "Fat Freezing FAQ",
          type: "FAQPage",
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
        supportLabel="View full treatment guidance"
        moneyAnchor="Treatment overview"
        eyebrow="FAQ"
      />
    </>
  );
}
