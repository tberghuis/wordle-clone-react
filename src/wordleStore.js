import create from "zustand";
import { TOP_WORDS } from "./const/top_words";

// gameState
// PLAYING WON LOST

export const freshState = () => ({
  wordList: new Array(6).fill(""),
  cursorRow: 0,
  solution: TOP_WORDS[Math.floor(Math.random() * TOP_WORDS.length)],
  // solution: "VALID",
  gameState: "PLAYING",
});

export const useWordleStore = create(() => freshState());
