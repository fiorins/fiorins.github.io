import React from "react";

export interface MDXcomponents {
  [key: string]: React.FC<MDXprops>;
}
// export interface MDXcomponents<T = Record<string, React.FC>> {
//   [key: string]: React.FC<MDXprops> | T[keyof T];
// }
// export interface MDXcomponents {
//   h1: React.FC<MDXprops>;
// }
interface MDXprops {
  style?: React.CSSProperties;
}
interface NoteLayoutProps {
  //Content: React.ComponentType<>;
  //Content: React.ReactNode;
  //Content: React.ReactElement;
  Content: React.ComponentType<{ components: MDXcomponents }>;
}

const components: MDXcomponents = {
  h1: (props: MDXprops) => <h1 style={{ color: "blue" }} {...props} />,
};

export default function NoteLayout({ Content }: NoteLayoutProps): React.ReactElement {
  return <Content components={components} />;
}
