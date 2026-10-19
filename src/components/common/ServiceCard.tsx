import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { whatsappUrl } from "@/lib/whatsapp";
import { serviceIcons } from "@/components/common/serviceIcons";

export function ServiceCard({
  locale,
  service,
}: {
  locale: Locale;
  service: { slug: string; title: string; desc: string };
}) {
  const dict = getDictionary(locale);
  const Icon = serviceIcons[service.slug] ?? serviceIcons["back-neck-pain"];

  return (
    <article
      id={service.slug}
      className="flex h-full scroll-mt-24 flex-col rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card transition-shadow hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-light text-pine-800">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink/65">
        {service.desc}
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-pine-900/10 pt-4">
        <a
          href={`/${locale}/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine-700 hover:text-pine-900"
        >
          {dict.common.learnMore}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
        </a>
        <a
          href={whatsappUrl(dict.whatsapp.service(service.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[#178f47] hover:underline"
        >
          {dict.common.inquireWhatsapp}
        </a>
      </div>
    </article>
  );
}
