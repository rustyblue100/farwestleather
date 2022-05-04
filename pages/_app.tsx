import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const GlobalStyle = createGlobalStyle`

  :root {
    --theme-black: #010101;
    --theme-white: #fffffc;
    --theme-gray-500:#9d9d9d;
    --theme-gray-700:#ffffff4d;
    --theme-primary: #b7990d;
    --theme-secondary: #b7990d;
    --theme-third: #8cada7;

  }


  * {
  box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Georgia;
    line-height: 20px;
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
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>{" "}
    </Layout>
  );
}

export default App;
