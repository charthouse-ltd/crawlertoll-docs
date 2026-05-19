"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}
interface NavSection {
  title: string;
  links: NavLink[];
}

const NAV: NavSection[] = [
  {
    title: "Introduction",
    links: [
      { label: "Overview", href: "/docs" },
    ],
  },
  {
    title: "Getting started",
    links: [
      { label: "Express", href: "/docs/getting-started/express" },
      { label: "Fastify", href: "/docs/getting-started/fastify" },
      { label: "Hono", href: "/docs/getting-started/hono" },
      { label: "Next.js", href: "/docs/getting-started/next" },
      { label: "WordPress", href: "/docs/getting-started/wordpress" },
    ],
  },
  {
    title: "Standards",
    links: [
      { label: "RSL 1.0", href: "/docs/standards/rsl-1-0" },
      { label: "Web Bot Auth", href: "/docs/standards/web-bot-auth" },
      { label: "HTTP 402", href: "/docs/standards/http-402" },
      { label: "x402", href: "/docs/standards/x402" },
      { label: "Context License", href: "/docs/standards/context-license" },
    ],
  },
  {
    title: "Concepts",
    links: [
      { label: "Decision tree", href: "/docs/concepts/decision-tree" },
      { label: "Settlement rails", href: "/docs/concepts/settlement-rails" },
      { label: "Privacy posture", href: "/docs/concepts/privacy" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto">
      <nav className="px-6 py-8 space-y-8">
        {NAV.map((section) => (
          <div key={section.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3">
              {section.title}
            </h4>
            <ul className="space-y-1.5">
              {section.links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        "block text-sm py-1 transition " +
                        (active
                          ? "text-blue-600 dark:text-blue-400 font-medium"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
