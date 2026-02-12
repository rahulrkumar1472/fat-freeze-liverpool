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

const homeFaqs = buildFaqSet("homepage", "Liverpool");
const serviceFaqs = buildFaqSet("service overview", "Liverpool");
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
      "Consultation-led cryolipolysis in Liverpool with clear pricing, practical guidance, and straightforward booking.",
    heroTitle: "Fat Freezing Liverpool",
    heroIntro:
      "Our clinic gives you clear guidance, honest expectations, and a simple route from first question to booked consultation.",
    sections: [
      {
        heading: "A practical starting point for first-time clients",
        paragraphs: [
          "If this is your first time exploring fat freezing, begin with consultation and a clear plan. We explain what is realistic for your area and how treatment may be staged.",
          "You can move through the site in a simple order: treatment overview, pricing, then booking. Each step is written in plain English so decisions feel easier.",
        ],
      },
      {
        heading: "Who usually comes to our clinic",
        paragraphs: [
          "Most clients are already active and health-focused, but still notice one or two stubborn areas that do not shift in line with their effort.",
          "Our role is to assess whether non-invasive treatment is suitable and to give practical, medically responsible recommendations.",
        ],
      },
      {
        heading: "How your journey is structured",
        paragraphs: [
          "Consultation comes first, followed by area planning and staged review checkpoints. This keeps decisions evidence-led rather than guesswork-led.",
          safetyCopy,
        ],
      },
      {
        heading: "Fast routes to the right page",
        paragraphs: [
          "If you already know your concern area, start with Areas We Treat. If you want the treatment process in plain language, open How It Works. If timing is your biggest question, open Results.",
          "When you are ready to move forward, go directly to Book and choose your preferred date and time.",
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
      "A clear overview of fat freezing in Liverpool covering suitability, process, expected timeline, pricing context, and booking.",
    heroTitle: "Fat Freezing Liverpool",
    heroIntro:
      "Everything you need to make a confident decision, from suitability and treatment process to pricing context and booking.",
    sections: [
      {
        heading: "What fat freezing means in clinic terms",
        paragraphs: [
          "Cryolipolysis and fat freezing refer to the same non-invasive treatment pathway. It is designed for local contour goals, not broad weight reduction.",
          "Treatment decisions are consultation-led, so your area profile and expectations are reviewed before any session is confirmed.",
        ],
      },
      {
        heading: "Who this pathway is usually suitable for",
        paragraphs: [
          "Suitable clients are often close to their preferred shape but want support with specific areas that remain resistant.",
          "Suitability depends on medical context, tissue profile, and realistic expectations. If treatment is not suitable, we explain the reasons clearly.",
        ],
      },
      {
        heading: "Areas commonly discussed",
        paragraphs: [
          "Common focus zones include abdomen, flanks, lower stomach, thighs, upper arms, bra-back area, and under-chin profile.",
          "When multiple areas matter, we stage planning so progress remains measurable and practical.",
        ],
      },
      {
        heading: "What happens on treatment day",
        paragraphs: [
          "Your practitioner confirms the plan, prepares the area, runs the treatment, and explains aftercare before you leave.",
          "You receive clear review timings, so you know when progress should be checked and what to expect in early weeks.",
        ],
      },
      {
        heading: "Results and timeline expectations",
        paragraphs: [
          "Visible change is usually gradual. Most people track progress over weeks rather than expecting immediate final outcomes.",
          "Review appointments help confirm whether your plan is complete or whether further staging may be useful.",
        ],
      },
      {
        heading: "Safety and communication boundaries",
        paragraphs: [
          "Our clinic uses conservative, medically responsible language. Where relevant, we use FDA-cleared wording accurately.",
          safetyCopy,
        ],
      },
      {
        heading: "Optional supportive modalities",
        paragraphs: [
          "Some clients ask about adding ultrasound cavitation or radio frequency. These options are discussed only where they support a clear primary plan.",
          "Fat freezing remains the core pathway, with secondary options considered only when they offer practical value.",
        ],
      },
      {
        heading: "Booking your next step",
        paragraphs: [
          "Use the booking page to choose a date and time and share your main area of concern.",
          "Same-day treatment may be available subject to clinical suitability and schedule.",
        ],
      },
    ],
    faqs: serviceFaqs,
  },
  "/fat-freezing/how-it-works/": {
    path: "/fat-freezing/how-it-works/",
    title: "How Fat Freezing Works",
    metaTitle: "How Fat Freezing Works | Liverpool Clinic",
    metaDescription:
      "A plain-English explanation of cryolipolysis, expected sensations, aftercare, review milestones, and treatment boundaries.",
    heroTitle: "How Fat Freezing Works",
    heroIntro:
      "A straightforward walkthrough of treatment, aftercare, and follow-up so you know what to expect at each stage.",
    sections: [
      {
        heading: "The process in plain language",
        paragraphs: [
          "Fat freezing uses controlled cooling in selected areas to support local contour goals. It is non-surgical and consultation-led.",
          "Your practitioner selects treatment setup according to your assessment and agreed priorities.",
        ],
      },
      {
        heading: "What people usually feel during treatment",
        paragraphs: [
          "Most clients describe cooling and pressure at the beginning, with sensation settling as treatment continues.",
          "Expected sensations are discussed before treatment so you know what is normal and what to report.",
        ],
      },
      {
        heading: "Aftercare and day-to-day routine",
        paragraphs: [
          "Most clients return to normal activities quickly. You receive tailored aftercare guidance before leaving the clinic.",
          "If anything causes concern, your aftercare plan explains exactly how to contact our team.",
        ],
      },
      {
        heading: "Why follow-up is part of treatment quality",
        paragraphs: [
          "Progress is reviewed over planned checkpoints, not judged in the first few days.",
          "Follow-up helps confirm whether your plan is complete or whether additional staging should be discussed.",
        ],
      },
      {
        heading: "Clear treatment boundaries",
        paragraphs: [
          "We avoid inflated claims and explain likely outcomes against your own profile.",
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
      "Understand realistic treatment timelines, progress checkpoints, and key factors that influence visible change.",
    heroTitle: "Results & Timeline",
    heroIntro:
      "A practical timeline view showing how progress is reviewed and when next steps are usually discussed.",
    sections: [
      {
        heading: "When visible changes are usually noticed",
        paragraphs: [
          "Most people see progress gradually rather than all at once. Early changes are often subtle and build over time.",
          "Planned review points are the best way to judge progress accurately.",
        ],
      },
      {
        heading: "How to track progress properly",
        paragraphs: [
          "Use consistent checkpoints, photos, and clothing fit markers rather than day-to-day self-judgement.",
          "Our team can help interpret progress against your starting baseline and goals.",
        ],
      },
      {
        heading: "Why timelines differ between people",
        paragraphs: [
          "Response can vary by area and by individual. This is normal within non-invasive contour treatment.",
          "Clear expectation setting at consultation helps keep milestones realistic.",
        ],
      },
      {
        heading: "When to review the next stage",
        paragraphs: [
          "At follow-up, we review your checkpoints and decide whether to continue, complete, or adjust the plan.",
          "Any additional sessions are based on review findings, not assumptions.",
        ],
      },
      {
        heading: "Important reminder",
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
      "View clear package pricing, applicator guidance, and complimentary inclusions before booking consultation.",
    heroTitle: "Pricing",
    heroIntro:
      "Straightforward package pricing with transparent inclusions and direct booking links.",
    sections: [
      {
        heading: "How our pricing is structured",
        paragraphs: [
          "Prices are based on applicator count, with package options for different area plans.",
          "One applicator usually covers around a 20 cm zone. A palm-of-hand estimate can help you prepare for consultation.",
        ],
      },
      {
        heading: "What is included in package planning",
        paragraphs: [
          "Selected packages include complimentary treatments. Your practitioner confirms what is appropriate for your goals.",
          "Final recommendations are made after consultation so planning remains safe and realistic.",
        ],
      },
      {
        heading: "Before you choose a package",
        paragraphs: [
          "If you are unsure how many applicators are likely, consultation provides clear staged planning and budget context.",
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
      "Book your consultation online in three steps. Choose your date, time, and concern area, then receive confirmation by email.",
    heroTitle: "Book Your Consultation",
    heroIntro:
      "Pick a suitable slot, share your goals, and receive confirmation from our clinic team.",
    sections: [
      {
        heading: "How booking works",
        paragraphs: [
          "Our three-step form collects your details, concern area, and preferred appointment time.",
          "After submission, you receive confirmation by email and our team receives your booking request.",
        ],
      },
      {
        heading: "Appointment hours and availability",
        paragraphs: [
          "Appointments are available from 10:00 to 20:00, Monday to Sunday.",
          "Same-day treatment may be available subject to clinical suitability and schedule.",
        ],
      },
      {
        heading: "Before your consultation",
        paragraphs: [
          "Bring your key concern and preferred timeline so your practitioner can guide you efficiently.",
          safetyCopy,
        ],
      },
    ],
    faqs: bookFaqs,
  },
  "/about/": {
    path: "/about/",
    title: "About Fat Freezing Liverpool",
    metaTitle: "About Our Liverpool Clinic | Standards & Care",
    metaDescription:
      "Meet our clinic approach, practitioner standards, consultation model, and six-month protocol review cycle.",
    heroTitle: "About Our Clinic",
    heroIntro:
      "We focus on clear communication, safe planning, and a premium consultation experience.",
    sections: [
      {
        heading: "Our clinic approach",
        paragraphs: [
          "Every recommendation starts with suitability, realistic goals, and practical planning.",
          "Clients choose our team for clear guidance, honest timelines, and a no-pressure consultation style.",
        ],
      },
      {
        heading: "Practitioner standards and governance",
        paragraphs: [
          "Treatments are delivered by qualified practitioners working within clinic protocols.",
          "Our in-house standards and communication framework are reviewed every six months.",
        ],
      },
      {
        heading: "How we communicate with clients",
        paragraphs: [
          "We use plain English and medically responsible wording. Where relevant, we use FDA-cleared language correctly.",
          safetyCopy,
        ],
      },
    ],
    faqs: aboutFaqs,
  },
  "/contact/": {
    path: "/contact/",
    title: "Contact",
    metaTitle: "Contact Our Liverpool Clinic",
    metaDescription:
      "Contact our Liverpool clinic at 67-83 Norfolk St, call 0330 053 5015, or email contact@fatfreezeliverpool.co.uk.",
    heroTitle: "Contact Our Team",
    heroIntro:
      "Speak with us about treatment options, appointment availability, and consultation support.",
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
          "Share your concern area, preferred contact method, and ideal appointment times.",
          "This helps our team respond quickly with useful and practical next steps.",
        ],
      },
      {
        heading: "Clinical reminder",
        paragraphs: [
          "Contact responses are informational and do not replace personalised medical advice.",
          safetyCopy,
        ],
      },
    ],
    faqs: contactFaqs,
  },
  "/faq/": {
    path: "/faq/",
    title: "FAQ",
    metaTitle: "Fat Freezing FAQ | Liverpool Clinic",
    metaDescription:
      "Find clear answers about suitability, process, pricing, expected timeline, and how to book your consultation.",
    heroTitle: "Frequently Asked Questions",
    heroIntro:
      "Quick, practical answers to the questions clients ask most often.",
    sections: [
      {
        heading: "How to use this FAQ page",
        paragraphs: [
          "Use these answers as a quick reference, then book consultation for advice tailored to your own goals.",
          "For area-specific details, open the Areas We Treat section and compare the pages most relevant to you.",
        ],
      },
      {
        heading: "Clear and responsible answers",
        paragraphs: [
          "Every answer is written to be direct, practical, and medically responsible.",
          safetyCopy,
        ],
      },
    ],
    faqs: buildFaqSet("faq page", "Liverpool"),
  },
};

export function getCorePage(path: string) {
  return corePages[path];
}
