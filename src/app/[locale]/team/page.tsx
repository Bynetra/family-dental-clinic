import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, GraduationCap, Award, Sparkles } from "lucide-react";
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
  return pageMetadata(locale, "/team", dict.meta.team.title, dict.meta.team.description);
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const isUrdu = locale === "ur";

  const doctors = [
    {
      name: isUrdu ? "ڈاکٹر سارہ احمد" : "Dr. Sarah Mitchell",
      role: isUrdu ? "سینئر ڈینٹل سرجن" : "Lead Dental Surgeon",
      specialty: isUrdu ? "جامع فیملی اور کاسمیٹک ڈینٹسٹری" : "Comprehensive & Restorative Dentistry",
      degrees: "BDS (Hons), MSc Restorative Dentistry, Dip. Implantology",
      image: "/images/doctor-female.jpg",
      bio: isUrdu
        ? "14 سال سے زائد کے کلینیکل تجربے کے ساتھ، ڈاکٹر سارہ درد سے پاک دانتوں کے علاج، کراؤنز اور مسکراہٹ کی بحالی میں مہارت رکھتی ہیں۔ وہ مریضوں کو ذہنی سکون فراہم کرنے کو اپنا مشن سمجھتی ہیں۔"
        : "Over 14 years of clinical experience specializing in gentle root treatments, restorative crowns, and anxiety-free patient care. Known for her gentle bedside touch and reassuring communication.",
      experience: isUrdu ? "14 سال کا تجربہ" : "14+ Years Clinical Experience",
    },
    {
      name: isUrdu ? "ڈاکٹر طارق محمود" : "Dr. Tariq Morgan",
      role: isUrdu ? "ماہر آرتھوڈانٹسٹ" : "Specialist Orthodontist",
      degrees: "BDS, MOrth RCS, Specialist Orthodontic Registry",
      image: "/images/doctor-male.jpg",
      bio: isUrdu
        ? "جدید ترین غیر مرئی الائنرز اور دانتوں کی سیدھ کے ماہر۔ انہوں نے سینکڑوں نوعمروں اور بالغوں کی مسکراہٹوں کو قدرتی خوبصورتی سے سنوارا ہے۔"
        : "Certified Diamond provider for clear aligner therapy. He focuses on discreet, non-invasive teeth straightening that complements the natural facial harmony of each patient.",
      experience: isUrdu ? "12 سال کا تجربہ" : "12+ Years Clinical Experience",
    },
    {
      name: isUrdu ? "ڈاکٹر عائشہ خان" : "Dr. Ayesha Chen",
      role: isUrdu ? "ماہر اطفال ڈینٹسٹ" : "Pediatric Dental Specialist",
      degrees: "BDS, Paediatric Dentistry Cert., Child Psychology Fellow",
      image: "/images/doctor-pediatric.jpg",
      bio: isUrdu
        ? "بچوں کے علاج میں خصوصی مہارت۔ ان کا پرسکون اور کھیل کود والا انداز چھوٹے بچوں اور پہلی بار آنے والوں کے خوف کو بالکل دور کر دیتا ہے۔"
        : "Passionate about creating positive, enjoyable dental memories for toddlers and children. She uses positive reinforcement and interactive education to build lifelong oral hygiene habits.",
      experience: isUrdu ? "9 سال کا تجربہ" : "9+ Years Clinical Experience",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={isUrdu ? "طبی عملہ" : "Our Clinicians"}
        title={dict.team.title}
        description={dict.team.subtitle}
        backgroundImage="/images/treatment-room.jpg"
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.team },
        ]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doc, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-3xl border border-teal-900/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-teal-50">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 start-4 end-4">
                    <span className="inline-block rounded-full bg-mint-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-950 shadow-xs">
                      {doc.role}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-800 text-white">
                      {doc.name}
                    </h2>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
                      <Sparkles className="h-4 w-4 text-mint-500" aria-hidden="true" />
                      <span>{doc.specialty}</span>
                    </div>

                    <div className="flex items-start gap-2 text-xs font-medium text-muted">
                      <GraduationCap className="h-4 w-4 shrink-0 text-teal-600 mt-0.5" aria-hidden="true" />
                      <span>{doc.degrees}</span>
                    </div>

                    <p className="text-sm leading-relaxed text-muted border-t border-teal-900/8 pt-3">
                      {doc.bio}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-teal-900/10 pt-5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-900">
                      <Award className="h-4 w-4 text-mint-600" aria-hidden="true" />
                      <span>{doc.experience}</span>
                    </div>

                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-teal-700"
                    >
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{isUrdu ? "وقت بک کریں" : "Book Visit"}</span>
                    </Link>
                  </div>
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
