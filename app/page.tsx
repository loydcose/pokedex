"use client"

import useAllFetch from "./(customHooks)/useAllFetch"
import Card from "./(components)/Card"

export default function Home() {
  const { pokemons, loading } = useAllFetch()

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
        {pokemons.map((pokemon: any) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </section>
  )
}
