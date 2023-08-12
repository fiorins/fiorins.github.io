import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import { CardNote } from "../shared/CardNote";

export const Notes = () => {
  // const listNotes = [
  //   {
  //     link: "https://github.com/fiorins",
  //     icon: "mingcute:github-fill",
  //     title: "github",
  //     date: "source code of my projects",
  //   },
  //   {
  //     link: "https://github.com/fiorins",
  //     icon: "mingcute:github-fill",
  //     title: "github",
  //     date: "source code of my projects",
  //   },
  // ];

  return (
    <Box textAlign="left">
      <Heading size="md" fontFamily="heading" py="2">
        MY NOTES
      </Heading>
      <Text size="md" fontFamily="body" py="2">
        Here you can find my notes I write about everything.
      </Text>
      {/* todo: map generating */}
      <Flex gap="2" py="2" direction="column">
        {/* {listNotes.map((space, index) => {
          return (
            <CardNote
              key={index}
              link={space.url}
              icon={space.urlIcon}
              title={space.name}
              date={space.description}
            />
          );
        })} */}
        <CardNote
          icon={"🔥"}
          title={
            "I'm Dave The perfect latte's from Rome, beverage of Italian origin made"
          }
          date={"2023"}
        />
        <CardNote
          icon={"💧"}
          title={"Lorem ipsum dolor sit me amen"}
          date={"2023-07"}
        />
        <CardNote
          icon={"🍀"}
          title={
            "Nel mezzo del cammin di nostra vita, mi ritrovai per una selva oscura"
          }
          date={"2023-07-15"}
        />
      </Flex>
    </Box>
  );
};
