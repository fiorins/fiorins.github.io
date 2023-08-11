import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import { MyNote } from "../shared/MyNote";

export const Notes = () => {
  return (
    <Box textAlign="left">
      <Heading size="md" fontFamily="heading" py="2">
        MY NOTES
      </Heading>
      <Text size="md" fontFamily="body" py="2">
        Here you can find my notes I write about everything
      </Text>
      {/* todo: map generating */}
      {/* farle solo su una linea e alla fine metterci la data di pubblicazione e la bandiera o la sigla con la lingua */}
      <Flex gap="2" py="2" direction="column">
        <MyNote
          icon={"🔥"}
          title={
            "I'm Dave The perfect latte's from Rome, beverage of Italian origin made"
          }
        />
        <MyNote
          icon={"💧"}
          title={
            "I'm Dave The perfect latte's from Rome, beverage of Italian origin made"
          }
        />
        <MyNote
          icon={"🍀"}
          title={
            "I'm Dave The perfect latte's from Rome, beverage of Italian origin made"
          }
        />
      </Flex>
    </Box>
  );
};
