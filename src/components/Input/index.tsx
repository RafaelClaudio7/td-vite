import React from "react";
import { InputStyled } from "./styles";

export interface IInputStyles {
  type?: string;
  placeholder?: string;
  name?: string;
}

export default function Input({ type, placeholder, name }: IInputStyles) {
  return <InputStyled type={type} placeholder={placeholder} name={name} />;
}
