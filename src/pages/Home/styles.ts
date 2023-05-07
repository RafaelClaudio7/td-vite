import styled from "styled-components";
import { colors } from "../../constants/colors";

interface IButtonGroupProps {
  width: string;
}

export const Header = styled.header`
  height: 10vh;
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
  width: ${({ width }: IButtonGroupProps) => width};
  display: flex;
  justify-content: space-between;
  margin-right: 120px;
`;

export const Main = styled.main`
  display: flex;
  min-height: 80vh;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap-reverse;
`;

export const TextContainer = styled.div`
  height: 500px;
  width: 540px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: "Roboto", sans-serif;
  color: ${colors.white};
  font-weight: 700;
`;

export const TitleHighlight = styled.span`
  color: ${colors.green};
`;

export const Description = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  color: ${colors.white};
  font-weight: 400;
`;

export const DescriptionHighlight = styled.span`
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageRoundedBackground = styled.div`
  height: 500px;
  width: 500px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    ${colors.green},
    ${colors.black}
  );
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageTime = styled.img``;

export const Footer = styled.footer`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Copyright = styled.span`
  font-size: 16px;
  font-family: "Roboto";
  color: ${colors.white};
`;

export const CopyrightHighlight = styled.a`
  color: ${colors.green};
  font-weight: 600;
`;
