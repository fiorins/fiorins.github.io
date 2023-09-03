import React from "react";
import { MDXProvider } from "@mdx-js/react";

interface MdxRendererProps {
  mdxContent: React.ReactNode; // Change the type to whatever your MDX content is
}

const MdxRenderer: React.FC<MdxRendererProps> = ({ mdxContent }) => {
  return (
    <MDXProvider>
      <div>{mdxContent}</div>
    </MDXProvider>
    // <div>{mdxContent}</div>
  );
};

export default MdxRenderer;
