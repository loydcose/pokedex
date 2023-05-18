import typeColors from "@/app/(lib)/typeColor"
import Image from "next/image"
import Link from "next/link"

export default function page() {
  return (
    <section>
      <h2 className="font-bold">Clefairy details</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Image src="/tyrogue.png" alt="tyrogue" width={600} height={600} />
        </div>
        <div className="bg-slate-800 p-6 rounded-lg grid gap-2">
          <p className="text-blue-600">#45</p>
          <p className="font-bold">Clefairy</p>
          <div className="flex gap-2">
            <span
              style={{ backgroundColor: typeColors("rock") }}
              className="rounded-full px-3 py-1 text-sm"
            >
              Fire
            </span>
            <span
              style={{ backgroundColor: typeColors("ground") }}
              className="rounded-full px-3 py-1 text-sm"
            >
              Electric
            </span>
          </div>
          <p>Height: 45</p>
          <p>Weight: 45</p>
        </div>
      </div>
      <Link
        href="/"
        className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 block w-fit mt-12 mx-auto"
      >
        Go back
      </Link>
    </section>
  )
}
