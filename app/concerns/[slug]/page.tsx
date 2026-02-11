import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { concernPages, getConcernBySlug } from "@/lib/content/concerns";
import { buildMetadata } from "@/lib/seo";

type Params = {
  slug: string;
};

const legacyConcernSlugRedirects: Record<string, string> = {
  "stubborn-belly-fat-liverpool": "stubborn-belly-fat",
  "stubborn-arm-fat-liverpool": "arm-fat",
  "stubborn-thigh-fat-liverpool": "thigh-fat",
  "post-weight-loss-stubborn-fat-liverpool": "post-weight-loss-shape",
  "love-handles-not-going-liverpool": "love-handles",
  "lower-pouch-fat-liverpool": "stubborn-belly-fat",
};

export function generateStaticParams() {
  return concernPages.map((concern) => ({ slug: concern.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = legacyConcernSlugRedirects[slug] ?? slug;
  const concern = getConcernBySlug(resolvedSlug);

  if (!concern) {
    return {};
  }

  return buildMetadata({
    path: concern.path,
    title: concern.metaTitle,
    description: concern.metaDescription,
    keywords: ["stubborn fat treatment liverpool", "fat freezing liverpool", concern.title],
  });
}

export default async function ConcernPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const redirectedSlug = legacyConcernSlugRedirects[slug];

  if (redirectedSlug) {
    redirect(`/concerns/${redirectedSlug}/`);
  }

  const concern = getConcernBySlug(slug);

  if (!concern) {
    notFound();
  }

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Concerns", path: "/concerns/" },
    { name: concern.heroTitle, path: concern.path },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={concern.faqs}
        webPage={{
          path: concern.path,
          name: concern.heroTitle,
          type: "MedicalWebPage",
          description: concern.metaDescription,
        }}
      />
      <ContentPage
        crumbs={crumbs}
        heroTitle={concern.heroTitle}
        heroIntro={concern.heroIntro}
        sections={concern.sections}
        faqs={concern.faqs}
        supportLink="/concerns/"
        supportLabel="Back to concerns hub"
        moneyAnchor="Cryolipolysis overview"
        eyebrow="Concern Guide"
        withInlineCtas
      />
    </>
  );
}
