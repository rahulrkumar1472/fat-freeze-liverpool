import { buildArticleFaqSet, getMandatorySafetyCopy } from "@/lib/content/copy-helpers";
import { supportAnchors } from "@/lib/site-config";
import type { ContentSection, FaqItem } from "@/lib/content/types";

export type ArticleCategory =
  | "Area-specific fat freezing"
  | "Concerns and candidate intent"
  | "How it works, science, and safety"
  | "Liverpool local intent"
  | "Combination protocols and comparisons";

export type Article = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: ArticleCategory;
  categoryLabel: string;
  clusterId: "A" | "B" | "C" | "D" | "E";
  focusTerm: string;
  localAngle: string;
  supportLink: string;
  supportLinkLabel: string;
  anchorVariant: (typeof supportAnchors)[number];
};

const categoryLabels: Record<ArticleCategory, string> = {
  "Area-specific fat freezing": "Body Areas",
  "Concerns and candidate intent": "Common Concerns",
  "How it works, science, and safety": "Science & Safety",
  "Liverpool local intent": "Liverpool Guides",
  "Combination protocols and comparisons": "Combination Plans",
};

function limitText(input: string, max: number) {
  const trimmed = input.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1).trimEnd()}…`;
}

function toArticleMetaTitle(title: string) {
  return limitText(title, 60);
}

function toArticleMetaDescription(input: string) {
  return limitText(input, 160);
}

const rawArticles: Array<
  Omit<Article, "path" | "metaTitle" | "anchorVariant" | "metaDescription" | "categoryLabel"> & {
    metaDescription?: string;
  }
> = [
  {
    slug: "fat-freezing-abdomen-liverpool",
    title: "Fat Freezing Abdomen Liverpool",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "abdomen fat freezing",
    localAngle:
      "Liverpool clients frequently prioritise the abdomen when they want visible contour change in fitted clothing.",
    supportLink: "/fat-freezing/areas/abdomen/",
    supportLinkLabel: "abdomen fat freezing Liverpool",
  },
  {
    slug: "fat-freezing-love-handles-liverpool",
    title: "Fat Freezing Love Handles Liverpool",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "love handle fat freezing",
    localAngle:
      "Flank contour concerns are common among clients who maintain active routines but still see persistent side-waist volume.",
    supportLink: "/fat-freezing/areas/flanks-love-handles/",
    supportLinkLabel: "flanks and love handles page",
  },
  {
    slug: "fat-freezing-lower-pouch-liverpool",
    title: "Fat Freezing Lower Pouch Liverpool",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "lower pouch fat freezing",
    localAngle:
      "Lower pouch concerns are often tied to shape confidence and require realistic planning rather than broad weight-loss messaging.",
    supportLink: "/fat-freezing/areas/lower-stomach-pouch/",
    supportLinkLabel: "lower stomach and pouch guidance",
  },
  {
    slug: "fat-freezing-bra-back-liverpool",
    title: "Fat Freezing Bra Back Liverpool",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "bra back fat freezing",
    localAngle:
      "Bra back contour changes can help improve upper-body silhouette for clients with persistent localised fat pockets.",
    supportLink: "/fat-freezing/areas/bra-back-fat/",
    supportLinkLabel: "bra back fat freezing page",
  },
  {
    slug: "fat-freezing-inner-thighs-liverpool",
    title: "Fat Freezing Inner Thighs Liverpool",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "inner thigh fat freezing",
    localAngle:
      "Inner thigh planning often focuses on symmetry, comfort, and realistic contour milestones.",
    supportLink: "/fat-freezing/areas/inner-thighs/",
    supportLinkLabel: "inner thigh treatment information",
  },
  {
    slug: "fat-freezing-outer-thighs-liverpool",
    title: "Fat Freezing Outer Thighs Liverpool",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "outer thigh fat freezing",
    localAngle:
      "Outer thigh shape concerns can require careful applicator strategy to preserve balanced contour lines.",
    supportLink: "/fat-freezing/areas/outer-thighs/",
    supportLinkLabel: "outer thigh treatment information",
  },
  {
    slug: "fat-freezing-bingo-wings-liverpool",
    title: "Fat Freezing Bingo Wings Liverpool",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "upper arm fat freezing",
    localAngle:
      "Upper arm contour goals are popular among clients seeking non-surgical options with no theatre recovery time.",
    supportLink: "/fat-freezing/areas/upper-arms-bingo-wings/",
    supportLinkLabel: "upper arms and bingo wings support page",
  },
  {
    slug: "fat-freezing-double-chin-liverpool",
    title: "Fat Freezing Double Chin Liverpool",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "double chin fat freezing",
    localAngle:
      "Submental contour is often a high-priority area for clients wanting sharper jawline definition.",
    supportLink: "/fat-freezing/areas/double-chin/",
    supportLinkLabel: "double chin fat freezing guidance",
  },
  {
    slug: "why-stubborn-fat-stores-differently-by-body-area",
    title: "Why Stubborn Fat Stores Differently By Body Area",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "stubborn fat distribution",
    localAngle:
      "Different body zones in Liverpool clients can respond differently to lifestyle and contour treatments due to tissue profile variation.",
    supportLink: "/concerns/stubborn-belly-fat/",
    supportLinkLabel: "stubborn belly fat concern page",
  },
  {
    slug: "which-body-areas-respond-best-to-cryolipolysis",
    title: "Which Body Areas Respond Best To Cryolipolysis",
    category: "Area-specific fat freezing",
    clusterId: "A",
    focusTerm: "cryolipolysis response by area",
    localAngle:
      "Understanding area-by-area response helps Liverpool clients choose practical priorities for first-stage treatment.",
    supportLink: "/fat-freezing/areas-we-treat/",
    supportLinkLabel: "areas we treat hub",
  },
  {
    slug: "stubborn-belly-fat-treatment-options-liverpool",
    title: "Stubborn Belly Fat Treatment Options Liverpool",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "stubborn belly fat options",
    localAngle:
      "Belly contour frustration remains one of the most frequent reasons people in Liverpool seek consultation.",
    supportLink: "/concerns/stubborn-belly-fat/",
    supportLinkLabel: "stubborn belly fat in Liverpool",
  },
  {
    slug: "stubborn-arm-fat-what-works-liverpool",
    title: "Stubborn Arm Fat: What Works Liverpool",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "stubborn arm fat solutions",
    localAngle:
      "Arm contour concerns often involve confidence, clothing fit, and balanced silhouette goals.",
    supportLink: "/concerns/arm-fat/",
    supportLinkLabel: "stubborn arm fat concern page",
  },
  {
    slug: "stubborn-thigh-fat-solutions-liverpool",
    title: "Stubborn Thigh Fat Solutions Liverpool",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "stubborn thigh fat solutions",
    localAngle:
      "Thigh contour planning benefits from careful symmetry and expectation management.",
    supportLink: "/concerns/thigh-fat/",
    supportLinkLabel: "stubborn thigh fat concern page",
  },
  {
    slug: "post-weight-loss-stubborn-fat-what-next",
    title: "Post Weight-Loss Stubborn Fat: What Next",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "post weight-loss stubborn fat",
    localAngle:
      "After weight reduction, localised fat can remain uneven and frustrating despite sustained effort.",
    supportLink: "/concerns/post-weight-loss-shape/",
    supportLinkLabel: "post weight-loss stubborn fat concern page",
  },
  {
    slug: "love-handles-wont-go-away-what-can-help",
    title: "Love Handles Won't Go Away: What Can Help",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "love handles treatment planning",
    localAngle:
      "Persistent flank fat often needs zone-specific planning rather than generic advice.",
    supportLink: "/concerns/love-handles/",
    supportLinkLabel: "love handles concern page",
  },
  {
    slug: "lower-pouch-fat-after-diet-and-exercise",
    title: "Lower Pouch Fat After Diet and Exercise",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "lower pouch fat after plateau",
    localAngle:
      "Lower pouch concerns are common when people have already improved broader fitness habits.",
    supportLink: "/concerns/stubborn-belly-fat/",
    supportLinkLabel: "lower pouch fat concern page",
  },
  {
    slug: "spot-fat-reduction-myths-vs-reality",
    title: "Spot Fat Reduction: Myths vs Reality",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "spot fat reduction myths",
    localAngle:
      "Many Liverpool consultations start after clients realise localised fat behaves differently from overall weight trends.",
    supportLink: "/fat-freezing/how-it-works/",
    supportLinkLabel: "how fat freezing works guide",
  },
  {
    slug: "am-i-suitable-for-fat-freezing-liverpool",
    title: "Am I Suitable For Fat Freezing Liverpool",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "fat freezing suitability",
    localAngle:
      "Suitability decisions are a major concern for first-time clients comparing non-invasive options.",
    supportLink: "/book/",
    supportLinkLabel: "book consultation page",
  },
  {
    slug: "when-fat-freezing-may-not-be-suitable",
    title: "When Fat Freezing May Not Be Suitable",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "fat freezing contraindications",
    localAngle:
      "Transparent unsuitable-case discussion helps clients make safer decisions and avoid wasted appointments.",
    supportLink: "/medical-disclaimer/",
    supportLinkLabel: "medical disclaimer",
  },
  {
    slug: "fat-freezing-consultation-questions-to-ask",
    title: "Fat Freezing Consultation Questions To Ask",
    category: "Concerns and candidate intent",
    clusterId: "B",
    focusTerm: "consultation questions",
    localAngle:
      "Prepared questions improve the quality of first consultations and reduce uncertainty.",
    supportLink: "/faq/",
    supportLinkLabel: "fat freezing FAQ",
  },
  {
    slug: "what-is-cryolipolysis-how-it-works",
    title: "What Is Cryolipolysis and How It Works",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "what is cryolipolysis",
    localAngle:
      "Science clarity is critical for Liverpool clients who prefer evidence over marketing claims.",
    supportLink: "/fat-freezing/how-it-works/",
    supportLinkLabel: "how it works page",
  },
  {
    slug: "how-fat-cells-are-processed-after-treatment",
    title: "How Fat Cells Are Processed After Treatment",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "post-treatment fat cell processing",
    localAngle:
      "Understanding post-treatment biology helps clients interpret early weeks without unnecessary concern.",
    supportLink: "/fat-freezing/results-timeline/",
    supportLinkLabel: "results expectation page",
  },
  {
    slug: "fat-freezing-timeline-week-by-week",
    title: "Fat Freezing Timeline Week By Week",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "fat freezing timeline",
    localAngle:
      "Week-by-week expectation clarity can improve client confidence and adherence.",
    supportLink: "/fat-freezing/results-timeline/",
    supportLinkLabel: "results timeline guide",
  },
  {
    slug: "fat-freezing-side-effects-and-recovery",
    title: "Fat Freezing Side Effects and Recovery",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "fat freezing side effects",
    localAngle:
      "Liverpool clients commonly ask what sensations are expected and when to contact the clinic.",
    supportLink: "/medical-disclaimer/",
    supportLinkLabel: "medical disclaimer page",
  },
  {
    slug: "fda-cleared-fat-freezing-what-it-means",
    title: "FDA-Cleared Fat Freezing: What It Means",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "FDA-cleared fat freezing",
    localAngle:
      "Accurate terminology protects trust and prevents confusing regulatory claims.",
    supportLink: "/faq/",
    supportLinkLabel: "FAQ safety section",
  },
  {
    slug: "fat-freezing-vs-weight-loss-whats-the-difference",
    title: "Fat Freezing vs Weight Loss: What's The Difference",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "fat freezing vs weight loss",
    localAngle:
      "Distinguishing contour outcomes from weight metrics is essential for realistic planning.",
    supportLink: "/fat-freezing-liverpool/",
    supportLinkLabel: "primary fat freezing service page",
  },
  {
    slug: "how-many-sessions-of-fat-freezing-do-i-need",
    title: "How Many Sessions Of Fat Freezing Do I Need",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "fat freezing session planning",
    localAngle:
      "Session count questions are best answered through area-specific consultation rather than fixed online numbers.",
    supportLink: "/pricing/",
    supportLinkLabel: "pricing and planning page",
  },
  {
    slug: "realistic-fat-freezing-results-and-expectations",
    title: "Realistic Fat Freezing Results and Expectations",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "realistic fat freezing results",
    localAngle:
      "Expectation alignment is the strongest predictor of treatment satisfaction.",
    supportLink: "/fat-freezing/results-timeline/",
    supportLinkLabel: "results expectations page",
  },
  {
    slug: "fat-freezing-aftercare-best-practices",
    title: "Fat Freezing Aftercare Best Practices",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "fat freezing aftercare",
    localAngle:
      "Strong aftercare habits support confidence and consistent follow-up communication.",
    supportLink: "/fat-freezing/how-it-works/",
    supportLinkLabel: "how-it-works and aftercare guidance",
  },
  {
    slug: "common-fat-freezing-mistakes-to-avoid",
    title: "Common Fat Freezing Mistakes To Avoid",
    category: "How it works, science, and safety",
    clusterId: "C",
    focusTerm: "fat freezing mistakes",
    localAngle:
      "Most avoidable issues come from poor expectation setting and weak treatment planning.",
    supportLink: "/book/",
    supportLinkLabel: "book consultation checklist",
  },
  {
    slug: "fat-freezing-liverpool-city-centre-guide",
    title: "Fat Freezing Liverpool City Centre Guide",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "fat freezing Liverpool city centre",
    localAngle:
      "City-centre clients often prioritise accessibility, schedule fit, and clear communication.",
    supportLink: "/contact/",
    supportLinkLabel: "contact and location page",
  },
  {
    slug: "best-fat-freezing-consultation-in-liverpool-what-to-look-for",
    title: "Best Fat Freezing Consultation In Liverpool: What To Look For",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "best fat freezing consultation Liverpool",
    localAngle:
      "Consultation quality is the strongest practical differentiator between providers.",
    supportLink: "/book/",
    supportLinkLabel: "consultation booking page",
  },
  {
    slug: "fat-freezing-cost-liverpool-explained",
    title: "Fat Freezing Cost Liverpool Explained",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "fat freezing cost Liverpool",
    localAngle:
      "Local cost comparisons should consider protocol quality, not headline price alone.",
    supportLink: "/pricing/",
    supportLinkLabel: "pricing page",
  },
  {
    slug: "choosing-a-fat-freezing-clinic-in-liverpool",
    title: "Choosing A Fat Freezing Clinic In Liverpool",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "choose fat freezing clinic Liverpool",
    localAngle:
      "Liverpool clients should compare providers based on clinical process and communication standards.",
    supportLink: "/about/",
    supportLinkLabel: "about and standards page",
  },
  {
    slug: "fat-freeze-near-me-liverpool-what-matters-most",
    title: "Fat Freeze Near Me Liverpool: What Matters Most",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "fat freeze near me Liverpool",
    localAngle:
      "Near-me intent often signals high booking readiness when trust markers are present.",
    supportLink: "/contact/",
    supportLinkLabel: "clinic contact page",
  },
  {
    slug: "non-surgical-body-contouring-liverpool",
    title: "Non-Surgical Body Contouring Liverpool",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "non-surgical body contouring Liverpool",
    localAngle:
      "Non-surgical pathways attract clients who want reduced disruption and realistic progression.",
    supportLink: "/fat-freezing-liverpool/",
    supportLinkLabel: "fat freezing service page",
  },
  {
    slug: "book-fat-freezing-liverpool-what-to-expect-first-visit",
    title: "Book Fat Freezing Liverpool: What To Expect First Visit",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "book fat freezing Liverpool",
    localAngle:
      "First-visit confidence increases when clients know exactly what consultation includes.",
    supportLink: "/book/",
    supportLinkLabel: "book consultation guide",
  },
  {
    slug: "liverpool-fat-freezing-before-and-after-guide",
    title: "Liverpool Fat Freezing Before and After Guide",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "Liverpool fat freezing before and after",
    localAngle:
      "Before-and-after interpretation is strongest when anchored to timeline and baseline context.",
    supportLink: "/fat-freezing/results-timeline/",
    supportLinkLabel: "results page",
  },
  {
    slug: "how-to-compare-fat-freezing-providers-in-liverpool",
    title: "How To Compare Fat Freezing Providers In Liverpool",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "compare fat freezing providers Liverpool",
    localAngle:
      "Provider comparison should focus on suitability process, transparency, and follow-up structure.",
    supportLink: "/about/",
    supportLinkLabel: "clinic standards page",
  },
  {
    slug: "fat-freezing-liverpool-faq-for-first-time-clients",
    title: "Fat Freezing Liverpool FAQ For First-Time Clients",
    category: "Liverpool local intent",
    clusterId: "D",
    focusTerm: "fat freezing Liverpool FAQ",
    localAngle:
      "First-time clients typically need clarity on suitability, timing, and expected milestones.",
    supportLink: "/faq/",
    supportLinkLabel: "FAQ page",
  },
  {
    slug: "fat-freezing-and-ultrasound-cavitation-combined",
    title: "Fat Freezing and Ultrasound Cavitation Combined",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "fat freezing and ultrasound cavitation",
    localAngle:
      "Combination protocol questions are common once clients understand primary fat freezing options.",
    supportLink: "/fat-freezing-liverpool/",
    supportLinkLabel: "primary fat freezing page",
  },
  {
    slug: "fat-freezing-and-radio-frequency-for-skin-tightening",
    title: "Fat Freezing and Radio Frequency For Skin Tightening",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "fat freezing and radio frequency",
    localAngle:
      "Some clients ask whether radio frequency should follow contour-focused sessions for finish quality.",
    supportLink: "/articles/when-to-add-radio-frequency-after-fat-freezing/",
    supportLinkLabel: "radio frequency timing guide",
  },
  {
    slug: "when-to-add-radio-frequency-after-fat-freezing",
    title: "When To Add Radio Frequency After Fat Freezing",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "when to add radio frequency",
    localAngle:
      "Timing decisions are important to avoid unnecessary overlap and preserve protocol clarity.",
    supportLink: "/fat-freezing-liverpool/",
    supportLinkLabel: "fat freezing service page",
  },
  {
    slug: "body-contouring-combination-plans-liverpool",
    title: "Body Contouring Combination Plans Liverpool",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "body contouring combination plans",
    localAngle:
      "Liverpool clients comparing options often need a staged framework rather than isolated treatment descriptions.",
    supportLink: "/book/",
    supportLinkLabel: "consultation page",
  },
  {
    slug: "fat-freezing-vs-ultrasound-cavitation",
    title: "Fat Freezing vs Ultrasound Cavitation",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "fat freezing vs ultrasound cavitation",
    localAngle:
      "Comparison intent is high when clients are close to booking and need method-level clarity.",
    supportLink: "/articles/fat-freezing-and-ultrasound-cavitation-combined/",
    supportLinkLabel: "combined protocol article",
  },
  {
    slug: "fat-freezing-vs-radio-frequency-for-shape-and-tightness",
    title: "Fat Freezing vs Radio Frequency For Shape and Tightness",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "fat freezing vs radio frequency",
    localAngle:
      "Different modalities target different outcomes, so comparing intent is more useful than comparing hype.",
    supportLink: "/articles/fat-freezing-and-radio-frequency-for-skin-tightening/",
    supportLinkLabel: "radio frequency combination article",
  },
  {
    slug: "can-combination-treatments-improve-outcomes",
    title: "Can Combination Treatments Improve Outcomes",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "combination treatment outcomes",
    localAngle:
      "Combination pathways can help selected clients, but only when sequencing is clinically justified.",
    supportLink: "/fat-freezing/how-it-works/",
    supportLinkLabel: "how-it-works page",
  },
  {
    slug: "double-chin-fat-freezing-with-combination-approach",
    title: "Double Chin Fat Freezing With Combination Approach",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "double chin combination approach",
    localAngle:
      "Submental plans may include supportive modalities depending on tissue profile and objective.",
    supportLink: "/fat-freezing/areas/double-chin/",
    supportLinkLabel: "double chin area page",
  },
  {
    slug: "abdomen-fat-reduction-combination-options",
    title: "Abdomen Fat Reduction Combination Options",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "abdomen combination options",
    localAngle:
      "Abdomen-focused clients often ask whether adding secondary modalities improves final contour quality.",
    supportLink: "/fat-freezing/areas/abdomen/",
    supportLinkLabel: "abdomen area page",
  },
  {
    slug: "personalised-body-contouring-plan-liverpool",
    title: "Personalised Body Contouring Plan Liverpool",
    category: "Combination protocols and comparisons",
    clusterId: "E",
    focusTerm: "personalised body contouring plan",
    localAngle:
      "The strongest outcomes usually come from phased planning and clear review checkpoints.",
    supportLink: "/book/",
    supportLinkLabel: "consultation booking page",
  },
];

export const articleCategories: ArticleCategory[] = [
  "Area-specific fat freezing",
  "Concerns and candidate intent",
  "How it works, science, and safety",
  "Liverpool local intent",
  "Combination protocols and comparisons",
];

export const articles: Article[] = rawArticles.map((article, index) => ({
  ...article,
  path: `/articles/${article.slug}/`,
  metaTitle: toArticleMetaTitle(article.title),
  metaDescription: toArticleMetaDescription(
    article.metaDescription ??
      `${article.title}. Liverpool guide covering suitability, timeline, pricing context, and when to book.`,
  ),
  categoryLabel: categoryLabels[article.category],
  anchorVariant: supportAnchors[index % supportAnchors.length],
}));

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory) {
  return articles.filter((article) => article.category === category);
}

export function buildArticleSections(article: Article): ContentSection[] {
  const isCombination = article.clusterId === "E";
  const isScience = article.clusterId === "C";
  const isLocal = article.clusterId === "D";
  const safety = getMandatorySafetyCopy();

  return [
    {
      heading: `${article.title}: what this guide covers`,
      paragraphs: [
        `${article.localAngle} This page is written to help you make a practical decision, not to overwhelm you with technical language.`,
        `If this topic matches your concern, the most useful next step is a consultation where your area, timeline, and suitability can be reviewed properly.`,
      ],
    },
    {
      heading: "Who this is most relevant for",
      paragraphs: [
        "This article is most useful for people who already have a specific area or concern in mind and want clear next steps before booking.",
        "If you are still deciding between treatments, use this guide to prepare your questions so consultation time is focused and productive.",
      ],
      bullets: [
        "Clarify your priority area",
        "Set a realistic timeline",
        "Understand likely treatment stages",
        "Know what to ask before booking",
      ],
    },
    {
      heading: isScience
        ? "Science explained in plain English"
        : "How treatment planning is usually approached",
      paragraphs: [
        isScience
          ? "Cryolipolysis uses controlled cooling in selected areas. It is non-surgical and designed for localised contour goals."
          : "Good planning is area-specific. Your practitioner should explain what is possible, what may take longer, and what follow-up will look like.",
        safety,
      ],
    },
    {
      heading: "Timeline and expectations",
      paragraphs: [
        "Changes are usually gradual. Most people see progress over weeks, not overnight.",
        "Review appointments help keep decisions clear and show whether your plan should continue as-is or be adjusted.",
      ],
    },
    {
      heading: isCombination
        ? "When combination options are discussed"
        : "How this topic connects to your full treatment plan",
      paragraphs: [
        isCombination
          ? "Combination plans can be useful in selected cases. They are considered only when they genuinely improve your outcome plan."
          : "This topic is one part of a bigger journey that usually includes consultation, treatment planning, and staged follow-up.",
        "If multiple options are on the table, sequencing matters. Your practitioner should explain which step comes first and why.",
      ],
    },
    {
      heading: isLocal
        ? "Liverpool practical factors to consider"
        : "Questions worth asking before you commit",
      paragraphs: [
        isLocal
          ? "Travel time, appointment availability, and communication style all matter. Choose a clinic that explains your plan clearly and consistently."
          : "Ask what suitability checks are done, what timeline is realistic, and how progress is reviewed after treatment.",
        "You should always leave consultation knowing your next step, not guessing what happens next.",
      ],
    },
    {
      heading: "Next step after reading",
      paragraphs: [
        "Review the service page for full treatment detail, check pricing, and then book your consultation.",
        "Bring your key questions with you so your practitioner can build a plan that fits your goals and schedule.",
      ],
    },
  ];
}

export function buildArticleFaqs(article: Article): FaqItem[] {
  return buildArticleFaqSet(article.title);
}
