import Link from "next/link";
import type { AreaPage } from "@/lib/content/areas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AreasGrid({ areas }: { areas: AreaPage[] }) {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Badge variant="teal">Areas We Treat</Badge>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Choose your highest-priority target area
          </h2>
        </div>
        <Link href="/fat-freezing/areas-we-treat/" className="text-sm font-semibold text-[var(--accent-navy)] underline">
          View all area guidance
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {areas.map((area) => (
          <Card
            key={area.slug}
            className="group rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-[var(--surface-soft)] p-5 transition hover:border-[var(--primary)] hover:shadow-md"
          >
            <CardContent className="p-0">
            <Badge variant="outline">Liverpool</Badge>
            <h3 className="mt-2 text-base font-semibold text-[var(--accent-navy)]">{area.heroTitle}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{area.heroIntro}</p>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="secondary" size="sm">
                <Link href={area.path}>Read area guide</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/book/">Book</Link>
              </Button>
            </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
