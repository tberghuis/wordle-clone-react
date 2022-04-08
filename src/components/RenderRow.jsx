import { useStore } from "../store";
import RenderCell from "./RenderCell";

// function RenderRow() {
//   const word = useStore((state) => state.word);
//   return <h1>{word}</h1>;
// }

function RenderRow() {
  const word = "TOMMY";
  return (
    <div className="flex flex-row">
      <RenderCell char="1"></RenderCell>
      <RenderCell char="2"></RenderCell>
      <RenderCell char="3"></RenderCell>
    </div>
  );
}

export default RenderRow;
