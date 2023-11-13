import React from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/AdminPage";
import BestSeller from "../pages/BestSeller";
import GiftPage from "../pages/GiftPage";
import { Route, Routes } from "react-router-dom";

const PUBLIC_ROUTES = [
  { id: 1, link: "/", element: <HomePage /> },
  { id: 2, link: "/shop", element: <ProductPage /> },
  { id: 3, link: "/about", element: <AboutPage /> },
  { id: 4, link: "/cart", element: <CartPage /> },
  { id: 5, link: "/best", element: <BestSeller /> },
  { id: 6, link: "/gift", element: <GiftPage /> },
  { id: 7, link: "/admin", element: <AdminPage /> },
];

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
