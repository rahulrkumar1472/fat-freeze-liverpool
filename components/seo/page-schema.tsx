import type { Breadcrumb } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/lib/seo";
import type { FaqItem } from "@/lib/content/types";
import { JsonLd } from "@/components/seo/json-ld";

export function PageSchema({
  crumbs,
  faqs,
  extraSchemas = [],
  webPage,
}: {
  crumbs: Breadcrumb[];
  faqs?: FaqItem[];
  extraSchemas?: Array<Record<string, unknown>>;
  webPage?: {
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
  };
}) {
  const fallbackCrumb = crumbs[crumbs.length - 1] ?? { path: "/", name: "Page" };
  const webPageInput = webPage ?? {
    path: fallbackCrumb.path,
    name: fallbackCrumb.name,
    type: "WebPage" as const,
  };

  return (
    <>
      <JsonLd id={`breadcrumb-${crumbs.map((crumb) => crumb.path).join("-")}`} data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd id={`webpage-${webPageInput.path}`} data={buildWebPageSchema(webPageInput)} />
      {faqs?.length ? <JsonLd id="faq-schema" data={buildFaqSchema(faqs)} /> : null}
      {extraSchemas.map((schema, index) => (
        <JsonLd key={`${index}-extra-schema`} id={`extra-schema-${index}`} data={schema} />
      ))}
    </>
  );
}
