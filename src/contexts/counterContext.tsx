import { createContext, useState } from "react";

export type CounterContextType = {
  increment: () => void;
  decrement: () => void;
  getCount: () => number;
};

export const CounterContext = createContext<CounterContextType | null>(null);

export const CounterContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const getCount = () => count;

  return (
    <CounterContext.Provider value={{ increment, decrement, getCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
