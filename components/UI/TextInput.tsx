import { InputHTMLAttributes } from "react";
import InputGroup, { PropsInputContainer } from "./InputGroup";
import clsx from "clsx";

export default function TextInput({
  id,
  name,
  value,
  placeholder,
  type,
  disabled,
  autoComplete,
  maxLength,
  onBlur,
  onChange,
  ...inputContainerProps
}: PropsInputContainer &
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    | "id"
    | "name"
    | "value"
    | "placeholder"
    | "onChange"
    | "disabled"
    | "type"
    | "maxLength"
    | "autoComplete"
    | "onBlur"
  >) {
  const { message } = inputContainerProps;
  const styles = clsx("w-full", { "border-red-400": !!message });

  return (
    <InputGroup {...inputContainerProps}>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        className={styles}
        disabled={disabled}
        autoComplete={autoComplete}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputGroup>
  );
}
