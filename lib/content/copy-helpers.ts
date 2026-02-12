import type { ContentSection, FaqItem } from "@/lib/content/types";

const mandatorySafetyCopy =
  "This is not a weight-loss treatment. Results vary by individual. Suitability is confirmed during consultation.";

export function getMandatorySafetyCopy() {
  return mandatorySafetyCopy;
}

function toSentence(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

export function buildSupportSections(input: {
  topic: string;
  liverpoolAngle: string;
  candidateProfile: string;
  treatmentPlan: string;
  aftercare: string;
  expectations: string;
  internalSupportLinkLabel: string;
}): ContentSection[] {
  return [
    {
      heading: `Understanding ${input.topic} in Liverpool`,
      paragraphs: [
        `${toSentence(input.liverpoolAngle)} Many people reach this page after trying consistent gym and nutrition habits but still noticing one area that does not shift in the way they expected.`,
        `Our approach is consultation-led. We focus on your shape goals, your timeline, and your day-to-day routine so recommendations are practical as well as clinically responsible.`,
      ],
    },
    {
      heading: "How suitability is checked",
      paragraphs: [
        toSentence(input.candidateProfile),
        "We also discuss your expected timeline so you can decide with clear information before committing to a plan.",
      ],
      bullets: [
        "One-to-one consultation before treatment",
        "Area-specific suitability assessment",
        "Clear explanation of what is realistic",
        "Written next-step plan after review",
      ],
    },
    {
      heading: "How treatment planning works",
      paragraphs: [
        toSentence(input.treatmentPlan),
        "If more than one area is being considered, we stage treatment in a sensible order so progress can be reviewed without confusion.",
      ],
    },
    {
      heading: "What to expect after treatment",
      paragraphs: [
        toSentence(input.expectations),
        "Most people prefer a simple progress framework: early check-in, mid-point review, and a follow-up decision on whether further sessions are worth doing.",
      ],
    },
    {
      heading: "Aftercare and follow-up",
      paragraphs: [
        toSentence(input.aftercare),
        "You will always know when to contact the clinic and what to do if you have questions between appointments.",
      ],
    },
    {
      heading: "Recommended next step",
      paragraphs: [
        `Use ${input.internalSupportLinkLabel} alongside our main fat freezing service page, then book your consultation when you are ready.`,
        mandatorySafetyCopy,
      ],
    },
  ];
}

export function buildSupportFaqs(topic: string): FaqItem[] {
  return buildFaqSet(topic, "Liverpool");
}

export function buildCommercialSections(input: {
  topic: string;
  liverpoolIntent: string;
  planningFocus: string;
  scienceFocus: string;
  clinicalFlow: string;
  timelineFocus: string;
  pricingFocus: string;
  riskFocus: string;
  complementFocus: string;
  bookingFocus: string;
}): ContentSection[] {
  return [
    {
      heading: `What to know about ${input.topic}`,
      paragraphs: [toSentence(input.liverpoolIntent), toSentence(input.planningFocus)],
    },
    {
      heading: "How the treatment works",
      paragraphs: [toSentence(input.scienceFocus), toSentence(input.clinicalFlow)],
    },
    {
      heading: "Results and timeline",
      paragraphs: [toSentence(input.timelineFocus), mandatorySafetyCopy],
    },
    {
      heading: "Cost and treatment planning",
      paragraphs: [toSentence(input.pricingFocus), toSentence(input.bookingFocus)],
    },
    {
      heading: "Safety and treatment boundaries",
      paragraphs: [
        toSentence(input.riskFocus),
        "We use the term FDA-cleared where relevant and avoid exaggerated claims.",
      ],
    },
    {
      heading: "Optional combination options",
      paragraphs: [toSentence(input.complementFocus)],
    },
  ];
}

export function buildFaqSet(topic: string, location = "Liverpool"): FaqItem[] {
  const topicLabel = topic.toLowerCase();
  return [
    {
      question: `What is ${topicLabel}?`,
      answer:
        "It is a consultation-led treatment conversation focused on localised contour goals and realistic planning.",
    },
    {
      question: `Is ${topicLabel} right for everyone?`,
      answer:
        "No. Suitability depends on your medical history, treatment area, and goals. A consultation is required first.",
    },
    {
      question: `How quickly can I see changes with ${topicLabel}?`,
      answer:
        "Most people see gradual change over several weeks rather than immediate final results.",
    },
    {
      question: `Can I return to normal activity after ${topicLabel}?`,
      answer:
        "Most clients resume normal routines quickly, but your practitioner will give tailored aftercare guidance.",
    },
    {
      question: `Does ${topicLabel} feel uncomfortable?`,
      answer:
        "Experiences vary by person and area treated. Your practitioner explains expected sensations before treatment.",
    },
    {
      question: `How many ${topicLabel} sessions might I need?`,
      answer:
        "That depends on your area, goal, and response. Session planning is confirmed during consultation and review.",
    },
    {
      question: `Do you offer same-day ${topicLabel} treatment?`,
      answer:
        "Same-day treatment may be available subject to clinical suitability and appointment availability.",
    },
    {
      question: `Do you provide ${topicLabel} for clients across ${location}?`,
      answer:
        "Yes. We welcome clients from across Liverpool and surrounding areas, with appointment times available seven days a week.",
    },
    {
      question: `What should I ask during consultation about ${topicLabel}?`,
      answer:
        "Ask about suitability, expected timeline, likely session plan, cost, aftercare, and follow-up checkpoints.",
    },
    {
      question: `Is ${topicLabel} a weight-loss treatment?`,
      answer: "No. This is not a weight-loss treatment.",
    },
    {
      question: `Are ${topicLabel} results guaranteed?`,
      answer: "No. Results vary by individual.",
    },
    {
      question: `How is suitability for ${topicLabel} confirmed?`,
      answer: "Suitability is confirmed during consultation.",
    },
    {
      question: `Can ${topicLabel} be combined with other treatments?`,
      answer:
        "In some cases, yes. Combination options are discussed only when they are clinically appropriate for your plan.",
    },
    {
      question: `What if I am not suitable for ${topicLabel}?`,
      answer:
        "Your practitioner will explain why and suggest safer alternatives or a later review where appropriate.",
    },
    {
      question: `How do I book ${topicLabel}?`,
      answer:
        "Use the booking page to choose your preferred date and time, then submit your details for confirmation.",
    },
  ];
}

export function buildArticleFaqSet(articleTitle: string): FaqItem[] {
  const topic = articleTitle.toLowerCase();
  return [
    {
      question: `How does this guide help with ${topic}?`,
      answer:
        "It gives practical, plain-English context so you can decide your next step with less uncertainty.",
    },
    {
      question: `Is ${topic} relevant to my consultation?`,
      answer:
        "Usually yes if it matches your concern. Consultation confirms whether this topic applies directly to your plan.",
    },
    {
      question: `What should I do after reading this ${topic} article?`,
      answer:
        "Review the service page, check pricing, and book a consultation if you want personalised guidance.",
    },
    {
      question: `Does this ${topic} article replace a clinical assessment?`,
      answer:
        "No. It is educational only. Suitability is confirmed during consultation.",
    },
    {
      question: `Can I book directly after reading about ${topic}?`,
      answer:
        "Yes. Use the Book page to request your consultation slot.",
    },
    {
      question: `Will everyone get the same outcome from ${topic}?`,
      answer:
        "No. Results vary by individual.",
    },
    {
      question: `How long does ${topic} take to show progress?`,
      answer:
        "Most progress is gradual and assessed over planned follow-up windows.",
    },
    {
      question: `Can ${topic} replace weight management?`,
      answer:
        "No. This is not a weight-loss treatment.",
    },
    {
      question: `Should I ask about price when discussing ${topic}?`,
      answer:
        "Yes. We encourage clear pricing conversations before finalising your plan.",
    },
    {
      question: `What details should I prepare before a ${topic} appointment?`,
      answer:
        "Bring your target area, timeline, and any previous treatment history so planning is faster and clearer.",
    },
    {
      question: `Is same-day ${topic} treatment possible?`,
      answer:
        "Same-day treatment may be available subject to clinical suitability and schedule.",
    },
    {
      question: `What if I still have questions about ${topic} after reading?`,
      answer:
        "Use the contact page or chatbot to ask for guidance, then book consultation for individual advice.",
    },
    {
      question: `Do I need to choose an area before booking for ${topic}?`,
      answer:
        "It helps, but you can book a general consultation if you are unsure which area to prioritise.",
    },
    {
      question: `Why does this ${topic} article include safety wording?`,
      answer:
        "Because medically responsible information should always be clear about limits and suitability.",
    },
    {
      question: `What is the fastest next step after reading about ${topic}?`,
      answer:
        "Book consultation and discuss your goals directly with the clinic team.",
    },
  ];
}
