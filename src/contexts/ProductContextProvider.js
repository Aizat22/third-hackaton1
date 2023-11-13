import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
 

  //! CREATE
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  //! READ
  const getProducts = async () => {
    const result = await axios.get(`${API}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: result.data });
  };

  // ! DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };


  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
