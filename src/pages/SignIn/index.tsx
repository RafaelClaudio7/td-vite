import React from "react";
import { colors } from "../../constants/colors";
import { Box } from "@chakra-ui/react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  ButtonContainer,
  Container,
  Description,
  FormBottom,
  InputContainer,
  Message,
  MessageLink,
  Title,
  TitleContainer,
} from "./styles";
import Label from "../../components/Label";
import Form from "../../components/Form";

export default function SignIn() {
  return (
    <Box bg={colors.white} h="100vh">
      <Container>
        <Form>
          <TitleContainer>
            <Title>LOGIN</Title>
            <Description>Sign in to your account to continue</Description>
          </TitleContainer>
          <InputContainer>
            <Label htmlFor={"email"}>Email:</Label>
            <Input name="email" type="email" placeholder="user@email.com" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"password"}>Password:</Label>
            <Input name="email" type="password" placeholder="*********" />
          </InputContainer>
          <FormBottom>
            <ButtonContainer>
              <Button label="Sign In" size="sm" type="submit" />
            </ButtonContainer>
            <Message>
              Don't have an account?{" "}
              <MessageLink href="/signup">Create account</MessageLink>{" "}
            </Message>
          </FormBottom>
        </Form>
      </Container>
    </Box>
  );
}
