import { Link, Text } from "@chakra-ui/react";

export const MyLink = ({ url = "", name = "" }: any) => {
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
