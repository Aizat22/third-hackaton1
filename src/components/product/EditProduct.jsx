import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";


const EditProduct = () => {
  const { saveChanges, getOneProduct, oneProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    description: "",
    price: 0,
  });
  const { id } = useParams();


  useEffect(() => {
    getOneProduct(id);
  }, []);


  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);


  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  return (
    <div>
      <Box
        sx={{
          width: "50vw",
          height: 500,
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" align="center">
          EDIT PRODUCT
        </Typography>
        <TextField
          value={product.title}
          onChange={handleInput}
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
        />
        <TextField 
        value={product.image} 
        onChange={handleInput} 
        fullWidth name='image' 
        label="Image URL" 
        variant="outlined" />

        <TextField
          value={product.category}
          onChange={handleInput}
          fullWidth
          name="category"
          label="category"
          variant="outlined"
        />
        <TextField
          value={product.description}
          onChange={handleInput}
          fullWidth
          name="description"
          label="description"
          variant="outlined"
        />
        <TextField
          value={product.price}
          onChange={handleInput}
          fullWidth
          type="number"
          name="price"
          label="price"
          variant="outlined"
        />
        <Button
          onClick={() => saveChanges(id, product)}
          fullWidth
          variant="outlined"
        >
          SAVE CHANGES
        </Button>
      </Box>
    </div>
  );
};

export default EditProduct;
