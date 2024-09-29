import { useReducer } from "react";
import { initialState, counterReducer } from "./reducers/counterReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <button
          className="py-2 px-4 rounded bg-blue-500 text-white text-2xl"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <h1 className="text-3xl min-w-48 text-red-500 font-bold underline">
          count is {state.count}
        </h1>
        <button
          className="py-2 px-4 rounded bg-blue-500 text-white text-2xl"
          onClick={() => dispatch({ type: "increment", payload: { value: 2 } })}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
