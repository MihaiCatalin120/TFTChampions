import Unit from "@/model/unit"
import Image from "next/image"

type Props = {
  unit: Unit,
}

export default function UnitCard({unit}: Props) {
  return (
    <div className="flex flex-row justify-between border border-white rounded-xl p-4 mb-2">
      <Image src={unit.icon} width="50" height="50" alt={`${unit.name} icon`} />
      <p>{unit.name}</p>
      <p>{unit.set}</p>
      <p>{unit.cost}</p>
      <p>{unit.health}</p>
      <p>{unit.armor}</p>
      <p>{unit.ad}</p>
      <Image src={unit.attack_range} width="50" height="50" alt={`${unit.name} attack range`} />
      <p>{unit.as}</p>
      <Image src={unit.skill_icon} width="50" height="50" alt={`${unit.name} skill icon`} />
      <p>{unit.mana}</p>
      {unit.traits.map((trait) => <p key={`${unit.name}-${unit.set}-${trait}`}>{trait}</p>)}
    </div>
  )
}