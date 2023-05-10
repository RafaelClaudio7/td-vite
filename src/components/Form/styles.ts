import styled from "styled-components";
import { colors } from "../../constants/colors";

export const FormStyled = styled.form`
  background-color: ${colors.grey};
  width: 450px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px #636363;
  padding: 20px 0;
`;
