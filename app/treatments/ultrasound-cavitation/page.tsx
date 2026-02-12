import type { Metadata } from "next";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { buildSupportFaqs } from "@/lib/content/copy-helpers";
import type { ContentSection } from "@/lib/content/types";
import { buildMetadata } from "@/lib/seo";

const sections: ContentSection[] = [
  {
    heading: "Where ultrasound cavitation sits in the treatment strategy",
    paragraphs: [
      "Ultrasound cavitation is discussed as an optional support treatment for selected plans.",
      "At our clinic, most journeys begin with consultation-led fat freezing, then supportive options are considered only where they add practical value.",
    ],
  },
  {
    heading: "When combination planning can be useful",
    paragraphs: [
      "Some clients ask whether pairing modalities can improve treatment feel or progression confidence. The answer depends on anatomy, area focus, timeline, and individual response profile.",
      "Combination planning should be phased. We avoid stacking interventions early unless there is a clear clinical rationale and operational benefit.",
    ],
  },
  {
    heading: "Clinical boundaries and expectations",
    paragraphs: [
      "Ultrasound cavitation does not replace consultation-led assessment. It should be evaluated as part of a broader contour plan, not as a shortcut to broad weight goals.",
      "This is not a weight-loss treatment. Results vary by individual. Suitability is assessed individually before any treatment recommendation.",
    ],
  },
  {
    heading: "How to decide your next step",
    paragraphs: [
      "Start with our treatment overview so your core pathway is clear. If combination options are relevant, we discuss timing and expected value during consultation.",
      "A practical plan always identifies the primary modality, secondary support options, and measurable review checkpoints.",
    ],
  },
];

const faqs = buildSupportFaqs("ultrasound cavitation support treatment");

export const metadata: Metadata = buildMetadata({
  path: "/treatments/ultrasound-cavitation/",
  title: "Ultrasound Cavitation Support Treatment | Fat Freezing Liverpool",
  description:
    "Understand how ultrasound cavitation may be used as a secondary support treatment around consultation-led fat freezing pathways in Liverpool.",
  keywords: ["ultrasound cavitation Liverpool", "fat freezing combination treatment"],
});

export default function UltrasoundCavitationPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Ultrasound Cavitation", path: "/treatments/ultrasound-cavitation/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={faqs}
        webPage={{
          path: "/treatments/ultrasound-cavitation/",
          name: "Ultrasound Cavitation",
          type: "MedicalWebPage",
          description:
            "Secondary support treatment page explaining ultrasound cavitation in context of fat freezing strategy.",
        }}
      />
      <ContentPage
        crumbs={crumbs}
        heroTitle="Ultrasound Cavitation"
        heroIntro="Secondary support pathway explained in the context of fat freezing-led contour strategy."
        sections={sections}
        faqs={faqs}
        supportLink="/fat-freezing-liverpool/"
        supportLabel="Treatment overview"
        moneyAnchor="Cryolipolysis guide"
        eyebrow="Support Treatment"
        withInlineCtas
      />
    </>
  );
}
