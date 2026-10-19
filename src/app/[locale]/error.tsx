"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { LinkPendingIndicator } from "@/components/common/LinkPendingIndicator";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely without exposing sensitive details
    console.error("App boundary error caught:", error.message);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-6 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700">
        <AlertCircle className="h-8 w-8" aria-hidden="true" />
      </div>
      <h1 className="mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">
        Something went wrong / کوئی مسئلہ پیش آ گیا ہے
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
        An unexpected error occurred while loading this page. Please try refreshing, or contact the clinic directly via WhatsApp.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-full bg-pine-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-700 focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Try again / دوبارہ کوشش کریں
        </button>
        <a
          href={whatsappUrl("Hello Dr. Farhan, I encountered an issue on the clinic website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1FA855] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#178f47]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp: {site.phoneDisplay}
        </a>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 rounded-full border border-pine-800/20 bg-white px-6 py-3 text-sm font-semibold text-pine-800 hover:bg-pine-50"
        >
          Home
          <LinkPendingIndicator label="Loading home page / ہوم پیج لوڈ ہو رہا ہے" />
        </Link>
      </div>
    </main>
  );
}

