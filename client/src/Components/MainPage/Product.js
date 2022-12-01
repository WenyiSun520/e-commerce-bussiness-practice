import React, { useState, useEffect } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // console.log("i.m trying to load productPreview function");
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // console.log("products:" + products);
  }, []);
  let productsItems = products.map((item) => {
    return (
      <div className="product-window" key={item.name}>
        <img
          className="product-pic"
          src="./img/preview.jpeg"
          alt="product preview"
        />
        <p>
          Product Name: <strong>{item.name}</strong>
        </p>
        <p>
          Brand: <strong>{item.brand}</strong> 
          <br />
          {item.petsTag.join(',')}
        </p>
        <p>price: ${item.price}</p>
        <p>Description:{item.description}</p>
      </div>
    );
  });
  return <div id="results">{productsItems}</div>;
}

