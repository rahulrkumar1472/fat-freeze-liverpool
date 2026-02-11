import type { Metadata } from "next";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getLegalPage } from "@/lib/content/legal-pages";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("/medical-disclaimer/");

if (!page) {
  throw new Error("Medical disclaimer content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
});

export default function MedicalDisclaimerPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Medical Disclaimer", path: "/medical-disclaimer/" },
  ];

  return (
    <>
      <PageSchema crumbs={crumbs} />
      <ContentPage
        crumbs={crumbs}
        heroTitle={page.heroTitle}
        heroIntro={page.heroIntro}
        sections={page.sections}
        supportLink="/book/"
        supportLabel="book suitability consultation"
      />
    </>
  );
}
