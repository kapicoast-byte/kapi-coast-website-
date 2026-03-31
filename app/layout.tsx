import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kapicoast.com"),
  title: {
    default: "Kapi Coast | Authentic Filter Coffee & Andhra Bites Chennai",
    template: "%s | Kapi Coast Chennai",
  },
  description:
    "Kapi Coast is Chennai favourite South Indian cafe serving authentic filter kaapi, Andhra snacks, specialty teas, fresh cakes and pastries. Visit us today.",
  keywords: [
    "filter coffee chennai",
    "kaapi chennai",
    "andhra snacks chennai",
    "south indian cafe chennai",
    "specialty tea chennai",
    "kapi coast",
    "filter kaapi",
    "pesarattu chennai",
    "gongura chennai",
    "cafe chennai",
  ],
  authors: [{ name: "Kapi Coast" }],
  creator: "Kapi Coast",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kapicoast.com",
    siteName: "Kapi Coast",
    title: "Kapi Coast | Authentic Filter Coffee & Andhra Bites Chennai",
    description:
      "Chennai favourite South Indian cafe — filter kaapi, Andhra snacks, specialty teas and fresh bakery.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kapi Coast — Filter Coffee and Andhra Bites Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapi Coast Chennai",
    description: "Authentic filter kaapi, Andhra snacks and specialty teas in Chennai.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "add-your-google-search-console-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
