import { useStore } from "../store";
import RenderCell from "./RenderCell";

// function RenderRow() {
//   const word = useStore((state) => state.word);
//   return <h1>{word}</h1>;
// }

function RenderRow({ word }) {
  // const word = "TOMMY";

  const wordArr = new Array(5).fill(null);
  word.split("").map((char, i) => {
    wordArr[i] = char;
  });

  return (
    <div className="flex flex-row place-content-center">
      {wordArr.map((char, i) => (
        <RenderCell key={i} char={char}></RenderCell>
      ))}
    </div>
  );
}

export default RenderRow;
