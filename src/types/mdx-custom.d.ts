declare module "*.mdx" {
  import { Frontmatter } from "my-frontmatter-types";

  export const frontmatter: Frontmatter;
  export const title: string;
}
