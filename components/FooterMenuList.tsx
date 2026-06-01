import Link from "next/link";

export function FooterMenuList({
  itemList,
}: {
  itemList: { title: string; href: string }[];
}) {
  return (
    <ul className="space-y-3">
      {itemList.map((item) => {
        return (
          <li
            key={item.title}
            className="text-white text-body-lg font-extralight"
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
