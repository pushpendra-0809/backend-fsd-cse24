# Notes Search App (Express.js + React)

A full-stack web application with Express.js backend for serving/downloading PDF note files and a React frontend for live searching and downloading notes.

## 📁 Directory Structure
```
Express_Search/
├── index.js             # Express server (CORS, Static files & Download API)
├── package.json         # Backend dependencies
├── files/               # PDF files storage directory
│   ├── FSD-Node.pdf
│   ├── React-Notes.pdf
│   ├── JavaScript-Notes.pdf
│   ├── NodeJS-Notes.pdf
│   └── ExpressJS-Guide.pdf
├── Readme.md
└── vite-project/        # React + Vite Frontend
    ├── src/
    │   ├── App.jsx      # Search Notes Component with Live Filtering & Download
    │   ├── App.css      # Clean Light UI styling (No pill buttons)
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## 🚀 How to Run

### 1. Start the Express Server
In the `Express_Search` folder:
```bash
npm install
node index.js
```
*Backend runs on: `http://localhost:5000`*

### 2. Start the React Frontend
In the `Express_Search/vite-project` folder:
```bash
npm install
npm run dev
```
*Frontend runs on: `http://localhost:5173`*

---

## 📡 API Endpoints
- `GET /api/notes` - Retrieve all notes (supports search query: `?search=react`)
- `GET /files/:filename` - Download specific PDF note file (e.g. `/files/FSD-Node.pdf`)
