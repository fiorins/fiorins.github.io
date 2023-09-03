import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
//import { Heading, /* … */ Table } from "./components/index.js";

// const components = {
//   h1: Heading.H1,
//   // …
//   table: Table,
// };

type MDXProps = {
  //style?: CSSProperties;
  // Other MDX-related props
};

export const components = {
  // Define your custom MDX components here

  h1: (props: MDXProps) => (
    <h1 style={{ color: "blue", ...props.style }} {...props} />
  ),
  // em: (props: any) => <i {...props} />,
  // ...other components
};

interface NoteLayoutProps {
  children: React.ReactNode;
}

export default function NoteLayout({ children }: NoteLayoutProps) {
  return (
    <main>{children}</main>
    // <MDXProvider components={components}>
    //   {children}
    // </MDXProvider>
  );
}

NoteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};