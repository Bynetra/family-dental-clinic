import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  backgroundImage = "/images/treatment-room.jpg",
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-teal-950 py-20 text-white sm:py-24 lg:py-28">
      {/* Background image with high-end dark teal gradient */}
      <div className="absolute inset-0 -z-20 h-full w-full">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden="true"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-950 via-teal-950/90 to-teal-900/80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-teal-200/75">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={idx} className="flex items-center gap-2">
                    {idx > 0 && (
                      <ChevronRight className="h-3 w-3 text-teal-400/60 rtl:rotate-180" aria-hidden="true" />
                    )}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-white hover:underline"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-mint-300 font-semibold" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-3xl font-800 leading-[1.2] text-white break-words sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-teal-100/80 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
