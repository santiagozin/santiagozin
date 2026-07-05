import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("relative mb-12 md:mb-16", className)}>
      <span
        className="pointer-events-none absolute -left-2 -top-8 font-mono text-[80px] font-medium leading-none text-ink/5 md:-left-4 md:-top-12 md:text-[120px]"
        aria-hidden
      >
        {number}
      </span>
      <div className="relative border-b-[3px] border-ink pb-4">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          {number} — {subtitle}
        </p>
        <h2 className="font-display mt-2 text-5xl leading-[0.9] md:text-7xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
