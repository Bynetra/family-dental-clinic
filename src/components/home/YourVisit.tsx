import { CalendarCheck, MessageSquare, ClipboardList } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Request a visit",
    desc: "Use the appointment form or call us to tell us your name, preferred date, and what you'd like help with.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Discuss your concerns",
    desc: "At your appointment, we listen carefully to understand your dental history and current concerns — no rushing.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Receive a clear plan",
    desc: "We explain our findings and any recommended next steps, including costs, so you can decide what's right for you.",
  },
];

export function YourVisit() {
  return (
    <section className="bg-teal-800 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your visit"
          heading="Simple, unhurried, transparent"
          sub="We make every step clear — from the moment you get in touch to walking out with a plan."
          light
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative animate-rise" style={{ animationDelay: `${i * 120}ms` }}>
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute right-0 top-8 hidden h-px w-1/2 bg-white/20 sm:block"
                  aria-hidden="true"
                />
              )}

              <div className="rounded-3xl border border-white/10 bg-white/8 p-7 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl font-800 text-white/20" style={{ fontWeight: 800 }}>
                    {step.number}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-700 text-white" style={{ fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-teal-200/80">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

