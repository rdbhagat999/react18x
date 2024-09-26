import { useContext } from "react";
import "./App.css";
import { CounterContext, CounterContextType } from "./contexts/counterContext";

function App() {
  const { decrement, getCount, increment } = useContext(
    CounterContext
  ) as CounterContextType;

  return (
    <>
      <h1 className="text-3xl text-red-500 font-bold underline">
        {getCount()}
      </h1>
      <div className="card">
        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
