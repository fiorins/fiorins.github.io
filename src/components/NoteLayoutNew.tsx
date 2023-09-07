import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
//import { Heading, /* … */ Table } from "./components/index.js";
import { MDXProvider } from "@mdx-js/react";

type MDXProps = {
  style?: CSSProperties;
  // Other MDX-related props
};

const components = {
  h1: (props: MDXProps) => <h1 style={{ color: "blue" }} {...props} />,
};

interface NoteLayoutProps {
  Content: React.ReactNode;
}

export default function NoteLayout({ Content }: NoteLayoutProps) {
  return (
    <>
      <Content components={components} />;
      <br />
      <br />
      <p>This is additional content added by the wrapper.</p>
    </>
  );
}

NoteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
