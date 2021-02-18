import template from "../template";
import path from "path";
import devBundle from "./devBundle";
const CURRENT_WORKING_DIR = process.cwd();
const express = require("express");

const app = express();
devBundle.compile(app);
const port = 3000;

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
app.get("/", (req, res) => {
  res.send(template());
});

app.listen(port, () => {
  console.log("Server running at 3000");
});

