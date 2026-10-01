import { useState, useEffect } from "react";
import "./App.css";

const API_BASE_URL = "http://localhost:5000";

const DEFAULT_DOCUMENTS = [
  {
    id: 1,
    name: "FSD",
    subject: "Full Stack Development",
    file: "FSD-Node.pdf",
    description: "Node.js, Express.js architecture, and REST API concepts.",
  },
  {
    id: 2,
    name: "React",
    subject: "Frontend Framework",
    file: "React-Notes.pdf",
    description: "Component hierarchy, Hooks (useState, useEffect), and JSX.",
  },
  {
    id: 3,
    name: "JavaScript",
    subject: "Core Programming",
    file: "JavaScript-Notes.pdf",
    description: "ES6 syntax, Promises, Async/Await, and event loop.",
  },
  {
    id: 4,
    name: "NodeJS",
    subject: "Backend Runtime",
    file: "NodeJS-Notes.pdf",
    description: "Asynchronous I/O, File System (fs), and HTTP modules.",
  },
  {
    id: 5,
    name: "ExpressJS",
    subject: "Backend Framework",
    file: "ExpressJS-Guide.pdf",
    description: "Routing, Middlewares, Static file serving, and CORS.",
  },
];

const App = () => {
  const [search, setSearch] = useState("");
  const [documents, setDocuments] = useState(DEFAULT_DOCUMENTS);
  const [loading, setLoading] = useState(false);

  // Fetch notes from Express Backend (with fallback to default documents)
  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/notes`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setDocuments(data);
          }
        }
      } catch (error) {
        console.warn("Backend not connected yet, using local document list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Filter documents based on search query
  const filteredDocuments = documents.filter((doc) =>
    (doc.name && doc.name.toLowerCase().includes(search.toLowerCase())) ||
    (doc.subject && doc.subject.toLowerCase().includes(search.toLowerCase())) ||
    (doc.description && doc.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="notes-container">
      {/* Header */}
      <header className="notes-header">
        <h1>  Notes Portal App</h1>
        <p>Search and download course study materials &amp; notes</p>
      </header>

      {/* Search Bar Section */}
      <div className="search-section">
        <div className="search-input-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search notes by subject, topic or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          {search && (
            <button
              type="button"
              className="btn-clear"
              onClick={() => setSearch("")}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>
 
    </div>
  );
};

export default App;
