import React from 'react';
import { Context1 } from './context';
import Counter1 from './Counter1';
import './App.css'

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

const handleReset = () => {
    setCounter(0)
}
  return (
    <div className="App">
      <h3> App Component </h3>
      Initial Value : {counter} <br /> <br />
      <button onClick={() => handleIncrement()}> Increment </button> &nbsp;
      <button onClick={() => handleDecrement()}> Decrement </button> &nbsp;
      <button onClick={() => handleReset()}> Reset </button>
      <Context1.Provider
        value={{
          initialValue: counter,
          handleIncrement: handleIncrement,
          handleDecrement: handleDecrement,
          handleReset: handleReset
        }}
      >
        <Counter1 />
      </Context1.Provider>
    </div>
  );
}

// // Context API

// Component A  => Provider => Val=5, sum=10
//   Component B  => Consumer
//   Component C  => Consumer => sum=10
//   Component D  => Consumer => val=5

// // Props Drilling

// Component A => val 5 =>
//   Component B => val 5 =>
//     Component C => val 5 =>
//       Component D  => val 5
