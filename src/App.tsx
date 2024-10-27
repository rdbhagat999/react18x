import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import GlobalSpinner from "./components/GlobalSpinner";

function App() {
  const navigation = useNavigation();

  return (
    <main className="w-full h-full min-h-screen text-center">
      <h1 className="text-3xl text-gray-700 font-bold underline">
        Layout Component
      </h1>

      <Navbar />

      {navigation.state === "loading" && <GlobalSpinner />}

      <Outlet></Outlet>
    </main>
  );
}

export default App;
