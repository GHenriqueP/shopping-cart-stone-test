import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import formatCurrency from "../../utils/formatCurrency";
import Image from "next/image";
import AppContext from "@/context/AppContext";
import { Product } from "@/services/ProductService";

const ProductCard: React.FC<Product> = (data) => {
  const { title, image, price, id } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    const item = cartItems.filter((item) => item.id === id);

    if (item.length > 0) {
      const newCartItems = cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Number(item?.quantity || 1) + 1 }
          : item
      );
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, data]);
    }
  };

  return (
    <section className="relative w-full max-w-72 bg-white flex flex-col cursor-pointer mx-auto border-2 border-solid rounded-lg border-slate-50 hover:shadow-outline transition-transform transform hover:scale-105">
      <div className="w-full flex items-center justify-center">
        <Image
          src={image}
          alt="product"
          className="w-40 h-40 px-5 py-5 flex justify-center object-contain object-center"
          width={500}
          height={500}
        />
      </div>
      <div className="py-5 px-8 border-t border-gray-50">
        <h2 className="text-2xl text-gray-800 font-medium mb-2">
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
