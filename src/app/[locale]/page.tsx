import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";

// Section Components
import { Hero } from "@/components/home/Hero";
import { TrustBar, type TrustItem } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { MeetTheTeam } from "@/components/home/MeetTheTeam";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { FAQSection } from "@/components/home/FAQSection";
import { AppointmentForm } from "@/components/home/AppointmentForm";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "", dict.meta.home.title, dict.meta.home.description);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  // Trust bar items with serializable iconKey
  const trustBarItems: TrustItem[] = [
    {
      title: dict.trustBar.modernEquipment.title,
      description: dict.trustBar.modernEquipment.description,
      iconKey: "cpu",
    },
    {
      title: dict.trustBar.sterilization.title,
      description: dict.trustBar.sterilization.description,
      iconKey: "sterilization",
    },
    {
      title: dict.trustBar.painless.title,
      description: dict.trustBar.painless.description,
      iconKey: "painless",
    },
    {
      title: dict.trustBar.family.title,
      description: dict.trustBar.family.description,
      iconKey: "family",
    },
  ];

  // Map service card images to localized items
  const serviceImages: Record<string, string> = {
    "routine-checkups": "/images/service-checkup.jpg",
    "teeth-whitening": "/images/service-whitening.jpg",
    "clear-aligners": "/images/service-braces.jpg",
    "pediatric-dentistry": "/images/service-kids.jpg",
    "restorative-fillings": "/images/service-filling.jpg",
    "root-canal-therapy": "/images/service-rootcanal.jpg",
  };

  const services = dict.services.items.map((s) => ({
    ...s,
    image: serviceImages[s.slug] || "/images/service-checkup.jpg",
  }));

  return (
    <>
      {/* 1. Hero: Split layout with AI photography & floating stat cards */}
      <Hero
        locale={locale}
        kicker={dict.hero.kicker}
        titlePart1={dict.hero.titlePart1}
        titleHighlight={dict.hero.titleHighlight}
        titlePart2={dict.hero.titlePart2}
        description={dict.hero.description}
        bookButtonText={dict.hero.bookButton}
        servicesButtonText={dict.hero.servicesButton}
      />

      {/* 2. Trust Bar: 4 Pillars with icons */}
      <TrustBar items={trustBarItems} />

      {/* 3. Services Grid: 6 cards with image zoom & hover lift */}
      <ServicesGrid
        locale={locale}
        title={dict.services.title}
        subtitle={dict.services.subtitle}
        viewAllText={dict.services.viewAll}
        services={services}
      />

      {/* 4. Why Choose Us: Visual frame + animated counter strip + checklist */}
      <WhyChooseUs
        locale={locale}
        title={dict.whyChooseUs.title}
        subtitle={dict.whyChooseUs.subtitle}
        stats={dict.whyChooseUs.stats}
        checklist={dict.whyChooseUs.checklist}
        ctaText={dict.whyChooseUs.cta}
      />

      {/* 5. Before / After Smile Comparison Slider */}
      <BeforeAfterSlider
        title={dict.beforeAfter.title}
        subtitle={dict.beforeAfter.subtitle}
        beforeLabel={dict.beforeAfter.before}
        afterLabel={dict.beforeAfter.after}
        description={dict.beforeAfter.description}
      />

      {/* 6. Meet the Team: Specialist doctor portraits and specialties */}
      <MeetTheTeam
        locale={locale}
        title={dict.team.title}
        subtitle={dict.team.subtitle}
        viewAllText={dict.team.viewAll}
      />

      {/* 7. Patient Testimonials Carousel with Stars & Verified Badges */}
      <TestimonialsCarousel
        title={dict.testimonials.title}
        subtitle={dict.testimonials.subtitle}
        testimonials={dict.testimonials.items}
      />

      {/* 8. FAQ Accordion with smooth height transitions */}
      <FAQSection
        title={dict.faq.title}
        subtitle={dict.faq.subtitle}
        items={dict.faq.items}
      />

      {/* 9. Booking Form with React Hook Form + Zod & WhatsApp integration */}
      <AppointmentForm
        locale={locale}
        title={dict.booking.title}
        subtitle={dict.booking.subtitle}
        labels={dict.booking}
      />

      {/* 10. Final CTA Banner with photo background & gradient overlay */}
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

