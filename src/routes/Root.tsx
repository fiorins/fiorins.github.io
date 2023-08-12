import { VStack, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Root() {
  return (
    <HStack alignItems="center" justifyContent="center">
      <VStack
        minH="100vh"
        w={{ base: "85%", md: "65%" }}
        py={8}
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
