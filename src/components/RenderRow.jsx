import RenderCell from "./RenderCell";

function RenderRow({ word, row }) {
  const wordArr = new Array(5).fill(null);
  word.split("").map((char, i) => {
    wordArr[i] = char;
  });

  return (
    <div className="flex flex-row place-content-center">
      {wordArr.map((char, i) => (
        <RenderCell key={i} char={char} row={row} col={i}></RenderCell>
      ))}
    </div>
  );
}

export default RenderRow;
