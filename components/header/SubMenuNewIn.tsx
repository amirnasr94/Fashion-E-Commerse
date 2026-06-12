import SubMenu from "../SubMenu";
import Image from "next/image";

export default function SubMenuNewIn() {
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
      <SubMenu.MenuColumn title="Trending">
        {[
          { title: "plus size", href: "#" },
          { title: "fall Collection", href: "#" },
          { title: "modiweek", href: "#" },
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
            src="/assets/images/header/newInSubMenu/newInSubMenu-image3.png"
            alt=""
            objectFit="cover"
            width={208}
            height={420}
          />
          <SubMenu.ImageCaption caption="Fall collection" />
        </SubMenu.ImageFigure>
        <SubMenu.ImageFigure>
          <Image
            src="/assets/images/header/newInSubMenu/newInSubMenu-image2.png"
            alt=""
            objectFit="cover"
            width={208}
            height={420}
          />
          <SubMenu.ImageCaption caption="Boluses" />
        </SubMenu.ImageFigure>
        <SubMenu.ImageFigure>
          <Image
            src="/assets/images/header/newInSubMenu/newInSubMenu-image1.png"
            alt=""
            objectFit="cover"
            width={208}
            height={420}
          />
          <SubMenu.ImageCaption caption="Dresses" />
        </SubMenu.ImageFigure>
      </SubMenu.ImageContainer>
    </SubMenu>
  );
}
