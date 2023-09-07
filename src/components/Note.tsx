/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, useState, useEffect } from "react";
import TestNote, { frontmatter } from "../assets/notes/test-note.mdx";
import * as TestNoteX from "../assets/notes/test-note-x.mdx";
import testNoteY from "../assets/notes/test-note-y.mdx";
import TestNote1 from "../assets/notes/test-note-1.mdx";
import TestNote2 from "../assets/notes/test-note-2.mdx";
import NoteLayout from "./NoteLayout";

export default function Note() {
  return (
    <div>
      {frontmatter.shortTitle}
      <br />
      <br />
      Note1
      <br />
      <NoteLayout Content={TestNote} />
    </div>
  );
}
