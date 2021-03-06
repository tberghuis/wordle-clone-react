import toast from "react-hot-toast";
import { useWordleStore, freshState } from "./wordleStore";
import { VALID_WORDS } from "./const/valid_words";

export function addLetter(letter) {
  const { wordList, cursorRow } = useWordleStore.getState();
  console.log("addLetter", wordList);
  console.log("addLetter", cursorRow);

  const word = wordList[cursorRow];

  if (word.length === 5) {
    return;
  }

  wordList[cursorRow] = `${wordList[cursorRow]}${letter}`;

  useWordleStore.setState({ wordList: [...wordList] });
}

export function removeLetter() {
  console.log("removeLetter");

  const { wordList, cursorRow } = useWordleStore.getState();
  const word = wordList[cursorRow];

  if (word.length === 0) {
    return;
  }

  wordList[cursorRow] = word.slice(0, -1);
  useWordleStore.setState({ wordList: [...wordList] });
}

export function onKeyUpEnter() {
  console.log("onKeyUpEnter");

  const { wordList, cursorRow, solution } = useWordleStore.getState();
  const word = wordList[cursorRow];

  // todo finish implementing this function
  // copy from wordleclone kotlin

  if (word.length !== 5) {
    return;
  }

  if (!VALID_WORDS.includes(word)) {
    toast("Not in word list");
    return;
  }

  // check if won
  if (word === solution) {
    toast("Winner");

    useWordleStore.setState({ cursorRow: cursorRow + 1, gameState: "WON" });
    return;
  }

  // check if lost
  if (cursorRow === 5) {
    toast("Loser");
    useWordleStore.setState({ cursorRow: cursorRow + 1, gameState: "LOST" });
    return;
  }

  useWordleStore.setState({ cursorRow: cursorRow + 1 });
}

export function newGame() {
  useWordleStore.setState(freshState());
}
