import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyRoofix } from "@/components/site/WhyRoofix";
import { Projects } from "@/components/site/Projects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Story } from "@/components/site/Story";
import { SocialProof } from "@/components/site/SocialProof";
import { AussieRoofs } from "@/components/site/AussieRoofs";
import { FinalCTA, Footer } from "@/components/site/FinalCTA";

const TITLE = "Roofix Coatings | Roof Painting & Restoration Specialists";
const DESCRIPTION =
  "Roofix Coatings restores and protects Aussie roofs. Roof painting and roof restoration specialists — 100% recommend from 45 reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyRoofix />
        <Projects />
        <BeforeAfter />
        <Story />
        <SocialProof />
        <AussieRoofs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
