/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement } from "react";
import {
  useParams,
} from "react-router-dom";
import MdxRenderer from "./MdxRenderer";
import mdxContent1 from "../assets/notes/test-note-one.mdx"; // Import your MDX files
import mdxContent2 from "../assets/notes/test-note-two.mdx"; // Import your MDX files

interface MdxContentMap {
  [key: string]: ReactElement;
}

const MdxNote = () => {
  const { title } = useParams();

  // Map your MDX files to their respective titles
  const mdxContentMap: MdxContentMap = {
    "my-mdx-file-1": mdxContent1,
    "my-mdx-file-2": mdxContent2,
    // Add more mappings as needed
  };

  //const mdxContent = mdxContentMap[title] || "MDX not found";

  // Check if the title exists in the map, if not, show a "MDX not found" message
  let mdxContent = mdxContentMap[title];

  if (mdxContent === undefined) {
    mdxContent = "MDX not found";
  }

  return <MdxRenderer mdxContent={mdxContent} />;
};

export default MdxNote;
