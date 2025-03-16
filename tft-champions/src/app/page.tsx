'use client';

import SetSelector from "@/components/set-selector";
import Units from "@/components/units";
export default function Home() {

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="dark flex flex-col gap-8 row-start-2 items-center text-center w-full">
        <h1 className="text-4xl mx-auto w-full">TFT Champions</h1>
        <SetSelector />
        <div className="mt-4 w-full">
          <Units />
        </div>
      </main>
    </div>
  );
}
