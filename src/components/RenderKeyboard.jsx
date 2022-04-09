import clsx from "clsx";

// doitwrong
export default function RenderKeyboard() {
  const row1 = "QWERTYUIOP".split("");
  const row2 = "ASDFGHJKL".split("");
  const row3 = "ZXCVBNM".split("");

  const rowStyle = "flex flex-row justify-center";
  const keyStyle =
    "flex flex-col justify-center border m-1 w-10 h-16 text-center ";

  return (
    <div>
      <div className={rowStyle}>
        {row1.map((k, i) => (
          <div key={i} className={keyStyle}>
            <p>{k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
