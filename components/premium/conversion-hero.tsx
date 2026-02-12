import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type TrustItem = {
  label: string;
  value: string;
};

export function ConversionHero({
  eyebrow,
  title,
  intro,
  primaryLabel = "Book Consultation",
  primaryHref = "/book/",
  secondaryLabel = "Explore treatment",
  secondaryHref = "/fat-freezing-liverpool/",
  trustItems,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  trustItems: TrustItem[];
}) {
  return (
    <section className="hero-on-dark relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-gradient-to-br from-[var(--accent-navy)] via-[var(--accent-navy-2)] to-[var(--primary)] p-7 text-[var(--text-inverse)] shadow-2xl shadow-[rgba(15,39,66,0.2)] sm:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b2b4a_0%,#0f3a5c_100%)] opacity-80" />
      <div className="absolute -right-24 -top-20 h-56 w-56 rounded-full bg-[var(--primary-soft)]/30 blur-3xl" />
      <div className="absolute -bottom-20 left-6 h-52 w-52 rounded-full bg-[#dff6ee]/20 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
        <div>
          <Badge className="w-fit border-white/20 bg-white/10 text-[#d7eef4]">{eyebrow}</Badge>
          <h1 className="mt-3 max-w-3xl font-display text-[2rem] font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.3)] sm:text-[2.6rem] lg:text-[2.95rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">{intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-white/95">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-xl font-semibold text-[var(--text-inverse)]">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#e0f4f8]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/25 bg-white/10 shadow-2xl">
            {/* TODO: Replace with a premium stock photo of a clinician greeting a client in a modern Liverpool treatment room. */}
            <Image
              src="/images/clinic-hero.png"
              alt="Our clinic team in Liverpool"
              width={720}
              height={420}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-4 rounded-2xl border border-white/20 bg-[#0f2742]/35 p-4 text-sm text-[#eff7fb]">
            This is not a weight-loss treatment. Results vary by individual.
          </div>
        </div>
      </div>
    </section>
  );
}
