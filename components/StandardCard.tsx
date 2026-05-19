import Link from "next/link";

export interface StandardCardProps {
  name: string;
  ratifyingBody: string;
  date: string;
  description: string;
  href: string;
  external: string;
}

export function StandardCard({ name, ratifyingBody, date, description, href, external }: StandardCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
        <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{ratifyingBody}</p>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{description}</p>
      <div className="flex items-center gap-3 text-xs">
        <Link href={href} className="text-blue-600 dark:text-blue-400 hover:underline">In CrawlerToll →</Link>
        <a href={external} target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">
          Spec
        </a>
      </div>
    </div>
  );
}
