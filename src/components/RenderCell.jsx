import { useStore } from "../store";

export default function RenderCell({ char, row, col }) {
  const cursorRow = useStore((state) => state.cursorRow);

  const backgroundColor = calcCellStyle(char, row, col, cursorRow, "HELLO");

  // console.log("backgroundColor", backgroundColor);

  // use lib classnames or clsx... ???
  const className = `border p-5 m-1 w-16 h-16 text-center ${backgroundColor}`;

  return <div className={className}>{char}</div>;
}

function calcCellStyle(char, row, col, cursorRow, solution) {
  if (row === cursorRow) {
    return "bg-yellow-500";
  }

  if (row === 0) {
    return "bg-sky-500";
  }

  if (col === 1) {
    return "bg-red-500";
  }

  return "bg-indigo-500";
}
