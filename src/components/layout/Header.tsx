"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { Logo } from "@/components/common/Logo";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/utils";

export type NavItem = { href: string; label: string; exact?: boolean };

export function Header({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolledRef = useRef(false);
  const pathname = usePathname();
  const isUrdu = locale === "ur";

  // Scroll listener with hysteresis to prevent oscillation / flickering
  useEffect(() => {
    let ticking = false;

    function updateScroll() {
      const y = window.scrollY;
      const wasScrolled = scrolledRef.current;

      // Hysteresis thresholds:
      // Activate at > 28px, deactivate at < 10px
      let nextScrolled = wasScrolled;
      if (!wasScrolled && y > 28) {
        nextScrolled = true;
      } else if (wasScrolled && y < 10) {
        nextScrolled = false;
      }

      if (nextScrolled !== wasScrolled) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    }

    // Initial check on mount
    updateScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prevPathRef = useRef(pathname);

  // Close mobile drawer whenever route changes
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setMobileOpen(false);
    }
  }, [pathname]);

  const handleToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const navItems: NavItem[] = [
    { href: `/${locale}`,          label: isUrdu ? "ہوم" : "Home",        exact: true },
    { href: `/${locale}/services`,  label: isUrdu ? "سروسز" : "Services" },
    { href: `/${locale}/about`,     label: isUrdu ? "تعارف" : "About Us" },
    { href: `/${locale}/team`,      label: isUrdu ? "ہماری ٹیم" : "Our Team" },
    { href: `/${locale}/contact`,   label: isUrdu ? "رابطہ کریں" : "Visit Us" },
  ];

  return (
    <>
      {/*
        Fixed-height outer spacer (h-20 / 80px)
        Ensures the document flow height never shifts on scroll (CLS = 0).
      */}
      <header
        className={cn(
          "sticky top-0 z-50 h-20 w-full transition-[background-color,box-shadow,border-color] duration-200",
          scrolled
            ? "border-b border-teal-900/10 bg-[#FAF8F3]/95 shadow-nav backdrop-blur-md"
            : "border-b border-transparent bg-[#FAF8F3]/80 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo — scale slightly via transform on scroll without layout shift */}
          <div
            className={cn(
              "shrink-0 transition-transform duration-200 origin-start",
              scrolled ? "scale-95" : "scale-100",
            )}
          >
            <Logo locale={locale} />
          </div>

          {/* Desktop Center Navigation */}
          <DesktopNav navItems={navItems} />

          {/* Right Action Group: Language Switcher + Book CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher — desktop & tablet */}
            <div className="hidden sm:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>

            {/* Book Appointment CTA Button — desktop */}
            <Link
              href={`/${locale}/contact`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-teal-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
            >
              <Calendar className="h-4 w-4 text-mint-300" aria-hidden="true" />
              <span>{isUrdu ? "وقت حاصل کریں" : "Book Visit"}</span>
            </Link>

            {/* Mobile Hamburger / Close Button + Drawer */}
            <MobileMenu
              locale={locale}
              navItems={navItems}
              open={mobileOpen}
              onToggle={handleToggle}
              onClose={handleClose}
            />
          </div>
        </div>
      </header>
    </>
  );
}
