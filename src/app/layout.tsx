import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iron & Oak Furniture | Custom Furniture in Tucson, AZ",
  description:
    "Handcrafted custom furniture and woodwork in Tucson, Arizona. Live edge dining tables, industrial shelving, steel and wood desks, and more. Built to last for generations.",
  keywords: [
    "custom furniture",
    "Tucson AZ",
    "handcrafted furniture",
    "live edge table",
    "woodworking",
    "steel and wood",
    "Iron and Oak Furniture",
  ],
  openGraph: {
    title: "Iron & Oak Furniture | Custom Furniture in Tucson, AZ",
    description:
      "Handcrafted custom furniture and woodwork in Tucson, Arizona. Built to last for generations.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Iron & Oak Furniture",
  description:
    "Handcrafted custom furniture and woodwork in Tucson, Arizona. Live edge dining tables, industrial shelving, steel and wood desks, and more.",
  url: "https://ironandoakfurniture.com",
  telephone: "(520) 555-0187",
  email: "hello@ironandoakfurniture.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    description: "By appointment only",
  },
  priceRange: "$$$",
  areaServed: {
    "@type": "City",
    name: "Tucson",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
