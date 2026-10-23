import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { site } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";

export function TeamPreview({ locale }: { locale: Locale }) {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          heading="Professionals who put patients first"
          sub="Sample profiles — real team details to be supplied by the clinic before launch."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.team.map((member, i) => (
            <div
              key={member.slug}
              className="animate-rise rounded-3xl border border-teal-800/10 bg-white p-6 shadow-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Avatar placeholder */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-seafoam bg-gradient-to-br from-aqua to-seafoam">
                <User className="h-10 w-10 text-teal-700" aria-hidden="true" />
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-display text-lg text-ink" style={{ fontWeight: 700 }}>
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-700">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                <p className="mt-2 text-xs italic text-muted/50">
                  — Placeholder profile
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/team`}
            className="inline-flex items-center gap-2 rounded-full border border-teal-800/25 px-6 py-3 text-sm font-semibold text-teal-800 transition-all hover:bg-teal-50"
          >
            Meet the full team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

