import { useEffect } from "react";
import { useStore } from "./store";

function KeyboardIntercept() {
  useEffect(() => {
    console.log("KeyboardIntercept effect ran");
  }, []);

  return null;
}

export default KeyboardIntercept;
