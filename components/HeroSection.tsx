import Image from "next/image";

export const fetchCache = "force-no-store";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[600px]">
      <Image src="/assets/images/hero.png" alt="modimal-hero" fill loading="lazy" />
      <div className="absolute bottom-20 left-20 space-y-4">
        <p className="text-black font-bold body-xl">
          Elegance in simplicity,
          <br /> Earth’s harmony
        </p>
        <button className="bg-white w-[184] h-[40] text-center">
          <span className="text-black caption-md">+ New In +</span>
        </button>
      </div>
    </div>
  );
}
