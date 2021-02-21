import React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import theme from "./theme";

const App: React.FunctionComponent = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRoute></MainRoute>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default hot(module)(App);
