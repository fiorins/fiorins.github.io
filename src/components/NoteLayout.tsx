import React from "react";

type MDXComponents = Record<string, React.FC>;
type NoteComponents = Record<string, MDXComponents>;

interface NoteLayoutProps {
  Content: React.ComponentType<NoteComponents>;
}

const components: MDXComponents = {
  h1: (props) => <h1 style={{ color: "blue" }} {...props} />,
};

export default function NoteLayout({ Content }: NoteLayoutProps) {
  return <Content components={components} />;
}
