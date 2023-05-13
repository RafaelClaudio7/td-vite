import React, { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Box } from "@chakra-ui/react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  BottomContent,
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
import { validateEmail } from "../../utils/validateEmail";
import { validatePassword } from "../../utils/validatePassword";

interface ISignInData {
  email: string;
  password: string;
}

export default function SignIn() {
  const [formData, setFormData] = useState<ISignInData>({} as ISignInData);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);

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
            <Input
              name="email"
              type="email"
              placeholder="user@email.com"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              onBlur={(e) => setEmailIsValid(validateEmail(e.target.value))}
              isValid={emailIsValid}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"password"}>Password:</Label>
            <Input
              name="email"
              type="password"
              placeholder="*********"
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              onBlur={(e) =>
                setPasswordIsValid(validatePassword(e.target.value))
              }
              isValid={passwordIsValid}
            />
          </InputContainer>
          <FormBottom>
            <ButtonContainer>
              <Button label="Sign In" size="sm" type="submit" />
            </ButtonContainer>
            <BottomContent>
              <div>
                <a href="/" title="Voltar">
                  <ChevronLeftIcon
                    boxSize={6}
                    color={colors.white}
                    _hover={{ color: colors.green }}
                  />
                </a>
              </div>
              <Message>
                Don't have an account?{" "}
                <MessageLink href="/signup">Create account</MessageLink>{" "}
              </Message>
            </BottomContent>
          </FormBottom>
        </Form>
      </Container>
    </Box>
  );
}
