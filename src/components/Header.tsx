import { Heading, HStack, Flex, Spacer, useColorMode } from "@chakra-ui/react";
import { VerifiedIcon } from "../components/icons/VerifiedIcon";
import ColorModeSwitcher from "../components/shared/ColorModeSwitcher";

export const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <HStack spacing={2}>
        <Heading fontFamily="heading" size="lg">
          @DAVIDEFIORINI
        </Heading>
        <VerifiedIcon h="5vmin" pointerEvents="none" />
      </HStack>
      <Spacer />
      <ColorModeSwitcher size="sm" onClick={toggleColorMode} />
    </Flex>
  );
};
