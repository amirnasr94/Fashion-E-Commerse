import { PropsWithChildren } from "react";
import Facebook from "../public/assets/icons/social/facebook.svg";
import Instagram from "../public/assets/icons/social/instagram.svg";
import Pinterest from "../public/assets/icons/social/pinterest.svg";
import TikTak from "../public/assets/icons/social/tiktak.svg";

function SocialLink({ href, children }: PropsWithChildren<{ href: string }>) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      className="block transition-transform duration-500 hover:transform-[scale(1.1)]"
    >
      {children}
    </a>
  );
}

export default function Social() {
  return (
    <div className="flex items-center gap-x-5">
      {socialMedia.map((social) => {
        return (
          <SocialLink key={social.name} href={social.address}>
            {social.icon}
          </SocialLink>
        );
      })}
    </div>
  );
}

const socialMedia = [
  {
    name: "instagram",
    icon: <Instagram width={22} height={22} />,
    address: "www.instagram.com",
  },
  {
    name: "facebook",
    icon: <Facebook width={22} height={22} />,
    address: "www.facebook.com",
  },
  {
    name: "pinterest",
    icon: <Pinterest width={22} height={22} />,
    address: "wwww.pinterest.com",
  },
  {
    name: "tiktak",
    icon: <TikTak width={22} height={22} />,
    address: "www.tiktak.com",
  },
];
