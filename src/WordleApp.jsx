import RenderRow from "./components/RenderRow";
import { useWordleStore } from "./wordleStore";

export default function WordleApp() {
  const wordList = useWordleStore((state) => state.wordList);

  return (
    <div>
      {wordList.map((word, i) => (
        <RenderRow key={i} word={word} row={i}></RenderRow>
      ))}
    </div>
  );
}
