import create from "zustand";
import { TOP_WORDS } from "./const/top_words";

export const freshState = () => ({
  wordList: new Array(6).fill(""),
  cursorRow: 0,
  solution: TOP_WORDS[Math.floor(Math.random() * TOP_WORDS.length)],
});

export const useWordleStore = create(() => freshState());
