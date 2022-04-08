import { useState } from "react";
import logo from "./logo.svg";
// import "./App.css";

import { useStore } from "./store";

import KeyboardIntercept from "./KeyboardIntercept";

// need better naming
function RenderRow() {
  const word = useStore((state) => state.word);
  return <h1>{word}</h1>;
}

// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation);
//   return <button onClick={increasePopulation}>one up</button>;
// }

function App() {
  return (
    <div>
      hello world
      <div className="btn-blue">test foo</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <RenderRow></RenderRow>
      <KeyboardIntercept></KeyboardIntercept>
    </div>
  );
}

export default App;
