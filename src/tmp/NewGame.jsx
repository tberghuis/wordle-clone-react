import { useStore } from "../store";

export default function NewGame() {
  const newGame = useStore((state) => state.newGame);

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
