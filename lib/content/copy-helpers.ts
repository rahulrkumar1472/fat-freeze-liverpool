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

function faq(question: string, answer: string): FaqItem {
  return { question, answer };
}

function getAreaLabel(topic: string) {
  const lower = topic.toLowerCase();
  if (lower.includes("abdomen")) return "abdomen";
  if (lower.includes("flanks") || lower.includes("love handle")) return "flanks and love handles";
  if (lower.includes("lower stomach") || lower.includes("pouch")) return "lower stomach area";
  if (lower.includes("bra back")) return "bra-back area";
  if (lower.includes("inner thigh")) return "inner thighs";
  if (lower.includes("outer thigh")) return "outer thighs";
  if (lower.includes("upper arm") || lower.includes("bingo wing")) return "upper arms";
  if (lower.includes("chin")) return "double chin area";
  return null;
}

function buildHomepageFaqs(): FaqItem[] {
  return [
    faq("Where should I start if I am new to treatment?", "Start with consultation so we can assess your concern area and explain realistic options in plain English."),
    faq("Can I compare treatment areas before booking?", "Yes. Our area pages help you shortlist the most relevant zones before your appointment."),
    faq("What is the quickest route from research to appointment?", "Check pricing, choose your slot on the booking page, and submit your details."),
    faq("Do I need to know exact applicator numbers before booking?", "No. We confirm applicator planning during consultation after area assessment."),
    faq("Can I ask questions before I commit?", "Yes. Our clinic team can answer practical pre-booking questions by phone or email."),
    faq("Do you treat more than one area?", "Yes. Multi-area planning is common and is staged around clear priorities."),
    faq("Is fat freezing surgery?", "No. It is a non-invasive body contouring treatment."),
    faq("Is this treatment for broad weight reduction?", "No. This is not a weight-loss treatment."),
    faq("Are outcomes the same for everyone?", "No. Results vary by individual."),
    faq("How do I know if I am suitable?", "Suitability is confirmed during consultation after screening and area review."),
    faq("Can I request evening appointments?", "Yes. Appointments are available up to 20:00 subject to availability."),
    faq("Can same-day treatment happen?", "Same-day treatment may be available subject to clinical suitability and schedule."),
    faq("Do you provide transparent pricing?", "Yes. Pricing is clear, package-based, and explained before treatment starts."),
    faq("What should I bring to consultation?", "Bring your key concern, questions, and preferred timeline so the plan can be tailored."),
    faq("What is the best next action now?", "Book consultation so your options can be assessed properly."),
  ];
}

function buildTreatmentFaqs(): FaqItem[] {
  return [
    faq("What is cryolipolysis in plain English?", "Cryolipolysis uses controlled cooling to target localised fat in selected body areas."),
    faq("Is treatment suitable for everyone?", "No. Suitability is determined during consultation after screening and area assessment."),
    faq("How do you decide whether treatment is appropriate?", "We review your concern, tissue profile, expectations, and relevant medical context."),
    faq("Which areas are commonly treated?", "Common areas include abdomen, flanks, thighs, upper arms, bra-back area, and under-chin profile."),
    faq("How many sessions might be discussed?", "Session planning depends on your target area and progress at follow-up checkpoints."),
    faq("What does treatment feel like?", "Most clients notice cooling and pressure early in the session, with sensation settling as treatment continues."),
    faq("Can I return to normal routines afterwards?", "Most clients return to normal activities quickly with aftercare guidance."),
    faq("When are progress reviews arranged?", "Progress is reviewed at planned milestones rather than in the first few days."),
    faq("Can treatment plans include more than one area?", "Yes. Multi-area plans are sequenced so progress remains clear."),
    faq("Are outcomes guaranteed?", "No. Results vary by individual."),
    faq("Can treatment replace healthy lifestyle habits?", "No. This is not a weight-loss treatment."),
    faq("Do you use FDA-cleared wording correctly?", "Yes. Where relevant, we use FDA-cleared wording and avoid exaggerated claims."),
    faq("Can supportive treatments be discussed?", "Yes. Supportive options are considered only when they add clear value to your plan."),
    faq("What if I am not suitable?", "If treatment is not suitable, we explain why and discuss safer alternatives."),
    faq("What is the next step for a personalised plan?", "Book consultation so suitability, timeline, and staging can be confirmed."),
  ];
}

