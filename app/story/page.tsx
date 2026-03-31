import type { Metadata } from "next";
import StoryHero        from "@/components/story/StoryHero";
import OwnerIntro       from "@/components/story/OwnerIntro";
import OriginTimeline   from "@/components/story/OriginTimeline";
import OurValues        from "@/components/story/OurValues";
import CulturalHeritage from "@/components/story/CulturalHeritage";

export const metadata: Metadata = {
  title: "Our Story | Kapi Coast — Chennai South Indian Cafe",
  description:
    "Learn how Kapi Coast was born from a love of authentic South Indian filter coffee, Andhra snacks and Tamil heritage. Meet the people behind every cup.",
};

export default function StoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Story — Kapi Coast",
            description: "The story of Kapi Coast, Chennai South Indian cafe.",
            url: "https://kapicoast.com/story",
          }),
        }}
      />

      <StoryHero />
      <OwnerIntro />
      <OriginTimeline />
      <OurValues />
      <CulturalHeritage />
    </>
  );
}
