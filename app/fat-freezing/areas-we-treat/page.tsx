import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      "Not all body areas respond in the same way. Starting with your highest-priority area keeps planning practical and easier to review.",
      "This hub helps you compare options quickly before booking consultation.",
    ],
  },
  {
    heading: "How each area page helps",
    paragraphs: [
      "Each area page covers suitability, likely timeline, and key questions for consultation.",
      "You can move directly from any area page to pricing and booking when ready.",
    ],
    bullets: [
      "Area-by-area treatment guidance",
      "Clear next-step links to service and booking",
      "Simple language with medically safe boundaries",
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
  title: "Areas We Treat | Liverpool Clinic",
  description:
    "Explore treatment areas including abdomen, flanks, thighs, upper arms, and double chin with practical planning guidance.",
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
        heroIntro="Area-specific guidance to help you choose the right starting point."
        sections={sections}
        faqs={areaHubFaqs}
        supportLink="/book/"
        supportLabel="book consultation"
        moneyAnchor="Treatment overview"
        eyebrow="Body Area Hub"
        withInlineCtas
        beforeSections={
          <Card className="section-shell p-6">
            <Badge variant="teal">Areas at a glance</Badge>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--accent-navy)]">Choose your target area</h2>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-3 sm:grid-cols-2">
                {areaPages.map((area) => (
                  <Button
                    key={area.slug}
                    asChild
                    variant="secondary"
                    className="h-auto justify-start rounded-2xl border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-left text-sm font-semibold text-[var(--text)]"
                  >
                    <Link href={area.path}>{area.heroTitle}</Link>
                  </Button>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]">
                <Image
                  src="/images/before-after-illustration.svg"
                  alt="Body area treatment planning illustration"
                  width={720}
                  height={520}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Card>
        }
      />
    </>
  );
}
