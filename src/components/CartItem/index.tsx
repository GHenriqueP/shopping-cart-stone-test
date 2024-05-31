import Image from "next/image";
import React, { useContext } from "react";
import { RemoveShoppingCart, Add, Remove } from "@mui/icons-material";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "@/context/AppContext";
import { Product } from "@/services/ProductService";

const CartItem: React.FC<Product> = ({ id, image, price, title, quantity }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleIncreaseQuantity = () => {
    const newCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Number(item?.quantity || 1) + 1 }
        : item
    );
    setCartItems(newCartItems);
  };

  const handleDecreaseQuantity = () => {
    const newCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(Number(item?.quantity || 1) - 1, 1) }
        : item
    );
    setCartItems(newCartItems);
  };

  return (
    <section className="flex flex-col relative pb-1 mb-2 border-b-1 border-solid border-slate-200 last:border-b-0">
      <div className="flex">
        <Image
          src={image}
          alt={title}
          width={70}
          height={70}
          className="w-20 rounded-lg px-2 py-2 flex justify-center object-contain"
        />

        <div className="pr-8 pl-2 pt-2 flex-grow">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">{title}</h3>

          <div className="w-full flex gap-2 mb-2">
            <button
              type="button"
              className="text-gray-400 px-1 py-1/2 disabled:text-white"
              onClick={handleDecreaseQuantity}
              disabled={!!((quantity || 1) <= 1)}
            >
              <Remove sx={{ fontSize: 16 }} />
            </button>
            <div className="px-1 py-1/2">
              <span>{quantity || 1}</span>
            </div>
            <button
              type="button"
              className="text-gray-400 px-1 py-1/2"
              onClick={handleIncreaseQuantity}
            >
              <Add sx={{ fontSize: 16 }} />
            </button>
          </div>

          <h3 className="text-xl font-medium">
            {formatCurrency((quantity || 1) * price, "BRL")}
          </h3>

          <button
            type="button"
            className="absolute top-2 right-0 text-red-500 text-lg border-none cursor-pointer"
            onClick={handleRemoveItem}
          >
            <RemoveShoppingCart sx={{ fontSize: 25 }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
