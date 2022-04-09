import create from "zustand";
// import toast from "react-hot-toast";
// import { VALID_WORDS } from "./const/valid_words";
import { TOP_WORDS } from "./const/top_words";

export const freshState = {
  wordList: new Array(6).fill(""),
  cursorRow: 0,
  solution: TOP_WORDS[Math.floor(Math.random() * TOP_WORDS.length)],
};

export const useWordleStore = create((set) => ({
  ...freshState,
}));
