import { Welcome } from "../components/home-sections/Welcome";
import { Spaces } from "../components/home-sections/Spaces";
import { Notes } from "../components/home-sections/Notes";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Spaces />
      <Notes />
    </>
  );
}
