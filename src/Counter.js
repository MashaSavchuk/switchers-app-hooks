import { useState } from "react";
import "./Counter.css";

// function App() {
const Counter = () => {
  // const arr = useState();
  // console.log(arr);
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  const descrementCount = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <h2>You clicked {count} times</h2>
        {/* <button onClick={() => setCount((prevState) => prevState + 1)}> */}
        <button onClick={incrementCount}>+</button>
        {/* <button onClick={() => setCount((prevState) => prevState - 1)}> */}
        <button onClick={descrementCount}>-</button>
      </div>
    </div>
  );
};

export default Counter;
