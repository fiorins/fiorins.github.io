import { FC, ReactElement, ComponentType, CSSProperties } from "react";

interface MDXComponents {
  [key: string]: FC<MDXComponProps>;
}
interface MDXComponProps {
  style?: CSSProperties;
}
interface NoteComponents {
  style?: CSSProperties;
}
interface NoteLayoutProps {
  Content: ComponentType<{ components: MDXComponents }>;
}

const components: MDXComponents = {
  h1: (props: MDXComponProps) => <h1 style={{ color: "blue" }} {...props} />,
};

export default function NoteLayout({ Content }: NoteLayoutProps): ReactElement {
  return <Content components={components} />;
}
