import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Calendar,
} from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "@/components/common/Logo";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const isUrdu = locale === "ur";

  const navLinks = [
    { href: `/${locale}`,          label: dict.nav.home },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/about`,    label: dict.nav.about },
    { href: `/${locale}/team`,     label: dict.nav.team },
    { href: `/${locale}/contact`,  label: dict.nav.contact },
  ];

  const serviceLinks = dict.services.items.slice(0, 5).map((s) => ({
    href: `/${locale}/services#${s.slug}`,
    label: s.title,
  }));

  const phone = site.phoneDisplay || "+1 (555) 234-5678";

  return (
    <footer className="hairline-grid bg-teal-950 text-white">
      {/* Top Banner strip: Working hours & direct booking */}
      <div className="border-b border-white/10 bg-teal-900/60 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-400 text-teal-950">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                {isUrdu ? "کلینک کے اوقاتِ کار" : "Clinic Opening Hours"}
              </p>
              <p className="text-sm font-medium text-white">
                {dict.footer.hours}
              </p>
            </div>
          </div>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-full bg-mint-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-teal-950 shadow-md transition-all hover:bg-mint-300"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>{isUrdu ? "وقت حاصل کریں" : "Schedule a Visit"}</span>
          </Link>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-20">
        {/* Brand column (col-span-4) */}
        <div className="space-y-6 lg:col-span-4">
          <Logo locale={locale} inverse />
          <p className="text-sm leading-relaxed text-teal-200/75 max-w-sm">
            {dict.footer.tagline}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-teal-200 transition-colors hover:bg-white/20 hover:text-white"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-teal-200 transition-colors hover:bg-white/20 hover:text-white"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-teal-200 transition-colors hover:bg-white/20 hover:text-white"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Quick Nav (col-span-2) */}
        <nav aria-label="Footer navigation" className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-mint-300">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-teal-100/75 transition-colors hover:text-mint-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services Links (col-span-3) */}
        <nav aria-label="Services navigation" className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-mint-300">
            {dict.footer.servicesTitle}
          </h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-teal-100/75 transition-colors hover:text-mint-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info & Map Placeholder (col-span-3) */}
        <div className="space-y-4 lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-mint-300">
            {dict.footer.contactTitle}
          </h3>
          <ul className="space-y-3 text-sm text-teal-100/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-mint-300" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-mint-300" aria-hidden="true" />
              <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                {phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-mint-300" aria-hidden="true" />
              <a href="mailto:care@familydentalclinic.com" className="hover:text-white">
                care@familydentalclinic.com
              </a>
            </li>
          </ul>

          {/* Interactive Google Maps Placeholder Card */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-teal-900/50 p-3">
            <div className="flex items-center justify-between text-xs text-teal-200">
              <span className="font-semibold">{isUrdu ? "نقشہ اور ڈائریکشنز" : "Interactive Map"}</span>
              <span className="rounded bg-mint-400/20 px-1.5 py-0.5 text-[10px] text-mint-300 font-medium">
                {isUrdu ? "پارکنگ دستیاب" : "Free Parking"}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-teal-300/70">
              {dict.footer.addressNote}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Subtle Demo Disclaimer */}
      <div className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-teal-300/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {year} {dict.meta.siteName}. {dict.footer.rights}
          </p>
          <p className="max-w-md text-[11px] leading-relaxed text-teal-400/50">
            {dict.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
