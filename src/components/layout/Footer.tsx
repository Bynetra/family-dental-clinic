import Link from "next/link";
import { MapPin, MessageCircle, Phone, Clock, ArrowUpRight } from "lucide-react";
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
    <footer className="border-t border-pine-900/10 bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-8">
        {/* Brand & Introduction */}
        <div className="space-y-4">
          <Logo locale={locale} />
          <p className="text-sm leading-relaxed text-ink/75">{dict.footer.about}</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-pine-900/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-pine-800">
            <Clock className="h-3.5 w-3.5 text-pine-700" aria-hidden="true" />
            <span>{locale === "ur" ? "پیر تا ہفتہ: صبح 10 تا شام 4 بجے" : "Mon – Sat: 10:00 AM – 4:00 PM"}</span>
          </div>
          <p className="text-xs text-ink/50">{dict.footer.languageNote}</p>
        </div>

        {/* Quick navigation */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-pine-800">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center text-sm text-ink/70 transition-colors hover:text-pine-900 hover:underline hover:underline-offset-4"
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
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-pine-800">
            {dict.footer.servicesTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {dict.services.items.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${locale}/services#${service.slug}`}
                  className="inline-flex items-center text-sm text-ink/70 transition-colors hover:text-pine-900 hover:underline hover:underline-offset-4"
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-pine-800">
              {dict.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-pine-700" aria-hidden="true" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                    className="font-medium text-ink hover:text-pine-800 dir-ltr text-start"
                    dir="ltr"
                  >
                    {site.phoneDisplay}
                  </a>
                  {site.phoneSecondary && (
                    <a
                      href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`}
                      className="text-xs text-ink/60 hover:text-pine-800 dir-ltr text-start"
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
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pine-700" aria-hidden="true" />
                <span className="leading-relaxed">{site.address[locale]}</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-pine-900/10 pt-4">
            <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-pine-800">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{dict.footer.hoursTitle}</span>
            </h4>
            <ul className="mt-2.5 space-y-1 text-sm text-ink/75">
              {site.openingHours.map((row) => (
                <li key={row.days.en} className="flex flex-wrap items-center justify-between gap-x-2 text-xs">
                  <span className="font-medium">{row.days[locale]}:</span>
                  <span className="text-ink/65">{row.time[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal & Medical Disclaimer Bar */}
      <div className="border-t border-pine-900/10 bg-sand/60">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs leading-relaxed text-ink/55">{dict.footer.disclaimer}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-ink/50">
            <p>{dict.footer.rights(year)}</p>
            <p>{dict.footer.credits}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
