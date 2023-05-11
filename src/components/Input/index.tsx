import React from "react";
import { InputStyled } from "./styles";

export interface IInputStyles {
  type?: string;
  placeholder?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  isValid?: boolean;
}

export default function Input({
  type,
  placeholder,
  name,
  onChange,
  onBlur,
  isValid,
}: IInputStyles) {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      isValid={isValid}
      onBlur={onBlur}
      autoComplete="off"
    />
  );
}
