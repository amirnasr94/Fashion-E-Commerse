import { PropsWithChildren, ReactNode } from "react";

export type PropsInputContainer = {
  label: string;
  message?: string | null;
  EndComponent?: ReactNode | null;
  required?: boolean;
  className?: string;
};

export default function InputGroup({
  label,
  message,
  EndComponent,
  className,
  required,
  children,
}: PropsWithChildren<PropsInputContainer>) {
  return (
    <div className={className}>
      <label htmlFor={label}>
        {label}
        {required ? <span className="text-red-500">*</span> : null}
      </label>
      <div className="relative">
        {children}
        {EndComponent ? (
          <div className="absolute inset-e-0 top-0 mx-3 flex h-[40] items-center">
            {EndComponent}
          </div>
        ) : null}
      </div>
      {message && (
        <span className="mt-2 min-h-[0.857rem] text-body3 text-red-500 inline-block">
          {message}
        </span>
      )}
    </div>
  );
}
