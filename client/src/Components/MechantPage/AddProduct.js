import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

export default function AddProduct() {
     
    const formik = useFormik({
      initialValues: {
        product_name: "",
        product_types:[],
        product_brand:'',
        product_price: "",
        product_description:""
      },
      onSubmit: async (values) => {
        alert(JSON.stringify(values, null, 2));
        let responseJson = await fetch("api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        let inputFeedback = document.querySelector(".showfeedback");
        if (responseJson.status == "Success") {
          inputFeedback.textContent = "Success!";
        } else {
          inputFeedback.textContent = "Fail!";
        }
      },
    });
    const handleRadioBtn = (e) => formik.values.product_brand = e.target.value;
  return (
    <form id="product-form" onSubmit={formik.handleSubmit}>
      <h1>Upload New Product</h1>
      <p>Please fill in this form to upload your new product</p>
      <hr />

      <label>Product Name</label>
      <input
        type="text"
        id="product_name"
        placeholder="product name"
        onChange={formik.handleChange}
        value={formik.values.product_name}
        required
      />

      <label>Price</label>
      <input
        type="number"
        id="product_price"
        step="0.01"
        placeholder="price"
        onChange={formik.handleChange}
        value={formik.values.product_price}
        required
      />
      <div className="checkbox">
        <label>Select Tags:</label>
        <input
          type="checkbox"
          name="product_types"
          value="dog"
          onChange={formik.handleChange}
        />
        <label>Dog</label>
        <input
          type="checkbox"
          name="product_types"
          value="cat"
          onChange={formik.handleChange}
        />
        <label>Cat</label>
        <input
          type="checkbox"
          name="product_types"
          value="fish"
          onChange={formik.handleChange}
        />
        <label>Fish</label>
        <input
          type="checkbox"
          name="product_types"
          value="other"
          onChange={formik.handleChange}
        />
        <label>Other</label>
      </div>

      <div className="radio">
        <label>Select Brands:</label>
        <input
          type="radio"
          name="brand-type"
          className="brand-type"
          value="orijen"
          onChange={(e) => handleRadioBtn(e)}
        />
        <label>Orijen</label>
        <input
          type="radio"
          name="brand-type"
          className="brand-type"
          value="instinct"
          onChange={(e) => handleRadioBtn(e)}
        />
        <label>Instinct</label>
        <input
          type="radio"
          name="brand-type"
          className="brand-type"
          value="wellness"
          onChange={(e) => handleRadioBtn(e)}
        />
        <label>Wellness</label>
        <input
          type="radio"
          name="brand-type"
          className="brand-type"
          value="other"
          onChange={(e) => handleRadioBtn(e)}
        />
        <label>Other</label>
      </div>

      <label>Desctiption</label>
      <textarea
        type="text"
        id="product_description"
        rows="4"
        col="50"
        placeholder="description"
        onChange={formik.handleChange}
        value={formik.values.product_description}
        required
      ></textarea>

      <input className="submit-input" type="submit" value="Submit" />
    </form>
  );
}
