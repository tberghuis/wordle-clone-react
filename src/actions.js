import { useWordleStore } from "./wordleStore";

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
