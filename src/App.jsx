import React, { useState } from "react"
import Header from "./Components/Home-Page/Header/Header"
import Banner from "./Components/Home-Page/Banner/Banner"
import Footer from "./Components/Home-Page/Footer/Footer"
import GameSection from "./Components/Home-Page/GameSection/GameSection"

function App() {
  const [keyword, setKeyword] = useState("")

  return (
    <div className="bg-[#051c35] min-h-screen overflow-x-hidden">
      {/* HEADER: logo + menu + search */}
      <Header onSearch={setKeyword} />

      {/* MAIN CONTENT */}
      <main>
        {/* BANNER / SLIDER */}
        <Banner />

        {/* GAME CONTENT */}
        <GameSection keyword={keyword} />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default App
