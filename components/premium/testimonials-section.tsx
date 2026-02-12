import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "The consultation was clear and structured. I left knowing exactly what was realistic and when to review progress.",
    name: "Liverpool client",
  },
  {
    quote:
      "The team kept everything practical and honest. No hype, just a clear plan and timeline.",
    name: "City centre client",
  },
  {
    quote:
      "The process was straightforward and easy to fit around work, and communication stayed consistent throughout.",
    name: "Merseyside client",
  },
];

export function TestimonialsSection() {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="teal">Client feedback</Badge>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            What clients value most
          </h2>
        </div>
        <Button asChild variant="secondary">
          <Link href="/book/">Start your consultation</Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.quote} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5 shadow-none">
            <CardContent className="p-0">
            <p className="text-sm leading-7 text-[var(--text-muted)]">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">{item.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
