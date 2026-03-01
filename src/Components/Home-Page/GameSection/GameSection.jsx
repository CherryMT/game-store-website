import GameCard from "./GameCard"
import useSearch from "../../../Hooks/useSearch"
import { BASE_URL } from "../../../config"
import { useEffect, useState } from "react"

function GameSection({ keyword }) {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data)
      })
      .catch((err) => console.error("Error:", err))
  }, [])

  // filter theo search
  const filteredGames = games.filter((game) =>
    game.Title.toLowerCase().includes(keyword.toLowerCase()),
  )

  //Chia game (ví dụ: game mới trong 1 năm gần đây)
  const newGames = filteredGames.filter((game) => {
    const releaseYear = new Date(game.ReleaseDate).getFullYear()
    return releaseYear >= 2020 // Chỉ lấy game phát hành từ năm 2020 trở đi
  })

  const updateGames = filteredGames.filter((game) => {
    const releaseYear = new Date(game.ReleaseDate).getFullYear()
    return releaseYear < 2020 // Chỉ lấy game phát hành trước năm 2020
  })

  return (
    <section className="px-[175px] mt-10 space-y-12 text-white">
      {/* ===== NEW GAME ===== */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <span className="text-red-600 text-4xl">|</span>
          <h2 className="text-2xl font-bold">NEW GAME</h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {newGames.map((game) => (
            <div key={game.GameID} className="bg-[#0b2a4a] p-4 rounded">
              <img
                src={`${BASE_URL}/upload/games/CoverIMG/${game.CoverIMG}`}
                alt={game.Title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-3 font-bold">{game.Title}</h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                {game.Description}
              </p>
              <p className="text-gray-400">${game.Price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== GAME UPDATE ===== */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <span className="text-blue-500 text-4xl">|</span>
          <h2 className="text-2xl font-bold">GAME UPDATE</h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {updateGames.map((game) => (
            <div key={game.GameID} className="bg-[#0b2a4a] p-4 rounded">
              <img
                src={`${BASE_URL}/upload/games/CoverIMG/${game.CoverIMG}`}
                alt={game.Title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-3 font-bold">{game.Title}</h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                {game.Description}
              </p>
              <p className="text-gray-400">${game.Price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameSection
// // 🔥 DÙNG CUSTOM HOOK
// const filteredGames = useSearch(games, keyword)

// // 🔥 TÁCH THEO TYPE
// const newGames = filteredGames.filter((g) => g.type === "new")
// const updateGames = filteredGames.filter((g) => g.type === "update")

// return (
//   <section className="px-[175px] mt-10 space-y-12">
//     {/* ===== NEW GAME ===== */}
//     <div>
//       <div className="flex items-center gap-2 mb-5">
//         <span className="text-red-600 text-4xl">|</span>
//         <h2 className="text-white text-2xl font-bold">NEW GAME</h2>
//       </div>

//       <ul className="flex flex-wrap gap-4">
//         {newGames.map((game) => (
//           <GameCard key={game.id} img={game.img} title={game.title} />
//         ))}
//       </ul>
//     </div>

//     {/* ===== GAME UPDATE ===== */}
//     <div>
//       <div className="flex items-center gap-2 mb-5">
//         <span className="text-blue-500 text-4xl">|</span>
//         <h2 className="text-white text-2xl font-bold">GAME UPDATE</h2>
//       </div>

//       <ul className="flex flex-wrap gap-4">
//         {updateGames.map((game) => (
//           <GameCard key={game.id} img={game.img} title={game.title} />
//         ))}
//       </ul>
//     </div>
//   </section>
// )
