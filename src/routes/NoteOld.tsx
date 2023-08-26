/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
//import { components } from "./mdx-components"; // Custom MDX components
import testNote1 from "../assets/notes/testNote1.mdx";
import notes from "../assets/notes/notesImport";

export default function Note() {
  const { title } = useParams();
  console.log("title: ", title);
  const NoteComponent = notes.find((file) => file.title === title);

  return (
    <div>
      <MDXProvider>
        <NoteComponent />
      </MDXProvider>
    </div>
  );
}
