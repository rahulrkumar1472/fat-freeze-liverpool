import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/shared/article-card";
import { BreadcrumbNav } from "@/components/shared/breadcrumb-nav";
import { FaqBlock } from "@/components/shared/faq-block";
import { PageHero } from "@/components/shared/page-hero";
import { SupportCta } from "@/components/shared/support-cta";
import { PageSchema } from "@/components/seo/page-schema";
import { buildFaqSet } from "@/lib/content/copy-helpers";
import { articleCategories, articles } from "@/lib/content/articles";
import { buildMetadata } from "@/lib/seo";

type SearchParams = {
  category?: string;
};

export const metadata: Metadata = buildMetadata({
  path: "/articles/",
  title: "Fat Freezing Guides Liverpool | Articles",
  description:
    "Explore practical guides on areas, concerns, safety, pricing, and treatment planning before you book your consultation.",
  keywords: ["fat freezing articles", "cryolipolysis Liverpool blog", "stubborn fat treatment insights"],
});

const categoryLabels: Record<string, string> = {
  "Area-specific fat freezing": "Body Areas",
  "Concerns and candidate intent": "Common Concerns",
  "How it works, science, and safety": "Science & Safety",
  "Liverpool local intent": "Liverpool Guides",
  "Combination protocols and comparisons": "Combination Plans",
};

const articleHubFaqs = buildFaqSet("fat freezing articles", "Liverpool");

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const activeCategory = articleCategories.find((category) => category === params.category);

  const filtered = activeCategory
    ? articles.filter((article) => article.category === activeCategory)
    : articles;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles/" },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageSchema
        crumbs={crumbs}
        faqs={articleHubFaqs}
        webPage={{
          path: "/articles/",
          name: "Articles",
          type: "CollectionPage",
          description: "Liverpool fat freezing articles and educational guides.",
        }}
      />
      <BreadcrumbNav crumbs={crumbs} />
      <PageHero
        eyebrow="Guides & Advice"
        title="Treatment guides and practical advice"
        intro="Useful, plain-English guides to help you compare options, understand timelines, and decide when to book consultation."
      />

      <section className="section-shell mt-8 p-6">
        <h2 className="font-display text-2xl font-semibold text-[var(--accent-navy)]">Filter by topic</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/articles/"
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              !activeCategory
                ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--text-inverse)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
            }`}
          >
            All
          </Link>
          {articleCategories.map((category) => (
            <Link
              key={category}
              href={`/articles/?category=${encodeURIComponent(category)}`}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                activeCategory === category
                  ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--text-inverse)]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
              }`}
            >
              {categoryLabels[category] ?? category}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>

      <SupportCta
        heading="Turn your research into a clear next step"
        supportLink="/fat-freezing-liverpool/"
        supportLabel="Treatment overview"
        moneyAnchor="Cryolipolysis overview"
      />

      <FaqBlock faqs={articleHubFaqs} />
    </main>
  );
}
