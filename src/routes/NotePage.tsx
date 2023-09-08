/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import TestNote1 from "../assets/notes/test-note-1.mdx";
import TestNote2 from "../assets/notes/test-note-2.mdx";
import { VStack } from "@chakra-ui/react";
import MDXRenderer from "../components/MdxRenderer";
import mdxFiles from "../assets/notes/test-note-2.mdx";

const notes = {
  note1: TestNote1,
  note2: TestNote2,
  // ...
  // You can add other notes here
};

// type slugProp = {
//   title?: string;
// };

export default function NotePage() {
  // //const { title } = useParams<string>();
  // //const { title } = useParams<"title">();
  // const { title } = useParams<{ title: string | undefined }>();
  // //const { title } = useParams();
  // console.log("title: ", title);

  // const NoteComponent: string = notes[title];
  // //const NoteComponent: string = title ? notes[title] : "got error";
  // // let NoteComponent = "";
  // // NoteComponent = title ?? notes[title];

  const { title } = useParams();
  const mdxNote = BlogPosts[slug];

  const mdxFile = mdxFiles.find((file) => file.title === title);

  if (!mdxFile) {
    return <div>MDX file not found</div>;
  }

  return (
    <VStack
      minH="100vh"
      w={{ base: "85%", md: "65%" }}
      py={8}
      //gap={{ base: 14, md: 12 }}
      //spacing={12}
      //alignItems="center"
    >
      {/* <div>Welcome to {title}</div>
      <div>start xxx start</div>
      <NoteComponent />
      <div>middle xxx middle</div>
      <NoteComponent components={components} />
      <div>end xxx end</div> */}
      <MDXRenderer mdxContent={mdxFile.content} />;
    </VStack>
  );
}