function buildFaqPageFaqs(): FaqItem[] {
  return [
    faq("Are these answers personalised medical advice?", "No. These answers are general guidance and do not replace consultation."),
    faq("How should I use this page before booking?", "Use it to prepare clear questions so consultation can focus on your priorities."),
    faq("Can I ask about more than one area in one appointment?", "Yes. We can map a staged plan across multiple areas."),
    faq("What is the difference between fat freezing and weight loss?", "Fat freezing supports local contour goals. It is not a weight-loss treatment."),
    faq("How quickly can results appear?", "Changes are usually gradual and reviewed over planned checkpoints."),
    faq("Do all areas respond at the same pace?", "No. Response can vary by area and by individual."),
    faq("Is downtime expected after treatment?", "Most clients return to daily activity quickly with tailored aftercare guidance."),
    faq("Can I request a same-day appointment?", "Same-day availability may be possible depending on schedule and suitability."),
    faq("Do you publish clear package prices?", "Yes. Pricing is shown per applicator with package options."),
    faq("What should I do if I am unsure about suitability?", "Book consultation so screening can confirm whether treatment is appropriate."),
    faq("Are side effects and boundaries discussed before treatment?", "Yes. We explain expected sensations, boundaries, and aftercare before treatment."),
    faq("Can I contact the clinic after reviewing this page?", "Yes. You can call, email, or book directly online."),
    faq("Are outcomes guaranteed for any package?", "No. Results vary by individual."),
    faq("Do you use medically responsible wording?", "Yes. Communication is conservative, clear, and consultation-led."),
    faq("What is the simplest action after reading FAQs?", "Book consultation and bring your top questions to the appointment."),
  ];
}

function buildHowItWorksFaqs(): FaqItem[] {
  return [
    faq("How does controlled cooling work in treatment?", "Controlled cooling is applied to selected areas to support local contour planning."),
    faq("What happens before the applicator is placed?", "Your practitioner confirms area marking, comfort, and agreed treatment strategy."),
    faq("How long does a session usually take?", "Timing varies by area and plan, and is explained clearly before treatment starts."),
    faq("What sensations are common in early minutes?", "Cooling and pressure are common at the start, then usually settle as treatment continues."),
    faq("Can I return to normal activity afterwards?", "Most clients return to routine activity quickly with aftercare guidance."),
    faq("Why are follow-up reviews important?", "Review points help assess progress objectively and guide sensible next steps."),
    faq("Is the process the same for every area?", "No. Setup and sequencing vary according to area anatomy and goals."),
    faq("Can one consultation cover multiple areas?", "Yes. We can prioritise one area and map a staged approach for others."),
    faq("How is comfort managed during treatment?", "Your practitioner checks in throughout and adjusts within safe protocol limits."),
    faq("When should I contact the clinic after treatment?", "Contact us if you have concerns; aftercare details include clear contact routes."),
    faq("Can online information replace assessment?", "No. Suitability is confirmed in person during consultation."),
    faq("Is cryolipolysis a weight-loss treatment?", "No. This is not a weight-loss treatment."),
    faq("Are response times identical for everyone?", "No. Results vary by individual."),
    faq("Can treatment be paused before deciding on more sessions?", "Yes. Staged planning supports review before any further sessions."),
    faq("What is the best next step if I want to proceed?", "Book consultation so your process is tailored to your area and timeline."),
  ];
}

function buildResultsFaqs(): FaqItem[] {
  return [
    faq("When do people usually notice visible change?", "Most people notice gradual change over several weeks, not instant final results."),
    faq("Why should progress not be judged in the first few days?", "Early observations can be misleading, so we use planned review windows."),
    faq("How can I track progress more accurately?", "Use consistent photos and checkpoints under similar conditions."),
    faq("Do all areas progress at the same speed?", "No. Area response can vary based on tissue profile and treatment setup."),
    faq("What factors influence outcomes?", "Area characteristics, protocol fit, and individual response all influence progress."),
    faq("Can a plan change after follow-up?", "Yes. Reviews help confirm whether to continue, adjust, or complete the plan."),
    faq("Should I expect dramatic change immediately?", "No. Realistic timelines are discussed from the start."),
    faq("Can daily habits affect treatment progress?", "Yes. Routine consistency still matters alongside treatment."),
    faq("What if progress feels slower than expected?", "We review baseline and checkpoints to decide the most sensible next step."),
    faq("Are outcomes guaranteed by a specific date?", "No. Results vary by individual."),
    faq("Is this treatment a substitute for weight management?", "No. This is not a weight-loss treatment."),
    faq("How often are review appointments scheduled?", "Frequency depends on your area, plan, and progress checkpoints."),
    faq("Can multiple areas be tracked separately?", "Yes. Area-specific tracking keeps decisions accurate."),
    faq("Will I receive realistic expectations from consultation onwards?", "Yes. Milestone planning is discussed at the consultation stage."),
    faq("What is the best next step for timeline clarity?", "Book consultation so we can map a realistic plan for your case."),
  ];
}

