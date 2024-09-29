import { useEffect, useMemo, useState } from "react";
import "./App.css";

function ChildComponent({ counter }: { counter: number }) {
  useEffect(() => {
    console.log("ChildComponent rendered", counter);
  });

  return <div>Child component</div>;
}

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleCountIncrement = () => {
    setCount(count + 1);
    console.log("handleCountIncrement");
  };

  const UseMemoChildComponent = useMemo(() => {
    return <ChildComponent counter={counter} />;
  }, [counter]);

  useEffect(() => {
    console.log("Parent rendered", count);
  });

  console.log("AppComponent rendered", count);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        {UseMemoChildComponent}
        {/* <ChildComponent /> */}

        <div className=" flex gap-4">
          <h1 className="text-3xl text-red-500 font-bold underline">
            Count is {count}
          </h1>

          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={handleCountIncrement}
          >
            + Count
          </button>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={() => setCounter(counter + 1)}
          >
            + Counter
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
