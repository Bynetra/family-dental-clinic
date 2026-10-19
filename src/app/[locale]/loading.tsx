export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24" aria-busy="true" aria-label="Loading page...">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto h-4 w-28 animate-pulse rounded-full bg-pine-800/10" />
        <div className="mx-auto mt-4 h-10 w-3/4 animate-pulse rounded-2xl bg-pine-800/15" />
        <div className="mx-auto mt-4 h-5 w-1/2 animate-pulse rounded-xl bg-pine-800/10" />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex h-56 animate-pulse flex-col rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card"
          >
            <div className="h-12 w-12 rounded-2xl bg-pine-800/10" />
            <div className="mt-5 h-6 w-3/4 rounded-xl bg-pine-800/15" />
            <div className="mt-3 h-4 w-full rounded-lg bg-pine-800/10" />
            <div className="mt-2 h-4 w-4/5 rounded-lg bg-pine-800/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

