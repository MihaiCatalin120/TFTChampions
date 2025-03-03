import { GlobalContext } from '@/stores/global';
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useContext } from "react";

export default function Units() {
  const globalContext = useContext(GlobalContext);
  if (!globalContext) {
    throw new Error("GlobalContext is null");
  }

  const { selectedSet, numberOfSets } = globalContext;
  return (
    <div className="w-full">
      <Accordion variant='splitted' selectionMode='multiple' isCompact={false}>
        {Array.from({ length: numberOfSets }, (_, index) => (
          (index === selectedSet || selectedSet === 0) && index > 0 ? (
            <AccordionItem key={index} title={`Set ${index}`}>
              <p>Set {index} content</p>
            </AccordionItem>
          ) : null
        ))}
      </Accordion>
    </div>
  );
}