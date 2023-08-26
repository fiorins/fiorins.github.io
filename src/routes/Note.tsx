/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useEffect } from "react";
//import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import TestNote1 from "../assets/notes/TestNote1.mdx";
import TestNote2 from "../assets/notes/TestNote2.mdx";
import { VStack } from "@chakra-ui/react";

const components = {
  h1: (props: any) => <h1 style={{ color: "blue" }} {...props} />,
  // em: (props: any) => <i {...props} />,
};

export default function Note() {
  return (
    <VStack
      minH="100vh"
      w={{ base: "85%", md: "65%" }}
      py={8}
      //gap={{ base: 14, md: 12 }}
      //spacing={12}
      //alignItems="center"
    >
      <div>start xxx start</div>
      {/* <MDXProvider components={components}>
        <TestNote1 />
      </MDXProvider> */}
      <TestNote1 components={components} />
      <div>end xxx end</div>
    </VStack>
  );
}
