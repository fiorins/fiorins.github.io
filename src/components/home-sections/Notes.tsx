import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import { CardNote } from "../shared/CardNote";

export const Notes = () => {
  const listNotes = [
    {
      icon: "🔥",
      title: "Lorem ipsum dolor sit me amen",
      date: "2024",
      slug: "perfect-latte",
    },
    {
      icon: "💧",
      title: "Nel mezzo del cammin di nostra vita",
      date: "2023-07",
      slug: "test-note-1",
    },
    {
      icon: "🍀",
      title: "Mi ritrovai per una selva oscura",
      date: "2023-07-15",
      slug: "how-i-built-my-website",
    },
  ];

  return (
    <Box textAlign="left" w="full">
      <Heading size="md" fontFamily="heading" py="2">
        MY NOTES
      </Heading>
      <Text size="md" fontFamily="body" py="2">
        Here you can find my notes I write about everything.
      </Text>
      <Flex gap="2" py="2" direction="column">
        {listNotes.map((space, index) => {
          return (
            <CardNote
              key={index}
              icon={space.icon}
              title={space.title}
              date={space.date}
              slug={"/#/notes/" + space.slug}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
