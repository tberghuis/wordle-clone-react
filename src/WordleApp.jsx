import RenderRow from "./components/RenderRow";
import RenderKeyboard from "./components/RenderKeyboard";
import { useWordleStore } from "./wordleStore";
import { Toaster } from "react-hot-toast";
import { newGame } from "./actions";

export default function WordleApp() {
  const wordList = useWordleStore((state) => state.wordList);

  return (
    <div className="flex flex-col">
      <NewGameButton></NewGameButton>
      <ShowGameState></ShowGameState>
      {wordList.map((word, i) => (
        <RenderRow key={i} word={word} row={i}></RenderRow>
      ))}

      <RenderKeyboard></RenderKeyboard>
      <Toaster />
    </div>
  );
}

function NewGameButton() {
  // const buttonclick = (e) => {
  //   console.log("e", e);

  //   // man this almost killed me
  //   // e.target.blur();

  //   console.log("newGame");
  //   newGame();
  // };

  return (
    <button
      type="button"
      className="text-white bg-blue-700 mx-auto p-3"
      onClick={() => {
        newGame();
      }}
    >
      <span>New Game</span>
    </button>
  );
}

function ShowGameState() {
  const gameState = useWordleStore((state) => state.gameState);
  return <div>game state {gameState}</div>;
}
