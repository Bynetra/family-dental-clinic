import {
  Dumbbell,
  Footprints,
  HeartHandshake,
  MessageSquareText,
  Move,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";

const icons: LucideIcon[] = [
  UserCheck,
  MessageSquareText,
  Move,
  Dumbbell,
  HeartHandshake,
  Footprints,
];

export function WhyChooseUs({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow={dict.why.eyebrow}
          title={dict.why.heading}
          sub={dict.why.sub}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.why.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-3xl border border-pine-900/10 bg-cream p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine-800/10 text-pine-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
