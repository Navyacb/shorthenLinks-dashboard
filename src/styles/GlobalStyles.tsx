import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 18px;
  }
  :root {
    --primary: hsl(180, 66%, 49%);
    --secondary : hsl(257, 27%, 26%);
    --tertiary : hsl(180deg 85.81% 72.25%);
  }
`; 