function buildPricingFaqs(): FaqItem[] {
  return [
    faq("How is pricing calculated?", "Pricing is based on applicator count and confirmed after area assessment."),
    faq("What does one applicator usually cover?", "One applicator usually covers around a 20 cm treatment zone."),
    faq("How can I estimate applicators before booking?", "A palm-of-hand estimate is useful at home; exact count is confirmed in consultation."),
    faq("Do package prices include consultation discussion?", "Yes. Consultation includes clear explanation of planning and package options."),
    faq("Do selected packages include complimentary extras?", "Yes. Some package levels include complimentary add-ons, explained in advance."),
    faq("Will I be pressured into a larger package?", "No. We recommend only what is appropriate for your area and goals."),
    faq("Can I start with a smaller package and review later?", "Yes. Staged planning is common when clients want flexibility."),
    faq("Do prices change by area?", "Applicator planning varies by area shape, but package pricing remains transparent."),
    faq("Can pricing be discussed before treatment day?", "Yes. Pricing can be reviewed before and during consultation."),
    faq("Are outcomes guaranteed at any package level?", "No. Results vary by individual."),
    faq("Is this pricing for weight-loss treatment?", "No. This is not a weight-loss treatment."),
    faq("Can I still book if I am not sure which package fits?", "Yes. Book consultation and our team confirms the most suitable plan."),
    faq("What if my budget is lower than first estimate?", "We can discuss staged planning so decisions stay realistic."),
    faq("Can same-day treatment follow a pricing discussion?", "Same-day treatment may be available subject to suitability and schedule."),
    faq("What is the quickest next step after viewing prices?", "Book consultation so applicator count and timeline can be confirmed."),
  ];
}

function buildBookingFaqs(): FaqItem[] {
  return [
    faq("How does online booking work?", "Booking follows a three-step flow: your details, area and timing, then confirmation."),
    faq("What appointment hours are available?", "Appointments are available from 10:00 to 20:00, seven days a week."),
    faq("Can I request same-day treatment?", "Same-day treatment may be available subject to suitability and schedule."),
    faq("What details should I submit in the form?", "Name, phone, email, area of concern, and any relevant notes."),
    faq("Will I receive confirmation after submitting?", "Yes. You receive confirmation by email and our team receives your request."),
    faq("Can I book if I am still deciding on areas?", "Yes. Consultation can help prioritise one area and map the next stages."),
    faq("How early should I arrive for consultation?", "Arrival guidance is shared in your confirmation message."),
    faq("Can I update booking details after submission?", "Yes. Contact our clinic team and we can update your booking details."),
    faq("Do I need to include full medical history in the form?", "No. Basic details are enough to reserve a slot; screening is done in consultation."),
    faq("Does booking guarantee treatment on the same day?", "No. Suitability must be confirmed first."),
    faq("Can pricing questions be covered before the appointment?", "Yes. Pricing can be discussed ahead of your visit."),
    faq("Is booking suitable for first-time clients?", "Yes. The form is designed for first-time and returning clients."),
    faq("Can the clinic call me before my slot?", "Yes. Our team can call to confirm practical details when needed."),
    faq("Is this booking pathway for weight-loss treatment?", "No. This is not a weight-loss treatment."),
    faq("What is the fastest way to secure a convenient slot?", "Use the booking form and choose the time that fits your schedule."),
  ];
}

