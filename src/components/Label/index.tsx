import React from "react";
import { LabelStyled } from "./styles";

export interface ILabelProps {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: ILabelProps) {
  return <LabelStyled htmlFor={htmlFor}>{children}</LabelStyled>;
}
