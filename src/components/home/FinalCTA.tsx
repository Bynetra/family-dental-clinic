import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ButtonLink } from "@/components/common/ButtonLink";

export function FinalCTA({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-pine-900 via-pine-800 to-pine-900 px-6 py-16 text-center sm:px-12 shadow-xl border border-pine-700/20">
          {/* Subtle ambient rings */}
          <div
            className="pointer-events-none absolute -top-24 start-1/4 h-64 w-64 rounded-full bg-white/5 blur-xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 end-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-2xl"
            aria-hidden="true"
          />

          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl leading-tight">
            {dict.cta.heading}
          </h2>

          <p className="relative mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
            {dict.cta.sub}
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              label={dict.cta.primary}
              message={dict.whatsapp.default}
              variant="whatsapp"
            />
            <ButtonLink href={`/${locale}/services`} variant="light">
              {dict.cta.secondary}
            </ButtonLink>
          </div>

          {/* Quick phone contact fallback */}
          <div className="relative mt-8 flex items-center justify-center gap-2 text-xs text-white/70">
            <Phone className="h-3.5 w-3.5 text-sage-light" aria-hidden="true" />
            <span>{locale === "ur" ? "یا براہِ راست کال کریں:" : "Or call directly:"}</span>
            <a
              href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
              className="font-semibold text-white hover:underline underline-offset-2 ltr-text"
              dir="ltr"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
