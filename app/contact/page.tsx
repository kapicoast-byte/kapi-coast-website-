import type { Metadata } from "next";
import ContactHero    from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import MapSection     from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact Us | Kapi Coast — Visit Us in Chennai",
  description:
    "Get in touch with Kapi Coast. Find us in Chennai, check our opening hours, or send us a message. We would love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: "Kapi Coast",
            description:
              "Authentic South Indian filter coffee, Andhra snacks, specialty teas and fresh bakery in Chennai",
            url: "https://kapicoast.com",
            telephone: "+91-00000-00000",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
            openingHours: ["Mo-Fr 07:00-22:00", "Sa-Su 07:00-23:00"],
            servesCuisine: ["South Indian", "Andhra", "Filter Coffee", "Bakery"],
            priceRange: "₹₹",
            currenciesAccepted: "INR",
            paymentAccepted: "Cash, Credit Card, UPI",
          }),
        }}
      />

      <ContactHero />
      <ContactSection />
      <MapSection />
    </>
  );
}
