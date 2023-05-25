import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import { CheckIcon, MinusIcon } from "@chakra-ui/icons";

interface ICardTaskProps {
  title: string;
  description?: string;
  completed: boolean;
}

export default function CardTask({ title, completed }: ICardTaskProps) {
  return (
    <Card w={["200px", "200px", "200px"]} bg={colors.grey} ml={8} mr={8} mt={8}>
      <CardHeader>
        <Heading size="sm" color={colors.white} fontWeight={"regular"}>
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        {completed ? (
          <>
            <CheckIcon color={colors.greenLight} w={5} h={5} />
            <Text display={"inline"} ml={2} color={colors.greenLight}>
              Done
            </Text>
          </>
        ) : (
          <>
            <MinusIcon color={colors.white} w={5} h={5} />
            <Text display={"inline"} ml={2} color={colors.white}>
              To do
            </Text>
          </>
        )}
      </CardBody>
      <CardFooter>
        {completed ? (
          <Button
            color={colors.white}
            bg={"red.500"}
            w="100%"
            _hover={{ background: "red.300" }}
          >
            Excluir
          </Button>
        ) : (
          <Button
            color={colors.white}
            bg={"whatsapp.500"}
            w={"100%"}
            _hover={{ background: "whatsapp.300" }}
          >
            Completar
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
