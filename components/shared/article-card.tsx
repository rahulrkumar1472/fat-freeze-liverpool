import Link from "next/link";
import type { Article } from "@/lib/content/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{article.categoryLabel}</p>
      <h2 className="mt-2 font-display text-xl font-semibold text-[var(--accent-navy)]">{article.title}</h2>
      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{article.metaDescription}</p>
      <Link href={article.path} className="mt-4 inline-flex text-sm font-semibold text-[var(--accent-navy)]">
        Read article →
      </Link>
    </article>
  );
}
