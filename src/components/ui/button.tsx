import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-mjr focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active rounded-[var(--radius-pill)] font-semibold uppercase tracking-wider",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[var(--radius-pill)]",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-sky-tint-bg hover:text-primary rounded-[var(--radius-pill)] font-semibold uppercase tracking-wider",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-[var(--radius-pill)]",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-[var(--radius-pill)]",
        link: "text-primary underline-offset-4 hover:underline",
        // Mason's CTA variants
        cta: "bg-gradient-primary text-white hover:shadow-mjr-glow active:bg-primary-active rounded-[var(--radius-pill)] font-bold uppercase tracking-wider text-base shadow-mjr-md",
        hero: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active rounded-[var(--radius-pill)] font-bold uppercase tracking-wider text-lg shadow-mjr-lg",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
        xl: "h-16 px-10 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
