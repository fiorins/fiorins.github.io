import React from "react";
import { Heading } from "@chakra-ui/react";

interface MDXComponentProps {
  style?: React.CSSProperties;
  children?: React.ReactNode; // Define the children prop
}
type MDXComponents = Record<string, React.FC<MDXComponentProps>>;
type NoteComponents = Record<string, MDXComponents>;

interface NoteLayoutProps {
  Content: React.ComponentType<NoteComponents>;
}

const components: MDXComponents = {
  h1: (props) => <h1 style={{ color: "blue" }} {...props} />,
  h2: (props) => (
    <Heading fontFamily="heading" size="sm" display="inline" pl={4}>
      {props.children}
    </Heading>
  ),
};

export default function NoteLayout({ Content }: NoteLayoutProps) {
  return <Content components={components} />;
}
