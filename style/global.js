import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DinAlternate;
    src: url('/static/fonts/din_alternate_medium.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: DinAlternate;
    src: url('/static/fonts/din_alternate_bold.otf');
    font-weight: 700;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
