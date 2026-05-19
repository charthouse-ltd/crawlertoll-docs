import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crawlertoll.com"),
  title: {
    default: "CrawlerToll — open-source middleware for the AI-crawler economy",
    template: "%s · CrawlerToll",
  },
  description:
    "Open-source Node middleware that implements RSL 1.0, Web Bot Auth, HTTP 402, and x402. Detect AI crawlers, apply policy, issue 402 with a structured payment offer. Apache 2.0.",
  openGraph: {
    title: "CrawlerToll",
    description:
      "Open-source middleware for the AI-crawler economy. RSL 1.0 + Web Bot Auth + HTTP 402 + x402.",
    url: "https://crawlertoll.com",
    siteName: "CrawlerToll",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrawlerToll",
    description:
      "Open-source middleware for the AI-crawler economy. RSL 1.0 + Web Bot Auth + HTTP 402 + x402.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
