import type { ContentSection } from "@/lib/content/types";
import { ConsultationBanner } from "@/components/premium/consultation-banner";

function toAnchorId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function SectionRenderer({
  sections,
  withInlineCtas = false,
}: {
  sections: ContentSection[];
  withInlineCtas?: boolean;
}) {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <div key={section.heading} className="space-y-6">
          <section
            id={toAnchorId(section.heading)}
            className="section-shell p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Section {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--accent-navy)] sm:text-3xl">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-[var(--text-muted)]">
              {section.paragraphs.map((paragraph, idx) => (
                <p key={`${section.heading}-${idx}`} className="leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.bullets?.length ? (
              <ul className="mt-5 grid gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm text-[var(--text-muted)]">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
          {withInlineCtas && (index + 1) % 3 === 0 ? (
            <ConsultationBanner
              title="Discuss your suitability with a consultation-first team"
              description="Use a short consultation to confirm realistic targets, timeline, and whether fat freezing is the right route now."
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
