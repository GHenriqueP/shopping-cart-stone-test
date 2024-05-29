import { createContext, Dispatch, SetStateAction } from 'react';
import { Product } from '../api/fetchProducts';

interface AppContextType {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  cartItems: Product[];
  setCartItems: Dispatch<SetStateAction<Product[]>>;
}

const AppContext = createContext<AppContextType>({
  products: [],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
  cartItems: [],
  setCartItems: () => {},
});

export default AppContext;
