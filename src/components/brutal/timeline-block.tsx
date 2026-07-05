import { cn } from "@/lib/utils";
import { TagPill } from "./brutal-ui";

interface TimelineBlockProps {
  year: string;
  role: string;
  company: string;
  period: string;
  children: React.ReactNode;
  tags?: string[];
  featured?: boolean;
  finance?: boolean;
}

export default function TimelineBlock({
  year,
  role,
  company,
  period,
  children,
  tags,
  featured,
  finance,
}: TimelineBlockProps) {
  return (
    <article
      className={cn(
        "relative border-[3px] border-ink p-6 md:p-8",
        featured ? "bg-ink text-paper" : "bg-paper",
        !featured && finance && "bg-paper-alt"
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-2",
          featured ? "bg-signal" : finance ? "bg-ink" : "bg-signal"
        )}
      />
      <span
        className={cn(
          "pointer-events-none absolute -right-2 -top-6 font-display text-7xl leading-none opacity-[0.07] md:-right-4 md:-top-8 md:text-9xl",
          featured && "opacity-10"
        )}
        aria-hidden
      >
        {year}
      </span>
      <div className="relative pl-4">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
          {period}
        </p>
        <h3 className="mt-1 font-ui text-xl font-medium uppercase tracking-[0.04em] md:text-2xl">
          {role}
        </h3>
        <p
          className={cn(
            "font-display text-lg italic md:text-xl",
            featured ? "text-paper/80" : "text-ink-muted"
          )}
        >
          {company}
        </p>
        <div
          className={cn(
            "mt-4 space-y-2 font-ui text-base leading-relaxed",
            featured ? "text-paper/90" : "text-ink"
          )}
        >
          {children}
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagPill
                key={tag}
                className={featured ? "border-paper text-paper" : undefined}
              >
                {tag}
              </TagPill>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
