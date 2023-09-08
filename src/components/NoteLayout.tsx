import React, { ComponentType, CSSProperties } from "react";

interface MDXComponentProps {
  style?: CSSProperties;
}

type MDXComponents = Record<string, React.FC<MDXComponentProps>>;
type NoteComponents = Record<string, MDXComponents>;

interface NoteLayoutProps {
  Content: ComponentType<NoteComponents>;
}

const components: MDXComponents = {
  h1: (props: MDXComponentProps) => <h1 style={{ color: "blue" }} {...props} />,
};

export default function NoteLayout({ Content }: NoteLayoutProps) {
  return <Content components={components} />;
}
