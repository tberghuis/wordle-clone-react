import { useStore } from "../store";

// function RenderRow() {
//   const word = useStore((state) => state.word);
//   return <h1>{word}</h1>;
// }

function RenderRow() {
  const word = "TOMMY";
  return <div>{word}</div>;
}

export default RenderRow;
