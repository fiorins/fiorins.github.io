import type { MDXComponents, MDXContent } from "mdx/types";

export interface Frontmatter {
  title: string;
  shortTitle: string;
}
export interface Content {
  components?: MDXComponents;
}

export interface Note {
  frontmatter: Frontmatter;
  content: MDXContent;
}

export interface AllNotesType {
  [slug: string]: Note;
}