function buildStandardsFaqs(): FaqItem[] {
  return [
    faq("Who carries out treatment at your clinic?", "Treatments are delivered by qualified practitioners working within clinic protocols."),
    faq("How often are internal standards reviewed?", "Our in-house standards are reviewed every six months."),
    faq("How do you keep communication medically responsible?", "We use clear wording, conservative claims, and suitability-first planning."),
    faq("Do you guarantee outcomes?", "No. Results vary by individual."),
    faq("How is suitability decided?", "Suitability is confirmed during consultation after screening and area assessment."),
    faq("What does consultation-led care mean?", "It means every plan begins with assessment, realistic goals, and staged decisions."),
    faq("Are clients pressured into treatment?", "No. We prioritise informed choices and practical next steps."),
    faq("How are recommendations explained?", "We explain options in plain language, including likely pace and treatment limits."),
    faq("How do you handle concerns after treatment?", "Clients receive follow-up guidance and clear contact routes."),
    faq("Do you use FDA-cleared terminology correctly?", "Yes. We use FDA-cleared wording accurately where relevant."),
    faq("Can standards change over time?", "Yes. Protocol updates are made when quality or safety communication improves."),
    faq("Do you focus on non-invasive planning?", "Yes. Our pathways focus on non-surgical contour planning."),
    faq("Is fat freezing for broad weight reduction?", "No. This is not a weight-loss treatment."),
    faq("How transparent are you about treatment limits?", "We explain treatment limits clearly at consultation."),
    faq("How do I book with a standards-led team?", "Book consultation online and our team confirms your next steps."),
  ];
}

function buildContactFaqs(location: string): FaqItem[] {
  return [
    faq("Where is your clinic located?", `Our clinic is based in ${location}, with full address details on the contact page.`),
    faq("How can I contact your team quickly?", "You can call, email, or book online for the fastest response."),
    faq("What should I include in an enquiry?", "Share your concern area, preferred contact method, and ideal appointment times."),
    faq("How long is a first consultation?", "Consultation length depends on your goals and areas discussed."),
    faq("Can I ask treatment questions by phone first?", "Yes. Our team can provide practical pre-booking guidance."),
    faq("Do you offer evening appointments?", "Appointments are available up to 20:00, subject to availability."),
    faq("What if I am travelling from outside the city centre?", "Our team can help with timing and arrival planning."),
    faq("Who performs treatment at the clinic?", "Qualified practitioners perform treatment and suitability checks."),
    faq("Can I ask about pricing before booking?", "Yes. Pricing clarity is available before consultation."),
    faq("Can I bring questions to my first appointment?", "Yes. A clear question list helps consultation stay focused."),
    faq("Can your team direct me to relevant pages before booking?", "Yes. We can point you to the best area, pricing, or results pages."),
    faq("Do contact enquiries replace clinical assessment?", "No. Suitability is confirmed during consultation."),
    faq("Is treatment suitable for broad weight-loss goals?", "No. This is not a weight-loss treatment."),
    faq("Can I request a same-day appointment?", "Same-day availability may be possible depending on schedule and suitability."),
    faq("What is the quickest way to confirm a slot?", "Use the booking page and choose your preferred date and time."),
  ];
}

function buildAreaFaqs(area: string): FaqItem[] {
  return [
    faq(`Is ${area} usually suitable for fat freezing?`, "Suitability depends on pinchable tissue profile, skin quality, and safe applicator fit."),
    faq(`How is ${area} assessed during consultation?`, "We review contour pattern, treatment goals, and practical session planning."),
    faq(`Can one session cover the full ${area} concern?`, "Some plans complete in one stage, while others are mapped across staged sessions."),
    faq(`How is applicator fit chosen for the ${area}?`, "Applicator choice is based on area shape and safe placement."),
    faq(`Do results show quickly in the ${area}?`, "Changes are usually gradual and reviewed at planned checkpoints."),
    faq(`Can ${area} treatment be combined with other zones?`, "Yes, when sequencing supports clear and manageable progress."),
    faq(`What affects outcomes in the ${area}?`, "Area characteristics, protocol fit, and individual response all influence progress."),
    faq(`Will ${area} treatment help with overall weight reduction?`, "No. This is not a weight-loss treatment."),
    faq(`Is downtime expected after ${area} treatment?`, "Most clients return to normal activity quickly with aftercare guidance."),
    faq(`How many sessions are common for the ${area}?`, "Session planning is individual and confirmed through review milestones."),
    faq(`Can I book even if I am unsure about ${area} suitability?`, "Yes. Consultation is the right place to confirm suitability."),
    faq(`Is discomfort the same for everyone in the ${area}?`, "No. Sensation and response vary by individual."),
    faq(`Can I discuss clothing-fit goals for the ${area}?`, "Yes. Practical goals such as silhouette and fit are part of consultation."),
    faq(`Are outcomes guaranteed for ${area} treatment?`, "No. Results vary by individual."),
    faq(`What is the next step for ${area} concerns?`, "Book consultation so we can assess suitability and map your sequence."),
  ];
}

