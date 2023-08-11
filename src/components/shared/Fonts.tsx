import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Quincy CF Regular";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url('../../assets/fonts/Quincy-CF-Regular.woff2') format('woff2'), url('./assets/fonts/Quincy-CF-Regular.woff') format('woff');
        unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F, U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B;
      }
      @font-face {
        font-family: "Quincy CF Light";
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('../../assets/fonts/Quincy-CF-Light.woff2') format('woff2'), url('./assets/fonts/Quincy-CF-Light.woff') format('woff');
        unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F, U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B; 
      }   
      @font-face {
        font-family: "Quincy CF Bold";
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('../../assets/fonts/Quincy-CF-Bold.woff2') format('woff2'), url('./assets/fonts/Quincy-CF-Bold.woff') format('woff');
        unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F, U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B;
      }
    `}
  />
);
