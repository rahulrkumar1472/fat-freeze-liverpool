import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { areaPages, getAreaBySlug } from "@/lib/content/areas";
import { buildMetadata } from "@/lib/seo";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return areaPages.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return {};
  }

  return buildMetadata({
    path: area.path,
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: ["fat freezing liverpool", "area-specific cryolipolysis", area.title],
  });
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Areas We Treat", path: "/fat-freezing/areas-we-treat/" },
    { name: area.heroTitle, path: area.path },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={area.faqs}
        webPage={{
          path: area.path,
          name: area.heroTitle,
          type: "MedicalWebPage",
          description: area.metaDescription,
        }}
      />
      <ContentPage
        crumbs={crumbs}
        heroTitle={area.heroTitle}
        heroIntro={area.heroIntro}
        sections={area.sections}
        faqs={area.faqs}
        supportLink="/fat-freezing/areas-we-treat/"
        supportLabel="Back to areas hub"
        moneyAnchor="Treatment overview"
        eyebrow="Area Guide"
        withInlineCtas
      />
    </>
  );
}
