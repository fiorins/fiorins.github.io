/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLoaderData } from "react-router-dom";
import NoteLayout from "../components/NoteLayout";
import AllNotes from "../assets/notes";

export async function loader({ params }: any) {
  const slug: string = params.title;
  const note: any = AllNotes[slug];
  //const note: any = AllNotes.find((item) => item.frontmatter.slug === slug);
  if (!slug) throw new Response("", { status: 404 });
  return note;
}
// export async function loader({ params }: any) {
//   const slug: string = params.title;
//   if (slug) {
//     const note: any = AllNotes.find((item) => item.frontmatter.slug === slug);
//     return { note };
//   } else {
//     throw new Response("", { status: 404 });
//   }
// }

export default function NotePage() {
  //const { note } = useLoaderData() as { note: any };
  const note: any = useLoaderData();

  const DynamicComponent = note.content;

  return (
    <>
      {note.frontmatter.shortTitle}
      <br />
      <br />
      {/* <NoteLayout frontmatter={note.frontmatter} Content={note.content} /> */}
      {/* <NoteLayout frontmatter={note.frontmatter} Content={DynamicComponent} /> */}
    </>
  );
}
