'use client';
import '@/styles/set-selector.scss';

type SetSelectorProps = {
  setSelectedSet: (set: number) => void;
}

export default function SetSelector({ setSelectedSet }: SetSelectorProps) {
  return (
    <div className="set-selector-container text-black">
      <button onClick={() => setSelectedSet(0)}>All sets</button>
      <button onClick={() => setSelectedSet(1)}>Set 1</button>
      <button onClick={() => setSelectedSet(2)}>Set 2</button>
      <button onClick={() => setSelectedSet(3)}>Set 3</button>
      <button onClick={() => setSelectedSet(4)}>Set 4</button>
      <button onClick={() => setSelectedSet(5)}>Set 5</button>
      <button onClick={() => setSelectedSet(6)}>Set 6</button>
      <button onClick={() => setSelectedSet(7)}>Set 7</button>
      <button onClick={() => setSelectedSet(8)}>Set 8</button>
      <button onClick={() => setSelectedSet(9)}>Set 9</button>
      <button onClick={() => setSelectedSet(10)}>Set 10</button>
      <button onClick={() => setSelectedSet(11)}>Set 11</button>
      <button onClick={() => setSelectedSet(12)}>Set 12</button>
    </div>
  );
}