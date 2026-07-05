import Link from "next/link";
import { cn } from "@/lib/utils";
import { TagPill } from "./brutal-ui";

interface IndexRowProps {
  index: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  inProgress?: boolean;
}

export default function IndexRow({
  index,
  title,
  description,
  tags,
  href,
  inProgress,
}: IndexRowProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "brutal-row-hover group grid grid-cols-12 items-center gap-2 border-b-[3px] border-ink px-4 py-6 md:px-12 md:py-8",
        inProgress && "border-t-4 border-t-progress"
      )}
    >
      <span className="col-span-2 font-mono text-2xl md:text-5xl">{index}</span>
      <div className="col-span-10 md:col-span-4">
        <h3 className="font-display text-2xl leading-tight md:text-4xl">
          {title}
        </h3>
        {inProgress && (
          <span className="mt-1 inline-block bg-progress px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink">
            En curso
          </span>
        )}
      </div>
      <p className="col-span-12 hidden font-ui text-base text-ink-muted md:col-span-3 md:block">
        {description}
      </p>
      <div className="col-span-10 flex flex-wrap gap-1.5 md:col-span-2">
        {tags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>
      <span className="col-span-2 flex justify-end font-mono text-2xl transition-transform duration-100 group-hover:translate-x-1 md:col-span-1">
        →
      </span>
    </Link>
  );
}
