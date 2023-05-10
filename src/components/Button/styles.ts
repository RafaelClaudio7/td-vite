import styled from "styled-components";
import { colors } from "../../constants/colors";

export interface IButtonProps {
  type?: "submit" | "reset" | "button";
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
  padding: ${({ size }: IButtonProps) =>
    size === "sm"
      ? "5px 15px"
      : size === "md"
      ? "5px 25px"
      : size === "lg"
      ? "5px 35px"
      : "5px 15px"};
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
