"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  currentLocale,
  className,
}: {
  currentLocale: Locale;
  className?: string;
}) {
  const pathname = usePathname() || `/${currentLocale}`;

  // Helper to replace the locale prefix in current path
  const getTargetPath = (targetLocale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
      return `/${segments.join("/")}`;
    }
    return `/${targetLocale}/${segments.join("/")}`;
  };

  const isEn = currentLocale === "en";

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn(
        "relative inline-flex items-center rounded-full border border-teal-900/12 bg-white/80 p-0.5 shadow-xs backdrop-blur-sm",
        className,
      )}
    >
      <span className="flex items-center ps-2 pe-1 text-teal-800/80" aria-hidden="true">
        <Globe className="h-3.5 w-3.5" />
      </span>

      {/* English option */}
      <Link
        href={getTargetPath("en")}
        aria-current={isEn ? "true" : undefined}
        className={cn(
          "relative z-10 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700",
          isEn ? "text-white" : "text-ink/70 hover:text-teal-900",
        )}
      >
        {isEn && (
          <motion.span
            layoutId="lang-switcher-active"
            className="absolute inset-0 rounded-full bg-teal-800 shadow-xs"
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </Link>

      {/* Urdu option */}
      <Link
        href={getTargetPath("ur")}
        aria-current={!isEn ? "true" : undefined}
        className={cn(
          "relative z-10 rounded-full px-2.5 py-1 font-urdu text-[13px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700",
          !isEn ? "text-white" : "text-ink/70 hover:text-teal-900",
        )}
      >
        {!isEn && (
          <motion.span
            layoutId="lang-switcher-active"
            className="absolute inset-0 rounded-full bg-teal-800 shadow-xs"
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
          />
        )}
        <span className="relative z-10">اردو</span>
      </Link>
    </div>
  );
}
