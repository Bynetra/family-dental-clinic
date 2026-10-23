"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavItem } from "./Header";

export function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden lg:flex items-center gap-1 rounded-full border border-teal-900/10 bg-white/75 p-1.5 shadow-xs backdrop-blur-md"
    >
      {navItems.map((item) => {
        const isActive = item.exact
          ? pathname === item.href
          : pathname === item.href || (pathname?.startsWith(`${item.href}/`) ?? false);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700",
              isActive
                ? "text-white"
                : "text-ink/75 hover:text-teal-900 hover:bg-teal-800/5",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="desktop-nav-active-pill"
                className="absolute inset-0 rounded-full bg-teal-800 shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {isActive && (
                <span
                  className="h-1.5 w-1.5 rounded-full bg-mint-300"
                  aria-hidden="true"
                />
              )}
              <span>{item.label}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
