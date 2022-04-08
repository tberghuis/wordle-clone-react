export default function RenderCell({ char }) {
  const backgroundColor = calcBackgroundColor(char, 0, 0, -1, "HELLO");

  // console.log("backgroundColor", backgroundColor);

  // use lib classnames or clsx... ???
  const className = `border p-5 m-1 w-16 h-16 text-center ${backgroundColor}`;

  return <div className={className}>{char}</div>;
}

function calcBackgroundColor(char, row, col, cursorRow, solution) {
  return "bg-indigo-500";
}
