import {
  Heading,
  HStack,
  Flex,
  Spacer,
  useTheme,
  useColorMode,
  useColorModeValue,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VerifiedIcon } from "../components/icons/VerifiedIcon";
import ColorModeSwitcher from "../components/shared/ColorModeSwitcher";

export const Header = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Flex alignItems="center" justifyContent="space-between" w="full">
      <Link to="/" relative="path">
        <HStack spacing={2}>
          <Heading fontFamily="heading" size="lg">
            @DAVIDEFIORINI
          </Heading>
          <VerifiedIcon
            h={{ base: "7vmin", md: "5vmin" }}
            pointerEvents="none"
          />
        </HStack>
      </Link>
      <Spacer />

      <Tooltip
        hasArrow
        label={useColorModeValue("Nox!", "Lux!")}
        bg={useColorModeValue(theme.colors.dark, theme.colors.light)}
        color={useColorModeValue("black", "white")}
        placement={useBreakpointValue({ base: "bottom", md: "left" })}
      >
        <ColorModeSwitcher size="sm" onClick={toggleColorMode} />
      </Tooltip>
    </Flex>
  );
};
