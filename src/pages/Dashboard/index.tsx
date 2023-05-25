import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import { Header } from "../Home/styles";
import { colors } from "../../constants/colors";
import axios from "axios";
import CardTask from "../../components/CardTask";
import DividerStyled from "../../components/Divider";

interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<ITask[]>([] as ITask[]);
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
      templateAreas={[
        `"header" "nav" "main" "footer"`,
        `"header header"
                    "nav main"
                    "nav footer"`,
      ]}
      gridTemplateRows={["10vh 1fr 1fr", "10vh 1fr 8vh"]}
      gridTemplateColumns={["1fr ", "180px 1fr"]}
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
            </WrapItem>
          </Wrap>
        </Header>
        <Divider />
      </GridItem>
      <GridItem bg={colors.green} area={"nav"}>
        <Box
          w={"100%"}
          h={16}
          display={"flex"}
          alignItems={"center"}
          cursor={"pointer"}
          _hover={{ background: colors.greenDark, fontWeight: "bold" }}
        >
          <Text ml={4} color={colors.white}>
            New task
          </Text>
        </Box>
        <DividerStyled />
        <Box
          w={"100%"}
          h={16}
          display={"flex"}
          alignItems={"center"}
          cursor={"pointer"}
          _hover={{ background: colors.greenDark, fontWeight: "bold" }}
        >
          <Text ml={4} color={colors.white}>
            View group
          </Text>
        </Box>
        <DividerStyled />
        <Box
          w={"100%"}
          h={16}
          display={"flex"}
          alignItems={"center"}
          cursor={"pointer"}
          _hover={{ background: colors.greenDark, fontWeight: "bold" }}
        >
          <Text ml={4} color={colors.white}>
            Tutorials
          </Text>
        </Box>
        <DividerStyled />
        <Box
          w={"100%"}
          h={16}
          display={"flex"}
          alignItems={"center"}
          cursor={"pointer"}
          _hover={{ background: colors.greenDark, fontWeight: "bold" }}
        >
          <Text ml={4} color={colors.white}>
            Settings
          </Text>
        </Box>
        <DividerStyled />
      </GridItem>
      <GridItem bg={colors.black} area={"main"}>
        <Wrap>
          <div>
            <Text fontSize={"3xl"} color={colors.white} ml={8} mt={4}>
              Tasks
            </Text>
          </div>
          <Flex
            mt={5}
            w={"100%"}
            flexWrap={"wrap"}
            justifyContent={["center", "flex-start"]}
          >
            {tasks.length > 0 &&
              tasks.map((task) => {
                if (task.userId === 1)
                  return (
                    <CardTask title={task.title} completed={task.completed} />
                  );
              })}
          </Flex>
        </Wrap>
      </GridItem>
      <GridItem pl="2" bg={colors.black} area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}
