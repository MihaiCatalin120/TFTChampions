'use client';
import { GlobalContext } from '@/stores/global';
import '@/styles/set-selector.scss';
import { useContext } from "react";

export default function SetSelector() {
  const globalContext = useContext(GlobalContext);
  if (!globalContext) {
    throw new Error("GlobalContext is null");
  }

  const { selectedSet, setSelectedSet, setArray } = globalContext;

  return (
    <div className="set-selector-container text-black">
      {setArray.map((set) => (
        <button key={set} className={(set === 'All' && selectedSet === 0) || selectedSet === parseFloat(set) ? 'selected' : ''} onClick={() => setSelectedSet(set === 'All' ? 0 : parseFloat(set))}>
          {set === 'All' ? 'All' : `Set ${set}`}
        </button>
      ))}
    </div>
  );
}