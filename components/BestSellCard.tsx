import Image from "next/image";
import FavIcon from "../public/assets/icons/favorite.svg";

type Sell = {
  id: number;
  name: string;
  image: string;
  price: number;
  colors: string[];
  category: string;
  isFave: boolean;
  description: string;
};

function ColorBudget({ hex }: { hex: string }) {
  return (
    <div
      className="w-[25] h-[25] rounded-full"
      style={{ backgroundColor: hex }}
    />
  );
} 

export default function BestSellCard({ data }: { data: Sell }) {
  return (
    <figure className="space-y-1">
      <div className="h-[500] relative">
        <Image
          src={data.image}
          alt={data.name}
          fill
          objectFit="cover"
          className="rounded-sm"
        />
      </div>
      <div className="space-y-1">
        <h6 className="text-black font-bold">{data.name}</h6>
        <div className="flex items-center justify-between">
          <span className="body-md text-black">{data.description}</span>
          <span>
            <b>${data.price}</b>
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          {data.colors.map((color) => (
            <ColorBudget key={color} hex={color} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <button className="border border-black flex-1 py-2 body-sm">
          Add To Cart
        </button>
        <button>
          <FavIcon width={22} height={22} />
        </button>
      </div>
    </figure>
  );
}
