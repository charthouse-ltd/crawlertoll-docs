"use client";

import { useState } from "react";

export interface CodeTab {
  label: string;
  language: string;
  code: string;
}

export function CodeTabs({ tabs }: { tabs: CodeTab[] }) {
  const [active, setActive] = useState(0);
  const current = tabs[active] ?? tabs[0];
  if (!current) return null;

  return (
    <div className="my-6 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="flex items-center border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActive(i)}
            className={
              "px-4 py-2 text-sm font-medium whitespace-nowrap transition " +
              (i === active
                ? "border-b-2 border-blue-500 text-slate-900 dark:text-slate-100 -mb-px"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100")
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      <pre className="overflow-x-auto bg-slate-50 dark:bg-slate-900 p-4 text-sm leading-relaxed m-0">
        <code className={`language-${current.language}`}>{current.code}</code>
      </pre>
    </div>
  );
}
