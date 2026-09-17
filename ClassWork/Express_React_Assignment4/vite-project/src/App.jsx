import { useState, useEffect } from 'react';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const getProducts = async () => {
    const response = await fetch('http://localhost:5000/api/products');
    const data = await response.json();
    setProducts(data);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
      category: 'category',
    };

    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      
    </div>
  );
};
