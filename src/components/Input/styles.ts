import styled from "styled-components";
import { colors } from "../../constants/colors";
import { IInputStyles } from ".";

export const InputStyled = styled.input`
  width: 350px;
  height: 40px;
  background-color: #323232;
  color: ${colors.white};
  border-radius: 3px;
  border: ${({ isValid }: IInputStyles) =>
    isValid ? `solid 0.5px ${colors.green}` : `solid 0.5px red`};
  padding: 5px;
  outline: none;
  &:focus {
    border: solid 0.5px ${colors.greenLight};
  }
`;
