import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// const App = () => <div>I'm componentA</div>;
ReactDOM.render(
  <App name="componentA" />, // 上文的 element，即虚拟 dom
  document.getElementById("root")
);