function buildConcernFaqs(concern: string): FaqItem[] {
  return [
    faq(`Why can ${concern} remain despite consistent routines?`, "Localised fat patterns can persist even when lifestyle habits are strong."),
    faq(`How do you assess ${concern} during consultation?`, "We assess area profile, goals, and realistic milestones."),
    faq(`Can non-invasive treatment help with ${concern}?`, "In suitable cases, yes. Suitability is confirmed through assessment."),
    faq(`How soon can changes appear for ${concern}?`, "Progress is usually gradual and reviewed at planned checkpoints."),
    faq(`Can ${concern} be treated in one session?`, "Some cases are suitable for one stage, while others benefit from phased planning."),
    faq(`Is ${concern} mainly a weight issue?`, "Not always. Local contour concerns can remain even when weight is stable."),
    faq(`Can I discuss more than one concern in one appointment?`, "Yes. We can prioritise one concern and map a staged plan."),
    faq(`How do you keep expectations realistic for ${concern}?`, "We use conservative timelines, clear boundaries, and review-led decisions."),
    faq(`What if treatment is not suitable for my ${concern}?`, "Our team explains why and discusses safer alternatives."),
    faq(`Can I discuss pricing for ${concern} before booking?`, "Yes. We can explain package logic and likely planning range."),
    faq(`Do outcomes vary for ${concern}?`, "Yes. Results vary by individual."),
    faq(`Does treatment for ${concern} replace healthy routines?`, "No. This is not a weight-loss treatment."),
    faq(`Can same-day treatment be discussed for ${concern}?`, "Same-day treatment may be available subject to suitability and schedule."),
    faq(`What questions should I prepare about ${concern}?`, "Ask about suitability, timeline, session staging, and review milestones."),
    faq(`What is the best next step for ${concern}?`, "Book consultation so your concern can be assessed with a practical plan."),
  ];
}

function buildAreaHubFaqs(): FaqItem[] {
  return [
    faq("Why should I start with an area page?", "Area pages help you compare options before booking and reduce uncertainty."),
    faq("Can more than one area be treated over time?", "Yes. Multi-area plans are common and staged around clear priorities."),
    faq("How do area pages help consultation?", "They help you arrive with focused questions and realistic expectations."),
    faq("Are all areas suitable for everyone?", "No. Suitability is assessed individually during consultation."),
    faq("Do all areas respond at the same pace?", "No. Response can vary by area and by individual."),
    faq("Can I discuss abdomen and flanks in one visit?", "Yes. We can review multiple areas and prioritise the starting point."),
    faq("Do area pages replace consultation?", "No. They provide guidance, while suitability is confirmed in clinic."),
    faq("Is treatment for broad weight reduction?", "No. This is not a weight-loss treatment."),
    faq("Can I compare likely applicator requirements?", "Yes. We explain likely ranges and confirm exact counts in consultation."),
    faq("Can I move from area pages directly to booking?", "Yes. Every area page links to booking and treatment overview."),
    faq("Do area pages include safety boundaries?", "Yes. We include practical, medically responsible boundaries on every page."),
    faq("Can I ask about same-day treatment for an area concern?", "Same-day treatment may be available subject to suitability and schedule."),
    faq("Can I switch area priority after consultation?", "Yes. Staged planning allows priorities to be adjusted."),
    faq("Are outcomes guaranteed for any area?", "No. Results vary by individual."),
    faq("What is the best next step after reviewing areas?", "Book consultation so your area plan can be confirmed."),
  ];
}

function buildConcernHubFaqs(): FaqItem[] {
  return [
    faq("Why use a concern-led page before treatment pages?", "Concern pages help you translate your main issue into practical next steps."),
    faq("Can concern pages help if I am unsure about treatment names?", "Yes. They are written for real concerns rather than technical terms."),
    faq("Do concern pages include area-specific links?", "Yes. They direct you to relevant area pages, pricing, and booking."),
    faq("Can one consultation cover several concerns?", "Yes. We can map priorities and stage your plan."),
    faq("Do concern pages replace a suitability assessment?", "No. Suitability is confirmed during consultation."),
    faq("Are concern timelines the same for everyone?", "No. Progress varies by person and area."),
    faq("Can I ask about package options from concern pages?", "Yes. Pricing links are available across concern content."),
    faq("Is this treatment intended for broad weight loss?", "No. This is not a weight-loss treatment."),
    faq("Can concern pages help me prepare better questions?", "Yes. They are designed to improve consultation quality."),
    faq("What if my concern is not listed exactly?", "Book consultation and our team can review your goals directly."),
    faq("Do concern pages use medically responsible wording?", "Yes. Language is conservative and consultation-led."),
    faq("Can same-day treatment be discussed from concern enquiries?", "Same-day treatment may be available subject to suitability and schedule."),
    faq("Do outcomes differ by concern type?", "Yes. Results vary by individual and area profile."),
    faq("Can I move from concern pages straight to booking?", "Yes. Booking links are kept close to each concern journey."),
    faq("What is the best next step after concern research?", "Book consultation for an individual suitability and planning review."),
  ];
}

