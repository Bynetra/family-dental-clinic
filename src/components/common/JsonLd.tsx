import { site } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";

/**
 * MedicalClinic structured data using only supplied business details.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    additionalType: "https://schema.org/Physiotherapy",
    name: site.name,
    logo: `${site.url}/brand/rana-shahid-mark.svg`,
    url: `${site.url}/${locale}`,
    telephone: `+${site.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.locality,
      postalCode: site.postalCode,
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
          "Sunday",
        ],
        opens: "09:00",
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
