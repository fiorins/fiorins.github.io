import {
  Link,
  Text,
  Icon,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

interface LinkProps {
  url?: string;
  name?: string;
}

// todo fix bold on hover

export const CustomLink = ({ url = "", name = "" }: LinkProps) => {
  const theme = useTheme();

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      textDecoration="underline"
      textDecorationStyle="wavy"
      textDecorationColor={useColorModeValue(
        theme.colors.dark,
        theme.colors.light
      )}
      _hover={{
        textDecoration: "underline",
        textDecorationStyle: "dotted",
        textDecorationColor: "red.500",
        fontWeight: "bold",
      }}
      fontFamily="mono"
      fontWeight="bold"
    >
      <Text as="span">{name}</Text>
      <Icon as={FaExternalLinkSquareAlt} verticalAlign="middle" ml={2} />
    </Link>
  );
};
