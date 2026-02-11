import { buildSupportFaqs, buildSupportSections } from "@/lib/content/copy-helpers";

export type ConcernPage = {
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

const rawConcerns = [
  {
    slug: "stubborn-belly-fat",
    label: "Stubborn Belly Fat",
    supportLink: "/fat-freezing/areas/abdomen/",
    localAngle:
      "Belly contour concerns are one of the most common reasons Liverpool clients seek consultation after plateauing with nutrition and training.",
  },
  {
    slug: "arm-fat",
    label: "Stubborn Arm Fat",
    supportLink: "/fat-freezing/areas/upper-arms-bingo-wings/",
    localAngle:
      "Arm-related confidence concerns are often tied to visible shape imbalance rather than total body-weight goals.",
  },
  {
    slug: "thigh-fat",
    label: "Stubborn Thigh Fat",
    supportLink: "/fat-freezing/areas/inner-thighs/",
    localAngle:
      "Thigh contour planning typically requires symmetry-focused assessment and practical milestone tracking.",
  },
  {
    slug: "post-weight-loss-shape",
    label: "Post Weight-Loss Shape",
    supportLink: "/fat-freezing/areas/bra-back-fat/",
    localAngle:
      "After weight reduction, localised fat persistence can create a mismatch between effort and visible shape outcomes.",
  },
  {
    slug: "love-handles",
    label: "Love Handles",
    supportLink: "/fat-freezing/areas/flanks-love-handles/",
    localAngle:
      "Flank contour resistance is a frequent consultation topic for clients preparing for events and fitted clothing.",
  },
  {
    slug: "double-chin-fat",
    label: "Double Chin Fat",
    supportLink: "/fat-freezing/areas/double-chin/",
    localAngle:
      "Submental contour concerns often involve nuanced treatment planning, clear timelines, and conservative expectation setting.",
  },
] as const;

export const concernPages: ConcernPage[] = rawConcerns.map((concern) => {
  const topic = concern.label.toLowerCase();
  return {
    slug: concern.slug,
    path: `/concerns/${concern.slug}/`,
    title: `${concern.label} Liverpool`,
    metaTitle: `${concern.label} Liverpool | Fat Freezing`,
    metaDescription: `Practical guidance for ${topic} in Liverpool, including suitability checks, realistic timelines, and consultation next steps.`,
    heroTitle: `${concern.label} in Liverpool`,
    heroIntro:
      "A clear guide to your options, what to expect, and how to choose your next step with confidence.",
    sections: buildSupportSections({
      topic,
      liverpoolAngle: concern.localAngle,
      candidateProfile:
        "Suitability checks focus on anatomy, prior treatment history, and whether non-invasive contour treatment is a suitable strategy for this concern.",
      treatmentPlan:
        "Treatment planning prioritises achievable milestones and clear review windows.",
      aftercare:
        "Aftercare guidance is tailored so you can monitor progress confidently and know when to check in.",
      expectations:
        "Expectation setting covers likely pace, response variability, and when additional sessions may be discussed.",
      internalSupportLinkLabel: concern.supportLink,
    }),
    faqs: buildSupportFaqs(topic),
  };
});

export function getConcernBySlug(slug: string) {
  return concernPages.find((concern) => concern.slug === slug);
}
