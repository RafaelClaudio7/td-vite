import styled from "styled-components";
import { colors } from "../../constants/colors";

interface IButtonProps {
  outlined?: boolean;
}

export const Button = styled.button`
  padding: 10px 40px;
  background-color: ${({ outlined }: IButtonProps) =>
    outlined ? colors.black : colors.green};
  color: ${colors.white};
  border: 1px solid ${colors.green};
  border-radius: 5px;
  color: ${colors.white};
  font-family: "Roboto", sans sans-serif;
  font-weight: 400;
  font-size: 16px;
  &:hover {
    background-color: ${({ outlined }: IButtonProps) =>
      outlined ? colors.green : colors.black};
    font-weight: 700;
  }
`;
