import React from "react";
import { ButtonStyled, IButtonProps } from "./styles";

export default function Button({
  label,
  size,
  outlined,
  onClick,
}: IButtonProps) {
  return (
    <ButtonStyled size={size} outlined={outlined} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
}
