import { useCallback, useState } from "react";
import "./App.css";

const functionCounterSet = new Set();

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleCountIncrement = () => {
    setCount(count + 1);
    console.log("handleCountIncrement");
  };

  const handleCountDecrement = () => {
    setCount(count - 1);
    console.log("handleCountDecrement");
  };

  // const useCallbackHandleCountIncrement = useCallback(() => {
  //   setCount(count + 1);
  //   console.log("useCallbackHandleCountIncrement");
  // }, [count]);

  const useCallbackHandleCountIncrement = useCallback(handleCountIncrement, [
    count,
  ]);

  const useCallbackHandleCountDecrement = useCallback(handleCountDecrement, [
    count,
  ]);

  const handleCounterDecrement = () => {
    setCounter(counter - 1);
    console.log("handleCounterDecrement");
  };

  // const useCallbackHandleCounterDecrement = useCallback(() => {
  //   setCounter(counter - 1);
  //   console.log("useCallbackHandleCounterDecrement");
  // }, [counter]);

  const useCallbackHandleCounterDecrement = useCallback(
    handleCounterDecrement,
    [counter]
  );

  console.log("component rendered", count);

  functionCounterSet.add(useCallbackHandleCountIncrement);
  functionCounterSet.add(useCallbackHandleCountDecrement);
  functionCounterSet.add(useCallbackHandleCounterDecrement);

  console.log("functionCounterSet", functionCounterSet);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className=" flex gap-4">
          <h1 className="text-3xl text-red-500 font-bold underline">
            Counter is {counter}
          </h1>

          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={useCallbackHandleCounterDecrement}
          >
            - Counter
          </button>
        </div>

        <div className=" flex gap-4">
          <h1 className="text-3xl text-red-500 font-bold underline">
            Count is {count}
          </h1>

          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={useCallbackHandleCountIncrement}
          >
            + Count
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
