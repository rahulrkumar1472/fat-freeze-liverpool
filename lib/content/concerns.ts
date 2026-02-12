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
      "Belly contour frustration is one of the most common reasons clients contact our Liverpool clinic after routine plateaus.",
  },
  {
    slug: "arm-fat",
    label: "Stubborn Arm Fat",
    supportLink: "/fat-freezing/areas/upper-arms-bingo-wings/",
    localAngle:
      "Arm contour concerns are often linked to confidence and silhouette balance rather than broad weight goals.",
  },
  {
    slug: "thigh-fat",
    label: "Stubborn Thigh Fat",
    supportLink: "/fat-freezing/areas/inner-thighs/",
    localAngle:
      "Thigh planning usually requires symmetry-focused assessment and clear milestone tracking.",
  },
  {
    slug: "post-weight-loss-shape",
    label: "Post Weight-Loss Shape",
    supportLink: "/fat-freezing/areas/bra-back-fat/",
    localAngle:
      "After weight changes, localised pockets can remain and create a mismatch between effort and visible shape.",
  },
  {
    slug: "love-handles",
    label: "Love Handles",
    supportLink: "/fat-freezing/areas/flanks-love-handles/",
    localAngle:
      "Flank concerns often need zone-specific planning rather than general body-shape advice.",
  },
  {
    slug: "double-chin-fat",
    label: "Double Chin Fat",
    supportLink: "/fat-freezing/areas/double-chin/",
    localAngle:
      "Under-chin concerns are usually addressed with conservative planning and realistic timeline guidance.",
  },
] as const;

export const concernPages: ConcernPage[] = rawConcerns.map((concern) => {
  const topic = concern.label.toLowerCase();
  return {
    slug: concern.slug,
    path: `/concerns/${concern.slug}/`,
    title: `${concern.label} | Liverpool Clinic`,
    metaTitle: `${concern.label} | Liverpool Clinic`,
    metaDescription: `Practical support for ${topic} in Liverpool, including suitability checks, realistic timelines, and consultation next steps.`,
    heroTitle: `${concern.label} in Liverpool`,
    heroIntro:
      "A clear route from concern to action, with practical expectations and next-step guidance.",
    sections: buildSupportSections({
      topic,
      liverpoolAngle: concern.localAngle,
      candidateProfile:
        "Suitability checks cover anatomy, previous treatment history, and whether non-invasive contour treatment is appropriate for this concern.",
      treatmentPlan:
        "Planning prioritises realistic milestones, sensible sequencing, and review-led decision points.",
      aftercare:
        "Aftercare advice is tailored so you can monitor progress confidently and know when to check in.",
      expectations:
        "Expectation setting includes likely pace, response variability, and when additional sessions may be discussed.",
      internalSupportLinkLabel: concern.supportLink,
    }),
    faqs: buildSupportFaqs(topic),
  };
});

export function getConcernBySlug(slug: string) {
  return concernPages.find((concern) => concern.slug === slug);
}
