import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Path to files directory
const filesDirectory = path.join(__dirname, "files");

// Ensure files directory exists
if (!fs.existsSync(filesDirectory)) {
  fs.mkdirSync(filesDirectory, { recursive: true });
}

// List of available documents / notes
const documents = [
  {
    id: 1,
    name: "FSD",
    subject: "Full Stack Development",
    file: "FSD-Node.pdf",
    description: "Node.js fundamentals, Express.js architecture and REST APIs",
  },
  {
    id: 2,
    name: "React",
    subject: "Frontend Framework",
    file: "React-Notes.pdf",
    description: "React Components, Hooks (useState, useEffect), and State Management",
  },
  {
    id: 3,
    name: "JavaScript",
    subject: "Core Programming",
    file: "JavaScript-Notes.pdf",
    description: "ES6+ syntax, Promises, Async/Await, and DOM manipulation",
  },
  {
    id: 4,
    name: "NodeJS",
    subject: "Backend Runtime",
    file: "NodeJS-Notes.pdf",
    description: "Event loop, File System (fs), Streams, and HTTP server",
  },
  {
    id: 5,
    name: "ExpressJS",
    subject: "Backend Framework",
    file: "ExpressJS-Guide.pdf",
    description: "Routing, Middlewares, Request/Response cycles, and CORS setup",
  },
];

// Serve static files from 'files' directory
app.use("/files", express.static(filesDirectory));

// 1. GET /api/notes - Get all notes or search with query parameter (?search=...)
app.get("/api/notes", (req, res) => {
  const searchQuery = req.query.search || req.query.q || "";

  if (!searchQuery.trim()) {
    return res.status(200).json(documents);
  }

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  res.status(200).json(filteredDocs);
});

// 2. GET /files/:filename - Download specific file
app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(filesDirectory, filename);

  if (fs.existsSync(filePath)) {
    res.download(filePath, filename, (err) => {
      if (err) {
        console.error("Download error:", err);
        if (!res.headersSent) {
          res.status(500).send("Error downloading file");
        }
      }
    });
  } else {
    res.status(404).json({ message: "File not found on server" });
  }
});

// Root check endpoint
app.get("/", (req, res) => {
  res.send("Express Notes Search API is running! Access /api/notes or /files/:filename");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
