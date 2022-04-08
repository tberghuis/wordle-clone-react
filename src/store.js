import create from "zustand";

export const useStore = create((set) => ({
  word: "",

  addLetter: (letter) =>
    set((state) => {
      if (state.word.length === 5) {
        return;
      }

      return { word: `${state.word}${letter}` };
    }),

  removeLetter: () =>
    set((state) => {
      return { word: `removeLetter todo` };
    }),
}));
