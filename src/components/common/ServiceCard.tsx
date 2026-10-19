import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { whatsappUrl } from "@/lib/whatsapp";
import { serviceIcons } from "@/components/common/serviceIcons";
import { LinkPendingIndicator } from "@/components/common/LinkPendingIndicator";

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
      className="group flex h-full scroll-mt-24 flex-col justify-between rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-pine-800/25 hover:shadow-lg"
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800 transition-colors group-hover:bg-pine-800 group-hover:text-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-semibold text-pine-700 border border-pine-900/5">
            {locale === "ur" ? "خصوصی دیکھ بھال" : "Care"}
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold text-ink group-hover:text-pine-800 transition-colors">
          {service.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-ink/70">
          {service.desc}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-pine-900/10 pt-4">
        <Link
          href={`/${locale}/services#${service.slug}`}
          className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-semibold text-pine-700 transition-colors hover:text-pine-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-600 rounded-lg px-1"
        >
          <span>{dict.common.learnMore}</span>
          <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
          <LinkPendingIndicator
            label={locale === "ur" ? "سروس کا صفحہ لوڈ ہو رہا ہے" : "Loading services"}
          />
        </Link>
        <a
          href={whatsappUrl(dict.whatsapp.service(service.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 border border-emerald-200/60 transition-colors hover:bg-emerald-600 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-600"
          aria-label={`${dict.common.inquireWhatsapp}: ${service.title}`}
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{dict.common.inquireWhatsapp}</span>
        </a>
      </div>
    </article>
  );
}
