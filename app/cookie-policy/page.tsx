import type { Metadata } from "next";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getLegalPage } from "@/lib/content/legal-pages";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("/cookie-policy/");

if (!page) {
  throw new Error("Cookie page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
});

export default function CookiePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Cookie Policy", path: "/cookie-policy/" },
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
        supportLabel="cookie policy enquiries"
      />
    </>
  );
}
