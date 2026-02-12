import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionVariant = "plain" | "surface" | "soft";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
  variant = "plain",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: SectionVariant;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-16 lg:py-20", className)}>
      <Container>
        <div
          className={cn(
            variant === "plain" && "",
            variant === "surface" && "section-shell p-6 sm:p-8",
            variant === "soft" &&
              "rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-6 sm:p-8",
            contentClassName,
          )}
        >
          {eyebrow ? <Badge variant="teal">{eyebrow}</Badge> : null}
          {title ? (
            <h2 className={cn(eyebrow ? "mt-3" : "", "font-display text-3xl font-semibold text-[var(--accent-navy)] sm:text-4xl")}>
              {title}
            </h2>
          ) : null}
          {description ? <p className={cn(title ? "mt-3" : "", "text-base leading-8 text-[var(--text-muted)]")}>{description}</p> : null}
          {title || description || eyebrow ? <div className="mt-8">{children}</div> : children}
        </div>
      </Container>
    </section>
  );
}

