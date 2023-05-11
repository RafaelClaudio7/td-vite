import React from "react";
import { FormStyled } from "./styles";

interface IFormProps {
  children: React.ReactNode;
}

export default function Form({ children }: IFormProps) {
  return (
    <FormStyled action="" method="post">
      {children}
    </FormStyled>
  );
}
