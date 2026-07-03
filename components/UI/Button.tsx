import clsx from "clsx";
import { PropsWithChildren } from "react";

const theme = {
  white: "bg-white text-black",
  primary: "bg-primary-600 text-white",
  transparetWithBorderPrimary: "border border-primary-600 text-primary-600",
} as const;

interface Props {
  className?: string;
  variant: keyof typeof theme;
}

export default function Button({
  children,
  className,
  variant,
}: PropsWithChildren<Props>) {
  const style = clsx(
    theme[variant],
    "flex items-center justify-center",
    className,
  );
  return <button className={style}>{children}</button>;
}
