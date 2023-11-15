import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from './contexts/CartContextProvider';
import AuthContextProvider from './contexts/AuthContextProvider';
import { ThemeProvider } from "@emotion/react";
import { THEME } from "./helpers/consts";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<CartContextProvider>
 <AuthContextProvider>
  <ProductContextProvider>
    <ThemeProvider theme={THEME}>
    <App />
    </ThemeProvider>
  </ProductContextProvider>
 </AuthContextProvider>
</CartContextProvider>
</BrowserRouter>);
