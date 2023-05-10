import React from "react";
import { FormStyled } from "./styles";

export default function Form({ children }: any) {
  return (
    <FormStyled action="" method="post">
      {children}
    </FormStyled>
  );
}
