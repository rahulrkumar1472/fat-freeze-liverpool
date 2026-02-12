import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function FinalConversionBlock() {
  return (
    <Card className="mt-14 rounded-[2rem] border-[var(--accent-navy)] bg-[var(--accent-navy)] text-[var(--text-inverse)] shadow-xl">
      <CardContent className="p-8 sm:p-10">
      <Badge className="border-white/20 bg-white/10 text-[#d7eef4]">Next step</Badge>
      <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
        Book your consultation with our Liverpool clinic
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-[#e8f1f5]">
        A focused consultation can save weeks of uncertainty. We confirm suitability, explain realistic milestones, and map your plan in clear steps.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="/book/">Book Consultation</Link>
        </Button>
        <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/95">
          <Link href="/contact/">Contact Clinic</Link>
        </Button>
      </div>
      <p className="mt-5 text-xs text-[#d7eef4]">This is not a weight-loss treatment. Results vary by individual.</p>
      </CardContent>
    </Card>
  );
}
