/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Heading,
  Text,
  Box,
  Button,
  Kbd,
  useToast,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { MyLink } from "../shared/MyLink";
import { MySpace } from "../shared/MySpace";
import useClipboard from "react-use-clipboard";

export const Spaces = () => {
  const toast = useToast();

  const [, setCopied] = useClipboard("davidefiorini@outlook.com");

  const listSpaces = [
    {
      url: "https://github.com/fiorins",
      urlIcon: "mingcute:github-fill",
      name: "github",
      description: "source code of my projects",
    },
    {
      url: "https://observablehq.com/@fiorins",
      urlIcon: "simple-icons:observable",
      name: "observable",
      description: "with my data visualizations",
    },
    {
      url: "https://www.youtube.com/@fiorins",
      urlIcon: "mingcute:youtube-fill",
      name: "youtube",
      description: "for my drone videos",
    },
    {
      url: "https://dev.to/fiorins",
      urlIcon: "fa-brands:dev",
      name: "dev",
      description: "posts on my dev account",
    },
  ];

  return (
    <Box textAlign="left">
      <Heading size="md" fontFamily="heading" py="2">
        MY SPACES
      </Heading>

      <Text size="md" fontFamily="body" py="2">
        On my projects, [&nbsp;
        <MyLink url={"https://react.dev"} name={"React"} />
        ,&nbsp;
        <MyLink url={"https://www.typescriptlang.org"} name={"Typescript"} />
        ,&nbsp;
        <MyLink url={"https://www.python.org"} name={"Python"} />
        &nbsp;] are the programming languages and frameworks I mainly work with.
        I share my projects code and other stuff on various platforms.
      </Text>

      <Grid
        //templateColumns="repeat(3, 1fr)"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
        py={2}
        //px={4}
      >
        {/* <Flex gap="8" py="2" px="4"> */}
        {listSpaces.map((space, index) => {
          const isEven = index % 2 === 0; // Check if index is even
          return (
            <MySpace
              key={index}
              url={space.url}
              urlIcon={space.urlIcon}
              name={space.name}
              description={space.description}
              marginLeft={!isEven ? 12 : 0}
              marginRight={isEven ? 12 : 0}
            />
          );
        })}
        {/* </Flex> */}
      </Grid>

      <Text size="md" fontFamily="body" py="2">
        My inbox is always open. Click&nbsp;
        <Button
          variant="link"
          size="xl"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setCopied();
            toast({
              title: "email copied to clipboard",
              status: "success",
              duration: 1800,
            });
          }}
        >
          <Kbd>here</Kbd>
        </Button>
        &nbsp;to copy my email address and write me whether you have a question
        or just want to say hi, I'll try my best to get back to you!
      </Text>
    </Box>
  );
};
