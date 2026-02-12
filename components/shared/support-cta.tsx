import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SupportCta({
  heading = "Plan your next step",
  supportLink,
  supportLabel,
  moneyAnchor = "Treatment overview",
}: {
  heading?: string;
  supportLink: string;
  supportLabel: string;
  moneyAnchor?: string;
}) {
  return (
    <Card className="mt-14 rounded-[2rem] bg-gradient-to-r from-[var(--primary-soft)] via-[var(--surface)] to-[#dff6ee]">
      <CardContent className="p-7 sm:p-9">
      <Badge variant="teal">Consultation CTA</Badge>
      <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">{heading}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-8 text-[var(--text-muted)]">
        If you are deciding between options, start with the treatment overview, review pricing, then book a consultation so we can confirm suitability.
      </p>
      <div className="mt-6 flex flex-wrap gap-2.5">
        <Button asChild variant="secondary">
          <Link href="/fat-freezing-liverpool/">{moneyAnchor}</Link>
        </Button>
        <Button asChild>
          <Link href="/book/">Book consultation</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={supportLink}>{supportLabel}</Link>
        </Button>
      </div>
      <p className="mt-4 text-xs text-[var(--text-muted)]">This is not a weight-loss treatment. Results vary by individual.</p>
      </CardContent>
    </Card>
  );
}
