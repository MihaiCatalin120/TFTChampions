'use client';
import { createContext, useState } from "react";
interface GlobalContextType {
  selectedSet: number;
  setSelectedSet: (value: number) => void;
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
    <GlobalContext.Provider value={{ selectedSet, setSelectedSet }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {
  GlobalContext,
  GlobalContextProvider
};
