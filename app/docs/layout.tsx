import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNav />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
        <Sidebar />
        <main className="flex-1 min-w-0 px-0 lg:px-12 py-12">
          <article className="prose-slate dark:prose-invert max-w-3xl">
            {children}
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
