import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { FAQAccordion } from "@/components/home/FAQAccordion";

export function FAQ({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <p className="eyebrow">{dict.faq.eyebrow}</p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">{dict.faq.heading}</h2>
          {dict.faq.sub && <p className="mt-5 max-w-sm leading-7 text-ink/65">{dict.faq.sub}</p>}
        </div>
        <FAQAccordion items={dict.faq.items} />
      </div>
    </section>
  );
}
