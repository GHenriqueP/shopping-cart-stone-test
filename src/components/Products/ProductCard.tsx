import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import formatCurrency from "../../utils/formatCurrency";
import Image from "next/image";
import AppContext from "@/context/AppContext";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Remova a propriedade 'products' de ProductCardProps
interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { title, image, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <section className="relative w-full max-w-72 bg-white flex flex-col cursor-pointer mx-auto border-2 border-solid rounded-lg border-slate-50 hover:shadow-outline transition-transform transform hover:scale-105">
      <Image
        src={image}
        alt="product"
        className="w-40 h-40 px-5 py-5 flex justify-center"
        width={500} // Defina a largura da imagem
        height={500} // Defina a altura da imagem
      />
      <div className="py-5 px-8 border-t border-gray-50">
        <h2 className="text-2xl text-gray-800 font-semibold mb-2">
          {formatCurrency(price, "BRL")}
        </h2>
        <h2 className="card__title text-base text-gray-300 font-medium">
          {title}
        </h2>
      </div>
      <button
        type="button"
        className="absolute top-0 right-0 w-12 h-12 m-3 text-white flex items-center justify-center border-none rounded-full bg-green-800 bg-opacity-50 text-2xl cursor-pointer hover:bg-opacity-100"
        onClick={handleAddCart}
      >
        <AddShoppingCartIcon />
      </button>
    </section>
  );
};

export default ProductCard;
