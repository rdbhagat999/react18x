import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    document.title = "hello_" + count;
  }, [sync, count]);

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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
