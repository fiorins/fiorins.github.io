import {
  Card,
  CardBody,
  Heading,
  Text,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { CustomLink } from "./CustomLink";

interface ProjectProps {
  url?: string;
  name?: string;
  description?: string;
}

export const CardProject = ({
  url = "",
  name = "",
  description = "",
}: ProjectProps) => {
  const theme = useTheme();

  return (
    <Card
      bg={useColorModeValue(theme.colors.light, theme.colors.dark)}
      direction="row"
      key="elevated"
      variant="elevated"
      align="top"
      minHeight="100%"
      ml="0"
      mr="0"
    >
      <CardBody p={3}>
        <Heading size="sm" pb="1">
          <CustomLink url={url} name={name} />
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </CardBody>
    </Card>
  );
};
