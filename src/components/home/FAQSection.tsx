"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQSection({
  title,
  subtitle,
  items,
}: {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultItems: FAQItem[] = items || [
    {
      question: "How often should my family visit for a routine dental checkup?",
      answer:
        "We recommend a routine examination and professional cleaning every 6 months for most children and adults. Regular visits catch minor issues before they become painful or costly.",
    },
    {
      question: "What if I experience extreme dental anxiety or fear?",
      answer:
        "You are not alone. We specialize in anxious patients. We take things at your pace, use gentle numbing techniques, explain everything beforehand, and give you full control with a simple hand-signal stop system.",
    },
    {
      question: "At what age should a child first see the dentist?",
      answer:
        "We recommend bringing your child when their first tooth appears, or by their first birthday. These early visits help children get comfortable in the dental chair and prevent early tooth decay.",
    },
    {
      question: "Do clear aligners work as well as traditional braces?",
      answer:
        "Yes, for the vast majority of mild to moderate alignment cases, modern clear aligners are just as effective as traditional metal braces, while being practically invisible and easily removable for meals.",
    },
    {
      question: "What should I do in a dental emergency?",
      answer:
        "Call our clinic immediately. We reserve daily emergency slots for severe toothache, chipped teeth, lost fillings, or dental trauma to provide same-day pain relief.",
    },
    {
      question: "Are your dental instruments sterilized for every appointment?",
      answer:
        "Yes, without exception. We follow strict hospital-grade sterilization protocols. Every instrument goes through ultrasonic cleaning and autoclave heat sterilization in sealed pouches opened in front of you.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-800/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-teal-800">
              <HelpCircle className="h-3.5 w-3.5 text-mint-600" aria-hidden="true" />
              <span>Questions & Answers</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl">
              {title || "Frequently Asked Questions"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {subtitle || "Clear, reassuring answers to common questions about appointments, comfort, and care."}
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 space-y-3.5">
          {defaultItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-200",
                  isOpen
                    ? "border-teal-800/30 bg-ivory/60 shadow-sm"
                    : "border-teal-900/10 bg-white hover:border-teal-900/20",
                )}
              >
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex min-h-[60px] w-full items-center justify-between gap-4 px-6 py-4 text-start transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-inset"
                >
                  <span className="font-display text-base font-700 text-teal-950 sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-800/5 text-teal-800 transition-transform duration-200",
                      isOpen && "rotate-180 bg-teal-800 text-white",
                    )}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-teal-900/8 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted sm:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
