import React from "react";
import { Box } from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import { ButtonGroup, Header, Logo } from "./styles";
import Button from "../../components/Button";

export default function Home() {
  return (
    <Box w="100vw" h="100vh" bg={colors.black}>
      <Header>
        <Logo>MTD</Logo>
        <ButtonGroup>
          <Button>SIGN IN</Button>
          <Button outlined>SIGN UP</Button>
        </ButtonGroup>
      </Header>
    </Box>
  );
}
