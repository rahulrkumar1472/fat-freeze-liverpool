import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function MapContactStrip() {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Badge variant="teal">Clinic location</Badge>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
            Visit our Liverpool clinic
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--text-muted)]">{siteConfig.address}</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Phone: {siteConfig.phone}</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Email: {siteConfig.enquiryEmail}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href="/contact/">Contact page</Link>
            </Button>
            <Button asChild>
              <Link href="/book/">Book</Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
          {/* TODO: Replace with a professional stock image showing the clinic exterior or a nearby Liverpool landmark with clean wayfinding context. */}
          <Image
            src="/images/liverpool-map-illustration.svg"
            alt="Liverpool clinic location map reference"
            width={800}
            height={520}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </Card>
  );
}
