import clsx from "clsx";
import { onKeyUpEnter, addLetter, removeLetter } from "../actions";
import { useWordleStore } from "../wordleStore";

// doitwrong
export default function RenderKeyboard() {
  const row1 = "QWERTYUIOP".split("");
  const row2 = "ASDFGHJKL".split("");
  const row3 = "ZXCVBNM".split("");

  const rowStyle = "flex flex-row justify-center";
  const keyStyle =
    "flex flex-col justify-center border m-1 w-10 h-16 text-center cursor-pointer";

  // do i need name RenderRow???
  const renderKeyRow = (row) => {
    return row.map((k, i) => (
      <div
        key={i}
        className={clsx(keyStyle, calcKeyBackgroundColor(k))}
        onClick={() => {
          addLetter(k);
        }}
      >
        <span>{k}</span>
      </div>
    ));
  };

  return (
    <div>
      <div className={rowStyle}>{renderKeyRow(row1)}</div>
      <div className={rowStyle}>{renderKeyRow(row2)}</div>
      <div className={rowStyle}>
        <div
          className={clsx(keyStyle, "w-24")}
          onClick={() => {
            console.log("enter");
            onKeyUpEnter();
          }}
        >
          ENTER
        </div>

        {renderKeyRow(row3)}

        <div
          className={clsx(keyStyle, "w-24")}
          onClick={(e) => {
            // is there a better solution than this???
            // e.target.blur();
            removeLetter();
            console.log("backspace", e);
          }}
        >
          <span className="mx-auto">BACKSPACE</span>
        </div>
      </div>
    </div>
  );
}

function calcKeyBackgroundColor(k) {
  // const { wordList, cursorRow, solution } = useWordleStore.getState();

  const cursorRow = useWordleStore((state) => state.cursorRow);
  const wordList = useWordleStore((state) => state.wordList);
  const solution = useWordleStore((state) => state.solution);

  if (cursorRow === 0) {
    return "bg-gray-300";
  }

  // check direct position match
  for (let i = 0; i < cursorRow; i++) {
    for (let j = 0; j < 5; j++) {
      if (wordList[i].charAt(j) === k && k === solution.charAt(j)) {
        return "bg-green-500";
      }
    }
  }

  // check k in solution
  for (let i = 0; i < cursorRow; i++) {
    if (wordList[i].includes(k) && solution.includes(k)) {
      return "bg-yellow-500";
    }
  }

  // check k in wordList
  for (let i = 0; i < cursorRow; i++) {
    if (wordList[i].includes(k)) {
      return "bg-gray-500";
    }
  }

  return "bg-gray-300";
}
