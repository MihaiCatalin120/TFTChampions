import Unit from "@/model/unit"
import { RiCoinLine, RiDropLine, RiGalleryView2, RiHeartLine, RiKnifeLine, RiShieldLine, RiSwordLine } from "@remixicon/react"
import Image from "next/image"

type Props = {
  unit: Unit,
}

export default function UnitCard({unit}: Props) {
  return (
    <div className="grid grid-cols-subgrid col-span-9 w-full border border-white rounded-xl p-4 md:p-0 mb-2">
      <div className="flex flex-row flex-nowrap items-center gap-2">
        <Image className="max-md:mx-auto rounded-xl" src={unit.icon} width="75" height="75" alt={`${unit.name} icon`} />
        <p>{unit.name}</p>
      </div>

      <div className="flex flex-row flex-nowrap items-center justify-center gap-2">
        <RiCoinLine
          size={20}/>
          <p>{unit.cost}</p>
      </div>

      <div className="flex flex-row flex-nowrap items-center justify-center gap-2">
        <RiHeartLine
          size={20}/>
        <p>{unit.health}</p>
      </div>

      <div className="flex flex-row flex-nowrap items-center justify-center gap-2">
        <RiShieldLine
          size={20}/>
        <p>{unit.armor}</p>
      </div>

      <div className="flex flex-row flex-nowrap items-center justify-center gap-2">
        <RiKnifeLine
          size={20}/>
        <p>{unit.ad}</p>
      </div>

      <div className="flex items-center">
        <Image src={unit.attack_range} width="50" height="50" alt={`${unit.name} attack range`} />
      </div>

      <div className="flex flex-row flex-nowrap items-center justify-center gap-2">
        <RiSwordLine
          size={20}/>
        <p>{unit.as}</p>
      </div>

      <div className="flex flex-row flex-nowrap items-center justify-center gap-2">
        <Image src={unit.skill_icon} width="50" height="50" alt={`${unit.name} skill icon`} />
        <RiDropLine
          size={20}/>
        <p>{unit.mana}</p>
      </div>

      <div className="flex flex-row flex-nowrap items-center justify-center gap-2 ms-auto me-2">
        <RiGalleryView2
          size={20}/>
        <p>
          {unit.traits.join(', ')}
        </p>
      </div>
    </div>
  )
}