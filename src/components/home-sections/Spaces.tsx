import {
  Heading,
  Text,
  Box,
  Flex,
  Button,
  Kbd,
  useToast,
} from "@chakra-ui/react";
import { MyLink } from "../shared/MyLink";
import { MySpace } from "../shared/MySpace";
import useClipboard from "react-use-clipboard";

export const Spaces = () => {
  const toast = useToast();

  const [, setCopied] = useClipboard("davidefiorini@outlook.com");

  return (
    <Box textAlign="left">
      <Heading size="md" fontFamily="heading" py="2">
        MY SPACES
      </Heading>
      {/* todo: map generating? */}
      <Text size="md" fontFamily="body" py="2">
        On my projects, [&nbsp;
        <MyLink url={"https://react.dev"} name={"React"} />
        ,&nbsp;
        <MyLink url={"https://www.typescriptlang.org"} name={"Typescript"} />
        ,&nbsp;
        <MyLink url={"https://www.python.org"} name={"Python"} />
        &nbsp;] are the programming languages and frameworks I mainly work with.
        You can find me on various platforms where I post my works and other
        stuff.
      </Text>
      <Flex gap="8" py="2" px="4">
        <MySpace
          url={"https://github.com/fiorins"}
          urlIcon={"mingcute:github-fill"}
          name={"github"}
          description={"where I share the source code of my projects"}
        />
        <MySpace
          url={"https://observablehq.com/@fiorins"}
          urlIcon={"simple-icons:observable"}
          name={"observable"}
          description={"where I post some cool data visualizations"}
        />
        <MySpace
          url={"https://www.youtube.com/@fiorins"}
          urlIcon={"mingcute:youtube-fill"}
          name={"youtube"}
          description={"on which I upload videos of my drone flights"}
        />
      </Flex>
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
