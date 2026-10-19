import { site } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";

/**
 * LocalBusiness structured data.
 * ⚠️ TODO(Owner): Only verified details are included. Add `address`,
 * `geo`, `openingHoursSpecification` and `sameAs` once confirmed —
 * never fabricate ratings, reviews or registration numbers.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    additionalType: "https://schema.org/Physiotherapy",
    name: site.name,
    image: `${site.url}/images/hero-illustration.svg`,
    url: `${site.url}/${locale}`,
    telephone: site.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Medical Complex, Talamba Mian Channu Rd",
      addressLocality: "Mian Channu",
      postalCode: "58000",
      addressCountry: "PK",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    medicalSpecialty: "Physiotherapy",
    areaServed: "Mian Channu, Punjab, Pakistan",
    availableLanguage: ["English", "Urdu"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
