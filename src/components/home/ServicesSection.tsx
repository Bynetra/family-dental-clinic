"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck, Wrench, Sparkles, AlignCenter, Activity, Heart,
  ChevronRight, X, ArrowRight, Calendar,
} from "lucide-react";
import { site } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Wrench, Sparkles, AlignCenter, Activity, Heart,
};

export function ServicesSection({ locale }: { locale: Locale }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeService = site.services.find((s) => s.slug === activeSlug) ?? null;

  return (
    <section id="services" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dental Services"
          heading="Care for every smile"
          sub="Sample services — the clinic will confirm exact offerings, treatment options, and availability before launch."
        />

        <p className="mx-auto mt-3 max-w-xl text-center text-xs text-muted/60 italic">
          ✦ Illustrative demo content — not a confirmed service list
        </p>

        {/* Grid */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {site.services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? ShieldCheck;
            const delay = ["", "delay-75", "delay-150", "delay-225", "delay-300", "delay-375"][i] ?? "";
            return (
              <li key={service.slug}>
                <button
                  type="button"
                  id={service.slug}
                  onClick={() => setActiveSlug(service.slug)}
                  className={cn(
                    "group w-full rounded-3xl border border-teal-800/10 bg-white p-7 text-left shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 animate-rise",
                    delay,
                  )}
                  aria-expanded={activeSlug === service.slug}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-ink" style={{ fontWeight: 700 }}>
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.shortDesc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 transition-all group-hover:gap-2">
                    Learn more
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 rounded-full border border-teal-800/25 px-6 py-3 text-sm font-semibold text-teal-800 transition-all hover:bg-teal-50"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Detail dialog */}
      {activeService && (
        <>
          <div
            className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setActiveSlug(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeService.title}
            className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-lg rounded-3xl bg-white p-8 shadow-2xl animate-rise sm:inset-x-auto sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
          >
            <button
              type="button"
              onClick={() => setActiveSlug(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {(() => {
              const Icon = iconMap[activeService.icon] ?? ShieldCheck;
              return (
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
              );
            })()}

            <h3 className="mt-4 font-display text-xl text-ink" style={{ fontWeight: 700 }}>
              {activeService.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {activeService.fullDesc}
            </p>
            <p className="mt-3 text-xs italic text-muted/60">
              Demo content — actual treatment options will be confirmed by the clinic.
            </p>
            <Link
              href={`/${locale}/contact`}
              onClick={() => setActiveSlug(null)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Request an appointment
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

