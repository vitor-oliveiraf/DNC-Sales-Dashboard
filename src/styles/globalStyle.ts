import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme?.appBackground};
    color: ${(props) => props.theme?.appColor};
    font-family: "Inter", sans-serif;
  }

  h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
  }

`;
