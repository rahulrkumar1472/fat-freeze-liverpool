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
      "Review our terms covering bookings, suitability checks, practitioner standards, treatment boundaries, and service responsibilities.",
    heroTitle: "Terms and Conditions",
    heroIntro:
      "These terms explain how our website, bookings, and treatment services are provided.",
    sections: [
      {
        heading: "1. Service scope and acceptance",
        paragraphs: [
          "By using this website or submitting a booking request, you agree to these terms. Our clinic provides consultation-led non-invasive body contouring services that are always subject to suitability assessment.",
          "Website content is informational only and does not create diagnosis, emergency care, or guaranteed treatment outcomes.",
        ],
      },
      {
        heading: "2. Practitioner and training standards",
        paragraphs: [
          "Treatments are carried out by qualified practitioners working within in-house protocols. Internal training and protocol standards are reviewed every six months to support quality and consistency.",
          "Where standards are updated, revised protocols apply to future consultations and treatment sessions.",
        ],
      },
      {
        heading: "3. Suitability and treatment decisions",
        paragraphs: [
          "All treatment recommendations depend on consultation, screening, and area-specific assessment. We may decline or defer treatment where safety concerns, contraindications, or expectation mismatch are identified.",
          "Fat freezing is not a weight-loss treatment. Results vary by individual and no guaranteed outcome is offered.",
        ],
      },
      {
        heading: "4. Booking, cancellation, and communications",
        paragraphs: [
          "Booking form submissions are appointment requests until confirmed by our team. Clients are responsible for submitting accurate contact details and informing us of relevant changes before attendance.",
          "Cancellation, rescheduling, and no-show handling may follow clinic procedures shared at booking or confirmation stage.",
        ],
      },
      {
        heading: "5. Liability boundaries",
        paragraphs: [
          "To the fullest extent permitted by law, we are not liable for indirect or consequential loss arising from website use, appointment delays, or misunderstanding of general informational content.",
          "Nothing in these terms excludes liability where exclusion is not permitted by law.",
        ],
      },
      {
        heading: "6. Updates and governing framework",
        paragraphs: [
          "These terms may be updated to reflect legal, operational, or clinical changes. The version published on this page is the current operative version.",
          "Questions can be sent to contact@fatfreezeliverpool.co.uk.",
        ],
      },
    ],
  },
  "/privacy-policy/": {
    path: "/privacy-policy/",
    title: "Privacy Policy | Fat Freezing Liverpool",
    metaTitle: "Privacy Policy | Fat Freezing Liverpool",
    metaDescription:
      "Read how we collect, use, store, and protect personal data for enquiries, bookings, and clinic communications.",
    heroTitle: "Privacy Policy",
    heroIntro:
      "This policy explains how personal information is handled across our website and booking workflows.",
    sections: [
      {
        heading: "1. Data controller and contact",
        paragraphs: [
          "Our clinic is the data controller for personal information collected through this site and consultation workflows. Contact: contact@fatfreezeliverpool.co.uk, 67-83 Norfolk St, Liverpool L1 0BG.",
          "References to 'we', 'our', or 'us' in this policy refer to Fat Freezing Liverpool.",
        ],
      },
      {
        heading: "2. Data we collect",
        paragraphs: [
          "We collect information submitted through enquiry and booking forms, including name, phone, email, concern area, and optional notes. Technical data may also be collected for security, anti-spam, and performance diagnostics.",
          "Special category health data is not requested through standard web forms unless a secure clinical process specifically requires it.",
        ],
      },
      {
        heading: "3. Lawful basis and processing purposes",
        paragraphs: [
          "We process data to respond to enquiries, arrange consultations, manage appointment communications, maintain service quality, and meet legal obligations.",
          "Depending on context, lawful basis may include consent, legitimate interests, and steps taken at your request before entering a service contract.",
        ],
      },
      {
        heading: "4. Data sharing, retention, and security",
        paragraphs: [
          "Data may be processed by vetted providers supporting hosting, email delivery, analytics, and operational administration. Access is limited to authorised personnel.",
          "Information is retained only as long as needed for operational, legal, and quality purposes, then securely deleted or anonymised where appropriate.",
        ],
      },
      {
        heading: "5. Your rights",
        paragraphs: [
          "Subject to applicable law, you may request access, correction, deletion, restriction, portability, or objection to relevant processing. You may also withdraw consent where consent is the lawful basis.",
          "Rights requests can be sent to contact@fatfreezeliverpool.co.uk. Identity verification may be required before processing.",
        ],
      },
      {
        heading: "6. Policy updates",
        paragraphs: [
          "This policy may be updated to reflect legal, technical, or operational changes. The latest version is always published on this page.",
          "If you have a concern about data handling, contact us so we can investigate and respond promptly.",
        ],
      },
    ],
  },
  "/cookie-policy/": {
    path: "/cookie-policy/",
    title: "Cookie Policy | Fat Freezing Liverpool",
    metaTitle: "Cookie Policy | Fat Freezing Liverpool",
    metaDescription:
      "Understand which cookies we use, why we use them, and how to manage your preferences.",
    heroTitle: "Cookie Policy",
    heroIntro:
      "This page explains what cookies may be used on our site and how preference control works.",
    sections: [
      {
        heading: "1. What cookies are",
        paragraphs: [
          "Cookies are small text files saved on your device when you browse websites. They help websites function correctly, remember preferences, and monitor performance.",
          "Our approach is purpose-led: we keep cookie use focused on essential functionality and service quality.",
        ],
      },
      {
        heading: "2. Cookie categories we may use",
        paragraphs: [
          "Essential cookies support core functionality such as security, form integrity, and anti-spam controls. These are generally required for site operation.",
          "Analytics cookies help us understand usability and conversion pathways. Where required, these operate in line with consent requirements.",
        ],
      },
      {
        heading: "3. Consent and preference controls",
        paragraphs: [
          "Where law requires consent, non-essential cookies are activated only after valid consent has been given. Preferences can be managed through browser or consent settings where available.",
          "Blocking certain cookies may reduce functionality, including booking flow reliability.",
        ],
      },
      {
        heading: "4. Third-party service providers",
        paragraphs: [
          "Some cookies may be set by third-party providers used for analytics, communication tools, or embedded functionality. These providers operate under their own policies.",
          "Provider choices are reviewed to support reliability, security, and data governance standards.",
        ],
      },
      {
        heading: "5. Policy maintenance",
        paragraphs: [
          "This cookie policy is reviewed periodically and may be updated when regulations, tools, or operational needs change.",
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
      "Review important clinical boundaries around suitability, treatment variability, and informational limits.",
    heroTitle: "Medical Disclaimer",
    heroIntro:
      "Important boundaries for interpreting website information and setting safe treatment expectations.",
    sections: [
      {
        heading: "1. Informational use only",
        paragraphs: [
          "Website content is provided for general information and does not replace diagnosis, emergency guidance, or personalised medical advice.",
          "Any treatment suitability decision must be made through direct consultation and screening.",
        ],
      },
      {
        heading: "2. Treatment suitability",
        paragraphs: [
          "Not all individuals are suitable for fat freezing or related body contouring options. Suitability is determined by qualified practitioners after assessing health context, area characteristics, and goals.",
          "Fat freezing is not a weight-loss treatment. Results vary by individual.",
        ],
      },
      {
        heading: "3. Claims and outcome boundaries",
        paragraphs: [
          "We use conservative language and do not guarantee specific timelines, visual outcomes, or numerical change. Outcomes depend on individual response, protocol fit, and aftercare adherence.",
          "Any reference to FDA-cleared status is informational and should not be interpreted as a guarantee of personal results.",
        ],
      },
      {
        heading: "4. Professional standards and review cycle",
        paragraphs: [
          "Treatments are delivered by qualified practitioners. In-house training standards and protocols are reviewed every six months to support consistency and safety communication quality.",
          "Where updated standards affect care pathways, clients are informed during consultation and consent discussions.",
        ],
      },
      {
        heading: "5. Responsibility boundaries",
        paragraphs: [
          "Our clinic is responsible for services delivered within booked consultations and agreed protocols. We are not responsible for independent decisions taken without consultation or contrary to provided guidance.",
          "If you experience urgent health concerns, contact emergency or appropriate medical services immediately.",
        ],
      },
    ],
  },
};

export function getLegalPage(path: string) {
  return legalPages[path];
}
