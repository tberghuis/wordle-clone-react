// import { useState } from "react";
// import logo from "./logo.svg";
import { useStore } from "./store";
import KeyboardIntercept from "./KeyboardIntercept";
import RenderRow from "./components/RenderRow";
import SnackbarDemo from "./tmp/SnackbarDemo";

function App() {
  const wordList = useStore((state) => state.wordList);

  return (
    <div>
      {wordList.map((word, i) => (
        <RenderRow key={i} word={word} row={i}></RenderRow>
      ))}
      <KeyboardIntercept></KeyboardIntercept>

      <SnackbarDemo></SnackbarDemo>
    </div>
  );
}

export default App;
