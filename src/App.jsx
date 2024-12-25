import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  // let counter = 15;

  const addValue = () => {
    setCounter(counter + 1);
    if (counter > 19) {
      return setCounter(counter - 10)
    }
  };
const RemoveValue = ()=>{
 setCounter(counter - 1)
 if (counter < 1) {
  return setCounter(counter + 10)
}
}

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: 10</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={RemoveValue}
      >Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
