import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
//import { Heading, /* … */ Table } from "./components/index.js";
import { MDXProvider } from "@mdx-js/react";

// const components = {
//   h1: Heading.H1,
//   // …
//   table: Table,
// };

type MDXProps = {
  style?: CSSProperties;
  // Other MDX-related props
};

const components = {
  // Define your custom MDX components here
  h1: (props: MDXProps) => <h1 style={{ color: "blue" }} {...props} />,
  // em: (props: any) => <i {...props} />,
  // ...other components
  //a: Link //do import from chakraui
};

interface NoteLayoutProps {
  children: React.ReactNode;
}

export default function NoteLayout({ children }: NoteLayoutProps) {
  return (
    <>
      {/* <main>{children}</main> */}
      {/* <h1>{data.mdx.frontmatter.title}</h1> */}
      <MDXProvider components={components}>
        {children}
        <br />
        <br />
        <p>This is additional content added by the wrapper.</p>
      </MDXProvider>
    </>
  );
}

NoteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
