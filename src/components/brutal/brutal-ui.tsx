import { cn } from "@/lib/utils";

interface TagPillProps {
  children: React.ReactNode;
  className?: string;
}

export function TagPill({ children, className }: TagPillProps) {
  return (
    <span
      className={cn(
        "tag-pill inline-block border border-ink px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em]",
        className
      )}
    >
      {children}
    </span>
  );
}

interface BrutalButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "outline" | "filled" | "signal";
  children: React.ReactNode;
}

export function BrutalButton({
  variant = "outline",
  className,
  children,
  ...props
}: BrutalButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 border-[3px] border-ink px-8 py-4 font-ui text-sm font-medium uppercase tracking-[0.06em] transition-[background-color,color] duration-100",
        variant === "filled" && "bg-ink text-paper hover:bg-paper hover:text-ink",
        variant === "signal" && "bg-signal text-paper border-signal hover:bg-ink hover:border-ink",
        variant === "outline" && "bg-transparent text-ink hover:bg-ink hover:text-paper",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
