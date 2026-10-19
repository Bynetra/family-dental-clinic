import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}`}
      className="flex shrink-0 items-center gap-2.5"
      aria-label={locale === "ur" ? "میاں چنوں فیزیو ری ہیب — ہوم" : "Mian Channu Physio Rehab — Home"}
    >
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect width="48" height="48" rx="12" className="fill-pine-800" />
        <path
          d="M10 30c6-12 22-12 28 0"
          stroke="#9DBBA6"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M14 30h6l3-8 4 14 3-6h6"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="leading-tight">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
          Mian Channu
        </span>
        <span className="block font-display text-lg font-semibold text-ink">
          Physio Rehab
        </span>
      </span>
    </Link>
  );
}
