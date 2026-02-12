import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function QuickExplainer() {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <Badge variant="teal">Quick explainer</Badge>
      <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
        Cryolipolysis and fat freezing are the same consultation-led pathway
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <p className="text-sm leading-8 text-[var(--text-muted)]">
          We use &ldquo;cryolipolysis&rdquo; and &ldquo;fat freezing&rdquo; interchangeably. The focus is non-invasive contour
          improvement for suitable candidates with localised fat concerns.
        </p>
        <p className="text-sm leading-8 text-[var(--text-muted)]">
          This is not a weight-loss treatment. Results vary by individual. Suitability is confirmed after consultation and clinical screening.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild variant="secondary">
          <Link href="/fat-freezing-liverpool/">Treatment overview</Link>
        </Button>
        <Button asChild>
          <Link href="/book/">Book Consultation</Link>
        </Button>
      </div>
    </Card>
  );
}
