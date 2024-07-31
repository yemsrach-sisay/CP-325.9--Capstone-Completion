import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/products/${match.params.id}`
      );
      setProduct(data);
    };

    fetchProduct();
  }, [match.params.id]);

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductPage;
