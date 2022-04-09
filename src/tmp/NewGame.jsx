export default function NewGame() {
  const newGame = () => {
    console.log("newGame");
  };

  return (
    <div>
      <button onClick={newGame}>new game</button>
    </div>
  );
}
