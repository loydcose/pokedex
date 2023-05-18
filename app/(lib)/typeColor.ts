const colors: { [key: string]: string } = {
  normal: "#929DA3",
  bug: "#A8B821",
  fight: "#CE416B",
  ghost: "#705899",
  electric: "#F8D030",
  flying: "#A88FF1",
  steel: "#B7B8D0",
  psychic: "#F85887",
  poison: "#A041A1",
  fire: "#EF7F2E",
  ice: "#98D8D7",
  ground: "#DFBF68",
  water: "#6891F1",
  dragon: "#7138FA",
  rock: "#B89F38",
  grass: "#78C751",
  dark: "#6F5947",
}

export default function typeColors(type: string) {
  return colors[type] || colors.normal
}
