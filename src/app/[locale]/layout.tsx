import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Plus_Jakarta_Sans, Noto_Nastaliq_Urdu } from "next/font/google";
import { locales, isLocale, getDirection, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { site } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F3D44",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-noto-urdu",
  display: "swap",
  weight: ["400", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.home.title,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ur: "/ur",
      },
    },
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: `/${locale}`,
      siteName: dict.meta.siteName,
      images: [
        {
          url: "/images/hero-patient-smile.jpg",
          width: 1200,
          height: 630,
          alt: dict.meta.siteName,
        },
      ],
      locale: locale === "ur" ? "ur_PK" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dir = getDirection(locale);
  const dict = getDictionary(locale);

  // LocalBusiness / Dentist JSON-LD
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: dict.meta.siteName,
    description: dict.meta.home.description,
    image: `${site.url}/images/hero-patient-smile.jpg`,
    telephone: site.phoneDisplay || "+1-555-234-5678",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Smile Street",
      addressLocality: "Springfield",
      addressRegion: "IL",
      postalCode: "62701",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${plusJakarta.variable} ${notoNastaliqUrdu.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`flex min-h-screen flex-col font-sans antialiased selection:bg-mint-200 selection:text-teal-950 ${
          locale === "ur" ? "font-urdu" : ""
        }`}
        suppressHydrationWarning
      >
        {/* Anti-extension attribute protection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var clean=function(){var el=document.documentElement;if(!el)return;for(var i=el.attributes.length-1;i>=0;i--){var n=el.attributes[i].name;if(n.indexOf("katalon")!==-1||n.indexOf("data-gr-")===0||n.indexOf("data-lt-")===0||n.indexOf("cz-shortcut-listen")!==-1){el.removeAttribute(n);}}};clean();if(typeof MutationObserver!=="undefined"){var o=new MutationObserver(clean);o.observe(document.documentElement,{attributes:true});window.addEventListener("DOMContentLoaded",function(){clean();setTimeout(function(){o.disconnect();},2000);});}}catch(e){}})();`,
          }}
          suppressHydrationWarning
        />

        {/* Structured Data (JSON-LD) placed in body per Next.js docs to avoid extension head injection collisions */}
        <script
          id="dentist-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
          suppressHydrationWarning
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-teal-800 focus:px-4 focus:py-2 focus:text-white"
        >
          {locale === "ur" ? "مرکزی مواد پر جائیں" : "Skip to main content"}
        </a>

        {/* Shrinking Glass Sticky Header */}
        <Header locale={locale} />

        {/* Main Content Area with overflow protection */}
        <main id="main-content" className="flex-1 overflow-x-hidden">
          {children}
        </main>

        {/* Floating WhatsApp Quick Consultation */}
        <FloatingWhatsApp
          locale={locale}
          label={locale === "ur" ? "واٹس ایپ پر رابطہ کریں" : "Chat with us"}
        />

        {/* Rich Footer with disclaimer moved to subtle small footer text */}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
