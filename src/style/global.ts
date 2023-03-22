import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    /* Colors */
    --color-primary: #50769a;
    --color-text-primary: #212121;
    --color-text-subtle: #58667e;
    --color-text-muted: #999;
    --color-border-primary: #bbb;
    --color-border-subtle: #d4d4d4;
    --color-background-muted: #f5f5f5;
    /* Fonts */
    --font-family-base: 'Lato', sans-serif;
    --font-weight-regular: 400;
    --font-weight-bold: 700;
    --font-weight-black: 900;
    /* Screens Sizes */
    --screen-xs: 480px;
    --screen-sm: 768px;
    --screen-md: 992px;
    --screen-lg: 1200px;
    --screen-xl: 1600px;
  }

  body {
    color: var(--color-text-primary);
    font-family: var(--font-family-base);
    font-size: 16px;
    line-height: 1.5;
    margin: 0 auto;
    min-height: 100vh;
    max-width: var(--screen-lg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
