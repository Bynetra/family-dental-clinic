import { site } from "@/config/site";
import type { Locale } from "./config";

/** English and Urdu use the same typed content shape. */
const en = {
  meta: {
    home: {
      title: "Dr Rana Shahid | Physiotherapist in Mian Channu",
      description:
        "Consultant Physiotherapist Dr Rana Shahid provides orthopedic, neurological, stroke, sports injury, and pediatric rehabilitation at Shifa Hospital, Tulamba Road, Mian Channu.",
    },
    about: {
      title: "About Dr Rana Shahid | Physiotherapist in Mian Channu",
      description:
        "Learn about Dr Rana Shahid, Consultant Physiotherapist (DPT Lahore, MPPTA), and his assessment-led physiotherapy care at Shifa Hospital in Mian Channu.",
    },
    services: {
      title: "Physiotherapy Services | Dr Rana Shahid, Mian Channu",
      description:
        "Explore orthopedic, back and neck, joint, neurological, stroke, sports injury, and pediatric physiotherapy services in Mian Channu.",
    },
    conditions: {
      title: "Conditions We Help With | Dr Rana Shahid",
      description:
        "Assessment-led physiotherapy for back and neck pain, joint and shoulder problems, neurological weakness, stroke rehabilitation, sports injuries, and children's movement concerns.",
    },
    contact: {
      title: "Contact & Appointments | Dr Rana Shahid",
      description: `Call or WhatsApp ${site.phoneDisplay} for an appointment with Dr Rana Shahid at Shifa Hospital, Tulamba Road, Mian Channu. Open daily, 9 AM to 4 PM.`,
    },
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    conditions: "Conditions",
    contact: "Contact",
    book: "Book Appointment",
  },
  common: {
    learnMore: "Learn more",
    inquireWhatsapp: "Ask on WhatsApp",
    bookAppointment: "Book Appointment",
    callUs: "Call the clinic",
    viewAllServices: "View all services",
    floatingWhatsapp: `WhatsApp ${site.phoneDisplay}`,
    languageLabel: "Language",
  },
  whatsapp: {
    default:
      "Hello Dr Rana Shahid, I would like to request a physiotherapy appointment at Shifa Hospital, Mian Channu.",
    service: (name: string) =>
      `Hello Dr Rana Shahid, I would like to ask about ${name} and request an appointment.`,
  },
  hero: {
    kicker: "Consultant Physiotherapist · Shifa Hospital, Mian Channu",
    heading: "Move with confidence. Recover with expert guidance.",
    sub: "Personalized physiotherapy and rehabilitation for orthopedic, neurological, sports, and movement-related concerns—planned around your assessment and goals.",
    primaryCta: "Request an Appointment",
    secondaryCta: "Explore Services",
    trust: [
      "DPT (Lahore) · MPPTA",
      "Orthopedic & neurological rehabilitation",
      `${site.googleReviewCount} Google reviews`,
    ],
    imageAlt: "Representative clinical scene of guided shoulder mobility physiotherapy",
  },
  aboutPreview: {
    eyebrow: "Focused rehabilitation care",
    heading: "A clear, patient-focused path back to movement",
    body: "Dr Rana Shahid is a Consultant Physiotherapist providing assessment-led care at Shifa Hospital in Mian Channu. Each plan begins with understanding how pain, weakness, or limited movement affects everyday life.",
    body2:
      "Treatment may combine guided exercise, movement retraining, and appropriate physiotherapy techniques. The approach and pace are selected after an individual clinical assessment.",
    cta: "About Dr Rana Shahid",
    imageAlt: "Representative clinical scene of a guided arm mobility assessment",
  },
  services: {
    eyebrow: "Physiotherapy services",
    heading: "Care for movement, strength, and function",
    sub: "Services shown here are based on the clinic's supplied posters. The appropriate option is decided after an individual assessment.",
    items: [
      {
        slug: "back-neck-pain",
        title: "Back, Neck & Spine Care",
        desc: "Assessment and rehabilitation for back pain, neck discomfort, stiffness, and movement limitations affecting the spine.",
      },
      {
        slug: "joint-mobility",
        title: "Orthopedic & Joint Rehabilitation",
        desc: "Structured physiotherapy for joint pain, shoulder restriction, knee concerns, and other musculoskeletal problems.",
      },
      {
        slug: "posture-movement",
        title: "Neurological Rehabilitation",
        desc: "Movement, balance, coordination, and strength training for people living with neurological weakness or functional limitations.",
      },
      {
        slug: "stroke-rehab",
        title: "Stroke & Paralysis Rehabilitation",
        desc: "Goal-based rehabilitation to support mobility, balance, transfers, and daily function after stroke or paralysis.",
      },
      {
        slug: "sports-injury",
        title: "Sports Injury Rehabilitation",
        desc: "Progressive recovery for sports-related strains, sprains, pain, and reduced performance after injury.",
      },
      {
        slug: "exercise-based",
        title: "Pediatric Physiotherapy",
        desc: "Supportive physiotherapy for children with movement, posture, strength, or developmental mobility concerns.",
      },
    ],
  },
  servicesPage: {
    note: "Services begin with an individual assessment by Dr Rana Shahid. Recommendations vary by condition, health history, and functional goals.",
  },
  conditions: {
    eyebrow: "Conditions we help with",
    heading: "Organized around your movement needs",
    sub: "Physiotherapy can support many conditions, but suitability and expected progress depend on an individual clinical assessment.",
    note: "This information is educational and does not replace diagnosis or personalized medical advice. An assessment is required before treatment planning.",
    items: [
      {
        title: "Back & spinal discomfort",
        desc: "Pain, stiffness, or reduced mobility affecting comfortable sitting, standing, bending, or walking.",
      },
      {
        title: "Neck pain & stiffness",
        desc: "Neck and upper-back symptoms that limit turning, posture, sleep, or normal daily activity.",
      },
      {
        title: "Shoulder & joint restriction",
        desc: "Painful or limited movement involving the shoulder, knee, or other joints and surrounding tissues.",
      },
      {
        title: "Neurological weakness",
        desc: "Balance, coordination, strength, or movement difficulties linked with neurological conditions.",
      },
      {
        title: "After stroke or paralysis",
        desc: "Rehabilitation needs involving mobility, transfers, balance, limb use, and everyday independence.",
      },
      {
        title: "Sports-related injuries",
        desc: "Strains, sprains, and movement limitations that require gradual, guided return to activity.",
      },
      {
        title: "Muscle weakness & reduced mobility",
        desc: "Loss of strength, confidence, or function after pain, inactivity, illness, or injury.",
      },
      {
        title: "Children's movement concerns",
        desc: "Movement, posture, strength, and developmental mobility concerns requiring child-centered support.",
      },
    ],
  },
  conditionsPage: {
    intro:
      "Explore common reasons people seek physiotherapy. Dr Rana Shahid assesses symptoms, movement, and functional goals before recommending a plan.",
  },
  why: {
    eyebrow: "Why choose this clinic",
    heading: "Professional care, explained clearly",
    sub: "A calm clinical experience centered on assessment, practical guidance, and progress that matters in daily life.",
    items: [
      {
        title: "Qualified physiotherapist",
        desc: "Consultation with Dr Rana Shahid, Consultant Physiotherapist, DPT (Lahore), MPPTA.",
      },
      {
        title: "Individual assessment",
        desc: "Your symptoms, movement, history, and goals guide the rehabilitation plan.",
      },
      {
        title: "Broad rehabilitation focus",
        desc: "Orthopedic, neurological, stroke, sports, and pediatric rehabilitation services.",
      },
      {
        title: "Direct appointment requests",
        desc: `Call or WhatsApp ${site.phoneDisplay}; the clinic team will confirm availability with you.`,
      },
    ],
  },
  how: {
    eyebrow: "Your visit",
    heading: "A simple appointment process",
    steps: [
      {
        title: "Share your concern",
        desc: `Call or WhatsApp ${site.phoneDisplay} with your name, main concern, and preferred visit time.`,
      },
      {
        title: "Confirm availability",
        desc: "The clinic team will reply with an available time. Opening WhatsApp does not itself confirm an appointment.",
      },
      {
        title: "Attend your assessment",
        desc: "Visit Shifa Hospital for an individual assessment and a rehabilitation plan based on your needs.",
      },
    ],
    note: "Clinic hours are 9:00 AM to 4:00 PM every day. Appointment times remain subject to confirmation by the clinic.",
  },
  physio: {
    eyebrow: "Your physiotherapist",
    heading: "Dr Rana Shahid",
    title: "Consultant Physiotherapist · DPT (Lahore), MPPTA",
    bio: "Dr Rana Shahid provides physiotherapy and rehabilitation at Shifa Hospital in Mian Channu. His listed areas of care include orthopedic, neurological, stroke, sports injury, and pediatric rehabilitation.",
    fieldsNote:
      "Treatment recommendations follow an individual assessment. Suitability, pace, and outcomes vary with each person's condition and goals.",
    cta: "Request a Consultation",
    imageAlt: "Representative illustration of a physiotherapy professional",
  },
  faq: {
    eyebrow: "Common questions",
    heading: "Before you visit",
    sub: `For appointment availability, call or WhatsApp ${site.phoneDisplay}.`,
    items: [
      {
        q: "Who provides physiotherapy at the clinic?",
        a: "Physiotherapy consultations are provided by Dr Rana Shahid, Consultant Physiotherapist, DPT (Lahore), MPPTA.",
      },
      {
        q: "Where is the clinic?",
        a: `The clinic is at Shifa Hospital, ${site.address.en}. Use the directions link on the Contact page for Google Maps.`,
      },
      {
        q: "What are the opening hours?",
        a: "The supplied Google Business profile lists the clinic as open every day from 9:00 AM to 4:00 PM.",
      },
      {
        q: "Does sending the form confirm my appointment?",
        a: "No. The form opens a prepared WhatsApp message. Your appointment is confirmed only after the clinic replies and agrees on a time.",
      },
      {
        q: "What should I bring?",
        a: "Bring any relevant prescriptions, scans, or medical reports you already have, plus a list of current medicines and comfortable clothing for movement assessment.",
      },
    ],
  },
  cta: {
    heading: "Ready to discuss your movement or pain concern?",
    sub: "Send a WhatsApp appointment request with your name, concern, and preferred time. The clinic will reply to confirm availability.",
    primary: "Request on WhatsApp",
    secondary: "Explore Services",
  },
  footer: {
    about:
      "Assessment-led physiotherapy and rehabilitation with Dr Rana Shahid at Shifa Hospital, Mian Channu.",
    quickLinks: "Quick links",
    servicesTitle: "Services",
    contactTitle: "Contact & clinic",
    addressLabel: "Address",
    phoneLabel: "Phone / WhatsApp",
    hoursTitle: "Opening hours",
    rights: (year: number) => `© ${year} Dr Rana Shahid Physiotherapist. All rights reserved.`,
    languageNote: "Available in English and Urdu / انگریزی اور اردو میں دستیاب",
    disclaimer:
      "Website information is for general education. Treatment suitability and outcomes vary and require an individual clinical assessment.",
    credits: "Consultant Physiotherapist · DPT (Lahore), MPPTA",
  },
  aboutPage: {
    eyebrow: "About",
    heading: "Physiotherapy centered on better everyday movement",
    blocks: [
      {
        heading: "About Dr Rana Shahid",
        body: "Dr Rana Shahid is a Consultant Physiotherapist with the supplied qualifications DPT (Lahore) and MPPTA. He practices at Shifa Hospital in Mian Channu.",
      },
      {
        heading: "Assessment before treatment",
        body: "Physiotherapy begins by understanding symptoms, movement, health history, and personal goals. This helps shape a plan appropriate to the individual rather than a one-size-fits-all approach.",
      },
      {
        heading: "Areas of care",
        body: "The supplied clinic material lists orthopedic physiotherapy, back and neck care, joint and shoulder rehabilitation, neurological and stroke rehabilitation, sports injuries, and pediatric concerns.",
      },
    ],
    valuesEyebrow: "Care principles",
    values: [
      {
        title: "Clear communication",
        desc: "Concerns, options, and next steps explained in accessible language.",
      },
      {
        title: "Individual planning",
        desc: "Care adapted to findings from assessment and meaningful functional goals.",
      },
      {
        title: "Progressive rehabilitation",
        desc: "Exercises and activity progressed according to response and ability.",
      },
      {
        title: "Realistic guidance",
        desc: "No guaranteed outcomes; progress depends on condition and individual factors.",
      },
    ],
  },
  contactPage: {
    eyebrow: "Contact & appointments",
    heading: "Plan your visit",
    sub: "Call for clinic information or send a structured appointment request on WhatsApp. The clinic will confirm availability directly.",
    whatsappCardTitle: "Request an appointment on WhatsApp",
    whatsappCardBody: "Use the prepared message to share your details. Sending it is a request, not an automatic confirmation.",
    phoneTitle: "Phone & WhatsApp",
    addressTitle: "Clinic address",
    hoursTitle: "Clinic hours",
    mapTitle: "Google Maps",
    mapPlaceholder: site.address.en as string,
    formTitle: "Prepare your WhatsApp request",
    formName: "Your name",
    formPhone: "Your phone number",
    formPreferredTime: "Preferred appointment date and time",
    formMessage: "Condition or concern",
    formSubmit: "Open Request in WhatsApp",
    formNote:
      "This form does not send data to the website. It opens WhatsApp with your prepared message; the clinic must still confirm your time.",
    formError: "Please enter your name and phone number before continuing.",
    formPhoneError: "Please enter a valid phone number.",
    popupError:
      "WhatsApp could not be opened. Please allow pop-ups or call the clinic directly.",
    messageLabel: "Briefly describe your pain, movement difficulty, or rehabilitation concern...",
  },
  notFound: {
    title: "Page not found",
    sub: "The page you are looking for does not exist or has moved.",
    cta: "Back to home",
  },
};

