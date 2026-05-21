import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Project</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="/docs/standards">Standards</Link></li>
            <li><a href="https://github.com/charthouse-ltd/crawlertoll/blob/main/MANIFESTO.md">Manifesto</a></li>
            <li><a href="https://github.com/charthouse-ltd">GitHub</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Adapters</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><a href="https://www.npmjs.com/package/@crawlertoll/express">Express</a></li>
            <li><a href="https://www.npmjs.com/package/@crawlertoll/fastify">Fastify</a></li>
            <li><a href="https://www.npmjs.com/package/@crawlertoll/hono">Hono</a></li>
            <li><a href="https://www.npmjs.com/package/@crawlertoll/next">Next.js</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Standards</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><a href="https://rslstandard.org">RSL 1.0</a></li>
            <li><a href="https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/">Web Bot Auth</a></li>
            <li><a href="https://x402.org">x402</a></li>
            <li><a href="https://context-license.org">Context License</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">License</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Apache-2.0. Charthouse Ltd, UK.<br/>
            <a href="mailto:hello@crawlertoll.com">hello@crawlertoll.com</a>
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 text-xs text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Charthouse Ltd. CrawlerToll™ is a trademark of Charthouse Ltd. All specs implemented are open standards under their own licenses.
      </div>
    </footer>
  );
}
