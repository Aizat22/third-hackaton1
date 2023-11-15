import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { Box, TextField,Typography,Button } from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
import CategorySelect from './CategorySelect';


const AddProduct = () => {
  const { addProduct, categories, getCategories } = useProducts();
  const [product, setProduct] = useState({
    title: '',
    image: '',
    category: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    getCategories();
  }, []);


  const handleInput = (e) => {
    if (e.target.name === 'price') {
      setProduct({ ...product, [e.target.name]: Number(e.target.value) })  
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
      
    }
  };
  return (
    <div sx={{ width: '50vw', height: 500, margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <h2>Add New Product</h2>
      <div className="container-for-form">
        <label>title</label>
        <input type="text"  variant='outlined' onChange={handleInput} placeholder="enter the title of product" />
        <label htmlFor="">image</label>
        <input type="url"  variant='outlined'  onChange={handleInput} placeholder="enter the url of product" />
        <label htmlFor="">category</label>
        <input type="text" variant='outlined'  handleInput={handleInput} categories={categories} placeholder="enter the category of product" />
         {/* <CategorySelect handleInput={handleInput} categories={categories} /> */}
        <label htmlFor="">description</label>
        <input type="text"  variant='outlined'  onChange={handleInput}placeholder="enter the description of product" />
        <label htmlFor="">price</label>
        <input type="number" variant='outlined'  onChange={handleInput} placeholder="enter the price of product" />
        <div className="container-for-btn">
          <button onClick={()=> addProduct(product)} fullWidth variant='outlined'>ADD</button>
        </div>
      </div>
    </div>
  );
};


export default AddProduct;
