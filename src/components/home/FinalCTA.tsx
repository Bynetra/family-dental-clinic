"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { site } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";

export function FinalCTA({
  locale = "en",
  title,
  subtitle,
  bookButtonText,
  callButtonText,
}: {
  locale?: Locale;
  title?: string;
  subtitle?: string;
  bookButtonText?: string;
  callButtonText?: string;
}) {
  const isUrdu = locale === "ur";
  const phone = site.phoneDisplay || "+1 (555) 234-5678";

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background photo */}
      <div className="absolute inset-0 -z-20 h-full w-full">
        <Image
          src="/images/cta-background.jpg"
          alt="Modern clinic interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Deep teal gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-950/95 via-teal-900/90 to-teal-950/95 backdrop-blur-[2px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-mint-300 border border-white/15">
              <span>{isUrdu ? "آج ہی وقت حاصل کریں" : "Experience Gentle Dental Care"}</span>
            </span>

            <h2 className="mt-5 font-display text-3xl font-800 text-white sm:text-4xl lg:text-5xl">
              {title || (isUrdu ? "روشن اور صحت مند مسکراہٹ کے لیے تیار ہیں؟" : "Ready for a healthier, brighter smile?")}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-teal-100/80 sm:text-lg">
              {subtitle ||
                (isUrdu
                  ? "ہمارے کلینک میں تشریف لائیں اور بغیر درد کے جدید ڈینٹسٹری سے فائدہ اٹھائیں۔ ہماری ٹیم آپ کے ہر سوال کا جواب دینے کے لیے موجود ہے۔"
                  : "Schedule your consultation with Family Dental Clinic today. We take the time to listen, explain every option, and ensure you feel completely at ease.")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-mint-400 px-8 py-3.5 text-base font-bold text-teal-950 shadow-lg transition-all hover:bg-mint-300 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-white"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                <span>{bookButtonText || (isUrdu ? "معائنے کا وقت بک کریں" : "Book an Appointment")}</span>
              </Link>

              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{callButtonText || (isUrdu ? "فون پر رابطہ کریں" : `Call: ${phone}`)}</span>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
