import styled from "styled-components";
import { colors } from "../../constants/colors";

export const InputStyled = styled.input`
  width: 350px;
  height: 40px;
  background-color: #323232;
  color: ${colors.white};
  border-radius: 3px;
  border: solid 0.5px ${colors.green};
  padding: 5px;
`;
