"use client";

import React, { useState, ReactNode } from "react";
import AppContext from "./AppContext";
import { Product } from "../api/fetchProducts";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
