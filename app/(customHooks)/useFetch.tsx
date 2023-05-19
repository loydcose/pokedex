import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import fetchPokemon from "../(lib)/fetchPokemon"

export default function useFetch() {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const pathname = usePathname()
  const hasData = Object.keys(pokemon).length

  useEffect(() => {
    const getData = async () => {
      const pokemonId = pathname.split("/")[2]

      try {
        setLoading(true)
        const [data, error] = await fetchPokemon(pokemonId)
        error ? setIsError(true) : setPokemon(data)
      } catch (error: any) {
        setIsError(true)
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [pathname])

  return { pokemon, loading, isError, hasData }
}
