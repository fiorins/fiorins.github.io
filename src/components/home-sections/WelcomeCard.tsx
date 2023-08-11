import {
  Heading,
  Text,
  Card,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "../styles/WelcomeCard.css";
import profile_pic from "../../assets/profile_picture1.jpg";
// import profile_pic from "../../assets/profile_picture2.png";

export const WelcomeCard = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      alignItems="center"
      p="8"
      rounded="2xl"
      bg={useColorModeValue("#C3B1E1", "#702963")}
    >
      <Stack spacing="3">
        <Heading size="md" fontFamily="heading">
          HEY THERE! 👋
        </Heading>
        <Text py="2" as="span" fontFamily="mono">
          I'm Davide, a software developer based in Italy. I've been building
          and developing stuff on the web for personal and business projects.
          <br />
          I'm always open to new opportunities and challenges. I strongly
          believe in open source culture and outside of programming I love
          <br />
          <Typewriter
            options={{
              strings: [
                "playing chess.",
                "listening to music.",
                "to play football.",
                "riding a bike.",
                "reading comics.",
                "walking through nature.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
      </Stack>
      <Image
        id="myFace"
        borderRadius="full"
        p="2"
        ml="8"
        bg={useColorModeValue("#702963", "#C3B1E1")}
        boxSize="150px"
        src={profile_pic}
        alt="Davide Fiorini"
      />
    </Card>
  );
};
