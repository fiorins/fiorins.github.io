import { VStack, HStack } from "@chakra-ui/react";

export default function Error() {
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
        <div>error, note not found</div>
      </VStack>
    </HStack>
  );
}
