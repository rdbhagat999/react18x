import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    inputRef?.current?.focus();
    countRef.current++;
    console.log("handleCount", countRef.current);
  };

  useEffect(() => {
    console.log("[useEffect] [onmount] component rendered", countRef.current);
  }, []);

  useEffect(() => {
    console.log("[useEffect] component rendered", countRef.current);
  });

  console.log("component rendered", countRef.current);

  return (
    <>
      <h1 className="text-3xl text-red-500 font-bold underline">
        RefCount is {countRef.current}
      </h1>
      <h2 className="text-3xl text-red-500 font-bold underline">
        Count is {count}
      </h2>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            ref={inputRef}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@email.com"
            required
          />
        </div>
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white"
          onClick={handleCount}
        >
          + RefCount
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white"
          onClick={() => setCount(count + 1)}
        >
          + Count
        </button>
      </div>
    </>
  );
}

export default App;
