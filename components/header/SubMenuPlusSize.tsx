import React from "react";
import SubMenu from "../SubMenu";
import Image from "next/image";

export default function SubMenuPlusSize() {
  return (
    <SubMenu>
      <SubMenu.MenuColumn title="Category">
        {[
          { title: "shop all", href: "#" },
          { title: "boluses & top", href: "#" },
          { title: "tees", href: "#" },
          { title: "pants", href: "#" },
          { title: "outwear & jackets ", href: "#" },
          { title: "pullovers", href: "#" },
          { title: "Dresses & jumpsuits", href: "#" },
          { title: "shorts & skirts", href: "#" },
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
            src="/assets/images/header/plusSizeSubMenu/plusSize-image3.png"
            alt=""
            objectFit="cover"
            width={208}
            height={420}
          />
          <SubMenu.ImageCaption caption="Pants" />
        </SubMenu.ImageFigure>
        <SubMenu.ImageFigure>
          <Image
            src="/assets/images/header/plusSizeSubMenu/plusSize-image2.png"
            alt=""
            objectFit="cover"
            width={208}
            height={420}
          />
          <SubMenu.ImageCaption caption="Dresses" />
        </SubMenu.ImageFigure>
        <SubMenu.ImageFigure>
          <Image
            src="/assets/images/header/plusSizeSubMenu/plusSize-image1.png"
            alt=""
            objectFit="cover"
            width={208}
            height={420}
          />
          <SubMenu.ImageCaption caption="Blouses" />
        </SubMenu.ImageFigure>
      </SubMenu.ImageContainer>
    </SubMenu>
  );
}
