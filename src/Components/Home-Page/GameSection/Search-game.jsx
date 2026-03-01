import GameCard from "./GameCard"
import GameSection from "./GameSection"
import useSearch from "../../../Hooks/useSearch"

export default function GameSection({ games, keyword }) {
  const filteredGames = useSearch(games, keyword)

  return (
    <section className="px-[175px] mt-10">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-red-600 text-4xl">|</span>
        <h2 className="text-white text-2xl font-bold">NEW GAME</h2>
      </div>

      <ul className="flex flex-wrap gap-4">
        {filteredGames.map((game) => (
          <GameCard key={game.id} img={game.image} title={game.title} />
        ))}
      </ul>
    </section>
  )
}
