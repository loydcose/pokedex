import { useEffect, useState } from "react"
import initialPokemons from "../(lib)/initialPokemons"
import fetchPokemon from "../(lib)/fetchPokemon"

export default function useAllFetch() {
  const [pokemons, setPokemons] = useState<Array<object>>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getInitialPokemons = async () => {
      try {
        setLoading(true)
        const getData = await Promise.all(
          initialPokemons.map(async (pokemon) => {
            const [data] = await fetchPokemon(pokemon)
            return data
          })
        )
        const filteredPokemons = getData.filter((item) => item)
        setPokemons(filteredPokemons)
      } catch (error: any) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    getInitialPokemons()
  }, [])

  return { pokemons, loading }
}
