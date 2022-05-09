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
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default App;
