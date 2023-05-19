export default async function fetchPokemon(pokemonId: number | string) {
  const URL = "https://pokeapi.co/api/v2/pokemon/" + pokemonId
  const response = await fetch(URL)
  if (!response.ok) {
    return [null, response.status]
  }
  const data = await response.json()
  return [data, null]
}
