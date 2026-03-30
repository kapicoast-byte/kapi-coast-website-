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
  title: "Kapi Coast",
  description: "Authentic South Indian filter coffee & coastal flavours — Chennai",
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
