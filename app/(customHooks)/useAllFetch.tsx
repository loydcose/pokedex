import { useEffect, useState } from "react"
import initialPokemons from "../(lib)/initialPokemons"

export default function useAllFetch() {
  const [pokemons, setPokemons] = useState<Array<object>>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getInitialPokemons = async () => {
      try {
        const URL = "https://pokeapi.co/api/v2/pokemon/"
        setLoading(true)
        const getData = await Promise.all(
          initialPokemons.map(async (pokemon) => {
            const response = await fetch(URL + pokemon)
            if (!response.ok) return null
            const data = await response.json()
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
