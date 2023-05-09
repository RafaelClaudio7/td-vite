import styled from "styled-components";
import { colors } from "../../constants/colors";

export interface IButtonProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  outlined?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonStyled = styled.button`
  height: ${({ size }: IButtonProps) =>
    size === "sm"
      ? "40px"
      : size === "md"
      ? "45px"
      : size === "lg"
      ? "50px"
      : "40px"};
  width: ${({ size }: IButtonProps) =>
    size === "sm"
      ? "100px"
      : size === "md"
      ? "120px"
      : size === "lg"
      ? "140px"
      : "100px"};
  padding: 5px;
  background-color: ${({ outlined }: IButtonProps) =>
    outlined ? colors.black : colors.green};
  color: ${colors.white};
  border: 1px solid ${colors.green};
  border-radius: 5px;
  color: ${colors.white};
  font-family: "Roboto", sans sans-serif;
  font-weight: 400;
  font-size: ${({ size }: IButtonProps) =>
    size === "sm" ? "14px" : size === "md" ? "16px" : "18px"};
  &:hover {
    background-color: ${({ outlined }: IButtonProps) =>
      outlined ? colors.green : colors.black};
    font-weight: 700;
  }
  text-transform: uppercase;
`;
