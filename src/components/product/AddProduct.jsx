import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { Box, TextField,Typography,Button } from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";


const AddProduct = () => {
  const { addProduct, categories, getCategories } = useProducts();
  const [product, setProduct] = useState({
    title: '',
    image: '',
    category: '',
    description: '',
    price: 0,
  });
console.log(product);

  useEffect(() => {
    getCategories();
  }, []);


  const handleInput = (e) => {
    if (e.target.name === 'price') {
      const obj = { ...product, [e.target.name]: Number(e.target.value) } 
      setProduct(obj)
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj)
    }
  };
  return (
    <div sx={{ width: '50vw', height: 500, margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <h2>Add New Product</h2>
      <div className="container-for-form">
        <label>title</label>
        <TextField
        onChange={handleInput}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      /> 
       <label htmlFor="">image</label>
        <TextField
        onChange={handleInput}
        fullWidth
        name="image"
        label="Image URL"
        variant="outlined"
      /> 
      <label htmlFor="">category</label>
      <TextField
        onChange={handleInput}
        fullWidth
        name="category"
        label="Category"
        variant="outlined"
      /> 
      <label htmlFor="">description</label>
      <TextField
        onChange={handleInput}
        fullWidth
        name="description"
        label="Description"
        variant="outlined"
      /> 
      <label htmlFor="">price</label>
      <TextField
        onChange={handleInput}
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
      /> 
        
        <div className="container-for-btn">
          <button onClick={()=> addProduct(product)} fullWidth variant='outlined'>ADD</button>
        </div>
      </div>
    </div>
  );
};


export default AddProduct;
