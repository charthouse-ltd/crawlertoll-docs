"use client";

/**
 * Freemius checkout island for the /pro sales page.
 *
 * Pro is sold via Freemius (NOT wp.org — wp.org only gates the free funnel).
 * Plugin id + public key match the premium build's Freemius init config
 * (deploy/crawlertoll-wp/crawlertoll.php). Single plan for launch (decision
 * 2026-07-28): plan 53319 "pro" — $29/mo or $249/yr, 14-day trial, no card.
 * Checkout failure (ad blocker, offline) falls back to mailto: a lost sale is
 * worse than an email.
 */

import { useCallback, useState } from "react";

const CT_FREEMIUS = {
  plugin_id: "32506",
  public_key: "pk_30f053472ea39ed708f0b537b1a50",
  plan_id: "53319",
};

// Freemius checkout JS v1 (verified live 2026-09-06): `FS.Checkout` is a
// CLASS — `new FS.Checkout({...}).open({...})`. The older
// `FS.Checkout.configure()` no longer exists; calling it throws and the buy
// button would silently fall back to mailto. Both `product_id` (current) and
// `plugin_id` (legacy) are sent so either API generation resolves the product.
type FsCheckoutHandler = { open: (args: Record<string, unknown>) => void; close: () => void };
declare global {
  interface Window {
    FS?: {
      Checkout?: new (cfg: Record<string, unknown>) => FsCheckoutHandler;
    };
  }
}

let fsLoader: Promise<NonNullable<Window["FS"]>> | null = null;
function loadFreemius(): Promise<NonNullable<Window["FS"]>> {
  if (window.FS?.Checkout) return Promise.resolve(window.FS);
  if (!fsLoader) {
    fsLoader = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://checkout.freemius.com/js/v1/";
      s.onload = () => (window.FS?.Checkout ? resolve(window.FS) : reject(new Error("freemius unavailable")));
      s.onerror = () => reject(new Error("freemius script blocked"));
      document.head.appendChild(s);
      // A hung script load must not strand the buy button — treat as blocked.
      setTimeout(() => reject(new Error("freemius load timed out")), 8000);
    });
  }
  return fsLoader;
}

export function ProBuyButton({
  billing = "annual",
  className = "",
  children,
}: {
  billing?: "annual" | "monthly";
  className?: string;
  children: React.ReactNode;
}) {
  const [busy, setBusy] = useState(false);
  const buy = useCallback(async () => {
    setBusy(true);
    try {
      const FS = await loadFreemius();
      const handler = new FS.Checkout!({
        product_id: CT_FREEMIUS.plugin_id,
        plugin_id: CT_FREEMIUS.plugin_id,
        public_key: CT_FREEMIUS.public_key,
      });
      handler.open({
        name: "CrawlerToll Pro",
        licenses: 1,
        plan_id: CT_FREEMIUS.plan_id,
        billing_cycle: billing,
        trial: "free",
        purchase_completed: () => {
          document.getElementById("ct-bought")?.classList.remove("hidden");
          document.getElementById("ct-bought")?.scrollIntoView({ behavior: "smooth", block: "center" });
        },
      });
    } catch {
      window.location.href = "mailto:hello@crawlertoll.com?subject=CrawlerToll%20Pro";
    } finally {
      setBusy(false);
    }
  }, [billing]);
  return (
    <button type="button" onClick={buy} disabled={busy} className={className} data-ct-buy={billing}>
      {busy ? "Opening checkout…" : children}
    </button>
  );
}
