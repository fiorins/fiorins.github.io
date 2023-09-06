/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, useState, useEffect } from "react";
import { remark } from "remark";
import remarkMdx from "remark-mdx";
import TestNote, { frontmatter } from "../assets/notes/test-note.mdx";
import * as TestNoteX from "../assets/notes/test-note-x.mdx";
import testNoteY from "../assets/notes/test-note-y.mdx";
import TestNote1 from "../assets/notes/test-note-1.mdx";
import TestNote2 from "../assets/notes/test-note-2.mdx";
import { compile } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import NoteLayout from "./NoteLayout";
import matter from "gray-matter";

type MDXProps = {
  style?: CSSProperties;
  // Other MDX-related props
};

const components = {
  // Define your custom MDX components here
  h1: (props: MDXProps) => <h1 style={{ color: "blue" }} {...props} />,
  // em: (props: any) => <i {...props} />,
  // ...other components
};

// const { content, data: frontmatterData } = matter(testNoteY);

export default function Note1() {
  // const { data, content } = matter(testnotex);

  // Use a useEffect to fetch and parse the MDX file content
  // const [data, setData] = useState<any>({});
  // useEffect(() => {
  //   fetch("assets/notes/test-note-x.mdx")
  //     .then((response) => response.text())
  //     .then((mdxText) => {
  //       // Parse the MDX text using gray-matter
  //       const { data } = matter(mdxText);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div>
      {/* {content}
      {frontmatterData} */}
      {frontmatter.shortTitle}
      Note1
      <br />
      <br />
      <TestNote components={components} />
      <br />
      <br />
      <TestNote />
      <br />
      <br />
      <NoteLayout>
        <TestNote />
      </NoteLayout>
      <br />
      <br />
      {/* {TestNote.MDXContent} */}
      {/* <div>
        {TestNoteX.title}
        <p>Title: {data.title}</p>
        <p>Content: {data.content}</p>
      </div> */}
    </div>
  );
}
