/**
 * Global MDX component overrides — applied to every .mdx page rendered
 * via @next/mdx. Keeps the long-form content visually consistent across
 * all docs without per-file imports.
 */

import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 scroll-mt-20" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3 className="mt-8 mb-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 scroll-mt-20" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p className="my-4 leading-7 text-slate-700 dark:text-slate-300" {...props}>
        {children}
      </p>
    ),
    a: ({ children, ...props }: ComponentPropsWithoutRef<"a">) => (
      <a
        className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:underline-offset-4 transition"
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-slate-700 dark:text-slate-300" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-slate-700 dark:text-slate-300" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li className="leading-7" {...props}>{children}</li>
    ),
    code: ({ children, className, ...props }: ComponentPropsWithoutRef<"code">) => {
      // Inline code only — block code is handled by rehype-pretty-code wrapping in <pre>.
      if (className?.includes("language-")) {
        return <code className={className} {...props}>{children}</code>;
      }
      return (
        <code className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[0.9em] font-mono text-slate-900 dark:text-slate-100" {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 text-sm leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="my-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 px-4 py-2 italic text-slate-700 dark:text-slate-300"
        {...props}
      >
        {children}
      </blockquote>
    ),
    table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props}>
          {children as ReactNode}
        </table>
      </div>
    ),
    th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
      <th className="border-b border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-2 text-left font-semibold text-slate-900 dark:text-slate-100" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
      <td className="border-b border-slate-200 dark:border-slate-800 px-4 py-2 text-slate-700 dark:text-slate-300" {...props}>
        {children}
      </td>
    ),
    hr: () => <hr className="my-12 border-slate-200 dark:border-slate-800" />,
    ...components,
  };
}
