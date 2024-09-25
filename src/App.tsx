import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(false);
  const [username, setUsername] = useState({
    firstName: "Ramandeep",
    lastName: "Bhagat",
  });

  const toggleName = () => {
    setName((v) => !v);
  };

  const updateUsername = (event: ChangeEvent<HTMLInputElement>) => {
    // setUsername((prev) => ({ ...prev, firstName: "Ankit" }));
    const fName = event?.target?.value;
    setUsername((prev) => ({ ...prev, firstName: fName }));
  };

  const resetUsername = () => {
    setUsername(() => ({ firstName: "Ramandeep", lastName: "Bhagat" }));
  };

  return (
    <>
      <form className="flex flex-col gap-10">
        <div>
          <h1 className="text-3xl text-red-500 font-bold underline">
            {name ? "useStateHook" : "Hello world!"}
          </h1>

          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded w-48 mx-auto my-2"
            onClick={toggleName}
          >
            Toggle Name
          </button>
        </div>

        <div>
          <h2 className="text-3xl text-red-500 font-bold underline">
            {username.firstName} {username.lastName}
          </h2>

          <input
            type="text"
            className="rounded p-2 mx-auto bg-slate-100 my-2 border"
            value={username.firstName}
            onChange={updateUsername}
          />
        </div>

        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded w-48 mx-auto my-2"
          onClick={resetUsername}
        >
          Reset Username
        </button>
      </form>
    </>
  );
}

export default App;
