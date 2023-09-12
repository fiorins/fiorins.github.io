/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  CSSProperties,
  useState,
  useEffect,
} from "react";
import TestNote1, { frontmatter } from "../assets/notes/test-note-1.mdx";
import NoteLayout from "./NoteLayout";

export default function Note() {
  return (
    <div>
      Noteeee
      <br />
      <NoteLayout Content={TestNote1} />
    </div>
  );
}
