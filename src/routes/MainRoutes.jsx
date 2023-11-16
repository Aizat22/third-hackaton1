import React from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/AdminPage";
import BestSeller from "../pages/BestSeller";
import GiftPage from "../pages/GiftPage";
import { Navigate, Route, Routes } from "react-router-dom";
import EditPage from '../pages/EditPage'
import AuthPage from "../pages/AuthPage";
import { useAuth } from '../contexts/AuthContextProvider';
import { ADMIN } from '../helpers/consts';

const PUBLIC_ROUTES = [
  { id: 1, link: "/", element: <HomePage /> },
  { id: 2, link: "/shop", element: <ProductPage /> },
  { id: 3, link: "/about", element: <AboutPage /> },
  { id: 4, link: "/cart", element: <CartPage /> },
  { id: 5, link: "/best", element: <BestSeller /> },
  { id: 6, link: "/gift", element: <GiftPage /> },
  { id: 7, link: "/auth", element: <AuthPage /> },
  
];
const PRIVATE_ROUTES = [
  { id: 8, link: '/admin', element: <AdminPage /> },
  { id: 9, link: '/edit/:id', element: <EditPage /> },
];


const MainRoutes = () => {
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
        {user
        ? PRIVATE_ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                user.email === ADMIN ? item.element : <Navigate to="*" />
              }
            />
          ))
        : null}
        
    </Routes>
  );
};

export default MainRoutes;
