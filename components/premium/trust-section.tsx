import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const trustPoints = [
  "Qualified practitioners",
  "In-house standards review every six months",
  "Consultation-led suitability screening",
  "Medical-safe communication and realistic planning",
];

export function TrustSection() {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Badge variant="teal">Trust and credibility</Badge>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Clinical standards built for confident decisions
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--text-muted)]">
            We start with suitability, then build a practical plan around your goals and schedule. You get clear expectations before you commit to treatment.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href="/about/">About clinic standards</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/medical-disclaimer/">Medical disclaimer</Link>
            </Button>
          </div>
        </div>

        <Card className="surface-soft p-5 shadow-none">
          <CardContent className="p-0">
            <p className="text-sm font-semibold text-[var(--accent-navy)]">Clinic details</p>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{siteConfig.address}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">Phone: {siteConfig.phone}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">Email: {siteConfig.enquiryEmail}</p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                {/* TODO: Replace with a stock image of a clean treatment room and cooling fat reduction device setup. */}
                <Image
                  src="/images/clinic-hero.png"
                  alt="Treatment room at our clinic"
                  width={320}
                  height={220}
                  className="h-[84px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                {/* TODO: Replace with a stock image of practitioner-led consultation and body area planning. */}
                <Image
                  src="/images/before-after-illustration.svg"
                  alt="Clinician consultation in progress"
                  width={320}
                  height={220}
                  className="h-[84px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                {/* TODO: Replace with a local access/arrival stock image to support trust and location clarity. */}
                <Image
                  src="/images/liverpool-map-illustration.svg"
                  alt="Clinic location and local access reference"
                  width={320}
                  height={220}
                  className="h-[84px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-[var(--text-muted)]">
              {trustPoints.map((point) => (
                <li key={point} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}
