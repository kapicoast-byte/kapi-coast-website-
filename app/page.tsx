import Hero           from "@/components/Hero";
import WhyKapiCoast   from "@/components/home/WhyKapiCoast";
import MenuPreview     from "@/components/home/MenuPreview";
import StoryTeaser     from "@/components/home/StoryTeaser";
import VisitStrip      from "@/components/home/VisitStrip";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: "Kapi Coast",
            alternateName: "காபி கோஸ்ட்",
            description:
              "Authentic South Indian filter coffee, Andhra snacks, specialty teas, cakes and pastries in Chennai",
            url: "https://kapicoast.com",
            logo: "https://kapicoast.com/images/logo.png",
            image: "https://kapicoast.com/images/og-image.jpg",
            telephone: "+91-00000-00000",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              postalCode: "600000",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "13.0827",
              longitude: "80.2707",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "22:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "07:00",
                closes: "23:00",
              },
            ],
            servesCuisine: ["South Indian", "Andhra", "Filter Coffee", "Bakery", "Specialty Tea"],
            priceRange: "₹₹",
            currenciesAccepted: "INR",
            paymentAccepted: "Cash, Credit Card, UPI",
            menu: "https://kapicoast.com/menu",
            hasMap: "https://kapicoast.com/contact",
          }),
        }}
      />

      <Hero />
      <WhyKapiCoast />
      <MenuPreview />
      <StoryTeaser />
      <VisitStrip />
    </>
  );
}
