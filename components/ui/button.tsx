import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[#0f6b7a] text-white hover:bg-[#0c5662] shadow-[0_10px_24px_rgba(15,107,122,0.2)]",
        primary:
          "bg-[#0f6b7a] text-white hover:bg-[#0c5662] shadow-[0_10px_24px_rgba(15,107,122,0.2)]",
        secondary:
          "border border-[#cbd5e1] bg-white !text-[#0f172a] hover:bg-[#f8fafc] hover:!text-[#0f172a] disabled:!text-[#0f172a]",
        outline:
          "border border-[#0f6b7a] bg-transparent !text-[#0f6b7a] hover:bg-[#e2f3f5] hover:!text-[#0f6b7a]",
        navy: "bg-[var(--accent-navy)] text-[var(--text-inverse)] hover:bg-[var(--accent-navy-2)]",
        ghost: "bg-transparent text-[#0f6b7a] hover:underline",
        link: "bg-transparent text-[#0f6b7a] hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
