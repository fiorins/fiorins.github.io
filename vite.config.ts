/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

// https://vitejs.dev/config/
// https://mdxjs.com/docs/getting-started/#vite
export default defineConfig({
  plugins: [
    mdx({
      //remarkPlugins: [remarkFrontmatter],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      //remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, {name: 'matter'}]]
    }),
    //mdx(),
    react(),
  ],
  base: "/",
});
