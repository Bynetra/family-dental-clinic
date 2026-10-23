"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Calendar,
  Home,
  Sparkles,
  Info,
  Users,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import type { NavItem } from "./Header";
import { site } from "@/config/site";
import { Logo } from "@/components/common/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home,
  Services: Sparkles,
  About: Info,
  "About Us": Info,
  "Our Team": Users,
  "Visit Us": MapPin,
  ہوم: Home,
  سروسز: Sparkles,
  تعارف: Info,
  "ہماری ٹیم": Users,
  "رابطہ کریں": MapPin,
};

export function MobileMenu({
  locale,
  navItems,
  open,
  onToggle,
  onClose,
}: {
  locale: Locale;
  navItems: NavItem[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isUrdu = locale === "ur";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Escape key listener to close drawer
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Prevent background scrolling while drawer is open
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  // Direction-aware slide animation: from right in LTR, from left in RTL
  const slideVariants = {
    closed: {
      x: isUrdu ? "-100%" : "100%",
      transition: { type: "spring", stiffness: 350, damping: 35 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 350, damping: 35 },
    },
  };

  const drawerContent = (
    <AnimatePresence>
      {open && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label={isUrdu ? "موبائل نیویگیشن" : "Mobile navigation"}
          className="fixed inset-0 z-[9999] lg:hidden"
        >
          {/* Dimmed backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-teal-950/65 backdrop-blur-sm"
          />

          {/* End-side sliding panel with 100% solid, opaque ivory background */}
          <motion.aside
            variants={slideVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={cn(
              "fixed top-0 bottom-0 z-[10000] flex h-full w-[88vw] max-w-[390px] flex-col bg-[#FAF8F3] shadow-2xl border-teal-900/15",
              isUrdu ? "left-0 border-r" : "right-0 border-l",
            )}
          >
            {/* Drawer Header: Logo + Close Button */}
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-teal-900/10 px-5 bg-[#FAF8F3]">
              <Logo locale={locale} />
              <button
                type="button"
                onClick={onClose}
                aria-label={isUrdu ? "مینو بند کریں" : "Close menu"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-900/15 bg-white text-ink shadow-xs transition-colors hover:bg-teal-50 hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <X className="h-5 w-5 text-teal-900" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Drawer Body */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5 space-y-5 bg-[#FAF8F3]">
              {/* Language Switcher Row */}
              <div className="flex items-center justify-between rounded-2xl border border-teal-900/10 bg-white/80 p-3 shadow-2xs">
                <span className="text-xs font-semibold text-muted">
                  {isUrdu ? "زبان منتخب کریں" : "Language"}
                </span>
                <LanguageSwitcher currentLocale={locale} />
              </div>

              {/* Navigation Links with Staggered Entrance */}
              <nav
                aria-label="Mobile navigation links"
                className="flex flex-col gap-1.5"
              >
                {navItems.map((item, index) => {
                  const isActive = item.exact
                    ? pathname === item.href
                    : pathname === item.href ||
                      (pathname?.startsWith(`${item.href}/`) ?? false);

                  const Icon = navIcons[item.label] ?? ArrowRight;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: isUrdu ? -12 : 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04 + 0.1,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex min-h-[52px] items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold transition-all",
                          isActive
                            ? "bg-teal-800 text-white shadow-md shadow-teal-950/10"
                            : "text-ink hover:bg-teal-50 hover:text-teal-900 active:bg-teal-100",
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-xl transition-colors",
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-teal-800/10 text-teal-800",
                            )}
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span>{item.label}</span>
                        </span>

                        {isActive ? (
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-mint-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-mint-300 animate-pulse" />
                            <span>{isUrdu ? "موجودہ" : "Active"}</span>
                          </span>
                        ) : (
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 text-teal-900/35 transition-transform group-hover:translate-x-0.5",
                              isUrdu && "rotate-180",
                            )}
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Primary CTA Button */}
              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  onClick={onClose}
                  className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-teal-800 px-6 py-3.5 text-[15px] font-bold text-white shadow-md transition-all hover:bg-teal-700 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <Calendar className="h-5 w-5 text-mint-300" aria-hidden="true" />
                  <span>
                    {isUrdu ? "وقت بک کریں" : "Request an Appointment"}
                  </span>
                </Link>
              </div>

              {/* Clinic Quick Information Card */}
              <div className="rounded-2xl border border-teal-900/12 bg-white/90 p-4 text-xs shadow-2xs">
                <div className="flex items-center justify-between font-bold text-teal-950">
                  <span className="font-display text-sm">{site.name}</span>
                  <span className="rounded-full bg-teal-100/90 px-2 py-0.5 text-[11px] font-semibold text-teal-800">
                    {isUrdu ? "فیملی ڈینٹل" : "Private Practice"}
                  </span>
                </div>

                <div className="mt-3.5 flex flex-col gap-2.5 text-ink/80">
                  <a
                    href={`tel:${(site.phoneDisplay || "+1-555-234-5678").replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-2.5 font-semibold text-teal-800 transition-colors hover:text-teal-950"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-100/70 text-teal-800">
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{site.phoneDisplay || "+1 (555) 234-5678"}</span>
                  </a>

                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-100/70 text-teal-800">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>
                      {isUrdu
                        ? "پیر تا جمعہ: صبح 8 تا شام 6"
                        : "Mon – Fri: 8:00 AM – 6:00 PM"}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-100/70 text-teal-800 mt-0.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="leading-snug">{site.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      {/* Header Hamburger Toggle Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="mobile-navigation-drawer"
        aria-label={
          open
            ? isUrdu
              ? "مینو بند کریں"
              : "Close menu"
            : isUrdu
              ? "مینو کھولیں"
              : "Open menu"
        }
        className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full border border-teal-900/15 bg-white/90 text-ink shadow-xs transition-colors hover:bg-teal-50 hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
      >
        <span className="sr-only">
          {open ? "Close menu" : "Open navigation menu"}
        </span>
        {open ? (
          <X className="h-5 w-5 text-teal-900" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5 text-teal-900" aria-hidden="true" />
        )}
      </button>

      {/* Render Portal directly into document.body to escape header's backdrop-filter containing block */}
      {mounted && createPortal(drawerContent, document.body)}
    </div>
  );
}
