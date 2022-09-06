import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

  body {
      font-family: 'Nunito Sans', sans-serif;
      letter-spacing: 0.5px;
      background: ${({ theme }) => theme.body.background};
      color: ${({ theme }) => theme.ui.text.primary};
      transition: all 0.30s ease;

      scrollbar-width: none; // for firefox
      &::-webkit-scrollbar {
        display: none;
      }
    }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Playfair Display', serif;
// font-family: 'Poppins', sans-serif;
