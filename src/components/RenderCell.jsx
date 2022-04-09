import { useWordleStore } from "../wordleStore";

export default function RenderCell({ char, row, col }) {
  const cellStyle = calcCellStyle(char, row, col);

  // use lib classnames or clsx... ???
  const className = `border p-5 m-1 w-16 h-16 text-center ${cellStyle}`;

  return <div className={className}>{char}</div>;
}

function calcCellStyle(char, row, col) {
  const cursorRow = useWordleStore((state) => state.cursorRow);
  const solution = useWordleStore((state) => state.solution);

  if (row >= cursorRow) {
    return "";
  }

  if (char === solution.charAt(col)) {
    return "bg-green-500";
  }

  if (solution.includes(char)) {
    return "bg-yellow-500";
  }

  return "bg-gray-500";
}
