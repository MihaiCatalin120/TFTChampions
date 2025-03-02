'use client';
import { GlobalContext } from '@/stores/global';
import { useContext } from "react";
import '@/styles/set-selector.scss';

export default function SetSelector() {
  const globalContext = useContext(GlobalContext);
  if (!globalContext) {
    throw new Error("GlobalContext is null");
  }

  const { selectedSet, setSelectedSet } = globalContext;
  const numberOFSets = 13;

  return (
    <div className="set-selector-container text-black">
      {Array.from({ length: numberOFSets }, (_, index) => (
        <button key={index} className={selectedSet === index ? 'selected' : ''} onClick={() => setSelectedSet(index)}>
          {index === 0 ? 'All' : `Set ${index}`}
        </button>
      ))}
    </div>
  );
}