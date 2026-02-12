import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
  {
    variants: {
      variant: {
        default: "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-muted)]",
        teal: "border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary-hover)]",
        navy: "border-[var(--accent-navy)] bg-[var(--accent-navy)] text-[var(--text-inverse)]",
        outline: "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

