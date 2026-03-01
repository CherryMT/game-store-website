import express from "express"
import dotenv from "dotenv"
import path from "path"
import cors from "cors"
import { fileURLToPath } from "url"

dotenv.config()

const app = express()
const PORT = 5000
app.use(cors()) // 🔥 QUAN TRỌNG
// tạo __dirname cho ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// static folder
app.use("/upload", express.static(path.join(__dirname, "upload")))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
}
import sql from "mssql"
sql
  .connect(config)
  .then(() => console.log("✅ Connected to SQL Server"))
  .catch((err) => console.log("❌ Database connection failed", err))

// ===============================
// 📌 API THÊM GAME
// ===============================
app.post("/api/games", async (req, res) => {
  try {
    const {
      title,
      slug,
      releaseDate,
      price,
      bannerIMG,
      coverIMG,
      description,
    } = req.body

    const pool = await sql.connect(config)

    await pool
      .request()
      .input("Title", sql.NVarChar, title)
      .input("Slug", sql.NVarChar, slug)
      .input("ReleaseDate", sql.Date, releaseDate)
      .input("Price", sql.Decimal(10, 2), price)
      .input("BannerIMG", sql.NVarChar, bannerIMG)
      .input("CoverIMG", sql.NVarChar, coverIMG)
      .input("Description", sql.NVarChar, description).query(`
        INSERT INTO Games 
        (Title, Slug, ReleaseDate, Price, BannerIMG, CoverIMG, Description)
        VALUES 
        (@Title, @Slug, @ReleaseDate, @Price, @BannerIMG, @CoverIMG, @Description)
      `)

    res.status(201).json({ message: "Game added successfully" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to add game" })
  }
})

// ===============================

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
app.get("/api/test", (req, res) => {
  res.json({ message: "API hoạt động OK 🚀" })
})
app.get("/api/games", async (req, res) => {
  try {
    const pool = await sql.connect(config)
    const result = await pool.request().query("SELECT * FROM Games")
    res.json(result.recordset)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games" })
  }
})
