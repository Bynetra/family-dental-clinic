import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

export function Logo({
  locale,
  inverse = false,
  compact = false,
}: {
  locale: Locale;
  inverse?: boolean;
  compact?: boolean;
}) {
  const teal = inverse ? "#ffffff" : "#0F3D44";
  const accent = inverse ? "#4FD1B8" : "#2B8C7E";
  const isUrdu = locale === "ur";

  return (
    <Link
      href={`/${locale}`}
      aria-label="Family Dental Clinic — Home"
      className="inline-flex items-center gap-0 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:rounded-sm"
    >
      {/* Tooth mark SVG */}
      <svg
        width="38"
        height="42"
        viewBox="0 0 60 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Tooth body */}
        <path
          d="M20 10 C12 10 6 16 6 24 C6 32 8 42 13 51 C15.5 57 19 62 21.5 62 C24 62 25 59.5 26 55.5 C27 51.5 28.5 49.5 30 49.5 C31.5 49.5 33 51.5 34 55.5 C35 59.5 36 62 38.5 62 C41 62 44.5 57 47 51 C52 42 54 32 54 24 C54 16 48 10 40 10 C36 10 33.5 12 30 12 C26.5 12 24 10 20 10Z"
          fill={teal}
        />
        {/* Smile arc */}
        <path
          d="M18 29 Q30 39 42 29"
          stroke={inverse ? "#4FD1B8" : "#FAF8F3"}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Root highlights */}
        <circle cx="23" cy="59" r="3.5" fill={accent} opacity={inverse ? 0.6 : 0.8} />
        <circle cx="37" cy="59" r="3.5" fill={accent} opacity={inverse ? 0.6 : 0.8} />
      </svg>

      {!compact && (
        <div className="ms-2.5 flex flex-col leading-tight">
          <span
            className="font-display text-[17px] font-800 tracking-tight"
            style={{ color: teal, fontWeight: 800 }}
          >
            {isUrdu ? "فیملی ڈینٹل" : "Family Dental"}
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            {isUrdu ? "کلینک" : "CLINIC"}
          </span>
        </div>
      )}
    </Link>
  );
}
