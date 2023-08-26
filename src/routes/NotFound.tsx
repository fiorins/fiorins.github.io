import { VStack, HStack } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function NotFound() {
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
        <div>4oooo4 - Page NotFound</div>
      </VStack>
    </HStack>
  );
}
