import Link from "next/link";
import type { Article } from "@/lib/content/articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="p-0">
      <Badge variant="teal">{article.categoryLabel}</Badge>
      <h2 className="mt-2 font-display text-xl font-semibold text-[var(--accent-navy)]">{article.title}</h2>
      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{article.metaDescription}</p>
      <Button asChild variant="secondary" size="sm" className="mt-4">
        <Link href={article.path}>Read article</Link>
      </Button>
      </CardContent>
    </Card>
  );
}
