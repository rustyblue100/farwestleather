import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
  }

  a{
    :hover{
      text-decoration:underline
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Georgia;
    line-height: 20px;
    color:#404040;
  }


.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;

const theme = {
  colors: {
    primary: "#0070f3",
    themeDark: "#010101",
    themeLight: "#fffffc",
    themePrimary: "#b7990d",
    themeSecondary: "#8cada7",
    themeTertiary: "#8cada7",
    themeGray100: "#ebe5e5",
    themeGray500: "#9d9d9d",
    themeGray700: "#606060",
    themeGray900: "#242424",
    themeBody: "#404040",
  },

  primaryHover: "#343078",

  media: {
    mobile: "576px",
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "769px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },

  transitionDuration: "0.4s",
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
