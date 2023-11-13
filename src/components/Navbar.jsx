import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <ul className="container-for-navbar">
        <Link className="link" to={"/"}>
          <div className="cont-for-logo">
            <a href="" className="logo">
              Flower knowS
            </a>
          </div>
        </Link>
        <Link className="link" to={"/shop"}>
          <li>shop</li>
        </Link>
        <Link className="link" to={"/best"}>
          <li>best seller</li>
        </Link>
        <Link className="link" to={"/gift"}>
          <li>gift & set</li>
        </Link>
        <Link className="link" to={"/about"}>
          <li>about us</li>
        </Link>
        <Link className="link" to={"/admin"}>
          <li>admin</li>
        </Link>
        
      </ul>
    </div>
  );
};

export default Navbar;
