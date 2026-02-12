import { buildFaqSet, getMandatorySafetyCopy } from "@/lib/content/copy-helpers";
import type { ContentSection, FaqItem } from "@/lib/content/types";

export type StaticPageContent = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  sections: ContentSection[];
  faqs?: FaqItem[];
};

const safetyCopy = getMandatorySafetyCopy();

const homeFaqs = buildFaqSet("fat freezing consultation", "Liverpool");
const serviceFaqs = buildFaqSet("fat freezing treatment planning", "Liverpool");
const howFaqs = buildFaqSet("how fat freezing works", "Liverpool");
const resultsFaqs = buildFaqSet("fat freezing results timeline", "Liverpool");
const pricingFaqs = buildFaqSet("fat freezing pricing", "Liverpool");
const bookFaqs = buildFaqSet("booking a fat freezing consultation", "Liverpool");
const aboutFaqs = buildFaqSet("clinic standards and practitioner care", "Liverpool");
const contactFaqs = buildFaqSet("contacting the clinic", "Liverpool");

export const corePages: Record<string, StaticPageContent> = {
  "/": {
    path: "/",
    title: "Fat Freezing Liverpool",
    metaTitle: "Fat Freezing Liverpool | Cryolipolysis Clinic",
    metaDescription:
      "Premium Liverpool clinic for consultation-led fat freezing. Learn how it works, view prices, and book your appointment online.",
    heroTitle: "Fat Freezing Liverpool",
    heroIntro:
      "Consultation-led cryolipolysis in Liverpool with clear planning, premium care, and a straightforward route to booking.",
    sections: [
      {
        heading: "A clear start for first-time clients",
        paragraphs: [
          "If you are new to fat freezing, start with a consultation and a focused plan. We explain what is realistic for your target area and what your timeline might look like.",
          "You do not need to guess your next step. Use the service page for treatment detail, pricing for package options, and the booking page to secure your preferred appointment.",
        ],
      },
      {
        heading: "Who usually books with us",
        paragraphs: [
          "Most clients have already made progress with training and nutrition but still feel one or two areas are out of proportion.",
          "Our role is to assess whether non-invasive treatment is suitable and to guide you with practical, medically responsible recommendations.",
        ],
      },
      {
        heading: "How your journey is structured",
        paragraphs: [
          "Step one is consultation. Step two is a tailored treatment plan. Step three is review and progress tracking so next decisions are based on evidence, not guesswork.",
          safetyCopy,
        ],
      },
      {
        heading: "Fast pathways to the information you need",
        paragraphs: [
          "Use Areas We Treat if you already know your priority zone. Use How It Works if you want the science in plain English. Use Results if your main question is timing.",
          "When you are ready, go straight to Book and choose a date and time that suits you.",
        ],
      },
    ],
    faqs: homeFaqs,
  },
  "/fat-freezing-liverpool/": {
    path: "/fat-freezing-liverpool/",
    title: "Fat Freezing Liverpool",
    metaTitle: "Fat Freezing in Liverpool | Consultation-Led Care",
    metaDescription:
      "Everything you need to know about fat freezing in Liverpool, including suitability, treatment areas, timeline, pricing, and booking.",
    heroTitle: "Fat Freezing Liverpool",
    heroIntro:
      "A complete guide to treatment, suitability, results, and consultation booking at Fat Freezing Liverpool.",
    sections: [
      {
        heading: "What fat freezing is",
        paragraphs: [
          "Cryolipolysis and fat freezing describe the same non-invasive approach. It is designed for localised contour goals, not for broad weight reduction.",
          "Treatment starts with consultation so your practitioner can assess your area, goals, and timeline before any session is confirmed.",
        ],
      },
      {
        heading: "Who this treatment is suitable for",
        paragraphs: [
          "Suitable clients are usually close to their preferred shape but want help with areas that remain stubborn.",
          "Suitability depends on your medical history, area profile, and expectations. If treatment is not right for you, we will explain why clearly.",
        ],
      },
      {
        heading: "Areas commonly treated",
        paragraphs: [
          "Common focus areas include abdomen, flanks, lower stomach, thighs, upper arms, and double chin.",
          "Area planning is done in stages where needed, so each decision is measured and easy to review.",
        ],
      },
      {
        heading: "What treatment day looks like",
        paragraphs: [
          "Your practitioner confirms your plan, prepares the area, runs the session, and gives aftercare guidance before you leave.",
          "You also get a clear follow-up timeline so you know when to review progress and what to expect in the first weeks.",
        ],
      },
      {
        heading: "Results and timeline",
        paragraphs: [
          "Changes are usually gradual. Most clients track progress over several weeks rather than expecting immediate final results.",
          "Review appointments help decide whether further sessions are needed.",
        ],
      },
      {
        heading: "Safety and realistic expectations",
        paragraphs: [
          "We use medically responsible wording and conservative claims. Where relevant, we use the term FDA-cleared.",
          safetyCopy,
        ],
      },
      {
        heading: "Optional combination planning",
        paragraphs: [
          "Some clients discuss adding ultrasound cavitation or radio frequency. These are considered only when they support a clear treatment objective.",
          "Your primary plan remains fat freezing, with optional extras introduced only if they add genuine value.",
        ],
      },
      {
        heading: "How to get started",
        paragraphs: [
          "Book your consultation online, choose your preferred date and time, and share your main concern area.",
          "Same-day treatment may be available subject to clinical suitability and schedule.",
        ],
      },
    ],
    faqs: serviceFaqs,
  },
  "/fat-freezing/how-it-works/": {
    path: "/fat-freezing/how-it-works/",
    title: "How Fat Freezing Works",
    metaTitle: "How Fat Freezing Works | Fat Freezing Liverpool",
    metaDescription:
      "Plain-English guide to how cryolipolysis works, what you may feel, how follow-up works, and what to expect after treatment.",
    heroTitle: "How Fat Freezing Works",
    heroIntro:
      "A step-by-step explanation of treatment, recovery, and review in clear, practical language.",
    sections: [
      {
        heading: "The treatment in plain English",
        paragraphs: [
          "Fat freezing uses controlled cooling on a selected area. The process is non-surgical and designed for localised contour goals.",
          "Your practitioner chooses settings and placement based on your consultation outcome.",
        ],
      },
      {
        heading: "What you may feel during treatment",
        paragraphs: [
          "Most clients describe pressure and cooling sensations at the start. Experiences vary by area and by person.",
          "Your team explains expected sensations before treatment so there are no surprises.",
        ],
      },
      {
        heading: "Aftercare and day-to-day activity",
        paragraphs: [
          "Most clients return to usual routines quickly. You receive tailored aftercare guidance before leaving the clinic.",
          "If anything feels unusual, we tell you exactly how and when to contact us.",
        ],
      },
      {
        heading: "Why follow-up matters",
        paragraphs: [
          "Progress is checked over time, not judged in the first few days.",
          "Follow-up helps decide whether your current plan is complete or whether additional sessions may be useful.",
        ],
      },
      {
        heading: "Treatment boundaries",
        paragraphs: [
          "We do not use exaggerated promises. We explain likely outcomes based on your own profile.",
          safetyCopy,
        ],
      },
    ],
    faqs: howFaqs,
  },
  "/fat-freezing/results-timeline/": {
    path: "/fat-freezing/results-timeline/",
    title: "Fat Freezing Results Timeline",
    metaTitle: "Fat Freezing Results Timeline | Liverpool Clinic",
    metaDescription:
      "Learn what a typical fat freezing timeline can look like, when to review progress, and how to set realistic expectations.",
    heroTitle: "Results & Timeline",
    heroIntro:
      "A realistic view of when changes may appear and how your progress is reviewed.",
    sections: [
      {
        heading: "When changes usually appear",
        paragraphs: [
          "Visible change is typically gradual. Early weeks are often about subtle shifts rather than dramatic change.",
          "Your plan should include review points so progress is measured consistently.",
        ],
      },
      {
        heading: "How to track progress properly",
        paragraphs: [
          "Use staged check-ins rather than daily self-judgement. Consistent photos and fit changes can be more useful than short-term assumptions.",
          "Your practitioner can help you interpret progress in context of your original goals.",
        ],
      },
      {
        heading: "Why results vary",
        paragraphs: [
          "Response can differ by person and by treatment area. This is normal and expected in non-invasive contour work.",
          "Clear expectations at consultation help reduce frustration and improve decision confidence.",
        ],
      },
      {
        heading: "When to discuss next steps",
        paragraphs: [
          "At follow-up, your practitioner reviews progress and confirms whether your current plan is complete or needs adjustment.",
          "Any additional sessions are based on review findings, not guesswork.",
        ],
      },
      {
        heading: "Safety reminder",
        paragraphs: [safetyCopy],
      },
    ],
    faqs: resultsFaqs,
  },
  "/pricing/": {
    path: "/pricing/",
    title: "Pricing",
    metaTitle: "Fat Freezing Prices Liverpool | Our Clinic",
    metaDescription:
      "See our fat freezing package prices in Liverpool, what is included, and how to estimate applicators before booking.",
    heroTitle: "Pricing",
    heroIntro:
      "Simple package pricing with clear inclusions, no confusing wording, and direct booking links.",
    sections: [
      {
        heading: "How pricing works",
        paragraphs: [
          "Pricing is based on applicator count, with package options to suit different treatment plans.",
          "One applicator covers approximately a 20 cm area. A simple palm-of-hand estimate can help you prepare for consultation.",
        ],
      },
      {
        heading: "What is included",
        paragraphs: [
          "Some packages include complimentary treatments. Your practitioner explains what is clinically suitable for your goals.",
          "All plans are confirmed after consultation so recommendations remain safe and realistic.",
        ],
      },
      {
        heading: "Before you book",
        paragraphs: [
          "If you are unsure how many applicators may be relevant, book a consultation and we will map a practical staged plan.",
          safetyCopy,
        ],
      },
    ],
    faqs: pricingFaqs,
  },
  "/book/": {
    path: "/book/",
    title: "Book Consultation",
    metaTitle: "Book Fat Freezing Consultation | Liverpool",
    metaDescription:
      "Book your fat freezing consultation online. Choose your date, time, and area of concern and receive confirmation by email.",
    heroTitle: "Book Your Consultation",
    heroIntro:
      "Choose a date and time, share your treatment goals, and receive confirmation from our clinic team.",
    sections: [
      {
        heading: "How booking works",
        paragraphs: [
          "Our three-step booking form collects your details, area of concern, and preferred appointment slot.",
          "After submission, you receive a confirmation email and the clinic receives your request for follow-up.",
        ],
      },
      {
        heading: "Appointment hours",
        paragraphs: [
          "Available times are from 10:00 to 20:00, Monday to Sunday.",
          "Same-day treatment may be available subject to clinical suitability and schedule.",
        ],
      },
      {
        heading: "Before your consultation",
        paragraphs: [
          "Bring your main concern area and timeline expectations so your practitioner can guide you quickly.",
          safetyCopy,
        ],
      },
    ],
    faqs: bookFaqs,
  },
  "/about/": {
    path: "/about/",
    title: "About Fat Freezing Liverpool",
    metaTitle: "About Fat Freezing Liverpool | Clinic Standards",
    metaDescription:
      "Meet Fat Freezing Liverpool and learn about practitioner standards, consultation approach, and six-month protocol reviews.",
    heroTitle: "About Fat Freezing Liverpool",
    heroIntro:
      "A Liverpool clinic focused on clear communication, safe planning, and premium client care.",
    sections: [
      {
        heading: "Our approach",
        paragraphs: [
          "We are consultation-led and outcomes-focused. Every recommendation starts with suitability, realistic expectations, and a practical plan.",
          "Clients choose us for clear communication and straightforward guidance without pressure.",
        ],
      },
      {
        heading: "Practitioner standards",
        paragraphs: [
          "Treatments are delivered by qualified practitioners following internal protocols.",
          "Our in-house standards are reviewed every six months to keep service quality consistent.",
        ],
      },
      {
        heading: "How we communicate",
        paragraphs: [
          "We use plain language and medically responsible wording. We use FDA-cleared where relevant.",
          safetyCopy,
        ],
      },
    ],
    faqs: aboutFaqs,
  },
  "/contact/": {
    path: "/contact/",
    title: "Contact",
    metaTitle: "Contact Fat Freezing Liverpool Clinic",
    metaDescription:
      "Contact Fat Freezing Liverpool at 67-83 Norfolk St, Liverpool L1 0BG. Call 0330 053 5015 or email contact@fatfreezeliverpool.co.uk.",
    heroTitle: "Contact Fat Freezing Liverpool",
    heroIntro:
      "Talk to our team about treatment options, appointment availability, and consultation support.",
    sections: [
      {
        heading: "Clinic details",
        paragraphs: [
          "Address: 67-83 Norfolk St, Liverpool L1 0BG.",
          "Phone: 0330 053 5015. Email: contact@fatfreezeliverpool.co.uk.",
        ],
      },
      {
        heading: "What to include in your enquiry",
        paragraphs: [
          "Share your preferred contact method, concern area, and ideal appointment times.",
          "This helps the team respond quickly with useful next steps.",
        ],
      },
      {
        heading: "Important reminder",
        paragraphs: [
          "Enquiry responses are informational and do not replace personal medical advice.",
          safetyCopy,
        ],
      },
    ],
    faqs: contactFaqs,
  },
  "/faq/": {
    path: "/faq/",
    title: "FAQ",
    metaTitle: "Fat Freezing FAQ | Fat Freezing Liverpool",
    metaDescription:
      "Answers to common questions about fat freezing in Liverpool, including suitability, pricing, timeline, and booking.",
    heroTitle: "Frequently Asked Questions",
    heroIntro:
      "Quick answers to common treatment and booking questions.",
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Use these answers for general guidance, then book consultation for personalised advice.",
          "If your question is area-specific, visit Areas We Treat for focused guidance.",
        ],
      },
      {
        heading: "Clear and medically responsible answers",
        paragraphs: [
          "Our FAQ responses are short, direct, and written to support confident decision-making.",
          safetyCopy,
        ],
      },
    ],
    faqs: buildFaqSet("fat freezing questions", "Liverpool"),
  },
};

export function getCorePage(path: string) {
  return corePages[path];
}
