import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 20%;
`;

export const Title = styled.h6`
  color: ${colors.white};
  font-size: 20px;
  font-family: "Roboto";
  text-align: center;
`;

export const Description = styled.p`
  color: ${colors.white};
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 300;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const FormBottom = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  height: 20%;
  height: 100px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Message = styled.p`
  font-size: 12px;
  font-family: "Roboto";
  color: ${colors.white};
  margin-left: 20px;
`;

export const MessageLink = styled.a`
  font-size: 12px;
  font-family: "Roboto";
  color: ${colors.greenLight};
  font-weight: bold;
  &:hover {
    color: ${colors.green};
  }
`;

export const ButtonContainer = styled.div``;
