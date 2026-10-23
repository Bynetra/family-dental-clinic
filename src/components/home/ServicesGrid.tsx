"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import type { Locale } from "@/lib/i18n/config";

export type ServiceCardItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tag: string;
};

export function ServicesGrid({
  locale = "en",
  title,
  subtitle,
  viewAllText = "Explore All Dental Treatments",
  services,
}: {
  locale?: Locale;
  title?: string;
  subtitle?: string;
  viewAllText?: string;
  services: ServiceCardItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-800/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-800">
              <Sparkles className="h-3.5 w-3.5 text-mint-600" aria-hidden="true" />
              <span>Comprehensive Dental Care</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl lg:text-5xl">
              {title || "Specialized treatments for your whole family"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {subtitle ||
                "From preventive care to advanced restorative and cosmetic solutions, every treatment is tailored to your comfort."}
            </p>
          </div>
        </FadeUp>

        {/* 6 Services Grid */}
        <div className="mt-16">
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/${locale}/services#${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-teal-900/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  {/* Image with zoom effect */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-teal-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                    <span className="absolute top-4 start-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-teal-900 backdrop-blur-md shadow-xs">
                      {service.tag}
                    </span>
                  </div>

                  {/* Body content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="font-display text-xl font-700 text-teal-950 group-hover:text-teal-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-800 group-hover:text-teal-600 transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* View all services CTA */}
        <div className="mt-14 text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2.5 rounded-full border border-teal-900/15 bg-white px-7 py-3.5 text-sm font-semibold text-teal-900 shadow-xs transition-all hover:bg-teal-50 hover:shadow-sm"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