function buildSupportTreatmentFaqs(
  modality: "ultrasound cavitation" | "radio frequency skin tightening",
): FaqItem[] {
  const label =
    modality === "ultrasound cavitation" ? "ultrasound cavitation" : "radio frequency skin tightening";

  return [
    faq(`How does ${label} fit into your pathway?`, "It is discussed as a secondary option when it supports a clear fat freezing-led plan."),
    faq(`Is ${label} the first step for everyone?`, "No. Most plans begin with consultation-led fat freezing assessment."),
    faq(`When is the right time to consider ${label}?`, "Timing is reviewed after baseline progress checkpoints are established."),
    faq(`Can ${label} replace suitability screening?`, "No. Suitability screening is always required."),
    faq(`Does adding ${label} guarantee better outcomes?`, "No. Results vary by individual."),
    faq(`Can ${label} be used for every area?`, "Not always. Area profile and goals determine whether it is appropriate."),
    faq(`Will adding ${label} reduce review appointments?`, "No. Follow-up remains important for clear decisions."),
    faq(`Can I ask about ${label} during consultation even if unsure?`, "Yes. We explain where it may help and where it may not."),
    faq(`Is ${label} a weight-loss treatment?`, "No. This is not a weight-loss treatment."),
    faq(`Can sequencing change after review?`, "Yes. Sequencing can be adjusted if follow-up findings support a better path."),
    faq(`How do you avoid over-treating with combinations?`, "We use staged planning and recommend additions only with clear rationale."),
    faq(`Can ${label} be discussed alongside pricing?`, "Yes. Cost context is included so decisions stay practical."),
    faq("Is same-day combination treatment always available?", "No. Any same-day option is subject to suitability and schedule."),
    faq(`Are outcomes from ${label} guaranteed?`, "No. Results vary by individual."),
    faq(`What is the safest next step if I am considering ${label}?`, "Book consultation so primary and secondary options can be sequenced properly."),
  ];
}

function buildArticleHubFaqs(): FaqItem[] {
  return [
    faq("How should I use the article hub before booking?", "Start with the topic closest to your concern, then move to pricing and booking."),
    faq("Can I filter topics by concern type?", "Yes. You can filter by body area, concern, science, local intent, or comparison topics."),
    faq("Do educational pages replace consultation?", "No. They support decision-making while suitability is confirmed in consultation."),
    faq("Where should I start if I have one main area?", "Start with area-focused topics, then review treatment overview and pricing."),
    faq("Where should I start if my question is about safety?", "Use science and safety topics first, then book consultation."),
    faq("Do these pages include direct links to next actions?", "Yes. Each page links to treatment overview, booking, and a related support page."),
    faq("Can I use these pages to compare options in Liverpool?", "Yes. Local and comparison topics are written for practical provider decisions."),
    faq("Will everyone reading this need the same plan?", "No. Planning is personal and based on suitability and goals."),
    faq("Are these topics useful for first-time clients?", "Yes. Content is written in plain English for first-time and returning clients."),
    faq("Can I contact your clinic after reading?", "Yes. You can call, email, or book online."),
    faq("Do these pages include pricing context?", "Many topics include pricing context, with full package detail on the pricing page."),
    faq("Is fat freezing described as a weight-loss route here?", "No. This is not a weight-loss treatment."),
    faq("Are outcomes guaranteed in educational content?", "No. Results vary by individual."),
    faq("Can I shortlist pages before consultation?", "Yes. Save the pages most relevant to your goals."),
    faq("What is the fastest action after reading?", "Book consultation so research turns into a tailored plan."),
  ];
}

