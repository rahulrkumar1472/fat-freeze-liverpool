import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export type Breadcrumb = {
  name: string;
  path: string;
};

export type SeoInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  noindex?: boolean;
  type?: "website" | "article";
};

function trimMeta(value: string, max: number): string {
  const cleaned = value.trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trimEnd()}…`;
}

export function withTrailingSlash(path: string): string {
  if (!path.startsWith("/")) {
    return withTrailingSlash(`/${path}`);
  }
  if (path === "/") {
    return path;
  }
  return path.endsWith("/") ? path : `${path}/`;
}

export function canonicalUrl(path: string): string {
  const normalized = withTrailingSlash(path);
  return new URL(normalized, siteConfig.canonicalOrigin).toString();
}

export function buildMetadata({
  path,
  title,
  description,
  keywords,
  noindex,
  type = "website",
}: SeoInput): Metadata {
  const resolvedTitle = trimMeta(title, 60);
  const resolvedDescription = trimMeta(description, 160);
  const canonical = withTrailingSlash(path);

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      locale: "en_GB",
      url: canonical,
      siteName: siteConfig.clinicName,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: "/images/og-default.svg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.clinicName} - Liverpool body contouring clinic`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      creator: siteConfig.social.xHandle,
      images: ["/images/og-default.svg"],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export function buildBreadcrumbSchema(crumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "MedicalBusiness", "MedicalClinic"],
    name: siteConfig.clinicName,
    url: siteConfig.canonicalOrigin,
    telephone: siteConfig.phone,
    email: siteConfig.enquiryEmail,
    image: canonicalUrl("/images/og-default.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "67-83 Norfolk St",
      addressLocality: "Liverpool",
      postalCode: "L1 0BG",
      addressCountry: "GB",
    },
    areaServed: ["Liverpool", "Merseyside"],
    medicalSpecialty: ["Body contouring consultation"],
  };
}

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fat freezing and cryolipolysis consultation",
    provider: {
      "@type": "MedicalClinic",
      name: siteConfig.clinicName,
      url: siteConfig.canonicalOrigin,
    },
    areaServed: {
      "@type": "City",
      name: "Liverpool",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: canonicalUrl("/book/"),
    },
  };
}

export function buildAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Fat Freezing Liverpool",
    url: canonicalUrl("/about/"),
    isPartOf: canonicalUrl("/"),
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Fat Freezing Liverpool",
    url: canonicalUrl("/contact/"),
    isPartOf: canonicalUrl("/"),
  };
}

export function buildWebPageSchema(input: {
  path: string;
  name: string;
  type?:
    | "WebPage"
    | "MedicalWebPage"
    | "CollectionPage"
    | "AboutPage"
    | "ContactPage"
    | "FAQPage"
    | "Article";
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "WebPage",
    name: input.name,
    url: canonicalUrl(input.path),
    description: input.description,
    isPartOf: canonicalUrl("/"),
  };
}

export function buildBlogPostingSchema(input: {
  path: string;
  headline: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    url: canonicalUrl(input.path),
    mainEntityOfPage: canonicalUrl(input.path),
    author: {
      "@type": "Organization",
      name: siteConfig.clinicName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.clinicName,
      logo: {
        "@type": "ImageObject",
        url: canonicalUrl("/images/og-default.svg"),
      },
    },
  };
}
