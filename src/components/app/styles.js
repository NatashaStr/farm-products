import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  font-style: normal;
  font-weight: 400;
  font-family: "Inter", "Arial", sans-serif;
}

body,
html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

body {
  position: relative;
  font-size: 18px;
  line-height: 150%;
  color: #333333;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
`;
