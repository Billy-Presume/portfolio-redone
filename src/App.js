import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/Layout.component.jsx";
import "./App.scss";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
