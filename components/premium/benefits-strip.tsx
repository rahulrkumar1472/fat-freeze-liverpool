import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type BenefitItem = {
  title: string;
  detail: string;
};

export function BenefitsStrip({ items }: { items: BenefitItem[] }) {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="teal">Benefits</Badge>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Why clients choose our consultation-led approach
          </h2>
        </div>
        <Button asChild>
          <Link href="/book/">Book Consultation</Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5 shadow-none">
            <CardContent className="p-0">
            <h3 className="text-base font-semibold text-[var(--accent-navy)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
