"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
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

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-pine-900/15 text-ink"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full border-b border-pine-900/10 bg-cream shadow-card transition-[opacity,transform] lg:hidden",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-pine-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-pine-800 px-5 py-3 font-semibold text-white"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {bookLabel}
          </a>
          <div className="mt-3 flex justify-center pb-1">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      </div>
    </div>
  );
}
