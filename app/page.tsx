import BestSellsSection from "@/components/BestSellsSection";
import HeroSection from "@/components/HeroSection";

export const revalidate = 0;

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <section className="container mt-10">
        <BestSellsSection />
      </section>
    </main>
  );
}
