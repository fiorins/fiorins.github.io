import React, { ReactElement } from "react";
import TestNote1, { frontmatter as fm1 } from "./test-note-1.mdx";
import TestNote2, { frontmatter as fm2 } from "./test-note-2.mdx";

interface Note {
  frontmatter: object; //(props: React.ReactNode) => JSX.Element
  content: (props: React.ReactNode) => JSX.Element;
}

interface AllNotesType {
  [slug: string]: Note;
}

const AllNotes: AllNotesType = {
  "test-note-1": {
    frontmatter: fm1,
    content: TestNote1,
  },
  "test-note-2": {
    frontmatter: fm2,
    content: TestNote2,
  },
};

// const AllNotes = [
//   {
//     frontmatter: fm1,
//     content: TestNote1,
//   },
//   {
//     frontmatter: fm2,
//     content: TestNote2,
//   },
// ];

export default AllNotes;
