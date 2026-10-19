import type { Locale } from "./config";

/**
 * Central translation store for Mian Channu Physio Rehab (Dr. Farhan).
 * Both English ('en') and Urdu ('ur') share the exact same keys and structure.
 */

const en = {
  meta: {
    home: {
      title: "Dr. Farhan - Physiotherapy & Rehabilitation | Mian Channu Medical Complex",
      description:
        "Consultant Physiotherapist Dr. Farhan (DPT - LMC, Ex-DHQ Sargodha & Cancer Hospital Sahiwal) provides drug-free physiotherapy, modern electrotherapy, and home visits at Mian Channu Medical Complex, Talamba Rd, Mian Channu.",
    },
    about: {
      title: "About Dr. Farhan & Clinic | Mian Channu Physio Rehab",
      description:
        "Learn about Consultant Physiotherapist Dr. Farhan (DPT - LMC), his hospital experience at DHQ Sargodha and Cancer Hospital Sahiwal, and specialized rehabilitation care in Mian Channu.",
    },
    services: {
      title: "Physiotherapy Services | Dr. Farhan, Mian Channu",
      description:
        "Comprehensive physiotherapy in Mian Channu: Stroke, paralysis, Bell's palsy, sciatica, back and disc pain, frozen shoulder, joint arthritis, post-fracture rehab, and home physiotherapy.",
    },
    conditions: {
      title: "Conditions Treated | Mian Channu Physio Rehab",
      description:
        "Specialized care for back & neck pain, sciatica, disc problems, paralysis, facial palsy, joint pain, frozen shoulder, post-fracture recovery, and pediatric conditions in Mian Channu.",
    },
    contact: {
      title: "Contact & Appointments | Dr. Farhan - Mian Channu",
      description:
        "Visit Dr. Farhan at Mian Channu Medical Complex, Talamba Rd, Mian Channu. Call/WhatsApp 0336-6945952 / 0323-9738305. Timings: Mon-Sat 10 AM to 4 PM.",
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
    inquireWhatsapp: "Inquire on WhatsApp",
    bookAppointment: "Book Appointment",
    callUs: "Call the clinic",
    viewAllServices: "View all services",
    floatingWhatsapp: "Chat on WhatsApp (0336-6945952)",
    languageLabel: "Language",
  },
  whatsapp: {
    default:
      "Hello Dr. Farhan (Mian Channu Physio Rehab), I would like to inquire about booking a physiotherapy consultation.",
    service: (name: string) =>
      `Hello Dr. Farhan, I would like to inquire about your "${name}" service at Mian Channu Medical Complex and book an appointment.`,
  },
  hero: {
    kicker: "Mian Channu Medical Complex · Talamba Road, Mian Channu",
    heading: "Move Better. Feel Stronger. Live Pain-Free.",
    sub: "Consultant Physiotherapist Dr. Farhan (DPT - LMC, Ex-DHQ Sargodha & Cancer Hospital Sahiwal) provides drug-free recovery with modern rehabilitation machines and targeted therapeutic exercises. Home physiotherapy available.",
    primaryCta: "Book Appointment on WhatsApp",
    secondaryCta: "Explore Services",
    trust: [
      "Dr. Farhan (DPT LMC, Ex-DHQ Sargodha)",
      "Modern machines & drug-free care",
      "Home physiotherapy visits available",
    ],
    imageAlt: "Illustration of guided physiotherapy and rehabilitation exercise",
  },
  aboutPreview: {
    eyebrow: "Welcome to the clinic",
    heading: "Expert Physiotherapy Care Under Dr. Farhan",
    body: "Mian Channu Physio Rehab operates at Mian Channu Medical Complex, Talamba Road, under the clinical care of Dr. Farhan (Consultant Physiotherapist, DPT - LMC). Having served at DHQ Hospital Sargodha and Cancer Hospital Sahiwal, Dr. Farhan delivers patient-focused rehabilitation tailored to each individual's condition and lifestyle.",
    body2:
      "Our practice focuses on drug-free recovery through modern electrotherapy machines and therapeutic exercises. For bedridden, elderly, or post-operative patients, dedicated home physiotherapy visits are also available across Mian Channu.",
    cta: "More about Dr. Farhan & the clinic",
    imageAlt: "Illustration representing patient-focused clinic care",
  },
  services: {
    eyebrow: "Our clinical services",
    heading: "Specialized Physiotherapy Services",
    sub: "Modern electrotherapy, manual therapy, and therapeutic exercises without reliance on medications. Home visits available upon request.",
    items: [
      {
        slug: "back-neck-pain",
        title: "Back, Neck & Spine Pain (کمر اور مہروں کا درد)",
        desc: "Specialized relief for lower back pain, neck stiffness, cervical and lumbar disc compression using modern traction, electrotherapy, and corrective exercises.",
      },
      {
        slug: "sports-injury",
        title: "Sciatica & Disc Pain (شیٹیکا اور مہروں کی تکلیف)",
        desc: "Targeted decompression therapy and nerve mobilization for severe sciatica, radiating leg pain, and spinal disc disorders.",
      },
      {
        slug: "stroke-rehab",
        title: "Stroke & Paralysis Rehabilitation (فالج اور لقوہ کی بحالی)",
        desc: "Evidence-based neuromuscular rehabilitation for stroke (paralysis), Bell's palsy (facial weakness), and motor recovery.",
      },
      {
        slug: "joint-mobility",
        title: "Joint Pain, Arthritis & Frozen Shoulder (جوڑوں کا درد اور کندھا جام)",
        desc: "Effective therapy for knee osteoarthritis, stiff frozen shoulder, joint mobility restrictions, and chronic inflammation.",
      },
      {
        slug: "post-operative",
        title: "Post-Fracture & Post-Surgical Rehab (فریکچر کے بعد بحالی)",
        desc: "Restoring joint range of motion, muscle mass, and walking confidence after fractures, plaster removal, and orthopedic operations.",
      },
      {
        slug: "posture-movement",
        title: "Numbness, Tingling & Weakness (ہاتھوں پیروں کا سن ہونا اور پٹھوں کی کمزوری)",
        desc: "Electrotherapy and nerve stimulation for peripheral neuropathy, limb numbness, pins-and-needles sensation, and muscular atrophy.",
      },
      {
        slug: "soft-tissue",
        title: "Sports Injuries & Sprains (سپورٹس چوٹیں اور پٹھوں کا کھچاؤ)",
        desc: "Rapid functional recovery for ligament sprains, muscle strains, sports injuries, and tendon inflammation.",
      },
      {
        slug: "exercise-based",
        title: "Home Physiotherapy & Pediatric Rehab (ہوم فزیوتھراپی اور بچوں کے امراض)",
        desc: "Convenient home visit service for patients unable to travel, plus specialized therapy for congenital conditions, cerebral palsy, and polio.",
      },
    ],
  },
  servicesPage: {
    note: "All treatments are conducted by or under direct supervision of Consultant Physiotherapist Dr. Farhan (DPT - LMC) at Mian Channu Medical Complex. Inquire on WhatsApp for home visits.",
  },
  conditions: {
    eyebrow: "What we treat",
    heading: "Conditions We Help Treat",
    sub: "Proven drug-free therapy using modern rehabilitation machines and customized therapeutic exercises.",
    note: "Consultant Physiotherapist Dr. Farhan conducts a thorough clinical assessment before prescribing your personalized rehabilitation plan.",
    items: [
      {
        title: "Paralysis & Stroke (فالج)",
        desc: "Comprehensive motor rehabilitation to regain limb movement, balance, and independence after a stroke.",
      },
      {
        title: "Facial Palsy / Bell's Palsy (لقوہ)",
        desc: "Facial nerve stimulation and targeted exercises to restore facial symmetry and muscle function.",
      },
      {
        title: "Back Pain & Disc Problems (کمر اور مہروں کا درد)",
        desc: "Treatment for acute and chronic low back pain, disc bulge, sciatica, and spinal stiffness.",
      },
      {
        title: "Frozen Shoulder (کندھا جام)",
        desc: "Gentle joint mobilization and exercise therapy to relieve shoulder pain and improve arm mobility.",
      },
      {
        title: "Sciatica (شیٹیکا)",
        desc: "Relief from sharp nerve pain radiating down the lower back through the hip and leg.",
      },
      {
        title: "Joint Pain & Knee Arthritis (جوڑوں کا درد اور گھٹنے کی تکلیف)",
        desc: "Reducing swelling and friction in arthritic joints while strengthening supporting muscles.",
      },
      {
        title: "Muscle Weakness (پٹھوں کی کمزوری اور کھچاؤ)",
        desc: "Muscle re-education and progressive strengthening for atrophy, spasms, and weakness.",
      },
      {
        title: "Numbness & Tingling in Limbs (ہاتھوں اور ٹانگوں کا سن ہونا)",
        desc: "Therapy for nerve compression, tingling, and loss of sensation in hands, arms, and legs.",
      },
      {
        title: "Post-Fracture Recovery (فریکچر کے بعد کے مسائل)",
        desc: "Overcoming joint stiffness and muscle wasting after bone fractures and cast removal.",
      },
      {
        title: "Sports Injuries (سپورٹس چوٹیں)",
        desc: "Rehabilitation for ligament sprains, hamstring strains, runner's knee, and athletic trauma.",
      },
      {
        title: "Pediatric & Congenital Conditions (بچوں کی پیدائشی بیماریاں اور پولیو)",
        desc: "Specialized rehabilitation for developmental delays, cerebral palsy, clubfoot, and polio.",
      },
      {
        title: "Post-Surgical Recovery (آپریشن کے بعد بحالی)",
        desc: "Safe, guided recovery following joint replacement, spinal surgery, or general orthopedic procedures.",
      },
    ],
  },
  conditionsPage: {
    intro:
      "At Mian Channu Medical Complex, Dr. Farhan assesses and manages a wide spectrum of neurological, orthopedic, and musculoskeletal conditions with modern non-invasive equipment.",
  },
  why: {
    eyebrow: "Why choose us",
    heading: "Why Patients Trust Dr. Farhan",
    sub: "Dedicated clinical excellence, proven hospital background, and compassionate patient care in Mian Channu.",
    items: [
      {
        title: "Consultant Physiotherapist",
        desc: "Care provided by Dr. Farhan (DPT - LMC), with experience at DHQ Sargodha & Cancer Hospital Sahiwal.",
      },
      {
        title: "Drug-Free Healing",
        desc: "Modern electrotherapy machines and therapeutic exercises to treat root causes without medication dependence.",
      },
      {
        title: "Home Physiotherapy Available",
        desc: "Home visit consultations across Mian Channu for patients who have difficulty visiting the clinic.",
      },
      {
        title: "Individualized Assessment",
        desc: "Every patient receives a personalized examination and a custom rehabilitation program.",
      },
      {
        title: "Prime Clinic Location",
        desc: "Conveniently situated at Mian Channu Medical Complex on Talamba Road, near PSO Petrol Pump.",
      },
      {
        title: "Easy WhatsApp Booking",
        desc: "Direct appointment requests and inquiries on WhatsApp (0336-6945952) and phone (0323-9738305).",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    heading: "Your Path to Pain Relief",
    steps: [
      {
        title: "Contact via WhatsApp or Call",
        desc: "Message 0336-6945952 or call 0323-9738305 with your name and condition description.",
      },
      {
        title: "Confirm Your Appointment",
        desc: "Clinic staff will schedule your consultation (clinic visit or home session, Mon–Sat 10 AM–4 PM).",
      },
      {
        title: "Personalized Assessment & Treatment",
        desc: "Consult with Dr. Farhan at Mian Channu Medical Complex and begin your targeted rehabilitation program.",
      },
    ],
    note: "Timings: Monday through Saturday, 10:00 AM – 4:00 PM (Sunday closed). Inquire on WhatsApp for home visits.",
  },
  physio: {
    eyebrow: "Lead Physiotherapist",
    heading: "Dr. Farhan",
    title: "Consultant Physiotherapist, DPT (LMC)",
    bio: "Dr. Farhan is a qualified Consultant Physiotherapist (DPT - LMC) with clinical hospital experience at DHQ Hospital Sargodha and Cancer Hospital Sahiwal. At Mian Channu Medical Complex, he specializes in treating musculoskeletal disorders, stroke, facial palsy, sciatica, joint stiffness, and post-fracture mobility through modern machines and targeted exercise protocols.",
    fieldsNote:
      "DPT (LMC) · Former Physiotherapist DHQ Sargodha & Cancer Hospital Sahiwal · Drug-Free Machine Therapy · Home Physiotherapy Available.",
    cta: "Consult Dr. Farhan on WhatsApp",
    imageAlt: "Dr. Farhan - Consultant Physiotherapist at Mian Channu Medical Complex",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    sub: "Have more questions? Call or WhatsApp us at 0336-6945952 — we are here to help.",
    items: [
      {
        q: "Who is the physiotherapist at the clinic?",
        a: "Dr. Farhan (Consultant Physiotherapist, DPT - LMC), former physiotherapist at DHQ Hospital Sargodha and Cancer Hospital Sahiwal.",
      },
      {
        q: "Where is the clinic located and what are the timings?",
        a: "The clinic is at Mian Channu Medical Complex, Talamba Mian Channu Road (near PSO Petrol Pump), Mian Channu (Postal code 58000). Timings are Monday to Saturday, 10:00 AM to 4:00 PM. Sunday is closed.",
      },
      {
        q: "How can I book an appointment?",
        a: "Tap any WhatsApp button on this site or call/message 0336-6945952 / 0323-9738305. We will coordinate a suitable time for your consultation.",
      },
      {
        q: "Do you offer home physiotherapy visits?",
        a: "Yes. For stroke/paralysis patients, elderly patients, or those recovering from major surgery who cannot easily travel, Dr. Farhan provides home physiotherapy sessions in Mian Channu. Please contact on WhatsApp to schedule.",
      },
      {
        q: "What types of treatments are offered?",
        a: "We offer completely drug-free treatment using modern electrotherapy equipment, heat therapy, cervical/lumbar traction, joint mobilization, and specialized exercise regimens.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring any previous X-rays, MRI scans, medical reports, or physician prescriptions, wear comfortable clothing, and arrive during clinic hours (10 AM to 4 PM).",
      },
    ],
  },
  cta: {
    heading: "Ready to Overcome Pain and Regain Movement?",
    sub: "Message Dr. Farhan on WhatsApp (0336-6945952) to discuss your condition and book your appointment at Mian Channu Medical Complex.",
    primary: "Book Appointment on WhatsApp",
    secondary: "Explore Services",
  },
  footer: {
    about:
      "Mian Channu Physio Rehab at Mian Channu Medical Complex, led by Consultant Physiotherapist Dr. Farhan (DPT - LMC). Drug-free rehabilitation with modern machines, exercises, and home visit options.",
    quickLinks: "Quick links",
    servicesTitle: "Services",
    contactTitle: "Contact & Clinic",
    addressLabel: "Address",
    phoneLabel: "Phone / WhatsApp",
    hoursTitle: "Opening hours",
    rights: (year: number) => `© ${year} Mian Channu Physio Rehab - Dr. Farhan. All rights reserved.`,
    languageNote: "Available in English and Urdu / انگریزی اور اردو میں دستیاب",
    disclaimer:
      "The information on this website is for general educational purposes. Individual examination by Dr. Farhan is conducted before initiating any treatment plan.",
    credits: "Dr. Farhan, Consultant Physiotherapist (DPT - LMC)",
  },
  aboutPage: {
    eyebrow: "About us",
    heading: "Expert Physiotherapy & Rehabilitation in Mian Channu",
    blocks: [
      {
        heading: "Mian Channu Medical Complex",
        body: "Located on Talamba Road near PSO Petrol Pump in Mian Channu, our physiotherapy unit provides modern, assessment-based physical rehabilitation for patients across Mian Channu, Khanewal district, and surrounding regions.",
      },
      {
        heading: "Drug-Free Recovery with Modern Machines",
        body: "We firmly believe in evidence-based non-pharmacological care. Using modern electrotherapy, joint mobilization, and progressive therapeutic exercises, we address the root causes of musculoskeletal and neurological dysfunctions rather than merely masking symptoms.",
      },
      {
        heading: "About Dr. Farhan",
        body: "Dr. Farhan is a Consultant Physiotherapist holding a Doctor of Physical Therapy (DPT) degree from LMC. He brings valuable clinical experience from DHQ Hospital Sargodha and Cancer Hospital Sahiwal. Dr. Farhan also offers home physiotherapy visits for patients with restricted mobility.",
      },
    ],
    valuesEyebrow: "Our core principles",
    values: [
      {
        title: "Clinical Excellence",
        desc: "Treatment informed by hospital-level experience and up-to-date rehabilitation standards.",
      },
      {
        title: "Drug-Free Approach",
        desc: "Relieving pain and restoring function naturally through modern modalities and therapeutic exercises.",
      },
      {
        title: "Home Visit Availability",
        desc: "Ensuring bedridden, post-stroke, and elderly patients receive high-quality care at home.",
      },
      {
        title: "Patient Respect",
        desc: "Clear explanations in Urdu and English, empathetic listening, and honest prognostic guidance.",
      },
    ],
  },
  contactPage: {
    eyebrow: "Contact & Location",
    heading: "Get in Touch with Dr. Farhan",
    sub: "Reach out via WhatsApp or call for consultations, clinic directions, or home visit requests. We are here to assist you.",
    whatsappCardTitle: "WhatsApp Consultation (Fastest)",
    whatsappCardBody: "Tap below to chat directly with our clinic on WhatsApp. Pre-filled and ready to send.",
    phoneTitle: "Phone Contacts",
    addressTitle: "Clinic Address",
    hoursTitle: "Clinic Timings",
    mapTitle: "Google Maps Location",
    mapPlaceholder:
      "Located at Medical Complex, Talamba Mian Channu Rd (Near PSO Petrol Pump), Mian Channu, 58000.",
    formTitle: "Send an Inquiry via WhatsApp",
    formName: "Your Name",
    formPhone: "Your Phone Number",
    formMessage: "Your Condition / Concern",
    formSubmit: "Send Message via WhatsApp",
    formNote:
      "This form connects directly to WhatsApp (0336-6945952) so you can speak directly with the clinic team.",
    formError: "Please enter your name and phone number before submitting.",
    messageLabel: "Tell us about your pain, condition, or home visit request...",
  },
  notFound: {
    title: "Page Not Found",
    sub: "The page you are looking for does not exist or has been moved.",
    cta: "Back to Home",
  },
};

export type Dictionary = typeof en;

const ur: Dictionary = {
  meta: {
    home: {
      title: "ڈاکٹر فرحان - فزیوتھریپی اور بحالی | میاں چنوں میڈیکل کمپلیکس",
      description:
        "کنسلٹنٹ فزیوتھراپسٹ ڈاکٹر فرحان (ڈی پی ٹی ایل ایم سی، سابقہ ڈی ایچ کیو سرگودھا و کینسر ہسپتال ساہیوال)۔ میاں چنوں میڈیکل کمپلیکس تلمبہ روڈ پر بغیر ادویات جدید مشینوں اور ورزشوں سے علاج۔ ہوم سروس دستیاب۔",
    },
    about: {
      title: "ڈاکٹر فرحان اور کلینک کے بارے میں | میاں چنوں فیزیو ری ہیب",
      description:
        "کنسلٹنٹ فزیوتھراپسٹ ڈاکٹر فرحان کے تعلیمی پس منظر، ہسپتال تجربے اور میاں چنوں میڈیکل کمپلیکس میں جدید فزیوتھریپی دیکھ بھال کے بارے میں جانیں۔",
    },
    services: {
      title: "فزیوتھریپی کی خدمات | ڈاکٹر فرحان - میاں چنوں",
      description:
        "میاں چنوں میں فزیوتھریپی خدمات: فالج، لقوہ، کمر و مہروں کا درد، شیٹیکا، جوڑوں کا درد، کندھا جام، فریکچر کے بعد بحالی اور ہوم فزیوتھراپی۔",
    },
    conditions: {
      title: "جن امراض کا علاج کیا جاتا ہے | میاں چنوں فیزیو ری ہیب",
      description:
        "کمر اور گردن کا درد، شیٹیکا، مہروں کے امراض، فالج، لقوہ، گھٹنوں کا درد، کندھا جام، فریکچر کی بحالی اور بچوں کی پیدائشی بیماریاں۔",
    },
    contact: {
      title: "رابطہ اور اپائنٹمنٹ | ڈاکٹر فرحان - میاں چنوں",
      description:
        "ڈاکٹر فرحان سے میاں چنوں میڈیکل کمپلیکس تلمبہ روڈ پر ملاقات کریں۔ فون/واٹس ایپ: 0336-6945952 / 0323-9738305۔ اوقات: پیر تا ہفتہ صبح 10 تا شام 4 بجے۔",
    },
  },
  nav: {
    home: "ہوم",
    about: "ہمارے بارے میں",
    services: "خدمات",
    conditions: "امراض و علاج",
    contact: "رابطہ",
    book: "اپائنٹمنٹ لیں",
  },
  common: {
    learnMore: "تفصیلات دیکھیں",
    inquireWhatsapp: "واٹس ایپ پر رابطہ کریں",
    bookAppointment: "اپائنٹمنٹ لیں",
    callUs: "کلینک کو کال کریں",
    viewAllServices: "تمام خدمات دیکھیں",
    floatingWhatsapp: "واٹس ایپ پر رابطہ کریں (0336-6945952)",
    languageLabel: "زبان",
  },
  whatsapp: {
    default:
      "السلام علیکم ڈاکٹر فرحان، میں میاں چنوں میڈیکل کمپلیکس میں فزیوتھریپی کی اپائنٹمنٹ کے بارے میں معلومات حاصل کرنا چاہتا/چاہتی ہوں۔",
    service: (name: string) =>
      `السلام علیکم ڈاکٹر فرحان، میں "${name}" کے سلسلے میں فزیوتھریپی جانچ اور اپائنٹمنٹ لینا چاہتا/چاہتی ہوں۔`,
  },
  hero: {
    kicker: "میاں چنوں میڈیکل کمپلیکس · تلمبہ روڈ، میاں چنوں",
    heading: "بہتر حرکت، مضبوط جسم، درد سے پاک زندگی",
    sub: "کنسلٹنٹ فزیوتھراپسٹ ڈاکٹر فرحان (ڈی پی ٹی ایل ایم سی، سابقہ فزیوتھراپسٹ ڈی ایچ کیو سرگودھا و کینسر ہسپتال ساہیوال)۔ بغیر دوائیوں کے جدید ترین مشینوں اور ورزشوں کے ذریعے مکمل علاج۔ ہوم فزیوتھراپی کی سہولت دستیاب ہے۔",
    primaryCta: "واٹس ایپ پر اپائنٹمنٹ لیں",
    secondaryCta: "ہماری خدمات دیکھیں",
    trust: [
      "ڈاکٹر فرحان (ڈی پی ٹی، سابقہ ڈی ایچ کیو سرگودھا)",
      "بغیر دوائیوں کے جدید مشینوں سے علاج",
      "گھر پر فزیوتھریپی (ہوم سروس) کی سہولت",
    ],
    imageAlt: "رہنمائی کے ساتھ فزیوتھریپی اور بحالی کی مشق کی تصویری جھلک",
  },
  aboutPreview: {
    eyebrow: "کلینک میں خوش آمدید",
    heading: "ڈاکٹر فرحان کی زیرِ نگرانی معیاری فزیوتھریپی",
    body: "میاں چنوں فیزیو ری ہیب تلمبہ روڈ پر میاں چنوں میڈیکل کمپلیکس میں ڈاکٹر فرحان (کنسلٹنٹ فزیوتھراپسٹ، ڈی پی ٹی ایل ایم سی) کی زیرِ نگرانی خدمات فراہم کر رہا ہے۔ ڈاکٹر فرحان ڈی ایچ کیو ہسپتال سرگودھا اور کینسر ہسپتال ساہیوال میں اپنی خدمات انجام دے چکے ہیں اور ہر مریض کی انفرادی جانچ کے بعد سائنسی بنیادوں پر علاج کرتے ہیں۔",
    body2:
      "ہمارا طریقہ علاج بغیر دوائیوں کے جدید مشینوں، مینوئل تھراپی اور مخصوص طبی ورزشوں پر مبنی ہے۔ نیز جو مریض کلینک آنے سے قاصر ہوں ان کے لیے میاں چنوں میں ہوم فزیوتھراپی (گھر پر وزٹ) کی خصوصی سہولت بھی دستیاب ہے۔",
    cta: "ڈاکٹر فرحان اور کلینک کے بارے میں مزید جانیں",
    imageAlt: "پرسکون اور مریض مرکز دیکھ بھال کی جھلک",
  },
  services: {
    eyebrow: "ہماری کلینیکل خدمات",
    heading: "فزیوتھریپی کی خصوصی خدمات",
    sub: "جدید مشینوں اور طبی مشقوں کے ذریعے بغیر ادویات کے علاج۔ کلینک اور ہوم وزٹ دونوں سہولیات دستیاب ہیں۔",
    items: [
      {
        slug: "back-neck-pain",
        title: "کمر، گردن اور مہروں کے درد کا علاج",
        desc: "کمر درد، مہروں کے دباؤ (ڈسک)، اور گردن کے پٹھوں کے کھچاؤ کے لیے بغیر ادویات کے جدید ٹریکشن، الیکٹروتھراپی اور ورزشوں سے مکمل علاج۔",
      },
      {
        slug: "sports-injury",
        title: "شیٹیکا اور مہروں کے مسائل (Sciatica)",
        desc: "شیٹیکا کے شدید درد، ٹانگ میں کھچاؤ اور اعصابی دباؤ سے نجات کے لیے جدید فزیوتھریپی۔",
      },
      {
        slug: "stroke-rehab",
        title: "فالج اور لقوہ کی بحالی (Stroke & Bell's Palsy)",
        desc: "فالج (سٹروک) اور لقوہ کے بعد مریض کی جسمانی حرکت، چہرے کے عضلات اور طاقت کو دوبارہ بحال کرنے کے لیے خصوصی نیورولوجیکل بحالی۔",
      },
      {
        slug: "joint-mobility",
        title: "جوڑوں کا درد، گٹھیا اور کندھا جام (Frozen Shoulder)",
        desc: "گھٹنوں اور جوڑوں کے درد، اوسٹیو آرتھرائٹس اور کندھا جام (فروزن شولڈر) کو کھولنے کے لیے جدید طریقہ علاج۔",
      },
      {
        slug: "post-operative",
        title: "فریکچر اور آپریشن کے بعد کی بحالی",
        desc: "ہڈی کے فریکچر، پلاسٹر اترنے اور سرجری کے بعد اکڑے ہوئے جوڑوں کو حرکت میں لانے اور پٹھوں کی طاقت بڑھانے کا مربوط نظام۔",
      },
      {
        slug: "posture-movement",
        title: "ہاتھوں اور ٹانگوں کا سن ہونا اور پٹھوں کی کمزوری",
        desc: "ہاتھوں اور پیروں میں سوئیاں چبھنے، سن پن اور پٹھوں کے سوکھنے یا کمزوری کے لیے جدید الیکٹرو تھراپی۔",
      },
      {
        slug: "soft-tissue",
        title: "سپورٹس انجریز اور پٹھوں کا کھچاؤ",
        desc: "کھیلوں کے دوران پٹھوں، رگوں یا جوڑوں میں لگنے والی چوٹوں اور پٹھوں کے شدید تناؤ سے جلد صحت یابی۔",
      },
      {
        slug: "exercise-based",
        title: "ہوم فزیوتھراپی اور بچوں کی پیدائشی بیماریاں",
        desc: "معذور یا ضعیف مریضوں کے لیے گھر پر فزیوتھراپی کی سہولت، نیز بچوں کے پیدائشی مسائل، پولیو اور سی پی (CP) کی خصوصی نگہداشت۔",
      },
    ],
  },
  servicesPage: {
    note: "تمام علاج کنسلٹنٹ فزیوتھراپسٹ ڈاکٹر فرحان (ڈی پی ٹی ایل ایم سی) کی زیرِ نگرانی میاں چنوں میڈیکل کمپلیکس میں کیے جاتے ہیں۔ ہوم وزٹ کے لیے واٹس ایپ پر رابطہ کریں۔",
  },
  conditions: {
    eyebrow: "امراض و علامات",
    heading: "وہ بیماریاں جن کا ہم علاج کرتے ہیں",
    sub: "جدید مشینوں اور فزیوتھریپی ورزشوں کی مدد سے بغیر دوائیوں کے شفا یابی۔",
    note: "علاج شروع کرنے سے پہلے کنسلٹنٹ فزیوتھراپسٹ ڈاکٹر فرحان مکمل طبی جانچ کرتے ہیں۔",
    items: [
      {
        title: "فالج (Stroke / Paralysis)",
        desc: "سٹروک کے بعد متاثرہ اعضاء کی حرکت، توازن اور خود انحصاری بحال کرنے کے لیے جدید تھراپی۔",
      },
      {
        title: "لقوہ (Facial / Bell's Palsy)",
        desc: "چہرے کے اعصاب کی تحریک اور مشقوں کے ذریعے چہرے کی حرکت اور مسکراہٹ کی بحالی۔",
      },
      {
        title: "کمر اور مہروں کا درد (Back & Disc Pain)",
        desc: "کمر کے نچلے حصے، مہروں کے ہلنے یا دبنے اور ڈسک سلپ کی تکلیف کا مؤثر علاج۔",
      },
      {
        title: "کندھا جام - فروزن شولڈر (Frozen Shoulder)",
        desc: "کندھے کی سخت اکڑاہٹ، درد اور ہاتھ اوپر اٹھانے میں دشواری کے لیے مؤثر فزیوتھراپی۔",
      },
      {
        title: "شیٹیکا (Sciatica)",
        desc: "کولہے سے ٹانگ کے نیچے تک جانے والے شدید اعصابی درد کے لیے ٹارگٹڈ فزیوتھراپی اور ریلیف۔",
      },
      {
        title: "جوڑوں کا درد اور گھٹنے کی تکلیف (Arthritis)",
        desc: "گھٹنوں کی سوزش، جوڑوں کی رگڑ اور اٹھنے بیٹھنے کی دشواری کے لیے خصوصی نگہداشت۔",
      },
      {
        title: "پٹھوں کی کمزوری اور اکڑاؤ (Muscle Weakness)",
        desc: "پٹھوں کی کمزوری، سختی اور نقاہت کو دور کرنے کے لیے مسل سٹرینتھننگ تھراپی۔",
      },
      {
        title: "ہاتھوں اور ٹانگوں کا سن ہونا (Numbness)",
        desc: "ہاتھوں اور پیروں کے سن ہونے، چیونٹیاں رینگنے اور جلن کے احساس کا تسلی بخش علاج۔",
      },
      {
        title: "فریکچر کے بعد کے مسائل (Post-Fracture)",
        desc: "ہڈی جڑنے کے بعد جوڑ کی سختی کھولنے اور کمزور پٹھوں کو دوبارہ فعال کرنے کی فزیوتھریپی۔",
      },
      {
        title: "سپورٹس چوٹیں (Sports Injuries)",
        desc: "کھلاڑیوں کے پٹھوں، لیگامنٹس اور ٹینڈنز کے کھچاؤ اور موچ کا تیز رفتار علاج۔",
      },
      {
        title: "بچوں کی پیدائشی بیماریاں اور پولیو (Pediatric & Polio)",
        desc: "بچوں کی جسمانی نشوونما میں تاخیر، پولیو اور پیدائشی معذوری کی بحالی کا خصوصی شعبہ۔",
      },
      {
        title: "آپریشن کے بعد کی بحالی (Post-Surgical)",
        desc: "ہڈیوں یا جوڑوں کے کسی بھی آپریشن کے بعد معمولاتِ زندگی میں باحفاظت واپسی۔",
      },
    ],
  },
  conditionsPage: {
    intro:
      "میاں چنوں میڈیکل کمپلیکس میں ڈاکٹر فرحان جدید طبی آلات اور فزیوتھریپی کے ذریعے عضلاتی، اعصابی اور ہڈیوں سے متعلق پیچیدہ مسائل کا علاج کرتے ہیں۔",
  },
  why: {
    eyebrow: "ہمیں کیوں چنیں",
    heading: "مریض ڈاکٹر فرحان پر اعتماد کیوں کرتے ہیں؟",
    sub: "مستند تجربہ، جدید ترین ٹیکنالوجی اور مریض کے ساتھ ہمدردانہ رویہ۔",
    items: [
      {
        title: "کنسلٹنٹ فزیوتھراپسٹ",
        desc: "ڈاکٹر فرحان (ڈی پی ٹی ایل ایم سی) کے پاس ڈی ایچ کیو سرگودھا اور کینسر ہسپتال ساہیوال کا وسیع تجربہ ہے۔",
      },
      {
        title: "بغیر دوائیوں کے علاج",
        desc: "جدید مشینوں اور ورزشوں سے بیماری کی اصل جڑ کا علاج بغیر کسی سائیڈ ایفیکٹ کے۔",
      },
      {
        title: "ہوم فزیوتھراپی کی سہولت",
        desc: "میاں چنوں اور قریبی علاقوں میں معذور اور بزرگ مریضوں کے لیے گھر پر وزٹ کی سہولت۔",
      },
      {
        title: "شخصی توجہ اور منصوبہ بندی",
        desc: "ہر مریض کی مکمل جانچ کے بعد اس کی حالت کے مطابق الگ اور واضح منصوبہ۔",
      },
      {
        title: "بہترین اور قابلِ رسائی مقام",
        desc: "میاں چنوں میڈیکل کمپلیکس، تلمبہ روڈ نزد پی ایس او پٹرول پمپ، میاں چنوں۔",
      },
      {
        title: "آسان رابطہ اور اپائنٹمنٹ",
        desc: "واٹس ایپ (0336-6945952) یا فون (0323-9738305) پر کسی بھی وقت رابطہ کریں۔",
      },
    ],
  },
  how: {
    eyebrow: "طریقہ کار",
    heading: "صحت یابی کا آسان راستہ",
    steps: [
      {
        title: "واٹس ایپ یا کال پر رابطہ کریں",
        desc: "0336-6945952 پر میسج یا کال کر کے اپنا نام اور مسئلہ بتائیں۔",
      },
      {
        title: "اپائنٹمنٹ کا وقت طے کریں",
        desc: "کلینک کا عملہ آپ کے لیے مناسب وقت (پیر تا ہفتہ، صبح 10 تا شام 4) طے کرے گا۔",
      },
      {
        title: "جانچ اور علاج کا آغاز",
        desc: "ڈاکٹر فرحان سے تفصیلی معائنہ کروائیں اور جدید مشینوں کے ذریعے علاج شروع کریں۔",
      },
    ],
    note: "کلینک کے اوقات: پیر تا ہفتہ، صبح 10:00 تا دوپہر 4:00 بجے (اتوار بند)۔ ہوم سروس کے لیے واٹس ایپ پر رابطہ کریں۔",
  },
  physio: {
    eyebrow: "اپنے کنسلٹنٹ فزیوتھراپسٹ سے ملیں",
    heading: "ڈاکٹر فرحان",
    title: "کنسلٹنٹ فزیوتھراپسٹ، ڈی پی ٹی (ایل ایم سی)",
    bio: "ڈاکٹر فرحان مستند کنسلٹنٹ فزیوتھراپسٹ (DPT - LMC) ہیں۔ وہ ڈی ایچ کیو ہسپتال سرگودھا اور کینسر ہسپتال ساہیوال میں خدمات سرانجام دے چکے ہیں۔ میاں چنوں میڈیکل کمپلیکس میں وہ فالج، لقوہ، مہروں کے درد، شیٹیکا، جوڑوں کی تکلیف اور فریکچر کے بعد کے مسائل کا بغیر ادویات کے جدید مشینوں اور مشقوں کے ذریعے علاج کرتے ہیں۔",
    fieldsNote:
      "ڈی پی ٹی (ایل ایم سی) · سابقہ فزیوتھراپسٹ ڈی ایچ کیو سرگودھا و کینسر ہسپتال ساہیوال · بغیر ادویات جدید مشینوں سے علاج · ہوم فزیوتھراپی دستیاب",
    cta: "ڈاکٹر فرحان سے واٹس ایپ پر مشورہ کریں",
    imageAlt: "ڈاکٹر فرحان کنسلٹنٹ فزیوتھراپسٹ میاں چنوں میڈیکل کمپلیکس",
  },
  faq: {
    eyebrow: "سوالات",
    heading: "اکثر پوچھے جانے والے سوالات",
    sub: "مزید معلومات کے لیے 0336-6945952 پر کال یا واٹس ایپ کریں۔",
    items: [
      {
        q: "کلینک پر معائنہ کون کرتے ہیں؟",
        a: "ڈاکٹر فرحان (کنسلٹنٹ فزیوتھراپسٹ، ڈی پی ٹی ایل ایم سی)، سابقہ فزیوتھراپسٹ ڈی ایچ کیو ہسپتال سرگودھا اور کینسر ہسپتال ساہیوال۔",
      },
      {
        q: "کلینک کہاں ہے اور اوقات کیا ہیں؟",
        a: "کلینک میاں چنوں میڈیکل کمپلیکس، تلمبہ روڈ نزد پی ایس او پٹرول پمپ میاں چنوں (58000) میں واقع ہے۔ اوقاتِ کار پیر تا ہفتہ صبح 10:00 سے دوپہر 4:00 بجے تک ہیں۔ اتوار کو کلینک بند ہوتا ہے۔",
      },
      {
        q: "اپائنٹمنٹ کیسے حاصل کی جا سکتی ہے؟",
        a: "ویب سائٹ پر دیے گئے کسی بھی واٹس ایپ بٹن کو دبائیں یا 0336-6945952 / 0323-9738305 پر میسج یا کال کریں۔",
      },
      {
        q: "کیا گھر پر فزیوتھراپی (ہوم سروس) کی سہولت ہے؟",
        a: "جی ہاں! فالج کے مریضوں، معذور افراد یا آپریشن کے بعد بستر پر موجود مریضوں کے لیے میاں چنوں میں ہوم فزیوتھراپی کی سہولت موجود ہے۔ واٹس ایپ پر وقت طے کر سکتے ہیں۔",
      },
      {
        q: "یہاں کس طرح کا علاج کیا جاتا ہے؟",
        a: "یہاں بغیر ادویات کے جدید مشینوں (الیکٹروتھراپی، ٹریکشن، وغیرہ) اور مخصوص میڈیکل ورزشوں کے ذریعے درد اور کمزوری کا علاج کیا جاتا ہے۔",
      },
      {
        q: "پہلی بار آنے پر کیا ساتھ لانا ضروری ہے؟",
        a: "کوئی بھی پرانا ایکسرے، ایم آر آئی، طبی رپورٹس یا ڈاکٹر کی پرچی ساتھ لائیں اور کلینک کے اوقات (10 تا 4) میں تشریف لائیں۔",
      },
    ],
  },
  cta: {
    heading: "درد سے نجات اور مکمل صحت یابی کے لیے آج ہی رابطہ کریں",
    sub: "ڈاکٹر فرحان سے واٹس ایپ (0336-6945952) پر اپنے مسئلے کی تفصیل شیئر کریں اور میاں چنوں میڈیکل کمپلیکس میں اپنی اپائنٹمنٹ بک کریں۔",
    primary: "واٹس ایپ پر میسج بھیجیں",
    secondary: "ہماری خدمات دیکھیں",
  },
  footer: {
    about:
      "میاں چنوں میڈیکل کمپلیکس میں کنسلٹنٹ فزیوتھراپسٹ ڈاکٹر فرحان کی زیرِ نگرانی جدید ترین فزیوتھریپی اور بحالی مرکز۔ بغیر ادویات جدید مشینوں اور ہوم سروس کی سہولت کے ساتھ۔",
    quickLinks: "فوری روابط",
    servicesTitle: "خدمات",
    contactTitle: "رابطہ و کلینک",
    addressLabel: "پتہ",
    phoneLabel: "فون / واٹس ایپ",
    hoursTitle: "اوقاتِ کار",
    rights: (year: number) => `© ${year} میاں چنوں فیزیو ری ہیب - ڈاکٹر فرحان۔ جملہ حقوق محفوظ ہیں۔`,
    languageNote: "انگریزی اور اردو میں دستیاب / Available in English and Urdu",
    disclaimer:
      "ویب سائٹ پر دی گئی معلومات عام رہنمائی کے لیے ہیں۔ کسی بھی علاج کا آغاز ڈاکٹر فرحان کے انفرادی معائنے کے بعد کیا جاتا ہے۔",
    credits: "ڈاکٹر فرحان، کنسلٹنٹ فزیوتھراپسٹ (ڈی پی ٹی - ایل ایم سی)",
  },
  aboutPage: {
    eyebrow: "ہمارے بارے میں",
    heading: "میاں چنوں میں جدید اور مستند فزیوتھریپی کی دیکھ بھال",
    blocks: [
      {
        heading: "میاں چنوں میڈیکل کمپلیکس",
        body: "تلمبہ روڈ، نزد پی ایس او پٹرول پمپ میاں چنوں پر واقع ہمارا فزیوتھریپی سینٹر میاں چنوں، خانیوال اور گردونواح کے مریضوں کو جدید اور معیاری بحالی کی سہولیات فراہم کرتا ہے۔",
      },
      {
        heading: "بغیر ادویات جدید مشینوں اور ورزشوں سے علاج",
        body: "ہم دوائیوں کے بجائے جدید الیکٹروتھراپی آلات، ہڈیوں اور جوڑوں کی مینوئل موبلائزیشن اور سائنسی ورزشوں کے ذریعے بیماری کی اصل وجہ کو ختم کرنے پر یقین رکھتے ہیں۔",
      },
      {
        heading: "ڈاکٹر فرحان کے بارے میں",
        body: "ڈاکٹر فرحان کنسلٹنٹ فزیوتھراپسٹ ہیں جنہوں نے ایل ایم سی سے ڈاکٹر آف فزیکل تھراپی (DPT) کی ڈگری حاصل کی اور ڈی ایچ کیو سرگودھا اور کینسر ہسپتال ساہیوال میں خدمات سرانجام دیں۔ وہ مریضوں کے لیے ہوم فزیوتھراپی کی سہولت بھی فراہم کرتے ہیں۔",
      },
    ],
    valuesEyebrow: "ہمارے کام کے اصول",
    values: [
      {
        title: "مستند تجربہ",
        desc: "ہسپتالوں کے وسیع تجربے اور بین الاقوامی فزیوتھریپی گائیڈ لائنز کے مطابق علاج۔",
      },
      {
        title: "بغیر ادویات قدرتی بحالی",
        desc: "ادویات کے مضمرات کے بغیر جدید مشینوں اور مشقوں سے جسم کی اپنی شفا یابی کی طاقت۔",
      },
      {
        title: "گھر پر فزیوتھریپی کی سہولت",
        desc: "چلنے پھرنے سے معذور، فالج زدہ اور عمر رسیدہ مریضوں کے لیے گھر پر خصوصی دیکھ بھال۔",
      },
      {
        title: "مریض کا احترام",
        desc: "آسان اردو میں مکمل رہنمائی، تسلی بخش وقت اور مکمل رازداری۔",
      },
    ],
  },
  contactPage: {
    eyebrow: "رابطہ اور مقام",
    heading: "ڈاکٹر فرحان سے رابطہ کریں",
    sub: "معائنے، کلینک کے راستے کی رہنمائی یا ہوم سروس کے لیے واٹس ایپ یا فون پر رابطہ کریں۔",
    whatsappCardTitle: "واٹس ایپ رابطہ (سب سے تیز)",
    whatsappCardBody: "نیچے بٹن پر کلک کریں — پیغام آپ کے لیے پہلے سے تیار ہے۔",
    phoneTitle: "فون نمبرز",
    addressTitle: "کلینک کا پتہ",
    hoursTitle: "اوقاتِ کار",
    mapTitle: "گوگل میپ پر لوکیشن",
    mapPlaceholder:
      "میڈیکل کمپلیکس، تلمبہ میاں چنوں روڈ (نزد پی ایس او پٹرول پمپ)، میاں چنوں، 58000۔",
    formTitle: "واٹس ایپ کے ذریعے پیغام بھیجیں",
    formName: "آپ کا نام",
    formPhone: "آپ کا فون نمبر",
    formMessage: "آپ کی بیماری / مسئلہ",
    formSubmit: "واٹس ایپ پر پیغام بھیجیں",
    formNote:
      "یہ فارم براہ راست کلینک کے واٹس ایپ (0336-6945952) سے منسلک ہوتا ہے تاکہ آپ فوری جواب حاصل کر سکیں۔",
    formError: "براہ کرم آگے بڑھنے سے پہلے اپنا نام اور فون نمبر لکھیں۔",
    messageLabel: "اپنی تکلیف، بیماری یا ہوم وزٹ کے بارے میں بتائیں...",
  },
  notFound: {
    title: "صفحہ نہیں ملا",
    sub: "آپ جس صفحے کو تلاش کر رہے ہیں وہ موجود نہیں یا منتقل ہو چکا ہے۔",
    cta: "ہوم پر واپس جائیں",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ur };
