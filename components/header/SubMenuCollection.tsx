import React from "react";
import SubMenu from "../SubMenu";
import Image from "next/image";

export default function SubMenuCollection() {
  return (
    <SubMenu>
      <SubMenu.MenuColumn title="Category">
        {[
          { title: "shop all", href: "#" },
          { title: "boluses & top", href: "#" },
          { title: "pants", href: "#" },
          { title: "Dresses & jumpsuits", href: "#" },
          { title: "outwear & jackets ", href: "#" },
          { title: "pullovers", href: "#" },
          { title: "tees", href: "#" },
          { title: "shorts & skirts", href: "#" },
        ].map((item) => (
          <SubMenu.MenuItem
            key={item.title}
            title={item.title}
            href={item.href}
          />
        ))}
      </SubMenu.MenuColumn>
      <SubMenu.MenuColumn title="Featured ">
        {[
          { title: "new in", href: "#" },
          { title: "modiweek", href: "#" },
          { title: "plus size", href: "#" },
          { title: "best seller", href: "#" },
        ].map((item) => (
          <SubMenu.MenuItem
            key={item.title}
            title={item.title}
            href={item.href}
          />
        ))}
      </SubMenu.MenuColumn>
      <SubMenu.MenuColumn title="More">
        {[
          { title: "bundles", href: "#" },
          { title: "occasion wear", href: "#" },
          { title: "matching set", href: "#" },
          { title: "suiting", href: "#" },
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
            src="/assets/images/header/collectionSubMenu/collection-image1.png"
            alt=""
            objectFit="cover"
            width={288}
            height={420}
          />
          <SubMenu.ImageCaption caption="Blouses" />
        </SubMenu.ImageFigure>
        <SubMenu.ImageFigure>
          <Image
            src="/assets/images/header/collectionSubMenu/collection-image2.png"
            alt=""
            objectFit="cover"
            width={288}
            height={420}
          />
          <SubMenu.ImageCaption caption="plus size" />
        </SubMenu.ImageFigure>
      </SubMenu.ImageContainer>
    </SubMenu>
  );
}
