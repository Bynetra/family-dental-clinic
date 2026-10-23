import { MessageCircle } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/common/Logo";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { DesktopNav } from "@/components/layout/DesktopNav";
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
    <header className="sticky top-0 z-40 border-b border-pine-900/10 bg-cream/90 backdrop-blur-xl">
      <div className="relative mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />

        <DesktopNav navItems={navItems} locale={locale} />

        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden sm:block lg:hidden xl:block">
            <LanguageSwitcher locale={locale} />
          </div>

          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-pine-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-pine-800 hover:shadow-card focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2 lg:inline-flex"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
            <span>{dict.nav.book}</span>
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
