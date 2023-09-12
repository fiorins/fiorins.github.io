/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLoaderData, redirect, useParams } from "react-router-dom";
import NoteLayout from "../components/NoteLayout";
import AllNotes from "../assets/notes";

export async function loader({ params }: any) {
  console.log("params: ", params);
  // const note = await getNote(params.title);
  const slug: string = params.title;
  if (!slug) throw new Response("", { status: 404 });
  return { slug };
}

export default function NotePage() {
  const { slug } = useLoaderData() as { slug: string };
  //const { title } = useParams<{ title: string | undefined }>();
  //const { title } = useParams<string>();
  //const { title } = useParams();

  console.log("AllNotes: ", AllNotes);
  const note: any = AllNotes.find((item) => item.frontmatter.slug === slug);
  console.log("note: ", note);

  return (
    <div>
      {note.frontmatter.title}
      {/* <AllNotes.TestNote1 /> */}
      {/* {note.content} */}
      <br />
      NotePage
      <br />
      <NoteLayout frontmatter={note.frontmatter} Content={note.content} />
    </div>
  );
}