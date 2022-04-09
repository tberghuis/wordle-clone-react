import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WordleApp from "./WordleApp";

import "./keyupListener";

ReactDOM.render(
  <React.StrictMode>
    <WordleApp></WordleApp>
  </React.StrictMode>,
  document.getElementById("root")
);
