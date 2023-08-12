import {
  Heading,
  HStack,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { VerifiedIcon } from "../components/icons/VerifiedIcon";
import ColorModeSwitcher from "../components/shared/ColorModeSwitcher";
import { Tooltip } from "react-tooltip";

export const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex alignItems="center" justifyContent="space-between" w="full">
      <HStack spacing={2}>
        <Heading fontFamily="heading" size="lg">
          @DAVIDEFIORINI
        </Heading>
        <VerifiedIcon
          h={{ base: "7vmin", md: "5vmin" }}
          pointerEvents="none"
        />
      </HStack>
      <Spacer />
      <ColorModeSwitcher
        size="sm"
        onClick={toggleColorMode}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={useColorModeValue("Nox!", "Lux!")}
        //data-tooltip-delay-hide={2000}
      />
      <Tooltip
        id="my-tooltip"
        place={window.innerWidth < 768 ? "bottom" : "left"}
        style={{
          backgroundColor: useColorModeValue("#702963", "#C3B1E1"),
          color: useColorModeValue("#fff", "#000"),
          paddingInline: "10px",
          paddingBlock: "5px",
        }}
        closeOnEsc={true}
      />
    </Flex>
  );
};
