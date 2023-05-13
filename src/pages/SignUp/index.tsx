import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../constants/colors";

import Form from "../../components/Form";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
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
} from "../SignIn/styles";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface ISignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<ISignUpData>({} as ISignUpData);
  const [firstNameIsValid, setFirstNameIsValid] = useState<boolean>(true);
  const [lastNameIsValid, setLastNameIsValid] = useState<boolean>(true);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] =
    useState<boolean>(true);

  function handleValidateName(name: string) {
    if (name.trim().length <= 3) {
      setFirstNameIsValid(false);
    }
  }

  function handleValidateEmail(email: string): void {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailIsValid(regex.test(email));
  }

  function handleValidatePassword(password: string) {
    if (password.trim().length < 7) setPasswordIsValid(false);
    else setPasswordIsValid(true);
  }

  function handleValidateConfirmPassword(confirmPassword: string) {
    if (confirmPassword !== formData.password) setConfirmPasswordIsValid(false);
    else setConfirmPasswordIsValid(true);
  }

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
            <Input
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              onBlur={(e) => handleValidateName(e.target.value)}
              isValid={firstNameIsValid}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"lastName"}>Last Name:</Label>
            <Input
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              isValid={lastNameIsValid}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"email"}>Email:</Label>
            <Input
              name="email"
              type="email"
              placeholder="user@email.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onBlur={(e) => handleValidateEmail(e.target.value)}
              isValid={emailIsValid}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"password"}>Password:</Label>
            <Input
              name="password"
              type="password"
              placeholder="*********"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              onBlur={(e) => handleValidatePassword(e.target.value)}
              isValid={passwordIsValid}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"passwordConfirm"}>Confirm Password:</Label>
            <Input
              name="passwordConfirm"
              type="password"
              placeholder="*********"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              onBlur={(e) => handleValidateConfirmPassword(e.target.value)}
              isValid={confirmPasswordIsValid}
            />
          </InputContainer>
          <FormBottom>
            <ButtonContainer>
              <Button label="Sign Up" size="sm" type="submit" />
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
                Do you have a account?{" "}
                <MessageLink href="/signin">Sign In</MessageLink>{" "}
              </Message>
            </BottomContent>
          </FormBottom>
        </Form>
      </Container>
    </Box>
  );
}
