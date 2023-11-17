import React from "react";
import ProductList from '../components/product/ProductList';
import Sidebar from "../components/product/Sidebar";

const ProductPage = () => {
  return <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{ width: '400px',height:'300px', flex: 'none' }}>
        {/* <CategorySelect /> */}
        <Sidebar/>
      </div>
    <ProductList/>
  </div>;
};

export default ProductPage;
