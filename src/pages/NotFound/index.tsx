import React from "react";
import { Center, Flex, Text } from "@chakra-ui/react";
import notFound from "../../assets/images/notFound.png";
import { colors } from "../../constants/colors";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigation = useNavigate();

  return (
    <Center h="100vh" w="100vw" bg={colors.black} flexDir="column">
      <Text color={colors.greenLight} fontSize={"32px"} fontFamily={"Roboto"}>
        Página não encontrada!
      </Text>
      <img src={notFound} alt="Não encontrado" height={350} width={350} />
      <Flex
        alignItems={"center"}
        onClick={() => navigation("/")}
        cursor={"pointer"}
      >
        <ArrowBackIcon color={colors.greenLight} boxSize={8} />
        <Text
          color={colors.greenLight}
          display={"inline"}
          ml={5}
          fontSize={"20px"}
          fontFamily={"Roboto"}
          fontWeight={300}
        >
          Voltar para home
        </Text>
      </Flex>
    </Center>
  );
}
