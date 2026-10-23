import Image from "next/image";
import { ArrowUpRight, Check, Clock3, MapPin, ShieldCheck, Star } from "lucide-react";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ButtonLink } from "@/components/common/ButtonLink";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-pine-900/10" />
      <div aria-hidden="true" className="absolute -end-48 top-0 h-[36rem] w-[36rem] rounded-full bg-pine-100/60 blur-3xl" />

      <div className="relative mx-auto grid min-w-0 max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-12 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="min-w-0 animate-rise">
          <div className="flex w-fit max-w-full items-center gap-2 border-s-2 border-pine-500 ps-3 text-xs font-semibold uppercase tracking-[0.17em] text-pine-800">
            <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="min-w-0 break-words leading-relaxed">{dict.hero.kicker}</span>
          </div>

          <h1 className="text-balance mt-6 max-w-2xl break-words font-display text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-6xl lg:text-[4.35rem]">
            {dict.hero.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-ink/70 sm:text-lg">
            {dict.hero.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButton label={dict.hero.primaryCta} message={dict.whatsapp.default} variant="whatsapp" />
            <ButtonLink href={`/${locale}/services`} variant="outline">
              {dict.hero.secondaryCta}
              <ArrowUpRight className="h-4 w-4 rtl:-rotate-90" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="mt-9 grid max-w-xl gap-3 border-t border-pine-900/10 pt-6 sm:grid-cols-2">
            {dict.hero.trust.map((item, index) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-6 text-ink/75">
                {index === 2 ? (
                  <Star className="mt-1 h-4 w-4 shrink-0 fill-amber-400 text-amber-500" aria-hidden="true" />
                ) : (
                  <Check className="mt-1 h-4 w-4 shrink-0 text-pine-600" aria-hidden="true" />
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-rise lg:ps-6 [animation-delay:120ms]">
          <div className="relative min-h-[29rem] overflow-hidden rounded-[1.75rem] bg-pine-900 shadow-float sm:min-h-[38rem]">
            <Image
              src="/images/physiotherapy-session.webp"
              alt={dict.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-pine-950/65 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sage-light">
                  {locale === "ur" ? "نمائندہ کلینیکل منظر" : "Representative clinical scene"}
                </p>
                <p className="mt-1 max-w-xs text-sm leading-6 text-white/75">
                  {locale === "ur" ? "معائنے اور اہداف کے مطابق بحالی" : "Rehabilitation shaped around assessment and goals"}
                </p>
              </div>
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur sm:flex">
                <ArrowUpRight className="h-5 w-5 rtl:-rotate-90" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 -start-1 h-24 w-24 rounded-bl-[2rem] border-b border-s border-pine-400/60" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid border-y border-pine-900/10 bg-white/55 sm:grid-cols-3">
          <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="group flex gap-3 px-4 py-5 transition-colors hover:bg-white sm:px-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine-100 text-pine-800">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink/45">{locale === "ur" ? "فون اور واٹس ایپ" : "Phone & WhatsApp"}</span>
              <span className="mt-1 block font-semibold text-ink" dir="ltr">{site.phoneDisplay}</span>
            </span>
          </a>
          <div className="flex gap-3 border-t border-pine-900/10 px-4 py-5 sm:border-s sm:border-t-0 sm:px-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine-100 text-pine-800">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink/45">{locale === "ur" ? "اوقاتِ کار" : "Opening hours"}</span>
              <span className="mt-1 block font-semibold text-ink">{site.openingHours[0].days[locale]} · {site.openingHours[0].time[locale]}</span>
            </span>
          </div>
          <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="group flex gap-3 border-t border-pine-900/10 px-4 py-5 transition-colors hover:bg-white sm:border-s sm:border-t-0 sm:px-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine-100 text-pine-800">
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink/45">{locale === "ur" ? "کلینک" : "Clinic"}</span>
              <span className="mt-1 block text-sm font-semibold leading-6 text-ink group-hover:text-pine-700">{locale === "ur" ? "شفاء ہسپتال، تلمبہ روڈ" : "Shifa Hospital, Tulamba Road"}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
