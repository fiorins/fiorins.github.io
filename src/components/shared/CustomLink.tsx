import { Link, Text, Icon } from "@chakra-ui/react";
import { HiExternalLink, HiOutlineExternalLink } from "react-icons/hi";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";
import { RiExternalLinkFill, RiExternalLinkLine } from "react-icons/ri";
import { TbExternalLink } from "react-icons/tb";

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
