import { Heading, Text, Box, Grid } from "@chakra-ui/react";
import { CardProject } from "../shared/CardProject";

export const Projects = () => {
  const listProjects = [
    {
      url: "https://t.me/AlboPopLadispoli",
      name: "AlboPop Ladispoli",
      description: "Telegram channel auto updated with new municipal documents",
    },
    {
      url: "https://observablehq.com/@fiorins",
      name: "Ladispoli presences",
      description: "xxx",
    },
    {
      url: "https://observablehq.com/@fiorins",
      name: "SpaceX stats",
      description:
        "Telegram channel auto updated with new municipal documents xxx",
    },
    // {
    //   url: "https://observablehq.com/@fiorins",
    //   name: "xxx",
    //   description: "with my data visualizations",
    // },
  ];

  return (
    <Box textAlign="left">
      <Heading size="md" fontFamily="heading" py="2">
        MY PROJECTS
      </Heading>

      <Text size="md" fontFamily="body" py="2">
        Some of my personal projects I worked on.
      </Text>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
        py={2}
        //px={4}
      >
        {listProjects.map((space, index) => {
          return (
            <CardProject
              key={index}
              url={space.url}
              name={space.name}
              description={space.description}
              // marginLeft={0}
              // marginRight={0}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
