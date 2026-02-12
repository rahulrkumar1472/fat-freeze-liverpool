import type { Metadata } from "next";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { buildSupportFaqs } from "@/lib/content/copy-helpers";
import type { ContentSection } from "@/lib/content/types";
import { buildMetadata } from "@/lib/seo";

const sections: ContentSection[] = [
  {
    heading: "Role of radio frequency in a fat freezing-led pathway",
    paragraphs: [
      "Radio frequency skin tightening is an optional support treatment in selected plans.",
      "Most clients begin with fat freezing consultation, then review whether supportive options may add value.",
    ],
  },
  {
    heading: "Timing considerations",
    paragraphs: [
      "Timing is a key decision factor. In most cases, supportive modalities are discussed after baseline checkpoints are established.",
      "Early over-layering can reduce clarity. A staged approach usually improves communication, budget control, and progress tracking.",
    ],
  },
  {
    heading: "Suitability and compliance-safe communication",
    paragraphs: [
      "All recommendations are consultation-led and suitability dependent. We avoid exaggerated guarantees and keep expectations clinically grounded.",
      "This is not a weight-loss treatment. Results vary by individual. Consultation is required and suitability is assessed individually.",
    ],
  },
  {
    heading: "Practical pathway",
    paragraphs: [
      "Use treatment overview to understand the main contour route first. Then discuss whether support options suit your goals and timeline.",
      "Booking consultation is the fastest way to receive an integrated plan with clear next actions.",
    ],
  },
];

const faqs = buildSupportFaqs("radio frequency skin tightening support treatment");

export const metadata: Metadata = buildMetadata({
  path: "/treatments/radio-frequency-skin-tightening/",
  title: "Radio Frequency Skin Tightening Support Treatment | Fat Freezing Liverpool",
  description:
    "Learn how radio frequency skin tightening can be considered as a secondary support option within a fat freezing-led treatment strategy in Liverpool.",
  keywords: ["radio frequency skin tightening Liverpool", "fat freezing RF combination"],
});

export default function RadioFrequencyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Radio Frequency Skin Tightening", path: "/treatments/radio-frequency-skin-tightening/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={faqs}
        webPage={{
          path: "/treatments/radio-frequency-skin-tightening/",
          name: "Radio Frequency Skin Tightening",
          type: "MedicalWebPage",
          description:
            "Secondary support treatment page explaining radio frequency skin tightening in context of fat freezing strategy.",
        }}
      />
      <ContentPage
        crumbs={crumbs}
        heroTitle="Radio Frequency Skin Tightening"
        heroIntro="Secondary support pathway for selected cases within fat freezing-led contour planning."
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
