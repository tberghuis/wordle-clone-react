export default function ContextDemo() {
  const buttonclick = () => {
    console.log("button click");
  };

  return (
    <div>
      <button onClick={buttonclick}>context demo</button>
    </div>
  );
}
