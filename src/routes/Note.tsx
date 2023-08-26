import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import TestNote1 from "../assets/notes/testNote1.mdx";
// import testNote1 from "../assets/notes/testNote1.mdx";

export default function Note() {
  return (
    <div>
      <MDXProvider>
        <TestNote1 />
      </MDXProvider>
    </div>
  );
}
