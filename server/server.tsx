import path from "path";
import * as React from "react";
import MainRouter from "../client/src/MainRoute";
import { StaticRouter } from "react-router";
// import * as StaticRouter from "react-router";
import { renderToString } from "react-dom/server";
import theme from "../client/src/theme";
import template from "../template";
import devBundle from "./devBundle";
import { ThemeProvider, ServerStyleSheets } from "@material-ui/core/styles";

import express from "express";
const CURRENT_WORKING_DIR = process.cwd();

const app = express();
devBundle.compile(app);
const port = 3000;

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
app.get("*", (req, res) => {
  //SSR
  const sheets = new ServerStyleSheets();
  const markup = renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={{}}>
        <ThemeProvider theme={theme}>
          <MainRouter></MainRouter>
        </ThemeProvider>
      </StaticRouter>
    )
  );
  const css = sheets.toString();
  res.send(template({ markup, css }));
});

app.listen(port, () => {
  console.log("Server running at 3000");
});
