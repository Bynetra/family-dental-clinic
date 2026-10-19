import type { Metadata } from "next";
import { Info, MessageCircle, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
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
    "/services",
    dict.meta.services.title,
    dict.meta.services.description
  );
}
export default async function ServicesPage({
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
            eyebrow={dict.services.eyebrow}
            title={dict.services.heading}
            sub={dict.services.sub}
          />

          {/* Clinical Assurance Notice */}
          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3.5 rounded-2xl border border-pine-800/15 bg-white/90 p-5 shadow-sm sm:p-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pine-800/10 text-pine-800">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="text-sm leading-relaxed text-ink/80">
              <strong className="font-semibold text-ink">
                {locale === "ur" ? "کلینیکل یقین دہانی:" : "Clinical Assurance:"}
              </strong>{" "}
              {dict.servicesPage.note}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.map((service) => (
              <ServiceCard key={service.slug} locale={locale} service={service} />
            ))}
          </div>

          {/* Quick WhatsApp triage card for undecided patients */}
          <div className="mt-12 rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card sm:p-9 text-center sm:text-start flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {locale === "ur"
                  ? "معلوم نہیں کون سا علاج آپ کے لیے مناسب ہے؟"
                  : "Unsure which treatment is right for your condition?"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 max-w-2xl">
                {locale === "ur"
                  ? "ڈاکٹر فرحان سے واٹس ایپ پر اپنی علامات یا پرانی رپورٹس شیئر کریں اور ابتدائی رہنمائی حاصل کریں۔"
                  : "Send your symptoms or previous medical reports to Dr. Farhan on WhatsApp for direct guidance and consultation advice."}
              </p>
            </div>
            <a
              href={whatsappUrl(
                locale === "ur"
                  ? "السلام علیکم ڈاکٹر فرحان، میں اپنی علامات کے بارے میں رہنمائی لینا چاہتا/چاہتی ہوں۔"
                  : "Hello Dr. Farhan, I would like guidance on which physiotherapy treatment is appropriate for my condition."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#1FA855] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#178f47] shadow-sm hover:shadow active:scale-[0.99]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {locale === "ur" ? "واٹس ایپ پر رہنمائی لیں" : "Get Advice on WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      <FinalCTA locale={locale} />
    </>
  );
}
