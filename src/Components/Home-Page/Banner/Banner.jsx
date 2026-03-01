import { BASE_URL } from "../../../config"
import { useEffect, useState } from "react"

function GameSection({ keyword }) {
  const [games, setGames] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch("http://localhost:5000/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data)
      })
      .catch((err) => console.error("Error:", err))
  }, [])

  // filter search
  const filteredGames = games.filter((game) =>
    game.Title?.toLowerCase().includes(keyword?.toLowerCase() || ""),
  )

  // chỉ lấy game mới
  const newGames = filteredGames.filter((game) => {
    const releaseYear = new Date(game.ReleaseDate).getFullYear()
    // '?' Optional chaining giúp tránh lỗi khi giá trị là null hoặc undefined.
    return releaseYear >= 2020
  })

  // game đang hiển thị
  const currentGame = newGames[currentIndex]

  const nextGame = () => {
    setCurrentIndex((prev) => (prev === newGames.length - 1 ? 0 : prev + 1))
    // Khi đến cuối danh sách(prev === newGames.length - 1), quay lại đầu tiên (0),
    // ngược lại thì tăng chỉ số lên 1 (prev + 1)
  }

  const prevGame = () => {
    setCurrentIndex((prev) => (prev === 0 ? newGames.length - 1 : prev - 1))
    // Khi ở đầu tiên(prev === 0), quay lại cuối cùng (newGames.length - 1),
    // ngược lại thì giảm chỉ số đi 1 (prev - 1)
  }

  if (!currentGame) return null

  return (
    <section className="pt-12">
      <div className="mx-auto w-[950px] h-[420px] flex bg-[#0f1c2e] rounded overflow-hidden">
        {/* LEFT */}
        <div className="relative w-[70%] h-full">
          <img
            src={`${BASE_URL}/upload/games/BannerIMG/${currentGame.BannerIMG}`}
            className="w-full h-full object-cover"
            alt="banner"
          />

          <button
            onClick={prevGame}
            className="absolute left-3 top-1/2 -translate-y-1/2 
            text-white text-4xl bg-black/40 w-10 h-10 rounded-full"
          >
            &#10094;
          </button>

          <button
            onClick={nextGame}
            className="absolute right-3 top-1/2 -translate-y-1/2 
            text-white text-4xl bg-black/40 w-10 h-10 rounded-full"
          >
            &#10095;
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-[30%] h-full p-4 text-white flex flex-col">
          <h2 className="text-xl font-semibold mb-3">{currentGame.Title}</h2>

          {/* thumbnails */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {newGames.map((game, index) => (
              <img
                key={game.GameID}
                onClick={() => setCurrentIndex(index)}
                // src={`${BASE_URL}/upload/games/CoverIMG/${game.CoverIMG}`}
                className="w-full h-[80px] object-cover rounded cursor-pointer hover:opacity-80"
              />
            ))}
          </div>

          <p className="text-sm text-gray-300 mt-auto">${currentGame.Price}</p>
        </div>
      </div>
    </section>
  )
}

export default GameSection
