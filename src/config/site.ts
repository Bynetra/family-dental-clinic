/**
 * Central clinic configuration — replace placeholder values before going live.
 *
 * DEMO MODE: All contact details, team names, addresses, and hours below are
 * fictional placeholders. The clinic must supply real information before launch.
 */

export const site = {
  /** Clinic identity */
  name: "Family Dental Clinic",
  shortName: "FDC",
  tagline: "Healthy smiles. Personal care. For every generation.",

  /**
   * Set NEXT_PUBLIC_SITE_URL to the production origin before launch.
   * Localhost fallback prevents publishing an invented canonical domain.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),

  /**
   * DEMO: Replace with real contact details before launch.
   * Leave empty to show the demo placeholder UI instead of a broken link.
   */
  phone: "" as string,
  phoneDisplay: "" as string,
  email: "" as string,
  whatsappNumber: "" as string,

  /** DEMO: Replace with real address before launch. */
  address: "123 Smile Street, Your City — placeholder address" as string,
  googleMapsUrl: "" as string,

  /** DEMO: Replace with real hours before launch. */
  openingHours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday",        time: "9:00 AM – 2:00 PM" },
    { days: "Sunday",          time: "Closed" },
  ],

  /** Demo mode flag — set to false when real content is supplied. */
  isDemo: true,

  /** Services list — referenced by multiple components. */
  services: [
    {
      slug: "checkups-cleaning",
      title: "Routine Checkups & Cleaning",
      shortDesc: "Prevention is the best care. Regular visits keep your smile healthy and catch concerns early.",
      fullDesc:
        "A routine checkup includes a thorough examination of teeth, gums, and soft tissues. Professional cleaning removes plaque and tartar that everyday brushing can miss. We recommend checkups every six months for most patients, though frequency may vary based on individual needs.",
      icon: "ShieldCheck",
    },
    {
      slug: "fillings-restorative",
      title: "Fillings & Restorative Care",
      shortDesc: "Restore function and appearance with tooth-coloured fillings and restorative options.",
      fullDesc:
        "When a tooth is affected by decay or damage, restorative care aims to preserve as much of the natural tooth as possible. We discuss all available options with you before any treatment begins. Materials and approach are selected based on your individual situation.",
      icon: "Wrench",
    },
    {
      slug: "teeth-whitening",
      title: "Teeth Whitening",
      shortDesc: "A brighter smile, with realistic expectations and a safe, supervised approach.",
      fullDesc:
        "Professional whitening can lighten the natural colour of teeth. Results vary depending on existing tooth shade and the nature of any staining. We explain realistic outcomes and suitability before recommending treatment. Whitening is not suitable for all patients.",
      icon: "Sparkles",
    },
    {
      slug: "braces-aligners",
      title: "Braces & Clear Aligners",
      shortDesc: "Teeth straightening options for children, teens, and adults — explained clearly.",
      fullDesc:
        "Orthodontic options include traditional braces and removable clear aligners. The most suitable approach depends on the nature of misalignment, age, and patient preference. A proper assessment is needed before recommending a specific treatment path.",
      icon: "AlignCenter",
    },
    {
      slug: "root-canal",
      title: "Root Canal Care",
      shortDesc: "When a tooth is deeply affected, root canal treatment can relieve pain and save the tooth.",
      fullDesc:
        "Root canal treatment removes infected or damaged pulp from inside a tooth, alleviating pain and allowing the tooth to be preserved. The procedure is typically completed over one or two visits. We take time to explain every step and discuss comfort options.",
      icon: "Activity",
    },
    {
      slug: "childrens-dentistry",
      title: "Children's Dentistry",
      shortDesc: "A welcoming, gentle approach to dental care designed for younger patients.",
      fullDesc:
        "We make children feel comfortable and safe at the dentist from an early age. Our approach focuses on education, prevention, and building positive associations with dental visits. Early dental habits set the foundation for lifelong oral health.",
      icon: "Heart",
    },
  ],

  /** Team — DEMO placeholder profiles */
  team: [
    {
      slug: "dr-alex-morgan",
      name: "Dr. Alex Morgan",
      role: "Lead Dentist",
      bio: "Sample profile — replace with the lead dentist's real name, qualifications, and biography before launch.",
      imageAlt: "Illustrative placeholder portrait — sample team member",
    },
    {
      slug: "dr-priya-sharma",
      name: "Dr. Priya Sharma",
      role: "Orthodontist",
      bio: "Sample profile — replace with the orthodontist's real name, qualifications, and biography before launch.",
      imageAlt: "Illustrative placeholder portrait — sample team member",
    },
    {
      slug: "jamie-chen",
      name: "Jamie Chen",
      role: "Dental Hygienist",
      bio: "Sample profile — replace with the hygienist's real name, qualifications, and biography before launch.",
      imageAlt: "Illustrative placeholder portrait — sample team member",
    },
  ],

  /** FAQ items */
  faqs: [
    {
      q: "How do I request an appointment?",
      a: "Use the appointment form on this page to submit your request. Because this is a demo, the form does not send real data. When the clinic is live, real contact details will be provided here.",
    },
    {
      q: "What should I expect on my first visit?",
      a: "A first visit typically includes a conversation about your dental history, a thorough examination, and a discussion of any areas of concern. Treatment is not usually performed at the first appointment unless urgently needed. The dentist will explain findings and discuss options with you.",
    },
    {
      q: "Can you see children?",
      a: "Yes — we welcome patients of all ages. We aim to make dental visits a positive experience for younger patients from the very first visit. Contact the clinic to discuss the best approach for your child.",
    },
    {
      q: "How are treatment costs discussed?",
      a: "We explain proposed treatments and associated costs before starting any work. Patients are encouraged to ask questions. Payment options and any applicable plans will be confirmed by the clinic directly.",
    },
    {
      q: "I'm anxious about dental visits — can you help?",
      a: "Dental anxiety is very common and completely understandable. Our team takes a gentle, patient approach and is happy to talk through concerns before any treatment begins. Please let us know when you get in touch — we can make sure you feel comfortable at every step.",
    },
  ],

  /** Gallery items — all illustrative, not the real clinic */
  gallery: [
    { alt: "Modern dental treatment room — illustrative image", aspect: "wide" },
    { alt: "Friendly reception area — illustrative image",      aspect: "square" },
    { alt: "Dental consultation with patient — illustrative image", aspect: "tall" },
    { alt: "Clean, well-lit clinic interior — illustrative image", aspect: "square" },
    { alt: "Dental hygienist at work — illustrative image",     aspect: "wide" },
  ],
} as const;

export type Site = typeof site;
