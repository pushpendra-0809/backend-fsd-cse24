import { useState, useEffect } from "react";
import "./App.css";

const API_BASE_URL = "http://localhost:5000";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all products from express backend
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Add Product form submission
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!name.trim() || !price || !category.trim()) {
      alert("Please fill in all the fields.");
      return;
    }

    const newProduct = {
      name: name.trim(),
      price: price.trim(),
      category: category.trim(),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        setName("");
        setPrice("");
        setCategory("");
        fetchProducts();
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchProducts();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="app-container">
      {/* Page Header */}
      <header className="app-header">
        <h1>Product Management System</h1>
        <p>Simple Inventory Management Dashboard</p>
      </header>

      {/* Add Product Section on Top */}
      <section className="form-section">
        <h2 className="section-title">Add New Product</h2>
        <form className="add-product-form" onSubmit={handleAddProduct}>
          <div className="form-group">
            <label htmlFor="pname">Product Name</label>
            <input
              id="pname"
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pprice">Price (₹)</label>
            <input
              id="pprice"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pcategory">Category</label>
            <input
              id="pcategory"
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="form-btn-wrapper">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </section>

      {/* Product List Section */}
      <section className="list-section">
        <h2 className="section-title">Product List</h2>

        {loading ? (
          <p className="status-text">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="status-text">No products available in the inventory.</p>
        ) : (
          <div className="table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>#{item.id}</td>
                    <td className="product-name">{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <span className="category-tag">
                        {item.category || "Uncategorized"}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-delete"
                        onClick={() => handleDeleteProduct(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;