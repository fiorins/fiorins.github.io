/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, CSSProperties } from "react";

type MDXProps = {
  style?: CSSProperties;
};
const components: Record<string, React.ComponentType<any>> = {
  h1: (props: MDXProps) => <h1 style={{ color: "blue" }} {...props} />,
};

interface PageProps {
  Content: React.ComponentType<any>;
}

const Page: React.FC<PageProps> = ({ Content }) => {
  return <Content components={components} />;
};

export default Page;
