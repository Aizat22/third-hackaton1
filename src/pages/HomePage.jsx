
import React from "react";
import Home from "../components/product/Home";
import Home2 from "../components/product/Home2";
import { Pagination } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
    <Home/>
    <Home2/>
    <Pagination/>
    </div>
  );
};

export default HomePage;
