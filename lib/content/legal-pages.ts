import type { ContentSection } from "@/lib/content/types";

export type LegalPageContent = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  sections: ContentSection[];
};

export const legalPages: Record<string, LegalPageContent> = {
  "/terms-and-conditions/": {
    path: "/terms-and-conditions/",
    title: "Terms and Conditions | Fat Freezing Liverpool",
    metaTitle: "Terms and Conditions | Fat Freezing Liverpool",
    metaDescription:
      "Read Fat Freezing Liverpool terms and conditions covering consultation booking, practitioner standards, suitability, treatment boundaries, and service responsibilities.",
    heroTitle: "Terms and Conditions",
    heroIntro:
      "These terms govern website use, consultation bookings, and treatment service delivery at Fat Freezing Liverpool.",
    sections: [
      {
        heading: "1. Service scope and acceptance",
        paragraphs: [
          "By accessing this website or booking a consultation, you agree to these terms. Fat Freezing Liverpool provides consultation-led non-invasive body contouring services subject to suitability assessment and practitioner judgement.",
          "Website content is informational and does not create a medical diagnosis, treatment guarantee, or emergency care relationship.",
        ],
      },
      {
        heading: "2. Practitioner and training standards",
        paragraphs: [
          "Treatments are delivered by qualified practitioners operating under in-house competency protocols. Internal training and protocol standards are reviewed every six months to maintain service consistency and communication quality.",
          "Where standards or protocols are updated, changes apply to future consultations and treatment sessions.",
        ],
      },
      {
        heading: "3. Suitability and treatment decisions",
        paragraphs: [
          "All treatment recommendations are conditional on consultation, health screening, and area-specific assessment. Fat Freezing Liverpool may decline or defer treatment where safety, expectation mismatch, or contraindication concerns are identified.",
          "Fat freezing is not a weight-loss treatment. Results vary by individual and no guaranteed outcome is offered.",
        ],
      },
      {
        heading: "4. Booking, cancellation, and communications",
        paragraphs: [
          "Booking submissions are treated as appointment requests until confirmed by clinic communication. Clients are responsible for submitting accurate contact details and notifying us of relevant changes before appointment date.",
          "Cancellation, rescheduling, and no-show handling may be subject to administrative procedures communicated at booking or confirmation stage.",
        ],
      },
      {
        heading: "5. Liability boundaries",
        paragraphs: [
          "To the fullest extent permitted by law, Fat Freezing Liverpool is not liable for indirect, consequential, or speculative loss arising from website use, appointment delays, or misunderstanding of informational content.",
          "Nothing in these terms limits liability where exclusion is not permitted under applicable law.",
        ],
      },
      {
        heading: "6. Updates and governing framework",
        paragraphs: [
          "These terms may be updated periodically to reflect operational, legal, or clinical process changes. The version published on this page is the current operative version.",
          "Questions about these terms can be directed to contact@fatfreezeliverpool.co.uk.",
        ],
      },
    ],
  },
  "/privacy-policy/": {
    path: "/privacy-policy/",
    title: "Privacy Policy | Fat Freezing Liverpool",
    metaTitle: "Privacy Policy | Fat Freezing Liverpool",
    metaDescription:
      "Fat Freezing Liverpool privacy policy covering lawful basis, data collection, communications handling, retention, rights, and clinic contact details.",
    heroTitle: "Privacy Policy",
    heroIntro:
      "This policy explains how Fat Freezing Liverpool collects, uses, stores, and protects personal information.",
    sections: [
      {
        heading: "1. Data controller and contact",
        paragraphs: [
          "Fat Freezing Liverpool is the data controller for personal information collected through this website and consultation workflows. Contact: contact@fatfreezeliverpool.co.uk, 67-83 Norfolk St, Liverpool L1 0BG.",
          "Where this policy references 'we', 'our', or 'us', it refers to Fat Freezing Liverpool.",
        ],
      },
      {
        heading: "2. What data we collect",
        paragraphs: [
          "We collect information submitted through enquiry and booking forms, including name, phone number, email address, treatment area interests, and optional notes. We may also collect technical data needed for security, anti-spam controls, and service diagnostics.",
          "Special category data is not intentionally requested through standard website forms and should not be submitted unless specifically requested through a secure clinical process.",
        ],
      },
      {
        heading: "3. Lawful basis and processing purposes",
        paragraphs: [
          "We process data to respond to enquiries, schedule consultations, communicate appointment logistics, maintain service quality, and meet legal obligations. Lawful bases may include contract preparation, legitimate interests, and consent where required.",
          "Marketing or promotional communication is only sent where a lawful basis exists and unsubscribe options are respected.",
        ],
      },
      {
        heading: "4. Data sharing, retention, and security",
        paragraphs: [
          "Data may be processed by vetted service providers that support hosting, email delivery, analytics, and operational administration. Access is restricted to authorised personnel with role-appropriate permissions.",
          "We retain information only for as long as necessary to fulfil operational, legal, and quality requirements, then securely delete or anonymise it where appropriate.",
        ],
      },
      {
        heading: "5. Your rights",
        paragraphs: [
          "Subject to applicable law, you may request access, correction, deletion, restriction, portability, or objection to certain processing. You may also withdraw consent where consent is the legal basis.",
          "Requests can be submitted to contact@fatfreezeliverpool.co.uk. We may request identity verification before processing a rights request.",
        ],
      },
      {
        heading: "6. Policy updates",
        paragraphs: [
          "This policy may be updated periodically to reflect legal, technical, or operational changes. The latest version is published on this page with immediate effect unless otherwise stated.",
          "For concerns about personal data handling, contact us first so we can investigate and respond promptly.",
        ],
      },
    ],
  },
  "/cookie-policy/": {
    path: "/cookie-policy/",
    title: "Cookie Policy | Fat Freezing Liverpool",
    metaTitle: "Cookie Policy | Fat Freezing Liverpool",
    metaDescription:
      "Learn how Fat Freezing Liverpool uses cookies for essential functionality, analytics, consent preferences, and website performance monitoring.",
    heroTitle: "Cookie Policy",
    heroIntro:
      "This policy explains what cookies are used on our website and how you can manage your preferences.",
    sections: [
      {
        heading: "1. What cookies are",
        paragraphs: [
          "Cookies are small text files stored on your device when you browse websites. They help websites function correctly, remember preferences, and measure performance.",
          "We use a minimal, purpose-led approach to cookies and avoid unnecessary tracking technologies where possible.",
        ],
      },
      {
        heading: "2. Cookie categories we may use",
        paragraphs: [
          "Essential cookies support core website functionality such as security, anti-spam controls, and form session integrity. These are generally required for site operation.",
          "Analytics cookies help us understand page performance, user journey friction, and conversion pathway improvements. These are used in line with applicable consent requirements.",
        ],
      },
      {
        heading: "3. Consent and preference controls",
        paragraphs: [
          "Where required by law, non-essential cookies are activated only after valid consent. You can update your preferences through browser settings or site consent controls where available.",
          "Blocking some cookies may affect site functionality, including booking workflow reliability.",
        ],
      },
      {
        heading: "4. Third-party service providers",
        paragraphs: [
          "Some cookies may be set by third-party providers supporting analytics, communications, or embedded functionality. These providers process data under their own policies and contractual obligations.",
          "We review provider choices to maintain operational reliability and data governance standards.",
        ],
      },
      {
        heading: "5. Policy maintenance",
        paragraphs: [
          "This cookie policy is reviewed periodically and may be updated when tooling, regulations, or operational needs change.",
          "Questions can be sent to contact@fatfreezeliverpool.co.uk.",
        ],
      },
    ],
  },
  "/medical-disclaimer/": {
    path: "/medical-disclaimer/",
    title: "Medical Disclaimer | Fat Freezing Liverpool",
    metaTitle: "Medical Disclaimer | Fat Freezing Liverpool",
    metaDescription:
      "Medical disclaimer for Fat Freezing Liverpool covering informational limits, suitability, treatment variability, and clinical responsibility boundaries.",
    heroTitle: "Medical Disclaimer",
    heroIntro:
      "Important clinical boundaries for interpretation of website information and treatment expectations.",
    sections: [
      {
        heading: "1. Informational use only",
        paragraphs: [
          "Website content is provided for general informational purposes and does not constitute diagnosis, emergency guidance, or personalised medical advice.",
          "Any decision about treatment suitability must be made through direct consultation and clinical screening.",
        ],
      },
      {
        heading: "2. Treatment suitability",
        paragraphs: [
          "Not all individuals are suitable for fat freezing or related body contouring treatments. Suitability is determined by qualified practitioners after reviewing health context, concern area characteristics, and treatment goals.",
          "Fat freezing is not a weight-loss treatment. Results vary by individual.",
        ],
      },
      {
        heading: "3. Claims and outcome boundaries",
        paragraphs: [
          "We use conservative language and do not guarantee specific visual outcomes, timelines, or numerical changes. Clinical outcomes depend on individual response, protocol fit, and adherence to aftercare guidance.",
          "References to FDA-cleared status, where used, are informational and should not be interpreted as a guarantee of personal outcome.",
        ],
      },
      {
        heading: "4. Professional standards and review cycle",
        paragraphs: [
          "Treatments are delivered by qualified practitioners. In-house training standards and protocol governance are reviewed every six months to support consistency and safety communication quality.",
          "Where updated standards affect service pathways, clients are informed through consultation and consent processes.",
        ],
      },
      {
        heading: "5. Responsibility boundaries",
        paragraphs: [
          "Fat Freezing Liverpool is responsible for delivering services within the scope of booked consultations and agreed protocols. We are not responsible for independent decisions made without consultation or contrary to provided guidance.",
          "If you experience urgent health concerns, contact emergency or appropriate medical services immediately.",
        ],
      },
    ],
  },
};

export function getLegalPage(path: string) {
  return legalPages[path];
}
