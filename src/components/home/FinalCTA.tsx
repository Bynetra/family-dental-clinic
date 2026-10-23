import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ButtonLink } from "@/components/common/ButtonLink";

export function FinalCTA({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="hairline-grid relative overflow-hidden rounded-4xl bg-pine-900 px-6 py-14 text-center text-white shadow-float sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -end-20 -top-24 h-72 w-72 rounded-full bg-pine-400/15 blur-3xl" />
          <p className="relative text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sage">{locale === "ur" ? "اگلا قدم" : "Your next step"}</p>
          <h2 className="text-balance relative mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-5xl">{dict.cta.heading}</h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">{dict.cta.sub}</p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppButton label={dict.cta.primary} message={dict.whatsapp.default} variant="whatsapp" />
            <ButtonLink href={`/${locale}/services`} variant="light">
              {dict.cta.secondary}
              <ArrowUpRight className="h-4 w-4 rtl:-rotate-90" aria-hidden="true" />
            </ButtonLink>
          </div>
          <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="relative mt-7 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white">
            <Phone className="h-4 w-4 text-sage" aria-hidden="true" />
            <span>{locale === "ur" ? "براہِ راست کال:" : "Prefer to call:"}</span>
            <span dir="ltr" className="font-semibold text-white">{site.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
