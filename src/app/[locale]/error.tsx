"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App boundary error caught:", error.message);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-ivory px-6 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-800/10 text-teal-800">
        <AlertCircle className="h-8 w-8" aria-hidden="true" />
      </div>
      <h1 className="mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        An unexpected error occurred while loading this page. Please try refreshing or return to the home page.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Try again
        </button>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 rounded-full border border-teal-800/25 bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-50"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
