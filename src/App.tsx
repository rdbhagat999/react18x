import { ChangeEvent, useEffect, useState, useTransition } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
];

function App() {
  const [isPending, startTransition] = useTransition();

  const [productList, setProductList] = useState<
    { id: number; name: string }[]
  >([...products]);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("[hook 1]");
  });

  useEffect(() => {
    console.log("[hook 2]");
  }, [name]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e?.target?.value);

    startTransition(() => {
      console.log("inside [startTransition]");
      console.log("[startTransition] [isPending]", isPending);

      setProductList(
        products.filter((item) => item.name?.includes(e?.target?.value))
      );
    });
  };

  console.log("[isPending]", isPending);

  return (
    <>
      <h1 className="text-3xl text-red-500 font-bold underline">{name}</h1>

      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Serach products
        </label>
        <input
          type="text"
          id="products-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="product a"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {isPending ? (
        <h2 className="text-3xl text-gray-500 font-bold underline">Loading</h2>
      ) : (
        productList.map((item) => <div key={item?.id}>{item?.name}</div>)
      )}
    </>
  );
}

export default App;
