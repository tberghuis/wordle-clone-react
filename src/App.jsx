import { useState } from "react";
import logo from "./logo.svg";
// import "./App.css";
import { useStore } from "./store";

import KeyboardIntercept from "./KeyboardIntercept";
import RenderRow from "./components/RenderRow";

// need better naming

// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation);
//   return <button onClick={increasePopulation}>one up</button>;
// }

function App() {
  const wordList = useStore((state) => state.wordList);

  return (
    <div>
      {/* <RenderRow word="TOMMY"></RenderRow>
      <RenderRow word="TOM"></RenderRow>
      <RenderRow word=""></RenderRow> */}

      {wordList.map((word) => (
        <RenderRow word={word}></RenderRow>
      ))}

      <KeyboardIntercept></KeyboardIntercept>
    </div>
  );
}

export default App;
