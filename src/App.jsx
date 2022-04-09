import { useContext } from "react";
import KeyboardIntercept from "./KeyboardIntercept";
import RenderRow from "./components/RenderRow";
import SnackbarDemo from "./tmp/SnackbarDemo";
import NewGame from "./tmp/NewGame";
import ContextDemo from "./tmp/ContextDemo";
import StateContextProvider, {
  StateContext,
} from "./context/StateContextProvider";

function App() {
  // const wordList = useStore((state) => state.wordList);

  return (
    <StateContextProvider>
      <Content></Content>
    </StateContextProvider>
  );
}

export default App;

function Content() {
  const { state } = useContext(StateContext);
  const wordList = state.wordList;

  return (
    <div>
      {wordList.map((word, i) => (
        <RenderRow key={i} word={word} row={i}></RenderRow>
      ))}
      <KeyboardIntercept></KeyboardIntercept>

      <SnackbarDemo></SnackbarDemo>
      <NewGame></NewGame>
      <ContextDemo></ContextDemo>
    </div>
  );
}
