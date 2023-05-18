import Image from "next/image"
import Link from "next/link"
import typeColors from "./(lib)/typeColor"

export default function Home() {
  return (
    <section>
      <form className="flex gap-4 mb-12">
        <input
          type="text"
          placeholder="Search pokemon or id"
          className="border border-slate-400 rounded-md py-3 px-6 bg-transparent w-full"
        />
        <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700">
          Search
        </button>
      </form>
      <h2 className="text-blue-500 mb-6">Search result</h2>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <Link
            href="/pokemon/2"
            key={card}
            className="bg-slate-800 overflow-hidden rounded-md"
          >
            <div className="aspect-square relative">
              <Image
                width={500}
                height={500}
                src="/tyrogue.png"
                alt="tyrogue"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-blue-600 font-bold">#102</p>
              <p className="font-bold text-xl mb-2">Megatron</p>
              <div className="flex gap-2">
                <span
                  style={{ backgroundColor: typeColors("fire") }}
                  className="rounded-full px-3 py-1 text-sm"
                >
                  Fire
                </span>
                <span
                  style={{ backgroundColor: typeColors("water") }}
                  className="rounded-full px-3 py-1 text-sm"
                >
                  Electric
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
