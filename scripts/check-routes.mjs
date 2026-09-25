// Fetch the built site's sitemap and require HTTP 200 for every URL in it,
// plus the pages the plugin and readme link to. Run against `next start`.
//   BASE=http://127.0.0.1:3000 node scripts/check-routes.mjs
const BASE = (process.env.BASE || "http://127.0.0.1:3000").replace(/\/$/, "");
const EXTRA = ["/pro", "/privacy", "/docs/unlock-service", "/docs/refunds", "/docs/traffic", "/robots.txt", "/sitemap.xml"];

const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const all = [...new Set([...paths, ...EXTRA])];
let bad = 0;
for (const p of all) {
  const r = await fetch(BASE + p, { redirect: "manual" });
  const ok = r.status === 200;
  if (!ok) bad++;
  console.log(`${ok ? "ok  " : "FAIL"} ${r.status} ${p}`);
}
console.log(`${all.length} routes, ${bad} failing`);
process.exit(bad ? 1 : 0);
