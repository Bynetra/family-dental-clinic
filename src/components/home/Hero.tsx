import Image from "next/image";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ButtonLink } from "@/components/common/ButtonLink";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Decorative ambient background blur */}
      <div
        className="pointer-events-none absolute -top-24 -end-24 h-96 w-96 rounded-full bg-sage-light/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -start-24 h-72 w-72 rounded-full bg-pine-100/40 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl min-w-0 grid-cols-1 gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:pb-24 lg:pt-16">
        <div className="min-w-0 animate-rise">
          <div className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-full border border-pine-800/15 bg-white/80 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-pine-800 shadow-2xs backdrop-blur-xs">
            <ShieldCheck className="h-4 w-4 shrink-0 text-pine-700" aria-hidden="true" />
            <span className="min-w-0 whitespace-normal break-words leading-snug">
              {dict.hero.kicker}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.2] text-ink sm:text-5xl lg:text-[3.25rem] break-words">
            {dict.hero.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink/75 break-words">
            {dict.hero.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <WhatsAppButton
              label={dict.hero.primaryCta}
              message={dict.whatsapp.default}
              variant="whatsapp"
            />
            <ButtonLink href={`/${locale}/services`} variant="outline">
              {dict.hero.secondaryCta}
            </ButtonLink>
          </div>

          {/* Trust badges */}
          <ul className="mt-10 flex flex-wrap gap-2.5 border-t border-pine-900/10 pt-6">
            {dict.hero.trust.map((item) => (
              <li
                key={item}
                className="inline-flex max-w-full items-center gap-2 rounded-2xl sm:rounded-full border border-pine-900/10 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink/80 shadow-2xs"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-w-0 animate-rise [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-4xl border border-pine-900/10 bg-white p-2 shadow-card">
            <div className="overflow-hidden rounded-[calc(2rem-4px)]">
              <Image
                src="/images/hero-illustration.svg"
                alt={dict.hero.imageAlt}
                width={800}
                height={640}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Floating WhatsApp pill badge */}
          <div className="absolute -bottom-4 start-4 sm:start-8 max-w-[calc(100%-2rem)] flex items-center gap-3 rounded-2xl border border-pine-900/10 bg-white px-4 py-3 shadow-card backdrop-blur-xs">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1FA855]/10 text-[#1FA855]">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-ink truncate">
              {dict.common.floatingWhatsapp}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
