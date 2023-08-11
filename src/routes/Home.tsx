import { WelcomeCard } from "../components/home-sections/WelcomeCard";
import { Spaces } from "../components/home-sections/Spaces";
import { Notes } from "../components/home-sections/Notes";

export default function Home() {
  return (
    <>
      <WelcomeCard />
      <Spaces />
      <Notes />
    </>
  );
}
