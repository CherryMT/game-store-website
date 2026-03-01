🎮 Game Store Website

A full-stack web application that allows users to explore game listings with detailed information and gameplay images. The project simulates a modern game distribution platform interface.

🚀 Tech Stack
Frontend

ReactJS

JavaScript (ES6+)

Tailwind CSS

Vite

Backend

Node.js

ExpressJS

MySQL

✨ Features

Display game list dynamically from backend API

Game detail page with:

Banner image

Cover image

Multiple gameplay images

Search functionality

RESTful API integration

Responsive UI design

📁 Project Structure
my-react-app/
│
├── public/
├── server/
│   ├── server.js
│   └── upload/
│
├── src/
│   ├── Components/
│   ├── Hooks/
│   └── App.jsx
│
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone repository
git clone https://github.com/CherryMT/game-store-website.git
cd game-store-website
2️⃣ Setup Backend
cd server
npm install

Create .env file inside server/:

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=5000

Run server:

node server.js
3️⃣ Setup Frontend
npm install
npm run dev
📌 API Example

Example endpoint:

GET /api/games

Returns game data including banner, cover, and gameplay images.

🎯 Project Purpose

This project was built to practice:

Frontend component architecture

API integration between client and server

CRUD operations with MySQL

Handling multiple images for a single entity

Organizing a full-stack project structure


👤 Author
Phạm Nguyễn Minh Trí
GitHub: https://github.com/CherryMT

Minh
GitHub: https://github.com/CherryMT
