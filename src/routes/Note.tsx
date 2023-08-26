/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
//import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
//import TestNote1 from "../assets/notes/testNote1.mdx";
import testNote1 from "../assets/notes/testNote1.mdx";
import TestNote3 from "../assets/notes/testNote3.mdx";

export default function Note() {
  return (
    <div>
      {/* <MDXProvider>
        <testNote1 />
         <TestNote3 />
      </MDXProvider> */}
      <testNote1 />
    </div>
  );
}
