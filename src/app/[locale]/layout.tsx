import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import { locales, isLocale, getDirection, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { site } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-nastaliq",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
    title: { default: dict.meta.home.title, template: `%s | ${site.name}` },
    description: dict.meta.home.description,
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

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${fraunces.variable} ${nastaliq.variable}`}
    >
      <body className="flex min-h-screen flex-col font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-pine-800 focus:px-4 focus:py-2 focus:text-white"
        >
          {locale === "ur" ? "مرکزی مواد پر جائیں" : "Skip to main content"}
        </a>
        <Header locale={locale} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <FloatingWhatsApp
          label={dict.common.floatingWhatsapp}
          message={dict.whatsapp.default}
        />
      </body>
    </html>
  );
}
