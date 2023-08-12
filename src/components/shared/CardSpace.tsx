import {
  Link,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface SpaceProps {
  url?: string;
  urlIcon?: string;
  name?: string;
  description?: string;
  marginLeft?: number;
  marginRight?: number;
}

export const CardSpace = ({
  url = "",
  urlIcon = "",
  name = "",
  description = "",
  marginLeft = 0,
  marginRight = 0,
}: SpaceProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      flex="1" //it allows to have same size on every card
      ml={{ base: marginLeft, md: 0 }}
      mr={{ base: marginRight, md: 0 }}
    >
      <Card
        bg="teal.500"
        direction="row"
        key="outline"
        variant="outline"
        align="center"
        _hover={{ bg: "teal", transition: "background-color 0.3s ease" }}
        minHeight="100%"
      >
        <CardHeader p={3}>
          <Icon
            icon={urlIcon}
            color={useColorModeValue("black", "white")}
            height="30"
          />
        </CardHeader>
        <CardBody py={2} px={0}>
          <Heading size="md">{name}</Heading>{" "}
          <Text fontSize="sm">{description}</Text>
        </CardBody>
      </Card>
    </Link>
  );
};
