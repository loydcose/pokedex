import Image from "next/image"
import typeColors from "../(lib)/typeColor"
import titleCase from "../(lib)/titleCase"

export default function Details({ pokemon }: { [key: string]: any }) {
  const { id, name, types, height, weight, sprites } = pokemon
  const image =
    sprites.other.dream_world?.front_default || sprites.front_default

  return (
    <>
      <h2 className="font-bold mb-8 md:mb-12">{titleCase(name)} details</h2>
      <div className="bg-slate-800 rounded-lg p-10 md:p-16 flex flex-col gap-8 md:gap-16 md:flex-row md:w-[800px] md:mx-auto md:items-start">
        <div className="md:basis-1/2">
          <Image src={image} alt={name} width={300} height={300} className="mx-auto" />
        </div>
        <div className="grid gap-3">
          <p className="text-blue-600">#{id}</p>
          <p className="font-bold text-2xl">{titleCase(name)}</p>
          <div className="flex gap-2 flex-wrap">
            {types.map((type: any) => {
              const name = type.type.name
              return (
                <span
                  key={name}
                  style={{ backgroundColor: typeColors(name) }}
                  className="rounded-full px-3 py-1 text-sm"
                >
                  {name}
                </span>
              )
            })}
          </div>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
    </>
  )
}
