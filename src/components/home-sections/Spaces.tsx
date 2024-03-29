import {
  Heading,
  Text,
  Box,
  Button,
  Kbd,
  useToast,
  Grid,
} from "@chakra-ui/react";
import { CardSpace } from "../shared/CardSpace";
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
    <Box textAlign="left" w="full">
      <Heading size="md" fontFamily="heading" py="2">
        MY SPACES
      </Heading>

      <Text size="md" fontFamily="body" py="2">
        If you are curious, I share my projects code and other stuff on various
        platforms.
      </Text>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
        py={2}
        //px={4}
      >
        {listSpaces.map((space, index) => {
          const isEven = index % 2 === 0; // check if index is even
          return (
            <CardSpace
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
        or just want to say hi!
      </Text>
    </Box>
  );
};
