import { GlobalContext } from '@/stores/global';
import { useContext } from "react";

export default function Units() {
  const globalContext = useContext(GlobalContext);
  if (!globalContext) {
    throw new Error("GlobalContext is null");
  }

  const { selectedSet, setSelectedSet } = globalContext;
  return (
    <div>
      Units
      <h2>Set {selectedSet}</h2>
    </div>
  );
}