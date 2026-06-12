import Link from "next/link";
import { PropsWithChildren } from "react";

function SubMenuRoot({ children }: PropsWithChildren) {
  return (
    <div className="opacity-0 overflow-hidden bg-white absolute top-[95] z-4 h-0 inset-x-0 group-hover:h-[550] group-hover:opacity-100">
      <div className="flex justify-between px-28 py-9">{children}</div>
    </div>
  );
}

function MenuColumn({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="flex gap-x-20">
      <div className="space-y-5">
        <h6 className="text-black text-body-lg font-light">{title}</h6>
        <ul className="*:text-gray-800 text-body-lg *:first-letter:uppercase font-light space-y-3">
          {children}
        </ul>
      </div>
    </div>
  );
}

function MenuItem({ title, href }: { title: string; href: string }) {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
}

function ImageContainer({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-x-3">{children}</div>;
}

function ImageFigure({ children }: PropsWithChildren) {
  return <figure className="space-y-2">{children}</figure>;
}

function ImageCaption({ caption }: { caption: string }) {
  return (
    <span className="text-gray-800 font-light text-body-sm">{caption}</span>
  );
}

type SubMenuComponent = React.FC<PropsWithChildren> & {
  MenuColumn: typeof MenuColumn;
  MenuItem: typeof MenuItem;
  ImageContainer: typeof ImageContainer;
  ImageFigure: typeof ImageFigure;
  ImageCaption: typeof ImageCaption;
};

const SubMenu = Object.assign(SubMenuRoot, {
  MenuColumn,
  MenuItem,
  ImageContainer,
  ImageFigure,
  ImageCaption,
}) as SubMenuComponent;

export default SubMenu;