export type Dictionary = typeof en;

const ur: Dictionary = {
  meta: {
    home: {
      title: "ڈاکٹر رانا شاہد | فزیوتھراپسٹ میاں چنوں",
      description:
        "کنسلٹنٹ فزیوتھراپسٹ ڈاکٹر رانا شاہد شفاء ہسپتال، تلمبہ روڈ، میاں چنوں میں آرتھوپیڈک، اعصابی، فالج، کھیلوں کی چوٹوں اور بچوں کی بحالی کی خدمات فراہم کرتے ہیں۔",
    },
    about: {
      title: "ڈاکٹر رانا شاہد کے بارے میں | فزیوتھراپسٹ میاں چنوں",
      description:
        "کنسلٹنٹ فزیوتھراپسٹ ڈاکٹر رانا شاہد، ڈی پی ٹی لاہور، ایم پی پی ٹی اے اور شفاء ہسپتال میاں چنوں میں انفرادی معائنے پر مبنی فزیوتھراپی کے بارے میں جانیں۔",
    },
    services: {
      title: "فزیوتھراپی خدمات | ڈاکٹر رانا شاہد، میاں چنوں",
      description:
        "میاں چنوں میں آرتھوپیڈک، کمر و گردن، جوڑوں، اعصابی، فالج، کھیلوں کی چوٹوں اور بچوں کی فزیوتھراپی خدمات۔",
    },
    conditions: {
      title: "کن مسائل میں مدد مل سکتی ہے | ڈاکٹر رانا شاہد",
      description:
        "کمر و گردن کے درد، جوڑوں اور کندھے کے مسائل، اعصابی کمزوری، فالج کے بعد بحالی، کھیلوں کی چوٹوں اور بچوں کی حرکت سے متعلق مسائل کے لیے فزیوتھراپی۔",
    },
    contact: {
      title: "رابطہ اور اپائنٹمنٹ | ڈاکٹر رانا شاہد",
      description: `شفاء ہسپتال، تلمبہ روڈ، میاں چنوں میں ڈاکٹر رانا شاہد سے اپائنٹمنٹ کے لیے ${site.phoneDisplay} پر کال یا واٹس ایپ کریں۔ اوقات روزانہ صبح 9 تا شام 4 بجے۔`,
    },
  },
  nav: {
    home: "ہوم",
    about: "تعارف",
    services: "خدمات",
    conditions: "مسائل",
    contact: "رابطہ",
    book: "اپائنٹمنٹ لیں",
  },
  common: {
    learnMore: "مزید جانیں",
    inquireWhatsapp: "واٹس ایپ پر پوچھیں",
    bookAppointment: "اپائنٹمنٹ لیں",
    callUs: "کلینک کو کال کریں",
    viewAllServices: "تمام خدمات دیکھیں",
    floatingWhatsapp: `واٹس ایپ ${site.phoneDisplay}`,
    languageLabel: "زبان",
  },
  whatsapp: {
    default:
      "السلام علیکم ڈاکٹر رانا شاہد، میں شفاء ہسپتال میاں چنوں میں فزیوتھراپی اپائنٹمنٹ کی درخواست کرنا چاہتا/چاہتی ہوں۔",
    service: (name: string) =>
      `السلام علیکم ڈاکٹر رانا شاہد، میں ${name} کے بارے میں معلومات اور اپائنٹمنٹ لینا چاہتا/چاہتی ہوں۔`,
  },
  hero: {
    kicker: "کنسلٹنٹ فزیوتھراپسٹ · شفاء ہسپتال، میاں چنوں",
    heading: "اعتماد کے ساتھ حرکت کریں، ماہر رہنمائی سے بحالی پائیں۔",
    sub: "آرتھوپیڈک، اعصابی، کھیلوں اور حرکت سے متعلق مسائل کے لیے انفرادی فزیوتھراپی اور بحالی—آپ کے معائنے اور اہداف کے مطابق۔",
    primaryCta: "اپائنٹمنٹ کی درخواست کریں",
    secondaryCta: "خدمات دیکھیں",
    trust: [
      "ڈی پی ٹی (لاہور) · ایم پی پی ٹی اے",
      "آرتھوپیڈک اور اعصابی بحالی",
      `${site.googleReviewCount} گوگل جائزے`,
    ],
    imageAlt: "کندھے کی حرکت کی رہنمائی پر مبنی فزیوتھراپی کا نمائندہ کلینیکل منظر",
  },
  aboutPreview: {
    eyebrow: "توجہ کے ساتھ بحالی",
    heading: "بہتر حرکت کی طرف واضح اور مریض دوست سفر",
    body: "ڈاکٹر رانا شاہد کنسلٹنٹ فزیوتھراپسٹ ہیں اور شفاء ہسپتال میاں چنوں میں معائنے پر مبنی خدمات فراہم کرتے ہیں۔ ہر منصوبہ یہ سمجھنے سے شروع ہوتا ہے کہ درد، کمزوری یا محدود حرکت روزمرہ زندگی کو کیسے متاثر کرتی ہے۔",
    body2:
      "علاج میں رہنمائی کے ساتھ ورزش، حرکت کی تربیت اور موزوں فزیوتھراپی طریقے شامل ہو سکتے ہیں۔ طریقہ اور رفتار انفرادی معائنے کے بعد طے کیے جاتے ہیں۔",
    cta: "ڈاکٹر رانا شاہد کے بارے میں",
    imageAlt: "بازو کی حرکت کے معائنے کا نمائندہ کلینیکل منظر",
  },
  services: {
    eyebrow: "فزیوتھراپی خدمات",
    heading: "حرکت، طاقت اور روزمرہ کارکردگی کے لیے نگہداشت",
    sub: "یہ خدمات فراہم کردہ کلینک پوسٹرز پر مبنی ہیں۔ آپ کے لیے موزوں طریقہ انفرادی معائنے کے بعد طے کیا جاتا ہے۔",
    items: [
      {
        slug: "back-neck-pain",
        title: "کمر، گردن اور ریڑھ کی ہڈی کی نگہداشت",
        desc: "کمر درد، گردن کی تکلیف، اکڑن اور ریڑھ کی حرکت میں رکاوٹ کے لیے معائنہ اور بحالی۔",
      },
      {
        slug: "joint-mobility",
        title: "آرتھوپیڈک اور جوڑوں کی بحالی",
        desc: "جوڑوں کے درد، کندھے کی محدود حرکت، گھٹنے اور دیگر عضلاتی و ہڈیوں کے مسائل کے لیے منظم فزیوتھراپی۔",
      },
      {
        slug: "posture-movement",
        title: "اعصابی بحالی",
        desc: "اعصابی کمزوری یا جسمانی کارکردگی میں کمی کے لیے حرکت، توازن، ہم آہنگی اور طاقت کی تربیت۔",
      },
      {
        slug: "stroke-rehab",
        title: "فالج اور مفلوجی کے بعد بحالی",
        desc: "فالج یا مفلوجی کے بعد حرکت، توازن، اٹھنے بیٹھنے اور روزمرہ کاموں میں مدد کے لیے ہدف پر مبنی بحالی۔",
      },
      {
        slug: "sports-injury",
        title: "کھیلوں کی چوٹوں کی بحالی",
        desc: "کھیلوں سے متعلق کھچاؤ، موچ، درد اور چوٹ کے بعد کارکردگی میں کمی کے لیے تدریجی بحالی۔",
      },
      {
        slug: "exercise-based",
        title: "بچوں کی فزیوتھراپی",
        desc: "بچوں کی حرکت، جسمانی انداز، طاقت یا نشوونما سے متعلق حرکتی مسائل کے لیے معاون فزیوتھراپی۔",
      },
    ],
  },
  servicesPage: {
    note: "ہر خدمت ڈاکٹر رانا شاہد کے انفرادی معائنے سے شروع ہوتی ہے۔ سفارشات مسئلے، طبی تاریخ اور عملی اہداف کے مطابق مختلف ہو سکتی ہیں۔",
  },
  conditions: {
    eyebrow: "کن مسائل میں مدد مل سکتی ہے",
    heading: "آپ کی حرکتی ضروریات کے مطابق رہنمائی",
    sub: "فزیوتھراپی کئی مسائل میں مدد دے سکتی ہے، لیکن موزونیت اور متوقع بہتری انفرادی معائنے پر منحصر ہے۔",
    note: "یہ معلومات صرف آگاہی کے لیے ہیں اور تشخیص یا ذاتی طبی مشورے کا متبادل نہیں۔ علاج کا منصوبہ بنانے سے پہلے معائنہ ضروری ہے۔",
    items: [
      {
        title: "کمر اور ریڑھ کی تکلیف",
        desc: "درد، اکڑن یا حرکت میں کمی جس سے بیٹھنا، کھڑا ہونا، جھکنا یا چلنا مشکل ہو۔",
      },
      {
        title: "گردن کا درد اور اکڑن",
        desc: "گردن اور اوپری کمر کی علامات جو موڑنے، جسمانی انداز، نیند یا روزمرہ کام کو متاثر کریں۔",
      },
      {
        title: "کندھے اور جوڑوں کی محدود حرکت",
        desc: "کندھے، گھٹنے یا دوسرے جوڑوں اور اردگرد کے بافتوں میں درد یا محدود حرکت۔",
      },
      {
        title: "اعصابی کمزوری",
        desc: "اعصابی مسائل سے جڑی توازن، ہم آہنگی، طاقت یا حرکت کی مشکلات۔",
      },
      {
        title: "فالج یا مفلوجی کے بعد",
        desc: "حرکت، اٹھنے بیٹھنے، توازن، ہاتھ پاؤں کے استعمال اور روزمرہ خودمختاری سے متعلق بحالی۔",
      },
      {
        title: "کھیلوں سے متعلق چوٹیں",
        desc: "کھچاؤ، موچ اور حرکت کی محدودیت جن میں سرگرمی کی طرف بتدریج اور محفوظ واپسی درکار ہو۔",
      },
      {
        title: "پٹھوں کی کمزوری اور محدود حرکت",
        desc: "درد، کم سرگرمی، بیماری یا چوٹ کے بعد طاقت، اعتماد یا جسمانی کارکردگی میں کمی۔",
      },
      {
        title: "بچوں کی حرکت سے متعلق مسائل",
        desc: "حرکت، جسمانی انداز، طاقت اور نشوونما سے متعلق مسائل جن میں بچوں کے مطابق معاونت درکار ہو۔",
      },
    ],
  },
  conditionsPage: {
    intro:
      "وہ عام وجوہات دیکھیں جن کے لیے لوگ فزیوتھراپی سے رجوع کرتے ہیں۔ ڈاکٹر رانا شاہد منصوبہ تجویز کرنے سے پہلے علامات، حرکت اور عملی اہداف کا معائنہ کرتے ہیں۔",
  },
  why: {
    eyebrow: "اس کلینک کا انتخاب کیوں",
    heading: "پیشہ ورانہ نگہداشت، آسان انداز میں وضاحت",
    sub: "ایک پُرسکون طبی تجربہ جو معائنے، عملی رہنمائی اور روزمرہ زندگی میں اہم بہتری پر مرکوز ہے۔",
    items: [
      {
        title: "تعلیم یافتہ فزیوتھراپسٹ",
        desc: "ڈاکٹر رانا شاہد، کنسلٹنٹ فزیوتھراپسٹ، ڈی پی ٹی (لاہور)، ایم پی پی ٹی اے سے مشاورت۔",
      },
      {
        title: "انفرادی معائنہ",
        desc: "آپ کی علامات، حرکت، طبی تاریخ اور اہداف بحالی کے منصوبے کی بنیاد بنتے ہیں۔",
      },
      {
        title: "وسیع بحالی خدمات",
        desc: "آرتھوپیڈک، اعصابی، فالج، کھیلوں کی چوٹوں اور بچوں کی بحالی۔",
      },
      {
        title: "براہ راست اپائنٹمنٹ درخواست",
        desc: `${site.phoneDisplay} پر کال یا واٹس ایپ کریں؛ کلینک ٹیم دستیاب وقت کی تصدیق کرے گی۔`,
      },
    ],
  },
  how: {
    eyebrow: "آپ کا وزٹ",
    heading: "اپائنٹمنٹ کا آسان طریقہ",
    steps: [
      {
        title: "اپنا مسئلہ بتائیں",
        desc: `${site.phoneDisplay} پر کال یا واٹس ایپ کے ذریعے اپنا نام، بنیادی مسئلہ اور پسندیدہ وقت بتائیں۔`,
      },
      {
        title: "دستیابی کی تصدیق لیں",
        desc: "کلینک ٹیم دستیاب وقت کے ساتھ جواب دے گی۔ صرف واٹس ایپ کھلنے سے اپائنٹمنٹ کی تصدیق نہیں ہوتی۔",
      },
      {
        title: "معائنے کے لیے آئیں",
        desc: "شفاء ہسپتال میں انفرادی معائنے اور اپنی ضروریات کے مطابق بحالی کے منصوبے کے لیے تشریف لائیں۔",
      },
    ],
    note: "کلینک روزانہ صبح 9:00 سے شام 4:00 بجے تک کھلا ہے۔ اپائنٹمنٹ کا وقت کلینک کی تصدیق کے بعد طے ہوتا ہے۔",
  },
  physio: {
    eyebrow: "آپ کے فزیوتھراپسٹ",
    heading: "ڈاکٹر رانا شاہد",
    title: "کنسلٹنٹ فزیوتھراپسٹ · ڈی پی ٹی (لاہور)، ایم پی پی ٹی اے",
    bio: "ڈاکٹر رانا شاہد شفاء ہسپتال میاں چنوں میں فزیوتھراپی اور بحالی کی خدمات فراہم کرتے ہیں۔ فراہم کردہ معلومات کے مطابق ان کی خدمات میں آرتھوپیڈک، اعصابی، فالج، کھیلوں کی چوٹوں اور بچوں کی بحالی شامل ہے۔",
    fieldsNote:
      "علاج کی سفارش انفرادی معائنے کے بعد کی جاتی ہے۔ موزونیت، رفتار اور نتائج ہر فرد کے مسئلے اور اہداف کے مطابق مختلف ہوتے ہیں۔",
    cta: "مشاورت کی درخواست کریں",
    imageAlt: "فزیوتھراپی کے ماہر کی نمائندہ علامتی تصویر",
  },
  faq: {
    eyebrow: "عام سوالات",
    heading: "کلینک آنے سے پہلے",
    sub: `اپائنٹمنٹ کی دستیابی کے لیے ${site.phoneDisplay} پر کال یا واٹس ایپ کریں۔`,
    items: [
      {
        q: "کلینک میں فزیوتھراپی کون فراہم کرتے ہیں؟",
        a: "فزیوتھراپی مشاورت ڈاکٹر رانا شاہد، کنسلٹنٹ فزیوتھراپسٹ، ڈی پی ٹی (لاہور)، ایم پی پی ٹی اے فراہم کرتے ہیں۔",
      },
      {
        q: "کلینک کہاں واقع ہے؟",
        a: `کلینک شفاء ہسپتال، ${site.address.ur} میں ہے۔ گوگل میپس کے لیے رابطہ صفحے پر راستے کا لنک استعمال کریں۔`,
      },
      {
        q: "کلینک کے اوقات کیا ہیں؟",
        a: "فراہم کردہ گوگل بزنس پروفائل کے مطابق کلینک روزانہ صبح 9:00 سے شام 4:00 بجے تک کھلا ہے۔",
      },
      {
        q: "کیا فارم بھیجنے سے اپائنٹمنٹ پکی ہو جاتی ہے؟",
        a: "نہیں۔ فارم ایک تیار واٹس ایپ پیغام کھولتا ہے۔ اپائنٹمنٹ تب پکی ہوگی جب کلینک جواب دے کر وقت کی تصدیق کرے گا۔",
      },
      {
        q: "پہلے وزٹ پر کیا ساتھ لاؤں؟",
        a: "اگر موجود ہوں تو متعلقہ نسخے، اسکین یا طبی رپورٹس، موجودہ ادویات کی فہرست اور حرکت کے لیے آرام دہ لباس ساتھ لائیں۔",
      },
    ],
  },
  cta: {
    heading: "اپنی حرکت یا درد کے مسئلے پر بات کرنا چاہتے ہیں؟",
    sub: "اپنا نام، مسئلہ اور پسندیدہ وقت لکھ کر واٹس ایپ پر درخواست بھیجیں۔ کلینک دستیابی کی تصدیق کے لیے جواب دے گا۔",
    primary: "واٹس ایپ پر درخواست کریں",
    secondary: "خدمات دیکھیں",
  },
  footer: {
    about:
      "شفاء ہسپتال، میاں چنوں میں ڈاکٹر رانا شاہد کے ساتھ معائنے پر مبنی فزیوتھراپی اور بحالی۔",
    quickLinks: "فوری روابط",
    servicesTitle: "خدمات",
    contactTitle: "رابطہ اور کلینک",
    addressLabel: "پتہ",
    phoneLabel: "فون / واٹس ایپ",
    hoursTitle: "اوقاتِ کار",
    rights: (year: number) => `© ${year} ڈاکٹر رانا شاہد فزیوتھراپسٹ۔ جملہ حقوق محفوظ ہیں۔`,
    languageNote: "اردو اور انگریزی میں دستیاب",
    disclaimer:
      "ویب سائٹ کی معلومات عمومی آگاہی کے لیے ہیں۔ علاج کی موزونیت اور نتائج ہر فرد میں مختلف ہو سکتے ہیں اور انفرادی معائنہ ضروری ہے۔",
    credits: "کنسلٹنٹ فزیوتھراپسٹ · ڈی پی ٹی (لاہور)، ایم پی پی ٹی اے",
  },
  aboutPage: {
    eyebrow: "تعارف",
    heading: "روزمرہ کی بہتر حرکت پر مرکوز فزیوتھراپی",
    blocks: [
      {
        heading: "ڈاکٹر رانا شاہد کے بارے میں",
        body: "ڈاکٹر رانا شاہد کنسلٹنٹ فزیوتھراپسٹ ہیں۔ فراہم کردہ قابلیت ڈی پی ٹی (لاہور) اور ایم پی پی ٹی اے ہے۔ وہ شفاء ہسپتال میاں چنوں میں خدمات فراہم کرتے ہیں۔",
      },
      {
        heading: "علاج سے پہلے معائنہ",
        body: "فزیوتھراپی علامات، حرکت، طبی تاریخ اور ذاتی اہداف کو سمجھنے سے شروع ہوتی ہے۔ اس سے ہر فرد کے لیے موزوں منصوبہ بنانے میں مدد ملتی ہے۔",
      },
      {
        heading: "خدمات کے شعبے",
        body: "فراہم کردہ کلینک مواد میں آرتھوپیڈک فزیوتھراپی، کمر و گردن کی نگہداشت، جوڑوں اور کندھے کی بحالی، اعصابی و فالج بحالی، کھیلوں کی چوٹیں اور بچوں کے مسائل درج ہیں۔",
      },
    ],
    valuesEyebrow: "نگہداشت کے اصول",
    values: [
      {
        title: "واضح گفتگو",
        desc: "مسئلے، اختیارات اور اگلے مراحل آسان زبان میں بیان کیے جاتے ہیں۔",
      },
      {
        title: "انفرادی منصوبہ",
        desc: "نگہداشت کو معائنے کے نتائج اور عملی اہداف کے مطابق ترتیب دیا جاتا ہے۔",
      },
      {
        title: "تدریجی بحالی",
        desc: "ورزش اور سرگرمی کو جسم کے ردعمل اور صلاحیت کے مطابق آگے بڑھایا جاتا ہے۔",
      },
      {
        title: "حقیقت پسندانہ رہنمائی",
        desc: "نتائج کی ضمانت نہیں؛ بہتری مسئلے اور انفرادی عوامل پر منحصر ہے۔",
      },
    ],
  },
  contactPage: {
    eyebrow: "رابطہ اور اپائنٹمنٹ",
    heading: "اپنا وزٹ ترتیب دیں",
    sub: "کلینک کی معلومات کے لیے کال کریں یا واٹس ایپ پر منظم درخواست بھیجیں۔ کلینک دستیابی کی براہ راست تصدیق کرے گا۔",
    whatsappCardTitle: "واٹس ایپ پر اپائنٹمنٹ کی درخواست",
    whatsappCardBody: "تیار پیغام کے ذریعے اپنی تفصیلات بھیجیں۔ پیغام بھیجنا درخواست ہے، خودکار تصدیق نہیں۔",
    phoneTitle: "فون اور واٹس ایپ",
    addressTitle: "کلینک کا پتہ",
    hoursTitle: "کلینک کے اوقات",
    mapTitle: "گوگل میپس",
    mapPlaceholder: site.address.ur,
    formTitle: "واٹس ایپ درخواست تیار کریں",
    formName: "آپ کا نام",
    formPhone: "آپ کا فون نمبر",
    formPreferredTime: "پسندیدہ اپائنٹمنٹ تاریخ اور وقت",
    formMessage: "مسئلہ یا تکلیف",
    formSubmit: "واٹس ایپ میں درخواست کھولیں",
    formNote:
      "یہ فارم ویب سائٹ کو ڈیٹا نہیں بھیجتا۔ یہ آپ کا تیار پیغام واٹس ایپ میں کھولتا ہے؛ وقت کی تصدیق کلینک کرے گا۔",
    formError: "آگے بڑھنے سے پہلے اپنا نام اور فون نمبر درج کریں۔",
    formPhoneError: "براہ کرم درست فون نمبر درج کریں۔",
    popupError:
      "واٹس ایپ نہیں کھل سکا۔ براہ کرم پاپ اَپ کی اجازت دیں یا کلینک کو براہ راست کال کریں۔",
    messageLabel: "اپنی تکلیف، حرکت کی مشکل یا بحالی کی ضرورت مختصراً بیان کریں...",
  },
  notFound: {
    title: "صفحہ نہیں ملا",
    sub: "آپ جس صفحے کو تلاش کر رہے ہیں وہ موجود نہیں یا منتقل ہو چکا ہے۔",
    cta: "ہوم پر واپس جائیں",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ur };
