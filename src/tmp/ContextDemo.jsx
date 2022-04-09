import { useContext } from "react";
import { StateContext } from "../context/StateContextProvider";

export default function ContextDemo() {
  return <Content></Content>;
}

// doitwrong
function Content() {
  const { newGame, setCursorRow } = useContext(StateContext);

  const buttonclick = () => {
    console.log("new game");
    newGame();
  };

  const incCursor = () => {
    setCursorRow((c) => c + 1);
  };

  return (
    <div>
      <div>
        <button onClick={buttonclick}>NEW GAME context demo</button>
        <button onClick={incCursor}>incCursor</button>
      </div>
    </div>
  );
}
