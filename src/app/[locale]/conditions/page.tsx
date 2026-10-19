import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Zap,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    "/conditions",
    dict.meta.conditions.title,
    dict.meta.conditions.description
  );
}
const conditionIcons = [
  Zap,
  Activity,
  HeartPulse,
  Stethoscope,
  Activity,
  HeartPulse,
  Zap,
  Activity,
  Stethoscope,
  HeartPulse,
  Activity,
  ShieldCheck,
];

export default async function ConditionsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-white py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pine-700/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={dict.conditions.eyebrow}
            title={dict.conditions.heading}
            sub={dict.conditionsPage.intro}
          />

          {/* Condition Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dict.conditions.items.map((condition, idx) => {
              const Icon = conditionIcons[idx % conditionIcons.length];
              const whatsappMessage =
                locale === "ur"
                  ? `السلام علیکم ڈاکٹر فرحان، میں "${condition.title}" کے علاج کے بارے میں معلومات لینا چاہتا/چاہتی ہوں۔`
                  : `Hello Dr. Farhan, I would like to inquire about rehabilitation for "${condition.title}".`;

              return (
                <article
                  key={condition.title}
                  className="group flex flex-col justify-between rounded-3xl border border-pine-900/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-pine-700/25 hover:shadow-card-hover"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800 transition-colors duration-300 group-hover:bg-pine-800 group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-base font-semibold leading-snug text-ink sm:text-lg">
                      {condition.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {condition.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-pine-900/5">
                    <a
                      href={whatsappUrl(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-pine-800 transition-colors hover:text-[#1FA855]"
                      aria-label={`${locale === "ur" ? "مشورہ کریں" : "Inquire"}: ${condition.title}`}
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{locale === "ur" ? "اس بارے میں مشورہ کریں" : "Inquire via WhatsApp"}</span>
                      <ArrowRight className="h-3 w-3 rtl:rotate-180" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Reassuring Clinical Assessment Note */}
          <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3.5 rounded-2xl border border-pine-800/15 bg-white p-5 shadow-sm sm:p-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pine-800/10 text-pine-800">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="text-sm leading-relaxed text-ink/80">
              <strong className="font-semibold text-ink">
                {locale === "ur" ? "ضروری نوٹ:" : "Clinical Note:"}
              </strong>{" "}
              {dict.conditions.note}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA locale={locale} />
    </>
  );
}
