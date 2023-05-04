import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Header = styled.header`
  height: 10vh;
  width: 100vw;
  background-color: ${colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  color: ${colors.green};
  font-size: 32px;
  font-family: "Inika";
  margin-left: 80px;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  margin-right: 120px;
`;
