import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-label",
});

export const metadata: Metadata = {
  title: "Maruti Filters & Gaskets | Polymer Candle Filter Manufacturer India | SS 304 Spin Pack Filters Gujarat",
  description: "Maruti Filters & Gaskets is a leading polymer candle filter manufacturer in India. We supply SS 304 candle filters, CPF candle filters, spin pack filter wire mesh, sealing gaskets & bushes for CP, POY, FDY, DTY, and PSF spinning lines. Based in Gujarat, exporting globally.",
  keywords: [
    "polymer candle filter manufacturers",
    "ss candle filter supplier gujarat",
    "cpf candle filter manufacturer",
    "industrial melt filter elements supplier",
    "spin pack filter wire mesh manufacturers",
    "stainless steel wire mesh extruder screen manufacturer",
    "filter adapter rod polymer extrusion",
    "pleated wire mesh filter sleeve",
    "wire mesh cartridge",
    "polymer filtration Gujarat",
    "candle filter POY plant",
    "continuous polymerization filter",
    "melt filtration components",
    "SS 304 polymer filter",
    "spin pack gaskets manufacturer",
    "copper sealing gasket extrusion",
    "aluminium gasket spinning",
    "sealing bush manufacturer India",
    "polymer candle filter Surat",
    "filter manufacturer Vadodara",
    "extrusion filter India"
  ],
  alternates: {
    canonical: siteConfig.website,
  },
  openGraph: {
    title: "Maruti Filters & Gaskets | Polymer Candle Filter Manufacturer India",
    description: "High-precision polymer candle filters, spin pack filters, gaskets & sealing bushes for CP, POY, FDY, DTY spinning lines. Custom-built. Gujarat-based.",
    url: siteConfig.website,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.website}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Maruti Filters & Gaskets - Precision Polymer Filtration",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maruti Filters & Gaskets | Polymer Candle Filter Manufacturer India",
    description: "High-precision polymer candle filters, spin pack filters, gaskets & sealing bushes. Custom-built. Gujarat-based.",
    images: [`${siteConfig.website}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const manufacturerSchema = {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "name": siteConfig.name,
    "url": siteConfig.website,
    "image": `${siteConfig.website}/images/logo.png`,
    "@id": `${siteConfig.website}/#organization`,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phase 1, GIDC Industrial Estate, Vatva",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382445",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.latitude,
      "longitude": siteConfig.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      `https://wa.me/${siteConfig.phoneRaw}`
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "gu"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the leading polymer candle filter manufacturer in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maruti Filters & Gaskets is a premier polymer candle filter manufacturer in India, specializing in custom-built pleated wire mesh candle filters, CPF candle filters, and industrial melt filter elements for synthetic fiber spinning lines (CP, POY, FDY, PSF) and extrusion systems."
        }
      },
      {
        "@type": "Question",
        "name": "What products does Maruti Filters & Gaskets supply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are a comprehensive industrial melt filter elements supplier. Our product range includes SS 304 polymer candle filters, spin pack filter wire mesh, pleated wire mesh filter sleeves, filter adapter rods for polymer extrusion, and high-precision sealing gaskets and bushes."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Maruti Filters & Gaskets a trusted SS candle filter supplier in Gujarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a leading SS candle filter supplier in Gujarat, we use certified SS 304/316L materials with TIG-welded seams and heavy-duty threaded end caps. Our engineer-led fabrication ensures zero-defect geometry and bypass-free operation under high pressure."
        }
      },
      {
        "@type": "Question",
        "name": "Can you design custom spin pack filter wire mesh and extruder screens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as a specialized stainless steel wire mesh extruder screen manufacturer and spin pack filter wire mesh manufacturer, we produce custom multi-layer discs, sheets, and sleeves in exact micron ratings to prevent polymer bypass and spinneret clogging."
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturerSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

