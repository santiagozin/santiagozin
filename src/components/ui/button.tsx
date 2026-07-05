import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border-[3px] border-ink font-ui text-sm font-medium uppercase tracking-[0.06em] transition-[background-color,color] duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-signal text-paper border-signal hover:bg-ink hover:border-ink",
        default:
          "bg-ink text-paper hover:bg-paper hover:text-ink",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive",
        outline:
          "bg-transparent text-ink hover:bg-ink hover:text-paper",
        secondary:
          "bg-paper-alt text-ink hover:bg-ink hover:text-paper",
        ghost: "border-transparent hover:bg-paper-alt",
        link: "border-transparent underline underline-offset-4",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
