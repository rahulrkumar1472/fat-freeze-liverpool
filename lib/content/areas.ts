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
      "For many city-centre professionals and parents, the abdomen is the first area where contour frustration persists even when weight is broadly stable.",
  },
  {
    slug: "flanks-love-handles",
    label: "Flanks and Love Handles",
    supportLink: "/concerns/love-handles/",
    liverpoolAngle:
      "Love handle distribution can remain visible under fitted clothing, which is a common concern for Liverpool clients preparing for events or travel.",
  },
  {
    slug: "lower-stomach-pouch",
    label: "Lower Stomach / Pouch",
    supportLink: "/concerns/stubborn-belly-fat/",
    liverpoolAngle:
      "Lower pouch concerns are common after life-stage changes and often require focused, measured planning rather than broad weight-focused advice.",
  },
  {
    slug: "bra-back-fat",
    label: "Bra Back Fat",
    supportLink: "/concerns/post-weight-loss-shape/",
    liverpoolAngle:
      "Bra back contour challenges are frequently raised by clients who feel progress stalls in upper torso areas despite routine consistency.",
  },
  {
    slug: "inner-thighs",
    label: "Inner Thighs",
    supportLink: "/concerns/thigh-fat/",
    liverpoolAngle:
      "Inner thigh contour concerns can impact confidence and comfort, especially when clients want improved silhouette balance.",
  },
  {
    slug: "outer-thighs",
    label: "Outer Thighs",
    supportLink: "/concerns/thigh-fat/",
    liverpoolAngle:
      "Outer thigh distribution patterns often require accurate applicator planning to maintain shape symmetry and realistic expectations.",
  },
  {
    slug: "upper-arms-bingo-wings",
    label: "Upper Arms / Bingo Wings",
    supportLink: "/concerns/arm-fat/",
    liverpoolAngle:
      "Upper arm contour concerns are frequently discussed by clients looking for non-surgical options with minimal disruption to work schedules.",
  },
  {
    slug: "double-chin",
    label: "Double Chin",
    supportLink: "/concerns/double-chin-fat/",
    liverpoolAngle:
      "Jawline and under-chin definition can be a high-priority concern for clients who are otherwise close to their target shape.",
  },
] as const;

export const areaPages: AreaPage[] = rawAreas.map((area) => {
  const topic = `${area.label} fat freezing`;

  return {
    slug: area.slug,
    path: `/fat-freezing/areas/${area.slug}/`,
    title: `${area.label} Fat Freezing Liverpool`,
    metaTitle: `${area.label} Fat Freezing Liverpool`,
    metaDescription: `Learn about ${area.label.toLowerCase()} treatment planning in Liverpool, including suitability, timeline, and consultation next steps.`,
    heroTitle: `${area.label} Fat Freezing in Liverpool`,
    heroIntro:
      "Area-specific guidance to help you understand suitability, expected timing, and your next step.",
    sections: buildSupportSections({
      topic,
      liverpoolAngle: area.liverpoolAngle,
      candidateProfile:
        "Assessment focuses on tissue profile, skin quality, and whether this area can be treated safely with a non-invasive cooling protocol.",
      treatmentPlan:
        "Treatment design prioritises area fit, clear session timing, and practical review checkpoints.",
      aftercare:
        "Aftercare for this zone is designed to reduce uncertainty and support comfort between appointments.",
      expectations:
        "Expectation setting includes what visible change can look like and when follow-up should happen.",
      internalSupportLinkLabel: area.supportLink,
    }),
    faqs: buildSupportFaqs(topic),
  };
});

export function getAreaBySlug(slug: string) {
  return areaPages.find((area) => area.slug === slug);
}
