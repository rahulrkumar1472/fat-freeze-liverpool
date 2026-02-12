import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const labels = [
  "Abdomen contour plan",
  "Flanks and waistline",
  "Upper arms and profile",
];

export function BeforeAfterGallery() {
  return (
    <Card className="section-shell p-6 sm:p-8">
      <Badge variant="teal">Gallery</Badge>
      <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">
        Before-and-after style visual planning
      </h2>
      <p className="mt-3 text-sm leading-8 text-[var(--text-muted)]">
        These visuals are illustrative planning references. They are not guarantees of outcome. Consultation is required and suitability is assessed individually.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {labels.map((label) => (
          <Card key={label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-3 shadow-none">
            <CardContent className="p-0">
            {/* TODO: Replace with compliant stock photo pair showing consultation-led body contouring planning for this area. */}
            <Image
              src="/images/before-after-illustration.svg"
              alt={`${label} planning illustration`}
              width={420}
              height={320}
              className="h-auto w-full rounded-xl object-cover"
              loading="lazy"
            />
            <p className="mt-3 text-sm font-semibold text-[var(--accent-navy)]">{label}</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">Illustrative visuals for planning context only.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
