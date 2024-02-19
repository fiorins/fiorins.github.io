import TestNote1, { frontmatter as fm1 } from "./test-note-1.mdx";
import TestNote2, { frontmatter as fm2 } from "./test-note-2.mdx";
import TestNote3, { frontmatter as fm3 } from "./test-note-3.mdx";
import TestNoteOne, { frontmatter as fmOne } from "./test-note-one.mdx";
import TestNoteTwo, { frontmatter as fmTwo } from "./test-note-two.mdx";
import TestNoteX, { frontmatter as fmx } from "./test-note-x.mdx";
import TestNoteY, { frontmatter as fmy } from "./test-note-y.mdx";
import TestNote, { frontmatter as fm } from "./test-note.mdx";
import PerfectLatte, { frontmatter as fmpl } from "./perfect-latte.mdx";
import { AllNotesType } from "../../types/note";

const AllNotes: AllNotesType = {
  "test-note-1": {
    frontmatter: fm1,
    content: TestNote1,
  },
  "test-note-2": {
    frontmatter: fm2,
    content: TestNote2,
  },
  "test-note-3": {
    frontmatter: fm3,
    content: TestNote3,
  },
  "test-note-one": {
    frontmatter: fmOne,
    content: TestNoteOne,
  },
  "test-note-two": {
    frontmatter: fmTwo,
    content: TestNoteTwo,
  },
  "test-note-x": {
    frontmatter: fmx,
    content: TestNoteX,
  },
  "test-note-y": {
    frontmatter: fmy,
    content: TestNoteY,
  },
  "how-i-built-my-website": {
    frontmatter: fm,
    content: TestNote,
  },
  "perfect-latte": {
    frontmatter: fmpl,
    content: PerfectLatte,
  },
  "notes/perfect-latte": {
    frontmatter: fmpl,
    content: PerfectLatte,
  },
};

export default AllNotes;
