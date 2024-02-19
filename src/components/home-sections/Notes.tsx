import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import { CardNote } from "../shared/CardNote";

export const Notes = () => {
  const listNotes = [
    {
      icon: "🔥",
      title:
        "I'm Dave The perfect latte's from Rome, beverage of Italian origin made",
      date: "2024",
      slug: "perfect-latte",
    },
    {
      icon: "💧",
      title: "Lorem ipsum dolor sit me amen",
      date: "2023-07",
      slug: "test-note-1",
    },
    {
      icon: "🍀",
      title:
        "Nel mezzo del cammin di nostra vita, mi ritrovai per una selva oscura",
      date: "2023-07-15",
      slug: "test-note-y",
    },
  ];

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
        {listNotes.map((space, index) => {
          return (
            <CardNote
              key={index}
              icon={space.icon}
              title={space.title}
              date={space.date}
              slug={"/notes/" + space.slug}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
