import TestNote1, { frontmatter as fm1 } from "./test-note-1.mdx";
import TestNote, { frontmatter as fm } from "./test-note.mdx";
import PerfectLatte, { frontmatter as fmpl } from "./perfect-latte.mdx";
import { AllNotesType } from "../../types/note";

const AllNotes: AllNotesType = {
  "test-note-1": {
    frontmatter: fm1,
    content: TestNote1,
  },
  "how-i-built-my-website": {
    frontmatter: fm,
    content: TestNote,
  },
  "perfect-latte": {
    frontmatter: fmpl,
    content: PerfectLatte,
  },
};

export default AllNotes;
