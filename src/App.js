import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./infrastructure/providers/theme.provider";
import { Theme } from "./infrastructure/design/themes.styles";
import { GlobalStyle } from "./infrastructure/design/global.styles";
import { SiteRoutes } from "./infrastructure/routes/routes";
import Layout from "./components/Layout.component.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const currentTheme = theme === "light" ? Theme.light : Theme.dark;
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <>
          <Layout>
            <SiteRoutes />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
