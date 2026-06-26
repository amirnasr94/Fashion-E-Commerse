import Image from "next/image";

export default function FollowUsSection() {
  return (
    <section className="container my-10! space-y-3">
      <h3 className="font-bold text-black">Follow us @modimal</h3>
      <div className="flex">
        <Image
          src="/assets/images/landing/followUs/pic1.png"
          alt="modimal"
          objectFit="cover"
          width={603}
          height={750}
        />
        <div className="relative grid grid-cols-2">
          <Image
            src="/assets/images/landing/followUs/pic2.png"
            alt="modimal"
            objectFit="cover"
            width={310.5}
            height={375.5}
          />
          <Image
            src="/assets/images/landing/followUs/pic4.png"
            alt="modimal"
            objectFit="cover"
            width={310.5}
            height={375.5}
          />
          <Image
            src="/assets/images/landing/followUs/pic3.png"
            alt="modimal"
            objectFit="cover"
            width={310.5}
            height={375.5}
          />
          <Image
            src="/assets/images/landing/followUs/pic5.png"
            alt="modimal"
            objectFit="cover"
            width={310.5}
            height={375.5}
          />
        </div>
      </div>
    </section>
  );
}
