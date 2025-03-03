'use client';
import { createContext, useState } from "react";
interface GlobalContextType {
  selectedSet: number;
  setSelectedSet: (value: number) => void;
  numberOfSets: number;
}

const GlobalContext = createContext<GlobalContextType | null>(null);
function GlobalContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>

) {
  const [selectedSet, setSelectedSet] = useState(0);

  return (
    <GlobalContext.Provider value={{ selectedSet, setSelectedSet, numberOfSets: 13 }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {
  GlobalContext,
  GlobalContextProvider
};

