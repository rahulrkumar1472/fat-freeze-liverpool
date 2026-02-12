import type { Metadata } from "next";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getCorePage } from "@/lib/content/core-pages";
import { buildAboutPageSchema, buildMetadata } from "@/lib/seo";

const page = getCorePage("/about/");

if (!page) {
  throw new Error("About page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: ["about fat freeze liverpool", "liverpool fat freezing clinic standards"],
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={page.faqs}
        extraSchemas={[buildAboutPageSchema()]}
        webPage={{
          path: "/about/",
          name: "About Our Clinic",
          type: "AboutPage",
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
        supportLabel="book a standards-led consultation"
        moneyAnchor="Treatment overview"
        eyebrow="Clinic Standards"
      />
    </>
  );
}
