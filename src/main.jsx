import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App'
import WordleApp from "./WordleApp";

import "./keyupListener";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <WordleApp></WordleApp>
  </React.StrictMode>,
  document.getElementById("root")
);
