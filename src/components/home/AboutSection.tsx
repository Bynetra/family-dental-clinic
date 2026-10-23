import Link from "next/link";
import { ArrowRight, Users, Heart, Star } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";

const pillars = [
  {
    icon: Users,
    title: "Care for all ages",
    desc: "From a child's first checkup to ongoing family care — every patient is welcome.",
  },
  {
    icon: Heart,
    title: "Gentle, unhurried",
    desc: "We take time to listen and explain every step before treatment begins.",
  },
  {
    icon: Star,
    title: "Clear explanations",
    desc: "Options and costs are discussed openly, so patients always feel informed.",
  },
];

export function AboutSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-seafoam/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: text */}
          <div className="animate-rise">
            <SectionHeading
              eyebrow="About the clinic"
              heading="A place where every generation feels at home"
              align="left"
            />
            <p className="mt-5 text-base leading-relaxed text-muted">
              Family Dental Clinic is designed around the idea that great dental care begins with trust. We create a welcoming environment where patients of every age — from toddlers having their first check-up to grandparents — feel comfortable and cared for.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our approach starts with listening. Before recommending any treatment, we take time to understand each patient&apos;s concerns, answer questions, and explain all available options clearly. No surprises, no pressure.
            </p>
            <p className="mt-3 text-xs italic text-muted/60">
              Sample clinic description — real information to be provided by the clinic.
            </p>
            <Link
              href={`/${locale}/about`}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-teal-800/25 bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition-all hover:bg-teal-50"
            >
              Our story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Right: pillar cards */}
          <div className="grid gap-4 sm:grid-cols-1 animate-rise delay-150">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 rounded-2xl border border-teal-800/10 bg-white p-5 shadow-card"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </div>
            ))}

            {/* Decorative image placeholder */}
            <div className="overflow-hidden rounded-2xl border border-teal-800/10 bg-gradient-to-br from-aqua to-seafoam p-8 text-center shadow-card">
              <p className="text-sm font-medium text-teal-700">
                📸 Clinic photography
              </p>
              <p className="mt-1 text-xs text-teal-600/70">
                Real clinic images will be added before launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

