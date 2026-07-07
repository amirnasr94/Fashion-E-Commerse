import BestSellsSection from "@/components/BestSellsSection";
import CollectionSection from "@/components/CollectionSection";
import FollowUsSection from "@/components/FollowUsSection";
import HeroSection from "@/components/HeroSection";
import ModiweekSection from "@/components/ModiweekSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import { handleConnectedToMongo } from "@/lib/mongodb";

export default async function Home() {

  await handleConnectedToMongo()

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
