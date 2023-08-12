import { VStack, HStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    // <VStack
    //   minH="100vh"
    //   w="70%"
    //   //w="full"
    //   px={{ base: 8, md: 6 }}
    //   py={8}
    //   spacing={12}
    //   //alignItems="center"
    //   alignItems="stretch"
    //   //justifyContent="space-between"
    // >
    //   ....
    // </VStack>

    <HStack alignItems="center" justifyContent="center">
      <VStack
        minH="100vh"
        w={{ base: "80%", md: "65%" }}
        py={8}
        //py={{ base: 12, md: 8 }}
        gap={{ base: 14, md: 12 }}
        spacing={12}
        alignItems="center"
      >
        <Header />
        <Outlet />
        <Footer />
      </VStack>
    </HStack>
  );
}
