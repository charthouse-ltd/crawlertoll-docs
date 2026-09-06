import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { ProBuyButton } from "@/components/ProCheckout";
import { TopNav } from "@/components/TopNav";

/**
 * CrawlerToll Pro sales page (`/pro`).
 *
 * Pro is sold via Freemius, not wp.org. Copy follows the claims freeze
 * (2026-08-05 D7): "recognises 30 declared AI-crawler user-agents", never
 * "detects"; the lead is "the paywall where the content itself is the lock";
 * per-buyer keys are NOT claimed. Money never touches Charthouse: cards run
 * on the publisher's own Stripe account, USDC lands in the publisher's wallet
 * (2026-09-06). Single plan 53319: $29/mo or $249/yr, 14-day trial, no card.
 */

export const metadata: Metadata = {
  title: "CrawlerToll Pro — the paywall where the content itself is the lock",
  description:
    "CrawlerToll Pro for WordPress: access tiers, bundles, metered free articles, email-gated access, unlock webhooks, revenue dashboard. Readers pay by card on your own Stripe account, AI agents pay in USDC to your own wallet. 14-day free trial, no card required. $29/mo or $249/yr.",
  alternates: { canonical: "https://crawlertoll.com/pro" },
  openGraph: {
    title: "CrawlerToll Pro — the paywall where the content itself is the lock",
    description:
      "Seal your premium posts. Readers pay by card, AI agents pay in USDC — straight to you. CrawlerToll never touches the money. 14-day free trial.",
    type: "website",
  },
};

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition disabled:opacity-60";
const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-5 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition";

const FREE = [
  "Recognises 30 declared AI-crawler user-agents and applies your RSL 1.0 policy",
  "HTTP 402 offers with a flat per-site price",
  "The sealed paywall: the post body is encrypted on the page; the key releases only against a settled payment",
  "Cards, Apple Pay and Google Pay on your own Stripe account",
  "USDC over x402 straight to your own wallet — the rail AI agents pay on",
  "Visual paywall cut in the editor, receipts with refund links, QR transfer of an unlock to another device",
];

const FEATURES = [
  {
    title: "Access tiers and bundles",
    body: "Price × duration per section: a 24-hour pass, a 30-day pass, or no expiry. Bundle a whole path so one payment roams every article under it. Prices are server-derived — a tampered offer never yields a discount.",
  },
  {
    title: "Metered free articles",
    body: "N free reads per 30 days per path, with an abuse ceiling per IP you can tune. The meter is a free-allowance identity, never an account — readers stay anonymous.",
  },
  {
    title: "Email-gated access",
    body: "Unlock for a verified email address instead of money. GDPR-clean consent split by default, or a consent-or-pay mode. Your WordPress stays the data controller; the unlock service only ever sees a hash.",
  },
  {
    title: "Per-path pricing and rail routing",
    body: "/premium/* at one price, /blog/ at another, with wildcards and longest-prefix wins. Route individual crawlers to a different rail when you need to.",
  },
  {
    title: "Realised revenue, traffic, logs, alerts",
    body: "What was actually collected, by rail, next to what was priced. Who is at the door — people, declared AI crawlers, search engines, undeclared automation — and the sealed funnel from views to walls to unlocks. Decision logs with export, retention you control, daily or weekly summaries.",
  },
  {
    title: "Unlock webhooks",
    body: "HMAC-signed unlock.succeeded events to your own systems, with a durable outbox and automatic retries. Feed your CRM, your analytics, or your newsletter tool the moment someone pays.",
  },
];

const STEPS = [
  {
    title: "Install the free plugin",
    body: "From wp.org: Plugins → Add New → “CrawlerToll”. Crawler recognition, RSL policy, flat-price 402s and the sealed paywall work immediately — no account needed.",
  },
  {
    title: "Connect your own payment rails",
    body: "Paste your Stripe keys and your USDC address under Settings → CrawlerToll. Cards settle on your Stripe account, USDC lands in your wallet. There is no CrawlerToll balance, payout or fee.",
  },
  {
    title: "Start the trial or buy Pro",
    body: "Checkout is handled by Freemius (EU VAT included). You get a license key and the Pro download by email; paste the key under Settings → CrawlerToll → Account and the Pro tabs unlock.",
  },
];

