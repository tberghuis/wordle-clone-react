import create from "zustand";
import toast from "react-hot-toast";
import { VALID_WORDS } from "./const/valid_words";

const wordList = new Array(6).fill("");

export const useStore = create((set) => ({
  wordList: wordList,
  cursorRow: 0,
  // todo random top_words
  solution: "HELLO",

  addLetter: (letter) =>
    set((state) => {
      const word = state.wordList[state.cursorRow];

      if (word.length === 5) {
        return;
      }

      const wordList = [...state.wordList];

      wordList[state.cursorRow] = `${wordList[state.cursorRow]}${letter}`;

      return { wordList: wordList };
    }),

  removeLetter: () =>
    set((state) => {
      const word = state.wordList[state.cursorRow];
      if (word.length === 0) {
        return;
      }
      const wordList = [...state.wordList];
      wordList[state.cursorRow] = word.slice(0, -1);

      return { wordList: wordList };
    }),

  onKeyUpEnter: () =>
    set((state) => {
      console.log("onKeyUpEnter");

      // todo finish implementing this function

      const word = state.wordList[state.cursorRow];
      if (word.length !== 5) {
        return;
      }

      if (!VALID_WORDS.includes(word)) {
        toast("Not in word list");
        return;
      }

      const cursorRow = state.cursorRow + 1;

      return { cursorRow: cursorRow };
    }),
}));
