import Link from "next/link";
import type { ConcernPage } from "@/lib/content/concerns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ConcernsGrid({ concerns }: { concerns: ConcernPage[] }) {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Badge variant="teal">Concerns</Badge>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Start with your concern, then move to consultation
          </h2>
        </div>
        <Link href="/concerns/" className="text-sm font-semibold text-[var(--accent-navy)] underline">
          Explore concerns hub
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {concerns.map((concern) => (
          <Card
            key={concern.slug}
            className="rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-[var(--primary-soft)] p-5 transition hover:border-[var(--primary)] hover:shadow-md"
          >
            <CardContent className="p-0">
            <h3 className="text-base font-semibold text-[var(--accent-navy)]">{concern.heroTitle}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{concern.heroIntro}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild variant="secondary" size="sm">
                <Link href={concern.path}>Read concern guide</Link>
              </Button>
              <Button asChild variant="secondary" size="sm">
                <Link href="/fat-freezing-liverpool/">Treatment overview</Link>
              </Button>
            </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
