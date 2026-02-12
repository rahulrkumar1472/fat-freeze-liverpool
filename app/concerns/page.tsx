import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { buildSupportFaqs } from "@/lib/content/copy-helpers";
import type { ContentSection } from "@/lib/content/types";
import { concernPages } from "@/lib/content/concerns";
import { buildMetadata } from "@/lib/seo";

const sections: ContentSection[] = [
  {
    heading: "Start with the concern you feel most",
    paragraphs: [
      "Most people begin with a practical concern, not a treatment term. This hub helps turn that concern into a clear treatment conversation.",
      "Each page explains what to discuss in consultation, what timeline is realistic, and what to do next.",
    ],
  },
  {
    heading: "What these pages are here to do",
    paragraphs: [
      "Concern pages explain common patterns such as stubborn belly fat, arm fat, thigh fat, and post-weight-loss shape frustration.",
      "They are written to help you ask better consultation questions and avoid unrealistic expectations.",
    ],
    bullets: [
      "Understand likely treatment options",
      "See which area pages are most relevant",
      "Move directly to pricing and booking",
      "Get clear safety wording before you commit",
    ],
  },
  {
    heading: "Important clinical reminder",
    paragraphs: [
      "Fat freezing is non-invasive body contouring and not a weight-loss treatment. Results vary by individual and final suitability is always determined during consultation.",
      "If you are unsure where to start, choose the concern page closest to your situation and then book a consultation.",
    ],
  },
];

const concernHubFaqs = buildSupportFaqs("stubborn fat concerns");

export const metadata: Metadata = buildMetadata({
  path: "/concerns/",
  title: "Stubborn Fat Concerns | Liverpool Clinic",
  description:
    "Explore concern-led guidance for belly, arm, thigh, love handle, and under-chin fat with clear next steps.",
  keywords: ["stubborn fat treatment Liverpool", "fat freezing concerns Liverpool"],
});

export default function ConcernsHubPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Concerns", path: "/concerns/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={concernHubFaqs}
        webPage={{
          path: "/concerns/",
          name: "Concerns Hub",
          type: "CollectionPage",
          description: "Concern-led pages for stubborn localised fat intent in Liverpool.",
        }}
      />
      <ContentPage
        crumbs={crumbs}
        heroTitle="Concerns"
        heroIntro="Concern-led guidance to help you choose a practical next step."
        sections={sections}
        faqs={concernHubFaqs}
        supportLink="/book/"
        supportLabel="book a concern-focused consultation"
        moneyAnchor="Treatment overview"
        eyebrow="Concerns Hub"
        withInlineCtas
        beforeSections={
          <Card className="section-shell p-6">
            <Badge variant="teal">Concern routes</Badge>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--accent-navy)]">Explore your concern</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {concernPages.map((concern) => (
                <Button
                  key={concern.slug}
                  asChild
                  variant="secondary"
                  className="h-auto justify-start rounded-2xl border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-left text-sm font-semibold text-[var(--text)]"
                >
                  <Link href={concern.path}>{concern.heroTitle}</Link>
                </Button>
              ))}
            </div>
          </Card>
        }
      />
    </>
  );
}
