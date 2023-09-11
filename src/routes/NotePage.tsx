/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useLoaderData, Form, redirect, useParams } from "react-router-dom";
// import TestNote1, { frontmatter } from "../assets/notes/test-note-1.mdx";
import NoteLayout from "../components/NoteLayout";
import AllNotes from "../assets/notes";

// const notes1 = [
//   { "test-note-1": AllNotes.TestNote1 },
//   { "test-note-2": AllNotes.TestNote1 },
// ];

// const notes2 = {
//   "test-note-1": {
//     frontmatter: "First Blog Post",
//     content: TestNote1,
//   },
//   "test-note-2": {
//     frontmatter: "Second Blog Post",
//     content: TestNote1,
//   },
// };

export async function loader({ params }: any) {
  console.log("params: ", params);
  // const note = await getNote(params.title);
  const note: string = params.title;
  console.log("note1: ", note);
  if (!note) throw new Response("", { status: 404 });
  return { note };
}

// export const loader2: any = async ({ params }: any): any => {
//   //const note: string = params.title;
//   //console.log("note1: ", note);
//   //if (!note) throw new Response("", { status: 404 });
//   return "";
// };

// export const loader3 =
//   ({ params }: any) =>
//   async (slug: string): Promise<{ data: Article }> => {
//     const query = articleQuery(slug);

//     return await queryClient.ensureQueryData(query);
//   };

// export const loader = ({ params }: any) => {
//   return async () => {
//     const note = params.title;
//     console.log("note1: ", note);
//     if (!note) throw new Response("", { status: 404 });
//     return { note };
//   };
// };

// export const loader = ({ params }: any) =>
//   async () => {
//     // const note = await getNote(params.title);
//     const note = params.title;
//     console.log("note1: ", note);
//     if (!note) throw new Response("", { status: 404 });
//     return { note };
//   };

export default function NotePage() {
  const { note } = useLoaderData() as { note: string };
  console.log("note2: ", note);
  //const { title } = useParams<{ title: string | undefined }>();
  //const { title } = useParams<string>();
  //const { title } = useParams();

  // const aboutContent = aboutData.find((item) => item.slug === slug);

  console.log("AllNotes: ", AllNotes);
  //const componentFrontmatter = AllNotes[note];
  const selectedNote: any = AllNotes.find(
    (item) => item.frontmatter.slug === note
  );
  //const componentContent = AllNotes[note];
  console.log("selectedNote: ", selectedNote);

  return (
    <div>
      {selectedNote.frontmatter.title}
      <br />
      {/* <AllNotes.TestNote1 /> */}
      <br />
      Note1
      <br />
      {/* <NoteLayout
        frontmatter={AllNotes.frontmatter}
        Content={DynamicComponent}
      /> */}
    </div>
  );
}
