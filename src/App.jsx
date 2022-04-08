import { useState } from "react";
import logo from "./logo.svg";
// import "./App.css";



import KeyboardIntercept from "./KeyboardIntercept";
import RenderRow from "./components/RenderRow";

// need better naming


// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation);
//   return <button onClick={increasePopulation}>one up</button>;
// }

function App() {
  return (
    <div>
      hello world
      <div className="btn-blue">test foo</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <RenderRow word="TOMMY"></RenderRow>
      <RenderRow word="TOM"></RenderRow>
      <RenderRow word=""></RenderRow>
      
      <KeyboardIntercept></KeyboardIntercept>
    </div>
  );
}

export default App;