function buildGeneralFaqs(topic: string, location: string): FaqItem[] {
  const cleaned = topic.toLowerCase();
  return [
    faq(`What does ${cleaned} involve?`, "It involves consultation-led assessment, practical planning, and clear expectations."),
    faq(`Is ${cleaned} suitable for everyone?`, "No. Suitability is confirmed during consultation."),
    faq(`How long does ${cleaned} usually take to show progress?`, "Progress is usually gradual and reviewed over planned checkpoints."),
    faq(`Can I ask questions about ${cleaned} before booking?`, "Yes. Our team provides practical pre-booking guidance."),
    faq(`Can ${cleaned} be discussed for multiple areas?`, "Yes. Priorities can be mapped into a staged plan."),
    faq(`Is ${cleaned} a weight-loss treatment?`, "No. This is not a weight-loss treatment."),
    faq(`Are outcomes from ${cleaned} guaranteed?`, "No. Results vary by individual."),
    faq(`Can I book online for ${cleaned}?`, "Yes. You can request a consultation slot through the booking page."),
    faq(`Does ${cleaned} include suitability checks?`, "Yes. Suitability checks are central to every recommendation."),
    faq(`Can same-day treatment happen for ${cleaned}?`, "Same-day treatment may be available subject to suitability and schedule."),
    faq(`Can I discuss pricing for ${cleaned}?`, "Yes. Pricing is explained clearly before you commit."),
    faq(`Do I need to live in ${location} to book?`, `We welcome clients from ${location} and surrounding areas.`),
    faq(`Can I review progress after starting ${cleaned}?`, "Yes. Follow-up reviews are used to guide next decisions."),
    faq(`How do I prepare for a ${cleaned} consultation?`, "Bring your concern, preferred timeline, and key questions."),
    faq(`What is the best next step for ${cleaned}?`, "Book consultation so your plan can be confirmed in person."),
  ];
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
      heading: `Why people ask about ${input.topic}`,
      paragraphs: [
        `${toSentence(input.liverpoolAngle)} We keep each consultation practical so your next step feels clear.`,
        "Most clients want clear suitability advice, realistic milestones, and a straightforward booking route.",
      ],
    },
    {
      heading: "How suitability is assessed",
      paragraphs: [
        toSentence(input.candidateProfile),
        "You receive a recommendation with clear reasons rather than generic promises.",
      ],
      bullets: [
        "Area-specific assessment before recommendations",
        "Clear explanation of realistic outcomes",
        "Practical planning notes you can act on",
        "Conservative communication built around safety",
      ],
    },
    {
      heading: "How planning is structured",
      paragraphs: [
        toSentence(input.treatmentPlan),
        "Where multiple areas matter, sequencing keeps progress clear and budget decisions manageable.",
      ],
    },
    {
      heading: "What to expect between appointments",
      paragraphs: [
        toSentence(input.expectations),
        "Review timing is set in advance so you know when to check progress.",
      ],
    },
    {
      heading: "Aftercare and communication",
      paragraphs: [
        toSentence(input.aftercare),
        "Our clinic shares practical aftercare notes and contact routes so support remains easy to access.",
      ],
    },
    {
      heading: "Next step",
      paragraphs: [
        `Start with ${input.internalSupportLinkLabel}, then move to pricing and booking when you are ready.`,
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
      heading: `What to know before booking ${input.topic}`,
      paragraphs: [toSentence(input.liverpoolIntent), toSentence(input.planningFocus)],
    },
    {
      heading: "How treatment is explained in clinic",
      paragraphs: [toSentence(input.scienceFocus), toSentence(input.clinicalFlow)],
    },
    {
      heading: "Realistic timelines",
      paragraphs: [toSentence(input.timelineFocus), mandatorySafetyCopy],
    },
    {
      heading: "Pricing and planning clarity",
      paragraphs: [toSentence(input.pricingFocus), toSentence(input.bookingFocus)],
    },
    {
      heading: "Safety boundaries",
      paragraphs: [
        toSentence(input.riskFocus),
        "Where relevant, we use FDA-cleared wording and avoid exaggerated claims.",
      ],
    },
    {
      heading: "Optional combination discussion",
      paragraphs: [toSentence(input.complementFocus)],
    },
  ];
}

