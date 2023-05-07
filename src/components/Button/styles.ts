import styled from "styled-components";
import { colors } from "../../constants/colors";

interface IButtonProps {
  outlined?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Button = styled.button`
  padding: ${({ size }: IButtonProps) =>
    size === "sm" ? "8px 30px" : size === "md" ? "10px 32px" : "12px 36px"};
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
