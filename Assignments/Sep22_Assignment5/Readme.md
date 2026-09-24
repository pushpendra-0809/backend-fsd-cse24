# Assignment 4 - Mini Project: Campus Help Desk

A full-stack web application for students to submit and manage campus-related problems/requests.

## 📁 Project Structure
```
Sep22_Assignment5/
├── index.js             # Express Server (CRUD APIs with fs module)
├── requests.json        # JSON database file
├── package.json         # Backend dependencies (express, cors)
├── Readme.md            # Documentation
└── vite-project/        # React + Vite Frontend
    ├── src/
    │   ├── App.jsx      # React Component (Form + Table + Fetch CRUD)
    │   ├── App.css      # Clean Light UI styling
    │   ├── index.css    # Global Resets
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## 🚀 How to Run

### 1. Start Backend Server
Open a terminal in `Sep22_Assignment5`:
```bash
npm install
node index.js
```
*Backend runs on `http://localhost:5000`*

### 2. Start Frontend (React)
Open a new terminal in `Sep22_Assignment5/vite-project`:
```bash
npm install
npm run dev
```
*Frontend runs on `http://localhost:5173`*

---

## 📡 API Endpoints
- `GET /api/requests` - Fetch all submitted requests
- `GET /api/requests/:id` - Fetch single request by ID
- `POST /api/requests` - Submit a new request
- `PUT /api/requests/:id` - Update existing request
- `DELETE /api/requests/:id` - Delete request by ID
