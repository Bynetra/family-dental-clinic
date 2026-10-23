/**
 * Thin demo notice shown at the top of every page.
 * Clearly communicates that this is a client preview, not a live site.
 */
export function DemoBanner() {
  return (
    <div className="relative z-50 w-full bg-teal-800 px-4 py-2 text-center text-xs font-medium text-teal-100">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="inline-flex items-center gap-1.5 font-semibold text-teal-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-300 animate-pulse" />
          Demo Preview
        </span>
        <span className="hidden sm:inline text-teal-400">—</span>
        <span className="text-white/85">
          Clinic details, team profiles, and imagery are illustrative placeholders only.
        </span>
      </div>
    </div>
  );
}
