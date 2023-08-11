import { VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <VStack
      minH="100vh"
      px={56}
      py={8}
      w="full"
      spacing={12}
      alignItems="space-between"
    >
      <Header />
      <Outlet />
      <Footer />
    </VStack>
  );
}
