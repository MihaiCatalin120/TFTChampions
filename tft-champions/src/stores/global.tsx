'use client';
import { createContext, useState } from "react";
interface GlobalContextType {
  selectedSet: number;
  setSelectedSet: (value: number) => void;
  setArray: string[];
  setSetArray: (value: string[]) => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null);
function GlobalContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>

) {
  const [selectedSet, setSelectedSet] = useState(0);
  const [setArray, setSetArray] = useState<string[]>([]);

  return (
    <GlobalContext.Provider value={{ selectedSet, setSelectedSet, setArray, setSetArray }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {
  GlobalContext,
  GlobalContextProvider
};

