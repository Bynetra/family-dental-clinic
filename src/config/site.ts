/**
 * Central business configuration.
 * Keep public contact, location, hours, and identity details in this file so
 * pages, metadata, structured data, and WhatsApp links cannot drift apart.
 */
export const site = {
  name: "Dr Rana Shahid Physiotherapist",
  shortName: "Rana Shahid Physio",
  clinicName: "Shifa Hospital",
  physiotherapist: "Dr Rana Shahid",
  physiotherapistUrdu: "ڈاکٹر رانا شاہد",
  designation: {
    en: "Consultant Physiotherapist",
    ur: "کنسلٹنٹ فزیوتھراپسٹ",
  },
  qualifications: "DPT (Lahore), MPPTA",

  /**
   * Set NEXT_PUBLIC_SITE_URL to the final production origin before launch.
   * Localhost is deliberately used as the non-production fallback so the site
   * does not publish an invented or unconfirmed canonical domain.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),

  /** Digits only, in international format, for wa.me links. */
  whatsappNumber: "923152315145",
  phoneDisplay: "0315 2315145",
  phoneSecondary: "" as string,

  address: {
    en: "C9X4+R5R, Tulamba Road, Gulshan Ahmad Town, Mian Channu 58000, Pakistan",
    ur: "C9X4+R5R، تلمبہ روڈ، گلشن احمد ٹاؤن، میاں چنوں 58000، پاکستان",
  },
  streetAddress: "C9X4+R5R, Tulamba Road, Gulshan Ahmad Town",
  locality: "Mian Channu",
  postalCode: "58000",
  googleMapsUrl:
    "https://www.google.com/maps/place/Dr+Rana+Shahid+Physiotherapist/@30.4495146,72.3553017,54m/data=!3m1!1e3!4m14!1m7!3m6!1s0x392335007fb6ce45:0xd8525f330c39a677!2sDr+Rana+Shahid+Physiotherapist!8m2!3d30.4495625!4d72.3554375!16s%2Fg%2F11z7lxcj17!3m5!1s0x392335007fb6ce45:0xd8525f330c39a677!8m2!3d30.4495625!4d72.3554375!16s%2Fg%2F11z7lxcj17?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
  googleReviewCount: 47,

  openingHours: [
    {
      days: { en: "Every day", ur: "روزانہ" },
      time: { en: "9:00 AM – 4:00 PM", ur: "صبح 9:00 تا شام 4:00 بجے" },
    },
  ],
} as const;

export type Site = typeof site;