const FAQ = [
  {
    q: "Do you take a cut of my revenue?",
    a: "No, and we cannot: card payments run on your own Stripe account and USDC is paid to your own wallet. CrawlerToll holds no payment credential of any kind — no Stripe secret, no platform account, no facilitator key. Pro is a flat subscription for the plugin and the unlock service.",
  },
  {
    q: "What does the free version do vs Pro?",
    a: "Free is the whole paywall: recognition of 30 declared AI crawlers, RSL policy, flat-price 402s, the sealed-content engine, and both payment rails. Pro adds access tiers and bundles, metered free articles, email-gated access, per-path pricing, rail routing, the revenue dashboard, logs, alerts, and unlock webhooks.",
  },
  {
    q: "Will this hurt my SEO?",
    a: "No. Sealed posts serve a public preview that stays crawlable and indexable, with paywall structured data (JSON-LD) so search engines understand the setup. The sealed body is withheld from excerpts, feeds, and the REST API — consistently, for every non-paying reader.",
  },
  {
    q: "Does it work behind Cloudflare, or with Pay Per Crawl?",
    a: "Yes. CrawlerToll runs inside WordPress on any host or CDN. Cloudflare's gateway moves money at the edge for its own customers; CrawlerToll is the paywall above it — sealing, human readers, cards, tiers — and the two coexist.",
  },
  {
    q: "What is the unlock service, and what if it is down?",
    a: "A small hosted key-escrow that releases content keys against settled payments. It fails closed: if it cannot be reached, no payment can be started and no key is released — money is never taken for content that cannot be unlocked. There is no SLA at launch; see the docs page for exactly what it stores.",
  },
  {
    q: "How does the trial work?",
    a: "14 days of full Pro, no card required. At the end, subscribe from the customer portal or let it lapse — the plugin falls back to the free feature set. Nothing breaks and nothing you sold is locked away.",
  },
];

export default function ProPage() {
  return (
    <>
      <TopNav />

      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
              CrawlerToll Pro for WordPress &middot; 14-day free trial
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6 leading-[1.1]">
              The paywall where the content itself is the lock.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-8">
              CrawlerToll seals your premium posts at the content layer — crawlers and casual readers get the preview, paying customers get the key. Readers pay <strong>by card on your own Stripe account</strong>; AI agents pay <strong>in USDC to your own wallet</strong>. We never touch the money.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ProBuyButton billing="annual" className={BTN_PRIMARY}>
                Start 14-day free trial →
              </ProBuyButton>
              <a href="https://wordpress.org/plugins/crawlertoll/" target="_blank" rel="noopener" className={BTN_GHOST}>
                Get the free plugin first
              </a>
              <span className="text-sm text-slate-500 dark:text-slate-500">No card required for the trial.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">Free is the whole paywall.</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
              The wp.org plugin is a real product, not a demo. Everything a single-price paywall needs ships free:
            </p>
            <ul className="flex flex-col gap-2">
              {FREE.map((f) => (
                <li key={f} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">Pro is the revenue tooling on top.</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">One plan. Flat rate. No cut of your revenue.</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Starts with a <strong>14-day free trial, no card required</strong>. Annual billing saves $99.
            </p>
          </div>
          <div className="max-w-md rounded-lg border border-blue-600 dark:border-blue-500 ring-1 ring-blue-600 dark:ring-blue-500 bg-white dark:bg-slate-900/50 p-6 flex flex-col">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Pro</h3>
            <div className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 font-mono">
              $249<span className="text-base text-slate-500 dark:text-slate-400 font-normal">/yr</span>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">or $29/month &middot; single site</p>
            <ul className="mt-4 mb-6 flex flex-col gap-2 flex-1">
              {[
                "Everything in free",
                "Access tiers, bundles, metered free articles, email-gated access",
                "Per-path pricing with wildcards, per-crawler rail routing",
                "Revenue dashboard, decision logs with export, retention control",
                "Daily and weekly email alerts",
                "Signed unlock webhooks",
                "Email support",
              ].map((f) => (
                <li key={f} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <ProBuyButton billing="annual" className={`${BTN_PRIMARY} w-full`}>
                Start free trial — $249/yr
              </ProBuyButton>
              <ProBuyButton billing="monthly" className={`${BTN_GHOST} w-full`}>
                Or $29/month
              </ProBuyButton>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
            EU VAT handled at checkout &middot; Cancel anytime from the customer portal &middot; Multi-site or agency?{" "}
            <a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:hello@crawlertoll.com?subject=CrawlerToll%20Pro%20multi-site">
              Talk to us
            </a>
          </p>

          <div id="ct-bought" className="hidden mt-8 rounded-lg border border-green-600 dark:border-green-500 bg-white dark:bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">✓ Purchase complete — welcome aboard.</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Check your inbox: Freemius just sent your <strong>license key</strong> and a download link for the Pro plugin. Install it alongside the free version (it deactivates automatically), then go to <strong>Settings → CrawlerToll → Account</strong> and paste the key. Questions?{" "}
              <a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:hello@crawlertoll.com">hello@crawlertoll.com</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">Live on your site in about ten minutes.</h2>
          </div>
          <ol className="flex flex-col gap-6 max-w-2xl">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex-none w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 flex items-center justify-center font-mono text-sm text-blue-600 dark:text-blue-400">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">{s.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
            Full setup guide: <Link href="/docs/getting-started/wordpress" className="text-blue-600 dark:text-blue-400 hover:underline">WordPress docs</Link> &middot; What the hosted part stores: <Link href="/docs/unlock-service" className="text-blue-600 dark:text-blue-400 hover:underline">Unlock service</Link>
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">The honest answers.</h2>
          </div>
          <div className="flex flex-col gap-3 max-w-3xl">
            {FAQ.map((f) => (
              <details key={f.q} className="group rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 px-5 py-4">
                <summary className="cursor-pointer font-semibold text-slate-900 dark:text-slate-100 list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-blue-600 dark:text-blue-400 text-lg font-normal group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
