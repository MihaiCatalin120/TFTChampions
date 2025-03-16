import Unit from '@/model/unit';
import { GlobalContext } from '@/stores/global';
import { Accordion, AccordionItem } from "@heroui/accordion";
import _, { Dictionary } from "lodash";
import { useContext, useEffect, useState } from "react";
import UnitCard from './unit-card';

export default function Units() {
  const globalContext = useContext(GlobalContext);
  if (!globalContext) {
    throw new Error("GlobalContext is null");
  }

  const { selectedSet, setArray, setSetArray } = globalContext;
  const [units, setUnits] = useState<Dictionary<Unit[]>>({});

  useEffect(() => {
    fetch("/api/units")
      .then((response) => response.json())
      .then((data) => {
        data.map((unit: any) => unit.traits = JSON.parse(unit.traits.replace(/'/g, '"')));
        const unitsGrouped = _.groupBy(data, 'set') as unknown as Dictionary<Unit[]>;
        setSetArray(["All"].concat(Object.keys(unitsGrouped)));
        setUnits(unitsGrouped);
      });
  }, []);

  return (
    <div className="w-full">
      <Accordion variant='splitted' selectionMode='multiple' isCompact={false} selectedKeys={selectedSet === 0 ? ["All"] : [`${selectedSet.toFixed(1)}`]}>
        {setArray.map((set) => (
          (parseFloat(set) === selectedSet || selectedSet === 0) && parseFloat(set) > 0 ? (
            <AccordionItem key={set} title={`Set ${set}`}>
              {units && units[set].map((unit) => (
                <UnitCard key={`${unit.name}-${unit.set}`} unit={unit} />
              ))}
            </AccordionItem>
          ) : null
        ))}
      </Accordion>
    </div>
  );
}