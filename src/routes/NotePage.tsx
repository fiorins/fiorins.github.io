/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLoaderData } from "react-router-dom";
import NoteLayout from "../components/NoteLayout";
import AllNotes from "../assets/notes";
import { Heading, Box } from "@chakra-ui/react";

export async function loader({ params }: any) {
  const slug: string = params.title;
  const note: any = AllNotes[slug];
  if (!slug) throw new Response("", { status: 404 });
  return note;
}

const components: any = {
  h1: (props: any) => <h1 style={{ color: "blue" }} {...props} />,
  h2: (props: any) => <Heading size="xl">{props.children}</Heading>,
  h3: (props: any) => (
    <Heading fontFamily="subHeading1" size="lg">
      {props.children}
    </Heading>
  ),
};

export default function NotePage() {
  //const { note } = useLoaderData() as { note: any };
  const note: any = useLoaderData();

  const DynamicNote = note.content;

  return (
    <>
      {note.frontmatter.shortTitle}
      <br />
      <br />
      {/* <NoteLayout frontmatter={note.frontmatter} Content={note.content} /> */}
      <br />
      <br />
      {/* <DynamicNote components={components} /> */}
      <Box px={8}>
        <DynamicNote components={components} />
      </Box>
    </>
  );
}
