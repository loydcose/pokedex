import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function useFetch() {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const pathname = usePathname()
  const hasData = Object.keys(pokemon).length

  useEffect(() => {
    const getData = async () => {
      const pokemonId = pathname.split("/")[2]
      const URL = "https://pokeapi.co/api/v2/pokemon/" + pokemonId

      try {
        setLoading(true)
        const response = await fetch(URL)
        if (!response.ok) {
          setIsError(true)
          return
        }
        const data = await response.json()
        console.log(data)
        setPokemon(data)
      } catch (error: any) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [pathname])

  return { pokemon, loading, isError, hasData }
}
