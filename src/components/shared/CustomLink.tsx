import { Link, Text } from "@chakra-ui/react";

interface LinkProps {
  url?: string;
  name?: string;
}

export const CustomLink = ({ url = "", name = "" }: LinkProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      textDecoration="underline"
      textDecorationStyle="wavy"
      textDecorationColor="teal.500"
      _hover={{
        textDecoration: "underline",
        textDecorationStyle: "dotted",
        textDecorationColor: "orange.500",
      }}
    >
      <Text as="span" fontFamily="mono">
        {name}
      </Text>
    </Link>
  );
};
