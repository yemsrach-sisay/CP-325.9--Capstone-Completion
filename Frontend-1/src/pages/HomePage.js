import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Link
            to="/cart"
            className="add-to-cart-link"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
