import { Link, Card, CardHeader, Heading, Box, Flex } from "@chakra-ui/react";

interface NoteProps {
  url?: string;
  icon?: string;
  title?: string;
  date?: string;
}

export const CardNote = ({
  url = "",
  icon = "",
  title = "",
  date = "",
}: NoteProps) => {
  return (
    <Link
      href={url}
      textDecoration="none"
      _hover={{
        textDecoration: "none",
      }}
      flex="1" //it allows to have same size on every card
    >
      <Card
        key="filled"
        variant="filled"
        transition="all 0.3s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        <CardHeader>
          <Heading size="md" fontFamily="subHeading3">
            <Flex justify="space-between" gap="2" p="1">
              <span>
                <Box display="inline" pr="5">
                  {icon}
                </Box>
                {title}
              </span>
              <Box display="inline" pl="5">
                {date}
              </Box>
            </Flex>
          </Heading>
        </CardHeader>
      </Card>
    </Link>
  );
};
