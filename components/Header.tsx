import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@/public/assets/icons/search.svg";
import AvatarIcon from "@/public/assets/icons/avatar.svg";
import FavoriteIcon from "@/public/assets/icons/favorite.svg";
import BasketIcon from "@/public/assets/icons/basket.svg";

export const fetchCache = "force-no-store";

export default function Header() {
  return (
    <header>
      <div className="bg-primary-600 text-center py-1">
        <h5 className="text-white">Enjoy Free Shipping On All Orders</h5>
      </div>
      <div className="grid grid-cols-3 items-center bg-white py-3">
        <Image
          src="/assets/images/Logo.png"
          alt="modimal-logo"
          className="mx-auto"
          width={200}
          height={100}
        />
        <nav className="space-x-5 mx-auto *:hover:text-primary-400">
          <Link href={""} prefetch>
            Collection
          </Link>
          <Link href={""} prefetch>
            New In
          </Link>
          <Link href={""} prefetch>
            Modiweek
          </Link>
          <Link href={""} prefetch>
            Plus Size
          </Link>
          <Link href={""} prefetch>
            Sustainability
          </Link>
        </nav>
        <div className="flex gap-8 items-center justify-center">
          <SearchIcon className="w-6 h-6" />
          <AvatarIcon className="w-6 h-6" />
          <FavoriteIcon className="w-6 h-6" />
          <BasketIcon className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
