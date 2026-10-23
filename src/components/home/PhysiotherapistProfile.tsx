import Image from "next/image";
import { BadgeCheck, MapPin } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export function PhysiotherapistProfile({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="overflow-hidden rounded-4xl bg-pine-900 text-white shadow-float">
          <div className="grid lg:grid-cols-[.72fr_1.28fr]">
            <div className="hairline-grid flex min-h-[22rem] flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-e">
              <Image src="/brand/rana-shahid-mark-inverse.svg" alt="" width={72} height={72} className="h-16 w-16" aria-hidden="true" />
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sage">{dict.physio.eyebrow}</p>
                <p className="mt-4 font-display text-5xl font-semibold text-white/10 sm:text-7xl" aria-hidden="true">RS</p>
                <p className="mt-3 text-xs leading-5 text-white/45">
                  {locale === "ur" ? "یہ پروفائل علامتی ہے؛ ویب سائٹ پر کوئی غیر مصدقہ ذاتی تصویر استعمال نہیں کی گئی۔" : "Typographic profile—no unverified practitioner portrait is used on this website."}
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-14">
              <h2 className="text-balance font-display text-4xl font-semibold sm:text-5xl">{dict.physio.heading}</h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-sage-light">{dict.physio.title}</p>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{dict.physio.bio}</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 border-t border-white/15 pt-4 text-sm leading-6 text-white/65">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                  <p>{dict.physio.fieldsNote}</p>
                </div>
                <div className="flex items-start gap-3 border-t border-white/15 pt-4 text-sm leading-6 text-white/65">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                  <p>{locale === "ur" ? "شفاء ہسپتال، تلمبہ روڈ، میاں چنوں" : "Shifa Hospital, Tulamba Road, Mian Channu"}</p>
                </div>
              </div>
              <div className="mt-9">
                <WhatsAppButton label={dict.physio.cta} message={dict.whatsapp.default} variant="whatsapp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
