import Link from "next/link";
import BestSellCard from "./BestSellCard";
import bestSells from "../lib/bestSells.json";

export default function BestSellsSection() {
  return (
    <section className="w-full space-y-6 mt-10">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-black font-semibold">Best Sellers</h3>
        <Link href={"#"} className="text-primary-600 button-sm">
          view all
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {bestSells.map((sell) => {
          return <BestSellCard data={sell} key={sell.id} />;
        })}
      </div>
    </section>
  );
}
