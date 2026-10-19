"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LinkPendingIndicator } from "@/components/common/LinkPendingIndicator";
import type { Locale } from "@/lib/i18n/config";
import type { NavItem } from "./MobileMenu";

export function DesktopNav({
  navItems,
  locale,
}: {
  navItems: NavItem[];
  locale: Locale;
}) {
  const pathname = usePathname();
  const pendingLabel = locale === "ur" ? "صفحہ لوڈ ہو رہا ہے" : "Loading page";

  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
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
              "relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[15px] font-medium transition-colors duration-150",
              isActive
                ? "bg-pine-800/10 font-semibold text-pine-900"
                : "text-ink/75 hover:bg-pine-900/5 hover:text-pine-800"
            )}
          >
            {item.label}
            <LinkPendingIndicator label={pendingLabel} />
          </Link>
        );
      })}
    </nav>
  );
}

