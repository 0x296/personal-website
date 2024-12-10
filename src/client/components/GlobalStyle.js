// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Jost';
    src: url('/fonts/jost/Jost-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Jost';
    src: url('/fonts/jost/Jost-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #e0e0e0;
  }

  h1, h2, h3 {
    font-family: 'Jost', sans-serif; /* Use Jost for titles */
    font-weight: 700;
  }
`;


