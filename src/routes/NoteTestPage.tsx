/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import TestNote from "../assets/notes/test-note-one.mdx";
import { VStack } from "@chakra-ui/react";

const components = {
  h1: (props: any) => <h1 style={{ color: "blue" }} {...props} />,
  // em: (props: any) => <i {...props} />,
};

export default function NoteTestPage() {
  const { title } = useParams<"title">();
  //const { title } = useParams();

  return (
    <VStack
      minH="100vh"
      w={{ base: "85%", md: "65%" }}
      py={8}
      //gap={{ base: 14, md: 12 }}
      //spacing={12}
      //alignItems="center"
    >
      <div>Welcome to {title}</div>
      <div>start xxx start</div>
      {/* <MDXProvider components={components}>
        <TestNote1 />
      </MDXProvider> */}
      <TestNote components={components} />
      <div>end xxx end</div>
    </VStack>
  );
}
