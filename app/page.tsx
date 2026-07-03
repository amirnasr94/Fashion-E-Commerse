import BestSellsSection from "@/components/BestSellsSection";
import CollectionSection from "@/components/CollectionSection";
import FollowUsSection from "@/components/FollowUsSection";
import HeroSection from "@/components/HeroSection";
import ModiweekSection from "@/components/ModiweekSection";
import SustainabilitySection from "@/components/SustainabilitySection";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <section className="container">
        <BestSellsSection />
        <CollectionSection />
        <ModiweekSection />
      </section>
      <SustainabilitySection />
      <FollowUsSection />
    </main>
  );
}
