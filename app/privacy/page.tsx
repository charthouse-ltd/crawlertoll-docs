import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Privacy — CrawlerToll",
  description:
    "What CrawlerToll collects and what it does not: this website, the WordPress plugin, the hosted unlock service, and the payment rails. Charthouse Ltd is the controller for the unlock service; publishers are the controller for their own sites.",
  alternates: { canonical: "https://crawlertoll.com/privacy" },
};

const H2 = "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-12 mb-3";
const P = "text-slate-600 dark:text-slate-400 leading-relaxed mb-4";
const UL = "list-disc pl-6 text-slate-600 dark:text-slate-400 leading-relaxed mb-4 space-y-1";

export default function PrivacyPage() {
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">Privacy</h1>
        <p className="text-sm text-slate-500 dark:text-slate-500 mb-8">Last updated 29 September 2026 · Charthouse Ltd, company 12795844, England and Wales ·<a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:hello@crawlertoll.com">hello@crawlertoll.com</a></p>

        <p className={P}>
          CrawlerToll is built so that as little data as possible reaches us. Article text never leaves the publisher&apos;s site in the clear, card details never touch our systems, and we hold no payment credentials. This page says exactly what each part handles.
        </p>

        <h2 className={H2}>This website</h2>
        <p className={P}>
          crawlertoll.com sets no cookies and runs no analytics. It is hosted on Vercel, whose edge network keeps standard server logs (IP address, user agent, requested URL) for a short period for security and operations. If you click a purchase button on <Link href="/pro" className="text-blue-600 dark:text-blue-400 hover:underline">/pro</Link>, the Freemius checkout loads in your browser; Freemius is the merchant of record for Pro subscriptions and processes your name, email and payment under its own <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://freemius.com/privacy/">privacy policy</a>. We receive your name, email, and license status from Freemius so we can support you.
        </p>

        <h2 className={H2}>The WordPress plugin</h2>
        <p className={P}>
          The plugin runs on the publisher&apos;s own server. The publisher, not Charthouse, is the controller for their site. Crawler recognition, RSL policy and plain 402 responses run entirely locally and send nothing anywhere. The Pro plugin optionally contacts Freemius for license validation and can keep decision logs in the publisher&apos;s own database, under a retention window the publisher sets.
        </p>

        <h2 className={H2}>The unlock service (registry.crawlertoll.com)</h2>
        <p className={P}>
          The sealed paywall uses a small hosted service operated by Charthouse Ltd. For it, Charthouse is the controller. It stores, per sealed post: the content key, the content id (the site&apos;s host name and post number), the price and pricing rules, and the publisher&apos;s wallet address. It never receives the article text, card numbers, or wallet private keys. When someone unlocks a post it records a receipt: content id, payment rail, a transaction reference (a Stripe PaymentIntent id or an on-chain transaction hash and payer address), and the time. Publishers can read these receipts back. Readers are identified only by an opaque device token they choose to send, or by a payer wallet address on the USDC rail, which is public on-chain by design.
        </p>
        <ul className={UL}>
          <li><strong>Metered free articles</strong> (Pro): the reader&apos;s free-allowance identity is a random token in their browser. To limit abuse, the service keeps a salted, daily-rotating hash of the IP address for the metering window; the raw address is not stored.</li>
          <li><strong>Email-gated access</strong> (Pro): the reader&apos;s email address and consent record are stored by the publisher&apos;s WordPress, which is the controller for them. The unlock service keeps only a SHA-256 hash of the address and sends the one-time access link.</li>
          <li><strong>Unlock webhooks</strong> (Pro): if the publisher configures a webhook, unlock events are delivered to the URL they chose, signed with their own secret.</li>
        </ul>
        <p className={P}>
          The service runs on Cloudflare Workers, KV and D1 (Cloudflare, Inc. as processor). Single-use payment references expire automatically. Content keys, pricing rules and receipts are kept for the publisher&apos;s records until the publisher asks us to delete them; we delete them within 30 days of that request, except records the law requires us to keep.
        </p>

        <h2 className={H2}>Payments</h2>
        <ul className={UL}>
          <li><strong>Cards, Apple Pay, Google Pay:</strong> run on the publisher&apos;s own Stripe account. The card form is Stripe&apos;s, loaded in the reader&apos;s browser; card data goes to Stripe only. The publisher&apos;s server and the unlock service see a PaymentIntent id, amount and status, nothing more. Stripe&apos;s <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://stripe.com/privacy">privacy policy</a> applies.</li>
          <li><strong>USDC over x402:</strong> the reader&apos;s or agent&apos;s wallet signs an authorisation which a third-party facilitator settles on the Base blockchain into the publisher&apos;s wallet. The transaction, including both wallet addresses and the amount, is public on-chain by the nature of the network. The default facilitator is xpay (facilitator.xpay.sh); publishers can choose another.</li>
        </ul>
        <p className={P}>Charthouse never holds a Stripe secret, a payment-platform account, or a facilitator key, and never takes a share of any payment.</p>

        <h2 className={H2}>Who we are</h2>
        <p className={P}>
          The controller for this website and the unlock service is Charthouse Ltd, a private limited company registered in England and Wales under company number{" "}
          <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://find-and-update.company-information.service.gov.uk/company/12795844">12795844</a>, registered office 71-75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom.
        </p>

        <h2 className={H2}>Your rights and contact</h2>
        <p className={P}>
          Under the UK GDPR and, where it applies, the EU GDPR you can ask us what we hold about you, ask for it to be corrected or deleted, and object to processing. For anything relating to a specific publisher&apos;s site, including email-gate records, contact that publisher; they are the controller. For the unlock service or this website, email <a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:hello@crawlertoll.com">hello@crawlertoll.com</a>. You can also complain to the UK Information Commissioner&apos;s Office.
        </p>
      </main>
      <Footer />
    </>
  );
}
