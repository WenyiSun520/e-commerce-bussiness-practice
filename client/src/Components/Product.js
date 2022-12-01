import React, { useState, useEffect } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productPreview = async () => {
      await fetch("api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
  }, []);

  for (let i = 0; i < products.length; i++) {
    let newProduct = products[i];
    document.getElementById("results").innerHTML += newProduct;
  }

  return <div id="results"></div>;
}
