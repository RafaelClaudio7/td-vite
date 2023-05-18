import React, { useState } from "react";
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
  Menu,
  NavLink,
  NavLinkContainer,
  ResponsiveOverlay,
  SideBar,
  SideBarContainer,
  TextContainer,
  Title,
  TitleHighlight,
} from "./styles";
import Button from "../../components/Button";
import Time from "../../assets/images/time1.png";
import { useNavigate } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Home() {
  const navigate = useNavigate();
  const [menuIsEnable, setMenuIsEnable] = useState<boolean>(false);

  async function handleNavigateSignIn() {
    navigate("/signin");
  }

  async function handleNavigateSignUp() {
    navigate("/signup");
  }

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
          {!menuIsEnable ? (
            <HamburgerIcon
              color={colors.white}
              boxSize={6}
              onClick={() => setMenuIsEnable((prev) => !prev)}
            />
          ) : (
            <CloseIcon
              color={colors.white}
              boxSize={4}
              onClick={() => setMenuIsEnable((prev) => !prev)}
            />
          )}
        </Menu>
        {menuIsEnable && (
          <ResponsiveOverlay>
            <Header />
            <SideBarContainer>
              <SideBar>
                <NavLinkContainer>
                  <NavLink href="/signin">Sign In</NavLink>
                </NavLinkContainer>
                <NavLinkContainer>
                  <NavLink href="/signup">Sign Up</NavLink>
                </NavLinkContainer>
                <NavLinkContainer>
                  <NavLink href="/learn">Learn More</NavLink>
                </NavLinkContainer>
                <NavLinkContainer>
                  <NavLink href="/get-started">Get Started</NavLink>
                </NavLinkContainer>
              </SideBar>
            </SideBarContainer>
          </ResponsiveOverlay>
        )}
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
