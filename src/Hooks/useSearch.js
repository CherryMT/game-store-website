import { useMemo } from "react"

export default function useSearch(games, keyword) {
  const filteredGames = useMemo(() => {
    if (!keyword || keyword.trim() === "") return games // Return all games if keyword is emptyq

    const lowerKeyword = keyword.toLowerCase()

    return games.filter(
      (game) => game.title.toLowerCase().includes(lowerKeyword), // Filter games by title
    )
  }, [games, keyword]) // Recompute when games or keyword change

  return filteredGames
}
