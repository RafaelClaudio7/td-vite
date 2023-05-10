import React from "react";
import { ButtonStyled, IButtonProps } from "./styles";

export default function Button({
  type,
  label,
  size,
  outlined,
  onClick,
}: IButtonProps) {
  return (
    <ButtonStyled
      size={size}
      outlined={outlined}
      onClick={onClick}
      type={type ? type : "button"}
      data-testid="btn"
    >
      {label}
    </ButtonStyled>
  );
}
