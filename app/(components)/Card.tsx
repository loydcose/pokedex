import Image from "next/image"
import Link from "next/link"
import typeColors from "../(lib)/typeColor"
import titleCase from "../(lib)/titleCase"

export default function Card({ pokemon }: { [key: string]: any }) {
  const { id, name, types, sprites } = pokemon
  const image =
    sprites.other.dream_world?.front_default || sprites.front_default

  return (
    <Link
      href={`/pokemon/${id}`}
      className="bg-slate-800 overflow-hidden rounded-md"
    >
      <div className="aspect-square relative">
        <Image
          width={300}
          height={300}
          src={image}
          alt={name}
          className="w-full h-full object-fit scale-75"
        />
      </div>
      <div className="p-4 md:p-6">
        <p className="text-blue-600 font-bold">#{id}</p>
        <p className="font-bold text-xl mb-2">{titleCase(name)}</p>
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
      </div>
    </Link>
  )
}
