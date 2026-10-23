"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { LinkPendingIndicator } from "@/components/common/LinkPendingIndicator";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export type NavItem = { href: string; label: string; exact?: boolean };

export function MobileMenu({
  locale,
  navItems,
  bookLabel,
  bookHref,
}: {
  locale: Locale;
  navItems: NavItem[];
  bookLabel: string;
  bookHref: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on Escape key
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const openLabel = locale === "ur" ? "مینیو کھولیں" : "Open menu";
  const closeLabel = locale === "ur" ? "مینیو بند کریں" : "Close menu";
  const pendingLabel = locale === "ur" ? "صفحہ لوڈ ہو رہا ہے" : "Loading page";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-pine-900/15 text-ink transition-colors hover:bg-pine-50 hover:text-pine-800 focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {/* Backdrop overlay */}
      {open && (
        <div
          className="fixed inset-0 top-[4.75rem] z-30 bg-ink/20 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer content */}
      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain border-b border-pine-900/10 bg-cream shadow-xl transition-all duration-200 ease-out lg:hidden",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 pointer-events-none opacity-0"
        )}
      >
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-5">
          {navItems.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname === item.href || (pathname?.startsWith(`${item.href}/`) ?? false);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex min-h-[44px] items-center rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                  isActive
                    ? "bg-pine-800 text-white font-semibold shadow-xs"
                    : "text-ink hover:bg-pine-50 hover:text-pine-900"
                )}
              >
                {item.label}
                <LinkPendingIndicator label={pendingLabel} />
              </Link>
            );
          })}

          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#1FA855] px-6 py-3.5 font-semibold text-white shadow-xs transition-colors hover:bg-[#178f47] focus-visible:ring-2 focus-visible:ring-[#1FA855] focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {bookLabel}
          </a>

          <div className="mt-4 flex items-center justify-between border-t border-pine-900/10 pt-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-pine-700">
              {locale === "ur" ? "زبان منتخب کریں" : "Language"}
            </span>
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      </div>
    </div>
  );
}
