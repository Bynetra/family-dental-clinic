"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

export function Hero({
  locale = "en",
  kicker,
  titlePart1,
  titleHighlight,
  titlePart2,
  description,
  bookButtonText,
  servicesButtonText,
}: {
  locale?: Locale;
  kicker?: string;
  titlePart1?: string;
  titleHighlight?: string;
  titlePart2?: string;
  description?: string;
  bookButtonText?: string;
  servicesButtonText?: string;
}) {
  const isUrdu = locale === "ur";

  return (
    <section className="relative overflow-hidden bg-ivory pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-20 lg:pb-36">
      {/* Subtle radial ambient gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 end-0 -z-10 h-[500px] w-[500px] rounded-full bg-mint-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 start-0 -z-10 h-[400px] w-[400px] rounded-full bg-teal-100/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline and CTAs (col-span-7) */}
          <div className="lg:col-span-7">
            {/* Kicker Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-teal-900/15 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-800 shadow-xs backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-mint-400 animate-pulse" aria-hidden="true" />
              <span>{kicker || (isUrdu ? "فیملی ڈینٹل کیئر کلینک" : "Family Dental Clinic")}</span>
            </motion.div>

            {/* Main Headline with Staggered Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-6 font-display text-4xl font-800 tracking-tight text-teal-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]"
            >
              {titlePart1 || (isUrdu ? "خوبصورت مسکراہٹیں،" : "Healthy smiles.")}{" "}
              <span className="text-teal-700 underline decoration-mint-400/50 decoration-wavy decoration-2 underline-offset-8">
                {titleHighlight || (isUrdu ? "پرسکون نگہداشت۔" : "Personal care.")}
              </span>{" "}
              {titlePart2 || (isUrdu ? "ہر نسل کے لیے۔" : "For every generation.")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {description ||
                (isUrdu
                  ? "جدید ڈیجیٹل آلات، مکمل جراثیم کشی اور بغیر درد کے علاج کے ساتھ پرائیویٹ ڈینٹسٹری کا بہترین تجربہ۔ بچوں سے لے کر بزرگوں تک، ہر مریض کا خصوصی خیال۔"
                  : "Experience gentle, private dental care in a calm, modern setting. From routine preventive checkups to orthodontic clear aligners and smile restorations, we treat every patient like family.")}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-teal-800 px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-mint-400"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                <span>{bookButtonText || (isUrdu ? "وقت بک کریں" : "Book Appointment")}</span>
              </Link>

              <Link
                href={`/${locale}/services`}
                className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full border border-teal-900/15 bg-white/90 px-7 py-3.5 text-base font-semibold text-teal-950 shadow-xs transition-all hover:bg-teal-50 hover:shadow-sm"
              >
                <span>{servicesButtonText || (isUrdu ? "ہماری سروسز" : "Our Services")}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Trust highlights under buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium text-teal-950/80"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600" aria-hidden="true" />
                <span>{isUrdu ? "درد سے پاک ٹیکنالوجی" : "Painless modern techniques"}</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600" aria-hidden="true" />
                <span>{isUrdu ? "مکمل جراثیم کشی" : "100% Sterilized tools"}</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600" aria-hidden="true" />
                <span>{isUrdu ? "شفاف فیس، کوئی پوشیدہ چارجز نہیں" : "Clear, transparent fees"}</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column: Hero Image with Floating Stat Cards (col-span-5) */}
          <div className="relative mt-8 lg:col-span-5 lg:mt-0">
            {/* Main Rounded Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:rounded-4xl border-2 border-teal-900/10 shadow-card"
            >
              <Image
                src="/images/hero-patient-smile.jpg"
                alt="Smiling patient in modern dental clinic chair"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Stat Card 1: Rating (Top End) */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-3 end-2 sm:-top-4 sm:-end-6 rounded-2xl border border-white/60 bg-white/95 p-3.5 sm:p-4 shadow-card-hover backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-600">
                  <Star className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display text-sm sm:text-base font-800 text-teal-950">
                    4.9 / 5.0 Rating
                  </div>
                  <p className="text-[11px] sm:text-xs text-muted">
                    {isUrdu ? "مریضوں کا مکمل اعتماد" : "500+ Verified Patient Reviews"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stat Card 2: 5000+ Happy Patients (Bottom Start) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="absolute -bottom-4 start-2 sm:-bottom-6 sm:-start-6 rounded-2xl border border-white/60 bg-white/95 p-3.5 sm:p-5 shadow-card-hover backdrop-blur-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-mint-50 text-teal-800 border border-mint-200">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-mint-600" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display text-lg sm:text-xl font-800 text-teal-950">
                    5,000+
                  </div>
                  <p className="text-[11px] sm:text-xs font-medium text-muted">
                    {isUrdu ? "خوش اور مطمئن مسکراہٹیں" : "Happy Patient Smiles"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
