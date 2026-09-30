import type { MetadataRoute } from "next";

// Our own marketing and docs pages are meant to be found and quoted, by search
// engines and AI assistants alike (we used to block GPTBot/ClaudeBot here).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://crawlertoll.com/sitemap.xml",
  };
}
