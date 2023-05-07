import React from "react";
import { Box } from "@chakra-ui/react";
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
  TextContainer,
  Title,
  TitleHighlight,
} from "./styles";
import Button from "../../components/Button";
import Time from "../../assets/images/time1.png";

export default function Home() {
  return (
    <Box bg={colors.black}>
      <Header>
        <Logo>MTD</Logo>
        <ButtonGroup width="260px">
          <Button size="sm">SIGN IN</Button>
          <Button outlined size="sm">
            SIGN UP
          </Button>
        </ButtonGroup>
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
            <Button outlined size="md">
              Learn More
            </Button>
            <Button size="md">Get Started</Button>
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
