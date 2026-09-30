import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

// Sealed system (redesign 2026-09-06): a characterful editorial serif for
// display, a crisp grotesk for body. Self-hosted by next/font — no request to
// Google at runtime (EU privacy), no layout shift.
const display = Fraunces({ subsets: ["latin"], axes: ["opsz", "SOFT"], variable: "--font-display", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const DESC =
  "The WordPress paywall where the content itself is the lock. Premium posts are encrypted in the page until a reader or AI agent pays you directly, by card on your own Stripe or in USDC. No cut taken. Also recognises 30 declared AI-crawler user-agents and answers them with a priced HTTP 402.";

export const metadata: Metadata = {
  metadataBase: new URL("https://crawlertoll.com"),
  title: {
    default: "CrawlerToll — Encrypt your content. The WordPress paywall where the content is the lock",
    template: "%s · CrawlerToll",
  },
  description: DESC,
  keywords: [
    "WordPress paywall", "sell articles WordPress", "pay per article", "Stripe paywall",
    "encrypted paywall", "AI crawler", "GPTBot", "HTTP 402", "x402", "RSL 1.0",
    "AI content licensing", "no revenue share paywall",
  ],
  openGraph: {
    title: "CrawlerToll — Encrypt your content",
    description: "The WordPress paywall where the content itself is the lock. Readers and AI agents pay you directly. No cut taken.",
    siteName: "CrawlerToll",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrawlerToll — Encrypt your content",
    description: "The WordPress paywall where the content itself is the lock. Readers and AI agents pay you directly. No cut taken.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  // Each page's own URL (a fixed homepage canonical here was inherited by every
  // docs page and told search engines to drop them).
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`h-full ${display.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CrawlerToll",
              applicationCategory: "BusinessApplication",
              operatingSystem: "WordPress",
              description: DESC,
              url: "https://crawlertoll.com",
              author: {
                "@type": "Organization",
                name: "Charthouse Ltd",
                url: "https://crawlertoll.com",
              },
              license: "https://www.apache.org/licenses/LICENSE-2.0",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
