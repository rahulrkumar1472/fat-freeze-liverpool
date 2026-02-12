import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ChatbotSlot } from "@/components/chatbot/chatbot-slot";
import { PopupLeadCapture } from "@/components/forms/popup-lead-capture";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileBookingCta } from "@/components/layout/mobile-booking-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { buildClinicSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalOrigin),
  title: {
    default: "Fat Freezing Liverpool | Consultation-Led Care",
    template: "%s",
  },
  description:
    "Liverpool-focused fat freezing and cryolipolysis clinic with strict clinical communication standards, structured consultation pathways, and conversion-ready booking.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: siteConfig.clinicName,
    title: "Fat Freezing Liverpool",
    description:
      "Consultation-led fat freezing and cryolipolysis in Liverpool with realistic expectations and measurable planning.",
    images: [
      {
        url: "/images/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Fat Freezing Liverpool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fat Freezing Liverpool",
    description:
      "Consultation-led fat freezing and cryolipolysis in Liverpool with realistic expectations and measurable planning.",
    images: ["/images/og-default.svg"],
    creator: siteConfig.social.xHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${playfairDisplay.variable} bg-site text-[var(--foreground)] antialiased`}>
        <JsonLd id="clinic-schema" data={buildClinicSchema()} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(110,231,183,0.14),_transparent_42%)]">
            {children}
          </div>
          <Footer />
        </div>
        <MobileBookingCta />
        <PopupLeadCapture />
        <ChatbotSlot />
      </body>
    </html>
  );
}
