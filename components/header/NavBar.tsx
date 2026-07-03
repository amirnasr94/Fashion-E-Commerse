"use client";
import Image from "next/image";
import Link from "next/link";
import SubMenuCollection from "./SubMenuCollection";
import SubMenuNewIn from "./SubMenuNewIn";
import SubMenuPlusSize from "./SubMenuPlusSize";
import SubMenuSustainability from "./SubMenuSustainability";
import SearchIcon from "@/public/assets/icons/search.svg";
import AvatarIcon from "@/public/assets/icons/avatar.svg";
import FavoriteIcon from "@/public/assets/icons/favorite.svg";
import BasketIcon from "@/public/assets/icons/basket.svg";
import { useWindowScroll } from "@/hooks/custom/useWindowScroll";

export default function NavBar() {
  const { scrollY } = useWindowScroll();

  return (
    <div
      className={`grid grid-cols-3 bg-white h-[65] items-center transition-all duration-100 ${scrollY === 0 ? "top-[30]" : "fixed inset-x-0 top-0"} z-10`}
    >
      <Image
        src="/assets/images/Logo.png"
        alt="modimal-logo"
        className="mx-auto"
        width={200}
        height={100}
      />

      <nav className="max-lg:hidden space-x-5 m-auto h-full">
        <ul className="*:hover:text-primary-400 *:h-full *:content-center flex gap-x-6 h-full">
          <li className="group nav-item">
            <Link href={""} prefetch>
              Collection
            </Link>
            <SubMenuCollection />
          </li>
          <li className="group nav-item">
            <Link href={""} prefetch>
              New In
            </Link>
            <SubMenuNewIn />
          </li>
          <li>
            <Link href={""} prefetch>
              Modiweek
            </Link>
          </li>
          <li className="group nav-item">
            <Link href={""} prefetch>
              Plus Size
            </Link>
            <SubMenuPlusSize />
          </li>
          <li className="group nav-item">
            <Link href={""} prefetch>
              Sustainability
            </Link>
            <SubMenuSustainability />
          </li>
        </ul>
      </nav>
      <div className="flex gap-8 items-center justify-center">
        <SearchIcon className="w-6 h-6" />
        <AvatarIcon className="w-6 h-6" />
        <FavoriteIcon className="w-6 h-6" />
        <BasketIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
