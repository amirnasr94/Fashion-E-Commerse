import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function Button({
  children,
  className,
}: PropsWithChildren<Props>) {
  const style = clsx("bg-white flex items-center justify-center", className);
  return <button className={style}>{children}</button>;
}
