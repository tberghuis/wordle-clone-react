import { createContext, useState } from "react";
import { TOP_WORDS } from "../const/top_words";

export const StateContext = createContext();

const StateContextProvider = (props) => {

  const [wordList, setWordList] = useState(newWordList());
  const [cursorRow, setCursorRow] = useState(0);
  const [solution, setSolution] = useState(randomWord());

  return (
    <StateContext.Provider value={{ state: { wordList, cursorRow, solution } }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;

function randomWord() {
  return TOP_WORDS[Math.floor(Math.random() * TOP_WORDS.length)];
}

function newWordList() {
  return new Array(6).fill("");
}
