import Link from "next/link";

export interface AdapterCardProps {
  /** Package name e.g. "@crawlertoll/express" */
  name: string;
  /** Short tagline */
  tagline: string;
  /** npm package URL */
  npm: string;
  /** GitHub URL */
  github: string;
  /** /docs/getting-started/<slug> URL (optional) */
  href?: string;
  /** Runtime/framework tag e.g. "Express 4+5" */
  runtime?: string;
}

export function AdapterCard({ name, tagline, npm, github, href, runtime }: AdapterCardProps) {
  const content = (
    <>
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h3 className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
        {runtime ? (
          <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
            {runtime}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{tagline}</p>
      <div className="flex items-center gap-3 text-xs">
        <a href={npm} target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">npm</a>
        <a href={github} target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
        {href ? (
          <Link href={href} className="text-blue-600 dark:text-blue-400 hover:underline">Get started →</Link>
        ) : null}
      </div>
    </>
  );

  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition">
      {content}
    </div>
  );
}
