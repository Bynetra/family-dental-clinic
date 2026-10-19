import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ButtonLink } from "@/components/common/ButtonLink";

export function FinalCTA({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-4xl bg-pine-800 px-6 py-16 text-center sm:px-12">
          <div
            className="pointer-events-none absolute -top-16 start-1/4 h-56 w-56 rounded-full bg-white/5"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 end-10 h-64 w-64 rounded-full bg-white/5"
            aria-hidden="true"
          />
          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
            {dict.cta.heading}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {dict.cta.sub}
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label={dict.cta.primary}
              message={dict.whatsapp.default}
              variant="whatsapp"
            />
            <ButtonLink href={`/${locale}/services`} variant="light">
              {dict.cta.secondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
