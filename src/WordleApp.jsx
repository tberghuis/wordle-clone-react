import RenderRow from "./components/RenderRow";
import { useWordleStore } from "./wordleStore";
import { Toaster } from "react-hot-toast";
import { newGame } from "./actions";

export default function WordleApp() {
  const wordList = useWordleStore((state) => state.wordList);

  return (
    <div>
      {wordList.map((word, i) => (
        <RenderRow key={i} word={word} row={i}></RenderRow>
      ))}

      <Toaster />

      <NewGameTest></NewGameTest>
    </div>
  );
}

function NewGameTest() {
  const buttonclick = () => {
    console.log("newGame");
    newGame();
  };

  return (
    <div>
      <button onClick={buttonclick}>new game</button>
    </div>
  );
}
