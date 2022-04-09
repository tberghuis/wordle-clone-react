import RenderRow from "./components/RenderRow";
import RenderKeyboard from "./components/RenderKeyboard";
import { useWordleStore } from "./wordleStore";
import { Toaster } from "react-hot-toast";
import { newGame } from "./actions";

export default function WordleApp() {
  const wordList = useWordleStore((state) => state.wordList);
  const gameState = useWordleStore((state) => state.gameState);
  const solution = useWordleStore((state) => state.solution);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[120px] mx-auto text-center justify-end space-y-3 m-3">
        {gameState !== "PLAYING" && <NewGameButton></NewGameButton>}
        {gameState === "LOST" && <div>{solution}</div>}
      </div>

      {/* <ShowGameState></ShowGameState> */}
      {wordList.map((word, i) => (
        <RenderRow key={i} word={word} row={i}></RenderRow>
      ))}

      <RenderKeyboard></RenderKeyboard>
      <Toaster
        toastOptions={{
          style: {
            marginTop: "300px",
            backgroundColor: "#a5f3fc",
          },
        }}
      />
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
