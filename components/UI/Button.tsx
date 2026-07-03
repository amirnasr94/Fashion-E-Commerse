import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

const theme = {
  white: "bg-white text-black",
  primary: "bg-primary-600 text-white",
  transparetWithBorderPrimary: "border border-primary-600 text-primary-600",
} as const;

interface Props {
  className?: string;
  variant: keyof typeof theme;
  endComponent?: ReactNode;
  startComponent?: ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  startComponent,
  endComponent,
}: PropsWithChildren<Props>) {
  const style = clsx(
    theme[variant],
    "flex items-center justify-center",
    className,
  );
  return (
    <button className={style}>
      {startComponent ? startComponent : null}
      {children}
      {endComponent ? endComponent : null}
    </button>
  );
}
