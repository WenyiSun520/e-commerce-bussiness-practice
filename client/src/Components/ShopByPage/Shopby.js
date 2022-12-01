import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Shopby() {
  const [products, setProducts] = useState([]);
  const q = useParams();
  //console.log("urlParams-pets: " + q.pets);

  useEffect(() => {
    fetch("/api/products?pet=" + q.pets)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // console.log("products:" + products);
  }, [q.pets]);
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
          {item.petsTag.join(",")}
        </p>
        <p>price: ${item.price}</p>
        <p>Description:{item.description}</p>
      </div>
    );
  });

  return (
    <div id="results">
      {productsItems}
    </div>
  );
}
