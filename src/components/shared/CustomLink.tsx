import { Link, Text, Icon } from "@chakra-ui/react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

interface LinkProps {
  url?: string;
  name?: string;
}

// todo fix bold on hover

export const CustomLink = ({ url = "", name = "" }: LinkProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      textDecoration="underline"
      textDecorationStyle="wavy"
      textDecorationColor="pink.500"
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
