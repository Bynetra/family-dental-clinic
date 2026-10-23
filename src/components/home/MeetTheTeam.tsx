"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Calendar, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import type { Locale } from "@/lib/i18n/config";

export type DoctorProfile = {
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
  experience: string;
};

export function MeetTheTeam({
  locale = "en",
  title,
  subtitle,
  doctors,
  viewAllText = "Meet All Doctors & Clinical Staff",
}: {
  locale?: Locale;
  title?: string;
  subtitle?: string;
  doctors?: DoctorProfile[];
  viewAllText?: string;
}) {
  const isUrdu = locale === "ur";

  const defaultDoctors: DoctorProfile[] = doctors || [
    {
      name: isUrdu ? "ڈاکٹر سارہ احمد" : "Dr. Sarah Mitchell",
      role: isUrdu ? "سینئر ڈینٹل سرجن" : "Lead Dental Surgeon",
      specialty: isUrdu ? "جامع فیملی اور کاسمیٹک ڈینٹسٹری" : "Comprehensive & Restorative Dentistry",
      image: "/images/doctor-female.jpg",
      bio: isUrdu
        ? "14 سال سے زائد کے کلینیکل تجربے کے ساتھ، ڈاکٹر سارہ درد سے پاک دانتوں کے علاج میں مہارت رکھتی ہیں۔"
        : "Over 14 years of clinical experience specializing in gentle root treatments, restorative crowns, and anxiety-free patient care.",
      experience: isUrdu ? "14 سال کا تجربہ" : "14+ Years Experience",
    },
    {
      name: isUrdu ? "ڈاکٹر طارق محمود" : "Dr. Tariq Morgan",
      role: isUrdu ? "ماہر آرتھوڈانٹسٹ" : "Specialist Orthodontist",
      specialty: isUrdu ? "کلیر الائنرز اور دانتوں کی سیدھ" : "Clear Aligners & Teeth Straightening",
      image: "/images/doctor-male.jpg",
      bio: isUrdu
        ? "جدید ترین غیر مرئی الائنرز اور روایتی بریسز کے ذریعے خوبصورت اور قدرتی مسکراہٹیں سنوارنے کے ماہر۔"
        : "Pioneer in invisible aligner technology, helping teenagers and adults achieve naturally confident smiles without traditional metal braces.",
      experience: isUrdu ? "12 سال کا تجربہ" : "12+ Years Experience",
    },
    {
      name: isUrdu ? "ڈاکٹر عائشہ خان" : "Dr. Ayesha Chen",
      role: isUrdu ? "ماہر اطفال ڈینٹسٹ" : "Pediatric Dental Specialist",
      specialty: isUrdu ? "بچوں کی دانتوں کی دیکھ بھال" : "Gentle Children's Dentistry",
      image: "/images/doctor-pediatric.jpg",
      bio: isUrdu
        ? "بچوں کو دانتوں کی صفائی اور علاج کا مثبت اور خوشگوار تجربہ فراہم کرنے کے لیے پرعزم۔"
        : "Dedicated to creating positive, fun, and completely fear-free dental visits for toddlers, children, and teens.",
      experience: isUrdu ? "9 سال کا تجربہ" : "9+ Years Experience",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-800/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-800">
              <Users className="h-3.5 w-3.5 text-mint-600" aria-hidden="true" />
              <span>{isUrdu ? "ہماری ماہر ٹیم" : "Our Dental Specialists"}</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl lg:text-5xl">
              {title || (isUrdu ? "تجربہ کار اور ہمدرد ڈاکٹرز" : "Experienced specialists dedicated to your smile")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {subtitle ||
                (isUrdu
                  ? "ہمارے تمام ڈاکٹرز مستند اور مسلسل جدید تربیت سے آراستہ ہیں تاکہ آپ کو بہترین طبی معیار فراہم کیا جا سکے۔"
                  : "Every clinician at Family Dental Clinic combines gentle bedside manner with advanced postgraduate clinical training.")}
            </p>
          </div>
        </FadeUp>

        <div className="mt-16">
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {defaultDoctors.map((doc, idx) => (
              <StaggerItem key={idx}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-teal-900/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  {/* Photo */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-teal-50">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-teal-950/20 to-transparent" />
                    <div className="absolute bottom-4 start-4 end-4">
                      <span className="inline-block rounded-full bg-mint-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-950 shadow-xs">
                        {doc.role}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-800 text-white">
                        {doc.name}
                      </h3>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                        {doc.specialty}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {doc.bio}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-teal-900/10 pt-4">
                      <span className="text-xs font-medium text-muted">
                        {doc.experience}
                      </span>
                      <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 transition-colors hover:text-teal-600"
                      >
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{isUrdu ? "وقت بک کریں" : "Book Visit"}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-14 text-center">
          <Link
            href={`/${locale}/team`}
            className="inline-flex items-center gap-2.5 rounded-full border border-teal-900/15 bg-white px-7 py-3.5 text-sm font-semibold text-teal-900 shadow-xs transition-all hover:bg-teal-50 hover:shadow-sm"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

