import { buildSupportFaqs, buildSupportSections } from "@/lib/content/copy-helpers";

export type AreaPage = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  sections: ReturnType<typeof buildSupportSections>;
  faqs: ReturnType<typeof buildSupportFaqs>;
};

const rawAreas = [
  {
    slug: "abdomen",
    label: "Abdomen",
    supportLink: "/concerns/stubborn-belly-fat/",
    liverpoolAngle:
      "Many clients in Liverpool ask about the abdomen after seeing progress elsewhere but not in their midsection.",
  },
  {
    slug: "flanks-love-handles",
    label: "Flanks and Love Handles",
    supportLink: "/concerns/love-handles/",
    liverpoolAngle:
      "Flank concerns are common among clients who want better shape definition in fitted clothing.",
  },
  {
    slug: "lower-stomach-pouch",
    label: "Lower Stomach / Pouch",
    supportLink: "/concerns/stubborn-belly-fat/",
    liverpoolAngle:
      "Lower pouch concerns often need careful area-specific planning rather than broad generic advice.",
  },
  {
    slug: "bra-back-fat",
    label: "Bra Back Fat",
    supportLink: "/concerns/post-weight-loss-shape/",
    liverpoolAngle:
      "Upper torso contour questions are often raised when clients feel progress has stalled despite consistent routines.",
  },
  {
    slug: "inner-thighs",
    label: "Inner Thighs",
    supportLink: "/concerns/thigh-fat/",
    liverpoolAngle:
      "Inner thigh planning often focuses on comfort, balance, and realistic milestones.",
  },
  {
    slug: "outer-thighs",
    label: "Outer Thighs",
    supportLink: "/concerns/thigh-fat/",
    liverpoolAngle:
      "Outer thigh shape goals often benefit from careful staging to preserve overall symmetry.",
  },
  {
    slug: "upper-arms-bingo-wings",
    label: "Upper Arms / Bingo Wings",
    supportLink: "/concerns/arm-fat/",
    liverpoolAngle:
      "Upper arm concerns are frequently discussed by clients seeking non-surgical contour support with minimal disruption.",
  },
  {
    slug: "double-chin",
    label: "Double Chin",
    supportLink: "/concerns/double-chin-fat/",
    liverpoolAngle:
      "Under-chin profile concerns are a common priority when clients want clearer jawline definition.",
  },
] as const;

export const areaPages: AreaPage[] = rawAreas.map((area) => {
  const topic = `${area.label} fat freezing`;

  return {
    slug: area.slug,
    path: `/fat-freezing/areas/${area.slug}/`,
    title: `${area.label} Fat Freezing`,
    metaTitle: `${area.label} Fat Freezing | Liverpool Clinic`,
    metaDescription: `Learn how ${area.label.toLowerCase()} treatment is planned in Liverpool, including suitability, likely timeline, and booking steps.`,
    heroTitle: `${area.label} Fat Freezing in Liverpool`,
    heroIntro:
      "Area-specific guidance to help you assess suitability, expectations, and your next practical step.",
    sections: buildSupportSections({
      topic,
      liverpoolAngle: area.liverpoolAngle,
      candidateProfile:
        "Assessment focuses on tissue profile, skin quality, and whether this area can be treated safely using a non-invasive cooling protocol.",
      treatmentPlan:
        "Treatment design prioritises area fit, practical session timing, and clear review checkpoints.",
      aftercare:
        "Aftercare guidance for this area is set out clearly so comfort and progress remain easy to monitor.",
      expectations:
        "Expectation planning covers likely pace of change, response variability, and when follow-up should happen.",
      internalSupportLinkLabel: area.supportLink,
    }),
    faqs: buildSupportFaqs(topic),
  };
});

export function getAreaBySlug(slug: string) {
  return areaPages.find((area) => area.slug === slug);
}
