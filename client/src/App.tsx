import React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainRoute></MainRoute>
      </ThemeProvider>
    </BrowserRouter>
  );
};
