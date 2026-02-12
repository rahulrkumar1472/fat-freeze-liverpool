import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PageHero({
  title,
  intro,
  eyebrow,
  showDefaultCtas = true,
}: {
  title: string;
  intro: string;
  eyebrow?: string;
  showDefaultCtas?: boolean;
}) {
  return (
    <section className="hero-on-dark relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent-navy)] via-[var(--accent-navy-2)] to-[var(--primary)] p-8 text-[var(--text-inverse)] shadow-xl sm:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b2b4a_0%,#0f3a5c_100%)] opacity-80" />
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--primary-soft)]/25 blur-2xl" />
      <div className="absolute -bottom-24 left-6 h-56 w-56 rounded-full bg-[#dff6ee]/20 blur-2xl" />
      <div className="absolute bottom-6 right-6 hidden max-w-[210px] overflow-hidden rounded-2xl border border-white/25 shadow-2xl lg:block">
        {/* TODO: Replace with a premium stock image of a consultation setup with cooling fat reduction equipment visible. */}
        <Image
          src="/images/clinic-hero.png"
          alt="Clinic consultation room in Liverpool"
          width={420}
          height={220}
          className="h-auto w-full object-cover"
          loading="lazy"
        />
      </div>
      {eyebrow ? <Badge className="relative w-fit border-white/20 bg-white/10 text-cyan-100">{eyebrow}</Badge> : null}
      <h1 className="relative mt-2 max-w-3xl font-display text-[1.95rem] font-semibold leading-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.28)] sm:text-[2.3rem] lg:text-[2.65rem]">
        {title}
      </h1>
      <p className="relative mt-5 max-w-3xl leading-8 text-white/85">{intro}</p>
      {showDefaultCtas ? (
        <div className="relative mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/book/">Book Consultation</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="bg-white/95">
            <Link href="/fat-freezing-liverpool/">Explore treatment</Link>
          </Button>
        </div>
      ) : null}
      <div className="relative mt-5 grid max-w-3xl gap-2 text-xs text-cyan-100 sm:grid-cols-3">
        <p className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-center">
          Qualified practitioners
        </p>
        <p className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-center">
          FDA-cleared language only
        </p>
        <p className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-center">
          Results vary by individual
        </p>
      </div>
    </section>
  );
}
