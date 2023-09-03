/* eslint-disable @typescript-eslint/no-unused-vars */
import { remark } from "remark";
import remarkMdx from "remark-mdx";
import TestNote from "../assets/notes/test-note.mdx";
import TestNote1 from "../assets/notes/test-note-1.mdx";
import TestNote2 from "../assets/notes/test-note-2.mdx";
import { compile } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default function Note1() {
  return (
    <div>
      Note1
      <br />
      <br />
      <TestNote />
    </div>
  );
}
