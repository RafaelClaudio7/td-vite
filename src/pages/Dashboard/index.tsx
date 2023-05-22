import {
  Avatar,
  Box,
  Divider,
  Grid,
  GridItem,
  Text,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Header } from "../Home/styles";
import { colors } from "../../constants/colors";
import { BellIcon } from "@chakra-ui/icons";
import axios from "axios";

interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<ITask[]>();
  // const [isError, setIsError] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        signal: controller.signal,
      })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        // setIsError(true);
        toast({
          title: `Erro ao buscar as tarefas`,
          status: "error",
          isClosable: true,
        });
        console.log(error);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={"10vh 1fr 8vh"}
      gridTemplateColumns={"180px 1fr"}
      height={"100vh"}
    >
      <GridItem bg={colors.black} area={"header"}>
        <Header>
          <Text fontFamily={"Roboto"} color={colors.white} ml={10}>
            Bem vindo{" "}
            <Text display={"inline"} color={colors.green} fontWeight={600}>
              Rafael
            </Text>
          </Text>
          <Wrap mr={10} cursor={"pointer"}>
            <WrapItem>
              <Avatar name="Rafael Tula" bg={colors.green} />
              {/* <BellIcon w={5} h={5} color={colors.white} /> */}
            </WrapItem>
          </Wrap>
        </Header>
        <Divider />
      </GridItem>
      <GridItem pl="2" bg={colors.green} area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg={colors.black} area={"main"}></GridItem>
      <GridItem pl="2" bg={colors.black} area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}
