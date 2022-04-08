import { useEffect } from "react";
import { useStore } from "./store";

function KeyboardIntercept() {
  const addLetter = useStore((state) => state.addLetter);
  const removeLetter = useStore((state) => state.removeLetter);

  useEffect(() => {
    console.log("KeyboardIntercept effect ran");

    const eventHandler = (event) => {
      console.log("event", event);
      // a = 65
      // z = 90
      // TODO how to do this is keyCode is deprecated....
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log("letter", event.key.toUpperCase());
        addLetter(event.key.toUpperCase());
        return;
      }

      if (event.code === "Backspace") {
        removeLetter();
      }
    };

    document.addEventListener("keyup", eventHandler);

    return () => {
      document.removeEventListener("keyup", eventHandler);
    };
  }, []);

  return null;
}

export default KeyboardIntercept;
