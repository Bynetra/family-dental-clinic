import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/about", dict.meta.about.title, dict.meta.about.description);
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const isUrdu = locale === "ur";

  const timelineSteps = [
    {
      number: "01",
      title: isUrdu ? "مکمل اور پرسکون مشاورت" : "Attentive Diagnostic Consultation",
      desc: isUrdu
        ? "ہم آپ کی بات توجہ سے سنتے ہیں، ڈیجیٹل اسکین کرتے ہیں اور دانتوں کی حالت کا مکمل جائزہ لیتے ہیں۔"
        : "We begin by listening carefully to your concerns, taking digital low-radiation scans, and thoroughly evaluating your oral health.",
    },
    {
      number: "02",
      title: isUrdu ? "شفاف اور واضح منصوبہ بندی" : "Clear & Transparent Treatment Plan",
      desc: isUrdu
        ? "ہر ممکنہ علاج کے متبادل، مدت اور لاگت کو علاج شروع کرنے سے پہلے کھل کر بیان کیا جاتا ہے۔"
        : "Every clinical option, estimated timeline, and exact cost is clearly presented before any procedure begins.",
    },
    {
      number: "03",
      title: isUrdu ? "درد سے پاک اور نرم علاج" : "Gentle, Anxiety-Free Care",
      desc: isUrdu
        ? "ہم آپ کی رفتار پر چلتے ہیں، نرم اینستھیزیا استعمال کرتے ہیں اور آپ کو مکمل کنٹرول فراہم کرتے ہیں۔"
        : "We work at your personal pace, using gentle numbing techniques, quiet instruments, and a hand-signal pause system.",
    },
    {
      number: "04",
      title: isUrdu ? "مسلسل فالو اپ اور حفاظتی رہنمائی" : "Long-Term Preventive Maintenance",
      desc: isUrdu
        ? "علاج کے بعد باقاعدہ دیکھ بھال اور ہدایات تاکہ آپ کی مسکراہٹ سالہا سال محفوظ اور چمکدار رہے۔"
        : "Personalized home care advice and routine maintenance visits to preserve your healthy smile for life.",
    },
  ];

  const galleryItems = [
    {
      image: "/images/clinic-reception.jpg",
      title: isUrdu ? "پرسکون استقبالیہ لاؤنج" : "Calm Reception Lounge",
      desc: isUrdu ? "قدرتی روشنی اور پرسکون ماحول کے ساتھ ڈیزائن کیا گیا ایریا" : "Natural light, comfortable seating, and serene indoor plants.",
    },
    {
      image: "/images/treatment-room.jpg",
      title: isUrdu ? "جدید آپریٹری کمرہ" : "State-of-the-Art Operatory",
      desc: isUrdu ? "آرام دہ کرسی اور جدید ترین مانیٹرنگ سسٹم" : "Ergonomic dental chair and high-resolution digital imaging.",
    },
    {
      image: "/images/sterilization-tools.jpg",
      title: isUrdu ? "جراثیم کشی کا مرکز" : "Hospital-Grade Sterilization",
      desc: isUrdu ? "سیل شدہ پیکٹس اور آٹوکلیو تھرمل سٹرلائزیشن" : "Autoclave heat sterilization for complete patient safety.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={isUrdu ? "ہمارے بارے میں" : "About Our Practice"}
        title={isUrdu ? "خاندانی سکون کے لیے تیار کردہ ڈینٹسٹری" : "Dentistry built around family comfort"}
        description={
          isUrdu
            ? "ایک ایسا طبی ماحول جہاں مریض کے آرام، شفاف مواصلات اور جدید ترین معیار کو ترجیح دی جاتی ہے۔"
            : "A patient-centred dental home where personalized care, clear explanations, and a genuinely calm atmosphere come first."
        }
        backgroundImage="/images/clinic-reception.jpg"
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.about },
        ]}
      />

      {/* Practice Story: Split Layout */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-800/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-teal-800">
                <Heart className="h-3.5 w-3.5 text-mint-600" aria-hidden="true" />
                <span>{isUrdu ? "ہمارا فلسفہ" : "Our Care Philosophy"}</span>
              </span>

              <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl">
                {isUrdu
                  ? "ہر عمر کے افراد کے لیے دانتوں کی پرسکون اور باوقار نگہداشت"
                  : "Personalized dental care without the stress or intimidation"}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {isUrdu
                  ? "فیملی ڈینٹل کلینک میں ہمارا ماننا ہے کہ دانتوں کا علاج سرد اور تکلیف دہ نہیں ہونا چاہیے۔ ہم ہر مریض کو خاندان کا فرد سمجھتے ہیں اور ان کے خوف کو ختم کرنے کے لیے خصوصی وقت دیتے ہیں۔"
                  : "At Family Dental Clinic, we believe a visit to the dentist should feel completely reassuring. We take time to listen, explain every clinical option, and ensure you feel in full control of your oral health decisions."}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-teal-700 shrink-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-teal-950">
                    {isUrdu ? "چھوٹے بچوں سے لے کر بزرگوں تک، ہر نسل کے لیے موزوں علاج" : "Generational care tailored for toddlers, teenagers, and seniors"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-teal-700 shrink-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-teal-950">
                    {isUrdu ? "پریشان مریضوں کے لیے پرسکون ماحول اور درد سے پاک تکنیکیں" : "Dedicated gentle protocols for anxious and nervous patients"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-teal-700 shrink-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-teal-950">
                    {isUrdu ? "علاج سے پہلے لاگت اور طریقہ کار کی مکمل وضاحت" : "Clear, itemized fee estimates with zero surprise bills"}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-teal-700"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{isUrdu ? "معائنے کا وقت حاصل کریں" : "Schedule a Visit"}</span>
                </Link>
              </div>
            </div>

            {/* Photo frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-teal-900/10 shadow-card">
              <Image
                src="/images/family-smiling.jpg"
                alt="Happy family smiling together"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline: Our Approach */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-800/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-teal-800">
              <Sparkles className="h-3.5 w-3.5 text-mint-600" aria-hidden="true" />
              <span>{isUrdu ? "ہمارا طریقہ کار" : "Our Step-by-Step Approach"}</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl">
              {isUrdu ? "پہلے دورے سے آخری مرحلے تک شفافیت" : "What you can expect at every visit"}
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timelineSteps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-teal-900/10 bg-ivory/60 p-7 shadow-xs"
              >
                <div className="font-display text-3xl font-800 text-teal-800/25">
                  {step.number}
                </div>
                <h3 className="mt-4 font-display text-lg font-700 text-teal-950">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Gallery */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-800/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-teal-800">
              <ShieldCheck className="h-3.5 w-3.5 text-mint-600" aria-hidden="true" />
              <span>{isUrdu ? "کلینک کا ماحول" : "The Clinic Environment"}</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl">
              {isUrdu ? "جدید سہولیات اور بے داغ صفائی" : "Designed for comfort, hygiene, and calm"}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-3xl border border-teal-900/10 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-teal-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-700 text-teal-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        locale={locale}
        title={dict.finalCta.title}
        subtitle={dict.finalCta.subtitle}
        bookButtonText={dict.finalCta.bookButton}
        callButtonText={dict.finalCta.callButton}
      />
    </>
  );
}