export function buildFaqSet(topic: string, location = "Liverpool"): FaqItem[] {
  const lower = topic.toLowerCase();
  const area = getAreaLabel(lower);

  if (lower.includes("homepage")) return buildHomepageFaqs();
  if (lower.includes("service overview") || lower.includes("treatment planning")) return buildTreatmentFaqs();
  if (lower.includes("faq page") || lower.includes("fat freezing questions")) return buildFaqPageFaqs();
  if (lower.includes("how fat freezing works") || lower.includes("cryolipolysis")) return buildHowItWorksFaqs();
  if (lower.includes("results") || lower.includes("timeline")) return buildResultsFaqs();
  if (lower.includes("pricing")) return buildPricingFaqs();
  if (lower.includes("booking")) return buildBookingFaqs();
  if (lower.includes("contact")) return buildContactFaqs(location);
  if (lower.includes("standards") || lower.includes("practitioner")) return buildStandardsFaqs();
  if (lower.includes("areas hub") || lower.includes("treatment areas")) return buildAreaHubFaqs();
  if (lower.includes("concerns hub") || lower.includes("stubborn fat concerns")) return buildConcernHubFaqs();
  if (lower.includes("ultrasound cavitation")) return buildSupportTreatmentFaqs("ultrasound cavitation");
  if (lower.includes("radio frequency")) return buildSupportTreatmentFaqs("radio frequency skin tightening");
  if (lower.includes("articles")) return buildArticleHubFaqs();
  if (area) return buildAreaFaqs(area);
  if (lower.includes("stubborn") || lower.includes("concern") || lower.includes("love handles") || lower.includes("double chin")) {
    return buildConcernFaqs(lower.replace(/-/g, " "));
  }

  return buildGeneralFaqs(topic, location);
}

export function buildArticleFaqSet(input: {
  title: string;
  category: string;
  focusTerm: string;
  supportLabel: string;
}): FaqItem[] {
  const title = input.title;
  const lower = `${input.title} ${input.focusTerm}`.toLowerCase();
  const area = getAreaLabel(lower);
  const isPricing = /(price|pricing|cost|package|applicator)/.test(lower);
  const isSafety = /(safe|side effect|fda|suitable|not suitable|recovery)/.test(lower);
  const isTimeline = /(timeline|week|results|aftercare|mistake)/.test(lower);
  const isLocal = input.category === "Liverpool local intent";
  const isCombination = input.category === "Combination protocols and comparisons";

  return [
    faq(`What is the key decision point from ${title}?`, "The main decision is whether your concern, timeline, and expectations are ready for consultation."),
    faq(`Who usually benefits most from the ${title.toLowerCase()} topic?`, "People comparing options for one concern or one area usually find this most useful."),
    faq(`How does ${title.toLowerCase()} connect to consultation planning?`, "It helps you arrive with focused questions so suitability and sequencing can be confirmed quickly."),
    faq("Can this topic help me decide whether to book now?", "Yes. If your goal is clear, consultation is usually the fastest next step."),
    faq(
      area
        ? `How does applicator fit affect ${area} planning?`
        : "How does area choice affect treatment planning?",
      area
        ? `Applicator fit in the ${area} helps keep planning realistic and measurable.`
        : "Area-first planning is more reliable than broad assumptions.",
    ),
    faq(
      isPricing ? "How should I read pricing in relation to this topic?" : "How should I think about cost before booking?",
      "Use package pricing as planning context, then confirm exact scope in consultation.",
    ),
    faq(
      isTimeline ? "When should progress be reviewed for this topic?" : "How long should I wait before judging progress?",
      "Progress is best reviewed at planned checkpoints rather than in early days.",
    ),
    faq(
      isSafety ? "What safety boundaries matter most here?" : "Are there safety boundaries I should understand?",
      "Yes. Suitability checks, conservative planning, and clear aftercare guidance are essential.",
    ),
    faq(
      isCombination
        ? "When are combination options worth discussing?"
        : "Can combination options apply to this topic?",
      "Combination options are discussed only when they support the primary plan clearly.",
    ),
    faq(
      isLocal ? "What should Liverpool clients compare between clinics?" : "What should I compare when choosing a clinic?",
      "Compare consultation quality, communication clarity, and follow-up structure.",
    ),
    faq("Can this pathway replace weight management?", "No. This is not a weight-loss treatment."),
    faq("Are outcomes guaranteed for this topic?", "No. Results vary by individual."),
    faq(`What should I prepare before discussing ${title.toLowerCase()} with your team?`, "Bring your priority concern, timeline preference, and key questions."),
    faq(`Where should I go after reading ${title.toLowerCase()}?`, `Open ${input.supportLabel}, then review pricing and booking.`),
    faq("What is the fastest next action for personal advice?", "Book consultation so your plan can be tailored safely."),
  ];
}
