/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Heading, Box } from "@chakra-ui/react";

// https://www.developerway.com/posts/react-component-as-prop-the-right-way

interface MDXComponentProps {
  style?: React.CSSProperties;
  children?: React.ReactNode; // Define the children prop
}
type MDXComponents = Record<string, React.FC<MDXComponentProps>>;
type NoteComponents = Record<string, MDXComponents>;
interface NoteLayoutProps {
  frontmatter: any;
  Content: React.ComponentType<NoteComponents>;
}

const components: MDXComponents = {
  h1: (props) => <h1 style={{ color: "blue" }} {...props} />,
  h2: (props) => <Heading size="xl">{props.children}</Heading>,
  h3: (props) => (
    <Heading fontFamily="subHeading1" size="lg">
      {props.children}
    </Heading>
  ),
};

export default function NoteLayout({ frontmatter, Content }: NoteLayoutProps) {
  return (
    <Box px={8}>
      {frontmatter.shortTitle}
      <br />
      NoteLayout
      <br />
      <Content components={components} />
    </Box>
  );
}
