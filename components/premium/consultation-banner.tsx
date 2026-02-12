import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ConsultationBanner({
  title = "Ready for a tailored fat freezing plan?",
  description = "Book your consultation to confirm suitability, map timeline expectations, and receive a clear staged plan.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Card className="rounded-3xl bg-gradient-to-r from-[var(--primary-soft)] via-[var(--surface)] to-[#dff6ee]">
      <CardContent className="p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-[var(--accent-navy)]">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/book/">Book Consultation</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/fat-freezing-liverpool/">Learn about treatment</Link>
          </Button>
        </div>
      </div>
      </CardContent>
    </Card>
  );
}
