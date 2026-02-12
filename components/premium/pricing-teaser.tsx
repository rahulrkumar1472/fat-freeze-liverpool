import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  "1 applicator: £49",
  "2 applicators: £99",
  "4 applicators: £149",
  "6 applicators: £198",
  "8 applicators: £249",
];

export function PricingTeaser() {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="teal">Pricing teaser</Badge>
          <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Clear package pricing before you book
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
            We price by applicator and confirm final treatment scope during consultation.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="secondary">
            <Link href="/pricing/">View full pricing</Link>
          </Button>
          <Button asChild>
            <Link href="/book/">Book consultation</Link>
          </Button>
        </div>
      </div>
      <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {highlights.map((line) => (
          <Card key={line} className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 shadow-none">
            <CardContent className="p-0 text-sm font-semibold text-[var(--accent-navy)]">{line}</CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-xs text-[var(--text-muted)]">
        This is not a weight-loss treatment. Results vary by individual. Suitability is confirmed during consultation.
      </p>
    </Card>
  );
}
