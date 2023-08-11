import { Link, Card, CardHeader, Heading, Box } from "@chakra-ui/react";

export const MyNote = ({ url = "", icon = "", title = "" }: any) => {
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
            <Box display="inline" pr="5">
              {icon}
            </Box>
            {title}
          </Heading>
        </CardHeader>
      </Card>
    </Link>
  );
};
