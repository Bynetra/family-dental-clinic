import Link from "next/link";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/common/Logo";
import { LinkPendingIndicator } from "@/components/common/LinkPendingIndicator";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const pendingLabel = locale === "ur" ? "صفحہ لوڈ ہو رہا ہے" : "Loading page";
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/conditions`, label: dict.nav.conditions },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="hairline-grid bg-pine-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-10 lg:px-8 lg:py-20">
        {/* Brand & Introduction */}
        <div className="space-y-4">
          <Logo locale={locale} inverse />
          <p className="text-sm leading-relaxed text-white/65">{dict.footer.about}</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-sage-light">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{site.openingHours[0].days[locale]}: {site.openingHours[0].time[locale]}</span>
          </div>
          <p className="text-xs text-white/45">{dict.footer.languageNote}</p>
        </div>

        {/* Quick navigation */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                  <LinkPendingIndicator label={pendingLabel} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services Links */}
        <nav aria-label="Services Navigation">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light">
            {dict.footer.servicesTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {dict.services.items.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${locale}/services#${service.slug}`}
                  className="inline-flex items-center text-sm text-white/65 transition-colors hover:text-white"
                >
                  {service.title}
                  <LinkPendingIndicator label={pendingLabel} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info & Opening Hours */}
        <div className="space-y-5">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light">
              {dict.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                    className="font-medium text-white hover:text-sage-light dir-ltr text-start"
                    dir="ltr"
                  >
                    {site.phoneDisplay}
                  </a>
                  {site.phoneSecondary && (
                    <a
                      href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`}
                      className="text-xs text-white/55 hover:text-white dir-ltr text-start"
                      dir="ltr"
                    >
                      {site.phoneSecondary}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#1FA855]" aria-hidden="true" />
                <a
                  href={whatsappUrl(dict.whatsapp.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1FA855] hover:underline hover:underline-offset-2"
                >
                  {locale === "ur" ? "واٹس ایپ رابطہ" : "Chat on WhatsApp"}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <span className="leading-relaxed">{site.address[locale]}</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-white/10 pt-4">
            <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sage-light">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{dict.footer.hoursTitle}</span>
            </h4>
            <ul className="mt-2.5 space-y-1 text-sm text-white/65">
              {site.openingHours.map((row) => (
                <li key={row.days.en} className="flex flex-wrap items-center justify-between gap-x-2 text-xs">
                  <span className="font-medium">{row.days[locale]}:</span>
                  <span className="text-white/55">{row.time[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal & Medical Disclaimer Bar */}
      <div className="border-t border-white/10 bg-black/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-xs leading-relaxed text-white/45">{dict.footer.disclaimer}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
            <p>{dict.footer.rights(year)}</p>
            <p>{dict.footer.credits}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
