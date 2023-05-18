import Image from "next/image"
import typeColors from "../(lib)/typeColor"
import titleCase from "../(lib)/titleCase"

export default function Details({ pokemon }: { [key: string]: any }) {
  const { id, name, types, height, weight, sprites } = pokemon
  const image =
    sprites.other.dream_world?.front_default || sprites.front_default

  return (
    <>
      <h2 className="font-bold">{titleCase(name)} details</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            className="scale-75"
          />
        </div>
        <div className="bg-slate-800 p-6 rounded-lg grid gap-3">
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
