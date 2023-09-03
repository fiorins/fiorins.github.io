/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXProvider } from "@mdx-js/react";

const Note = ({ mdxContent }: any) => {
  return (
    <MDXProvider>
      <div>{mdxContent}</div>
    </MDXProvider>
  );
};

export default Note;
