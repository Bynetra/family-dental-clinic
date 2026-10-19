/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CENTRAL BUSINESS CONFIGURATION — single source of truth for contact details.
 *
 * ⚠️  BEFORE LAUNCH — Ibrahim must review and replace every value marked TODO.
 *     Nothing here is secret; this file is safe to ship to the client.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const site = {
  /** Legal/clinic name used consistently across UI, metadata and structured data. */
  name: "Mian Channu Physio Rehab",

  /** Lead physiotherapist name & designation. */
  physiotherapist: "Dr. Farhan",
  designation: {
    en: "Consultant Physiotherapist, DPT (LMC)",
    ur: "کنسلٹنٹ فزیوتھراپسٹ، ڈی پی ٹی (ایل ایم سی)",
  },
  experience: {
    en: "Former Physiotherapist DHQ Sargodha, Former Physiotherapist Cancer Hospital Sahiwal",
    ur: "سابقہ فزیوتھراپسٹ ڈی ایچ کیو سرگودھا، سابقہ فزیوتھراپسٹ کینسر ہسپتال ساہیوال",
  },

  /**
   * Final production domain (no trailing slash).
   * Used for canonical URLs, Open Graph, sitemap and robots.
   */
  url: "https://www.mianchannuphysiorehab.com",

  /**
   * WhatsApp number in international format, DIGITS ONLY —
   * no "+", spaces, dashes or brackets.
   * This one value powers every WhatsApp button and link on the website.
   */
  whatsappNumber: "923366945952",

  /** Main contact phone, formatted nicely for display. */
  phoneDisplay: "0336 6945952",

  /** Secondary contact phone, formatted nicely for display. */
  phoneSecondary: "0323 9738305",

  /** Exact clinic address (street/area). */
  address: {
    en: "Medical Complex, Talamba Mian Channu Rd (Near PSO Petrol Pump), Mian Channu, 58000, Pakistan",
    ur: "میاں چنوں میڈیکل کمپلیکس، تلمبہ روڈ نزد پی ایس او (PSO) پٹرول پمپ، میاں چنوں، 58000، پاکستان",
  },

  /**
   * Google Maps link for clinic directions.
   */
  googleMapsUrl: "https://maps.google.com/?q=Medical+Complex,+Talamba+Mian+Channu+Rd,+Mian+Channu,+58000,+Pakistan",

  /** Typical consultation session length. */
  sessionLength: { en: "30–45 minutes", ur: "30 تا 45 منٹ" },

  /** Verified clinic opening hours. */
  openingHours: [
    {
      days: { en: "Monday – Saturday", ur: "پیر تا ہفتہ" },
      time: { en: "10:00 AM – 4:00 PM", ur: "صبح 10:00 تا دوپہر 4:00 بجے" },
    },
    {
      days: { en: "Sunday", ur: "اتوار" },
      time: { en: "Closed", ur: "بند" },
    },
  ],
} as const;

export type Site = typeof site;
