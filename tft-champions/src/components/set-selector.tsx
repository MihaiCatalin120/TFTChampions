'use client';
import { GlobalContext } from '@/stores/global';
import '@/styles/set-selector.scss';
import { useContext } from "react";

export default function SetSelector() {
  const globalContext = useContext(GlobalContext);
  if (!globalContext) {
    throw new Error("GlobalContext is null");
  }

  const { selectedSet, setSelectedSet, numberOfSets } = globalContext;

  return (
    <div className="set-selector-container text-black">
      {Array.from({ length: numberOfSets }, (_, index) => (
        <button key={index} className={selectedSet === index ? 'selected' : ''} onClick={() => setSelectedSet(index)}>
          {index === 0 ? 'All' : `Set ${index}`}
        </button>
      ))}
    </div>
  );
}