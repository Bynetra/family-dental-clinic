import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/common/Logo";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { MobileMenu, type NavItem } from "@/components/layout/MobileMenu";

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const navItems: NavItem[] = [
    { href: `/${locale}`, label: dict.nav.home, exact: true },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/conditions`, label: dict.nav.conditions },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];
  const bookHref = whatsappUrl(dict.whatsapp.default);

  return (
    <header className="sticky top-0 z-40 border-b border-pine-900/10 bg-cream/90 backdrop-blur">
      <div className="relative mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo locale={locale} />

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink/75 transition-colors hover:text-pine-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} className="hidden md:flex" />
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-pine-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pine-700 lg:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {dict.nav.book}
          </a>
          <MobileMenu
            locale={locale}
            navItems={navItems}
            bookLabel={dict.nav.book}
            bookHref={bookHref}
          />
        </div>
      </div>
    </header>
  );
}
