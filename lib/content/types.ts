export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageContent = {
  slug: string;
  path: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  sections: ContentSection[];
  faqs?: FaqItem[];
};
