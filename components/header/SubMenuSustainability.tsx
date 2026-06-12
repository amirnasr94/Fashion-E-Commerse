import React from "react";
import SubMenu from "../SubMenu";
import Image from "next/image";

export default function SubMenuSustainability() {
  return (
    <SubMenu>
      <SubMenu.MenuColumn title="sustainability ">
        {[
          { title: "mission", href: "#" },
          { title: "processing", href: "#" },
          { title: "materials", href: "#" },
          { title: "packaging", href: "#" },
          { title: "product care", href: "#" },
          { title: "our suppliers", href: "#" },
        ].map((item) => (
          <SubMenu.MenuItem
            key={item.title}
            title={item.title}
            href={item.href}
          />
        ))}
      </SubMenu.MenuColumn>
      <SubMenu.ImageContainer>
        <SubMenu.ImageFigure>
          <Image
            src="/assets/images/header/sustainabilitySubMenu/sustainabilitySubMenu-image1.png"
            alt=""
            objectFit="cover"
            width={392}
            height={438}
          />
        </SubMenu.ImageFigure>
        <SubMenu.ImageFigure>
          <Image
            src="/assets/images/header/sustainabilitySubMenu/sustainabilitySubMenu-image2.png"
            alt=""
            objectFit="cover"
            width={392}
            height={438}
          />
        </SubMenu.ImageFigure>
      </SubMenu.ImageContainer>
    </SubMenu>
  );
}
