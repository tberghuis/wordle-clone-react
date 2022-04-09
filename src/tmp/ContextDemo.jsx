import { useContext } from "react";
import StateContextProvider, {
  StateContext,
} from "../context/StateContextProvider";

export default function ContextDemo() {
  return (
    <StateContextProvider>
      <Content></Content>
    </StateContextProvider>
  );
}

// doitwrong
function Content() {
  const { state, setCursorRow } = useContext(StateContext);

  const buttonclick = () => {
    console.log("button click");
    setCursorRow(5);
  };

  return (
    <div>
      <div>cursorRow {state.cursorRow}</div>
      <div>
        <button onClick={buttonclick}>context demo</button>
      </div>
    </div>
  );
}
