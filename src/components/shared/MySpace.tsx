import {
  Link,
  Card,
  CardHeader,
  CardBody,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export const MySpace = ({
  url = "",
  urlIcon = "",
  name = "",
  description = "",
}: any) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      textDecoration="none"
      _hover={{
        textDecoration: "none",
      }}
      flex="1" //it allows to have same size on every card
    >
      <Card
        bg="teal.500"
        transition="all 0.3s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
        minHeight="100%"
      >
        <CardHeader px={6} pt={4} pb={1}>
          <HStack>
            <Icon
              icon={urlIcon}
              color={useColorModeValue("black", "white")}
              height="30"
            />
            <Text as="span" fontFamily="heading" fontWeight={"bold"}>
              {name}
            </Text>
          </HStack>
        </CardHeader>
        <CardBody px={6} pt={1} pb={4}>
          <Text fontFamily="body">{description}</Text>
        </CardBody>
      </Card>
    </Link>
  );
};
