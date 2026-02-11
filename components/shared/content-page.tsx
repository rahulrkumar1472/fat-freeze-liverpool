import type { ReactNode } from "react";
import type { Breadcrumb } from "@/lib/seo";
import type { ContentSection, FaqItem } from "@/lib/content/types";
import { BreadcrumbNav } from "@/components/shared/breadcrumb-nav";
import { FaqBlock } from "@/components/shared/faq-block";
import { PageHero } from "@/components/shared/page-hero";
import { SectionRenderer } from "@/components/shared/section-renderer";
import { SupportCta } from "@/components/shared/support-cta";
import { FinalConversionBlock } from "@/components/premium/final-conversion-block";

export function ContentPage({
  crumbs,
  heroTitle,
  heroIntro,
  sections,
  faqs,
  supportLink,
  supportLabel,
  moneyAnchor,
  eyebrow,
  beforeSections,
  withInlineCtas = false,
}: {
  crumbs: Breadcrumb[];
  heroTitle: string;
  heroIntro: string;
  sections: ContentSection[];
  faqs?: FaqItem[];
  supportLink: string;
  supportLabel: string;
  moneyAnchor?: string;
  eyebrow?: string;
  beforeSections?: ReactNode;
  withInlineCtas?: boolean;
}) {
  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      <BreadcrumbNav crumbs={crumbs} />
      <PageHero title={heroTitle} intro={heroIntro} eyebrow={eyebrow} />
      {beforeSections ? <div className="mt-10">{beforeSections}</div> : null}
      <div className="mt-10">
        <SectionRenderer sections={sections} withInlineCtas={withInlineCtas} />
      </div>
      {faqs?.length ? <FaqBlock faqs={faqs} /> : null}
      <SupportCta supportLink={supportLink} supportLabel={supportLabel} moneyAnchor={moneyAnchor} />
      <FinalConversionBlock />
    </main>
  );
}
