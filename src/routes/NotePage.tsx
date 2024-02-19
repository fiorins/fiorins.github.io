import {
  useLoaderData,
  LoaderFunction,
  LoaderFunctionArgs,
} from "react-router-dom";
import AllNotes from "../assets/notes";
import { Heading, Box } from "@chakra-ui/react";
import { Note } from "../types/note";
import type { MDXComponents } from "mdx/types";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const params_slug: string | undefined = params.slug;
  if (params_slug) {
    const note: Note = AllNotes[params_slug];
    return note;
  }
  if (!params_slug || !(params_slug in AllNotes))
    throw new Response("", { status: 404 });
  return null;
};

const components: MDXComponents = {
  h1: (props) => <h1 style={{ color: "blue" }} {...props} />,
  h2: (props) => <Heading size="xl">{props.children}</Heading>,
  h3: (props) => (
    <Heading fontFamily="subHeading1" size="lg">
      {props.children}
    </Heading>
  ),
};

export default function NotePage() {
  const note: Note = useLoaderData() as Note;

  const frontmatter = note?.frontmatter;
  const DynamicNote = note?.content;

  return (
    <>
      <Box px={8} bg={"red"}>
        {frontmatter.shortTitle}
        <br />
        <DynamicNote components={components} />
      </Box>
    </>
  );
}
