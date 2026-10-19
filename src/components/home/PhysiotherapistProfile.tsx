import Image from "next/image";
import { BadgeCheck, Stethoscope } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export function PhysiotherapistProfile({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:py-28">
        <div className="lg:col-span-2">
          <div className="relative mx-auto max-w-sm">
            <div className="overflow-hidden rounded-4xl border border-pine-900/10 bg-cream p-2.5 shadow-card">
              <div className="overflow-hidden rounded-[calc(2rem-2px)]">
                <Image
                  src="/images/physiotherapist-portrait.svg"
                  alt={dict.physio.imageAlt}
                  width={600}
                  height={720}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-102"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-pine-800/15 bg-pine-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-pine-800">
            <Stethoscope className="h-3.5 w-3.5 text-pine-700" aria-hidden="true" />
            <span>{dict.physio.eyebrow}</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {dict.physio.heading}
          </h2>

          <p className="mt-2 text-base font-semibold text-pine-800">
            {dict.physio.title}
          </p>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink/75">
            {dict.physio.bio}
          </p>

          <div className="mt-6 flex max-w-2xl items-start gap-3 rounded-2xl border border-pine-900/10 bg-cream/80 p-4 text-sm leading-relaxed text-ink/70">
            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
            <p>{dict.physio.fieldsNote}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton
              label={dict.physio.cta}
              message={dict.whatsapp.default}
              variant="whatsapp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
