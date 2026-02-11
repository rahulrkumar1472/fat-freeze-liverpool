import type { Metadata } from "next";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getLegalPage } from "@/lib/content/legal-pages";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("/privacy-policy/");

if (!page) {
  throw new Error("Privacy page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
});

export default function PrivacyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy/" },
  ];

  return (
    <>
      <PageSchema crumbs={crumbs} />
      <ContentPage
        crumbs={crumbs}
        heroTitle={page.heroTitle}
        heroIntro={page.heroIntro}
        sections={page.sections}
        supportLink="/contact/"
        supportLabel="privacy enquiries"
      />
    </>
  );
}
