import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export function PhysiotherapistProfile({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:py-28">
        <div className="lg:col-span-2">
          <div className="mx-auto max-w-sm overflow-hidden rounded-4xl border border-pine-900/10 shadow-card">
            <Image
              src="/images/physiotherapist-portrait.svg"
              alt={dict.physio.imageAlt}
              width={600}
              height={720}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine-600">
            {dict.physio.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {dict.physio.heading}
          </h2>
          <p className="mt-1.5 font-medium text-pine-700">{dict.physio.title}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            {dict.physio.bio}
          </p>
          <p className="mt-6 flex max-w-2xl items-start gap-2.5 rounded-2xl border border-pine-900/10 bg-cream p-4 text-sm leading-relaxed text-ink/60">
            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-sage-dark" aria-hidden="true" />
            {dict.physio.fieldsNote}
          </p>
          <div className="mt-8">
            <WhatsAppButton
              label={dict.physio.cta}
              message={dict.whatsapp.default}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
