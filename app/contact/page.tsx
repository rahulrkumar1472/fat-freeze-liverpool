import type { Metadata } from "next";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getCorePage } from "@/lib/content/core-pages";
import { buildContactPageSchema, buildMetadata } from "@/lib/seo";

const page = getCorePage("/contact/");

if (!page) {
  throw new Error("Contact page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: ["contact fat freeze liverpool", "fat freezing clinic Liverpool address"],
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={page.faqs}
        extraSchemas={[buildContactPageSchema()]}
        webPage={{
          path: "/contact/",
          name: "Contact Fat Freeze Liverpool",
          type: "ContactPage",
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
        supportLabel="Book consultation now"
        moneyAnchor="Treatment overview"
        eyebrow="Clinic Contact"
      />
    </>
  );
}
