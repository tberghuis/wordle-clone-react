import create from "zustand";

const wordList = new Array(6).fill("");

export const useStore = create((set) => ({
  wordList: wordList,
  cursorRow: 0,

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

      const cursorRow = state.cursorRow + 1;

      return { cursorRow: cursorRow };
    }),
}));
