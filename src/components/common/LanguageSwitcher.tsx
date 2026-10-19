"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const items: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "English" },
  { code: "ur", label: "اردو" },
];

/**
 * Switches the locale prefix of the current route (e.g. /en/services ↔
 * /ur/services), preserving the page the visitor is on.
 */
export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();

  const hrefFor = (target: Locale) => {
    const segments = (pathname || `/${locale}`).split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <div
      role="group"
      aria-label="Language / زبان"
      className={cn(
        "flex items-center gap-1 rounded-full border border-pine-900/15 bg-white/70 p-1 text-sm",
        className
      )}
    >
      {items.map((item) => {
        const active = item.code === locale;
        return (
          <Link
            key={item.code}
            href={hrefFor(item.code)}
            hrefLang={item.code}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-3 py-1 transition-colors",
              active ? "bg-pine-800 text-white" : "text-ink/70 hover:text-ink"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
