import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log("[hook 1]");
    return () => {
      console.log("umount");
    };
  });

  useEffect(() => {
    console.log("[hook 2]");
  }, []);

  useLayoutEffect(() => {
    console.log("inside [useLayoutEffect] without dependencies array");
  });

  useLayoutEffect(() => {
    console.log("inside [useLayoutEffect] with dependencies array");
  }, []);

  useLayoutEffect(() => {
    document.title = "ttttttttttt";
    document.title = "hello_" + count;
    console.log("inside [useLayoutEffect] set document title");
  }, [count]);

  return (
    <>
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setSync((sync) => !sync)}>
          sync is {sync ? "true" : "false"}
        </button>
      </div>
    </>
  );
}

export default App;
