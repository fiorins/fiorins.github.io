import {
  Heading,
  Text,
  Card,
  Stack,
  Image,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "../styles/Welcome.css";
import profile_pic from "../../assets/profile_picture1.jpg";
// import profile_pic from "../../assets/profile_picture2.png";

export const Welcome = () => {
  const theme = useTheme();
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      p={8}
      rounded="2xl"
      bg={useColorModeValue(theme.colors.light, theme.colors.dark)}
      gap={{ base: 8, md: 6 }}
    >
      <Stack spacing="3">
        <Heading size="md" fontFamily="heading">
          HEY THERE! 👋
        </Heading>
        <Text py="2" as="span" fontFamily="mono">
          It's Dave here, a software developer based in Italy. I build stuff on
          the web for personal and business projects.
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
                "walking into nature.",
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
        bg={useColorModeValue(theme.colors.dark, theme.colors.light)}
        boxSize="150px"
        src={profile_pic}
        alt="Davide Fiorini"
      />
    </Card>
  );
};
