import { extendTheme, theme as base } from "@chakra-ui/react";
import "@fontsource/righteous";
import "@fontsource/montserrat";
import "@fontsource/source-code-pro";

const theme = extendTheme({
  fonts: {
    heading: `'Righteous', ${base.fonts?.heading}, cursive`,
    body: `'Montserrat', ${base.fonts?.body}, sans-serif`,
    mono: `'Source Code Pro', ${base.fonts?.body}, monospace`,
    subHeading1: `'Quincy CF Regular', ${base.fonts?.heading}, sans-serif`,
    subHeading2: `'Quincy CF Light', ${base.fonts?.heading}, sans-serif`,
    subHeading3: `'Quincy CF Bold', ${base.fonts?.body}, sans-serif`,
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
});

export default theme;
