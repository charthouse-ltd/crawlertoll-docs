/**
 * The product in one picture: a real article that ends mid-thought, a wax
 * seal, and what everyone without a key actually gets — ciphertext.
 */
const CIPHER =
  "b3ZlcmxvYWQgaW4gdGhlIHNlYXNvbiBvZiBncmFwaHM 7Q2f9x MbW5Iz2hV8 kq0Ln tJ4e c9Xw1 pR7yA 3nGd0 Zt2Vb 8mHqK jL5Pc Wx9Ry aC1uE dF6hI oB4kN sM7tQ vY0zJ Ue3gT rH8iA lD2wS nK5xC 9qO1L bV6mP fG3jZ tX0eR cQ7yW hN4aM uI8kB zE2vD oS5nT gL9pF yA1rH wC6bJ mK3xU eT0dQ iV7lZ";

export function SealedArticle() {
  return (
    <div className="relative rise-3" aria-label="A sealed article: preview, seal, encrypted body">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-7 shadow-[0_24px_60px_-30px_rgba(21,26,33,.35)]">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-3">The Weekly Ledger · Analysis</div>
        <h3 className="font-display text-2xl leading-tight text-slate-900 dark:text-slate-100 mb-3">Why the next paywall is not a wall at all</h3>
        <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          For twenty years publishers have asked the visitor who they are and hoped for an honest answer. Crawlers lied, caches leaked, and the article was always right there in the HTML for anyone who cared to look. The fix is not a better question. It is
        </p>
        <div className="relative my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          <div className="seal-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="10" width="14" height="10" rx="2.5" />
              <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
            </svg>
          </div>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <p className="cipher" aria-hidden="true">{CIPHER}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[12px]">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2">
            <div className="font-semibold text-slate-900 dark:text-slate-100">Reader</div>
            <div className="text-slate-500">pays by card → key released</div>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2">
            <div className="font-semibold text-slate-900 dark:text-slate-100">AI agent</div>
            <div className="text-slate-500">pays in USDC → key released</div>
          </div>
        </div>
      </div>
      <div className="absolute -left-4 -bottom-4 -z-10 h-full w-full rounded-2xl bg-[#f5ecd4] dark:bg-[#2a2415]" aria-hidden="true" />
    </div>
  );
}
