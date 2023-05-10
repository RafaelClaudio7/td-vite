import { Box } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/colors";

import Form from "../../components/Form";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
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
} from "../SignIn/styles";

export default function SignUp() {
  return (
    <Box bg={colors.white} h="100vh">
      <Container>
        <Form>
          <TitleContainer>
            <Title>Register Account</Title>
            <Description>Sign in to your account to continue</Description>
          </TitleContainer>
          <InputContainer>
            <Label htmlFor={"firstName"}>First Name:</Label>
            <Input name="firstName" type="text" placeholder="First Name" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"lastName"}>Last Name:</Label>
            <Input name="lastName" type="text" placeholder="Last Name" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"email"}>Email:</Label>
            <Input name="email" type="email" placeholder="user@email.com" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"password"}>Password:</Label>
            <Input name="password" type="password" placeholder="*********" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"passwordConfirm"}>Confirm Password:</Label>
            <Input
              name="passwordConfirm"
              type="password"
              placeholder="*********"
            />
          </InputContainer>
          <FormBottom>
            <ButtonContainer>
              <Button label="Sign Up" size="sm" type="submit" />
            </ButtonContainer>
            <Message>
              Do you have a account?{" "}
              <MessageLink href="/signin">Sign In</MessageLink>{" "}
            </Message>
          </FormBottom>
        </Form>
      </Container>
    </Box>
  );
}
