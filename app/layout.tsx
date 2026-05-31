import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crawlertoll.com"),
  title: {
    default: "CrawlerToll — Make AI Crawlers Pay. Open-Source Middleware for HTTP 402, RSL 1.0 & Web Bot Auth.",
    template: "%s · CrawlerToll",
  },
  description:
    "Open-source Node & WordPress middleware for the AI-crawler economy. Detect 30+ AI bots (GPTBot, ClaudeBot, PerplexityBot), apply RSL 1.0 policy, issue HTTP 402 Payment Required with structured offers. Vendor-neutral — works with Cloudflare, TollBit, Skyfire, x402, Stripe. Apache 2.0.",
  keywords: [
    "AI crawler", "GPTBot", "ClaudeBot", "HTTP 402", "pay per crawl",
    "RSL 1.0", "Web Bot Auth", "x402", "AI content licensing",
    "WordPress AI crawler", "block AI bots", "monetize AI traffic",
    "context license", "crawler toll", "Node middleware",
    "Express middleware", "Fastify plugin", "Hono middleware",
    "Next.js middleware", "AI bot detection",
  ],
  openGraph: {
    title: "CrawlerToll — Make AI Crawlers Pay",
    description:
      "Open-source middleware for the AI-crawler economy. Detect AI bots, apply RSL 1.0 policy, issue HTTP 402. WordPress + Node + Edge. Apache 2.0.",
    url: "https://crawlertoll.com",
    siteName: "CrawlerToll",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrawlerToll — Make AI Crawlers Pay",
    description:
      "Open-source middleware for the AI-crawler economy. HTTP 402 + RSL 1.0 + Web Bot Auth. WordPress plugin + Node adapters. Apache 2.0.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://crawlertoll.com",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CrawlerToll",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Linux, macOS, Windows, Cloudflare Workers, Vercel Edge",
              description:
                "Open-source middleware for the AI-crawler economy. Detects AI crawlers, applies RSL 1.0 policy, and issues HTTP 402 Payment Required with structured payment offers.",
              url: "https://crawlertoll.com",
              author: {
                "@type": "Organization",
                name: "Charthouse Ltd",
                url: "https://charthouse.io",
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
