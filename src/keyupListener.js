import { addLetter, removeLetter, onKeyUpEnter } from "./actions";
import { useWordleStore } from "./wordleStore";

const eventHandler = (event) => {
  console.log("event", event);

  const { gameState } = useWordleStore.getState();
  if (gameState !== "PLAYING") {
    return;
  }

  // a = 65
  // z = 90
  // TODO how to do this is keyCode is deprecated....
  // is there a lib to convert key to keyCode?
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log("letter", event.key.toUpperCase());
    addLetter(event.key.toUpperCase());

    return;
  }

  if (event.code === "Backspace") {
    removeLetter();
    return;
  }

  if (event.code === "Enter") {

    onKeyUpEnter();
    return;
  }
};

document.addEventListener("keyup", eventHandler);
