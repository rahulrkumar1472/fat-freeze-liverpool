import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageSchema } from "@/components/seo/page-schema";
import { BreadcrumbNav } from "@/components/shared/breadcrumb-nav";
import { FaqBlock } from "@/components/shared/faq-block";
import { PageHero } from "@/components/shared/page-hero";
import { SectionRenderer } from "@/components/shared/section-renderer";
import { SupportCta } from "@/components/shared/support-cta";
import { Button } from "@/components/ui/button";
import { articles, buildArticleFaqs, buildArticleSections, getArticleBySlug } from "@/lib/content/articles";
import { buildBlogPostingSchema, buildMetadata } from "@/lib/seo";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return buildMetadata({
    path: article.path,
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: [article.focusTerm, "fat freezing", "cryolipolysis", "Liverpool clinic guidance"],
    type: "article",
  });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const sections = buildArticleSections(article);
  const faqs = buildArticleFaqs(article);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles/" },
    { name: article.title, path: article.path },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageSchema
        crumbs={crumbs}
        faqs={faqs}
        extraSchemas={[
          buildBlogPostingSchema({
            path: article.path,
            headline: article.title,
            description: article.metaDescription,
          }),
        ]}
        webPage={{
          path: article.path,
          name: article.title,
          type: "Article",
          description: article.metaDescription,
        }}
      />
      <BreadcrumbNav crumbs={crumbs} />

      <PageHero
        eyebrow={`${article.categoryLabel} Guide`}
        title={article.title}
        intro={article.metaDescription}
      />

      <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)]">
        <Image
          src="/images/clinic-hero.png"
          alt={`${article.title} article hero image`}
          width={1280}
          height={460}
          className="h-auto w-full object-cover"
          loading="lazy"
        />
      </div>

      <section className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--primary-soft)] p-6">
        <h2 className="font-display text-2xl font-semibold text-[var(--accent-navy)]">Helpful next steps</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
          Use this guide to understand the topic, then move through the key pages below for pricing, area detail, timeline expectations, and booking.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild variant="secondary" size="sm">
            <Link href="/fat-freezing-liverpool/">Treatment overview</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/pricing/">Pricing</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/fat-freezing/areas-we-treat/">Areas</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/fat-freezing/results-timeline/">Results</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/book/">Book consultation</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/contact/">Contact</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href={article.supportLink}>{article.supportLinkLabel}</Link>
          </Button>
        </div>
      </section>

      <div className="mt-8">
        <SectionRenderer sections={sections} />
      </div>

      <FaqBlock faqs={faqs} />

      <SupportCta
        heading="Move from article to treatment plan"
        supportLink={article.supportLink}
        supportLabel={article.supportLinkLabel}
        moneyAnchor="Treatment overview"
      />
    </main>
  );
}
