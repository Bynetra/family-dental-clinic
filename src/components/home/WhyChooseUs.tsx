"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, Award } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { SlideIn } from "@/components/motion/SlideIn";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import type { Locale } from "@/lib/i18n/config";

export function WhyChooseUs({
  locale = "en",
  title,
  subtitle,
  stats,
  checklist,
  ctaText = "Book Your Consultation",
}: {
  locale?: Locale;
  title?: string;
  subtitle?: string;
  stats?: { value: number; label: string; suffix?: string }[];
  checklist?: string[];
  ctaText?: string;
}) {
  const isUrdu = locale === "ur";

  const defaultStats = stats || [
    { value: 15, suffix: "+", label: isUrdu ? "سال کا تجربہ" : "Years Experience" },
    { value: 5000, suffix: "+", label: isUrdu ? "خوش مریض" : "Smiles Restored" },
    { value: 99, suffix: "%", label: isUrdu ? "اطمینان کی شرح" : "Patient Satisfaction" },
  ];

  const defaultChecklist = checklist || [
    isUrdu
      ? "جدید ترین ڈیجیٹل اسکینرز اور درست تشخیصی آلات"
      : "State-of-the-art 3D digital imaging and low-radiation diagnostics",
    isUrdu
      ? "ہر مریض کے لیے ہسپتال گریڈ کے جراثیم سے پاک اوزار"
      : "Hospital-grade autoclave sterilization for every single instrument",
    isUrdu
      ? "علاج سے پہلے شفاف لاگت اور طریقہ کار کی مکمل وضاحت"
      : "Clear, upfront treatment explanations with zero unexpected fees",
    isUrdu
      ? "بچوں اور پریشان مریضوں کے لیے پرسکون اور دوستانہ ماحول"
      : "Dedicated gentle care techniques designed for anxious patients & children",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual Column */}
          <SlideIn from="start">
            <div className="relative">
              {/* Main photo frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-teal-900/10 shadow-card">
                <Image
                  src="/images/clinic-reception.jpg"
                  alt="Modern and welcoming clinic reception lounge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Stat Card Badge */}
              <div className="absolute -bottom-6 -end-4 sm:end-8 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-card-hover backdrop-blur-md">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-800 text-white shadow-xs">
                    <Award className="h-6 w-6 text-mint-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-800 text-teal-950">
                      <AnimatedCounter value={15} suffix="+" />
                    </div>
                    <p className="text-xs font-medium text-muted">
                      {isUrdu ? "سال کا قابلِ اعتماد معیار" : "Years of Clinical Excellence"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary decorative background pill */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -start-10 -z-10 h-64 w-64 rounded-full bg-mint-100/50 blur-2xl"
              />
            </div>
          </SlideIn>

          {/* Text and Checklist Column */}
          <SlideIn from="end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-teal-800 border border-mint-200">
                <ShieldCheck className="h-3.5 w-3.5 text-mint-600" aria-hidden="true" />
                <span>{isUrdu ? "ہمیں کیوں منتخب کریں" : "Why Choose Our Clinic"}</span>
              </span>

              <h2 className="mt-4 font-display text-3xl font-800 leading-[1.15] text-teal-950 sm:text-4xl lg:text-5xl">
                {title || (isUrdu ? "دانتوں کی دیکھ بھال، جو اعتماد اور سکون لائے" : "Dentistry where your family's comfort comes first")}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {subtitle ||
                  (isUrdu
                    ? "ہم سمجھتے ہیں کہ دانتوں کے ڈاکٹر کے پاس جانا اکثر گھبراہٹ کا باعث بنتا ہے۔ ہمارا مقصد آپ کے ہر دورے کو پرسکون، معلوماتی اور آرام دہ بنانا ہے۔"
                    : "We believe a visit to the dentist should feel as reassuring as visiting an old family friend. Modern dentistry doesn't need to be cold, rushed, or stressful.")}
              </p>

              {/* Animated Stats Strip */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-teal-900/10 py-6">
                {defaultStats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-start">
                    <div className="font-display text-2xl font-800 text-teal-900 sm:text-3xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1 text-xs font-medium text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <ul className="mt-8 space-y-3.5">
                {defaultChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-100 text-teal-800">
                      <Check className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-teal-950">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-10">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-teal-800 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-mint-400"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

