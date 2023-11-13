import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div>
      <h2>Add New Product</h2>
      <div className="container-for-form">
        <label>title</label>
        <input type="text" placeholder="enter the title of product" />
        <label htmlFor="">image</label>
        <input type="url" placeholder="enter the url of product" />
        <label htmlFor="">category</label>
        <input type="text" placeholder="enter the category of product" />
        <label htmlFor="">description</label>
        <input type="text" placeholder="enter the description of product" />
        <label htmlFor="">price</label>
        <input type="number" placeholder="enter the price of product" />
        <div className="container-for-btn">
          <button>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
