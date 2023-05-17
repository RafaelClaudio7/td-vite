import React, { useEffect } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import {
  ButtonGroup,
  Copyright,
  CopyrightHighlight,
  Description,
  DescriptionHighlight,
  Footer,
  Header,
  ImageContainer,
  ImageRoundedBackground,
  ImageTime,
  Logo,
  Main,
  Menu,
  TextContainer,
  Title,
  TitleHighlight,
} from "./styles";
import Button from "../../components/Button";
import Time from "../../assets/images/time1.png";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Home() {
  const navigate = useNavigate();

  async function handleNavigateSignIn() {
    navigate("/signin");
  }

  async function handleNavigateSignUp() {
    navigate("/signup");
  }

  useEffect(() => {
    console.log("ComponentDidMount");

    return () => {
      console.log("Cleanup");
    };
  }, []);

  return (
    <Box bg={colors.black}>
      <Header>
        <Logo>MTD</Logo>
        <ButtonGroup width="205px">
          <Button size="sm" label="Sign In" onClick={handleNavigateSignIn} />
          <Button
            outlined
            size="sm"
            label="Sign Up"
            onClick={handleNavigateSignUp}
          />
        </ButtonGroup>
        <Menu>
          <HamburgerIcon color={colors.white} boxSize={6} />
        </Menu>
      </Header>
      <Main>
        <TextContainer>
          <Title>
            Welcome to <TitleHighlight>Management To do App</TitleHighlight>
          </Title>
          <Description>
            Increase your{" "}
            <DescriptionHighlight>productivity</DescriptionHighlight> skills by
            managing your daily tasks with the best to do app.
          </Description>
          <ButtonGroup width="350px">
            <Button outlined size="md" label="Learn More" />
            <Button size="md" label="Get Started" />
          </ButtonGroup>
        </TextContainer>
        <ImageContainer>
          <ImageRoundedBackground>
            <ImageTime src={Time}></ImageTime>
          </ImageRoundedBackground>
        </ImageContainer>
      </Main>
      <Footer>
        <Copyright>
          Developed by{" "}
          <CopyrightHighlight
            href="https://github.com/RafaelClaudio7"
            target="_blank"
          >
            @Rafael Claudio
          </CopyrightHighlight>
        </Copyright>
      </Footer>
    </Box>
  );
}
