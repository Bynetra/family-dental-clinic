export default function Loading() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-cream to-white"
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-full border border-pine-900/10 bg-white/85 px-5 py-3 text-center shadow-xs">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine-800/10 text-pine-800"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M3 13h4l2-5 3 9 2-4h7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="route-loading-copy--en text-sm font-semibold text-ink/75">
            Preparing your page…
          </span>
          <span
            lang="ur"
            dir="rtl"
            className="route-loading-copy--ur text-sm font-semibold text-ink/75"
          >
            صفحہ لوڈ ہو رہا ہے…
          </span>
        </div>

        <div className="mt-10 animate-pulse" aria-hidden="true">
          <div className="mx-auto h-3 w-28 rounded-full bg-pine-800/10" />
          <div className="mx-auto mt-4 h-9 max-w-xl rounded-2xl bg-pine-800/10" />
          <div className="mx-auto mt-3 h-4 max-w-2xl rounded-full bg-pine-800/[0.07]" />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-44 rounded-3xl border border-pine-900/[0.07] bg-white p-6 shadow-xs"
              >
                <div className="h-10 w-10 rounded-2xl bg-pine-800/10" />
                <div className="mt-5 h-5 w-2/3 rounded-full bg-pine-800/10" />
                <div className="mt-3 h-3 w-full rounded-full bg-pine-800/[0.07]" />
                <div className="mt-2 h-3 w-4/5 rounded-full bg-pine-800/[0.07]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
