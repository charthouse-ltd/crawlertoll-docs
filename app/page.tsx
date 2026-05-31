import type { Metadata } from "next";
import Link from "next/link";

import { AdapterCard } from "@/components/AdapterCard";
import { CodeTabs } from "@/components/CodeTabs";
import { Footer } from "@/components/Footer";
import { StandardCard } from "@/components/StandardCard";
import { TopNav } from "@/components/TopNav";

export const metadata: Metadata = {
  title: "CrawlerToll — Make AI Crawlers Pay. WordPress Plugin + Node Middleware for HTTP 402 & RSL 1.0",
  description:
    "Detect 30+ AI crawlers (GPTBot, ClaudeBot, PerplexityBot), apply RSL 1.0 policy, and issue HTTP 402 Payment Required. WordPress plugin + Express, Fastify, Hono, Next.js adapters. Vendor-neutral — works with Cloudflare, TollBit, x402, Stripe. Free & open source.",
  alternates: { canonical: "https://crawlertoll.com" },
};

export default function HomePage() {
  return (
    <>
      <TopNav />

      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
              WordPress Plugin &middot; Node Middleware &middot; Apache 2.0 &middot; Vendor-neutral
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6 leading-[1.1]">
              Make AI crawlers pay for your content.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-4">
              CrawlerToll detects 30+ AI bots — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and more — applies your RSL 1.0 policy, and issues HTTP 402 Payment Required with a structured payment offer. One plugin for WordPress. One npm install for Node.
            </p>
            <p className="text-md text-slate-500 dark:text-slate-500 leading-relaxed max-w-3xl mb-8">
              Works with Cloudflare Pay Per Crawl, TollBit, Skyfire, x402, and Stripe ACP. You choose the settlement rail. We handle the detection and enforcement.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/docs/getting-started/wordpress"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition"
              >
                WordPress Plugin →
              </Link>
              <Link
                href="/docs/getting-started/express"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition"
              >
                Node.js: Get started →
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-5 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition"
              >
                Read the docs
              </Link>
              <a
                href="https://github.com/charthouse-ltd"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-5 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
              We implement the standards everyone&apos;s already adopting.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The AI-crawler-monetization space consolidated around four standards in 2025–2026. CrawlerToll is the vendor-neutral OSS implementation that sits underneath all of them.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <StandardCard
              name="RSL 1.0"
              ratifyingBody="RSL Technical Steering Committee"
              date="Dec 2025"
              description="Really Simple Licensing — robots.txt vocabulary for AI-licensing terms. Backed by Reddit, Yahoo, People Inc., Medium, Quora, O'Reilly, Stack Overflow, and Cloudflare."
              href="/docs/standards/rsl-1-0"
              external="https://rslstandard.org"
            />
            <StandardCard
              name="Web Bot Auth"
              ratifyingBody="IETF (draft-meunier-web-bot-auth-architecture-05)"
              date="Mar 2026"
              description="HTTP Message Signatures over Ed25519 keys served from /.well-known/http-message-signatures-directory. Implemented by Cloudflare, AWS WAF, OpenAI, and Google."
              href="/docs/standards/web-bot-auth"
              external="https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/"
            />
            <StandardCard
              name="HTTP 402"
              ratifyingBody="Cloudflare pay-per-crawl + x402"
              date="Q1 2026"
              description="Payment Required response shape — Cloudflare ships >1 billion HTTP 402s per day. Structured Crawler-Price / Crawler-Price-Rail / Link headers."
              href="/docs/standards/http-402"
              external="https://blog.cloudflare.com/introducing-pay-per-crawl/"
            />
            <StandardCard
              name="x402"
              ratifyingBody="x402 Foundation (Linux Foundation)"
              date="Apr 2026"
              description="Coinbase + LF agent-payment rail. Founding members include Coinbase, Google, Microsoft, AWS, Stripe, Visa, Mastercard, American Express, Cloudflare, Circle."
              href="/docs/standards/x402"
              external="https://x402.org"
            />
          </div>
        </div>
      </section>

      {/* Sixty seconds */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
              Sixty seconds, any framework.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Same decision engine across every adapter. Pick your framework — the wiring is one line.
            </p>
          </div>
          <CodeTabs
            tabs={[
              {
                label: "Express",
                language: "ts",
                code: `import express from "express";
import { crawlertoll } from "@crawlertoll/express";

const app = express();

app.use(crawlertoll({
  offer: { rail: "x402", priceMicros: 5000, currency: "USD" },
  contextLicenseUrl: "https://example.com/.well-known/context-license.json",
}));

app.get("/", (req, res) => res.send("hello"));
app.listen(3000);`,
              },
              {
                label: "Fastify",
                language: "ts",
                code: `import Fastify from "fastify";
import crawlertoll from "@crawlertoll/fastify";

const app = Fastify();

await app.register(crawlertoll, {
  offer: { rail: "x402", priceMicros: 5000, currency: "USD" },
});

app.get("/", async () => "hello");
await app.listen({ port: 3000 });`,
              },
              {
                label: "Hono",
                language: "ts",
                code: `import { Hono } from "hono";
import { crawlertoll } from "@crawlertoll/hono";

const app = new Hono();

app.use("*", crawlertoll({
  offer: { rail: "x402", priceMicros: 5000, currency: "USD" },
}));

app.get("/", (c) => c.text("hello"));

export default app;`,
              },
              {
                label: "Next.js",
                language: "ts",
                code: `// middleware.ts
import { crawlertoll } from "@crawlertoll/next";

export default crawlertoll({
  offer: { rail: "x402", priceMicros: 5000, currency: "USD" },
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};`,
              },
              {
                label: "WordPress",
                language: "txt",
                code: `# WordPress admin → Plugins → Add New → search "CrawlerToll"
# Install + activate.
# Settings → CrawlerToll → review the default policy and save.
#
# Or via WP-CLI:
wp plugin install crawlertoll --activate`,
              },
            ]}
          />
        </div>
      </section>

      {/* Adapters grid */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
              Nine packages, one decision engine.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The core decides; the adapters translate. Same RSL parser, same Web Bot Auth verifier, same 402 builder — across every Node framework, every edge runtime.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AdapterCard
              name="@crawlertoll/core"
              tagline="Framework-agnostic. Bot catalogue, Web Bot Auth, HTTP 402, RSL 1.0 parser."
              runtime="Node 20+"
              npm="https://www.npmjs.com/package/@crawlertoll/core"
              github="https://github.com/charthouse-ltd/crawlertoll-core-js"
              href="/docs"
            />
            <AdapterCard
              name="@crawlertoll/express"
              tagline="One-line Express middleware. Express 4 + 5."
              runtime="Express 4+5"
              npm="https://www.npmjs.com/package/@crawlertoll/express"
              github="https://github.com/charthouse-ltd/crawlertoll-express-js"
              href="/docs/getting-started/express"
            />
            <AdapterCard
              name="@crawlertoll/fastify"
              tagline="Idiomatic Fastify plugin. Decorates request.crawlertoll. Fastify 4 + 5."
              runtime="Fastify 4+5"
              npm="https://www.npmjs.com/package/@crawlertoll/fastify"
              github="https://github.com/charthouse-ltd/crawlertoll-fastify-js"
              href="/docs/getting-started/fastify"
            />
            <AdapterCard
              name="@crawlertoll/hono"
              tagline="One package, four runtimes: Cloudflare Workers, Bun, Deno, Vercel Edge."
              runtime="Multi-runtime"
              npm="https://www.npmjs.com/package/@crawlertoll/hono"
              github="https://github.com/charthouse-ltd/crawlertoll-hono-js"
              href="/docs/getting-started/hono"
            />
            <AdapterCard
              name="@crawlertoll/next"
              tagline="Drop into middleware.ts. Edge runtime. Next 14 + 15."
              runtime="Next 14+15"
              npm="https://www.npmjs.com/package/@crawlertoll/next"
              github="https://github.com/charthouse-ltd/crawlertoll-next-js"
              href="/docs/getting-started/next"
            />
            <AdapterCard
              name="@crawlertoll/x402"
              tagline="Settlement-rail adapter for x402. Quote builder, header parser, facilitator verify."
              runtime="LF x402"
              npm="https://www.npmjs.com/package/@crawlertoll/x402"
              github="https://github.com/charthouse-ltd/crawlertoll-x402-js"
            />
            <AdapterCard
              name="@crawlertoll/publisher"
              tagline="Publisher SDK + CLI. npx crawlertoll init scaffolds context-license.json in 60s."
              runtime="CLI + SDK"
              npm="https://www.npmjs.com/package/@crawlertoll/publisher"
              github="https://github.com/charthouse-ltd/crawlertoll-publisher-js"
            />
            <AdapterCard
              name="@crawlertoll/parser"
              tagline="JSON Schema validator + TypeScript types for context-license.json."
              runtime="Validator"
              npm="https://www.npmjs.com/package/@crawlertoll/parser"
              github="https://github.com/charthouse-ltd/crawlertoll-parser-js"
            />
            <AdapterCard
              name="@crawlertoll/client"
              tagline="Buyer SDK. Discover publishers, query MCP endpoints, verify attestation."
              runtime="Buyer SDK"
              npm="https://www.npmjs.com/package/@crawlertoll/client"
              github="https://github.com/charthouse-ltd/crawlertoll-sdk-js"
            />
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
              Or deploy a template in one click.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Fork-and-deploy templates pre-wired with the right adapter, a sample RSL 1.0 policy, and the discovery files crawlers look for.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Cloudflare Workers</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Hono + @crawlertoll/hono. No CF Enterprise required. <code className="font-mono text-xs">wrangler deploy</code> and you&apos;re live.
              </p>
              <a
                href="https://deploy.workers.cloudflare.com/?url=https://github.com/charthouse-ltd/crawlertoll-cloudflare-template"
                target="_blank"
                rel="noopener"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Deploy to Workers →
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Vercel Edge</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Next.js 15 + @crawlertoll/next. One click to clone-and-deploy to <code className="font-mono text-xs">vercel.app</code>.
              </p>
              <a
                href="https://vercel.com/new/clone?repository-url=https://github.com/charthouse-ltd/crawlertoll-vercel-template"
                target="_blank"
                rel="noopener"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Deploy to Vercel →
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">WordPress plugin</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                30+ AI crawler catalogue, RSL 1.0 robots.txt, settings page. PHP 7.4+. wp.org-submission-ready.
              </p>
              <a
                href="https://github.com/charthouse-ltd/crawlertoll-wp"
                target="_blank"
                rel="noopener"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub repo →
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Insights dashboard</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Anonymised, opt-in telemetry across CrawlerToll installs. Privacy-first. CF Worker + static dashboard.
              </p>
              <a
                href="https://crawlertoll.com/insights"
                target="_blank"
                rel="noopener"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                See insights →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy / values */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                Vendor-neutral by design.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                CrawlerToll does not try to be a marketplace, a payment processor, or a metadata-vocabulary author. It is the vendor-neutral implementation that sits underneath — and ships adapters TO Cloudflare Pay Per Crawl, TollBit, Skyfire, x402, and Stripe ACP.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Apache-2.0 OSS. Pick whatever settlement rail your business already uses. Audit every line. Fork freely.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                Privacy-first telemetry.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                The optional insights pipeline accepts <strong>six fields only</strong>: operator, bot name, action, category, verified flag, and a clamped path segment. No IPs, no full UAs, no full URLs, no headers, no PII.
              </p>
              <Link
                href="/docs/concepts/privacy"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read the privacy posture →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
            Built once, runs everywhere.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Nine npm packages, four deploy templates, ~140 vitest tests, all Apache 2.0. Adoptable by any publisher, audited by anyone, controlled by no single vendor.
          </p>
          <Link
            href="/docs/getting-started/express"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 text-base font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition"
          >
            Start in 60 seconds →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
