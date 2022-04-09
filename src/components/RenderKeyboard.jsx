// doitwrong
export default function RenderKeyboard() {
  const row1 = "QWERTYUIOP".split("");
  const row2 = "ASDFGHJKL".split("");
  const row3 = "ZXCVBNM".split("");

  return (
    <div>
      <div className="flex flex-row">
        {row1.map((k, i) => (
          <div key={i}>{k}</div>
        ))}
      </div>
    </div>
  );
}
