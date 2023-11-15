import React, { useState } from "react";
import AddProduct from "../components/product/AddProduct";
import { Button } from "react-bootstrap";
import AddCategoryModal from '../components/product/AddCategoryModal';


const AdminPage = () => {
  const [open,setOpen]=React.useState(false)
  const handleOpen = ()=> setOpen(true)
  const handleClose = ()=> setOpen(false)
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add Category</Button>

     <AddProduct/>
     <AddCategoryModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
