"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
  treatment: string;
};

export function TestimonialsCarousel({
  title,
  subtitle,
  testimonials,
}: {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const item = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-gold-700">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
              <span>Patient Stories</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 mx-auto max-w-3xl">
          <div className="relative rounded-3xl border border-teal-900/10 bg-white p-8 sm:p-12 shadow-card">
            <Quote className="h-10 w-10 text-teal-800/15" aria-hidden="true" />

            <div className="min-h-[140px] pt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="mt-5 text-lg font-medium leading-relaxed text-teal-950 sm:text-xl">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-teal-900/10 pt-5">
                    <div>
                      <h4 className="font-display text-base font-700 text-teal-950">
                        {item.author}
                      </h4>
                      <p className="text-xs text-muted">
                        {item.role} • <span className="font-medium text-teal-700">{item.treatment}</span>
                      </p>
                    </div>

                    <span className="rounded-full bg-mint-50 px-3 py-1 text-xs font-semibold text-teal-800 border border-mint-200">
                      Verified Patient
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-teal-900/10 pt-6">
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      current === idx ? "w-8 bg-teal-800" : "w-2.5 bg-teal-800/20 hover:bg-teal-800/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-900/15 bg-white text-teal-900 shadow-xs transition-colors hover:bg-teal-50 rtl:rotate-180"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-900/15 bg-white text-teal-900 shadow-xs transition-colors hover:bg-teal-50 rtl:rotate-180"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

