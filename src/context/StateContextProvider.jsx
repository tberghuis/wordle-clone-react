import { createContext, useState } from "react";
import { TOP_WORDS } from "../const/top_words";
import { VALID_WORDS } from "../const/valid_words";
import toast from "react-hot-toast";

export const StateContext = createContext();

const StateContextProvider = (props) => {
  const [wordList, setWordList] = useState(newWordList());
  const [cursorRow, setCursorRow] = useState(0);
  const [solution, setSolution] = useState(randomWord());

  const addLetter = (letter) => {
    const word = wordList[cursorRow];
    if (word.length === 5) {
      return;
    }

    const newWordList = [...wordList];

    newWordList[cursorRow] = `${word}${letter}`;
    setWordList(newWordList);
  };

  const removeLetter = () => {
    const word = wordList[cursorRow];
    if (word.length === 0) {
      return;
    }
    wordList[cursorRow] = word.slice(0, -1);
    setWordList([...wordList]);
  };

  const onKeyUpEnter = () => {
    const word = wordList[cursorRow];

    // todo finish implementing this function

    if (word.length !== 5) {
      return;
    }
    if (!VALID_WORDS.includes(word)) {
      toast("Not in word list");
      return;
    }
    setCursorRow((cr) => cr + 1);
  };

  const newGame = () => {
    setWordList([...newWordList()]);
    setCursorRow(0);
    setSolution(randomWord());
  };

  return (
    <StateContext.Provider
      value={{
        state: { wordList, cursorRow, solution },
        addLetter: addLetter,
        removeLetter: removeLetter,
        onKeyUpEnter: onKeyUpEnter,
        newGame: newGame,
        setCursorRow: setCursorRow,
      }}
    >
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
