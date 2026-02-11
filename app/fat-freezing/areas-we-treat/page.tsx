import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { buildSupportFaqs } from "@/lib/content/copy-helpers";
import type { ContentSection } from "@/lib/content/types";
import { areaPages } from "@/lib/content/areas";
import { buildMetadata } from "@/lib/seo";

const sections: ContentSection[] = [
  {
    heading: "Why area-led planning works",
    paragraphs: [
      "Not all body areas respond in the same way. Starting with your highest-priority area keeps treatment planning practical and easy to review.",
      "This hub helps you compare areas quickly before booking consultation.",
    ],
  },
  {
    heading: "How each area page helps",
    paragraphs: [
      "Every area page covers suitability, expected timeline, and what to ask in consultation.",
      "You can move directly from any area page to pricing and booking when you are ready.",
    ],
    bullets: [
      "Area-by-area treatment guidance",
      "Clear next-step links to service and booking",
      "Simple language with medical-safe boundaries",
      "Practical consultation preparation advice",
    ],
  },
  {
    heading: "Expectation setting across areas",
    paragraphs: [
      "Some areas may show changes earlier than others, so follow-up timing matters.",
      "This is not a weight-loss treatment. Results vary by individual. Suitability is confirmed during consultation.",
    ],
  },
];

const areaHubFaqs = buildSupportFaqs("fat freezing treatment areas");

export const metadata: Metadata = buildMetadata({
  path: "/fat-freezing/areas-we-treat/",
  title: "Fat Freezing Areas We Treat",
  description:
    "Explore fat freezing treatment areas in Liverpool, including abdomen, flanks, thighs, upper arms, and double chin.",
  keywords: ["areas we treat fat freezing", "fat freezing body areas Liverpool"],
});

export default function AreasWeTreatPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Areas We Treat", path: "/fat-freezing/areas-we-treat/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={areaHubFaqs}
        webPage={{
          path: "/fat-freezing/areas-we-treat/",
          name: "Fat Freezing Areas We Treat",
          type: "CollectionPage",
          description: "Area-specific fat freezing pages for Liverpool treatment planning.",
        }}
      />
      <ContentPage
        crumbs={crumbs}
        heroTitle="Areas We Treat"
        heroIntro="Area-specific Liverpool guidance to help you choose the right starting point."
        sections={sections}
        faqs={areaHubFaqs}
        supportLink="/book/"
        supportLabel="book consultation"
        moneyAnchor="Treatment overview"
        eyebrow="Body Area Hub"
        withInlineCtas
        beforeSections={
          <section className="section-shell p-6">
            <h2 className="font-display text-2xl font-semibold text-[var(--accent-navy)]">Choose your target area</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {areaPages.map((area) => (
                <Link
                  key={area.slug}
                  href={area.path}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:bg-[var(--primary-soft)]"
                >
                  {area.heroTitle}
                </Link>
              ))}
            </div>
          </section>
        }
      />
    </>
  );
}
