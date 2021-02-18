import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

const HelloWorld: React.FunctionComponent = () => {
  return <div>Hello wrorld</div>;
};
const App = hot(module)(HelloWorld);

ReactDOM.render(<App />, document.getElementById("root"));
