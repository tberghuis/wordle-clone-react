import clsx from "clsx";

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
      <div key={i} className={keyStyle}>
        <p>{k}</p>
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
          }}
        >
          ENTER
        </div>

        {renderKeyRow(row3)}

        <div className={clsx(keyStyle, "w-24")}>BACKSPACE</div>
      </div>
    </div>
  );
}
