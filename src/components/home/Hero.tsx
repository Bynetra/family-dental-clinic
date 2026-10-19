import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ButtonLink } from "@/components/common/ButtonLink";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -top-24 -end-24 h-72 w-72 rounded-full bg-sage-light"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:pb-24 lg:pt-20">
        <div className="animate-rise">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pine-600">
            {dict.hero.kicker}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.18] text-ink sm:text-5xl lg:text-[3.3rem]">
            {dict.hero.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            {dict.hero.sub}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <WhatsAppButton
              label={dict.hero.primaryCta}
              message={dict.whatsapp.default}
              variant="whatsapp"
            />
            <ButtonLink href={`/${locale}/services`} variant="outline">
              {dict.hero.secondaryCta}
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-pine-900/10 pt-6">
            {dict.hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                <Check className="h-4 w-4 shrink-0 text-sage-dark" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-4xl border border-pine-900/10 shadow-card">
            <Image
              src="/images/hero-illustration.svg"
              alt={dict.hero.imageAlt}
              width={800}
              height={640}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-5 start-4 flex items-center gap-3 rounded-2xl border border-pine-900/10 bg-white px-4 py-3 shadow-card sm:start-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1FA855]/10 text-[#1FA855]">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-ink">
              {dict.common.floatingWhatsapp}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
