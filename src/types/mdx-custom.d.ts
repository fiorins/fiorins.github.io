declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;

  import { Frontmatter } from "my-frontmatter-types";
  export const frontmatter: Frontmatter;
  export const title: string;
}
