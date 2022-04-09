import { useEffect, useRef } from "react";
import { useStore } from "./store"; // to remove
import { useContext } from "react";
import { StateContext } from "./context/StateContextProvider";

function KeyboardIntercept() {
  // const addLetter = useStore((state) => state.addLetter);
  // const removeLetter = useStore((state) => state.removeLetter);
  // const onKeyUpEnter = useStore((state) => state.onKeyUpEnter);

  const { addLetter, removeLetter, onKeyUpEnter } = useContext(StateContext);

  const handler = (event) => {
    console.log("event", event);
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

  useEventListener("keyup", handler);

  return null;
}

export default KeyboardIntercept;

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
