"use client";

import { useLinkStatus } from "next/link";

export function LinkPendingIndicator({ label }: { label: string }) {
  const { pending } = useLinkStatus();

  if (!pending) return null;

  return (
    <>
      <span
        aria-hidden="true"
        className="route-progress fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-pine-950/10"
      >
        <span className="route-progress__bar block h-full w-1/3 bg-gradient-to-r from-pine-700 via-pine-500 to-emerald-400 shadow-[0_0_10px_rgba(31,107,102,0.55)]" />
      </span>
      <span className="sr-only" role="status" aria-live="polite">
        {label}
      </span>
    </>
  );
}
