import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/content/articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function getThumbnail(category: string) {
  if (category === "Liverpool local intent") return "/images/liverpool-map-illustration.svg";
  if (category === "How it works, science, and safety") return "/images/clinic-hero.png";
  if (category === "Combination protocols and comparisons") return "/images/before-after-illustration.svg";
  return "/images/clinic-hero.png";
}

export function ArticleCard({ article }: { article: Article }) {
  const thumbnail = getThumbnail(article.category);

  return (
    <Card className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="p-0">
        <div className="overflow-hidden rounded-xl border border-[var(--border)]">
          {/* TODO: Replace with topic-specific stock image (clinic consultation, treatment area close-up, or results planning visual). */}
          <Image
            src={thumbnail}
            alt={`${article.title} visual guide`}
            width={640}
            height={360}
            className="h-[172px] w-full object-cover"
            loading="lazy"
          />
        </div>
        <Badge className="mt-4" variant="teal">
          {article.categoryLabel}
        </Badge>
        <h2 className="mt-2 font-display text-lg font-semibold text-[var(--accent-navy)]">{article.title}</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{article.metaDescription}</p>
        <Button asChild variant="secondary" size="sm" className="mt-4">
          <Link href={article.path}>Read article</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
