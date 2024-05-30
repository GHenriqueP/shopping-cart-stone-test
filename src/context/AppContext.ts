"use client";

import { createContext, Dispatch, SetStateAction } from 'react';
import { Product } from '../services/ProductService';

export interface AppContextType {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>; 
  cartItems: Product[];
  setCartItems: Dispatch<SetStateAction<Product[]>>;
  searchValue: string; 
  setSearchValue: Dispatch<SetStateAction<string>>; 
}

export const AppContext = createContext<AppContextType>({
  products: [],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  searchValue: "", 
  setSearchValue: () => {}, 
});



export default AppContext;
