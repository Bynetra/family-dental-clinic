import { MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/common/Logo";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/conditions`, label: dict.nav.conditions },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-pine-900/10 bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo locale={locale} />
          <p className="mt-4 text-sm leading-relaxed text-ink/70">{dict.footer.about}</p>
          <p className="mt-4 text-xs text-ink/50">{dict.footer.languageNote}</p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-pine-700">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink/70 transition-colors hover:text-pine-800">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-pine-700">
            {dict.footer.servicesTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {dict.services.items.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <a
                  href={`/${locale}/services#${service.slug}`}
                  className="text-sm text-ink/70 transition-colors hover:text-pine-800"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-pine-700">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-pine-700" aria-hidden="true" />
              <div className="flex flex-col">
                <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-pine-800 font-medium">
                  {site.phoneDisplay}
                </a>
                {site.phoneSecondary && (
                  <a href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`} className="text-xs text-ink/60 hover:text-pine-800">
                    {site.phoneSecondary}
                  </a>
                )}
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-pine-700" aria-hidden="true" />
              <a
                href={whatsappUrl(dict.whatsapp.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pine-800"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pine-700" aria-hidden="true" />
              <span>{site.address[locale]}</span>
            </li>
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-pine-700">
            {dict.footer.hoursTitle}
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink/70">
            {site.openingHours.map((row) => (
              <li key={row.days.en} className="flex flex-wrap gap-x-2">
                <span>{row.days[locale]}:</span>
                <span>{row.time[locale]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-pine-900/10">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs leading-relaxed text-ink/50">{dict.footer.disclaimer}</p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-ink/50">
            <p>{dict.footer.rights(year)}</p>
            <p>{dict.footer.credits}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
